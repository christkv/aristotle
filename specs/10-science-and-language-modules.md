# Dynamic science and language modules

## Purpose and scope

Dynamic code is a subject-independent capability. Science requires generated tests, dependable checking and interactive explanations alongside maths. English grammar tests and vocabulary expansion are proposed language applications of the same framework. Spanish can reuse suitable mechanics with its own sourced language rules and assessment policies.

The first release must prove a bounded science module through the complete external-authoring and student-study workflow. Use a small English grammar/vocabulary pair as the proposed language reference, rather than promising comprehensive English assessment. These examples demonstrate the framework; the children's actual exam sources determine which modules they study.

| Area | Content module defines | Dynamic module implements | Independent evidence |
| --- | --- | --- | --- |
| Science calculations | Concepts, equations, quantities, units, assumptions and worked examples | Valid parameter generation, unit-aware checks, tables, graphs and model controls | A fresh calculation or interpretation in the exam's format |
| Scientific reasoning | Mechanisms, variables, diagrams, experimental limitations and rubric | Prediction tasks, bounded simulations, data interpretation and response capture | Supported explanation or experimental reasoning, assessed against a rubric |
| English grammar | Rule, register, reviewed sentence patterns, exceptions and accepted variants | Constrained sentence generation, cloze, editing and sentence-building activities | Applying the rule to a different sentence structure |
| Vocabulary | Word sense, part of speech, definitions, contextual examples, inflections and accepted answers | Recall, recognition, context selection, matching and production prompts | Recall or appropriate use in a new context, tracked separately from recognition |

## Science authoring contract

For every scientific model the build request must specify:

- The taught objective, exact supporting sources, assumed conditions and excluded phenomena. Identify an idealised teaching model as such.
- Quantities with stable IDs, physical dimensions, units, permitted ranges, controlled variables and calculated values. State equations, initial/boundary conditions and invariants where applicable.
- How generated instances remain solvable, how independent expected results are obtained, and which invalid combinations are rejected before display.
- Whether data are supplied observations, a constructed exercise dataset or simulated measurements. Preserve provenance. Synthetic noise has a declared seed and distribution; it is never presented as a real experiment.
- Numeric answer semantics: accepted unit conversions, precision, significant figures, tolerance and whether a method earns separate marks. Do not apply one universal tolerance to all quantities.
- Visual semantics: labelled axes and units, scaling, legends, accessible data tables, and whether a diagram is schematic or to scale. Never infer scientific values from screen pixels.
- Interaction semantics: what a learner predicts, changes, observes and explains; which changes create a new instance; what is available in a mock exam.

For time-dependent simulations, use a declared fixed simulation step, bounded duration/iteration count and explicit initial state. Animation frame rate is presentation only. Pause, reset and replay must preserve the same scientific result. Check the model against independent reference cases and relevant invariants; an attractive animation is not validation.

Initial reference: mass, volume and density, using the original [source fixture](modules/examples/density-source.md) and [external-agent request](modules/examples/density.request.json). Generate exact calculation questions, expose a table and mass-versus-volume graph in learn mode, and vary sample volume while holding model density constant. The exercise excludes measurement uncertainty, unit conversion and claims about real substances. Broader models—circuits, particle motion, forces, ecosystems or reactions—need their own assumptions, validation and sourced objectives before activation.

A scientific explanation can require more than a correct number. Separate calculation, units, interpreting a trend, and explaining a mechanism into explicit objectives or criteria. Never award causal understanding just because a learner moved a slider or selected a formula. Virtual practicals prepare for related exam questions; they do not establish that the child can perform a physical practical.

## Grammar authoring contract

Specify the target construction and register, assessed language, reviewed sentence structures, feature constraints, accepted variants and exclusions. A generator should combine compatible linguistic features and reviewed phrases. Randomly combining words or asking a model to invent an answer key for every sentence is insufficient.

The proposed first family is present-tense subject–verb agreement in unambiguous declarative sentences, including an intervening prepositional phrase. Each sentence carries its grammatical subject and number in private assessment data. Explanations can reveal that structure after submission. Highlighting the subject, deleting distractors or displaying agreement features is help and is unavailable during a mock exam.

For cloze, state accepted forms and normalisation precisely. For editing, specify the permitted edits and every accepted corrected sentence. For sentence construction, grade semantic token IDs or the submitted sentence through a supported parser, not drag coordinates. Flexible writing and genuinely ambiguous constructions need rubric review. Dialect or register differences must not be labelled errors without a stated course requirement.

Use the original [language fixture](modules/examples/english-language-source.md) and [grammar/vocabulary request](modules/examples/english-language.request.json). This bounded example excludes collective nouns, contractions, coordinated subjects and unrestricted writing. It does not establish general grammar mastery; add separately validated families for punctuation, tense, articles or more complex agreement.

## Vocabulary and expansion

A vocabulary entry identifies a **sense**, not just a spelling: stable sense ID, lemma, part of speech, source definition, reviewed contexts, supported inflections, register and accepted answers. Translation, where included, is sense-specific. English and Spanish activities can share the interaction framework, but cannot assume identical morphology, accents or one-to-one meanings.

Keep evidence separate for recognition, unaided recall, spelling and use in context. Choosing a definition from four options is not evidence that the learner can produce the word. A sentence that happens to contain the word is not proof of appropriate use. Spoken recall can assess a confirmed lexical answer; typing is required when spelling or accent placement is assessed.

Support an exam vocabulary list and a separate optional expansion list. New terms encountered in reading can be proposed with a source and sense; additions need review before entering an assessed bank. Expansion does not alter a frozen exam scope or improve its coverage denominator. During a cram session, prioritise the selected exam list; extra exploration must fit the remaining time and remain visibly separate.

The reference family tests typed recall of three supplied scientific terms from reviewed definition/context pairs. The prompt explicitly asks for a term from the previously taught list, which is hidden during independent recall; synonyms are outside this particular response task. General definition questions need an accepted-synonym policy or rubric review. Later production tasks ask for the same sense in a new context, using a separate assessment route.

## Deterministic checking and rubric review

The six runtime exports remain synchronous and offline. A dynamic module does not call a model provider. It checks supported structured responses and returns `unassessed` for unsupported interpretation, with a reason; unknown wording is not automatically a misconception.

For an open science explanation, grammar justification or vocabulary sentence, the content package defines a versioned rubric and the activity freezes its required criterion IDs. The host may separately invoke its configured evaluator with the frozen prompt, submitted response, approved sources, rubric and permitted private answer material. It validates criterion IDs/marks, records provider/model/rubric versions and stores the result as a separate assessment revision with provenance. Model suggestions remain provisional until the host's reviewed assessment policy or a parent resolves them; uncertain results do not contribute independent readiness evidence. The deterministic module result is preserved, not silently overwritten.

If a rubric, evaluator or supported response contract is unavailable, save the response unassessed and offer available practice. Exam timing/disclosure still applies: evaluator feedback must not reveal answers during a frozen mock. Deterministic calculations, grammar cloze and vocabulary recall continue offline.

## Reusable scenes and response contracts

The proposed v1 native scene vocabulary adds a labelled `data-table` to the existing text, images, balance, line-graph and cuboid scenes. Science uses line graphs with labelled physical units and tables of explicit values; language can use text, images and comparison tables. An arbitrary curve, labelled interactive organism, particle simulation or token editor uses a declared isolated custom view until a corresponding native scene is added. Declaring `simulation` in a request does not invent a renderer.

Table cells are presentation strings derived from validated state, never the numeric source of truth for grading. All scenes have text alternatives. Use the same semantic action for voice, keyboard and pointer input; enforce identical exam restrictions. A static screenshot is useful content but does not satisfy a required working interaction.

## Release evidence

1. An external agent receives only the relevant source fixture, request and handoff contracts and builds the packages without hidden conversation context.
2. Science generation and checking cover all 80 declared density parameter pairs, boundary values, wrong units, malformed values and exact equivalents; independent fixtures catch shared generator/checker errors.
3. Grammar checks cover all 12 sentence combinations, correct/wrong agreement and unsupported responses; the explanation identifies the grammatical head rather than the nearest noun.
4. Vocabulary checks cover all six sense/context pairs, list membership, wrong terms and unsupported input. Recall evidence retains its sense and context IDs.
5. Science exploration is followed by a fresh paper-style calculation; grammar/vocabulary help is followed by an unseen or clearly labelled reused item. Finite banks report exhaustion rather than claiming endless new contexts.
6. Offline study, spoken interaction, mock disclosure rules, accessibility and package/version isolation work on macOS and Windows. Broader scientific reasoning and language production remain visible coverage gaps until their own checks are supported.

These are implementation acceptance conditions, not a claim that modules or the renderer already exist.
