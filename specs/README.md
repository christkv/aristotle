# Aristotle: product and module specification

Status: revised specification, 28 September 2026. This revision defines externally authored content and dynamic modules across maths, science and languages, including science simulations, proposed grammar/vocabulary families, and optional gamification and badges. These documents and interface contracts describe the proposed product; the application, module SDK and runtime are not implemented yet.

Aristotle is a desktop study companion that turns a family's books, notes, and teacher guidance into a preparation plan for a particular exam. Reusable content modules organise the curriculum; dynamic modules generate checked tests and interactive explanations with images, graphs and 3D. The subject tutor combines these with each child's learning evidence through text and voice.

## Read the specification

| Document | Purpose |
| --- | --- |
| [Product definition](01-product-definition.md) | Users, opportunity, existing approaches, experience, and scope |
| [Subjects, sources, and exams](02-subjects-sources-and-exams.md) | Reusable subject framework, full-book ingestion, domain model, and precise exam boundaries |
| [Tutor and learning design](03-tutor-and-learning-design.md) | Study sessions, adaptation, feedback, bilingual learning, and evidence of readiness |
| [Technical direction](04-technical-direction.md) | TypeScript desktop options, recommended architecture, storage, AI, and data controls |
| [Delivery and open decisions](05-delivery-and-open-decisions.md) | First usable release, experiments, acceptance criteria, risks, and questions |
| [AI connections and voice](06-ai-connections-and-voice.md) | OpenAI/Claude authentication, subscription integration findings, future local models, and spoken tutoring |
| [Module system and authoring](07-module-system-and-authoring.md) | Content/dynamic modules, external-agent workflow, package lifecycle, validation and runtime boundaries |
| [Maths tests and visual learning](08-maths-tests-and-visual-learning.md) | Dynamic test assembly, exact checking, graphs, images, 3D and independent transfer to exam questions |
| [Science and language modules](10-science-and-language-modules.md) | Scientific models, generated science tests, grammar constraints, vocabulary senses and assessment rules |
| [External-agent handoff](modules/README.md) | Standalone builder instructions, JSON schemas, TypeScript runtime contract, template and worked request |
| [Gamification and badges](11-gamification-and-badges.md) | Study missions, badge rules, optional presentation, reward ownership and pilot experiments |
| [Requirements and review](09-requirements-and-review.md) | Traceability from family needs to modules, study behaviour and acceptance evidence |

## Confirmed intent

- A desktop application using a framework that supports TypeScript.
- Initially for the family's children, across mathematics, science, English, and Spanish, with room for more subjects.
- The children are 12 and 14, following the curriculum in England, with Spanish as an additional language.
- The first version should support both macOS and Windows.
- The product is named **Aristotle**; the existing repository path remains `studyhard`.
- Initial AI providers are OpenAI and Claude, with API keys and subscription access where supported by the provider; local models come later.
- Students can talk directly with the subject agent and hear its replies; voice is part of the first usable release.
- A reusable framework for defining subjects and attaching complete books and other sources.
- Exams with explicitly selected content.
- An agent that supports preparation and cramming for those exams.
- External agents using frontier models build modules from a targeted, self-contained specification; Aristotle imports and runs their validated output.
- Separate content modules from dynamic modules that generate tests, check answers and support interactive visual learning, including images, graphs and 3D.
- Dynamic science code supports tests and interactive explanations; English grammar tests and vocabulary expansion are additional requested directions.
- Explore gamification and badges that support study habits and exam preparation; specific reward mechanics remain proposals.
- This stage explores and expands the definition; application implementation comes later.

## Proposed direction

1. Make the exam the organising unit of study: select scope, diagnose gaps, plan, practise, and rehearse.
2. Share a source library and versioned content/dynamic modules across children; keep attempts and learning evidence separate for each child.
3. Use a structured topic and objective map, with citations to source locations, instead of relying on a conversation to remember the syllabus.
4. Combine active recall, guided explanations, varied practice, and mock exams. Offer both an urgent cram plan and preparation over several days.
5. Start with Electron, React, and TypeScript, local storage, and a replaceable AI provider interface. Validate this recommendation with a packaged prototype before committing to the stack.
6. Keep the library and progress usable offline. Deliver OpenAI and Claude connections first, preserving an adapter boundary for future local inference.
7. Add voice through speech recognition, the same subject tutor, and speech output. Treat voice-service access and billing separately from reasoning-model access.
8. Give external builders explicit contracts and independent acceptance cases. Import immutable packages with reproducible generators/checkers; do not compile or execute a tutor's fresh code during a child's answer.
9. Use visual exploration to resolve a difficulty, then check a fresh independent answer in the exam's format. Interaction counts and animation time are not learning evidence.
10. Offer optional study missions and badges with transparent rules, while keeping participation rewards separate from learning evidence and exam readiness.

For an external module builder, start at [the handoff instructions](modules/README.md), not the entire product document set. The [maths](modules/examples/linear-equations.request.json), [science](modules/examples/density.request.json) and [English grammar/vocabulary](modules/examples/english-language.request.json) requests each include an original source fixture and independent acceptance examples without depending on this conversation.

The core product hypothesis is that a trusted connection between **the exam's exact scope, the child's observed difficulties, and the next useful exercise** is more valuable than generating more study material alone.

Subscription access is a provider-specific integration, not a generic substitute for API keys. The [connection specification](06-ai-connections-and-voice.md) records the documented OpenAI route and the unresolved approval/availability of a Claude subscription route.

## Assumptions that need confirmation

Exact school years, courses or exam boards, computer specifications, source formats, and accessibility needs are not yet known. Examples in these documents are illustrative. Design for secondary-school learners; do not infer an exact key stage or GCSE specification from age alone. English is a curriculum subject and Spanish is an additional language; explanation language remains configurable.

The proposed initial deployment is a single household on one computer, with multiple student profiles and manual backup. Cross-device sync, a school service, and public distribution are later decisions.

External facts are linked beside the relevant claims. Product comparisons are a limited research snapshot, not an exhaustive market survey. Learning policies, thresholds, and delivery targets are design proposals to validate with the children.
