import { Unit } from '@/types';

export const unit6Data: Unit = {
  "id": "unit-6",
  "unitNumber": 6,
  "title": "Unit VI: Software Quality Assurance, Six Sigma & Quality Tools",
  "shortTitle": "SQA, Six Sigma & 7 QC Tools",
  "description": "Comprehensive study of Software Quality Assurance (SQA) maintenance, SQA tasks, goals and metrics, Defect Removal Effectiveness (DRE), Six Sigma quality strategy (DMAIC / DMADV), Ishikawa 7 Basic Tools of Quality Control, Total Quality Management (TQM), and ISO 9000 standards.",
  "syllabus": [
    "Software Quality Assurance: Maintaining SQA, Tasks, Goals, and Metrics",
    "Defect Removal Effectiveness (DRE): Concept, Mathematical Formulation, and Evaluation",
    "Activities and Parameters Required for Achieving High Software Quality",
    "Total Quality Management (TQM) Principles and Practices in Software",
    "Six Sigma Strategy: Characteristics, DMAIC (Define, Measure, Analyze, Improve, Control), DMADV, 3.4 DPMO Target",
    "Ishikawa 7 Basic Quality Tools: Fishbone Diagram, Flowchart, Histogram, Pareto Chart, Check Sheet, Scatter Diagram, Control/Run Charts",
    "Software Maintenance: Corrective, Adaptive, Perfective, and Preventive Maintenance"
  ],
  "questionPaperIndex": [
    {
      "paper": "May 2023 ([6004]-491)",
      "qMain": "Q7(a) Six Sigma (6M), Q7(b) Flowchart vs Histogram (6M), Q7(c) Good Quality Parameters (5M)",
      "qOr": "Q8(a) Maintain SQA (6M), Q8(b) SQA Task Goals & Metrics (6M), Q8(c) Defect Removal Effectiveness (5M)"
    },
    {
      "paper": "Nov 2023 ([6181]-112)",
      "qMain": "Q7(a) TQM (6M), Q7(b) Ishikawa 7 Tools (6M), Q7(c) Software Maintenance (5M)",
      "qOr": "Q8(a) Flowcharts, Run & Control Charts (6M), Q8(b) Achieve Software Quality (6M), Q8(c) SQA Goals & Metrics (5M)"
    },
    {
      "paper": "May 2024 ([6263]-92)",
      "qMain": "Q7(a) Activities for High Quality (8M), Q7(b) Six Sigma (6M), Q7(c) Histogram, Flowchart, Control Chart (3M)",
      "qOr": "Q8(a) ISO 9000 Standard (6M), Q8(b) SQA Plan (5M), Q8(c) Ishikawa Basic Tools (6M)"
    },
    {
      "paper": "May 2025 ([6406]-92)",
      "qMain": "Q7(a) Six Sigma (6M), Q7(b) Maintain SQA (6M), Q7(c) Defect Removal Effectiveness (5M)",
      "qOr": "Q8(a) Flowchart vs Histogram (6M), Q8(b) Total Quality Management (6M), Q8(c) Run vs Control Charts (5M)"
    },
    {
      "paper": "Nov 2025 ([6584]-102)",
      "qMain": "Q7(a) Maintain SQA (5M), Q7(b) Flowchart & Histogram (6M), Q7(c) Six Sigma (6M)",
      "qOr": "Q8(a) ISO 9000 Standard (5M), Q8(b) Histogram, Flowchart, Control Chart (6M), Q8(c) High Quality Activities (6M)"
    }
  ],
  "quickRevision": {
    "keyDefinitions": [
      {
        "term": "Defect Removal Effectiveness (DRE)",
        "definition": "Metric quantifying how effectively QA filters defects prior to release: DRE = E / (E + D)."
      },
      {
        "term": "Six Sigma",
        "definition": "A disciplined, data-driven quality methodology targeting no more than 3.4 defects per million opportunities (DPMO)."
      },
      {
        "term": "DMAIC",
        "definition": "Six Sigma improvement methodology: Define, Measure, Analyze, Improve, and Control."
      },
      {
        "term": "Ishikawa 7 QC Tools",
        "definition": "The 7 fundamental graphical and statistical quality tools: Cause-and-Effect, Flowchart, Check Sheet, Pareto Chart, Histogram, Scatter Plot, Control Chart."
      },
      {
        "term": "Total Quality Management (TQM)",
        "definition": "An organization-wide management approach focused on long-term success through customer satisfaction and continuous improvement."
      }
    ],
    "coreFormulas": [
      {
        "name": "Defect Removal Effectiveness (DRE)",
        "latex": "\\text{DRE} = \\frac{E}{E + D}"
      },
      {
        "name": "Defects Per Million Opportunities (DPMO)",
        "latex": "\\text{DPMO} = \\frac{\\text{Total Defects}}{\\text{Total Units} \\times \\text{Opportunities}} \\times 10^6"
      },
      {
        "name": "Upper Control Limit (UCL)",
        "latex": "\\text{UCL} = \\mu + 3\\sigma"
      },
      {
        "name": "Lower Control Limit (LCL)",
        "latex": "\\text{LCL} = \\mu - 3\\sigma"
      }
    ],
    "comparisonHighlights": [
      {
        "title": "Flowchart vs Histogram",
        "summary": "Flowchart maps process sequence and decision flows; Histogram graphs frequency distribution of quantitative values."
      },
      {
        "title": "Run Chart vs Control Chart",
        "summary": "Run chart graphs data over time; Control chart adds statistically computed Upper and Lower Control Limits (UCL/LCL)."
      }
    ],
    "examTips": [
      "In DRE questions, explicitly state E = errors found before release and D = defects found by customers after release.",
      "Always sketch the Fishbone diagram with the 4M/6M branches (Man, Machine, Method, Material, Measurement, Mother Nature).",
      "For Six Sigma, highlight the target metric: 3.4 DPMO and explain all 5 DMAIC steps."
    ]
  },
  "questions": [
    {
      "id": "stqa-u6-q1",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 1,
      "title": "Can You Explain How to Maintain SQA? Detail Organizational Activities and Infrastructure",
      "shortTitle": "Maintaining SQA in an Organization",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q8(a)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q7(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q7(a)",
          "marks": 5
        }
      ],
      "syllabusTopics": [
        "Software Quality Assurance",
        "Maintaining SQA",
        "SQA Activities",
        "Audits"
      ],
      "definition": "Maintaining SQA involves ongoing organizational governance, quality infrastructure, continuous staff instruction, independent internal/external audits, configuration control, and corrective action systems.",
      "sections": [
        {
          "title": "1. Core Activities for Maintaining SQA",
          "content": [
            "Quality Infrastructure Setup: Standard quality models, approved templates, review checklists, and standard operating procedures (SOPs).",
            "Staff Instruction & Training: Continual education programs ensuring engineers are proficient in current coding standards, test design, and security practices.",
            "Regular Internal Audits: Periodic surveillance audits verifying that project teams adhere to documented processes rather than cutting corners.",
            "Corrective & Preventive Action (CAPA): Formal procedures to analyze audit findings, trace defect root causes, and update processes to prevent recurrence.",
            "Independent SQA Authority: The SQA team must report directly to senior executive management, guaranteeing organizational independence from project managers pressured by deadlines."
          ]
        },
        {
          "title": "2. SQA Maintenance Lifecycle",
          "content": [
            "Establish standard quality manual and procedures -> Train staff -> Perform regular surveillance audits -> Log non-compliances -> Enforce management corrective action -> Update standard process repository."
          ]
        }
      ],
      "summary": [
        "Maintaining SQA requires institutional commitment, training, independent audits, and CAPA procedures.",
        "SQA groups must report independently from project delivery management.",
        "Continual audits ensure processes evolve and standards are respected under delivery pressure."
      ],
      "keyPoints": [
        "Infrastructure: Standard manuals, templates, review checklists.",
        "Training: Continuous staff engineering education.",
        "Audits: Internal quality audits and third-party surveillance.",
        "Independence: SQA reports directly to executive leadership."
      ]
    },
    {
      "id": "stqa-u6-q2",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 2,
      "title": "Illustrate Different Tasks, Goals, and Metrics in Software Quality Assurance (SQA)",
      "shortTitle": "SQA Tasks, Goals, and Metrics",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q8(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2023",
          "questionNo": "Q8(c)",
          "marks": 5
        }
      ],
      "syllabusTopics": [
        "SQA Tasks",
        "SQA Goals",
        "SQA Metrics"
      ],
      "definition": "SQA operates through concrete tasks (planning, auditing, reviewing), explicit quality goals (requirements conformance, defect minimization), and quantifiable metrics (defect density, DRE, test coverage).",
      "sections": [
        {
          "title": "1. Primary SQA Tasks",
          "content": [
            "Prepare SQA Plan: Formulate project-specific quality blueprint defining audits, reviews, and test regimes.",
            "Participate in Process Description: Ensure engineering processes match organizational policies and client contracts.",
            "Review Software Engineering Activities: Conduct formal audits verifying that development complies with standards.",
            "Audit Designated Work Products: Evaluate requirements, design blueprints, code, and test artifacts.",
            "Track and Report Deviations: Escalate non-compliance issues directly to senior management."
          ]
        },
        {
          "title": "2. Primary SQA Goals",
          "content": [
            "Requirements Quality: Ensure completeness, testability, and consistency of functional and non-functional specifications.",
            "Design Quality: Ensure architectural blueprints exhibit high cohesion, low coupling, and maintainability.",
            "Code Quality: Ensure source code strictly follows coding standards, naming conventions, and security best practices.",
            "Quality Control Effectiveness: Maximize early defect detection before production release."
          ]
        },
        {
          "title": "3. Essential SQA Metrics",
          "content": [
            "Defect Density: Number of defects per 1,000 lines of code (KLOC) or per Function Point.",
            "Defect Removal Effectiveness (DRE): Percentage of total bugs caught before customer release.",
            "Test Execution Progress & Pass Rate: Percentage of scheduled tests executed and passed on time."
          ],
          "formulas": [
            {
              "name": "Defect Density",
              "latex": "\\text{Defect Density} = \\frac{\\text{Total Defects}}{\\text{Size in KLOC}}"
            }
          ]
        }
      ],
      "summary": [
        "SQA tasks involve quality planning, process definition, auditing, and deviation tracking.",
        "SQA goals focus on requirement completeness, architectural integrity, and code conformance.",
        "SQA metrics provide quantifiable visibility into defect density, DRE, and test progress."
      ],
      "keyPoints": [
        "Tasks: Plan, Audit, Review, Track, Escalate deviations.",
        "Goals: Requirements quality, design elegance, code standards conformance.",
        "Metrics: Defect density (Defects/KLOC), DRE, pass rates."
      ]
    },
    {
      "id": "stqa-u6-q3",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 3,
      "title": "Explain Defect Removal Effectiveness (DRE) in Detail: Concept, Mathematical Formula, and Injection vs Removal",
      "shortTitle": "Defect Removal Effectiveness (DRE)",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q8(c)",
          "marks": 5
        },
        {
          "paper": "May 2025",
          "questionNo": "Q7(c)",
          "marks": 5
        }
      ],
      "syllabusTopics": [
        "Defect Removal Effectiveness",
        "DRE Formula",
        "Defect Filtering",
        "Quality Metrics"
      ],
      "definition": "Defect Removal Effectiveness (DRE) is a fundamental software quality metric measuring the percentage of defects trapped and eliminated by quality assurance activities before release: DRE = E / (E + D), where E is pre-release errors and D is post-release defects found by customers.",
      "sections": [
        {
          "title": "1. Mathematical Definition of DRE",
          "content": [
            "E = Errors found during development, reviews, inspections, and pre-release testing.",
            "D = Defects discovered by end-users/customers during operational production use.",
            "Total Defects = E + D.",
            "DRE approaches 1.0 (or 100%) as the quality filtering mechanism catches more bugs prior to release."
          ],
          "formulas": [
            {
              "name": "Defect Removal Effectiveness (DRE)",
              "latex": "\\text{DRE} = \\frac{E}{E + D} \\times 100\\%"
            }
          ]
        },
        {
          "title": "2. Phase-Based DRE (Filter Efficiency)",
          "content": [
            "DRE can also be applied across individual SDLC phases: DRE_i = E_i / (E_i + E_{i+1}), where E_i is defects detected in phase i, and E_{i+1} is defects originating in phase i but discovered in phase i+1.",
            "High phase DRE ensures defects are caught at their phase of origin before amplification occurs."
          ]
        },
        {
          "title": "3. Concrete Numerical Example",
          "content": [
            "During development, inspections and QA testing uncover 450 bugs (E = 450).",
            "In the first 6 months of customer production use, clients report 50 defects (D = 50).",
            "Total Defects = 450 + 50 = 500.",
            "DRE = 450 / 500 = 0.90 = 90%.",
            "Interpretation: The QA process successfully filtered 90% of latent defects, allowing 10% to slip through to production."
          ]
        }
      ],
      "summary": [
        "DRE measures the defect filtering efficiency of pre-release QA activities.",
        "Formula: DRE = E / (E + D), where E = pre-release errors and D = post-release bugs.",
        "Higher DRE directly correlates with customer satisfaction and reduced warranty costs."
      ],
      "keyPoints": [
        "Formula: DRE = E / (E + D).",
        "E = errors found internally before shipping; D = defects found by customers.",
        "Target for mature organizations is DRE >= 95%."
      ]
    },
    {
      "id": "stqa-u6-q4",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 4,
      "title": "What Parameters and Activities Are Required for Achieving Good Software Quality?",
      "shortTitle": "Parameters for Achieving Good Software Quality",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q7(c)",
          "marks": 5
        },
        {
          "paper": "Nov 2023",
          "questionNo": "Q8(b)",
          "marks": 6
        },
        {
          "paper": "May 2024",
          "questionNo": "Q7(a)",
          "marks": 8
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q8(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Achieving Software Quality",
        "Quality Parameters",
        "SQA Activities"
      ],
      "definition": "Achieving good software quality is the outcome of disciplined software engineering, solid project management, early static reviews, rigorous dynamic testing, and executive leadership commitment.",
      "sections": [
        {
          "title": "1. Core Parameters Required for Good Software Quality",
          "content": [
            "1. Functional Correctness: Complete conformance with all stated and implied user requirements.",
            "2. Reliability & Fault Tolerance: High Mean Time Between Failures (MTBF) and graceful recovery from exceptions.",
            "3. Usability & User Experience: Intuitive navigation, clear error prompts, and low user cognitive load.",
            "4. Efficiency & Performance: Optimal response times, high throughput, and lean CPU/memory utilization.",
            "5. Maintainability & Clean Architecture: High cohesion, loose coupling, thorough documentation, and clean modular code.",
            "6. Portability & Compatibility: Seamless execution across operating systems, browsers, and hardware devices."
          ]
        },
        {
          "title": "2. Key Activities Required to Achieve Quality",
          "content": [
            "Solid Engineering Upfront: Eliminating architectural and design flaws during early modeling phases.",
            "Formal Technical Reviews: Mandatory walkthroughs and Fagan inspections catching defects before compilation.",
            "Disciplined Change & Configuration Control: Strictly controlling requirements churn and code branching.",
            "Realistic Project Estimation: Avoiding unrealistic deadlines that force developers to cut corners on testing."
          ]
        }
      ],
      "summary": [
        "Quality is built into software through upfront engineering discipline, not tested in at the end.",
        "Key parameters: Correctness, reliability, efficiency, maintainability, and usability.",
        "Essential activities: Early static reviews, formal change control, realistic scheduling, and multi-tier testing."
      ],
      "keyPoints": [
        "Quality parameters: Correctness, Reliability, Usability, Efficiency, Maintainability, Portability.",
        "Upfront defect prevention beats late defect detection.",
        "Requires leadership commitment and realistic scheduling."
      ]
    },
    {
      "id": "stqa-u6-q5",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 5,
      "title": "Explain Six Sigma Strategy for Software Engineering: Characteristics, 3.4 DPMO Target, DMAIC, and DMADV",
      "shortTitle": "Six Sigma Strategy for Software",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q7(a)",
          "marks": 6
        },
        {
          "paper": "May 2024",
          "questionNo": "Q7(b)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q7(a)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q7(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Six Sigma",
        "DMAIC",
        "DMADV",
        "3.4 DPMO",
        "Statistical Quality"
      ],
      "definition": "Six Sigma is a disciplined, data-driven quality methodology aimed at eliminating defects in software processes, targeting virtually defect-free output with no more than 3.4 defects per million opportunities (DPMO).",
      "sections": [
        {
          "title": "1. Core Characteristics of Six Sigma",
          "content": [
            "Data-Driven & Statistical: Relies on hard numerical measurements, defect counts, and statistical variance reduction.",
            "Customer Focus: Identifies Critical-to-Quality (CTQ) parameters directly tied to customer satisfaction.",
            "The 3.4 DPMO Benchmark: Six standard deviations between process mean and nearest specification limit equals 99.99966% defect-free output.",
            "Structured Roles: Belts system (Yellow, Green, Black, Master Black Belt) driving organizational quality projects."
          ],
          "formulas": [
            {
              "name": "Defects Per Million Opportunities (DPMO)",
              "latex": "\\text{DPMO} = \\frac{\\text{Total Defects}}{\\text{Total Units} \\times \\text{Opportunities/Unit}} \\times 10^6"
            }
          ]
        },
        {
          "title": "2. The DMAIC Methodology (for Improving Existing Processes)",
          "content": [
            "Define: Identify project goals, client requirements, and CTQ parameters.",
            "Measure: Collect baseline process data and compute current defect rates and DPMO.",
            "Analyze: Use Ishikawa fishbone diagrams, Pareto charts, and root-cause analysis to isolate vital few causes.",
            "Improve: Formulate, implement, and verify process optimizations to eliminate root causes.",
            "Control: Institutionalize standard procedures, control charts, and monitoring to sustain improvements."
          ]
        },
        {
          "title": "3. DMADV Methodology (for Designing New Processes)",
          "content": [
            "Used when designing a completely new software product or process from scratch: Define, Measure, Analyze, Design, and Verify."
          ]
        }
      ],
      "summary": [
        "Six Sigma targets near-perfection: 3.4 Defects Per Million Opportunities (99.99966% quality).",
        "DMAIC improves existing processes: Define -> Measure -> Analyze -> Improve -> Control.",
        "DMADV designs new processes: Define -> Measure -> Analyze -> Design -> Verify."
      ],
      "keyPoints": [
        "Six Sigma target: 3.4 DPMO (99.99966% defect-free).",
        "DMAIC = Define, Measure, Analyze, Improve, Control (existing processes).",
        "DMADV = Define, Measure, Analyze, Design, Verify (new architectures)."
      ]
    },
    {
      "id": "stqa-u6-q6",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 6,
      "title": "Illustrate Ishikawa's 7 Basic Quality Tools (7 QC Tools) in Detail",
      "shortTitle": "Ishikawa's 7 Basic Quality Tools",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q7(b)",
          "marks": 6
        },
        {
          "paper": "May 2024",
          "questionNo": "Q8(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Ishikawa 7 Tools",
        "7 QC Tools",
        "Quality Control"
      ],
      "definition": "Introduced by Kaoru Ishikawa, the 7 Basic Tools of Quality Control are visual graphical techniques used for statistical process control, troubleshooting, and continuous quality improvement.",
      "sections": [
        {
          "title": "1. The 7 Basic Quality Tools",
          "content": [
            "1. Cause-and-Effect (Fishbone / Ishikawa) Diagram: Maps potential root causes contributing to an effect, grouped by 4M/6M categories (Man, Machine, Method, Material, Measurement, Environment).",
            "2. Check Sheet (Checklist): Structured form for systematic real-time data collection and frequency logging of events.",
            "3. Histogram: Bar chart displaying the frequency distribution and spread of continuous process data.",
            "4. Pareto Chart: Bar chart arranged in descending order paired with a cumulative percentage line, isolating the \"vital few from the trivial many\" (80/20 Rule).",
            "5. Scatter Diagram: Plots pairs of numerical variables on X and Y axes to identify mathematical correlation.",
            "6. Run Chart: Line plot tracking a quality parameter over time to observe operational trends and cyclical patterns.",
            "7. Control Chart: Run chart augmented with statistically computed Upper Control Limit (UCL), Central Line, and Lower Control Limit (LCL)."
          ]
        }
      ],
      "summary": [
        "Ishikawa's 7 QC tools provide intuitive visual analytics for diagnosing and solving quality problems.",
        "Includes Fishbone diagrams, Check sheets, Histograms, Pareto charts, Scatter plots, Run charts, and Control charts.",
        "Applicable across all software engineering phases from requirements to production maintenance."
      ],
      "keyPoints": [
        "7 QC Tools: Fishbone, Check Sheet, Histogram, Pareto, Scatter, Run Chart, Control Chart.",
        "Pareto = 80/20 rule (vital few causes).",
        "Control chart = monitoring process stability against UCL/LCL limits."
      ]
    },
    {
      "id": "stqa-u6-q7",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 7,
      "title": "Compare Ishikawa's Flowchart and Histogram Tools in Detail",
      "shortTitle": "Flowchart vs Histogram Comparison",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q7(b)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q8(a)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q7(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Ishikawa Tools",
        "Flowchart",
        "Histogram",
        "Tool Comparison"
      ],
      "definition": "A Flowchart represents the sequential logic, workflow steps, and decision points of a process, while a Histogram displays the frequency distribution and statistical spread of numerical measurements.",
      "sections": [
        {
          "title": "1. Flowchart Overview",
          "content": [
            "A graphical model depicting the step-by-step sequence of operations, decision branches, and handoffs in an algorithm or process.",
            "Uses standard ANSI symbols: Oval (Start/End), Rectangle (Process/Action), Diamond (Decision point), Arrow (Flow direction).",
            "In software SQA: Visualizes bug triage lifecycles, test execution workflows, and release gate procedures."
          ]
        },
        {
          "title": "2. Histogram Overview",
          "content": [
            "A graphical bar chart displaying continuous data categorized into discrete intervals (bins) on the X-axis, with frequency on the Y-axis.",
            "Visualizes the central tendency, skewness, and variance of quality data.",
            "In software SQA: Shows distribution of bug fix times, test execution durations, and module defect counts."
          ]
        },
        {
          "title": "3. Tabular Comparison",
          "content": [],
          "table": {
            "headers": [
              "Flowchart (Process Map & Logic Branches)",
              "Histogram (Statistical Frequency Distribution)"
            ],
            "rows": [
              {
                "parameter": "Primary Purpose: Visually maps the sequential flow of activities, procedural steps, and decision points in a process.",
                "col1": "Primary Purpose: Displays the frequency distribution, central tendency, and statistical variance of continuous numerical data."
              },
              {
                "parameter": "Data Handled: Qualitative, procedural, and logical pathways connecting operations.",
                "col1": "Data Handled: Quantitative continuous numerical measurements (e.g. response times, defect counts, fix durations)."
              },
              {
                "parameter": "Visual Geometry: Connected geometric symbols: ovals (start/end), rectangles (actions), and diamonds (decision branches).",
                "col1": "Visual Geometry: Adjacent vertical bars where bar heights reflect the count of data points falling into interval bins."
              },
              {
                "parameter": "SQA Application: Documenting software release pipelines, bug lifecycles, and code change approval procedures.",
                "col1": "SQA Application: Analyzing server API response latency distributions and developer defect resolution turnaround times."
              }
            ]
          }
        }
      ],
      "summary": [
        "Flowcharts map sequential logic and decision paths (qualitative process flow).",
        "Histograms display numerical frequency distributions and statistical variance (quantitative data).",
        "Flowcharts identify procedural bottlenecks; Histograms identify statistical spread and outliers."
      ],
      "keyPoints": [
        "Flowchart: Rectangles, diamonds, arrows; procedural steps and decision logic.",
        "Histogram: Vertical bars in interval bins; statistical frequency distribution.",
        "Qualitative workflow mapping vs Quantitative variance analysis."
      ]
    },
    {
      "id": "stqa-u6-q8",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 8,
      "title": "Clarify Flowcharts, Run Charts, and Control Charts with Diagrams and Control Limits",
      "shortTitle": "Flowcharts, Run Charts & Control Charts",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q8(a)",
          "marks": 6
        },
        {
          "paper": "May 2024",
          "questionNo": "Q7(c)",
          "marks": 3
        },
        {
          "paper": "May 2025",
          "questionNo": "Q8(c)",
          "marks": 5
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q8(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Run Charts",
        "Control Charts",
        "Flowcharts",
        "Statistical Process Control"
      ],
      "definition": "Flowcharts visualize procedural logic paths; Run charts plot a parameter over time to identify trends; Control charts augment run charts with statistical Upper and Lower Control Limits (UCL/LCL) to distinguish common-cause variance from special-cause instability.",
      "sections": [
        {
          "title": "1. Run Chart (Trend Chart)",
          "content": [
            "Plots historical data points chronologically on the X-axis against parameter values on the Y-axis.",
            "Displays a central median line. Helps identify upward/downward trends, cycles, and shifts over time.",
            "Example: Plotting weekly open defect backlogs across development sprints."
          ]
        },
        {
          "title": "2. Control Chart (Shewhart Chart)",
          "content": [
            "Invented by Walter Shewhart; the primary tool of Statistical Process Control (SPC).",
            "Consists of: 1) Central Line (Process Average / Mean $\\mu$), 2) Upper Control Limit ($\\text{UCL} = \\mu + 3\\sigma$), and 3) Lower Control Limit ($\\text{LCL} = \\mu - 3\\sigma$).",
            "In-Control Process: All points fluctuate randomly within UCL and LCL without distinct trends.",
            "Out-of-Control Process: Points fall outside UCL/LCL or display non-random patterns (7 consecutive rising points), signaling an assignable defect requiring immediate investigation."
          ],
          "formulas": [
            {
              "name": "Upper Control Limit (UCL)",
              "latex": "\\text{UCL} = \\mu + 3\\sigma"
            },
            {
              "name": "Lower Control Limit (LCL)",
              "latex": "\\text{LCL} = \\mu - 3\\sigma"
            }
          ]
        },
        {
          "title": "3. Comparison Table",
          "content": [],
          "table": {
            "headers": [
              "Feature",
              "Run Chart",
              "Control Chart",
              "Flowchart"
            ],
            "rows": [
              {
                "parameter": "Time Dimension",
                "col1": "Chronological time on X-axis.",
                "col2": "Chronological time on X-axis.",
                "col3": "Process sequence order (not clock time)."
              },
              {
                "parameter": "Control Limits",
                "col1": "None (only displays median line).",
                "col2": "Statistical UCL ($\\mu+3\\sigma$) and LCL ($\\mu-3\\sigma$).",
                "col3": "None."
              },
              {
                "parameter": "Objective",
                "col1": "Observe directional trends over time.",
                "col2": "Detect whether process is statistically stable and predictable.",
                "col3": "Map procedural steps and decision paths."
              }
            ]
          }
        }
      ],
      "summary": [
        "Run charts track parameter values over time around a median line.",
        "Control charts add statistical limits (UCL/LCL at $\\pm 3\\sigma$) to monitor process stability.",
        "Data outside control limits indicates assignable special causes requiring corrective action."
      ],
      "keyPoints": [
        "Run Chart = Time series plot + median line (identifies trends).",
        "Control Chart = Time series + Mean + UCL ($\\mu+3\\sigma$) + LCL ($\\mu-3\\sigma$).",
        "Out of control = points beyond UCL/LCL or non-random streaks."
      ]
    },
    {
      "id": "stqa-u6-q9",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 9,
      "title": "Explain Total Quality Management (TQM) in Detail: Principles, Management Elements, and Core Pillars",
      "shortTitle": "Total Quality Management (TQM)",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q7(a)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q8(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Total Quality Management",
        "TQM Principles",
        "Customer Focus",
        "Kaizen"
      ],
      "definition": "Total Quality Management (TQM) is an organization-wide management philosophy seeking continuous, long-term improvement in product quality, process efficiency, and customer satisfaction through total employee involvement.",
      "sections": [
        {
          "title": "1. The Six Core Concepts of TQM",
          "content": [
            "1. Top Management Leadership: Quality is a strategic business policy initiated and sustained by executive management.",
            "2. Total Customer Satisfaction: Quality is defined by customer expectations; exceeding expectations drives retention.",
            "3. Total Employee Empowerment: Quality is everyone's responsibility, supported by cross-functional quality circles.",
            "4. Continuous Process Improvement (Kaizen): Continual refinement using PDCA (Plan-Do-Check-Act) cycles.",
            "5. Supplier Partnership: Collaborative, long-term relationships ensuring quality incoming third-party software and tools.",
            "6. Fact-Based Performance Measurement: Managing by concrete statistical data rather than intuition."
          ]
        },
        {
          "title": "2. TQM Phases and Associated Tools",
          "content": [
            "Customer Focus Phase: Surveys, CSAT, Net Promoter Score, customer complaint analysis.",
            "Planning Phase: Quality policy declaration, corporate quality councils, cross-functional teams.",
            "Process Improvement Phase: PDCA cycle, 7 QC tools, SPC control charts, root cause analysis."
          ]
        }
      ],
      "summary": [
        "TQM is an organization-wide culture of continuous quality improvement.",
        "Anchored on 6 concepts: Leadership, Customer focus, Employee empowerment, Kaizen, Supplier partnerships, and Metrics.",
        "Emphasizes proactive process improvement across all departments, not just QA."
      ],
      "keyPoints": [
        "TQM = Total Quality Management (organization-wide philosophy).",
        "Customer satisfaction is the primary compass.",
        "PDCA continuous improvement cycle drives operational refinement."
      ]
    },
    {
      "id": "stqa-u6-q10",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 10,
      "title": "Explain ISO 9000 Standard Series in Detail: Standards Structure, Certification Process, and Benefits",
      "shortTitle": "ISO 9000 Standards Series in Detail",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2024",
          "questionNo": "Q8(a)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q8(a)",
          "marks": 5
        }
      ],
      "syllabusTopics": [
        "ISO 9000",
        "ISO 9001",
        "ISO Certification",
        "Quality Standards"
      ],
      "definition": "The ISO 9000 series is an internationally recognized framework of quality management standards established by the International Organization for Standardization (ISO) to ensure organizations consistently deliver products satisfying customer and regulatory standards.",
      "sections": [
        {
          "title": "1. The ISO 9000 Family of Standards",
          "content": [
            "ISO 9000: Fundamentals, concepts, and vocabulary of quality management systems.",
            "ISO 9001: The core certification standard specifying requirements for a QMS across design, development, production, and servicing.",
            "ISO 9000-3: Specific guidelines for implementing ISO 9001 in software development, maintenance, and testing.",
            "ISO 9004: Guidance for achieving sustained organizational success and continuous performance improvement."
          ]
        },
        {
          "title": "2. The 4-Step ISO Certification Process",
          "content": [
            "1. Preparation & Implementation: Company adopts standard operating procedures and creates 4-tier QMS documentation.",
            "2. Internal Quality Audits: Internal audit teams evaluate compliance and remediate identified non-conformances.",
            "3. Formal Third-Party Audit: Accredited independent registrar conducts Stage 1 (Documentation review) and Stage 2 (Onsite certification audit).",
            "4. Surveillance Audits: Registrar conducts periodic surveillance audits every year with full recertification every 3 years."
          ]
        }
      ],
      "summary": [
        "The ISO 9000 series provides a globally recognized baseline for quality management systems.",
        "ISO 9001 is the certification standard; ISO 9000-3 tailors it specifically to computer software.",
        "Certification requires documented QMS procedures, internal audits, and third-party registrar assessments."
      ],
      "keyPoints": [
        "ISO 9001 = generic certification standard; ISO 9000-3 = software guideline.",
        "Requires 4-tier documentation: Policy -> Objectives -> Manual -> Instructions.",
        "Independent external registrar audits every 3 years for recertification."
      ]
    },
    {
      "id": "stqa-u6-q11",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 11,
      "title": "What Do You Understand by Software Maintenance? Explain Its Four Types and SQA Components",
      "shortTitle": "Software Maintenance & SQA Components",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q7(c)",
          "marks": 5
        }
      ],
      "syllabusTopics": [
        "Software Maintenance",
        "Maintenance Types",
        "Maintenance SQA"
      ],
      "definition": "Software maintenance encompasses technical and managerial activities executed after software delivery to correct latent defects, improve performance, adapt to environmental changes, and implement new requirements.",
      "sections": [
        {
          "title": "1. The Four Types of Software Maintenance",
          "content": [
            "1. Corrective Maintenance: Reactive repair of discovered bugs and defects deviating from specifications (e.g. fixing a tax calculation glitch).",
            "2. Adaptive Maintenance: Modifying software to adapt to environmental changes in OS, database versions, cloud infrastructure, or third-party APIs (e.g. migrating from Python 2 to 3).",
            "3. Perfective Maintenance: Enhancing existing features, improving performance, and refining user interface based on user feedback (e.g. optimizing SQL queries).",
            "4. Preventive Maintenance: Proactive refactoring, code restructuring, and updating libraries to prevent future failures before they manifest (software re-engineering)."
          ]
        },
        {
          "title": "2. SQA Maintenance Components",
          "content": [
            "Maintenance Contract Review: Defining SLA response times, service scope, and user populations.",
            "Maintenance Plan: Documenting maintenance team organization, infrastructure, procedures, and budgets.",
            "Regression Test Suites: Maintaining automated regression test suites verifying that patches do not break existing features."
          ]
        }
      ],
      "summary": [
        "Software maintenance accounts for up to 60-80% of total software lifecycle cost.",
        "Four types: Corrective (bugs), Adaptive (environment), Perfective (enhancements), Preventive (refactoring).",
        "Requires rigorous change control, regression test suites, and SQA maintenance plans."
      ],
      "keyPoints": [
        "Corrective = Bug fixing.",
        "Adaptive = Environmental changes (OS/DB/APIs).",
        "Perfective = Performance tuning and feature polish.",
        "Preventive = Proactive refactoring to avoid future failures."
      ]
    },
    {
      "id": "stqa-u6-q12",
      "unitId": "unit-6",
      "subjectId": "stqa",
      "qNumber": 12,
      "title": "Explain Software Quality Metrics: Process Metrics, Product Metrics, and In-Process Metrics",
      "shortTitle": "Software Quality Metrics in Detail",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "Textbook 6.8 & 6.9",
          "questionNo": "Q7/Q8 Related",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Software Metrics",
        "Product Metrics",
        "Process Metrics",
        "In-Process Quality"
      ],
      "definition": "Software quality metrics are quantitative measurements enabling organizations to monitor, assess, and improve software development processes, product stability, and maintenance performance.",
      "sections": [
        {
          "title": "1. Classification of Quality Metrics",
          "content": [
            "Process Quality Metrics: Measure the efficiency and defect detection of the development process (e.g. Code Error Density = Errors / KLOC, Defect Removal Effectiveness = E / (E + D)).",
            "Product Quality Metrics: Measure operational attributes of the software deliverable (e.g. Mean Time Between Failures [MTBF], Customer Help Desk call rate, Response latency).",
            "Maintenance Quality Metrics: Measure post-release support efficiency (e.g. Mean Time To Repair [MTTR], Repeat failure call rate)."
          ]
        },
        {
          "title": "2. Metric Formulas",
          "content": [
            "Code Error Density (CED) = Number of code errors detected / KLOC.",
            "Mean Time to Repair (MTTR) = Total maintenance downtime / Number of repair actions."
          ],
          "formulas": [
            {
              "name": "Code Error Density",
              "latex": "\\text{CED} = \\frac{\\text{Errors Detected}}{\\text{KLOC}}"
            },
            {
              "name": "Mean Time to Repair (MTTR)",
              "latex": "\\text{MTTR} = \\frac{\\text{Total Downtime}}{\\text{Total Breakdowns}}"
            }
          ]
        }
      ],
      "summary": [
        "Quality metrics provide objective quantitative data to drive process improvements.",
        "Process metrics evaluate development efficiency (CED, DRE).",
        "Product metrics evaluate operational reliability and customer call volume (MTBF, MTTR)."
      ],
      "keyPoints": [
        "Process metrics: Defect density (Errors/KLOC), DRE, timetable observance.",
        "Product metrics: MTBF, response times, defect severity weights.",
        "Maintenance metrics: MTTR, repeat failure rate, customer ticket volume."
      ]
    }
  ]
};
