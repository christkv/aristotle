# Dynamic maths tests and visual learning

## The learner outcome

Aristotle should help a child understand a concept, solve a fresh problem independently, explain their reasoning, and apply it in the format of the upcoming exam. Dynamic tests and visual explanations are two connected tools for that outcome.

The first reference modules cover linear equations with a balance diagram, straight-line graphs, and cuboid volume with a 3D model. These are framework examples for secondary maths, not a claim that all three are in either child's next exam. Activate only the objectives supported by the actual course and exam scope.

## Dynamic questions and complete tests

A question family is a reviewed generator plus domain constraints, response contract, checker, and teaching material. Random numbers alone are not a complete family: it also defines what the question tests, why it has a valid answer, its difficulty dimensions, and which misconceptions its feedback can address.

The tutor selects eligible families and parameters through a **test blueprint**:

- Exam revision and allowed content/module versions.
- Objective coverage, number of questions or marks, time allowance, and teacher weighting if known.
- Question formats, difficulty dimensions, permitted methods and calculator policy.
- Mode: diagnostic, practice, review, or mock exam.
- Exposure constraints: unseen instances, family diversity, and reserved transfer questions.
- Allowed representations and help/reveal policy.

The assembler resolves the blueprint before the test begins. It filters eligible families, allocates coverage, generates bounded candidates, validates every instance, checks duplication and total marks, and freezes the resulting test. Report any unsatisfied coverage or infeasible combination instead of silently relaxing scope, increasing duration, or inventing an unsupported question type. Time estimates remain estimates.

Adaptive practice may choose a new question after each answer. A mock exam freezes its questions, order, marks, and marking rules; it does not secretly become easier or regenerate a difficult item after the child sees it. On failure to build a test, offer a reviewed saved test or a visibly partial practice set.

Store the seed, sampled parameters, full question snapshot, module/checker versions, objective/source bindings, maximum marks, and private solution data. Reopening a question must reproduce the same problem. Keep answer keys, hidden graph targets, and revealing hints out of the student-facing view until the relevant mode allows them; this is an application boundary, not a tamper-proof examination system against the owner of the computer.

## Correctness pipeline

1. **Construct:** sample only within the family's approved domain; use mathematical structure to ensure solvability.
2. **Verify:** independently check domain constraints, solutions, uniqueness where required, and alignment between prompt, units, diagram and rubric.
3. **Present:** freeze the instance and expose only its public portion.
4. **Interpret:** parse the student's response using the declared grammar; ask for clarification where interpretation is ambiguous.
5. **Assess:** run a validated checker and award criterion-specific marks under the frozen rubric.
6. **Explain:** build feedback from the validated result and course content; do not ask a language model to invent the correct answer after marking.
7. **Recheck learning:** offer a distinct problem, then later an exam-style transfer item.

Separate a parsing failure, an unsupported expression, a checker timeout, an ambiguous interpretation, and a mathematically incorrect answer. The first four are not automatically learning failures. Preserve raw input and its normalised representation for review. Bounds on input length, expression depth, numeric size, and execution time apply even to well-formed mathematical input.

## Response and marking contracts

| Response type | Correctness rules |
| --- | --- |
| Integer or rational | Exact arithmetic with nonzero denominators and normalised signs; avoid floating-point equality for fractions |
| Decimal or measurement | Explicit absolute/relative tolerance, units, significant figures or rounding rules; tolerance does not override a required exact form |
| Expression | Declared variables and domain, permitted operators, supported equivalence method, and required form such as expanded or factorised |
| Equation solution | Check substitution and domain restrictions; for multiple solutions check the whole set, not just one valid member |
| Worked steps | Check each supported transformation and method criterion; separate final-answer credit from method credit |
| Graph or geometry | Assess mathematical coordinates, relationships, and constraints; use declared tolerances, not screenshot similarity or screen pixels |
| Explanation or proof | Explicit rubric and evidence; open reasoning may need provisional review even when the numeric answer is verified |

An algebra system is a helper, not a universal correctness oracle. Equality depends on domains and on what the question asks. `(x² - 1)/(x - 1)` and `x + 1` are not interchangeable on a domain including `x = 1`. Numerical sampling can find counterexamples but is not proof of general equivalence. The initial checker supports a declared subset; outside that subset it returns unassessed or offers a supported answer format.

Mathematical correctness, requested answer form, permitted method, and earned marks are distinct. If the task asks for a simplified fraction, `2/4` can receive equivalence credit relative to `1/2` while failing the simplification criterion. Partial credit rules must be declared, not improvised in a tutoring turn. A correct final answer cannot establish unsubmitted working.

## Reference family: linear equations

Objective: solve `a·x + b = c` by applying inverse operations to both sides. Initial domain: integer `a` from 1 to 9, integer `b` from 0 to 20, and integer solution `s` from 0 to 12. Generate `c = a·s + b`. Negative coefficients, negative solutions, fractions, and unknowns on both sides require separate configured difficulty bands and validation.

For `a = 3`, `b = 5`, `s = 5`, the instance is `3x + 5 = 20`. The reference solution is `x = 5`.

- Verify `a ≠ 0`, the parameters satisfy their bounds, and substituting `s` satisfies the equation using exact arithmetic.
- The answer checker independently parses the response as a supported rational number and checks `a·response + b = c`. It must not simply trust a stored answer string from the generator.
- If the final-answer format permits equivalent rationals, `5`, `5.0`, and `10/2` are equal; `4` is incorrect and `1/0` is invalid input. A required integer form is a separate criterion.
- Supported working can show subtracting 5 from both sides, then dividing both sides by 3. Alternative valid supported working is accepted; an unsupported written derivation is unassessed rather than declared invalid.
- A balance diagram shows the same equation state. Moving a term without the corresponding operation is explained through an explicit action; the animation cannot silently teach a sign-changing trick inconsistent with the selected method.
- After a worked solution, create a different valid instance and disable revealing aids for an independent attempt.

The initial domain has only 2,457 parameter tuples. It can be exhaustively checked for domain validity, correct reference solutions, and checker agreement, in addition to separately authored cases with deliberately wrong answers. This is a test-design target, not a claim those checks have run against an implementation.

## Reference family: straight-line graphs

Objective: relate gradient and intercept to `y = m·x + c`. A learn-mode graph lets the student change `m` and `c`, compare predicted and actual changes, and connect the equation to a table and labelled axes. Generate values within the declared integer/rational ranges and keep the viewport useful.

A test may ask the student to place two distinct points defining a requested line or infer its equation from a graph. The checker uses mathematical coordinates and the declared tolerance. For the target `y = 2x + 1`, `(0, 1)` and `(2, 5)` define the line; duplicate points do not. Record whether coordinates were snapped to a grid, typed, or drawn. A vertical line is not a valid answer to this family; supporting vertical lines requires an explicit expanded response contract.

Hide the target equation, revealing tables, automatic point labels, or live correctness feedback when they would answer the assessed question. Keep exploration state separate from assessment state. Keyboard point placement or typed coordinates must be available; zoom and screen size must not change the mathematical grade.

## Reference family: cuboid volume in 3D

Objective: explain and calculate volume as a count of unit cubes. Generate positive integer edge lengths from 1 to 8 with a declared length unit. A `2 cm × 3 cm × 4 cm` cuboid has volume `24 cm³`. The checker verifies the product and the cubic unit separately; `24 cm²` fails the unit criterion. Surface area is a different objective and must not enter a volume-only exam accidentally.

Learn mode supports rotating the model, revealing layers, changing one dimension, and predicting the effect before seeing the volume. The scene, dimension labels, count of unit cubes, and checker use the same structured geometry. Rotation is not evidence of understanding; a prediction or explained calculation can become an assessed attempt.

For a test, freeze dimensions and withhold computed volume. Provide keyboard rotation/reset and a labelled 2D view or net plus dimension table. If an alternative cannot assess the intended spatial skill, mark that skill unavailable rather than pretending a text substitute measures it. Stop animation when hidden, cap geometry complexity, and handle a missing graphics context without losing the answer.

## Images, graphs, 3D, and simulations

Each representation must declare the learning question it helps answer, its source/concept binding, permitted actions, shared state, and the follow-up task that checks understanding.

| Representation | Appropriate use | Required checks |
| --- | --- | --- |
| Source image or annotated diagram | Explain a book diagram or show a worked relationship | Correct source region, legible labels, faithful annotations, text alternative |
| Programmatic SVG/2D diagram | Fractions, balance models, geometry and labelled processes | Geometry and labels agree with structured values; no hidden answer in assessment mode |
| Interactive graph | Connect equations, data and coordinates | Correct axes, scales, discontinuities and units; keyboard/data-table alternative |
| 3D scene | Solids, cross-sections, molecules or spatial relationships where supported | Consistent dimensions/state, bounded resources, reset controls and educationally valid fallback |
| Simulation | Predict, vary a parameter, observe and explain | Declared model and assumptions, units, reproducible initial conditions, bounded range; no claim beyond the model |
| Agent-created illustration | Provide context or an analogy | Label provenance; review misleading detail; use verified overlays for exact mathematical content |

Illustrations may be generated or selected during authoring, but exact equations, graphs, dimensions, and scored diagrams should come from structured data and validated renderers. A plausible-looking image is not an answer key. All assets have provenance, version, alt text, and package-local identifiers; no arbitrary remote URLs are fetched by a student module.

The tutor may choose a useful representation and issue semantic actions such as “highlight the intercept,” “show the third layer,” or “set gradient to two.” The host validates each action against the module's declared controls and the current mode. Speech can narrate the same state; vague references such as “that point” require a selection or clarification.

## The teaching sequence

Use a short **predict → manipulate → explain → solve independently** sequence. For example, a child predicts how doubling one cuboid edge changes volume, adjusts it, explains the change with layers, then solves a fresh paper-style volume question without the computed result displayed.

The planner records what the independent question demonstrates, which help was used, and whether the child can transfer the idea to the exam's format. Repeatedly changing numbers within one template is weaker evidence than succeeding across representations and contexts. Track family and transfer-group identity so dozens of near-identical successes do not imply broad readiness.

If a visual activity takes longer than the available study budget, use a simpler view and a concise check. Rich media must earn its place by resolving a relevant difficulty; it must not displace necessary exam rehearsal.

## Mathematical and visual validation

Before activating a dynamic maths module:

- Run independently specified correct, incorrect, partial, invalid, and unsupported cases for each response contract.
- Exhaust small finite parameter spaces; otherwise test documented boundaries plus a deterministic random sample, recording the sample size and seed. Passing samples do not prove every possible variant correct.
- Check invariants: valid denominators, unique solutions where promised, dimensional consistency, non-degenerate geometry, and agreement between views and assessment state.
- Test changes of viewport, locale, input modality, rounding, optional hints, and assessment mode for unintended grading changes or answer leaks.
- Render representative, boundary, and failure cases on macOS and Windows; inspect images/graphs/3D for clipped labels, invalid scales and misleading geometry.
- Run the whole learning path, including a new exam-style question after the visual explanation and later review.

Science and language use the same module boundary with their own [model, grammar and vocabulary rules](10-science-and-language-modules.md). These gates extend the general [module authoring process](07-module-system-and-authoring.md); they do not replace testing with the children and their actual school materials.
