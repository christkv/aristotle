# External-agent module handoff

This directory is the entry point for an external frontier-model agent building an Aristotle module. Read it with the supplied build request and approved source files. Do not assume access to the product conversation, learner data, an Aristotle account, or an implemented host.

The current deliverable is a proposed v1 specification. JSON schemas and the TypeScript contract are supplied; an executable SDK, renderer, import validator and CLI are still to be built. Do not invent passing SDK test results or claim a working Aristotle integration before those tools exist. An external agent can still produce a package candidate, standalone fixtures and build instructions, clearly marking host-dependent validation as pending.

## Read in this order

1. The concrete request, using [this template](module-specification-template.md) and [build-request schema](module-build-request.schema.json).
2. The exact source files and source locations in that request.
3. [Module semantics and lifecycle](../07-module-system-and-authoring.md).
4. [Runtime contract](runtime-contract.ts) and [package-manifest schema](module-manifest.schema.json).
5. [Maths and visual requirements](../08-maths-tests-and-visual-learning.md) and [science/language requirements](../10-science-and-language-modules.md), as applicable.

Three self-contained examples pair build requests with original source fixtures; none assigns school content to either child.

| Example | Request | Supplied source |
| --- | --- | --- |
| Maths: equations and balance | [Request](examples/linear-equations.request.json) | [Fixture](examples/linear-equations-source.md) |
| Science: density tests and model exploration | [Request](examples/density.request.json) | [Fixture](examples/density-source.md) |
| English: agreement and vocabulary recall | [Request](examples/english-language.request.json) | [Fixture](examples/english-language-source.md) |

## Your task as the external builder

Build the requested content and dynamic packages. Content packages organise and explain the supplied material. Dynamic packages generate activities, check answers, and describe interactive views. Preserve specified domains, difficulty bands, marking rules, source references, accessibility and exam-mode restrictions. Return explicit gaps rather than expanding the course, weakening validation, or creating an alternative specification without reporting the change.

You can use your own coding tools and frontier model. The product's OpenAI/Claude tutoring settings do not configure or authenticate your external authoring environment. No external agent is launched automatically by importing a module.

## Input bundle

An input bundle contains `request.json`, the supplied schemas/contract, source files under `sources/` or another declared relative location, and optional teacher rubrics or approved reference fixtures. Paths resolve relative to the request file. Sources carry SHA-256 hashes and stable location IDs. A modified source needs a new hash/version and revalidation.

Validate the request against its schema, then check semantics: unique IDs; all objective references resolve; each `sourceRef` is `binding-id#location-id`; dependencies resolve within the request or supplied exact packages; content dependencies are acyclic; every dynamic objective is provided by a declared content dependency. Schema validation alone cannot establish these conditions.

## Output bundle

```text
delivery/
  packages/<module-id>/<version>/
    manifest.json
    content/                 # Content packages only: Markdown and local assets
    dist/module.js           # Dynamic package: one bundled ES module
    contracts/               # Local JSON Schemas for response, state and actions
    fixtures/checker.json    # Independently specified CheckerFixture[]
    src/                     # Source and reproducible build metadata
  reports/<module-id>-<version>.json
  README.md                  # Build steps, verification results and unresolved limitations
```

Only include applicable directories. Every packaged file except `manifest.json` must appear exactly once in its manifest's file inventory. No unlisted files, symbolic links, absolute paths, traversal segments, remote imports or post-install scripts. File paths must be normalised and portable across macOS and Windows, including case-insensitive collisions.

The **package digest** is SHA-256 of the exact UTF-8 `manifest.json` bytes. The manifest inventories the hashes of all other package files. A report lives outside the package, references its package digest, and records commands/tool versions, case counts/seeds, passed/failed/pending checks, visual-review results and limitations. This avoids a circular hash. Dependency digests must match the installed manifest bytes, not just a compatible version label.

The importer verifies file hashes, dependency closure and the report's binding, then reruns its own available validation. A report or signature proves provenance only to the extent verified; it is not a proof of subject correctness.

## Executable contract and semantics

A dynamic package exports the six functions in `DynamicModuleV1` as named exports from a single bundled ES module. Bundle approved pure dependencies; do not import npm packages, native modules, network URLs, dynamic code strings or filesystem helpers at runtime. Functions are synchronous, deterministic for their explicit inputs, and subject to host termination limits. Use the provided seed through a declared, versioned PRNG; do not use wall-clock time or unseeded randomness to generate questions.

Every family supplies local JSON Schemas for its response, public state, private state and actions. Schemas must not fetch external references. A package's family declaration maps IDs to these files; the host validates at every boundary. JSON numbers must be finite. Exact rationals should use strings or numerator/denominator strings in a documented response/state schema, not silently rounded binary floating-point values.

A runtime schema ID is `module-id@version:relative/path.schema.json`. It resolves only through that pinned package's inventory; it is not a URL. Use this format for `responseSchemaId`, control `inputSchemaId` and the host's allowed-schema list. Extra control schemas must also be inventoried. Importing different bytes under an existing module ID/version is a conflict requiring a new version, not an in-place replacement. Package digests additionally pin every session and dependency.

`generate` receives only allowed scope and constraints, including permitted methods, calculator policy and response schemas. It returns `unavailable` if it cannot meet them within its generation-attempt limit. The host reruns domain and scope checks, adds instance/attempt identities and stores an immutable snapshot. `validateInstance` is a useful module assertion, not an independent oracle by itself.

`createView` and `applyAction` receive public data only. Actions must be declared and mode-appropriate. The host alone records actions and submissions. Changes to the underlying question in learn mode create a new instance before any assessed submission; drawing response points or rotating a fixed solid does not change the problem. Test mode rejects parameter changes that alter the question or reveal a solution.

Supported balanced transformations are working on the original equation, not a new question; retain the original instance and record the steps and help used. Replacing coefficients to create a different problem requires a new instance. Reject stale actions and ignore proposed state from rejected actions. Each operation receives a copy of the public state, not a reference to mutable host records.

`check` returns criteria; the host validates totals, maximum marks and legal outcomes before committing an assessment. An unassessed criterion has no awarded marks and is not counted as a wrong answer. All supported required criteria met means correct; all assessed and none met means incorrect; some but not all met means partial. Any unresolved required criterion makes the overall result unassessed while preserving known criterion results. Invalid or unsupported input returns unassessed with a reason. No outcome automatically changes mastery. Scientific explanation and open language responses can require a separate host rubric evaluation: preserve the module result, record a new assessment revision, and keep uncertain suggestions provisional. Follow the [host review rules](../10-science-and-language-modules.md); a dynamic module never calls the evaluator directly.

The public rubric freezes criterion IDs and positive maxima; every declared criterion is required in v1. Criteria are binary: met earns its maximum, not-met earns zero, and unassessed has zero awarded marks pending resolution. Break method credit into separate criteria. Reject missing/duplicate/unknown criteria, nonfinite or inconsistent marks, and totals differing from the frozen rubric. Language context is explicit in generation and the stored public activity; checking must not guess decimal notation from the device locale.

`explain` receives private data only when the host allows disclosure. The host revalidates citations and visual actions. Treat explanatory text and images as data, never executable HTML. A student-facing view cannot directly call `check` repeatedly as a hidden answer oracle during a mock exam.

The proposed v1 built-in scene vocabulary covers text, local images, labelled data tables, balance diagrams, straight-line graphs and cuboids. Table column/row IDs must be unique within their arrays; every row has exactly one cell per column, in column order. Enforce host size limits and treat cells as text, not HTML. Table values are presentation only: grade from validated scientific or linguistic state. Data tables use a native host view without a graphics capability grant; graphical scenes still require the capabilities below. A simulation can drive these scenes through declared actions. Other visuals use a declared custom view with a separate sandboxed view entry and JSON message contract, or require a later SDK extension. An unsupported renderer cannot be made available by simply inventing a new scene type.

Custom view entries are package-local HTML documents with inventoried bundled resources and no remote imports. The host supplies a scoped `MessagePort` using the custom-view message types in `runtime-contract.ts`, validates sender/session token and revision, and sends only public data matching `inputSchema`. View messages can request declared actions, never assessment commits or database access. `dispose` closes the port and releases resources; late/stale messages are ignored. An import requires both the `view.custom` capability and a matching custom-view entry for every referenced view ID. The host controls CSP, origin isolation, navigation and access; the HTML cannot opt out of these restrictions.

At runtime, balance/graph scenes require `scene.2d`, cuboids require `scene.3d`, and image assets require `assets.read`. Check both the package declaration and the host grant; a scene cannot grant itself a capability. Response/state/action schema files and view entries must be inventoried with matching hashes. Enforce host caps on schema size, reference depth, expression complexity and execution resources; package-requested limits can never raise those caps.

## Required verification

For each family, provide fixed-seed reproducibility cases, all request acceptance cases, independent correct/incorrect/partial/unassessed checker fixtures, and domain-boundary tests. Include the source and rationale for expected answers. Generator/checker round trips alone are insufficient. Exhaust small domains; document sample sizes and limits for larger ones.

For each visual, demonstrate shared state with the problem, legible labels, a keyboard alternative, learn versus exam disclosure rules, and behaviour when rendering fails. Include scene snapshots and captures when a compatible renderer exists. If it does not yet exist, report the scene-contract checks completed and visual execution as pending.

End with a completion table mapping every request requirement ID to evidence, failure, or pending validation. Do not remove difficult requirements to finish. Revise within the request's repair/time budget and report the remaining blockers on exhaustion.

## Import and student activation

Aristotle imports only packages, schemas, assets and results; it does not execute the supplied build scripts. Reproducible rebuilds occur in an external isolated toolchain. Activation requires resolved source bindings, validated capability restrictions, passing required checks and parent review of educational fit. Preview attempts never update learner evidence.

Modules do not award badges or points. Their validated attempts and help/transfer metadata can support host-owned [reward rules](../11-gamification-and-badges.md). Do not add reward fields to these strict schemas or use arbitrary transfer tags to manufacture milestones.

This contract is deliberately independent of any external agent vendor. A successful build means it satisfies the specification and verification gates; it does not depend on the builder knowing Aristotle's internal prompts.
