import json

unit6_code = """import { Unit } from '@/types';

export const unit6Data: Unit = {
  "id": "unit-6",
  "unitNumber": 6,
  "title": "Unit VI: Design Pattern",
  "shortTitle": "Design Patterns",
  "description": "Comprehensive textbook-aligned study of Unit VI: Design Pattern covering What is a Pattern, What Makes a Pattern (Context, Problem, Solution), Pattern Categories (Architectural Patterns, Design Patterns, Idioms), Relationships Between Patterns (MVC and Observer), Pattern Description Template, Communication Patterns (Forwarder-Receiver, Client-Dispatcher-Server, Publisher-Subscriber), Management Patterns (Command Processor, View Handler), and Programming Idioms (Idioms and Style, Where to Find Idioms, and Counted Pointer Handle-Body Idiom).",
  "syllabus": [
    "What is a pattern and what makes a pattern? Pattern categories; Relationships between patterns; Pattern description.",
    "Communication Patterns: Forwarder-Receiver; Client-Dispatcher-Server; Publisher-Subscriber.",
    "Management Patterns: Command processor; View handler.",
    "Idioms: Introduction; what can idioms provide? Idioms and style; Where to find idioms; Counted Pointer example."
  ],
  "questionPaperIndex": [
    {
      "paper": "May 2024 ([6354]-491)",
      "qMain": "Q7(a) Important Parts of Design Pattern (5M), Q7(b) Communication Pattern (5M), Q7(c) Design Pattern Types (8M)",
      "qOr": "Q8(a) Counted Pointer Example (5M), Q8(b) View Handler Pattern (5M), Q8(c) Client-Dispatcher & Pub-Sub (8M)"
    },
    {
      "paper": "May 2024 ([6263]-87)",
      "qMain": "Q7(a) What is Design Pattern (5M), Q7(b) Strategy Design Pattern (5M), Q7(c) Creational, Structural & Behavioral (8M)",
      "qOr": "Q8(a) Basic Elements of Design Pattern (5M), Q8(b) Entities in Design Pattern (5M), Q8(c) Types of Design Patterns (8M)"
    },
    {
      "paper": "Nov 2023 ([6181]-107)",
      "qMain": "Q7(a) Client-Dispatcher-Server Pattern (5M), Q7(b) Elements of Design Patterns (5M), Q7(c) Pattern Relationships (8M)",
      "qOr": "Q8(a) Pattern Categories (5M), Q8(b) Publisher-Subscriber Variants (5M), Q8(c) Idioms Definition & Sources (8M)"
    },
    {
      "paper": "April 2023 ([6004]-486)",
      "qMain": "Q7(a) Design Pattern & Types (6M), Q7(b) Entities in Pattern (6M), Q7(c) Strategy Pattern (5M)",
      "qOr": "Q8(a) Observer Pattern (6M), Q8(b) Pattern Elements (6M), Q8(c) State Design Pattern (5M)"
    },
    {
      "paper": "Oct 2022 ([5927]-348)",
      "qMain": "Q7(a) Creational, Structural, Behavioral (6M), Q7(b) Adapter Pattern (6M), Q7(c) Observer Pattern (5M)",
      "qOr": "Q8(a) Design Pattern & Types (6M), Q8(b) Entities Involved (6M), Q8(c) Strategy Pattern (5M)"
    }
  ],
  "quickRevision": {
    "keyDefinitions": [
      {
        "term": "Pattern",
        "definition": "A reusable solution to a common design problem, specified by its constituent components, responsibilities, and relationships."
      },
      {
        "term": "What Makes a Pattern",
        "definition": "A pattern is described using three core parts: 1. Context (the situation), 2. Problem (recurring forces to balance), 3. Solution (static structure and dynamic runtime behavior)."
      },
      {
        "term": "Communication Pattern",
        "definition": "A pattern used for inter-module or interprocess communication providing encapsulation of IPC mechanisms and location transparency (e.g. Forwarder-Receiver, Client-Dispatcher-Server, Publisher-Subscriber)."
      },
      {
        "term": "Management Pattern",
        "definition": "A pattern that handles homogeneous collections of objects or services (e.g. Command Processor for undo/scheduling, View Handler for GUI multi-window coordination)."
      },
      {
        "term": "Idiom",
        "definition": "A low-level pattern specific to a programming language that describes how to implement components or relationships using unique language features (e.g. Counted Pointer in C++)."
      }
    ],
    "coreFormulas": [],
    "comparisonHighlights": [
      {
        "title": "Architectural Patterns vs Design Patterns vs Idioms",
        "summary": "Architectural patterns dictate overall system structure (high-scale, e.g. MVC); Design patterns refine subsystems/components (medium-scale, e.g. Observer); Idioms deal with language-specific syntax and memory idioms (low-scale, e.g. Counted Pointer)."
      },
      {
        "title": "Forwarder-Receiver vs Client-Dispatcher-Server",
        "summary": "Forwarder-Receiver focuses on IPC encapsulation between peer processes; Client-Dispatcher-Server focuses on location transparency and dynamic name-to-address server resolution."
      }
    ],
    "examTips": [
      "When asked 'What makes a pattern?', structure your answer around the 3 textbook parts: Context, Problem, and Solution (Static and Dynamic aspects).",
      "For Communication Patterns questions, state the two core goals: 1. Encapsulation and 2. Location Transparency, and draw the matching textbook diagrams.",
      "For Counted Pointer questions, draw the Handle-Body diagram (Fig. 6.8.1) and write down the 8 implementation steps."
    ]
  },
  "questions": [
    {
      "id": "oomd-u6-q1",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 1,
      "title": "What is a Pattern? What Makes a Pattern? Explain Context, Problem, and Solution with an Example of an Architectural Pattern.",
      "shortTitle": "What is a Pattern & MVC Architecture",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 7,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q7(a)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q7(c)", "marks": 8 },
        { "paper": "Nov 2023", "questionNo": "Q7(b)", "marks": 5 },
        { "paper": "April 2023", "questionNo": "Q7(a)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q7(a)", "marks": 6 }
      ],
      "syllabusTopics": [
        "What is a Pattern?",
        "What Makes a Pattern?",
        "Model-View-Controller Example"
      ],
      "definition": "A Pattern represents a reusable solution to a commonly occurring design problem. The solution is specified by describing its constituent components, their responsibilities, and the manner in which they collaborate.",
      "diagrams": [
        {
          "id": "diag-oomd-mvc-pattern",
          "title": "Model-View-Controller Architectural Pattern (Textbook Fig. 6.1.1)",
          "caption": "Textbook Fig. 6.1.1: Observer uses Controller and sees View; Controller manipulates Model; Model updates View; View queries Model state.",
          "type": "svg-interactive",
          "svgType": "oomd-mvc-pattern"
        }
      ],
      "sections": [
        {
          "title": "1. What Makes a Pattern? (The Three Core Parts)",
          "content": [
            "1. Context: A situation due to which the problem is raised. The context can be general or specific. A general approach for defining the context is to make a list of all known situations for which the particular pattern can occur.",
            "2. Problem: A problem description schema that occurs repeatedly in a specific context. The term 'force' is used to denote the aspects of the problem that should be considered while solving it. The solution must satisfy all requirements, consider all constraints, and balance conflicting forces (e.g. balancing ease of modification with runtime performance).",
            "3. Solution: A proven configuration to balance the forces. The solution has two fundamental aspects:",
            "• Static Aspect: Specifies certain structure and configuration of elements (classes, interfaces, and their relationships).",
            "• Dynamic Aspect: Specifies runtime behavior (how participants collaborate and interact dynamically to solve the problem)."
          ]
        },
        {
          "title": "2. Example of Architectural Pattern: Model-View-Controller (Fig. 6.1.1)",
          "content": [
            "Model: Responsible for storing and managing the core data and business functionality.",
            "View: Displays information to the user/observer as a visual representation (chart, form, table) and captures user input events.",
            "Controller: Connects the model and view, converting user input into model updates, and orchestrating workflow transitions.",
            "Observer: Uses the Controller to execute actions and views visual updates rendered by the View."
          ]
        }
      ],
      "summary": [
        "A pattern is a proven, reusable solution to a common design problem.",
        "A pattern consists of 3 parts: Context (the situation), Problem (forces to balance), and Solution (static structure & dynamic behavior).",
        "Model-View-Controller (MVC) is a classic architectural pattern separating data (Model), presentation (View), and control flow (Controller)."
      ],
      "keyPoints": [
        "Context, Problem, Solution",
        "Static vs Dynamic aspects",
        "Model-View-Controller (Fig. 6.1.1)"
      ]
    },
    {
      "id": "oomd-u6-q2",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 2,
      "title": "Explain Pattern Categories: Architectural Patterns, Design Patterns, and Idioms in Detail.",
      "shortTitle": "Pattern Categories: Architecture, Design & Idioms",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q7(c)", "marks": 8 },
        { "paper": "Nov 2023", "questionNo": "Q8(a)", "marks": 5 },
        { "paper": "April 2023", "questionNo": "Q7(a)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q7(a)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Pattern Categories",
        "Architectural Patterns",
        "Design Patterns & Idioms"
      ],
      "definition": "Software patterns are classified into three hierarchical groups based on scale and abstraction: Architectural Patterns (high-level system structure), Design Patterns (medium-level subsystem refinement), and Idioms (low-level language-specific implementation).",
      "sections": [
        {
          "title": "1. The Three Pattern Categories (Textbook Section 6.3)",
          "content": [
            "1. Architectural Patterns: High-level patterns that describe the fundamental structural organization schema for complete software systems. They provide a set of predefined subsystems, specify their responsibilities, and include rules and guidelines for organizing relationships between them. Examples: Model-View-Controller (MVC), Layered Architecture, Blackboard Architecture.",
            "2. Design Patterns: Medium-scale patterns that provide a scheme for refining subsystems or components of a software system, or the relationships between them. They describe common structures of communicating components that solve a general design problem within a particular context. Examples: Observer, Strategy, Forwarder-Receiver, Command Processor.",
            "3. Idioms: Lowest-level patterns specific to a particular programming language. An idiom describes how to implement components or relationships using the specific syntax and features of that programming language. Example: Counted Pointer idiom in C++ for memory reference counting."
          ]
        },
        {
          "title": "2. Comparison of the Three Categories",
          "content": [
            "Architectural patterns operate at system-wide macroscopic scale and dictate overall system decomposition.",
            "Design patterns operate at component and class scale and are language-independent.",
            "Idioms operate at the coding and compiler level and are tied to language idioms (e.g. C++, Smalltalk, Java)."
          ]
        }
      ],
      "summary": [
        "Patterns are grouped into 3 categories: Architectural Patterns, Design Patterns, and Idioms.",
        "Architectural patterns define fundamental system structures (MVC, Layers).",
        "Design patterns refine components and relationships (Observer, Forwarder-Receiver).",
        "Idioms are language-specific low-level patterns (Counted Pointer in C++)."
      ],
      "keyPoints": [
        "Architectural patterns (high level)",
        "Design patterns (medium level)",
        "Idioms (low level, language specific)"
      ]
    },
    {
      "id": "oomd-u6-q3",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 3,
      "title": "Show and Explain Relationships Between Patterns with a Suitable Example.",
      "shortTitle": "Relationships Between Patterns",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "Nov 2023", "questionNo": "Q7(c)", "marks": 8 },
        { "paper": "May 2024", "questionNo": "Q7(b)", "marks": 5 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q8(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Relationships Between Patterns",
        "MVC and Observer Collaboration"
      ],
      "definition": "Patterns do not exist as isolated entities; they are interrelated and depend upon one another. A large pattern may contain smaller patterns inside it, and one pattern may solve a problem introduced by applying another pattern.",
      "sections": [
        {
          "title": "1. Nature of Inter-Pattern Relationships (Textbook Section 6.4)",
          "content": [
            "A pattern may depend on smaller patterns it contains to implement specific sub-tasks.",
            "A pattern may be a constituent component of a larger architectural pattern.",
            "If applying one pattern raises secondary problems or trade-offs (e.g. notification overhead), those secondary problems are solved by combining it with another pattern."
          ]
        },
        {
          "title": "2. Concrete Example: Model-View-Controller and Observer Pattern",
          "content": [
            "Context: Developing a human-computer interaction desktop application using the Model-View-Controller (MVC) architectural pattern.",
            "Problem: In MVC, multiple views and controllers depend on the state of the Model. Whenever the Model changes state, consistency among all dependent views must be maintained without tightly coupling the Model to specific view classes.",
            "Solution via Combination: The software designer implements the relationship between the Model and Views using the Observer design pattern:",
            "• The Model plays the role of the Subject.",
            "• The Views and Controllers play the role of registered Observers.",
            "• When user input modifies the Model, the Model executes notify(), and all registered Views receive update() and redraw their visual components automatically.",
            "Conclusion: The Model-View-Controller (architectural pattern) and the Observer (design pattern) work together synergistically to build robust interactive software."
          ]
        }
      ],
      "summary": [
        "Patterns do not exist in isolation; they depend on, contain, and complement each other.",
        "Model-View-Controller (architectural pattern) uses the Observer pattern (design pattern) to maintain view-model consistency.",
        "In this combination, the Model acts as Subject, while Views and Controllers act as Observers."
      ],
      "keyPoints": [
        "Pattern interdependence",
        "MVC combined with Observer",
        "Model as Subject, View as Observer"
      ]
    },
    {
      "id": "oomd-u6-q4",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 4,
      "title": "Explain the Standard Pattern Description Format Used to Document Software Patterns.",
      "shortTitle": "Pattern Description Format",
      "marks": 5,
      "importance": "Important",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q7(a)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q7(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Pattern Description",
        "Pattern Specification Schema"
      ],
      "definition": "The Pattern Description Format is a standardized document schema used in object-oriented software engineering to record and communicate software patterns uniformly and completely across development teams.",
      "sections": [
        {
          "title": "1. Standard Pattern Description Sections (Textbook Section 6.5)",
          "content": [
            "1. Name: The name and a short summary of the pattern.",
            "2. Also Known As (aka): Other industry names for the pattern, if any.",
            "3. Example: A real-world example demonstrating the existence of the problem and the need for the pattern.",
            "4. Context: The specific situations in which the pattern may apply.",
            "5. Problem: The problem the pattern addresses, including a discussion of its requirements and conflicting forces.",
            "6. Solution: The fundamental solution principle underlying the pattern.",
            "7. Structure: A detailed specification of the structural aspects of the pattern (UML class diagrams).",
            "8. Dynamics: Scenarios describing the runtime interaction and collaboration between participants.",
            "9. Implementation: Guidelines, algorithms, and steps for implementing the pattern.",
            "10. Variants: A brief description of variants or specializations of the pattern.",
            "11. Known Uses: Examples of the use of the pattern taken from existing production systems.",
            "12. Consequences: The advantages and disadvantages of applying the pattern."
          ]
        }
      ],
      "summary": [
        "Patterns are documented using 12 standard sections.",
        "Key sections include Name, Context, Problem, Solution, Structure, Dynamics, Implementation, Known Uses, and Consequences.",
        "Provides a uniform specification language across software engineering organizations."
      ],
      "keyPoints": [
        "Standardized 12-field format",
        "Context, Problem, Solution, Structure, Dynamics",
        "Consequences (advantages & disadvantages)"
      ]
    },
    {
      "id": "oomd-u6-q5",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 5,
      "title": "What is a Communication Pattern? Explain the Forwarder-Receiver Pattern in Detail with a Diagram.",
      "shortTitle": "Forwarder-Receiver Communication Pattern",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q7(b)", "marks": 5 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q8(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Communication Patterns",
        "Forwarder-Receiver",
        "Encapsulation of IPC"
      ],
      "definition": "A Communication Pattern is a design pattern used for communication between software modules. The Forwarder-Receiver pattern provides transparent interprocess communication for software systems with a peer-to-peer interaction model by encapsulating underlying IPC mechanisms.",
      "diagrams": [
        {
          "id": "diag-oomd-forwarder-receiver",
          "title": "Forwarder-Receiver Communication Pattern (Textbook Fig. 6.6.2)",
          "caption": "Textbook Fig. 6.6.2: Peer 1 collaborates with Forwarder and Receiver to exchange marshaled messages across an underlying IPC channel with Peer 2.",
          "type": "svg-interactive",
          "svgType": "oomd-forwarder-receiver"
        }
      ],
      "sections": [
        {
          "title": "1. Two Core Aspects of Communication Patterns (Textbook Section 6.6)",
          "content": [
            "1. Encapsulation: Hiding the details of the underlying communication mechanisms from users and application logic.",
            "2. Location Transparency: Technique in which applications access remote components without needing knowledge of their physical location."
          ]
        },
        {
          "title": "2. Participating Classes in Forwarder-Receiver (Fig. 6.6.2)",
          "content": [
            "Peer (Peer 1 & Peer 2): Application components responsible for providing business application services. Communicates with other peers in collaboration with its local forwarder and receiver.",
            "Forwarder: Responsible for forwarding outgoing messages to remote peer agents. It marshals message data, resolves the physical destination address, and delivers the message via IPC without peer code being coupled to IPC APIs.",
            "Receiver: Responsible for receiving incoming messages. It monitors IPC channels, unmarshals received binary streams into structured messages, and delivers them to the local peer."
          ]
        },
        {
          "title": "3. Dynamics and Known Uses",
          "content": [
            "Dynamics: Peer 1 invokes sendMsg() on its local Forwarder. The Forwarder determines the physical destination address, marshals the message, and transmits it over IPC to Peer 2's Receiver. Receiver unmarshals the data and invokes receiveMsg() on Peer 2.",
            "Known Uses: TASC (tool factory for distributed automation systems) and the REBOOT project for flexible robot manufacturing control.",
            "Consequences: Provides efficient interprocess communication and clean encapsulation of IPC platform dependencies."
          ]
        }
      ],
      "summary": [
        "Communication patterns provide IPC Encapsulation and Location Transparency.",
        "Forwarder-Receiver encapsulates IPC mechanisms for peer-to-peer distributed systems.",
        "Consists of Peer, Forwarder (marshals & delivers), and Receiver (receives & unmarshals)."
      ],
      "keyPoints": [
        "Encapsulation of IPC",
        "Peer, Forwarder, Receiver (Fig. 6.6.2)",
        "Marshal and unmarshal"
      ]
    },
    {
      "id": "oomd-u6-q6",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 6,
      "title": "Explain the Client-Dispatcher-Server Architectural Design Pattern in Detail with a Diagram.",
      "shortTitle": "Client-Dispatcher-Server Pattern",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q8(c)", "marks": 8 },
        { "paper": "Nov 2023", "questionNo": "Q7(a)", "marks": 5 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q8(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Communication Patterns",
        "Client-Dispatcher-Server",
        "Location Transparency"
      ],
      "definition": "The Client-Dispatcher-Server Pattern provides inter-process communication for software systems in which the distribution of components is not known at compile time, introducing a Dispatcher component to establish location transparency.",
      "diagrams": [
        {
          "id": "diag-oomd-client-dispatcher-server",
          "title": "Client-Dispatcher-Server Communication Pattern (Textbook Fig. 6.6.3)",
          "caption": "Textbook Fig. 6.6.3: Client requests connection from Dispatcher; Dispatcher queries location map and establishes channel; Client sends service request directly to Server.",
          "type": "svg-interactive",
          "svgType": "oomd-client-dispatcher-server"
        }
      ],
      "sections": [
        {
          "title": "1. Participating Classes (Textbook Section 6.6.2)",
          "content": [
            "Client: The component requiring a service. Instead of connecting directly using a hardcoded address, it queries the Dispatcher for a communication channel or locator.",
            "Dispatcher: Implements a name service. Maintains a dynamic registry of servers and their physical addresses. Provides registerService(), unregisterService(), locateServer(), and establishChannel().",
            "Server: Provides business services to clients. Registers itself with the Dispatcher upon startup by providing its service name and physical network address."
          ]
        },
        {
          "title": "2. Dynamics (Step-by-Step Execution Flow)",
          "content": [
            "1. Server registers itself with the Dispatcher component.",
            "2. Client asks the Dispatcher for a communication channel to talk to the server.",
            "3. Dispatcher looks up its registry for the name of the server.",
            "4. Dispatcher establishes the connection with the server; if successful, communication channel is returned to client.",
            "5. Client uses the communication channel to send requests to the server.",
            "6. Server executes the requested service.",
            "7. Server returns results back to the client."
          ]
        },
        {
          "title": "3. Known Uses and Consequences",
          "content": [
            "Known Uses: Sun's Remote Procedure Call (RPC) implementation and OMG CORBA (Common Object Request Broker Architecture).",
            "Consequences: Exchangeability of servers, complete location transparency, and support for fault-tolerance mechanisms."
          ]
        }
      ],
      "summary": [
        "Client-Dispatcher-Server provides location transparency for distributed systems.",
        "The Dispatcher implements a name service, decoupling clients from physical server addresses.",
        "Used in Sun RPC and OMG CORBA brokers."
      ],
      "keyPoints": [
        "Location transparency",
        "Client, Dispatcher, Server (Fig. 6.6.3)",
        "Sun RPC & CORBA"
      ]
    },
    {
      "id": "oomd-u6-q7",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 7,
      "title": "Discuss the Structure and Variants of the Publisher-Subscriber Design Pattern with a Diagram.",
      "shortTitle": "Publisher-Subscriber Design Pattern",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q8(c)", "marks": 8 },
        { "paper": "Nov 2023", "questionNo": "Q8(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Communication Patterns",
        "Publisher-Subscriber",
        "Push vs Pull Models"
      ],
      "definition": "The Publisher-Subscriber Pattern is a communication pattern where a dedicated component (Publisher) notifies multiple dependent components (Subscribers) whenever data changes, keeping distributed components consistent.",
      "diagrams": [
        {
          "id": "diag-oomd-publisher-subscriber",
          "title": "Publisher-Subscriber Pattern (Textbook Fig. 6.6.4)",
          "caption": "Textbook Fig. 6.6.4: Publisher connects through Proxy Publisher to an Event Channel, which forwards events through Proxy Subscribers to Subscribers.",
          "type": "svg-interactive",
          "svgType": "oomd-publisher-subscriber"
        }
      ],
      "sections": [
        {
          "title": "1. Structure and Participants (Textbook Fig. 6.6.4)",
          "content": [
            "Publisher: Maintains a registry of currently subscribed components and publishes notifications when internal state changes.",
            "Subscriber: Dependent components that register interest using a subscribe interface.",
            "Event Channel: Intermediate message buffer/broker that decouples event delivery between publishers and subscribers.",
            "Proxy Publisher & Proxy Subscriber: Optional gateway proxies that handle network marshaling across distributed nodes."
          ]
        },
        {
          "title": "2. Push Model vs Pull Model",
          "content": [
            "In the Push Model, the publisher sends all the changed data to its subscribers. The push model has a rigid dynamic behavior.",
            "In the Pull Model, the publisher sends only minimal information about the change; subscribers are responsible for querying the required data. The pull model is highly flexible."
          ]
        },
        {
          "title": "3. Advantages of Publisher-Subscriber",
          "content": [
            "1. Support for Distributed Systems: Decouples senders and receivers over networks.",
            "2. Extensibility: New subscribers can be added dynamically without modifying the publisher."
          ]
        },
        {
          "title": "4. Disadvantages of Publisher-Subscriber",
          "content": [
            "1. Less Efficient: Indirection and event channel dispatch introduce latency.",
            "2. Complex to Implement: Requires message routing, buffering, and error recovery logic."
          ]
        }
      ],
      "summary": [
        "Publisher-Subscriber keeps multiple dependent components consistent upon data changes.",
        "Uses Event Channel, Proxy Publisher, and Proxy Subscriber (Fig. 6.6.4).",
        "Supports Push model (rigid, full data) and Pull model (flexible, minimal notice)."
      ],
      "keyPoints": [
        "Publisher, Event Channel, Subscriber (Fig. 6.6.4)",
        "Push vs Pull models",
        "Event messaging & logistics tracking"
      ]
    },
    {
      "id": "oomd-u6-q8",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 8,
      "title": "What are Management Patterns? Explain the Command Processor Pattern in Detail with a Diagram.",
      "shortTitle": "Command Processor Management Pattern",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q7(b)", "marks": 5 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q8(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Management Patterns",
        "Command Processor Pattern",
        "Multi-Level Undo Mechanism"
      ],
      "definition": "Management Patterns handle collections of objects that provide different kinds of services. The Command Processor pattern separates the request for a service from its execution, managing requests as separate objects to support scheduling, logging, and multi-level undo.",
      "diagrams": [
        {
          "id": "diag-oomd-command-processor",
          "title": "Command Processor Design Pattern (Textbook Fig. 6.7.1)",
          "caption": "Textbook Fig. 6.7.1: Controller creates Command objects and transfers them to the Command Processor; Command inherits Abstract Command and manipulates Supplier.",
          "type": "svg-interactive",
          "svgType": "oomd-command-processor"
        }
      ],
      "sections": [
        {
          "title": "1. Participating Classes (Textbook Fig. 6.7.1)",
          "content": [
            "Controller: Represents the user interface of the application. Accepts user requests (e.g. clicking 'Paste text') and creates the corresponding Command object, transferring it to the Command Processor.",
            "Command Processor: Manages execution, scheduling, logging, and undo/redo stacks for all command objects.",
            "Abstract Command: Defines the interface common to all command objects (do() and undo()).",
            "Command: Concrete command class implementing execute() and undo() by calling specific methods on the Supplier.",
            "Supplier: Provides the actual business functionality required to execute concrete commands."
          ]
        },
        {
          "title": "2. Dynamics: Multi-Level Undo Workflow",
          "content": [
            "Step 1: Controller accepts request from user event loop and instantiates a command object (e.g. CapitalizeCommand).",
            "Step 2: Controller transfers the command object to the Command Processor.",
            "Step 3: Command Processor executes the command and stores it in the undo history stack.",
            "Step 4: When user invokes 'Undo', Command Processor pops the most recent command and calls its undo() method, restoring the Supplier's previous state."
          ]
        },
        {
          "title": "3. Advantages of Command Processor Pattern",
          "content": [
            "1. Flexibility in Request Activation: Requests can be queued, scheduled, or executed asynchronously.",
            "2. Testability: Individual command objects can be tested in isolation.",
            "3. Concurrency: Commands can be executed on background worker threads."
          ]
        },
        {
          "title": "4. Disadvantages of Command Processor Pattern",
          "content": [
            "1. Parameter Acquisition Complexity: Acquiring all required context parameters before command instantiation can be difficult.",
            "2. Memory Overhead: Storing deep undo stacks consumes additional memory."
          ]
        }
      ],
      "summary": [
        "Management patterns handle collections of service objects.",
        "Command Processor separates request creation from execution, supporting multi-level undo.",
        "Consists of Controller, Command Processor, Abstract Command, Command, and Supplier (Fig. 6.7.1)."
      ],
      "keyPoints": [
        "Command Processor (Fig. 6.7.1)",
        "Multi-level undo/redo",
        "Known Use: MacApp"
      ]
    },
    {
      "id": "oomd-u6-q9",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 9,
      "title": "What is the View Handler Pattern? Explain Its Intent, Architecture, and Working with a Diagram.",
      "shortTitle": "View Handler Management Pattern",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q8(b)", "marks": 5 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q8(a)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Management Patterns",
        "View Handler Pattern",
        "Multi-Window GUI Systems"
      ],
      "definition": "The View Handler Pattern is a management pattern that helps to manage all the views that a software system provides, allowing clients to open, manipulate, organize (tile/cascade), and dispose of views uniformly.",
      "diagrams": [
        {
          "id": "diag-oomd-view-handler",
          "title": "View Handler Design Pattern (Textbook Fig. 6.7.2)",
          "caption": "Textbook Fig. 6.7.2: ViewHandler creates, closes, and coordinates AbstractView instances; Supplier notifies ViewHandler and provides data to SpecificViews.",
          "type": "svg-interactive",
          "svgType": "oomd-view-handler"
        }
      ],
      "sections": [
        {
          "title": "1. Participating Classes (Textbook Fig. 6.7.2)",
          "content": [
            "ViewHandler: Plays a central role. Handles opening, closing, tiling, and resizing of views on behalf of clients.",
            "AbstractView: Defines an interface common to all views (display, update, resize). ViewHandler uses this interface for coordinating views.",
            "SpecificView1 & SpecificView2: Concrete components derived from AbstractView, implementing specialized visual displays.",
            "Supplier: Provides underlying application data displayed by view components and notifies the ViewHandler when state changes."
          ]
        },
        {
          "title": "2. Two Execution Scenarios",
          "content": [
            "Scenario 1 (Creating a New View): Client requests ViewHandler to open a view. ViewHandler instantiates the view, registers it with Supplier change notification, and calls display().",
            "Scenario 2 (Organizing / Tiling Views): Client commands ViewHandler to tile open windows. ViewHandler calculates coordinates and sizes for all views and invokes resize and move procedures."
          ]
        },
        {
          "title": "3. Advantages of View Handler Pattern",
          "content": [
            "1. Uniform Handling of Views: Centralized window management logic.",
            "2. Extensibility and Changeability: New view types can be added without modifying existing views.",
            "3. Application-Specific Coordination: Enables sophisticated multi-view synchronization."
          ]
        },
        {
          "title": "4. Disadvantages of View Handler Pattern",
          "content": [
            "1. Restricted Applicability: Useful only if multiple different views of data are needed.",
            "2. Indirection Overhead: Introduces an additional level of indirection between client and views."
          ]
        }
      ],
      "summary": [
        "View Handler coordinates multi-window graphical interfaces.",
        "Consists of ViewHandler, AbstractView, SpecificView, and Supplier (Fig. 6.7.2).",
        "Known Uses: Microsoft Word (split/cloned windows) and Macintosh Window Manager."
      ],
      "keyPoints": [
        "ViewHandler (Fig. 6.7.2)",
        "Window tiling and coordination",
        "Known Use: Microsoft Word"
      ]
    },
    {
      "id": "oomd-u6-q10",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 10,
      "title": "Define Idioms. What Can Idioms Provide? Discuss Idioms and Style, and Explain Where to Find Idioms.",
      "shortTitle": "Idioms: Style & Sources",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "Nov 2023", "questionNo": "Q8(c)", "marks": 8 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q7(a)", "marks": 5 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q8(c)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Idioms and Style",
        "What Can Idioms Provide",
        "Where to Find Idioms"
      ],
      "definition": "Idioms are low-level patterns specific to a particular programming language that describe how to solve implementation-specific problems using unique language features and syntax.",
      "sections": [
        {
          "title": "1. What Can Idioms Provide? (Textbook Section 6.8.2)",
          "content": [
            "1. Solves Recurring Programming Problems: Helps perform memory management, object creation, and resource cleanup efficiently.",
            "2. Provides a Shared Vocabulary: Gives a unique name to a programming technique, facilitating clear communication among software developers.",
            "3. Exploits Language Capabilities: Represents the competent and idiomatic use of unique programming language features."
          ]
        },
        {
          "title": "2. Idioms and Style (Textbook Section 6.8.3)",
          "content": [
            "Programmers working in a team must agree on a single coding style for programs.",
            "Example of Style Differences in C string copy:",
            "• Pointer-based idiom: void strcpy1(char *d, const char *s) { while(*d++ = *s++); }",
            "• Array-based idiom: void strcpy2(char d[], const char s[]) { int i; for(i=0; s[i]!='\\\\0'; i++) d[i]=s[i]; d[i]='\\\\0'; }",
            "Both implement identical behavior, but mixing styles makes maintenance difficult. Teams follow style guides that contain collected idioms to enforce consistent code structure."
          ]
        },
        {
          "title": "3. Where to Find Idioms? (Textbook Section 6.8.4)",
          "content": [
            "Smalltalk: Kent Beck's 'Smalltalk Best Practice Patterns'.",
            "C++: James Coplien's 'Advanced C++ Programming Styles and Idioms', Barton and Nackman's 'Scientific and Engineering C++', and Scott Meyers' 'Effective C++'."
          ]
        }
      ],
      "summary": [
        "Idioms are low-level, language-specific implementation patterns.",
        "They solve recurring coding problems, provide vocabulary, and guide coding style.",
        "Documented in works by Kent Beck (Smalltalk), Coplien, Barton & Nackman, and Scott Meyers (C++)."
      ],
      "keyPoints": [
        "Low-level language-specific patterns",
        "Idioms and style (e.g. strcpy pointer idiom)",
        "Sources: Beck, Coplien, Meyers"
      ]
    },
    {
      "id": "oomd-u6-q11",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 11,
      "title": "Explain the Counted Pointer Idiom in Detail with Structure, Handle-Body Diagram, and Implementation Steps.",
      "shortTitle": "Counted Pointer Handle-Body Idiom",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q8(a)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q8(c)", "marks": 8 }
      ],
      "syllabusTopics": [
        "Idioms",
        "Counted Pointer Example",
        "Handle-Body Idiom"
      ],
      "definition": "The Counted Pointer Idiom is a C++ programming idiom used for dynamic memory management of shared objects, eliminating dangling pointers and memory leaks by maintaining a reference count in the target body object.",
      "diagrams": [
        {
          "id": "diag-oomd-counted-pointer",
          "title": "Representation of Handle-Body Idiom (Textbook Fig. 6.8.1)",
          "caption": "Textbook Fig. 6.8.1: Client holds Handle by value on stack; Handle manages reference counting and delegates operations to the shared Body object on the heap.",
          "type": "svg-interactive",
          "svgType": "oomd-counted-pointer"
        }
      ],
      "sections": [
        {
          "title": "1. Problem Addressed by Counted Pointer",
          "content": [
            "In C++, passing objects by value is expensive, while passing raw pointers risks dangling pointers if memory is deleted while another client still holds a reference.",
            "The Counted Pointer idiom introduces reference counting: when multiple clients share a Body object, the object is automatically deleted only when the last reference is destroyed."
          ]
        },
        {
          "title": "2. Two Classes in the Mechanism (Textbook Fig. 6.8.1)",
          "content": [
            "Body: The target object holding actual application data and services. Contains an internal reference counter (refCounter).",
            "Handle: The smart pointer object allocated on the stack. Clients only interact with the Handle. It overloads operator->() so it behaves syntactically like a pointer."
          ]
        },
        {
          "title": "3. Eight Implementation Steps (Textbook Section 6.8.5)",
          "content": [
            "1. Make constructor and destructor of Body class private so only Handle can instantiate or delete it.",
            "2. Make the Handle class a friend of the Body class so Handle can access private Body members.",
            "3. Extend the Body class with a reference counter (int refCounter).",
            "4. Add a data member to the Handle class as a pointer to the Body class (Body* body).",
            "5. Implement Handle copy constructor and assignment operator: increment the refCounter of the shared Body object.",
            "6. Implement Handle destructor: decrement refCounter; if refCounter reaches zero, execute 'delete body'.",
            "7. Overload operator->() in Handle so clients use pointer syntax.",
            "8. Extend Handle class with constructors that initialize new Body instances with refCounter = 1."
          ]
        },
        {
          "title": "4. Variants",
          "content": [
            "Reference Counting Idiom: General counting mechanism across arbitrary resource types.",
            "Counted Body: Variation where Body class contains embedded reference counter directly."
          ]
        }
      ],
      "summary": [
        "Counted Pointer automates C++ memory management via reference counting.",
        "Consists of Client, Handle (stack), and Body (heap) (Fig. 6.8.1).",
        "Follows 8 strict implementation steps; automatically deletes Body when refCounter drops to zero."
      ],
      "keyPoints": [
        "Handle-Body idiom (Fig. 6.8.1)",
        "refCounter reference counting",
        "8 implementation steps",
        "Eliminates dangling pointers & leaks"
      ]
    }
  ]
};
"""

with open('src/data/subjects/oomd/unit-6.ts', 'w', encoding='utf-8') as f:
    f.write(unit6_code)

print("Updated src/data/subjects/oomd/unit-6.ts according to textbook!")
