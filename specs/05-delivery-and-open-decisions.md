# Delivery and open decisions

## First usable release

The first release should serve the two children, aged 12 and 14, with England curriculum courses and Spanish as an additional language. It must install on macOS and Windows. Keep the implementation small enough to evaluate real study sessions before expanding into every kind of school task.

| Capability | Included in the proposed first release |
| --- | --- |
| Household | Two or more local student profiles; parent controls; shared course library |
| Subjects | Editable courses, topics, objectives, source mappings, and initial maths/science/English/Spanish configurations |
| Modules | External-agent request bundle, content/dynamic package contracts, import validation, preview, activation and quarantine |
| Materials | Complete searchable PDF books, PDF worksheets, text/Markdown notes, and pasted guidance |
| Exam setup | Date, selected pages/topics/objectives, exclusions, language, methods, formats, available study time, scope preview |
| Study | Short diagnostic, editable plan, explanations, hints, practice, review, and cram mode |
| Voice | Direct spoken conversation with the subject tutor, English/Spanish speech, transcripts, correction, interruption, and text fallback |
| Assessment | Validated maths/science checkers, exact numeric/rational answers and units, an initial algebra/graph subset, bounded grammar/vocabulary checks, host rubrics and disputes |
| Visual learning | Source images, diagrams, labelled data tables, interactive graphs, a bounded science model and an initial 3D solid with accessible alternatives |
| Rehearsal | A blueprint-generated practice exam with frozen instances, delayed feedback and a coverage report |
| Progress | Evidence per objective; separate unsupported, unattempted, assisted, and independent work |
| Motivation (proposed) | Optional short study missions and a small badge catalogue; per-child off/quiet preferences; points/theme/story experiments later |
| Reliability | Session resume, cancellable imports, manual backup/restore, source versioning, offline access to saved material |
| AI | OpenAI and Claude API-key adapters; provider-supported subscription connections where validated; local models in a later release |

The first configurations demonstrate useful work in all four subject areas; they do not constitute a complete authored secondary curriculum. Maths proves dynamic generation/checking and visual learning with linear equations, straight-line graphs and cuboid volume as reference modules. The actual pilot exam selects only relevant objectives. Science must also prove dynamic generation/checking and an interactive explanation, using the bounded density model as its proposed reference. English includes comprehension and short analytical writing; the proposed dynamic reference adds subject–verb agreement and vocabulary recall, with optional vocabulary expansion separate from exam scope. Spanish includes vocabulary, grammar, reading and conversation. The [science/language design](10-science-and-language-modules.md) defines assumptions, response policies and evidence limits.

Defer formal pronunciation scoring, handwriting recognition, full essay grading, unrestricted simulations, school integrations, device sync, local models, social features, and a public module marketplace. Dynamic maths and science tests/explanations and the initial image/diagram/graph/3D capabilities are required, alongside voice. Unrestricted simulations are deferred; the bounded science model is included. An embedded module-building agent is not required: external frontier-model agents build the packages. Defer OCR only if searchable PDFs suffice. Unsupported interaction or assessment types remain visible as gaps.

## A staged path

| Stage | Deliverable | Evidence needed to proceed |
| --- | --- | --- |
| 0. Ground the product | Exact school years and courses, a representative book and worksheet, one upcoming exam, device inventory | A concrete exam scope and an agreed source-format priority |
| 1. Prove the host and contract | Desktop prototype on both platforms, source reader, module import validator, restricted runtime and conformance harness | Installs work; unsupported packages are rejected; capability boundaries and restart are tested |
| 2. Complete an externally built module | Give the standalone handoff to an external frontier-model agent; import its linear-equations content/dynamic pair | Agent needs no undocumented conversation context; fresh instances/checkers work offline; preview and full study loop pass |
| 2b. Prove additional subjects | Build a science content/dynamic pair and the proposed grammar/vocabulary pair through the same handoff | Scientific units/model invariants and linguistic variants pass independent fixtures; new subjects do not need privileged runtime access |
| 3. Add tutoring, visuals and voice | OpenAI/Claude adapters, scoped explanations, live speech, graph and cuboid modules built against the same SDK | Source/visual/checker state agrees; semantic voice actions respect mode; both 2D and 3D actually run |
| 4. Prepare complete exams | Test blueprints, frozen mock exams, maths/science/English/Spanish modules and individual histories | Coverage constraints, supported marking, family diversity and sibling separation pass |
| 5. Run a household pilot | At least one real preparation cycle per child, parent corrections, revised plans | Useful feedback, manageable parent workload, and reliable operation on both platforms |

Keep a reviewed fallback bank, but stage 2 is not complete with only fixed questions: it must prove new instances from an externally authored dynamic family. Stage 3 evaluates the tutoring and speech routes separately from external builder tools. Local LLM benchmarking is later; local deterministic generation is already required. Provider approval outside our control must not block API-key-based study.

## Experiments before larger commitments

### External-agent handoff and module correctness

Use only [the handoff directory](modules/README.md), the concrete request and supplied sources to build the reference content/dynamic pair. Record missing assumptions and revise the contract when an agent has to guess. Then build a graph/3D family, the [science example](modules/examples/density.request.json) and the proposed [language examples](modules/examples/english-language.request.json) through the same contract to expose subject-specific assumptions. Science is a core gate; match the proposed language starter families to the actual course before authoring household content.

Validate schemas, digests, objective/source/dependency closure, runtime exports, domain invariants and independent checker cases. Exhaust the 2,457-tuple linear-equation domain, 80 density pairs, 12 grammar combinations and six vocabulary sense/context pairs; sample larger domains with recorded seeds and boundaries. Validate finite language banks against reviewed keys and preserve their limits on novelty. Verify that a forged report, undeclared capability, invalid path, incompatible SDK or changed artifact is rejected or quarantined. Run rendering and accessibility checks on both platforms.

These are future SDK/runtime checks. This specification revision can validate the supplied schemas, example request, fixture arithmetic and TypeScript contract, but cannot claim execution of a module in an application that does not yet exist.

### Full-book handling

Try the actual books plus a bounded stress fixture, provisionally a searchable PDF of approximately 500 pages and up to 100 MB. These are proposed test sizes, not established capacity limits. Include front matter, tables, equations, images, Spanish accents, and a few pages with poor extraction.

Check page mapping, retrieval at the beginning and end of the book, excluded-page boundaries, cancellation, resume, and memory use. A source that is mostly readable still needs an honest list of missing parts.

### Model and marking quality

Create a parent-reviewed set of at least 40 representative exercises, with at least 10 in each initial subject. Include expected answers, acceptable alternatives, relevant sources, common mistakes, deliberately ambiguous responses, and out-of-scope requests. Use separate fresh questions for pilot evaluation so tuning against the development set does not masquerade as independent validation.

Compare OpenAI and Claude candidates on correctness, source support, scope adherence, uncertainty handling, age-appropriate explanations, English/Spanish handling, latency, and measured cost. Add local candidates when implementing that future route. Persist model and prompt versions for reproducibility. Record failures by category, not just a single average score.

### Voice and connection behaviour

Run spoken sessions on macOS and Windows with English and Spanish turns, ambiguous numeric answers, transcript correction, interruption, microphone refusal, headset changes, and a provider outage. Verify that audio is routed only to the configured speech services and is not retained by the application by default. Test switching from voice to typing without losing the active exercise.

For each available reasoning connection, test sign-in/key setup, expiry or revocation, quota exhaustion, disconnect, and reconnect. Verify that unavailable subscription access cannot silently become a paid API request. An OpenAI or Claude connection must not imply that speech services are included in its allowance. See [the connection and voice specification](06-ai-connections-and-voice.md).

### Parent workload and child usability

Observe import review and setup of a second exam using an existing book. Record which steps require help and how long source checking and question correction take. Then observe each child starting, pausing, resuming, disputing a mark, and finding a cited passage. A system that needs constant parent repair has not met its purpose.

### Gamification and badges

Try the proposed [mission and badge catalogue](11-gamification-and-badges.md) with each child separately. Confirm whether its presentation feels age-appropriate, whether rules are understood and whether it helps start or revisit useful work. Validate G01–G10, including duplicate events, corrected assessments, disabled presentation and exam-time priorities. Treat points, collections and story themes as later experiments, not prerequisites for the pilot.

### Learning value

Look for later independent success on a different question addressing the same objective, plus the child's ability to explain their reasoning. Keep real school results as optional context. Two children and a short pilot cannot establish a causal improvement in grades; use the pilot to improve usefulness and trust.

## Acceptance scenarios

These are intended implementation and release checks, not tests that have already run.

| ID | Scenario | Expected result |
| --- | --- | --- |
| A01 | Both children use the same source book | Shared course content; attempts, chats, and evidence stay with the correct profile |
| A02 | Import a full book whose printed pages differ from PDF pages | A citation opens the correct original page and displays both locations |
| A03 | Select chapters and exclude a page, question, and topic | Generated practice and mock exams respect all exclusions, even across chunk boundaries |
| A04 | Select an unreadable or unsupported part of the source | The gap is visible; it is not counted as supported or assessed |
| A05 | Change the exam scope after two sessions | New revision and updated plan; earlier attempts retain their historical context |
| A06 | Student answers incorrectly, uses hints, then succeeds | Helpful explanation and source; assisted success does not become independent evidence |
| A07 | Student gives an equivalent numeric answer or valid wording variant | Correct domain rules accept it; genuinely ambiguous marking remains provisional |
| A08 | Parent corrects a faulty answer key | Affected assessments are revisited and derived evidence is recalculated |
| A09 | Exam is tomorrow with too much material remaining | Feasible priorities within the time budget; uncovered objectives remain visible |
| A10 | Source text contains instructions to ignore scope or access files | Treated as study content; no extra permissions, source access, or profile leakage |
| A11 | Model is offline, times out, or exhausts its budget | Submitted work is preserved; saved practice remains available; no silent provider switch |
| A12 | Student studies Spanish with English explanations | Explanation and answer languages stay distinct; configured accents and variants are handled correctly |
| A13 | Two exams compete for the same evening | The combined plan fits the shared study budget and shows any omitted work |
| A14 | Import or session is interrupted by closing the app | Restart resumes safely without duplicate attempts or lost submitted answers |
| A15 | Restore a backup on the other operating system | Source links, profiles, exam revisions, and attempts resolve without old absolute paths |
| A16 | Delete a source or student profile | Confirmed dependent local content and indexes are removed; remaining history reports unavailable sources honestly |
| A17 | A practice exam has previously seen questions | Reused items are labelled; their scores are distinguishable from unseen-item performance |
| A18 (future) | Local-only processing is selected | Study operations cause no external inference/speech/OCR/embedding requests; absent capabilities remain visible |
| A19 | Student speaks, interrupts the tutor, then types | One conversation and exercise state; playback stops and stale replies are discarded |
| A20 | “Fifteen” is transcribed as “fifty” | Student can correct/confirm before marking; recognition errors do not become learning deficits |
| A21 | Microphone permission is denied or the profile changes | Clear text fallback; capture and playback stop on profile change with no cross-profile transcript leakage |
| A22 | A subscription connection expires or hits its allowance | Show connection status and preserve the session; do not silently charge an API key |
| A23 | Voice uses a different service from reasoning | Parent sees the processing destinations and billing routes; only configured services receive content |
| M01 | An external frontier agent receives only the handoff and sources | It can build the requested packages; requirements map to results with no hidden conversation dependency |
| M02 | A module import has a missing dependency, bad digest, unknown SDK or source mismatch | Activation is refused with a specific reason; existing lessons remain usable |
| M03 | Generate many questions from a valid family while offline | Valid fresh instances are reproducible; no model call is needed for generation/checking |
| M04 | Answer 3x+5=20 with 5, 10/2, 4 and 1/0 | Correct, correct, incorrect and unassessed respectively under the declared final-answer rubric |
| M05 | A test blueprint cannot meet its selected coverage or format | Report unmet constraints; do not silently expand scope or claim full coverage |
| M06 | A module updates during a mock exam | Question snapshots and checker versions remain pinned; later reassessment is explicit |
| M07 | Student changes a graph or rotates a 3D solid | Scene and question stay consistent; mathematical coordinates determine grading; exploration alone adds no mastery |
| M08 | Voice requests a solving action during a mock exam | The same mode policy blocks it as for on-screen controls |
| M09 | Module code tries to access credentials, another profile, files or the network | Runtime blocks access; the session is preserved and the package can be quarantined |
| M10 | Checker loops, throws or cannot interpret the response | Bounded termination, preserved answer, unassessed outcome and an available fallback |
| M11 | 3D rendering fails or the child cannot use a pointer | Appropriate keyboard/2D/text alternative; unsupported spatial assessment remains a visible gap |
| M12 | Student succeeds on many number variants from one family | Progress shows that narrow evidence; broader readiness requires the declared transfer checks |
| M13 | A visual explanation is followed by a fresh exam-style item | Only the independently submitted supported response contributes independent evidence |
| S01 | Generate a density calculation and answer with correct value, wrong units or malformed value | Numeric and unit criteria follow declared rules; unresolved interpretations stay unassessed |
| S02 | Change volume in a constant-density model | Mass, graph and table agree; density remains fixed; changed question givens create a new instance before assessment |
| S03 | Explain a scientific mechanism in free text | Host applies a sourced rubric separately; unsupported or uncertain judgment does not become independent mastery |
| L01 (proposed starter) | Complete an agreement task with a distracting nearby noun | Checker follows the grammatical subject; explanation shows why; unsupported constructions remain visible |
| L02 (proposed starter) | Recall a vocabulary term after seeing its definition | Sense/context identity and help are recorded; independent recall hides the list; no production/spelling credit inferred |
| L03 | Add optional vocabulary or exhaust a finite sentence bank | Expansion stays outside frozen exam scope; repeated items are labelled rather than counted as fresh transfer |

## Proposed pilot gates

- All first-release scope, module, profile-isolation, deletion, recovery, connection and voice scenarios pass on both platforms; future local-LLM checks apply when that capability ships.
- An external agent completes the content/dynamic handoff against the real SDK without hidden instructions. The equation, graph, 3D and bounded science reference modules actually run and produce the specified assessment behaviour; the proposed grammar/vocabulary reference pair passes its reviewed-bank and evidence checks; a mock-up or screenshot alone does not pass.
- Every citation in the evaluation set resolves to its intended source location; unsupported generated claims are removed or explicitly unassessed. No known incorrect answer keys remain in the released exercise bank.
- The deterministic assessment cases all pass. Open-response results are reviewed for acceptable alternatives and uncertainty handling before being used as learning evidence.
- Both children can complete a short session, inspect an explanation, and resume after interruption without developer assistance.
- If the proposed motivation layer is enabled, missions and badges pass [G01–G10](11-gamification-and-badges.md). Turning it off preserves every study capability, and awards cannot change marks or readiness evidence.
- Both can have a short spoken conversation with a subject tutor, inspect/correct transcripts, interrupt replies, and switch to text. OpenAI and Claude API-key routes are verified; subscription routes are labelled available only after integration and provider eligibility are validated.
- The parent can create a second exam from an existing course; a provisional target is under ten minutes for a straightforward page/topic selection, excluding content correction.
- The interface stays interactive during import. A provisional target is acknowledgement of a study action within 200 ms on the agreed devices; model waiting is shown separately with cancellation. Measure generation latency before setting a useful generation-time target.

These gates support a household pilot. They do not imply that every possible generated exercise is correct or that the educational effectiveness of the application has been established.

## Main risks and responses

| Risk | Planned response |
| --- | --- |
| Books contain scans, complex maths, or essential diagrams | Inspect actual sources first; visible extraction gaps; prioritise OCR or specialist interactions if required |
| Generated questions or marking are wrong | Structured validation, deterministic checks where appropriate, reviewed starter bank, dispute and correction path |
| External builders misunderstand the intended module | Standalone contracts, exact request/source bindings, worked example, semantic validation and requirement traceability |
| Generator and checker repeat the same mistake | Independently specified acceptance cases and mathematical invariants; do not rely on round trips or a second model opinion |
| Rich media distracts or teaches an inconsistent model | Shared validated state, predict/explain/independent practice, time budgets and paper-style transfer checks |
| Generated module code exceeds its permissions | Restricted runtime, explicit capabilities, import gates, execution bounds and quarantine |
| Readiness looks more precise than the evidence | Objective states with counts and dates; separate coverage measures; no grade prediction |
| An urgent plan turns into an unrealistic workload | Shared time budget, editable priorities, explicit uncovered material |
| Cloud cost or local hardware becomes limiting | Bounded jobs, caching, capability checks, measured provider evaluation |
| Subscription access is restricted or changes | Use documented provider integrations, keep API-key support, and show the active billing route |
| Voice recognition mishears an answer | Visible/correctable transcript, confirmation for ambiguity, separate speech errors from learning evidence |
| Cross-platform packaging is postponed too long | Package early and test installations and restore on both operating systems |
| Subject breadth overwhelms the first release | Limit initial interaction types and author a small reviewed example set in each domain |
| Age or curriculum assumptions produce irrelevant content | Confirm school years, school materials, and any qualification specifications before creating course content |

## Decisions recorded

| Decision | Status |
| --- | --- |
| Desktop application with TypeScript support | Confirmed by user |
| Product name: Aristotle | Confirmed by user; repository directory unchanged |
| Children aged 12 and 14, curriculum in England, Spanish additional language | Confirmed by user |
| macOS and Windows in the first version | Confirmed by user |
| OpenAI and Claude through API keys or supported subscription access | Confirmed user intent; individual subscription integrations remain subject to validation |
| Local models in a future release | Confirmed by user |
| Direct voice conversation with the subject agent | Confirmed by user; included in the first usable release |
| Content modules and dynamic modules | Confirmed by user |
| External frontier-model agents build modules from a targeted specification | Confirmed by user; no embedded builder required |
| Dynamic maths tests/checking and image/graph/3D explanations | Confirmed by user; initial bounded reference capabilities required |
| Dynamic science tests and explanations | Confirmed by user; bounded science reference required |
| English grammar tests and vocabulary expansion | User-requested direction; agreement and sense-specific recall are proposed starter families |
| Gamification and badges | Exploration requested by user; small optional missions/badges proposed first, points and story mechanics later |
| Electron + React + TypeScript | Recommended; validate with the desktop prototype |
| Local authoritative library and learning records | Recommended |
| Shared sources, separate student evidence, explicit exam revisions | Recommended |
| Single household, no automatic device sync in the first release | Proposed scope |
| Searchable PDFs before OCR | Conditional on representative sources |

## Remaining questions, in priority order

1. What are the exact school years and courses? Is either child starting a GCSE course, and if so, which boards, specifications, set texts, and tiers apply?
2. What is the first real exam to support, including date, teacher instructions, and required question formats?
3. Are the actual books searchable PDFs, EPUBs, scans, photographs, physical books, or a mixture? Which are essential to the first exam?
4. What macOS and Windows hardware is available, including memory and CPU architecture? Can both platforms be used for installation tests?
5. Which existing OpenAI/Claude plans and API accounts should the connection prototypes target, and what combined reasoning/speech spending limit is acceptable?
6. Are the children sharing one computer, or is progress needed across several computers immediately? This determines whether manual backup is enough.
7. What reading, writing, accessibility, session-length, or explanation-language preferences should the study workspace accommodate?
8. How much parent review is realistic before a child studies, and should the children be allowed to propose their own exams and course changes?
9. Which spoken-language variants and voice preferences matter, and is push-to-talk sufficient initially or is continuous hands-free turn-taking essential?
10. Which real maths topic and source should replace the synthetic external-agent handoff example for the first household module?

The next implementation step is the Module SDK/import/runtime prototype and one complete externally built maths module, then science and language references through the same contract, integrated with the desktop source reader and exam loop. The JSON schemas, TypeScript interface and handoff example in this specification are concrete contracts, not an implemented application or a validated teaching module.
