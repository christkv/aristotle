# Product definition

## The problem to solve

A child preparing for a test has several different problems: finding the relevant material, understanding it, remembering it, applying it under test conditions, and deciding how to spend the time remaining. A parent often ends up selecting pages, inventing questions, explaining mistakes, and trying to judge readiness.

Aristotle should make that loop manageable. The parent supplies the curriculum context and materials, defines an upcoming exam, and checks the proposed scope. The child receives a small, clear next step, can ask for help by typing or speaking, and practises until there is useful evidence of understanding.

Example: a parent selects fractions from chapter 4, excludes the final section, adds a teacher worksheet, and sets a Friday exam. One child needs work on equivalent fractions; another needs practice interpreting word problems. The same source library supports two different plans.

## People and responsibilities

| Person | Main jobs | Product responsibility |
| --- | --- | --- |
| Student | Understand, practise, request help, rehearse, see progress | Clear language, manageable sessions, understandable feedback |
| Parent or caregiver | Add sources, choose curriculum, define exams, review problems, control AI use | Fast setup, visible scope, editable plans, meaningful progress evidence |
| Future teacher or tutor | Provide objectives, expected methods, rubrics, and materials | Initially represented through imported guidance; no school administration product required |

Student profiles hold a display name, school level, preferred explanation language, and session preferences. Avoid requiring a real name or exact birth date. Parent settings govern source import, external processing, spending, and source deletion. A student can flag a question or assessment as wrong.

## What existing approaches teach us

These are reference points, not claims that competing products lack every proposed feature.

| Approach | Observed capability | Implication for Aristotle |
| --- | --- | --- |
| Source-based AI notebooks | Google documents source-derived study guides, quizzes, flashcards, and cited explanations in NotebookLM. | Source upload and quiz generation are useful baseline features; our hypothesis centres on a persistent exam plan and learning evidence. [Google's feature overview](https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-student-features/) |
| Conversational tutors | Khanmigo describes guiding learners toward answers through tutoring dialogue. | Help should build the student's reasoning, with an escape from endless hints when an explanation is needed. [Khanmigo](https://www.khanmigo.ai/) |
| Recall and review tools | Anki documents active recall and spaced repetition as its central approach. | Revisit material across sessions, while also practising reasoning and the formats of the actual exam. [Anki manual](https://docs.ankiweb.net/background.html) |
| Manually prepared study packs | A parent can assemble selected readings, questions, answer keys, and a schedule. | This is the practical baseline: the application must reduce repeated parent work while keeping the parent able to correct it. |

Our proposed combination is a reusable household curriculum library, externally authored content/dynamic modules, an explicit exam contract, subject-specific assessment, and a tutor whose next action reflects recorded evidence. Its value must be demonstrated in real preparation sessions; a feature list alone will not establish it.

## Modules built outside Aristotle

A content module defines what to learn and its supporting sources. A dynamic module provides activities that change: generated tests, answer checkers, manipulable graphs, 3D models and simulations. External agents using frontier models build these from a targeted specification; Aristotle validates and runs their packages. The tutor chooses among installed capabilities and adapts the learning sequence.

For example, an externally built algebra module can produce a new equation, verify its solution, explain balanced operations visually, and ask for another independent attempt. A graph or 3D explanation uses the same values as its question and checker. New modules fitting the existing contract should not require a developer to rewrite Aristotle or manually enter every exercise.

## End-to-end experience

### 1. Set up a child and a subject

The parent creates a student profile, adds a subject such as “Mathematics, KS3,” and optionally selects a starting template. They can rename topics and describe the methods used at school. Subjects do not need to match a built-in catalogue.

### 2. Build the subject library

The parent imports a complete book, notes, and worksheets. The application preserves the originals, proposes a chapter outline and learning objectives, and shows what it could read reliably. The parent can correct the outline and source mappings. Whole-book import should not require manually splitting a book into chapters.

The parent can use an existing module or export a module request plus selected sources to an external agent. Returned packages are imported, checked and previewed before activation. A missing capability is visible; a child's study session can continue with existing material while authoring happens elsewhere. Source export and external model usage are deliberate parent actions.

### 3. Define an exam

The parent enters a title, date, available study time, and language, then selects chapters, pages, topics, or learning objectives. Teacher instructions determine exclusions, permitted methods, calculator use, question formats, and any known weighting. The application produces a reviewable scope summary, including unreadable material and objectives with no supporting source.

### 4. Find a starting point

The student takes a short, low-pressure diagnostic or starts with guided practice. The diagnostic samples the selected objectives; it does not pretend that a few questions assess the entire subject. Existing evidence from earlier sessions can shorten this step.

### 5. Study in short sessions

The home screen offers a concrete action: “Practise equivalent fractions for 15 minutes.” A session mixes retrieval, explanations, exercises, and review as needed. The child can request a hint, see a worked example, change explanation language, take a break, or report a problem. They can speak with the current subject agent, hear replies, and switch between voice and text without losing the exercise or exam context.

When useful, the tutor opens a diagram, graph, or 3D view and asks the student to predict a change, manipulate a control, and explain what happened. It then returns to a fresh exam-style question. Dynamic test families supply checked new instances instead of relying only on a fixed question bank.

### 6. Rehearse and review

A practice exam follows the defined scope and format. It withholds feedback until submission and then shows mistakes, supporting sources, and suggested revision. Parent and child can distinguish independent success from success with hints.

### 7. Learn from the real exam

Optionally record the result and difficult topics afterwards. Use this to adjust the next plan, while keeping school grades separate from the app's own practice evidence. Offer continued review rather than discarding useful material when an exam ends.

## Main screens

| Screen | Primary content and action |
| --- | --- |
| Today | Upcoming exam, time available, next session, optional study mission, pause/resume |
| Subjects | Courses, topic map, objectives, and source library |
| Modules | Installed content/dynamic versions, capability gaps, request export, package import, validation report and preview |
| Source reader | Original page or passage alongside explanation and citations |
| Exam setup | Scope selection, exclusions, formats, schedule, and scope preview |
| Study workspace | One current task, text/voice conversation, interactive diagram/graph/3D panel, hints, transcript and sources |
| Practice exam | Question navigation, optional timer, submit, then review |
| Progress | Evidence by objective, unresolved difficulties, uncovered material; optional badges shown separately |
| Parent settings | Profiles, OpenAI/Claude connections, voice services, budget, backup, content review and gamification preferences |

Conversation is available within the study workspace, but the schedule, scope, answers, and progress are structured records. A student should not need to reconstruct instructions from a long chat.

## Principles for the student experience

- Make the next action obvious, with one main learning task at a time.
- Be encouraging and specific: explain the error and the next step without labels such as “bad at maths.”
- Let the child say “I don't know,” request an explanation, or stop without penalty.
- Keep text size, keyboard navigation, contrast, and visible focus usable from the first version. Do not encode progress by colour alone.
- Let parents configure session length and timed practice; avoid imposing speed on untimed learning.
- Use a respectful secondary-school tone for the 12- and 14-year-old learners. Do not infer ability solely from age or use a presentation aimed at small children.
- Show why an activity was chosen, for example: “This is in Friday's test, and the last two attempts needed a hint.”
- Use ordinary terms such as “Needs another try” instead of a mysterious readiness percentage.

Optional [study missions and badges](11-gamification-and-badges.md) can recognise habits, recovery and evidenced milestones. Offer per-child presentation settings and transparent earning rules. These rewards must not alter marks, unlock essential help or obscure remaining exam coverage.

## Boundaries

The initial product prepares children for exams using supplied materials. It is not a school management system, a social network, a public textbook marketplace, or a general assistant with control of the computer. It does not promise a grade, certify mastery, or complete live school exams on the student's behalf.

Direct spoken tutoring, conversational Spanish practice, dynamic maths and science tests/explanations, images/diagrams, graphs and an initial 3D activity are in scope. English grammar tests and vocabulary expansion use the same module framework, with bounded starter families proposed for the first release. Start with a small validated set of these capabilities. Later extensions include handwriting, formal pronunciation and listening assessment, broader simulations, scans where not initially required, local models, and device sync. The external module contract must allow growth without treating every future interaction as part of the first release.

## How we will judge usefulness

Observe whether a parent can set up a second exam without rebuilding the course, whether a child can begin and complete a session independently, and whether errors turn into later independent success on different questions. Track setup effort, confusing feedback, broken citations, and disputed marks alongside learning evidence.

Also check that an external agent can build a new module from the handoff without undocumented knowledge, and that a visual explanation helps the child answer an independent question afterwards. A module's technical success is necessary but does not establish learning value.

Session time and question counts are descriptive metrics, not the definition of success. A shorter session that resolves a misconception can be more valuable than a longer one with many repeated easy answers.
