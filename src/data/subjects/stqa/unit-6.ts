import { Unit } from '@/types';

export const unit6Data: Unit = {
  id: 'unit-6',
  unitNumber: 6,
  title: 'Unit VI: Software Quality Assurance, Six Sigma & Quality Tools',
  shortTitle: 'SQA, Six Sigma & 7 QC Tools',
  description: 'Study of Software Quality Assurance (SQA) maintenance, SQA tasks, goals and metrics, Defect Removal Effectiveness (DRE), Six Sigma quality strategy (DMAIC / DMADV), Ishikawa 7 Basic Tools of Quality Control, Total Quality Management (TQM), and ISO 9000 standards.',
  syllabus: [
    'Software Quality Assurance: Maintaining SQA, Tasks, Goals, and Metrics',
    'Defect Removal Effectiveness (DRE): Concept, Mathematical Formulation, and Evaluation',
    'Activities and Parameters Required for Achieving High Software Quality',
    'Total Quality Management (TQM) Principles and Practices in Software',
    'Six Sigma Strategy: Characteristics, DMAIC (Define, Measure, Analyze, Improve, Control), DMADV, 3.4 DPMO Target',
    'Ishikawa 7 Basic Quality Tools: Fishbone Diagram, Flowchart, Histogram, Pareto Chart, Check Sheet, Scatter Diagram, Control/Run Charts',
    'Software Maintenance: Corrective, Adaptive, Perfective, and Preventive Maintenance'
  ],
  questionPaperIndex: [
    { paper: 'April 2023 ([6004]-491)', qMain: 'Q7(a) Six Sigma (6M), Q7(b) Flowchart vs Histogram (6M), Q7(c) Good Quality Parameters (5M)', qOr: 'Q8(a) Maintain SQA (6M), Q8(b) SQA Task Goals & Metrics (6M), Q8(c) Defect Removal Effectiveness (5M)' },
    { paper: 'Nov 2023 ([6181]-112)', qMain: 'Q7(a) TQM (6M), Q7(b) Ishikawa 7 Tools (6M), Q7(c) Software Maintenance (5M)', qOr: 'Q8(a) Flowcharts, Run & Control Charts (6M), Q8(b) Achieve Software Quality (6M), Q8(c) SQA Goals & Metrics (5M)' },
    { paper: 'April 2024 ([6263]-92)', qMain: 'Q7(a) Activities for High Quality (8M), Q7(b) Six Sigma (6M), Q7(c) Histogram, Flowchart, Control Chart (3M)', qOr: 'Q8(a) ISO 9000 Standard (6M), Q8(b) SQA Plan (5M), Q8(c) Ishikawa Basic Tools (6M)' },
    { paper: 'May 2024 ([6404]-92)', qMain: 'Q7(a) Six Sigma (6M), Q7(b) Maintain SQA (6M), Q7(c) Defect Removal Effectiveness (5M)', qOr: 'Q8(a) Flowchart vs Histogram (6M), Q8(b) Total Quality Management (6M), Q8(c) Run vs Control Charts (5M)' },
    { paper: 'Nov 2024 ([6584]-102)', qMain: 'Q7(a) Maintain SQA (5M), Q7(b) Flowchart & Histogram (6M), Q7(c) Six Sigma (6M)', qOr: 'Q8(a) ISO 9000 Standard (5M), Q8(b) Histogram, Flowchart, Control Chart (6M), Q8(c) High Quality Activities (6M)' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Defect Removal Effectiveness (DRE)', definition: 'Metric quantifying how effectively QA filters defects prior to release: DRE = E / (E + D).' },
      { term: 'Six Sigma', definition: 'A disciplined, data-driven quality methodology targeting no more than 3.4 defects per million opportunities (DPMO).' },
      { term: 'DMAIC', definition: 'Six Sigma improvement methodology: Define, Measure, Analyze, Improve, and Control.' },
      { term: 'Ishikawa 7 QC Tools', definition: 'The 7 fundamental graphical and statistical quality tools: Cause-and-Effect, Flowchart, Check Sheet, Pareto Chart, Histogram, Scatter Plot, Control Chart.' },
      { term: 'Total Quality Management (TQM)', definition: 'An organization-wide management approach focused on long-term success through customer satisfaction and continuous improvement.' }
    ],
    coreFormulas: [
      { name: 'Defect Removal Effectiveness (DRE)', latex: '\\text{DRE} = \\frac{E}{E + D}' },
      { name: 'Defects Per Million Opportunities (DPMO)', latex: '\\text{DPMO} = \\frac{\\text{Total Defects}}{\\text{Total Units} \\times \\text{Opportunities}} \\times 10^6' }
    ],
    comparisonHighlights: [
      { title: 'Flowchart vs Histogram', summary: 'Flowchart maps process sequence and decision flows; Histogram graphs frequency distribution of quantitative values.' },
      { title: 'Run Chart vs Control Chart', summary: 'Run chart graphs data over time; Control chart adds statistically computed Upper and Lower Control Limits (UCL/LCL).' }
    ],
    examTips: [
      'In DRE questions, explicitly state E = errors found before release and D = defects found by customers after release.',
      'Always sketch the Fishbone diagram with the 4M/6M branches (Man, Machine, Method, Material, Measurement, Mother Nature).',
      'For Six Sigma, highlight the target metric: 3.4 DPMO and explain all 5 DMAIC steps.'
    ]
  },
  questions: []
};
