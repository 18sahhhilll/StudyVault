import { Unit } from '@/types';

export const daaUnit4Data: Unit = {
  id: 'unit-4',
  unitNumber: 4,
  title: 'Backtracking and Branch-n-Bound Algorithmic Strategies',
  shortTitle: 'Backtracking & Branch-n-Bound',
  description: 'Comprehensive study of exhaustive state-space search techniques covering Backtracking control abstractions, Explicit vs Implicit constraints, n-Queens, Graph m-Coloring, Sum of Subsets, and Branch & Bound approaches (FIFO, LIFO, LCBB), Bounding Functions, Reduced Matrix Traveling Salesperson Problem (TSP), and 0/1 Knapsack Branch & Bound.',
  syllabus: [
    'Backtracking Principle: Solution Vector, Criterion Function, Explicit and Implicit Constraints',
    'State Space Tree Terminology: Problem State, Solution State, Answer State, Live Node, E-Node, Dead Node, Bounding Functions',
    'Control Abstraction for Backtracking: Recursive and Iterative Schemas, Time and Efficiency Analysis',
    'The n-Queens Problem: Mathematical Formulation, Column and Diagonal Conflict Conditions, 4-Queens and 8-Queens walkthroughs',
    'Graph m-Coloring Problem: Adjacency Formulation, NextValue Subroutine, Recursive Algorithm, Planar Graph 3-Coloring',
    'Sum of Subsets Problem: Bounding Functions, Tree Organization, Comparison of Element Sorting Orders',
    'Branch and Bound Principle: Optimization Formulation, Lower Bound c^(x), Upper Bound u(x), Pruning / Killing Criteria',
    'Exploration Strategies: FIFO Branch and Bound (Queue / BFS), LIFO Branch and Bound (Stack / D-Search), Least-Cost (LC) Search',
    'Control Abstraction for Least-Cost Search (LCBB): Min-Heap Priority Queue, Ranking Function, Algorithm LC_Search',
    'Traveling Salesperson Problem (TSP) using LCBB: Dynamic Reduction Technique, Row Minimization, Column Minimization, Bounding Formula',
    '0/1 Knapsack Problem using LCBB: Continuous Greedy Fractional Upper Bound Formulation, State-Space Tree Exploration',
    'Comparative Analysis: Backtracking vs Branch and Bound, Greedy Method vs Dynamic Programming, Drawbacks of Branch and Bound'
  ],
  questionPaperIndex: [
    {
      paper: 'Paper 1 ([6004]-480A)',
      qMain: 'Q3(a) Backtracking: Principle, Control Abstraction, Time Analysis (8M), Q3(b) Compare Greedy vs Dynamic Programming (Feasibility, Optimality, Recursion, Memorization, Complexity) (9M)',
      qOr: 'Q4(a) Sum of Subsets Backtracking for S={2, 3, 5, 6, 8, 10}, sum=10 (8M), Q4(b) Branch and Bound Method & LC-Search Control Abstraction (9M)'
    },
    {
      paper: 'Paper 2 ([6263]-81)',
      qMain: 'Q3(a) Graph m-Coloring Backtracking Algorithm & Time Complexity (8M), Q3(b) 0/1 Knapsack LC Branch and Bound for 3 items m=7 (9M)',
      qOr: 'Q4(a) Compare Backtracking with Branch and Bound (Search, Tree, Problem classes) (8M), Q4(b) Sum of Subsets for A={5, 10, 15, 20, 25}, sum=30 (9M)'
    },
    {
      paper: 'Paper 3 ([6181]-101)',
      qMain: 'Q3(a) Branch and Bound Strategy & TSP 4 Cities (9M), Q3(b) Backtracking Principle, Control Abstraction, Time Analysis (8M)',
      qOr: 'Q4(a) Branch and Bound 0/1 Knapsack Algorithm & Instance m=15 kg (9M), Q4(b) Sum of Subsets Backtracking for S={2, 3, 5, 6, 8, 10}, sum=10 (8M)'
    },
    {
      paper: 'Paper 4 ([6354]-485)',
      qMain: 'Q3(a) Graph Coloring Backtracking for 7-Vertex Graph with R, G, B (8M), Q3(b) 0/1 Knapsack LC Branch and Bound for 3 items m=14 (9M)',
      qOr: 'Q4(a) Traveling Salesperson 4 Cities A,B,C,D using Branch and Bound (8M), Q4(b) Short Note on LC Branch and Bound (5M), Q4(c) Drawbacks of Branch and Bound (4M)'
    }
  ],
  quickRevision: {
    keyDefinitions: [
      {
        term: 'Backtracking',
        definition: 'A systematic search paradigm that builds candidate solution tuples component by component, using depth-first search (DFS) with bounding functions to prune paths that cannot lead to a feasible or optimal solution.'
      },
      {
        term: 'Explicit Constraints',
        definition: 'Rules that restrict each solution tuple element x_i to take values only from a given finite candidate set S_i, independent of the problem instance (e.g., x_i ∈ {0, 1} or x_i ∈ {1, 2, ..., n}).'
      },
      {
        term: 'Implicit Constraints',
        definition: 'Instance-specific criteria that determine whether the elements in tuple (x_1, ..., x_n) relate to each other properly to satisfy the criterion function (e.g., no two queens attack each other, sum of chosen subset equals M).'
      },
      {
        term: 'E-Node (Expanding Node)',
        definition: 'The live node whose child nodes are currently being generated and explored in the state space tree.'
      },
      {
        term: 'Dead Node',
        definition: 'A generated node that cannot be expanded any further because all its children have already been generated or it has been killed by a bounding function.'
      },
      {
        term: 'Branch and Bound (B&B)',
        definition: 'A state space search technique primarily for optimization problems that explores subtrees using lower/upper bounds to prune unpromising branches that cannot beat the best-known solution.'
      },
      {
        term: 'Least-Cost (LC) Search',
        definition: 'A Branch and Bound search strategy where the next E-node is chosen from a priority min-heap based on an intelligent ranking function c^(x) = f(h(x)) + g(x) yielding minimal node expansions.'
      },
      {
        term: 'Reduced Cost Matrix',
        definition: 'A cost matrix for TSP where every row and column contains at least one zero entry (or all ∞), obtained by subtracting the row and column minima. The sum of subtracted constants provides a rigorous lower bound c^ on tour length.'
      }
    ],
    coreFormulas: [
      {
        name: 'Queens Diagonal Non-Attack Formula',
        latex: '|x[i] - x[j]| \\neq |i - j| \\quad \\forall i \\neq j',
        description: 'Two queens placed at (i, x[i]) and (j, x[j]) lie on the same 45° or 135° diagonal if the absolute column difference equals the absolute row difference.'
      },
      {
        name: 'm-Coloring Next Color Generator',
        latex: 'x[k] = (x[k] + 1) \\bmod (m + 1)',
        description: 'Cycles sequentially through available color indices {1, 2, ..., m} and wraps back to 0 when all colors are exhausted.'
      },
      {
        name: 'Sum of Subsets Feasibility & Bounding',
        latex: 's + w_{k+1} \\le M \\quad \\text{and} \\quad s + \\sum_{i=k+1}^n w_i \\ge M',
        description: 'Pruning bounds: prune if adding next weight exceeds target M, or if sum of all remaining elements cannot even reach target M.'
      },
      {
        name: 'LC-Search Heuristic Evaluation Function',
        latex: '\\hat{c}(x) = f(h(x)) + g(x)',
        description: 'Heuristic lower bound cost where g(x) is exact cost from root to node x, and h(x) is estimated cost from x to goal.'
      },
      {
        name: 'Branch and Bound Node Pruning / Killing Rule',
        latex: '\\text{Kill node } x \\iff \\hat{c}(x) \\ge u',
        description: 'A live node x is immediately killed if its estimated lower bound is greater than or equal to the current upper bound u of minimum-cost solution.'
      },
      {
        name: 'TSP Dynamic Reduction Child Cost',
        latex: '\\hat{c}(j) = \\hat{c}(i) + M[i, j] + r_{\\text{reduction}}',
        description: 'Lower bound for branching from city i to city j equals parent cost plus arc cost M[i,j] plus additional row and column reduction sum of the child matrix.'
      }
    ],
    comparisonHighlights: [
      {
        title: 'Backtracking vs Branch and Bound',
        summary: 'Backtracking traverses using Depth-First Search (DFS) with a LIFO stack, focused on decision/enumeration problems. Branch & Bound uses BFS / Priority Queues (LC-Search) with upper and lower bounds, focused on optimization problems.'
      },
      {
        title: 'Greedy Method vs Dynamic Programming',
        summary: 'Greedy makes irrevocable locally optimal choices with O(1) decision overhead; Dynamic Programming explores all overlapping subproblems maintaining Bellman optimality and memoizing values.'
      },
      {
        title: 'FIFO vs LIFO vs LC Branch and Bound',
        summary: 'FIFO uses a standard queue (BFS); LIFO uses a stack (D-search); LCBB uses a min-heap ranked by c^(x), offering the most targeted search with the fewest expanded nodes.'
      }
    ],
    examTips: [
      'For 4-Queens, always specify the 1D solution vector x = [2, 4, 1, 3] and state the diagonal math condition |x[i] - x[j]| != |i - j| to score full marks.',
      'In Sum of Subsets numericals, always verify first whether the array is sorted in ascending order. If not, state that sorting is mandatory for bounding conditions to hold.',
      'In TSP reduced matrix problems, show both Row Reduction and Column Reduction explicitly and calculate total initial cost c^(root) = sum(row_mins) + sum(col_mins).',
      'For 0/1 Knapsack LCBB, compute the fractional continuous knapsack bound for lower bound c^(x) and discrete items for upper bound u(x). Show pruned nodes with c^(x) >= u.'
    ]
  },
  questions: [
    // Q1
    {
      id: 'daa-u4-q1',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 1,
      title: 'Explain with suitable examples the Principle of Backtracking. Distinguish between Explicit and Implicit Constraints, and define Live Node, E-Node, Dead Node, and Bounding Functions.',
      shortTitle: 'Backtracking Principle, Constraints & Terminology',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q3(a)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q3(b)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q1, Q2, Q4', marks: 8 }
      ],
      frequencyNote: 'Asked in almost every semester examination paper as the fundamental theory question for Unit IV.',
      syllabusTopics: [
        'Backtracking Principle',
        'Explicit vs Implicit Constraints',
        'State Space Tree Terminology',
        'Live Node, E-Node, Dead Node, Bounding Functions'
      ],
      definition: 'Backtracking is a systematic search paradigm for finding solutions to combinatorial problems. It represents the solution as an n-tuple (x_1, x_2, ..., x_n) and constructs the vector component-by-component, using depth-first search (DFS) along with bounding functions to test whether a partial vector has any chance of leading to an acceptable solution, pruning dead ends immediately.',
      sections: [
        {
          title: '1. Core Principle of Backtracking',
          content: [
            'Many combinatorial problems require finding a solution that maximizes, minimizes, or satisfies a specific criterion function P(x_1, x_2, ..., x_n).',
            '• In backtracking, the desired solution is expressible as an n-tuple (x_1, x_2, ..., x_n), where each x_i is chosen from a finite candidate set S_i.',
            '• The basic mechanism builds the vector one component at a time: after determining (x_1, x_2, ..., x_k), the algorithm tests whether this partial vector can be extended to an optimal or feasible answer.',
            '• If a partial vector cannot possibly lead to a feasible solution, the entire subtree of potential completions is abandoned (pruned), and the algorithm backtracks to component k-1 to try an alternate value.'
          ]
        },
        {
          title: '2. Problem Categorization Solved by Backtracking',
          content: [
            'Backtracking addresses three major classes of problems:',
            '1. Decision Problems: Determine whether at least one feasible solution satisfying constraints exists (e.g., Is this graph 3-colorable?).',
            '2. Optimization Problems: Find the best feasible solution that optimizes (maximizes or minimizes) a criterion function (e.g., 0/1 Knapsack, TSP).',
            '3. Enumeration Problems: Enlist all possible feasible solutions that satisfy the constraint set (e.g., Find all 92 distinct solutions to the 8-Queens problem).'
          ]
        },
        {
          title: '3. Explicit vs. Implicit Constraints',
          table: {
            headers: ['Parameter', 'Explicit Constraints', 'Implicit Constraints'],
            rows: [
              {
                parameter: 'Definition',
                col1: 'Rules that restrict each element x_i to take values only from a given finite candidate set S_i.',
                col2: 'Rules that determine which tuples in the solution space actually satisfy the problem criterion function.'
              },
              {
                parameter: 'Scope',
                col1: 'Depends strictly on the variable definitions, independent of specific problem instance values.',
                col2: 'Depends on the specific relationships and interactions between multiple tuple variables.'
              },
              {
                parameter: 'Example in 8-Queens',
                col1: 'x_i in {1, 2, 3, 4, 5, 6, 7, 8} for each row i in {1..8}. Total solution space = 8^8 tuples.',
                col2: 'No two queens on same column (x_i != x_j) and no two queens on same diagonal (|x_i - x_j| != |i - j|).'
              },
              {
                parameter: 'Example in Sum of Subsets',
                col1: 'x_i in {0, 1} indicating whether item w_i is excluded (0) or included (1).',
                col2: 'The sum of selected weights must equal target M: sum(w_i * x_i) = M.'
              },
              {
                parameter: 'Pruning Action',
                col1: 'Restricts the domain of branches generated at each node.',
                col2: 'Used by bounding functions to terminate search along unpromising paths.'
              }
            ]
          }
        },
        {
          title: '4. State-Space Tree Terminology',
          content: [
            'The execution of a backtracking algorithm is visualized as exploring an implicit tree called a State Space Tree:',
            '• Problem State: Each node in the state space tree represents a state of the problem.',
            '• State Space: The collection of all paths from the root to all other nodes defines the state space.',
            '• Solution States: Problem states s for which the path from the root defines a complete tuple in the solution space (usually leaf nodes in fixed-tuple formulations).',
            '• Answer States: Solution states that satisfy all implicit constraints, meaning they represent valid solutions to the problem.',
            '• Live Node: A node that has been generated and whose children have not all been fully explored yet.',
            '• E-Node (Expanding Node): The currently active live node whose children are being generated.',
            '• Dead Node: A generated node that is not to be expanded any further because all its children have been examined or a bounding function killed it.',
            '• Bounding Functions: Heuristic conditions denoted B(x_1, ..., x_k) that return false if partial path (x_1, ..., x_k) cannot possibly lead to an answer state, immediately killing the current node.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-bt-tree',
          title: 'Backtracking State-Space Tree Architecture',
          caption: 'Figure 4.1: State Space Tree node classifications showing Problem State, Live Nodes, E-Node expansion, Bounding Function pruning, and Answer State leaves.',
          type: 'svg-interactive',
          svgType: 'backtracking-state-space-tree',
          description: 'Illustration of tree nodes categorized into Live Node, E-Node, Dead Node, and Answer State with DFS backtrack branches.'
        }
      ],
      summary: [
        'Backtracking builds candidate solutions component-by-component in an n-tuple using Depth-First Search.',
        'Explicit constraints restrict each variable domain x_i in S_i; implicit constraints enforce global problem validity.',
        'Tree nodes are categorized as Problem States, Solution States, and valid Answer States.',
        'Live nodes have pending children; the E-node is currently expanding; dead nodes are terminated by bounding functions.'
      ],
      keyPoints: [
        'DFS Traversal with LIFO Stack',
        'Explicit Constraints (x_i in S_i)',
        'Implicit Constraints (Criterion Satisfied)',
        'E-Node (Expanding Node)',
        'Dead Node (Killed / Finished)',
        'Bounding Function B(a_1..a_k)'
      ],
      conclusion: 'By evaluating bounding functions at each step, backtracking avoids generating the entire combinatorial solution space (e.g., pruning from O(n^n) down to practical subsets), making it a cornerstone technique for hard search problems.'
    },

    // Q2
    {
      id: 'daa-u4-q2',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 2,
      title: 'Write both Recursive and Iterative Control Abstractions for the Backtracking algorithmic technique. Provide a detailed time and efficiency analysis.',
      shortTitle: 'Backtracking Control Abstraction & Efficiency Analysis',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q3(a)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q3(b)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q6, Q7', marks: 8 }
      ],
      frequencyNote: 'Standard 8-mark question requiring clean pseudocode schemas and mathematical breakdown of complexity factors.',
      syllabusTopics: [
        'Control Abstraction for Backtracking',
        'Recursive Schema',
        'Iterative Schema',
        'Time and Efficiency Analysis'
      ],
      definition: 'A Backtracking Control Abstraction is an algorithmic template that governs systematic depth-first exploration of a solution space, recursively or iteratively attempting candidate choices, validating them via bounding functions, and unwinding upon failure.',
      sections: [
        {
          title: '1. Recursive Backtracking Control Abstraction',
          content: [
            'Let (a_1, a_2, ..., a_k) be a partial solution vector. The recursive algorithm Backtrack(k) computes the k-th component:',
            '```text',
            'Algorithm Backtrack(k)',
            '// a[1..k] is a partial solution vector.',
            '// T(a[1], ..., a[k-1]) is the set of all candidate values for a[k].',
            '// B_k(a[1], ..., a[k]) is the bounding function.',
            '{',
            '    for (each x in T(a[1], ..., a[k-1])) do',
            '    {',
            '        if (B_k(a[1], ..., a[k-1], x) == true) then',
            '        {',
            '            a[k] = x; // Assign feasible candidate',
            '            if ( (a[1], ..., a[k]) is a path to an answer node ) then',
            '                write(a[1..k]); // Output valid solution',
            '            ',
            '            if (k < n) then',
            '                Backtrack(k + 1); // Recurse to next component',
            '        }',
            '    }',
            '}',
            '```'
          ]
        },
        {
          title: '2. Iterative Backtracking Control Abstraction',
          content: [
            'The non-recursive schema replaces system call stack recursion with explicit index manipulation:',
            '```text',
            'Algorithm Non_Rec_Backtrack(n)',
            '{',
            '    k = 1;',
            '    while (k != 0) do',
            '    {',
            '        if (there is an untried x in T(a[1], ..., a[k-1]) and B_k(a[1], ..., a[k-1], x)) then',
            '        {',
            '            a[k] = x;',
            '            if ((a[1], ..., a[k]) is an answer node) then',
            '                write(a[1..k]);',
            '            k = k + 1; // Move forward to next depth',
            '        }',
            '        else',
            '        {',
            '            k = k - 1; // Backtrack to previous component',
            '        }',
            '    }',
            '}',
            '```'
          ]
        },
        {
          title: '3. Efficiency and Time Complexity Analysis',
          content: [
            'The execution time of a backtracking algorithm depends on four fundamental factors:',
            '1. Time required to generate next candidate element: T_gen = O(p(n)).',
            '2. Size of candidate set |T(a_1, ..., a_{k-1})|: denoted m_k.',
            '3. Time required by bounding function B_k to evaluate feasibility: T_bound = O(q(n)).',
            '4. Number of nodes in the state space tree that satisfy the bounding functions: N_valid.',
            '',
            'Mathematical Representation:',
            'Total Time = Sum_{k=1}^n [ N_k * (T_gen + T_bound) ]',
            '• The first three factors (generation and bounding check) typically execute in polynomial time O(p(n)).',
            '• The fourth factor, N_valid, depends on the strength of the bounding function. In the worst case, if bounding functions prune nothing, N_valid = O(m^n) or O(2^n), leading to exponential worst-case complexity.',
            '• However, with effective bounding functions, the average-case runtime is drastically smaller than brute force.'
          ]
        }
      ],
      summary: [
        'Recursive schema advances with Backtrack(k + 1) and returns upon loop completion.',
        'Iterative schema uses a while (k != 0) loop with k = k + 1 for forward progress and k = k - 1 for backtrack.',
        'Efficiency depends on candidate set size, bounding function speed, and total nodes satisfying bounding criteria.',
        'Worst-case complexity is O(m^n) or O(n!), but bounding functions provide enormous average-case acceleration.'
      ],
      keyPoints: [
        'Recursive Backtrack(k)',
        'Iterative Non_Rec_Backtrack(n)',
        'Forward step (k = k + 1)',
        'Backtrack step (k = k - 1)',
        '4 Efficiency Factors',
        'Bounding Pruning Power'
      ],
      conclusion: 'Control abstractions standardize depth-first exploration across diverse applications, decoupling domain-specific candidate generation and bounding logic from the tree-traversal engine.'
    },

    // Q3
    {
      id: 'daa-u4-q3',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 3,
      title: 'Compare Greedy Method and Dynamic Programming with respect to: i) Feasibility, ii) Optimality, iii) Recursion, iv) Memorization, and v) Time Complexity.',
      shortTitle: 'Comparison: Greedy Method vs Dynamic Programming',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q3(b)', marks: 9 },
        { paper: 'Decode / Textbook', questionNo: 'Q2.8 / Review', marks: 9 }
      ],
      frequencyNote: 'Directly asked as Paper 1 Q3(b) with the 5 explicit comparison parameters enumerated in the university paper.',
      syllabusTopics: [
        'Greedy Method vs Dynamic Programming',
        'Feasibility & Optimality Criteria',
        'Recursion & Memorization Mechanisms',
        'Time Complexity Comparison'
      ],
      definition: 'Greedy Method and Dynamic Programming are both optimization paradigms that solve problems by combining choices, but differ fundamentally in how choices are committed: Greedy makes irreversible locally optimal choices without backtracking, while Dynamic Programming systematically searches all subproblem combinations via Bellman’s Principle of Optimality and memoization.',
      sections: [
        {
          title: '1. In-Depth Parameter Comparison Table',
          table: {
            headers: ['Comparison Parameter', 'Greedy Algorithmic Strategy', 'Dynamic Programming Strategy'],
            rows: [
              {
                parameter: 'i) Feasibility',
                col1: 'Feasibility is checked at every single step using a feasibility function before admitting a candidate element into the solution set. Once an infeasible choice is rejected, it is never reconsidered.',
                col2: 'Feasibility is evaluated collectively across subproblems. Solutions to subproblems are combined only if their combined constraints satisfy overall global feasibility requirements.'
              },
              {
                parameter: 'ii) Optimality',
                col1: 'Constructs a locally optimal choice at each step hoping it yields a global optimum. Does NOT guarantee global optimality for all problems (fails for 0/1 Knapsack).',
                col2: 'Guarantees global optimality provided the problem satisfies Bellman’s Principle of Optimality and possesses optimal substructure.'
              },
              {
                parameter: 'iii) Recursion',
                col1: 'Typically implemented iteratively via simple loops (e.g., sorting followed by single-pass selection). No backward recursive dependence across subproblems.',
                col2: 'Inherently formulated as a recursive relation expressing optimal value of larger problem in terms of smaller overlapping subproblems.'
              },
              {
                parameter: 'iv) Memorization / Caching',
                col1: 'Does not require memoization or table storage. Operates with O(1) or O(n) auxiliary space as decisions are made greedily on the fly.',
                col2: 'Extensively requires memoization (Top-Down with caching) or tabular storage (Bottom-Up DP table) to prevent recomputing overlapping subproblems.'
              },
              {
                parameter: 'v) Time Complexity',
                col1: 'Significantly faster, typically O(n log n) dominated by initial sorting, or O(n) for linear scans (e.g., Fractional Knapsack O(n log n)).',
                col2: 'Slower due to full subproblem evaluation, typically pseudo-polynomial or polynomial: O(n * W) for Knapsack, O(n^3) for MCM, O(n^2) for OBST.'
              },
              {
                parameter: 'vi) Decision Reversibility',
                col1: 'Irrevocable: once a decision is made, it can never be changed or backtracked.',
                col2: 'Exhaustive: all possibilities at each stage are evaluated and optimal choice is remembered.'
              },
              {
                parameter: 'vii) Classic Applications',
                col1: 'Fractional Knapsack, Kruskal MST, Prim MST, Dijkstra Shortest Path, Huffman Coding, Job Sequencing with Deadlines.',
                col2: '0/1 Knapsack, Matrix Chain Multiplication (MCM), Optimal Binary Search Trees (OBST), All-Pairs Shortest Path (Floyd-Warshall).'
              }
            ]
          }
        },
        {
          title: '2. Examination Summary of Key Differences',
          content: [
            '• Greedy makes decisions top-down, selecting the best candidate without waiting for solutions to subproblems.',
            '• Dynamic programming solves bottom-up, first finding optimal solutions to subproblems and storing them in an auxiliary table before assembling the final answer.',
            '• If a problem exhibits overlapping subproblems and optimal substructure, Dynamic Programming is guaranteed to find the true optimal answer, whereas Greedy requires the Matroid or greedy-choice property.'
          ]
        }
      ],
      summary: [
        'Greedy checks feasibility step-by-step and commits irrevocably to locally optimal choices.',
        'Dynamic programming guarantees global optimality using Bellman\'s recurrence and memoized tables.',
        'Greedy requires no recursion or memoization, running in O(n log n) time.',
        'DP uses recursive relations and 2D tabular storage, running in polynomial/pseudo-polynomial time.'
      ],
      keyPoints: [
        'Feasibility (Step-by-step vs Tabular)',
        'Optimality (Local vs Global)',
        'Recursion (Iterative vs Recurrence)',
        'Memorization (None vs 2D Table)',
        'Time Complexity (O(n log n) vs O(n * W))'
      ],
      conclusion: 'Greedy method delivers superior runtime efficiency when greedy choice property holds, while Dynamic Programming provides robust optimality for problems with overlapping subproblems.'
    },

    // Q4
    {
      id: 'daa-u4-q4',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 4,
      title: 'Formulate the n-Queens Problem. Derive the mathematical conditions for column and diagonal non-attacking constraints. Present the complete recursive algorithm.',
      shortTitle: 'The n-Queens Problem: Formulation, Math & Algorithm',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q3(a) related', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q9, Q10', marks: 8 }
      ],
      frequencyNote: 'Fundamental backtracking benchmark asked frequently with mathematical modeling and pseudocode expectations.',
      syllabusTopics: [
        'n-Queens Problem Formulation',
        '1D Solution Vector Representation',
        'Diagonal Conflict Formula Derivation',
        'Recursive Algorithm Queen(row, n) and Place(row, column)'
      ],
      definition: 'The n-Queens problem consists of placing n non-attacking queens on an n x n chessboard such that no two queens occupy the same row, same column, or same diagonal.',
      sections: [
        {
          title: '1. Mathematical Modeling & 1D Vector Representation',
          content: [
            'A naive 2D board requires n^2 positions, yielding an enormous search space C(n^2, n).',
            'Since every row must contain exactly one queen, we represent the board configuration as an n-tuple:',
            'x = (x_1, x_2, ..., x_n) where x[i] = column index of the queen in row i (1 <= i <= n).',
            '• Explicit Constraints: x[i] in {1, 2, ..., n} for all i in {1..n}.',
            '  This immediately reduces the search space from C(n^2, n) to n^n tuples.'
          ]
        },
        {
          title: '2. Derivation of Non-Attacking Implicit Constraints',
          content: [
            '1. Row Constraint: Automatically satisfied because index i represents the row, placing exactly one queen per row.',
            '2. Column Constraint: No two queens can be in the same column:',
            '   x[i] != x[j]  for all distinct rows i != j.',
            '3. Diagonal Constraint Derivation:',
            '   Let two queens be located at coordinates (i, x[i]) and (j, x[j]).',
            '   • On a 45° positive diagonal: row + col = constant => i + x[i] = j + x[j] => x[i] - x[j] = j - i.',
            '   • On a 135° negative diagonal: row - col = constant => i - x[i] = j - x[j] => x[i] - x[j] = i - j.',
            '   Combining both equations using absolute values yields the famous diagonal conflict formula:',
            '   |x[i] - x[j]| == |i - j|  =>  CONFLICT (Queens attack diagonally)',
            '   Therefore, for a placement to be legal, we must satisfy:',
            '   |x[i] - x[j]| != |i - j|  and  x[i] != x[j]  for all j < i.'
          ]
        },
        {
          title: '3. Complete Recursive Algorithm Pseudocode',
          content: [
            '```text',
            'Algorithm Place(row, column)',
            '// Returns true if a queen can be safely placed at (row, column)',
            '{',
            '    for i = 1 to row - 1 do',
            '    {',
            '        // Check column conflict OR diagonal conflict',
            '        if (board[i] == column or abs(board[i] - column) == abs(i - row)) then',
            '            return false; // Conflict detected',
            '    }',
            '    return true; // No conflict, position is safe',
            '}',
            '',
            'Algorithm Queen(row, n)',
            '// Solves n-queens problem using backtracking',
            '{',
            '    for column = 1 to n do',
            '    {',
            '        if (Place(row, column) == true) then',
            '        {',
            '            board[row] = column; // Place queen',
            '            if (row == n) then',
            '                print_board(n); // Complete solution found',
            '            else',
            '                Queen(row + 1, n); // Recurse to next row',
            '        }',
            '    }',
            '}',
            '```'
          ]
        },
        {
          title: '4. Complexity Analysis',
          content: [
            '• Time Complexity: In the worst-case, the number of nodes checked is bounded by O(n!). The bounding function Place() executes in O(n) per node. Thus total time is O(n!).',
            '• Space Complexity: O(n) for the 1D board array and call stack recursion depth.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-nqueens-board',
          title: '4-Queens Chessboard Placement & Diagonal Math',
          caption: 'Figure 4.2: 4x4 chessboard layout demonstrating the solution tuple x = [2, 4, 1, 3] and geometric diagonal non-attacking conditions.',
          type: 'svg-interactive',
          svgType: 'nqueens-chessboard-visual',
          description: 'Detailed board view showing queen coordinates, row-by-row indices, and diagonal constraint formulas.'
        }
      ],
      summary: [
        'Board configuration is represented as a 1D vector x[1..n] where x[i] is queen column in row i.',
        'Explicit constraint: x[i] in {1, 2, ..., n}; search space size is n^n.',
        'Implicit constraints: distinct columns (x[i] != x[j]) and distinct diagonals (|x[i] - x[j]| != |i - j|).',
        'Place(row, col) checks previous rows 1..row-1 in O(n) time; recursive Queen() explores in O(n!) time.'
      ],
      keyPoints: [
        '1D Tuple Representation x[1..n]',
        'Column Check (board[i] != col)',
        'Diagonal Formula (|board[i] - col| != |i - row|)',
        'Algorithm Place() and Queen()',
        'Time Complexity O(n!)',
        'Space Complexity O(n)'
      ],
      conclusion: 'The 1D formulation reduces an otherwise intractably large search space down to O(n!), demonstrating the efficiency of backtracking with mathematical pruning.'
    },

    // Q5
    {
      id: 'daa-u4-q5',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 5,
      title: 'Walk through the 4-Queens Problem using Backtracking. Construct its full State-Space Tree and derive both valid solutions.',
      shortTitle: '4-Queens Problem: State-Space Tree Walkthrough',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Unit IV Choice', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q11, Q12', marks: 8 }
      ],
      frequencyNote: 'Universally required solved problem in university exams showing step-by-step backtracking decisions.',
      syllabusTopics: [
        '4-Queens State Space Tree',
        'Backtracking Tree Trace',
        'Derivation of Symmetric Solutions [2, 4, 1, 3] and [3, 1, 4, 2]'
      ],
      definition: 'The 4-Queens problem requires placing 4 queens on a 4 x 4 chessboard such that no two queens attack each other. It has exactly two symmetric solutions: x = [2, 4, 1, 3] and x = [3, 1, 4, 2].',
      sections: [
        {
          title: '1. Step-by-Step Backtracking Trace for First Solution',
          content: [
            'Let board array be x[1..4]. Initial board is empty.',
            '• Row 1: Try col 1 => x[1] = 1. Safe.',
            '• Row 2: Try col 1 (same col, clash). Try col 2 (diag with (1,1): |2-1| == |2-1|, clash).',
            '         Try col 3 => x[2] = 3. Safe.',
            '• Row 3: Try col 1 (diag with (2,3): |3-1| == |2-3| is false, but col with (1,1) clash).',
            '         Try col 2 (diag with (1,1): |2-1| == |3-1| is false, but diag with (2,3): |2-3| == |3-2|=1, clash).',
            '         Try col 3 (same col with row 2). Try col 4 (diag with (2,3): |4-3| == |3-2|=1, clash).',
            '         All columns 1..4 exhausted in row 3! DEAD END. Backtrack to row 2.',
            '• Row 2: Advance from col 3 to col 4 => x[2] = 4. Safe.',
            '• Row 3: Try col 1 (col clash with (1,1)). Try col 2 => x[3] = 2. Safe (|2-4|=2 != 1, |2-1|=1 != 2).',
            '• Row 4: Try col 1 (clash), col 2 (clash), col 3 (diag with (3,2): |3-2|==1, clash), col 4 (clash).',
            '         All exhausted! Backtrack to row 3, row 2, row 1.',
            '• Row 1: Advance from col 1 to col 2 => x[1] = 2. Safe!',
            '• Row 2: Try col 1 (diag with (1,2): clash), col 2 (clash), col 3 (diag with (1,2): clash), try col 4 => x[2] = 4. Safe!',
            '• Row 3: Try col 1 => x[3] = 1. Check: not in col 2 or 4. Diagonals: |1-2|=1 != 2, |1-4|=3 != 1. Safe!',
            '• Row 4: Try col 1 (clash), col 2 (clash), try col 3 => x[4] = 3.',
            '         Check: not in col 2, 4, 1. Diagonals: |3-1|=2 != 1, |3-4|=1 != 2, |3-2|=1 != 3. ALL SAFE!',
            '• VALID SOLUTION 1 FOUND: x = [2, 4, 1, 3]!'
          ]
        },
        {
          title: '2. Both Symmetric Solutions and Board Matrices',
          content: [
            'Solution 1: x = [2, 4, 1, 3]',
            'Row 1: . Q . . (Col 2)',
            'Row 2: . . . Q (Col 4)',
            'Row 3: Q . . . (Col 1)',
            'Row 4: . . Q . (Col 3)',
            '',
            'Solution 2 (Mirror Reflection across Vertical Axis): x = [3, 1, 4, 2]',
            'Row 1: . . Q . (Col 3)',
            'Row 2: Q . . . (Col 1)',
            'Row 3: . . . Q (Col 4)',
            'Row 4: . Q . . (Col 2)',
            'Note: Solution 2 is obtained by symmetry: x\'[i] = 5 - x[i].'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Solve the 4-Queens problem using backtracking. Trace the path leading to the first valid solution and verify all diagonal constraints.',
        givenData: [
          { label: 'Board Size (n)', value: '4 × 4 chessboard' },
          { label: 'Solution Vector', value: 'x = [x₁, x₂, x₃, x₄] where x[i] is column of Queen in row i' }
        ],
        toFind: [
          'Step-by-step row placements',
          'Dead end detection and backtrack unwinding',
          'Final solution vector x = [2, 4, 1, 3] and symmetric solution [3, 1, 4, 2]'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Initial Attempt at x[1] = 1',
            explanation: 'Place Queen 1 at (1, 1). Queen 2 placed at (2, 3). For Queen 3 at row 3, all columns {1, 2, 3, 4} result in conflicts.',
            calculation: 'x = [1, 3, ?, ?] ==> No safe column for row 3 (Dead End)',
            result: 'Dead End at Row 3'
          },
          {
            stepNumber: 2,
            title: 'Backtrack and advance Queen 2 to (2, 4)',
            explanation: 'Place Queen 2 at (2, 4). Queen 3 placed at (3, 2). For Queen 4 at row 4, all columns {1, 2, 3, 4} fail diagonal/column checks.',
            calculation: 'x = [1, 4, 2, ?] ==> Row 4 exhausted (Dead End)',
            result: 'Dead End at Row 4'
          },
          {
            stepNumber: 3,
            title: 'Complete Backtrack to Row 1: Place Queen 1 at (1, 2)',
            explanation: 'Backtrack all the way to root. Advance Queen 1 to column 2.',
            calculation: 'x[1] = 2',
            result: 'Row 1 Queen placed at Column 2'
          },
          {
            stepNumber: 4,
            title: 'Place Queen 2 at Row 2',
            explanation: 'Cols 1, 2, 3 fail. Col 4 is safe: |4 - 2| = 2 != |2 - 1| = 1.',
            calculation: 'x[2] = 4',
            result: 'Row 2 Queen placed at Column 4'
          },
          {
            stepNumber: 5,
            title: 'Place Queen 3 at Row 3',
            explanation: 'Col 1 is safe: not in {2, 4}. |1 - 4| = 3 != |3 - 2| = 1; |1 - 2| = 1 != |3 - 1| = 2.',
            calculation: 'x[3] = 1',
            result: 'Row 3 Queen placed at Column 1'
          },
          {
            stepNumber: 6,
            title: 'Place Queen 4 at Row 4 (Final Solution)',
            explanation: 'Cols 1, 2 clash. Col 3 is checked against rows 1, 2, 3. No conflict exists!',
            calculation: 'x[4] = 3 ==> x = [2, 4, 1, 3]',
            result: 'Row 4 Queen placed at Column 3 (Solution Complete!)'
          }
        ],
        finalAnswer: {
          label: '4-Queens Solutions',
          value: 'Solution 1: x = [2, 4, 1, 3]  |  Solution 2: x = [3, 1, 4, 2]',
          interpretation: 'Exactly 2 distinct symmetric non-attacking solutions exist on a 4x4 chessboard.'
        }
      },
      summary: [
        'Starting with Queen 1 at col 1 leads to dead ends at row 3 and row 4, forcing a full backtrack.',
        'Advancing Queen 1 to col 2 enables the sequence: row 1 -> col 2, row 2 -> col 4, row 3 -> col 1, row 4 -> col 3.',
        'Solution 1 is x = [2, 4, 1, 3]; mirror solution 2 is x = [3, 1, 4, 2].',
        'State space tree has 24 leaf nodes in brute force, but backtracking inspects only valid branches.'
      ],
      keyPoints: [
        'Initial Dead End at x[1] = 1',
        'Backtrack to Root x[1] = 2',
        'Step-by-Step Column Allocations',
        'Solution 1: x = [2, 4, 1, 3]',
        'Symmetric Solution 2: x = [3, 1, 4, 2]',
        'Total Solutions: 2'
      ],
      conclusion: '4-Queens proves the power of backtracking: unviable branches are terminated early before deep subtree expansion, successfully discovering both solutions.'
    },

    // Q6
    {
      id: 'daa-u4-q6',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 6,
      title: 'Analyze the 8-Queens Problem. For the given partial feasible sequence (7, 5, 3, 1), trace the remaining queen placements using backtracking until a complete solution is obtained.',
      shortTitle: '8-Queens: Feasible Sequence (7, 5, 3, 1) Backtracking Trace',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Decode / Textbook', questionNo: 'Q13 / Example 4.4.3', marks: 8 }
      ],
      frequencyNote: 'Common university exam problem testing understanding of deep backtracking tree search on 8x8 boards.',
      syllabusTopics: [
        '8-Queens Problem',
        'Feasible Prefix Verification',
        'Backtracking Trace for Remaining Rows'
      ],
      definition: 'The 8-Queens problem places 8 non-attacking queens on an 8 x 8 chessboard. When given an initial 4-queen prefix like (7, 5, 3, 1), backtracking systematically explores the remaining rows {5, 6, 7, 8} by verifying column and diagonal constraints.',
      sections: [
        {
          title: '1. Problem Setup & Initial Prefix',
          content: [
            'Given partial placement for rows 1 to 4: x = (7, 5, 3, 1).',
            '• Queen 1 at (1, 7)',
            '• Queen 2 at (2, 5)',
            '• Queen 3 at (3, 3)',
            '• Queen 4 at (4, 1)',
            'Notice: These four queens occupy odd columns {7, 5, 3, 1}. They do not attack each other.',
            'Available remaining columns for rows 5, 6, 7, 8: even columns {2, 4, 6, 8}.'
          ]
        },
        {
          title: '2. Detailed Row-by-Row Search Trace',
          table: {
            headers: ['Attempted Placement', 'Row & Col', 'Constraint Verification', 'Action Taken'],
            rows: [
              {
                parameter: 'Row 5: Try Col 2',
                col1: 'Queen at (5, 2)',
                col2: 'Diagonal check with (4, 1): |2 - 1| = 1 == |5 - 4| = 1. CONFLICT!',
                col3: 'Reject col 2. Try next.'
              },
              {
                parameter: 'Row 5: Try Col 4',
                col1: 'Queen at (5, 4)',
                col2: 'Diagonal check with (3, 3): |4 - 3| = 1 == |5 - 3| = 2 (safe). Diag with (2, 5): |4 - 5| = 1 != 3 (safe). Diag with (1, 7): |4 - 7| = 3 != 4 (safe). Diag with (4, 1): |4 - 1| = 3 != 1 (safe).',
                col3: 'SAFE! Assign x[5] = 4.'
              },
              {
                parameter: 'Row 6: Try Col 2',
                col1: 'Queen at (6, 2)',
                col2: 'Diagonal with (5, 4): |2 - 4| = 2 == |6 - 5| = 1 is false. Diag with (3, 3): |2 - 3| = 1 == |6 - 3| = 3 is false. Diag with (2, 5): |2 - 5| = 3 != 4. Diag with (1, 7): |2 - 7| = 5 == |6 - 1| = 5. CONFLICT!',
                col3: 'Reject col 2.'
              },
              {
                parameter: 'Row 6: Try Col 6',
                col1: 'Queen at (6, 6)',
                col2: 'Diagonal with (3, 3): |6 - 3| = 3 == |6 - 3| = 3. CONFLICT!',
                col3: 'Reject col 6.'
              },
              {
                parameter: 'Row 6: Try Col 8',
                col1: 'Queen at (6, 8)',
                col2: 'Diagonal with (1, 7): |8 - 7| = 1 != 5. Diag with (2, 5): |8 - 5| = 3 != 4. Diag with (3, 3): |8 - 3| = 5 != 3. Diag with (4, 1): |8 - 1| = 7 != 2. Diag with (5, 4): |8 - 4| = 4 != 1. SAFE!',
                col3: 'SAFE! Assign x[6] = 8.'
              },
              {
                parameter: 'Row 7: Try Col 2',
                col1: 'Queen at (7, 2)',
                col2: 'Diagonal with (1, 7): |2 - 7| = 5 != 6. Diag with (2, 5): |2 - 5| = 3 != 5. Diag with (3, 3): |2 - 3| = 1 != 4. Diag with (4, 1): |2 - 1| = 1 != 3. Diag with (5, 4): |2 - 4| = 2 == |7 - 5| = 2. CONFLICT!',
                col3: 'Reject col 2.'
              },
              {
                parameter: 'Row 7: Try Col 6',
                col1: 'Queen at (7, 6)',
                col2: 'Diagonal with (6, 8): |6 - 8| = 2 != 1. Diag with (5, 4): |6 - 4| = 2 == |7 - 5| = 2. CONFLICT!',
                col3: 'Reject col 6. Row 7 dead end! Backtrack.'
              }
            ]
          }
        },
        {
          title: '3. Full Backtracking Resolution to Final 8-Queen Solution',
          content: [
            'Continuing the systematic backtracking process from row 5 yields the verified 8-queen completion:',
            'x = (7, 5, 3, 1, 6, 8, 2, 4) or (6, 4, 7, 1, 3, 5, 2, 8).',
            'For (6, 4, 7, 1, 3, 5, 2, 8):',
            '• Row 1: Col 6',
            '• Row 2: Col 4',
            '• Row 3: Col 7',
            '• Row 4: Col 1',
            '• Row 5: Col 3',
            '• Row 6: Col 5',
            '• Row 7: Col 2',
            '• Row 8: Col 8',
            'Verification shows no two queens share row, column, or diagonal. Total distinct 8-queens solutions = 92 (12 fundamental symmetry classes).'
          ]
        }
      ],
      summary: [
        'Starting with prefix (7, 5, 3, 1) restricts remaining choices to even columns {2, 4, 6, 8}.',
        'Testing row 5 safely selects col 4; row 6 selects col 8; row 7 conflicts on both 2 and 6, forcing backtracks.',
        'Backtracking navigates alternative valid paths to yield the complete 8-queen placement vector.',
        '8-Queens has 92 total valid solutions on an 8x8 chessboard.'
      ],
      keyPoints: [
        'Prefix (7, 5, 3, 1)',
        'Even Column Candidates {2, 4, 6, 8}',
        'Diagonal Conflict Detection',
        'Backtracking Unwind at Dead End',
        'Complete Solution Vector',
        '92 Total Solutions'
      ],
      conclusion: 'Demonstrates how backtracking recovers from dead ends deep inside the tree and advances toward valid 8-queen configurations.'
    },

    // Q7
    {
      id: 'daa-u4-q7',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 7,
      title: 'Explain the Graph m-Coloring Problem with respect to Backtracking. Write the NextValue (Gen_Col_Value) and recursive mColoring algorithms, and analyze their time complexity.',
      shortTitle: 'Graph m-Coloring: Problem, Algorithms & Complexity',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q3(a)', marks: 8 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q3(a)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q15, Q16', marks: 8 }
      ],
      frequencyNote: 'Directly asked as Paper 2 Q3(a) [8 Marks] and Paper 4 Q3(a) [8 Marks].',
      syllabusTopics: [
        'Graph m-Coloring Formulation',
        'Chromatic Number',
        'Algorithm Gen_Col_Value(k) / NextValue(k)',
        'Algorithm mColoring(k)',
        'Time Complexity Analysis O(n * m^n)'
      ],
      definition: 'The Graph m-Coloring Problem asks whether the vertices of an undirected graph G = (V, E) can be assigned colors from a set of m available colors such that no two adjacent vertices share the same color. The minimum number of colors needed to color G is called its Chromatic Number χ(G).',
      sections: [
        {
          title: '1. Problem Formulation & Data Representation',
          content: [
            'Let graph G = (V, E) have n vertices V = {1, 2, ..., n} and be represented by an n x n adjacency matrix G[1..n, 1..n]:',
            'G[i, j] = 1 if edge (i, j) exists in E, and 0 otherwise.',
            '• The solution is represented as an n-tuple: x = (x_1, x_2, ..., x_n) where x[k] in {1, 2, ..., m} is the color assigned to vertex k.',
            '• Explicit constraint: x[k] in {1, 2, ..., m}.',
            '• Implicit constraint: if G[k, j] == 1 (vertices k and j are adjacent), then x[k] != x[j].'
          ]
        },
        {
          title: '2. Next Color Generation Algorithm: NextValue(k)',
          content: [
            '```text',
            'Algorithm NextValue(k)',
            '// Assigns the next highest legal color index to x[k].',
            '// Returns 0 if all m colors have been tried and none are valid.',
            '{',
            '    repeat',
            '    {',
            '        x[k] = (x[k] + 1) mod (m + 1); // Next color index',
            '        if (x[k] == 0) then',
            '            return; // All m colors exhausted for vertex k',
            '        ',
            '        // Check if current color conflicts with any adjacent vertex',
            '        for j = 1 to n do',
            '        {',
            '            if (G[k, j] != 0 and x[k] == x[j]) then',
            '                break; // Conflict! Adjacent vertex has identical color',
            '        }',
            '        ',
            '        if (j == n + 1) then',
            '            return; // New legal color found, exit subroutine',
            '    }',
            '    until (false);',
            '}',
            '```'
          ]
        },
        {
          title: '3. Recursive Backtracking Driver: mColoring(k)',
          content: [
            '```text',
            'Algorithm mColoring(k)',
            '// Recursive backtracking procedure to color vertices k through n',
            '{',
            '    repeat',
            '    {',
            '        NextValue(k); // Generate a legal color for vertex k',
            '        if (x[k] == 0) then',
            '            return; // No valid color exists; backtrack to vertex k-1',
            '        ',
            '        if (k == n) then',
            '            write(x[1..n]); // All n vertices successfully colored!',
            '        else',
            '            mColoring(k + 1); // Recurse to next vertex',
            '    }',
            '    until (false);',
            '}',
            '```'
          ]
        },
        {
          title: '4. Time and Space Complexity Analysis',
          content: [
            '• State-Space Tree Size: At each level k, a vertex can branch into up to m children (one per color). For an n-vertex graph, the tree has depth n and contains at most:',
            '  Total Nodes = Sum_{i=0}^{n-1} m^i = (m^n - 1) / (m - 1) = O(m^n) nodes.',
            '• Work per node: NextValue(k) scans all n vertices to check adjacency G[k, j] != 0 in O(n) time.',
            '• Total Worst-Case Time Complexity: O(n * m^n).',
            '• Space Complexity: O(n) for the color vector x[1..n] and the recursive call stack of depth n.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-graph-color',
          title: 'Planar Graph m-Coloring Architecture',
          caption: 'Figure 4.3: Graph vertex adjacency, 3-color assignment (R, G, B), and state-space tree branch exploration.',
          type: 'svg-interactive',
          svgType: 'graph-coloring-graph-tree',
          description: 'Adjacency matrix representation and chromatic 3-coloring verification.'
        }
      ],
      summary: [
        'Graph m-coloring assigns colors {1..m} to n vertices such that G[k, j] == 1 implies x[k] != x[j].',
        'NextValue(k) increments x[k] mod (m+1) and validates non-adjacency in O(n) time.',
        'mColoring(k) recurses down depth-first, outputting when k == n and unwinding when NextValue returns 0.',
        'Time complexity is O(n * m^n); space complexity is O(n).'
      ],
      keyPoints: [
        'Adjacency Matrix G[n][n]',
        'Chromatic Number χ(G)',
        'NextValue(k) modulo generator',
        'mColoring(k) recursive driver',
        'Time Complexity O(n * m^n)',
        'Space Complexity O(n)'
      ],
      conclusion: 'Graph m-coloring demonstrates how backtracking provides complete solutions to NP-complete graph decision problems by pruning color conflicts early.'
    },

    // Q8
    {
      id: 'daa-u4-q8',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 8,
      title: 'Consider a 7-vertex graph represented by the adjacency matrix below. Use a recursive backtracking algorithm to color this graph with three colors (Red, Green, Blue). Trace the complete step-by-step solution.',
      shortTitle: 'Solved Problem: 7-Vertex Graph 3-Coloring Backtracking',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q3(a)', marks: 8 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q3(a) related', marks: 8 }
      ],
      frequencyNote: 'Directly asked as Paper 4 Q3(a) with the exact 7x7 adjacency matrix.',
      syllabusTopics: [
        'Solved Graph Coloring Numerical',
        '7-Vertex Graph Trace',
        '3-Color Assignment R, G, B'
      ],
      definition: 'Given a 7-vertex graph G with V = {A, B, C, D, E, F, G} and 3 available colors {Red=1, Green=2, Blue=3}, the backtracking algorithm systematically colors vertices sequentially while enforcing that no two adjacent vertices share a color.',
      sections: [
        {
          title: '1. Adjacency Matrix Specification',
          table: {
            headers: ['Vertex', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'Adjacency List'],
            rows: [
              { parameter: 'A', col1: '0', col2: '1', col3: '1', col4: '0', col5: '0', col6: '0', col7: '0', col8: 'Adjacent to {B, C}' },
              { parameter: 'B', col1: '1', col2: '0', col3: '0', col4: '1', col5: '1', col6: '0', col7: '0', col8: 'Adjacent to {A, D, E}' },
              { parameter: 'C', col1: '1', col2: '0', col3: '0', col4: '0', col5: '0', col6: '1', col7: '1', col8: 'Adjacent to {A, F, G}' },
              { parameter: 'D', col1: '0', col2: '1', col3: '0', col4: '0', col5: '0', col6: '0', col7: '0', col8: 'Adjacent to {B}' },
              { parameter: 'E', col1: '0', col2: '1', col3: '0', col4: '0', col5: '0', col6: '0', col7: '0', col8: 'Adjacent to {B}' },
              { parameter: 'F', col1: '0', col2: '0', col3: '1', col4: '0', col5: '0', col6: '0', col7: '0', col8: 'Adjacent to {C}' },
              { parameter: 'G', col1: '0', col2: '0', col3: '1', col4: '0', col5: '0', col6: '0', col7: '0', col8: 'Adjacent to {C}' }
            ]
          }
        },
        {
          title: '2. Analysis of Graph Topology',
          content: [
            'Notice the structure of the graph:',
            '• A is the root hub, connected to B and C.',
            '• B is connected to A, D, and E (a star subtree with B as center).',
            '• C is connected to A, F, and G (a star subtree with C as center).',
            '• D, E, F, G are leaf vertices with degree 1!',
            'This bipartite/tree-like graph has maximum degree 3 and is 2-colorable (bipartite). Thus 3 colors {Red, Green, Blue} are more than sufficient!'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Color the 7-vertex graph G with m=3 colors {1=Red, 2=Green, 3=Blue} using recursive backtracking.',
        givenData: [
          { label: 'Vertices (V)', value: '{A, B, C, D, E, F, G} (7 vertices)' },
          { label: 'Colors (m)', value: '3 colors: Red(1), Green(2), Blue(3)' },
          { label: 'Adjacency Map', value: 'A: {B,C}, B: {A,D,E}, C: {A,F,G}, D: {B}, E: {B}, F: {C}, G: {C}' }
        ],
        toFind: [
          'NextValue assignment per vertex',
          'Verification of adjacency constraints G[k, j] == 1 implies x[k] != x[j]',
          'Valid 3-coloring tuple x[1..7]'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Color Vertex A (k = 1)',
            explanation: 'NextValue(A) tries color 1 (Red). A has no previously colored neighbors.',
            calculation: 'x[A] = 1 (Red)',
            result: 'Vertex A = Red(1)'
          },
          {
            stepNumber: 2,
            title: 'Color Vertex B (k = 2)',
            explanation: 'B is adjacent to A (color 1). NextValue(B) tries color 1 (clash with A). Tries color 2 (Green). Safe!',
            calculation: 'x[B] = 2 (Green)',
            result: 'Vertex B = Green(2)'
          },
          {
            stepNumber: 3,
            title: 'Color Vertex C (k = 3)',
            explanation: 'C is adjacent to A (color 1). NextValue(C) skips color 1. Tries color 2 (Green). Since B and C are NOT adjacent (G[B, C] = 0), color 2 is completely legal!',
            calculation: 'x[C] = 2 (Green) [or 3 (Blue)]',
            result: 'Vertex C = Green(2)'
          },
          {
            stepNumber: 4,
            title: 'Color Vertex D (k = 4)',
            explanation: 'D is adjacent only to B (color 2). NextValue(D) tries color 1 (Red). Safe!',
            calculation: 'x[D] = 1 (Red)',
            result: 'Vertex D = Red(1)'
          },
          {
            stepNumber: 5,
            title: 'Color Vertex E (k = 5)',
            explanation: 'E is adjacent only to B (color 2). NextValue(E) tries color 1 (Red). D and E are not connected. Safe!',
            calculation: 'x[E] = 1 (Red)',
            result: 'Vertex E = Red(1)'
          },
          {
            stepNumber: 6,
            title: 'Color Vertex F (k = 6)',
            explanation: 'F is adjacent only to C (color 2). NextValue(F) tries color 1 (Red). Safe!',
            calculation: 'x[F] = 1 (Red)',
            result: 'Vertex F = Red(1)'
          },
          {
            stepNumber: 7,
            title: 'Color Vertex G (k = 7)',
            explanation: 'G is adjacent only to C (color 2). NextValue(G) tries color 1 (Red). All 7 vertices successfully assigned!',
            calculation: 'x[G] = 1 (Red)',
            result: 'Vertex G = Red(1) (Completed!)'
          }
        ],
        finalAnswer: {
          label: 'Valid 3-Coloring Vector',
          value: 'x = [Red, Green, Green, Red, Red, Red, Red]',
          interpretation: 'All adjacent vertices have distinct colors with zero backtracks required.'
        }
      },
      summary: [
        'Graph has 7 vertices with root A connected to B and C, which connect to leaves D, E and F, G.',
        'Backtracking assigns A=Red(1), B=Green(2), C=Green(2) (or Blue), D=Red(1), E=Red(1), F=Red(1), G=Red(1).',
        'No adjacent vertices share identical colors, fulfilling all implicit constraints.',
        'The chromatic number of this tree-structured bipartite graph is actually 2.'
      ],
      keyPoints: [
        'Adjacency List Mapping',
        'Assign A = Red (1)',
        'Assign B = Green (2)',
        'Assign C = Green or Blue (2 or 3)',
        'Leaves D, E, F, G = Red (1)',
        'Zero Conflicts Found'
      ],
      conclusion: 'The recursive algorithm assigns colors deterministically in a single forward pass without needing to backtrack because the available color count (3) exceeds the graph chromatic number (2).'
    },

    // Q9
    {
      id: 'daa-u4-q9',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 9,
      title: 'Formulate the Sum of Subsets Problem. Explain its Recursive Backtracking Algorithm, and establish the two crucial pruning bounds used to truncate the state-space tree.',
      shortTitle: 'Sum of Subsets: Formulation, Algorithm & Pruning Bounds',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q4(a)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q4(b)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q18', marks: 8 }
      ],
      frequencyNote: 'Consistently appears across examination papers in Q4 as an 8-mark core problem.',
      syllabusTopics: [
        'Sum of Subsets Problem Formulation',
        'Binary Tuple Representation x_i in {0, 1}',
        'Dual Pruning Bounds (Over-sum & Remainder Deficit)',
        'Recursive Algorithm SumOfSub(s, k, r)'
      ],
      definition: 'The Sum of Subsets Problem requires finding all subsets of a given set of n positive integers S = {w_1, w_2, ..., w_n} whose elements sum to a predetermined target integer M.',
      sections: [
        {
          title: '1. Problem Formulation & Sorting Precondition',
          content: [
            'Let S = {w_1, w_2, ..., w_n} be a set of n positive integers.',
            '• Mandatory Precondition: The weights MUST be arranged in non-decreasing order:',
            '  w_1 <= w_2 <= ... <= w_n.',
            '• Solution Vector: An n-tuple x = (x_1, x_2, ..., x_n) where:',
            '  x_i = 1 if w_i is included in the subset, and x_i = 0 if w_i is excluded.',
            '• Explicit constraint: x_i in {0, 1} for 1 <= i <= n.',
            '• Implicit constraint: Sum_{i=1}^n (w_i * x_i) = M.'
          ]
        },
        {
          title: '2. Dual Pruning Bounding Functions',
          content: [
            'Let s = current sum accumulated so far = Sum_{j=1}^k w_j * x_j.',
            'Let r = remaining sum available from untested elements = Sum_{j=k+1}^n w_j.',
            '',
            'Bounding Condition 1 (Exceeds Target Bound):',
            'Since elements are sorted in non-decreasing order (w_k <= w_{k+1}), if the current sum plus the next element exceeds M:',
            's + w_{k+1} > M',
            'Then including ANY subsequent element will also exceed M! We immediately PRUNE the left branch (x_{k+1} = 1).',
            '',
            'Bounding Condition 2 (Insufficient Remainder Bound):',
            'If the current sum plus ALL remaining elements cannot even reach M:',
            's + r < M',
            'Then it is mathematically impossible to reach target M along this entire subtree! We immediately PRUNE the current node.'
          ]
        },
        {
          title: '3. Complete Recursive Algorithm Pseudocode',
          content: [
            '```text',
            'Algorithm SumOfSub(s, k, r)',
            '// s = current accumulated sum',
            '// k = index of the current element being considered',
            '// r = remaining sum of all elements from k to n',
            '{',
            '    // Generate left child: include element w[k]',
            '    x[k] = 1;',
            '    if (s + w[k] == M) then',
            '        write(x[1..k]); // Subset found!',
            '    else if (s + w[k] + w[k+1] <= M) then',
            '        SumOfSub(s + w[k], k + 1, r - w[k]); // Recurse with included element',
            '    ',
            '    // Generate right child: exclude element w[k]',
            '    if ((s + r - w[k] >= M) and (s + w[k+1] <= M)) then',
            '    {',
            '        x[k] = 0;',
            '        SumOfSub(s, k + 1, r - w[k]); // Recurse with excluded element',
            '    }',
            '}',
            '```'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-subset-tree',
          title: 'Sum of Subsets State-Space Tree & Pruning',
          caption: 'Figure 4.4: Binary inclusion/exclusion state tree for S = {2, 3, 5, 6, 8, 10}, target M = 10, showing verified answer states and pruned branches.',
          type: 'svg-interactive',
          svgType: 'subset-sum-state-tree',
          description: 'Binary decision tree demonstrating include/exclude branching and dual bounding cuts.'
        }
      ],
      summary: [
        'Elements must be sorted w_1 <= w_2 <= ... <= w_n for pruning bounds to be valid.',
        'Left branch sets x[k] = 1 (include); right branch sets x[k] = 0 (exclude).',
        'Pruning bound 1: prune if s + w_{k+1} > M (cannot add next element without exceeding target).',
        'Pruning bound 2: prune if s + r < M (remaining elements insufficient to reach target).',
        'Worst-case state space is O(2^n), but bounding functions cut huge subtrees.'
      ],
      keyPoints: [
        'Precondition: Sorted Elements',
        'Binary Vector x_i in {0, 1}',
        'Bound 1: s + w[k+1] <= M',
        'Bound 2: s + r >= M',
        'Algorithm SumOfSub(s, k, r)',
        'State Space Reduction'
      ],
      conclusion: 'The dual bounding functions guarantee that only feasible partial sums are explored, transforming an exponential 2^n power set search into an efficient tree pruning algorithm.'
    },

    // Q10
    {
      id: 'daa-u4-q10',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 10,
      title: 'Solve the Sum of Subsets Problem using Backtracking for the instance: set S = {2, 3, 5, 6, 8, 10} and target sum M = 10. Draw the state space tree and enumerate all solutions.',
      shortTitle: 'Solved Numerical: Sum of Subsets for S={2,3,5,6,8,10}, M=10',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q4(a)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q4(b)', marks: 8 }
      ],
      frequencyNote: 'Directly asked with the exact same numbers in Paper 1 Q4(a) [8M] and Paper 3 Q4(b) [8M].',
      syllabusTopics: [
        'Solved Sum of Subsets Numerical',
        'Target Sum M = 10',
        'Step-by-Step Backtracking Tree Traversal'
      ],
      definition: 'Given sorted set S = {2, 3, 5, 6, 8, 10} with n = 6 and target sum M = 10, the backtracking algorithm evaluates each element via binary inclusion/exclusion to identify all valid subsets that sum to 10.',
      sections: [
        {
          title: '1. Input Setup & Sorting Check',
          content: [
            'Given elements: S = {2, 3, 5, 6, 8, 10}, n = 6, M = 10.',
            '• Sorting check: 2 <= 3 <= 5 <= 6 <= 8 <= 10. Already in ascending order!',
            '• Total sum of all elements: r = 2 + 3 + 5 + 6 + 8 + 10 = 34.',
            'Since r (34) >= M (10), a solution is feasible.'
          ]
        },
        {
          title: '2. Enumerate All Valid Solutions',
          content: [
            'By traversing the state-space tree, we discover three distinct answer states:',
            '1. Solution 1: {2, 3, 5}  => 2 + 3 + 5 = 10  (Tuple: x = [1, 1, 1, 0, 0, 0])',
            '2. Solution 2: {2, 8}     => 2 + 8 = 10      (Tuple: x = [1, 0, 0, 0, 1, 0])',
            '3. Solution 3: {10}       => 10 = 10          (Tuple: x = [0, 0, 0, 0, 0, 1])',
            '',
            'All other combinations either exceed 10 or have remaining sums less than 10.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Find all subsets of S = {2, 3, 5, 6, 8, 10} that sum to M = 10 using backtracking. Trace the decision steps.',
        givenData: [
          { label: 'Set Elements (S)', value: '{2, 3, 5, 6, 8, 10} (Sorted)' },
          { label: 'Target Sum (M)', value: '10' },
          { label: 'Total Weight Sum (r)', value: '34' }
        ],
        toFind: [
          'Binary inclusion/exclusion paths',
          'Bounding function pruning when sum > 10',
          'All valid subsets summing to 10'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Include w₁ = 2',
            explanation: 's = 0 + 2 = 2 < 10. Remaining r = 34 - 2 = 32. s + r = 34 >= 10. Safe.',
            calculation: 's = 2, r = 32, x₁ = 1',
            result: 'Subset: {2}'
          },
          {
            stepNumber: 2,
            title: 'Include w₂ = 3 from s = 2',
            explanation: 's = 2 + 3 = 5 < 10. Remaining r = 32 - 3 = 29. Safe.',
            calculation: 's = 5, r = 29, x₂ = 1',
            result: 'Subset: {2, 3}'
          },
          {
            stepNumber: 3,
            title: 'Include w₃ = 5 from s = 5 -> SOLUTION 1 FOUND',
            explanation: 's = 5 + 5 = 10 == M! Solution 1 discovered. Do not expand further down this branch.',
            calculation: 's = 10 ==> {2, 3, 5} (x = [1, 1, 1, 0, 0, 0])',
            result: 'Solution 1: {2, 3, 5}'
          },
          {
            stepNumber: 4,
            title: 'Backtrack and exclude w₃ = 5 from s = 5',
            explanation: 'Try including next element w₄ = 6: s + w₄ = 5 + 6 = 11 > 10. Bounding condition violated! Prune branch.',
            calculation: 's + w₄ = 5 + 6 = 11 > 10 ==> PRUNED',
            result: 'Branch Pruned'
          },
          {
            stepNumber: 5,
            title: 'Backtrack and exclude w₂ = 3 from s = 2',
            explanation: 's remains 2. Try including w₃ = 5: s + 5 = 7. Next element is 6: 7 + 6 = 13 > 10. Exclude 5. Try including w₄ = 6: s + 6 = 8. Next is 8: 8 + 8 = 16 > 10. Exclude 6. Try including w₅ = 8: s + 8 = 2 + 8 = 10 == M!',
            calculation: 's = 2 + 8 = 10 ==> {2, 8} (x = [1, 0, 0, 0, 1, 0])',
            result: 'Solution 2: {2, 8}'
          },
          {
            stepNumber: 6,
            title: 'Backtrack and exclude w₁ = 2 from s = 0',
            explanation: 'Root branch with x₁ = 0. Explore excluding 2: s = 0. Including {3, 5} gives 8; adding 6 exceeds 10. Including {3, 6} gives 9; adding 8 exceeds 10. Eventually reach w₆ = 10 alone: s = 0 + 10 = 10 == M!',
            calculation: 's = 0 + 10 = 10 ==> {10} (x = [0, 0, 0, 0, 0, 1])',
            result: 'Solution 3: {10}'
          }
        ],
        finalAnswer: {
          label: 'All Subsets Summing to 10',
          value: '{2, 3, 5}, {2, 8}, and {10}',
          interpretation: 'Exactly 3 distinct subsets achieve the target sum of 10.'
        }
      },
      summary: [
        'Total input sum is 34. Sorted order allows instant pruning whenever s + w_{k+1} > 10.',
        'First solution found is {2, 3, 5} at depth 3.',
        'Backtracking discovers {2, 8} by excluding elements 3, 5, 6.',
        'Final solution {10} is found by excluding {2, 3, 5, 6, 8}.'
      ],
      keyPoints: [
        'Input: S = {2, 3, 5, 6, 8, 10}, M = 10',
        'Solution 1: {2, 3, 5}',
        'Solution 2: {2, 8}',
        'Solution 3: {10}',
        'Pruning when sum exceeds 10',
        'Total Solutions: 3'
      ],
      conclusion: 'The backtracking procedure evaluates all valid subsets with minimal node expansions, proving that exactly 3 distinct subsets sum to 10.'
    },

    // Q11
    {
      id: 'daa-u4-q11',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 11,
      title: 'Consider set A of five numbers {5, 10, 15, 20, 25}. Solve this problem to find the first solution such that the sum is equal to 30 using backtracking approach. Show the state-space tree being created.',
      shortTitle: 'Solved Numerical: Sum of Subsets for A={5,10,15,20,25}, M=30',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q4(b)', marks: 9 }
      ],
      frequencyNote: 'Directly asked as Paper 2 Q4(b) [9 Marks] requiring state space tree and identification of the first solution.',
      syllabusTopics: [
        'Solved Numerical A={5,10,15,20,25}, M=30',
        'First Solution Generation',
        'State Space Tree Construction'
      ],
      definition: 'Given set A = {5, 10, 15, 20, 25} and target sum M = 30, the backtracking algorithm searches depth-first for the very first subset whose sum equals 30.',
      sections: [
        {
          title: '1. Problem Setup',
          content: [
            'Given numbers: A = {5, 10, 15, 20, 25}, n = 5, target M = 30.',
            '• Sorting check: 5 <= 10 <= 15 <= 20 <= 25 (Precondition satisfied).',
            '• Total sum: r = 5 + 10 + 15 + 20 + 25 = 75 >= 30.',
            'The algorithm explores left children (include) before right children (exclude).'
          ]
        },
        {
          title: '2. Identification of the First Solution',
          content: [
            'Following Depth-First Search order (left branch priority):',
            '1. Root: s = 0.',
            '2. Include 5: s = 0 + 5 = 5. (Left branch)',
            '3. Include 10: s = 5 + 10 = 15. (Left branch)',
            '4. Include 15: s = 15 + 15 = 30 == M! (Left branch)',
            '',
            'Target sum M = 30 is reached immediately at depth 3!',
            'FIRST SOLUTION: {5, 10, 15} with tuple x = (1, 1, 1, 0, 0).'
          ]
        },
        {
          title: '3. Other Possible Solutions in Complete State Tree',
          content: [
            'If the search continues beyond the first solution, the complete set of solutions is:',
            '• Solution 1: {5, 10, 15}  => 5 + 10 + 15 = 30',
            '• Solution 2: {5, 25}      => 5 + 25 = 30',
            '• Solution 3: {10, 20}     => 10 + 20 = 30'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Apply backtracking to find the first subset of A = {5, 10, 15, 20, 25} summing to M = 30. Show tree construction steps.',
        givenData: [
          { label: 'Set (A)', value: '{5, 10, 15, 20, 25} (Sorted)' },
          { label: 'Target Sum (M)', value: '30' },
          { label: 'Number of Items (n)', value: '5' }
        ],
        toFind: [
          'Depth-first search path to first answer state',
          'Bounding function verification at each node',
          'First solution subset and tuple vector'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Node 1 (Root)',
            explanation: 'Start at root with empty subset. Accumulated sum s = 0, remaining sum r = 75.',
            calculation: 's = 0, r = 75',
            result: 'Initial State'
          },
          {
            stepNumber: 2,
            title: 'Node 2: Include element 5 (x₁ = 1)',
            explanation: 'Generate left child of root. Add 5 to subset: s = 0 + 5 = 5 < 30. Remaining r = 75 - 5 = 70. Bounding check: s + w₂ = 5 + 10 = 15 <= 30 and s + r = 5 + 70 = 75 >= 30. Both pass!',
            calculation: 's = 5, r = 70',
            result: 'Subset: {5}'
          },
          {
            stepNumber: 3,
            title: 'Node 3: Include element 10 (x₂ = 1)',
            explanation: 'Generate left child of Node 2. Add 10 to subset: s = 5 + 10 = 15 < 30. Remaining r = 70 - 10 = 60. Bounding check: s + w₃ = 15 + 15 = 30 <= 30. Passes!',
            calculation: 's = 15, r = 60',
            result: 'Subset: {5, 10}'
          },
          {
            stepNumber: 4,
            title: 'Node 4: Include element 15 (x₃ = 1) -> FIRST SOLUTION REACHED',
            explanation: 'Generate left child of Node 3. Add 15 to subset: s = 15 + 15 = 30 == M (Target reached!). Output solution and terminate.',
            calculation: 's = 15 + 15 = 30 == M ==> {5, 10, 15} (x = [1, 1, 1, 0, 0])',
            result: 'Solution 1: {5, 10, 15}'
          }
        ],
        finalAnswer: {
          label: 'First Solution Subset',
          value: '{5, 10, 15} with tuple x = [1, 1, 1, 0, 0]',
          interpretation: 'First solution reached in exactly 4 node visits along the leftmost tree path.'
        }
      },
      summary: [
        'By ordering the set in ascending order {5, 10, 15, 20, 25}, the greedy DFS left branch reaches the target sum directly.',
        'At depth 3, 5 + 10 + 15 = 30, requiring zero backtracks to find the first solution.',
        'Total tree nodes generated to find first solution is only 4.',
        'Subsequent solutions {5, 25} and {10, 20} can be enumerated if complete search is requested.'
      ],
      keyPoints: [
        'Set A = {5, 10, 15, 20, 25}',
        'Target M = 30',
        'Node 1 (Root s=0)',
        'Node 2 (Include 5, s=5)',
        'Node 3 (Include 10, s=15)',
        'Node 4 (Include 15, s=30 == M)',
        'First Solution: {5, 10, 15}'
      ],
      conclusion: 'The first solution {5, 10, 15} is reached along the leftmost path of the state space tree with minimal overhead.'
    },

    // Q12
    {
      id: 'daa-u4-q12',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 12,
      title: 'Analyze the impact of element ordering on the Sum of Subsets Problem. Compare non-decreasing, non-increasing, and unsorted sequences with respect to pruning efficiency and computing time.',
      shortTitle: 'Sum of Subsets: Element Ordering & Pruning Efficiency Analysis',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Decode / Textbook', questionNo: 'Q19 / Example 4.6.3', marks: 8 }
      ],
      frequencyNote: 'Advanced conceptual question illustrating why sorting is a strict mathematical prerequisite for bounding functions.',
      syllabusTopics: [
        'Ordering of Elements in Sum of Subsets',
        'Non-Decreasing vs Non-Increasing vs Unsorted',
        'Bounding Condition Failure on Unsorted Inputs'
      ],
      definition: 'Element ordering fundamentally determines the pruning power of backtracking in the Sum of Subsets problem. Non-decreasing order allows immediate truncation of all subsequent branches when s + w_{k+1} > M, whereas descending or unsorted orders render this bounding condition invalid.',
      sections: [
        {
          title: '1. Comparative Analysis of Three Ordering Strategies',
          table: {
            headers: ['Ordering Strategy', 'Example Sequence (M = 35)', 'Bounding Rule s + w_{k+1} > M', 'Search Efficiency & Computing Time'],
            rows: [
              {
                parameter: 'i) Non-Decreasing (Ascending)',
                col1: 'W = {5, 7, 10, 12, 15, 18, 20}',
                col2: 'Completely Valid: If s + w_{k+1} > M, then since w_{k+1} <= w_{k+2} <= ..., all subsequent additions will also exceed M.',
                col3: 'Optimal: Prunes huge subtrees immediately. Minimum number of state-space tree nodes generated.'
              },
              {
                parameter: 'ii) Non-Increasing (Descending)',
                col1: 'W = {20, 18, 15, 12, 10, 7, 5}',
                col2: 'Invalid: Just because s + 20 > M does not mean subsequent smaller elements (like 5 or 7) will exceed M.',
                col3: 'Very Poor: Cannot prune on over-sum. Must inspect nearly every element down to leaves before deciding.'
              },
              {
                parameter: 'iii) Unsorted (Arbitrary)',
                col1: 'W = {15, 7, 20, 5, 18, 10, 12}',
                col2: 'Completely Invalid: No monotonicity exists between adjacent elements; bounding rule cannot be applied.',
                col3: 'Worst: Degenerates toward brute-force exhaustive generation of all 2^n subsets.'
              }
            ]
          }
        },
        {
          title: '2. Concrete Numerical Demonstration (M = 35)',
          content: [
            'Consider target M = 35 and partial sum s = 5 + 7 + 10 + 12 = 34:',
            '• In non-decreasing order, next element is 15: s + 15 = 34 + 15 = 49 > 35.',
            '  Because the array is sorted, remaining elements {18, 20} are guaranteed to be >= 15.',
            '  Therefore, we prune the ENTIRE subtree for {15, 18, 20} without checking them!',
            '• In unsorted order, if the next element is 20 (34 + 20 = 54 > 35), we CANNOT prune because the subsequent element might be 1 (34 + 1 = 35 == M)!',
            '  Hence every single element must be checked individually.'
          ]
        }
      ],
      summary: [
        'Non-decreasing order is essential for the bounding rule s + w_{k+1} > M to prune all subsequent branches.',
        'Descending and unsorted orders disable over-sum pruning, requiring near-complete tree generation.',
        'Sorting takes O(n log n) time but saves exponential O(2^n) search steps.',
        'Always sort input elements in ascending order prior to executing backtracking.'
      ],
      keyPoints: [
        'Non-Decreasing: Prunes subtrees on s + w[k+1] > M',
        'Non-Increasing: Bounding rule fails',
        'Unsorted: Degenerates to brute-force',
        'O(n log n) sorting overhead vs 2^n search savings'
      ],
      conclusion: 'Pre-sorting inputs in non-decreasing order is a mandatory optimization that enables effective branch pruning, dramatically reducing overall computation time.'
    },

    // Q13
    {
      id: 'daa-u4-q13',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 13,
      title: 'Explain the Principle of the Branch and Bound Method. Contrast it with Backtracking and describe how Lower Bounds, Upper Bounds, and Bounding Functions guide the search.',
      shortTitle: 'Branch and Bound Principle, Bounds & Pruning Mechanics',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q4(b)', marks: 9 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q3(a)', marks: 9 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q4(b)', marks: 5 },
        { paper: 'Decode / Textbook', questionNo: 'Q20, Q24', marks: 8 }
      ],
      frequencyNote: 'The foundational question for Part II (Branch and Bound) in Unit IV across all exam papers.',
      syllabusTopics: [
        'Branch and Bound Principle',
        'Lower Bound c^(x) vs Upper Bound u(x)',
        'Node Pruning / Killing Rule c^(x) >= u',
        'Optimization Problem Applications'
      ],
      definition: 'Branch and Bound is a general algorithmic design technique for solving combinatorial optimization problems. It systematically partitions the solution space into smaller subproblems (Branching) and calculates lower and upper bounds on the optimal solution (Bounding) to prune subtrees that cannot contain an optimal answer.',
      sections: [
        {
          title: '1. Branch and Bound vs. Backtracking',
          table: {
            headers: ['Characteristic', 'Backtracking', 'Branch and Bound'],
            rows: [
              {
                parameter: 'Problem Class',
                col1: 'Primarily Decision and Enumeration problems (find any/all solutions).',
                col2: 'Primarily Optimization problems (find the minimum or maximum cost solution).'
              },
              {
                parameter: 'Tree Traversal',
                col1: 'Strictly Depth-First Search (DFS) with recursive/stack mechanism.',
                col2: 'Flexible: Breadth-First Search (FIFO), D-search (LIFO), or Best-First (Least Cost).'
              },
              {
                parameter: 'Node Generation',
                col1: 'Generates one child at a time; current node remains E-node until explored.',
                col2: 'Generates all children of current E-node at once (branching).'
              },
              {
                parameter: 'Pruning Mechanism',
                col1: 'Uses constraint feasibility bounding functions B(x_1..x_k).',
                col2: 'Compares estimated lower bound c^(x) against best-known global upper bound u.'
              },
              {
                parameter: 'Memory Requirement',
                col1: 'Low: O(n) bounded by maximum tree depth.',
                col2: 'High: Exponential in worst-case to store all live nodes in priority queue.'
              }
            ]
          }
        },
        {
          title: '2. The Bounding Concept: Lower Bound c^(x) and Upper Bound u',
          content: [
            'For a Minimization Problem:',
            '• True cost c(x): The minimum cost of an answer node in the subtree rooted at x.',
            '• Lower Bound Function c^(x): A computationally efficient estimate such that c^(x) <= c(x). It provides a lower guarantee on the cost of any solution reachable from x.',
            '• Upper Bound u: The cost of the best feasible complete solution discovered so far. Initially, u = ∞ (or a greedy heuristic cost).',
            '',
            'The Pruning / Killing Rule:',
            'At any live node x:',
            '1. If c^(x) >= u, then NO solution in the subtree of x can possibly be better than the currently known solution u! Hence node x is KILLED immediately.',
            '2. If a complete solution (leaf node) is reached with cost c(leaf) < u, the global upper bound is updated: u = c(leaf). All previously generated live nodes with c^(x) >= new_u are retroactively killed!'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-bb-strats',
          title: 'Branch and Bound Exploration Strategies & Bounding',
          caption: 'Figure 4.5: Comparison of FIFO, LIFO, and Least-Cost (LC) Branch and Bound search mechanisms and upper/lower bound pruning rules.',
          type: 'svg-interactive',
          svgType: 'branch-bound-lc-tree',
          description: 'Architecture diagram comparing FIFO queue, LIFO stack, and Min-Heap LC search.'
        }
      ],
      summary: [
        'Branch & Bound solves optimization problems by partitioning the solution space and computing bounds.',
        'Generates all children of the E-node simultaneously.',
        'Maintains lower bound c^(x) and best known upper bound u.',
        'Pruning rule: kill node x if c^(x) >= u; update u whenever a superior complete solution is found.'
      ],
      keyPoints: [
        'Branching (All children created)',
        'Bounding (Lower bound c^(x) <= c(x))',
        'Upper Bound u (Best solution so far)',
        'Killing Rule: c^(x) >= u',
        'Optimization Focus (Min/Max)'
      ],
      conclusion: 'By maintaining tight lower and upper bounds, Branch and Bound prunes vast regions of the search space, enabling exact optimal solutions to NP-hard optimization problems.'
    },

    // Q14
    {
      id: 'daa-u4-q14',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 14,
      title: 'Explain the three Exploration Strategies in Branch and Bound: FIFO, LIFO, and Least-Cost (LC) Search. Contrast their data structures, node selection policies, and search efficiencies.',
      shortTitle: 'Branch and Bound Strategies: FIFO vs LIFO vs LC Search',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q4(b)', marks: 9 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q4(b)', marks: 5 },
        { paper: 'Decode / Textbook', questionNo: 'Q21, Q23', marks: 8 }
      ],
      frequencyNote: 'Common 8-mark question comparing queue-based, stack-based, and heap-based search strategies.',
      syllabusTopics: [
        'FIFO Branch and Bound',
        'LIFO Branch and Bound',
        'Least-Cost (LC) Search',
        'Queue vs Stack vs Priority Min-Heap'
      ],
      definition: 'The exploration strategy in Branch and Bound determines the order in which live nodes are selected to become the next E-node. The three primary strategies are FIFO (Queue / BFS), LIFO (Stack / D-Search), and Least-Cost (Min-Heap / Best-First Search).',
      sections: [
        {
          title: '1. FIFO Branch and Bound (Queue / BFS)',
          content: [
            '• Data Structure: First-In-First-Out (FIFO) Queue.',
            '• Mechanism: Level-order Breadth-First Search (BFS). When a node becomes the E-node, all its children are generated and added to the rear of the queue.',
            '• Next E-Node: The node at the front of the queue is removed.',
            '• Advantage: Simple implementation; guaranteed to find shallow solutions.',
            '• Disadvantage: High memory consumption (stores an entire level of live nodes); explores blind without cost intelligence.'
          ]
        },
        {
          title: '2. LIFO Branch and Bound (Stack / D-Search)',
          content: [
            '• Data Structure: Last-In-First-Out (LIFO) Stack.',
            '• Mechanism: Depth-first D-search. When a node becomes the E-node, its children are pushed onto the stack.',
            '• Next E-Node: The most recently generated child is popped from the top of the stack.',
            '• Advantage: Memory-efficient (proportional to tree height O(n)); reaches candidate leaf solutions quickly to establish early upper bounds u.',
            '• Disadvantage: May plunge deep into suboptimal subtrees before discovering dead ends.'
          ]
        },
        {
          title: '3. Least-Cost (LC) Branch and Bound (Best-First / Min-Heap)',
          content: [
            '• Data Structure: Priority Queue implemented as a Min-Heap.',
            '• Mechanism: Evaluates an intelligent ranking / cost function c^(x) for every generated child node.',
            '• Next E-Node: Always selects the live node with the minimum estimated cost c^(x):',
            '  Next E-Node = argmin_{x in LiveNodes} c^(x).',
            '• Formula: c^(x) = f(h(x)) + g(x), where g(x) is exact path cost from root to x, and h(x) is estimated cost from x to goal.',
            '• Pruning Power: Maximizes pruning efficiency because search is guided directly toward the optimal answer node, expanding the minimum total number of nodes.'
          ]
        },
        {
          title: '4. Summary Comparison Table',
          table: {
            headers: ['Parameter', 'FIFO B&B', 'LIFO B&B', 'Least-Cost (LC) B&B'],
            rows: [
              {
                parameter: 'Data Structure',
                col1: 'Queue (FIFO)',
                col2: 'Stack (LIFO)',
                col3: 'Priority Queue (Min-Heap)'
              },
              {
                parameter: 'Search Strategy',
                col1: 'Breadth-First Search (BFS)',
                col2: 'D-Search (Depth Search)',
                col3: 'Heuristic Best-First Search'
              },
              {
                parameter: 'Next E-Node Selection',
                col1: 'First inserted live node in queue',
                col2: 'Most recently inserted node on stack',
                col3: 'Live node with minimum cost c^(x)'
              },
              {
                parameter: 'Memory Usage',
                col1: 'High (proportional to branch factor^d)',
                col2: 'Low (proportional to tree height O(n))',
                col3: 'Moderate to High (stores live fringe in heap)'
              },
              {
                parameter: 'Node Expansions',
                col1: 'Large (explores all nodes at depth < d)',
                col2: 'Variable (can dive down bad branches)',
                col3: 'Minimal (guided directly by heuristic)'
              }
            ]
          }
        }
      ],
      summary: [
        'FIFO B&B uses a queue and explores level-by-level in BFS order.',
        'LIFO B&B uses a stack and dives deep down branches in D-search order.',
        'LCBB uses a priority min-heap ranked by heuristic lower bound c^(x).',
        'LCBB is the most powerful strategy because it expands the fewest nodes on the way to the optimum.'
      ],
      keyPoints: [
        'FIFO Queue (BFS Traversal)',
        'LIFO Stack (D-Search Traversal)',
        'LC Min-Heap (Heuristic Best-First)',
        'Heuristic Formula c^(x) = g(x) + h(x)',
        'Minimal Node Expansions in LCBB'
      ],
      conclusion: 'LC Search combines the bounding rigor of Branch and Bound with heuristic guidance, making it the industry standard for hard optimization challenges.'
    },

    // Q15
    {
      id: 'daa-u4-q15',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 15,
      title: 'Present the complete Control Abstraction for Least-Cost Search (LC-Search / LCBB). Describe the functions Least_Cost(), Add_Node(), and explain the upper bound updating mechanism.',
      shortTitle: 'Control Abstraction for Least-Cost Search (LCBB)',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q4(b)', marks: 9 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q4(b)', marks: 5 },
        { paper: 'Decode / Textbook', questionNo: 'Q21 / Section 4.9', marks: 8 }
      ],
      frequencyNote: 'Directly asked as Paper 1 Q4(b) [9 Marks] as the primary control abstraction for Branch and Bound.',
      syllabusTopics: [
        'Control Abstraction for LC-Search',
        'Least_Cost() and Add_Node() Subroutines',
        'Upper Bound u Updating and Pruning'
      ],
      definition: 'The LC-Search Control Abstraction is the algorithmic blueprint for Least-Cost Branch and Bound, repeatedly selecting the live node with the smallest heuristic estimate c^(x) from a priority min-heap until an optimal answer node is reached.',
      sections: [
        {
          title: '1. LC-Search Control Abstraction Pseudocode',
          content: [
            '```text',
            'Algorithm LC_Search(t)',
            '// t is the root node of the state-space tree',
            '// u is the current upper bound on minimum-cost solution',
            '{',
            '    if (t is an answer node) then',
            '    {',
            '        output(path from root to t);',
            '        return;',
            '    }',
            '    ',
            '    E = t; // Initialize root as first E-node',
            '    initialize_list_of_live_nodes_to_empty();',
            '    u = infinity; // or greedy heuristic upper bound',
            '    ',
            '    repeat',
            '    {',
            '        for (each child x of E) do',
            '        {',
            '            if (x is an answer node) then',
            '            {',
            '                output(path from root to x);',
            '                u = min(u, cost(x)); // Update upper bound',
            '            }',
            '            ',
            '            // Check bounding condition for pruning',
            '            if (c_hat(x) < u) then',
            '            {',
            '                x.parent = E; // Set parent pointer for path reconstruction',
            '                Add_Node(x); // Insert x into min-heap based on c_hat(x)',
            '                u = min(u, upper_bound(x)); // Tighten upper bound',
            '            }',
            '            else',
            '            {',
            '                // c_hat(x) >= u => Node x is KILLED immediately',
            '            }',
            '        }',
            '        ',
            '        if (no more live nodes in heap) then',
            '        {',
            '            write("Search complete. Optimal cost = ", u);',
            '            return;',
            '        }',
            '        ',
            '        E = Least_Cost(); // Remove node with minimum c_hat from heap',
            '    }',
            '    until (false);',
            '}',
            '```'
          ]
        },
        {
          title: '2. Explanation of Subroutines and Heap Mechanics',
          content: [
            '1. Least_Cost():',
            '   Removes and returns the live node with the smallest ranking cost c^(x) from the min-heap in O(log N) time. This node becomes the next E-node.',
            '',
            '2. Add_Node(x):',
            '   Inserts the newly generated child node x into the min-heap ranked by its heuristic value c^(x) in O(log N) time.',
            '',
            '3. Upper Bound u Updating:',
            '   Whenever a child node offers a feasible completion or an upper bound smaller than u, u is updated: u = min(u, upper_bound(x)). Any node currently in the heap with c^(x) >= new_u is killed (purged).'
          ]
        }
      ],
      summary: [
        'LC-Search maintains a priority min-heap of live nodes ranked by c^(x).',
        'Generates all children of the E-node and computes c^(x) and upper_bound(x).',
        'Prunes any child with c^(x) >= u; inserts valid children into min-heap via Add_Node(x).',
        'Selects the next E-node via Least_Cost() in O(log N) heap time.'
      ],
      keyPoints: [
        'Algorithm LC_Search(t)',
        'Subroutine Least_Cost() (Extract-Min)',
        'Subroutine Add_Node(x) (Heap Insert)',
        'Dynamic Upper Bound u Update',
        'Pruning Condition c^(x) >= u'
      ],
      conclusion: 'LC-Search provides a unified, provably optimal template that guarantees reaching an optimal solution with the minimum possible node expansions.'
    },

    // Q16
    {
      id: 'daa-u4-q16',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 16,
      title: 'Explain the Reduced Matrix Method for solving the Traveling Salesperson Problem (TSP) using LC Branch and Bound. Derive the formulas for Row Minimization, Column Minimization, and Child Node Cost Calculation.',
      shortTitle: 'TSP using LCBB: Reduced Matrix Method & Bounding Formulas',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q3(a)', marks: 9 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q4(a)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q25 / Section 4.11', marks: 8 }
      ],
      frequencyNote: 'Consistently appears as the 8 to 9-mark numerical/theory question for Branch and Bound in university exams.',
      syllabusTopics: [
        'Traveling Salesperson Problem (TSP)',
        'Reduced Cost Matrix Technique',
        'Row Minimization and Column Minimization',
        'Dynamic Reduction Child Cost Formula'
      ],
      definition: 'The Traveling Salesperson Problem (TSP) asks for the minimum-cost round-trip tour that visits every city in an n-city graph exactly once and returns to the starting city. In LC Branch and Bound, the Reduced Matrix Method establishes lower bounds on tour costs by subtracting row and column minima.',
      sections: [
        {
          title: '1. What is a Reduced Matrix?',
          content: [
            'Let M be an n x n cost matrix representing the directed distances between cities, where M[i, i] = ∞.',
            'A matrix M is said to be Reduced if every row and every column contains at least one zero entry, or consists entirely of ∞ entries.',
            '• Since any valid tour must depart from every city i exactly once, it must select at least one edge from each row.',
            '• Since any valid tour must enter every city j exactly once, it must select at least one edge from each column.',
            '• Therefore, subtracting the row minimum r_i from row i and column minimum c_j from column j reduces the cost of every tour by exactly (sum(r_i) + sum(c_j)).'
          ]
        },
        {
          title: '2. Derivation of Initial Root Lower Bound: c^(root)',
          content: [
            '1. Row Reduction: For each row i in {1..n}:',
            '   r_i = min_{1 <= j <= n} { M[i, j] | M[i, j] < ∞ }',
            '   M\'[i, j] = M[i, j] - r_i.',
            '   Total Row Reduction Cost = R = Sum_{i=1}^n r_i.',
            '',
            '2. Column Reduction: For each column j in {1..n} that does not already contain a 0:',
            '   c_j = min_{1 <= i <= n} { M\'[i, j] | M\'[i, j] < ∞ }',
            '   M\'\'[i, j] = M\'[i, j] - c_j.',
            '   Total Column Reduction Cost = C = Sum_{j=1}^n c_j.',
            '',
            '3. Root Lower Bound Formula:',
            '   c^(root) = R + C = Sum(r_i) + Sum(c_j).',
            '   Every feasible tour in the original graph has a total length of AT LEAST c^(root).'
          ]
        },
        {
          title: '3. Child Node Cost Calculation: Branching from City i to City j',
          content: [
            'When branching from node parent (city i) to child node (city j) in the state-space tree:',
            '1. We commit to traversing edge (i, j).',
            '2. To prevent choosing another edge out of city i, set row i to all ∞.',
            '3. To prevent choosing another edge into city j, set column j to all ∞.',
            '4. To prevent an illegal sub-tour returning prematurely, set M[j, 1] = ∞ (or M[j, start] = ∞).',
            '5. Reduce the resulting matrix by subtracting new row and column minima: let the reduction sum be r\'.',
            '6. The lower bound of child node j is given by:',
            '   c^(child) = c^(parent) + M_parent[i, j] + r\'.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-tsp-flow',
          title: 'TSP Reduced Matrix Method & Dynamic Branching',
          caption: 'Figure 4.6: Step-by-step reduction pipeline: Cost Matrix -> Row Reduction -> Column Reduction -> Child Node Edge Commitment & Bounding.',
          type: 'svg-interactive',
          svgType: 'tsp-reduced-matrix-flow',
          description: 'Flowchart showing matrix reduction steps and dynamic child cost formula.'
        }
      ],
      summary: [
        'A cost matrix is reduced when every row and column contains at least one zero (or all infinity).',
        'Initial lower bound is c^(root) = sum(row minima) + sum(column minima).',
        'Branching on edge (i, j): set row i = inf, col j = inf, M[j, 1] = inf, and reduce.',
        'Child cost formula: c^(child) = c^(parent) + M_parent[i, j] + r_reduction.',
        'LCBB selects the live node with the lowest c^(x) from the min-heap.'
      ],
      keyPoints: [
        'Reduced Matrix Definition',
        'Row Minimization (r_i)',
        'Column Minimization (c_j)',
        'Initial Root Bound c^(root) = R + C',
        'Edge Commitment: Row i=inf, Col j=inf',
        'Sub-tour Prevention: M[j, 1] = inf',
        'Child Cost Formula'
      ],
      conclusion: 'The reduced matrix method yields exceptionally tight lower bounds, enabling LC Branch and Bound to prune large swaths of permutations and solve TSP to optimality.'
    },

    // Q17
    {
      id: 'daa-u4-q17',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 17,
      title: 'A salesman needs to visit four cities (A, B, C, D) and return to city A. The distances are: AB=10, AC=15, AD=20, BC=35, BD=25, CD=30. Find the shortest tour using Branch and Bound (LCBB). Trace all matrices and lower bounds.',
      shortTitle: 'Solved Numerical: 4-City TSP using LCBB (AB=10, AC=15, AD=20...)',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q4(a)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q3(a)', marks: 9 }
      ],
      frequencyNote: 'Directly asked with the identical graph/matrix in Paper 4 Q4(a) [8M] and Paper 3 Q3(a) [9M].',
      syllabusTopics: [
        'Solved TSP Numerical',
        '4 Cities: A(1), B(2), C(3), D(4)',
        'Reduced Matrix Derivations',
        'Optimal Tour Reconstruction'
      ],
      definition: 'Given a 4-city symmetric distance graph with start city A (1), the LC Branch and Bound algorithm constructs a reduced cost matrix to evaluate candidate paths and discovers the optimal minimum-cost Hamiltonian cycle.',
      sections: [
        {
          title: '1. Initial Distance Matrix Setup',
          content: [
            'Let City A = 1, B = 2, C = 3, D = 4. Distances are symmetric:',
            'M[1,2] = 10, M[1,3] = 15, M[1,4] = 20',
            'M[2,1] = 10, M[2,3] = 35, M[2,4] = 25',
            'M[3,1] = 15, M[3,2] = 35, M[3,4] = 30',
            'M[4,1] = 20, M[4,2] = 25, M[4,3] = 30',
            '',
            'Matrix M:',
            'Row 1 (A): [ ∞, 10, 15, 20 ]',
            'Row 2 (B): [ 10, ∞, 35, 25 ]',
            'Row 3 (C): [ 15, 35, ∞, 30 ]',
            'Row 4 (D): [ 20, 25, 30, ∞ ]'
          ]
        },
        {
          title: '2. Root Matrix Reduction & Lower Bound c^(root)',
          content: [
            'Step 1: Row Minimization:',
            '• Row 1 min = 10 => subtract 10: [ ∞, 0, 5, 10 ]',
            '• Row 2 min = 10 => subtract 10: [ 0, ∞, 25, 15 ]',
            '• Row 3 min = 15 => subtract 15: [ 0, 20, ∞, 15 ]',
            '• Row 4 min = 20 => subtract 20: [ 0, 5, 10, ∞ ]',
            'Total Row Reduction = R = 10 + 10 + 15 + 20 = 55.',
            '',
            'Step 2: Column Minimization on Row-Reduced Matrix:',
            '• Col 1: has zeros in rows 2, 3, 4 => min = 0.',
            '• Col 2: has zero in row 1 => min = 0.',
            '• Col 3: values are [5, 25, ∞, 10] => min = 5. Subtract 5: [0, 20, ∞, 5].',
            '• Col 4: values are [10, 15, 15, ∞] => min = 10. Subtract 10: [0, 5, 5, ∞].',
            'Total Column Reduction = C = 0 + 0 + 5 + 10 = 15.',
            '',
            'Root Lower Bound: c^(root) = R + C = 55 + 15 = 70.',
            'Fully Reduced Root Matrix M_0:',
            'Row 1: [ ∞,  0,  0,  0 ]',
            'Row 2: [ 0,  ∞, 20,  5 ]',
            'Row 3: [ 0, 20,  ∞,  5 ]',
            'Row 4: [ 0,  5,  5,  ∞ ]'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Find the minimum cost tour visiting cities A, B, C, D starting at A using LC Branch and Bound.',
        givenData: [
          { label: 'Cities (V)', value: '{A, B, C, D} (4 cities)' },
          { label: 'Distances', value: 'AB=10, AC=15, AD=20, BC=35, BD=25, CD=30 (Symmetric)' },
          { label: 'Initial Bound c^(root)', value: '70' }
        ],
        toFind: [
          'Row and Column reductions for root cost matrix',
          'Child node lower bounds c^(j) = c^(i) + M[i, j] + r_reduction',
          'Optimal Hamiltonian cycle and minimum total tour length'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Initial Reduction & Root Lower Bound',
            explanation: 'Row reduction subtracts [10, 10, 15, 20] (sum=55). Column reduction subtracts [0, 0, 5, 10] (sum=15). Total initial bound = 55 + 15 = 70.',
            calculation: 'R = 10 + 10 + 15 + 20 = 55; C = 0 + 0 + 5 + 10 = 15; c^(root) = 55 + 15 = 70',
            result: 'c^(root) = 70'
          },
          {
            stepNumber: 2,
            title: 'Branching from Root (City A) to City B (Path 1 -> 2)',
            explanation: 'Set row 1 = inf, col 2 = inf, and M[2, 1] = inf. In M_0, M_0[1, 2] = 0. Row reductions: row 2 min is 5; row 3 min is 0; row 4 min is 0 (sum=5). Col reductions: col 3 min is 5 (sum=5). Total reduction r = 10.',
            calculation: 'c^(A -> B) = 70 + 0 + 10 = 80',
            result: 'Cost(Node 2: A -> B) = 80'
          },
          {
            stepNumber: 3,
            title: 'Branching from Root (City A) to City C (Path 1 -> 3)',
            explanation: 'Set row 1 = inf, col 3 = inf, M[3, 1] = inf. M_0[1, 3] = 0. Row reductions: row 3 min is 5. Col reduction: col 2 min is 0, col 4 min is 5. Total reduction r = 10.',
            calculation: 'c^(A -> C) = 70 + 0 + 10 = 80',
            result: 'Cost(Node 3: A -> C) = 80'
          },
          {
            stepNumber: 4,
            title: 'Branching from Root (City A) to City D (Path 1 -> 4)',
            explanation: 'Set row 1 = inf, col 4 = inf, M[4, 1] = inf. M_0[1, 4] = 0. Row reductions: row 2 min is 0; row 3 min is 0; row 4 min is 5. Col reductions: col 2 min is 5, col 3 min is 5. Total reduction r = 15.',
            calculation: 'c^(A -> D) = 70 + 0 + 15 = 85',
            result: 'Cost(Node 4: A -> D) = 85'
          },
          {
            stepNumber: 5,
            title: 'Expand Node (A -> B, cost 80)',
            explanation: 'From B, remaining cities are C and D. Branch to D (Path A -> B -> D): edge M[B, D] in reduced matrix is 0. Set row 2 = inf, col 4 = inf, M[4, 1] = inf. Only remaining city is C, and from C return to A.',
            calculation: 'Tour: A -> B -> D -> C -> A',
            result: 'Complete Candidate Tour Established'
          },
          {
            stepNumber: 6,
            title: 'Compute Exact Tour Cost',
            explanation: 'Calculate original distances for tour A -> B -> D -> C -> A: dist(A, B) = 10, dist(B, D) = 25, dist(D, C) = 30, dist(C, A) = 15.',
            calculation: 'Total Cost = 10 + 25 + 30 + 15 = 80',
            result: 'Tour Cost = 80 units'
          }
        ],
        finalAnswer: {
          label: 'Optimal TSP Tour',
          value: 'A -> B -> D -> C -> A with Total Cost = 80',
          interpretation: 'Global minimum tour visiting every city exactly once and returning to A.'
        }
      },
      summary: [
        'Initial reduced cost matrix yields root lower bound c^(root) = 70.',
        'Branching from city A to cities B, C, D yields bounds 80, 80, and 85.',
        'Expanding the least-cost node (A -> B) leads directly to the complete tour A -> B -> D -> C -> A.',
        'Total minimum tour cost is exactly 80 units.'
      ],
      keyPoints: [
        'Root Lower Bound = 70',
        'Child Node A -> B: Cost = 80',
        'Child Node A -> C: Cost = 80',
        'Child Node A -> D: Cost = 85',
        'Optimal Tour: A -> B -> D -> C -> A',
        'Minimum Tour Length = 80'
      ],
      conclusion: 'The LC Branch and Bound algorithm evaluates the complete 4-city instance with minimal expansion, rigorously proving that 80 is the global minimum tour length.'
    },

    // Q18
    {
      id: 'daa-u4-q18',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 18,
      title: 'Explain the 0/1 Knapsack Problem using LC Branch and Bound. Formulate the bounding functions c^(x) and u(x) using the continuous fractional knapsack heuristic, and explain node pruning.',
      shortTitle: '0/1 Knapsack using LCBB: Formulations & Bounding Functions',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q3(b)', marks: 9 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q4(a)', marks: 9 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q3(b)', marks: 9 },
        { paper: 'Decode / Textbook', questionNo: 'Q26 / Section 4.12', marks: 10 }
      ],
      frequencyNote: 'Consistently appears across Paper 2, Paper 3, and Paper 4 as a major 9-mark problem.',
      syllabusTopics: [
        '0/1 Knapsack using LCBB',
        'Maximization to Minimization Transformation',
        'Lower Bound c^(x) via Continuous Greedy',
        'Upper Bound u(x) via Discrete Greedy'
      ],
      definition: 'The 0/1 Knapsack Problem seeks to select a subset of n items with weights w_i and profits p_i to maximize total profit subject to capacity m. In Branch and Bound, this is framed as a minimization problem (minimize -profit) where the lower bound c^(x) is computed using the relaxed fractional knapsack and the upper bound u(x) using discrete knapsack.',
      sections: [
        {
          title: '1. Mathematical Formulation as a Minimization Problem',
          content: [
            'Branch and bound algorithms are standardized for minimization.',
            'Maximize Sum_{i=1}^n p_i * x_i  <=>  Minimize - Sum_{i=1}^n p_i * x_i',
            'Subject to: Sum_{i=1}^n w_i * x_i <= m, where x_i in {0, 1}.',
            '• Items are sorted in non-increasing order of profit density:',
            '  p_1 / w_1 >= p_2 / w_2 >= ... >= p_n / w_n.'
          ]
        },
        {
          title: '2. Lower Bound Function c^(x) (Continuous Greedy Relaxation)',
          content: [
            'At node x, let cp = current accumulated profit, and cw = current accumulated weight.',
            'We relax the discrete 0/1 constraint on remaining items, allowing fractional items (Continuous Knapsack):',
            '• Fill remaining capacity (m - cw) greedily with subsequent items in descending density order.',
            '• When an item k+1 cannot fit completely, take the fraction: fraction = (m - cw) / w_{k+1}.',
            '• Estimated Lower Bound:',
            '  c^(x) = - [ cp + Sum_{j=k+1}^{i-1} p_j + (m - cw_rem) / w_i * p_i ].',
            'Since fractional filling yields an upper bound on profit, negating it yields a valid LOWER BOUND on minimized negative profit!'
          ]
        },
        {
          title: '3. Upper Bound Function u(x) (Discrete Integral Solution)',
          content: [
            '• Upper bound u(x) represents the best feasible discrete solution obtainable from node x without taking any fractional pieces:',
            '  u(x) = - [ cp + Sum_{j} p_j for all subsequent whole items that fit into remaining capacity ].',
            '• Global Upper Bound u: Initialized to u(root). Updated whenever a node achieves a more negative discrete bound: u = min(u, u(x)).'
          ]
        },
        {
          title: '4. Pruning and Killing Criterion',
          content: [
            'For any newly generated live node x:',
            '1. If weight exceeds capacity (cw > m), node x is INFEASIBLE => KILLED immediately.',
            '2. If c^(x) >= u, node x cannot possibly produce a solution better than the best-known integer solution u => KILLED immediately.',
            '3. Otherwise, node x is added to the priority min-heap ranked by c^(x).'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-knap-bb',
          title: '0/1 Knapsack LCBB State-Space Tree & Bounds',
          caption: 'Figure 4.7: LCBB tree showing fractional continuous lower bounds c^(x), discrete upper bounds u(x), and pruning of suboptimal nodes.',
          type: 'svg-interactive',
          svgType: 'knapsack-branch-bound-tree',
          description: 'State space tree showing item decision branches, bounding values, and pruning.'
        }
      ],
      summary: [
        'Formulated as minimizing negative profit with items sorted by p_i / w_i.',
        'Lower bound c^(x) uses continuous fractional knapsack greedy fill.',
        'Upper bound u(x) uses discrete integer items only.',
        'Kill node x if accumulated weight > m or if c^(x) >= u.',
        'LCBB selects the live node with the most negative c^(x) from the min-heap.'
      ],
      keyPoints: [
        'Minimize -Profit Formulation',
        'Sorted Density p_i / w_i',
        'Fractional Knapsack Bound c^(x)',
        'Discrete Upper Bound u(x)',
        'Pruning Rule: c^(x) >= u',
        'Min-Heap Priority Queue'
      ],
      conclusion: 'The fractional relaxation provides an exceptionally tight heuristic estimate, allowing LC Branch and Bound to solve 0/1 knapsack instances with high efficiency.'
    },

    // Q19
    {
      id: 'daa-u4-q19',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 19,
      title: 'Solve the 0/1 Knapsack Problem using LC Branch and Bound for the following university exam instances: i) Capacity m = 7, 3 items: O₁(w=5, v=6), O₂(w=4, v=5), O₃(w=3, v=4); and ii) Capacity m = 14, 3 items: O₁(w=10, v=12), O₂(w=8, v=10), O₃(w=6, v=8).',
      shortTitle: 'Solved Numerical: 0/1 Knapsack via LCBB (m=7 and m=14)',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q3(b)', marks: 9 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q3(b)', marks: 9 }
      ],
      frequencyNote: 'Directly solves the exact 3-item numericals from Paper 2 Q3(b) [9M] and Paper 4 Q3(b) [9M].',
      syllabusTopics: [
        'Solved 0/1 Knapsack LCBB Numerical',
        'Instance 1: m = 7, items {(5,6), (4,5), (3,4)}',
        'Instance 2: m = 14, items {(10,12), (8,10), (6,8)}'
      ],
      definition: 'Applies LC Branch and Bound to solve discrete 0/1 knapsack instances by ordering items by value-to-weight ratio, computing fractional bounds, and tracing the state space tree.',
      sections: [
        {
          title: '1. Part I: Solve Instance 1 (Paper 2 Q3(b): m = 7)',
          content: [
            'Given items:',
            '• O₁: Weight = 5, Value = 6  =>  Ratio = 6/5 = 1.20',
            '• O₂: Weight = 4, Value = 5  =>  Ratio = 5/4 = 1.25',
            '• O₃: Weight = 3, Value = 4  =>  Ratio = 4/3 = 1.33',
            'Knapsack Capacity m = 7.',
            '',
            'Step 1: Sort items in descending order of value/weight ratio:',
            '1. Item 1 (O₃): w₁ = 3, p₁ = 4 (ratio 1.33)',
            '2. Item 2 (O₂): w₂ = 4, p₂ = 5 (ratio 1.25)',
            '3. Item 3 (O₁): w₃ = 5, p₃ = 6 (ratio 1.20)'
          ]
        },
        {
          title: '2. Root Bounds for Instance 1 (m = 7)',
          content: [
            '• Upper bound u(root): Take Item 1 (w=3, p=4) and Item 2 (w=4, p=5).',
            '  Total weight = 3 + 4 = 7 <= 7. Total profit = 4 + 5 = 9.',
            '  u(root) = -9.',
            '• Lower bound c^(root): Continuous relaxation fills knapsack with Item 1 and Item 2 completely:',
            '  Capacity remaining = 7 - (3 + 4) = 0.',
            '  c^(root) = -(4 + 5) = -9.',
            'Since c^(root) == u(root) == -9, the root upper bound ALREADY equals the lower bound!',
            'Therefore, the optimal solution is achieved immediately by taking Item 1 (O₃) and Item 2 (O₂):',
            'Optimal Items = {O₂, O₃}, Weight = 4 + 3 = 7, Max Profit = 5 + 4 = 9.'
          ]
        },
        {
          title: '3. Part II: Solve Instance 2 (Paper 4 Q3(b): m = 14)',
          content: [
            'Given items:',
            '• O₁: Weight = 10, Value = 12  =>  Ratio = 12/10 = 1.20',
            '• O₂: Weight = 8, Value = 10   =>  Ratio = 10/8 = 1.25',
            '• O₃: Weight = 6, Value = 8    =>  Ratio = 8/6 = 1.33',
            'Knapsack Capacity m = 14.',
            '',
            'Step 1: Sort items in descending order of ratio:',
            '1. Item 1 (O₃): w₁ = 6, p₁ = 8 (ratio 1.33)',
            '2. Item 2 (O₂): w₂ = 8, p₂ = 10 (ratio 1.25)',
            '3. Item 3 (O₁): w₃ = 10, p₃ = 12 (ratio 1.20)'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Solve 0/1 knapsack for m = 14 with items O₁(10, 12), O₂(8, 10), O₃(6, 8) using LC Branch and Bound.',
        givenData: [
          { label: 'Capacity (m)', value: '14' },
          { label: 'Items Sorted by Ratio', value: 'O₃(w=6, p=8, r=1.33), O₂(w=8, p=10, r=1.25), O₁(w=10, p=12, r=1.20)' }
        ],
        toFind: [
          'Root lower and upper bounds c^(1) and u(1)',
          'Item 1 (O₃) branching and pruning condition at Node 3',
          'Optimal item selection vector x and maximum profit'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Compute Root Bounds (Node 1)',
            explanation: 'Greedy discrete fill: take O₃ (w=6, p=8) and O₂ (w=8, p=10). Total weight = 6 + 8 = 14 <= 14. Total profit = 18. Upper bound u = -18. Fractional lower bound c^ = -(8 + 10) = -18.',
            calculation: 'u(1) = -18, c^(1) = -18',
            result: 'c^(1) = -18, u = -18'
          },
          {
            stepNumber: 2,
            title: 'Branch on Item 1 (O₃: w=6, p=8)',
            explanation: 'Node 2 (with O₃): cw = 6, cp = 8. Next item O₂ fits (w=8). Total weight = 14, profit = 18. c^(2) = -18, u(2) = -18. Node 3 (without O₃): cw = 0, cp = 0. Fit O₂ (w=8, p=10) and fraction of O₁: (14 - 8)/10 * 12 = 7.2. c^(3) = -(10 + 7.2) = -17.2.',
            calculation: 'Node 2: c^ = -18; Node 3: c^ = -17.2',
            result: 'Node 2: c^ = -18, Node 3: c^ = -17.2'
          },
          {
            stepNumber: 3,
            title: 'Pruning Decision at Node 3 (without O₃)',
            explanation: 'At Node 3, c^(3) = -17.2. But current global upper bound u = -18. Since -17.2 >= -18 (i.e. profit 17.2 < 18), Node 3 is KILLED immediately!',
            calculation: 'c^(3) = -17.2 >= u = -18 ==> KILLED',
            result: 'Node 3 Pruned'
          },
          {
            stepNumber: 4,
            title: 'Branch on Item 2 (O₂: w=8, p=10) from Node 2',
            explanation: 'Node 4 (with O₂): cw = 6 + 8 = 14, cp = 8 + 10 = 18. Leaf node reached with complete integer solution! Node 5 (without O₂): cw = 6, remaining capacity = 8. Fit fraction of O₁: 8/10 * 12 = 9.6. c^(5) = -(8 + 9.6) = -17.6 >= -18 => KILLED!',
            calculation: 'Node 4: x = [1, 1, 0] with Profit = 18',
            result: 'Node 4: Optimal Leaf'
          }
        ],
        finalAnswer: {
          label: 'Optimal Knapsack Solution',
          value: 'Select Items {O₂, O₃} with Total Weight = 14 and Maximum Profit = 18',
          interpretation: 'LCBB identifies the optimal solution with only 5 state-space nodes generated.'
        }
      },
      summary: [
        'Instance 1 (m = 7): Selects {O₂, O₃} with total weight 4 + 3 = 7 and maximum profit 5 + 4 = 9.',
        'Instance 2 (m = 14): Selects {O₂, O₃} with total weight 8 + 6 = 14 and maximum profit 10 + 8 = 18.',
        'In both instances, the root fractional bound matches the discrete solution, pruning all alternative branches rapidly.',
        'LCBB confirms the optimal solution in minimal node evaluations.'
      ],
      keyPoints: [
        'Sorted Ratio Ordering',
        'Instance 1 (m=7): Profit = 9, Items {O₂, O₃}',
        'Instance 2 (m=14): Profit = 18, Items {O₂, O₃}',
        'Pruning when c^(x) >= u',
        'Exact University Exam Match'
      ],
      conclusion: 'LC Branch and Bound rigorously identifies the optimal items while killing suboptimal branches as soon as their fractional upper bound falls below the current discrete maximum.'
    },

    // Q20
    {
      id: 'daa-u4-q20',
      unitId: 'unit-4',
      subjectId: 'daa',
      qNumber: 20,
      title: 'Provide a comprehensive comparison between Backtracking and Branch and Bound. Additionally, analyze the limitations and drawbacks of the Branch and Bound technique.',
      shortTitle: 'Backtracking vs Branch & Bound, and Limitations of B&B',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q4(a)', marks: 8 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q4(c)', marks: 4 },
        { paper: 'Decode / Textbook', questionNo: 'Q27 / Section 4.13', marks: 8 }
      ],
      frequencyNote: 'Directly asked as Paper 2 Q4(a) [8M] and Paper 4 Q4(c) [4M].',
      syllabusTopics: [
        'Backtracking vs Branch and Bound Comparison',
        'Search Technique and State Space Exploration',
        'Limitations and Drawbacks of Branch and Bound'
      ],
      definition: 'Backtracking and Branch & Bound are both state-space tree exploration methods, but Backtracking uses Depth-First Search with a LIFO stack to find all/any feasible solutions, whereas Branch and Bound uses Breadth-First or Best-First Search with priority queues and numerical bounds to find an optimal solution.',
      sections: [
        {
          title: '1. Exhaustive Comparison: Backtracking vs. Branch and Bound',
          table: {
            headers: ['Parameter', 'Backtracking Algorithmic Strategy', 'Branch and Bound Algorithmic Strategy'],
            rows: [
              {
                parameter: '1. Primary Objective',
                col1: 'Used predominantly for Decision Problems (is there a solution?) and Enumeration Problems (find all solutions).',
                col2: 'Used predominantly for Optimization Problems (find the single solution that maximizes or minimizes an objective function).'
              },
              {
                parameter: '2. Search Technique',
                col1: 'Strictly Depth-First Search (DFS). Explores as deeply as possible along each branch before backtracking.',
                col2: 'Does not use DFS. Uses Breadth-First Search (FIFO), D-search (LIFO), or Best-First Search (Least Cost Search).'
              },
              {
                parameter: '3. Data Structure',
                col1: 'Uses a Stack (explicit or via system recursion call stack).',
                col2: 'Uses a Queue (FIFO), Stack (LIFO), or Priority Queue / Min-Heap (LCBB).'
              },
              {
                parameter: '4. State Tree Exploration',
                col1: 'The state space tree is searched until a feasible solution is obtained or all branches are exhausted.',
                col2: 'The state space tree is pruned dynamically; does not need complete exploration if bounds guarantee suboptimality.'
              },
              {
                parameter: '5. Pruning Mechanism',
                col1: 'Uses bounding functions B_k(x_1..x_k) checking problem constraints to prune infeasible paths.',
                col2: 'Uses mathematical lower bounds c^(x) and upper bounds u to kill suboptimal live nodes.'
              },
              {
                parameter: '6. Node Expansion',
                col1: 'Generates one child at a time. The current node remains an E-node until all its descendants are explored.',
                col2: 'Generates all children of the E-node simultaneously, turning the current node into a dead node immediately.'
              },
              {
                parameter: '7. Memory Consumption',
                col1: 'Very low: proportional to maximum depth of tree O(n).',
                col2: 'Very high: proportional to the number of active live nodes stored in the priority queue (can be exponential).'
              },
              {
                parameter: '8. Classic Applications',
                col1: 'n-Queens Problem, Graph m-Coloring, Hamiltonian Cycle, Sum of Subsets.',
                col2: 'Traveling Salesperson Problem (TSP), 0/1 Knapsack, Job Sequencing with Penalties, 15-Puzzle.'
              }
            ]
          }
        },
        {
          title: '2. Drawbacks and Limitations of Branch and Bound',
          content: [
            'While Branch and Bound guarantees finding the true optimal solution, it exhibits several critical practical limitations:',
            '',
            '1. Exponential Worst-Case Time Complexity:',
            '   In the worst case (where bounding functions are loose or ineffective), Branch and Bound must inspect every state-space node, degenerating to exponential runtime O(2^n) or O(n!).',
            '',
            '2. Massive Memory Consumption (State Explosion):',
            '   Unlike backtracking which only stores the current search path of depth O(n), Branch and Bound must keep ALL unexplored live nodes in memory (in a priority min-heap). For complex problems, the heap can exceed available RAM within seconds.',
            '',
            '3. Heavy Dependency on Bounding Quality:',
            '   The efficiency depends entirely on the tightness of lower bound c^(x) and upper bound u. If the heuristic is poor, pruning cannot occur, and almost the entire tree is generated.',
            '',
            '4. Computational Overhead of Bounding Functions:',
            '   Computing bounds (e.g. matrix reduction in TSP or continuous knapsack) at every single node introduces significant per-node processing overhead compared to simple backtracking constraint checks.',
            '',
            '5. Not Suitable for Large Problem Sizes:',
            '   For large industrial instances (e.g. TSP with hundreds of cities), exact Branch and Bound becomes completely intractable, necessitating approximation algorithms or genetic heuristics.'
          ]
        }
      ],
      summary: [
        'Backtracking uses DFS with a stack for decision/enumeration problems with low O(n) memory.',
        'Branch and Bound uses BFS/Priority Queues with lower/upper bounds for optimization problems.',
        'Drawbacks of Branch and Bound include exponential worst-case time, massive heap memory consumption, and heavy bounding calculation overhead.',
        'For large inputs, Branch and Bound becomes computationally intractable, requiring approximation algorithms.'
      ],
      keyPoints: [
        'Objective: Decision vs Optimization',
        'Traversal: DFS vs BFS/Best-First',
        'Data Structure: Stack vs Priority Queue',
        'Memory: O(n) vs Heap Explosion',
        'Drawbacks: Exponential worst-case, RAM limits, Heuristic dependence'
      ],
      conclusion: 'Understanding the operational trade-offs between Backtracking and Branch & Bound enables software engineers to choose the optimal search paradigm based on problem objectives, memory constraints, and computational resources.'
    }
  ]
};
