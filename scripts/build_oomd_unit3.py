import json

unit3_content = """import { Unit } from '@/types';

export const unit3Data: Unit = {
  "id": "unit-3",
  "unitNumber": 3,
  "title": "Unit III: Advanced State Modeling & Interaction Modeling",
  "shortTitle": "State & Interaction Modeling",
  "description": "In-depth study of Advanced State Modeling (Nested States, Signal Generalization, Concurrency, Orthogonal Regions, State vs Class Models) and Interaction Modeling (Use Case Diagrams, Actors, <<include>>/<<extend>>, Sequence Diagrams, Lifelines, Activation Boxes, Activity Diagrams, Branches, Merge, Fork/Join, and Swimlanes).",
  "syllabus": [
    "Advanced State Modeling: Nested state diagrams, Nested states, Signal generalization, Concurrency, A sample state model, Relation of class and state models, Practical tips.",
    "Interaction Modeling: Use case models, Sequence models, Activity models, Use case relationships, Procedural sequence models, Special constructs for activity models."
  ],
  "questionPaperIndex": [
    {
      "paper": "May 2024 ([6354]-491)",
      "qMain": "Q1(a) Actor & Use Case Relationships (5M), Q1(b) Cash Dispenser State Diagram (5M), Q1(c) Two-Wheeler Activity Diagram (8M)",
      "qOr": "Q2(a) Buying Beverage Use Case (5M), Q2(b) Rent-a-Car Sequence Diagram (5M), Q2(c) Telephone Line State Diagram (8M)"
    },
    {
      "paper": "May 2024 ([6263]-87)",
      "qMain": "Q1(a) Use Case & Relationships (5M), Q1(b) Sequence Model (5M), Q1(c) ATM Use Case Diagram (8M)",
      "qOr": "Q2(a) Class vs State Model (5M), Q2(b) Online Reservation Use Case (5M), Q2(c) ATM Scenario Activities (8M)"
    },
    {
      "paper": "Nov 2023 ([6181]-107)",
      "qMain": "Q1(a) Class & State Model Relationship (5M), Q1(b) Online Shopping Sequence Diagram (5M), Q1(c) Email Login Activity Diagram (8M)",
      "qOr": "Q2(a) Composite States Categories (5M), Q2(b) Hospital Management Activity Diagram (5M), Q2(c) Use Case Terms & Notations (8M)"
    },
    {
      "paper": "April 2023 ([6004]-486)",
      "qMain": "Q1(a) Composite States (6M), Q1(b) Use Case Model Terms (6M), Q1(c) ATM Machine Use Case (6M)",
      "qOr": "Q2(a) ATM Activities (6M), Q2(b) Sequence Diagram Components (6M), Q2(c) ATM Sequence Diagram (6M)"
    },
    {
      "paper": "Oct 2022 ([5927]-348)",
      "qMain": "Q1(a) Sequence Diagram Components (6M), Q1(b) Sequence vs Activity Diagram (6M), Q1(c) Online Reservation Use Case (6M)",
      "qOr": "Q2(a) Composite States (6M), Q2(b) Use Case Terms (6M), Q2(c) ATM Activity Diagram (6M)"
    }
  ],
  "quickRevision": {
    "keyDefinitions": [
      {
        "term": "Nested State",
        "definition": "A state that contains a sub-state machine inside it. A high-level superstate encapsulates fine-grained sub-states to eliminate transition clutter."
      },
      {
        "term": "Concurrency in States",
        "definition": "The ability of an object or system to exist in two or more independent sub-states simultaneously, separated into orthogonal regions via dashed lines."
      },
      {
        "term": "Use Case",
        "definition": "A coherent unit of observable functionality provided by a system to an actor to achieve a specific business goal."
      },
      {
        "term": "Sequence Diagram",
        "definition": "An interaction diagram that emphasizes the chronological time-ordering of messages passed between object lifelines."
      },
      {
        "term": "Activity Diagram",
        "definition": "A behavioral diagram showing the step-by-step workflow of activities, actions, decision points, concurrent branches (fork/join), and object tokens."
      }
    ]
  },
  "questions": [
    {
      "id": "oomd-u3-q1",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 1,
      "title": "What is an Actor, a Use Case, and a Use Case Diagram? Explain Various Relationships in a Use Case Diagram with Examples.",
      "shortTitle": "Actors, Use Cases & Relationships",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 5,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q1(a)", "marks": 5 },
        { "paper": "May 2024", "questionNo": "Q1(a)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q2(c)", "marks": 8 },
        { "paper": "April 2023", "questionNo": "Q1(b)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q2(b)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Use Case Models",
        "Actors & Use Cases",
        "Use Case Relationships"
      ],
      "definition": "A Use Case Diagram is a behavioral UML diagram that models the dynamic requirements of a system by showing the interactions between external users (Actors) and the services or actions (Use Cases) provided by the system within a defined System Boundary.",
      "sections": [
        {
          "title": "1. Fundamental Components and Notations",
          "content": [
            "Actor: An external entity that interacts with the system to initiate or receive value from a use case. Represented visually as a stick figure. Actors can be human users (e.g., Customer, Bank Manager) or automated external systems (e.g., Payment Gateway, Central Database).",
            "Use Case: A specific sequence of actions and transactions that a system performs to yield an observable result of value to an actor. Represented as an ellipse containing the action name (verb + noun phrase, e.g., 'Withdraw Cash').",
            "System Boundary: A rectangular box drawn around the use cases that delimits what is internal to the application versus what remains external (actors remain strictly outside the boundary box)."
          ]
        },
        {
          "title": "2. Relationships in Use Case Diagrams",
          "content": [
            "Association Relationship: A solid line connecting an Actor to a Use Case, denoting two-way communication between the actor and the system during the execution of that service.",
            "Include Relationship (<<include>>): A directed dashed line with an open arrowhead pointing from a base use case to an included use case. It denotes a mandatory sub-routine that is always executed whenever the base use case runs. Example: 'Withdraw Cash' and 'Check Balance' both <<include>> 'Authenticate PIN'.",
            "Extend Relationship (<<extend>>): A directed dashed line with an open arrowhead pointing from an extension use case to the base use case. It represents optional, conditional, or exceptional behavior executed only when an extension point condition is met. Example: 'Print Receipt' <<extend>> 'Withdraw Cash' only when paper is available and customer explicitly requests it.",
            "Generalization Relationship: A solid line with a hollow triangular arrowhead pointing from a specialized actor or use case to a generalized one. Example: 'Customer' can be specialized into 'Individual Customer' and 'Corporate Customer'; 'Pay for Product' generalizes 'Pay by Card' and 'Pay by Cash'."
          ]
        }
      ]
    },
    {
      "id": "oomd-u3-q2",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 2,
      "title": "Draw and Explain the Use Case Diagram for an Automated Teller Machine (ATM) System in Detail.",
      "shortTitle": "ATM System Use Case Diagram",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 4,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q1(c)", "marks": 8 },
        { "paper": "April 2023", "questionNo": "Q1(c)", "marks": 6 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q1(c)", "marks": 8 },
        { "paper": "Oct 2022", "questionNo": "Q1(c)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Use Case Models",
        "ATM System Case Study",
        "Include and Extend Relationships"
      ],
      "definition": "The ATM Use Case Diagram models the functional boundary of an automated teller machine, detailing how primary actors (Bank Customers) and secondary backend systems (Central Bank Host) interact to execute financial transactions under strict authentication boundaries.",
      "diagrams": [
        {
          "id": "diag-oomd-atm-usecase",
          "title": "ATM System Use Case Diagram",
          "caption": "Complete UML Use Case Diagram illustrating Customer and Bank Host actors with core financial services, <<include>> PIN validation, and <<extend>> receipt printing.",
          "type": "svg-interactive",
          "svgType": "oomd-atm-usecase"
        }
      ],
      "sections": [
        {
          "title": "1. Actors Involved in the ATM Architecture",
          "content": [
            "Customer (Primary Actor): The human account holder initiating operations via the physical ATM card and numeric keypad.",
            "Bank Host System (Secondary Actor): The central banking server that verifies account balances, processes ledger updates, and grants transaction approvals over secure WAN."
          ]
        },
        {
          "title": "2. Primary Use Cases and Scenarios",
          "content": [
            "Withdraw Cash: Customer inserts card, enters valid PIN, selects savings/current account, specifies amount, and collects dispensed banknotes and updated ledger.",
            "Check Balance: Customer requests current ledger and available balance without dispensing physical cash.",
            "Transfer Funds: Customer selects beneficiary account, enters transfer amount, and routes fund debiting through central host verification.",
            "Deposit Cash: Customer places currency notes into envelope or automated deposit slot, verified and credited by bank host."
          ]
        },
        {
          "title": "3. Dependency Relationships",
          "content": [
            "Mandatory <<include>>: 'Authenticate PIN' is factored out as a reusable prerequisite. 'Withdraw Cash', 'Check Balance', and 'Transfer Funds' all <<include>> 'Authenticate PIN' to guarantee security.",
            "Optional <<extend>>: 'Print Receipt' extends 'Withdraw Cash'. It is triggered only at the post-dispense extension point if the customer opts for a physical statement."
          ]
        }
      ]
    },
    {
      "id": "oomd-u3-q3",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 3,
      "title": "Explain Nested States and State Generalization with an Appropriate Diagram.",
      "shortTitle": "Nested States & State Generalization",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q1(b)", "marks": 5 },
        { "paper": "April 2023", "questionNo": "Q1(a)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q2(a)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Advanced State Modeling",
        "Nested States & Superstates",
        "State Generalization"
      ],
      "definition": "A Nested State is a sub-state that exists inside a higher-level composite state (Superstate). State generalization allows common transitions and behaviors across several sub-states to be shared and handled at the superstate level, eliminating transition clutter.",
      "diagrams": [
        {
          "id": "diag-oomd-atm-nested-state",
          "title": "ATM Machine Nested State Diagram (Fig. 3.1.1)",
          "caption": "Textbook Fig. 3.1.1: Active superstate encapsulating sequential sub-states (Display, Reading card, Requesting PIN, Validating PIN, Performing transaction).",
          "type": "svg-interactive",
          "svgType": "oomd-atm-nested-state"
        }
      ],
      "sections": [
        {
          "title": "1. Structure of Nested States (Fig. 3.1.1 ATM Machine)",
          "content": [
            "Superstate (Active): A high-level state enclosing a complete sub-state machine. When the ATM receives the 'Perform startup' event from 'Idle', control transitions into the 'Active' superstate.",
            "Sequential Sub-States: Inside Active, the system begins at the initial node and transitions sequentially: Display -> Reading Card (on insert card) -> Requesting PIN (on complete) -> Validating PIN (on PIN entered) -> Performing Transaction (on PIN verified) -> Display (on transaction complete).",
            "Group Transition Elimination: If an emergency shutdown occurs ('Perform shutdown'), a single transition arrow originates from the boundary of the 'Active' superstate to 'Idle'. Without nested states, 5 separate identical transitions would be required from each individual sub-state."
          ]
        },
        {
          "title": "2. State Generalization Principles",
          "content": [
            "Sub-states inherit all attributes, variables, and outgoing transitions defined on their enclosing superstate.",
            "Sub-states can override superstate transitions or add specialized inner behaviors without breaking parent semantics.",
            "Deep history vs Shallow history states allow a composite state to resume directly at the last active sub-state upon re-entry."
          ]
        }
      ]
    },
    {
      "id": "oomd-u3-q4",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 4,
      "title": "Draw the State Diagram for a Telephone Line Connection. Explain Events, States, and Transitions in the Diagram.",
      "shortTitle": "Telephone Connection State Diagram",
      "marks": 8,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q2(c)", "marks": 8 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q2(c)", "marks": 8 }
      ],
      "syllabusTopics": [
        "Advanced State Modeling",
        "Telephone Connection Case Study",
        "Events, States and Transitions"
      ],
      "definition": "A State Machine Diagram models the lifecycle of a telephone line object as it responds to asynchronous caller events, external exchange signals, and callee receiver actions across discrete physical states.",
      "diagrams": [
        {
          "id": "diag-oomd-telephone-state",
          "title": "Telephone Line Connection State Diagram",
          "caption": "Sequential states from Idle to Connected conversation, illustrating events (off-hook, dial, hang-up), guard conditions ([callee free], [busy]), and action sequences.",
          "type": "svg-interactive",
          "svgType": "oomd-telephone-state"
        }
      ],
      "sections": [
        {
          "title": "1. Explanation of States, Events, and Transitions",
          "content": [
            "State: A condition or situation during the life of an object where it satisfies some condition, performs an ongoing activity, or waits for an event. Examples: Idle (On-Hook), Dial Tone, Dialing Digits, Connecting, Ringing, Busy Tone, Connected (Talking).",
            "Event: A notable occurrence at a specific point in time that triggers a state transition. Examples: Caller lifts handset (off-hook), caller dials digit (dial(n)), callee answers, caller replaces receiver (on-hook).",
            "Transition: A relationship between two states indicating that an object in the first state will enter the second state when a specified event occurs and specified guard conditions are satisfied."
          ]
        },
        {
          "title": "2. Step-by-Step Lifecycle Walkthrough",
          "content": [
            "Step 1: Idle (On-Hook) -> Off-hook event occurs -> Transitions to Dial Tone state (exchange plays continuous tone).",
            "Step 2: Dial Tone -> Caller presses first digit -> Transitions to Dialing Digits state (dial tone ceases).",
            "Step 3: Dialing Digits -> Self-loop dial(digit) until 10 digits are received -> Exchange enters Connecting state.",
            "Step 4: Connecting -> Exchange tests callee line availability. If [callee line free], transitions to Ringing state. If [callee line busy], transitions to Busy Tone state.",
            "Step 5: Ringing -> Callee lifts handset (answers) -> Enters Connected (Conversation) state (bilateral voice path established).",
            "Step 6: Reset: Replacing handset (on-hook event) from any active state immediately terminates communication and resets line back to Idle."
          ]
        }
      ]
    },
    {
      "id": "oomd-u3-q5",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 5,
      "title": "What are Composite States? Explain the Categories of Composite States in Detail.",
      "shortTitle": "Composite States & Categories",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "Nov 2023", "questionNo": "Q2(a)", "marks": 5 },
        { "paper": "April 2023", "questionNo": "Q1(a)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q2(a)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Advanced State Modeling",
        "Composite States",
        "Sequential vs Concurrent Sub-States"
      ],
      "definition": "A Composite State is a state that contains one or more sub-state machines. It enables hierarchical decomposition of complex object behavior into manageable abstraction levels.",
      "sections": [
        {
          "title": "1. Categories of Composite States",
          "content": [
            "Category 1: Sequential Composite States (OR-States / Disjoint Sub-States): In an OR-state, the object can be in exactly ONE sub-state at any given time. Transitions between sub-states occur sequentially upon event arrival. Example: In an ATM 'Active' state, the machine is either in 'Reading Card' OR 'Validating PIN' OR 'Performing Transaction', but never two of them simultaneously.",
            "Category 2: Concurrent Composite States (AND-States / Orthogonal Regions): In an AND-state, the composite state is partitioned into two or more orthogonal regions separated by dashed dividing lines. When the composite state is active, the object exists in one sub-state from EACH orthogonal region simultaneously. Example: In a document handler system, the 'DocHandling' composite state concurrently handles 'Printing' (Printing Devices -> Printing on Paper) and 'Displaying' (Display -> Scrolling)."
          ]
        },
        {
          "title": "2. Advantages of Composite States",
          "content": [
            "Reduces Visual Clutter: Common outgoing transitions (e.g., abort, timeout, power failure) are attached once to the enclosing superstate rather than duplicated across 20 sub-states.",
            "Supports Abstraction: Allows designers to reason about the system at high levels without being overwhelmed by low-level implementation sub-flows.",
            "Enables Concurrency Modeling: Explicitly models independent hardware controllers running in parallel within a single physical unit."
          ]
        }
      ]
    },
    {
      "id": "oomd-u3-q6",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 6,
      "title": "Explain the Relationship Between the Class Model and the State Model.",
      "shortTitle": "Class Model vs State Model Relationship",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q2(a)", "marks": 5 },
        { "paper": "Nov 2023", "questionNo": "Q1(a)", "marks": 5 },
        { "paper": "May 2024 (PD4582)", "questionNo": "Q2(a)", "marks": 5 }
      ],
      "syllabusTopics": [
        "Advanced State Modeling",
        "Relation of Class and State Models"
      ],
      "definition": "The Class Model describes the static structural architecture of a system (classes, attributes, operations, and associations), whereas the State Model describes the dynamic behavioral lifecycle over time (states, events, and state transitions of objects).",
      "sections": [
        {
          "title": "1. Direct Interrelationships",
          "content": [
            "Objects as State Machine Instances: A state model does not exist in isolation; every state diagram describes the lifecycle of instances of a specific Class in the class model. Passive data classes (e.g., Address, Date) rarely need state diagrams, while active control classes (e.g., ATMController, PhoneLine) possess rich state models.",
            "Events Map to Class Operations: External events that trigger transitions in the state model correspond directly to public operations and member functions declared on that class in the class model.",
            "State Variables Map to Class Attributes: The current state of an object is determined by the discrete values stored in its class attributes (e.g., accountStatus = 'ACTIVE' | 'SUSPENDED' | 'CLOSED').",
            "Actions Map to Operation Executions: Entry actions, exit actions, and transition activities in the state model represent the execution of internal methods defined within the class or its associated collaborator classes."
          ]
        },
        {
          "title": "2. Structural Differences",
          "content": [
            "Class models capture what the system consists of (static nouns: CardReader, CashDispenser, BankAccount).",
            "State models capture when and how things change in response to stimuli (dynamic verbs and conditions: CardInserted, PinVerified, CashDispensed)."
          ]
        }
      ]
    },
    {
      "id": "oomd-u3-q7",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 7,
      "title": "Model a Sequence Diagram for 'Rent a Car' in an Online Web-Based Car Rental Application.",
      "shortTitle": "Rent a Car Sequence Diagram",
      "marks": 5,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q2(b)", "marks": 5 },
        { "paper": "April 2023", "questionNo": "Q2(b)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Interaction Modeling",
        "Sequence Models",
        "Car Rental Case Study"
      ],
      "definition": "A Sequence Diagram for 'Rent a Car' illustrates the chronological message exchange between the customer, web interface, car inventory controller, database, and booking service to reserve a vehicle.",
      "diagrams": [
        {
          "id": "diag-oomd-car-rental-sequence",
          "title": "Rent a Car Sequence Diagram",
          "caption": "Complete lifeline interaction: Customer -> WebUI -> CarController -> CarDatabase -> BookingService with synchronous messages and asynchronous confirmation.",
          "type": "svg-interactive",
          "svgType": "oomd-car-rental-sequence"
        }
      ],
      "sections": [
        {
          "title": "1. Participating Lifelines",
          "content": [
            ":Customer: The user initiating vehicle selection and submitting rental dates.",
            ":WebUI: The browser interface receiving user clicks and rendering catalog responses.",
            ":CarController: The application controller handling rental workflows, business logic, and session tokens.",
            ":CarDatabase: The persistent data store containing vehicle fleet records, rental rates, and current availability flags.",
            ":BookingService: The transaction engine that locks vehicle inventory, charges payment, and generates electronic rental receipts."
          ]
        },
        {
          "title": "2. Chronological Message Flow",
          "content": [
            "Step 1: Customer invokes selectCarType(Family/Sports) on WebUI.",
            "Step 2: WebUI forwards getAvailableCars(type) to CarController.",
            "Step 3: CarController queries CarDatabase via findByCarType(type).",
            "Step 4: CarDatabase returns carListAndRates to CarController.",
            "Step 5: CarController transmits displayCarOptions() back to WebUI for user view.",
            "Step 6: Customer reviews rates and executes confirmBooking(carId, rentalDates).",
            "Step 7: WebUI invokes processRentalBooking() on BookingService.",
            "Step 8: BookingService commits saveBookingRecord() into CarDatabase.",
            "Step 9: BookingService emits bookingConfirmed(token) to WebUI.",
            "Step 10: WebUI renders issueElectronicConfirmation() receipt on customer screen."
          ]
        }
      ]
    },
    {
      "id": "oomd-u3-q8",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 8,
      "title": "Draw an Activity Diagram for Describing How Selling a Two-Wheeler to a Customer Takes Place at a Dealer's Place.",
      "shortTitle": "Two-Wheeler Sale Activity Diagram",
      "marks": 8,
      "importance": "Important",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q1(c)", "marks": 8 },
        { "paper": "Nov 2023", "questionNo": "Q1(c)", "marks": 8 }
      ],
      "syllabusTopics": [
        "Interaction Modeling",
        "Activity Models",
        "Swimlane Partitions"
      ],
      "definition": "An Activity Diagram for selling a two-wheeler models the parallel and sequential workflows between the customer, the sales consultant, and the dealership billing/inventory departments using partitioned swimlanes.",
      "diagrams": [
        {
          "id": "diag-oomd-two-wheeler-activity",
          "title": "Two-Wheeler Sale Dealership Activity Diagram",
          "caption": "Swimlane activity workflow partitioning actions across Customer Lane, Salesperson Lane, and Billing & Delivery Lane, with decision branches for accessory add-ons.",
          "type": "svg-interactive",
          "svgType": "oomd-two-wheeler-activity"
        }
      ],
      "sections": [
        {
          "title": "1. Explanation of Swimlanes and Notations",
          "content": [
            "Customer Lane: Represents human customer responsibilities (inquiring about available models, selecting vehicle model, choosing accessories).",
            "Salesperson Lane: Represents dealership sales personnel actions (guiding the customer, showing showroom display vehicles, calculating price quotation).",
            "Billing & Delivery Lane: Represents financial and warehouse operations (collecting payment, issuing registration papers, vehicle handover).",
            "Decision Diamond: A diamond shaped node with guard conditions [Yes] and [No] used to represent whether the customer opts for optional accessory packages (e.g., crash guards, seat covers).",
            "Merge Diamond: Recombines alternate decision paths into a unified control stream before proceeding to quotation generation."
          ]
        },
        {
          "title": "2. Process Execution Flow",
          "content": [
            "Step 1 (Start Node): Customer visits showroom and initiates 'Enquire Models'.",
            "Step 2 (Salesperson): Assigned salesperson triggers 'Show Vehicles' and presents technical specifications.",
            "Step 3 (Customer): Customer decides on specific vehicle via 'Choose Model'.",
            "Step 4 (Branching): System evaluates accessory requirements. If [Yes], customer performs 'Add Accessories'. If [No], control bypasses accessory selection directly to merge diamond.",
            "Step 5 (Salesperson): Salesperson compiles combined price via 'Provide Quotation'.",
            "Step 6 (Billing & Delivery): Customer settles invoice and inventory staff performs 'Payment & Delivery'.",
            "Step 7 (Final Node): Transaction completes and customer departs with the vehicle."
          ]
        }
      ]
    },
    {
      "id": "oomd-u3-q9",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 9,
      "title": "What is an Activity? Explain Activities Involved in an ATM System Scenario.",
      "shortTitle": "Activities in ATM Scenario",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 3,
      "papersAsked": [
        { "paper": "May 2024", "questionNo": "Q2(c)", "marks": 8 },
        { "paper": "April 2023", "questionNo": "Q2(a)", "marks": 6 },
        { "paper": "Oct 2022", "questionNo": "Q2(c)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Interaction Modeling",
        "Activity Models",
        "ATM Activities"
      ],
      "definition": "In UML modeling, an Activity represents an ongoing non-atomic execution of a computation or business workflow within a state machine or process. Unlike instantaneous actions, activities take measurable time and can be decomposed into smaller constituent actions.",
      "sections": [
        {
          "title": "1. Definition and Characteristics of an Activity",
          "content": [
            "Execution Over Time: An activity represents work that continues until it either completes normally or is interrupted by an asynchronous event.",
            "Decomposability: A high-level activity (e.g., 'Dispense Cash') can be broken down into lower-level operations (e.g., count notes, open shutter, verify optical sensor).",
            "Representation: Drawn as a rounded rectangle with activity name centered inside."
          ]
        },
        {
          "title": "2. Five Key Activities in the ATM System Scenario",
          "content": [
            "Activity 1 - Read Card Data: Optical and magnetic reading of user account credentials from the smart chip or magnetic stripe.",
            "Activity 2 - Verify PIN: Accepting four digits from encrypted keypad, hashing the input, and transmitting to bank host for credential verification.",
            "Activity 3 - Process Transaction: Evaluating account balance against requested withdrawal sum and updating backend ledger balances.",
            "Activity 4 - Dispense Cash: Activating motorized bill counting mechanisms and opening the physical cash dispensing shutter.",
            "Activity 5 - Print Receipt & Eject Card: Printing transaction summary on thermal paper and unlocking the mechanical card retention latch."
          ]
        }
      ]
    },
    {
      "id": "oomd-u3-q10",
      "unitId": "unit-3",
      "subjectId": "oomd",
      "qNumber": 10,
      "title": "Differentiate Between a Sequence Diagram and an Activity Diagram.",
      "shortTitle": "Sequence vs Activity Diagram",
      "marks": 6,
      "importance": "Frequently Asked",
      "occurrenceCount": 2,
      "papersAsked": [
        { "paper": "Oct 2022", "questionNo": "Q1(b)", "marks": 6 },
        { "paper": "April 2023", "questionNo": "Q2(b)", "marks": 6 }
      ],
      "syllabusTopics": [
        "Interaction Modeling",
        "Comparison of UML Diagrams"
      ],
      "definition": "Sequence Diagrams and Activity Diagrams are both dynamic UML models, but Sequence Diagrams emphasize time-ordered message exchange between explicit object lifelines, while Activity Diagrams emphasize procedural workflow, computational steps, and object token flow.",
      "comparisonTable": {
        "headers": ["Feature / Aspect", "Sequence Diagram", "Activity Diagram"],
        "rows": [
          ["Primary Focus", "Chronological time sequence of message passing between collaborating objects.", "Step-by-step procedural flow of control and computation across activities."],
          ["Structural Element", "Lifelines (vertical dashed lines) and Activation boxes representing object instances.", "Rounded action boxes, control flow edges, decision diamonds, and merge nodes."],
          ["Object Visibility", "Explicit: Object instances and actors appear horizontally across top headers.", "Implicit or grouped: Objects appear as data tokens or through swimlanes."],
          ["Time Representation", "Linear progression flowing strictly from top to bottom.", "Flow of control denoted by directed edge arrows (can loop, branch, or merge)."],
          ["Concurrency Representation", "Asynchronous messages, parallel activations, or 'par' interaction frames.", "Heavy solid synchronization bars (Fork and Join) splitting and joining concurrent threads."],
          ["Partitioning Technique", "Interaction fragments (alt, opt, loop, break frames).", "Swimlanes (vertical or horizontal partitions by organizational role or system module)."],
          ["Best Suited For", "Realizing specific use case scenarios and designing inter-class method APIs.", "Modeling business workflows, complex algorithms, and parallel manufacturing pipelines."]
        ]
      },
      "sections": []
    }
  ]
};
"""

with open('src/data/subjects/oomd/unit-3.ts', 'w', encoding='utf-8') as f:
    f.write(unit3_content)

print("Generated src/data/subjects/oomd/unit-3.ts successfully.")
