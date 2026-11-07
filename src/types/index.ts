export type ImportanceCategory =
  | 'Frequently Asked'
  | 'Important'
  | 'Moderately Asked'
  | 'Rarely Asked'
  | 'Conceptual / Additional';

export interface PaperAppearance {
  paper: string; // e.g. "Paper 1"
  questionNo: string; // e.g. "Q1(a)"
  marks?: number; // e.g. 6
  notes?: string; // e.g. "First part; Ridge part in Q8"
}

export interface FormulaItem {
  name: string;
  latex: string;
  description?: string;
}

export interface ComparisonRow {
  parameter: string;
  col1: string;
  col2?: string;
  col3?: string;
  col4?: string;
  col5?: string;
  col6?: string;
}

export interface ComparisonTable {
  headers: string[];
  rows: ComparisonRow[];
}

export interface WorkedStep {
  stepNumber: number | string;
  title: string;
  explanation: string;
  math?: string;
  table?: {
    headers: string[];
    rows: (string | number)[][];
  };
}

export interface NumericalStep {
  stepNumber: number;
  title: string;
  explanation: string;
  formula?: string; // LaTeX formula
  substitution?: string; // Values substituted into formula
  calculation?: string; // Step arithmetic / work
  result?: string; // Intermediate or final value with units
  tip?: string; // Exam tip or common pitfall
  table?: {
    headers: string[];
    rows: (string | number)[][];
  };
}

export interface NumericalSolution {
  problemSummary: string;
  givenData: { label: string; value: string }[];
  toFind: string[];
  steps: NumericalStep[];
  finalAnswer: {
    label: string;
    value: string;
    interpretation?: string;
  };
}

export interface DiagramData {
  id: string;
  title: string;
  caption: string;
  type: 'svg-interactive' | 'mermaid' | 'chart' | 'custom';
  svgType?: string; // identifies specific visual component
  description?: string;
}

export interface AnswerSection {
  title: string; // e.g. "1. Definition", "2. Explanation", "3. Working Steps", etc.
  content?: string[]; // bullet points or paragraphs
  subsections?: {
    subtitle: string;
    points: string[];
  }[];
  table?: ComparisonTable;
  formulas?: FormulaItem[];
  codeBlock?: {
    language: string;
    code: string;
  };
  workedSteps?: WorkedStep[];
}

export interface Question {
  id: string; // e.g. "ml-u3-q1"
  unitId: string; // e.g. "unit-3"
  subjectId: string; // e.g. "machine-learning"
  qNumber: number; // e.g. 1
  title: string; // The full question text
  shortTitle: string; // Concise display title
  marks?: number; // e.g. 6 or 8
  importance: ImportanceCategory;
  occurrenceCount: number;
  papersAsked: PaperAppearance[];
  frequencyNote?: string;
  syllabusTopics: string[];

  // Answer Structure
  definition?: string;
  sections: AnswerSection[];
  diagrams?: DiagramData[];
  tables?: ComparisonTable[];
  numericalSolution?: NumericalSolution;
  examples?: string[];
  summary: string[]; // 4-5 line exam summary box
  keyPoints: string[]; // Important keywords / exam bullet points
  conclusion?: string;
}

export interface Unit {
  id: string; // e.g. "unit-3"
  unitNumber: number; // e.g. 3
  title: string; // e.g. "Supervised Learning — Regression"
  shortTitle: string; // e.g. "Regression"
  description: string;
  syllabus: string[];
  questionPaperIndex: {
    paper: string;
    qMain: string;
    qOr: string;
  }[];
  quickRevision: {
    keyDefinitions: { term: string; definition: string }[];
    coreFormulas: FormulaItem[];
    comparisonHighlights: { title: string; summary: string }[];
    examTips: string[];
  };
  questions: Question[];
}

export interface Subject {
  id: string; // e.g. "machine-learning"
  code: string; // e.g. "CS801"
  name: string; // e.g. "Machine Learning"
  semester: string; // e.g. "Semester VI" or "Semester VII"
  department: string; // e.g. "Computer Science & Engineering"
  description: string;
  iconName: string; // Lucide icon identifier
  accentColor: string; // Tailored color badge e.g. "indigo"
  syllabusOverview: string[];
  units: Unit[];
}

export interface UserProgress {
  completedQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  lastStudiedQuestionId?: string;
  lastStudiedSubjectId?: string;
  lastStudiedUnitId?: string;
  notesByQuestionId: Record<string, string>;
  updatedAt: string;
}
