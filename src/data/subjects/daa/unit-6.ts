import { Unit } from '@/types';

export const daaUnit6Data: Unit = {
  id: 'unit-6',
  unitNumber: 6,
  title: 'Multithreaded and Distributed Algorithms, and String Matching',
  shortTitle: 'Multithreaded, Distributed & String Matching',
  description: 'In-depth exploration of Dynamic Multithreaded Algorithms (DAG execution model, Work and Span laws, Determinacy Races, Multithreaded Matrix Multiplication, and Parallel Merge Sort with P-Merge), Distributed Algorithms (Synchronous and Asynchronous models, Distributed Breadth-First Search on arbitrary networks, and the Gallager-Humblet-Spira Distributed Minimum Spanning Tree algorithm), and String Matching Algorithms (Naive string matching, String matching with Finite Automata, Rabin-Karp with Rolling Hash and Spurious Hit analysis, and the Knuth-Morris-Pratt algorithm).',
  syllabus: [
    'Dynamic Multithreading Principles: Shared-memory concurrency, nested parallelism, spawn and sync keywords, computational DAGs',
    'Performance Metrics: Work (T1), Span (T_infinity), Work Law, Span Law, Parallelism (T1/T_infinity), Slackness, Speedup, Efficiency',
    'Determinacy Races: Definition, data race vs determinacy race, benign races, race conditions in parallel accumulation, detection and mitigation',
    'Multithreaded Matrix Multiplication: Divide-and-conquer block decomposition, parallel loops, rectangular matrices (m x n and n x p), Work and Span bounds',
    'Multithreaded Merge Sort: Limitations of conventional divide-and-conquer, parallel merge (P-Merge) with dual binary search, O(log^3 n) span derivation',
    'Parallel Loops: Desugaring parallel for loops into divide-and-conquer binary trees, grain size selection, loop overhead',
    'Performance Measures: Speedup, Efficiency, Throughput, Contention, Latency, Amdahl’s Law vs Gustafson’s Law',
    'Distributed Algorithms Basics: Network model, synchronous rounds vs asynchronous event-driven models, message complexity, time complexity',
    'Distributed Breadth-First Search (BFS): Wave propagation, layering, parent pointer construction, message and round complexity',
    'Distributed Minimum Spanning Tree (MST): Gallager-Humblet-Spira (GHS) algorithm, fragment merging, Minimum Weight Outgoing Edge (MWOE)',
    'String Matching Problem: Formal alphabet, text, pattern, valid shifts, prefix, suffix, and factor properties',
    'Naive String Matching: Sliding window comparisons, worst-case O((n - m + 1)m) behavior, average-case analysis',
    'String Matching with Finite Automata: State transition function delta, suffix function sigma, deterministic matching in O(n) time',
    'Rabin-Karp Algorithm: Radix-d representation, Horner’s rule, rolling hash using modular arithmetic, modular update formula',
    'Spurious Hits in Rabin-Karp: Mathematical cause, hash collision probability, worst-case degradation to O(nm), expected linear runtime',
    'Knuth-Morris-Pratt (KMP) Algorithm: Prefix function pi, avoiding text pointer regression, linear matching phase'
  ],
  questionPaperIndex: [
    {
      paper: 'Paper 1 ([6004]-480A)',
      qMain: 'Q7(a) Multithreaded Merge Sort & parallel merge advantage (9M), Q7(b)(i) Distributed Minimum Spanning Tree (MST) (8M), Q7(b)(ii) Rabin-Karp String Matching algorithm (8M)',
      qOr: 'Q8(a) Short notes on: Multithreaded matrix mult, Multithreaded merge sort, Distributed BFS, Rabin-Karp (10M), Q8(b) Analyzing multithreaded algorithms, parallel loops, race conditions (7M)'
    },
    {
      paper: 'Paper 2 ([6263]-81)',
      qMain: 'Q7(a) Rabin-Karp algorithm runtime, worst-case behavior, and how spurious hits occur (10M), Q7(b) Multithreaded merge sort vs conventional merge sort with complexity (8M)',
      qOr: 'Q8(a) Distributed BFS on 7-vertex graph A-G with round-by-round trace (10M), Q8(b) spawn and sync keywords with multithreading DAG model (8M)'
    },
    {
      paper: 'Paper 3 ([6181]-101)',
      qMain: 'Q7(a)(i) Distributed MST (GHS algorithm) (8M), Q7(a)(ii) Rabin-Karp string matching algorithm (10M), Q7(b) Multithreaded analysis, parallel loops, race conditions (7M)',
      qOr: 'Q8(a) Multithreaded merge sort with P-Merge analysis (9M), Q8(b) Rabin-Karp numerical: Text T = 3141592653589793, Pattern P = 26, modulo q = 11 (8M)'
    },
    {
      paper: 'Paper 4 ([6354]-485)',
      qMain: 'Q7(a) Rabin-Karp algorithm & runtime analysis (10M), Q7(b) Performance measures: speedup, efficiency, throughput, contention, latency (8M)',
      qOr: 'Q8(a) Distributed BFS on 7-vertex graph A-G (10M), Q8(b) Matrix multiplication m x n and n x p conventional vs multithreaded (8M)'
    }
  ],
  quickRevision: {
    keyDefinitions: [
      {
        term: 'Work (T_1)',
        definition: 'The total time required to execute an algorithm on a single processor, equal to the sum of execution times of all vertices in the computational DAG.'
      },
      {
        term: 'Span (T_infinity)',
        definition: 'The execution time on an idealized computer with an infinite number of processors, equal to the length of the longest (critical) path in the DAG.'
      },
      {
        term: 'Parallelism (T_1 / T_infinity)',
        definition: 'The theoretical maximum speedup achievable on any number of processors, representing the average amount of work available along each step of the span.'
      },
      {
        term: 'Determinacy Race',
        definition: 'A concurrency defect occurring when two logically concurrent strands access the same memory location, at least one performs a write, and no synchronization coordinates them.'
      },
      {
        term: 'Rolling Hash',
        definition: 'A hash function that allows computing the hash of a shifted substring in O(1) time from the previous window using modular arithmetic and subtracting the leading digit.'
      },
      {
        term: 'Spurious Hit',
        definition: 'In Rabin-Karp, a false match where the pattern hash matches the text window hash modulo q (t_s = p mod q), but the actual character strings do not match.'
      },
      {
        term: 'MWOE',
        definition: 'Minimum Weight Outgoing Edge in distributed MST; the lowest-weight edge connecting a fragment of nodes to any external node outside that fragment.'
      }
    ],
    coreFormulas: [
      {
        name: 'Work Law',
        latex: 'T_P \\ge \\frac{T_1}{P}',
        description: 'Execution time on P processors cannot be faster than total work divided by P.'
      },
      {
        name: 'Span Law',
        latex: 'T_P \\ge T_\\infty',
        description: 'Execution time cannot be shorter than the critical path of sequential dependencies.'
      },
      {
        name: 'Brent’s Theorem (Greedy Scheduler)',
        latex: 'T_P \\le \\frac{T_1 - T_\\infty}{P} + T_\\infty \\le \\frac{T_1}{P} + T_\\infty',
        description: 'Guaranteed execution time achieved by any online greedy scheduler on P processors.'
      },
      {
        name: 'Speedup & Efficiency',
        latex: 'S_P = \\frac{T_1}{T_P}, \\quad E_P = \\frac{S_P}{P} = \\frac{T_1}{P \\cdot T_P}',
        description: 'Speedup measures runtime gain; Efficiency measures processor utilization.'
      },
      {
        name: 'Amdahl’s Law',
        latex: 'S_P = \\frac{1}{\\alpha + \\frac{1 - \\alpha}{P}} \\implies S_\\infty = \\frac{1}{\\alpha}',
        description: 'Maximum speedup is strictly bounded by the serial fraction alpha of the algorithm.'
      },
      {
        name: 'Rabin-Karp Rolling Hash',
        latex: 't_{s+1} = \\left( d \\cdot (t_s - T[s+1] \\cdot h) + T[s+m+1] \\right) \\bmod q',
        description: 'Constant-time O(1) update of text window hash where h = d^(m-1) mod q.'
      }
    ],
    comparisonHighlights: [
      {
        title: 'Work vs Span in Multithreading',
        summary: 'Work T_1 is serial cost on 1 processor; Span T_infinity is critical path on infinite processors. Parallelism is T_1 / T_infinity.'
      },
      {
        title: 'Conventional vs P-Merge Sort',
        summary: 'Conventional parallel merge sort has O(n) span bottleneck due to serial merge. P-Merge uses dual binary search on medians to drop span to O(log^3 n).'
      },
      {
        title: 'Synchronous vs Asynchronous Distributed Systems',
        summary: 'Synchronous proceeds in lock-step rounds with bounded delay. Asynchronous experiences arbitrary finite delays requiring event-driven waves.'
      },
      {
        title: 'Naive vs Rabin-Karp vs KMP String Matching',
        summary: 'Naive is O(nm) worst-case. Rabin-Karp is O(n+m) average using rolling hash. KMP is strictly O(n) worst-case using prefix function pi.'
      }
    ],
    examTips: [
      'In multithreading questions, always state both the Work Law (T_P >= T_1/P) and Span Law (T_P >= T_infinity) and cite Brent’s Theorem.',
      'For P-Merge, explicitly show the partition size bound: max subproblem size <= (n_1/2) + n_2 <= 3n/4.',
      'In the Rabin-Karp numerical problem (T=3141592653589793, P=26, q=11), make sure to clearly distinguish between legitimate hit (s=6) and spurious hits (s=3, 4, 5).',
      'For Distributed BFS on the 7-vertex graph, remember that node E receives messages from both B and C in round 2; explain the lexicographic tie-breaking rule that assigns parent(E) = B.'
    ]
  },
  questions: [
    // Q1
    {
      id: 'daa-u6-q1',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 1,
      title: 'Explain the dynamic multithreading execution model. Describe the role of spawn and sync keywords and how a computation is modeled as a Directed Acyclic Graph (DAG). Define Work, Span, and Parallelism.',
      shortTitle: 'Dynamic Multithreading Model, DAG, spawn & sync',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(b)', marks: 7 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q8(b)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q7(b)', marks: 7 },
        { paper: 'Decode / Textbook', questionNo: 'Q1, Q2, Q4', marks: 10 }
      ],
      frequencyNote: 'Appears in almost every exam set under Q7 or Q8; foundational for multithreaded algorithms.',
      syllabusTopics: [
        'Dynamic Multithreading Principles',
        'Linguistic Primitives: spawn and sync',
        'Computational DAG Model',
        'Work, Span, and Parallelism'
      ],
      definition: 'Dynamic Multithreading is a high-level parallel programming paradigm where the programmer specifies logical parallelism using primitives like spawn and sync, while an underlying runtime system dynamically schedules tasks onto physical processor cores using a work-stealing DAG execution model.',
      sections: [
        {
          title: '1. Linguistic Primitives: spawn and sync',
          content: [
            '• spawn: When a procedure call is preceded by spawn (e.g., spawn P-FIB(n-1)), the spawned child procedure executes concurrently with the continuation of the parent procedure. It indicates logical parallelism, not mandatory physical thread creation.',
            '• sync: A local barrier synchronization primitive. The executing procedure suspends its execution until ALL child procedures it has spawned have completed and returned their results. An implicit sync occurs before any procedure returns.'
          ],
          codeBlock: {
            language: 'text',
            code: `P-FIB(n)
1  if n <= 1
2      return n
3  else
4      x = spawn P-FIB(n - 1)    // Spawn child thread
5      y = P-FIB(n - 2)          // Parent thread computes concurrently
6      sync                      // Wait for spawned child to finish
7      return x + y`
          }
        },
        {
          title: '2. The Computational Directed Acyclic Graph (DAG)',
          content: [
            'The execution of a multithreaded computation is represented as a DAG G = (V, E):',
            '• Vertices (Strands): Each node represents a strand—a sequential sequence of non-parallel instructions containing no spawn, sync, or return statements.',
            '• Continuation Edges: Connect consecutive strands within the same procedure instance.',
            '• Spawn Edges: Connect a strand that executes spawn to the initial strand of the spawned child procedure.',
            '• Return / Join Edges: Connect the final strand of a child procedure back to the strand following the corresponding sync in the caller.'
          ]
        },
        {
          title: '3. Work, Span, and Fundamental Laws',
          table: {
            headers: ['Metric / Law', 'Mathematical Notation', 'Definition / Physical Meaning', 'Bound Implication'],
            rows: [
              {
                parameter: 'Work',
                col1: 'T_1',
                col2: 'Total time to execute the computation on a single processor (sum of all strand execution times).',
                col3: 'T_1 = Sum_{v in V} cost(v)'
              },
              {
                parameter: 'Span',
                col1: 'T_infinity',
                col2: 'Execution time on an infinite number of processors (length of the longest critical path in the DAG).',
                col3: 'Longest directed path in G'
              },
              {
                parameter: 'Work Law',
                col1: 'T_P >= T_1 / P',
                col2: 'P processors cannot perform more than P units of work per time step.',
                col3: 'Speedup cannot exceed P (linear speedup limit)'
              },
              {
                parameter: 'Span Law',
                col1: 'T_P >= T_infinity',
                col2: 'Adding processors cannot shorten the strictly sequential dependencies along the critical path.',
                col3: 'Span is an unbreakable lower bound on execution time'
              },
              {
                parameter: 'Parallelism',
                col1: 'T_1 / T_infinity',
                col2: 'The average amount of work available along each step of the critical path.',
                col3: 'Theoretical maximum possible speedup'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-u6-dag',
          title: 'Dynamic Multithreading Computational DAG (Work vs Span)',
          caption: 'Figure 6.1: Directed Acyclic Graph showing spawn fork, concurrent strands, critical path (Span T_infinity), and sync barrier join.',
          type: 'svg-interactive',
          svgType: 'multithreaded-dag-model',
          description: 'Interactive visualization of multithreaded execution DAG.'
        }
      ],
      summary: [
        'Dynamic multithreading uses spawn to fork concurrent tasks and sync to join completed tasks.',
        'Computations are represented as a DAG of sequential strands and causal dependency edges.',
        'Work T_1 is single-processor execution time; Span T_infinity is the critical path length.',
        'Work Law: T_P >= T_1/P; Span Law: T_P >= T_infinity; Parallelism: T_1 / T_infinity.'
      ],
      keyPoints: [
        'spawn (fork logical task)',
        'sync (join barrier)',
        'Strand (atomic instruction sequence)',
        'Work T_1 = total DAG node cost',
        'Span T_infinity = critical path length',
        'Parallelism = T_1 / T_infinity'
      ],
      conclusion: 'The DAG execution model separates logical concurrency specification from runtime physical scheduling, providing clean theoretical foundations for analyzing parallel speedup and efficiency.'
    },

    // Q2
    {
      id: 'daa-u6-q2',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 2,
      title: 'What is a determinacy race condition? Explain with an example of concurrent instructions. Distinguish between benign and malign races and describe mitigation methods.',
      shortTitle: 'Determinacy Races and Race Conditions',
      marks: 7,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(b)', marks: 7 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q7(b)', marks: 7 },
        { paper: 'Decode / Textbook', questionNo: 'Q3, Q5', marks: 8 }
      ],
      frequencyNote: 'Regularly paired with multithreaded loop analysis in question 8(b) or 7(b).',
      syllabusTopics: [
        'Determinacy Races Definition',
        'DAG Formalization of Concurrent Access',
        'Lost Update Assembly Analysis',
        'Benign vs Malign Races',
        'Detection and Mitigation'
      ],
      definition: 'A determinacy race condition occurs in a multithreaded program when two logically concurrent strands access the same memory location, at least one access is a write, and no synchronization mechanisms coordinate their execution order.',
      sections: [
        {
          title: '1. Formal Definition in Computational DAGs',
          content: [
            'Let G = (V, E) be the computational DAG of an execution.',
            'Two strands u, v in V are logically concurrent (u || v) if neither is reachable from the other: (u does not lead to v) and (v does not lead to u).',
            'A determinacy race exists if and only if there exist two strands u, v such that:',
            '1. u || v (they can execute at the exact same physical moment).',
            '2. Both u and v access the same memory location M.',
            '3. At least one of the accesses is a write operation.'
          ]
        },
        {
          title: '2. Low-Level Lost Update Trace',
          content: [
            'Consider two parallel iterations executing x = x + 1 on shared variable x (initially 0):',
            '• The statement x = x + 1 expands into 3 machine instructions: LOAD R, [x]; ADD R, 1; STORE [x], R.',
            '• Thread 1 reads x = 0 into R1.',
            '• Thread 2 reads x = 0 into R2.',
            '• Both increment their local registers: R1 = 1, R2 = 1.',
            '• Thread 1 stores 1 into x; Thread 2 overwrites 1 into x.',
            '• Result: Two increments occurred, but x = 1 instead of 2. One update is permanently lost!'
          ]
        },
        {
          title: '3. Benign vs Malign Races and Mitigation',
          table: {
            headers: ['Category / Solution', 'Description', 'Characteristics / Impact'],
            rows: [
              {
                parameter: 'Malign Race',
                col1: 'Concurrent unsynchronized read/write corrupting program invariants, data structures, or accumulators.',
                col2: 'Produces nondeterministic wrong results, memory leaks, or crashes.'
              },
              {
                parameter: 'Benign Race',
                col1: 'Concurrent write where different execution schedules do not affect final logical correctness.',
                col2: 'Example: Multiple threads writing true to a shared found boolean during linear search.'
              },
              {
                parameter: 'Atomic Operations',
                col1: 'Hardware Compare-And-Swap (CAS) instructions executing read-modify-write as a single indivisible step.',
                col2: 'Lock-free, extremely fast, prevents lost updates without thread blocking.'
              },
              {
                parameter: 'Mutex Locks & Sync',
                col1: 'Mutual exclusion locks or sync barriers enforcing serial critical sections.',
                col2: 'Guarantees determinacy at the expense of introducing contention and latency.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-u6-race',
          title: 'Determinacy Race Condition in Parallel Strands',
          caption: 'Figure 6.2: Interleaved execution of concurrent read-modify-write instructions leading to a lost update on shared variable x.',
          type: 'svg-interactive',
          svgType: 'race-condition-visual',
          description: 'Diagram showing assembly instruction race interleaving.'
        }
      ],
      summary: [
        'A determinacy race occurs when concurrent strands access shared memory and at least one writes.',
        'Formally: u || v, both access address M, and access(u)=write or access(v)=write.',
        'Lost updates occur when non-atomic load-add-store sequences interleave.',
        'Mitigated using atomic CAS instructions, locks, or restructuring into reduction trees.'
      ],
      keyPoints: [
        'Concurrent strands (u || v)',
        'Shared memory write collision',
        'Lost update anomaly',
        'Malign vs Benign races',
        'Atomic CAS & Mutex synchronization'
      ],
      conclusion: 'Eliminating determinacy races guarantees program determinism, ensuring that the parallel program produces identical output to its sequential counterpart for all inputs.'
    },

    // Q3
    {
      id: 'daa-u6-q3',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 3,
      title: 'Formulate the Multithreaded Matrix Multiplication algorithm using divide-and-conquer block decomposition. Compare its Work and Span with conventional sequential matrix multiplication for m x n and n x p matrices.',
      shortTitle: 'Multithreaded Matrix Multiplication vs Conventional',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q8(b)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q6, Q7', marks: 10 }
      ],
      frequencyNote: 'Directly asked in Paper 4 Q8(b) for rectangular matrices and Paper 1 Q8(a) as a core short note.',
      syllabusTopics: [
        'Conventional Matrix Multiplication',
        'Block Divide-and-Conquer Decomposition',
        'Multithreaded Block Matrix Multiplication',
        'Work and Span Derivations',
        'Rectangular Matrices (m x n and n x p)'
      ],
      definition: 'Multithreaded Matrix Multiplication decomposes matrices into 8 block subproblems that are spawned concurrently, followed by parallel recursive block matrix addition, achieving Work Theta(n^3) and Span Theta(log^2 n).',
      sections: [
        {
          title: '1. Conventional Sequential Matrix Multiplication',
          content: [
            'For A in R^(m x n) and B in R^(n x p), the product C = A x B in R^(m x p) is computed elementwise as C[i, j] = Sum_{k=1}^n A[i, k] * B[k, j].',
            '• The standard algorithm uses 3 nested loops: for i=1 to m, for j=1 to p, for k=1 to n.',
            '• Total scalar multiplications and additions: m * n * p.',
            '• For square n x n matrices: Work T_1(n) = Theta(n^3), Span T_infinity(n) = Theta(n^3), Parallelism = 1.'
          ]
        },
        {
          title: '2. Multithreaded Block Divide-and-Conquer Algorithm',
          content: [
            'Partition matrices A, B, and C into four (n/2) x (n/2) submatrices:',
            'C_11 = A_11*B_11 + A_12*B_21,   C_12 = A_11*B_12 + A_12*B_22',
            'C_21 = A_21*B_11 + A_22*B_21,   C_22 = A_21*B_12 + A_22*B_22',
            '• Spawns all 8 recursive submultiplications concurrently using an auxiliary matrix T to avoid write races.',
            '• After sync, adds the block products using a parallel matrix addition routine (P-MATRIX-ADD).'
          ],
          codeBlock: {
            language: 'text',
            code: `P-MATRIX-MULTIPLY(C, A, B, n)
1  if n == 1
2      C[1, 1] = A[1, 1] * B[1, 1]; return
3  allocate temporary matrix T of size n x n
4  partition A, B, C, and T into (n/2) x (n/2) submatrices
5  spawn P-MATRIX-MULTIPLY(C11, A11, B11, n/2)
6  spawn P-MATRIX-MULTIPLY(C12, A11, B12, n/2)
7  spawn P-MATRIX-MULTIPLY(C21, A21, B11, n/2)
8  spawn P-MATRIX-MULTIPLY(C22, A21, B12, n/2)
9  spawn P-MATRIX-MULTIPLY(T11, A12, B21, n/2)
10 spawn P-MATRIX-MULTIPLY(T12, A12, B22, n/2)
11 spawn P-MATRIX-MULTIPLY(T21, A22, B21, n/2)
12 P-MATRIX-MULTIPLY(T22, A22, B22, n/2)
13 sync
14 P-MATRIX-ADD(C, C, T, n)   // Span: Theta(log n)
15 sync`
          }
        },
        {
          title: '3. Derivation of Work and Span Recurrences',
          content: [
            '• Parallel Matrix Addition Span: M_infinity(n) = M_infinity(n/2) + Theta(1) = Theta(log n). Addition Work: M_1(n) = 4 M_1(n/2) + Theta(1) = Theta(n^2).',
            '• Multiplication Work Recurrence: T_1(n) = 8 T_1(n/2) + Theta(n^2). By Master Theorem Case 1 (a=8, b=2, log_2 8 = 3): T_1(n) = Theta(n^3).',
            '• Multiplication Span Recurrence: Since all 8 subproblems run in parallel: T_infinity(n) = T_infinity(n/2) + M_infinity(n) = T_infinity(n/2) + Theta(log n). Solving gives T_infinity(n) = Theta(log^2 n).',
            '• Parallelism: T_1 / T_infinity = Theta(n^3 / log^2 n).'
          ]
        },
        {
          title: '4. Comparison Summary',
          table: {
            headers: ['Metric', 'Conventional Sequential', 'Multithreaded Divide & Conquer', 'Parallel Loops (Flat)'],
            rows: [
              {
                parameter: 'Algorithm Paradigm',
                col1: 'Triple nested iterative loops',
                col2: 'Recursive 8-way block D&C',
                col3: 'parallel for i, j over inner k'
              },
              {
                parameter: 'Work T_1',
                col1: 'Theta(n^3) or Theta(m n p)',
                col2: 'Theta(n^3)',
                col3: 'Theta(n^3)'
              },
              {
                parameter: 'Span T_infinity',
                col1: 'Theta(n^3) or Theta(m n p)',
                col2: 'Theta(log^2 n)',
                col3: 'Theta(n) [or Theta(log n) with tree]'
              },
              {
                parameter: 'Parallelism',
                col1: '1 (Zero parallelism)',
                col2: 'Theta(n^3 / log^2 n)',
                col3: 'Theta(n^2)'
              },
              {
                parameter: 'Auxiliary Memory',
                col1: 'Theta(1) in-place',
                col2: 'Theta(n^2 log n) temporary buffers',
                col3: 'Theta(1)'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-u6-matmul',
          title: 'Block Divide-and-Conquer Multithreaded Matrix Multiplication',
          caption: 'Figure 6.3: Partitioning matrices into 8 concurrent block multiplications and 4 parallel block additions.',
          type: 'svg-interactive',
          svgType: 'parallel-matrix-multiplication',
          description: 'Interactive block diagram of parallel matrix multiplication.'
        }
      ],
      summary: [
        'Sequential matrix multiplication requires Theta(n^3) time and has zero parallelism.',
        'Multithreaded block D&C spawns 8 recursive submatrix multiplications concurrently.',
        'Work remains work-efficient: T_1 = Theta(n^3).',
        'Span is reduced to Theta(log^2 n) using recursive parallel block addition.',
        'Parallelism is Theta(n^3 / log^2 n), scaling to thousands of processor cores.'
      ],
      keyPoints: [
        '8-way recursive block partitioning',
        'Auxiliary matrix T prevents race conditions',
        'Parallel addition span = Theta(log n)',
        'Multiplication span = Theta(log^2 n)',
        'Multiplication work = Theta(n^3)',
        'Parallelism = Theta(n^3 / log^2 n)'
      ],
      conclusion: 'Multithreaded block matrix multiplication achieves optimal polylogarithmic span while maintaining strict serial work efficiency, making it the benchmark algorithm for high-performance linear algebra.'
    },

    // Q4
    {
      id: 'daa-u6-q4',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 4,
      title: 'Explain Multithreaded Merge Sort. Why does naive parallelization of Merge Sort fail to achieve high parallelism? How does the P-MERGE algorithm overcome this limitation?',
      shortTitle: 'Multithreaded Merge Sort & P-Merge Advantage',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 6,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q7(a)', marks: 9 },
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q7(b)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q8(a)', marks: 9 }
      ],
      frequencyNote: 'Top-frequency question for Unit VI appearing in 4 question papers.',
      syllabusTopics: [
        'Naive Parallel Merge Sort',
        'The Serial Merge Bottleneck',
        'P-Merge Algorithm Principle',
        'Median Binary Search Partitioning',
        'Work, Span, and Parallelism Comparison'
      ],
      definition: 'Multithreaded Merge Sort parallelizes both the recursive sorting subproblems and the merge step itself. Using the P-MERGE algorithm with median binary search, the merge span is reduced from Theta(n) to Theta(log^2 n), yielding an overall sort span of Theta(log^3 n) and parallelism Theta(n / log^2 n).',
      sections: [
        {
          title: '1. The Naive Parallel Merge Sort Trap',
          content: [
            'A naive multithreaded merge sort spawns the two recursive subsorts concurrently, but uses the conventional sequential two-pointer merge:',
            '• Work: T_1(n) = 2 T_1(n/2) + Theta(n) = Theta(n log n).',
            '• Span: Since the two recursive calls run in parallel, their span is T_infinity(n/2). However, sequential merge takes Theta(n) span: T_infinity(n) = T_infinity(n/2) + Theta(n) = Theta(n).',
            '• Parallelism: T_1 / T_infinity = Theta(n log n) / Theta(n) = Theta(log n).',
            '• For n = 1,000,000, parallelism is only log_2(10^6) approx 20! Adding 1,000 cores provides virtually zero additional speedup because the linear merge dominates execution.'
          ]
        },
        {
          title: '2. The P-MERGE (Parallel Merge) Solution',
          content: [
            'To break the O(n) span barrier, P-MERGE parallelizes the merge operation itself:',
            '1. Given two sorted subarrays T[p_1..r_1] and T[p_2..r_2] (assume first is larger, n_1 >= n_2).',
            '2. Find the median x = T[q_1] of the larger subarray at q_1 = floor((p_1 + r_1)/2).',
            '3. Use binary search to find index q_2 in the second subarray where x fits.',
            '4. Directly place x into its exact rank position in output array A: q_3 = p_3 + (q_1 - p_1) + (q_2 - p_2); A[q_3] = x.',
            '5. Concurrently spawn two independent sub-merges: lower halves into A[p_3..q_3-1] and upper halves into A[q_3+1..r_3].'
          ]
        },
        {
          title: '3. Comparative Performance Analysis',
          table: {
            headers: ['Characteristic', 'Conventional Serial Merge Sort', 'Naive Parallel Merge Sort', 'Fully Parallel (with P-Merge)'],
            rows: [
              {
                parameter: 'Merge Routine',
                col1: 'Sequential 2-pointer',
                col2: 'Sequential 2-pointer',
                col3: 'Parallel recursive P-Merge'
              },
              {
                parameter: 'Merge Span',
                col1: 'Theta(n)',
                col2: 'Theta(n) [Bottleneck!]',
                col3: 'Theta(log^2 n)'
              },
              {
                parameter: 'Total Sort Work T_1',
                col1: 'Theta(n log n)',
                col2: 'Theta(n log n)',
                col3: 'Theta(n log n)'
              },
              {
                parameter: 'Total Sort Span T_infinity',
                col1: 'Theta(n log n)',
                col2: 'Theta(n)',
                col3: 'Theta(log^3 n)'
              },
              {
                parameter: 'Parallelism',
                col1: '1 (Serial)',
                col2: 'Theta(log n)',
                col3: 'Theta(n / log^2 n)'
              },
              {
                parameter: 'Speedup on 1M items',
                col1: '1x',
                col2: '~20x max',
                col3: '~2,500x scalability'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-u6-mergesort',
          title: 'Multithreaded Merge Sort Architecture (Recursive P-Merge)',
          caption: 'Figure 6.4: Dual divide-and-conquer pipeline: parallel recursion on sort subproblems combined with P-Merge median binary splitting.',
          type: 'svg-interactive',
          svgType: 'parallel-merge-sort-pipeline',
          description: 'Visual diagram of parallel merge sort execution.'
        }
      ],
      summary: [
        'Naive parallel merge sort only parallelizes recursive calls, leaving merge as an O(n) bottleneck.',
        'P-Merge parallelizes the merge step itself using median selection and binary search.',
        'P-Merge achieves merge span Theta(log^2 n) and work Theta(n).',
        'Full Multithreaded Merge Sort achieves total span Theta(log^3 n) and work Theta(n log n).',
        'Parallelism jumps from Theta(log n) to massive Theta(n / log^2 n).'
      ],
      keyPoints: [
        'Serial merge creates Theta(n) span bottleneck',
        'P-Merge uses dual binary search on medians',
        'Merge span reduced to Theta(log^2 n)',
        'Overall sort span = Theta(log^3 n)',
        'Parallelism = Theta(n / log^2 n)'
      ],
      conclusion: 'Parallelizing the merge operation is mandatory for scalable parallel sorting. P-Merge converts the linear sequential bottleneck into a polylogarithmic critical path.'
    },

    // Q5
    {
      id: 'daa-u6-q5',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 5,
      title: 'Provide a detailed mathematical derivation of the Work and Span recurrences for P-Merge and Multithreaded Merge Sort. Prove the worst-case 3/4 partition size bound.',
      shortTitle: 'P-Merge Mathematical Analysis & Span Derivation',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q7(a)', marks: 9 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q8(a)', marks: 9 },
        { paper: 'Decode / Textbook', questionNo: 'Q8', marks: 8 }
      ],
      frequencyNote: 'Deep theoretical derivation question for high scoring marks in Q7 or Q8.',
      syllabusTopics: [
        'P-Merge Partition Size Proof',
        'P-Merge Span Recurrence',
        'Master Theorem and Expansion',
        'Overall Merge Sort Span Derivation'
      ],
      definition: 'The mathematical analysis of P-Merge proves that median-based partitioning splits two sorted subarrays such that the larger recursive subproblem contains at most 3/4 of the total elements, yielding an O(log^2 n) merge span and an O(log^3 n) sort span.',
      sections: [
        {
          title: '1. Mathematical Proof of the 3/4 Partition Bound',
          content: [
            'Let T_1 have size n_1 and T_2 have size n_2 with n_1 >= n_2. Total elements n = n_1 + n_2.',
            '1. Median x is chosen in T_1 at index q_1, so exactly floor(n_1/2) <= n_1/2 elements of T_1 are strictly smaller than x.',
            '2. In the worst case, binary search finds that all elements of T_2 are greater than x (or all are smaller). Thus q_2 = p_2 or q_2 = r_2 + 1.',
            '3. The larger of the two spawned recursive merges contains at most: max_subproblem <= (n_1/2) + n_2 elements.',
            '4. Since n_1 >= n_2, we have n_2 <= n/2. Substituting:',
            '   max_subproblem <= (n_1/2) + n_2 = (n_1 + n_2)/2 + n_2/2 <= n/2 + (n/2)/2 = n/2 + n/4 = (3/4)n.',
            'Conclusion: Neither recursive subproblem ever contains more than (3/4)n elements in the worst case.'
          ]
        },
        {
          title: '2. Derivation of P-Merge Span PM_infinity(n)',
          content: [
            'At each recursive step of P-Merge:',
            '• Finding the median takes Theta(1) time.',
            '• Binary search on the second subarray takes Theta(log n_2) <= Theta(log n) time.',
            '• Spawning the two sub-merges executes them in parallel, so the span is the max of the two subproblems:',
            '  PM_infinity(n) <= PM_infinity(3n/4) + c log n.',
            '• Unfolding the recurrence over k = log_{4/3} n levels:',
            '  PM_infinity(n) <= Sum_{i=0}^{log_{4/3} n} c log(n * (3/4)^i) = Theta(log^2 n).'
          ]
        },
        {
          title: '3. Derivation of Full Merge Sort Span T_infinity(n)',
          content: [
            'In P-MERGESORT, the two recursive sorting calls run concurrently, followed by P-MERGE:',
            '  T_infinity(n) = T_infinity(n/2) + PM_infinity(n) = T_infinity(n/2) + Theta(log^2 n).',
            '• Summing across all log_2 n tree levels:',
            '  T_infinity(n) = Sum_{j=0}^{log_2 n} Theta(log^2(n / 2^j)) = Theta(log^3 n).'
          ]
        }
      ],
      summary: [
        'The maximum recursive subproblem in P-Merge is mathematically bounded by (3/4)n.',
        'Binary search requires O(log n) span at each recursion level.',
        'Summing across log_(4/3) n levels yields P-Merge span Theta(log^2 n).',
        'Full multithreaded merge sort achieves total span Theta(log^3 n) and work Theta(n log n).'
      ],
      keyPoints: [
        'Bound: (n_1/2) + n_2 <= 3/4 n',
        'PM_infinity(n) <= PM_infinity(3n/4) + O(log n)',
        'P-Merge span = Theta(log^2 n)',
        'Sort span = Theta(log^3 n)',
        'Work efficiency preserved: Theta(n log n)'
      ],
      conclusion: 'The polylogarithmic span Theta(log^3 n) proves that Multithreaded Merge Sort with P-Merge scales gracefully across massively parallel multicore architectures.'
    },

    // Q6
    {
      id: 'daa-u6-q6',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 6,
      title: 'Explain the syntax, semantics, and implementation of parallel loops (parallel for). Why should a compiler avoid flat sequential task spawning, and how does divide-and-conquer desugaring solve this?',
      shortTitle: 'Parallel Loops and Divide-and-Conquer Desugaring',
      marks: 7,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(b)', marks: 7 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q7(b)', marks: 7 },
        { paper: 'Decode / Textbook', questionNo: 'Q2, Q4', marks: 8 }
      ],
      frequencyNote: 'Commonly asked alongside race conditions and DAG models in multithreaded algorithm analysis.',
      syllabusTopics: [
        'parallel for Syntax and Semantics',
        'Flat Spawn Loop Overhead',
        'Divide-and-Conquer Tree Desugaring',
        'Grain Size Tuning'
      ],
      definition: 'A parallel loop (parallel for) specifies that all iterations of a loop are logically independent and can execute concurrently, with an implicit sync barrier at loop exit. Compilers desugar parallel for into a binary tree of spawned sub-ranges to avoid linear spawn overhead.',
      sections: [
        {
          title: '1. Syntax and Semantics',
          content: [
            'In dynamic multithreading languages, parallel loops express iteration-level concurrency:',
            '  parallel for i = 1 to n do A[i] = B[i] + C[i]',
            '• Semantics: Every iteration i is logically concurrent with every other iteration.',
            '• Barrier: An implicit sync is enforced at loop termination; control does not advance until all n iterations finish.'
          ]
        },
        {
          title: '2. The Flat Spawn Trap vs Divide-and-Conquer Tree',
          content: [
            '• Flat Spawn (Bad): Compiling into a sequential loop: for i=1 to n do spawn F(i); sync. The main thread takes Theta(n) time sequentially just spawning tasks, forcing span to be at least Theta(n)!',
            '• Binary Tree Desugaring (Good): The compiler converts the loop into a recursive divide-and-conquer function that splits the index range [start..end] in half, spawning the left half and executing the right half.'
          ],
          codeBlock: {
            language: 'text',
            code: `PARALLEL-LOOP(start, end)
1  if start == end
2      EXECUTE_ITERATION(start)
3  else
4      mid = floor((start + end) / 2)
5      spawn PARALLEL-LOOP(start, mid)
6      PARALLEL-LOOP(mid + 1, end)
7      sync`
          }
        },
        {
          title: '3. Complexity and Grain Size Selection',
          content: [
            '• Work: T_1(n) = Theta(n * cost_of_iteration) + Theta(n) = Theta(n).',
            '• Span: Tree height is ceil(log_2 n), so T_infinity(n) = cost_of_iteration + Theta(log n).',
            '• Grain Size (G): Spawning tasks for 1-instruction iterations incurs runtime overhead. Modern runtimes group iterations into blocks of size G (e.g., G = 64) and execute leaves serially.'
          ]
        }
      ],
      summary: [
        'parallel for executes independent loop iterations concurrently with an implicit sync at exit.',
        'Sequential flat spawning forces an unacceptable Theta(n) span bottleneck.',
        'Compilers desugar parallel loops into a balanced binary tree of spawned ranges.',
        'Achieves Work Theta(n) and Span Theta(log n) for unit-cost iterations.'
      ],
      keyPoints: [
        'Iteration independence',
        'Implicit sync at loop conclusion',
        'Avoid flat spawn loop bottleneck',
        'Divide-and-conquer binary tree desugaring',
        'Span = Theta(log n)',
        'Grain size optimization'
      ],
      conclusion: 'Divide-and-conquer desugaring ensures that task creation overhead scales logarithmically rather than linearly, preserving fine-grained loop parallelism.'
    },

    // Q7
    {
      id: 'daa-u6-q7',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 7,
      title: 'Analyze multithreaded algorithms using theoretical scheduling foundations. State and prove Brent’s Theorem for greedy schedulers and derive the condition for linear speedup.',
      shortTitle: 'Greedy Schedulers & Brent’s Theorem',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(b)', marks: 7 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q7(b)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q5', marks: 8 }
      ],
      frequencyNote: 'The standard theoretical question for proving algorithmic scalability bounds.',
      syllabusTopics: [
        'Greedy Scheduler Definition',
        'Complete vs Incomplete Steps',
        'Brent’s Theorem Statement & Proof',
        'Linear Speedup Condition'
      ],
      definition: 'A greedy scheduler is an online scheduler that never leaves a processor core idle if there is an enabled strand ready to run. Brent’s Theorem proves that any greedy scheduler executes a computation with work T_1 and span T_infinity on P processors in time T_P <= (T_1 - T_infinity)/P + T_infinity.',
      sections: [
        {
          title: '1. The Greedy Scheduling Paradigm',
          content: [
            'At each discrete time step with P processors available and k ready strands:',
            '• Complete Step: If k >= P, exactly P processors execute ready strands. P units of work are consumed.',
            '• Incomplete Step: If k < P, all k strands are executed while P - k processors sit idle.',
            'Because every ready strand is executed during an incomplete step, each incomplete step reduces the remaining span (critical path) of the DAG by at least 1!'
          ]
        },
        {
          title: '2. Mathematical Proof of Brent’s Theorem',
          content: [
            '1. Let S_C be the number of complete steps and S_I be the number of incomplete steps. Total execution time T_P = S_C + S_I.',
            '2. Since there are at most T_infinity steps along the longest path, there can be at most T_infinity incomplete steps: S_I <= T_infinity.',
            '3. In complete steps, P * S_C work is performed. Total work cannot exceed T_1 - S_I: P * S_C <= T_1 - S_I ==> S_C <= (T_1 - S_I)/P.',
            '4. Substituting into total time:',
            '   T_P = S_C + S_I <= (T_1 - S_I)/P + S_I = T_1/P + S_I * (1 - 1/P) <= (T_1 - T_infinity)/P + T_infinity <= T_1/P + T_infinity.'
          ]
        },
        {
          title: '3. Linear Speedup Condition',
          content: [
            'From Brent’s Theorem, if processor count P is much smaller than the parallelism: P << T_1 / T_infinity, then T_infinity << T_1 / P.',
            '• The span term becomes negligible: T_P approx T_1 / P.',
            '• Speedup S_P = T_1 / T_P approx P.',
            '• The algorithm achieves near-ideal linear speedup.'
          ]
        }
      ],
      summary: [
        'A greedy scheduler never leaves a processor idle when there is a ready strand to execute.',
        'Brent’s Theorem guarantees: T_P <= (T_1 - T_infinity)/P + T_infinity.',
        'Any greedy scheduler executes within a factor of 2 of the optimal offline schedule.',
        'Linear speedup is achieved whenever P << T_1 / T_infinity.'
      ],
      keyPoints: [
        'Online greedy scheduling',
        'Complete vs Incomplete steps',
        'Incomplete steps bounded by T_infinity',
        'Brent’s Theorem: T_P <= T_1/P + T_infinity',
        'Condition for linear speedup: P << T_1/T_infinity'
      ],
      conclusion: 'Brent’s Theorem guarantees that as long as the problem has sufficient parallelism (high slackness), simple greedy scheduling achieves near-perfect linear speedup.'
    },

    // Q8
    {
      id: 'daa-u6-q8',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 8,
      title: 'Discuss the key performance measures of multithreaded systems: Speedup, Efficiency, Throughput, Contention, and Latency. Compare Amdahl’s Law with Gustafson’s Law.',
      shortTitle: 'Performance Measures of Multithreaded Systems',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q7(b)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q9', marks: 8 }
      ],
      frequencyNote: 'Directly asked in Paper 4 Q7(b) for 8 marks.',
      syllabusTopics: [
        'Speedup and Efficiency Definitions',
        'Throughput, Latency, and Contention',
        'Amdahl’s Law Derivation',
        'Gustafson’s Law Comparison'
      ],
      definition: 'Performance measures evaluate how effectively a multithreaded algorithm scales on physical parallel hardware. Speedup (S_P = T_1/T_P) and Efficiency (E_P = S_P/P) quantify computation gains, while Amdahl’s and Gustafson’s laws define theoretical scaling boundaries.',
      sections: [
        {
          title: '1. The Five Core Performance Metrics',
          table: {
            headers: ['Metric', 'Mathematical Formula', 'Definition', 'Engineering Significance'],
            rows: [
              {
                parameter: 'Speedup (S_P)',
                col1: 'S_P = T_1 / T_P',
                col2: 'Ratio of single-processor execution time to P-processor execution time.',
                col3: 'Ideal is S_P = P (linear speedup); sublinear when overhead exists.'
              },
              {
                parameter: 'Efficiency (E_P)',
                col1: 'E_P = S_P / P = T_1 / (P * T_P)',
                col2: 'Fraction of total processor compute capacity utilized effectively.',
                col3: 'Normalized in [0, 1]; measures return on hardware investment.'
              },
              {
                parameter: 'Throughput',
                col1: 'Tasks / Delta t',
                col2: 'Rate at which complete work units or transactions are processed.',
                col3: 'Critical in pipelined and database workloads.'
              },
              {
                parameter: 'Latency',
                col1: 'Elapsed Wall Clock Time',
                col2: 'Total turn-around time from task submission to final delivery.',
                col3: 'Parallel overhead (thread creation) can sometimes increase latency.'
              },
              {
                parameter: 'Contention',
                col1: 'Delay due to resource competition',
                col2: 'Slowdown occurring when concurrent threads serialize over shared buses, memory lines, or locks.',
                col3: 'Causes false sharing, cache line bouncing, and memory bus saturation.'
              }
            ]
          }
        },
        {
          title: '2. Amdahl’s Law vs Gustafson’s Law',
          content: [
            '• Amdahl’s Law (Fixed Problem Size): Let alpha in [0, 1] be the strictly sequential fraction of an algorithm: S_P = 1 / (alpha + (1 - alpha)/P). As P -> infinity, maximum speedup is strictly capped at S_infinity = 1 / alpha.',
            '  Example: If 10% of a program is serial (alpha = 0.10), speedup cannot exceed 10x even on 1,000,000 cores!',
            '• Gustafson’s Law (Scaled Problem Size): Recognizes that in practice, larger parallel machines are used to solve larger problems: S_P = P - (P - 1)s = s + P(1 - s), where s is the serial fraction of runtime on the parallel machine. Speedup scales linearly with P!'
          ]
        }
      ],
      summary: [
        'Speedup S_P = T_1 / T_P measures performance gain; Efficiency E_P = S_P / P measures core utilization.',
        'Throughput measures total work delivered per second; Latency measures turn-around time for a single request.',
        'Contention occurs when concurrent threads serialize over shared buses, memory lines, or locks.',
        'Amdahl’s Law caps speedup at 1/alpha for fixed workloads; Gustafson’s Law shows linear scaling for growing problem sizes.'
      ],
      keyPoints: [
        'Speedup S_P = T_1 / T_P',
        'Efficiency E_P = S_P / P',
        'Throughput vs Latency trade-off',
        'Shared resource contention',
        'Amdahl’s Law serial bottleneck: 1/alpha',
        'Gustafson’s Law scaled speedup'
      ],
      conclusion: 'Understanding both Amdahl’s and Gustafson’s laws allows engineers to properly scale datasets to overcome sequential execution bottlenecks.'
    },

    // Q9
    {
      id: 'daa-u6-q9',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 9,
      title: 'Explain the fundamental concepts of Distributed Algorithms. Differentiate between Synchronous and Asynchronous models, and define Message and Time complexity.',
      shortTitle: 'Distributed Algorithms Fundamentals',
      marks: 8,
      importance: 'Conceptual / Additional',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Decode / Textbook', questionNo: 'Q10, Q11', marks: 8 }
      ],
      frequencyNote: 'Foundational theory for Distributed BFS and Distributed MST questions.',
      syllabusTopics: [
        'Distributed System Architecture',
        'Synchronous vs Asynchronous Communication',
        'Message Complexity Definition',
        'Time Complexity Definition'
      ],
      definition: 'A distributed algorithm is designed to run across multiple autonomous computing nodes that possess private memory and coordinate exclusively by exchanging discrete messages over communication links without global shared memory or a global clock.',
      sections: [
        {
          title: '1. Distributed System Architecture',
          content: [
            'Modeled as an undirected graph G = (V, E) where nodes V are autonomous processors and edges E are bidirectional communication channels.',
            '• No Shared Memory: All interaction occurs via message passing.',
            '• No Global Clock: Nodes operate based on local crystal oscillators.',
            '• Local Knowledge: Nodes initially know only their own unique identifier (UID) and their directly connected neighbors.'
          ]
        },
        {
          title: '2. Synchronous vs Asynchronous Models',
          table: {
            headers: ['Parameter', 'Synchronous Network Model', 'Asynchronous Network Model'],
            rows: [
              {
                parameter: 'Execution Mode',
                col1: 'Lock-step rounds (Round 1, Round 2, ...)',
                col2: 'Event-driven; triggers on message arrival'
              },
              {
                parameter: 'Message Delay',
                col1: 'Bounded; arrives before end of round',
                col2: 'Arbitrary, unpredictable, but finite'
              },
              {
                parameter: 'Coordination',
                col1: 'Implicit via round numbers',
                col2: 'Explicit via acknowledgments and waves'
              },
              {
                parameter: 'Time Complexity',
                col1: 'Number of elapsed rounds',
                col2: 'Normalized delay units (longest link delay = 1)'
              }
            ]
          }
        },
        {
          title: '3. Distributed Complexity Measures',
          content: [
            '• Message Complexity (M): Total number of point-to-point messages transmitted across all channels until all nodes terminate.',
            '• Time Complexity (T): Total rounds (synchronous) or normalized delay time units (asynchronous) until completion.',
            '• Communication Trade-off: In distributed systems, message transmission consumes orders of magnitude more power and latency than local CPU cycles, making message complexity the primary optimization target.'
          ]
        }
      ],
      summary: [
        'Distributed systems operate without shared memory using message passing over network graphs.',
        'Synchronous models proceed in discrete lock-step rounds with bounded delivery.',
        'Asynchronous models experience arbitrary finite delays requiring event-driven coordination.',
        'Primary metrics: Message Complexity (total messages sent) and Time Complexity (rounds or normalized delay units).'
      ],
      keyPoints: [
        'No shared memory / No global clock',
        'Graph model G = (V, E)',
        'Synchronous lock-step rounds',
        'Asynchronous arbitrary finite delay',
        'Message complexity M(G)',
        'Time complexity T(G)'
      ],
      conclusion: 'Distributed algorithms must minimize message complexity to conserve network bandwidth and battery life in IoT and cloud networks.'
    },

    // Q10
    {
      id: 'daa-u6-q10',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 10,
      title: 'Describe the Distributed Breadth-First Search (BFS) algorithm. Explain wave propagation, layering, parent pointer selection, and analyze its message and time complexity.',
      shortTitle: 'Distributed Breadth-First Search (BFS)',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Decode / Textbook', questionNo: 'Q12, Q13', marks: 9 }
      ],
      frequencyNote: 'High-frequency 10-mark question featured in Papers 1, 2, and 4.',
      syllabusTopics: [
        'Distributed BFS Problem Formulation',
        'Synchronous Wavefront Layering',
        'Parent Pointer Construction',
        'Asynchronous Synchronizer Pulses',
        'Message and Time Complexity'
      ],
      definition: 'Distributed BFS constructs a shortest-hop spanning tree rooted at a designated initiator node in a network graph. Using expanding concentric message waves, each node records its minimum hop level from the root and selects a neighbor as its parent pointer.',
      sections: [
        {
          title: '1. Problem Formulation and Node State',
          content: [
            'Given network G = (V, E) and initiator root r in V. Goal: build a distributed BFS tree.',
            'Each node v maintains:',
            '• level(v): Shortest hop distance from root (initialized to infinity; 0 for r).',
            '• parent(v): Neighbor leading toward root (initialized to NIL).',
            '• visited(v): Boolean flag (true for r; false for all others).'
          ]
        },
        {
          title: '2. Synchronous Wave Algorithm',
          content: [
            '• Round 0: Root r sets level(r) = 0 and broadcasts SEARCH to all neighbors.',
            '• Round k: Any unvisited node u receiving SEARCH sets level(u) = k, chooses the sender as parent(u) (breaking ties lexicographically), marks visited(u) = true, and transmits SEARCH to all its remaining neighbors in round k+1.',
            '• Already visited nodes simply drop incoming SEARCH messages.',
            '• Termination: Completes in D rounds, where D is the network diameter.'
          ]
        },
        {
          title: '3. Complexity Analysis',
          table: {
            headers: ['Metric', 'Synchronous Model', 'Layered Asynchronous Model'],
            rows: [
              {
                parameter: 'Time Complexity',
                col1: 'Theta(D) rounds',
                col2: 'Theta(D^2) time units'
              },
              {
                parameter: 'Message Complexity',
                col1: 'Theta(E) messages',
                col2: 'O(E + V * D) messages'
              },
              {
                parameter: 'Lower Bound',
                col1: 'Omega(D) time (cannot reach distance D faster)',
                col2: 'Omega(E) messages (every edge explored at least once)'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-u6-bfs',
          title: 'Distributed BFS Wave Propagation and Spanning Tree Construction',
          caption: 'Figure 6.5: Layer-by-layer wavefront expansion from root node A across network edges, establishing parent pointers.',
          type: 'svg-interactive',
          svgType: 'distributed-bfs-tree',
          description: 'Interactive diagram of distributed BFS wavefront expansion.'
        }
      ],
      summary: [
        'Distributed BFS builds a shortest-hop spanning tree rooted at an initiator node.',
        'Synchronous execution discovers nodes in concentric wavefronts: Layer 0, Layer 1, ..., Layer D.',
        'Nodes record level and parent pointer upon first receiving a SEARCH message.',
        'Synchronous time complexity is Theta(D) rounds; message complexity is Theta(E).'
      ],
      keyPoints: [
        'Root initiator r',
        'State: level, parent, visited',
        'Layered wavefront expansion',
        'Lexicographic tie-breaking for parent',
        'Synchronous time: Theta(D)',
        'Synchronous messages: Theta(E)'
      ],
      conclusion: 'Distributed BFS forms the communication backbone for distributed routing, broadcast, convergecast, and network diameter estimation.'
    },

    // Q11
    {
      id: 'daa-u6-q11',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 11,
      title: 'Trace the step-by-step execution of Distributed BFS on the 7-vertex graph V = {A, B, C, D, E, F, G} rooted at node A. Show messages sent, levels, and parent assignments in each round.',
      shortTitle: 'Distributed BFS Numerical Trace on 7-Vertex Graph',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Decode / Textbook', questionNo: 'Q13', marks: 10 }
      ],
      frequencyNote: 'Exact numerical/trace question featured in Paper 2 Q8(a) and Paper 4 Q8(a).',
      syllabusTopics: [
        '7-Vertex Graph Topology',
        'Round-by-Round Message Exchanges',
        'Simultaneous Message Tie-Breaking',
        'Final BFS Tree Structure'
      ],
      definition: 'Complete step-by-step trace of Distributed BFS on a 7-node network demonstrating round-by-round wave expansion, parent pointer selection via tie-breaking, and final spanning tree derivation.',
      sections: [
        {
          title: '1. Network Topology Definition',
          content: [
            'Graph G = (V, E) with V = {A, B, C, D, E, F, G} and edge connections:',
            '• A connects to: B, C',
            '• B connects to: A, D, E',
            '• C connects to: A, E, F',
            '• D connects to: B, G',
            '• E connects to: B, C, G',
            '• F connects to: C, G',
            '• G connects to: D, E, F',
            'Initiator Root: Node A.'
          ]
        },
        {
          title: '2. Round-by-Round Execution Trace Table',
          table: {
            headers: ['Round', 'Sender Nodes', 'Receivers', 'Event & State Transitions', 'Parent Assigned', 'Level'],
            rows: [
              {
                parameter: 'Round 0',
                col1: 'Node A (Root)',
                col2: 'B, C',
                col3: 'Root A marks visited, sends SEARCH(from=A, level=0) to B and C.',
                col4: 'parent(A) = NIL',
                col5: '0'
              },
              {
                parameter: 'Round 1',
                col1: 'Nodes B, C',
                col2: 'D, E, F',
                col3: 'B and C set parent=A, level=1. B sends SEARCH to {D, E}; C sends SEARCH to {E, F}.',
                col4: 'parent(B)=A, parent(C)=A',
                col5: '1'
              },
              {
                parameter: 'Round 2',
                col1: 'Nodes D, E, F',
                col2: 'Node G',
                col3: 'D gets msg from B. F gets msg from C. E gets simultaneous msgs from B and C! Tie-break picks B (min UID). D, E, F send SEARCH to G.',
                col4: 'parent(D)=B, parent(E)=B, parent(F)=C',
                col5: '2'
              },
              {
                parameter: 'Round 3',
                col1: 'Node G',
                col2: 'None',
                col3: 'G receives simultaneous SEARCH msgs from D, E, and F. Tie-break: min(D, E, F) = D. G sets parent=D, level=3.',
                col4: 'parent(G)=D',
                col5: '3'
              },
              {
                parameter: 'Round 4',
                col1: 'None',
                col2: 'None',
                col3: 'No unvisited nodes remain. Spanning tree complete. Protocol terminates.',
                col4: 'Tree complete (6 edges)',
                col5: '—'
              }
            ]
          }
        }
      ],
      numericalSolution: {
        problemSummary: 'Execute Distributed BFS on a 7-node network V = {A, B, C, D, E, F, G} with Root = A. Determine round-by-round message transmissions, node levels, parent assignments, and final spanning tree.',
        givenData: [
          { label: 'Vertices', value: 'V = {A, B, C, D, E, F, G}' },
          { label: 'Edges', value: 'E = {(A,B), (A,C), (B,D), (B,E), (C,E), (C,F), (D,G), (E,G), (F,G)}' },
          { label: 'Root Initiator', value: 'Node A' },
          { label: 'Tie-Breaking Rule', value: 'If multiple SEARCH messages arrive simultaneously, choose lexicographically smallest parent UID' }
        ],
        toFind: [
          'Round-by-round message exchanges across all edges',
          'Shortest hop level assigned to each vertex: level(v)',
          'Parent pointer assigned to each vertex: parent(v)',
          'Final BFS tree edge set and total rounds elapsed'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Round 0: Initialization at Root Node A',
            explanation: 'Root A initializes its state and broadcasts SEARCH to all incident neighbors.',
            calculation: 'level(A) = 0, parent(A) = NIL, visited(A) = true.\nA sends SEARCH(from=A, level=0) to neighbors B and C.',
            result: 'Messages sent: 2 | Active nodes: {A}'
          },
          {
            stepNumber: 2,
            title: 'Round 1: First Wavefront Reaches Nodes B and C',
            explanation: 'Nodes B and C receive SEARCH from A in round 1. Both are currently unvisited.',
            calculation: 'Node B: level(B) = 1, parent(B) = A, visited(B) = true.\nNode C: level(C) = 1, parent(C) = A, visited(C) = true.\nNode B sends SEARCH to {D, E} (skips A as parent).\nNode C sends SEARCH to {E, F} (skips A as parent).',
            result: 'Level 1: {B, C} | Messages sent: 4 (B->D, B->E, C->E, C->F)'
          },
          {
            stepNumber: 3,
            title: 'Round 2: Second Wavefront Reaches Nodes D, E, and F',
            explanation: 'Nodes D, E, and F receive SEARCH messages. Note that Node E receives simultaneous messages from both B and C!',
            calculation: 'Node D receives SEARCH from B: level(D) = 2, parent(D) = B.\nNode F receives SEARCH from C: level(F) = 2, parent(F) = C.\nNode E receives SEARCH from both B and C: Applies tie-breaking rule: parent(E) = min(B, C) = B! level(E) = 2.\nNodes D, E, F send SEARCH to their unvisited neighbors (all connect to G).',
            result: 'Level 2: {D, E, F} | Messages sent: 3 (D->G, E->G, F->G)'
          },
          {
            stepNumber: 4,
            title: 'Round 3: Third Wavefront Reaches Node G',
            explanation: 'Node G receives SEARCH messages simultaneously from D, E, and F.',
            calculation: 'Node G applies lexicographic tie-breaking: min(D, E, F) = D.\nlevel(G) = 3, parent(G) = D, visited(G) = true.\nNode G has no unvisited neighbors.',
            result: 'Level 3: {G} | Algorithm terminates in 3 rounds'
          }
        ],
        finalAnswer: {
          label: 'Final BFS Spanning Tree',
          value: 'Tree Edges = {(A,B), (A,C), (B,D), (B,E), (C,F), (D,G)}',
          interpretation: 'Tree diameter is 3. Non-tree cross edges: (C,E), (E,G), (F,G). All 7 nodes successfully integrated with optimal hop distances.'
        }
      },
      summary: [
        'Root A initiates at round 0 with level 0.',
        'Level 1 contains B and C with parent A.',
        'Level 2 contains D, E, F; node E picks parent B over C via lexicographical tie-break.',
        'Level 3 contains node G with parent D.',
        'Total tree edges = 6; algorithm terminates in 3 rounds, equal to the tree depth.'
      ],
      keyPoints: [
        'Round 0: Root A broadcasts',
        'Round 1: B and C join Level 1',
        'Round 2: D, E, F join Level 2 (E picks B)',
        'Round 3: G joins Level 3 (G picks D)',
        'Total tree edges = 6',
        'Total rounds = 3'
      ],
      conclusion: 'The trace confirms that Distributed BFS establishes minimum-hop paths to all nodes in exactly D rounds, constructing a valid directed spanning tree.'
    },

    // Q12
    {
      id: 'daa-u6-q12',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 12,
      title: 'Explain the Gallager-Humblet-Spira (GHS) Distributed Minimum Spanning Tree algorithm. Explain the Cut Property, fragment levels, MWOE discovery, and merging rules.',
      shortTitle: 'Distributed MST: Gallager-Humblet-Spira (GHS)',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q7(b)(i)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q7(a)(i)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q14, Q15', marks: 9 }
      ],
      frequencyNote: 'Directly asked in Paper 1 Q7(b)(i) and Paper 3 Q7(a)(i) for 8 marks.',
      syllabusTopics: [
        'Distributed MST Problem Definition',
        'The Cut Property in Distributed Graphs',
        'Fragment Levels and Identifiers',
        'MWOE Search Process',
        'Merge vs Absorb vs Postpone Rules'
      ],
      definition: 'The Gallager-Humblet-Spira (GHS) algorithm is an asynchronous distributed algorithm that computes a Minimum Spanning Tree by growing and merging fragments across their Minimum Weight Outgoing Edges (MWOE), maintaining fragment levels to achieve O(V log V) time and O(V log V + E) messages.',
      sections: [
        {
          title: '1. Theoretical Foundation: The Cut Property',
          content: [
            'Theorem (Cut Property): For any proper cut (S, V \\ S) of graph G, the minimum-weight edge crossing the cut belongs to the unique MST.',
            '• A connected component of the MST is called a fragment.',
            '• Each fragment independently finds its Minimum Weight Outgoing Edge (MWOE)—the lightest edge connecting a node inside the fragment to a node outside.',
            '• By the Cut Property, this MWOE is guaranteed to belong to the global MST, enabling independent concurrent growth.'
          ]
        },
        {
          title: '2. Fragment Levels and Identities',
          content: [
            '• Level L in {0, 1, ..., floor(log_2 |V|)}: Limits concurrent message propagation.',
            '• Level 0: Initially, each individual node is an independent fragment of level 0 with Fragment ID = UID.',
            '• Level L >= 1: Fragment ID = (weight, u, v) of the core edge across which the fragment was formed.'
          ]
        },
        {
          title: '3. Merging Rules: Merge vs Absorb',
          table: {
            headers: ['Condition', 'Rule Name', 'Action Taken', 'New Level'],
            rows: [
              {
                parameter: 'L_1 == L_2 and same MWOE',
                col1: 'Merge',
                col2: 'Both fragments select the exact same core edge e. They merge symmetrically across e.',
                col3: 'L_new = L_1 + 1'
              },
              {
                parameter: 'L_1 < L_2',
                col1: 'Absorb',
                col2: 'Lower-level fragment F_1 connects to higher-level fragment F_2 across MWOE.',
                col3: 'Retains level L_2'
              },
              {
                parameter: 'L_1 > L_2',
                col1: 'Postpone (Wait)',
                col2: 'F_1 must wait because F_2 has not advanced far enough to determine its true MWOE.',
                col3: 'Message queued until F_2 reaches L_1'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-u6-ghs',
          title: 'Distributed GHS Algorithm: Fragment Levels and MWOE Merge',
          caption: 'Figure 6.6: Two fragments at level L discovering their Minimum Weight Outgoing Edge (MWOE) and merging to form a level L+1 fragment.',
          type: 'svg-interactive',
          svgType: 'distributed-ghs-mst',
          description: 'Diagram of GHS fragment merging and MWOE core edge discovery.'
        }
      ],
      summary: [
        'GHS computes an MST in an asynchronous distributed network using the Cut Property.',
        'Nodes form fragments that expand and merge across their Minimum Weight Outgoing Edges (MWOE).',
        'Fragments track levels (0 to log V); two level-L fragments merge to form a level-(L+1) fragment.',
        'A lower-level fragment can be absorbed into a higher-level fragment without increasing level.',
        'Level capping guarantees at most log V level increases, bounding total message traffic.'
      ],
      keyPoints: [
        'Cut Property guarantees MWOE validity',
        'Fragment levels L in [0..log V]',
        'Core edge identifies fragment',
        'Merge doubles fragment level: L + 1',
        'Absorb integrates smaller fragment into larger',
        'Postpone prevents livelocks'
      ],
      conclusion: 'The GHS algorithm is the foundational cornerstone of distributed graph algorithms, pioneering fragment leveling to prevent distributed deadlocks.'
    },

    // Q13
    {
      id: 'daa-u6-q13',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 13,
      title: 'Analyze the message types, phases, and complexity of the Gallager-Humblet-Spira (GHS) distributed MST algorithm. Prove why message complexity is O(V log V + E).',
      shortTitle: 'GHS Message Types and Complexity Proof',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q7(b)(i)', marks: 8 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q7(a)(i)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q15', marks: 8 }
      ],
      frequencyNote: 'Rigorous complexity derivation question for GHS distributed MST.',
      syllabusTopics: [
        'The 7 GHS Message Types',
        'The 4 Operational Phases',
        'Bound on Number of Levels (log V)',
        'O(V log V + E) Message Proof'
      ],
      definition: 'Mathematical proof of GHS complexity showing that fragment size doubling bounds levels to log_2 V, limiting tree messages to O(V log V) and non-tree reject messages to O(E), yielding total message complexity O(V log V + E).',
      sections: [
        {
          title: '1. The Four Operational Phases and Message Types',
          content: [
            '1. Broadcast Phase (Initiate): Core nodes send Initiate(L, F, state) down the tree.',
            '2. Testing Phase (Test, Accept, Reject): Nodes scan incident edges in increasing weight order sending Test(L, F). If neighbor is in same fragment, it replies Reject; if in different fragment, it replies Accept.',
            '3. Convergecast Phase (Report): Nodes aggregate local and child MWOEs, sending Report(best-weight) up to parent.',
            '4. ChangeRoot / Connect Phase: Core directs ChangeRoot to the MWOE node, which sends Connect(L) across the edge.'
          ]
        },
        {
          title: '2. Proof: Maximum Number of Levels is log_2 |V|',
          content: [
            '• A fragment at level L contains at least 2^L nodes.',
            '• Base case: Level 0 fragment has 1 = 2^0 node.',
            '• Induction step: Level L is formed only by merging two fragments of level >= L - 1. Thus size >= 2^(L-1) + 2^(L-1) = 2^L nodes.',
            '• Since total nodes in graph is |V|: 2^(L_max) <= |V| ==> L_max <= floor(log_2 |V|).'
          ]
        },
        {
          title: '3. Message Complexity Derivation',
          table: {
            headers: ['Message Category', 'Message Types', 'Count Derivation', 'Total Messages'],
            rows: [
              {
                parameter: 'Tree Messages',
                col1: 'Initiate, Report, ChangeRoot, Connect',
                col2: 'Each node receives <= 1 Initiate, sends <= 1 Report, forwards <= 1 ChangeRoot per level. Across <= log_2 |V| levels for |V| nodes.',
                col3: 'O(|V| log |V|)'
              },
              {
                parameter: 'Reject Messages',
                col1: 'Test, Reject',
                col2: 'An edge is tested and rejected at most once throughout the entire algorithm run. Once rejected, it is never used again.',
                col3: 'O(|E|)'
              },
              {
                parameter: 'Total Message Complexity',
                col1: 'Sum of all categories',
                col2: 'O(|V| log |V|) tree messages + O(|E|) reject messages.',
                col3: 'O(|V| log |V| + |E|)'
              },
              {
                parameter: 'Time Complexity',
                col1: 'Asynchronous normalized delay',
                col2: 'Diameter of fragment at level L is <= 2^L. Sum of 2^L over all levels.',
                col3: 'O(|V| log |V|)'
              }
            ]
          }
        }
      ],
      summary: [
        'GHS uses 7 message types across 4 phases: Initiate, Test, Report, ChangeRoot/Connect.',
        'Each merge doubles minimum fragment size (2^L), bounding maximum levels to log_2 V.',
        'Tree messages are bounded by O(V log V) because each node sends O(1) messages per level.',
        'Reject messages are bounded by O(E) because an edge is rejected at most once.',
        'Total Message Complexity is O(V log V + E); Time Complexity is O(V log V).'
      ],
      keyPoints: [
        '4 Phases: Initiate, Test, Report, Connect',
        'Fragment size = 2^L nodes',
        'Maximum levels <= log_2 |V|',
        'Tree messages: O(V log V)',
        'Reject messages: O(E)',
        'Total messages: O(V log V + E)'
      ],
      conclusion: 'GHS achieves optimal communication bounds, ensuring that distributed MST construction does not saturate network bandwidth.'
    },

    // Q14
    {
      id: 'daa-u6-q14',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 14,
      title: 'Explain the Naive String Matching algorithm. Formulate its pseudocode and analyze its best-case and worst-case time complexities. Trace on T = "0000100010010" and P = "1001".',
      shortTitle: 'Naive String Matching Algorithm & Trace',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q7(a)', marks: 10 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q7(a)(ii)', marks: 10 },
        { paper: 'Decode / Textbook', questionNo: 'Q16', marks: 8 }
      ],
      frequencyNote: 'Standard string matching baseline algorithm tested in university exams.',
      syllabusTopics: [
        'String Matching Formalism',
        'Naive Sliding Window Algorithm',
        'Worst-Case O((n - m + 1)m) Derivation',
        'Character Comparison Trace'
      ],
      definition: 'The Naive String Matching algorithm tests all possible shift positions s in 0 <= s <= n - m sequentially by comparing characters P[1..m] against T[s+1..s+m], running in worst-case O((n - m + 1)m) time with zero preprocessing.',
      sections: [
        {
          title: '1. Problem Formulation and Pseudocode',
          content: [
            'Given text T[1..n] and pattern P[1..m] with m <= n. Find all valid shifts s such that T[s+1..s+m] == P[1..m].'
          ],
          codeBlock: {
            language: 'text',
            code: `NAIVE-STRING-MATCHER(T, P)
1  n = T.length
2  m = P.length
3  for s = 0 to n - m
4      match = true
5      for j = 1 to m
6          if P[j] != T[s + j]
7              match = false; break
8      if match == true
9          print "Pattern occurs with shift " s`
          }
        },
        {
          title: '2. Complexity Analysis',
          content: [
            '• Worst-Case: Theta((n - m + 1)m). Occurs when every shift matches m - 1 characters before failing on the last character (e.g., T = a^n, P = a^(m-1)b).',
            '• Best-Case: Theta(n - m + 1) = Theta(n). Occurs when the very first character mismatches at every shift position (e.g., T = a^n, P = b^m).',
            '• Auxiliary Space: Theta(1) (in-place character comparison).'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Trace the Naive String Matching algorithm for Text T = "0000100010010" and Pattern P = "1001" over alphabet Sigma = {0, 1}. Count all character comparisons and identify valid shifts.',
        givenData: [
          { label: 'Text T', value: '0000100010010 (length n = 13)' },
          { label: 'Pattern P', value: '1001 (length m = 4)' },
          { label: 'Possible Shifts', value: 's in {0, 1, 2, ..., n - m = 9}' }
        ],
        toFind: [
          'Character-by-character comparison trace for every shift s',
          'Exact number of character comparisons per shift and total comparisons',
          'Set of all valid matching shift indices'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Shifts s = 0, 1, 2, 3 (Immediate Mismatches)',
            explanation: 'Comparing P[1]=\'1\' against T[s+1]:',
            calculation: 's = 0: T[1]=\'0\' != P[1]=\'1\' (1 comp - mismatch)\ns = 1: T[2]=\'0\' != P[1]=\'1\' (1 comp - mismatch)\ns = 2: T[3]=\'0\' != P[1]=\'1\' (1 comp - mismatch)\ns = 3: T[4]=\'0\' != P[1]=\'1\' (1 comp - mismatch)',
            result: '4 shifts examined, 4 comparisons'
          },
          {
            stepNumber: 2,
            title: 'Shift s = 4 (First Occurrence Match!)',
            explanation: 'Comparing pattern against substring T[5..8] = "1000":',
            calculation: 'T[5]=\'1\' == P[1]=\'1\' (match)\nT[6]=\'0\' == P[2]=\'0\' (match)\nT[7]=\'0\' == P[3]=\'0\' (match)\nT[8]=\'0\' != P[4]=\'1\' (mismatch at char 4!)',
            result: '4 comparisons, no valid shift'
          },
          {
            stepNumber: 3,
            title: 'Shifts s = 5, 6, 7',
            explanation: 'Continuing sliding window comparisons:',
            calculation: 's = 5: T[6]=\'0\' != P[1]=\'1\' (1 comp - mismatch)\ns = 6: T[7]=\'0\' != P[1]=\'1\' (1 comp - mismatch)\ns = 7: T[8]=\'0\' != P[1]=\'1\' (1 comp - mismatch)',
            result: '3 shifts examined, 3 comparisons'
          },
          {
            stepNumber: 4,
            title: 'Shift s = 8 (Valid Match Found!)',
            explanation: 'Comparing pattern against substring T[9..12] = "1001":',
            calculation: 'T[9]=\'1\' == P[1]=\'1\' (match)\nT[10]=\'0\' == P[2]=\'0\' (match)\nT[11]=\'0\' == P[3]=\'0\' (match)\nT[12]=\'1\' == P[4]=\'1\' (match)\nAll m = 4 characters match!',
            result: 'Valid shift at s = 8 (4 comparisons)'
          },
          {
            stepNumber: 5,
            title: 'Shift s = 9 (Final Shift)',
            explanation: 'Comparing pattern against substring T[10..13]:',
            calculation: 's = 9: T[10]=\'0\' != P[1]=\'1\' (1 comp - mismatch)',
            result: '1 comparison'
          }
        ],
        finalAnswer: {
          label: 'Pattern Matching Result',
          value: 'Valid Shift = {8}; Total Character Comparisons = 17',
          interpretation: 'Pattern P = "1001" occurs exactly once in text T at index 9 (0-indexed shift s = 8). Total comparisons: 17 out of maximum possible (9+1)*4 = 40.'
        }
      },
      summary: [
        'Naive algorithm checks all n - m + 1 shifts with an inner loop of at most m comparisons.',
        'Worst-case runtime is Theta((n - m + 1)m), occurring on repetitive text like a^n and pattern a^(m-1)b.',
        'Best-case runtime is Theta(n) when first characters mismatch immediately.',
        'Redundant comparisons occur because the naive matcher retains no memory of previous character matches.'
      ],
      keyPoints: [
        'Zero preprocessing time',
        'Outer loop: s = 0 to n - m',
        'Inner loop: j = 1 to m',
        'Worst case: O((n - m + 1)m)',
        'Best case: O(n)',
        'Space complexity: Theta(1)'
      ],
      conclusion: 'While simple and requiring no extra memory, the naive algorithm suffers from repetitive backtracking on structured or repetitive text.'
    },

    // Q15
    {
      id: 'daa-u6-q15',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 15,
      title: 'Describe String Matching with Finite Automata. Explain the role of the state transition function delta and the suffix function sigma. State preprocessing and matching complexities.',
      shortTitle: 'String Matching with Finite Automata',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q7(a)(ii)', marks: 10 },
        { paper: 'Decode / Textbook', questionNo: 'Q17', marks: 8 }
      ],
      frequencyNote: 'Foundational deterministic automaton approach to exact string matching.',
      syllabusTopics: [
        'DFA Formal Definition (Q, q_0, A, Sigma, delta)',
        'Suffix Function sigma Definition',
        'Transition Function delta(q, a) Construction',
        'O(n) Text Matching Complexity'
      ],
      definition: 'Finite Automata string matching constructs a Deterministic Finite Automaton (DFA) from pattern P using a suffix function sigma, enabling text matching in strictly linear O(n) time with zero text backtracking.',
      sections: [
        {
          title: '1. Automaton Formulation and Suffix Function',
          content: [
            'DFA 5-tuple: (Q, q_0, A, Sigma, delta):',
            '• Q = {0, 1, 2, ..., m}: States representing the number of characters of pattern P matched so far.',
            '• q_0 = 0: Initial state; A = {m}: Accepting state.',
            '• Suffix Function sigma(x): Returns the length of the longest prefix of P that is also a suffix of x: sigma(x) = max {k | P_k is suffix of x}.',
            '• Transition Function: delta(q, a) = sigma(P_q a), where P_q is prefix of P of length q.'
          ]
        },
        {
          title: '2. Text Matching Algorithm',
          codeBlock: {
            language: 'text',
            code: `FINITE-AUTOMATON-MATCHER(T, delta, m)
1  n = T.length
2  q = 0
3  for i = 1 to n
4      q = delta(q, T[i])
5      if q == m
6          print "Pattern occurs with shift " (i - m)`
          }
        },
        {
          title: '3. Complexity Analysis',
          table: {
            headers: ['Phase', 'Time Complexity', 'Space Complexity', 'Characteristics'],
            rows: [
              {
                parameter: 'Preprocessing',
                col1: 'Theta(m^3 |Sigma|) [or Theta(m |Sigma|)]',
                col2: 'Theta(m |Sigma|)',
                col3: 'Constructs transition table delta once before scanning text.'
              },
              {
                parameter: 'Matching',
                col1: 'Theta(n)',
                col2: 'Theta(1)',
                col3: 'Optimal linear scan; one table lookup per text character; no backtracking.'
              }
            ]
          }
        }
      ],
      summary: [
        'A DFA string matcher tracks the length of the longest pattern prefix matched so far (states 0 to m).',
        'State transition delta(q, a) = sigma(P_q a), where sigma is the suffix function.',
        'Text matching runs in strictly optimal Theta(n) time with zero backtracking.',
        'Preprocessing requires Theta(m |Sigma|) time and space.'
      ],
      keyPoints: [
        'States 0 to m (length of prefix matched)',
        'Accepting state m indicates match',
        'Suffix function sigma(P_q a)',
        'Matching time: Theta(n)',
        'Preprocessing: Theta(m |Sigma|)',
        'No backward text pointer motion'
      ],
      conclusion: 'Finite Automata string matching provides the ideal model for streaming string search where input text cannot be buffered or rewound.'
    },

    // Q16
    {
      id: 'daa-u6-q16',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 16,
      title: 'Explain the Rabin-Karp String Matching algorithm in detail. Formulate the radix-d integer representation, Horner’s rule, and the O(1) rolling hash update formula.',
      shortTitle: 'The Rabin-Karp String Matching Algorithm',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 6,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q7(b)(ii)', marks: 8 },
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q7(a)', marks: 10 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q7(a)(ii)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q7(a)', marks: 10 }
      ],
      frequencyNote: 'Appears in every single previous year question paper; essential 10-mark topic.',
      syllabusTopics: [
        'Radix-d Integer Representation',
        'Horner’s Rule for Hash Computation',
        'Modular Hashing with Prime Modulus q',
        'O(1) Rolling Hash Derivation',
        'Rabin-Karp Pseudocode'
      ],
      definition: 'The Rabin-Karp algorithm interprets strings as numbers in radix-d notation and calculates a fingerprint hash p for pattern P and hashes t_s for each text window using a rolling hash update formula that shifts windows in O(1) constant time.',
      sections: [
        {
          title: '1. Radix-d Integer Representation and Horner’s Rule',
          content: [
            'Given alphabet Sigma of size d = |Sigma| (e.g., d = 10 for decimal digits, d = 256 for ASCII):',
            '• A pattern string P[1..m] represents an m-digit integer in radix d:',
            '  p = P[m] + d(P[m-1] + d(... + d(P[2] + d P[1])...)).',
            '• Horner’s rule computes p and initial window t_0 in Theta(m) time.',
            '• To prevent integer overflow, all values are computed modulo a large prime q.'
          ]
        },
        {
          title: '2. The O(1) Rolling Hash Update Equation',
          content: [
            'When shifting the text window from T[s+1..s+m] to T[s+2..s+m+1]:',
            '1. Subtract the high-order digit: T[s+1] * d^(m-1).',
            '2. Multiply the remaining value by radix d (shifting digits left).',
            '3. Add the incoming low-order character: T[s+m+1].',
            '4. Apply modulo q:',
            '   t_{s+1} = ( d * ( t_s - T[s+1] * h ) + T[s+m+1] ) mod q',
            'where h = d^(m-1) mod q is precomputed once in O(m) time.'
          ]
        },
        {
          title: '3. Full Rabin-Karp Pseudocode',
          codeBlock: {
            language: 'text',
            code: `RABIN-KARP-MATCHER(T, P, d, q)
1  n = T.length
2  m = P.length
3  h = d^(m - 1) mod q
4  p = 0;  t0 = 0
5  for i = 1 to m                  // Preprocessing: Theta(m)
6      p  = (d * p  + P[i]) mod q
7      t0 = (d * t0 + T[i]) mod q
8  for s = 0 to n - m              // Matching: Theta(n) expected
9      if p == ts
10         if P[1..m] == T[s+1..s+m]  // Character verification
11             print "Pattern occurs with shift " s
12     if s < n - m
13         ts+1 = (d * (ts - T[s+1] * h) + T[s+m+1]) mod q
14         if ts+1 < 0
15             ts+1 = ts+1 + q`
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-u6-rk',
          title: 'Rabin-Karp Rolling Hash Mechanism and Shift Window',
          caption: 'Figure 6.7: Sliding window rolling hash: subtracting high-order digit, scaling by radix d, and adding new low-order digit.',
          type: 'svg-interactive',
          svgType: 'rabin-karp-rolling-hash',
          description: 'Interactive diagram of Rabin-Karp rolling hash window transition.'
        }
      ],
      summary: [
        'Rabin-Karp treats strings as numbers in radix-d notation using Horner’s rule.',
        'Computes fingerprints modulo prime q to fit inside standard machine words.',
        'Rolling hash computes t_(s+1) from t_s in O(1) time using subtraction and shift.',
        'Verification of characters occurs only when hash values match: p == t_s.',
        'Preprocessing takes Theta(m) time; average text matching takes Theta(n) time.'
      ],
      keyPoints: [
        'Radix-d integer encoding',
        'Horner’s rule: Theta(m)',
        'Prime modulus q prevents overflow',
        'Multiplier h = d^(m-1) mod q',
        'Rolling hash formula: O(1) per shift',
        'Expected time: O(n + m)'
      ],
      conclusion: 'Rabin-Karp provides an elegant number-theoretic approach to string matching that extends naturally to multidimensional pattern search.'
    },

    // Q17
    {
      id: 'daa-u6-q17',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 17,
      title: 'What is a spurious hit in Rabin-Karp? Explain how it occurs and analyze the worst-case and average-case time complexity of the algorithm.',
      shortTitle: 'Rabin-Karp Spurious Hits & Runtime Analysis',
      marks: 9,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q7(a)', marks: 10 },
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q7(a)(ii)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q7(a)', marks: 10 },
        { paper: 'Decode / Textbook', questionNo: 'Q18', marks: 9 }
      ],
      frequencyNote: 'Crucial conceptual question asked across Papers 2, 3, and 4.',
      syllabusTopics: [
        'Spurious Hit Formal Definition',
        'Pigeonhole Principle and Hash Collisions',
        'Worst-Case O((n - m + 1)m) Analysis',
        'Average-Case O(n + m) Analysis'
      ],
      definition: 'A spurious hit in Rabin-Karp occurs when a text window has the same hash value modulo q as the pattern (t_s = p mod q), but the actual substring characters differ (T[s+1..s+m] != P[1..m]), requiring an O(m) character-by-character verification.',
      sections: [
        {
          title: '1. True Match vs Spurious Hit',
          content: [
            'When the algorithm observes p == t_s mod q, two possibilities exist:',
            '1. Legitimate Hit (True Match): P[1..m] == T[s+1..s+m]. The pattern genuinely occurs at shift s.',
            '2. Spurious Hit (False Match): t_s = p mod q, but P[1..m] != T[s+1..s+m]. The two distinct strings collide to the same remainder modulo q.',
            'Because spurious hits can occur, whenever hashes match, a full character-by-character verification of up to m comparisons must be executed.'
          ]
        },
        {
          title: '2. Time Complexity Analysis',
          table: {
            headers: ['Case', 'Time Complexity', 'Condition for Occurrence', 'Mitigation Strategy'],
            rows: [
              {
                parameter: 'Worst Case',
                col1: 'Theta((n - m + 1)m)',
                col2: 'Occurs when every shift produces a hash match (t_s = p mod q) but is spurious (e.g., T = 0^n, P = 0^(m-1)1 with q chosen poorly).',
                col3: 'Choose a large random prime q >= n.'
              },
              {
                parameter: 'Average Case',
                col1: 'O(n + m)',
                col2: 'Under uniform hashing, probability of collision is <= 1/q. For q >= n, expected spurious hits is O(1).',
                col3: 'Use 64-bit prime modulus (q approx 10^9).'
              },
              {
                parameter: 'Preprocessing',
                col1: 'Theta(m)',
                col2: 'Computing h = d^(m-1) mod q and initial hashes p and t_0 via Horner’s rule.',
                col3: 'Standard linear preprocessing.'
              }
            ]
          }
        }
      ],
      summary: [
        'A spurious hit occurs when t_s = p mod q but the underlying strings do not match.',
        'Spurious hits necessitate a full character-by-character verification of cost O(m).',
        'Worst-case runtime is O((n - m + 1)m) if all shifts trigger spurious hits.',
        'Expected runtime is O(n + m) when prime q >= n, making collision probability <= 1/q.'
      ],
      keyPoints: [
        'Hash collision modulo prime q',
        'Character verification overhead: O(m)',
        'Worst case: O(nm) on pathological inputs',
        'Average case: O(n + m) linear expected time',
        'Collision probability: <= 1/q'
      ],
      conclusion: 'Choosing a sufficiently large prime modulus ensures that spurious hits are extremely rare, guaranteeing near-optimal linear expected runtime.'
    },

    // Q18
    {
      id: 'daa-u6-q18',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 18,
      title: 'Numerical Problem: Trace the Rabin-Karp algorithm for Text T = 3141592653589793 and Pattern P = 26 with modulus q = 11 and radix d = 10. Trace hash values, find legitimate matches, and count spurious hits.',
      shortTitle: 'Rabin-Karp Spurious Hits Numerical Trace',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 3 ([6181]-101)', questionNo: 'Q8(b)', marks: 8 },
        { paper: 'Decode / Textbook', questionNo: 'Q19', marks: 8 }
      ],
      frequencyNote: 'Exact numerical problem asked in Paper 3 Q8(b) for 8 marks.',
      syllabusTopics: [
        'Rabin-Karp Numerical Execution',
        'Horner’s Hash for P = 26 mod 11',
        'Sliding Window Hash Evaluations',
        'Identification of Spurious Hits vs True Matches'
      ],
      definition: 'Full step-by-step numerical solution of Rabin-Karp on T = 3141592653589793, P = 26, q = 11, calculating hashes for all 15 shifts, identifying 1 true match, and demonstrating 3 spurious hits.',
      sections: [
        {
          title: '1. Preprocessing Values',
          content: [
            '• Text T: 3141592653589793 (n = 16), Pattern P: 26 (m = 2), Modulus q = 11, Radix d = 10.',
            '• Multiplier h: h = d^(m-1) mod q = 10^(2-1) mod 11 = 10 mod 11 = 10.',
            '• Pattern Hash p: p = 26 mod 11 = 4 (since 26 = 2 * 11 + 4).'
          ]
        },
        {
          title: '2. Complete 15-Shift Trace Table',
          table: {
            headers: ['Shift (s)', 'Window Substring', 'Numerical Value', 'Hash (Val mod 11)', 'Hash Match (t_s == 4)?', 'String Equality Verification', 'Classification'],
            rows: [
              { parameter: 's = 0', col1: '"31"', col2: '31', col3: '9', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 1', col1: '"14"', col2: '14', col3: '3', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 2', col1: '"41"', col2: '41', col3: '8', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 3', col1: '"15"', col2: '15', col3: '4', col4: 'YES (4 == 4)', col5: '"15" != "26"', col6: 'SPURIOUS HIT #1' },
              { parameter: 's = 4', col1: '"59"', col2: '59', col3: '4', col4: 'YES (4 == 4)', col5: '"59" != "26"', col6: 'SPURIOUS HIT #2' },
              { parameter: 's = 5', col1: '"92"', col2: '92', col3: '4', col4: 'YES (4 == 4)', col5: '"92" != "26"', col6: 'SPURIOUS HIT #3' },
              { parameter: 's = 6', col1: '"26"', col2: '26', col3: '4', col4: 'YES (4 == 4)', col5: '"26" == "26"', col6: 'LEGITIMATE MATCH!' },
              { parameter: 's = 7', col1: '"65"', col2: '65', col3: '10', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 8', col1: '"53"', col2: '53', col3: '9', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 9', col1: '"35"', col2: '35', col3: '2', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 10', col1: '"58"', col2: '58', col3: '3', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 11', col1: '"89"', col2: '89', col3: '1', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 12', col1: '"97"', col2: '97', col3: '9', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 13', col1: '"79"', col2: '79', col3: '2', col4: 'No', col5: '—', col6: 'No Match' },
              { parameter: 's = 14', col1: '"93"', col2: '93', col3: '5', col4: 'No', col5: '—', col6: 'No Match' }
            ]
          }
        }
      ],
      numericalSolution: {
        problemSummary: 'Execute Rabin-Karp on Text T = 3141592653589793 and Pattern P = 26 with modulus q = 11 and radix d = 10. Trace hash values for all shifts, identify legitimate matches and spurious hits.',
        givenData: [
          { label: 'Text T', value: '3141592653589793 (length n = 16)' },
          { label: 'Pattern P', value: '26 (length m = 2)' },
          { label: 'Modulus q', value: '11 (prime)' },
          { label: 'Radix d', value: '10' }
        ],
        toFind: [
          'Pattern hash value: p mod q',
          'Multiplier constant: h = d^(m-1) mod q',
          'Text window hash values t_s for all shifts s = 0, 1, ..., 14',
          'Classification of each matching hash as Legitimate Match or Spurious Hit'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Preprocessing: Compute Pattern Hash p and Multiplier h',
            explanation: 'Compute p = P mod q and h = d^(m-1) mod q.',
            calculation: 'Pattern P = 26\np = 26 mod 11 = 4 (since 26 = 2 * 11 + 4)\nh = 10^(2 - 1) mod 11 = 10 mod 11 = 10 (or -1 mod 11)',
            result: 'p = 4, h = 10'
          },
          {
            stepNumber: 2,
            title: 'Initial Window: Shift s = 0',
            explanation: 'First window T[1..2] = "31":',
            calculation: 't_0 = 31 mod 11 = 9 (since 31 = 2 * 11 + 9)\nCompare: t_0 (9) != p (4) -> No match.',
            result: 's = 0: t_0 = 9 (No match)'
          },
          {
            stepNumber: 3,
            title: 'Rolling Hash Updates for Shifts s = 1 to 5',
            explanation: 'Compute t_(s+1) = (10 * (t_s - T[s+1]*h) + T[s+m+1]) mod 11:',
            calculation: 's = 1 (window "14"): 14 mod 11 = 3 != 4\ns = 2 (window "41"): 41 mod 11 = 8 != 4\ns = 3 (window "15"): 15 mod 11 = 4 == p! Compare "15" != "26" -> SPURIOUS HIT #1\ns = 4 (window "59"): 59 mod 11 = 4 == p! Compare "59" != "26" -> SPURIOUS HIT #2\ns = 5 (window "92"): 92 mod 11 = 4 == p! Compare "92" != "26" -> SPURIOUS HIT #3',
            result: '3 consecutive Spurious Hits at s = 3, 4, 5!'
          },
          {
            stepNumber: 4,
            title: 'Rolling Hash Updates for Shifts s = 6 to 10',
            explanation: 'Continuing window evaluation:',
            calculation: 's = 6 (window "26"): 26 mod 11 = 4 == p! Compare "26" == "26" -> LEGITIMATE MATCH!\ns = 7 (window "65"): 65 mod 11 = 10 != 4\ns = 8 (window "53"): 53 mod 11 = 9 != 4\ns = 9 (window "35"): 35 mod 11 = 2 != 4\ns = 10 (window "58"): 58 mod 11 = 3 != 4',
            result: 's = 6: Valid match! s = 7..10: No hash matches'
          },
          {
            stepNumber: 5,
            title: 'Rolling Hash Updates for Shifts s = 11 to 14',
            explanation: 'Final 4 window shifts:',
            calculation: 's = 11 (window "89"): 89 mod 11 = 1 != 4\ns = 12 (window "97"): 97 mod 11 = 9 != 4\ns = 13 (window "79"): 79 mod 11 = 2 != 4\ns = 14 (window "93"): 93 mod 11 = 5 != 4',
            result: 's = 11..14: No hash matches'
          }
        ],
        finalAnswer: {
          label: 'Rabin-Karp Trace Summary',
          value: 'Legitimate Match at s = 6 (index 7); Exactly 3 Spurious Hits at s = 3, 4, 5',
          interpretation: 'Pattern "26" occurs at index 7 (shift s = 6). Small modulus q = 11 led to 3 spurious hits (15 = 4 mod 11, 59 = 4 mod 11, 92 = 4 mod 11).'
        }
      },
      summary: [
        'Pattern hash p = 26 mod 11 = 4; Multiplier h = 10.',
        'Shift s = 6 matches pattern "26" with character verification true.',
        'Shifts s = 3, 4, 5 generate 3 spurious hits because 15 = 4 mod 11, 59 = 4 mod 11, and 92 = 4 mod 11.',
        'Illustrates why production implementations use primes near 10^9 to minimize spurious hits.'
      ],
      keyPoints: [
        'p = 4, h = 10',
        'Total windows: 15',
        'Valid match: s = 6 (index 7)',
        'Spurious hits: s = 3, 4, 5 (total 3)',
        'Small prime q = 11 causes ~9% collision rate'
      ],
      conclusion: 'The trace demonstrates the exact mechanics of Rabin-Karp: hash matching flags candidate windows, while character verification prevents false matches.'
    },

    // Q19
    {
      id: 'daa-u6-q19',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 19,
      title: 'Explain the Knuth-Morris-Pratt (KMP) string matching algorithm. How does the prefix function pi avoid text backtracking? Analyze its preprocessing and matching complexities.',
      shortTitle: 'The Knuth-Morris-Pratt (KMP) Algorithm',
      marks: 9,
      importance: 'Important',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q7(a)', marks: 10 },
        { paper: 'Decode / Textbook', questionNo: 'Q20', marks: 9 }
      ],
      frequencyNote: 'Advanced string matching algorithm testing amortized analysis on text scans.',
      syllabusTopics: [
        'KMP Core Insight (No Backtracking)',
        'Prefix Function pi Definition',
        'pi Array Computation Algorithm',
        'KMP Matching Procedure & Amortized Proof'
      ],
      definition: 'The Knuth-Morris-Pratt (KMP) algorithm achieves deterministic O(n) string matching by preprocessing pattern P into a prefix function pi, which stores the length of the longest proper prefix of P that is also a suffix of P[1..q], preventing the text pointer from ever regressing backwards.',
      sections: [
        {
          title: '1. The Prefix Function pi',
          content: [
            'pi[q] = max {k | k < q and P_k is suffix of P_q}.',
            '• Encapsulates pattern self-symmetry.',
            '• When a mismatch occurs after matching q characters against text character T[i], the matcher resets pattern index to q = pi[q] without backing up text pointer i.'
          ],
          codeBlock: {
            language: 'text',
            code: `COMPUTE-PREFIX-FUNCTION(P)
1  m = P.length
2  let pi[1..m] be a new array; pi[1] = 0; k = 0
3  for q = 2 to m
4      while k > 0 and P[k + 1] != P[q]
5          k = pi[k]
6      if P[k + 1] == P[q]
7          k = k + 1
8      pi[q] = k
9  return pi`
          }
        },
        {
          title: '2. The KMP Matcher Algorithm',
          codeBlock: {
            language: 'text',
            code: `KMP-MATCHER(T, P)
1  n = T.length; m = P.length
2  pi = COMPUTE-PREFIX-FUNCTION(P)
3  q = 0
4  for i = 1 to n
5      while q > 0 and P[q + 1] != T[i]
6          q = pi[q]
7      if P[q + 1] == T[i]
8          q = q + 1
9      if q == m
10         print "Pattern occurs with shift " (i - m)
11         q = pi[q]`
          }
        },
        {
          title: '3. Amortized Complexity Analysis',
          content: [
            '• Matching Phase: The text index i only increases (from 1 to n). The variable q increases by 1 at most n times. Each decrease q = pi[q] reduces q by at least 1. Thus while loop cannot execute more than n times total! Matching time: Theta(n).',
            '• Preprocessing Phase: Theta(m) using identical potential argument.',
            '• Total Time: Theta(n + m); Auxiliary Space: Theta(m).'
          ]
        }
      ],
      summary: [
        'KMP avoids backtracking the text pointer by analyzing pattern self-symmetry.',
        'The prefix function pi[q] stores the length of the longest proper prefix of P that is also a suffix of P[1..q].',
        'Prefix function precomputation takes Theta(m) time.',
        'Text matching takes Theta(n) time using amortized analysis on pattern pointer q.',
        'Total time is Theta(n + m) with Theta(m) space, completely independent of alphabet size |Sigma|.'
      ],
      keyPoints: [
        'Zero text pointer regression',
        'Prefix function pi: Theta(m) preprocessing',
        'Amortized matching time: Theta(n)',
        'Total time: Theta(n + m)',
        'Auxiliary space: Theta(m)'
      ],
      conclusion: 'KMP provides strict worst-case linear time guarantees, making it the preferred choice for real-time and streaming text processing.'
    },

    // Q20
    {
      id: 'daa-u6-q20',
      unitId: 'unit-6',
      subjectId: 'daa',
      qNumber: 20,
      title: 'Provide a comparative evaluation of the major string matching algorithms: Naive, Rabin-Karp, Finite Automata, Knuth-Morris-Pratt (KMP), and Boyer-Moore. Discuss engineering trade-offs.',
      shortTitle: 'Comparative Evaluation of String Matching Algorithms',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1 ([6004]-480A)', questionNo: 'Q8(a)', marks: 10 },
        { paper: 'Paper 2 ([6263]-81)', questionNo: 'Q7(a)', marks: 10 },
        { paper: 'Paper 4 ([6354]-485)', questionNo: 'Q7(a)', marks: 10 },
        { paper: 'Decode / Textbook', questionNo: 'Q21', marks: 8 }
      ],
      frequencyNote: 'Comprehensive summary question summarizing the entire string matching unit.',
      syllabusTopics: [
        '5-Algorithm Comparison Matrix',
        'Preprocessing vs Matching Trade-offs',
        'Memory Footprint vs Alphabet Size',
        'Real-World Engineering Selection Criteria'
      ],
      definition: 'Comprehensive evaluation matrix comparing Naive, Rabin-Karp, Finite Automata, KMP, and Boyer-Moore across preprocessing time, matching time, auxiliary memory, and practical application suitability.',
      sections: [
        {
          title: '1. Comprehensive Comparison Matrix',
          table: {
            headers: ['Algorithm', 'Preprocessing Time', 'Matching Time (Worst-Case)', 'Matching Time (Average)', 'Space', 'Core Strength', 'Limitation'],
            rows: [
              {
                parameter: 'Naive',
                col1: '0 (None)',
                col2: 'Theta((n-m+1)m)',
                col3: 'Theta(n)',
                col4: 'Theta(1)',
                col5: 'Zero memory; trivial code',
                col6: 'O(nm) worst case on repetitive data'
              },
              {
                parameter: 'Rabin-Karp',
                col1: 'Theta(m)',
                col2: 'Theta((n-m+1)m)',
                col3: 'Theta(n + m)',
                col4: 'Theta(1)',
                col5: 'Multi-pattern & 2D matching',
                col6: 'Spurious hits on small primes'
              },
              {
                parameter: 'Finite Automata',
                col1: 'Theta(m |Sigma|)',
                col2: 'Theta(n)',
                col3: 'Theta(n)',
                col4: 'Theta(m |Sigma|)',
                col5: 'Optimal streaming search',
                col6: 'Large memory for big alphabets'
              },
              {
                parameter: 'KMP',
                col1: 'Theta(m)',
                col2: 'Theta(n)',
                col3: 'Theta(n)',
                col4: 'Theta(m)',
                col5: 'Guaranteed O(n); no text rewind',
                col6: 'More complex than naive'
              },
              {
                parameter: 'Boyer-Moore',
                col1: 'Theta(m + |Sigma|)',
                col2: 'Theta(nm) or Theta(n)',
                col3: 'Theta(n / m) [Sublinear!]',
                col4: 'Theta(m + |Sigma|)',
                col5: 'Fastest in practice (skips chars)',
                col6: 'Complex heuristics'
              }
            ]
          }
        },
        {
          title: '2. Practical Software Engineering Selection Guide',
          content: [
            '• Use Naive: For tiny patterns (m < 5) and short strings where simplicity and zero memory matter.',
            '• Use Rabin-Karp: For plagiarism detection (searching 1,000 patterns of length 100 simultaneously) and 2D image matrix matching.',
            '• Use Finite Automata: For fixed patterns matched against infinite network packet streams over small alphabets (e.g., DNA sequencing).',
            '• Use KMP: For hard real-time systems where worst-case O(n) latency is legally mandated and input cannot be rewound.',
            '• Use Boyer-Moore: For standard command-line tools (GNU grep) and word processors searching natural language text.'
          ]
        }
      ],
      summary: [
        'Naive is simplest with Theta(1) space, but has O(nm) worst case.',
        'Rabin-Karp excels at multi-pattern matching via rolling hash fingerprints.',
        'Finite Automata provides optimal O(n) streaming matching, but requires Theta(m |Sigma|) space.',
        'KMP guarantees strict O(n) matching using Theta(m) space without dependence on alphabet size.',
        'Boyer-Moore is the fastest in practice with sublinear O(n/m) average time by matching backwards.'
      ],
      keyPoints: [
        'Naive: O(nm) worst / O(1) space',
        'Rabin-Karp: O(n+m) average / rolling hash',
        'DFA: O(n) / O(m|Sigma|) space',
        'KMP: O(n+m) / O(m) space / prefix function pi',
        'Boyer-Moore: Sublinear O(n/m) average'
      ],
      conclusion: 'Selecting the proper string matching algorithm depends on pattern count, alphabet size, streaming constraints, and memory limits.'
    }
  ]
};
