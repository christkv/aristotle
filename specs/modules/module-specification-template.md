# Module build request template

Give an external agent this completed brief together with a schema-valid `request.json`, the contracts in this directory, and the selected source files. Use [the worked request](examples/linear-equations.request.json) for the JSON structure. Do not send private learner histories by default.

## Identity and audience

Specify request ID, title, specification/SDK version, module IDs and versions, curriculum/level, source and explanation languages, and any relevant board or teacher method. Distinguish known requirements from proposals. Module IDs remain stable across revisions.

## Exam purpose

Describe the concrete exam preparation need, its included objectives, excluded topics, expected response formats, difficulty bands and time constraints. State what successful independent work looks like and which related skills this module does not assess.

## Source bindings

For each source provide binding ID, version, SHA-256 hash, relative file path and stable location IDs. Map every objective to its supporting locations. State source precedence and unresolved conflicts. Synthetic examples must be labelled; they must not be represented as the child's actual textbook.

## Content package

Specify units, objective definitions, prerequisites, explanations, terminology, worked examples, misconception feedback, rubric definitions, citations and assets. Every image needs provenance and a text alternative. Content files contain no executable behaviour.

## Dynamic package

For each activity family specify:

- Objective bindings and content-package dependencies.
- Supported modes, parameter domains, construction algorithm, invariants, seed behaviour and rejection limit.
- Difficulty dimensions, representative values, exclusions and transfer-group identity.
- Response/state/action schemas, answer semantics, permitted equivalent forms, units and precision.
- Checker strategy, criterion marks, method credit, invalid/unsupported handling and independent acceptance cases.
- Views and semantic controls: what changes, what remains fixed, what the student predicts, and what is hidden in an exam.
- Hint/reveal sequence and an independent follow-up problem in the exam's format. Describe honest family/transfer identity and help events; badges and points remain host-owned, outside module schemas.
- Accessible alternative, resource limits, rendering-failure behaviour and offline support.

## Subject-specific rules

For science, specify quantities/dimensions/units, equations, valid ranges, model assumptions, constructed versus observed data, invariants, precision/tolerance and any simulation step or resource bound. Separate calculation from scientific reasoning criteria.

For grammar, specify construction, register, reviewed sentence patterns, feature constraints, accepted variants and ambiguous/excluded forms. For vocabulary, specify sense IDs, contexts, morphology, list boundaries and whether an activity measures recognition, recall, spelling or production. Keep optional expansion separate from exam scope.

State which checks are deterministic and which responses require host rubric review. Supply the rubric and independent alternative-answer cases; module code cannot invoke a provider. Follow the [science and language design](../10-science-and-language-modules.md) and its worked requests.

## Verification and completion

Assign requirement IDs and describe how each will be verified. Include known correct, wrong, partial, invalid, and ambiguous cases where applicable; expected results should not all come from the generated solver. Require applicable mathematical/scientific invariants, linguistic review, scoped test assembly, rendering checks, import validation and a realistic student journey. Exhaust finite reviewed banks and report reuse rather than inventing unsupported variants.

Specify allowed build time and repair iterations. Deliver manifest-bound packages, source code, lockfile/tool versions, reproducible build steps, fixtures and a requirement-by-requirement report. Mark any host-dependent checks pending if the SDK/host is unavailable.

## Agent instruction

Build and revise the requested modules against the supplied contracts. Use your own external tools and model access. Preserve curriculum scope and marking rules, use validated computations for exact mathematics, and keep student-time operation bounded and reproducible. Return explicit unsupported requirements rather than substituting an easier educational task or inventing validation results.
