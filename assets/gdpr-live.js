/* gdpr-live.js - the in-browser GDPR checker for learn-gdpr-with-phoebe.
 *
 * Two modes:
 *   1. "Does GDPR apply?" - the Article 3 territorial-scope test (does the GDPR reach an
 *      organisation, including one based outside the EU such as a Singapore company).
 *   2. "Which lawful basis?" - given a processing purpose, the likely Article 6(1) basis + caveat.
 *
 * EDUCATIONAL, NOT LEGAL ADVICE. A teaching model of Articles 3 and 6 - always read the GDPR text
 * and get proper advice for a real situation.
 *
 * Usage:  <div class="gdprbox" data-mode="apply|basis" data-caption="..."></div>
 * No dependencies.
 */
(function () {
  "use strict";
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  /* ---- Mode 1: Article 3 applicability ---- */
  var APPLY_FIELDS = [
    { key: "established", label: "Are you established in the EU (an office, branch, or stable arrangement)?",
      opts: [["no", "No"], ["yes", "Yes"]] },
    { key: "offer", label: "Do you offer goods or services to people who are in the EU (even for free)?",
      opts: [["no", "No"], ["yes", "Yes"]] },
    { key: "monitor", label: "Do you monitor the behaviour of people who are in the EU (tracking, profiling, analytics)?",
      opts: [["no", "No"], ["yes", "Yes"]] }
  ];
  function applyRule(v) {
    if (v.established === "yes")
      return { ok: true, rule: "Art 3(1)", verdict: "GDPR applies",
        why: "You are established in the EU, so the GDPR applies to your processing regardless of where it happens. (A Singapore company with an EU office is caught here.)" };
    if (v.offer === "yes")
      return { ok: true, rule: "Art 3(2)(a)", verdict: "GDPR applies",
        why: "Even with no EU establishment, offering goods or services to people in the EU brings you into scope. A Singapore business selling to EU customers is caught - you may also need an EU representative (Art 27)." };
    if (v.monitor === "yes")
      return { ok: true, rule: "Art 3(2)(b)", verdict: "GDPR applies",
        why: "Monitoring the behaviour of people in the EU (tracking, profiling, analytics on EU visitors) brings you into scope even with no EU establishment." };
    return { ok: false, rule: "Art 3", verdict: "GDPR likely does not apply",
      why: "None of the three Article 3 triggers are met. Note: your own local law still applies (for a Singapore org, the PDPA), and this can change the moment you start serving or tracking people in the EU." };
  }

  /* ---- Mode 2: Article 6 lawful basis ---- */
  var PURPOSES = [
    ["contract_person", "Deliver a product or service the person asked for"],
    ["marketing", "Send marketing to consumers"],
    ["legal", "Comply with a legal obligation (e.g. tax, AML records)"],
    ["legitimate", "A genuine business need - fraud prevention, network security, basic analytics"],
    ["vital", "Protect someone's life or physical safety"],
    ["public", "Carry out an official / public-interest task"],
    ["special", "Process health, biometric, religion, or other special-category data"]
  ];
  var BASIS = {
    contract_person: { rule: "Art 6(1)(b)", name: "Contract",
      why: "Processing necessary to perform a contract with the person (or to take steps at their request before entering one). No separate consent needed for what the service actually requires." },
    marketing: { rule: "Art 6(1)(a)", name: "Consent",
      why: "Consumer marketing usually relies on consent - which must be freely given, specific, informed, and unambiguous (a clear opt-in, not a pre-ticked box), and as easy to withdraw as to give (Art 7)." },
    legal: { rule: "Art 6(1)(c)", name: "Legal obligation",
      why: "Processing necessary to comply with a legal obligation you are under. Point to the specific law; you cannot use this for something merely useful." },
    legitimate: { rule: "Art 6(1)(f)", name: "Legitimate interests",
      why: "A flexible basis for genuine business needs, but you must run and document a Legitimate Interests Assessment (LIA): identify the interest, show the processing is necessary, and balance it against the person's rights. Not available to public authorities for their tasks." },
    vital: { rule: "Art 6(1)(d)", name: "Vital interests",
      why: "Processing necessary to protect someone's life. Narrow - generally only where the person cannot give consent (e.g. a medical emergency)." },
    public: { rule: "Art 6(1)(e)", name: "Public task",
      why: "Processing necessary for a task in the public interest or official authority vested in you. Mainly for public bodies." },
    special: { rule: "Art 9", name: "Needs an Article 9 condition TOO",
      why: "Special-category data (health, biometrics, race, religion, etc.) is prohibited unless an Article 9 exception applies (e.g. explicit consent, employment law, substantial public interest) - ON TOP of a lawful basis under Article 6." }
  };
  function basisRule(purpose) {
    var b = BASIS[purpose];
    return { ok: purpose !== "special", rule: b.rule, verdict: b.name, why: b.why, special: purpose === "special" };
  }

  function wire(box) {
    var mode = box.getAttribute("data-mode") || "apply";
    var caption = box.getAttribute("data-caption") || "";
    box.innerHTML = "";
    var bar = document.createElement("div"); bar.className = "gd-bar";
    bar.innerHTML = '<span class="gd-dot"></span><span class="gd-title">GDPR checker</span>' +
      '<span class="gd-tag">' + (mode === "basis" ? "lawful basis &middot; Art 6" : "territorial scope &middot; Art 3") + "</span>";
    box.appendChild(bar);

    var out = document.createElement("div"); out.className = "gd-out";
    var state = {};

    if (mode === "basis") {
      var wrap = document.createElement("label"); wrap.className = "gd-field";
      wrap.innerHTML = '<span class="gd-flabel">What are you trying to do with personal data?</span>';
      var sel = document.createElement("select"); sel.className = "gd-select";
      PURPOSES.forEach(function (o) { var op = document.createElement("option"); op.value = o[0]; op.textContent = o[1]; sel.appendChild(op); });
      sel.addEventListener("change", function () { state.purpose = sel.value; render(); });
      wrap.appendChild(sel);
      var grid = document.createElement("div"); grid.className = "gd-grid"; grid.appendChild(wrap);
      box.appendChild(grid);
      state.purpose = PURPOSES[0][0];
    } else {
      var grid2 = document.createElement("div"); grid2.className = "gd-grid";
      APPLY_FIELDS.forEach(function (f) {
        var w = document.createElement("label"); w.className = "gd-field";
        w.innerHTML = '<span class="gd-flabel">' + esc(f.label) + "</span>";
        var s = document.createElement("select"); s.className = "gd-select";
        f.opts.forEach(function (o) { var op = document.createElement("option"); op.value = o[0]; op.textContent = o[1]; s.appendChild(op); });
        s.addEventListener("change", function () { state[f.key] = s.value; render(); });
        w.appendChild(s); grid2.appendChild(w);
        state[f.key] = f.opts[0][0];
      });
      box.appendChild(grid2);
    }
    box.appendChild(out);
    var note = document.createElement("div"); note.className = "gd-note";
    note.textContent = "Educational model of Articles 3 and 6 - not legal advice. Read the GDPR text and get advice for real cases.";
    box.appendChild(note);
    if (caption) { var c = document.createElement("div"); c.className = "gd-cap"; c.textContent = caption; box.appendChild(c); }

    function render() {
      var r = mode === "basis" ? basisRule(state.purpose) : applyRule(state);
      var cls = r.ok ? "gd-ok" : (mode === "basis" ? "gd-warn" : "gd-bad");
      var badge = mode === "basis" ? (r.special ? "!" : "✓") : (r.ok ? "✓" : "-");
      out.innerHTML = '<div class="gd-verdict ' + cls + '"><span class="gd-badge">' + badge + "</span>" +
        '<div><b>' + esc(r.verdict) + '</b> <span class="gd-rule">' + esc(r.rule) + "</span>" +
        '<p>' + esc(r.why) + "</p></div></div>";
    }
    render();
  }

  function init() { Array.prototype.slice.call(document.querySelectorAll(".gdprbox")).forEach(wire); }
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", init); } else { init(); }
})();
