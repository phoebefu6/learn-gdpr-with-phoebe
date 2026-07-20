# learn-gdpr-with-phoebe - official course map

**What this is:** the coverage contract. Maps each session to its GDPR sources, marks coverage
(✓/◐/-), lists the verified facts pages may state. Built 2026-07-19.

**Hard honesty banner (every page):** *Educational, not legal advice. The GDPR is Regulation (EU)
2016/679, enforced by EU supervisory authorities and shaped by case law - verify against the
Regulation text and your data protection authority, and get proper advice before acting.*

**Course shape:** two tracks, 14 sessions, gov bucket, tier 2. EU blue + gold, editorial-bold.
- **Leader track** (a1-a6): scope, principles + bases, rights, roles/accountability, breach + penalties, transfers.
- **Practitioner track** (b1-b8): applicability checker, lawful basis, notices, DSAR, records + DPIA, transfers, breach, program.

**Angle:** GDPR taught for a Singapore/APAC org - when it reaches you and how each concept maps to /
differs from the PDPA. **Running case:** Lumina, a Singapore SaaS with EU customers (caught by GDPR
Art 3(2) with no EU office).

**Interactive:** `gdpr-live.js` - two-mode checker. (1) Article 3 applicability: three yes/no
inputs -> does GDPR apply + which limb. (2) Article 6 lawful basis: pick a purpose -> the likely
basis + caveat. Validated 4/4 on applicability. Reusable for rules-based compliance courses.

---

## Coverage

### Leader track
| Session | Teaches | Sources | Cover |
|---|---|---|---|
| a1 · Why GDPR reaches you | Art 3 territorial scope (3 triggers), the extraterritorial catch, PDPA contrast | Art 3; GDPR-vs-PDPA | ✓ |
| a2 · Principles + bases | The 7 principles (Art 5), the 6 lawful bases (Art 6), consent standard | Art 5, 6, 7, 4(11) | ✓ |
| a3 · Rights vs PDPA | Data-subject rights (Art 12-22), the 1-month clock, PDPA gaps | Art 12-22; contrast | ✓ |
| a4 · Roles + accountability | Controller/processor, Art 28 contract, DPO (Art 37), DPIA (Art 35) | Art 4, 28, 30, 35, 37 | ✓ |
| a5 · Breach + penalties | 72-hour rule (Art 33/34), two-tier fines (Art 83), real cases | Art 33, 34, 83 | ✓ |
| a6 · Transfers | Adequacy, SCCs, derogations, Schrems II, PDPA contrast | Art 44-49; EDPB 01/2020 | ◐ (Schrems II via secondary) |

### Practitioner track
| Session | Teaches | Sources | Cover |
|---|---|---|---|
| b1 · Does GDPR apply? | The Art 3 checker, when a SG org is in scope | Art 3; the checker | ✓ |
| b2 · Lawful basis | Choosing + documenting a basis, consent vs LI, the LIA | Art 6, 7 | ✓ |
| b3 · Privacy notices | What Art 13/14 require, when, how | Art 13, 14 | ✓ |
| b4 · DSAR | Access request end to end, 1-month + 2-month extension, refusals | Art 12, 15 | ✓ |
| b5 · Records + DPIA | Art 30 records + the 250-employee carve-outs, DPIA triggers | Art 30, 35 | ✓ |
| b6 · Transfers in practice | SCCs, transfer impact assessment, supplementary measures | Art 46; EDPB 01/2020 | ◐ (TIA process concept-level) |
| b7 · Breach response | The 72-hour clock, the two notification thresholds | Art 33, 34 | ✓ |
| b8 · GDPR program + PDPA | The compliance artifacts + running GDPR & PDPA together | Art 5(2), 30; contrast | ◐ (harmonization framing ours) |

---

## Verified facts the pages may state (with articles)

**Territorial scope (Art 3)** - the 3 triggers:
- Art 3(1): established in the EU -> applies regardless of where processing happens.
- Art 3(2)(a): not established in EU, but offering goods/services to people IN the EU (payment not required).
- Art 3(2)(b): not established in EU, but monitoring behaviour of people IN the EU.
- The test hinges on the data subject being physically in the Union, not nationality/residence. A non-EU org with no EU office is caught by (a) or (b). (Art 3(3): public-international-law cases - minor.)

**The 7 principles (Art 5)**: lawfulness/fairness/transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity & confidentiality; accountability (5(2) - must be able to DEMONSTRATE compliance).

**The 6 lawful bases (Art 6(1))**: consent (a); contract (b); legal obligation (c); vital interests (d); public task (e); legitimate interests (f). At least one must apply. Consent is just one - unlike PDPA's consent-first model.
- Consent standard (Art 4(11) definition + Art 7): freely given, specific, informed, unambiguous; must be demonstrable; as easy to withdraw as to give; withdrawal not retroactive.
- Legitimate interests (6(1)(f)) is the only basis with a built-in "except where overridden" clause -> needs a balancing test (documented as a Legitimate Interests Assessment / LIA). NOTE: "LIA" is the ICO/EDPB method name, not statutory wording.
- Special-category data (Art 9): prohibited unless an Art 9(2) condition applies (explicit consent, employment law, substantial public interest, etc.) - needed ON TOP of an Art 6 basis.

**Data-subject rights (Art 12-22)**: informed (13/14), access (15), rectification (16), erasure/"right to be forgotten" (17), restriction (18), portability (20), object (21), automated decisions (22).
- Response timeline (Art 12(3)): without undue delay and within ONE MONTH; extendable by up to TWO further months for complex/numerous requests (3 months max), with notice in the first month.

**Roles + accountability**:
- Controller (Art 4(7)) determines purposes and means; processor (Art 4(8)) processes on the controller's behalf. Art 28 requires a binding written contract (DPA) with prescribed terms.
- Records of processing (Art 30): controllers AND processors keep them. The under-250-employees exemption (Art 30(5)) falls away if processing is likely to risk rights, is NOT occasional, or includes special-category/criminal data - so it rarely helps a real business.
- DPO mandatory (Art 37(1)) only if: public authority; core activity = large-scale regular/systematic monitoring; or core activity = large-scale special-category/criminal data. (Contrast: PDPA requires a DPO for EVERY org.)
- DPIA (Art 35) required for high-risk processing; mandatory examples: systematic extensive profiling with legal/significant effects; large-scale special-category/criminal data; large-scale systematic monitoring of a public area.

**Breach (Art 33/34)**:
- To the supervisory authority: without undue delay and where feasible NOT later than 72 HOURS after becoming aware, unless unlikely to result in a risk. Late = give reasons.
- To individuals: without undue delay when likely to result in a HIGH risk (exceptions: encryption, measures that remove the risk, disproportionate effort).
- Two thresholds: ANY risk -> authority; HIGH risk -> also individuals.

**Penalties (Art 83)** - two tiers, whichever is HIGHER:
- Lower (83(4)): up to EUR 10 million or 2% of total worldwide annual turnover. Covers Art 25-39 duties (records, security, breach, DPIA, DPO), etc.
- Upper (83(5)): up to EUR 20 million or 4% of total worldwide annual turnover. Covers Art 5/6/7/9 (principles, bases, consent), Art 12-22 (rights), Art 44-49 (transfers), and ignoring an authority order.
- Real fines: Meta EUR 1.2 billion (Irish DPC, 2023, unlawful EU->US transfers, largest to date); Amazon EUR 746 million (Luxembourg CNPD, 2021).

**Transfers (Chapter V, Art 44-49)**:
- Adequacy decision (Art 45): Commission deems a country's protection essentially equivalent -> no extra authorisation.
- Appropriate safeguards (Art 46): SCCs, Binding Corporate Rules (Art 47), codes/certification. Some need authority authorisation.
- Derogations (Art 49): narrow one-offs - explicit consent, contract performance, legal claims, vital interests, public register.
- Post-Schrems II (CJEU, 16 Jul 2020, invalidated Privacy Shield): relying on SCCs requires a Transfer Impact Assessment of the destination country's law + supplementary measures (esp. strong encryption). EDPB Recommendations 01/2020.

---

## GDPR vs PDPA (the contrast spine)

| Dimension | GDPR | PDPA |
|---|---|---|
| Scope | Reaches non-EU orgs targeting/monitoring people IN the EU (Art 3(2)) | Anchored to data activity in Singapore; narrower extraterritorial reach |
| Lawful basis | 6 co-equal bases; consent is one | Consent-first + deemed consent + exceptions (incl. legitimate interests, 2020) |
| Rights | Broad: access, rectification, erasure, portability, restriction, object, automated-decision | Access + correction only (portability legislated, NOT in force) |
| Breach | 72h to authority from awareness; high risk -> individuals | Assess ~30 days -> notify PDPC within 3 days; threshold 500+ or significant harm |
| Penalty | EUR 20M or 4% of GLOBAL turnover | S$1M or 10% of SINGAPORE turnover |
| DPO | Mandatory only in defined cases (Art 37) | Mandatory for EVERY org |
| Transfers | Adequacy / SCCs / derogations (prescriptive) | Comparable-protection standard (outcome-based) |

**GDPR rights with NO PDPA equivalent:** erasure (Art 17), restriction (Art 18), object (Art 21), automated-decision (Art 22), and portability (Art 20, legislated in PDPA but not in force). PDPA marketing is instead governed by the separate Do Not Call provisions (see learn-pdpa-dnc-with-phoebe).

**When BOTH apply:** a Singapore SaaS/e-commerce/fintech with EU customers, or a SG org with an EU branch. Must satisfy both regimes: a GDPR lawful basis AND PDPA consent/exception; both breach clocks; the stricter transfer + DPO rules of each.

---

## Not covered by design (say so)

- Legal advice / a specific real situation - out of scope; get advice.
- Member-State-specific derogations and national implementing laws.
- ePrivacy Directive / cookie-consent specifics (adjacent, not GDPR proper) - mentioned only.
- The full Art 9(2) / Art 49 enumerations - summarised, not reproduced.

## Re-verify before delivery

1. **PDPA extraterritoriality** is narrower and less settled than GDPR Art 3 - teach it as "PDPA reaches overseas orgs via data activity connected to Singapore, NOT a GDPR-style targeting test". Confirm against PDPC Advisory Guidelines before publishing.
2. **"LIA"** is the regulator (ICO/EDPB) method name; the balancing requirement is statutory (Art 6(1)(f)) but the acronym is not.
3. Adequacy status and SCC versions change - re-verify current EU adequacy list + the latest SCCs at delivery.

## Sources (verified 2026-07-19)

GDPR text via gdpr-info.eu (Regulation (EU) 2016/679): Art 3, 4, 5, 6, 7, 9, 12-22, 28, 30, 33, 34, 35, 37, 44-49, 83. EDPB Recommendations 01/2020 (supplementary measures / Schrems II). Real fines: Meta (Irish DPC 2023), Amazon (Luxembourg CNPD 2021). PDPA contrast via PDPC + IAPP/FPF/law-firm summaries (flagged where secondary).
