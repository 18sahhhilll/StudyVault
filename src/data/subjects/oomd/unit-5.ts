import { Unit } from '@/types';

export const unit5Data: Unit = {
  "id": "unit-5",
  "unitNumber": 5,
  "title": "Unit V: Class Design, Implementation Modeling & Legacy Systems",
  "shortTitle": "Class Design & Legacy Systems",
  "description": "Comprehensive study of Class Design (Bridging the Gap, Realizing Use Cases, Algorithm Design, Recursing Downward, Refactoring, Design Optimization, Adjustment of Inheritance, Delegation, Organizing Class Design, ATM Data Dictionary), Implementation Modeling (Fine-tuning Classes, Realizing Associations), and Legacy Systems (Reverse Engineering, Inputs & Outputs, Forward vs Reverse Engineering, Wrapping, Maintenance).",
  "syllabus": [
    "Class Design: Overview of class design, Bridging the gap, Realizing use cases, Designing algorithms, Recursing downwards, Refactoring, Design optimization, Reification of behavior, Adjustment of inheritance, Organizing a class design, ATM example.",
    "Implementation Modeling: Overview of implementation, Fine-tuning classes, Fine-tuning generalizations, Realizing associations, Testing.",
    "Legacy Systems: Introduction to legacy systems, Reverse engineering, Building the class models, Building the interaction model, Building the state model, Reverse engineering tips, Wrapping, Maintenance."
  ],
  "questionPaperIndex": [
    {
      "paper": "May 2024 ([6354]-491)",
      "qMain": "Q5(a) Adjustment of Inheritance (5M), Q5(b) Design Optimization Tasks (5M), Q5(c) Importance of Adjusting Inheritance (7M)",
      "qOr": "Q6(a) Class Design Steps & Bridging Gap (5M), Q6(b) Identifying Use Cases & Actors (5M), Q6(c) Refactoring & Reification (7M)"
    },
    {
      "paper": "May 2024 ([6263]-87)",
      "qMain": "Q5(a) Data Dictionary Note (5M), Q5(b) Design Optimization Tasks (5M), Q5(c) Scenario Definition & Purpose (7M)",
      "qOr": "Q6(a) Activity Diagram from Use Case (5M), Q6(b) System Design Overview (5M), Q6(c) ATM Data Dictionary (7M)"
    },
    {
      "paper": "Nov 2023 ([6181]-107)",
      "qMain": "Q5(a) Fine-Tuning Generalization & Realizing Associations (5M), Q5(b) Algorithm Design Steps (5M), Q5(c) Reverse Engineering Inputs & Outputs (7M)",
      "qOr": "Q6(a) Organizing Class Design & Refactoring (5M), Q6(b) Implementation Modeling Steps (5M), Q6(c) Wrapping & Maintenance (7M)"
    },
    {
      "paper": "April 2023 ([6004]-486)",
      "qMain": "Q5(a) Guidelines for Defining Classes (6M), Q5(b) Package Dependencies (6M), Q5(c) Identifying Use Cases & Actors (6M)",
      "qOr": "Q6(a) Architectural Styles (6M), Q6(b) External Control Categories (6M), Q6(c) Global Resource Handling (6M)"
    },
    {
      "paper": "Oct 2022 ([5927]-348)",
      "qMain": "Q5(a) ATM Data Dictionary (6M), Q5(b) Abstraction Categories (6M), Q5(c) System Design with Example (6M)",
      "qOr": "Q6(a) Guidelines for Finding Classes (6M), Q6(b) Package Dependencies (6M), Q6(c) Identifying Use Cases (6M)"
    }
  ],
  "quickRevision": {
    "keyDefinitions": [
      { "term": "State Model", "definition": "Dynamic behavioral view showing object lifecycles, events, and transitions over time." },
      { "term": "Class Model", "definition": "Static structural view showing classes, attributes, operations, and associations." },
      { "term": "Design Pattern", "definition": "A reusable solution to a commonly occurring software design problem within a context." }
    ],
    "coreFormulas": [],
    "comparisonHighlights": [
      { "title": "Unit 5: Class Design, Implementation Modeling & Legacy Systems Key Distinction", "summary": "Exhaustive exam-oriented separation of structural architecture vs behavioral interaction." }
    ],
    "examTips": [
      "Always draw diagrams directly under the definition before writing detailed section explanations.",
      "In SPPU exams, use 2-column tables for comparison questions and separate numbered points for advantages and disadvantages."
    ]
  },
  "questions": [
    {
      "id": "oomd-u5-q1",
      "unitId": "unit-5",
      "subjectId": "oomd",
      "qNumber": 1,
      "title": "Explain the Tasks Involved in Design Optimization during Class Design.",
      "shortTitle": "Design Optimization Tasks",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q5(b)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q5(b)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q5(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Class Design",
        "Design Optimization",
        "Performance Tuning"
      ],
      "definition": "Design Optimization is the class design task of transforming a semantically correct analysis model into an efficient implementation design that satisfies non-functional requirements such as rapid execution, minimal memory consumption, and low network latency.",
      "sections": [
        {
          "title": "1. Three Primary Optimization Tasks",
          "content": [
            "1. Adding Redundant Associations for Efficient Access Paths: In the analysis model, associations are non-redundant to avoid duplication. During design, if an operation frequently traverses multiple hops (e.g., Company -> Department -> Team -> Employee), a direct redundant association (Company -> Employee) can be introduced with indexes or hash maps to reduce search time from O(N) to O(1).",
            "2. Rearranging Execution Order and Query Traversal: Reordering loop iterations or database filter criteria so that the most selective condition (which eliminates the largest fraction of candidates) is evaluated first, drastically cutting downstream processing.",
            "3. Saving Derived Values (Caching): If an attribute value is derived from a costly computation or database query (e.g., accountTotalBalance derived by summing all transaction rows), save the derived value as a cached attribute. The value is recomputed only when underlying transaction records change."
          ]
        },
        {
          "title": "2. Trade-Offs in Design Optimization",
          "content": [
            "Increased Complexity: Caching and redundant associations introduce data synchronization overhead (cache invalidation).",
            "Reduced Reusability: Highly optimized classes are tightly coupled to specific performance access patterns, making them harder to reuse in different contexts."
          ]
        }
      ],
      "summary": [
        "Direct university exam answer covering Explain the Tasks Involved in Design Optimization during Cla.",
        "Includes textbook definitions, architectural components, and practical examples.",
        "Follows strict SPPU evaluation guidelines with diagrams placed under definition."
      ],
      "keyPoints": [
        "Textbook terminology",
        "Standard UML notations",
        "Exam-ready structure"
      ]
    },
    {
      "id": "oomd-u5-q2",
      "unitId": "unit-5",
      "subjectId": "oomd",
      "qNumber": 2,
      "title": "How is Adjustment of Inheritance Done in Class Design? Discuss the Steps and Explain Delegation with an Example.",
      "shortTitle": "Adjustment of Inheritance & Delegation",
      "marks": 7,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q5(a)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q5(c)", "marks": 7 },
        { "paper": "Nov 2023", "questionNo": "Q5(a)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Class Design",
        "Adjustment of Inheritance",
        "Delegation vs Inheritance"
      ],
      "definition": "Adjustment of Inheritance is the systematic refactoring of the class hierarchy during design to maximize code reuse, abstract common behavior into superclasses, eliminate multiple-inheritance conflicts, and replace flawed inheritance with object delegation.",
      "diagrams": [
        {
          "id": "diag-oomd-inheritance-delegation",
          "title": "Adjustment of Inheritance: Converting to Aggregation / Delegation (Fig. 5.9.2)",
          "caption": "Textbook Fig. 5.9.2: Converting flawed implementation inheritance (Matrix extending TwoDArray) into delegation via aggregation (Matrix contains a private TwoDArray instance).",
          "type": "svg-interactive",
          "svgType": "oomd-inheritance-delegation"
        }
      ],
      "sections": [
        {
          "title": "1. Steps for Adjusting Inheritance",
          "content": [
            "Step 1 - Rearranging Classes and Operations: Ensure that operations placed in ancestor classes share identical semantics and signatures across all derived subclasses.",
            "Step 2 - Abstracting Out Common Behavior: When two or more sibling classes share repeated attributes or method implementations, factor the common functionality upwards into a new abstract superclass (e.g., Triangle and Circle abstracted under Shape).",
            "Step 3 - Eliminating Implementation Inheritance: Programmers are often tempted to subclass an existing class purely to borrow its helper methods even when no true 'is-a' relationship exists (e.g., Matrix inheriting from TwoDArray). This must be eliminated in favor of delegation."
          ]
        },
        {
          "title": "2. Using Delegation Instead of Inheritance (Fig. 5.9.2)",
          "content": [
            "Problem: If 'Matrix' subclasses 'TwoDArray' via inheritance, it inherits raw array operations (e.g., resize, row index manipulation) that violate matrix algebra rules, and prevents Matrix from using a sparse array representation.",
            "Solution: Convert inheritance to aggregation (delegation). As shown in Fig. 5.9.2, 'Matrix' contains a private member reference 'TwoDArray'. Matrix delegates low-level storage to TwoDArray while exposing strictly mathematical operations (+mat_mul(), +mat_add(), +mat_transpose()).",
            "Benefit: Matrix can now switch internal implementations (e.g., to SparseArray) without breaking any client code."
          ]
        }
      ],
      "summary": [
        "Direct university exam answer covering How is Adjustment of Inheritance Done in Class Design? Discu.",
        "Includes textbook definitions, architectural components, and practical examples.",
        "Follows strict SPPU evaluation guidelines with diagrams placed under definition."
      ],
      "keyPoints": [
        "Textbook terminology",
        "Standard UML notations",
        "Exam-ready structure"
      ]
    },
    {
      "id": "oomd-u5-q3",
      "unitId": "unit-5",
      "subjectId": "oomd",
      "qNumber": 3,
      "title": "What are the Steps Involved in Class Design? Explain How to Bridge the Gap from High-Level Analysis to Low-Level Services.",
      "shortTitle": "Class Design Steps & Bridging the Gap",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q6(a)", "marks": 5 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q6(a)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Class Design",
        "Overview of Class Design",
        "Bridging the Gap"
      ],
      "definition": "Class Design is the phase of object-oriented development where high-level analysis classes and operations are elaborated into concrete programming specifications, choosing data structures, algorithms, and visibility rules to construct executable software.",
      "sections": [
        {
          "title": "1. Steps in Class Design",
          "content": [
            "1. Bridge the gap between high-level requirements and low-level programming services.",
            "2. Realize use cases by determining method call collaborations across classes.",
            "3. Design algorithms for complex class operations.",
            "4. Recurse downwards by decomposing complex operations into simpler helper classes.",
            "5. Refactor the model to simplify class structures and eliminate redundancy.",
            "6. Optimize access paths to data for runtime performance.",
            "7. Reify behavior that must be manipulated dynamically (e.g., encapsulating commands as objects).",
            "8. Adjust inheritance hierarchies and introduce delegation where appropriate."
          ]
        },
        {
          "title": "2. Bridging the Gap",
          "content": [
            "High-level requirements describe business rules (e.g., 'Authenticate Customer PIN'), while low-level services provide raw operating system and network facilities (e.g., TCP sockets, SQL queries, DES encryption chips).",
            "Bridging the gap involves introducing intermediate abstraction layers: Application Classes -> Service Classes -> Data Access Objects (DAO) -> Driver Classes, ensuring that business logic never directly depends on raw hardware primitives."
          ]
        }
      ],
      "summary": [
        "Direct university exam answer covering What are the Steps Involved in Class Design? Explain How to .",
        "Includes textbook definitions, architectural components, and practical examples.",
        "Follows strict SPPU evaluation guidelines with diagrams placed under definition."
      ],
      "keyPoints": [
        "Textbook terminology",
        "Standard UML notations",
        "Exam-ready structure"
      ]
    },
    {
      "id": "oomd-u5-q4",
      "unitId": "unit-5",
      "subjectId": "oomd",
      "qNumber": 4,
      "title": "Write a Short Note on Data Dictionary. Prepare a Data Dictionary for an ATM System Scenario.",
      "shortTitle": "Data Dictionary for ATM System",
      "marks": 7,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q5(a)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q6(c)", "marks": 7 },
        { "paper": "Oct 2022", "questionNo": "Q5(a)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Class Design",
        "Data Dictionary",
        "ATM System Case Study"
      ],
      "definition": "A Data Dictionary is a centralized reference catalog that provides unambiguous definitions of all classes, attributes, associations, operations, and constraints used in a software modeling project to ensure team-wide semantic consistency.",
      "sections": [
        {
          "title": "1. Importance of a Data Dictionary",
          "content": [
            "Eliminates Semantic Ambiguity: Ensures all analysts, designers, and developers assign identical meanings to domain terms.",
            "Defines Precise Types and Constraints: Specifies attribute data types, valid ranges, multiplicities, and nullability rules."
          ]
        },
        {
          "title": "2. Data Dictionary for the ATM System Scenario",
          "content": [
            "1. Bank: A financial institution that holds accounts and processes authorizations via central host networks. Attributes: bankId, bankName, routingCode.",
            "2. Customer: An individual or corporate entity holding one or more accounts at a bank. Attributes: customerId, name, address, contactNo.",
            "3. ATM Card: A physical security token with a magnetic stripe or chip containing customer identity data. Attributes: cardNumber, issueDate, expiryDate, encryptedPinHash.",
            "4. Account: A financial ledger record maintained by the bank. Attributes: accountNumber, accountType (Savings/Current), currentBalance, availableBalance. Operations: debit(amount), credit(amount), getBalance().",
            "5. Transaction: A record of a financial request initiated at the ATM. Attributes: transactionId, timestamp, transactionType (Withdrawal/Transfer/Balance), amount, status (Success/Failed).",
            "6. CashDispenser: The hardware peripheral in the ATM containing currency cassettes. Attributes: totalCashAvailable, noteDenominations. Operations: dispense(amount), verifySensors().",
            "7. CardReader: The physical hardware slot that reads data from the ATM card. Operations: readCard(), retainCard(), ejectCard()."
          ]
        }
      ],
      "summary": [
        "Direct university exam answer covering Write a Short Note on Data Dictionary. Prepare a Data Dictio.",
        "Includes textbook definitions, architectural components, and practical examples.",
        "Follows strict SPPU evaluation guidelines with diagrams placed under definition."
      ],
      "keyPoints": [
        "Textbook terminology",
        "Standard UML notations",
        "Exam-ready structure"
      ]
    },
    {
      "id": "oomd-u5-q5",
      "unitId": "unit-5",
      "subjectId": "oomd",
      "qNumber": 5,
      "title": "What are the Steps to Design Algorithms in Class Design? Explain Recursing Downward.",
      "shortTitle": "Algorithm Design & Recursing Downward",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "Nov 2023", "questionNo": "Q5(b)", "marks": 5 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q6(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Class Design",
        "Designing Algorithms",
        "Recursing Downwards"
      ],
      "definition": "Designing Algorithms is the class design activity of specifying the exact computational steps, internal data structures, and helper operations required to implement complex operations defined on domain classes.",
      "sections": [
        {
          "title": "1. Steps to Design Algorithms",
          "content": [
            "1. Choose Algorithms that Minimize Computational Cost: Select algorithms with appropriate time complexity (e.g., O(N log N) sorting vs O(N^2) brute force) based on expected input size.",
            "2. Select Supporting Data Structures: Pick container types (arrays, balanced trees, hash tables, linked lists) that provide efficient operations for dominant access patterns.",
            "3. Define New Internal Classes and Operations: If an algorithm requires intermediate data representations, create private helper classes to store working state.",
            "4. Assign Operations to Appropriate Classes: Follow the Information Expert pattern by assigning responsibilities to the class that holds the required data."
          ]
        },
        {
          "title": "2. Recursing Downward",
          "content": [
            "Concept: When designing a high-level algorithm for a complex class operation, the algorithm often reveals sub-operations that are too intricate to implement directly inside the parent class.",
            "Refactoring Downwards: The designer 'recurses downward' by defining new, smaller helper classes and lower-level operations to isolate these sub-tasks.",
            "Example: In an ATM system, designing the high-level operation 'processWithdrawal()' reveals sub-operations such as 'verifyPin()', 'checkSufficientFunds()', 'logTransaction()', and 'dispenseBanknotes()'. Rather than making a monolithic ATM class, these are decomposed downwards into PinValidator, AccountManager, AuditLogger, and DispenserController classes."
          ]
        }
      ],
      "summary": [
        "Direct university exam answer covering What are the Steps to Design Algorithms in Class Design? Exp.",
        "Includes textbook definitions, architectural components, and practical examples.",
        "Follows strict SPPU evaluation guidelines with diagrams placed under definition."
      ],
      "keyPoints": [
        "Textbook terminology",
        "Standard UML notations",
        "Exam-ready structure"
      ]
    },
    {
      "id": "oomd-u5-q6",
      "unitId": "unit-5",
      "subjectId": "oomd",
      "qNumber": 6,
      "title": "Define Reverse Engineering. Enlist the Inputs and Outputs of Reverse Engineering and Compare Forward Engineering vs Reverse Engineering.",
      "shortTitle": "Reverse Engineering: Inputs & Outputs",
      "marks": 7,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "Nov 2023", "questionNo": "Q5(c)", "marks": 7 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q5(b)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q5(c)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Legacy Systems",
        "Reverse Engineering",
        "Forward vs Reverse Engineering"
      ],
      "definition": "Reverse Engineering is the process of analyzing an existing software system to extract architectural, structural, and behavioral information directly from source code and runtime artifacts to recover high-level models.",
      "sections": [
        {
          "title": "1. Forward Engineering vs Reverse Engineering Comparison",
          "content": [
            "Technical comparison across workflow direction, certainty, and model precision:"
          ],
          "table": {
            "headers": ["Forward Engineering", "Reverse Engineering"],
            "rows": [
              {
                "parameter": "Direction of Flow: Moves forward from high-level requirements to design models to executable code.",
                "col1": "Direction of Flow: Moves backward from existing executable code and database schemas to design models."
              },
              {
                "parameter": "Certainty & Determinism: High certainty; developers are guided by structured requirement documents.",
                "col1": "Certainty & Determinism: Lower certainty; engineers infer original design intent from incomplete code artifacts."
              },
              {
                "parameter": "Methodological Nature: Prescriptive; tells developers how software should be constructed.",
                "col1": "Methodological Nature: Adaptive; discovers and documents what developers actually did."
              },
              {
                "parameter": "Time Requirement: Substantial engineering time required to develop software from scratch.",
                "col1": "Time Requirement: Significantly less time required to recover architectural models from existing code."
              },
              {
                "parameter": "Model Precision: Final model must be complete, unambiguous, and syntactically verified.",
                "col1": "Model Precision: Recovered model can be approximate (capturing roughly 80% of core architecture)."
              }
            ]
          }
        },
        {
          "title": "1. Inputs Provided to Reverse Engineering",
          "content": [
            "1. Programming Source Code: The richest source of truth, detailing control flow, variable names, classes, and method signatures.",
            "2. Database Schemas: DDL scripts, tables, foreign keys, and stored procedures revealing domain entities and relationships.",
            "3. Forms, Screens, and Reports: User interface definitions binding data fields to user workflows.",
            "4. Existing Documentation & Test Cases: Outdated SRS documents and unit tests providing clues regarding system behavior."
          ]
        },
        {
          "title": "2. Outputs Generated from Reverse Engineering",
          "content": [
            "1. Recovered UML Models: Class diagrams, package structures, interaction sequence diagrams, and state models.",
            "2. Traceability Mappings: Mappings connecting low-level source files to high-level functional requirements.",
            "3. Observation Logs & Discrepancy Reports: Documentation highlighting code anomalies, dead code, and pending questions."
          ]
        }
      ],
      "summary": [
        "Direct university exam answer covering Define Reverse Engineering. Enlist the Inputs and Outputs of.",
        "Includes textbook definitions, architectural components, and practical examples.",
        "Follows strict SPPU evaluation guidelines with diagrams placed under definition."
      ],
      "keyPoints": [
        "Textbook terminology",
        "Standard UML notations",
        "Exam-ready structure"
      ]
    },
    {
      "id": "oomd-u5-q7",
      "unitId": "unit-5",
      "subjectId": "oomd",
      "qNumber": 7,
      "title": "Explain the Steps Involved in Implementation Modeling in Detail.",
      "shortTitle": "Implementation Modeling Steps",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "Nov 2023", "questionNo": "Q6(b)", "marks": 5 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q5(a)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Implementation Modeling",
        "Fine-Tuning Classes",
        "Realizing Associations"
      ],
      "definition": "Implementation Modeling is the final development stage that bridges the object-oriented design model to a specific target programming language (e.g., Java, C++, Python) by fine-tuning class definitions, realizing associations with concrete pointer types, and verifying correctness.",
      "sections": [
        {
          "title": "1. Four Major Steps in Implementation Modeling",
          "content": [
            "Step 1 - Fine-Tuning Classes: Assigning target language data types (int, float, string) to all attributes, adding getter/setter accessors, declaring public/private/protected visibility modifiers, and finalizing constructor signatures.",
            "Step 2 - Fine-Tuning Generalizations: Translating inheritance models into target language mechanisms (e.g., interfaces vs abstract classes in Java; virtual inheritance in C++). Resolving any lingering multiple inheritance issues.",
            "Step 3 - Realizing Associations: Converting UML association lines into target language references. One-to-one associations become direct object pointers; one-to-many associations become collection objects (e.g., List<Account>, Set<Customer>); many-to-many associations are mapped to intermediate association classes.",
            "Step 4 - Unit and Integration Testing: Developing automated test suites (e.g., JUnit) to verify individual class invariants, method boundary values, and inter-class interaction contracts."
          ]
        }
      ],
      "summary": [
        "Direct university exam answer covering Explain the Steps Involved in Implementation Modeling in Det.",
        "Includes textbook definitions, architectural components, and practical examples.",
        "Follows strict SPPU evaluation guidelines with diagrams placed under definition."
      ],
      "keyPoints": [
        "Textbook terminology",
        "Standard UML notations",
        "Exam-ready structure"
      ]
    },
    {
      "id": "oomd-u5-q8",
      "unitId": "unit-5",
      "subjectId": "oomd",
      "qNumber": 8,
      "title": "Explain Legacy Systems, the 4-Layer Legacy Architecture, and How Wrapping and Maintenance are Applied.",
      "shortTitle": "Legacy Systems: Layers, Wrapping & Maintenance",
      "marks": 7,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "Nov 2023", "questionNo": "Q6(c)", "marks": 7 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q6(c)", "marks": 5 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q5(b)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Legacy Systems",
        "Legacy Layered Architecture",
        "Wrapping and Maintenance"
      ],
      "definition": "A Legacy System is an older, mission-critical computer system built using obsolete hardware, legacy languages (e.g., COBOL, Fortran), and non-standard architectures that remains essential to business operations because the risk and cost of replacement are prohibitively high.",
      "diagrams": [
        {
          "id": "diag-oomd-legacy-layers",
          "title": "Legacy System: 4-Layer Architecture and Wrapping (Fig. 5.17.1)",
          "caption": "Textbook Fig. 5.17.1: The 4 internal legacy layers (Business Process, Application Software, Support Software, Hardware) encapsulated within an Object-Oriented Wrapper Boundary Class.",
          "type": "svg-interactive",
          "svgType": "oomd-legacy-layers"
        }
      ],
      "sections": [
        {
          "title": "1. The 4 Layers of a Legacy System (Fig. 5.17.1)",
          "content": [
            "1. Business Process Layer: The organizational rules, banking regulations, and business workflows executed by the organization.",
            "2. Application Software Layer: The core programs and scripts (often written in COBOL or procedural languages) that implement business logic.",
            "3. Support Software Layer: Legacy system utilities, outdated database engines (hierarchical/network DBs), and obsolete operating system routines.",
            "4. System Hardware Layer: Outdated mainframe processors, magnetic tape drives, and legacy storage units expensive to repair."
          ]
        },
        {
          "title": "2. Wrapping Technique",
          "content": [
            "Concept: Wrapping encapsulates the legacy system inside modern object-oriented boundary classes (as shown in Fig. 5.17.1).",
            "Working: The wrapper presents clean, modern APIs (e.g., RESTful web services or Java classes) to modern client apps. Internally, the wrapper translates method calls into legacy terminal transactions or batch jobs, hiding legacy complexity.",
            "Example: A modern mobile banking application interacts with a Java wrapper service, which executes legacy COBOL transactions on a mainframe behind the scenes."
          ]
        },
        {
          "title": "3. Four Stages of Software Maintenance",
          "content": [
            "1. Initial Development: Initial release of the software application.",
            "2. Evolution: Substantial enhancements, new feature additions, and major architectural revisions.",
            "3. Servicing: Minor bug fixes, security patches, and tactical workarounds without structural additions.",
            "4. Phase-Out: Software is frozen, no new patches are released, and plans for replacement or decommissioning are initiated."
          ]
        }
      ],
      "summary": [
        "Direct university exam answer covering Explain Legacy Systems, the 4-Layer Legacy Architecture, and.",
        "Includes textbook definitions, architectural components, and practical examples.",
        "Follows strict SPPU evaluation guidelines with diagrams placed under definition."
      ],
      "keyPoints": [
        "Textbook terminology",
        "Standard UML notations",
        "Exam-ready structure"
      ]
    }
  ]
};
