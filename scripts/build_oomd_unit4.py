unit4_content = """import { Unit } from '@/types';

export const unit4Data: Unit = {
  "id": "unit-4",
  "unitNumber": 4,
  "title": "Unit IV: User Application Analysis & System Design",
  "shortTitle": "Application Analysis & System Design",
  "description": "Comprehensive study of User Application Analysis (Application Interaction, Class & State Models, Adding Operations) and System Design Principles (System Performance Estimation, Reuse Plans, Subsystem Decomposition into Layers and Partitions, Concurrency, Hardware/Processor Allocation, Data Storage Management, Global Resource Handling, Control Strategies, Architectural Styles, and ATM Architecture).",
  "syllabus": [
    "Application Analysis: Application interaction model, Application class model, Application state model, Adding operations.",
    "System Design: Overview of system design, Estimating performance, Making a reuse plan, Breaking a system into sub-systems, Identifying concurrency, Allocation of sub-systems, Management of data storage, Handling global resources, Choosing a software control strategy, Handling boundary conditions, Setting trade-off priorities, Common architectural styles, Architecture of the ATM system as an example."
  ],
  "questionPaperIndex": [
    {
      "paper": "May 2024 ([6354]-491)",
      "qMain": "Q3(a) Reuse Plan Things (5M), Q3(b) Software Control Strategies (5M), Q3(c) Subsystems & Communication (7M)",
      "qOr": "Q4(a) Data Storage Management (5M), Q4(b) Global Resource Handling (5M), Q4(c) Architecture Styles & ATM Architecture (7M)"
    },
    {
      "paper": "May 2024 ([6263]-87)",
      "qMain": "Q3(a) Architecture Style Short Note (5M), Q3(b) External Control Categories (5M), Q3(c) Batch vs Continuous Transformation (7M)",
      "qOr": "Q4(a) Global Resource Handling (5M), Q4(b) Architecture Styles & ATM Architecture (5M), Q4(c) Interactive, Simulation, Real-time Systems (7M)"
    },
    {
      "paper": "Nov 2023 ([6181]-107)",
      "qMain": "Q3(a) System Performance Estimation (5M), Q3(b) Global Resource Handling (5M), Q3(c) Architectural Styles (7M)",
      "qOr": "Q4(a) External Control Strategies (5M), Q4(b) Reuse Plan: Framework & Pattern (5M), Q4(c) Subsystem Organization (7M)"
    },
    {
      "paper": "April 2023 ([6004]-486)",
      "qMain": "Q3(a) Reuse Plan: Library, Framework, Pattern (6M), Q3(b) Data Storage Management (6M), Q3(c) Batch vs Continuous Transformation (5M)",
      "qOr": "Q4(a) Component Diagram Components (6M), Q4(b) Deployment Diagram Terms (6M), Q4(c) ATM Deployment Diagram (5M)"
    },
    {
      "paper": "Oct 2022 ([5927]-348)",
      "qMain": "Q3(a) Application Class Model Steps (6M), Q3(b) Breaking System into Subsystems (6M), Q3(c) External Control Categories (5M)",
      "qOr": "Q4(a) Component Diagram Components (6M), Q4(b) Deployment Diagram Elements (6M), Q4(c) ATM Deployment Diagram (5M)"
    }
  ],
  "quickRevision": {
    "keyDefinitions": [
      {
        "term": "Subsystem",
        "definition": "A major functional partition of a system consisting of interrelated classes, associations, operations, and events, exposing a well-defined service interface."
      },
      {
        "term": "Layers vs Partitions",
        "definition": "Layers decompose a system horizontally into tiers of varying abstraction levels. Partitions decompose a system vertically into independent functional subsystems at the same abstraction level."
      },
      {
        "term": "Global Resource",
        "definition": "A shared physical or logical asset (e.g., database lock, disk volume, peripheral hardware, singleton address space) that must be accessed concurrently without race conditions."
      },
      {
        "term": "Architectural Style",
        "definition": "A prototypical high-level design pattern determining the overall structural shape, control flow, and data routing of a software system (e.g., Batch, Interactive, Real-Time)."
      }
    ]
  },
  "questions": [
    {
      "id": "oomd-u4-q1",
      "unitId": "unit-4",
      "subjectId": "oomd",
      "qNumber": 1,
      "title": "Enlist and Explain Common Architectural Styles Followed in Software Design. Draw the Distributed Architecture of an ATM System.",
      "shortTitle": "Architectural Styles & ATM Architecture",
      "marks": 7,
      "importance": "Frequently Asked",
      "occurrenceCount": 6,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q4(c)", "marks": 7 },
        { "paper": "May 2024", "questionNo": "Q3(a)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q4(b)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q3(c)", "marks": 7 },
        { "paper": "April 2023", "questionNo": "Q3(c)", "marks": 5 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q3(a)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Common Architectural Styles",
        "Architecture of the ATM System",
        "Distributed System Modeling"
      ],
      "definition": "An Architectural Style is a macroscopic blueprint that defines the vocabulary of components and connectors, organizational structure, control strategy, and data flow across an entire software system.",
      "diagrams": [
        {
          "id": "diag-oomd-atm-distributed-arch",
          "title": "Architecture of the ATM System: Distributed Architecture (Fig. 4.17.1)",
          "caption": "Textbook Fig. 4.17.1: Physical multi-tier deployment showing multiple ATM client nodes connected across the Internet/WAN cloud to Regional Servers, State Server, and Backup Server.",
          "type": "svg-interactive",
          "svgType": "oomd-atm-distributed-arch"
        }
      ],
      "sections": [
        {
          "title": "1. Common Architectural Styles in Software Design",
          "content": [
            "1. Batch Transformation: A sequential pipeline that performs computations on an entire set of raw inputs to generate an entire output set without user interaction. Example: Payroll processing, compiler code generation.",
            "2. Continuous Transformation: Systems where outputs run continuously in lockstep with inputs, such as digital signal processing (DSP), audio filters, and video rendering pipelines.",
            "3. Interactive Interface: Systems dominated by user interactions where external events (mouse clicks, keystrokes) dictate program flow. Example: GUI desktops, web browsers, word processors.",
            "4. Dynamic Simulation: Systems that model physical real-world phenomena over simulated continuous time. Example: Flight simulators, nuclear reactor simulators, weather forecasting models.",
            "5. Real-Time Systems: Interactive systems operating under strict, unyielding deadlines where delayed calculation constitutes system failure. Hard real-time (anti-lock brakes, pacemaker) vs Soft real-time (video streaming).",
            "6. Transaction Manager: Systems whose primary objective is persistent data storage and concurrent atomic queries/updates across multiple simultaneous clients. Example: Banking systems, flight reservation."
          ]
        },
        {
          "title": "2. Architecture of the ATM System (Fig. 4.17.1)",
          "content": [
            "ATM Nodes: Distributed client terminals equipped with card readers, keypads, and bill dispensers. They manage local user interface workflows and send transactional requests.",
            "Internet / WAN Backbone: The secure communication fabric that interconnects physically dispersed ATM nodes to central processing infrastructure.",
            "Regional Servers: Intermediate regional hosts that balance load, buffer queries, and route requests to appropriate consortium networks based on bank BIN codes.",
            "State Server (Consortium Switch): The central high-availability host connected to the national banking network, verifying inter-bank authorizations.",
            "Backup Server: Redundant standby hardware providing immediate failover in case the primary state server suffers hardware or network downtime."
          ]
        }
      ]
    },
    {
      "id": "oomd-u4-q2",
      "unitId": "unit-4",
      "subjectId": "oomd",
      "qNumber": 2,
      "title": "Explain How Global Resources are Handled in System Design.",
      "shortTitle": "Global Resource Handling",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q4(b)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q4(a)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q3(b)", "marks": 5 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q4(a)", "marks": 5 }
      ],
      "syllabusTopics": [
        "System Design",
        "Handling Global Resources",
        "Concurrency & Contention"
      ],
      "definition": "Global Resource Handling addresses how shared physical assets (hardware devices, printers, network bandwidth) and logical assets (database tables, unique identifiers, configuration files) are arbitrated without race conditions, deadlocks, or security breaches.",
      "sections": [
        {
          "title": "1. Types of Global Resources",
          "content": [
            "Physical Resources: Shared physical equipment such as disk drives, cash dispensing motors in ATMs, specialized sensor hardware, and network communication channels.",
            "Logical Resources: Shared software structures including system clocks, database connection pools, global lock tables, transaction IDs, and bank account balances."
          ]
        },
        {
          "title": "2. Strategies for Managing Global Resources",
          "content": [
            "1. Centralized Guardian Object (Singleton Server): Encapsulate the global resource inside a dedicated server class or process. All client requests must pass through this single gatekeeper, which serializes concurrent access.",
            "2. Partitioning / Resource Reservation: Divide the global resource into non-overlapping partitions and allocate dedicated subsets to individual subsystems. Example: Pre-allocating ranges of account numbers (e.g., Regional Server 1 gets 1000-1999, Server 2 gets 2000-2999) to eliminate synchronization overhead.",
            "3. Locking and Concurrency Control: Utilize lock managers with shared read locks and exclusive write locks (Two-Phase Locking - 2PL) to protect critical sections against dirty reads and lost updates.",
            "4. Access Control and Security Tokens: Enforce authentication and role-based permissions at the boundary interface before granting handles to sensitive resources."
          ]
        }
      ]
    },
    {
      "id": "oomd-u4-q3",
      "unitId": "unit-4",
      "subjectId": "oomd",
      "qNumber": 3,
      "title": "Explain Data Storage Management in Software Modeling: Flat Files vs Relational Databases vs Object-Oriented Databases.",
      "shortTitle": "Data Storage Management",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q4(a)", "marks": 5 },
        { "paper": "April 2023", "questionNo": "Q3(b)", "marks": 6 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q3(a)", "marks": 5 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q3(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "System Design",
        "Management of Data Storage",
        "Storage Paradigms Comparison"
      ],
      "definition": "Data Storage Management is a critical system design decision determining how persistent objects survive program termination, balancing access speed, memory footprint, transaction safety (ACID), and relational mapping overhead.",
      "comparisonTable": {
        "headers": ["Evaluation Criterion", "Flat Files", "Relational Database (RDBMS)", "Object-Oriented Database (OODBMS)"],
        "rows": [
          ["Data Model", "Unstructured sequential byte streams or delimited text files.", "Tables with fixed schema, rows (tuples), and foreign key relations.", "Direct persistence of objects, classes, references, and inheritance."],
          ["Impedance Mismatch", "High: Requires manual parsing and serializing of objects into text.", "Medium-High: Requires Object-Relational Mapping (ORM) to map objects to tables.", "None: Objects in memory match exactly with persisted disk representations."],
          ["Query Capability", "Minimal: Application must load entire file into memory to search.", "Very High: Declarative, expressive querying using SQL.", "High: Object query languages (OQL) navigating direct pointer references."],
          ["Transaction Support", "None: Prone to corruption during simultaneous writes or system crashes.", "Full ACID: Strong locking, rollback logs, and multi-user concurrency.", "Full ACID: Supports long transactions, object locking, and versioning."],
          ["Best Suited For", "Configuration settings, logging, raw media, and single-user local state.", "Enterprise transactions, financial ledgers, and complex tabular reporting.", "Complex engineering CAD models, multimedia hierarchies, and simulation data."]
        ]
      },
      "sections": []
    },
    {
      "id": "oomd-u4-q4",
      "unitId": "unit-4",
      "subjectId": "oomd",
      "qNumber": 4,
      "title": "What is Meant by a Subsystem in System Design? Explain the Decomposition of a System into Subsystems Using Layers and Partitions.",
      "shortTitle": "Subsystems: Layers & Partitions",
      "marks": 7,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q3(c)", "marks": 7 },
        { "paper": "Nov 2023", "questionNo": "Q4(c)", "marks": 7 },
        { "paper": "Oct 2022", "questionNo": "Q3(b)", "marks": 6 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q3(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "System Design",
        "Breaking a System into Sub-systems",
        "Layers and Partitions"
      ],
      "definition": "A Subsystem is a major, self-contained functional component of a system consisting of a group of closely interrelated classes, associations, operations, and constraints that collaborate to provide a unified set of services through a well-defined public interface.",
      "diagrams": [
        {
          "id": "diag-oomd-layers-partitions",
          "title": "Subsystem Decomposition: Layers and Partitions (Fig. 4.8.1)",
          "caption": "Textbook Fig. 4.8.1: Horizontal decomposition into Layers (varying abstraction tiers) and vertical decomposition into Partitions (independent peer modules at the same abstraction level).",
          "type": "svg-interactive",
          "svgType": "oomd-layers-partitions"
        }
      ],
      "sections": [
        {
          "title": "1. Horizontal Decomposition: Layers (Fig. 4.8.1)",
          "content": [
            "Concept: A layered architecture organizes subsystems into hierarchical tiers built one above the other. Each layer provides services to the layer directly above it and consumes services from the layer below it.",
            "Varying Abstraction Levels: High layers represent abstract domain concepts and user interfaces, while lower layers handle concrete system services, database access, and hardware drivers.",
            "Closed vs Open Architecture: In a closed architecture, each layer can only invoke the immediate adjacent lower layer (strong encapsulation). In an open architecture, a layer may invoke any layer beneath it (higher performance, reduced encapsulation)."
          ]
        },
        {
          "title": "2. Vertical Decomposition: Partitions (Fig. 4.8.1)",
          "content": [
            "Concept: Partitioning divides a system vertically into distinct, independent subsystems that share the same level of abstraction.",
            "Weak Coupling: Subsystems in different partitions operate as peers with minimal dependencies, providing specialized business services (e.g., Account Subsystem, Transaction Subsystem, Security Subsystem).",
            "Parallel Development: Because partitions have clean, orthogonal boundaries, different engineering teams can build, test, and maintain them simultaneously without merge conflicts."
          ]
        }
      ]
    },
    {
      "id": "oomd-u4-q5",
      "unitId": "unit-4",
      "subjectId": "oomd",
      "qNumber": 5,
      "title": "Explain Software Control Strategies: External Control (Procedure-Driven vs Event-Driven) and Internal Control.",
      "shortTitle": "Software Control Strategies",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 5,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q3(b)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q3(b)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q4(a)", "marks": 5 },
        { "paper": "Oct 2022", "questionNo": "Q3(c)", "marks": 5 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q4(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "System Design",
        "Choosing a Software Control Strategy",
        "External and Internal Control"
      ],
      "definition": "A Software Control Strategy defines the macroscopic execution mechanism that schedules computations, sequences method calls, and handles asynchronous stimuli across system objects.",
      "sections": [
        {
          "title": "1. Categories of External Control",
          "content": [
            "1. Procedure-Driven Control: Control resides entirely within the program code. The program executes sequential instructions, prompts the user for specific input at designated moments, and suspends until input is supplied. Common in command-line scripts, batch payroll processors, and sequential algorithms.",
            "2. Event-Driven Control: Control resides in an external event dispatcher or GUI framework. The program sits in an idle event loop waiting for external stimuli (mouse click, network packet, timer interrupt). When an event occurs, the dispatcher routes it to registered callback handlers. Common in graphical user interfaces and web applications."
          ]
        },
        {
          "title": "2. Categories of Internal Control",
          "content": [
            "Internal control governs how control passes between collaborating objects inside a subsystem:",
            "1. Synchronous Method Calls: The calling object blocks execution until the target method finishes computation and returns a result value.",
            "2. Asynchronous Messaging: The sender emits a message to an event queue and resumes execution immediately without waiting for the recipient to process the request.",
            "3. Multi-Threaded Concurrency: Independent operating system threads execute code paths concurrently, synchronized via mutexes, semaphores, and monitors."
          ]
        }
      ]
    },
    {
      "id": "oomd-u4-q6",
      "unitId": "unit-4",
      "subjectId": "oomd",
      "qNumber": 6,
      "title": "Define Reuse Plan. Explain Libraries, Frameworks, and Patterns with Respect to a Reuse Plan.",
      "shortTitle": "Reuse Plan: Libraries, Frameworks & Patterns",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q3(a)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q4(b)", "marks": 5 },
        { "paper": "April 2023", "questionNo": "Q3(a)", "marks": 6 }
      ],
      "syllabusTopics": [
        "System Design",
        "Making a Reuse Plan",
        "Libraries, Frameworks and Patterns"
      ],
      "definition": "A Reuse Plan is a strategic system design activity that identifies existing software assets (classes, components, architectures) to incorporate into a new system to reduce development time, improve reliability, and avoid reinventing the wheel.",
      "sections": [
        {
          "title": "1. Three Core Reusable Assets",
          "content": [
            "1. Class Library: A collection of pre-compiled, reusable classes and helper functions that developers instantiate and call to perform common utility tasks (e.g., math calculations, string formatting, date manipulation, data collections). Control remains with user code.",
            "2. Framework: A skeletal, semi-complete architectural foundation designed for a specific domain (e.g., Spring Boot, React, Django). A framework dictates program flow using 'Inversion of Control' (the framework calls user code via callbacks, known as the Hollywood Principle: 'Don't call us, we'll call you').",
            "3. Design Pattern: An abstract, generalized architectural solution to a commonly recurring software design problem within a given context. Unlike libraries, patterns are not pre-packaged code; they are conceptual templates customized during implementation."
          ]
        },
        {
          "title": "2. Advantages of a Formal Reuse Plan",
          "content": [
            "Accelerates Time to Market: Eliminates redundant coding of standard infrastructure such as cryptographic hashing, database drivers, and UI widgets.",
            "Higher Software Quality: Reusable commercial or open-source libraries have undergone extensive real-world testing and optimization across thousands of production environments."
          ]
        }
      ]
    },
    {
      "id": "oomd-u4-q7",
      "unitId": "unit-4",
      "subjectId": "oomd",
      "qNumber": 7,
      "title": "How Do You Decide the Allocation of Subsystems to Processors and Tasks?",
      "shortTitle": "Allocation of Subsystems to Processors",
      "marks": 6,
      "importance": "Important",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024 (PD4582)", "questionNo": "Q4(a)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q3(b)", "marks": 6 }
      ],
      "syllabusTopics": [
        "System Design",
        "Allocation of Sub-systems",
        "Hardware and Task Mapping"
      ],
      "definition": "The Allocation of Subsystems involves mapping logical software subsystems onto physical hardware processors, computing nodes, and operating system threads to balance workload, minimize network latency, and satisfy throughput demands.",
      "sections": [
        {
          "title": "1. Key Criteria for Hardware Allocation",
          "content": [
            "1. Computation Volume: Subsystems requiring intensive number-crunching (e.g., 3D graphics rendering, video encoding, fraud detection AI) are assigned to dedicated high-performance server nodes or GPU clusters.",
            "2. Bandwidth and Inter-Process Latency: Subsystems that communicate heavily with each other should reside on the same physical host to communicate over shared memory rather than slow network sockets.",
            "3. Physical Location Requirements: Subsystems interfacing directly with external hardware (e.g., ATM card reader driver, cash dispenser motor controller) must reside on the physical client machine containing those peripherals.",
            "4. Reliability and Redundancy: Critical subsystems (e.g., central banking transaction switch) require active-passive or active-active multi-node clustering for immediate disaster recovery."
          ]
        },
        {
          "title": "2. Task Allocation (Process / Thread Mapping)",
          "content": [
            "Inherent Concurrency: If two subsystems execute independent tasks, allocate them to separate OS processes or threads.",
            "Thread Scheduling: Periodic tasks (e.g., sensor polling every 10ms) run on dedicated high-priority real-time threads, while non-urgent background tasks (e.g., audit log archiving) run on worker pool threads."
          ]
        }
      ]
    },
    {
      "id": "oomd-u4-q8",
      "unitId": "unit-4",
      "subjectId": "oomd",
      "qNumber": 8,
      "title": "Write a Short Note on System Performance Estimation.",
      "shortTitle": "System Performance Estimation",
      "marks": 5,
      "importance": "Important",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "Nov 2023", "questionNo": "Q3(a)", "marks": 5 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q3(a)", "marks": 5 }
      ],
      "syllabusTopics": [
        "System Design",
        "Estimating Performance",
        "Feasibility Analysis"
      ],
      "definition": "System Performance Estimation is a rough mathematical calculation conducted during early system design to evaluate whether a proposed architectural design can satisfy performance, throughput, and storage constraints within budget.",
      "sections": [
        {
          "title": "1. Core Dimensions of Performance Estimation",
          "content": [
            "1. Data Volume & Storage Capacity: Calculating database disk requirements based on estimated record counts. Example: An ATM network with 10,000 machines handling 100 transactions/day requires storing 1,000,000 transaction records daily (approx. 500 MB/day).",
            "2. Transaction Throughput: Estimating required transactions per second (TPS) during peak business hours to size server CPU core counts and connection pools.",
            "3. Response Time & Latency: Estimating end-to-end network latency across WAN routers and database query times to ensure user operations complete within acceptable limits (e.g., < 3 seconds for cash dispensing).",
            "4. Communication Bandwidth: Sizing network pipe capacity based on average message payload size multiplied by concurrent peak client connections."
          ]
        },
        {
          "title": "2. Engineering Value of Early Estimation",
          "content": [
            "Prevents Architectural Dead Ends: Identifies hardware bottlenecks before coding begins, preventing expensive redesigns late in development.",
            "Guides Hardware Procurement: Dictates exact server memory, CPU tier, and disk array configurations needed to satisfy client SLAs."
          ]
        }
      ]
    }
  ]
};
"""

with open('src/data/subjects/oomd/unit-4.ts', 'w', encoding='utf-8') as f:
    f.write(unit4_content)

print("Generated src/data/subjects/oomd/unit-4.ts successfully.")
