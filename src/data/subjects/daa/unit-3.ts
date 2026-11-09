import { Unit } from '@/types';

export const daaUnit3Data: Unit = {
  id: 'unit-3',
  unitNumber: 3,
  title: 'Greedy Method and Dynamic Programming Algorithmic Strategy',
  shortTitle: 'Greedy & Dynamic Programming',
  description: 'Comprehensive study of optimization strategies covering Greedy Control Abstraction, Fractional & 0/1 Knapsack formulations, Job Sequencing with Deadlines, Activity Selection, Bellman\'s Principle of Optimality, Optimal Substructure, Matrix Chain Multiplication (MCM), Optimal Binary Search Trees (OBST), and Binomial Coefficients.',
  syllabus: [
    'Greedy Strategy: Principle, Control Abstraction, Time Analysis, Applications',
    'Fractional Knapsack Problem: Greedy Strategy on p_i / w_i Density, Proof of Optimality',
    'Mathematical Formulations: Fractional Knapsack vs 0/1 Knapsack Constraint Models',
    'Job Scheduling / Sequencing with Deadlines: Principle, Control Abstraction, Disjoint Set Union',
    'Activity Selection Problem: Formulation, Earliest Finish Time Greedy Strategy',
    'Dynamic Programming: Principle of Optimality, Optimal Substructure, Overlapping Subproblems',
    '0/1 Knapsack using Dynamic Programming: Recurrence Relation, Table Formulation, Traceback Vector',
    'Matrix Chain Multiplication (MCM): Parenthesization Optimization, Recurrence, Split Table',
    'Optimal Binary Search Tree (OBST): Probability Weight Equation, Cost Recurrence, Root Tracking',
    'Binomial Coefficients via DP: Pascal\'s Identity, Space & Time Complexity Analysis',
    'Exhaustive Comparison: Greedy Method vs Dynamic Programming Strategy'
  ],
  questionPaperIndex: [
    { paper: 'Paper 1 ([6004]-480A)', qMain: 'Q1(a) 0/1 Knapsack DP (10M), Q1(b) Job Sequencing Greedy (8M)', qOr: 'Q2(a) Job Sequencing Examples (8M), Q2(b) OBST DP (10M)' },
    { paper: 'Paper 2 ([6263]-81)', qMain: 'Q1(a) Greedy Control Abstraction (6M), Q1(b) Knapsack Greedy 5 Objects (8M), Q1(c) Principle of Optimality (4M)', qOr: 'Q2(a) DP Control Abstraction (8M), Q2(b) Matrix Chain Multiplication 4 Matrices (10M)' },
    { paper: 'Paper 3 ([6404]-81 / [6181]-101)', qMain: 'Q1(a) Knapsack Formulations (8M), Q1(b) Activity Selection (9M) | P-6551: Q1(a) Job Sequencing (9M), Q1(b) Knapsack DP (9M)', qOr: 'Q2(a) Principle of Optimality (7M), Q2(b) 0/1 Knapsack DP W=7 (10M) | P-6551: Q2(a) Job Scheduling (12M), Q2(b) Steps (6M)' },
    { paper: 'Paper 4 ([6354]-485)', qMain: 'Q1(a) Task Scheduling with Penalties (8M), Q1(b) Knapsack Greedy W=15 (8M), Q1(c) Optimal Substructure (2M)', qOr: 'Q2(a) MCM 5 Matrices (10M), Q2(b) Knapsack DP Weakness (4M), Q2(c) Control Abstraction Uses (4M)' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Greedy Strategy', definition: 'An algorithmic paradigm that constructs a solution piece by piece, always choosing the immediate next piece that offers the most obvious and immediate benefit (locally optimal choice), with no backtracking.' },
      { term: 'Optimal Substructure', definition: 'A problem exhibits optimal substructure if an optimal solution to the overall problem contains within it optimal solutions to its constituent subproblems.' },
      { term: 'Greedy Choice Property', definition: 'The property that a globally optimal solution can always be arrived at by making a series of locally optimal (greedy) choices without re-evaluating previous decisions.' },
      { term: 'Principle of Optimality', definition: 'Formulated by Richard Bellman (1957): An optimal policy has the property that whatever the initial state and decisions are, the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision.' },
      { term: 'Overlapping Subproblems', definition: 'A condition where a recursive algorithm revisits the exact same subproblems repeatedly rather than generating new subproblems, allowing dynamic programming to save results in a table.' },
      { term: 'Matrix Chain Multiplication', definition: 'Finding the optimal parenthesization order for multiplying a sequence of matrices that minimizes total scalar multiplications, solvable in O(n³) via dynamic programming.' },
      { term: 'Optimal Binary Search Tree (OBST)', definition: 'A binary search tree structured such that the expected total search cost across known access frequencies (successful p_i and unsuccessful q_i) is minimized.' }
    ],
    coreFormulas: [
      { name: 'Fractional Knapsack Continuous Model', latex: '\\max \\sum_{i=1}^n p_i x_i \\quad \\text{s.t.} \\quad \\sum_{i=1}^n w_i x_i \\le W, \\quad 0 \\le x_i \\le 1' },
      { name: '0/1 Knapsack Discrete Model', latex: '\\max \\sum_{i=1}^n p_i x_i \\quad \\text{s.t.} \\quad \\sum_{i=1}^n w_i x_i \\le W, \\quad x_i \\in \\{0, 1\\}' },
      { name: '0/1 Knapsack DP Recurrence', latex: 'T[i, w] = \\begin{cases} T[i-1, w] & \\text{if } w_i > w \\\\ \\max\\{T[i-1, w], \\; p_i + T[i-1, w - w_i]\\} & \\text{if } w_i \\le w \\end{cases}' },
      { name: 'Matrix Chain Multiplication Recurrence', latex: 'm[i, j] = \\min_{i \\le k < j} \\{ m[i, k] + m[k+1, j] + p_{i-1} p_k p_j \\}' },
      { name: 'OBST Cost Equation', latex: 'C[i, j] = W[i, j] + \\min_{i < k \\le j} \\{ C[i, k-1] + C[k, j] \\}' },
      { name: 'OBST Weight Accumulation', latex: 'W[i, j] = W[i, j-1] + p_j + q_j, \\quad W[i, i] = q_i' },
      { name: 'Pascal Binomial Identity', latex: 'C(n, k) = C(n-1, k-1) + C(n-1, k), \\quad C(n, 0) = C(n, n) = 1' }
    ],
    comparisonHighlights: [
      { title: 'Greedy vs Dynamic Programming', summary: 'Greedy makes one locally optimal choice without looking back (O(n log n) or O(n²)). DP evaluates all possible subproblem decisions and stores results (O(n²) or O(n³)), guaranteeing global optimality whenever the principle of optimality holds.' },
      { title: '0/1 Knapsack vs Fractional Knapsack', summary: 'Fractional knapsack allows breaking items into fractions and is optimally solvable via greedy ratio sorting p_i/w_i in O(n log n). 0/1 knapsack requires discrete decisions and is NP-complete, requiring O(nW) DP pseudo-polynomial time.' }
    ],
    examTips: [
      'In Job Sequencing with Deadlines numericals, always draw the slot timeline [0→1, 1→2, ...] and explicitly state whether each job is SCHEDULED or REJECTED.',
      'In Matrix Chain Multiplication, remember m[i, i] = 0 along the diagonal. Compute by chain length l = 2, 3, 4, ... up to n.',
      'In 0/1 Knapsack DP, show both the filled table AND the traceback steps to identify the binary selection vector (x₁, x₂, x₃, x₄).',
      'In OBST numericals, compute the W matrix first before calculating C[i, j] to avoid arithmetic errors.'
    ]
  },
  questions: [
    // Q1: Greedy Control Abstraction & Strategy
    {
      id: 'daa-u3-q1',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 1,
      title: 'Explain the Greedy Algorithmic Strategy. Write its General Control Abstraction and Analyze its Time Complexity',
      shortTitle: 'Greedy Method: Principle, Control Abstraction & Complexity',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q1(a)', marks: 6 },
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q1(b)', marks: 8 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q2(c)', marks: 4 }
      ],
      syllabusTopics: ['Greedy Strategy Principle', 'Control Abstraction', 'Time Complexity Analysis', 'Feasibility and Optimality'],
      definition: 'A greedy algorithm is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most immediate and obvious benefit (locally optimal choice), with the expectation that this will lead to a globally optimal solution.',
      sections: [
        {
          title: '1. Core Principles of the Greedy Strategy',
          content: [
            'In the greedy technique, a solution is constructed through a sequence of steps, each expanding a partially constructed solution obtained so far, until a complete solution is reached.',
            'At each decision point, the algorithm enforces three mandatory criteria:',
            '  1. Feasible: The choice must strictly satisfy the problem\'s operational constraints.',
            '  2. Locally Optimal: Among all currently feasible choices, the algorithm selects the one with the best immediate score based on a local heuristic.',
            '  3. Irrevocable: Once a decision is made, it cannot be undone or revised in subsequent steps (no backtracking).'
          ]
        },
        {
          title: '2. Characteristics of Problems Solvable by Greedy Methods',
          content: [
            'For a greedy algorithm to yield a provably optimal solution, the problem must possess two fundamental properties:',
            '1. Greedy Choice Property: A globally optimal solution can be assembled by making locally optimal decisions without examining subproblem solutions beforehand.',
            '2. Optimal Substructure: An optimal solution to the overall problem contains within it optimal solutions to all its subproblems.'
          ]
        },
        {
          title: '3. General Control Abstraction for Greedy Method',
          content: [
            'A control abstraction is a generalized pseudocode skeleton that outlines the execution flow of an algorithmic paradigm without tying it to a specific application domain.',
            'Algorithm Greedy(D, n)',
            '// Input: D is an array of n candidates from which a solution is to be constructed.',
            '// Output: A feasible solution subset that optimizes the objective function.',
            '{',
            '    solution = ∅; // Initially start with an empty solution set',
            '    for i = 1 to n do',
            '    {',
            '        x = Select(D); // Selection function picks the best local candidate',
            '        if Feasible(solution, x) then',
            '            solution = Union(solution, x); // Include candidate into solution',
            '    }',
            '    return solution;',
            '}'
          ]
        },
        {
          title: '4. Time Complexity Analysis of the Control Abstraction',
          content: [
            'Let n be the total number of candidate inputs:',
            '1. Presorting: Most greedy algorithms begin by sorting candidates according to their greedy metric (e.g., profit-to-weight ratio, deadline, or finish time). This presorting step takes O(n log n) time using Merge Sort or Quick Sort.',
            '2. Iterative Scan: The main loop executes n times. Within each iteration:',
            '   • Select(D) takes O(1) time from the pre-sorted list.',
            '   • Feasible(solution, x) takes O(1) to O(n) depending on the constraint check mechanism.',
            '   • Union(solution, x) takes O(1) time.',
            '3. Overall Time Complexity: Typically O(n log n) when sorting dominates, or O(n²) when linear feasibility checks are conducted (e.g., elementary Job Sequencing without Disjoint Sets).'
          ]
        },
        {
          title: '5. Key Applications of Greedy Strategy',
          content: [
            '1. Fractional Knapsack Problem',
            '2. Job Sequencing with Deadlines',
            '3. Minimum Spanning Trees (Prim\'s and Kruskal\'s Algorithms)',
            '4. Single Source Shortest Paths (Dijkstra\'s Algorithm)',
            '5. Huffman Coding for Data Compression',
            '6. Activity Selection Problem'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-greedy-flow',
          title: 'Greedy Algorithmic Strategy Decision Flow',
          caption: 'Architectural flowchart depicting the candidate selection, feasibility verification, irrevocable inclusion, and termination cycle of greedy algorithms.',
          type: 'svg-interactive',
          svgType: 'greedy-strategy-flow'
        }
      ],
      summary: [
        'Greedy algorithms build solutions sequentially by making locally optimal choices at each stage.',
        'Requires two properties: Greedy Choice Property and Optimal Substructure.',
        'Decisions are irrevocable—the algorithm never backtracks or reconsider previous choices.',
        'General time complexity is O(n log n) dominated by initial candidate presorting.'
      ],
      keyPoints: [
        'Locally optimal choice',
        'Feasibility & Irrevocability',
        'Algorithm Greedy(D, n) abstraction',
        'O(n log n) presorting complexity',
        'Greedy Choice Property'
      ]
    },

    // Q2: Mathematical Formulation of Fractional vs 0/1 Knapsack
    {
      id: 'daa-u3-q2',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 2,
      title: 'Give the Mathematical Formulation for: (i) Fractional Knapsack Problem, and (ii) 0/1 Knapsack Problem. Why Does the Greedy Strategy Fail for 0/1 Knapsack?',
      shortTitle: 'Knapsack Formulations: Fractional vs 0/1 & Greedy Limitations',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 3 ([6404]-81)', questionNo: 'Q1(a)', marks: 8 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q1(b)', marks: 8 }
      ],
      syllabusTopics: ['Mathematical Knapsack Formulation', 'Fractional vs 0/1 Constraints', 'Greedy Ratio Strategy', 'Greedy Failure in 0/1'],
      definition: 'The Knapsack problem is a combinatorial optimization challenge where given a set of n items, each with a weight w_i and profit p_i, and a knapsack of capacity W, the goal is to determine the subset of items to pack to maximize total profit without exceeding W.',
      sections: [
        {
          title: '1. Mathematical Formulation: Fractional Knapsack Problem',
          content: [
            'In the Fractional Knapsack problem, the decision maker is permitted to take arbitrary fractions of an item (e.g., breaking liquids, powders, or divisible goods).',
            'Formally:',
            'Maximize the total profit objective function: Z = ∑_{i=1}^n p_i x_i',
            'Subject to the weight capacity constraint: ∑_{i=1}^n w_i x_i ≤ W',
            'Where the decision variable x_i is continuous: 0 ≤ x_i ≤ 1 for all i = 1, 2, ..., n.',
            'Here, x_i = 1 means taking item i completely, x_i = 0 means omitting it, and 0 < x_i < 1 represents taking a fractional part x_i of item i.'
          ],
          formulas: [
            { name: 'Fractional Knapsack Optimization Model', latex: '\\max \\sum_{i=1}^n p_i x_i \\quad \\text{s.t.} \\quad \\sum_{i=1}^n w_i x_i \\le W, \\quad 0 \\le x_i \\le 1' }
          ]
        },
        {
          title: '2. Mathematical Formulation: 0/1 Knapsack Problem',
          content: [
            'In the 0/1 Knapsack problem, items are indivisible (discrete items like laptops, bullion bars, or machines). Each item must either be taken in its entirety or left behind completely.',
            'Formally:',
            'Maximize the total profit objective function: Z = ∑_{i=1}^n p_i x_i',
            'Subject to the weight capacity constraint: ∑_{i=1}^n w_i x_i ≤ W',
            'Where the decision variable x_i is strictly binary: x_i ∈ {0, 1} for all i = 1, 2, ..., n.',
            'Here, x_i = 1 denotes that item i is selected, and x_i = 0 denotes that item i is excluded.'
          ],
          formulas: [
            { name: '0/1 Knapsack Optimization Model', latex: '\\max \\sum_{i=1}^n p_i x_i \\quad \\text{s.t.} \\quad \\sum_{i=1}^n w_i x_i \\le W, \\quad x_i \\in \\{0, 1\\}' }
          ]
        },
        {
          title: '3. Why Greedy Strategy Fails for 0/1 Knapsack',
          content: [
            '1. Empty Capacity Pathology: When an item cannot be divided, choosing an item with high density (p_i / w_i) may leave residual capacity that cannot accommodate any remaining item, wasting knapsack capacity.',
            '2. Concrete Counterexample:',
            '   • Let Knapsack Capacity W = 50.',
            '   • Item 1: w₁ = 10, p₁ = 60  ==>  p₁/w₁ = 6.0',
            '   • Item 2: w₂ = 20, p₂ = 100 ==>  p₂/w₂ = 5.0',
            '   • Item 3: w₃ = 30, p₃ = 120 ==>  p₃/w₃ = 4.0',
            '   • Greedy Choice by Ratio: Takes Item 1 (w=10, p=60) + Item 2 (w=20, p=100). Total Weight = 30. Remaining capacity = 20. Item 3 (w=30) cannot fit! Total Profit = $160.',
            '   • Truly Optimal 0/1 Choice: Take Item 2 (w=20) + Item 3 (w=30). Total Weight = 50 (100% full!). Total Profit = 100 + 120 = $220.',
            '   • The greedy choice achieved only $160, falling far short of the optimal $220.',
            '3. Conclusion: Because discrete choices prevent filling residual voids, 0/1 knapsack lacks the greedy choice property and must be solved using Dynamic Programming (O(nW)) or Branch & Bound.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-knap-frac',
          title: 'Fractional Knapsack Greedy Density Filling Architecture',
          caption: 'Visual comparison showing complete items filled in decreasing order of ratio p_i/w_i with the final capacity void filled by a fraction x_3 = 2/3.',
          type: 'svg-interactive',
          svgType: 'knapsack-fractional-visual'
        }
      ],
      summary: [
        'Fractional Knapsack allows continuous fraction variables 0 ≤ x_i ≤ 1; solvable in O(n log n) by greedy ratio sorting.',
        '0/1 Knapsack restricts variables to binary x_i ∈ {0, 1}; NP-complete.',
        'Greedy ratio fails for 0/1 Knapsack because indivisible items leave unused knapsack gaps.',
        '0/1 Knapsack requires Dynamic Programming or Branch and Bound.'
      ],
      keyPoints: [
        'Fractional constraint 0 ≤ x_i ≤ 1',
        '0/1 constraint x_i ∈ {0, 1}',
        'p_i / w_i ratio sorting',
        'Greedy failure counterexample ($160 vs $220)',
        'NP-completeness of 0/1 Knapsack'
      ]
    },

    // Q3: Solved Numerical: Fractional Knapsack (5 Objects, m = 100)
    {
      id: 'daa-u3-q3',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 3,
      title: 'Numerical: Find an Optimal Solution for the Following Knapsack Instance Using Greedy Method. Number of Objects n = 5, Capacity of Knapsack m = 100',
      shortTitle: 'Solved Numerical: Fractional Knapsack (5 Objects, m = 100)',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q1(b)', marks: 8 }
      ],
      syllabusTopics: ['Greedy Knapsack Numerical', 'Ratio Sorting', 'Capacity Exhaustion', 'Evaluation of 3 Strategies'],
      definition: 'Complete step-by-step determination of knapsack filling under three distinct greedy heuristics: Maximum Profit, Minimum Weight, and Maximum Profit/Weight Ratio.',
      sections: [
        {
          title: '1. Problem Statement & Given Data',
          content: [
            'Knapsack Capacity m = 100, Number of objects n = 5.',
            'Object 1: Weight w₁ = 20, Profit p₁ = 10',
            'Object 2: Weight w₂ = 30, Profit p₂ = 20',
            'Object 3: Weight w₃ = 66, Profit p₃ = 30',
            'Object 4: Weight w₄ = 40, Profit p₄ = 40',
            'Object 5: Weight w₅ = 60, Profit p₅ = 50'
          ]
        },
        {
          title: '2. Calculation Table for 3 Greedy Heuristics',
          table: {
            headers: ['Object', 'Profit (p)', 'Weight (w)', 'Ratio (p/w)', 'Rank by Ratio'],
            rows: [
              { parameter: 'Object 1', col1: '10', col2: '20', col3: '10/20 = 0.500', col4: 'Rank 5' },
              { parameter: 'Object 2', col1: '20', col2: '30', col3: '20/30 = 0.667', col4: 'Rank 4' },
              { parameter: 'Object 3', col1: '30', col2: '66', col3: '30/66 = 0.455', col4: 'Rank 6 (Worst)' },
              { parameter: 'Object 4', col1: '40', col2: '40', col3: '40/40 = 1.000', col4: 'Rank 1 (Best)' },
              { parameter: 'Object 5', col1: '50', col2: '60', col3: '50/60 = 0.833', col4: 'Rank 2' }
            ]
          }
        },
        {
          title: '3. Comparative Evaluation of the Three Strategies',
          content: [
            'Strategy 1 (Max Profit First):',
            '  • Pick Object 5 (p=50, w=60) ==> Remaining capacity = 100 - 60 = 40.',
            '  • Pick Object 4 (p=40, w=40) ==> Remaining capacity = 40 - 40 = 0.',
            '  • Total Profit = 50 + 40 = 90. Solution vector: (0, 0, 0, 1, 1).',
            'Strategy 2 (Min Weight First):',
            '  • Pick Object 1 (w=20, p=10) ==> Remaining = 80.',
            '  • Pick Object 2 (w=30, p=20) ==> Remaining = 50.',
            '  • Pick Object 4 (w=40, p=40) ==> Remaining = 10.',
            '  • Pick Fraction of Object 5: (10/60) × 50 = 8.33 ==> Remaining = 0.',
            '  • Total Profit = 10 + 20 + 40 + 8.33 = 78.33. Solution vector: (1, 1, 0, 1, 1/6).',
            'Strategy 3 (Max Profit-to-Weight Ratio - Provably Optimal):',
            '  • Sort order: Object 4 (1.0) > Object 5 (0.833) > Object 2 (0.667) > Object 1 (0.50) > Object 3 (0.455).',
            '  • Step 1: Pick Object 4 (w=40, p=40) ==> Remaining capacity = 100 - 40 = 60.',
            '  • Step 2: Pick Object 5 (w=60, p=50) ==> Remaining capacity = 60 - 60 = 0.',
            '  • Knapsack is completely full! Total Profit = 40 + 50 = 90.',
            '  • Solution Vector: x = (0, 0, 0, 1, 1).'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Compute optimal knapsack solution for 5 objects with capacity m = 100 using Greedy strategy.',
        givenData: [
          { label: 'Capacity (m)', value: '100' },
          { label: 'Objects (n)', value: '5' },
          { label: 'Weights', value: '[20, 30, 66, 40, 60]' },
          { label: 'Profits', value: '[10, 20, 30, 40, 50]' }
        ],
        toFind: [
          'Profit-to-weight ratios p_i / w_i for all 5 objects',
          'Sorted candidate priority list',
          'Step-by-step capacity consumption',
          'Final profit and solution vector x = (x₁, x₂, x₃, x₄, x₅)'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Compute Profit-to-Weight Ratio for All Items',
            explanation: 'Divide the profit of each item by its weight to determine the profit generated per unit of knapsack weight.',
            calculation: 'O₁: 10 / 20 = 0.500\nO₂: 20 / 30 = 0.667\nO₃: 30 / 66 = 0.455\nO₄: 40 / 40 = 1.000\nO₅: 50 / 60 = 0.833',
            result: 'Ratios: [0.500, 0.667, 0.455, 1.000, 0.833]'
          },
          {
            stepNumber: 2,
            title: 'Sort Items in Descending Order of Ratio',
            explanation: 'Rank the objects based on density so that high-yield items are packed first.',
            calculation: 'Rank 1: Object 4 (Ratio = 1.000, w = 40, p = 40)\nRank 2: Object 5 (Ratio = 0.833, w = 60, p = 50)\nRank 3: Object 2 (Ratio = 0.667, w = 30, p = 20)\nRank 4: Object 1 (Ratio = 0.500, w = 20, p = 10)\nRank 5: Object 3 (Ratio = 0.455, w = 66, p = 30)',
            result: 'Order of selection: O₄ → O₅ → O₂ → O₁ → O₃'
          },
          {
            stepNumber: 3,
            title: 'Pack Rank 1 Item: Object 4',
            explanation: 'Object 4 has weight w₄ = 40 which is less than remaining capacity 100.',
            calculation: 'Take x₄ = 1.0\nProfit accumulated = 40\nRemaining capacity = 100 - 40 = 60',
            result: 'Remaining Capacity = 60, Accumulated Profit = 40'
          },
          {
            stepNumber: 4,
            title: 'Pack Rank 2 Item: Object 5',
            explanation: 'Object 5 has weight w₅ = 60 which exactly equals remaining capacity 60.',
            calculation: 'Take x₅ = 1.0\nProfit accumulated = 40 + 50 = 90\nRemaining capacity = 60 - 60 = 0',
            result: 'Remaining Capacity = 0 (Knapsack Full!), Accumulated Profit = 90'
          },
          {
            stepNumber: 5,
            title: 'Finalize Solution Vector & Total Profit',
            explanation: 'Since knapsack capacity is exhausted, set x₁ = 0, x₂ = 0, x₃ = 0 for remaining items.',
            calculation: 'Solution Vector x = (x₁, x₂, x₃, x₄, x₅) = (0, 0, 0, 1, 1)\nTotal Weight = 40 + 60 = 100\nTotal Profit = 40 + 50 = 90',
            result: 'x = (0, 0, 0, 1, 1) with Maximum Profit = 90',
            tip: 'State the solution vector clearly in university exams as (0, 0, 0, 1, 1).'
          }
        ],
        finalAnswer: {
          label: 'Optimal Greedy Knapsack Solution',
          value: 'Maximum Profit = 90 with Selection Vector x = (0, 0, 0, 1, 1)',
          interpretation: 'By packing Object 4 completely and Object 5 completely, the knapsack achieves its exact capacity of 100 with an optimal profit of 90.'
        }
      },
      summary: [
        'Ratios: O₄ (1.00) > O₅ (0.833) > O₂ (0.667) > O₁ (0.500) > O₃ (0.455).',
        'Packed Object 4 (w=40) + Object 5 (w=60) = 100 units weight.',
        'Maximum Profit = 40 + 50 = 90.',
        'Optimal solution vector: x = (0, 0, 0, 1, 1).'
      ],
      keyPoints: [
        'Density ratio p_i / w_i computation',
        'Descending greedy ranking',
        'Exact capacity exhaustion at 100',
        'Solution vector (0, 0, 0, 1, 1)'
      ]
    },

    // Q4: Solved Numerical: Fractional Knapsack (Capacity 15, 4 Objects)
    {
      id: 'daa-u3-q4',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 4,
      title: 'Numerical: Suppose We Have a Knapsack with Maximum Capacity of 15 Units and 4 Items: O₁(8, 10), O₂(6, 8), O₃(4, 3), O₄(2, 4). Maximize Total Value Using Greedy Strategy',
      shortTitle: 'Solved Numerical: Fractional Knapsack (W = 15, 4 Items)',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q1(b)', marks: 8 }
      ],
      syllabusTopics: ['Fractional Knapsack', 'Greedy Ratio Strategy', 'Fractional Item Breakage'],
      definition: 'Application of the greedy profit-to-weight ratio heuristic to an instance of 4 objects with fractional allocation to maximize total value within capacity 15.',
      sections: [
        {
          title: '1. Given Instance & Ratio Computation',
          table: {
            headers: ['Object', 'Weight (W_i)', 'Value (V_i)', 'Value/Weight Ratio', 'Selection Priority'],
            rows: [
              { parameter: 'O₁', col1: '8', col2: '10', col3: '10/8 = 1.250', col4: 'Rank 3' },
              { parameter: 'O₂', col1: '6', col2: '8', col3: '8/6 = 1.333', col4: 'Rank 2' },
              { parameter: 'O₃', col1: '4', col2: '3', col3: '3/4 = 0.750', col4: 'Rank 4 (Worst)' },
              { parameter: 'O₄', col1: '2', col2: '4', col3: '4/2 = 2.000', col4: 'Rank 1 (Best)' }
            ]
          }
        },
        {
          title: '2. Step-by-Step Packing Walkthrough',
          content: [
            'Knapsack Capacity W = 15.',
            'Step 1: Pick O₄ (Ratio = 2.000). Weight = 2 ≤ 15. Take x₄ = 1. Remaining capacity = 15 - 2 = 13. Value = 4.',
            'Step 2: Pick O₂ (Ratio = 1.333). Weight = 6 ≤ 13. Take x₂ = 1. Remaining capacity = 13 - 6 = 7. Value = 4 + 8 = 12.',
            'Step 3: Pick O₁ (Ratio = 1.250). Weight = 8 > remaining capacity 7. Take fraction x₁ = 7 / 8 = 0.875.',
            '        Value from fraction = 0.875 × 10 = 8.75. Remaining capacity = 7 - 7 = 0.',
            'Step 4: Knapsack is full! O₃ is excluded (x₃ = 0).',
            'Total Value = 4 + 8 + 8.75 = 20.75.',
            'Optimal Solution Vector: x = (x₁, x₂, x₃, x₄) = (7/8, 1, 0, 1) or (0.875, 1, 0, 1).'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Greedy fractional knapsack solution for capacity W = 15 across 4 items.',
        givenData: [
          { label: 'Capacity (W)', value: '15' },
          { label: 'Item O₁ (w, v)', value: '(8, 10)' },
          { label: 'Item O₂ (w, v)', value: '(6, 8)' },
          { label: 'Item O₃ (w, v)', value: '(4, 3)' },
          { label: 'Item O₄ (w, v)', value: '(2, 4)' }
        ],
        toFind: [
          'Value-to-weight ratios',
          'Ranked item sequence',
          'Fractional split of bottleneck item',
          'Maximized knapsack value'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Calculate Value/Weight Ratios',
            explanation: 'Compute density v_i / w_i for each candidate.',
            calculation: 'O₁: 10 / 8 = 1.25\nO₂: 8 / 6 = 1.333\nO₃: 3 / 4 = 0.75\nO₄: 4 / 2 = 2.00',
            result: 'Order of selection: O₄ (2.0) → O₂ (1.333) → O₁ (1.25) → O₃ (0.75)'
          },
          {
            stepNumber: 2,
            title: 'Pack Item O₄ (Rank 1)',
            explanation: 'Item O₄ requires 2 units of weight out of 15 available.',
            calculation: 'Take x₄ = 1.0\nAccumulated value = 4\nRemaining capacity = 15 - 2 = 13',
            result: 'Remaining Capacity = 13, Total Value = 4'
          },
          {
            stepNumber: 3,
            title: 'Pack Item O₂ (Rank 2)',
            explanation: 'Item O₂ requires 6 units of weight out of 13 available.',
            calculation: 'Take x₂ = 1.0\nAccumulated value = 4 + 8 = 12\nRemaining capacity = 13 - 6 = 7',
            result: 'Remaining Capacity = 7, Total Value = 12'
          },
          {
            stepNumber: 4,
            title: 'Pack Fractional Part of Item O₁ (Rank 3)',
            explanation: 'Item O₁ has weight 8 but only 7 units of knapsack capacity remain. Take fraction 7/8.',
            calculation: 'Take x₁ = 7 / 8 = 0.875\nFractional Value = (7/8) × 10 = 8.75\nAccumulated value = 12 + 8.75 = 20.75\nRemaining capacity = 7 - 7 = 0',
            result: 'Knapsack full! Total Value = 20.75'
          },
          {
            stepNumber: 5,
            title: 'State Final Solution Vector',
            explanation: 'Compile the complete decision vector across all items.',
            calculation: 'x₁ = 7/8, x₂ = 1, x₃ = 0, x₄ = 1\nx = (7/8, 1, 0, 1)',
            result: 'Vector x = (0.875, 1, 0, 1) with Value = 20.75'
          }
        ],
        finalAnswer: {
          label: 'Optimal Fractional Knapsack Solution',
          value: 'Max Value = 20.75 with vector x = (7/8, 1, 0, 1)',
          interpretation: 'Takes full items O₄ and O₂ plus 87.5% of item O₁ to exhaust the 15-unit knapsack capacity for a maximum value of 20.75.'
        }
      },
      summary: [
        'Ratios: O₄ (2.0) > O₂ (1.33) > O₁ (1.25) > O₃ (0.75).',
        'Took full O₄ (w=2, v=4) and O₂ (w=6, v=8).',
        'Took 7/8 fraction of O₁ (w=7, v=8.75).',
        'Max Value = 20.75 with vector x = (7/8, 1, 0, 1).'
      ],
      keyPoints: [
        'Fractional knapsack greedy ratio density',
        'Fractional split x₁ = 7/8',
        'Exclusion of O₃',
        'Max total value = 20.75'
      ]
    },

    // Q5: Job Sequencing with Deadlines Theory & Algorithm
    {
      id: 'daa-u3-q5',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 5,
      title: 'What is Job Sequencing with Deadlines? Explain its Principle, Greedy Control Abstraction, Time Analysis, and Algorithm Steps',
      shortTitle: 'Job Sequencing with Deadlines: Algorithm & Complexity',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q1(b)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q2(a)', marks: 12 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q2(b)', marks: 6 },
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q2(a)', marks: 8 }
      ],
      syllabusTopics: ['Job Sequencing Principle', 'Greedy Choice on Profits', 'Control Abstraction', 'Time Complexity O(n²) vs O(n log n)'],
      definition: 'Job Sequencing with Deadlines is an optimization problem where n jobs, each requiring 1 unit of CPU time and associated with a deadline d_i and profit p_i, must be scheduled on a single processor such that at most one job executes at any time and total earned profit is maximized.',
      sections: [
        {
          title: '1. Problem Principle & Operational Model',
          content: [
            '1. Each job i takes exactly 1 unit of processing time.',
            '2. A job earns its profit p_i if and only if it completes on or before its deadline d_i (i.e., scheduled in a slot [t-1, t] where t ≤ d_i).',
            '3. At any time t, the single CPU can execute at most one job.',
            '4. A set of jobs is termed feasible if there exists at least one schedule where every job in the set completes by its deadline.',
            '5. Greedy Choice Strategy: Sort jobs in non-increasing order of profit (p₁ ≥ p₂ ≥ ... ≥ p_n) and greedily schedule each job in the latest possible available time slot ≤ d_i.'
          ]
        },
        {
          title: '2. Steps for Greedy Job Sequencing',
          content: [
            'Step 1: Sort all given n jobs in descending order of profits (p₁ ≥ p₂ ≥ ... ≥ p_n).',
            'Step 2: Determine maximum deadline d_max = max(d_i). Initialize a time slot array J[1..d_max] with all slots empty (0).',
            'Step 3: For each job i from 1 to n:',
            '   a. Search for an empty slot k in J[] starting from k = min(d_max, d_i) downwards to 1.',
            '   b. If an empty slot k is found, reserve J[k] = job i (schedule it).',
            '   c. If no empty slot exists in [1..d_i], reject job i (it cannot be scheduled without violating a deadline).',
            'Step 4: The jobs residing in array J[] form the optimal sequence, and the sum of their profits yields the maximum profit.'
          ]
        },
        {
          title: '3. Greedy Algorithm: `Job_Seq(D, J, n)`',
          content: [
            'Algorithm Job_Seq(D, J, n)',
            '// D[1..n] contains deadlines sorted in descending order of profits.',
            '// J[1..k] contains the indices of scheduled feasible jobs.',
            '{',
            '    D[0] = 0; J[0] = 0;',
            '    J[1] = 1; // Schedule the highest-profit job 1 in slot 1',
            '    k = 1;    // k tracks the number of scheduled jobs',
            '    for i = 2 to n do',
            '    {',
            '        // Find insertion position r for job i in sorted deadline order',
            '        r = k;',
            '        while (D[J[r]] > D[i]) and (D[J[r]] != r) do',
            '            r = r - 1;',
            '        if (D[J[r]] <= D[i]) and (D[i] > r) then',
            '        {',
            '            for q = k down to (r + 1) do',
            '                J[q + 1] = J[q];',
            '            J[r + 1] = i;',
            '            k = k + 1;',
            '        }',
            '    }',
            '    return k;',
            '}'
          ]
        },
        {
          title: '4. Time Complexity Analysis',
          content: [
            '1. Presorting Phase: Sorting n jobs by profit requires O(n log n) using Merge Sort.',
            '2. Slot Search & Insertion Phase:',
            '   • The outer loop iterates n - 1 times (for jobs 2 through n).',
            '   • For each job, searching for a vacant slot takes up to d_max ≤ n steps.',
            '   • Total search time across all jobs: ∑_{i=1}^n i = O(n²).',
            '3. Overall Time Complexity: O(n²) using linear slot arrays.',
            '4. Disjoint Set Union (DSU) Optimization: By using tree structures with path compression to find the latest open slot, the running time drops to O(n α(n)) or O(n log n).'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-job-seq',
          title: 'Job Sequencing Timeline & Slot Allocation Architecture',
          caption: 'Timeline diagram showing slot reservation [0,1], [1,2], [2,3] and rejection of jobs whose deadlines have elapsed.',
          type: 'svg-interactive',
          svgType: 'job-scheduling-timeline'
        }
      ],
      summary: [
        'Job Sequencing schedules unit-time jobs to maximize profit while respecting deadlines.',
        'Sorts jobs by profit and assigns each to the latest open slot ≤ deadline.',
        'Standard linear search algorithm runs in O(n²) time; DSU optimization runs in O(n log n).',
        'Greedy strategy is provably optimal using matroid theory.'
      ],
      keyPoints: [
        'Unit-time jobs execution',
        'Descending profit order',
        'Latest available slot assignment',
        'O(n²) standard vs O(n log n) DSU complexity',
        'Job_Seq control abstraction'
      ]
    },

    // Q6: Solved Numerical: Job Sequencing (5 Jobs: 60, 100, 20, 40, 20)
    {
      id: 'daa-u3-q6',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 6,
      title: 'Numerical: Job Scheduling Algorithm Using Greedy Approach for Jobs J₁..J₅ with Deadlines D=[2, 1, 3, 2, 1] and Profits P=[60, 100, 20, 40, 20]. Determine Optimal Sequence and Maximum Profit',
      shortTitle: 'Solved Numerical: Job Scheduling (5 Jobs: P=60,100,20,40,20)',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q1(b)', marks: 8 },
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q2(a)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q2(a)', marks: 12 }
      ],
      syllabusTopics: ['Job Scheduling Numerical', 'Slot Allocation', 'Feasibility Check', 'Maximum Profit Computation'],
      definition: 'Step-by-step application of the greedy job sequencing algorithm with time slot allocation on five jobs with conflicting deadlines.',
      sections: [
        {
          title: '1. Given Job Data & Sorted Profit Table',
          table: {
            headers: ['Job', 'Profit (P_i)', 'Deadline (D_i)', 'Profit Rank', 'Action'],
            rows: [
              { parameter: 'J₂', col1: '100', col2: '1', col3: 'Rank 1', col4: 'Schedule in Slot 1 [0, 1]' },
              { parameter: 'J₁', col1: '60', col2: '2', col3: 'Rank 2', col4: 'Schedule in Slot 2 [1, 2]' },
              { parameter: 'J₄', col1: '40', col2: '2', col3: 'Rank 3', col4: 'Reject (Slots 1 & 2 full)' },
              { parameter: 'J₃', col1: '20', col2: '3', col3: 'Rank 4 (Tie)', col4: 'Schedule in Slot 3 [2, 3]' },
              { parameter: 'J₅', col1: '20', col2: '1', col3: 'Rank 5 (Tie)', col4: 'Reject (Slot 1 full)' }
            ]
          }
        },
        {
          title: '2. Detailed Step-by-Step Slot Reservation Walkthrough',
          content: [
            'Maximum deadline d_max = max(2, 1, 3, 2, 1) = 3. We maintain time slots: Slot 1 [0,1], Slot 2 [1,2], Slot 3 [2,3].',
            '• Step 1 (Job J₂): Profit = 100, Deadline = 1.',
            '  Check slot 1: Empty. Assign J₂ to Slot 1 [0, 1].',
            '  Current Schedule: [J₂, -, -], Total Profit = 100.',
            '• Step 2 (Job J₁): Profit = 60, Deadline = 2.',
            '  Check slot 2: Empty. Assign J₁ to Slot 2 [1, 2].',
            '  Current Schedule: [J₂, J₁, -], Total Profit = 100 + 60 = 160.',
            '• Step 3 (Job J₄): Profit = 40, Deadline = 2.',
            '  Check slot 2: Occupied by J₁. Check slot 1: Occupied by J₂.',
            '  No available slot ≤ 2. Reject J₄.',
            '• Step 4 (Job J₃): Profit = 20, Deadline = 3.',
            '  Check slot 3: Empty. Assign J₃ to Slot 3 [2, 3].',
            '  Current Schedule: [J₂, J₁, J₃], Total Profit = 160 + 20 = 180.',
            '• Step 5 (Job J₅): Profit = 20, Deadline = 1.',
            '  Check slot 1: Occupied by J₂. No slot available ≤ 1. Reject J₅.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Schedule jobs J₁..J₅ with P=[60, 100, 20, 40, 20] and D=[2, 1, 3, 2, 1] to maximize profit.',
        givenData: [
          { label: 'Jobs', value: 'J₁, J₂, J₃, J₄, J₅' },
          { label: 'Profits', value: '[60, 100, 20, 40, 20]' },
          { label: 'Deadlines', value: '[2, 1, 3, 2, 1]' },
          { label: 'Max Deadline (d_max)', value: '3 time slots' }
        ],
        toFind: [
          'Sorted candidate ranking by profit',
          'Slot reservation for each candidate',
          'Optimal job execution sequence',
          'Maximum earned profit'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Sort Jobs by Descending Profit',
            explanation: 'Greedy strategy requires evaluating higher-earning jobs first.',
            calculation: 'J₂ (p=100, d=1) > J₁ (p=60, d=2) > J₄ (p=40, d=2) > J₃ (p=20, d=3) = J₅ (p=20, d=1)',
            result: 'Sorted sequence: J₂, J₁, J₄, J₃, J₅'
          },
          {
            stepNumber: 2,
            title: 'Schedule Job J₂ (p = 100, d = 1)',
            explanation: 'Latest open slot ≤ deadline 1 is slot 1.',
            calculation: 'Slot 1 [0, 1] is empty. Assign J₂ to Slot 1.',
            result: 'Slots: [J₂, empty, empty] | Profit = 100'
          },
          {
            stepNumber: 3,
            title: 'Schedule Job J₁ (p = 60, d = 2)',
            explanation: 'Latest open slot ≤ deadline 2 is slot 2.',
            calculation: 'Slot 2 [1, 2] is empty. Assign J₁ to Slot 2.',
            result: 'Slots: [J₂, J₁, empty] | Profit = 160'
          },
          {
            stepNumber: 4,
            title: 'Evaluate Job J₄ (p = 40, d = 2)',
            explanation: 'Deadline is 2. Slot 2 is filled (J₁), Slot 1 is filled (J₂).',
            calculation: 'No slot available ≤ 2. Discard J₄.',
            result: 'J₄ REJECTED'
          },
          {
            stepNumber: 5,
            title: 'Schedule Job J₃ (p = 20, d = 3)',
            explanation: 'Latest open slot ≤ deadline 3 is slot 3.',
            calculation: 'Slot 3 [2, 3] is empty. Assign J₃ to Slot 3.',
            result: 'Slots: [J₂, J₁, J₃] | Profit = 180'
          },
          {
            stepNumber: 6,
            title: 'Evaluate Job J₅ (p = 20, d = 1)',
            explanation: 'Deadline is 1. Slot 1 is occupied.',
            calculation: 'No slot available ≤ 1. Discard J₅.',
            result: 'J₅ REJECTED'
          }
        ],
        finalAnswer: {
          label: 'Optimal Job Schedule & Maximum Profit',
          value: 'Schedule: J₂ → J₁ → J₃  |  Maximum Profit = 180',
          interpretation: 'Job J₂ executes in [0,1], J₁ executes in [1,2], and J₃ executes in [2,3]. Total profit earned is 100 + 60 + 20 = 180.'
        }
      },
      summary: [
        'Sorted jobs: J₂ (100) > J₁ (60) > J₄ (40) > J₃ (20) > J₅ (20).',
        'Slots: Slot 1 = J₂, Slot 2 = J₁, Slot 3 = J₃.',
        'Rejected jobs: J₄ and J₅ due to deadline conflicts.',
        'Optimal execution order: J₂ → J₁ → J₃ with Maximum Profit = 180.'
      ],
      keyPoints: [
        'Max deadline d_max = 3',
        'Greedy profit ordering',
        'Slot backward search from deadline',
        'Optimal schedule J₂ → J₁ → J₃',
        'Maximum profit = 180'
      ]
    },

    // Q7: Solved Numerical: Job Sequencing (5 Jobs: P=20,15,10,5,1; D=2,2,1,3,3)
    {
      id: 'daa-u3-q7',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 7,
      title: 'Numerical: Write High-Level Description of Job Sequencing Algorithm. For n = 5, Profit P = {20, 15, 10, 5, 1}, Deadline D = {2, 2, 1, 3, 3}, Find Feasible Solutions, Optimal Solution, and Maximum Profit',
      shortTitle: 'Solved Numerical: Job Sequencing (n=5, P={20,15,10,5,1})',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q1(a)', marks: 9 },
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q2(a)', marks: 8 }
      ],
      syllabusTopics: ['Feasible Solutions Enumeration', 'Job Sequencing with Deadlines', 'Optimal Solution Derivation'],
      definition: 'Comprehensive identification of all feasible job subsets, verification of deadline feasibility, and determination of the maximum-profit schedule.',
      sections: [
        {
          title: '1. Feasible Solutions Enumeration',
          content: [
            'Given n = 5 jobs already sorted in descending profit order:',
            '  • Job 1 (P₁ = 20, D₁ = 2)',
            '  • Job 2 (P₂ = 15, D₂ = 2)',
            '  • Job 3 (P₃ = 10, D₃ = 1)',
            '  • Job 4 (P₄ = 5, D₄ = 3)',
            '  • Job 5 (P₅ = 1, D₅ = 3)',
            'Maximum deadline d_max = 3. Any feasible solution can contain at most 3 jobs.'
          ],
          table: {
            headers: ['Feasible Solution Subset', 'Processing Sequence', 'Total Profit', 'Status'],
            rows: [
              { parameter: '{1, 2}', col1: 'Job 2 in slot 1, Job 1 in slot 2', col2: '15 + 20 = 35', col3: 'Feasible (2 jobs)' },
              { parameter: '{1, 3}', col1: 'Job 3 in slot 1, Job 1 in slot 2', col2: '10 + 20 = 30', col3: 'Feasible (2 jobs)' },
              { parameter: '{2, 3}', col1: 'Job 3 in slot 1, Job 2 in slot 2', col2: '10 + 15 = 25', col3: 'Feasible (2 jobs)' },
              { parameter: '{1, 4}', col1: 'Job 1 in slot 1, Job 4 in slot 3', col2: '20 + 5 = 25', col3: 'Feasible (2 jobs)' },
              { parameter: '{1, 2, 4}', col1: 'Job 2 in slot 1, Job 1 in slot 2, Job 4 in slot 3', col2: '15 + 20 + 5 = 40', col3: 'OPTIMAL (3 jobs)' },
              { parameter: '{1, 2, 5}', col1: 'Job 2 in slot 1, Job 1 in slot 2, Job 5 in slot 3', col2: '15 + 20 + 1 = 36', col3: 'Feasible (3 jobs)' },
              { parameter: '{1, 3, 4}', col1: 'Job 3 in slot 1, Job 1 in slot 2, Job 4 in slot 3', col2: '10 + 20 + 5 = 35', col3: 'Feasible (3 jobs)' }
            ]
          }
        },
        {
          title: '2. Step-by-Step Greedy Slot Allocation',
          content: [
            'Slots available: Slot 1 [0,1], Slot 2 [1,2], Slot 3 [2,3].',
            '1. Job 1 (P=20, D=2): Slot 2 is empty. Assign to Slot 2. Schedule: [-, J₁, -], Profit = 20.',
            '2. Job 2 (P=15, D=2): Slot 2 is full. Check slot 1: Empty. Assign to Slot 1. Schedule: [J₂, J₁, -], Profit = 20 + 15 = 35.',
            '3. Job 3 (P=10, D=1): Slot 1 is full. No slot ≤ 1. Reject Job 3.',
            '4. Job 4 (P=5, D=3): Slot 3 is empty. Assign to Slot 3. Schedule: [J₂, J₁, J₄], Profit = 35 + 5 = 40.',
            '5. Job 5 (P=1, D=3): All slots are full. Reject Job 5.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Find feasible and optimal solution for n = 5 jobs with P={20,15,10,5,1} and D={2,2,1,3,3}.',
        givenData: [
          { label: 'n', value: '5' },
          { label: 'Profits (P)', value: '[20, 15, 10, 5, 1]' },
          { label: 'Deadlines (D)', value: '[2, 2, 1, 3, 3]' },
          { label: 'Max Slots', value: '3' }
        ],
        toFind: [
          'Feasible solution sets',
          'Optimal job subset',
          'Scheduled time slots',
          'Maximum profit'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Schedule Job 1 (P = 20, D = 2)',
            explanation: 'Latest slot ≤ 2 is Slot 2 [1, 2].',
            calculation: 'Assign Job 1 to Slot 2.\nSlot Array: [empty, J₁, empty]',
            result: 'Profit = 20'
          },
          {
            stepNumber: 2,
            title: 'Schedule Job 2 (P = 15, D = 2)',
            explanation: 'Slot 2 is occupied by Job 1. Move left to Slot 1 [0, 1].',
            calculation: 'Slot 1 is empty. Assign Job 2 to Slot 1.\nSlot Array: [J₂, J₁, empty]',
            result: 'Profit = 20 + 15 = 35'
          },
          {
            stepNumber: 3,
            title: 'Evaluate Job 3 (P = 10, D = 1)',
            explanation: 'Deadline is 1. Slot 1 is already taken by Job 2.',
            calculation: 'No slot available ≤ 1. Discard Job 3.',
            result: 'Job 3 REJECTED'
          },
          {
            stepNumber: 4,
            title: 'Schedule Job 4 (P = 5, D = 3)',
            explanation: 'Latest slot ≤ 3 is Slot 3 [2, 3].',
            calculation: 'Slot 3 is empty. Assign Job 4 to Slot 3.\nSlot Array: [J₂, J₁, J₄]',
            result: 'Profit = 35 + 5 = 40'
          },
          {
            stepNumber: 5,
            title: 'Evaluate Job 5 (P = 1, D = 3)',
            explanation: 'All 3 slots [1, 2, 3] are occupied.',
            calculation: 'No slot open. Discard Job 5.',
            result: 'Job 5 REJECTED'
          }
        ],
        finalAnswer: {
          label: 'Optimal Job Schedule & Maximum Profit',
          value: 'Schedule: (J₂, J₁, J₄)  |  Maximum Profit = 40',
          interpretation: 'Job 2 executes in [0,1], Job 1 executes in [1,2], and Job 4 executes in [2,3]. Total maximum profit is 40.'
        }
      },
      summary: [
        'Multiple feasible subsets exist: {1,2}, {1,3}, {1,4}, {1,2,4}, {1,2,5}, {1,3,4}.',
        'Optimal feasible subset is {1, 2, 4}.',
        'Execution schedule: Job 2 in [0,1], Job 1 in [1,2], Job 4 in [2,3].',
        'Maximum earned profit = 40.'
      ],
      keyPoints: [
        'Feasible subsets enumeration',
        'Optimal subset {1, 2, 4}',
        'Execution sequence: J₂ → J₁ → J₄',
        'Maximum profit = 40'
      ]
    },

    // Q8: Task Scheduling with Penalties & Correctness Proof
    {
      id: 'daa-u3-q8',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 8,
      title: 'Design a Greedy Algorithm to Schedule Unit-Time Tasks with Deadlines and Penalties to Minimize Total Penalty Incurred, and Prove its Correctness',
      shortTitle: 'Task Scheduling with Penalties: Algorithm & Correctness Proof',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q1(a)', marks: 8 }
      ],
      syllabusTopics: ['Task Scheduling with Penalties', 'Matroid Theory', 'Minimizing Penalty by Maximizing Profit', 'Exchange Argument Proof'],
      definition: 'Task scheduling with penalties seeks to schedule n unit-time tasks with deadlines d_i and penalties w_i incurred if task i is missed, minimizing total penalties by greedily scheduling the set of early tasks that maximizes total earned weight.',
      sections: [
        {
          title: '1. Problem Formulation & Matroid Mapping',
          content: [
            'Let S = {a₁, a₂, ..., a_n} be a set of n unit-time tasks.',
            'Each task a_i has deadline d_i and penalty w_i > 0 incurred if a_i misses its deadline.',
            'Minimizing penalty is mathematically dual to maximizing profit:',
            '  • Let A ⊆ S be the subset of tasks that finish on or before their deadlines ("early tasks").',
            '  • Total penalty incurred = ∑_{a_i ∉ A} w_i = ∑_{a_i ∈ S} w_i - ∑_{a_i ∈ A} w_i.',
            '  • Since ∑_{a_i ∈ S} w_i is constant, minimizing total penalty is strictly equivalent to maximizing the total weight of early tasks ∑_{a_i ∈ A} w_i.'
          ]
        },
        {
          title: '2. Greedy Algorithm for Minimizing Penalties',
          content: [
            'Algorithm Min_Penalty_Schedule(S, n)',
            '1. Sort tasks in non-increasing order of penalties: w₁ ≥ w₂ ≥ ... ≥ w_n.',
            '2. Initialize early task set A = ∅.',
            '3. For i = 1 to n do:',
            '   a. If A ∪ {a_i} is independent (i.e., all tasks in A ∪ {a_i} can be scheduled before their deadlines):',
            '         A = A ∪ {a_i};',
            '4. Schedule the early tasks in A in order of increasing deadlines.',
            '5. Schedule the late tasks S - A in any arbitrary remaining slots.',
            '6. Return schedule and incurred penalty ∑_{a_i ∉ A} w_i.'
          ]
        },
        {
          title: '3. Proof of Correctness (Matroid Exchange Argument)',
          content: [
            'Theorem: The system (S, I), where I is the family of all independent task subsets (subsets of tasks that can be scheduled without missing any deadlines), forms a Matroid.',
            'Proof Steps:',
            '1. Hereditary Property: If A ∈ I and B ⊆ A, then B can also be scheduled on time since removing tasks cannot cause remaining tasks to miss deadlines. Thus B ∈ I.',
            '2. Exchange Property: If A, B ∈ I with |A| < |B|, there exists some task x ∈ B - A such that A ∪ {x} ∈ I.',
            '   • Let N_t(A) denote the number of tasks in A with deadline ≤ t. A set A is independent iff N_t(A) ≤ t for all t = 1, 2, ..., n.',
            '   • Since |B| > |A|, there must exist a time t* where N_{t*}(B) > N_{t*}(A). Selecting a task from B - A with deadline > t* maintains independence.',
            '3. Conclusion: Because (S, I) is a weighted matroid, the greedy algorithm is guaranteed to return an optimal subset A of maximum weight, thereby strictly minimizing the total penalty.'
          ]
        }
      ],
      summary: [
        'Minimizing penalties is equivalent to maximizing the weight of on-time tasks.',
        'Sort tasks by descending penalty and greedily insert if independence is preserved.',
        'Independent task sets satisfy hereditary and exchange properties, forming a Matroid.',
        'Matroid theory guarantees the greedy choice produces a globally optimal solution.'
      ],
      keyPoints: [
        'Penalty minimization duality',
        'Independent set condition N_t(A) ≤ t',
        'Matroid structure (S, I)',
        'Exchange property proof',
        'O(n log n) sorting + O(n²) scheduling'
      ]
    },

    // Q9: Activity Selection Problem & Numerical
    {
      id: 'daa-u3-q9',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 9,
      title: 'Explain the Activity Selection Problem. Give its Greedy Strategy, Algorithm, and Solve for Activities: A(1,3), B(3,4), C(2,5), D(0,7), E(5,9), F(8,10), G(11,12)',
      shortTitle: 'Activity Selection Problem: Algorithm & Solved Instance',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3 ([6404]-81)', questionNo: 'Q1(b)', marks: 9 }
      ],
      syllabusTopics: ['Activity Selection Formulation', 'Earliest Finish Time Heuristic', 'Activity Selection Algorithm', 'Time Complexity'],
      definition: 'The Activity Selection Problem is the problem of scheduling the maximum number of mutually compatible activities that share a single common resource, given their start times s_i and finish times f_i.',
      sections: [
        {
          title: '1. Problem Definition & Greedy Heuristic',
          content: [
            'Let S = {1, 2, ..., n} be a set of n activities.',
            'Each activity i has a start time s_i and finish time f_i with 0 ≤ s_i < f_i < ∞.',
            'Two activities i and j are compatible if their execution intervals do not overlap, i.e., s_i ≥ f_j or s_j ≥ f_i.',
            'Objective: Find a maximum-size subset of mutually compatible activities.',
            'Greedy Choice Property: Always pick the compatible activity with the earliest finish time f_i. Finishing as early as possible leaves the maximum possible remaining resource time for future activities.'
          ]
        },
        {
          title: '2. Greedy Activity Selection Algorithm',
          content: [
            'Algorithm Greedy_Activity_Selector(s, f, n)',
            '// Input: s[1..n] start times, f[1..n] finish times sorted such that f₁ ≤ f₂ ≤ ... ≤ f_n.',
            '{',
            '    A = {1}; // Select first activity with earliest finish time',
            '    k = 1;   // k tracks the index of last selected activity',
            '    for m = 2 to n do',
            '    {',
            '        if s[m] >= f[k] then',
            '        {',
            '            A = A ∪ {m};',
            '            k = m;',
            '        }',
            '    }',
            '    return A;',
            '}',
            'Time Complexity: O(n log n) if presorting is needed, followed by O(n) scan.'
          ]
        },
        {
          title: '3. Numerical Solution for the 7 Activities',
          table: {
            headers: ['Activity', 'Start (s_i)', 'Finish (f_i)', 'Compatibility Check (s_i ≥ f_prev)', 'Decision'],
            rows: [
              { parameter: 'A', col1: '1', col2: '3', col3: 'First activity (Earliest finish f=3)', col4: 'SELECTED (A ∈ Solution)' },
              { parameter: 'B', col1: '3', col2: '4', col3: 's_B = 3 ≥ f_A = 3 (Compatible)', col4: 'SELECTED (B ∈ Solution)' },
              { parameter: 'C', col1: '2', col2: '5', col3: 's_C = 2 < f_B = 4 (Overlap!)', col4: 'REJECTED' },
              { parameter: 'D', col1: '0', col2: '7', col3: 's_D = 0 < f_B = 4 (Overlap!)', col4: 'REJECTED' },
              { parameter: 'E', col1: '5', col2: '9', col3: 's_E = 5 ≥ f_B = 4 (Compatible)', col4: 'SELECTED (E ∈ Solution)' },
              { parameter: 'F', col1: '8', col2: '10', col3: 's_F = 8 < f_E = 9 (Overlap!)', col4: 'REJECTED' },
              { parameter: 'G', col1: '11', col2: '12', col3: 's_G = 11 ≥ f_E = 9 (Compatible)', col4: 'SELECTED (G ∈ Solution)' }
            ]
          }
        }
      ],
      numericalSolution: {
        problemSummary: 'Select maximum non-conflicting activities for A(1,3), B(3,4), C(2,5), D(0,7), E(5,9), F(8,10), G(11,12).',
        givenData: [
          { label: 'Activities', value: '7 (A, B, C, D, E, F, G)' },
          { label: 'Start times (s)', value: '[1, 3, 2, 0, 5, 8, 11]' },
          { label: 'Finish times (f)', value: '[3, 4, 5, 7, 9, 10, 12]' }
        ],
        toFind: [
          'Sorted finish time sequence',
          'Sequential compatibility checks',
          'Maximum non-conflicting activity schedule'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Verify Finish Times are Sorted',
            explanation: 'The given finish times [3, 4, 5, 7, 9, 10, 12] are already sorted in ascending order.',
            result: 'Order: A(f=3), B(f=4), C(f=5), D(f=7), E(f=9), F(f=10), G(f=12)'
          },
          {
            stepNumber: 2,
            title: 'Select Activity A',
            explanation: 'First activity has the earliest finish time f_A = 3. Add to schedule.',
            result: 'Schedule = {A}, Last finish = 3'
          },
          {
            stepNumber: 3,
            title: 'Evaluate Activity B',
            explanation: 'Start time s_B = 3 is ≥ last finish time 3. Compatible.',
            calculation: 'Add B to schedule. Update last finish = 4.',
            result: 'Schedule = {A, B}, Last finish = 4'
          },
          {
            stepNumber: 4,
            title: 'Evaluate Activities C and D',
            explanation: 'Activity C has s_C = 2 < 4 (Conflict). Activity D has s_D = 0 < 4 (Conflict).',
            result: 'Reject C and D'
          },
          {
            stepNumber: 5,
            title: 'Evaluate Activity E',
            explanation: 'Start time s_E = 5 is ≥ last finish time 4. Compatible.',
            calculation: 'Add E to schedule. Update last finish = 9.',
            result: 'Schedule = {A, B, E}, Last finish = 9'
          },
          {
            stepNumber: 6,
            title: 'Evaluate Activity F',
            explanation: 'Start time s_F = 8 is < last finish time 9. Conflict.',
            result: 'Reject F'
          },
          {
            stepNumber: 7,
            title: 'Evaluate Activity G',
            explanation: 'Start time s_G = 11 is ≥ last finish time 9. Compatible.',
            calculation: 'Add G to schedule. Update last finish = 12.',
            result: 'Schedule = {A, B, E, G}'
          }
        ],
        finalAnswer: {
          label: 'Optimal Activity Schedule',
          value: 'Selected Activities: {A, B, E, G} (Total: 4 Activities)',
          interpretation: 'Activities A [1,3], B [3,4], E [5,9], and G [11,12] can execute sequentially on the single resource without any temporal overlap.'
        }
      },
      diagrams: [
        {
          id: 'diag-act-sel',
          title: 'Activity Selection Timeline & Non-Conflicting Schedule',
          caption: 'Visual timeline showing mutually compatible activities A, B, E, G selected, with overlapping activities C, D, F rejected.',
          type: 'svg-interactive',
          svgType: 'activity-selection-timeline'
        }
      ],
      summary: [
        'Activity selection finds maximum non-overlapping intervals on a shared resource.',
        'Greedy strategy sorts by finish times f_i and picks earliest finishing compatible activity.',
        'For given 7 activities, optimal schedule is {A, B, E, G} (4 activities).',
        'Time complexity is O(n log n) sorting + O(n) greedy scan.'
      ],
      keyPoints: [
        'Earliest finish time greedy heuristic',
        'Compatibility condition s_i ≥ f_k',
        'Optimal schedule {A, B, E, G}',
        'O(n log n) time complexity'
      ]
    },

    // Q10: Dynamic Programming Principles, Control Abstraction & Optimality
    {
      id: 'daa-u3-q10',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 10,
      title: 'Explain Dynamic Programming. Detail the Principle of Optimality, Optimal Substructure, Control Abstraction, and Discuss Situations Where DP Struggles on Knapsack',
      shortTitle: 'Dynamic Programming: Principle of Optimality & DP Knapsack Limits',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q2(a)', marks: 8 },
        { paper: 'Paper 3 ([6404]-81)', questionNo: 'Q2(a)', marks: 7 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q1(c)', marks: 4 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q1(c)', marks: 2 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q2(b)', marks: 4 }
      ],
      syllabusTopics: ['Principle of Optimality', 'Bellman Equation', 'DP Control Abstraction', 'Optimal Substructure', 'Pseudo-Polynomial Time'],
      definition: 'Dynamic Programming is an algorithm design technique that solves optimization problems by breaking them down into smaller overlapping subproblems, solving each subproblem once, storing their solutions in a table (memoization/tabulation), and combining them to form an optimal solution.',
      sections: [
        {
          title: '1. Principle of Optimality (Richard Bellman, 1957)',
          content: [
            'The foundational theorem of dynamic programming states:',
            '"An optimal sequence of decisions has the property that whatever the initial state and decision are, the remaining decisions must constitute an optimal sequence of decisions with regard to the state resulting from the first decision."',
            'Mathematical Representation for Shortest Path:',
            '  Let d(i, j) be the shortest path from vertex i to vertex j.',
            '  If the optimal path passes through an intermediate vertex k, then:',
            '  d(i, j) = min_{k} { c(i, k) + d(k, j) }',
            '  This strictly requires that the sub-path from k to j must also be the shortest possible path from k to j.',
            'Comment on "Problem not satisfying principle of optimality cannot be solved by DP":',
            '  • If a problem violates the principle of optimality (e.g., Longest Simple Path in a graph with cycles), an optimal solution to the global problem does NOT contain optimal solutions to subproblems.',
            '  • Under such conditions, DP\'s memoized subproblem choices will lead to suboptimal or invalid solutions. Hence, the principle of optimality is a strict prerequisite for DP.'
          ],
          formulas: [
            { name: 'Bellman Optimality Recurrence', latex: 'd(i, j) = \\min_{k} \\{ c(i, k) + d(k, j) \\}' }
          ]
        },
        {
          title: '2. Four Steps of Dynamic Programming Design',
          content: [
            '1. Characterize the structure of an optimal solution (verify optimal substructure).',
            '2. Recursively define the value of an optimal solution.',
            '3. Compute the value of an optimal solution in bottom-up fashion (tabulation).',
            '4. Construct an optimal solution from computed information (traceback).'
          ]
        },
        {
          title: '3. Control Abstraction for Dynamic Programming',
          content: [
            'Algorithm Dynamic_Programming(P)',
            '// P is the problem to be solved',
            '{',
            '    Initialize table T with base cases;',
            '    for size = 1 to n do',
            '    {',
            '        for each subproblem S of given size do',
            '        {',
            '            T[S] = Combine(min/max { T[subproblem] + transition_cost });',
            '        }',
            '    }',
            '    return T[n]; // Result stored in final table entry',
            '}'
          ]
        },
        {
          title: '4. Situations Where DP Struggles on Knapsack (Pseudo-Polynomial Time)',
          content: [
            'The dynamic programming algorithm for 0/1 knapsack has a time complexity of O(n W) and table space O(n W), where n is the number of items and W is knapsack capacity.',
            'DP struggles significantly in the following situations:',
            '1. Enormous Knapsack Capacity W: If W = 10^9 and n = 50, O(nW) requires 5 × 10^{10} operations and gigabytes of memory, rendering DP completely impractical.',
            '2. Pseudo-Polynomial Time vs True Polynomial: Time depends on the magnitude of W, which is exponential in its bit length (log₂ W bits). If W is large, branch and bound or approximation algorithms are superior.',
            '3. Fractional Weights: If weights are continuous real numbers (e.g., w₁ = 2.457 kg), standard integer indexing in array T[i, w] breaks down.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-bellman',
          title: 'Bellman\'s Principle of Optimality',
          caption: 'Diagram illustrating that any sub-path of an optimal path S → K → D must itself be an optimal sub-path between its endpoints.',
          type: 'svg-interactive',
          svgType: 'dp-principle-optimality'
        }
      ],
      summary: [
        'Dynamic programming solves problems with optimal substructure and overlapping subproblems.',
        'Principle of optimality requires that sub-decisions of an optimal policy are also optimal.',
        'If principle of optimality fails, dynamic programming cannot guarantee optimal solutions.',
        'DP knapsack runs in O(nW) pseudo-polynomial time, struggling when W is extremely large or fractional.'
      ],
      keyPoints: [
        'Richard Bellman (1957)',
        'Principle of Optimality',
        'Overlapping subproblems & memoization',
        'O(nW) pseudo-polynomial complexity',
        'DP breakdown on large W'
      ]
    },

    // Q11: Greedy Method vs Dynamic Programming Comparison
    {
      id: 'daa-u3-q11',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 11,
      title: 'Compare Between Greedy Method and Dynamic Programming with Respect to: (i) Feasibility, (ii) Optimality, (iii) Recursion, (iv) Memoization, and (v) Time Complexity',
      shortTitle: 'Comprehensive Comparison: Greedy Method vs Dynamic Programming',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q3(b)', marks: 9 },
        { paper: 'SPPU Dec-18, Dec-11', questionNo: 'Theory', marks: 6 }
      ],
      syllabusTopics: ['Greedy vs DP Comparison', 'Feasibility and Optimality', 'Memoization vs Irrevocable Choice', 'Time Complexity Differences'],
      definition: 'Greedy and Dynamic Programming are both optimization paradigms based on optimal substructure, but differ fundamentally in how choices are evaluated, subproblems are shared, and decisions are preserved.',
      sections: [
        {
          title: '1. Exhaustive Comparison Matrix',
          content: [
            'In Simple Words:',
            'The Greedy Method is like taking the fastest shortcut you see right in front of you at every crossroad without looking at the whole map.',
            'Dynamic Programming is like looking at the entire map, writing down the best paths in a notebook so you never repeat work, and finding the true shortest route to your final destination.',
            '',
            'Real-World Example (Coin Change Problem):',
            '• Giving change for ₹37 using Indian currency (₹20, ₹10, ₹5, ₹2): Greedy immediately picks ₹20 + ₹10 + ₹5 + ₹2 = 4 coins (optimal).',
            '• But with unusual denominations (e.g. ₹1, ₹3, ₹4) to make ₹6: Greedy picks ₹4 + ₹1 + ₹1 (3 coins), whereas Dynamic Programming checks combinations and finds ₹3 + ₹3 (2 coins)!'
          ],
          table: {
            headers: ['Greedy Method', 'Dynamic Programming Strategy'],
            rows: [
              {
                parameter: 'Makes an irrevocable local choice at each step based on immediate best gain; never reconsiders or re-evaluates earlier decisions.',
                col1: 'Examines all possible subproblem choices comprehensively and chooses the combination that guarantees global optimality.'
              },
              {
                parameter: 'Feasibility is checked at every single step; an element is added to the solution only if it maintains feasibility right now.',
                col1: 'Feasibility is built iteratively across subproblems, combining subproblem solutions to maintain overall global constraints.'
              },
              {
                parameter: 'Does not always guarantee a global optimum; works only if the problem possesses the strict Greedy Choice Property.',
                col1: 'Guaranteed to find the globally optimal solution provided the problem satisfies Bellman\'s Principle of Optimality.'
              },
              {
                parameter: 'Top-down sequential progression that moves forward without backtracking or recursive subproblem caching.',
                col1: 'Bottom-up tabulation (or top-down with memoization) that systematically solves and stores overlapping subproblems.'
              },
              {
                parameter: 'Zero memoization required; intermediate subproblem solutions are not stored in memory.',
                col1: 'Memoization is essential; stores subproblem solutions in an array/matrix table to prevent exponential recomputations.'
              },
              {
                parameter: 'Requires subproblems to remain completely independent after the greedy choice is committed.',
                col1: 'Thrives on overlapping subproblems where the same smaller subproblems are shared across many larger subproblems.'
              },
              {
                parameter: 'Generally very fast with lower time complexity: typically O(n) or O(n log n).',
                col1: 'Computationally heavier due to table filling: polynomial complexities such as O(n²), O(n³), or pseudo-polynomial O(n·W).'
              },
              {
                parameter: 'Classic benchmark problems: Fractional Knapsack, Huffman Coding, Kruskal\'s & Prim\'s MST, Dijkstra\'s Shortest Path.',
                col1: 'Classic benchmark problems: 0/1 Knapsack, Matrix Chain Multiplication, Optimal BST (OBST), Floyd-Warshall All-Pairs Shortest Path.'
              }
            ]
          }
        },
        {
          title: '2. Summary of Conceptual Divergence',
          content: [
            '• The Greedy approach commits to the best local choice immediately without calculating subproblem results.',
            '• Dynamic Programming solves all subproblems first, compares their outcomes, and then makes the decision.',
            '• Therefore, Greedy is a subset of dynamic thinking that works when local optimality strictly implies global optimality.'
          ]
        }
      ],
      summary: [
        'Greedy is top-down, local, fast (O(n log n)), and requires the Greedy Choice Property.',
        'DP is bottom-up, global, slower (O(n²) to O(n³)), and relies on memoization and Principle of Optimality.',
        'Greedy never revisits decisions; DP evaluates all combinations through tabular storage.'
      ],
      keyPoints: [
        'Local vs global decision making',
        'Memoization absence vs necessity',
        'O(n log n) vs O(n²) / O(nW) complexities',
        'Irrevocable choices vs subproblem exploration'
      ]
    },

    // Q12: 0/1 Knapsack Problem using Dynamic Programming
    {
      id: 'daa-u3-q12',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 12,
      title: 'Explain 0/1 Knapsack Problem Using Dynamic Programming. Devise the Recurrence Relation, Algorithm, and Traceback Procedure',
      shortTitle: '0/1 Knapsack using DP: Recurrence, Algorithm & Traceback',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q1(a)', marks: 10 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q1(b)', marks: 9 },
        { paper: 'Paper 3 ([6404]-81)', questionNo: 'Q2(b)', marks: 10 }
      ],
      syllabusTopics: ['0/1 Knapsack DP Recurrence', 'Table Construction', 'Traceback Vector Algorithm', 'Time & Space Complexity'],
      definition: 'The 0/1 Knapsack problem via dynamic programming computes a 2D table T[0..n, 0..W] where T[i, w] represents the maximum profit achievable considering a subset of the first i items under capacity limit w.',
      sections: [
        {
          title: '1. Mathematical Recurrence Relation',
          content: [
            'Let items be indexed 1 to n with weights w_i and profits p_i. Let knapsack capacity be W.',
            'For item i and current capacity w:',
            '  Case 1: If weight of item i exceeds capacity w (w_i > w), item i cannot fit:',
            '          T[i, w] = T[i - 1, w]',
            '  Case 2: If item i can fit (w_i ≤ w), we choose the maximum of excluding it or including it:',
            '          T[i, w] = max( T[i - 1, w],  p_i + T[i - 1, w - w_i] )',
            'Base Cases:',
            '  T[0, w] = 0 for all w ≥ 0 (no items available)',
            '  T[i, 0] = 0 for all i ≥ 0 (zero capacity)'
          ],
          formulas: [
            { name: '0/1 Knapsack DP Bellman Equation', latex: 'T[i, w] = \\begin{cases} 0 & \\text{if } i=0 \\text{ or } w=0 \\\\ T[i-1, w] & \\text{if } w_i > w \\\\ \\max\\{T[i-1, w], \\; p_i + T[i-1, w - w_i]\\} & \\text{if } w_i \\le w \\end{cases}' }
          ]
        },
        {
          title: '2. Tabular Algorithm: `DKnapsack(p, w, n, W)`',
          content: [
            'Algorithm DKnapsack(p, w, n, W)',
            '{',
            '    for i = 0 to n do T[i, 0] = 0;',
            '    for w = 0 to W do T[0, w] = 0;',
            '    for i = 1 to n do',
            '    {',
            '        for w = 1 to W do',
            '        {',
            '            if w[i] <= w then',
            '                T[i, w] = max(T[i-1, w], p[i] + T[i-1, w - w[i]]);',
            '            else',
            '                T[i, w] = T[i-1, w];',
            '        }',
            '    }',
            '    return T[n, W];',
            '}'
          ]
        },
        {
          title: '3. Traceback Procedure to Find Selected Items Vector (x₁, ..., x_n)',
          content: [
            'Once table T[n, W] is filled, determine which items were included by tracing backward:',
            '  i = n, k = W;',
            '  while (i > 0 and k > 0) do',
            '  {',
            '      if T[i, k] == T[i - 1, k] then',
            '          x_i = 0; // Item i was not selected',
            '      else',
            '      {',
            '          x_i = 1; // Item i was selected',
            '          k = k - w_i; // Deduct weight of selected item',
            '      }',
            '      i = i - 1;',
            '  }',
            'Time Complexity: Table filling takes O(n W). Traceback takes O(n). Overall: O(n W).'
          ]
        }
      ],
      summary: [
        '0/1 Knapsack DP builds an (n+1) x (W+1) table where T[i, w] stores max profit for first i items at capacity w.',
        'Recurrence checks whether including item i (p_i + T[i-1, w-w_i]) beats excluding it (T[i-1, w]).',
        'Traceback checks T[i, k] ≠ T[i-1, k] to identify included items.',
        'Runs in O(nW) time and O(nW) space (can be optimized to O(W) space).'
      ],
      keyPoints: [
        'T[i, w] recurrence formulation',
        'Base conditions T[0, w] = 0, T[i, 0] = 0',
        'Traceback logic k = k - w_i',
        'O(nW) pseudo-polynomial complexity'
      ]
    },

    // Q13: Solved Numerical: 0/1 Knapsack DP (W = 5, 4 Items)
    {
      id: 'daa-u3-q13',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 13,
      title: 'Numerical: Consider the Following Instance of Knapsack Problem: Items 1..4 with Weights [2, 1, 3, 2] and Profits [$12, $10, $20, $15]. Knapsack Capacity = 5. Find Optimal Solution Using Dynamic Programming Approach',
      shortTitle: 'Solved Numerical: 0/1 Knapsack DP (W=5, 4 Items)',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q1(a)', marks: 10 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q1(b)', marks: 9 }
      ],
      syllabusTopics: ['0/1 Knapsack DP Table', 'Stepwise Row Calculation', 'Traceback Vector Extraction'],
      definition: 'Complete computation of the (5 x 6) dynamic programming table, row-by-row cell calculations, and traceback to isolate selected items and maximum profit.',
      sections: [
        {
          title: '1. Given Items & Capacity',
          content: [
            'Capacity W = 5, Number of items n = 4.',
            'Item 1: w₁ = 2, p₁ = 12',
            'Item 2: w₂ = 1, p₂ = 10',
            'Item 3: w₃ = 3, p₃ = 20',
            'Item 4: w₄ = 2, p₄ = 15'
          ]
        },
        {
          title: '2. Dynamic Programming Table T[i, w]',
          table: {
            headers: ['Item i \\ Cap w', 'w = 0', 'w = 1', 'w = 2', 'w = 3', 'w = 4', 'w = 5'],
            rows: [
              { parameter: 'i = 0 (No items)', col1: '0', col2: '0', col3: '0', col4: '0', col5: '0', col6: '0' },
              { parameter: 'i = 1 (w=2, p=12)', col1: '0', col2: '0', col3: '12', col4: '12', col5: '12', col6: '12' },
              { parameter: 'i = 2 (w=1, p=10)', col1: '0', col2: '10', col3: '12', col4: '22', col5: '22', col6: '22' },
              { parameter: 'i = 3 (w=3, p=20)', col1: '0', col2: '10', col3: '12', col4: '22', col5: '30', col6: '32' },
              { parameter: 'i = 4 (w=2, p=15)', col1: '0', col2: '10', col3: '15', col4: '25', col5: '30', col6: '37' }
            ]
          }
        },
        {
          title: '3. Row-by-Row Calculation Details',
          content: [
            'Row 1 (Item 1: w₁=2, p₁=12):',
            '  • w=1: w₁ > 1 ==> T[1,1] = T[0,1] = 0',
            '  • w=2: max(T[0,2], 12 + T[0,0]) = max(0, 12) = 12',
            '  • w=3..5: 12',
            'Row 2 (Item 2: w₂=1, p₂=10):',
            '  • w=1: max(T[1,1], 10 + T[1,0]) = max(0, 10) = 10',
            '  • w=2: max(T[1,2], 10 + T[1,1]) = max(12, 10+0) = 12',
            '  • w=3: max(T[1,3], 10 + T[1,2]) = max(12, 10+12) = 22',
            '  • w=4..5: max(12, 10+12) = 22',
            'Row 3 (Item 3: w₃=3, p₃=20):',
            '  • w=1..2: T[2,w] = 10, 12',
            '  • w=3: max(T[2,3], 20 + T[2,0]) = max(22, 20) = 22',
            '  • w=4: max(T[2,4], 20 + T[2,1]) = max(22, 20+10) = 30',
            '  • w=5: max(T[2,5], 20 + T[2,2]) = max(22, 20+12) = 32',
            'Row 4 (Item 4: w₄=2, p₄=15):',
            '  • w=1: 10',
            '  • w=2: max(T[3,2], 15 + T[3,0]) = max(12, 15) = 15',
            '  • w=3: max(T[3,3], 15 + T[3,1]) = max(22, 15+10) = 25',
            '  • w=4: max(T[3,4], 15 + T[3,2]) = max(30, 15+12) = 30',
            '  • w=5: max(T[3,5], 15 + T[3,3]) = max(32, 15+22) = 37'
          ]
        },
        {
          title: '4. Traceback to Determine Selected Items',
          content: [
            'Start at i = 4, k = 5:',
            '• Check T[4, 5] vs T[3, 5]: 37 ≠ 32 ==> Item 4 is SELECTED (x₄ = 1).',
            '  New capacity k = 5 - w₄ = 5 - 2 = 3. Next i = 3.',
            '• Check T[3, 3] vs T[2, 3]: 22 == 22 ==> Item 3 is NOT selected (x₃ = 0) in this branch.',
            '  (Note: If checking alternate combination with same profit 22: Item 2 & 1 yields 22).',
            '• Next i = 2, k = 3:',
            '  Check T[2, 3] vs T[1, 3]: 22 ≠ 12 ==> Item 2 is SELECTED (x₂ = 1).',
            '  New capacity k = 3 - w₂ = 3 - 1 = 2. Next i = 1.',
            '• Next i = 1, k = 2:',
            '  Check T[1, 2] vs T[0, 2]: 12 ≠ 0 ==> Item 1 is SELECTED (x₁ = 1).',
            '  New capacity k = 2 - w₁ = 2 - 2 = 0.',
            '• Selected Items: Item 1, Item 2, Item 4.',
            '  Total Weight = 2 + 1 + 2 = 5 (Fits knapsack exactly!).',
            '  Total Profit = 12 + 10 + 15 = $37.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Find optimal 0/1 knapsack solution for capacity W = 5 with 4 items: (2, 12), (1, 10), (3, 20), (2, 15).',
        givenData: [
          { label: 'Capacity (W)', value: '5' },
          { label: 'Item 1 (w, p)', value: '(2, $12)' },
          { label: 'Item 2 (w, p)', value: '(1, $10)' },
          { label: 'Item 3 (w, p)', value: '(3, $20)' },
          { label: 'Item 4 (w, p)', value: '(2, $15)' }
        ],
        toFind: [
          '5x6 Dynamic Programming Table T[i, w]',
          'Cell calculations using Bellman recurrence',
          'Traceback path from T[4, 5]',
          'Optimal selection vector and maximum profit'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Initialize Base Cases',
            explanation: 'Set T[0, w] = 0 for w = 0..5 and T[i, 0] = 0 for i = 0..4.',
            result: 'Zeroth row and zeroth column initialized to 0'
          },
          {
            stepNumber: 2,
            title: 'Fill Row 1 (Item 1: w=2, p=12)',
            explanation: 'For capacity w < 2, copy from above. For w ≥ 2, profit is 12.',
            calculation: 'T[1, 0]=0, T[1, 1]=0, T[1, 2]=12, T[1, 3]=12, T[1, 4]=12, T[1, 5]=12',
            result: 'Row 1 completed'
          },
          {
            stepNumber: 3,
            title: 'Fill Row 2 (Item 2: w=1, p=10)',
            explanation: 'Include item 2 if 10 + T[1, w-1] > T[1, w].',
            calculation: 'w=1: max(0, 10+0)=10\nw=2: max(12, 10+0)=12\nw=3: max(12, 10+12)=22\nw=4: max(12, 10+12)=22\nw=5: max(12, 10+12)=22',
            result: 'Row 2: [0, 10, 12, 22, 22, 22]'
          },
          {
            stepNumber: 4,
            title: 'Fill Row 3 (Item 3: w=3, p=20)',
            explanation: 'Include item 3 if 20 + T[2, w-3] > T[2, w].',
            calculation: 'w=3: max(22, 20+0)=22\nw=4: max(22, 20+10)=30\nw=5: max(22, 20+12)=32',
            result: 'Row 3: [0, 10, 12, 22, 30, 32]'
          },
          {
            stepNumber: 5,
            title: 'Fill Row 4 (Item 4: w=2, p=15)',
            explanation: 'Include item 4 if 15 + T[3, w-2] > T[3, w].',
            calculation: 'w=2: max(12, 15+0)=15\nw=3: max(22, 15+10)=25\nw=4: max(30, 15+12)=30\nw=5: max(32, 15+22)=37',
            result: 'Goal T[4, 5] = 37'
          },
          {
            stepNumber: 6,
            title: 'Traceback to Identify Selected Items',
            explanation: 'Trace backwards from T[4, 5] = 37 to recover binary inclusion vector.',
            calculation: 'T[4,5]=37 != T[3,5]=32 ==> Select Item 4 (x₄=1), new cap = 5-2=3\nT[3,3]=22 == T[2,3]=22 ==> Reject Item 3 (x₃=0)\nT[2,3]=22 != T[1,3]=12 ==> Select Item 2 (x₂=1), new cap = 3-1=2\nT[1,2]=12 != T[0,2]=0  ==> Select Item 1 (x₁=1), new cap = 2-2=0',
            result: 'Selected: Items {1, 2, 4} with Vector x = (1, 1, 0, 1)'
          }
        ],
        finalAnswer: {
          label: 'Optimal 0/1 Knapsack Solution',
          value: 'Maximum Profit = $37 with Items {1, 2, 4} [x = (1, 1, 0, 1)]',
          interpretation: 'Packing Item 1 (w=2, p=12), Item 2 (w=1, p=10), and Item 4 (w=2, p=15) consumes exactly 5 units of weight for a maximum profit of $37.'
        }
      },
      summary: [
        'Formed 5x6 DP table with base row/col initialized to 0.',
        'Filled cells using T[i, w] = max(T[i-1, w], p_i + T[i-1, w-w_i]).',
        'Goal cell T[4, 5] = $37.',
        'Traceback selected Items {1, 2, 4} with weights 2 + 1 + 2 = 5.'
      ],
      keyPoints: [
        '5x6 DP matrix construction',
        'T[4, 5] = 37 maximum profit',
        'Traceback path isolating items 1, 2, 4',
        'Solution vector (1, 1, 0, 1)'
      ]
    },

    // Q14: Solved Numerical: 0/1 Knapsack DP (W = 7, 4 Items)
    {
      id: 'daa-u3-q14',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 14,
      title: 'Numerical: Consider 0/1 Knapsack Problem with Weight Capacity 7. Four Items: A(w=1, p=1), B(w=3, p=4), C(w=4, p=5), D(w=5, p=7). Find Optimal Solution Using Dynamic Programming Approach',
      shortTitle: 'Solved Numerical: 0/1 Knapsack DP (W=7, Items A,B,C,D)',
      marks: 10,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3 ([6404]-81)', questionNo: 'Q2(b)', marks: 10 }
      ],
      syllabusTopics: ['0/1 Knapsack DP Table', 'Capacity W=7', 'Traceback Algorithm'],
      definition: 'Step-by-step DP table computation for a 4-item instance with capacity 7, demonstrating optimal item extraction via back-referencing.',
      sections: [
        {
          title: '1. Given Items & Capacity',
          content: [
            'Capacity W = 7, n = 4 items:',
            'Item A: w_A = 1, p_A = 1',
            'Item B: w_B = 3, p_B = 4',
            'Item C: w_C = 4, p_C = 5',
            'Item D: w_D = 5, p_D = 7'
          ]
        },
        {
          title: '2. Dynamic Programming Table T[i, w]',
          table: {
            headers: ['Item \\ Cap', 'w=0', 'w=1', 'w=2', 'w=3', 'w=4', 'w=5', 'w=6', 'w=7'],
            rows: [
              { parameter: 'i = 0 (None)', col1: '0', col2: '0', col3: '0', col4: '0', col5: '0', col6: '0', col7: '0', col8: '0' },
              { parameter: 'i = 1 (A: 1, 1)', col1: '0', col2: '1', col3: '1', col4: '1', col5: '1', col6: '1', col7: '1', col8: '1' },
              { parameter: 'i = 2 (B: 3, 4)', col1: '0', col2: '1', col3: '1', col4: '4', col5: '5', col6: '5', col7: '5', col8: '5' },
              { parameter: 'i = 3 (C: 4, 5)', col1: '0', col2: '1', col3: '1', col4: '4', col5: '5', col6: '6', col7: '6', col8: '9' },
              { parameter: 'i = 4 (D: 5, 7)', col1: '0', col2: '1', col3: '1', col4: '4', col5: '7', col6: '8', col7: '8', col8: '9' }
            ]
          }
        },
        {
          title: '3. Traceback Analysis',
          content: [
            'Goal cell: T[4, 7] = 9.',
            '• i = 4, w = 7: T[4, 7] == T[3, 7] == 9. Item D is NOT selected (x_D = 0). Capacity remains 7.',
            '• i = 3, w = 7: T[3, 7] (9) ≠ T[2, 7] (5). Item C is SELECTED (x_C = 1).',
            '  New capacity = 7 - w_C = 7 - 4 = 3.',
            '• i = 2, w = 3: T[2, 3] (4) ≠ T[1, 3] (1). Item B is SELECTED (x_B = 1).',
            '  New capacity = 3 - w_B = 3 - 3 = 0.',
            '• i = 1, w = 0: Capacity is 0. Item A is NOT selected (x_A = 0).',
            'Selected Items: B and C.',
            'Total Weight = 3 + 4 = 7 (Exact capacity match).',
            'Total Profit = 4 + 5 = 9.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'DP 0/1 knapsack solution for W = 7 with items A(1,1), B(3,4), C(4,5), D(5,7).',
        givenData: [
          { label: 'W', value: '7' },
          { label: 'A', value: '(w=1, p=1)' },
          { label: 'B', value: '(w=3, p=4)' },
          { label: 'C', value: '(w=4, p=5)' },
          { label: 'D', value: '(w=5, p=7)' }
        ],
        toFind: [
          '5x8 Table T[i, w]',
          'Maximum profit cell T[4, 7]',
          'Traceback path'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Compute Row 1 (Item A: w=1, p=1)',
            explanation: 'For all w ≥ 1, capacity can hold Item A.',
            result: 'Row 1: [0, 1, 1, 1, 1, 1, 1, 1]'
          },
          {
            stepNumber: 2,
            title: 'Compute Row 2 (Item B: w=3, p=4)',
            explanation: 'At w=3: max(1, 4)=4; at w=4: max(1, 4+1)=5; at w=5..7: 5.',
            result: 'Row 2: [0, 1, 1, 4, 5, 5, 5, 5]'
          },
          {
            stepNumber: 3,
            title: 'Compute Row 3 (Item C: w=4, p=5)',
            explanation: 'At w=4: max(5, 5+0)=5; at w=5: max(5, 5+1)=6; at w=7: max(5, 5+T[2,3]=5+4)=9.',
            result: 'Row 3: [0, 1, 1, 4, 5, 6, 6, 9]'
          },
          {
            stepNumber: 4,
            title: 'Compute Row 4 (Item D: w=5, p=7)',
            explanation: 'At w=5: max(5, 7+0)=7; at w=6: max(6, 7+1)=8; at w=7: max(9, 7+T[3,2]=7+1=8)=9.',
            result: 'Row 4: [0, 1, 1, 4, 7, 8, 8, 9]'
          },
          {
            stepNumber: 5,
            title: 'Execute Traceback',
            explanation: 'Trace back from T[4, 7] = 9.',
            calculation: 'T[4,7]=9 == T[3,7]=9 ==> Skip D (x_D=0)\nT[3,7]=9 != T[2,7]=5 ==> Pick C (x_C=1), remaining w = 7-4=3\nT[2,3]=4 != T[1,3]=1 ==> Pick B (x_B=1), remaining w = 3-3=0\nRemaining w=0 ==> Skip A (x_A=0)',
            result: 'Selected: {B, C} with Profit = 9'
          }
        ],
        finalAnswer: {
          label: 'Optimal 0/1 Knapsack Solution',
          value: 'Maximum Profit = 9 with Items {B, C}',
          interpretation: 'Packing Item B (weight 3, profit 4) and Item C (weight 4, profit 5) consumes exactly 7 units of weight for a maximum profit of 9.'
        }
      },
      summary: [
        'Built 5x8 table for W = 7.',
        'At W=7, including Item D gives 7+1=8, while Items B+C gives 4+5=9.',
        'Traceback confirms Items B and C are selected.',
        'Total Profit = 9, Total Weight = 7.'
      ],
      keyPoints: [
        'Capacity W = 7 matrix',
        'T[4, 7] = 9',
        'Selection vector (x_A=0, x_B=1, x_C=1, x_D=0)',
        'Superiority of B+C (profit 9) over D+A (profit 8)'
      ]
    },

    // Q15: Matrix Chain Multiplication (MCM) Theory & Algorithm
    {
      id: 'daa-u3-q15',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 15,
      title: 'Explain Matrix Chain Multiplication Using Dynamic Programming. Derive its Recurrence Relation, Table Formulation, and Parenthesization Algorithm',
      shortTitle: 'Matrix Chain Multiplication: Recurrence, Algorithm & Complexity',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q2(b)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q2(a)', marks: 10 }
      ],
      syllabusTopics: ['Matrix Chain Multiplication', 'Optimal Parenthesization', 'Cost Recurrence m[i,j]', 'Split Table s[i,j]', 'Time Complexity O(n³)'],
      definition: 'Matrix Chain Multiplication (MCM) is an optimization problem that finds the most efficient order (parenthesization) of multiplying a sequence of n matrices A₁ A₂ ... A_n such that the total number of scalar multiplications is minimized.',
      sections: [
        {
          title: '1. Problem Background & Associativity',
          content: [
            'Matrix multiplication is associative: (A · B) · C = A · (B · C). However, the number of scalar operations varies dramatically depending on the parenthesization order.',
            'Example:',
            '  • Let A₁ be 10 × 100, A₂ be 100 × 5, and A₃ be 5 × 50.',
            '  • Order 1: ((A₁ A₂) A₃) takes (10 × 100 × 5) + (10 × 5 × 50) = 5,000 + 2,500 = 7,500 multiplications.',
            '  • Order 2: (A₁ (A₂ A₃)) takes (100 × 5 × 50) + (10 × 100 × 50) = 25,000 + 50,000 = 75,000 multiplications.',
            '  • Order 1 is 10 times faster than Order 2!'
          ]
        },
        {
          title: '2. Recurrence Relation for Minimum Multiplications',
          content: [
            'Let matrix A_i have dimensions p_{i-1} × p_i for i = 1, 2, ..., n.',
            'Let m[i, j] be the minimum number of scalar multiplications needed to compute the product A_i A_{i+1} ... A_j.',
            '• Base Case: A single matrix requires 0 multiplications:',
            '  m[i, i] = 0 for all i = 1, 2, ..., n.',
            '• Recursive Step: For a chain from i to j split at intermediate position k (where i ≤ k < j):',
            '  Cost = Cost(A_i..A_k) + Cost(A_{k+1}..A_j) + Cost of multiplying the two resulting matrices',
            '  m[i, j] = min_{i ≤ k < j} { m[i, k] + m[k+1, j] + p_{i-1} p_k p_j }',
            '• Split Table: s[i, j] stores the value of k that achieves the minimum cost.'
          ],
          formulas: [
            { name: 'MCM Bellman Recurrence', latex: 'm[i, j] = \\begin{cases} 0 & \\text{if } i = j \\\\ \\min_{i \\le k < j} \\{ m[i, k] + m[k+1, j] + p_{i-1} p_k p_j \\} & \\text{if } i < j \\end{cases}' }
          ]
        },
        {
          title: '3. Matrix Chain Order Algorithm & Complexity',
          content: [
            'Algorithm Matrix_Chain_Order(p, n)',
            '{',
            '    for i = 1 to n do m[i, i] = 0;',
            '    for L = 2 to n do // L is chain length',
            '    {',
            '        for i = 1 to (n - L + 1) do',
            '        {',
            '            j = i + L - 1;',
            '            m[i, j] = ∞;',
            '            for k = i to (j - 1) do',
            '            {',
            '                q = m[i, k] + m[k+1, j] + p[i-1]*p[k]*p[j];',
            '                if q < m[i, j] then',
            '                {',
            '                    m[i, j] = q;',
            '                    s[i, j] = k;',
            '                }',
            '            }',
            '        }',
            '    }',
            '    return m and s;',
            '}',
            'Time Complexity: Three nested loops (chain length L, starting index i, split index k) yield O(n³) running time. Space complexity is O(n²) to store m and s tables.'
          ]
        },
        {
          title: '4. Traceback: Printing Optimal Parenthesization',
          content: [
            'Algorithm Print_Optimal_Parens(s, i, j)',
            '{',
            '    if i == j then',
            '        print "A" + i;',
            '    else',
            '    {',
            '        print "(";',
            '        Print_Optimal_Parens(s, i, s[i, j]);',
            '        Print_Optimal_Parens(s, s[i, j] + 1, j);',
            '        print ")";',
            '    }',
            '}'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-mcm',
          title: 'Matrix Chain Multiplication Triangular Table Architecture',
          caption: 'Pyramid DP table showing diagonal base cases m[i,i] = 0 and upward subproblem combination order by chain length.',
          type: 'svg-interactive',
          svgType: 'mcm-pyramid-grid'
        }
      ],
      summary: [
        'Matrix multiplication is associative but differing parenthesizations yield drastically different operation counts.',
        'DP computes m[i, j] = min_k (m[i, k] + m[k+1, j] + p_{i-1} p_k p_j) by increasing chain length L.',
        'Split table s[i, j] tracks optimal split points for recursive parenthesis printing.',
        'Time complexity is O(n³) and space complexity is O(n²).'
      ],
      keyPoints: [
        'Associative matrix multiplication',
        'm[i, j] recurrence equation',
        'Split table s[i, j] recording',
        'O(n³) cubic time complexity',
        'Recursive parenthesis printing algorithm'
      ]
    },

    // Q16: Solved Numerical: MCM 4 Matrices (A1: 3x5, A2: 5x4, A3: 4x2, A4: 2x4)
    {
      id: 'daa-u3-q16',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 16,
      title: 'Numerical: Consider 4 Matrices A₁, A₂, A₃, A₄ with Orders 3×5, 5×4, 4×2, and 2×4. Find the Optimal Sequence of Chain Matrix Multiplication Using Dynamic Programming. Clearly Give Final Sequence and Total Multiplications Involved',
      shortTitle: 'Solved Numerical: Matrix Chain Multiplication (4 Matrices)',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q2(b)', marks: 10 }
      ],
      syllabusTopics: ['MCM Numerical', 'Pyramid Table Filling', 'Split Table Tracking', 'Optimal Parenthesization'],
      definition: 'Complete derivation of the m[i, j] and s[i, j] tables across chain lengths L = 2, 3, 4 for dimensions P = [3, 5, 4, 2, 4].',
      sections: [
        {
          title: '1. Given Dimensions & Dimension Array P',
          content: [
            'Matrix A₁: 3 × 5  ==>  p₀ = 3, p₁ = 5',
            'Matrix A₂: 5 × 4  ==>  p₁ = 5, p₂ = 4',
            'Matrix A₃: 4 × 2  ==>  p₂ = 4, p₃ = 2',
            'Matrix A₄: 2 × 4  ==>  p₃ = 2, p₄ = 4',
            'Dimension Array: P = [p₀, p₁, p₂, p₃, p₄] = [3, 5, 4, 2, 4]. Number of matrices n = 4.',
            'Diagonal Base Cases: m[1,1] = m[2,2] = m[3,3] = m[4,4] = 0.'
          ]
        },
        {
          title: '2. Stepwise Computation by Chain Length',
          content: [
            'Chain Length L = 2 (Two matrices):',
            '• m[1, 2]: k = 1  ==>  m[1,1] + m[2,2] + p₀ p₁ p₂ = 0 + 0 + (3 × 5 × 4) = 60. s[1, 2] = 1.',
            '• m[2, 3]: k = 2  ==>  m[2,2] + m[3,3] + p₁ p₂ p₃ = 0 + 0 + (5 × 4 × 2) = 40. s[2, 3] = 2.',
            '• m[3, 4]: k = 3  ==>  m[3,3] + m[4,4] + p₂ p₃ p₄ = 0 + 0 + (4 × 2 × 4) = 32. s[3, 4] = 3.',
            '',
            'Chain Length L = 3 (Three matrices):',
            '• m[1, 3] = min over k ∈ {1, 2}:',
            '  k = 1: m[1,1] + m[2,3] + p₀ p₁ p₃ = 0 + 40 + (3 × 5 × 2) = 40 + 30 = 70.',
            '  k = 2: m[1,2] + m[3,3] + p₀ p₂ p₃ = 60 + 0 + (3 × 4 × 2) = 60 + 24 = 84.',
            '  Minimum is 70 at k = 1. ==> m[1, 3] = 70, s[1, 3] = 1.',
            '• m[2, 4] = min over k ∈ {2, 3}:',
            '  k = 2: m[2,2] + m[3,4] + p₁ p₂ p₄ = 0 + 32 + (5 × 4 × 4) = 32 + 80 = 112.',
            '  k = 3: m[2,3] + m[4,4] + p₁ p₃ p₄ = 40 + 0 + (5 × 2 × 4) = 40 + 40 = 80.',
            '  Minimum is 80 at k = 3. ==> m[2, 4] = 80, s[2, 4] = 3.',
            '',
            'Chain Length L = 4 (Entire chain A₁..A₄):',
            '• m[1, 4] = min over k ∈ {1, 2, 3}:',
            '  k = 1: m[1,1] + m[2,4] + p₀ p₁ p₄ = 0 + 80 + (3 × 5 × 4) = 80 + 60 = 140.',
            '  k = 2: m[1,2] + m[3,4] + p₀ p₂ p₄ = 60 + 32 + (3 × 4 × 4) = 92 + 48 = 140.',
            '  k = 3: m[1,3] + m[4,4] + p₀ p₃ p₄ = 70 + 0 + (3 × 2 × 4) = 70 + 24 = 94.',
            '  Minimum is 94 at k = 3. ==> m[1, 4] = 94, s[1, 4] = 3.'
          ]
        },
        {
          title: '3. Final Cost Table m[i, j] and Split Table s[i, j]',
          table: {
            headers: ['i \\ j', 'j = 1', 'j = 2', 'j = 3', 'j = 4'],
            rows: [
              { parameter: 'i = 1', col1: 'm=0', col2: 'm=60, s=1', col3: 'm=70, s=1', col4: 'm=94, s=3 (Goal)' },
              { parameter: 'i = 2', col1: '-', col2: 'm=0', col3: 'm=40, s=2', col4: 'm=80, s=3' },
              { parameter: 'i = 3', col1: '-', col2: '-', col3: 'm=0', col4: 'm=32, s=3' },
              { parameter: 'i = 4', col1: '-', col2: '-', col3: '-', col4: 'm=0' }
            ]
          }
        },
        {
          title: '4. Optimal Parenthesization Derivation',
          content: [
            '• s[1, 4] = 3 ==> The outer split is ((A₁ A₂ A₃) (A₄)).',
            '• For (A₁ A₂ A₃), s[1, 3] = 1 ==> Split is ((A₁) (A₂ A₃)).',
            '• Combining: ((A₁ (A₂ A₃)) A₄).',
            '• Minimum scalar multiplications = 94.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Find optimal parenthesization and minimum multiplications for A₁(3x5), A₂(5x4), A₃(4x2), A₄(2x4).',
        givenData: [
          { label: 'Matrices', value: 'A₁, A₂, A₃, A₄' },
          { label: 'Dimension Array P', value: '[3, 5, 4, 2, 4]' },
          { label: 'n', value: '4' }
        ],
        toFind: [
          'Cost table m[i, j] across chain lengths 2, 3, 4',
          'Split table s[i, j]',
          'Minimum multiplication cost',
          'Optimal parenthesized expression'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Compute Chains of Length 2',
            explanation: 'Adjacent matrix products.',
            calculation: 'm[1,2] = 0 + 0 + 3*5*4 = 60 (k=1)\nm[2,3] = 0 + 0 + 5*4*2 = 40 (k=2)\nm[3,4] = 0 + 0 + 4*2*4 = 32 (k=3)',
            result: 'm[1,2]=60, m[2,3]=40, m[3,4]=32'
          },
          {
            stepNumber: 2,
            title: 'Compute Chains of Length 3',
            explanation: 'Subchains of 3 matrices.',
            calculation: 'm[1,3]: k=1 gives 0+40+3*5*2 = 70; k=2 gives 60+0+3*4*2 = 84 ==> min = 70 at k=1\nm[2,4]: k=2 gives 0+32+5*4*4 = 112; k=3 gives 40+0+5*2*4 = 80 ==> min = 80 at k=3',
            result: 'm[1,3]=70 (s=1), m[2,4]=80 (s=3)'
          },
          {
            stepNumber: 3,
            title: 'Compute Chain of Length 4: m[1, 4]',
            explanation: 'Evaluate splits at k = 1, 2, 3.',
            calculation: 'k=1: m[1,1]+m[2,4]+p₀p₁p₄ = 0 + 80 + 3*5*4 = 140\nk=2: m[1,2]+m[3,4]+p₀p₂p₄ = 60 + 32 + 3*4*4 = 140\nk=3: m[1,3]+m[4,4]+p₀p₃p₄ = 70 + 0 + 3*2*4 = 94',
            result: 'Minimum cost = 94 at k = 3 (s[1, 4] = 3)'
          },
          {
            stepNumber: 4,
            title: 'Extract Optimal Parenthesization',
            explanation: 'Traceback using split table s.',
            calculation: 's[1,4]=3 ==> (A₁..A₃)(A₄)\ns[1,3]=1 ==> (A₁)(A₂ A₃)\nFull expression: ((A₁ (A₂ A₃)) A₄)',
            result: '((A₁ (A₂ A₃)) A₄)'
          }
        ],
        finalAnswer: {
          label: 'Optimal Matrix Chain Multiplication',
          value: 'Optimal Sequence: ((A₁ (A₂ A₃)) A₄)  |  Total Multiplications = 94',
          interpretation: 'First multiply A₂ (5×4) and A₃ (4×2) taking 40 operations to yield (5×2). Multiply A₁ (3×5) by this result taking 30 operations to yield (3×2). Finally multiply by A₄ (2×4) taking 24 operations. Total = 40 + 30 + 24 = 94 multiplications.'
        }
      },
      summary: [
        'Dimension array P = [3, 5, 4, 2, 4].',
        'Computed length-2: m[1,2]=60, m[2,3]=40, m[3,4]=32.',
        'Computed length-3: m[1,3]=70 (k=1), m[2,4]=80 (k=3).',
        'Final length-4: m[1,4]=94 at k=3.',
        'Optimal parenthesization: ((A₁ (A₂ A₃)) A₄) with 94 scalar multiplications.'
      ],
      keyPoints: [
        'Dimension array P = [3, 5, 4, 2, 4]',
        'Diagonal base cases = 0',
        'Minimum scalar cost = 94',
        'Optimal split k = 3',
        'Order: ((A₁ (A₂ A₃)) A₄)'
      ]
    },

    // Q17: Solved Numerical: MCM 5 Matrices (Sequence {4, 10, 3, 12, 20, 7})
    {
      id: 'daa-u3-q17',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 17,
      title: 'Numerical: Given Sequence {4, 10, 3, 12, 20, 7} for Five Matrices A₁(4×10), A₂(10×3), A₃(3×12), A₄(12×20), A₅(20×7). Use Dynamic Programming to Solve Chain Matrix Multiplication',
      shortTitle: 'Solved Numerical: Matrix Chain Multiplication (5 Matrices)',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q2(a)', marks: 10 }
      ],
      syllabusTopics: ['MCM 5 Matrices', 'Dimension Array P = [4, 10, 3, 12, 20, 7]', 'Pyramid Table Calculation'],
      definition: 'Comprehensive dynamic programming resolution of a 5-matrix chain with dimension array P = [4, 10, 3, 12, 20, 7], deriving optimal parenthesization and minimum operations.',
      sections: [
        {
          title: '1. Given Matrices & Dimensions',
          content: [
            'Dimension array P = [p₀, p₁, p₂, p₃, p₄, p₅] = [4, 10, 3, 12, 20, 7]. Number of matrices n = 5.',
            'A₁: 4 × 10, A₂: 10 × 3, A₃: 3 × 12, A₄: 12 × 20, A₅: 20 × 7.',
            'Diagonal: m[i, i] = 0 for all i = 1..5.'
          ]
        },
        {
          title: '2. Calculation Table by Chain Length',
          content: [
            'Length L = 2:',
            '• m[1,2] = 4 × 10 × 3 = 120 (s=1)',
            '• m[2,3] = 10 × 3 × 12 = 360 (s=2)',
            '• m[3,4] = 3 × 12 × 20 = 720 (s=3)',
            '• m[4,5] = 12 × 20 × 7 = 1680 (s=4)',
            '',
            'Length L = 3:',
            '• m[1,3]: min( k=1: 0+360+4*10*12=840, k=2: 120+0+4*3*12=264 ) ==> m[1,3] = 264 (s=2)',
            '• m[2,4]: min( k=2: 0+720+10*3*20=1320, k=3: 360+0+10*12*20=2760 ) ==> m[2,4] = 1320 (s=2)',
            '• m[3,5]: min( k=3: 0+1680+3*12*7=1932, k=4: 720+0+3*20*7=1140 ) ==> m[3,5] = 1140 (s=4)',
            '',
            'Length L = 4:',
            '• m[1,4]: min( k=1: 0+1320+4*10*20=2120, k=2: 120+720+4*3*20=1080, k=3: 264+0+4*12*20=1224 ) ==> m[1,4] = 1080 (s=2)',
            '• m[2,5]: min( k=2: 0+1140+10*3*7=1350, k=3: 360+1680+10*12*7=2880, k=4: 1320+0+10*20*7=2720 ) ==> m[2,5] = 1350 (s=2)',
            '',
            'Length L = 5 (Entire Chain A₁..A₅):',
            '• m[1,5]:',
            '  k=1: m[1,1]+m[2,5]+4*10*7 = 0 + 1350 + 280 = 1630',
            '  k=2: m[1,2]+m[3,5]+4*3*7 = 120 + 1140 + 84 = 1344  <-- MINIMUM!',
            '  k=3: m[1,3]+m[4,5]+4*12*7 = 264 + 1680 + 336 = 2280',
            '  k=4: m[1,4]+m[5,5]+4*20*7 = 1080 + 0 + 560 = 1640',
            '• Optimal Cost m[1, 5] = 1344 at k = 2 (s[1, 5] = 2).'
          ]
        },
        {
          title: '3. Optimal Parenthesization Sequence',
          content: [
            '• s[1, 5] = 2 ==> ((A₁ A₂) (A₃ A₄ A₅)).',
            '• For (A₃ A₄ A₅), s[3, 5] = 4 ==> ((A₃ A₄) (A₅)).',
            '• Final Optimal Parenthesization: ((A₁ A₂) ((A₃ A₄) A₅)).',
            '• Total scalar multiplications = 1344.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'MCM DP solution for 5 matrices with dimensions P = [4, 10, 3, 12, 20, 7].',
        givenData: [
          { label: 'Matrices', value: '5 (A₁, A₂, A₃, A₄, A₅)' },
          { label: 'P array', value: '[4, 10, 3, 12, 20, 7]' }
        ],
        toFind: [
          'Table m[i, j] for lengths 2 to 5',
          'Minimum multiplication cost',
          'Parenthesized expression'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Chains of Length 2',
            explanation: 'Compute 2-matrix products.',
            calculation: 'm[1,2]=120, m[2,3]=360, m[3,4]=720, m[4,5]=1680',
            result: 'Length 2 costs computed'
          },
          {
            stepNumber: 2,
            title: 'Chains of Length 3',
            explanation: 'Compute 3-matrix products.',
            calculation: 'm[1,3]=264 (s=2), m[2,4]=1320 (s=2), m[3,5]=1140 (s=4)',
            result: 'Length 3 costs computed'
          },
          {
            stepNumber: 3,
            title: 'Chains of Length 4',
            explanation: 'Compute 4-matrix products.',
            calculation: 'm[1,4]=1080 (s=2), m[2,5]=1350 (s=2)',
            result: 'Length 4 costs computed'
          },
          {
            stepNumber: 4,
            title: 'Full Chain Length 5: m[1, 5]',
            explanation: 'Evaluate splits k = 1, 2, 3, 4.',
            calculation: 'k=1: 1630\nk=2: 120 + 1140 + 84 = 1344 (Min!)\nk=3: 2280\nk=4: 1640',
            result: 'Minimum cost = 1344 at k = 2'
          },
          {
            stepNumber: 5,
            title: 'Derive Parenthesization',
            explanation: 'Traceback using s[1,5]=2 and s[3,5]=4.',
            calculation: '((A₁ A₂) ((A₃ A₄) A₅))',
            result: '((A₁ A₂) ((A₃ A₄) A₅))'
          }
        ],
        finalAnswer: {
          label: 'Optimal MCM Solution (5 Matrices)',
          value: 'Parenthesization: ((A₁ A₂) ((A₃ A₄) A₅))  |  Cost = 1344 Multiplications',
          interpretation: 'Optimal grouping minimizes operations to exactly 1344 scalar multiplications, splitting the chain after matrix A₂.'
        }
      },
      summary: [
        'Dimension array: P = [4, 10, 3, 12, 20, 7].',
        'Computed DP matrix up to chain length 5.',
        'Optimal split point k = 2 at root level.',
        'Final Parenthesization: ((A₁ A₂) ((A₃ A₄) A₅)) with 1344 multiplications.'
      ],
      keyPoints: [
        '5-matrix chain dimension vector',
        'k=2 split minimizing cost to 1344',
        'Sub-split k=4 on subchain 3..5',
        'Parenthesization: ((A₁ A₂) ((A₃ A₄) A₅))'
      ]
    },

    // Q18: Optimal Binary Search Tree (OBST) Theory & Algorithm
    {
      id: 'daa-u3-q18',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 18,
      title: 'What is an Optimal Binary Search Tree (OBST)? Explain How Dynamic Programming is Used to Build an OBST. State its Recurrence Relations, Algorithm, and Time Complexity',
      shortTitle: 'Optimal Binary Search Tree (OBST): Theory & Algorithm',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q2(b)', marks: 10 },
        { paper: 'SPPU Dec-06, May-07, 09', questionNo: 'Theory', marks: 12 }
      ],
      syllabusTopics: ['OBST Definition', 'Weight Equation W[i,j]', 'Cost Recurrence C[i,j]', 'Root Matrix R[i,j]', 'Knuth Optimization O(n²)'],
      definition: 'An Optimal Binary Search Tree (OBST) is a binary search tree constructed from a set of sorted identifiers such that the expected total search cost, weighted by the access frequencies of successful searches (p_i) and unsuccessful searches (q_i), is minimized.',
      sections: [
        {
          title: '1. Problem Formulation & Notations',
          content: [
            'Let identifiers be a₁ < a₂ < ... < a_n.',
            'Let p_i (1 ≤ i ≤ n) be the probability of searching for identifier a_i (successful search).',
            'Let q_i (0 ≤ i ≤ n) be the probability of searching for values lying between identifiers (a_i < x < a_{i+1}) (unsuccessful search).',
            'Total probability constraint: ∑_{i=1}^n p_i + ∑_{i=0}^n q_i = 1.',
            'Expected Search Cost: Expected Cost = ∑_{i=1}^n p_i · [level(a_i) + 1] + ∑_{i=0}^n q_i · [level(d_i)], where the root is at level 0.'
          ]
        },
        {
          title: '2. Dynamic Programming Recurrence Equations',
          content: [
            'Let T_{i, j} denote the optimal binary search tree containing keys a_{i+1}, ..., a_j.',
            '1. Weight Equation: W[i, j] accumulates all access probabilities in the subtree:',
            '   W[i, j] = W[i, j - 1] + p_j + q_j',
            '   Base Case: W[i, i] = q_i',
            '2. Cost Equation: If key a_k is chosen as root of T_{i, j} (i < k ≤ j):',
            '   Left subtree contains keys a_{i+1}..a_{k-1} with cost C[i, k-1].',
            '   Right subtree contains keys a_{k+1}..a_j with cost C[k, j].',
            '   Each node in both subtrees increases depth by 1, contributing additional weight W[i, j].',
            '   C[i, j] = W[i, j] + min_{i < k ≤ j} { C[i, k - 1] + C[k, j] }',
            '   Base Case: C[i, i] = 0',
            '3. Root Tracking: R[i, j] records the index k that achieves the minimum cost in C[i, j].'
          ],
          formulas: [
            { name: 'OBST Cost Recurrence', latex: 'C[i, j] = W[i, j] + \\min_{i < k \\le j} \\{ C[i, k-1] + C[k, j] \\}, \\quad C[i, i] = 0' },
            { name: 'OBST Weight Recurrence', latex: 'W[i, j] = W[i, j-1] + p_j + q_j, \\quad W[i, i] = q_i' }
          ]
        },
        {
          title: '3. OBST Algorithm & Time Complexity Analysis',
          content: [
            'Algorithm OBST(p, q, n)',
            '{',
            '    for i = 0 to n do { W[i, i] = q[i]; C[i, i] = 0; R[i, i] = 0; }',
            '    for m = 1 to n do // m is chain length j - i',
            '    {',
            '        for i = 0 to (n - m) do',
            '        {',
            '            j = i + m;',
            '            W[i, j] = W[i, j-1] + p[j] + q[j];',
            '            // Find k in [i+1, j] that minimizes C[i, k-1] + C[k, j]',
            '            C[i, j] = W[i, j] + min_{i < k <= j} { C[i, k-1] + C[k, j] };',
            '            R[i, j] = k;',
            '        }',
            '    }',
            '    return C[0, n], R;',
            '}',
            'Time Complexity:',
            '  • Standard DP evaluation tests j - i candidates for k across O(n²) subproblems, taking O(n³) time.',
            '  • Knuth\'s Monotonicity Theorem: R[i, j-1] ≤ R[i, j] ≤ R[i+1, j]. Restricting the search for k to this range reduces the overall running time to O(n²).'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-obst',
          title: 'Optimal Binary Search Tree Architecture & Dummy Keys',
          caption: 'Diagram illustrating root node k_r with optimal left subtree, optimal right subtree, and external leaf nodes d_i representing unsuccessful searches.',
          type: 'svg-interactive',
          svgType: 'obst-tree-diagram'
        }
      ],
      summary: [
        'OBST minimizes the expected search cost weighted by successful (p_i) and unsuccessful (q_i) search probabilities.',
        'Solves subtrees T_{i,j} using weight recurrence W[i,j] and cost recurrence C[i,j].',
        'Standard DP takes O(n³); Knuth\'s root bounds reduce it to O(n²).',
        'Reconstructs optimal BST from root matrix R[i,j].'
      ],
      keyPoints: [
        'Expected search cost minimization',
        'Weight equation W[i, j] = W[i, j-1] + p_j + q_j',
        'Cost equation C[i, j] = W[i, j] + min(C_left + C_right)',
        'Root table R[i, j]',
        'Knuth\'s O(n²) optimization'
      ]
    },

    // Q19: Solved Numerical: OBST for 4 Keys
    {
      id: 'daa-u3-q19',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 19,
      title: 'Numerical: What is Optimal Binary Search Tree? Build an OBST for Following Data: Keys = [10, 20, 30, 40] with Frequencies = [4, 2, 6, 3]',
      shortTitle: 'Solved Numerical: OBST Construction (4 Keys: 10, 20, 30, 40)',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q2(b)', marks: 10 }
      ],
      syllabusTopics: ['OBST Numerical', 'Weight Matrix Computation', 'Cost Matrix Computation', 'Tree Construction'],
      definition: 'Full dynamic programming tabulation of weights W[i, j], costs C[i, j], and roots R[i, j] for 4 keys with given search frequencies.',
      sections: [
        {
          title: '1. Given Probabilities & Setup',
          content: [
            '4 Keys: k₁ = 10, k₂ = 20, k₃ = 30, k₄ = 40.',
            'Successful search frequencies: p₁ = 4, p₂ = 2, p₃ = 6, p₄ = 3.',
            'Unsuccessful search frequencies (dummy keys): q₀ = q₁ = q₂ = q₃ = q₄ = 0 (standard textbook simplification when only key frequencies are given).',
            'Base Cases: W[i, i] = 0, C[i, i] = 0, R[i, i] = 0 for i = 0, 1, 2, 3, 4.'
          ]
        },
        {
          title: '2. Stepwise Computation of Weight Matrix W[i, j]',
          content: [
            'Using W[i, j] = W[i, j-1] + p_j:',
            '• Diagonal j - i = 1: W[0,1]=4, W[1,2]=2, W[2,3]=6, W[3,4]=3',
            '• Diagonal j - i = 2: W[0,2]=4+2=6, W[1,3]=2+6=8, W[2,4]=6+3=9',
            '• Diagonal j - i = 3: W[0,3]=6+6=12, W[1,4]=8+3=11',
            '• Diagonal j - i = 4: W[0,4]=12+3=15'
          ]
        },
        {
          title: '3. Stepwise Computation of Cost Matrix C[i, j] and Root Matrix R[i, j]',
          content: [
            'Chain Length j - i = 1 (Single keys):',
            '• C[0,1] = W[0,1] + C[0,0] + C[1,1] = 4 + 0 + 0 = 4 (R[0,1] = 1)',
            '• C[1,2] = W[1,2] + C[1,1] + C[2,2] = 2 + 0 + 0 = 2 (R[1,2] = 2)',
            '• C[2,3] = W[2,3] + C[2,2] + C[3,3] = 6 + 0 + 0 = 6 (R[2,3] = 3)',
            '• C[3,4] = W[3,4] + C[3,3] + C[4,4] = 3 + 0 + 0 = 3 (R[3,4] = 4)',
            '',
            'Chain Length j - i = 2 (Two keys):',
            '• C[0,2] = W[0,2] + min(k=1: C[0,0]+C[1,2]=2, k=2: C[0,1]+C[2,2]=4) = 6 + 2 = 8 (R[0,2] = 1)',
            '• C[1,3] = W[1,3] + min(k=2: C[1,1]+C[2,3]=6, k=3: C[1,2]+C[3,3]=2) = 8 + 2 = 10 (R[1,3] = 3)',
            '• C[2,4] = W[2,4] + min(k=3: C[2,2]+C[3,4]=3, k=4: C[2,3]+C[4,4]=6) = 9 + 3 = 12 (R[2,4] = 3)',
            '',
            'Chain Length j - i = 3 (Three keys):',
            '• C[0,3] = W[0,3] + min(k=1: C[0,0]+C[1,3]=10, k=2: C[0,1]+C[2,3]=10, k=3: C[0,2]+C[3,3]=8) = 12 + 8 = 20 (R[0,3] = 3)',
            '• C[1,4] = W[1,4] + min(k=2: C[1,1]+C[2,4]=12, k=3: C[1,2]+C[3,4]=5, k=4: C[1,3]+C[4,4]=10) = 11 + 5 = 16 (R[1,4] = 3)',
            '',
            'Chain Length j - i = 4 (All four keys):',
            '• C[0,4] = W[0,4] + min(',
            '    k=1: C[0,0] + C[1,4] = 0 + 16 = 16,',
            '    k=2: C[0,1] + C[2,4] = 4 + 12 = 16,',
            '    k=3: C[0,2] + C[3,4] = 8 + 3 = 11  <-- MINIMUM,',
            '    k=4: C[0,3] + C[4,4] = 20 + 0 = 20',
            '  ) = 15 + 11 = 26 (R[0,4] = 3).'
          ]
        },
        {
          title: '4. Summary Tables and Final Tree Structure',
          table: {
            headers: ['i \\ j', 'j = 0', 'j = 1', 'j = 2', 'j = 3', 'j = 4'],
            rows: [
              { parameter: 'i = 0', col1: 'W=0, C=0', col2: 'W=4, C=4, R=1', col3: 'W=6, C=8, R=1', col4: 'W=12, C=20, R=3', col5: 'W=15, C=26, R=3 (Goal)' },
              { parameter: 'i = 1', col1: '-', col2: 'W=0, C=0', col3: 'W=2, C=2, R=2', col4: 'W=8, C=10, R=3', col5: 'W=11, C=16, R=3' },
              { parameter: 'i = 2', col1: '-', col2: '-', col3: 'W=0, C=0', col4: 'W=6, C=6, R=3', col5: 'W=9, C=12, R=3' },
              { parameter: 'i = 3', col1: '-', col2: '-', col3: '-', col4: 'W=0, C=0', col5: 'W=3, C=3, R=4' },
              { parameter: 'i = 4', col1: '-', col2: '-', col3: '-', col4: '-', col5: 'W=0, C=0' }
            ]
          }
        },
        {
          title: '5. Tree Reconstruction from Root Matrix R',
          content: [
            '• Root of tree T[0, 4] is R[0, 4] = 3 (Key = 30).',
            '• Left Subtree T[0, 2]: Root is R[0, 2] = 1 (Key = 10).',
            '  - Left child of 10: T[0, 0] (empty).',
            '  - Right child of 10: T[1, 2], Root is R[1, 2] = 2 (Key = 20).',
            '• Right Subtree of 30 is T[3, 4]: Root is R[3, 4] = 4 (Key = 40).',
            'Tree Structure:',
            '       (30)',
            '      /    \\',
            '   (10)    (40)',
            '      \\',
            '      (20)',
            'Optimal Total Cost = 26.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Build OBST for keys [10, 20, 30, 40] with frequencies [4, 2, 6, 3].',
        givenData: [
          { label: 'Keys', value: '[10, 20, 30, 40]' },
          { label: 'Frequencies (p)', value: '[4, 2, 6, 3]' },
          { label: 'Dummy keys (q)', value: '[0, 0, 0, 0, 0]' }
        ],
        toFind: [
          'Weight matrix W[0..4, 0..4]',
          'Cost matrix C[0..4, 0..4]',
          'Root matrix R[0..4, 0..4]',
          'Minimum search cost and reconstructed BST'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Compute Weight Table W',
            explanation: 'Accumulate frequencies along diagonals.',
            calculation: 'Length 1: W[0,1]=4, W[1,2]=2, W[2,3]=6, W[3,4]=3\nLength 2: W[0,2]=6, W[1,3]=8, W[2,4]=9\nLength 3: W[0,3]=12, W[1,4]=11\nLength 4: W[0,4]=15',
            result: 'Total weight W[0,4] = 15'
          },
          {
            stepNumber: 2,
            title: 'Compute Single Key Costs (Length 1)',
            explanation: 'Each single key tree has cost equal to its frequency.',
            calculation: 'C[0,1]=4 (R=1), C[1,2]=2 (R=2), C[2,3]=6 (R=3), C[3,4]=3 (R=4)',
            result: 'Diagonal 1 completed'
          },
          {
            stepNumber: 3,
            title: 'Compute Subtrees of Size 2 (Length 2)',
            explanation: 'Pick root minimizing left and right subtree cost.',
            calculation: 'C[0,2] = 6 + min(C[1,2]=2, C[0,1]=4) = 8 (R=1)\nC[1,3] = 8 + min(C[2,3]=6, C[1,2]=2) = 10 (R=3)\nC[2,4] = 9 + min(C[3,4]=3, C[2,3]=6) = 12 (R=3)',
            result: 'Diagonal 2 completed'
          },
          {
            stepNumber: 4,
            title: 'Compute Subtrees of Size 3 (Length 3)',
            explanation: 'Evaluate 3 candidates for root.',
            calculation: 'C[0,3] = 12 + min(10, 10, 8) = 20 (R=3)\nC[1,4] = 11 + min(12, 5, 10) = 16 (R=3)',
            result: 'Diagonal 3 completed'
          },
          {
            stepNumber: 5,
            title: 'Compute Full Tree Cost C[0, 4]',
            explanation: 'Evaluate k = 1, 2, 3, 4 for overall root.',
            calculation: 'k=1: 0 + 16 = 16\nk=2: 4 + 12 = 16\nk=3: 8 + 3 = 11 (Min!)\nk=4: 20 + 0 = 20\nC[0,4] = W[0,4] + 11 = 15 + 11 = 26 (R[0,4] = 3)',
            result: 'Optimal cost C[0,4] = 26, Root R[0,4] = 3 (Key 30)'
          },
          {
            stepNumber: 6,
            title: 'Reconstruct Binary Search Tree',
            explanation: 'Follow root table entries.',
            calculation: 'Root = 30\nLeft subtree root R[0,2] = 1 (10), right child of 10 is 20\nRight subtree root R[3,4] = 4 (40)',
            result: 'BST: 30 at root, 10 left (with 20 right), 40 right'
          }
        ],
        finalAnswer: {
          label: 'Optimal Binary Search Tree',
          value: 'Minimum Search Cost = 26  |  Root = Key 30',
          interpretation: 'Placing Key 30 at the root, Key 10 as left child (with Key 20 as right child of 10), and Key 40 as right child of 30 achieves the minimum possible weighted search cost of 26.'
        }
      },
      summary: [
        'Weights computed sequentially up to W[0, 4] = 15.',
        'Length 1 to 4 cost table calculations performed.',
        'Minimum total search cost = 26 with overall root key = 30.',
        'Reconstructed tree: 30 at root, (10 -> 20) left, 40 right.'
      ],
      keyPoints: [
        'Frequency array p = [4, 2, 6, 3]',
        'W[0, 4] = 15',
        'C[0, 4] = 26',
        'Root key = 30 (R[0, 4] = 3)',
        'Optimal BST layout'
      ]
    },

    // Q20: Binomial Coefficients using Dynamic Programming
    {
      id: 'daa-u3-q20',
      unitId: 'unit-3',
      subjectId: 'daa',
      qNumber: 20,
      title: 'Explain How to Compute Binomial Coefficients C(n, k) Using Dynamic Programming. State Pascal\'s Identity, Algorithm, and Analyze Time and Space Complexity',
      shortTitle: 'Binomial Coefficients via DP: Algorithm & Analysis',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Textbook / Decode Chapter 3.6', questionNo: 'Section 3.6', marks: 6 }
      ],
      syllabusTopics: ['Binomial Coefficients', 'Pascal\'s Identity', 'Overlapping Subproblems', 'Time and Space Complexity'],
      definition: 'Computing the binomial coefficient C(n, k) = n! / (k!(n-k)!) using dynamic programming leverages Pascal\'s Identity to replace expensive factorial computations with simple additions in a 2D table.',
      sections: [
        {
          title: '1. Recurrence Relation & Pascal\'s Identity',
          content: [
            'The binomial coefficient C(n, k), also written as (n choose k), satisfies Pascal\'s recurrence:',
            '  C(n, k) = C(n - 1, k - 1) + C(n - 1, k)   for 0 < k < n',
            'Base Cases:',
            '  C(n, 0) = 1   for all n ≥ 0',
            '  C(n, n) = 1   for all n ≥ 0',
            'Recursive evaluation without DP leads to exponential recomputations O(2^n). Storing results in a table eliminates all redundant work.'
          ],
          formulas: [
            { name: 'Pascal\'s Identity', latex: 'C(n, k) = \\begin{cases} 1 & \\text{if } k = 0 \\text{ or } k = n \\\\ C(n-1, k-1) + C(n-1, k) & \\text{if } 0 < k < n \\end{cases}' }
          ]
        },
        {
          title: '2. Dynamic Programming Algorithm: `Binomial(n, k)`',
          content: [
            'Algorithm Binomial(n, k)',
            '{',
            '    for i = 0 to n do',
            '    {',
            '        for j = 0 to min(i, k) do',
            '        {',
            '            if j == 0 or j == i then',
            '                C[i, j] = 1;',
            '            else',
            '                C[i, j] = C[i - 1, j - 1] + C[i - 1, j];',
            '        }',
            '    }',
            '    return C[n, k];',
            '}'
          ]
        },
        {
          title: '3. Numerical Example: Compute C(4, 2)',
          content: [
            '• Row 0: C(0,0) = 1',
            '• Row 1: C(1,0) = 1, C(1,1) = 1',
            '• Row 2: C(2,0) = 1, C(2,1) = 1+1 = 2, C(2,2) = 1',
            '• Row 3: C(3,0) = 1, C(3,1) = 1+2 = 3, C(3,2) = 2+1 = 3',
            '• Row 4: C(4,0) = 1, C(4,1) = 1+3 = 4, C(4,2) = C(3,1) + C(3,2) = 3 + 3 = 6.',
            'Final Answer: C(4, 2) = 6.'
          ]
        },
        {
          title: '4. Complexity Analysis',
          content: [
            '1. Time Complexity: Total additions performed = ∑_{i=1}^n min(i, k) = Θ(n · k).',
            '2. Space Complexity: A 2D table requires Θ(n · k) space.',
            '3. Space Optimization: Since row i depends only on row i - 1, space can be reduced to a 1D array of size Θ(k) by updating from right to left.'
          ]
        }
      ],
      summary: [
        'C(n, k) computed via Pascal\'s identity C(n, k) = C(n-1, k-1) + C(n-1, k).',
        'Constructs Pascal\'s triangle table row-by-row.',
        'Avoids factorial integer overflow and exponential recomputations.',
        'Runs in Θ(nk) time and can be optimized to Θ(k) auxiliary memory.'
      ],
      keyPoints: [
        'Pascal\'s Identity recurrence',
        'Base conditions C(n,0) = C(n,n) = 1',
        'Θ(nk) time complexity',
        'Θ(k) space-optimized 1D array version',
        'C(4, 2) = 6 demonstration'
      ]
    }
  ]
};
