import { Subject } from '@/types';

export const oomdMetadata: Omit<Subject, 'units'> = {
  id: 'oomd',
  code: '410244D',
  name: 'Object Oriented Modeling and Design',
  semester: 'Semester VII',
  department: 'Computer Engineering',
  description: 'Comprehensive university examination question bank and structured technical notes covering Advanced State Modeling, Interaction Modeling (Use Cases, Sequence & Activity Diagrams), System Design & Subsystems, Software Control Strategies, Class Design, Implementation Modeling, Legacy Systems & Reverse Engineering, and Design Patterns.',
  iconName: 'Box',
  accentColor: 'indigo',
  syllabusOverview: [
    'Unit 3: Advanced State Modeling & Interaction Modeling (Nested State Diagrams, Signal Generalization, Concurrency, State vs Class Models, Use Case Modeling, Sequence Models, Activity Models, Branches & Concurrent Activities)',
    'Unit 4: User Application Analysis & System Design (Application Interaction, Class & State Models, Performance Estimation, Reuse Plans, Subsystem Decomposition: Layers & Partitions, Concurrency & Processor Allocation, Data Storage Management, Global Resource Handling, Control Strategies, Architectural Styles, ATM Distributed Architecture)',
    'Unit 5: Class Design, Implementation Modeling & Legacy Systems (Bridging the Gap, Realizing Use Cases, Algorithm Design, Recursing Downward, Refactoring & Reification, Design Optimization, Adjustment of Inheritance, Delegation, ATM Class Model, Implementation Modeling, Legacy Systems, Reverse Engineering, Wrapping, Maintenance)',
    'Unit 6: Design Patterns (Design Pattern Essentials, Creational, Structural & Behavioral Patterns, Strategy, Observer, State, Adapter, Architectural Patterns: Client-Dispatcher-Server, Publisher-Subscriber, View Handler, Idioms & Style: Counted Pointer)'
  ]
};
