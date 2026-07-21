# Presenter notes - Leader session 6: International transfers

**Session goal (one line).** Make clear that moving EU data to a Singapore server is a regulated transfer with no adequacy shortcut, and that the SG path is always SCCs + a transfer impact assessment + measures.

## Run of show (45 min)

- 0-3 - Welcome. Frame it as the session that matters most to a SG company - it is about the thing you do every day, moving EU data to servers outside the EU.

- 3-20 - Concepts. Part 1 (9 min): the three mechanisms (adequacy Art 45, safeguards/SCCs Art 46, derogations Art 49), why SG lands on SCCs, what Schrems II added (TIA + supplementary measures), and the PDPA Transfer Limitation contrast (self-study). Part 2 (7 min): the transfer decision and knowing where your EU data physically sits.

- 20-40 - Exercises. Exercise 1 (12 min): map your cross-border flows, name a mechanism for each. Exercise 2 (8 min): the SCCs readiness check, four questions.

- 40-45 - Q&A, the five DPO/engineering questions, and the warm handoff to the practitioner track.

## Preflight

- Open a6-transfers.html, Expand all, test Projector zoom.

- Have the three-mechanisms SVG and the transfer-decision flow SVG ready.

- Confirm the current line: Singapore has no EU adequacy decision (verify before teaching, adequacy status changes).

## Never-cut beats

- Singapore is not on the EU adequacy list, so EU-to-SG data rides on SCCs - the adequacy door is closed.

- Schrems II: signing SCCs is not enough - you must assess the destination's law and add supplementary measures, especially strong encryption.

- Sub-processors count - your analytics vendor, your support tool's servers are each transfers you are responsible for.

## Cuts if running long

- Drop the PDPA Transfer Limitation self-study card.

- Trim exercise 2 to the first two questions (do we have SCCs; have we done a TIA).

## Quiz answers

1. B - Standard Contractual Clauses plus a transfer impact assessment; no adequacy means SCCs (Art 46) are the workhorse, and post-Schrems II they need a TIA and measures.

2. C - Signing SCCs is not enough - you must assess the destination country's law and add supplementary measures where it falls short.

3. A - The PDPA's rule is outcome-based: the recipient must provide comparable protection, usually by contract, rather than the GDPR's prescriptive lists.

## Common questions + crisp answers

- "Can we just get consent for the transfer instead?" Derogations like explicit consent are narrow one-offs, not a foundation for routine, ongoing transfers - do not build a data pipeline on them.

- "Is there a simpler fix than SCCs plus a TIA?" Sometimes - keeping EU customer data in an EU cloud region removes the transfer entirely for that data. The practitioner track (b6) weighs this.

- "Who signs the SCCs?" For a SG company receiving EU data, your EU customers are the exporters and you are the importer; many put the SCCs inside the Article 28 DPA.

## Compliance caution

Educational, not legal advice. Adequacy status and the standard clauses change - verify the current position and get proper advice before relying on any transfer mechanism.
