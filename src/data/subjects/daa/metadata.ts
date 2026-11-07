import { Subject } from '@/types';

export const daaMetadata: Omit<Subject, 'units'> = {
  id: 'daa',
  code: '410241',
  name: 'Design and Analysis of Algorithms',
  semester: 'Semester VII',
  department: 'Computer Engineering',
  description: 'Comprehensive university examination question bank and structured technical notes covering Greedy Strategies, Dynamic Programming (0/1 Knapsack, MCM, OBST), Backtracking, Branch & Bound, Complexity Classes (P, NP, NP-Complete), Amortized Analysis, and Parallel/Distributed Algorithms.',
  iconName: 'BrainCircuit',
  accentColor: 'blue',
  syllabusOverview: [
    'Unit 3: Greedy Method and Dynamic Programming (Control Abstraction, Fractional & 0/1 Knapsack, Job Sequencing, Activity Selection, Matrix Chain Multiplication, Optimal Binary Search Trees, Principle of Optimality)',
    'Unit 4: Backtracking and Branch & Bound (State Space Trees, N-Queens, Graph Coloring, Hamiltonian Cycle, Subset Sum, 15-Puzzle, 0/1 Knapsack BB, Traveling Salesperson Problem, LC-Search)',
    'Unit 5: Amortized Analysis and Computational Complexity (Aggregate/Accounting/Potential Methods, P, NP, NP-Complete, NP-Hard, Cook’s Theorem, Vertex Cover, Approximation Algorithms)',
    'Unit 6: Parallel, Distributed and String Matching Algorithms (PRAM, Work-Span, Parallel Merge/Quick Sort, Distributed Leader Election, Naive, KMP, Rabin-Karp, Boyer-Moore)'
  ]
};
