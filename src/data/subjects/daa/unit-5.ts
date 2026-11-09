import { Unit } from '@/types';

export const daaUnit5Data: Unit = {
  id: 'unit-5',
  unitNumber: 5,
  title: 'Amortized Analysis, Computational Complexity and Approximation Algorithms',
  shortTitle: 'Amortized, Complexity & Approximation',
  description: 'Comprehensive study of Amortized Analysis (Aggregate, Accounting/Credit, and Potential Function methods for Stack operations and Binary Counters), Time-Space Tradeoffs, Computational Complexity Classes (P, NP, NP-Complete, NP-Hard, Cook’s Theorem), Randomized Algorithms (Las Vegas vs Monte Carlo, Randomized QuickSort), Approximation Algorithms (Approximation Ratio, Metric TSP 2-Approximation), and Embedded Systems Algorithms (Real-time task scheduling, in-place adaptive sorting for vital signs sensor streams).',
  syllabus: [
    'Amortized Analysis Fundamentals: Definition, Average-Case vs Amortized, Guarantees over Worst-Case Sequences',
    'Aggregate Analysis: Total Sequence Cost T(n), Stack MULTIPOP O(1) Bound, k-bit Binary Counter Increment',
    'Accounting (Credit) Method: Amortized Charge Assignment, Credit Deposit and Consumption, Stack and Counter Analysis',
    'Potential Function Method: Potential Energy Φ(D), Amortized Cost c^ = c + ΔΦ, Proof of Non-Negative Potential',
    'Time-Space Tradeoff: Principles, Input Enhancement, Prestructuring (Indexing, Hashing, B-trees), Dynamic Programming Tables',
    'Introduction to Tractable and Intractable Problems: Solvability in Polynomial Time vs Exponential Hardness',
    'Complexity Classes: Formal Definitions of P, NP, NP-Complete, and NP-Hard, Reducibility, Cook-Levin Theorem',
    'Critical Problem Analyses: 0/1 Knapsack (NP-hard), Boolean SAT (NP-complete), Minimum Spanning Tree (Tractable)',
    'Randomized Algorithms: Principles, Random Variables, Binomial Distributions, Las Vegas vs Monte Carlo Paradigms',
    'Randomized QuickSort: RANDOMIZED-PARTITION, Worst-Case Avoidance, Expected O(n log n) Complexity Derivation',
    'Approximation Algorithms: Philosophy for NP-Hard Problems, Accuracy Ratio r(s_a), Performance Ratio R_A, Classification',
    'Approximation for Traveling Salesperson Problem (TSP): Nearest-Neighbor Heuristic, Twice-Around-the-Tree 2-Approximation',
    'Embedded Systems Algorithms: Architectural Constraints (ROM, RAM, Microcontroller), Task Scheduling (Fixed vs Dynamic Priority)',
    'Embedded Systems Case Study: Sorting Real-Time Sensor Stream (Patient Vital Signs) — In-Depth Justification for Insertion Sort'
  ],
  questionPaperIndex: [
    {
      paper: 'Paper 1 ([6004]-480A)',
      qMain: 'Q5(a) Amortized Analysis: Aggregate & Potential Function Methods for Stack Operations (9M), Q5(b) Potential Method: Find Amortized Cost of PUSH, POP, MULTIPOP (9M)',
      qOr: 'Q6(a) Short Notes: Aggregate, Accounting, Potential Method, Tractable/Intractable Problems (10M), Q6(b) Short Notes with Examples: Randomized Algorithm, Approximation Algorithm (8M)'
    },
    {
      paper: 'Paper 2 ([6263]-81)',
      qMain: 'Q5(a) Randomized Algorithms: Definition & Primary Reasons for Use (8M), Q5(b) Approximation Algorithms: Definition & Classification based on Ratio (9M)',
      qOr: 'Q6(a) Methods of Amortized Analysis with Suitable Example (8M), Q6(b) Embedded System Case Study: Sorting Medical Patient Vital Signs Real-Time Sensor Stream (9M)'
    },
    {
      paper: 'Paper 3 ([6181]-101)',
      qMain: 'Q5(a) Amortized Analysis & Aggregate Method with Example (9M), Q5(b) Potential Function Method for PUSH, POP, MULTIPOP (9M)',
      qOr: 'Q6(a) Embedded Algorithms Special Needs & Best Sorting Algorithm (6M), Q6(b) Explain Randomized & Approximate Algorithms (4M), Q6(c) Randomized Algorithm: Random Variable, Binomial & Math (8M)'
    },
    {
      paper: 'Paper 4 ([6354]-485)',
      qMain: 'Q5(a) Advantages & Disadvantages of Aggregate Analysis vs Accounting Method (8M), Q5(b) Approximation Algorithms & Classification by Approximation Ratio (9M)',
      qOr: 'Q6(a) Potential Function Method for Binary Counter Analysis (8M), Q6(b) Comment on: Knapsack is NP-hard, SAT is NP-complete, MST is Tractable (9M)'
    }
  ],
  quickRevision: {
    keyDefinitions: [
      {
        term: 'Amortized Analysis',
        definition: 'An analytical technique that computes the average running time per operation over an entire worst-case sequence of n operations, guaranteeing average performance without requiring probabilistic assumptions.'
      },
      {
        term: 'Aggregate Analysis',
        definition: 'A method where an upper bound T(n) is established on the total cost of any sequence of n operations, yielding an amortized cost per operation of T(n) / n.'
      },
      {
        term: 'Accounting Method',
        definition: 'A method where operations are assigned amortized charges; operations charged more than actual cost deposit credit, which pays for expensive operations later. Total accumulated credit must always remain non-negative.'
      },
      {
        term: 'Potential Function Method',
        definition: 'A method that maps data structure state D_i to a real number potential energy Φ(D_i). The amortized cost of the i-th operation is c^_i = c_i + Φ(D_i) - Φ(D_{i-1}). Total amortized cost bounds total actual cost if Φ(D_n) ≥ Φ(D_0).'
      },
      {
        term: 'Class P',
        definition: 'The class of all decision problems that can be solved in polynomial time O(n^k) by a deterministic Turing machine.'
      },
      {
        term: 'Class NP',
        definition: 'The class of all decision problems for which a candidate solution (certificate) can be verified in polynomial time by a deterministic Turing machine (or solved in poly-time by a non-deterministic Turing machine).'
      },
      {
        term: 'NP-Complete',
        definition: 'The hardest problems in NP: a problem X is NP-complete if X ∈ NP and every problem Y ∈ NP is polynomial-time reducible to X (Y ≤_P X).'
      },
      {
        term: 'Las Vegas Algorithm',
        definition: 'A randomized algorithm that always produces the strictly correct output, but whose execution time is a random variable (e.g. Randomized QuickSort).'
      },
      {
        term: 'Monte Carlo Algorithm',
        definition: 'A randomized algorithm that runs in fixed deterministic time, but whose output has a small probability of error bounded by ε (e.g. Miller-Rabin Primality Test).'
      },
      {
        term: 'Approximation Ratio',
        definition: 'The factor ρ by which the solution value f(s_a) produced by an approximation algorithm is guaranteed to be within the true optimal value f(s*): max(f(s_a)/f(s*), f(s*)/f(s_a)) ≤ ρ.'
      }
    ],
    coreFormulas: [
      {
        name: 'Aggregate Amortized Cost',
        latex: '\\text{Amortized Cost} = \\frac{T(n)}{n}',
        description: 'Total actual cost T(n) of n operations divided by n.'
      },
      {
        name: 'Accounting Credit Invariant',
        latex: '\\sum_{i=1}^n \\hat{c}_i \\ge \\sum_{i=1}^n c_i \\iff \\text{Total Credit} \\ge 0',
        description: 'Sum of amortized costs must upper-bound sum of actual costs for all sequences.'
      },
      {
        name: 'Potential Function Amortized Cost',
        latex: '\\hat{c}_i = c_i + \\Phi(D_i) - \\Phi(D_{i-1}) = c_i + \\Delta \\Phi_i',
        description: 'Actual cost plus change in potential energy between post-operation and pre-operation states.'
      },
      {
        name: 'Telescoping Potential Sum',
        latex: '\\sum_{i=1}^n \\hat{c}_i = \\sum_{i=1}^n c_i + \\Phi(D_n) - \\Phi(D_0)',
        description: 'Intermediate potential differences cancel out, leaving only boundary states.'
      },
      {
        name: 'Approximation Accuracy Ratio',
        latex: 'r(s_a) = \\frac{f(s_a)}{f(s^*)} \\ge 1 \\quad (\\text{Minimization})',
        description: 'Ratio of heuristic solution cost to optimal solution cost.'
      },
      {
        name: 'Metric TSP 2-Approximation Bound',
        latex: 'c(H) \\le 2 \\cdot c(T_{\\text{MST}}) \\le 2 \\cdot \\text{OPT}',
        description: 'Twice-around-the-tree shortcut tour cost is at most twice the optimal tour cost.'
      }
    ],
    comparisonHighlights: [
      {
        title: 'Amortized Analysis vs Average-Case Analysis',
        summary: 'Average-case assumes an input probability distribution and averages over all inputs. Amortized analysis assumes NO probability distribution and guarantees average per-operation cost over the worst-case sequence.'
      },
      {
        title: 'Aggregate vs Accounting vs Potential Method',
        summary: 'Aggregate computes total sum T(n)/n uniformly; Accounting charges different rates depositing explicit credits; Potential abstracts credit into global system energy Φ(D).'
      },
      {
        title: 'Las Vegas vs Monte Carlo Algorithms',
        summary: 'Las Vegas guarantees 100% correct output with variable runtime; Monte Carlo guarantees fixed runtime with bounded probability of incorrect output.'
      }
    ],
    examTips: [
      'For Stack MULTIPOP, always state that each object pushed onto the stack can be popped at most once, which bounds total POPs to <= total PUSHes <= n.',
      'In Potential method answers, explicitly write the telescoping sum sum(c^i) = sum(ci) + Phi(Dn) - Phi(D0) and state the condition Phi(Di) >= Phi(D0).',
      'When explaining why Knapsack is NP-hard, distinguish between the 0/1 decision version (NP-complete) and optimization version (NP-hard), and note that DP is pseudo-polynomial O(n*W), not true polynomial.',
      'For the Medical Embedded System question, emphasize that Insertion Sort is chosen because it requires O(1) auxiliary RAM, has zero recursion (no stack overflow), and runs in adaptive O(n) time on nearly-sorted sensor streams.'
    ]
  },
  questions: [
    // Q1
    {
      id: 'daa-u5-q1',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 1,
      title: 'What is Amortized Analysis? Explain why it is needed. Enlist and explain the three popular methods (Aggregate, Accounting, and Potential Function) used to arrive at amortized costs.',
      shortTitle: 'Amortized Analysis: Concept & The Three Methods',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q5(a)', marks: 9 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q6(a)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q5(a)', marks: 9 },
        { paper: 'Decode / Textbook', questionNo: 'Q1, Q3, Q4', marks: 8 }
      ],
      frequencyNote: 'The primary foundational theory question for Unit V appearing in all university papers.',
      syllabusTopics: [
        'Amortized Analysis Fundamentals',
        'Why Amortized Analysis is Needed',
        'Aggregate Analysis Method',
        'Accounting Method',
        'Potential Function Method'
      ],
      definition: 'Amortized Analysis is an analytical technique used to determine the average running time per operation over a worst-case sequence of operations. Unlike average-case analysis, amortized analysis guarantees the average performance of each operation in the worst case without making any probabilistic assumptions about input distributions.',
      sections: [
        {
          title: '1. Why is Amortized Analysis Needed?',
          content: [
            'In many dynamic data structures, considering the worst-case cost of an individual operation can be overly pessimistic:',
            '• A single operation within a sequence may be computationally expensive (e.g., MULTIPOP taking O(n) time, or an array resize copying n elements).',
            '• However, this expensive operation cannot happen frequently; it can only occur after a long sequence of very cheap operations (e.g., O(1) PUSHes).',
            '• Standard worst-case analysis would multiply the single worst-case cost by n, yielding O(n^2), which is completely inaccurate.',
            '• Amortized analysis averages the total cost of the sequence over all n operations, proving that the true amortized cost per operation is small (often O(1)).'
          ]
        },
        {
          title: '2. The Three Methods of Amortized Analysis',
          table: {
            headers: ['Method', 'Core Concept', 'Mathematical Formulation', 'Characteristics'],
            rows: [
              {
                parameter: '1. Aggregate Analysis',
                col1: 'Determine an upper bound T(n) on the total cost of any sequence of n operations, then divide by n.',
                col2: 'Amortized Cost = T(n) / n',
                col3: 'All operation types are assigned the exact same uniform amortized cost, regardless of operation type.'
              },
              {
                parameter: '2. Accounting Method',
                col1: 'Assign differing amortized charges (c^_i) to operations. Cheap operations pay more than actual cost; excess is stored as credit.',
                col2: 'Sum_{i=1}^n c^_i >= Sum_{i=1}^n c_i (Total credit >= 0)',
                col3: 'Credit is stored on specific individual data structure objects to prepay for their future expensive handling.'
              },
              {
                parameter: '3. Potential Method',
                col1: 'Abstracts accumulated prepaid credit into overall system potential energy Φ(D) associated with the entire data structure.',
                col2: 'c^_i = c_i + Φ(D_i) - Φ(D_{i-1})',
                col3: 'Most flexible and mathematically rigorous method; uses telescoping sum to bound total cost.'
              }
            ]
          }
        },
        {
          title: '3. Amortized Analysis vs. Average-Case Analysis',
          content: [
            '• Average-Case Analysis: Involves probability theory. It assumes a specific probability distribution over all possible input instances and calculates expected runtime. It can fail if inputs do not match the assumed distribution.',
            '• Amortized Analysis: Involves NO probability. It analyzes a deterministic sequence of operations starting from an initial state and guarantees the average cost over the absolute worst-case sequence.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-amort-stack',
          title: 'Amortized Analysis: Stack MULTIPOP & Credit/Potential Energy',
          caption: 'Figure 5.1: Three amortized analysis methods applied to Stack operations: Aggregate T(n)/n, Accounting credit coins ($1), and Potential Energy Φ(D).',
          type: 'svg-interactive',
          svgType: 'amortized-stack-multipop',
          description: 'Stack diagram showing credit accounting and potential function formulation.'
        }
      ],
      summary: [
        'Amortized analysis guarantees the average cost per operation over a worst-case sequence with no probabilities.',
        'Aggregate analysis computes total sequence cost T(n) and divides uniformly by n.',
        'Accounting method overcharges cheap operations to deposit credits that pay for expensive operations.',
        'Potential method defines potential energy Φ(D); amortized cost c^ = c + ΔΦ.'
      ],
      keyPoints: [
        'Worst-Case Sequence Guarantee',
        'No Probabilistic Assumptions',
        'Aggregate Method: T(n) / n',
        'Accounting: Charges & Credits',
        'Potential: Φ(D_i) - Φ(D_{i-1})',
        'Total Credit / Potential ≥ 0'
      ],
      conclusion: 'Amortized analysis provides realistic, tight complexity bounds for data structures by recognizing that expensive operations must be preceded by sufficiently many cheap operations.'
    },

    // Q2
    {
      id: 'daa-u5-q2',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 2,
      title: 'Analyze the amortized cost of Stack operations (PUSH, POP, and MULTIPOP) using the Aggregate Analysis Method. Formulate the algorithms and prove the O(1) amortized bound.',
      shortTitle: 'Stack Operations Amortized Cost via Aggregate Analysis',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q5(a)', marks: 9 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q5(a)', marks: 9 },
        { paper: 'Decode / Textbook', questionNo: 'Q4 / Section 5.1.1', marks: 8 }
      ],
      frequencyNote: 'Directly asked as Paper 1 Q5(a) [9 Marks] and Paper 3 Q5(a) [9 Marks].',
      syllabusTopics: [
        'Aggregate Analysis for Stack Operations',
        'Algorithm MULTIPOP(S, k)',
        'Proof of O(1) Amortized Bound'
      ],
      definition: 'In a stack supporting PUSH, POP, and MULTIPOP(S, k) (which removes min(s, k) top elements), Aggregate Analysis establishes that across any sequence of n operations starting from an empty stack, the total actual cost is at most 2n, proving an amortized cost of O(1) per operation.',
      sections: [
        {
          title: '1. Stack Operations Specification',
          content: [
            'Let S be a stack data structure initially empty:',
            '1. PUSH(S, x): Pushes object x onto stack. Actual cost = 1.',
            '2. POP(S): Pops top object. Actual cost = 1.',
            '3. MULTIPOP(S, k): Pops top k objects from stack, or empties stack if size < k.',
            '```text',
            'Algorithm MULTIPOP(S, k)',
            '{',
            '    while (not Stack_Empty(S) and k > 0) do',
            '    {',
            '        POP(S);',
            '        k = k - 1;',
            '    }',
            '}',
            '```',
            'Actual cost of MULTIPOP(S, k) = min(s, k), where s is the current stack size.',
            'In the worst case, a single MULTIPOP operation can take O(n) time when s = n.'
          ]
        },
        {
          title: '2. The Naive Bound vs. The Aggregate Bound',
          content: [
            '• Naive Upper Bound:',
            '  If we assume each operation takes worst-case time O(n), then n operations take O(n * n) = O(n^2).',
            '  This bound is not tight because MULTIPOP cannot take O(n) time on every step!',
            '',
            '• Aggregate Analysis Proof of O(n) Total Cost:',
            '  1. Each object can be popped from the stack at most once for each time it is pushed.',
            '  2. In any sequence of n operations starting from an empty stack, PUSH can be called at most n times.',
            '  3. Therefore, the total number of objects pushed onto the stack is at most n.',
            '  4. Since an object must be pushed before it can be popped, the total number of POP operations (including those inside MULTIPOP) cannot exceed the total number of PUSH operations:',
            '     Total POPs <= Total PUSHes <= n.',
            '  5. Therefore, Total Actual Cost T(n) = (Cost of PUSHes) + (Cost of all POPs and MULTIPOPs) <= n + n = 2n.'
          ]
        },
        {
          title: '3. Amortized Cost Calculation',
          content: [
            'By the definition of aggregate analysis:',
            'Amortized Cost per operation = T(n) / n <= 2n / n = 2 = O(1).',
            'Thus, all stack operations (PUSH, POP, MULTIPOP) have an amortized cost of O(1), despite individual MULTIPOP operations requiring up to O(n) actual time.'
          ]
        }
      ],
      summary: [
        'Actual costs: PUSH = 1, POP = 1, MULTIPOP = min(s, k) which can be O(n).',
        'Naive bound O(n^2) is overly pessimistic.',
        'Aggregate analysis observes that each pushed item can be popped at most once.',
        'Total cost for any sequence of n operations is at most 2n.',
        'Amortized cost per operation = 2n / n = O(1).'
      ],
      keyPoints: [
        'Operations: PUSH, POP, MULTIPOP',
        'Worst-Case Single MULTIPOP = O(n)',
        'Invariant: Total POPs ≤ Total PUSHes ≤ n',
        'Total Cost T(n) ≤ 2n',
        'Amortized Cost = O(1)'
      ],
      conclusion: 'Aggregate analysis establishes a tight O(1) amortized bound for stack operations by demonstrating that the aggregate work is bounded by the total number of items inserted.'
    },

    // Q3
    {
      id: 'daa-u5-q3',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 3,
      title: 'Explain the Accounting Method of Amortized Analysis. Demonstrate its application to Stack operations with MULTIPOP by defining charges, credits, and proving the credit invariant.',
      shortTitle: 'Accounting Method for Stack Operations with MULTIPOP',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q6(a)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q5(a)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Section 5.1.2', marks: 8 }
      ],
      frequencyNote: 'Standard examination question requiring clear credit assignment tables and invariant proofs.',
      syllabusTopics: [
        'Accounting Method Mechanism',
        'Amortized Charge Assignment',
        'Credit Deposit and Consumption',
        'Credit Invariant Proof: Total Credit >= 0'
      ],
      definition: 'The Accounting Method assigns varying amortized costs (charges c^_i) to operations. When an operation’s amortized cost exceeds its actual cost, the difference is stored as credit on specific objects in the data structure, which is later spent to pay for operations whose actual cost exceeds their amortized charge.',
      sections: [
        {
          title: '1. The Accounting Framework and Invariant',
          content: [
            'Let c_i be the actual cost of the i-th operation, and c^_i be its amortized cost (charge).',
            '• If c^_i > c_i: An overcharge occurs. Credit of (c^_i - c_i) is deposited.',
            '• If c^_i < c_i: An undercharge occurs. Deficit of (c_i - c^_i) is paid using existing credit.',
            '',
            'The Credit Invariant Requirement:',
            'For the amortized cost to be an upper bound on actual cost for ANY sequence of n operations:',
            'Sum_{i=1}^n c^_i >= Sum_{i=1}^n c_i  <=>  Total Credit = Sum_{i=1}^n (c^_i - c_i) >= 0.',
            'The total accumulated credit must NEVER become negative at any point in the sequence!'
          ]
        },
        {
          title: '2. Stack Operation Charges and Credit Assignment',
          table: {
            headers: ['Operation', 'Actual Cost (c_i)', 'Amortized Charge (c^_i)', 'Credit Handling'],
            rows: [
              {
                parameter: 'PUSH(item)',
                col1: '1',
                col2: '2',
                col3: '$1 pays actual insertion; $1 is deposited as credit directly on the pushed item.'
              },
              {
                parameter: 'POP()',
                col1: '1',
                col2: '0',
                col3: 'Actual cost of $1 is paid by the $1 credit stored on the item when it was pushed.'
              },
              {
                parameter: 'MULTIPOP(k)',
                col1: 'k\' = min(s, k)',
                col2: '0',
                col3: 'Actual cost of k\' is paid entirely by the $1 credits stored on each of the k\' popped items.'
              }
            ]
          }
        },
        {
          title: '3. Proof of the Credit Invariant',
          content: [
            '• Starting from an empty stack, every item currently residing in the stack holds exactly $1 of stored credit.',
            '• Therefore, at any step i, the total accumulated credit equals the number of items in the stack: Credit = stack_size >= 0.',
            '• Whenever an item is popped (either via POP or MULTIPOP), its stored $1 credit is consumed to pay for its removal.',
            '• Since the stack size can never be negative, the total stored credit is ALWAYS >= 0.',
            '• Conclusion: Total Amortized Cost Sum(c^_i) >= Total Actual Cost Sum(c_i).',
            'Since PUSH amortized charge is 2 and POP/MULTIPOP charges are 0, every operation runs in O(1) amortized time!'
          ]
        }
      ],
      summary: [
        'Accounting method assigns amortized charges c^; excess is stored as credit.',
        'Invariant requires Total Credit = Sum(c^ - c) >= 0 at all times.',
        'PUSH charged $2 ($1 pays cost, $1 stays on item).',
        'POP and MULTIPOP charged $0 (paid by credit on popped items).',
        'Total credit equals current stack size >= 0, proving O(1) amortized cost.'
      ],
      keyPoints: [
        'Amortized Charge c^_i',
        'Credit = c^_i - c_i',
        'Credit Invariant (Total Credit ≥ 0)',
        'PUSH = $2, POP = $0, MULTIPOP = $0',
        'Stored Credit = Stack Size',
        'O(1) Amortized Complexity'
      ],
      conclusion: 'The accounting method provides an intuitive financial model where insertion operations prepay for future deletions, ensuring all operations remain amortized O(1).'
    },

    // Q4
    {
      id: 'daa-u5-q4',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 4,
      title: 'Explain the Potential Function Method of Amortized Analysis. Define potential energy Φ(D), derive the telescoping sum, and compute the amortized cost of PUSH, POP, and MULTIPOP stack operations.',
      shortTitle: 'Potential Function Method for Stack Operations',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q5(b)', marks: 9 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q5(b)', marks: 9 },
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q6(a)', marks: 10 }
      ],
      frequencyNote: 'Directly asked as Paper 1 Q5(b) [9 Marks] and Paper 3 Q5(b) [9 Marks].',
      syllabusTopics: [
        'Potential Function Definition Φ(D)',
        'Amortized Cost Formula c^ = c + ΔΦ',
        'Telescoping Sum Proof',
        'Stack Operations Potential Derivation'
      ],
      definition: 'The Potential Function Method represents prepaid work as a continuous mathematical function Φ(D) that maps the state of data structure D to a real number potential energy. The amortized cost of operation i is defined as its actual cost plus the change in potential: c^_i = c_i + Φ(D_i) - Φ(D_{i-1}).',
      sections: [
        {
          title: '1. Mathematical Formulation & Telescoping Sum Proof',
          content: [
            'Let D_0 be the initial state of the data structure, and D_i be the state after the i-th operation.',
            'Let c_i be the actual cost of the i-th operation, and Φ: D -> R be the potential function.',
            '',
            'Amortized Cost Definition:',
            'c^_i = c_i + Φ(D_i) - Φ(D_{i-1}) = c_i + ΔΦ_i',
            '',
            'Telescoping Sum of Amortized Costs over n operations:',
            'Sum_{i=1}^n c^_i = Sum_{i=1}^n [ c_i + Φ(D_i) - Φ(D_{i-1}) ]',
            'Sum_{i=1}^n c^_i = Sum_{i=1}^n c_i + [ (Φ(D_1) - Φ(D_0)) + (Φ(D_2) - Φ(D_1)) + ... + (Φ(D_n) - Φ(D_{n-1})) ]',
            'Sum_{i=1}^n c^_i = Sum_{i=1}^n c_i + Φ(D_n) - Φ(D_0).',
            '',
            'The Validity Condition:',
            'If Φ(D_n) >= Φ(D_0) for all n (typically Φ(D_0) = 0 and Φ(D_i) >= 0), then:',
            'Sum_{i=1}^n c^_i >= Sum_{i=1}^n c_i.',
            'Thus, the total amortized cost is an upper bound on the total actual cost!'
          ]
        },
        {
          title: '2. Application to Stack with MULTIPOP',
          content: [
            'Define the potential function Φ(D) as the number of elements currently in the stack:',
            'Φ(D) = size(S).',
            '• Initial empty stack: Φ(D_0) = 0.',
            '• Since stack size is always non-negative: Φ(D_i) >= 0 = Φ(D_0) for all i.',
            'The validity condition is strictly satisfied!'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Derive the amortized cost for PUSH, POP, and MULTIPOP using the potential function Φ(D) = s (stack size).',
        givenData: [
          { label: 'Potential Function', value: 'Φ(D) = s (number of items in stack)' },
          { label: 'Initial State', value: 'Φ(D₀) = 0, Φ(Dᵢ) ≥ 0' },
          { label: 'Actual Costs', value: 'PUSH = 1, POP = 1, MULTIPOP(k) = k\' = min(s, k)' }
        ],
        toFind: [
          'Change in potential ΔΦ for each operation',
          'Amortized cost c^ = c + ΔΦ for PUSH, POP, MULTIPOP'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Amortized Cost of PUSH Operation',
            explanation: 'PUSH adds 1 element to stack. Initial size = s, new size = s + 1.',
            calculation: 'Actual cost c_i = 1\nΔΦ = Φ(D_i) - Φ(D_{i-1}) = (s + 1) - s = 1\nc^_PUSH = c_i + ΔΦ = 1 + 1 = 2',
            result: 'c^_PUSH = 2 = O(1)'
          },
          {
            stepNumber: 2,
            title: 'Amortized Cost of POP Operation',
            explanation: 'POP removes 1 element from stack. Initial size = s, new size = s - 1.',
            calculation: 'Actual cost c_i = 1\nΔΦ = (s - 1) - s = -1\nc^_POP = c_i + ΔΦ = 1 + (-1) = 0',
            result: 'c^_POP = 0 = O(1)'
          },
          {
            stepNumber: 3,
            title: 'Amortized Cost of MULTIPOP(k) Operation',
            explanation: 'MULTIPOP removes k\' = min(s, k) elements. Initial size = s, new size = s - k\'.',
            calculation: 'Actual cost c_i = k\'\nΔΦ = (s - k\') - s = -k\'\nc^_MULTIPOP = c_i + ΔΦ = k\' + (-k\') = 0',
            result: 'c^_MULTIPOP = 0 = O(1)'
          }
        ],
        finalAnswer: {
          label: 'Stack Amortized Costs via Potential Method',
          value: 'c^_PUSH = 2, c^_POP = 0, c^_MULTIPOP = 0',
          interpretation: 'All operations execute in O(1) amortized time, bounding total sequence cost to 2n.'
        }
      },
      summary: [
        'Potential function Φ(D) maps state to real number potential energy.',
        'Amortized cost formula: c^_i = c_i + Φ(D_i) - Φ(D_{i-1}).',
        'Telescoping sum yields Sum(c^_i) = Sum(c_i) + Φ(D_n) - Φ(D_0).',
        'For stack with Φ = size: PUSH cost = 2, POP cost = 0, MULTIPOP cost = 0.',
        'All stack operations are strictly O(1) amortized.'
      ],
      keyPoints: [
        'Potential Function Φ(D) = s',
        'Validity: Φ(D_n) ≥ Φ(D_0) = 0',
        'Telescoping Cancellation',
        'PUSH: c^ = 1 + 1 = 2',
        'POP: c^ = 1 - 1 = 0',
        'MULTIPOP: c^ = k\' - k\' = 0',
        'O(1) Amortized Time'
      ],
      conclusion: 'The potential function method provides an elegant, rigorous proof that stack operations are O(1) amortized, absorbing sudden MULTIPOP spikes through stored potential discharge.'
    },

    // Q5
    {
      id: 'daa-u5-q5',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 5,
      title: 'Analyze the amortized cost of an INCREMENT operation on a k-bit Binary Counter using: i) Aggregate Analysis, ii) Accounting Method, and iii) Potential Function Method. Explain why the naive O(k) bound is loose.',
      shortTitle: 'Binary Counter Increment: Full Amortized Analysis (3 Methods)',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q6(a)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Section 5.1 / Example 2', marks: 8 }
      ],
      frequencyNote: 'Directly related to Paper 4 Q6(a) and standard textbook curriculum.',
      syllabusTopics: [
        'k-bit Binary Counter Increment',
        'Aggregate Analysis for Binary Counter',
        'Accounting Credit Analysis',
        'Potential Function Φ(D) = b_i Analysis'
      ],
      definition: 'A k-bit binary counter stores integers in array A[0..k-1]. The INCREMENT operation flips bits from 1 to 0 until it finds a 0, which it flips to 1. In the worst case, a single INCREMENT flips all k bits (O(k) time), but amortized analysis proves the true cost per INCREMENT is O(1).',
      sections: [
        {
          title: '1. Binary Counter INCREMENT Algorithm',
          content: [
            '```text',
            'Algorithm INCREMENT(A, k)',
            '{',
            '    i = 0;',
            '    while (i < k and A[i] == 1) do',
            '    {',
            '        A[i] = 0; // Flip 1 to 0 (carrying bit)',
            '        i = i + 1;',
            '    }',
            '    if (i < k) then',
            '        A[i] = 1; // Flip lowest 0 to 1',
            '}',
            '```',
            'Actual cost of an INCREMENT = number of bits flipped = 1 + (number of 1s reset to 0).'
          ]
        },
        {
          title: '2. Method 1: Aggregate Analysis',
          content: [
            'Consider n INCREMENT operations starting from counter value 0:',
            '• Bit A[0] flips on EVERY increment => flips n times.',
            '• Bit A[1] flips on every 2nd increment => flips ⌊n / 2⌋ times.',
            '• Bit A[2] flips on every 4th increment => flips ⌊n / 4⌋ times.',
            '• In general, bit A[i] flips on every 2^i-th increment => flips ⌊n / 2^i⌋ times.',
            '',
            'Total bit flips in n operations:',
            'T(n) = Sum_{i=0}^{k-1} ⌊n / 2^i⌋ < n * Sum_{i=0}^∞ (1 / 2^i) = n * 2 = 2n.',
            'Amortized cost per INCREMENT = T(n) / n < 2n / n = 2 = O(1)!'
          ]
        },
        {
          title: '3. Method 2: Accounting Method',
          content: [
            '• Assign an amortized charge of $2 to set a bit from 0 to 1:',
            '  - $1 pays for the actual cost of setting the bit to 1.',
            '  - $1 is deposited as stored credit on that bit.',
            '• When a bit is reset from 1 to 0 in a future increment, its actual cost of $1 is paid by the $1 credit stored on it. Amortized charge to reset a bit = $0.',
            '• Since each INCREMENT sets at most ONE bit to 1, the total amortized cost per INCREMENT is at most $2.',
            '• At all times, the total credit equals the number of 1s in the counter >= 0. Invariant holds! Amortized cost = O(1).'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Apply the Potential Function Method to determine the amortized cost of INCREMENT on a k-bit binary counter.',
        givenData: [
          { label: 'Counter Representation', value: 'A[0..k-1], initially all zeros' },
          { label: 'Potential Function', value: 'Φ(Dᵢ) = bᵢ (number of 1-bits after step i)' },
          { label: 'Initial Potential', value: 'Φ(D₀) = 0, Φ(Dᵢ) ≥ 0' }
        ],
        toFind: [
          'Change in potential ΔΦᵢ during i-th increment',
          'Amortized cost c^ᵢ = cᵢ + ΔΦᵢ'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Express Actual Cost in terms of Reset Bits',
            explanation: 'Suppose the i-th INCREMENT resets t_i bits from 1 to 0, and sets at most one bit from 0 to 1.',
            calculation: 'Actual cost c_i = t_i + 1 (if i < k) or t_i (if counter overflows)',
            result: 'c_i ≤ t_i + 1'
          },
          {
            stepNumber: 2,
            title: 'Compute Change in Potential ΔΦ_i',
            explanation: 'After resetting t_i bits and setting 1 bit, the new number of 1s is b_i = b_{i-1} - t_i + 1.',
            calculation: 'ΔΦ_i = Φ(D_i) - Φ(D_{i-1}) = b_i - b_{i-1} = (b_{i-1} - t_i + 1) - b_{i-1} = 1 - t_i',
            result: 'ΔΦ_i = 1 - t_i'
          },
          {
            stepNumber: 3,
            title: 'Calculate Amortized Cost c^_i',
            explanation: 'Substitute actual cost and potential change into the amortized formula.',
            calculation: 'c^_i = c_i + ΔΦ_i = (t_i + 1) + (1 - t_i) = 2',
            result: 'c^_i = 2 = O(1)'
          }
        ],
        finalAnswer: {
          label: 'Amortized Cost of Binary Counter INCREMENT',
          value: 'c^ = 2 = O(1)',
          interpretation: 'Every increment operation has an amortized cost of at most 2 bit flips, regardless of counter width k.'
        }
      },
      diagrams: [
        {
          id: 'diag-bin-counter',
          title: 'Binary Counter Increment Bit-Flip Ladder',
          caption: 'Figure 5.2: Flipping frequencies of bits A[0..k-1] over n increments, demonstrating geometric sum convergence to < 2n total flips.',
          type: 'svg-interactive',
          svgType: 'binary-counter-amortized',
          description: 'Bit ladder table and potential function derivation for binary counter.'
        }
      ],
      summary: [
        'Single increment takes O(k) worst case when all bits are 1.',
        'Aggregate analysis shows total flips < 2n because higher bits flip exponentially less often.',
        'Accounting charges $2 per set bit; resets are paid by stored credit.',
        'Potential function Φ(D) = b_i yields c^ = (t + 1) + (1 - t) = 2 = O(1).',
        'Amortized cost is strictly O(1).'
      ],
      keyPoints: [
        'Bit Flipping Frequency n / 2^i',
        'Geometric Series Sum < 2n',
        'Accounting Charge: $2 to set, $0 to reset',
        'Potential Function Φ = Number of 1s (b_i)',
        'ΔΦ = 1 - t_i',
        'Amortized Cost = 2 = O(1)'
      ],
      conclusion: 'All three amortized techniques independently confirm that incrementing a binary counter requires O(1) amortized time, proving that worst-case ripples are rare.'
    },

    // Q6
    {
      id: 'daa-u5-q6',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 6,
      title: 'Compare Average-Case Analysis with Amortized Analysis. Discuss the relative advantages and disadvantages of Aggregate Analysis, Accounting Method, and Potential Function Method.',
      shortTitle: 'Average-Case vs Amortized Analysis, and Method Trade-offs',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q5(a)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q2 / Review Questions', marks: 8 }
      ],
      frequencyNote: 'Directly asked as Paper 4 Q5(a) [8 Marks] requiring comparison of amortized methods.',
      syllabusTopics: [
        'Average-Case vs Amortized Analysis',
        'Advantages and Disadvantages of Aggregate Analysis',
        'Advantages and Disadvantages of Accounting Method',
        'Advantages and Disadvantages of Potential Method'
      ],
      definition: 'Average-case analysis computes expected performance over all possible inputs assuming an underlying probability distribution, whereas Amortized Analysis evaluates the average cost per operation over a worst-case sequence without probability.',
      sections: [
        {
          title: '1. In-Depth Comparison: Average-Case vs. Amortized Analysis',
          content: [
            'In Simple Words:',
            'Average-Case Analysis assumes the user is friendly and enters random normal data (like guessing average rain in a year).',
            'Amortized Analysis assumes an evil adversary is attacking you with worst-case data, but shows that expensive steps happen so rarely that the average cost per operation is still cheap (like buying an annual bus pass: one expensive payment gives 365 free rides).'
          ],
          table: {
            headers: ['Average-Case Analysis (Probabilistic)', 'Amortized Analysis (Guaranteed Sequence Average)'],
            rows: [
              {
                parameter: 'Calculates the probabilistic mathematical expectation over all possible random inputs.',
                col1: 'Calculates the deterministic average time taken per operation over an entire worst-case sequence of operations.'
              },
              {
                parameter: 'Requires assuming a specific probability distribution of inputs (e.g., assuming inputs arrive uniformly at random).',
                col1: 'Requires zero probability assumptions; analyzes the absolute worst-case sequence crafted by an adversary.'
              },
              {
                parameter: 'No worst-case guarantee: an unlucky or adversarial input can trigger the worst-case time on every single operation.',
                col1: 'Guaranteed: the bound is an absolute upper limit on total runtime divided by n, impossible to violate.'
              },
              {
                parameter: 'Evaluates the expected behavior of a single isolated operation on average input data.',
                col1: 'Evaluates a sequence of n operations, recognizing that an expensive operation prepaid future operations.'
              },
              {
                parameter: 'Classic example: QuickSort runs in average-case O(n log n), but an adversarial sorted list forces worst-case O(n²).',
                col1: 'Classic example: Dynamic Array (std::vector push_back) has amortized O(1) time, even though array doubling costs O(n).'
              }
            ]
          }
        },
        {
          title: '2. Advantages and Disadvantages of the 3 Amortized Methods',
          content: [
            '1. Aggregate Analysis:',
            '   • Advantages: Simplest and most direct approach; requires no credit tracking or potential formulas.',
            '   • Disadvantages: Inflexible. Assigns the exact same average cost to EVERY operation type in the sequence, unable to distinguish between fundamentally different operations (e.g., PUSH vs MULTIPOP).',
            '',
            '2. Accounting Method:',
            '   • Advantages: Intuitive financial/credit metaphor; allows assigning different amortized costs to different operation types.',
            '   • Disadvantages: Requires proving that total credit never drops below zero for any valid sequence, which can be cumbersome for complex data structures.',
            '',
            '3. Potential Function Method:',
            '   • Advantages: Most powerful, elegant, and mathematically rigorous. Handles complex dynamic structures (e.g., Fibonacci heaps, splay trees) seamlessly via telescoping sums.',
            '   • Disadvantages: Finding an appropriate potential function Φ(D) that satisfies Φ(D_i) >= Φ(D_0) requires significant mathematical intuition and trial-and-error.'
          ]
        }
      ],
      summary: [
        'Average-case relies on probability; amortized analysis guarantees performance over worst-case sequences.',
        'Aggregate is simple but assigns uniform costs to all operations.',
        'Accounting assigns distinct charges but requires tracking credits.',
        'Potential method is mathematically powerful but requires discovering a valid potential function Φ(D).'
      ],
      keyPoints: [
        'Probability vs Deterministic Guarantee',
        'Aggregate: Simple, Uniform Costs',
        'Accounting: Intuitive, Credit Invariant',
        'Potential: Mathematically Rigorous, Φ(D) Discovery'
      ],
      conclusion: 'Selecting the appropriate amortized method depends on the complexity of the data structure, with Aggregate suited for simple counters and Potential Method suited for advanced structures.'
    },

    // Q7
    {
      id: 'daa-u5-q7',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 7,
      title: 'Explain the concept of Time-Space Trade-off in algorithm design. Discuss Input Enhancement, Prestructuring, and Dynamic Programming with appropriate technical examples.',
      shortTitle: 'Time-Space Trade-off: Principles, Prestructuring & Examples',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Decode / Textbook', questionNo: 'Section 5.2 / Q6, Q7', marks: 8 }
      ],
      frequencyNote: 'Standard curriculum question on engineering trade-offs between memory footprint and execution speed.',
      syllabusTopics: [
        'Time-Space Trade-off Concept',
        'Input Enhancement (String Matching, Counting Sort)',
        'Prestructuring (Hashing, B-Trees, Indexing)',
        'Dynamic Programming Memory Reuse'
      ],
      definition: 'A Time-Space Trade-off is an algorithm design principle where execution time (processing speed) is reduced at the expense of increased memory consumption (space utilization), or conversely, memory footprint is minimized at the expense of longer execution time.',
      sections: [
        {
          title: '1. Core Techniques for Achieving Time Efficiency at the Cost of Space',
          content: [
            '1. Input Enhancement (Preprocessing Input):',
            '   • Preprocessing the problem instance to gather auxiliary information that accelerates subsequent queries.',
            '   • Examples:',
            '     - String Matching (Boyer-Moore / KMP): Precomputing shift tables (Bad Character / Good Suffix or π-table) in O(m) space to achieve O(n) text search.',
            '     - Counting Sort: Allocates an auxiliary frequency array of size Max_Value to sort integers in linear O(n) time without comparisons.',
            '',
            '2. Prestructuring (Organizing Data into Specialized Structures):',
            '   • Formatting and storing data in specialized auxiliary data structures to provide fast access.',
            '   • Examples:',
            '     - Hashing: Uses an array table with a hash function to achieve O(1) average lookup time.',
            '     - B-Trees / Indexes: Database indexes store sorted key pointers on disk/RAM to speed up disk block retrieval from O(n) to O(log n).',
            '',
            '3. Dynamic Programming Table Storage:',
            '   • Stores solutions to overlapping subproblems in an auxiliary 1D or 2D table.',
            '   • Trades O(n * W) or O(n^2) auxiliary memory to avoid exponential O(2^n) recomputations (e.g., 0/1 Knapsack, Floyd-Warshall, Matrix Chain Multiplication).'
          ]
        },
        {
          title: '2. Examples of Space Reduction at the Cost of Time',
          content: [
            '• Data Compression: Storing files or datasets in compressed formats (e.g., Huffman encoding) saves massive disk/RAM space, but incurs decompression processing time during every read.',
            '• In-Place Inversion: Reversing an array in-place requires O(1) space but requires more swap operations compared to copying into a secondary array.',
            '• Sparse Matrices: Storing only non-zero coordinates saves memory in large sparse grids, but accessing element (i, j) requires coordinate searching rather than instant O(1) direct array indexing.'
          ]
        }
      ],
      summary: [
        'Time-space tradeoff balances memory consumption against execution speed.',
        'Input enhancement preprocesses data (e.g. KMP prefix tables, counting sort).',
        'Prestructuring builds indexes and hash tables for instant retrieval.',
        'Dynamic programming saves exponential time by storing subproblems in tables.'
      ],
      keyPoints: [
        'Time vs Space Equilibrium',
        'Input Enhancement (Shift tables, counting)',
        'Prestructuring (Hashing, B-Trees)',
        'Dynamic Programming Memoization',
        'Data Compression Trade-offs'
      ],
      conclusion: 'Engineers balance time and space based on system constraints: memory-constrained embedded systems favor space efficiency, while high-throughput cloud servers favor time efficiency.'
    },

    // Q8
    {
      id: 'daa-u5-q8',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 8,
      title: 'Distinguish between Tractable and Intractable Problems. Provide formal definitions for the complexity classes P, NP, NP-Complete, and NP-Hard, and describe their interrelationships assuming P != NP.',
      shortTitle: 'Complexity Classes: Tractable/Intractable, P, NP, NP-C & NP-Hard',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q6(a)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q6(b)', marks: 9 },
        { paper: 'Decode / Textbook', questionNo: 'Section 5.3 / Q8', marks: 8 }
      ],
      frequencyNote: 'Major recurring 8-10 mark question on computational complexity theory.',
      syllabusTopics: [
        'Tractable vs Intractable Problems',
        'Definition of Class P and NP',
        'Definition of NP-Complete and NP-Hard',
        'Euler Diagram & P vs NP Conjecture'
      ],
      definition: 'Tractable problems are those solvable in polynomial time O(n^k) by a deterministic algorithm, whereas Intractable problems are those for which no polynomial-time algorithm is known or possible, requiring super-polynomial or exponential worst-case time Omega(2^n).',
      sections: [
        {
          title: '1. Tractable vs. Intractable Problems',
          content: [
            'In Simple Words:',
            'Tractable problems are easy problems that computers can solve quickly even for massive datasets (like sorting a billion numbers in seconds).',
            'Intractable problems are hard problems where trying to find the exact optimal answer would take longer than the age of the universe as soon as n > 50 (like checking every possible delivery route on a map).'
          ],
          table: {
            headers: ['Tractable Problems (Polynomial Time - P Class)', 'Intractable Problems (Exponential Time - NP-Hard)'],
            rows: [
              {
                parameter: 'Solvable by deterministic algorithms in polynomial time: O(n^k) where k is a constant (e.g. O(n), O(n log n), O(n²)).',
                col1: 'Cannot be solved in polynomial time; worst-case complexity grows exponentially: O(2^n), O(3^n), or O(n!).'
              },
              {
                parameter: 'Highly scalable: feasible to compute solutions efficiently for large input sizes (e.g., n = 10,000,000 items).',
                col1: 'Practically infeasible for moderate input sizes: computing exact solutions for n > 50 requires millions of years.'
              },
              {
                parameter: 'Benchmark problems: Sorting algorithms, Binary Search, Minimum Spanning Trees (Prim/Kruskal), Dijkstra Shortest Path.',
                col1: 'Benchmark problems: Traveling Salesperson Problem (TSP), 0/1 Knapsack, Hamiltonian Cycle, Vertex Cover, Graph Coloring.'
              },
              {
                parameter: 'Practical engineering solution: Solved directly to exact optimality using standard algorithm design paradigms.',
                col1: 'Practical engineering solution: Solved using Approximation Algorithms or Heuristics to find near-optimal answers quickly.'
              }
            ]
          }
        },
        {
          title: '2. Formal Definitions of the Four Complexity Classes',
          content: [
            '1. Class P (Polynomial Time):',
            '   The class of all decision problems that can be solved by a Deterministic Turing Machine (DTM) in polynomial time O(n^k).',
            '',
            '2. Class NP (Nondeterministic Polynomial Time):',
            '   The class of decision problems for which a candidate solution ("certificate") can be VERIFIED in polynomial time by a DTM, or solved in polynomial time by a Nondeterministic Turing Machine (NDTM).',
            '   Note: Every problem in P is also in NP (P ⊆ NP).',
            '',
            '3. Class NP-Hard:',
            '   A problem X is NP-Hard if every problem Y in NP is polynomial-time reducible to X (Y ≤_P X).',
            '   NP-Hard problems need not be decision problems, and need NOT be in NP (e.g., Halting Problem, TSP optimization).',
            '',
            '4. Class NP-Complete (NPC):',
            '   A problem X is NP-Complete if and only if:',
            '   a) X ∈ NP (verifiable in polynomial time), AND',
            '   b) X is NP-Hard (every problem in NP is polynomial-time reducible to X).'
          ]
        },
        {
          title: '3. Relationship Between the Classes (The P vs. NP Question)',
          content: [
            '• If P != NP (the universally accepted consensus):',
            '  P is a strict subset of NP (P ⊂ NP), and NP-Complete problems reside strictly outside P.',
            '  No NP-Complete problem can be solved in polynomial time.',
            '• If P == NP:',
            '  P = NP = NP-Complete. Solving ANY single NP-complete problem in polynomial time would instantly prove that all problems in NP are solvable in polynomial time!'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-complexity-euler',
          title: 'Computational Complexity Hierarchy Euler Diagram',
          caption: 'Figure 5.3: Euler Venn diagram illustrating the relationships between P, NP, NP-Complete, and NP-Hard assuming P ≠ NP.',
          type: 'svg-interactive',
          svgType: 'complexity-classes-euler',
          description: 'Complexity hierarchy showing P inside NP, NPC at the intersection of NP and NP-Hard.'
        }
      ],
      summary: [
        'Tractable problems are solvable in polynomial time O(n^k); intractable require exponential time.',
        'Class P: Solvable in poly-time by a deterministic machine.',
        'Class NP: Verifiable in poly-time with a certificate.',
        'NP-Hard: At least as hard as any problem in NP (Y <=_P X for all Y in NP).',
        'NP-Complete: Both in NP and NP-Hard (e.g., SAT, 3-SAT, Clique, Vertex Cover).'
      ],
      keyPoints: [
        'Tractable (O(n^k)) vs Intractable (Ω(2^n))',
        'Class P (Poly-Time Solvable)',
        'Class NP (Poly-Time Verifiable)',
        'NP-Hard (Reducibility Target)',
        'NP-Complete (Intersection of NP & NP-Hard)',
        'Cook-Levin Theorem'
      ],
      conclusion: 'The classification into P, NP, NP-Complete, and NP-Hard categorizes computational difficulty and guides whether exact, approximation, or heuristic methods should be applied.'
    },

    // Q9
    {
      id: 'daa-u5-q9',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 9,
      title: 'Analyze and comment in detail on the following three statements: i) "The knapsack problem is NP-hard", ii) "Boolean Satisfiability Problem (SAT) is NP-complete", and iii) "Minimum spanning tree is a tractable problem".',
      shortTitle: 'Critical Analysis: Knapsack (NP-hard), SAT (NP-complete), MST (Tractable)',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q6(b)', marks: 9 }
      ],
      frequencyNote: 'Directly asked as Paper 4 Q6(b) [9 Marks] requiring in-depth technical justification for all three statements.',
      syllabusTopics: [
        '0/1 Knapsack NP-Hard Classification',
        'Boolean SAT NP-Complete Classification',
        'Minimum Spanning Tree Tractability'
      ],
      definition: 'These three statements represent fundamental benchmarks in computational complexity, categorizing problems into tractable polynomial problems (MST in P), canonical NP-complete decision problems (SAT), and NP-hard optimization problems (0/1 Knapsack).',
      sections: [
        {
          title: '1. Statement (i): "The Knapsack Problem is NP-hard" — TRUE',
          content: [
            'Technical Justification:',
            '1. Optimization vs Decision: The knapsack optimization problem seeks a 0/1 selection vector that maximizes profit subject to capacity <= m. Because it is an optimization problem (not a yes/no decision problem), it does not strictly belong to NP, but rather to NP-Hard.',
            '2. Hardness Proof: The decision version of 0/1 Knapsack ("Can we achieve profit >= K with weight <= m?") is NP-complete, proven via polynomial-time reduction from the Subset Sum problem (Subset Sum <=_P 0/1 Knapsack Decision).',
            '3. Why Dynamic Programming doesn’t make it P: Dynamic programming solves 0/1 Knapsack in O(n * W) time. However, W is an input numerical magnitude, requiring log2(W) bits to represent. An algorithm whose complexity is polynomial in the VALUE of the input rather than its BIT LENGTH is called Pseudo-Polynomial.',
            'When W is exponential in the input size (e.g. W = 2^n), O(n * W) = O(n * 2^n), which is strictly exponential!',
            'Therefore, 0/1 Knapsack is genuinely NP-hard (weakly NP-hard).'
          ]
        },
        {
          title: '2. Statement (ii): "Boolean Satisfiability Problem (SAT) is NP-complete" — TRUE',
          content: [
            'Technical Justification:',
            '1. The Cook-Levin Theorem (1971): SAT was the very first problem proven to be NP-complete.',
            '2. Membership in NP: Given a Boolean formula in Conjunctive Normal Form (CNF) with n variables and a candidate truth assignment (certificate), we can evaluate the formula in deterministic polynomial time O(length(formula)) to verify if it evaluates to TRUE. Hence, SAT ∈ NP.',
            '3. NP-Hardness: Cook showed that the execution of ANY nondeterministic polynomial-time Turing machine M on an arbitrary input string w can be simulated and encoded as a Boolean formula Φ_{M, w} in polynomial time. Φ is satisfiable if and only if M accepts w.',
            'Since every problem in NP reduces in polynomial time to SAT, SAT is NP-Hard.',
            'Because SAT is in NP and is NP-Hard, SAT is strictly NP-Complete!'
          ]
        },
        {
          title: '3. Statement (iii): "Minimum Spanning Tree is a Tractable Problem" — TRUE',
          content: [
            'Technical Justification:',
            '1. Definition of Tractability: A problem is tractable if there exists a deterministic algorithm that solves every instance of size n in polynomial time O(n^k).',
            '2. Solvability in P: Minimum Spanning Tree (MST) on a connected weighted graph G = (V, E) can be solved exactly in low-order polynomial time using greedy algorithms:',
            '   • Kruskal’s Algorithm: Uses Disjoint-Set Union (DSU) to sort edges and build MST in O(E log E) = O(E log V) time.',
            '   • Prim’s Algorithm: Uses a Fibonacci Heap priority queue to grow the tree in O(E + V log V) time.',
            '3. Tractable Conclusion: Both run in strictly sub-quadratic polynomial time. Hence MST is completely tractable and resides firmly in Class P.'
          ]
        }
      ],
      summary: [
        'Knapsack is NP-hard: Decision version is NP-complete (reduced from Subset Sum); DP is pseudo-polynomial O(n*W).',
        'SAT is NP-complete: Cook-Levin Theorem proved SAT is in NP and simulates any NDTM in poly-time.',
        'MST is tractable: Solved in low-order polynomial time O(E log V) by Kruskal and Prim algorithms in Class P.'
      ],
      keyPoints: [
        'Statement (i): Knapsack is NP-hard (Pseudo-polynomial O(n*W))',
        'Statement (ii): SAT is NP-complete (Cook-Levin Theorem)',
        'Statement (iii): MST is tractable (Kruskal/Prim O(E log V))',
        'Complete University Justification'
      ],
      conclusion: 'All three statements are rigorously true and reflect the distinct tiers of computational complexity: tractable polynomial algorithms (MST), boundary decision problems (SAT), and pseudo-polynomial optimization problems (Knapsack).'
    },

    // Q10
    {
      id: 'daa-u5-q10',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 10,
      title: 'Explain Cook’s Theorem and the Boolean Satisfiability (SAT / 3-SAT) Problem. Describe the reduction technique used to prove NP-Completeness of subsequent problems.',
      shortTitle: 'Cook’s Theorem, SAT/3-SAT & Polynomial Reduction Techniques',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q6(b) related', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Section 5.3', marks: 8 }
      ],
      frequencyNote: 'Fundamental theoretical question on how the NP-completeness proof chain is initiated and propagated.',
      syllabusTopics: [
        'Cook’s Theorem Significance',
        'Boolean Satisfiability (SAT and 3-SAT)',
        'Polynomial-Time Reduction A ≤_P B',
        'Proving a New Problem is NP-Complete'
      ],
      definition: 'Cook’s Theorem states that the Boolean Satisfiability Problem (SAT) is NP-Complete. It established the foundation of complexity theory by demonstrating that every problem in NP can be reduced in polynomial time to SAT, creating the baseline for all subsequent NP-completeness proofs.',
      sections: [
        {
          title: '1. Cook’s Theorem and the SAT Problem',
          content: [
            '• Boolean Satisfiability Problem (SAT):',
            '  Given a Boolean formula Φ in Conjunctive Normal Form (CNF) consisting of m clauses over n variables (e.g., (x1 ∨ ¬x2) ∧ (¬x1 ∨ x3 ∨ x4)), determine whether there exists a truth assignment to (x1, ..., xn) such that Φ evaluates to TRUE.',
            '• 3-SAT: A restricted variant where every clause contains EXACTLY 3 literals. 3-SAT is also NP-complete.',
            '• Cook’s Theorem (1971):',
            '  Stephen Cook proved that SAT is NP-complete by demonstrating that for ANY nondeterministic polynomial-time Turing machine M and input w, one can construct in polynomial time a Boolean formula that is satisfiable if and only if M accepts w.'
          ]
        },
        {
          title: '2. The Polynomial-Time Reduction Paradigm (A ≤_P B)',
          content: [
            'To prove that a new problem B is NP-Complete without simulating Turing machines:',
            '1. Prove B ∈ NP: Show that a candidate solution to B can be verified in deterministic polynomial time.',
            '2. Choose a Known NP-Complete Problem A (e.g., SAT, 3-SAT, or Vertex Cover).',
            '3. Construct a Reduction Function f: Map every instance x of A into an instance f(x) of B in polynomial time.',
            '4. Prove Equivalence: Show that x is a YES-instance for A if and only if f(x) is a YES-instance for B:',
            '   x ∈ A  <=>  f(x) ∈ B.',
            '5. Conclusion: Since A is NP-Hard and A reduces to B in polynomial time, B is also NP-Hard. Hence B is NP-Complete!'
          ]
        },
        {
          title: '3. The Canonical Reduction Tree',
          content: [
            'Cook’s theorem initiated a famous chain of reductions:',
            'Circuit-SAT -> SAT -> 3-SAT -> Vertex Cover -> Independent Set -> Clique -> Hamiltonian Cycle -> TSP Decision.'
          ]
        }
      ],
      summary: [
        'Cook’s Theorem proved SAT is NP-Complete by encoding any NDTM computation as a Boolean formula.',
        'To prove a new problem B is NP-complete: verify B is in NP, then reduce a known NP-complete problem A to B.',
        'Polynomial reduction A <=_P B ensures that if B could be solved in polynomial time, A could too.',
        '3-SAT is the standard starting point for reducing to graph and set problems.'
      ],
      keyPoints: [
        'Cook-Levin Theorem (1971)',
        'Boolean CNF Formula Satisfiability',
        '3-SAT (Exact 3 Literals per Clause)',
        'Reduction Paradigm: A ≤_P B',
        'Verification in NP + NP-Hard Reduction'
      ],
      conclusion: 'Cook’s Theorem transformed algorithm design by establishing polynomial reductions as the universal tool to demonstrate intractability in computer science.'
    },

    // Q11
    {
      id: 'daa-u5-q11',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 11,
      title: 'Introduce Randomized Algorithms. Explain the underlying mathematical concepts: Random Variables, Binomial Random Variables, and probability distributions with examples.',
      shortTitle: 'Randomized Algorithms: Principles & Mathematical Foundations',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q6(c)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Section 5.4 / Q9', marks: 8 }
      ],
      frequencyNote: 'Directly asked as Paper 3 Q6(c) [8 Marks] specifically demanding the mathematical formulation.',
      syllabusTopics: [
        'Randomized Algorithms Principles',
        'Random Variables & Probability Distributions',
        'Binomial Random Variables',
        'Expected Runtime Analysis E[T]'
      ],
      definition: 'A Randomized Algorithm is an algorithm that makes use of a random number generator (pseudo-random coin flips) to guide its logic, execution path, or data partitioning. Its behavior, running time, or output can vary across executions on the exact same input.',
      sections: [
        {
          title: '1. Why Use Randomized Algorithms?',
          content: [
            '• Simplicity: Often vastly simpler and easier to implement than complex deterministic counterparts.',
            '• Efficiency: Can break symmetries and avoid adversarial worst-case inputs (e.g., Randomized QuickSort avoids O(n^2) worst case).',
            '• Solvability of Hard Problems: Provides fast, practical solutions to intractable problems where deterministic polynomial algorithms are unknown (e.g., primality testing).'
          ]
        },
        {
          title: '2. Mathematical Foundations: Random Variables & Distributions',
          content: [
            '1. Random Variable (X):',
            '   A random variable X is a function that maps the outcomes of a sample space S to real numbers: X: S -> R.',
            '   Example: Tossing 4 fair coins. S = {HHHH, HHHT, ..., TTTT} (|S| = 16).',
            '   Let X be the number of Heads. X can take values in {0, 1, 2, 3, 4}.',
            '',
            '2. Probability Distribution:',
            '   The distribution assigns a probability P(X = x) to each possible value such that Sum P(X = x) = 1.',
            '   For 4 coin tosses:',
            '   • P(X = 0) = 1/16',
            '   • P(X = 1) = 4/16 = 1/4',
            '   • P(X = 2) = 6/16 = 3/8',
            '   • P(X = 3) = 4/16 = 1/4',
            '   • P(X = 4) = 1/16',
            '',
            '3. Binomial Random Variable:',
            '   If an experiment consists of n independent Bernoulli trials, each having success probability p and failure probability (1 - p), the total number of successes X is a Binomial Random Variable X ~ B(n, p):',
            '   P(X = k) = C(n, k) * p^k * (1 - p)^{n - k}',
            '   • Expectation: E[X] = n * p.',
            '   • Variance: Var(X) = n * p * (1 - p).'
          ]
        }
      ],
      summary: [
        'Randomized algorithms use random bits to guide decisions during execution.',
        'Random variables map sample space outcomes to real numbers.',
        'Binomial distribution models n independent trials with success probability p: P(X=k) = C(n,k) * p^k * (1-p)^{n-k}.',
        'Expected value E[X] = n * p governs the expected performance of randomized algorithms.'
      ],
      keyPoints: [
        'Random Bits in Decision Making',
        'Sample Space S and Mapping X: S -> R',
        'Binomial Distribution B(n, p)',
        'Expectation E[X] = np',
        'Worst-Case Input Avoidance'
      ],
      conclusion: 'Randomization introduces probabilistic guarantees that simplify algorithm design while delivering high expected performance across all input instances.'
    },

    // Q12
    {
      id: 'daa-u5-q12',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 12,
      title: 'Differentiate between Las Vegas and Monte Carlo Randomized Algorithms. Provide classic examples of each and explain their error handling.',
      shortTitle: 'Las Vegas vs Monte Carlo Algorithms: Comparative Analysis',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q6(b)', marks: 8 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q5(a)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q6(b)', marks: 4 },
        { paper: 'Decode / Textbook', questionNo: 'Section 5.4 / Q9', marks: 8 }
      ],
      frequencyNote: 'Directly asked across multiple papers as the core classification question for randomized algorithms.',
      syllabusTopics: [
        'Las Vegas vs Monte Carlo Classification',
        'Correctness Guarantees vs Time Guarantees',
        'Error Probability Amplification',
        'Classic Algorithm Examples'
      ],
      definition: 'Randomized algorithms are broadly classified into Las Vegas algorithms, which always produce the exact correct output with variable execution time, and Monte Carlo algorithms, which run in deterministic time but carry a bounded probability of error.',
      sections: [
        {
          title: '1. Comprehensive Comparison Table',
          content: [
            'In Simple Words:',
            'A Las Vegas algorithm is like an honest student: it always gives the 100% correct answer, but you never know how many minutes it will take to finish.',
            'A Monte Carlo algorithm is like a student answering under a strict 10-second timer: it always finishes on time, but there is a tiny chance its answer might be incorrect (which you can shrink to almost zero by repeating it).'
          ],
          table: {
            headers: ['Las Vegas Randomized Algorithm', 'Monte Carlo Randomized Algorithm'],
            rows: [
              {
                parameter: '100% Guaranteed Correctness: The algorithm NEVER produces an incorrect result; if it returns an answer, it is guaranteed correct.',
                col1: 'Probabilistic Correctness: The algorithm may produce an incorrect answer with a bounded error probability (e.g. error ≤ ε).'
              },
              {
                parameter: 'Execution time is a random variable: Runtime varies between different runs on the exact same input data.',
                col1: 'Execution time is strictly bounded: Runs within a predictable, deterministic polynomial time limit.'
              },
              {
                parameter: 'Primary goal is accelerating average execution speed while preserving uncompromising exactness.',
                col1: 'Primary goal is obtaining an answer quickly when exact deterministic algorithms are too slow.'
              },
              {
                parameter: 'Error amplification is not applicable because the algorithm produces zero incorrect answers.',
                col1: 'Error probability can be driven arbitrarily close to 0 by running k independent trials (error shrinks to ε^k).'
              },
              {
                parameter: 'Classic examples: Randomized QuickSort (pivot chosen randomly), Randomized Selection (QuickSelect).',
                col1: 'Classic examples: Miller-Rabin Primality Testing, Monte Carlo Pi estimation, Karger\'s Min-Cut algorithm.'
              }
            ]
          }
        },
        {
          title: '2. Error Reduction in Monte Carlo Algorithms',
          content: [
            '• A Monte Carlo algorithm is said to have one-sided error if it is always correct when it returns one answer (e.g., "COMPOSITE"), but may be wrong when it returns the other (e.g., "PRIME").',
            '• Amplification: If a single run has error probability at most 1/2, repeating the algorithm k times with independent random choices reduces the failure probability to:',
            '  P(Error after k runs) <= (1/2)^k.',
            '  For k = 50, the error probability is 2^{-50} ≈ 10^{-15}, which is smaller than the probability of hardware cosmic-ray failure!'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-rand-tax',
          title: 'Randomized Algorithms Taxonomy: Las Vegas vs Monte Carlo',
          caption: 'Figure 5.4: Architectural classification of randomized algorithms into Las Vegas (exact result, variable time) and Monte Carlo (fixed time, bounded error).',
          type: 'svg-interactive',
          svgType: 'randomized-algorithms-hierarchy',
          description: 'Taxonomy diagram showing Las Vegas and Monte Carlo branches with examples.'
        }
      ],
      summary: [
        'Las Vegas algorithms always return the correct answer; runtime is a random variable.',
        'Monte Carlo algorithms run in fixed time; correctness is probabilistic with error <= epsilon.',
        'Monte Carlo error can be made negligibly small (1/2^k) through independent repetitions.',
        'Randomized QuickSort is Las Vegas; Miller-Rabin primality testing is Monte Carlo.'
      ],
      keyPoints: [
        'Las Vegas: Exact Correctness, Variable Time',
        'Monte Carlo: Fixed Time, Bounded Error',
        'Error Amplification (1/2)^k',
        'QuickSort vs Miller-Rabin Primality'
      ],
      conclusion: 'Las Vegas algorithms are preferred when absolute correctness is mandatory, while Monte Carlo algorithms are deployed when rapid bounded-time answers are needed for hard decision problems.'
    },

    // Q13
    {
      id: 'daa-u5-q13',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 13,
      title: 'Explain Randomized QuickSort. Present the RANDOMIZED-PARTITION algorithm, and derive its expected runtime of O(n log n), explaining how it eliminates the deterministic O(n²) worst-case input.',
      shortTitle: 'Randomized QuickSort: Algorithm, Partition & Expected Complexity',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q6(b)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Section 5.4.1 / Q10', marks: 8 }
      ],
      frequencyNote: 'The canonical Las Vegas algorithm example required in DAA exams.',
      syllabusTopics: [
        'Randomized QuickSort',
        'Algorithm RANDOMIZED-PARTITION(A, p, r)',
        'Eliminating Adversarial Worst-Case Inputs',
        'Expected Runtime O(n log n) Derivation'
      ],
      definition: 'Randomized QuickSort is a Las Vegas algorithm that selects its pivot element uniformly at random from the subarray A[p..r]. By randomizing the pivot choice, no single input ordering (such as an already-sorted array) can consistently trigger the O(n^2) worst case, guaranteeing an expected runtime of O(n log n).',
      sections: [
        {
          title: '1. The Vulnerability of Deterministic QuickSort',
          content: [
            '• Standard deterministic QuickSort picks a fixed element (e.g., first or last element A[r]) as pivot.',
            '• If the input array is already sorted in ascending or descending order, every partition produces a completely unbalanced split: one subarray of size 0 and one of size n - 1.',
            '• Recurrence: T(n) = T(n - 1) + O(n) = O(n^2).',
            '• An adversary who knows the pivot rule can easily feed the worst-case input.'
          ]
        },
        {
          title: '2. The Randomized QuickSort Algorithm',
          content: [
            '```text',
            'Algorithm RANDOMIZED-PARTITION(A, p, r)',
            '{',
            '    i = RANDOM(p, r); // Pick random index uniformly from [p..r]',
            '    exchange A[r] with A[i]; // Swap random element into pivot position',
            '    return PARTITION(A, p, r); // Standard Lomuto/Hoare partition',
            '}',
            '',
            'Algorithm RANDOMIZED-QUICKSORT(A, p, r)',
            '{',
            '    if (p < r) then',
            '    {',
            '        q = RANDOMIZED-PARTITION(A, p, r);',
            '        RANDOMIZED-QUICKSORT(A, p, q - 1);',
            '        RANDOMIZED-QUICKSORT(A, q + 1, r);',
            '    }',
            '}',
            '```'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Derive the expected time complexity E[T(n)] for Randomized QuickSort.',
        givenData: [
          { label: 'Subarray Size', value: 'n elements' },
          { label: 'Pivot Choice Probability', value: '1/n for any element in [p..r]' },
          { label: 'Partition Time', value: 'O(n) comparisons' }
        ],
        toFind: [
          'Indicator random variables formulation',
          'Expected comparisons E[X] over all element pairs'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Define Indicator Random Variable for Pairwise Comparisons',
            explanation: 'Let z_1, z_2, ..., z_n be the sorted elements of A. Any two elements z_i and z_j (where i < j) are compared at most once. Let indicator X_ij = 1 if z_i is compared to z_j, and 0 otherwise.',
            calculation: 'Total comparisons X = Sum_{i=1}^{n-1} Sum_{j=i+1}^n X_ij',
            result: 'X = Sum X_ij'
          },
          {
            stepNumber: 2,
            title: 'Compute Probability P(z_i is compared to z_j)',
            explanation: 'z_i and z_j are compared if and only if either z_i or z_j is chosen as the first pivot from the set Z_ij = {z_i, z_{i+1}, ..., z_j}. Size of Z_ij is (j - i + 1). Since every element has equal probability of being chosen as pivot:',
            calculation: 'P(X_ij = 1) = 2 / (j - i + 1)',
            result: 'E[X_ij] = 2 / (j - i + 1)'
          },
          {
            stepNumber: 3,
            title: 'Sum Expectations across all Pairs',
            explanation: 'By linearity of expectation, sum over all pairs (i, j):',
            calculation: 'E[X] = Sum_{i=1}^{n-1} Sum_{j=i+1}^n 2 / (j - i + 1) <= 2n * Sum_{k=1}^n (1 / k) = 2n * ln(n) + O(n)',
            result: 'E[X] = O(n log n)'
          }
        ],
        finalAnswer: {
          label: 'Expected Runtime of Randomized QuickSort',
          value: 'E[T(n)] = O(n log n)',
          interpretation: 'Expected time is O(n log n) for ALL inputs. Worst-case O(n²) occurs with negligible probability.'
        }
      },
      summary: [
        'Deterministic QuickSort suffers O(n^2) worst case on pre-sorted inputs.',
        'RANDOMIZED-PARTITION selects a random pivot index in O(1) time and swaps it with A[r].',
        'No adversarial input can force O(n^2) behavior because pivot selection depends on random coin flips.',
        'Expected number of comparisons is strictly O(n log n) for all inputs.'
      ],
      keyPoints: [
        'Randomized Pivot Selection',
        'RANDOMIZED-PARTITION Subroutine',
        'Lomuto/Hoare Base Partition',
        'Pairwise Comparison Probability: 2 / (j - i + 1)',
        'Harmonic Series Sum => 2n ln(n)',
        'Expected Time O(n log n)'
      ],
      conclusion: 'Randomized QuickSort is an exemplary Las Vegas algorithm that achieves robust O(n log n) expected performance on all inputs by eliminating deterministic vulnerabilities.'
    },

    // Q14
    {
      id: 'daa-u5-q14',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 14,
      title: 'Describe the application of Randomized Algorithms to: i) Finding Duplicate Elements in an array, and ii) Primality Testing (Fermat and Miller-Rabin tests).',
      shortTitle: 'Randomized Applications: Duplicate Elements & Primality Testing',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Decode / Textbook', questionNo: 'Section 5.4.2 / Example 1, 2', marks: 8 }
      ],
      frequencyNote: 'Standard curriculum applications demonstrating practical Las Vegas and Monte Carlo algorithms.',
      syllabusTopics: [
        'Randomized Duplicate Element Detection',
        'Fermat Primality Testing',
        'Miller-Rabin Primality Testing',
        'One-Sided Error Analysis'
      ],
      definition: 'Randomized algorithms provide high-speed solutions for finding duplicate elements (Las Vegas) and determining whether an extraordinarily large number is prime (Monte Carlo), operating far faster than deterministic search.',
      sections: [
        {
          title: '1. Finding Repeated / Duplicate Elements (Las Vegas)',
          content: [
            '• Problem: An array A[1..n] contains n/2 distinct elements and n/2 duplicate elements. We want to identify a duplicate pair.',
            '• Deterministic brute force: Compare all pairs in O(n^2) time, or sort array in O(n log n) time.',
            '• Randomized Algorithm:',
            '```text',
            'Algorithm Repeated(A, n)',
            '{',
            '    while (true) do',
            '    {',
            '        i = RANDOM(1, n);',
            '        j = RANDOM(1, n);',
            '        if (i != j and A[i] == A[j]) then',
            '            return A[i]; // Duplicate found!',
            '    }',
            '}',
            '```',
            '• Complexity Analysis:',
            '  Probability that a randomly chosen pair (i, j) has A[i] == A[j] is approximately (n/2) / n * (n/2 - 1) / n ≈ 1/4.',
            '  Expected number of iterations until success = 1 / p = 1 / (1/4) = 4 iterations!',
            '  Expected runtime = O(1) time!'
          ]
        },
        {
          title: '2. Primality Testing: Fermat & Miller-Rabin (Monte Carlo)',
          content: [
            '• Cryptographic algorithms (like RSA) require generating primes with hundreds of digits. Deterministic trial division up to sqrt(n) takes exponential time O(2^{b/2}) where b is bit length.',
            '• Fermat Primality Test (Fermat’s Little Theorem):',
            '  If p is prime and gcd(a, p) = 1, then a^{p-1} ≡ 1 (mod p).',
            '  - Pick random a in [2..n-2].',
            '  - If a^{n-1} mod n != 1, then n is DEFINITELY composite (witness found).',
            '  - If a^{n-1} mod n == 1, n is PROBABLY prime.',
            '• Miller-Rabin Test (Overcoming Carmichael Numbers):',
            '  Factorizes n - 1 = 2^s * d. Checks square roots of unity.',
            '  If n is composite, at least 3/4 of all bases a in [2..n-1] are witnesses to its compositeness.',
            '  Running k tests with random bases reduces error probability to at most (1/4)^k.',
            '  For k = 40, error probability <= 4^{-40} ≈ 10^{-24} (cryptographically secure in polynomial O(k log^3 n) time).'
          ]
        }
      ],
      summary: [
        'Finding duplicates by randomly picking pairs achieves expected O(1) time with 1/4 success probability per trial.',
        'Fermat test checks a^{n-1} mod n == 1 using Fermat’s Little Theorem.',
        'Miller-Rabin fixes Carmichael number flaws; has error probability at most (1/4)^k over k trials.',
        'Enables generating 2048-bit cryptographic primes in milliseconds.'
      ],
      keyPoints: [
        'Duplicate Finding: O(1) Expected Time',
        'Success Probability p ≈ 1/4 per Loop',
        'Fermat’s Little Theorem: a^{n-1} ≡ 1 mod n',
        'Miller-Rabin Error ≤ (1/4)^k',
        'Polynomial Time in Bit Length'
      ],
      conclusion: 'Randomization transforms intractable search and number-theoretic verification into ultra-fast algorithms indispensable to modern cryptography.'
    },

    // Q15
    {
      id: 'daa-u5-q15',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 15,
      title: 'What are Approximation Algorithms? Explain their philosophy, define the Accuracy Ratio r(s_a) and Performance Ratio R_A, and explain why they are needed for NP-Hard problems.',
      shortTitle: 'Approximation Algorithms: Philosophy, Ratios & Metrics',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q6(b)', marks: 8 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q5(b)', marks: 9 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q6(b)', marks: 4 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q5(b)', marks: 9 }
      ],
      frequencyNote: 'Directly asked across all papers as the primary definition and metric question for approximation algorithms.',
      syllabusTopics: [
        'Approximation Algorithms Philosophy',
        'Why Approximation is Needed for NP-Hard Problems',
        'Accuracy Ratio r(s_a)',
        'Performance Ratio R_A',
        'Heuristic vs Approximation Guarantees'
      ],
      definition: 'An Approximation Algorithm is a polynomial-time algorithm for an NP-hard optimization problem that produces a feasible solution guaranteed to be close to the true optimal solution, backed by a mathematically provable performance ratio.',
      sections: [
        {
          title: '1. Why Approximation Algorithms are Needed',
          content: [
            '• For NP-hard optimization problems (e.g., TSP, Vertex Cover, 0/1 Knapsack), no polynomial-time algorithm is known (assuming P != NP).',
            '• Exact algorithms (like Dynamic Programming or Branch and Bound) require exponential time O(2^n) in the worst case, becoming unusable for large instances (e.g. n > 100).',
            '• Pure heuristics (like greedy nearest neighbor without bounds) might work well on some instances, but offer NO guarantees and can be arbitrarily terrible on adversarial inputs.',
            '• Approximation Algorithms bridge this gap: they execute in guaranteed POLYNOMIAL TIME and provide a PROVABLE WORST-CASE BOUND on how far the output can deviate from the optimum.'
          ]
        },
        {
          title: '2. Accuracy Ratio r(s_a) and Performance Ratio R_A',
          content: [
            'Let I be an instance of an optimization problem.',
            'Let f(s*) be the objective function value of the true optimal solution s*.',
            'Let f(s_a) be the objective function value produced by the approximation algorithm on instance I.',
            '',
            '1. Accuracy Ratio r(s_a):',
            '   • For Minimization Problems (e.g., TSP):',
            '     r(s_a) = f(s_a) / f(s*) >= 1.  (Since f(s_a) >= f(s*)).',
            '   • For Maximization Problems (e.g., Knapsack):',
            '     r(s_a) = f(s*) / f(s_a) >= 1.  (Since f(s*) >= f(s_a)).',
            '   In both cases, r(s_a) >= 1. The closer r(s_a) is to 1, the better the approximation solution.',
            '',
            '2. Performance Ratio R_A (Worst-Case Bound):',
            '   R_A is the supremum (maximum upper bound) of the accuracy ratio taken over ALL possible instances of the problem:',
            '   R_A = sup { r(s_a) | over all instances I }.',
            '   If an algorithm has R_A = 1.5, it is guaranteed to produce a solution within 50% of the true optimum for EVERY conceivable input.'
          ]
        }
      ],
      summary: [
        'Approximation algorithms solve NP-hard problems in polynomial time with provable accuracy bounds.',
        'Accuracy ratio r(s_a) = f(s_a)/f(s*) for min problems; f(s*)/f(s_a) for max problems; always >= 1.',
        'Performance ratio R_A is the worst-case accuracy ratio over all possible problem instances.',
        'Unlike ad-hoc heuristics, approximation algorithms provide rigorous mathematical guarantees.'
      ],
      keyPoints: [
        'Polynomial-Time Guarantee for NP-Hard Problems',
        'Accuracy Ratio r(s_a) ≥ 1',
        'Performance Ratio R_A = sup r(s_a)',
        'Heuristic vs Approximation Distinction'
      ],
      conclusion: 'Approximation algorithms provide the standard theoretical and practical framework for tackling intractable optimization problems in industrial computing.'
    },

    // Q16
    {
      id: 'daa-u5-q16',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 16,
      title: 'Classify Approximation Algorithms based on their Approximation Ratio: Constant Factor, PTAS, FPTAS, and Inapproximability. Contrast their time complexities and error bounds.',
      shortTitle: 'Classification of Approximation Algorithms: Constant Factor, PTAS, FPTAS',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q5(b)', marks: 9 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q5(b)', marks: 9 }
      ],
      frequencyNote: 'Directly asked as Paper 2 Q5(b) [9 Marks] and Paper 4 Q5(b) [9 Marks].',
      syllabusTopics: [
        'Classification of Approximation Algorithms',
        'Constant-Factor Approximation Algorithms',
        'Polynomial-Time Approximation Scheme (PTAS)',
        'Fully Polynomial-Time Approximation Scheme (FPTAS)',
        'Inapproximability Classes'
      ],
      definition: 'Approximation algorithms are classified into a hierarchy based on how tightly their approximation ratio can be tuned: Constant-Factor Approximations, Polynomial-Time Approximation Schemes (PTAS), Fully Polynomial-Time Approximation Schemes (FPTAS), and Inapproximable problems.',
      sections: [
        {
          title: '1. The Four Tiers of Approximation Algorithms',
          table: {
            headers: ['Classification Tier', 'Approximation Ratio Guarantee', 'Time Complexity Dependency', 'Representative Examples'],
            rows: [
              {
                parameter: '1. Constant-Factor Approximation',
                col1: 'Ratio is bounded by a fixed constant c (independent of input size n): f(s_a) <= c * f(s*).',
                col2: 'Polynomial in n: O(n^k).',
                col3: 'Vertex Cover (2-approximation), Metric TSP (2-approx, Christofides 1.5-approx).'
              },
              {
                parameter: '2. Polynomial-Time Approx Scheme (PTAS)',
                col1: 'Ratio is (1 + ε) for ANY user-chosen ε > 0: f(s_a) <= (1 + ε) * f(s*).',
                col2: 'Polynomial in n for any fixed ε, but can be exponential in 1/ε: O(n^{O(1/ε)}).',
                col3: 'Euclidean TSP, Multiprocessor Scheduling.'
              },
              {
                parameter: '3. Fully Polynomial-Time Scheme (FPTAS)',
                col1: 'Ratio is (1 + ε) for any user-chosen ε > 0: f(s_a) <= (1 + ε) * f(s*). (Best possible!)',
                col2: 'Polynomial in BOTH input size n AND 1/ε: O((1/ε)^k * n^m).',
                col3: '0/1 Knapsack Problem (scaled DP achieves (1+ε) in O(n^3 / ε) time).'
              },
              {
                parameter: '4. Inapproximable Problems',
                col1: 'No constant-factor approximation exists unless P = NP.',
                col2: 'General TSP (without triangle inequality) cannot be approximated within ANY factor 2^n in poly-time.',
                col3: 'General TSP, Maximum Independent Set.'
              }
            ]
          }
        },
        {
          title: '2. Inapproximability of General TSP Theorem',
          content: [
            '• Theorem: If P != NP, then for ANY constant c >= 1, there does NOT exist a polynomial-time c-approximation algorithm for general Traveling Salesperson Problem.',
            '• Proof Idea: If such an algorithm existed, it could solve the NP-complete Hamiltonian Cycle problem in polynomial time by assigning edge weights 1 (if edge exists) and c * n + 2 (if edge does not exist).',
            '• A c-approximation would return a tour <= c * n if a Hamiltonian cycle exists, and > c * n if none exists, deciding Hamiltonian Cycle in polynomial time!',
            '• Therefore, TSP can only be approximated if edge weights satisfy the Triangle Inequality (Metric TSP).'
          ]
        }
      ],
      summary: [
        'Constant-factor: Fixed bound c (e.g., 2-approx for Vertex Cover and Metric TSP).',
        'PTAS: Tunable to (1 + ε), poly-time in n but can be exponential in 1/ε.',
        'FPTAS: Tunable to (1 + ε), poly-time in both n and 1/ε (e.g., 0/1 Knapsack).',
        'General TSP is inapproximable within any constant c unless P = NP.'
      ],
      keyPoints: [
        'Constant-Factor (Ratio c)',
        'PTAS: O(n^{1/ε})',
        'FPTAS: Poly(n, 1/ε)',
        'Inapproximability of General TSP',
        'Triangle Inequality Prerequisite'
      ],
      conclusion: 'The classification hierarchy reflects how closely an NP-hard problem can be approached, with FPTAS representing the pinnacle of approximation capability.'
    },

    // Q17
    {
      id: 'daa-u5-q17',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 17,
      title: 'Explain Approximation Algorithms for the Traveling Salesperson Problem (TSP): i) Nearest Neighbor Heuristic, and ii) Twice-Around-the-Tree 2-Approximation Algorithm. Prove the 2-approximation bound using the Triangle Inequality.',
      shortTitle: 'TSP Approximation: Nearest Neighbor vs 2-Approximation Algorithm',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Decode / Textbook', questionNo: 'Section 5.5.1 / Q11', marks: 8 }
      ],
      frequencyNote: 'The fundamental approximation algorithm design and proof required in university algorithms courses.',
      syllabusTopics: [
        'Nearest Neighbor Heuristic for TSP',
        'Metric TSP & Triangle Inequality',
        'Twice-Around-the-Tree 2-Approximation Algorithm',
        'Mathematical Proof of c(H) <= 2 * OPT'
      ],
      definition: 'For Metric TSP (where distances satisfy the triangle inequality dist(u, w) <= dist(u, v) + dist(v, w)), the Twice-Around-the-Tree algorithm computes a Minimum Spanning Tree (MST), doubles its edges to form an Eulerian tour, and shortcuts repeated vertices to produce a Hamiltonian cycle whose cost is guaranteed to be at most 2 * OPT.',
      sections: [
        {
          title: '1. Heuristic 1: Nearest Neighbor Algorithm',
          content: [
            '• Procedure:',
            '  1. Start at an arbitrary city v_1.',
            '  2. Repeat: From the current city, travel to the nearest unvisited city.',
            '  3. After visiting all n cities, return to the start city v_1.',
            '• Analysis:',
            '  - Extremely fast: O(n^2) running time.',
            '  - Major Drawback: Greedy decisions early on can force a disastrously long return edge at the final step.',
            '  - Accuracy ratio can grow with O(log n), providing no constant-factor guarantee.'
          ]
        },
        {
          title: '2. Heuristic 2: Twice-Around-the-Tree 2-Approximation Algorithm',
          content: [
            '• Precondition: Distances must satisfy the Triangle Inequality: dist(u, w) <= dist(u, v) + dist(v, w) for all u, v, w.',
            '• Algorithm Steps:',
            '  1. Step 1: Compute a Minimum Spanning Tree (MST) T of the complete graph using Prim’s or Kruskal’s algorithm.',
            '  2. Step 2: Double every edge of T to create a multigraph where every vertex has an even degree.',
            '  3. Step 3: Find an Eulerian circuit W that traverses every doubled edge exactly once.',
            '  4. Step 4: Traverse the Eulerian circuit W and shortcut (skip) already visited vertices to form a Hamiltonian cycle H.'
          ]
        },
        {
          title: '3. Proof of the 2-Approximation Bound: c(H) <= 2 * OPT',
          content: [
            'Let OPT be the cost of the optimal TSP tour H*:',
            '1. Removing any edge from optimal tour H* yields a spanning tree.',
            '   Since T is the MINIMUM spanning tree, its cost must be strictly less than or equal to H*:',
            '   c(T) <= c(H*) = OPT.',
            '',
            '2. The Eulerian walk W traverses every edge of T twice:',
            '   c(W) = 2 * c(T) <= 2 * OPT.',
            '',
            '3. By the Triangle Inequality, replacing a path through an already-visited vertex u -> v -> w with a direct edge u -> w cannot increase the cost:',
            '   dist(u, w) <= dist(u, v) + dist(v, w).',
            '   Therefore, the shortcut Hamiltonian cycle H has cost at most that of the Euler walk:',
            '   c(H) <= c(W).',
            '',
            '4. Combining inequalities:',
            '   c(H) <= c(W) = 2 * c(T) <= 2 * OPT.',
            '   Hence, c(H) <= 2 * OPT! The algorithm is a provable 2-Approximation!'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-tsp-2approx',
          title: 'Metric TSP 2-Approximation (Twice-Around-the-Tree)',
          caption: 'Figure 5.5: 3-stage process: Compute MST T (c(T) ≤ OPT) -> Double edges to form Euler walk (cost 2T) -> Shortcut via Triangle Inequality to obtain Hamiltonian tour H ≤ 2·OPT.',
          type: 'svg-interactive',
          svgType: 'tsp-metric-2approximation',
          description: 'Step-by-step visual proof of twice around the tree approximation.'
        }
      ],
      summary: [
        'Nearest Neighbor is simple O(n^2) but lacks constant-factor bounds.',
        'Twice-Around-the-Tree algorithm operates on Metric TSP (satisfying triangle inequality).',
        'Steps: MST -> Double edges to Euler walk -> Shortcut visited vertices.',
        'Proof: c(MST) <= OPT; Euler walk = 2*c(MST) <= 2*OPT; Shortcuts cannot increase cost by triangle inequality.',
        'Guaranteed 2-approximation: c(H) <= 2 * OPT.'
      ],
      keyPoints: [
        'Metric TSP & Triangle Inequality',
        'Nearest Neighbor Limitations',
        'Step 1: Compute MST (Cost ≤ OPT)',
        'Step 2: Double edges to Euler Walk (Cost = 2·MST)',
        'Step 3: Shortcut to Hamiltonian Cycle (Cost ≤ 2·MST)',
        'Provable Ratio R_A ≤ 2'
      ],
      conclusion: 'The Twice-Around-the-Tree algorithm exemplifies how structural graph properties (MST) and metric constraints (triangle inequality) combine to deliver guaranteed approximation bounds for NP-hard problems.'
    },

    // Q18
    {
      id: 'daa-u5-q18',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 18,
      title: 'Consider the 4-city TSP graph with vertices {A, B, C, D} and edge weights: AB=2, BC=3, CD=2, DA=7, AC=4, BD=4. Apply the Nearest Neighbor heuristic and find its accuracy ratio. Then apply the Twice-Around-the-Tree algorithm and compare results.',
      shortTitle: 'Solved Numerical: TSP Nearest-Neighbor vs 2-Approximation',
      marks: 9,
      importance: 'Important',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Decode / Textbook', questionNo: 'Example 5.5.1 / 5.5.2', marks: 10 }
      ],
      frequencyNote: 'Directly solves the complete numerical example from the textbook (pages 5-20 to 5-22).',
      syllabusTopics: [
        'Solved TSP Approximation Numerical',
        'Nearest Neighbor Trace and Accuracy Ratio',
        'MST Construction and Shortcut Cycle'
      ],
      definition: 'Demonstrates the execution of both the Nearest Neighbor heuristic and the Twice-Around-the-Tree approximation on a 4-city graph, calculating the exact accuracy ratio r(s_a) = f(s_a) / f(s*).',
      sections: [
        {
          title: '1. Problem Instance Data',
          content: [
            '4 Cities: {A, B, C, D}. Distances:',
            '• AB = 2, BC = 3, CD = 2',
            '• DA = 7 (long return edge)',
            '• Diagonal AC = 4, BD = 4',
            'Let start city be A.'
          ]
        },
        {
          title: '2. Nearest Neighbor Execution from City A',
          content: [
            '1. At City A: Distances to unvisited are AB=2, AC=4, AD=7. Nearest is B (dist=2). Go to B.',
            '2. At City B: Distances to unvisited are BC=3, BD=4. Nearest is C (dist=3). Go to C.',
            '3. At City C: Only unvisited city is D (dist=2). Go to D.',
            '4. At City D: All cities visited. Return to start city A: dist(D, A) = 7.',
            '',
            'Tour obtained: A -> B -> C -> D -> A.',
            'Total cost s_a = dist(A,B) + dist(B,C) + dist(C,D) + dist(D,A) = 2 + 3 + 2 + 7 = 14.'
          ]
        },
        {
          title: '3. Optimal Tour s* via Exhaustive Search',
          content: [
            'Evaluate alternative tour: A -> B -> D -> C -> A:',
            'Cost = dist(A, B) + dist(B, D) + dist(D, C) + dist(C, A)',
            'Cost s* = 2 + 4 + 2 + 4 = 12.',
            'The optimal tour length is s* = 12.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Compute accuracy ratio for Nearest Neighbor tour on 4-city graph, then construct 2-approximation tour.',
        givenData: [
          { label: 'Vertices', value: '{A, B, C, D}' },
          { label: 'Edges', value: 'AB=2, BC=3, CD=2, DA=7, AC=4, BD=4' },
          { label: 'Start City', value: 'A' }
        ],
        toFind: [
          'Nearest Neighbor tour cost s_a',
          'Optimal tour cost s*',
          'Accuracy ratio r(s_a) = f(s_a) / f(s*)',
          'MST cost and Twice-Around-the-Tree tour'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Nearest Neighbor Path Trace',
            explanation: 'Greedy choices from A: A -> B (2), B -> C (3), C -> D (2), return D -> A (7).',
            calculation: 'Cost = 2 + 3 + 2 + 7 = 14',
            result: 'Nearest Neighbor Tour Cost = 14'
          },
          {
            stepNumber: 2,
            title: 'Compute Accuracy Ratio r(s_a)',
            explanation: 'Divide heuristic cost (14) by optimal tour cost (12):',
            calculation: 'r(s_a) = 14 / 12 = 1.1667',
            result: 'r(s_a) = 1.1667 (16.7% above optimum)'
          },
          {
            stepNumber: 3,
            title: 'Twice-Around-the-Tree: Construct MST',
            explanation: 'Pick cheapest edges that do not form a cycle: AB (2), CD (2), BC (3). Total MST cost = 2 + 2 + 3 = 7 <= OPT (7 <= 12).',
            calculation: 'Cost(MST) = 2 + 3 + 2 = 7',
            result: 'MST Cost = 7'
          },
          {
            stepNumber: 4,
            title: 'Euler Walk and Shortcut Cycle',
            explanation: 'Double MST edges: A-B, B-C, C-D. Euler walk: A -> B -> C -> D -> C -> B -> A. Shortcut visited nodes C and B on return: A -> B -> C -> D -> A. Cost = 14 <= 2 * Cost(MST) = 14 <= 2 * 12 = 24.',
            calculation: 'Cost(H) = 14 <= 2 * OPT',
            result: '2-Approximation Bound Verified'
          }
        ],
        finalAnswer: {
          label: 'TSP Approximation Results',
          value: 'Nearest Neighbor Cost = 14, Optimal Cost = 12, Accuracy Ratio = 1.167',
          interpretation: 'Nearest Neighbor is 16.7% over optimal; Twice-Around-the-Tree satisfies the ≤ 2·OPT bound.'
        }
      },
      summary: [
        'Nearest Neighbor yields tour A-B-C-D-A with cost 14.',
        'Optimal tour is A-B-D-C-A with cost 12.',
        'Accuracy ratio r(s_a) = 14 / 12 = 1.167 (16.7% above optimum).',
        'MST cost is 7; 2-approximation bound 2*7 = 14 guarantees tour length <= 14.'
      ],
      keyPoints: [
        'Nearest Neighbor Tour = 14',
        'Optimal Tour = 12',
        'Accuracy Ratio r(s_a) = 1.167',
        'MST Cost = 7 <= OPT = 12',
        '2·Cost(MST) = 14'
      ],
      conclusion: 'The numerical demonstrates that while Nearest Neighbor produces a usable tour with 1.167 ratio on this instance, Twice-Around-the-Tree guarantees that no matter how large the graph, cost will never exceed twice the optimum.'
    },

    // Q19
    {
      id: 'daa-u5-q19',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 19,
      title: 'Explain the principles of Embedded Systems Algorithms. Discuss characteristics, hardware constraints, and contrast Fixed Priority Scheduling with Dynamic Priority Scheduling using Queue architectures.',
      shortTitle: 'Embedded Algorithms: Constraints & Real-Time Task Scheduling',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q6(b)', marks: 9 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q6(a)', marks: 6 },
        { paper: 'Decode / Textbook', questionNo: 'Section 5.6 / Q13, Q14', marks: 8 }
      ],
      frequencyNote: 'Directly asked as Paper 3 Q6(a) [6M] and foundational for Paper 2 Q6(b).',
      syllabusTopics: [
        'Characteristics of Embedded Systems',
        'Embedded Hardware Constraints (ROM, RAM, Power)',
        'Fixed Priority Scheduling (Rate Monotonic)',
        'Dynamic Priority Scheduling (EDF)',
        'Queue Architecture (Sleep, Ready, Deadline, Blocked)'
      ],
      definition: 'An Embedded System is a computer system with a dedicated function within a larger mechanical or electrical system. Algorithms designed for embedded systems must operate under severe resource constraints (limited RAM/ROM, low power) while satisfying strict real-time deadline guarantees.',
      sections: [
        {
          title: '1. Characteristics of Embedded Systems',
          content: [
            '1. Single-Functional: Dedicated to executing a specific application repeatedly throughout its lifetime (e.g., pacemaker, ECU, washing machine).',
            '2. Tightly Constrained: Extreme limitations on memory (kilobytes of RAM, megabytes of ROM), clock frequency, power consumption, and hardware cost.',
            '3. Reactive and Real-Time: Must continuously react to external sensors/actuators and compute results within rigid deadlines. A late result in a hard real-time system is equivalent to system failure.',
            '4. Microcontroller-Based: Executes directly on bare-metal firmware or small Real-Time Operating Systems (RTOS) without virtual memory paging.'
          ]
        },
        {
          title: '2. Task Scheduling Architectures in Embedded RTOS',
          content: [
            'Embedded schedulers maintain task lifecycle states across structured queues:',
            '• Sleep Queue: Contains periodic or event-driven tasks waiting for timers or external sensor interrupts.',
            '• Ready Queue: Contains tasks ready for execution; organized by priority levels.',
            '• Execution: The single highest-priority ready task assigned to the CPU core.',
            '• Blocked Queue: Tasks awaiting I/O or synchronized mutual-exclusion locks.'
          ]
        },
        {
          title: '3. Fixed Priority vs. Dynamic Priority Scheduling',
          content: [
            'In Simple Words:',
            'Rate Monotonic Scheduling (RMS) gives permanent VIP status to frequent tasks: if a task repeats often, it always gets highest priority.',
            'Earliest Deadline First (EDF) gives priority to urgency: whichever task is closest to missing its deadline right now gets the CPU first.'
          ],
          table: {
            headers: ['Rate Monotonic Scheduling (RMS - Fixed Priority)', 'Earliest Deadline First (EDF - Dynamic Priority)'],
            rows: [
              {
                parameter: 'Priorities are assigned statically at design time and remain fixed and constant throughout system execution.',
                col1: 'Priorities are assigned dynamically at runtime and change continuously based on which deadline is approaching fastest.'
              },
              {
                parameter: 'Scheduling rule: Tasks with shorter periods (higher repetition frequencies) are given higher priority.',
                col1: 'Scheduling rule: The task whose absolute deadline is nearest to the current clock time is given highest priority.'
              },
              {
                parameter: 'Maximum CPU utilization is bounded by the Liu-Layland limit: U ≤ n(2^(1/n) - 1) ≈ 69.3% for large numbers of tasks.',
                col1: 'Achieves 100% optimal theoretical CPU utilization (U ≤ 1.0), squeezing full performance out of the processor.'
              },
              {
                parameter: 'Extremely lightweight and simple to implement in Real-Time Operating Systems with minimal runtime scheduler overhead.',
                col1: 'Moderate overhead: Requires dynamically re-evaluating and sorting deadline queues at every scheduling event.'
              },
              {
                parameter: 'Predictable under overload: High-priority critical tasks are guaranteed to meet deadlines while low-priority tasks drop.',
                col1: 'Vulnerable to the domino effect under overload: One delayed task can cause cascading missed deadlines across all tasks.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-embed-sched',
          title: 'Embedded System Real-Time Task Scheduling Architecture',
          caption: 'Figure 5.6: RTOS Queue architecture: Sleep Queue -> Ready Queue -> Deadline Priority Filter -> CPU Execution / Blocked state.',
          type: 'svg-interactive',
          svgType: 'embedded-scheduler-queues',
          description: 'Scheduling queues in embedded systems showing priority filtering.'
        }
      ],
      summary: [
        'Embedded systems are single-functional, tightly constrained, reactive, and real-time.',
        'Schedulers manage Sleep Queue, Ready Queue, CPU Execution, and Blocked Queue.',
        'Fixed Priority (RMS) assigns static priorities with simple O(1) scheduling overhead (utilization ~69%).',
        'Dynamic Priority (EDF) assigns priority to closest deadline, achieving up to 100% utilization.'
      ],
      keyPoints: [
        'Single-Functional & Real-Time',
        'Severe RAM/ROM/Power Limits',
        'Sleep, Ready & Blocked Queues',
        'Fixed Priority (Rate Monotonic)',
        'Dynamic Priority (Earliest Deadline First)',
        'Deterministic Latency Guarantees'
      ],
      conclusion: 'Embedded algorithm design demands balancing algorithmic sophistication against execution predictability, memory footprint, and hard real-time latency bounds.'
    },

    // Q20
    {
      id: 'daa-u5-q20',
      unitId: 'unit-5',
      subjectId: 'daa',
      qNumber: 20,
      title: 'Case Study: You are designing an embedded system for a medical device that continuously monitors patient vital signs (timestamps, heart rate, temperature, blood pressure) in real time. Suggest and rigorously justify the most suitable sorting algorithm for this scenario with respect to memory, stability, and responsiveness.',
      shortTitle: 'Embedded Case Study: Sorting Patient Vital Signs Sensor Stream',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q6(b)', marks: 9 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q6(a)', marks: 6 }
      ],
      frequencyNote: 'Directly asked as Paper 2 Q6(b) [9 Marks] and Paper 3 Q6(a) [6 Marks] as an applied system design problem.',
      syllabusTopics: [
        'Embedded Sorting Algorithm Requirements',
        'Medical Patient Vital Signs Monitoring Case Study',
        'Why Insertion Sort is Optimal for Sensor Streams',
        'Comparison with QuickSort, MergeSort, and HeapSort'
      ],
      definition: 'For a real-time medical vital signs monitor, the sorting algorithm must process incoming sensor packets under strict embedded constraints: in-place execution (O(1) auxiliary RAM), zero recursion (preventing microcontroller stack overflow), algorithm stability (preserving chronological order), and adaptive linear O(n) runtime on nearly-sorted data. Insertion Sort is the provably optimal choice.',
      sections: [
        {
          title: '1. Technical Analysis of Medical Sensor Stream Characteristics',
          content: [
            'A medical patient monitor continuously samples data packets from multiple sensors:',
            '• Packet Tuple: (Timestamp, Heart Rate, Body Temperature, Blood Pressure).',
            '• Stream Nature: Data arrives continuously in real-time, already almost sorted by timestamp.',
            '• Microcontroller Hardware Constraints:',
            '  - Highly restricted RAM (e.g., 8 KB to 64 KB total SRAM). Dynamic heap allocation (malloc) is strictly prohibited in life-critical medical devices to prevent fragmentation and memory leaks.',
            '  - Small hardware call stack: Deep recursion can cause catastrophic stack overflow.',
            '  - Zero Tolerance for Jitter: Latency must be predictable and deterministic.'
          ]
        },
        {
          title: '2. Systematic Evaluation of Candidate Sorting Algorithms',
          table: {
            headers: ['Sorting Algorithm', 'Time (Best / Worst)', 'Auxiliary RAM', 'Recursion & Stability', 'Suitability for Medical Device'],
            rows: [
              {
                parameter: 'Insertion Sort',
                col1: 'Best: O(n)\nWorst: O(n²)',
                col2: 'O(1) strictly In-Place',
                col3: 'Non-Recursive\n100% Stable',
                col4: 'OPTIMAL. Runs in O(n) on nearly-sorted sensor stream; zero stack risk; tiny ROM footprint.'
              },
              {
                parameter: 'QuickSort',
                col1: 'Best: O(n log n)\nWorst: O(n²)',
                col2: 'O(log n) call stack',
                col3: 'Recursive\nUnstable',
                col4: 'UNACCEPTABLE. Degenerates to O(n²) on nearly-sorted data; recursion risks stack overflow on microcontroller.'
              },
              {
                parameter: 'MergeSort',
                col1: 'O(n log n)\nO(n log n)',
                col2: 'O(n) auxiliary buffer',
                col3: 'Recursive\nStable',
                col4: 'UNACCEPTABLE. Requires O(n) extra RAM buffer, exceeding tight microcontroller SRAM capacity.'
              },
              {
                parameter: 'HeapSort',
                col1: 'O(n log n)\nO(n log n)',
                col2: 'O(1) strictly In-Place',
                col3: 'Non-Recursive\nUnstable',
                col4: 'POOR. Not adaptive (takes full O(n log n) even on already-sorted data); unstable (scrambles identical timestamps).'
              }
            ]
          }
        },
        {
          title: '3. Why Insertion Sort is the Proven Optimal Choice',
          content: [
            '1. Strictly In-Place (O(1) Space): Requires only a single temporary scalar variable (temp). No dynamic memory allocation is performed, satisfying FDA/IEC 62304 medical software safety guidelines.',
            '2. Adaptive Linear O(n) Runtime: Since sensor readings arrive sequentially over time, the array is already nearly sorted. Insertion sort performs only ONE comparison per newly arrived element, inserting it in O(1) time and yielding O(n) total runtime.',
            '3. Stable Sorting: Preserves the original chronological order of sensor readings with identical timestamps.',
            '4. Zero Stack Overhead: Implemented via simple nested iterative loops (for / while); completely immune to call stack overflow.',
            '5. Minimal ROM Code Footprint: Implementation occupies under 50 bytes of machine code in microcontroller flash memory.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-embed-sort',
          title: 'In-Place Insertion Sort for Embedded Vital Signs Stream',
          caption: 'Figure 5.7: Memory partitioning: Sorted Zone A[0..i-1], Key temp, and Unsorted Zone A[i..n-1] operating strictly in-place with zero dynamic memory allocation.',
          type: 'svg-interactive',
          svgType: 'embedded-insertion-sort',
          description: 'In-place array memory layout showing sorted zone and insertion.'
        }
      ],
      summary: [
        'Medical patient sensor streams require in-place memory, stability, and real-time response.',
        'QuickSort fails due to O(n^2) worst case on sorted inputs and recursion stack danger.',
        'MergeSort fails due to O(n) RAM buffer consumption.',
        'Insertion Sort is optimal: O(1) auxiliary space, non-recursive, stable, and adaptive O(n) on near-sorted data.'
      ],
      keyPoints: [
        'Medical Sensor Tuple: (Time, HR, Temp, BP)',
        'Zero Dynamic Allocation (IEC 62304 Compliance)',
        'In-Place O(1) Auxiliary Space',
        'Non-Recursive Implementation',
        'Adaptive O(n) on Near-Sorted Stream',
        'Recommended Algorithm: Insertion Sort'
      ],
      conclusion: 'Insertion Sort is the premier sorting algorithm for real-time medical vital signs monitoring, perfectly harmonizing strict embedded hardware limitations with real-time streaming demands.'
    }
  ]
};
