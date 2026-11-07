import { Unit } from '@/types';

export const unit5Data: Unit = {
  "id": "unit-5",
  "unitNumber": 5,
  "title": "Unit V: Test Automation and Automation Tools",
  "shortTitle": "Test Automation & Selenium",
  "description": "Comprehensive study of Test Automation Fundamentals, Manual vs Automated Testing, Automation Life Cycle, Tool Selection Criteria, Selenium Suite (IDE, RC, WebDriver, Grid), Robotic Process Automation (RPA), and Apache JMeter Performance Testing.",
  "syllabus": [
    "Test Automation: Fundamentals, Benefits, Limitations, Manual vs Automation",
    "Automated Testing Process and Lifecycle Framework",
    "Criteria for Choosing an Automation Testing Tool",
    "Selenium Tool Suite: Architecture, Selenium IDE, Selenium RC, Selenium WebDriver, Selenium Grid",
    "Robotic Process Automation (RPA) in Software Testing",
    "Performance Testing Tools: Apache JMeter Architecture and Working"
  ],
  "questionPaperIndex": [
    {
      "paper": "May 2023 ([6004]-491)",
      "qMain": "Q5(a) Automation Testing (6M), Q5(b) Selenium IDE (6M), Q5(c) Selenium WebDriver (6M)",
      "qOr": "Q6(a) Benefits of Automation (6M), Q6(b) Automated Process (6M), Q6(c) RPA (6M)"
    },
    {
      "paper": "Nov 2023 ([6181]-112)",
      "qMain": "Q5(a) Choose Automation Tool (6M), Q5(b) Selenium Suite (6M), Q5(c) RPA (6M)",
      "qOr": "Q6(a) Automated Process (6M), Q6(b) Selenium RC (6M), Q6(c) Selenium Grid (6M)"
    },
    {
      "paper": "May 2024 ([6263]-92)",
      "qMain": "Q5(a) Manual vs Automation (6M), Q5(b) Benefits (6M), Q5(c) Performance Testing (6M)",
      "qOr": "Q6(a) Automation Testing (6M), Q6(b) Automated Process (6M), Q6(c) Apache JMeter (6M)"
    },
    {
      "paper": "May 2025 ([6406]-92)",
      "qMain": "Q5(a) Performance Testing (6M), Q5(b) Selenium Suite (6M), Q5(c) Selenium WebDriver (6M)",
      "qOr": "Q6(a) RPA (6M), Q6(b) Choose Automation Tool (6M), Q6(c) Selenium Grid (6M)"
    },
    {
      "paper": "Nov 2025 ([6584]-102)",
      "qMain": "Q5(a) Automation Benefits (6M), Q5(b) Performance Testing (6M), Q5(c) Automated Process (6M)",
      "qOr": "Q6(a) Manual Process (6M), Q6(b) RPA (6M), Q6(c) Selenium IDE (6M)"
    }
  ],
  "quickRevision": {
    "keyDefinitions": [
      {
        "term": "Test Automation",
        "definition": "The use of specialized software tools to control test execution, compare actual vs expected outcomes, and set preconditions."
      },
      {
        "term": "Selenium WebDriver",
        "definition": "A browser automation framework that accepts commands and sends them directly to native browser drivers via HTTP."
      },
      {
        "term": "Selenium Grid",
        "definition": "A distributed testing tool allowing parallel test execution across multiple remote physical/virtual machines and browsers."
      },
      {
        "term": "RPA",
        "definition": "Robotic Process Automation; using software robots (bots) to mimic human interactions with digital systems for repetitive UI workflows."
      }
    ],
    "coreFormulas": [
      {
        "name": "Automation ROI",
        "latex": "\\text{ROI} = \\frac{\\text{Manual Test Cost} - \\text{Automated Test Cost}}{\\text{Automated Test Cost}} \\times 100\\%"
      }
    ],
    "comparisonHighlights": [
      {
        "title": "Manual vs Automation Testing",
        "summary": "Manual is flexible and human-centered; Automation is fast, repeatable, and essential for regression."
      },
      {
        "title": "Selenium IDE vs WebDriver",
        "summary": "IDE is record-and-playback for quick prototypes; WebDriver provides programmatic cross-browser control."
      }
    ],
    "examTips": [
      "Remember that \"Selenium IQE\" in SPPU papers refers to Selenium IDE (Integrated Development Environment).",
      "Draw the Hub-and-Node architecture when answering questions on Selenium Grid.",
      "Highlight criteria for tool selection: project budget, technology stack, team skill, and test maintenance."
    ]
  },
  "questions": [
    {
      "id": "stqa-u5-q1",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 1,
      "title": "What Is Automation Testing in Software Testing? Differentiate Between Manual Testing and Automation Testing",
      "shortTitle": "Manual vs Automation Testing",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q5(a)",
          "marks": 6
        },
        {
          "paper": "May 2024",
          "questionNo": "Q5(a) & Q6(a)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q6(a)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Automation Testing",
        "Manual vs Automation",
        "Testing Frameworks"
      ],
      "definition": "Automation testing is the practice of using specialized software tools, scripts, and frameworks to execute test suites automatically, compare actual vs expected outcomes, set up test preconditions, and report detailed defects without continuous human intervention.",
      "sections": [
        {
          "title": "1. Core Concepts",
          "content": [
            "Manual Testing: A human tester acts as an end-user, manually executing test steps, typing inputs, clicking buttons, and visually verifying outputs. Flexible for exploratory testing but slow, prone to fatigue, and prohibitively expensive for massive regression cycles.",
            "Automation Testing: Programmatic execution of tests using frameworks (Selenium, Cypress, Appium, JMeter). Executes hundreds of tests in minutes, operates 24/7 in CI/CD pipelines, feeds diverse data inputs automatically, and generates deterministic reports."
          ]
        },
        {
          "title": "2. Tabular Comparison",
          "content": [],
          "table": {
            "headers": [
              "Parameter",
              "Manual Testing",
              "Automation Testing"
            ],
            "rows": [
              {
                "parameter": "Definition",
                "col1": "Human tester executes test cases step-by-step manually.",
                "col2": "Software tools execute scripted test cases automatically."
              },
              {
                "parameter": "Execution Speed",
                "col1": "Slow, sequential, subject to human operator fatigue.",
                "col2": "Extremely fast, parallel execution across distributed nodes."
              },
              {
                "parameter": "Initial Investment",
                "col1": "Low initial cost (no expensive automation tools needed).",
                "col2": "High initial investment in tool licenses, framework design, and training."
              },
              {
                "parameter": "Long-Term ROI",
                "col1": "Linear cost increase as regression suites grow.",
                "col2": "Exponential ROI over time due to reusable scripts in CI/CD."
              },
              {
                "parameter": "Exploratory & Adhoc",
                "col1": "Ideal for exploratory, usability, and adhoc testing.",
                "col2": "Incapable of exploratory testing (tests only what is scripted)."
              },
              {
                "parameter": "Reliability & Accuracy",
                "col1": "Prone to human error, oversight, and cognitive fatigue.",
                "col2": "Deterministic, precise, and atom-level consistent."
              },
              {
                "parameter": "Regression Testing",
                "col1": "Tedious, time-consuming, and impractical for large systems.",
                "col2": "Ideal for continuous regression testing on every build."
              }
            ]
          }
        }
      ],
      "summary": [
        "Manual testing is flexible and human-centered, ideal for exploratory and usability testing.",
        "Automation testing is fast, repeatable, and essential for high-volume regression in CI/CD pipelines.",
        "The goal of automation is to reduce repetitive human effort, not eliminate manual testing entirely."
      ],
      "keyPoints": [
        "Manual = Human intervention, exploratory, flexible, prone to fatigue.",
        "Automation = Programmatic tools, high speed, high accuracy, regression.",
        "Complementary: Automation handles repetitive regression; humans handle exploratory."
      ]
    },
    {
      "id": "stqa-u5-q2",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 2,
      "title": "What Are the Benefits of Automation Testing? When and What Tests Should Be Automated?",
      "shortTitle": "Benefits of Automation & Scope",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q6(a)",
          "marks": 6
        },
        {
          "paper": "May 2024",
          "questionNo": "Q5(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q5(a)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Benefits of Automation",
        "Scope of Automation",
        "Test Selection"
      ],
      "definition": "Automation testing delivers enhanced execution speed, increased test coverage, deterministic accuracy, earlier defect detection, reusable assets, and reduced time-to-market.",
      "sections": [
        {
          "title": "1. Core Benefits of Automation Testing",
          "content": [
            "1. Faster Feedback Cycle: Instant test execution on code commits accelerates developer feedback loops in agile sprints.",
            "2. Cost-Effective in the Long Run: Once developed, automated scripts cost virtually nothing to run repeatedly, dramatically reducing post-release maintenance costs.",
            "3. Enhanced Test Coverage: Enables thousands of tests across diverse browsers, OS versions, and screen resolutions overnight.",
            "4. Error-Free & Deterministic: Eliminates human boredom and oversights during repetitive regression runs.",
            "5. Reusability: Test suites and modular page objects are reused across releases and projects.",
            "6. Earlier Defect Detection: Traps integration bugs minutes after code is committed, when fixes are cheapest."
          ]
        },
        {
          "title": "2. What Tests Should Be Automated?",
          "content": [
            "A. Regression Tests: Suites that grow with every sprint and must be re-run frequently.",
            "B. Repetitive High-Volume Tests: Data-driven tests executing hundreds of input variations.",
            "C. Smoke and Sanity Tests: Quick health checks validating deployment readiness.",
            "D. Complex Mathematical Calculations: Functional logic with zero tolerance for manual math errors.",
            "E. Performance, Load & Stress Tests: Concurrency simulations impossible to execute manually."
          ]
        },
        {
          "title": "3. What Should NOT Be Automated?",
          "content": [
            "User experience (UX) and visual aesthetics evaluations.",
            "Features undergoing rapid, unstable UI redesign.",
            "One-time exploratory or adhoc test experiments."
          ]
        }
      ],
      "summary": [
        "Automation provides fast feedback, extensive test coverage, and high long-term ROI.",
        "Automate: Regression suites, repetitive data-driven tests, smoke tests, and load tests.",
        "Do not automate: Unstable features, one-time tests, and subjective usability assessments."
      ],
      "keyPoints": [
        "Top benefits: Speed, coverage, consistency, early defect detection, reusable assets.",
        "High-priority automation: Regression, Smoke, Data-driven, Performance.",
        "Low-priority: Unstable UI, adhoc, visual aesthetic evaluation."
      ]
    },
    {
      "id": "stqa-u5-q3",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 3,
      "title": "Explain the Automated Testing Process / Lifecycle in Detail with a Neat Diagram",
      "shortTitle": "Automated Testing Process & Lifecycle",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q6(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2023",
          "questionNo": "Q6(a)",
          "marks": 6
        },
        {
          "paper": "May 2024",
          "questionNo": "Q6(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q5(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Automated Testing Process",
        "Automation Life Cycle",
        "POC Framework"
      ],
      "definition": "The Automated Testing Process is a structured engineering lifecycle comprising Feasibility Analysis, Tool Selection, Framework Design, Proof of Concept (POC), Script Development, Execution, and Maintenance.",
      "sections": [
        {
          "title": "1. Phases of the Automated Testing Process",
          "content": [
            "Phase 1: Test Automation Feasibility Analysis: Review application technology, identify candidate test cases, analyze third-party controls, and establish automation ROI justification.",
            "Phase 2: Appropriate Tool Selection: Evaluate commercial vs open-source tools matching project budget, tech stack, and team programming capabilities.",
            "Phase 3: Evaluate Suitable Framework: Select architecture (Modular, Data-driven, Keyword-driven, Page Object Model, or Hybrid).",
            "Phase 4: Build Proof of Concept (POC): Implement an end-to-end prototype on core workflows to prove tool viability and assess device/browser compatibility.",
            "Phase 5: Develop Automation Framework: Build reusable libraries, configuration managers, test data readers, reporting engines, and CI/CD connectors.",
            "Phase 6: Develop Test Scripts, Execute, and Analyze: Write version-controlled automation scripts, integrate with build pipeline (Jenkins/GitHub Actions), execute runs, and log defect tickets automatically."
          ]
        }
      ],
      "summary": [
        "Automated testing follows a structured 6-phase engineering lifecycle.",
        "Begins with Feasibility Analysis and Tool Selection, followed by POC validation.",
        "Concludes with Framework architecture, script authoring, and CI/CD execution."
      ],
      "keyPoints": [
        "Lifecycle: Feasibility -> Tool Selection -> Framework -> POC -> Scripting -> Execution.",
        "POC proves feasibility before major budget commitment.",
        "Maintainability is the key indicator of long-term automation success."
      ]
    },
    {
      "id": "stqa-u5-q4",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 4,
      "title": "Explain Different Test Automation Frameworks (Linear, Modular, Data-Driven, Keyword, Hybrid, BDD)",
      "shortTitle": "Test Automation Framework Types",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "Textbook 5.3",
          "questionNo": "Q5/Q6 Related",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Automation Frameworks",
        "Data-Driven",
        "Keyword-Driven",
        "BDD",
        "Hybrid"
      ],
      "definition": "An automation framework is an integrated set of guidelines, coding standards, concepts, object repositories, and reporting utilities supporting automated test development.",
      "sections": [
        {
          "title": "1. Six Primary Framework Architectures",
          "content": [
            "1. Linear (Record and Playback): Simplest form. Scripts are recorded sequentially. Fragile; breaks upon minor UI changes; zero code reusability.",
            "2. Modular Framework: Application is decomposed into independent modules. Reusable test functions are authored for common actions (e.g. login). Simplifies maintenance.",
            "3. Data-Driven Framework: Separates test logic from test data. Data is loaded from external files (Excel, CSV, JSON, DB) into parameter-driven scripts, testing multiple permutations with minimal code.",
            "4. Keyword-Driven (Table-Driven) Framework: Identifies action keywords (click, enterText, verifyText) and target locators in spreadsheets. Allows non-technical testers to author test cases.",
            "5. Hybrid Framework: Combines Data-Driven and Keyword-Driven architectures with the Page Object Model (POM) for enterprise scalability.",
            "6. Behavior-Driven Development (BDD): Uses plain-language Gherkin syntax (Given-When-Then) via tools like Cucumber, enabling seamless collaboration between developers, QA, and business analysts."
          ]
        }
      ],
      "summary": [
        "Automation frameworks range from simple Linear to enterprise Hybrid architectures.",
        "Data-driven frameworks parameterize inputs from external files (Excel/CSV).",
        "Keyword-driven frameworks map actions to keywords; BDD enables plain English Gherkin specifications."
      ],
      "keyPoints": [
        "Linear = Record & Playback (fragile).",
        "Modular = Reusable component scripts.",
        "Data-Driven = Test logic separate from data.",
        "Keyword-Driven = Action keywords in tables.",
        "BDD = Given-When-Then collaboration (Cucumber)."
      ]
    },
    {
      "id": "stqa-u5-q5",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 5,
      "title": "How to Choose an Automation Testing Tool? Explain the Tool Selection Process in Detail",
      "shortTitle": "Choosing an Automation Tool",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q5(a)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q6(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Tool Selection Process",
        "Cost-Benefit Analysis",
        "Automation Criteria"
      ],
      "definition": "Selecting the right automation tool is a multi-step evaluation process assessing project requirements, technology compatibility, licensing costs, team skill sets, and ROI before purchasing or adopting a tool.",
      "sections": [
        {
          "title": "1. The 4-Step Tool Selection Process",
          "content": [
            "Step 1: Identify Project Requirements: Define platforms (web, mobile, desktop), target browsers, programming languages, and CI/CD integration needs.",
            "Step 2: Evaluate Tools and Vendors: Shortlist candidate tools (Open-source vs Commercial). Assess vendor reputation, support quality, and update frequency.",
            "Step 3: Estimate Cost and Benefit: Conduct Cost-Benefit Analysis balancing tool licensing, infrastructure, training, and maintenance vs labor savings.",
            "Step 4: Execute Pilot / Proof of Concept (POC): Run a hands-on trial implementing real-world edge scenarios on the actual target application before final sign-off."
          ]
        },
        {
          "title": "2. Key Criteria for Evaluation",
          "content": [
            "Technology Stack Compatibility: Does it seamlessly recognize custom UI elements and modern JavaScript frameworks (React, Angular)?",
            "Team Technical Skill: Does the team possess coding proficiency (Selenium, Playwright) or require low-code/no-code solutions (Tosca)?",
            "CI/CD Pipeline Integration: Command-line execution, Docker support, and Jenkins/GitHub Actions compatibility.",
            "Reporting & Debugging: HTML test dashboards, video recording of failures, and automated screenshots."
          ]
        }
      ],
      "summary": [
        "Tool selection follows: Requirements -> Shortlisting -> Cost-Benefit Analysis -> POC Validation.",
        "Key factors include technology compatibility, team skillset, licensing cost, and CI/CD readiness.",
        "Conducting a hands-on POC on the target application is mandatory prior to procurement."
      ],
      "keyPoints": [
        "4 Steps: Identify reqs -> Evaluate vendors -> Cost-Benefit analysis -> Final POC.",
        "Balance tool cost against long-term maintenance savings.",
        "Open-source (Selenium/Cypress) vs Commercial (Tosca/UFT)."
      ]
    },
    {
      "id": "stqa-u5-q6",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 6,
      "title": "Illustrate the Selenium Tool Suite in Detail (IDE, RC, WebDriver, Grid)",
      "shortTitle": "Selenium Tool Suite Overview",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q5(b)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q5(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Selenium Suite",
        "Selenium IDE",
        "Selenium RC",
        "WebDriver",
        "Grid"
      ],
      "definition": "Selenium is an open-source automated testing suite for web applications across different browsers and platforms. The suite consists of four core components: Selenium IDE, Selenium RC (deprecated), Selenium WebDriver, and Selenium Grid.",
      "sections": [
        {
          "title": "1. Architecture of the Selenium Suite",
          "content": [
            "Selenium IDE (Integrated Development Environment): Browser extension (Firefox/Chrome) providing record-and-playback functionality for rapid prototype test scripts.",
            "Selenium RC (Remote Control): Pioneer framework injecting JavaScript into browsers via an intermediate proxy server (deprecated and merged into WebDriver).",
            "Selenium WebDriver: Modern standard communicating directly with native browser drivers via JSON Wire Protocol / W3C WebDriver specification without proxy servers.",
            "Selenium Grid: Hub-and-Node distributed server network that runs tests in parallel across diverse remote machines, operating systems, and browsers simultaneously."
          ]
        },
        {
          "title": "2. Evolution and Component Mapping",
          "content": [],
          "table": {
            "headers": [
              "Component",
              "Primary Function",
              "Execution Mode",
              "Target Use Case"
            ],
            "rows": [
              {
                "parameter": "Selenium IDE",
                "col1": "Record and playback scripts.",
                "col2": "Browser extension runner.",
                "col3": "Prototyping, exploratory scripts, simple bug reproduction."
              },
              {
                "parameter": "Selenium RC",
                "col1": "Injected JavaScript execution via proxy.",
                "col2": "Intermediate HTTP proxy.",
                "col3": "Legacy systems (superseded by WebDriver)."
              },
              {
                "parameter": "Selenium WebDriver",
                "col1": "Direct native browser automation.",
                "col2": "Programmatic API (Java, Python, C#, JS).",
                "col3": "Robust enterprise automation and CI/CD regression."
              },
              {
                "parameter": "Selenium Grid",
                "col1": "Parallel cross-browser execution.",
                "col2": "Distributed Hub-and-Node network.",
                "col3": "Large-scale distributed cross-browser testing."
              }
            ]
          }
        }
      ],
      "summary": [
        "The Selenium suite comprises IDE (record/playback), RC (legacy proxy), WebDriver (native browser control), and Grid (parallel execution).",
        "Selenium RC and WebDriver were merged in Selenium 2.0; modern Selenium 4 adheres to W3C standards.",
        "Supports multiple languages (Java, Python, C#, JS) across Chrome, Firefox, Safari, and Edge."
      ],
      "keyPoints": [
        "IDE = Record & Playback (prototypes).",
        "RC = Legacy JavaScript injection proxy.",
        "WebDriver = Direct native browser communication (W3C standard).",
        "Grid = Parallel cross-browser distributed execution."
      ]
    },
    {
      "id": "stqa-u5-q7",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 7,
      "title": "Illustrate Selenium IDE (Selenium's \"IQE\") in Detail: Features, Working, and Limitations",
      "shortTitle": "Selenium IDE (\"IQE\") in Detail",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q5(b)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q3(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q6(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Selenium IDE",
        "Selenium IQE",
        "Record and Playback",
        "Selenese"
      ],
      "definition": "Selenium IDE (Integrated Development Environment, frequently printed as \"Selenium IQE\" in SPPU exam papers) is a browser extension tool supporting record-and-playback test authoring using Selenese commands.",
      "sections": [
        {
          "title": "1. Features and Working of Selenium IDE",
          "content": [
            "Record & Playback: Records user interactions (clicks, text input, dropdown selections) directly in the browser and translates them into Selenese commands.",
            "Selenese Command Architecture: Commands consist of three parts: Command (action like click, type, open), Target (element locator via ID, XPath, CSS), and Value (optional input data).",
            "Assertion & Verification: Built-in commands (assertTitle, verifyText, assertElementPresent) to validate application state.",
            "Export Capabilities: Allows exporting recorded tests directly into programming code (Java, Python, C#) for incorporation into WebDriver suites."
          ]
        },
        {
          "title": "2. Limitations of Selenium IDE",
          "content": [
            "No Database / API Testing: Cannot connect to databases or test RESTful APIs directly.",
            "Limited Conditional Logic: Struggles with complex algorithmic loops and branching.",
            "Incompatible with Parallel Testing: Cannot run large-scale parallel tests across remote machines without exporting to Grid.",
            "Fragility: Sensitive to minor UI layout and DOM restructuring."
          ]
        }
      ],
      "summary": [
        "Selenium IDE (\"IQE\" in university papers) is a record-and-playback extension for fast test creation.",
        "Uses Selenese commands (Action, Target, Value) with built-in assertions.",
        "Ideal for quick prototypes and defect reproduction; exportable to full WebDriver code."
      ],
      "keyPoints": [
        "SPPU Note: \"Selenium IQE\" = Selenium IDE (Integrated Development Environment).",
        "Selenese commands: Command + Target locator + Value.",
        "Record & Playback; exports to Java/Python WebDriver."
      ]
    },
    {
      "id": "stqa-u5-q8",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 8,
      "title": "How Would You Explain Selenium WebDriver? Detail Architecture and Direct Communication",
      "shortTitle": "Selenium WebDriver Architecture",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q5(c)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q5(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Selenium WebDriver",
        "WebDriver Architecture",
        "Native Browser Automation"
      ],
      "definition": "Selenium WebDriver is a programmatic web automation framework that controls browsers natively by sending commands directly to browser-specific drivers over HTTP (W3C standard), bypassing JavaScript injection proxies.",
      "sections": [
        {
          "title": "1. WebDriver Architecture Components",
          "content": [
            "1. Language Bindings (Client Libraries): Client APIs in Java, Python, C#, JavaScript, and Ruby.",
            "2. JSON Wire Protocol / W3C WebDriver Protocol: Standardized RESTful HTTP protocol transmitting JSON commands to browser drivers.",
            "3. Browser Drivers: Native executables provided by browser vendors (ChromeDriver, GeckoDriver, msedgedriver, SafariDriver) that act as HTTP servers translating commands to browser internal APIs.",
            "4. Real Browsers: The target browsers (Chrome, Firefox, Safari, Edge) rendering pages and executing actions."
          ]
        },
        {
          "title": "2. Key Advantages Over Selenium RC and IDE",
          "content": [
            "Direct Native Control: Operates through OS-level browser APIs rather than injected JavaScript.",
            "Overcomes Same-Origin Policy: Can handle multi-domain navigation, popups, alerts, and file uploads seamlessly.",
            "Robust Element Locators: Locates elements by ID, Name, ClassName, TagName, LinkText, CSS Selector, and XPath.",
            "Enterprise Integration: Directly integrates with TestNG, JUnit, Maven, Allure, and CI/CD pipelines."
          ]
        }
      ],
      "summary": [
        "WebDriver controls browsers directly via native vendor drivers (ChromeDriver, GeckoDriver).",
        "Communicates using the standardized W3C WebDriver HTTP protocol.",
        "Supports multiple languages (Java, Python, C#) and overcomes JavaScript sandbox limitations."
      ],
      "keyPoints": [
        "4-tier architecture: Code -> W3C Protocol -> Browser Driver -> Real Browser.",
        "Direct native communication (no proxy required).",
        "Handles multi-window, alerts, frames, and file uploads."
      ]
    },
    {
      "id": "stqa-u5-q9",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 9,
      "title": "What Is Selenium RC? Explain Its Architecture and Why WebDriver Replaced It",
      "shortTitle": "Selenium RC Architecture & Deprecation",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q6(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Selenium RC",
        "Remote Control Architecture",
        "Same-Origin Policy"
      ],
      "definition": "Selenium Remote Control (RC) was the flagship testing framework of Selenium 1.0, relying on a client-server architecture with an intermediate proxy server that injected a JavaScript program (Selenium Core) into browsers.",
      "sections": [
        {
          "title": "1. Selenium RC Architecture",
          "content": [
            "Selenium RC Server: Acts as a standalone HTTP proxy server configuring the browser to believe tests originate from the same domain.",
            "Selenium Core: A JavaScript library injected into the browser by the RC server that executes actions and reports results.",
            "Client Libraries: Programming APIs (Java, C#, Python) sending Selenese commands to the RC server."
          ]
        },
        {
          "title": "2. Why WebDriver Replaced Selenium RC",
          "content": [
            "Same-Origin Policy Limitations: Security restrictions prevented injected JavaScript from interacting with elements across different domains or subdomains.",
            "Performance Overhead: Double-hop communication (Client -> RC Proxy Server -> Injected JS -> Browser) introduced significant latency.",
            "Inability to Handle Native OS Controls: Injected JavaScript could not handle OS-level file upload dialogs, browser popups, or native alerts.",
            "WebDriver Solved All Limitations: WebDriver communicates directly with the browser using native OS-level drivers, completely eliminating the proxy server."
          ]
        }
      ],
      "summary": [
        "Selenium RC used an intermediate proxy server to inject JavaScript (Selenium Core) into browsers.",
        "Suffered from Same-Origin Policy security restrictions, slow execution, and inability to handle OS dialogs.",
        "WebDriver replaced RC by connecting directly to native browser drivers without proxy overhead."
      ],
      "keyPoints": [
        "RC = Client library + Proxy server + Injected JavaScript.",
        "Flaws: Same-Origin Policy, slow performance, limited OS control.",
        "Superseded completely by Selenium WebDriver in Selenium 2.0."
      ]
    },
    {
      "id": "stqa-u5-q10",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 10,
      "title": "What Do You Understand by Selenium Grid? Explain Its Architecture and Working in Detail",
      "shortTitle": "Selenium Grid Architecture",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q6(c)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q6(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Selenium Grid",
        "Hub and Node Architecture",
        "Parallel Testing"
      ],
      "definition": "Selenium Grid is a distributed testing tool that coordinates parallel execution of Selenium test suites across multiple remote machines, operating systems, and browsers simultaneously.",
      "sections": [
        {
          "title": "1. Hub-and-Node Architecture",
          "content": [
            "The Hub (Central Server): Acts as the single central entry point. Receives test requests containing desired browser capabilities, queries registered nodes, and routes test execution to the appropriate matching node.",
            "The Nodes (Remote Worker Machines): Physical, virtual, or containerized machines registered to the hub. Host specific operating systems (Windows, Linux, macOS) and browser instances (Chrome, Firefox, Safari). Execute received commands and return results."
          ]
        },
        {
          "title": "2. Major Benefits of Selenium Grid",
          "content": [
            "Massive Time Reduction: A regression suite taking 10 hours sequentially executes in 1 hour across 10 parallel grid nodes.",
            "True Cross-Platform Matrix: Execute tests against Chrome on Windows 11, Safari on macOS, and Firefox on Ubuntu simultaneously from one test runner.",
            "Docker & Cloud Integration: Modern Selenium 4 Grid integrates seamlessly with Docker containers, Kubernetes clusters, and cloud grids (BrowserStack, SauceLabs)."
          ]
        }
      ],
      "summary": [
        "Selenium Grid coordinates distributed parallel test execution across remote nodes.",
        "Architecture: Central Hub routes test requests; registered Nodes execute on specific OS/browsers.",
        "Dramatically shrinks execution times and enables comprehensive cross-browser matrices."
      ],
      "keyPoints": [
        "Hub = Central router and coordinator.",
        "Node = Worker machine executing tests on specific OS/browsers.",
        "Parallel execution shaves hours off CI/CD build cycles."
      ]
    },
    {
      "id": "stqa-u5-q11",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 11,
      "title": "How Would You Explain Robotic Process Automation (RPA) in Software Testing? Detail Categories and Benefits",
      "shortTitle": "Robotic Process Automation (RPA)",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q6(c)",
          "marks": 6
        },
        {
          "paper": "Nov 2023",
          "questionNo": "Q5(c)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q6(a)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q6(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Robotic Process Automation",
        "RPA in Testing",
        "Probots",
        "Knowbots",
        "Chatbots"
      ],
      "definition": "Robotic Process Automation (RPA) is the application of rule-based software robots (bots) to emulate human interactions with digital software interfaces to automate repetitive business processes and end-to-end testing workflows.",
      "sections": [
        {
          "title": "1. The Three Categories of RPA Bots",
          "content": [
            "1. Probots (Process Bots): Follow predefined, deterministic rules to process data (e.g. reading Excel rows, populating CRM fields, processing invoices).",
            "2. Knowbots (Knowledge Bots): Browse the internet or enterprise repositories to gather, extract, and categorize user-specified information.",
            "3. Chatbots: Virtual interactive agents that understand natural language, respond to user queries, and trigger backend service processes in real time."
          ]
        },
        {
          "title": "2. Benefits of RPA in Software Testing and Business",
          "content": [
            "1. Cost Savings: Software robots operate at a fraction of the cost of manual data entry teams.",
            "2. 24/7 Uninterrupted Operation: Bots run continuously without breaks, fatigue, or cognitive lapses.",
            "3. Non-Invasive Integration: Interacts directly with existing legacy UIs without requiring backend API modifications.",
            "4. Audit Compliance: Every bot keystroke, transaction, and data mutation is recorded into a tamper-evident audit log."
          ]
        }
      ],
      "summary": [
        "RPA uses software robots to automate repetitive rule-based UI workflows.",
        "Classified into Probots (process rules), Knowbots (information harvesting), and Chatbots (natural conversation).",
        "Provides non-invasive automation, 24/7 productivity, and complete audit logging."
      ],
      "keyPoints": [
        "RPA = software bots mimicking human UI interactions.",
        "3 Bot Types: Probots (process data), Knowbots (gather info), Chatbots (converse).",
        "Non-invasive: works on top of existing legacy software without code changes."
      ]
    },
    {
      "id": "stqa-u5-q12",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 12,
      "title": "What Is Performance Testing? What Are the Uses of It as Well as Its Types and Lifecycle?",
      "shortTitle": "Performance Testing in Detail",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        {
          "paper": "May 2024",
          "questionNo": "Q5(c)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q5(a)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q5(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Performance Testing",
        "Load vs Stress",
        "Testing Lifecycle"
      ],
      "definition": "Performance testing evaluates the speed, responsiveness, scalability, and resource utilization of a software application under various workload conditions to identify bottlenecks before production release.",
      "sections": [
        {
          "title": "1. Core Uses of Performance Testing",
          "content": [
            "Verify SLA Compliance: Ensures response times comply with contractual Service Level Agreements (e.g. checkout renders under 1.5s).",
            "Capacity Planning: Determines the maximum user concurrency the existing hardware/cloud infrastructure can handle.",
            "Locate Architectural Bottlenecks: Uncovers database connection pool starvation, slow SQL queries, and CPU/memory leaks.",
            "Verify Scalability: Tests auto-scaling rules and load-balancing algorithms under fluctuating traffic."
          ]
        },
        {
          "title": "2. Primary Performance Testing Types",
          "content": [
            "Load Testing: Verifies behavior under expected peak traffic.",
            "Stress Testing: Pushes workload beyond breaking points to test failover.",
            "Spike Testing: Sudden drastic surges in traffic.",
            "Endurance (Soak) Testing: Sustained load over long periods to detect memory leaks.",
            "Volume Testing: Testing system stability against massive database record volumes."
          ]
        }
      ],
      "summary": [
        "Performance testing ensures system responsiveness, scalability, and resource efficiency.",
        "Identifies database query bottlenecks, memory leaks, and server starvation.",
        "Key types include Load, Stress, Spike, Endurance, and Volume testing."
      ],
      "keyPoints": [
        "Performance testing evaluates speed, stability, and scalability.",
        "Metrics: Response time, Throughput (TPS), CPU/Memory utilization.",
        "Identifies bottlenecks prior to production deployment."
      ]
    },
    {
      "id": "stqa-u5-q13",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 13,
      "title": "Describe Apache JMeter Based on: (i) Aim / Purpose, (ii) Working, and (iii) Advantages",
      "shortTitle": "Apache JMeter Performance Tool",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "May 2024",
          "questionNo": "Q6(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Performance Tools",
        "Apache JMeter",
        "Load Testing"
      ],
      "definition": "Apache JMeter is an open-source, Java-based load testing application designed to measure performance and simulate heavy loads across diverse server protocols and web applications.",
      "sections": [
        {
          "title": "1. Aim / Purpose of Apache JMeter",
          "content": [
            "Designed to analyze and measure the performance of static and dynamic web resources.",
            "Simulates heavy concurrent user loads on servers, networks, and objects to test strength and analyze overall performance under diverse workload scenarios.",
            "Supports multiple protocols: HTTP, HTTPS, SOAP/REST Web Services, JDBC, FTP, LDAP, and JMS."
          ]
        },
        {
          "title": "2. Working Mechanism of JMeter",
          "content": [
            "Thread Groups: Simulates virtual users (threads) making simultaneous requests.",
            "Samplers: Directs JMeter to send specific protocol requests (HTTP Request, JDBC Request).",
            "Listeners: Collects execution responses and visualizes performance data in graphs, tables, and tree views.",
            "Assertions: Evaluates server responses against expected criteria (response code 200, response time < 2s)."
          ]
        },
        {
          "title": "3. Key Advantages of Apache JMeter",
          "content": [
            "100% Open-Source & Java-Based: Platform-independent; runs on Windows, Linux, and macOS without licensing fees.",
            "Extensible Plugin Architecture: Vast library of community plugins for custom graphs, OAuth support, and JMeter-to-InfluxDB reporting.",
            "Distributed Master-Slave Architecture: Employs remote load generators to simulate tens of thousands of concurrent users."
          ]
        }
      ],
      "summary": [
        "Apache JMeter is a premier open-source Java performance and load testing tool.",
        "Working elements include Thread Groups (virtual users), Samplers, Assertions, and Listeners.",
        "Features distributed load testing, multi-protocol support, and zero licensing cost."
      ],
      "keyPoints": [
        "Purpose: Multi-protocol performance and load generation.",
        "Architecture: Thread Groups -> Samplers -> Assertions -> Listeners.",
        "Advantages: Open-source, platform-independent, distributed load generation."
      ]
    },
    {
      "id": "stqa-u5-q14",
      "unitId": "unit-5",
      "subjectId": "stqa",
      "qNumber": 14,
      "title": "Overview of Enterprise Automation Tools: HP LoadRunner, SoapUI, Appium, and Tricentis Tosca",
      "shortTitle": "Enterprise Automation Tools Overview",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "Textbook 5.8 & 5.11",
          "questionNo": "Q5/Q6 Related",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Enterprise Tools",
        "LoadRunner",
        "SoapUI",
        "Appium",
        "Tosca"
      ],
      "definition": "Modern test automation utilizes specialized tools across web, mobile, API, and load testing domains to achieve end-to-end quality validation.",
      "sections": [
        {
          "title": "1. Enterprise Tool Profiles",
          "content": [
            "HP / Micro Focus LoadRunner: Enterprise load-testing industry standard. Simulates hundreds of thousands of concurrent virtual users using minimal hardware. Provides deep root-cause transaction diagnostics.",
            "SoapUI: Leading cross-platform API testing tool for SOAP and RESTful web services. Supports automated functional testing, security vulnerability scanning, and API load testing.",
            "Appium: Leading open-source framework for automating native, hybrid, and mobile web apps on iOS and Android using the WebDriver protocol without modifying application source code.",
            "Tricentis Tosca: Model-based, scriptless automation platform integrating test case design, risk prioritization, and automated test data generation."
          ]
        },
        {
          "title": "2. Tool Comparison Table",
          "content": [],
          "table": {
            "headers": [
              "Tool",
              "Specialization",
              "Licensing",
              "Core Strength"
            ],
            "rows": [
              {
                "parameter": "Apache JMeter",
                "col1": "Performance & Load Testing",
                "col2": "Open-Source",
                "col3": "Multi-protocol, highly customizable via plugins."
              },
              {
                "parameter": "HP LoadRunner",
                "col1": "High-Concurrency Performance",
                "col2": "Commercial",
                "col3": "Extreme scalability, enterprise transaction diagnostics."
              },
              {
                "parameter": "SoapUI",
                "col1": "API & Web Service Testing",
                "col2": "Open-Source & Pro",
                "col3": "REST/SOAP validation, security vulnerability scanning."
              },
              {
                "parameter": "Appium",
                "col1": "Mobile App Automation",
                "col2": "Open-Source",
                "col3": "Cross-platform iOS/Android using standard WebDriver."
              },
              {
                "parameter": "Tricentis Tosca",
                "col1": "End-to-End Enterprise Testing",
                "col2": "Commercial",
                "col3": "Model-based scriptless test design, risk-based testing."
              }
            ]
          }
        }
      ],
      "summary": [
        "Enterprise testing relies on domain-specialized tools for load, API, mobile, and scriptless testing.",
        "LoadRunner for enterprise scale, SoapUI for APIs, Appium for mobile, and Tosca for scriptless testing.",
        "Tools are selected based on technical domain, platform, and organizational budget."
      ],
      "keyPoints": [
        "LoadRunner = High-concurrency enterprise load testing.",
        "SoapUI = REST and SOAP API validation.",
        "Appium = iOS & Android mobile automation (WebDriver protocol).",
        "Tosca = Scriptless model-based enterprise automation."
      ]
    }
  ]
};
