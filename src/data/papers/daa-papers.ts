import { QuestionPaper } from '@/types';

export const daaQuestionPapers: QuestionPaper[] = [
  // Paper 1: April 2026 ([6627]-81, PF5240)
  {
  "id": "daa-april-2026",
  "subjectId": "daa",
  "subjectName": "Design and Analysis of Algorithms",
  "subjectCode": "410241",
  "pattern": "2019 Pattern",
  "semester": "Semester VII",
  "monthYear": "April 2026",
  "paperCode": "[6627]-81",
  "paperSubCode": "PF5240",
  "examType": "End Semester",
  "maxMarks": 70,
  "duration": "2½ Hours",
  "instructions": [
    "Answer Q1 or Q2, Q3 or Q4, Q5 or Q6, and Q7 or Q8.",
    "Draw neat diagrams wherever necessary.",
    "Figures to the right indicate marks.",
    "Assume suitable data, if necessary."
  ],
  "pairs": [
    {
      "pairNumber": 1,
      "pairTitle": "Unit III: Greedy Method & Dynamic Programming",
      "unitNumber": 3,
      "mainQuestion": {
        "questionNumber": "Q1",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q1(a)",
            "text": "What is the Job Scheduling Algorithm? How can the job scheduling algorithm be solved using the Greedy Algorithmic Approach? Explain your answer with respect to Principle, Control abstraction, and Time analysis for the given instance: Jobs J1(d=2, p=60), J2(d=1, p=100), J3(d=3, p=20), J4(d=2, p=40), J5(d=1, p=20).",
            "marks": 12,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q6",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q1(b)",
            "text": "Explain the 0/1 Knapsack Problem using Dynamic Programming for the following instance: N = 3, W = 4, Values = [3, 4, 5], Weights = [1, 2, 3].",
            "marks": 6,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q13",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q2",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q2(a)",
            "text": "What is Dynamic Programming? What is an Optimal Binary Search Tree (OBST)? Explain how Dynamic Programming can be used to solve OBST for the following instance: Keys {10, 20, 30, 40}, Frequency {4, 2, 6, 3}.",
            "marks": 10,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q19",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q2(b)",
            "text": "Compare Greedy Method and Dynamic Programming with respect to: 1. Feasibility, 2. Optimality, 3. Recursion, 4. Memorization, 5. Time Complexity.",
            "marks": 8,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q11",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          }
        ]
      }
    },
    {
      "pairNumber": 2,
      "pairTitle": "Unit IV: Backtracking and Branch & Bound",
      "unitNumber": 4,
      "mainQuestion": {
        "questionNumber": "Q3",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q3(a)",
            "text": "Explain the Backtracking Algorithmic Approach with respect to the following for the 8-Queen Problem: Principle, Control abstraction, Time analysis of control abstraction.",
            "marks": 8,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q4",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q3(b)",
            "text": "What is the Sum of Subsets Problem? Solve the Sum of Subsets Problem for the following instance using the Backtracking Approach: Set = {2, 3, 5, 6, 8, 10}, Sum = 10.",
            "marks": 9,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q10",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q4",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q4(a)",
            "text": "What is the Travelling Salesman Problem (TSP)? Solve the TSP using the Branch and Bound Method.",
            "marks": 9,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q17",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q4(b)",
            "text": "What is the Branch and Bound Algorithmic Approach? Explain the following strategies for the Branch and Bound Method: 1. FIFO, 2. LIFO, 3. LC (Least Cost).",
            "marks": 8,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q14",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          }
        ]
      }
    },
    {
      "pairNumber": 3,
      "pairTitle": "Unit V: Amortized Analysis & Algorithm Complexity",
      "unitNumber": 5,
      "mainQuestion": {
        "questionNumber": "Q5",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q5(a)",
            "text": "Write short notes on the following: 1. Aggregate Analysis, 2. Accounting Method, 3. Potential Function Method, 4. Tractable and Non-tractable Problems.",
            "marks": 10,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q1",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q5(b)",
            "text": "Write short notes with suitable examples of each: 1. Randomized Algorithm, 2. Approximation Algorithm.",
            "marks": 8,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q11",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q6",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q6(a)",
            "text": "What is Amortized Analysis? Explain Aggregate and Potential Function Methods used for Amortized Analysis with respect to stack operations.",
            "marks": 9,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q2",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q6(b)",
            "text": "What is the Potential Function Method of Amortized Analysis? To illustrate the Potential Method, find the amortized cost of the following stack operations: 1. PUSH, 2. POP, 3. MULTIPOP.",
            "marks": 9,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q4",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          }
        ]
      }
    },
    {
      "pairNumber": 4,
      "pairTitle": "Unit VI: Multithreaded, Distributed Algorithms & String Matching",
      "unitNumber": 6,
      "mainQuestion": {
        "questionNumber": "Q7",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q7(a)",
            "text": "Write short notes on the following: 1. Multithreaded Matrix Multiplication, 2. Multithreaded Merge Sort, 3. Distributed Breadth First Search (BFS), 4. Rabin-Karp Algorithm.",
            "marks": 10,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q3",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q7(b)",
            "text": "With respect to Multithreaded Algorithms, explain: 1. Analyzing Multithreaded Algorithms, 2. Parallel Loops, 3. Race Conditions.",
            "marks": 7,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q2",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q8",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q8(a)",
            "text": "Write and explain the pseudocode for the Multithreaded Merge Sort Algorithm. How does parallel merging provide a significant parallelism advantage over Merge Sort?",
            "marks": 9,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q4",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q8(b)",
            "text": "Write the pseudocode for the following string-matching algorithms and analyze them: 1. Naïve String Matching Algorithm, 2. Rabin-Karp Algorithm.",
            "marks": 8,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q16",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          }
        ]
      }
    }
  ]
},

  // Paper 2: November 2025 ([6584]-91, PC-3102)
  {
  "id": "daa-nov-2025",
  "subjectId": "daa",
  "subjectName": "Design and Analysis of Algorithms",
  "subjectCode": "410241",
  "pattern": "2019 Pattern",
  "semester": "Semester VII",
  "monthYear": "November 2025",
  "paperCode": "[6584]-91",
  "paperSubCode": "PC-3102",
  "examType": "End Semester",
  "maxMarks": 70,
  "duration": "2½ Hours",
  "instructions": [
    "Answer Q1 or Q2, Q3 or Q4, Q5 or Q6, and Q7 or Q8.",
    "Draw neat diagrams wherever necessary.",
    "Figures to the right indicate marks.",
    "Assume suitable data, if necessary."
  ],
  "pairs": [
    {
      "pairNumber": 1,
      "pairTitle": "Unit III: Greedy Method & Dynamic Programming",
      "unitNumber": 3,
      "mainQuestion": {
        "questionNumber": "Q1",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q1(a)",
            "text": "Compare greedy algorithmic strategy and dynamic programming strategy.",
            "marks": 6,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q11",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q1(b)",
            "text": "We are given a set of 4 jobs. The deadline and associated profit with each job are: Jobs (A, B, C, D), Deadline (2, 1, 1, 2), Profit (75, 40, 50, 35). Assume that every job takes a single unit of time. Maximize the total profit if only one job can be scheduled at a time using a greedy algorithmic strategy.",
            "marks": 8,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q5",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q1(c)",
            "text": "Comment on the statement: \"Greedy method always provides the optimal solution.\"",
            "marks": 3,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q2",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q2",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q2(a)",
            "text": "Write a control abstraction for dynamic programming strategy. Comment on the time complexity of this abstraction.",
            "marks": 7,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q10",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q2(b)",
            "text": "Find the binomial coefficients of (x+y)^5, using the dynamic programming approach.",
            "marks": 10,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q20",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          }
        ]
      }
    },
    {
      "pairNumber": 2,
      "pairTitle": "Unit IV: Backtracking and Branch & Bound",
      "unitNumber": 4,
      "mainQuestion": {
        "questionNumber": "Q3",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q3(a)",
            "text": "Consider the set A of five numbers: A = {5, 10, 15, 20, 25}. We wish to find the subset of A such that the sum of the numbers in this subset is equal to 30. Solve this problem to find the first solution using the backtracking approach. Show the state space tree being created.",
            "marks": 10,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q11",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q3(b)",
            "text": "Write a control abstraction for branch and bound strategy. Enlist a few applications of the branch and bound method.",
            "marks": 8,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q15",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q4",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q4(a)",
            "text": "A travelling salesperson has to make a trip between three cities P, Q, and R. The cost matrix is given (P->Q: 4, P->R: 2; Q->P: 3, Q->R: 4; R->P: 1, R->Q: 8). The tour will start from city P. Solve this travelling salesperson problem using the branch and bound method.",
            "marks": 10,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q16",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q4(b)",
            "text": "Write an algorithm for the graph colouring problem using the backtracking method. Let the graph consist of n nodes and m available colours. What is the time complexity of this algorithm?",
            "marks": 8,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q7",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          }
        ]
      }
    },
    {
      "pairNumber": 3,
      "pairTitle": "Unit V: Amortized Analysis & Algorithm Complexity",
      "unitNumber": 5,
      "mainQuestion": {
        "questionNumber": "Q5",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q5(a)",
            "text": "Prove that the amortized cost per operation in a k-bit binary counter is O(1).",
            "marks": 5,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q5",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q5(b)",
            "text": "What are intractable problems? Does the Travelling Salesperson Problem belong to this class of problems? Justify your answer.",
            "marks": 6,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q8",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q5(c)",
            "text": "Briefly explain any two methods of amortized analysis.",
            "marks": 6,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q1",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q6",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q6(a)",
            "text": "Explain amortized analysis in brief. Consider a stack as an example with single PUSH, single POP, and MULTIPLE POP operations. Give the amortized costs for these stack operations.",
            "marks": 9,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q2",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q6(b)",
            "text": "Does the randomized algorithm for Quick Sort improve the average-case time complexity? Discuss.",
            "marks": 4,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q13",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q6(c)",
            "text": "Comment on the statement: \"The problem of searching an ordered list or searching an unordered list belongs to the class of tractable problems.\"",
            "marks": 4,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q9",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          }
        ]
      }
    },
    {
      "pairNumber": 4,
      "pairTitle": "Unit VI: Multithreaded, Distributed Algorithms & String Matching",
      "unitNumber": 6,
      "mainQuestion": {
        "questionNumber": "Q7",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q7(a)",
            "text": "Let the hash code for the text be \"4133124\" and that for the pattern matching text be \"124\". Use modulo arithmetic with the prime number 13 and apply the Rabin-Karp string matching algorithm for this case. Show the stepwise process of matching the pattern. What is the time complexity of this algorithm?",
            "marks": 10,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q18",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q7(b)",
            "text": "Compare and contrast row-wise and block-wise approaches in multithreaded matrix multiplication with respect to: 1. Division of work, 2. Communication overhead, 3. Cache efficiency.",
            "marks": 8,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q3",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q8",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q8(a)",
            "text": "Consider the text T and the pattern text P. Write a naïve string-matching algorithm. Show the stepwise process of working of this algorithm if: T = \"KITCHEN\", P = \"HEN\".",
            "marks": 10,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q14",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q8(b)",
            "text": "Write a distributed algorithm to find the Minimum Spanning Tree (MST).",
            "marks": 8,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q12",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          }
        ]
      }
    }
  ]
},

  // Paper 3: April 2025 ([6404]-81, PD4576)
  {
  "id": "daa-april-2025",
  "subjectId": "daa",
  "subjectName": "Design and Analysis of Algorithms",
  "subjectCode": "410241",
  "pattern": "2019 Pattern",
  "semester": "Semester VII",
  "monthYear": "April 2025",
  "paperCode": "[6404]-81",
  "paperSubCode": "PD4576",
  "examType": "End Semester",
  "maxMarks": 70,
  "duration": "2½ Hours",
  "instructions": [
    "Answer Q.1 or Q.2, Q.3 or Q.4, Q.5 or Q.6, and Q.7 or Q.8.",
    "Neat diagrams must be drawn wherever necessary.",
    "Assume suitable data, if necessary.",
    "Figures to the right indicate full marks."
  ],
  "pairs": [
    {
      "pairNumber": 1,
      "pairTitle": "Unit III: Greedy Method & Dynamic Programming",
      "unitNumber": 3,
      "mainQuestion": {
        "questionNumber": "Q1",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q1(a)",
            "text": "Give a mathematical formulation for the following: 1. Fractional Knapsack Problem, 2. 0/1 Knapsack Problem.",
            "marks": 8,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q2",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q1(b)",
            "text": "Consider a set of seven activities. The start and finish times of these activities are: A(1,3), B(3,4), C(2,5), D(0,7), E(5,9), F(8,10), G(11,12). Use the Greedy Algorithmic Strategy to compute an execution schedule having the maximum number of non-conflicting activities.",
            "marks": 9,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q9",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q2",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q2(a)",
            "text": "With respect to Dynamic Programming, what is the Principle of Optimality? Give a mathematical representation for the same.",
            "marks": 7,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q10",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q2(b)",
            "text": "Consider the 0/1 Knapsack Problem with a total weight capacity of 7. The weights and associated values (profits) of 4 items are: A(w=1, v=1), B(w=3, v=4), C(w=4, v=5), D(w=5, v=7). Use the Dynamic Programming Approach to find the optimal solution to this problem.",
            "marks": 10,
            "unitNumber": 3,
            "unitTitle": "Greedy Method and Dynamic Programming",
            "mappedQuestionId": "daa-u3-q14",
            "mappedUnitId": "unit-3",
            "mappedSubjectId": "daa"
          }
        ]
      }
    },
    {
      "pairNumber": 2,
      "pairTitle": "Unit IV: Backtracking and Branch & Bound",
      "unitNumber": 4,
      "mainQuestion": {
        "questionNumber": "Q3",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q3(a)",
            "text": "Consider a graph represented by the adjacency matrix: A connects to B and C; B connects to A and D; C connects to A and D; D connects to B and C. We wish to colour this graph using Red and Black colours with a Backtracking Algorithm. Show the process of colouring it in a stepwise manner using a State Space Diagram.",
            "marks": 10,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q8",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q3(b)",
            "text": "Prove that the full state space tree of finding the Sum of Subsets of n elements using Backtracking will have (excluding the leaf nodes) 2^n - 1 nodes.",
            "marks": 4,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q9",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q3(c)",
            "text": "What are the major drawbacks of the Branch and Bound Method?",
            "marks": 4,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q20",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q4",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q4(a)",
            "text": "State the Sum of Subsets Problem. Write an algorithm to solve this problem using the Backtracking Method. Comment on the time complexity of this algorithm.",
            "marks": 8,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q9",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q4(b)",
            "text": "Consider the three objects: O1(w=5, v=6), O2(w=4, v=5), O3(w=3, v=4). Assume the Knapsack capacity m = 7. Solve this 0/1 Knapsack Problem using the LC (Least Cost) Branch and Bound Method.",
            "marks": 10,
            "unitNumber": 4,
            "unitTitle": "Backtracking and Branch & Bound",
            "mappedQuestionId": "daa-u4-q19",
            "mappedUnitId": "unit-4",
            "mappedSubjectId": "daa"
          }
        ]
      }
    },
    {
      "pairNumber": 3,
      "pairTitle": "Unit V: Amortized Analysis & Algorithm Complexity",
      "unitNumber": 5,
      "mainQuestion": {
        "questionNumber": "Q5",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q5(a)",
            "text": "Give an amortized analysis of a k-bit binary counter using the Aggregate Method.",
            "marks": 6,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q5",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q5(b)",
            "text": "What are Tractable and Non-tractable Problems? Give examples.",
            "marks": 7,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q8",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q5(c)",
            "text": "Does the Randomized Algorithm for Quick Sort improve the average-case time complexity?",
            "marks": 4,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q13",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q6",
        "totalMarks": 17,
        "subQuestions": [
          {
            "subNumber": "Q6(a)",
            "text": "Explain the methods of Amortized Analysis with the help of examples.",
            "marks": 6,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q1",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q6(b)",
            "text": "What is an Approximation Algorithm? How are Performance Ratios useful in Approximation Algorithms?",
            "marks": 7,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q15",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q6(c)",
            "text": "What are Randomized Algorithms? Enlist a few reasons to use Randomized Algorithms.",
            "marks": 4,
            "unitNumber": 5,
            "unitTitle": "Amortized Analysis and Algorithm Complexity",
            "mappedQuestionId": "daa-u5-q11",
            "mappedUnitId": "unit-5",
            "mappedSubjectId": "daa"
          }
        ]
      }
    },
    {
      "pairNumber": 4,
      "pairTitle": "Unit VI: Multithreaded, Distributed Algorithms & String Matching",
      "unitNumber": 6,
      "mainQuestion": {
        "questionNumber": "Q7",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q7(a)",
            "text": "Write a simple Multithreaded Matrix Multiplication Algorithm based on parallelizing relevant loops of the conventional procedure.",
            "marks": 8,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q3",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q7(b)",
            "text": "Explain Race Condition in Multithreaded Algorithms in brief.",
            "marks": 4,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q2",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q7(c)",
            "text": "What do you understand by SPAWN and SYNC keywords used in Multithreaded Programming?",
            "marks": 6,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q1",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          }
        ]
      },
      "orQuestion": {
        "questionNumber": "Q8",
        "totalMarks": 18,
        "subQuestions": [
          {
            "subNumber": "Q8(a)",
            "text": "Write a Distributed Breadth First Search (BFS) Algorithm. What is its advantage over the conventional approach?",
            "marks": 8,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q10",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          },
          {
            "subNumber": "Q8(b)",
            "text": "Write a Rabin-Karp String Matching Algorithm. The input to the algorithm is: Original text T of length n, Pattern text P being matched, of length m. What are the expected runtime and worst-case runtime of this algorithm?",
            "marks": 10,
            "unitNumber": 6,
            "unitTitle": "Multithreaded, Distributed Algorithms and String Matching",
            "mappedQuestionId": "daa-u6-q16",
            "mappedUnitId": "unit-6",
            "mappedSubjectId": "daa"
          }
        ]
      }
    }
  ]
},

  // Paper 2: November / December 2024 ([6354]-485, PC-2368)
  {
    id: 'daa-nov-2024',
    subjectId: 'daa',
    subjectName: 'Design and Analysis of Algorithms',
    subjectCode: '410241',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'November / December 2024',
    paperCode: '[6354]-485',
    paperSubCode: 'PC-2368',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Attempt Q1 or Q2, Q3 or Q4, Q5 or Q6, Q7 or Q8.',
      'Neat diagrams must be drawn wherever necessary.',
      'Assume suitable data if necessary.',
      'Figures to the right indicate full marks.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Greedy Method & Dynamic Programming',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'You are given a set of tasks, each with a deadline and a penalty for missing the deadline. The objective is to schedule these tasks in a way that minimizes the total penalty incurred. However, you can only work on one task at a time, and once a task is started, it must be completed before moving on to the next task. Additionally, you cannot start a task after its deadline has passed. Design a greedy algorithm to efficiently schedule these tasks to minimize the total penalty and prove its correctness.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q8',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Suppose we have a knapsack with a maximum weight capacity of 15 units, and we have the following items with their respective weights (Wi) and values (Vi):\nO1: Weight = 8, Value = 10\nO2: Weight = 6, Value = 8\nO3: Weight = 4, Value = 3\nO4: Weight = 2, Value = 4.\nUse greedy approach to maximize the total value of items we can put into the knapsack without exceeding its weight capacity.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q4',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q1(c)',
              text: 'With respect to dynamic programming, what do you understand by optimal substructure?',
              marks: 2,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q10',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'We are given the sequence {4, 10, 3, 12, 20, and 7}. We are given with five matrices of the size 4 × 10, 10 × 3, 3 × 12, 12 × 20, 20 × 7 respectively. Use dynamic programming to solve chain matrix multiplication.',
              marks: 10,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q17',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Under what situation do you think the dynamic programming approach for solving a knapsack problem might struggle to find the optimal solution? Briefly explain (pseudo-polynomial time complexity).',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q10',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q2(c)',
              text: 'Enlist the uses of writing control abstraction for any algorithmic strategies.',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q1',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Backtracking and Branch & Bound',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Consider a graph represented by the adjacency matrix given below with 7 vertices A to G. Use a recursive backtracking algorithm to colour this graph with three colours R, G, B.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q8',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q3(b)',
              text: 'Consider three items along with respective weights and value as: O1(Weight=10, Value=12), O2(Weight=8, Value=10), O3(Weight=6, Value=8). Assume the Knapsack capacity m = 14. Solve this 0/1 Knapsack problem using LC branch and bound method.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q19',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'We have a salesman who needs to visit four cities (A, B, C, D) and return to the starting city. The distances between these cities are: AB=10, AC=15, AD=20, BC=35, BD=25, CD=30. Find the shortest possible route that visits each city exactly once and returns to the starting city using branch and bound method, assume A as a starting point.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q17',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Write a short note on LC branch and bound method.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q15',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q4(c)',
              text: 'What are the drawbacks of branch and bound method?',
              marks: 4,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q20',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Amortized Analysis & Computational Complexity',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'What are the advantages and disadvantages of: i) Aggregate Analysis, ii) Accounting Method?',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q6',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q5(b)',
              text: 'What are approximation algorithms? Based on the approximation ratio, classify the approximation algorithms.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q16',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'Why potential function method cannot be used for analysing binary counter? Explain.',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Comment on the following statements:\ni) “The knapsack problem is NP-hard”\nii) “Boolean Satisfiability Problem (SAT) is NP-complete”\niii) “Minimum spanning tree is tractable problem”.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q9',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Multithreaded, Distributed & String Matching',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'Write a Rabin-Karp string matching algorithm. Let input to the algorithm be Original text “t” of length n and pattern text being matched is “p” of length m. What is the expected runtime and worst–case runtime of this algorithm?',
              marks: 10,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q16',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q7(b)',
              text: 'Briefly explain performance measures – speedup, efficiency, throughput, contention, and latency of multithreaded algorithms.',
              marks: 8,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q8',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Consider the graph represented by an adjacency matrix with 7 vertices A to G. Show stepwise process how the distributed breadth first search algorithm works on the above graph.',
              marks: 10,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q11',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q8(b)',
              text: 'If we have two matrices of the order m × n and n × p then what will be the time complexity of multiplying these matrices in conventional approach and in multithreaded approach? Discuss.',
              marks: 8,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q3',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            }
          ]
        }
      }
    ]
  },

  // Paper 3: April / May 2024 ([6263]-81, PB2243)
  {
    id: 'daa-april-2024',
    subjectId: 'daa',
    subjectName: 'Design and Analysis of Algorithms',
    subjectCode: '410241',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'April / May 2024',
    paperCode: '[6263]-81',
    paperSubCode: 'PB2243',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Attempt Q.1 or Q.2, Q.3 or Q.4, Q.5 or Q.6, Q.7 or Q.8.',
      'Neat diagrams must be drawn wherever necessary.',
      'Assume suitable data if necessary.',
      'Figures to the right indicate maximum marks.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Greedy Method & Dynamic Programming',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Write a control abstraction for greedy method. Comment on the time complexity of this abstraction.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q1',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Find an optimal solution for the following knapsack instance using greedy method. Number of objects n = 5, capacity of knapsack m = 100.\nO1: Weight = 20, Profit = 10\nO2: Weight = 30, Profit = 20\nO3: Weight = 66, Profit = 30\nO4: Weight = 40, Profit = 40\nO5: Weight = 60, Profit = 50.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q3',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q1(c)',
              text: 'Comment on the statement: “Problem which does not satisfy the principle of optimality cannot be solved by dynamic programming”.',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q10',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'Write a control abstraction for dynamic programming strategy. Comment on the time complexity of this abstraction.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q10',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Consider 4 matrices A1, A2, A3 and A4. The orders of these matrices are: A1 (3×5), A2 (5×4), A3 (4×2), A4 (2×4). Find the optimal sequence of chain matrix multiplication of these matrices using dynamic programming approach. Clearly give the final sequence and total number of multiplications involved.',
              marks: 10,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q16',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Backtracking and Branch & Bound',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Assume that a graph with n vertices is represented by an adjacency matrix G. Let there be “m” number of colours available. Write a recursive backtracking algorithm to colour all the vertices of the graph. What is the time complexity of this algorithm?',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q7',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q3(b)',
              text: 'Consider three items along with respective weights and values:\nO1: Weight = 5, Value = 6 (Value/Weight = 1.2)\nO2: Weight = 4, Value = 5 (Value/Weight = 1.25)\nO3: Weight = 3, Value = 4 (Value/Weight = 1.33)\nAssume the Knapsack capacity m = 7. Solve this 0/1 Knapsack problem using LC branch and bound method.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q19',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'Compare backtracking with branch and bound method with respect to: search technique, exploration of state space tree, and kind of problems that can be solved.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q20',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Consider set A of five numbers {5, 10, 15, 20, 25}. We wish to find the subset of A such that sum of the numbers is equal to 30. Solve this problem to find the first solution using backtracking approach. Show space tree being created.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q11',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Amortized Analysis & Computational Complexity',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'What are randomized algorithms? Enlist and explain in brief the primary reasons for using randomized algorithms.',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q11',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q5(b)',
              text: 'What are approximation algorithms? Based on the approximation ratio, classify the approximation algorithms.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q16',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'Explain the methods of amortized analysis. Give suitable example.',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q1',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Suppose you are working on an embedded system for a medical device that monitors patient vital signs. The device continuously collects data from various sensors and needs to process and display this information in real-time. The data includes timestamps, temperature readings, heart rate, and blood pressure measurements. Suggest suitable sorting algorithm for this scenario. Clearly justify your answer with respect to key factors.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q20',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Multithreaded, Distributed & String Matching',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'Write a Rabin-Karp string matching algorithm. Input to the algorithm be: Original text “t” of length n and pattern text being matched is “p” of length m. What is the expected runtime and worst-case runtime of this algorithm?',
              marks: 10,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q16',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q7(b)',
              text: 'Write multi-threaded merge sort algorithm. Briefly discuss how does it differ from conventional merge sort.',
              marks: 8,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Consider the graph represented by an adjacency matrix:\nA connects to B, C\nB connects to A, D, E\nC connects to A, F, G\nD connects to B\nE connects to B\nF connects to C\nG connects to C.\nShow stepwise process how the distributed breadth first search algorithm works on the above graph.',
              marks: 10,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q11',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q8(b)',
              text: 'What do you understand by spawn and sync keywords used in multithreaded programming? Explain with the help of suitable example.',
              marks: 8,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q1',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            }
          ]
        }
      }
    ]
  },

  // Paper 4: November / December 2023 ([6181]-101, P-6551)
  {
    id: 'daa-nov-2023',
    subjectId: 'daa',
    subjectName: 'Design and Analysis of Algorithms',
    subjectCode: '410241',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'November / December 2023',
    paperCode: '[6181]-101',
    paperSubCode: 'P-6551',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Answer Q1 or Q2, Q3 or Q4, Q5 or Q6, Q7 or Q8.',
      'Neat diagrams must be drawn wherever necessary.',
      'Figures to the right indicate full marks.',
      'Assume suitable data, if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Greedy Method & Dynamic Programming',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Write High-level description of job sequencing algorithm. Let number of jobs n = 5; Profit vector P = {20, 15, 10, 5, 1}; Deadline vector D = {2, 2, 1, 3, 3}. Find the feasible solutions. What is the optimal solution and maximum profit?',
              marks: 9,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q7',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Consider the following instance of the knapsack problem. Find the optimal solution by using dynamic programming approach.\nItem 1: Weight = 2, Profit = $12\nItem 2: Weight = 1, Profit = $10\nItem 3: Weight = 3, Profit = $20\nItem 4: Weight = 2, Profit = $15\nCapacity of the knapsack = 5.',
              marks: 9,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q13',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'What is Job scheduling algorithm? How job scheduling algorithm can be solved using Greedy algorithmic approach? Explain your answer with respect to Principle, control abstraction, time analysis of control abstraction, of greedy approach for the following instance of Knapsack/Job Scheduling problem:\nJobs: J1(d=2, p=60), J2(d=1, p=100), J3(d=3, p=20), J4(d=2, p=40), J5(d=1, p=20).',
              marks: 12,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q6',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Write steps for Greedy approach for Job sequencing.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q5',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Backtracking and Branch & Bound',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'What is branch and bound algorithmic strategy? Apply branch and bound algorithmic strategy to solve Traveling Salesman Problem for the 4-vertex network (Vertices 0, 1, 2, 3 with edge costs: (0,1)=10, (0,2)=15, (0,3)=20, (1,2)=35, (1,3)=25, (2,3)=30).',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q17',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q3(b)',
              text: 'Explain with suitable example Backtracking: Principle, control abstraction, time analysis of control abstraction.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q1',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'Explain the ‘branch and bound’ approach for solving problems. Write a branch and bound algorithm for solving the 0/1 Knapsack problem. Use the same algorithm to solve the 0/1 Knapsack problem with capacity 15 kg:\nItem A: Profit = 18, Weight = 9 kg\nItem B: Profit = 10, Weight = 4 kg\nItem C: Profit = 12, Weight = 6 kg\nItem D: Profit = 10, Weight = 2 kg.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q19',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q4(b)',
              text: 'What is sum of subset problem? Solve sum of subset problem for following instance using backtracking approach:\nInput: set[] = {2, 3, 5, 6, 8, 10}, sum = 10.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q10',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Amortized Analysis & Computational Complexity',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'What is amortized analysis? Explain the aggregate method with example.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q2',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q5(b)',
              text: 'What is Potential function method of amortized analysis? To illustrate Potential method, find amortized cost of PUSH, POP and MULTIPOP stack operations.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q4',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'What are special needs of embedded algorithm? Which sorting algorithm is best for embedded systems? Why?',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q19',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Explain Randomized and Approximate algorithms.',
              marks: 4,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q11',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q6(c)',
              text: 'What is randomized algorithm? Give any example of randomized algorithm? Also explain Random variable, Binomial random variable and Mathematics for Randomized algorithm.',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q11',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Multithreaded, Distributed & String Matching',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'i) Explain an algorithm for Distributed Minimum Spanning Tree (GHS algorithm).\nii) Write and explain Rabin-Karp algorithm for string matching.',
              marks: 10,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q12',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q7(b)',
              text: 'With respect to Multithreaded Algorithms explain Analyzing multithreaded algorithms, Parallel loops, Race conditions.',
              marks: 7,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q2',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Write and explain pseudo code for Multi-threaded merge sort algorithm. How parallel merging gives a significant parallelism advantage over Merge Sort?',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q8(b)',
              text: 'For string matching, working module q = 11, how many spurious hits does the Rabin-Karp matcher encounters in Text T = 3141592653589793 and Pattern P = 26? Compute hashes and find the exact match.',
              marks: 8,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q18',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            }
          ]
        }
      }
    ]
  },

  // Paper 5: April / May 2023 ([6004]-480A, P3147)
  {
    id: 'daa-april-2023',
    subjectId: 'daa',
    subjectName: 'Design and Analysis of Algorithms',
    subjectCode: '410241',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'April / May 2023',
    paperCode: '[6004]-480A',
    paperSubCode: 'P3147',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Solve Q.1 or Q.2, Q.3 or Q.4, Q.5 or Q.6, Q.7 or Q.8.',
      'Neat diagrams must be drawn wherever necessary.',
      'Figures to the right indicate full marks.',
      'Assume suitable data, if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Greedy Method & Dynamic Programming',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Consider the following instance of the knapsack problem. Find the optimal solution by using dynamic programming approach.\nItem 1: Weight = 2, Profit = $12\nItem 2: Weight = 1, Profit = $10\nItem 3: Weight = 3, Profit = $20\nItem 4: Weight = 2, Profit = $15\nCapacity of the knapsack = 5.',
              marks: 10,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q13',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q1(b)',
              text: 'What is job scheduling algorithm? How job scheduling algorithm can be solved using Greedy algorithmic approach? Explain your answer with respect to Principle, control abstraction, time analysis of control abstraction, of greedy approach for the following instance of jobs with deadlines and profits:\nJ1 (d=2, p=60), J2 (d=1, p=100), J3 (d=3, p=20), J4 (d=2, p=40), J5 (d=1, p=20).',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q6',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'What is greedy approach? Explain Job scheduling algorithm using Greedy approach for following examples. Give the sequence of job scheduling.\nExample 1 (Four jobs): a(d=4, p=20), b(d=1, p=10), c(d=1, p=40), d(d=1, p=30).\nExample 2 (Five jobs): a(d=2, p=100), b(d=1, p=19), c(d=2, p=27), d(d=1, p=25), e(d=3, p=15).',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q7',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q2(b)',
              text: 'What is optimal binary search tree? How dynamic programming approach is used to build OBST for the following table:\nKeys: 1, 2, 3, 4 with values 10, 20, 30, 40\nFrequencies: 4, 2, 6, 3.',
              marks: 10,
              unitNumber: 3,
              unitTitle: 'Greedy Method and Dynamic Programming',
              mappedQuestionId: 'daa-u3-q19',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Backtracking and Branch & Bound',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Explain with suitable example Backtracking: Principle, control abstraction, time analysis of control abstraction.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q1',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q3(b)',
              text: 'Compare between greedy method and dynamic programming with respect to: i) Feasibility, ii) Optimality, iii) Recursion, iv) Memorization, v) Time complexity.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u3-q11',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'What is sum of subset problem? Solve sum of subset problem for following instance using backtracking approach:\nInput: set[] = {2, 3, 5, 6, 8, 10}, target sum = 10.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q10',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q4(b)',
              text: 'What is Branch and Bound method? Write control abstraction for Least cost (LC) search.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Backtracking and Branch & Bound',
              mappedQuestionId: 'daa-u4-q15',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Amortized Analysis & Computational Complexity',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'What is amortized analysis? Explain aggregate and potential function methods used for amortized analysis with respect to stack operations.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q1',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q5(b)',
              text: 'What is potential function method of amortized analysis? To illustrate potential method, find amortized cost of PUSH, POP and MULTIPOP stack operations.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q4',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'Write short notes on the following:\ni) Aggregate analysis\nii) Accounting Analysis\niii) Potential function method\niv) Tractable and Non-tractable problems.',
              marks: 10,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q6',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Write short notes on with suitable example of each:\ni) Randomized algorithm\nii) Approximation algorithm.',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Amortized Analysis, Computational Complexity and Approximation',
              mappedQuestionId: 'daa-u5-q11',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'daa'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Multithreaded, Distributed & String Matching',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'Write and explain pseudo code for multi-threaded merge sort algorithm. How parallel merging gives a significant parallelism advantage over merge sort?',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q7(b)',
              text: 'i) Explain an algorithm for Distributed Minimum Spanning Tree (GHS algorithm). [8M]\nii) Write and explain Rabin-Karp algorithm for string matching. [8M]',
              marks: 8,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q12',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Write short notes on the following:\ni) Multithreaded matrix multiplication\nii) Multithreaded merge sort\niii) Distributed breadth first search\niv) The Rabin-Karp algorithm.',
              marks: 10,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q3',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            },
            {
              subNumber: 'Q8(b)',
              text: 'With respect to Multithreaded Algorithms explain Analyzing multithreaded algorithms, Parallel loops, Race conditions.',
              marks: 7,
              unitNumber: 6,
              unitTitle: 'Multithreaded and Distributed Algorithms, and String Matching',
              mappedQuestionId: 'daa-u6-q2',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'daa'
            }
          ]
        }
      }
    ]
  }
];
