# Gamification and badges

## Purpose

Explore optional gamification that helps the children start studying, return to difficult topics and notice real progress towards an exam. Badges and small challenges should reinforce the study loop already defined: diagnose, practise, understand feedback, try independently and revisit. Their educational benefit is a hypothesis to evaluate with the children, not an assumed result of adding points.

The user has requested exploration of gamification and badges. The mechanics below are proposals, not a decision to build a full game. Start with quiet badges and short study missions; test points, collections and narrative themes later if they make sessions more useful.

## Experience options

Initially each student can independently choose an understated presentation or no gamification. A themed presentation is a later option to test. Avoid assuming both children want the same style. Turning it off changes presentation, not access to explanations, progress, modules or study plans.

| Mechanic | Proposed use | Relation to exam preparation | Initial scope |
| --- | --- | --- | --- |
| Study missions | A short, editable task such as "practise density, review one mistake, then try a fresh question" | Drawn from current scope, gaps and available time | Include a small set of host-defined mission templates |
| Badges | Named milestones with visible earning rules and links to supporting work | Recognise habits, recovery, varied evidence and rehearsal separately | Include a small host-defined catalogue |
| Topic map | Show the topics selected for an exam, current evidence and next useful task | Makes remaining coverage understandable | Reuse the ordinary objective map; unsupported topics remain visible |
| Personal challenge | Beat an earlier pattern of errors or complete a chosen preparation routine | Compare with the student's own previous work | Proposed; no speed-based scoring by default |
| Points or levels | A separate measure of participation with a clear, capped rule | May help some children start; must not look like subject mastery | Experiment after the core study loop works |
| Collections or story themes | Optional cosmetic progress around completed missions | Adds presentation without changing the learning task | Later experiment; all study functions remain available without it |

There is no first-release need for a competitive leaderboard or public profile. Keep each child's work and rewards in their own profile. A future cooperative household challenge can recognise each child's contribution without exposing comparative marks.

## A mission follows the study plan

The host selects a supported objective from the active exam plan, the available time and the learner's evidence. A mission records its exam revision, objective IDs, permitted families, completion rule and assistance policy. It cannot silently add an unrelated topic because that activity awards more points.

For example, a ten-minute science mission might ask the child to try a density calculation, inspect the mass/volume graph if needed, and answer a fresh calculation independently. Grammar can use an agreement explanation followed by a held-back sentence. Vocabulary can revisit selected senses and attempt a context without displaying the word list. The planner may substitute a supported activity or shorten the mission when time runs out; record the actual completion status.

Give the student a useful next step even after a wrong or unassessed answer. A mission can recognise completion of a study routine without pretending its objective has been mastered. Pause, skipping an unavailable task or stopping at the agreed time must remain straightforward. Exam scope revisions invalidate or revise pending missions explicitly; completed missions retain their historical scope.

## Proposed badge catalogue

Names and thresholds are starting proposals for feedback from the children. Badge descriptions always say what was demonstrated and link to the relevant session or attempts.

| Badge | Category | Proposed earning rule | Meaning and limits |
| --- | --- | --- | --- |
| First study session | Participation | Complete one scoped session containing at least one submitted supported activity and a recorded next step | Started the study routine; no mastery claim |
| Returned to it | Habit | Revisit an objective on a later study date and submit a fresh independent response | Returned for retrieval practice; correctness is shown separately |
| Worked through it | Recovery | After a supported incorrect attempt and feedback, answer a different valid instance independently and correctly on the same objective | One demonstrated recovery; does not establish long-term retention |
| A new angle | Varied evidence | Independently succeed on the same objective in two validated, distinct transfer groups | Evidence across the declared representations/contexts; number changes within one family do not qualify |
| Practice milestone | Learning evidence | An objective reaches the existing "Demonstrated in practice" rule through eligible independent evidence | Mirrors the current evidence rule; does not add another success or predict a school grade |
| Rehearsal complete | Preparation | Finish a frozen mock exam and complete its feedback review, with unresolved results and coverage gaps visible | Completed rehearsal at any score; does not mean ready for everything |
| Word in a new context | Language application | A supported production task demonstrates the selected sense in a new context under a resolved rubric | Available only once a production family/evaluator is supported; the initial recall family cannot award it |

The first six are proposed first-release candidates. Enable only badges whose host events, source/module coverage and checks exist. The vocabulary production badge illustrates later expansion and must not appear as an earnable task before its assessment route is available.

Badges based on correctness exclude hinted, revealed, reused-as-fresh, invalid, disputed or provisional assessments. A process badge can recognise a completed session with unresolved results if its rule is met; it must not relabel those answers correct. "Fresh" follows recorded instance/structure and exposure history, not a new random seed alone.

## Keep reward progress and learning evidence separate

Store participation rewards, habit milestones and learning-evidence badges as distinct categories. Show readiness through the ordinary objective evidence model with dates, counts, assistance and gaps. Points do not feed that model. Earning a badge never awards marks, changes a checker outcome or adds a successful attempt.

Do not reward speed at the expense of careful work or make asking for help costly. Hints still count as assistance for evidence, but do not deduct earned participation rewards. Return-to-study recognition should tolerate missed days rather than resetting a long streak or creating a study debt. Exam countdowns inform planning; they need not add pressure through expiring rewards.

If points are tested later, publish a small host-owned rule, cap repeated credit from the same activity, and reward planned completion rather than message count, time with the app open or repeated easy questions. Keep ordinary explanations and hints available without spending points. Avoid adding point totals to marks or presenting a participation level as scientific or language proficiency.

Celebrations are brief, dismissible and compatible with reduced motion and muted audio. Suppress them during mock exams and do not interrupt spoken explanations. Show rewards at a natural pause or session review; provide plain text equivalents.

## Host ownership and external modules

The host reward service evaluates validated study events. Dynamic modules supply ordinary objectives, family/transfer identity, responses and assessment results through the existing contract; they cannot award badges, write points or query another student's rewards. Transfer identities need educational validation, so a module cannot create two arbitrary tags to manufacture a diversity badge.

External builders should explain how the module supports an independent follow-up, which interactions count as help, and which evidence is limited. The supplied request/manifest schemas do not introduce a badge or points field: do not invent one. New reward rules belong to a reviewed host catalogue. A future module-provided badge design would require its own versioned contract and review.

Proposed host records:

- **Reward rule:** stable ID and version, category, display text, deterministic eligibility predicate, evidence prerequisites, repeat limit and supported events.
- **Mission:** ID, student binding, exam revision, selected objectives/families, time budget, completion rule and state.
- **Award:** student binding, rule ID/version, qualifying event/attempt IDs, earned time, scope where applicable and current validity.
- **Presentation preference:** per-student off/quiet choice, optional themed choice when implemented, sound and motion settings. Parent controls can disable experiments without changing learning records.

Use idempotent event processing: replaying a submission after a crash or importing a backup must not award it twice. Store a ledger of awards rather than trusting the UI counter. Event processing is local and available with deterministic offline study. Provider or module-generated prose can explain a milestone but cannot decide that its predicate has passed.

When a corrected assessment changes qualifying evidence, recompute affected learning badges and retain an understandable history. Explain a withdrawn evidence badge as a corrected activity or marking decision, not misconduct by the child. Preserve a valid participation milestone when its separate rule still holds. If supporting records are deleted or unavailable, follow deletion policy and mark the evidence unavailable rather than inventing continued verification. No cross-device merge protocol is implied by this local-first design.

## Acceptance and evaluation

| ID | Scenario | Expected result |
| --- | --- | --- |
| G01 | Turn off gamification for one child | All study functions and readiness evidence remain available; the sibling's setting is unchanged |
| G02 | Submit a wrong answer, use a hint, then answer the same revealed item correctly | Useful feedback and any valid participation credit; no independent-success badge |
| G03 | Solve many number variants or resubmit the same attempt | No duplicate awards or invented transfer; repetition is represented honestly |
| G04 | Correct a faulty checker after a badge was earned | Recompute affected evidence badges with a clear explanation; preserve unrelated valid milestones |
| G05 | A module emits invented reward fields or a tutor announces an unearned badge | Host ignores/rejects unsupported fields; only validated host events can create an award |
| G06 | Reopen after interruption or restore a backup | Award processing is idempotent and consistent with the saved attempts |
| G07 | Exam is near or study time runs out | Missions fit the remaining plan; no unrelated reward task displaces essential exam work |
| G08 | Student misses several days, studies with help or uses accessibility alternatives | No reward debt or penalty; the same supported evidence rules apply |
| G09 | Complete a mock with low marks or unresolved answers | Rehearsal completion can be recognised; actual results and coverage gaps remain visible |
| G10 | Initial vocabulary recall succeeds | Recall evidence can qualify for applicable milestones; no contextual-production or spelling badge is awarded |

During the household pilot, ask whether missions help each child begin, whether badges feel age-appropriate, and whether they understand the difference between completion and readiness. Observe parent workload, session completion, unnecessary repetition, later independent performance and willingness to return after mistakes. Compare quiet and disabled presentation if the children want to; two learners cannot establish a general effectiveness claim. Keep, revise or remove a mechanic based on usefulness rather than engagement time alone.
