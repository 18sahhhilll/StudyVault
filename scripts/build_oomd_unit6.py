unit6_content = """import { Unit } from '@/types';

export const unit6Data: Unit = {
  "id": "unit-6",
  "unitNumber": 6,
  "title": "Unit VI: Design Patterns",
  "shortTitle": "Design Patterns",
  "description": "Comprehensive study of Object-Oriented Design Patterns: Definition, Essential Elements, Categories (Creational, Structural, Behavioral), Core GoF Patterns (Strategy, Observer, State, Adapter), Architectural Patterns (Client-Dispatcher-Server, Publisher-Subscriber, View Handler), and Programming Idioms (Counted Pointer, Idioms vs Patterns).",
  "syllabus": [
    "Introduction to Design Patterns: What is a design pattern, Describing design patterns, The catalog of design patterns, Organizing the catalog, How design patterns solve design problems, How to select a design pattern, How to use a design pattern.",
    "Creational Patterns: Singleton, Factory Method, Abstract Factory.",
    "Structural Patterns: Adapter, Composite, Decorator, Facade.",
    "Behavioral Patterns: Strategy, Observer, State.",
    "Architectural Patterns: Client-Dispatcher-Server, Publisher-Subscriber, View Handler.",
    "Idioms and Style: What can idioms provide, Idioms and style, Where to find idioms, Counted Pointer example."
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
        "term": "Design Pattern",
        "definition": "A general, reusable solution to a commonly occurring problem within a given context in software design. It describes collaborating classes and objects customized to solve a general design problem."
      },
      {
        "term": "Strategy Pattern",
        "definition": "A behavioral pattern that defines a family of algorithms, encapsulates each one inside a separate class, and makes them interchangeable at runtime."
      },
      {
        "term": "Observer Pattern",
        "definition": "A behavioral pattern that establishes a one-to-many dependency between objects so that when one object (Subject) changes state, all its dependents (Observers) are notified automatically."
      },
      {
        "term": "Client-Dispatcher-Server",
        "definition": "An architectural pattern that introduces a Dispatcher component between clients and servers to decouple location, enabling dynamic registration and transparent lookup."
      },
      {
        "term": "Idiom",
        "definition": "A low-level, language-specific pattern that describes how to implement particular aspects of components or relationships using the unique features of a specific programming language."
      }
    ]
  },
  "questions": [
    {
      "id": "oomd-u6-q1",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 1,
      "title": "What is a Design Pattern? Explain the Four Essential Elements of a Design Pattern and Describe the Three Major Categories.",
      "shortTitle": "Design Pattern: Elements & Categories",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 7,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q7(a)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q7(c)", "marks": 8 },
        { "paper": "May 2024", "questionNo": "Q8(a)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q7(b)", "marks": 5 },
        { "paper": "April 2023", "questionNo": "Q7(a)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q7(a)", "marks": 6 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q7(a)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Introduction to Design Patterns",
        "Essential Elements",
        "Three Pattern Categories"
      ],
      "definition": "A Design Pattern is a named, proven, and reusable solution to a recurring software design problem within a particular context. It provides an architectural template of classes, responsibilities, and relationships without being tied to a specific programming language.",
      "sections": [
        {
          "title": "1. Four Essential Elements of a Design Pattern",
          "content": [
            "1. Pattern Name: A concise, meaningful handle used to describe a design problem, its solutions, and consequences in one or two words. It establishes a shared technical vocabulary among software engineers (e.g., 'Singleton', 'Observer', 'Strategy').",
            "2. Problem / Context: Describes when to apply the pattern, explaining the problem and its context. It specifies conditions, forces, and requirements that must be balanced before applying the solution.",
            "3. Solution: Describes the elements that make up the design, their relationships, responsibilities, and collaborations. It is not an implementation; rather, it is an abstract arrangement of classes and objects.",
            "4. Consequences: The results and trade-offs of applying the pattern. Consequences include impact on system flexibility, extensibility, runtime performance, and memory footprint."
          ]
        },
        {
          "title": "2. Three Major Categories of Design Patterns (GoF)",
          "content": [
            "1. Creational Patterns: Deal with object creation mechanisms, abstracting the instantiation process so the system is independent of how its objects are created, composed, and represented. Examples: Singleton, Factory Method, Abstract Factory, Builder, Prototype.",
            "2. Structural Patterns: Concern how classes and objects are composed to form larger, more flexible structures. They use inheritance and composition to create new functionality. Examples: Adapter, Composite, Decorator, Facade, Proxy, Bridge, Flyweight.",
            "3. Behavioral Patterns: Specifically focus on algorithms and the assignment of responsibilities between collaborating objects. They characterize complex control flows and communication protocols. Examples: Observer, Strategy, State, Command, Template Method, Iterator."
          ]
        }
      ]
    },
    {
      "id": "oomd-u6-q2",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 2,
      "title": "Explain the Strategy Design Pattern with Intent, UML Class Structure, Participants, and an Example.",
      "shortTitle": "Strategy Design Pattern",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q7(b)", "marks": 5 },
        { "paper": "April 2023", "questionNo": "Q7(c)", "marks": 5 },
        { "paper": "Oct 2022", "questionNo": "Q8(c)", "marks": 5 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q7(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Behavioral Patterns",
        "Strategy Pattern",
        "Algorithm Encapsulation"
      ],
      "definition": "The Strategy Pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each one inside a separate class, and makes them interchangeable at runtime, allowing the algorithm to vary independently from clients that use it.",
      "diagrams": [
        {
          "id": "diag-oomd-strategy-pattern",
          "title": "Strategy Design Pattern: UML Class Architecture",
          "caption": "Context maintains a reference to the Strategy interface, delegating execution to interchangeable ConcreteStrategy implementations (ConcreteStrategyA, ConcreteStrategyB, ConcreteStrategyC).",
          "type": "svg-interactive",
          "svgType": "oomd-strategy-pattern"
        }
      ],
      "sections": [
        {
          "title": "1. Pattern Participants and Roles",
          "content": [
            "Context: Maintains a reference to a Strategy object and communicates with it via the Strategy interface. Configured by client code with a ConcreteStrategy instance.",
            "Strategy (Interface): Common interface implemented by all supported algorithms. Context invokes this interface (+algorithmInterface()).",
            "ConcreteStrategy (A, B, C): Encapsulates a specific algorithm variant using the Strategy interface (e.g., CreditCardPayment, UPIPayment, NetBankingPayment)."
          ]
        },
        {
          "title": "2. Real-World Example: E-Commerce Payment Gateway",
          "content": [
            "Context: ShoppingCart class.",
            "Strategy Interface: PaymentStrategy (+pay(amount)).",
            "Concrete Strategies: CreditCardPayment, UPIPayment, and PayPalPayment.",
            "Runtime Flexibility: When checking out, the customer selects a payment option. The ShoppingCart dynamically assigns the selected strategy and executes pay(total) without modifying shopping cart logic."
          ]
        },
        {
          "title": "3. Advantages of Strategy Pattern",
          "content": [
            "1. Eliminates Conditional Statements: Replaces sprawling switch-case or nested if-else blocks with clean polymorphic dispatch.",
            "2. Open/Closed Principle: New algorithms can be introduced without modifying the Context class."
          ]
        },
        {
          "title": "4. Disadvantages of Strategy Pattern",
          "content": [
            "1. Increased Object Count: Every algorithm variant requires a new class.",
            "2. Client Must Know Differences: Clients must understand how strategies differ to choose the right one."
          ]
        }
      ]
    },
    {
      "id": "oomd-u6-q3",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 3,
      "title": "Explain the Observer Design Pattern with Intent, UML Class Structure, Push vs Pull Notification, and an Example.",
      "shortTitle": "Observer Design Pattern",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "April 2023", "questionNo": "Q8(a)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q7(c)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q8(c)", "marks": 8 }
      ],
      "syllabusTopics": [
        "Behavioral Patterns",
        "Observer Pattern",
        "Publish-Subscribe Mechanism"
      ],
      "definition": "The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects such that when one object (the Subject) changes its internal state, all its registered dependents (Observers) are automatically notified and updated.",
      "diagrams": [
        {
          "id": "diag-oomd-observer-pattern",
          "title": "Observer Design Pattern: Publish-Subscribe Architecture",
          "caption": "ConcreteSubject holds state and notifies registered Observers via the Observer interface; ConcreteObservers query ConcreteSubject to synchronize state.",
          "type": "svg-interactive",
          "svgType": "oomd-observer-pattern"
        }
      ],
      "sections": [
        {
          "title": "1. Participants and Collaborations",
          "content": [
            "Subject: Maintains a list of observers and provides public methods to attach(), detach(), and notify() observers.",
            "Observer (Interface): Defines the update() method called by the Subject upon state changes.",
            "ConcreteSubject: Stores state of interest (e.g., StockPrice, SensorData). Emits notify() whenever its state updates.",
            "ConcreteObserver: Implements update() to keep its state synchronized with ConcreteSubject's state."
          ]
        },
        {
          "title": "2. Push Model vs Pull Model",
          "content": [
            "Push Model: The Subject sends detailed state information as parameters inside update(data). Highly convenient if all observers need identical data, but binds the Subject to an assumed observer signature.",
            "Pull Model: The Subject passes minimal notification (update()), and the Observer queries only the specific attributes it requires using subject.getState(). More flexible and less coupled."
          ]
        },
        {
          "title": "3. Advantages of Observer Pattern",
          "content": [
            "1. Loose Coupling: Subject knows only that each observer implements the Observer interface; it knows nothing about their concrete classes.",
            "2. Broadcast Communication: Supports dynamic addition and removal of observers at runtime without modifying Subject code."
          ]
        },
        {
          "title": "4. Disadvantages of Observer Pattern",
          "content": [
            "1. Unexpected Updates: Cascading notifications can cause performance bottlenecks or infinite update loops if observers modify the subject.",
            "2. Memory Leaks: In languages without weak references, failure to unregister observers causes 'Lapsed Listener' memory leaks."
          ]
        }
      ]
    },
    {
      "id": "oomd-u6-q4",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 4,
      "title": "Explain the Client-Dispatcher-Server Architectural Design Pattern with a Neat Diagram.",
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
        "Architectural Patterns",
        "Communication Patterns",
        "Client-Dispatcher-Server"
      ],
      "definition": "The Client-Dispatcher-Server Pattern is an architectural communication pattern that decouples service requesters (Clients) from service providers (Servers) by introducing an intermediate broker (Dispatcher) responsible for managing server registration, location lookup, and connection routing.",
      "diagrams": [
        {
          "id": "diag-oomd-client-dispatcher-server",
          "title": "Client-Dispatcher-Server Architectural Design Pattern",
          "caption": "Step 1: Server registers service with Dispatcher. Step 2: Client queries Dispatcher. Step 3: Dispatcher returns Server locator. Step 4: Client establishes direct communication with Server.",
          "type": "svg-interactive",
          "svgType": "oomd-client-dispatcher-server"
        }
      ],
      "sections": [
        {
          "title": "1. Pattern Participants",
          "content": [
            "Client: The application component that requires a specific service. It queries the Dispatcher using a logical service name to retrieve a physical server handle.",
            "Dispatcher: The centralized directory registry. Maintains a dynamic name-to-address mapping table of available servers. Provides registerService(), unregisterService(), and getServiceLocator() APIs.",
            "Server: The component that provides actual business services. Upon startup, it registers its logical name and network address (IP, Port) with the Dispatcher."
          ]
        },
        {
          "title": "2. Step-by-Step Communication Flow",
          "content": [
            "Step 1 (Registration): Server starts up and invokes registerService('AccountService', '192.168.1.50:8080') on the Dispatcher.",
            "Step 2 (Lookup): Client invokes getLocator('AccountService') on the Dispatcher.",
            "Step 3 (Resolution): Dispatcher queries internal routing table and returns ServerLocator to Client.",
            "Step 4 (Execution): Client uses the locator to establish a direct connection with the Server, executing operations with zero dispatcher overhead."
          ]
        },
        {
          "title": "3. Advantages of Client-Dispatcher-Server",
          "content": [
            "1. Location Transparency: Clients reference servers by logical name rather than hard-coded physical IP addresses.",
            "2. Dynamic Server Relocation & Load Balancing: Servers can migrate to different hardware nodes and re-register without breaking client applications."
          ]
        },
        {
          "title": "4. Disadvantages of Client-Dispatcher-Server",
          "content": [
            "1. Single Point of Failure: If the Dispatcher node crashes, new service lookups fail unless redundant dispatchers are deployed.",
            "2. Initial Lookup Latency: An extra round-trip network hop is required for the initial service resolution."
          ]
        }
      ]
    },
    {
      "id": "oomd-u6-q5",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 5,
      "title": "Explain the Structure and Variants of the Publisher-Subscriber Design Pattern.",
      "shortTitle": "Publisher-Subscriber Pattern",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q8(c)", "marks": 8 },
        { "paper": "Nov 2023", "questionNo": "Q8(b)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Architectural Patterns",
        "Publisher-Subscriber Pattern",
        "Event-Driven Architectures"
      ],
      "definition": "The Publisher-Subscriber Pattern is a messaging architecture where message senders (Publishers) do not send messages directly to specific receivers (Subscribers); instead, messages are categorized into topics and routed through an event bus or message broker.",
      "sections": [
        {
          "title": "1. Core Architectural Structure",
          "content": [
            "Publisher: Emits events/messages to an Event Channel without knowledge of which subscribers exist.",
            "Event Channel / Message Broker: Intermediate broker that maintains subscriber lists, filters events, and dispatches messages.",
            "Subscriber: Registers interest in specific message categories and receives notifications when matching events arrive."
          ]
        },
        {
          "title": "2. Variants of Publisher-Subscriber",
          "content": [
            "1. Topic-Based Routing: Subscribers register for named channels or topics (e.g., 'stocks/tech/apple'). Any message published to that topic is delivered to all topic subscribers.",
            "2. Content-Based Routing: Subscribers register filter criteria based on message attributes (e.g., 'price > 150 AND volume > 1000'). The broker parses message contents to determine matching recipients.",
            "3. Push vs Pull Dissemination: In the Push model, the broker immediately delivers messages to subscribers. In the Pull model, messages buffer in queues and subscribers fetch messages at their own pace."
          ]
        }
      ]
    },
    {
      "id": "oomd-u6-q6",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 6,
      "title": "What is the View Handler Design Pattern? Explain Its Architecture and Working in Detail.",
      "shortTitle": "View Handler Design Pattern",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q8(b)", "marks": 5 },
        { "paper": "Nov 2024 ([6584]-972)", "questionNo": "Q8(a)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Architectural Patterns",
        "View Handler Pattern",
        "GUI Window Coordination"
      ],
      "definition": "The View Handler Pattern is an architectural pattern that coordinates and manages multiple graphical windows, sub-views, and display panes in a multi-window user interface, providing centralized management for creating, opening, tiling, and closing views.",
      "sections": [
        {
          "title": "1. Participants and Architecture",
          "content": [
            "View Handler: Central manager that maintains a registry of all active views. Provides commands to openView(), closeView(), tileViews(), cascadeViews(), and broadcast update notifications.",
            "Abstract View: Base class for all individual GUI windows. Declares standard hooks: display(), minimize(), maximize(), and update().",
            "Specific Views: Concrete window components displaying different visual representations of the underlying data model (e.g., TableView, ChartView, SummaryView)."
          ]
        },
        {
          "title": "2. Working and Engineering Benefits",
          "content": [
            "Centralized Window Coordination: When underlying data changes, the View Handler iterates over all registered views and updates them simultaneously.",
            "Decouples Windows from One Another: Individual window classes know nothing about other open windows; all coordination is handled exclusively by the View Handler."
          ]
        }
      ]
    },
    {
      "id": "oomd-u6-q7",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 7,
      "title": "Explain the Counted Pointer Idiom and Memory Management in Detail.",
      "shortTitle": "Counted Pointer Idiom",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q8(a)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q8(c)", "marks": 8 }
      ],
      "syllabusTopics": [
        "Idioms and Style",
        "Counted Pointer Example",
        "Reference Counting"
      ],
      "definition": "The Counted Pointer Idiom is a low-level C++ programming idiom that automates dynamic heap memory management using reference counting, deleting an allocated object automatically when the last pointer referencing it is destroyed.",
      "sections": [
        {
          "title": "1. Structure of the Counted Pointer Idiom",
          "content": [
            "Body (Target Object): The actual heap object holding data. It maintains an internal reference counter (e.g., refCount = 1).",
            "Handle (Smart Pointer): A wrapper object allocated on the stack that overloads pointer operators (operator->, operator*). When a Handle is copied, it increments refCount. When a Handle goes out of scope, its destructor decrements refCount.",
            "Automatic Destruction: When refCount drops to zero, the handle destructor automatically calls 'delete body', reclaiming memory with zero developer intervention."
          ]
        },
        {
          "title": "2. Advantages of Counted Pointer",
          "content": [
            "1. Eliminates Memory Leaks: Automates deallocation without requiring an expensive garbage collection runtime.",
            "2. Prevents Dangling Pointers: Guarantees that the underlying heap memory is never deallocated while any valid handle still references it."
          ]
        }
      ]
    },
    {
      "id": "oomd-u6-q8",
      "unitId": "unit-6",
      "subjectId": "oomd",
      "qNumber": 8,
      "title": "Define Idioms. What Can Idioms Provide? Compare Design Patterns vs Programming Idioms.",
      "shortTitle": "Idioms vs Design Patterns",
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
        "What Idioms Provide",
        "Patterns vs Idioms Comparison"
      ],
      "definition": "An Idiom is a low-level, language-specific pattern that describes how to implement particular aspects of components or relationships using the unique features and idioms of a specific programming language.",
      "comparisonTable": {
        "headers": ["Comparison Dimension", "Design Pattern", "Programming Idiom"],
        "rows": [
          ["Level of Abstraction", "Medium to high level: Architectural arrangement of classes, roles, and relationships.", "Low level: Close to syntax, memory management, and compiler idioms."],
          ["Language Portability", "Language-independent: Can be implemented identically in C++, Java, C#, Python.", "Language-specific: Relies on unique language features (e.g., RAII in C++, decorators in Python)."],
          ["Scope of Problem", "Solves recurring software design and subsystem communication problems.", "Solves coding and implementation issues (resource cleanup, pointer safety, operator overloading)."],
          ["Examples", "Strategy, Observer, Factory Method, Client-Dispatcher-Server.", "Counted Pointer, Resource Acquisition Is Initialization (RAII), Copy-and-Swap."]
        ]
      },
      "sections": [
        {
          "title": "1. What Can Idioms Provide?",
          "content": [
            "1. Consistent Coding Style: Standardizes language idioms across large engineering teams.",
            "2. Robust Resource Management: Automatically prevents memory leaks, dangling pointers, and unreleased file descriptors.",
            "3. Idiomatic Optimization: Exploits compiler optimizations and hardware features specific to the target programming language."
          ]
        }
      ]
    }
  ]
};
"""

with open('src/data/subjects/oomd/unit-6.ts', 'w', encoding='utf-8') as f:
    f.write(unit6_content)

print("Generated src/data/subjects/oomd/unit-6.ts successfully.")
