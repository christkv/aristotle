# Requirements and specification review

## Completion criterion

The goal is to help the two children prepare for their actual exams. The specification therefore connects module authoring to a complete learner journey: correct scope → relevant diagnosis → useful explanation/practice → trustworthy assessment → independent transfer → feasible review and rehearsal.

The specification is ready to guide a first implementation when each confirmed requirement has a defined contract, user workflow and observable acceptance condition. The product itself achieves its first usable milestone only after those conditions run on real computers with actual course materials. Documentation cannot establish that learning outcomes have improved.

## Traceability

| Requirement | Design contract | Observable evidence |
| --- | --- | --- |
| Ages 12 and 14; England curriculum and additional Spanish | Configurable year/course, source-based objectives, respectful tone and separate language settings | Family's school material maps to the selected objectives without inferred board/year |
| macOS and Windows, TypeScript | Electron/React proposal and portable package/SDK contracts | Installed source/voice/module study loop works on both platforms |
| Complete books and other sources | Versioned imports, location bindings, quality/coverage gaps | Correct page citations and honest handling of unreadable or unsupported material |
| Content modules | Objectives, explanations, rubrics, provenance, images and exact source bindings | An imported module can explain its objective and open its evidence |
| Dynamic modules | Seeded families, local generators/checkers, response/action contracts and restricted views | Fresh valid exercises and functioning interactions work without per-item model calls |
| External frontier agents | Standalone handoff, request/manifest schemas, runtime contract and example | An agent builds a new package without knowing this conversation |
| Dynamic science tests and explanations | Quantity/unit rules, model assumptions, reproducible data, bounded interactions and host reasoning rubrics | Fresh calculation checks and a consistent table/graph/model; causal reasoning tracked separately |
| Grammar and vocabulary direction | Reviewed sentence constraints, sense-specific entries, recall/production separation and separate expansion lists | Proposed grammar and vocabulary families obey accepted variants, hide recall answers, label reuse and respect exam scope |
| Reliable maths tests | Test blueprint, solvability/domain checks, frozen mock instances, independent checker fixtures | Correct cases accepted; wrong cases rejected; ambiguity/unsupported cases unassessed |
| Images, graphs and 3D | Validated structured state, mode-specific controls and accessible alternatives | Visual values agree with the question/checker; a student can predict and explain a change |
| Voice with the subject agent | Shared conversation/exercise/scene state and semantic actions | Spoken help works; stale narration stops; exam restrictions apply equally to voice |
| OpenAI/Claude and future local models | Separate tutor/provider/speech adapters and external builder environment | Configured route is explicit; deterministic modules still work without a model |
| Gamification and badges | Optional mission/badge catalogue, distinct reward categories and host-owned eligibility rules | Motivation can be disabled; awards are idempotent, scope-aware and never inflate readiness |
| Individualised study | Per-child evidence, misconceptions, priorities and available time | Siblings get different next tasks from shared module content |
| Cramming and exam preparation | Time-bounded scope-aware plans and rehearsal | A short plan shows what is covered and what remains, with no invented readiness |
| Learning rather than activity counts | Assisted/independent distinction, family diversity, transfer tasks and later checks | A child succeeds on a fresh exam-style task after help and can revisit it later |
| Parent trust and sustainable workload | Representative previews, correction/quarantine, source/module versioning | Parent does not need to check every random question or repair the app every session |

Detailed scenarios live in [delivery and acceptance](05-delivery-and-open-decisions.md); subject-specific rules live in [the maths specification](08-maths-tests-and-visual-learning.md) and [science/language specification](10-science-and-language-modules.md).

## Walkthrough used to review the design

1. A parent selects relevant textbook pages for an upcoming school maths test and identifies the required methods.
2. If no installed module supports the objectives, the parent exports only the needed source material and a structured request to an external frontier-model agent. Existing supported study remains available.
3. The external agent builds content and dynamic packages, tests the finite mathematical domain or documented samples, and returns traceable results. It reports missing host checks as pending.
4. Aristotle resolves source and dependency versions, reruns import/runtime checks and presents a preview. The parent checks educational fit and activates the module.
5. The student attempts a scoped diagnostic. A supported wrong answer reveals a likely difficulty; an invalid transcription or checker failure does not masquerade as one.
6. The tutor explains using a suitable balance diagram, graph or 3D view and can discuss it aloud. All representations share validated state and source bindings.
7. The student predicts, manipulates and explains, then answers a new exam-style item independently. The host records the question family, help and marking evidence.
8. The plan revisits the objective later and fits remaining study time. A mock exam freezes scope, instances and grading without revealing answers through visual or voice controls.
9. If a module defect appears, the parent can flag it, affected evidence can be corrected, and future study uses a known valid version. The child's answers are preserved.

Repeat the journey with science: an apparent unit error leads to a constant-density table/graph explanation and a fresh independent calculation, while a free-text mechanism answer follows the separate rubric-review path. For language, test agreement with an intervening noun and recall the correct word sense without a visible word list. Optional vocabulary expansion must not change exam coverage, and exhausting a small bank must expose reuse.

This walkthrough is a design review, not a completed user test. Running it is a release condition.

## Revisions made to resolve design gaps

- Replaced a fixed-bank-only starting point with externally authored dynamic families and deterministic offline instance generation.
- Distinguished reusable content, runnable dynamic behaviour, a course, an exam blueprint and individual evidence.
- Moved module authoring out of Aristotle after the external-agent requirement was clarified. Removed the need for an in-app coding agent or compiler.
- Added machine-readable request/package contracts and a standalone example instead of relying on product prose or conversation history alone.
- Separated generator correctness from answer-checker correctness and required independent reference cases.
- Made an initial diagram, graph and 3D path part of the usable product rather than deferring all rich interactions.
- Connected visuals to prediction and independent exam-format practice, with family diversity and help tracking in the evidence model.
- Distinguished future local LLM support from already-local deterministic modules, and connected voice to the same scene/mode rules.
- Defined package/source provenance, version pinning, rollback/quarantine and fail-safe handling of unavailable checks.
- Promoted science to a core dynamic requirement and supplied standalone science and grammar/vocabulary requests with original sources and independent expected answers.
- Added labelled data tables, scientific model/units rules, constrained grammar generation, sense-specific vocabulary and host-only open-response assessment.
- Separated optional vocabulary expansion, independent recall, recognition, spelling and production evidence; made finite-bank reuse explicit.
- Added optional study missions and badge proposals, with explicit earning rules, separate participation/learning categories and host-owned award processing.

## Remaining implementation questions

Choose and prove the module isolation mechanism, package/build tooling, exact supported maths grammar, graphics performance budgets and speech routes in prototypes. Confirm the children's school years, the first real exam and its sources. These decisions tune the implementation; they do not leave the two module concepts or the external-agent handoff undefined.

Evaluate gamification preferences and badge wording with each child; reward rules remain proposals until piloted. Future specification changes should update the traceability table, affected contracts and worked examples together. A new feature is complete only when its learning purpose, authoring inputs, runtime behaviour, assessment implications and acceptance evidence agree.

## Checks performed on this specification revision

Both JSON Schemas passed Draft 2020-12 validation. All three worked requests passed schema checks, source-hash/anchor checks, objective/source reference closure and acyclic dependency checks. The TypeScript runtime contract, including the proposed data-table scene, passed strict type checking. Earlier representative manifest-shape and malformed-input checks remain recorded from the preceding revision; no application conformance result is implied.

The 29 supplied acceptance outcomes were independently checked against exact arithmetic and the declared language keys. The equation construction was checked over 2,457 tuples and the density relationship over 80 pairs. The reviewed language bank's six subject records, two predicates and three senses/two contexts were checked for their declared 12 sentence combinations and six vocabulary prompts. These are checks of specification data, not a generated runtime or a comprehensive linguistic evaluation.

All 17 Markdown documents passed local-link, code-fence and whitespace checks, and all JSON files parsed. Gamification scenarios G01–G10 were defined and reviewed against the evidence and module-ownership rules; they have not run in a product. The module SDK, graphics renderer, importer, reward service and student application still require implementation and the release checks above.
