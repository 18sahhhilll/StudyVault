import { Unit } from '@/types';

export const unit3Data: Unit = {
  "id": "unit-3",
  "unitNumber": 3,
  "title": "Unit III: Test Case Design Techniques & Levels of Testing",
  "shortTitle": "Test Case Design & Levels",
  "description": "Comprehensive study of Software Testing Methodologies, Black/White/Grey Box Testing, Structural Coverage (Statement, Branch, Loop), Static Reviews & Inspections, Black-Box Design (BVA, ECP), Levels of Testing (Unit, Integration, System, Acceptance), and Non-Functional Testing (Performance, Security, Cookies, Regression).",
  "syllabus": [
    "Software Testing Methodologies: White Box, Black Box, Grey Box Testing",
    "Static Test Design Techniques: Informal Reviews, Walkthroughs, Inspections",
    "Dynamic Techniques & Structural Testing: Statement, Branch, Condition, Path, Loop Coverage",
    "Black Box Techniques: Boundary Value Analysis (BVA), Equivalence Class Partitioning (ECP)",
    "Experience-Based Testing: Adhoc Testing, Exploratory Testing, Error Guessing",
    "Levels of Testing: Unit Testing, Integration Testing (Top-Down, Bottom-Up, Sandwich), System Testing, Acceptance Testing (UAT, Alpha, Beta)",
    "Non-Functional Testing: Performance, Load, Stress, Compatibility, Security, Cookies, and Regression Testing"
  ],
  "questionPaperIndex": [
    {
      "paper": "May 2023 ([6004]-491)",
      "qMain": "Q1(a) Black vs White Box (6M), Q1(b) Unit & Integration (6M), Q1(c) Non-Functional & Performance (6M)",
      "qOr": "Q2(a) Experience-Based (6M), Q2(b) Statement & Branch Coverage (6M), Q2(c) System & Acceptance (6M)"
    },
    {
      "paper": "Nov 2023 ([6181]-112)",
      "qMain": "Q1(a) Static Techniques (6M), Q1(b) Dynamic Techniques (6M), Q1(c) Static Value (6M)",
      "qOr": "Q2(a) Adhoc Testing (6M), Q2(b) Unit & Integration (6M), Q2(c) Regression Testing (6M)"
    },
    {
      "paper": "May 2024 ([6263]-92)",
      "qMain": "Q1(a) White vs Grey Box (6M), Q1(b) BVA & ECP (6M), Q1(c) Functional vs Non-Functional (6M)",
      "qOr": "Q2(a) Reviews, Walkthroughs, Inspections (6M), Q2(b) Cookies Testing (6M), Q2(c) Loop Coverage (6M)"
    },
    {
      "paper": "May 2025 ([6406]-92)",
      "qMain": "Q1(a) White Box (6M), Q1(b) Performance & Security (6M), Q1(c) Risk-Based Testing (6M)",
      "qOr": "Q2(a) Black Box (6M), Q2(b) Compatibility & Security (6M), Q2(c) Exploratory Testing (6M)"
    },
    {
      "paper": "Nov 2025 ([6584]-102)",
      "qMain": "Q1(a) Black vs White Box (6M), Q1(b) System & Acceptance (6M), Q1(c) Unit & Integration (6M)",
      "qOr": "Q2(a) BVA & ECP (6M), Q2(b) Cookies Testing (6M), Q2(c) Functional vs Non-Functional (6M)"
    }
  ],
  "quickRevision": {
    "keyDefinitions": [
      {
        "term": "Black Box Testing",
        "definition": "Specification-based testing that evaluates external behavior without access to internal source code."
      },
      {
        "term": "White Box Testing",
        "definition": "Structure-based testing that verifies internal paths, branches, conditions, and code execution."
      },
      {
        "term": "Grey Box Testing",
        "definition": "Hybrid technique combining black-box exterior testing with partial internal architectural/schema knowledge."
      },
      {
        "term": "Statement Coverage",
        "definition": "White-box metric measuring the percentage of executable lines executed by test cases."
      },
      {
        "term": "Branch Coverage",
        "definition": "Structural metric measuring the percentage of decision outcomes (True/False) evaluated by test cases."
      },
      {
        "term": "Boundary Value Analysis (BVA)",
        "definition": "Test design technique targeting the minimum, maximum, and extreme edges of input ranges."
      },
      {
        "term": "Equivalence Class Partitioning (ECP)",
        "definition": "Dividing input domain into partitions where all members are assumed to be processed identically."
      },
      {
        "term": "Regression Testing",
        "definition": "Selective re-testing to confirm that recent code fixes have not broken existing working features."
      }
    ],
    "coreFormulas": [
      {
        "name": "Statement Coverage",
        "latex": "\\text{Coverage}_{\\text{stmt}} = \\frac{\\text{Executed Statements}}{\\text{Total Executable Statements}} \\times 100\\%"
      },
      {
        "name": "Branch Coverage",
        "latex": "\\text{Coverage}_{\\text{branch}} = \\frac{\\text{Exercised Outcomes}}{\\text{Total Decision Outcomes}} \\times 100\\%"
      },
      {
        "name": "Risk Exposure",
        "latex": "\\text{Risk Score} = \\text{Probability of Failure} \\times \\text{Impact Severity}"
      }
    ],
    "comparisonHighlights": [
      {
        "title": "Black Box vs White Box",
        "summary": "Black box tests specifications at System/UAT level; White box tests internal code paths at Unit level."
      },
      {
        "title": "Top-Down vs Bottom-Up Integration",
        "summary": "Top-Down uses Stubs (dummy called functions); Bottom-Up uses Drivers (dummy calling harnesses)."
      },
      {
        "title": "Functional vs Non-Functional",
        "summary": "Functional verifies WHAT features do; Non-functional verifies HOW WELL they perform (speed, security)."
      },
      {
        "title": "Walkthrough vs Inspection",
        "summary": "Walkthrough is author-led for knowledge transfer; Inspection is moderator-led, formal, and gathers metrics."
      }
    ],
    "examTips": [
      "In White Box coverage questions, always state that 100% Branch Coverage guarantees 100% Statement Coverage, but not vice versa.",
      "For BVA questions, always illustrate with a concrete numeric range showing min, min+1, nom, max-1, max, and robustness values.",
      "In Integration Testing, draw clear diagrams showing Stubs (subordinate modules) and Drivers (calling harnesses)."
    ]
  },
  "questions": [
    {
      "id": "stqa-u3-q1",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 1,
      "title": "Differentiate Between Black Box and White Box Testing",
      "shortTitle": "Black Box vs White Box Testing",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q1(a)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q1(a)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q1(a) & Q2(a)",
          "marks": 6
        },
        {
          "paper": "May 2024",
          "questionNo": "Q1(a)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Software Testing Methodologies",
        "Black Box Testing",
        "White Box Testing"
      ],
      "definition": "Black box testing evaluates software against specified requirements without access to internal source code, while white box testing evaluates internal structural logic, branches, and code paths with full source code visibility.",
      "sections": [
        {
          "title": "1. Core Concepts",
          "content": [
            "Black Box Testing (Behavioral/Functional Testing): Treats the application as an opaque box. The tester supplies inputs and observes outputs against requirement specifications without examining internal algorithms, implementation logic, or data structures.",
            "White Box Testing (Glass Box / Structural Testing): Focuses on the internal implementation, control flow graphs, conditions, loops, and statement branches. The tester requires programming skills and full access to source code."
          ]
        },
        {
          "title": "2. Exhaustive Comparison",
          "content": [
            "In Simple Words:",
            "Black Box testing is like testing a car as a driver: you press the accelerator pedal and verify if the car accelerates smoothly without caring how the engine cylinders ignite.",
            "White Box testing is like testing a car as an automotive engineer: you open the hood, inspect the spark plugs, wires, and fuel injectors with the engine running to ensure every line of code executes properly."
          ],
          "table": {
            "headers": [
              "Black Box Testing (Specification-Based)",
              "White Box Testing (Structure-Based)"
            ],
            "rows": [
              {
                "parameter": "Testing Scope: Evaluates external system functionality against specified requirements without any access to internal source code.",
                "col1": "Testing Scope: Evaluates internal code logic, branches, loops, data flows, and exception conditions with full source code visibility."
              },
              {
                "parameter": "Alternative Industry Names: Commonly known as Functional Testing, Behavioral Testing, or Closed-Box Testing.",
                "col1": "Alternative Industry Names: Commonly known as Structural Testing, Glass-Box Testing, or Clear-Box Testing."
              },
              {
                "parameter": "Tester Profile: Conducted by dedicated QA test engineers, business analysts, and end-users without requiring programming skills.",
                "col1": "Tester Profile: Conducted by software developers and white-box test specialists with deep programming and architecture expertise."
              },
              {
                "parameter": "Primary Testing Levels: Executed predominantly during System Testing and User Acceptance Testing (UAT).",
                "col1": "Primary Testing Levels: Executed predominantly during Unit Testing and Module Integration Testing."
              },
              {
                "parameter": "Test Design Techniques: Uses Boundary Value Analysis (BVA), Equivalence Class Partitioning (ECP), Decision Tables, and State Transitions.",
                "col1": "Test Design Techniques: Uses Statement Coverage, Branch Coverage, Condition Coverage, Path Coverage, and Cyclomatic Complexity."
              },
              {
                "parameter": "Types of Defects Uncovered: Detects missing requirements, usability defects, integration mismatches, and behavioral deviations.",
                "col1": "Types of Defects Uncovered: Detects memory leaks, infinite loops, dead/unreachable code, pointer errors, and logic syntax flaws."
              }
            ]
          }
        }
      ],
      "summary": [
        "Black box testing tests external functionality without code access (System/UAT level).",
        "White box testing verifies internal execution paths, branches, and conditions (Unit level).",
        "Black box uses BVA and Equivalence Partitioning; white box uses Statement, Branch, and Path coverage."
      ],
      "keyPoints": [
        "Black Box: Functional, external behavior, requirements-based, no code access.",
        "White Box: Structural, internal logic, control flow, programming expertise required.",
        "Complementary: Both are required for complete software quality verification."
      ]
    },
    {
      "id": "stqa-u3-q2",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 2,
      "title": "Explain White Box Testing and Grey Box Testing in Detail",
      "shortTitle": "White Box and Grey Box Testing",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2024",
          "questionNo": "Q1(a)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q1(a)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "White Box Testing",
        "Grey Box Testing",
        "Testing Methodologies"
      ],
      "definition": "White box testing involves full source code analysis and path testing, while Grey box testing is a hybrid technique combining black-box exterior testing with partial internal knowledge (database schemas, data flows, APIs, and architecture blueprints).",
      "sections": [
        {
          "title": "1. White Box Testing Principles",
          "content": [
            "White box testing examines procedural logic, control paths, branches, conditions, and loops.",
            "Uses static and dynamic code analyzers to verify statement, branch, and condition coverage.",
            "Primary advantages: Detects unreachable dead code, memory leaks, security backdoors, and initialization errors."
          ]
        },
        {
          "title": "2. Grey Box Testing Principles & Techniques",
          "content": [
            "Grey box testing bridges the gap between pure black box and pure white box testing. The tester has access to internal architectural documentation (database schemas, state diagrams, API payload contracts) but performs tests from the exterior.",
            "Matrix Testing: Analyzes variable states and dependency matrices across modules.",
            "Regression Testing: Directs regression tests toward modules dependent on recently modified code.",
            "Pattern Testing: Analyzes defect histories to identify defect clustering patterns across complex subsystems.",
            "Orthogonal Array Testing: Statistical technique optimizing high-coverage test cases with minimum permutations."
          ]
        },
        {
          "title": "3. Tabular Comparison",
          "content": [],
          "table": {
            "headers": [
              "White Box Testing (Full Code Access)",
              "Grey Box Testing (Partial Internal Knowledge)"
            ],
            "rows": [
              {
                "parameter": "Internal Source Code Knowledge: Requires 100% transparent access to internal source code, control flow graphs, and class implementations.",
                "col1": "Internal Source Code Knowledge: Operates with partial internal architectural knowledge (database schemas, data flow diagrams, API specs) without full code access."
              },
              {
                "parameter": "Primary Tester Role: Conducted primarily by core software developers and specialized white-box automation engineers.",
                "col1": "Primary Tester Role: Conducted by technical QA engineers and integration testers bridging developers and business teams."
              },
              {
                "parameter": "Execution Perspective: Focuses purely on low-level structural code paths, conditional logic branches, and runtime variables.",
                "col1": "Execution Perspective: Focuses on high-level user workflows informed by underlying database tables and backend web services."
              },
              {
                "parameter": "Core Test Design Methods: Employs Statement Coverage, Branch Coverage, Path Coverage, and Mutation Testing.",
                "col1": "Core Test Design Methods: Employs Matrix Testing, API endpoints validation, SQL injection probes, and Orthogonal Array testing."
              }
            ]
          }
        }
      ],
      "summary": [
        "White box tests internal logic with complete code access (Statement, Branch, Path).",
        "Grey box uses architectural and schema knowledge while testing from user/API endpoints.",
        "Grey box leverages Matrix testing, Pattern analysis, and Orthogonal array optimization."
      ],
      "keyPoints": [
        "White box = Glass box (full code access, unit level).",
        "Grey box = Hybrid (partial architectural knowledge, integration/API level).",
        "Grey box improves test coverage efficiency without full source code maintenance overhead."
      ]
    },
    {
      "id": "stqa-u3-q3",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 3,
      "title": "What Do You Mean by Unit and Integration Testing? What Are the Approaches Used in Integration Testing?",
      "shortTitle": "Unit and Integration Testing Approaches",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q1(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2023",
          "questionNo": "Q2(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q1(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Levels of Testing",
        "Unit Testing",
        "Integration Testing",
        "Top-Down",
        "Bottom-Up"
      ],
      "definition": "Unit testing verifies isolated modules or classes, while Integration testing verifies the interaction, data communication, and interfaces between integrated modules.",
      "sections": [
        {
          "title": "1. Unit Testing vs Integration Testing",
          "content": [
            "Unit Testing: The smallest testable software component (function, class, module) is tested in complete isolation using mock objects and stubs. Performed by developers early in the lifecycle.",
            "Integration Testing: Grouping individually tested units together to uncover communication bugs, data format incompatibilities, interface mismatches, and timing issues between subsystems."
          ]
        },
        {
          "title": "2. Approaches Used in Integration Testing",
          "content": [
            "A. Big Bang Approach: All modules are developed, combined all at once, and tested as a single entity. Prone to chaotic debugging and delayed defect discovery; suitable only for tiny systems.",
            "B. Top-Down Approach: Integration proceeds downward from the top of the control hierarchy. High-level control modules are tested first. Missing lower modules are simulated using Stubs (dummy called modules).",
            "C. Bottom-Up Approach: Integration begins from lowest-level utility modules and moves upward. Missing higher calling modules are simulated using Drivers (dummy calling harnesses).",
            "D. Sandwich (Hybrid) Approach: Combines Top-Down and Bottom-Up simultaneously around a middle target layer. Maximizes parallel testing efficiency."
          ]
        },
        {
          "title": "3. Direct 2-Column Comparison: Top-Down vs Bottom-Up Integration Testing",
          "content": [],
          "table": {
            "headers": [
              "Top-Down Integration Testing (Uses Stubs)",
              "Bottom-Up Integration Testing (Uses Drivers)"
            ],
            "rows": [
              {
                "parameter": "Integration begins from the top of the control hierarchy (main module) and progressively moves downward toward child modules.",
                "col1": "Integration begins from lowest-level atomic utility modules at the bottom and progressively moves upward toward parent control modules."
              },
              {
                "parameter": "Requires Stubs (dummy called routines) to simulate missing lower-level child functions that are not yet developed.",
                "col1": "Requires Drivers (dummy calling test harnesses) to simulate missing higher-level parent functions to invoke child modules."
              },
              {
                "parameter": "Major architectural, decision-logic, and system control flow flaws are discovered very early in the testing cycle.",
                "col1": "Low-level data-processing routines, calculation algorithms, and database/hardware drivers are verified and hardened first."
              },
              {
                "parameter": "An early working prototype or skeleton system can be demonstrated to clients and project stakeholders.",
                "col1": "A working system demo cannot be presented until the final top-level control module is integrated at the very end."
              },
              {
                "parameter": "Writing stubs can be complex and labor-intensive because stubs must simulate realistic return data structures.",
                "col1": "Writing test drivers is relatively simple because drivers merely invoke functions with test input parameters."
              },
              {
                "parameter": "Best suited when high-level user flows and overall architectural design carry the primary operational risk.",
                "col1": "Best suited for computational systems, object-oriented libraries, and embedded device controller modules."
              }
            ]
          }
        }
      ],
      "summary": [
        "Unit testing verifies isolated components; Integration testing verifies interfaces between modules.",
        "Top-Down integration uses Stubs to simulate lower-level functions.",
        "Bottom-Up integration uses Drivers to simulate calling routines.",
        "Sandwich integration combines both for optimal parallel development."
      ],
      "keyPoints": [
        "Unit testing = isolated code functions (developers, JUnit).",
        "Integration testing = module interfaces and data flow.",
        "Stub = dummy called routine (Top-Down); Driver = dummy calling routine (Bottom-Up)."
      ]
    },
    {
      "id": "stqa-u3-q4",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 4,
      "title": "How Would You Explain System Testing and Acceptance Testing?",
      "shortTitle": "System Testing vs Acceptance Testing",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q2(c)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q1(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Levels of Testing",
        "System Testing",
        "Acceptance Testing",
        "Alpha & Beta Testing"
      ],
      "definition": "System testing validates the complete, integrated software product against specified system requirements (SRS), while Acceptance testing validates software against user business requirements to determine release readiness.",
      "sections": [
        {
          "title": "1. System Testing",
          "content": [
            "Conducted on the complete, fully integrated system in a production-like staging environment.",
            "Executed by independent QA teams against the Software Requirements Specification (SRS).",
            "Covers both Functional testing (end-to-end workflows, business rules) and Non-Functional testing (performance, security, stress, recovery, load, compatibility)."
          ]
        },
        {
          "title": "2. Acceptance Testing",
          "content": [
            "Conducted by clients, end-users, and business stakeholders to determine whether the software fulfills contractual acceptance criteria.",
            "User Acceptance Testing (UAT): Real end-users execute day-to-day operational business tasks.",
            "Business Acceptance Testing (BAT): Evaluates market viability and business ROI.",
            "Alpha Testing: Conducted by internal users or select client reps at the developer site in a controlled environment.",
            "Beta Testing (Field Testing): Conducted by external real-world users in their own environments without developer supervision."
          ]
        },
        {
          "title": "3. Comparison Table",
          "content": [],
          "table": {
            "headers": [
              "System Testing (Technical Compliance)",
              "Acceptance Testing (User & Business Acceptance)"
            ],
            "rows": [
              {
                "parameter": "Core Testing Objective: Validates complete end-to-end integration and compliance against the technical System Requirements Specification (SRS).",
                "col1": "Core Testing Objective: Validates fitness for real-world business use against user expectations and business acceptance criteria."
              },
              {
                "parameter": "Conducted By: Executed by dedicated professional QA and independent system testing teams.",
                "col1": "Conducted By: Executed by clients, business analysts, product owners, and selected real-world end-users (Alpha/Beta testing)."
              },
              {
                "parameter": "Execution Environment: Executed on a dedicated staging/test environment configured to simulate production hardware.",
                "col1": "Execution Environment: Executed directly in the client production or pre-production environment with real customer data."
              },
              {
                "parameter": "Execution Lifecycle Stage: Performed immediately after Integration Testing before handing the software to the client.",
                "col1": "Execution Lifecycle Stage: The final formal gatekeeper phase of testing prior to official commercial release or sign-off."
              }
            ]
          }
        }
      ],
      "summary": [
        "System testing verifies technical SRS compliance across functional and non-functional domains.",
        "Acceptance testing determines final customer acceptance and commercial release authorization.",
        "Acceptance testing includes UAT, BAT, Alpha (developer site), and Beta (field site) testing."
      ],
      "keyPoints": [
        "System Testing = QA team, technical SRS compliance, staging environment.",
        "Acceptance Testing = End-users/client, business criteria, release gate.",
        "Alpha = internal/controlled; Beta = external/real-world."
      ]
    },
    {
      "id": "stqa-u3-q5",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 5,
      "title": "Differentiate Between Functional Testing and Non-Functional Testing",
      "shortTitle": "Functional vs Non-Functional Testing",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2024",
          "questionNo": "Q1(c)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q2(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Software Testing Types",
        "Functional Testing",
        "Non-Functional Testing"
      ],
      "definition": "Functional testing validates WHAT the software does against business specifications, while Non-functional testing evaluates HOW WELL the software operates under diverse operational conditions (performance, security, scalability, usability).",
      "sections": [
        {
          "title": "1. Core Concepts",
          "content": [
            "Functional Testing: Verifies specific actions, calculations, database updates, navigation, and user commands against functional requirements. Answers: \"Does the feature work as specified?\"",
            "Non-Functional Testing: Verifies system quality attributes such as speed, throughput, responsiveness, security posture, scalability, and recovery time. Answers: \"How well and reliably does the software perform?\""
          ]
        },
        {
          "title": "2. Tabular Comparison",
          "content": [
            "In Simple Words:",
            "Functional testing tests WHAT the system does (e.g. clicking the Pay button transfers money).",
            "Non-functional testing tests HOW WELL the system does it (e.g. can 50,000 users click Pay at the exact same second without crashing the server?)."
          ],
          "table": {
            "headers": [
              "Functional Testing (WHAT the system does)",
              "Non-Functional Testing (HOW WELL the system performs)"
            ],
            "rows": [
              {
                "parameter": "Primary Testing Focus: Evaluates functional behaviors, features, actions, inputs, and business rules (WHAT the application does).",
                "col1": "Primary Testing Focus: Evaluates non-functional quality attributes such as performance, load, security, and scalability (HOW WELL it runs)."
              },
              {
                "parameter": "Input Specification Basis: Validated directly against business functional requirements, use cases, and user stories.",
                "col1": "Input Specification Basis: Validated against Service Level Agreements (SLAs), performance criteria, and security benchmarks."
              },
              {
                "parameter": "Execution Priority: Must be executed first to ensure core business functions work before optimizing performance.",
                "col1": "Execution Priority: Executed after functional stability is achieved to optimize user experience and system endurance."
              },
              {
                "parameter": "Representative Examples: Unit Testing, Integration Testing, Smoke Testing, User Acceptance Testing (UAT).",
                "col1": "Representative Examples: Load Testing, Stress Testing, Penetration Security Testing, Usability Testing, Disaster Recovery."
              }
            ]
          }
        }
      ],
      "summary": [
        "Functional testing verifies specified features (\"What\"); non-functional testing verifies quality attributes (\"How well\").",
        "Functional testing is prerequisite to non-functional testing.",
        "Non-functional testing requires automated load, stress, and security profiling tools."
      ],
      "keyPoints": [
        "Functional: User workflows, inputs and outputs, business logic.",
        "Non-Functional: Speed, scalability, uptime, security, usability.",
        "Both are mandatory for software release approval."
      ]
    },
    {
      "id": "stqa-u3-q6",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 6,
      "title": "Illustrate Non-Functional Testing. Explain Performance Testing with Examples",
      "shortTitle": "Non-Functional & Performance Testing",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q1(c)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q1(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Non-Functional Testing",
        "Performance Testing",
        "Load Testing",
        "Stress Testing"
      ],
      "definition": "Performance testing is a non-functional testing discipline that evaluates system responsiveness, throughput, speed, stability, and resource utilization under specific workloads.",
      "sections": [
        {
          "title": "1. Performance Testing Overview & Core Metrics",
          "content": [
            "Response Time: Elapsed duration from user request transmission to complete server response reception.",
            "Throughput: Number of transactions or requests processed successfully per second (TPS).",
            "Latency: Network packet delay before request processing commences.",
            "Resource Utilization: CPU, memory, disk I/O, and network bandwidth saturation percentages."
          ]
        },
        {
          "title": "2. Major Types of Performance Testing with Concrete Examples",
          "content": [
            "Load Testing: Verifies system behavior under expected normal and peak workloads. Example: Testing an e-commerce checkout flow with 5,000 concurrent shopping carts to ensure response time remains below 2 seconds.",
            "Stress Testing: Evaluates robustness by pushing workload beyond normal operational capacity until failure occurs, observing graceful degradation and recovery. Example: Bombarding a banking API designed for 10,000 users with 35,000 users to test database failover.",
            "Spike Testing: Verifies system response to sudden, dramatic bursts of traffic. Example: Simulating ticket sales opening for a popular concert where 50,000 users arrive within 30 seconds.",
            "Endurance (Soak) Testing: Runs a steady workload over extended periods (24-72 hours) to identify memory leaks, resource starvation, and connection pool exhaustion."
          ]
        }
      ],
      "summary": [
        "Performance testing measures response time, throughput, latency, and resource utilization.",
        "Load testing evaluates expected normal/peak traffic; stress testing tests breaking points.",
        "Spike testing evaluates sudden traffic bursts; endurance testing detects memory leaks."
      ],
      "keyPoints": [
        "Performance = speed, scalability, stability under workload.",
        "Metrics: Response time, TPS throughput, CPU/RAM utilization.",
        "Load (expected), Stress (breaking point), Spike (surge), Endurance (leak detection)."
      ]
    },
    {
      "id": "stqa-u3-q7",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 7,
      "title": "Explain Static Test Case Design Techniques: Informal Reviews, Walkthroughs, and Inspections",
      "shortTitle": "Static Reviews, Walkthroughs & Inspections",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q1(a) & Q1(c)",
          "marks": 6
        },
        {
          "paper": "May 2024",
          "questionNo": "Q2(a)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Static Techniques",
        "Reviews",
        "Walkthroughs",
        "Fagan Inspections"
      ],
      "definition": "Static test techniques examine software requirements, design specifications, and source code without executing code, catching defects early at minimal cost.",
      "sections": [
        {
          "title": "1. Spectrum of Static Review Techniques",
          "content": [
            "Informal Reviews: Informal peer check where an author shares an artifact with a colleague. No formal checklist, meeting notes, or defect tracking. Inexpensive and fast.",
            "Walkthroughs: Semi-formal review led by the artifact author to educate team members, gather feedback, examine design alternatives, and find obvious omissions.",
            "Inspections (Fagan Inspection): The most formal, disciplined static review. Led by a trained neutral Moderator (not the author). Follows strict entry/exit criteria, checklists, formal defect logging, and metrics collection."
          ]
        },
        {
          "title": "2. The 6 Formal Phases of Fagan Inspection",
          "content": [
            "1. Planning: Establish entry criteria, assign inspector roles, schedule meeting.",
            "2. Overview: Author briefs inspectors on background and architecture.",
            "3. Preparation: Inspectors independently examine material using checklists and pre-record suspected defects.",
            "4. Inspection Meeting: Moderator leads line-by-line review. Defects are logged; discussing solutions is forbidden.",
            "5. Rework: Author corrects confirmed defects in the artifact.",
            "6. Follow-up: Moderator verifies fixes against formal exit criteria."
          ]
        },
        {
          "title": "3. Comparison of Review Techniques",
          "content": [],
          "table": {
            "headers": [
              "Parameter",
              "Informal Review",
              "Walkthrough",
              "Inspection"
            ],
            "rows": [
              {
                "parameter": "Formality",
                "col1": "Low / None",
                "col2": "Medium / Semi-formal",
                "col3": "High / Strictly formal"
              },
              {
                "parameter": "Session Leader",
                "col1": "Peer-to-peer",
                "col2": "Author of artifact",
                "col3": "Trained neutral Moderator"
              },
              {
                "parameter": "Preparation",
                "col1": "None",
                "col2": "Minimal / Ad-hoc",
                "col3": "Mandatory individual preparation"
              },
              {
                "parameter": "Checklists Used",
                "col1": "No",
                "col2": "Optional",
                "col3": "Mandatory standard checklists"
              },
              {
                "parameter": "Defect Logging",
                "col1": "Informal notes",
                "col2": "Meeting minutes",
                "col3": "Formal defect log and metrics"
              }
            ]
          }
        }
      ],
      "summary": [
        "Static testing inspects artifacts without code execution, trapping defects early.",
        "Walkthroughs are author-led for knowledge transfer and peer feedback.",
        "Inspections are moderator-led, formal, checklist-driven, and generate quality metrics."
      ],
      "keyPoints": [
        "Static testing = Verification without code execution.",
        "Inspection phases: Planning, Overview, Preparation, Meeting, Rework, Follow-up.",
        "Moderator leads inspections, author corrects rework."
      ]
    },
    {
      "id": "stqa-u3-q8",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 8,
      "title": "Interpret Dynamic Test Design Techniques and Differentiate Between Static and Dynamic Testing",
      "shortTitle": "Static vs Dynamic Testing",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q1(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Dynamic Testing",
        "Static vs Dynamic",
        "Verification vs Validation"
      ],
      "definition": "Static testing evaluates software artifacts without executing code (Verification), while Dynamic testing compiles and executes the program on target hardware with inputs to observe runtime behavior (Validation).",
      "sections": [
        {
          "title": "1. Dynamic Testing Techniques",
          "content": [
            "Dynamic testing requires compiled code and runtime test inputs.",
            "Black-box techniques: BVA, Equivalence Partitioning, Decision Tables, State Transitions.",
            "White-box techniques: Statement, Branch, Condition, Path, and Mutation testing.",
            "Experience-based techniques: Exploratory testing, Error guessing, Fault injection."
          ]
        },
        {
          "title": "2. Static vs Dynamic Comparison",
          "content": [
            "In Simple Words:",
            "Static testing is reviewing the code or blueprints with your eyes without running the program (like proofreading a book before printing).",
            "Dynamic testing is compiling and running the code on a computer with real inputs (like test-driving the car on the road)."
          ],
          "table": {
            "headers": [
              "Static Testing (Verification without Code Execution)",
              "Dynamic Testing (Validation with Code Execution)"
            ],
            "rows": [
              {
                "parameter": "Code Execution Requirement: Source code is NOT executed; software artifacts are reviewed and analyzed statically.",
                "col1": "Code Execution Requirement: Source code MUST be compiled and executed on a machine using live test inputs."
              },
              {
                "parameter": "Verification vs Validation: Represents Verification ('Are we building the product right?') by evaluating documents and code syntax.",
                "col1": "Represents Validation ('Are we building the right product?') by evaluating dynamic runtime outputs."
              },
              {
                "parameter": "Defects Prevented vs Detected: Prevents defect propagation into later phases by catching flaws early in requirements and design.",
                "col1": "Detects active runtime defects such as crashes, incorrect outputs, memory leaks, and interface bottlenecks."
              },
              {
                "parameter": "Techniques & Tools: Informal Reviews, Technical Walkthroughs, Formal Fagan Inspections, and Static Code Analyzers (SonarQube).",
                "col1": "Techniques & Tools: Boundary Value Analysis, Equivalence Partitioning, Stress Testing, Unit Testing (JUnit), and Dynamic Profilers."
              }
            ]
          }
        }
      ],
      "summary": [
        "Static testing reviews documents and code without execution (verification).",
        "Dynamic testing runs programs with test cases to detect failures (validation).",
        "Both are complementary and required for high-assurance software engineering."
      ],
      "keyPoints": [
        "Static = Verification, no execution, reviews/inspections, low defect cost.",
        "Dynamic = Validation, execution on hardware, black/white box test cases.",
        "Static prevents defects; dynamic detects runtime failures."
      ]
    },
    {
      "id": "stqa-u3-q9",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 9,
      "title": "Explain Experience-Based Techniques. Illustrate Adhoc Testing and Exploratory Testing with Examples",
      "shortTitle": "Adhoc and Exploratory Testing",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q2(a)",
          "marks": 6
        },
        {
          "paper": "Nov 2023",
          "questionNo": "Q2(a)",
          "marks": 6
        },
        {
          "paper": "May 2025",
          "questionNo": "Q2(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Experience-Based Techniques",
        "Adhoc Testing",
        "Exploratory Testing",
        "Buddy Testing"
      ],
      "definition": "Experience-based techniques leverage tester intuition, domain knowledge, and past defect history to design tests where specifications are missing or incomplete.",
      "sections": [
        {
          "title": "1. Adhoc Testing",
          "content": [
            "Informal, unplanned, and unstructured testing performed without test cases or formal documentation.",
            "Tester uses random trial-and-error to expose hidden bugs and edge-case exceptions.",
            "Buddy Testing: One developer and one tester work together on a module.",
            "Pair Testing: Two testers share one machine to test workflows collaboratively."
          ]
        },
        {
          "title": "2. Exploratory Testing",
          "content": [
            "Simultaneous learning, test design, and test execution.",
            "Charter-Driven: Uses a time-boxed Test Charter (60-90 mins) specifying test mission and scope.",
            "Dynamic Adaptation: Each test outcome informs and shapes the next test scenario.",
            "Example: Testing shopping cart coupon codes, dynamically testing boundary expirations, stacking codes, and applying coupons to negative balances."
          ]
        },
        {
          "title": "3. Comparison: Adhoc vs Exploratory",
          "content": [
            "In Simple Words:",
            "Adhoc testing is random unplanned poking around like an impatient child playing with buttons (monkey testing).",
            "Exploratory testing is an experienced detective exploring a crime scene without a fixed script, simultaneously learning, designing, and executing intelligent tests."
          ],
          "table": {
            "headers": [
              "Adhoc Testing (Unplanned & Random)",
              "Exploratory Testing (Charter-Guided & Simultaneous Learning)"
            ],
            "rows": [
              {
                "parameter": "Planning & Structure: Completely unplanned, spontaneous, and unstructured; tester pokes around randomly without a goal.",
                "col1": "Planning & Structure: Guided by structured time-boxed Test Charters defining specific missions, focus areas, and boundary tactics."
              },
              {
                "parameter": "Documentation: Zero formal documentation or recorded test design before, during, or after testing.",
                "col1": "Documentation: Lightweight session logs, test notes, defect captures, and coverage metrics recorded during the session."
              },
              {
                "parameter": "Tester Skill Level: Can be performed by anyone without deep domain knowledge (often called monkey testing).",
                "col1": "Tester Skill Level: Requires highly skilled test detectives who simultaneously learn, design tests, and execute them in real time."
              },
              {
                "parameter": "Reproducibility: Very low; when a defect is found, tracing the exact sequence of chaotic actions can be difficult.",
                "col1": "Reproducibility: High; session notes and screen captures document the precise path taken to trigger the bug."
              }
            ]
          }
        }
      ],
      "summary": [
        "Adhoc testing is unstructured, unplanned testing to break software (Buddy and Pair testing).",
        "Exploratory testing is disciplined, charter-driven simultaneous learning and test execution.",
        "Both leverage tester experience to detect edge bugs missed by scripted test cases."
      ],
      "keyPoints": [
        "Experience-based = tester intuition + defect patterns.",
        "Adhoc = random, unstructured, no documentation.",
        "Exploratory = charter-driven, time-boxed, simultaneous learning."
      ]
    },
    {
      "id": "stqa-u3-q10",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 10,
      "title": "Discuss Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP) with Examples",
      "shortTitle": "BVA and Equivalence Class Partitioning",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2024",
          "questionNo": "Q1(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q2(a)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Black Box Techniques",
        "Boundary Value Analysis",
        "Equivalence Partitioning"
      ],
      "definition": "Equivalence Class Partitioning (ECP) divides input domains into equivalent partitions of valid and invalid data, while Boundary Value Analysis (BVA) tests boundary transitions (min, min-1, min+1, max, max-1, max+1) where defects cluster.",
      "sections": [
        {
          "title": "1. Equivalence Class Partitioning (ECP)",
          "content": [
            "Partitions inputs into sets where all elements are assumed to be processed identically.",
            "Valid Partitions: Inputs conforming to specifications.",
            "Invalid Partitions: Inputs outside valid boundaries testing error handling.",
            "Testing one value per partition provides representative coverage."
          ]
        },
        {
          "title": "2. Boundary Value Analysis (BVA)",
          "content": [
            "Studies show software bugs cluster disproportionately at boundary edges (off-by-one errors, <= vs <).",
            "Standard BVA points for range [A, B]: Minimum (A), Just above min (A+1), Nominal center (Nom), Just below max (B-1), Maximum (B).",
            "Robustness testing also includes out-of-bounds extremes: A-1 and B+1."
          ]
        },
        {
          "title": "3. Worked Example: Age Field (Range: 18 to 60)",
          "content": [
            "Valid partition: 18 <= Age <= 60 (Accepted). Invalid partitions: Age < 18, Age > 60 (Rejected)."
          ],
          "table": {
            "headers": [
              "Input Value",
              "Category",
              "Test Strategy",
              "Expected Outcome"
            ],
            "rows": [
              {
                "parameter": "17",
                "col1": "Invalid (Just below min)",
                "col2": "BVA Robustness",
                "col3": "Rejected with validation error"
              },
              {
                "parameter": "18",
                "col1": "Valid (Exact minimum)",
                "col2": "BVA / ECP",
                "col3": "Accepted"
              },
              {
                "parameter": "19",
                "col1": "Valid (Just above min)",
                "col2": "BVA",
                "col3": "Accepted"
              },
              {
                "parameter": "35",
                "col1": "Valid (Nominal center)",
                "col2": "ECP",
                "col3": "Accepted"
              },
              {
                "parameter": "59",
                "col1": "Valid (Just below max)",
                "col2": "BVA",
                "col3": "Accepted"
              },
              {
                "parameter": "60",
                "col1": "Valid (Exact maximum)",
                "col2": "BVA / ECP",
                "col3": "Accepted"
              },
              {
                "parameter": "61",
                "col1": "Invalid (Just above max)",
                "col2": "BVA Robustness",
                "col3": "Rejected with validation error"
              }
            ]
          }
        }
      ],
      "summary": [
        "ECP groups inputs into valid and invalid classes to minimize test case counts.",
        "BVA tests boundary limits (min, min-1, min+1, max, max-1, max+1) where edge errors occur.",
        "Combined ECP and BVA deliver robust specification-based black-box coverage."
      ],
      "keyPoints": [
        "ECP = Valid and Invalid input classes.",
        "BVA = Boundaries (min, max, edges).",
        "Robustness BVA = tests invalid extremes (min-1, max+1)."
      ]
    },
    {
      "id": "stqa-u3-q11",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 11,
      "title": "Explain Statement Coverage Testing and Branch Coverage Testing with Examples",
      "shortTitle": "Statement and Branch Coverage",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "May 2023",
          "questionNo": "Q2(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Structural Testing",
        "Statement Coverage",
        "Branch Coverage",
        "White Box Testing"
      ],
      "definition": "Statement coverage measures the percentage of executable lines executed by test cases, while Branch coverage measures the percentage of decision outcomes (both True and False) traversed.",
      "sections": [
        {
          "title": "1. Mathematical Formulas",
          "content": [
            "Statement Coverage measures whether all executable statements are exercised at least once.",
            "Branch Coverage ensures every conditional branch (True/False edge) is evaluated at least once."
          ],
          "formulas": [
            {
              "name": "Statement Coverage",
              "latex": "\\text{Statement Coverage} = \\frac{\\text{Executed Statements}}{\\text{Total Executable Statements}} \\times 100\\%"
            },
            {
              "name": "Branch Coverage",
              "latex": "\\text{Branch Coverage} = \\frac{\\text{Exercised Decision Branches}}{\\text{Total Decision Branches}} \\times 100\\%"
            }
          ]
        },
        {
          "title": "2. Code Analysis and Comparison Example",
          "content": [
            "Logic: if (age > 60) { discount = bill * 0.10; } print(bill);",
            "Test Case 1 (age = 65): Executes if condition (True). Statements executed = 100%, but Branch Coverage = 50% (False branch never evaluated!).",
            "Test Case 2 (age = 25): Evaluates if condition to False. Now both True and False branches are tested -> Branch Coverage = 100%.",
            "Rule: 100% Branch Coverage guarantees 100% Statement Coverage, but 100% Statement Coverage does NOT guarantee 100% Branch Coverage."
          ]
        }
      ],
      "summary": [
        "Statement coverage ensures all executable lines run at least once.",
        "Branch coverage ensures both True and False paths are evaluated at every decision point.",
        "Branch coverage is strictly stronger than statement coverage."
      ],
      "keyPoints": [
        "Statement coverage = line coverage.",
        "Branch coverage = decision outcome coverage (True/False).",
        "100% Branch Coverage -> 100% Statement Coverage (Hierarchy of coverage)."
      ]
    },
    {
      "id": "stqa-u3-q12",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 12,
      "title": "Discuss Loop Coverage Testing and Explain Its Types in Detail",
      "shortTitle": "Loop Coverage Testing and Loop Types",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "May 2024",
          "questionNo": "Q2(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Structural Testing",
        "Loop Testing",
        "Simple Loops",
        "Nested Loops"
      ],
      "definition": "Loop coverage is a white-box testing technique that targets loop structures (for, while, do-while) to detect off-by-one errors, infinite loops, and boundary limit faults.",
      "sections": [
        {
          "title": "1. Classes of Loops and Testing Guidelines",
          "content": [
            "Simple Loops (maximum n passes): Tested at 0 passes (skip loop), 1 pass, 2 passes, typical m passes, n-1 passes, n passes (maximum boundary), and n+1 passes (bounds violation test).",
            "Nested Loops: To prevent exponential test explosion (n^k), set all outer loops to minimum values, test the innermost loop as a simple loop, work outward keeping inner loops at typical values, and repeat.",
            "Concatenated Loops: If independent, test each as an independent simple loop. If dependent (loop 1 counter sets loop 2 limit), treat as nested loops.",
            "Unstructured Loops: Loops with arbitrary goto jumps should be refactored into structured loops before testing."
          ]
        }
      ],
      "summary": [
        "Simple loops are tested at: 0, 1, 2, typical, n-1, n, and n+1 passes.",
        "Nested loops hold outer loops at minimum while testing innermost loops first.",
        "Concatenated loops are tested independently unless variable dependencies exist."
      ],
      "keyPoints": [
        "Loop testing targets boundary and initialization bugs.",
        "Test points: 0, 1, 2, typical, max-1, max, max+1.",
        "Nested loops are tested from innermost outward."
      ]
    },
    {
      "id": "stqa-u3-q13",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 13,
      "title": "State in Your Own Words Why Regression Testing Is Important",
      "shortTitle": "Importance of Regression Testing",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "Nov 2023",
          "questionNo": "Q2(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Levels of Testing",
        "Regression Testing",
        "CI/CD Automation"
      ],
      "definition": "Regression testing verifies that recent code fixes, enhancements, or configuration changes have not caused side effects or broken existing, previously working functionality.",
      "sections": [
        {
          "title": "1. Core Reasons for Importance",
          "content": [
            "Prevents Ripple Effects: Fixing a bug in one component often introduces subtle bugs in dependent modules.",
            "Continuous Integration Confidence: Automated regression suites run on every commit in CI/CD pipelines to catch bugs instantly.",
            "Protects Core Business Workflows: Ensures revenue-critical features remain stable across agile sprints.",
            "Validates Defect Resolution: Verifies that bug fixes completely solve the problem without regressions."
          ]
        },
        {
          "title": "2. Selection Strategies",
          "content": [
            "Retest All: Runs every test case in the regression suite (safest but resource-intensive).",
            "Regression Test Selection: Uses impact analysis to run only tests covering modified code modules.",
            "Test Case Prioritization: Prioritizes tests based on business criticality and failure history."
          ]
        }
      ],
      "summary": [
        "Regression testing ensures bug fixes and new code do not break existing working features.",
        "Primary candidate for automated CI/CD pipelines.",
        "Strategies include Retest-All, Selective Regression, and Priority-based execution."
      ],
      "keyPoints": [
        "Regression = side effect prevention.",
        "Critical for agile, continuous integration, and frequent deployments.",
        "Automated regression suites provide rapid feedback."
      ]
    },
    {
      "id": "stqa-u3-q14",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 14,
      "title": "What Is Cookies Testing? Explain Cookies Testing with an Example",
      "shortTitle": "Cookies Testing with Example",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        {
          "paper": "May 2024",
          "questionNo": "Q2(b)",
          "marks": 6
        },
        {
          "paper": "Nov 2025",
          "questionNo": "Q2(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Non-Functional Testing",
        "Cookies Testing",
        "Web Security"
      ],
      "definition": "Cookies testing validates that small client-side data files (cookies) stored by web browsers manage session state, user preferences, and authentication accurately and securely without vulnerability to tampering or data leakage.",
      "sections": [
        {
          "title": "1. Scope of Cookies Testing",
          "content": [
            "Session vs Persistent Cookies: Verify session cookies delete upon browser closing; verify persistent cookies expire at designated timestamps.",
            "Security Flags: Ensure sensitive authentication tokens carry HttpOnly (blocks XSS theft) and Secure (HTTPS only) flags.",
            "Cookie Disabling: Verify application displays clear warning and degrades gracefully when cookies are disabled in browser settings.",
            "Cookie Tampering: Manually modify cookie parameters (e.g. role=user to role=admin) to ensure server cryptographic signature validates and denies privilege escalation."
          ]
        },
        {
          "title": "2. E-Commerce Cart Example",
          "content": [
            "User adds items to shopping cart as a guest. Application writes encrypted cookie: cart_id=abc123xyz; Secure; HttpOnly.",
            "Closing and reopening browser restores cart items.",
            "Tampering with cart_id causes server to discard invalid token and generate fresh session without leaking other users carts."
          ]
        }
      ],
      "summary": [
        "Cookies testing verifies session persistence, state retention, security flags, and expiration.",
        "Authentication cookies must have HttpOnly and Secure flags enabled.",
        "Applications must handle cookie corruption and disabled cookies gracefully."
      ],
      "keyPoints": [
        "Session cookies (temporary) vs Persistent cookies (disk).",
        "Security: HttpOnly, Secure flags, encryption, anti-tampering.",
        "Graceful degradation when cookies are disabled."
      ]
    },
    {
      "id": "stqa-u3-q15",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 15,
      "title": "Explain Compatibility Testing and Security Testing in Detail",
      "shortTitle": "Compatibility and Security Testing",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "May 2025",
          "questionNo": "Q1(b) & Q2(b)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Non-Functional Testing",
        "Compatibility Testing",
        "Security Testing"
      ],
      "definition": "Compatibility testing verifies that software operates across diverse hardware, operating systems, browsers, and networks. Security testing discovers vulnerabilities, authentication flaws, and data leakage risks.",
      "sections": [
        {
          "title": "1. Compatibility Testing Dimensions",
          "content": [
            "Cross-Browser: Verifies layout and JS execution across Chrome, Firefox, Safari, Edge.",
            "Cross-Platform: Verifies execution across Windows, macOS, Linux, iOS, Android.",
            "Hardware & Screen: Verifies responsive behavior across resolutions and device form factors.",
            "Backward & Forward: Verifies interoperability with older and upcoming OS/browser versions."
          ]
        },
        {
          "title": "2. Security Testing Core Principles",
          "content": [
            "Confidentiality: Protecting sensitive data from unauthorized disclosure.",
            "Integrity: Preventing unauthorized data alteration in transit or storage.",
            "Authentication & Authorization: Confirming user identity and restricting access to authorized roles.",
            "Vulnerability Testing: Probing for OWASP Top 10 flaws (SQL Injection, XSS, CSRF, broken access control)."
          ]
        }
      ],
      "summary": [
        "Compatibility testing ensures uniform functionality across browsers, OS, and devices.",
        "Security testing verifies confidentiality, integrity, authentication, and authorization.",
        "Protects against OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF)."
      ],
      "keyPoints": [
        "Compatibility = Cross-browser, cross-OS, hardware, backward/forward.",
        "Security = Confidentiality, Integrity, Availability, Authentication, Authorization.",
        "OWASP Top 10 compliance."
      ]
    },
    {
      "id": "stqa-u3-q16",
      "unitId": "unit-3",
      "subjectId": "stqa",
      "qNumber": 16,
      "title": "Explain Risk-Based Testing (RBT) in Detail",
      "shortTitle": "Risk-Based Testing (RBT)",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 1,
      "papersAsked": [
        {
          "paper": "May 2025",
          "questionNo": "Q1(c)",
          "marks": 6
        }
      ],
      "syllabusTopics": [
        "Testing Strategy",
        "Risk-Based Testing",
        "Quality Management"
      ],
      "definition": "Risk-Based Testing (RBT) is a testing strategy that prioritizes test design and execution based on product risk: Risk Exposure = Probability of Failure × Impact of Failure.",
      "sections": [
        {
          "title": "1. Risk-Based Testing Concept & Formula",
          "content": [
            "Exhaustive testing is impossible; RBT focuses effort where failure consequences are highest.",
            "Risk Exposure = Probability of Failure (Likelihood) × Impact of Failure (Severity)."
          ],
          "formulas": [
            {
              "name": "Risk Exposure Formula",
              "latex": "\\text{Risk Exposure} = \\text{Likelihood of Failure} \\times \\text{Impact (Severity)}"
            }
          ]
        },
        {
          "title": "2. RBT Process Steps",
          "content": [
            "1. Risk Identification: Catalog potential failure modes with stakeholders.",
            "2. Risk Analysis & Scoring: Assign probability and impact scores (1-5 scale).",
            "3. Prioritization: Classify modules into High, Medium, and Low risk tiers.",
            "4. Test Allocation: High-risk areas receive exhaustive test design (BVA, decision tables, automation); low-risk areas receive light sampling.",
            "5. Monitoring: Re-score risks continuously as defects are resolved."
          ]
        }
      ],
      "summary": [
        "RBT prioritizes testing based on Risk = Probability × Impact.",
        "Directs QA resources to high-risk, mission-critical modules first.",
        "Ensures critical defects are caught early under tight release deadlines."
      ],
      "keyPoints": [
        "Risk = Likelihood × Severity.",
        "High-risk features = rigorous testing, early execution, full automation.",
        "Maximizes testing return on investment (ROI)."
      ]
    }
  ]
};
