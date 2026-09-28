/** Aristotle module SDK v1 contract proposal. Specification only; no host implementation. */
export type JsonValue = null | boolean | number | string | JsonValue[] | JsonObject;
export interface JsonObject { [key: string]: JsonValue }
export type Mode = "learn" | "diagnostic" | "practice" | "review" | "mock-exam";
export type Outcome = "correct" | "partial" | "incorrect" | "unassessed";
export type SourceRef = string; // Manifest binding ID + '#' + location ID.
export interface LanguageContext { locale: string; explanation: string; assessed: string }

export interface GenerateContext {
  familyId: string;
  seed: string;
  mode: Mode;
  language: LanguageContext;
  objectiveIds: string[];
  allowedSourceRefs: SourceRef[];
  constraints: {
    allowedMethodIds: string[]; // Empty means no additional method restriction.
    calculator: "allowed" | "not-allowed" | "unspecified";
    allowedResponseSchemaIds: string[];
  };
  difficulty: JsonObject;
  maxGenerationAttempts: number;
}

export interface PublicActivity {
  familyId: string;
  objectiveIds: string[];
  sourceRefs: SourceRef[];
  prompt: string;
  language: LanguageContext;
  responseSchemaId: string;
  publicState: JsonObject;
  maximumMarks: number;
  rubric: { id: string; maximumMarks: number }[]; // Every declared criterion is required in v1.
  estimatedSeconds: number;
  transferGroup: string;
}

export interface GeneratedActivity {
  public: PublicActivity;
  privateState: JsonObject; // Host-side only; never sent to the view bridge.
  sampledParameters: JsonObject;
}

export type GenerateResult =
  | { status: "generated"; activity: GeneratedActivity }
  | { status: "unavailable"; reason: string };

export interface ValidationResult {
  valid: boolean;
  reasons: string[];
}

export interface CriterionResult {
  id: string;
  status: "met" | "not-met" | "unassessed";
  earnedMarks: number;
  maximumMarks: number;
  evidence: string;
}

export interface AssessmentResult {
  outcome: Outcome;
  criteria: CriterionResult[];
  feedbackCodes: string[];
  diagnosticTags: string[]; // Proposed misconceptions, not a learner diagnosis.
  reason?: string;
}

export interface Action {
  type: string; // Must match the family's declared action schema and current mode.
  payload: JsonObject;
}

export type Scene =
  | { kind: "text"; text: string }
  | { kind: "image"; assetPath: string; alt: string }
  | {
      kind: "data-table";
      caption: string;
      columns: { id: string; label: string; unit?: string }[];
      rows: { id: string; cells: string[] }[]; // One cell per column, in declared order.
      description: string; // Display values only; checking uses validated activity state.
    }
  | {
      kind: "balance";
      coefficient: number;
      constant: number;
      rightSide: number;
      description: string;
    }
  | {
      kind: "line-graph";
      xRange: [number, number];
      yRange: [number, number];
      xLabel: string;
      yLabel: string;
      lines: { id: string; slope: number; intercept: number }[];
      points: { id: string; x: number; y: number }[];
      description: string;
    }
  | {
      kind: "cuboid";
      width: number;
      height: number;
      depth: number;
      unit: string;
      showUnitCubes: boolean;
      description: string;
    }
  | { kind: "custom-view"; viewId: string; publicModel: JsonObject; description: string };

export interface ViewModel {
  scenes: Scene[];
  controls: {
    id: string;
    label: string;
    actionType: string;
    inputSchemaId: string;
  }[];
  textAlternative: string;
}

export interface ActionResult {
  accepted: boolean;
  publicState: JsonObject;
  explanation?: string;
}

export interface ExplanationPlan {
  text: string;
  sourceRefs: SourceRef[];
  scenes: Scene[];
  suggestedActions: Action[];
}

/** Six named exports in one prebundled ES module; deterministic and no host I/O. */
export interface DynamicModuleV1 {
  generate(context: GenerateContext): GenerateResult;
  validateInstance(activity: GeneratedActivity, context: GenerateContext): ValidationResult;
  createView(activity: PublicActivity, mode: Mode): ViewModel;
  applyAction(activity: PublicActivity, action: Action, mode: Mode): ActionResult;
  check(activity: GeneratedActivity, response: JsonValue, working: JsonValue): AssessmentResult;
  explain(input: {
    activity: PublicActivity;
    assessment?: AssessmentResult;
    reveal: "hint" | "solution";
    authorisedPrivateState?: JsonObject; // Included only when the host permits the reveal.
  }): ExplanationPlan;
}

/** Authored independently from generator outputs; host/SDK harness consumes these. */
export interface CheckerFixture {
  id: string;
  activity: GeneratedActivity;
  response: JsonValue;
  working: JsonValue;
  expectedOutcome: Outcome;
  expectedCriteria: { id: string; status: CriterionResult["status"] }[];
  rationale: string;
}

/** Optional isolated HTML view: host messages through a scoped MessagePort only. */
export type CustomViewHostMessage =
  | { type: "init"; token: string; revision: number; mode: Mode; publicModel: JsonObject }
  | { type: "update"; token: string; revision: number; mode: Mode; publicModel: JsonObject }
  | { type: "dispose"; token: string };

export type CustomViewMessage =
  | { type: "ready"; token: string }
  | { type: "action"; token: string; revision: number; action: Action }
  | { type: "error"; token: string; message: string };
