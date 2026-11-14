import { Unit } from '@/types';

export const unit4Data: Unit = {
  id: 'unit-4',
  unitNumber: 4,
  title: 'Supervised Learning — Classification',
  shortTitle: 'Classification',
  description: 'Comprehensive study of K-Nearest Neighbours, Support Vector Machines (Hyperplanes, Margins, Kernels, SVR), Ensemble Learning (Bagging, Boosting, Random Forest, AdaBoost), Multiclass strategies (OvA, OvO), Imbalance handling, and Classification Metrics (Accuracy, Precision, Recall, F1, K-Fold CV, Micro/Macro averages).',
  syllabus: [
    'K-Nearest Neighbour (KNN) & Distance Metrics (Euclidean, Manhattan, Minkowski, Hamming)',
    'Support Vector Machine (SVM): Separating Hyperplanes, Margin Maximization, Support Vectors',
    'Kernel Methods & Trick (Linear, Polynomial, RBF/Gaussian, Sigmoid)',
    'Support Vector Regression (SVR) & ε-insensitive tube',
    'Ensemble Learning: Simple (Voting, Averaging) & Advanced (Bagging, Boosting, Stacking)',
    'Random Forest & AdaBoost Algorithms',
    'Binary vs Multiclass Classification (One-vs-All, One-vs-One, ECOC)',
    'Balanced vs Imbalanced Classification (SMOTE, Resampling, Cost-sensitive)',
    'Outlier Detection (IQR, Z-score) and Handling',
    'Evaluation Metrics: Confusion Matrix, Accuracy, Precision, Recall, F-Score, Specificity',
    'Precision-Recall Trade-off and ROC-AUC',
    'K-Fold Cross-Validation & LOOCV',
    'Micro-average vs Macro-average Metrics'
  ],
  questionPaperIndex: [
    { paper: 'Paper 1', qMain: '(a) → Q7, (b) → Q8 + Q10, (c) → Q14', qOr: '(a) → Q22, (b) → Q11, Q12, (c) → Q1' },
    { paper: 'Paper 2', qMain: '(a) → Q17, (b) → Q4, (c) → Q9', qOr: '(a) → Q11, (b) → Q18, (c) → Q5' },
    { paper: 'Paper 3', qMain: '(a) → Q13, (b) → Q8, (c) → Q17', qOr: '(a) → Q1, (b) → Q15, (c) → Q10' },
    { paper: 'Paper 4', qMain: '(a) → Q8, (b) → Q2, (c) → Q3', qOr: 'Unit III Revision (R², Least Squares, SGD)' },
    { paper: 'Paper 5', qMain: '(a) → Q6, (b) → Q2, (c) → Q3', qOr: '(a) → Q14, (b) → Q16, (c) → Q11' },
    { paper: 'Paper 6', qMain: '(a) → Q10, (b) → Q8 + Q11, (c) → Q20', qOr: '(a) → Q21, (b) → Q19' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'K-Nearest Neighbour (KNN)', definition: 'Lazy, instance-based, non-parametric classifier assigning a query point to the majority class among its K closest training points.' },
      { term: 'Support Vector Machine (SVM)', definition: 'Maximum-margin classifier finding an optimal hyperplane w·x + b = 0 that maximizes separation gap 2/||w|| between opposing classes.' },
      { term: 'Support Vectors', definition: 'The critical training instances lying directly on the margin boundaries; they alone dictate the mathematical location of the decision hyperplane.' },
      { term: 'Kernel Trick', definition: 'Implicitly computing inner dot products in a high-dimensional feature space K(x, z) = Φ(x)·Φ(z) without explicitly calculating coordinate transformations.' },
      { term: 'Bagging (Bootstrap Aggregating)', definition: 'Parallel ensemble training diverse base learners on bootstrap data subsets and combining predictions via majority vote or averaging to reduce variance.' },
      { term: 'Boosting', definition: 'Sequential ensemble training weak learners iteratively, each adjusting sample weights to concentrate on earlier classification errors to reduce bias.' },
      { term: 'Random Forest', definition: 'Ensemble of unpruned decision trees combining bagging with random feature subspace sampling at every split.' },
      { term: 'F1-Score', definition: 'Harmonic mean of precision and recall: 2·(Precision·Recall) / (Precision + Recall), ideal for imbalanced class distributions.' }
    ],
    coreFormulas: [
      { name: 'Euclidean Distance', latex: 'd(x, y) = \\sqrt{\\sum_{i=1}^{n}(x_i - y_i)^2}' },
      { name: 'Manhattan Distance', latex: 'd(x, y) = \\sum_{i=1}^{n}|x_i - y_i|' },
      { name: 'Minkowski Distance', latex: 'd(x, y) = \\Big(\\sum_{i=1}^{n}|x_i - y_i|^p\\Big)^{1/p}' },
      { name: 'SVM Hyperplane & Margin', latex: 'w\\cdot x + b = 0, \\quad \\text{Margin} = \\frac{2}{\\|w\\|}' },
      { name: 'RBF (Gaussian) Kernel', latex: 'K(x, z) = \\exp\\big(-\\gamma \\|x - z\\|^2\\big)' },
      { name: 'Accuracy', latex: '\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}' },
      { name: 'Precision', latex: '\\text{Precision} = \\frac{TP}{TP + FP}' },
      { name: 'Recall (Sensitivity)', latex: '\\text{Recall} = \\frac{TP}{TP + FN}' },
      { name: 'F1-Score', latex: 'F_1 = \\frac{2 \\cdot P \\cdot R}{P + R}' },
      { name: 'Macro-Average Metric', latex: '\\text{Macro-M} = \\frac{1}{C}\\sum_{c=1}^{C} M_c' },
      { name: 'Micro-Average Precision', latex: '\\text{Micro-P} = \\frac{\\sum TP_c}{\\sum TP_c + \\sum FP_c}' }
    ],
    comparisonHighlights: [
      { title: 'Bagging vs Boosting', summary: 'Bagging trains learners in parallel to cut variance (Random Forest). Boosting trains sequentially to cut bias (AdaBoost, XGBoost).' },
      { title: 'One-vs-All (OvR) vs One-vs-One (OvO)', summary: 'OvA builds N classifiers (1 class vs Rest, fast). OvO builds N(N-1)/2 classifiers (pair vs pair, balanced, slower).' },
      { title: 'Precision vs Recall', summary: 'High precision avoids false alarms (spam filter). High recall avoids missing true positives (cancer detection).' },
      { title: 'Macro vs Micro Average', summary: 'Macro treats all classes equally (sensitive to minority class issues). Micro pools all samples (dominated by majority class).' }
    ],
    examTips: [
      'In KNN numerical questions, calculate Euclidean distance step-by-step for all points, rank them, select the top K, and state the majority vote.',
      'For SVM, always draw the decision hyperplane, dashed margin boundaries, and circle the support vectors.',
      'In Multiclass confusion matrix calculations, remember: Precision = diagonal / column sum, Recall = diagonal / row sum.'
    ]
  },
  questions: [
    {
      id: 'ml-u4-q1',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 1,
      title: 'Explain K-Nearest Neighbour (KNN) Algorithm with Example',
      shortTitle: 'KNN Algorithm & Example',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(c)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['K-Nearest Neighbour', 'Lazy Learner', 'Euclidean Distance', 'Majority Voting'],
      definition: 'K-Nearest Neighbour (KNN) is a simple, supervised Machine Learning algorithm used for classification and regression. It predicts the class of a new data point based on the majority class of its K closest neighbours.',
      sections: [
        {
          title: '1. How the KNN Algorithm Works',
          content: [
            'KNN is a lazy learner (instance-based learner), meaning it does not build a model during training. It memorizes the training data and performs calculations when a new prediction is requested.',
            'Step 1: Choose the value of K (number of nearest neighbours, usually an odd number like 3 or 5).',
            'Step 2: Calculate the distance between the query data point and all training data points using a distance metric (such as Euclidean distance).',
            'Step 3: Sort the calculated distances in ascending order.',
            'Step 4: Select the first K data points with the smallest distances.',
            'Step 5: Count how many neighbours belong to each class.',
            'Step 6: Assign the majority class as the final prediction for the new data point.'
          ],
          formulas: [
            {
              name: 'Euclidean Distance Formula',
              latex: 'd(x, y) = \\sqrt{\\sum_{i=1}^{n} (x_i - y_i)^2}'
            }
          ]
        },
        {
          title: '2. Practical Example of KNN (Pass / Fail Prediction)',
          content: [
            'Suppose we want to predict whether a student will Pass or Fail based on Internal marks (scale 1-10) and External marks (scale 1-10).',
            'Let K = 3, and the new student has Internal = 3 and External = 7.',
            'We compute the Euclidean distance from the new student (3, 7) to each student in the training set:',
            '- S1 (7, 7): Distance = sqrt((7-3)^2 + (7-7)^2) = sqrt(16 + 0) = 4.00 (Pass)',
            '- S2 (7, 4): Distance = sqrt((7-3)^2 + (4-7)^2) = sqrt(16 + 9) = 5.00 (Pass)',
            '- S3 (3, 4): Distance = sqrt((3-3)^2 + (4-7)^2) = sqrt(0 + 9) = 3.00 (Fail)',
            '- S4 (1, 4): Distance = sqrt((1-3)^2 + (4-7)^2) = sqrt(4 + 9) = 3.61 (Fail)'
          ],
          table: {
            headers: ['Student', 'Internal', 'External', 'Status', 'Distance to (3, 7)'],
            rows: [
              { parameter: 'S3', col1: '3', col2: '4', col3: 'Fail', col4: '3.00 (Closest)' },
              { parameter: 'S4', col1: '1', col2: '4', col3: 'Fail', col4: '3.61 (2nd Closest)' },
              { parameter: 'S1', col1: '7', col2: '7', col3: 'Pass', col4: '4.00 (3rd Closest)' },
              { parameter: 'S2', col1: '7', col2: '4', col3: 'Pass', col4: '5.00' }
            ]
          }
        },
        {
          title: '3. Final Classification Decision',
          content: [
            'The 3 nearest neighbours to (3, 7) are S3 (Fail), S4 (Fail), and S1 (Pass).',
            'Votes tally: Fail = 2 votes, Pass = 1 vote.',
            'Result: By majority voting, the new student is predicted to FAIL.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-knn-decision',
          title: 'KNN Decision Boundary (K = 3)',
          caption: 'Query star point surrounded by search radius enclosing 2 Fail points and 1 Pass point.',
          type: 'svg-interactive',
          svgType: 'knn-decision'
        }
      ],
      summary: [
        'KNN classifies a new instance using the majority vote of its K closest neighbours.',
        'It is a lazy learner: zero training time, all computation occurs at test time.',
        'Euclidean distance is the most common metric used.',
        'Choosing an odd value of K prevents tie votes in two-class problems.'
      ],
      keyPoints: [
        'Lazy / Instance-based learning',
        'Euclidean distance metric',
        'Majority voting rule',
        'Odd K selection'
      ]
    },
    {
      id: 'ml-u4-q2',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 2,
      title: 'Advantages and Disadvantages of KNN',
      shortTitle: 'KNN Advantages & Disadvantages',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q4(c)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q4(c)', marks: 6 }
      ],
      syllabusTopics: ['KNN Pros & Cons', 'Lazy Learning', 'Computational Complexity', 'Curse of Dimensionality'],
      definition: 'K-Nearest Neighbour (KNN) is an intuitive non-parametric algorithm that memorizes training data and predicts based on distance, offering great simplicity alongside noticeable computational limitations.',
      sections: [
        {
          title: '1. Advantages and Disadvantages of KNN',
          content: [
            'The key strengths and limitations of the KNN algorithm in university examinations are summarized below:'
          ],
          table: {
            headers: ['Advantages of KNN (Strengths)', 'Disadvantages of KNN (Weaknesses)'],
            rows: [
              {
                parameter: 'Simple to understand and implement: Requires no complex mathematical model assumptions or iterative training.',
                col1: 'Slow prediction speed: Every prediction requires computing distances to all training points, which is slow for large datasets.'
              },
              {
                parameter: 'Zero training time: As a lazy learner, new training data can be added immediately without retraining.',
                col1: 'High memory usage: The entire training dataset must be permanently stored in memory (RAM).'
              },
              {
                parameter: 'Handles non-linear data well: Naturally adapts to complex decision boundaries without needing linear separation.',
                col1: 'Sensitive to feature scale: Inaccurate if features are not normalized, as large numbers dominate distance calculations.'
              },
              {
                parameter: 'Versatile: Can be applied to both classification (majority vote) and regression (average of neighbours).',
                col1: 'Curse of Dimensionality: Distance metrics lose meaning in high dimensions, causing accuracy to degrade.'
              }
            ]
          }
        }
      ],
      summary: [
        'Advantages: Zero training time, simple to implement, handles non-linear boundaries.',
        'Disadvantages: High memory footprint, slow testing time, sensitive to feature scaling.',
        'Best suited for small, clean datasets with scaled numerical features.'
      ],
      keyPoints: [
        'Zero training time',
        'Slow prediction time O(N)',
        'Feature scaling requirement',
        'Curse of dimensionality'
      ]
    },
    {
      id: 'ml-u4-q3',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 3,
      title: 'Distance Metrics Used in KNN',
      shortTitle: 'Distance Metrics in KNN (Euclidean, Manhattan, Minkowski, Hamming)',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q3(c)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q3(c)', marks: 6 }
      ],
      syllabusTopics: ['Euclidean Distance', 'Manhattan Distance', 'Minkowski Distance', 'Hamming Distance'],
      definition: 'Distance metrics are mathematical functions used in Machine Learning to quantify the geometric dissimilarity or closeness between two data points in an n-dimensional feature space.',
      sections: [
        {
          title: '1. What are Distance Metrics in KNN?',
          content: [
            'Definition: Distance metrics calculate the numerical distance between the feature vector of an unlabelled query point and all stored training samples.',
            'In simple words:',
            'Distance metrics tell the KNN algorithm which training examples are closest neighbors so it can make an accurate majority-vote prediction.',
            'Crucial Requirement: All continuous features must be normalized (e.g., Min-Max scaling or Z-score standardization) before computing distances so that large-scale features do not overpower small-scale features.'
          ]
        },
        {
          title: '2. Four Primary Distance Metrics in KNN (2-Column Comparison)',
          table: {
            headers: ['Distance Metric & Mathematical Formula', 'Core Properties, Geometry & Best Used When'],
            rows: [
              {
                parameter: 'Euclidean Distance (L2 norm): d(x, y) = √[ ∑(xᵢ - yᵢ)² ]',
                col1: 'Calculates the straight-line shortest distance between two points; standard default choice for continuous numerical features; highly sensitive to unscaled features and extreme outliers.'
              },
              {
                parameter: 'Manhattan Distance (L1 norm / City-Block): d(x, y) = ∑ |xᵢ - yᵢ|',
                col1: 'Calculates distance traveled along grid-like right-angle city blocks (sum of absolute coordinate differences); more robust to outliers than Euclidean; preferred for high-dimensional or grid-based data.'
              },
              {
                parameter: 'Minkowski Distance (Lp norm): d(x, y) = [ ∑ |xᵢ - yᵢ|^p ]^(1/p)',
                col1: 'Generalized vector distance metric parameterized by p; when p = 1, it becomes Manhattan distance; when p = 2, it becomes Euclidean distance.'
              },
              {
                parameter: 'Hamming Distance: d(x, y) = ∑ I(xᵢ ≠ yᵢ)',
                col1: 'Calculates the total count of positions where two vectors differ; specifically designed for categorical attributes, text comparison, and binary/boolean bitstrings.'
              }
            ]
          }
        },
        {
          title: '3. Step-by-Step Concrete Numerical Example',
          content: [
            'Given two 2D student exam coordinate points: Student A = (1, 2) and Student B = (4, 6):',
            '• Euclidean Distance: d = √[(4 - 1)² + (6 - 2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5.0 units.',
            '• Manhattan Distance: d = |4 - 1| + |6 - 2| = 3 + 4 = 7.0 units.',
            '• Minkowski Distance (for p = 3): d = [|3|³ + |4|³]^(1/3) = [27 + 64]^(1/3) = (91)^(1/3) ≈ 4.50 units.',
            '• Hamming Distance (Binary vectors: A = 1011, B = 1110): Positions 2 and 4 differ ==> Hamming Distance = 2.'
          ]
        }
      ],
      summary: [
        'Euclidean measures straight-line distance (default for continuous features).',
        'Manhattan sums absolute deviations; Minkowski generalizes both through parameter p.',
        'Hamming counts bit/categorical mismatches for discrete attributes.',
        'Feature standardization is mandatory prior to distance calculation.'
      ],
      keyPoints: [
        'L1 (Manhattan) vs L2 (Euclidean) norms',
        'Generalized Minkowski metric with parameter p',
        'Hamming metric for discrete/categorical data',
        'Feature scaling requirement'
      ]
    },
    {
      id: 'ml-u4-q4',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 4,
      title: 'Numerical: KNN to Predict Pass/Fail for Physics = 6, Chemistry = 8, K = 3',
      shortTitle: 'Solved Numerical: KNN Pass/Fail Classification',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q3(b)', marks: 6 }
      ],
      syllabusTopics: ['KNN Numerical', 'Euclidean Distance', 'Majority Voting'],
      definition: 'Step-by-step classification of a test candidate using Euclidean distance calculation and majority voting in a 2D feature space.',
      sections: [
        {
          title: '1. Problem Statement',
          content: [
            'Training dataset of students with Physics and Chemistry exam marks and outcome:',
            'Test point: Physics P₀ = 6, Chemistry C₀ = 8. Hyperparameter K = 3.'
          ]
        },
        {
          title: '2. Distance Calculation Table',
          content: [
            'Euclidean distance formula: d = √[(Physics - 6)² + (Chemistry - 8)²]'
          ],
          table: {
            headers: ['Student Data (P, C)', 'Step-by-step Distance Calculation', 'Distance d', 'Rank', 'Actual Result'],
            rows: [
              { parameter: 'Student 1: (4, 3)', col1: '√[(4-6)² + (3-8)²] = √[4 + 25] = √29', col2: '5.39', col3: 'Rank 5', col4: 'Fail' },
              { parameter: 'Student 2: (6, 7)', col1: '√[(6-6)² + (7-8)²] = √[0 + 1] = √1', col2: '1.00', col3: 'Rank 1 (Tie)', col4: 'Pass' },
              { parameter: 'Student 3: (7, 8)', col1: '√[(7-6)² + (8-8)²] = √[1 + 0] = √1', col2: '1.00', col3: 'Rank 2 (Tie)', col4: 'Pass' },
              { parameter: 'Student 4: (5, 5)', col1: '√[(5-6)² + (5-8)²] = √[1 + 9] = √10', col2: '3.16', col3: 'Rank 4', col4: 'Fail' },
              { parameter: 'Student 5: (8, 8)', col1: '√[(8-6)² + (8-8)²] = √[4 + 0] = √4', col2: '2.00', col3: 'Rank 3', col4: 'Pass' }
            ]
          }
        },
        {
          title: '3. Final Classification Decision',
          content: [
            'For K = 3, the three nearest training points are (6, 7), (7, 8), and (8, 8) with distances 1.00, 1.00, and 2.00.',
            'All three neighbours belong to class PASS.',
            'Vote Count: Pass = 3, Fail = 0.',
            'Final Answer: The student with Physics = 6 and Chemistry = 8 is predicted to PASS.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Use K-Nearest Neighbours (K = 3) to predict Pass/Fail outcome for a student with Physics = 6, Chemistry = 8.',
        givenData: [
          { label: 'Hyperparameter K', value: '3' },
          { label: 'Query Point (P₀, C₀)', value: '(6, 8)' },
          { label: 'Distance Metric', value: 'Euclidean distance (L2 norm)' },
          { label: 'Training Size', value: '5 student records' }
        ],
        toFind: [
          'Euclidean distance from query point (6, 8) to all 5 training points',
          'Ascending distance ranking of instances',
          'Selection of top K = 3 nearest neighbors',
          'Majority voting decision for Pass vs Fail'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Recall Euclidean Distance Formula',
            explanation: 'In 2D feature space (Physics and Chemistry marks), the Euclidean distance between candidate (P_i, C_i) and query point (P₀, C₀) is given by the Pythagorean theorem.',
            formula: 'd_i = \\sqrt{(P_i - P_0)^2 + (C_i - C_0)^2} = \\sqrt{(P_i - 6)^2 + (C_i - 8)^2}',
            tip: 'Always state the distance formula before plugging in values for each candidate in university exams.'
          },
          {
            stepNumber: 2,
            title: 'Calculate Distance to Each Training Instance',
            explanation: 'Compute the squared differences for both features, sum them, and take the square root for each of the 5 students.',
            table: {
              headers: ['Student', 'Physics (P)', 'Chemistry (C)', 'Working (ΔP² + ΔC²)', 'Distance d'],
              rows: [
                ['Student 1', '4', '3', '(4-6)² + (3-8)² = 4 + 25 = 29', '√29 ≈ 5.39'],
                ['Student 2', '6', '7', '(6-6)² + (7-8)² = 0 + 1 = 1', '√1 = 1.00'],
                ['Student 3', '7', '8', '(7-6)² + (8-8)² = 1 + 0 = 1', '√1 = 1.00'],
                ['Student 4', '5', '5', '(5-6)² + (5-8)² = 1 + 9 = 10', '√10 ≈ 3.16'],
                ['Student 5', '8', '8', '(8-6)² + (8-8)² = 4 + 0 = 4', '√4 = 2.00']
              ]
            },
            result: 'Distances: [5.39, 1.00, 1.00, 3.16, 2.00]',
            tip: 'Keep both exact radical form (√29, √10) and decimal approximations (5.39, 3.16) for clarity.'
          },
          {
            stepNumber: 3,
            title: 'Rank Candidates by Proximity',
            explanation: 'Sort the training candidates in ascending order of distance d to determine the closest neighbors.',
            table: {
              headers: ['Rank', 'Student', 'Distance d', 'Label / Outcome'],
              rows: [
                ['1 (Tie)', 'Student 2 (6, 7)', '1.00', 'Pass'],
                ['2 (Tie)', 'Student 3 (7, 8)', '1.00', 'Pass'],
                ['3', 'Student 5 (8, 8)', '2.00', 'Pass'],
                ['4', 'Student 4 (5, 5)', '3.16', 'Fail'],
                ['5', 'Student 1 (4, 3)', '5.39', 'Fail']
              ]
            },
            result: 'Top 3 nearest: Student 2 (d=1.00), Student 3 (d=1.00), Student 5 (d=2.00)'
          },
          {
            stepNumber: 4,
            title: 'Select Top-K Neighbours (K = 3)',
            explanation: 'Extract the first K = 3 records from the sorted proximity ranking table.',
            calculation: 'Neighbor 1: Student 2 -> Distance = 1.00 -> Outcome = PASS\nNeighbor 2: Student 3 -> Distance = 1.00 -> Outcome = PASS\nNeighbor 3: Student 5 -> Distance = 2.00 -> Outcome = PASS',
            result: 'Three neighbors selected: All 3 have label PASS',
            tip: 'If there had been a tie for the 3rd rank, state your tie-breaking rule (e.g., picking the point with lower index or smallest single-feature difference).'
          },
          {
            stepNumber: 5,
            title: 'Majority Voting & Final Prediction',
            explanation: 'Count the class votes among the 3 nearest neighbors and assign the majority class to the query student.',
            calculation: 'Votes for PASS: 3\nVotes for FAIL: 0\nMajority Winner: PASS (100% consensus)',
            result: 'Predicted Class: PASS',
            tip: 'Always state the vote breakdown explicitly (e.g. 3 : 0) rather than just stating the final label.'
          }
        ],
        finalAnswer: {
          label: 'KNN (K = 3) Prediction',
          value: 'PASS (Unanimous 3-0 Majority Vote)',
          interpretation: 'The student with marks (Physics=6, Chemistry=8) is nearest to three successful candidates with minimal distances of 1.00, 1.00, and 2.00. Therefore, the predicted classification is PASS.'
        }
      },
      summary: [
        'Calculated Euclidean distances from (6, 8): 5.39, 1.00, 1.00, 3.16, 2.00.',
        'Top 3 neighbours are students with distances 1.00, 1.00, and 2.00.',
        'All 3 closest neighbours passed (3 Pass vs 0 Fail).',
        'Predicted result: PASS.'
      ],
      keyPoints: [
        'Distance computation tabular layout',
        'Top-K ranking procedure',
        'Unanimous majority vote outcome (3:0)',
        'Definitive PASS prediction'
      ]
    },
    {
      id: 'ml-u4-q5',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 5,
      title: 'SVM Terms: Separating Hyperplane and Margin',
      shortTitle: 'SVM Hyperplane & Margin',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q4(b)', marks: 6 }
      ],
      syllabusTopics: ['SVM', 'Separating Hyperplane', 'Margin', 'Support Vectors'],
      definition: 'Support Vector Machine (SVM) is a supervised learning algorithm that finds an optimal decision boundary (hyperplane) to separate different classes with the maximum possible margin.',
      sections: [
        {
          title: '1. Important Terms in Support Vector Machine',
          content: [
            '1. Hyperplane: A decision boundary that separates data points of different classes. In 2D space it is a line, in 3D it is a plane, and in higher dimensions it is a hyperplane (w^T x + b = 0).',
            '2. Margin: The distance between the separating hyperplane and the closest data points of any class.',
            '3. Support Vectors: The data points that lie closest to the decision boundary. Only these points determine the position and orientation of the hyperplane.',
            '4. Optimal (Maximum Margin) Hyperplane: The unique hyperplane that leaves the maximum distance to the nearest training points of each class. A larger margin provides better generalization on unseen data.'
          ]
        },
        {
          title: '2. Mathematical Formulation of Margin',
          content: [
            'The linear hyperplane is defined by: w^T x + b = 0',
            'The total margin width between the positive and negative margin boundaries is: M = 2 / ||w||',
            'Maximizing the margin width is mathematically equivalent to minimizing 1/2 ||w||^2 subject to y_i (w^T x_i + b) >= 1.'
          ],
          formulas: [
            {
              name: 'Margin Width Formula',
              latex: '\\text{Margin Width } M = \\frac{2}{\\|w\\|}'
            }
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-svm-hyperplane',
          title: 'SVM Separating Hyperplane, Margin, and Support Vectors',
          caption: 'Optimal hyperplane maximizing the margin between positive and negative support vectors.',
          type: 'svg-interactive',
          svgType: 'svm-hyperplane'
        }
      ],
      summary: [
        'Hyperplane is the decision boundary separating classes.',
        'Margin is the distance between the hyperplane and the nearest data points.',
        'Support vectors are the critical points that define the margin.',
        'SVM maximizes the margin width (2 / ||w||) to reduce overfitting.'
      ],
      keyPoints: [
        'Separating Hyperplane',
        'Margin Maximization',
        'Support Vectors',
        'Margin Width = 2 / ||w||'
      ]
    },
    {
      id: 'ml-u4-q6',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 6,
      title: 'Kernel Methods Suitable for SVM',
      shortTitle: 'Kernel Methods in SVM',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q4(b)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q4(b)', marks: 6 }
      ],
      syllabusTopics: ['Kernel Trick', 'Linear Kernel', 'Polynomial Kernel', 'RBF Kernel', 'Sigmoid Kernel'],
      definition: 'Kernel methods are mathematical functions that allow SVM to classify non-linearly separable data by mapping it into a higher-dimensional space where it becomes linearly separable.',
      sections: [
        {
          title: '1. What is the Kernel Trick?',
          content: [
            'When data cannot be separated by a straight line or flat hyperplane in its original space, we project it into a higher-dimensional space.',
            'The Kernel Trick computes the relationship (inner product) between points in higher dimensions directly using original coordinates: K(x, z) = phi(x)^T phi(z).',
            'This avoids explicitly computing the expensive high-dimensional coordinates, saving substantial computational time and memory.'
          ]
        },
        {
          title: '2. Commonly Used Kernels in SVM',
          content: [
            '1. Linear Kernel: Used when data is already linearly separable. Fast and simple. Formula: K(x, z) = x^T z.',
            '2. Polynomial Kernel: Computes polynomial relationships up to degree d. Captures feature interactions. Formula: K(x, z) = (x^T z + c)^d.',
            '3. Radial Basis Function (RBF / Gaussian) Kernel: Maps data into an infinite-dimensional space. The most popular default choice for non-linear data. Formula: K(x, z) = exp(-gamma * ||x - z||^2).',
            '4. Sigmoid Kernel: Mimics a two-layer neural network. Formula: K(x, z) = tanh(alpha * x^T z + c).'
          ],
          formulas: [
            { name: 'Linear Kernel', latex: 'K(x, z) = x^T z' },
            { name: 'Polynomial Kernel', latex: 'K(x, z) = (x^T z + c)^d' },
            { name: 'RBF Kernel', latex: 'K(x, z) = \\exp(-\\gamma \\|x - z\\|^2)' }
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-kernel-trick',
          title: 'Kernel Trick: 2D Non-Linear to 3D Linear Separation',
          caption: 'Non-linearly separable concentric rings in 2D mapped into 3D where a flat plane separates them cleanly.',
          type: 'svg-interactive',
          svgType: 'kernel-trick'
        }
      ],
      summary: [
        'Kernel methods enable SVM to handle non-linearly separable data.',
        'The Kernel Trick computes inner products in high dimensions without explicit mapping.',
        'Common kernels: Linear, Polynomial, RBF (Gaussian), and Sigmoid.',
        'RBF is the most widely used kernel for general non-linear classification.'
      ],
      keyPoints: [
        'Kernel Trick',
        'Implicit high-dimensional mapping',
        'RBF / Gaussian Kernel',
        'Computational efficiency'
      ]
    },
    {
      id: 'ml-u4-q7',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 7,
      title: 'Explain with Example the Variant of SVM: Support Vector Regression (SVR)',
      shortTitle: 'Support Vector Regression (SVR)',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q3(b)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q3(b)', marks: 6 }
      ],
      syllabusTopics: ['SVR', 'Epsilon-tube', 'Slack Variables', 'Loss Function'],
      definition: 'Support Vector Regression (SVR) is an adaptation of SVM for regression problems that predicts continuous numerical values instead of discrete classes.',
      sections: [
        {
          title: '1. How Support Vector Regression (SVR) Works',
          content: [
            'Unlike traditional regression that tries to minimize error for every single point, SVR defines an epsilon-insensitive tube (margin of tolerance) around the regression line.',
            '1. Points within distance epsilon from the line carry ZERO penalty (loss = 0).',
            '2. Only data points outside the epsilon-tube are penalized with error distances (slack variables xi).',
            '3. SVR balances finding a flat regression line with minimizing errors outside the tube, controlled by regularization parameter C.',
            '4. Points on or outside the tube boundaries act as the support vectors.'
          ]
        },
        {
          title: '2. Difference Between Linear Regression (OLS) and SVR',
          table: {
            headers: ['Linear Regression (OLS)', 'Support Vector Regression (SVR)'],
            rows: [
              {
                parameter: 'Squares all prediction errors (squared error loss), making it very sensitive to outliers.',
                col1: 'Uses epsilon-insensitive loss; ignores errors smaller than epsilon, making it robust to outliers.'
              },
              {
                parameter: 'All training data points equally influence the fitted regression line.',
                col1: 'Only points on or outside the margin boundaries (support vectors) influence the model.'
              },
              {
                parameter: 'Can only model linear patterns unless manual polynomial features are created.',
                col1: 'Natively models complex non-linear curves using kernel functions (such as RBF).'
              }
            ]
          }
        },
        {
          title: '3. Practical Example of SVR',
          content: [
            'Suppose we are predicting House Prices based on square footage.',
            'We set an allowable error margin epsilon = $5,000.',
            'If an actual house price is $200,000 and the model predicts $203,000 (error = $3,000), SVR treats this error as 0 because it falls within the $5,000 tolerance tube.',
            'If a luxury house has an extreme price of $900,000 (outlier), SVR applies a bounded penalty rather than squaring the huge error, preventing the regression line from being skewed.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-svr-tube',
          title: 'SVR Epsilon-Insensitive Tube',
          caption: 'Regression line with symmetric +/- epsilon boundary tube; points inside carry zero loss.',
          type: 'svg-interactive',
          svgType: 'svr-tube'
        }
      ],
      summary: [
        'SVR applies SVM principles to continuous numerical prediction.',
        'It uses an epsilon-tube where errors within tolerance carry zero loss.',
        'Much more robust to outliers than Ordinary Least Squares regression.',
        'Non-linear relationships can be modeled using kernel functions.'
      ],
      keyPoints: [
        'Epsilon-insensitive tube',
        'Support vectors define regression curve',
        'Robust to outliers',
        'Kernel support for non-linear regression'
      ]
    },
    {
      id: 'ml-u4-q8',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 8,
      title: 'What is Ensemble Learning? Why is it Used? (with example)',
      shortTitle: 'Ensemble Learning & Applications',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(b)', notes: 'First part' },
        { paper: 'Paper 3', questionNo: 'Q3(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q3(a)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q3(b)', notes: 'First part' }
      ],
      syllabusTopics: ['Ensemble Learning', 'Weak Learners', 'Majority Voting', 'Averaging'],
      definition: 'Ensemble Learning is a Machine Learning technique that combines multiple individual models to produce a more accurate and reliable prediction.',
      sections: [
        {
          title: '1. What is Ensemble Learning?',
          content: [
            'Instead of depending on a single model, Ensemble Learning combines the predictions of multiple models to get a better final result.',
            'The individual models are called weak learners or base models.',
            'When combined, they form a strong learner that outperforms any single model.'
          ]
        },
        {
          title: '2. Why is Ensemble Learning Used?',
          content: [
            'Ensemble Learning is used for the following reasons:',
            '1. Improves Accuracy: Combining multiple models produces more accurate predictions than individual models.',
            '2. Reduces Errors: Errors made by individual models tend to cancel each other out when combined.',
            '3. Reduces Overfitting: Techniques like Bagging reduce variance and help the model perform better on unseen data.',
            '4. Improves Reliability: Combining different models makes final predictions more stable and less sensitive to noisy data.'
          ]
        },
        {
          title: '3. Example of Ensemble Learning',
          content: [
            'Suppose five Machine Learning models are used to predict whether a medical biopsy tumor is Malignant or Benign.',
            'Out of five models, four predict Malignant and one predicts Benign.',
            'Using majority voting, the final prediction is Malignant.',
            'Therefore, Ensemble Learning combines the predictions of multiple models to produce a robust final decision.'
          ],
          table: {
            headers: ['Model', 'Prediction'],
            rows: [
              { parameter: 'Model 1', col1: 'Malignant' },
              { parameter: 'Model 2', col1: 'Malignant' },
              { parameter: 'Model 3', col1: 'Benign' },
              { parameter: 'Model 4', col1: 'Malignant' },
              { parameter: 'Model 5', col1: 'Malignant' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-ensemble-concept',
          title: 'Ensemble Learning Architecture',
          caption: 'Training data feeds multiple base models whose outputs are combined via voting or averaging to form the final prediction.',
          type: 'svg-interactive',
          svgType: 'ensemble-concept'
        }
      ],
      summary: [
        'Ensemble Learning combines multiple Machine Learning models.',
        'It improves prediction accuracy and reliability.',
        'It reduces errors and protects against overfitting.',
        'Majority voting is a simple and common way to combine predictions.',
        'Random Forest and AdaBoost are popular examples of Ensemble Learning.'
      ],
      keyPoints: [
        'Combining multiple models',
        'Weak learners to strong learner',
        'Majority voting / averaging',
        'Higher accuracy and reliability'
      ]
    },
    {
      id: 'ml-u4-q9',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 9,
      title: 'Short Note on Ensemble Learning Methods: (i) Simple (ii) Advanced',
      shortTitle: 'Simple vs Advanced Ensemble Learning Methods',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q3(c)', marks: 6 }
      ],
      syllabusTopics: ['Max Voting', 'Averaging', 'Bagging', 'Boosting', 'Stacking'],
      definition: 'Ensemble techniques are divided into simple methods that directly combine fixed model outputs and advanced methods that actively train learners sequentially, via bootstrapping, or through meta-learners.',
      sections: [
        {
          title: '1. Simple Ensemble Methods',
          content: [
            '1. Max Voting (Majority Voting): Used for classification. Each base model casts a vote; class with highest votes wins. Hard voting counts binary class decisions; Soft voting averages predicted class probabilities.',
            '2. Simple Averaging: Used for regression or probability scoring. Output is arithmetic mean: ŷ = (1/M)∑ŷₘ.',
            '3. Weighted Averaging: Gives higher voting weights to demonstrably more accurate base models: ŷ = ∑(wₘ·ŷₘ) where ∑wₘ = 1.'
          ]
        },
        {
          title: '2. Advanced Ensemble Methods',
          content: [
            '1. Bagging (Bootstrap Aggregating): Trains homogeneous base models independently in parallel on bootstrap random subsets with replacement. Primary goal: variance reduction (e.g., Random Forest).',
            '2. Boosting: Trains models sequentially in stages; each new learner focuses on instances misclassified by preceding learners. Primary goal: bias reduction (e.g., AdaBoost, XGBoost).',
            '3. Stacking (Stacked Generalization): Trains multiple heterogeneous models (e.g., KNN, SVM, Decision Tree); their outputs become input features to a meta-classifier (e.g., Logistic Regression).'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-ensemble-types',
          title: 'Taxonomy of Simple and Advanced Ensemble Methods',
          caption: 'Hierarchical tree of ensemble strategies distinguishing voting/averaging from Bagging, Boosting, and Stacking.',
          type: 'svg-interactive',
          svgType: 'ensemble-types'
        }
      ],
      summary: [
        'Simple ensembles: Max voting, arithmetic averaging, weighted averaging.',
        'Advanced ensembles: Bagging (parallel, variance cut), Boosting (sequential, bias cut), Stacking (meta-model).',
        'Advanced techniques actively influence model training rather than just aggregating final outputs.'
      ],
      keyPoints: [
        'Hard vs Soft voting',
        'Weighted averaging formulas',
        'Bagging vs Boosting vs Stacking definitions',
        'Meta-learning mechanism in stacking'
      ]
    },
    {
      id: 'ml-u4-q10',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 10,
      title: 'Explain Bagging and Boosting. Differentiate between Bagging and Boosting',
      shortTitle: 'Bagging vs Boosting',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q3(a)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q3(a)', marks: 6 }
      ],
      syllabusTopics: ['Bagging', 'Boosting', 'Variance Reduction', 'Bias Reduction'],
      definition: 'Bagging and Boosting are the two most popular ensemble learning techniques used to combine multiple base models to produce a single superior predictive model.',
      sections: [
        {
          title: '1. Explanation of Bagging and Boosting',
          content: [
            'Bagging (Bootstrap Aggregating): Multiple base models are trained independently in parallel on random bootstrap subsets of training data (sampling with replacement). The final prediction is obtained by averaging (for regression) or majority voting (for classification). Example: Random Forest.',
            'Boosting: Base models are trained sequentially in a series. Each new model focuses on correcting the errors made by previous models by assigning higher weights to misclassified samples. Example: AdaBoost, Gradient Boosting, XGBoost.'
          ]
        },
        {
          title: '2. Difference between Bagging and Boosting',
          table: {
            headers: ['Bagging (e.g., Random Forest)', 'Boosting (e.g., AdaBoost, XGBoost)'],
            rows: [
              {
                parameter: 'Models are trained in parallel and independently of each other.',
                col1: 'Models are trained sequentially, where each model depends on the performance of earlier models.'
              },
              {
                parameter: 'Primary goal is to reduce variance and prevent overfitting.',
                col1: 'Primary goal is to reduce bias and increase prediction accuracy.'
              },
              {
                parameter: 'Uses complex base models with high variance (e.g., fully grown deep decision trees).',
                col1: 'Uses simple weak learners with high bias (e.g., shallow decision stumps).'
              },
              {
                parameter: 'All training samples and models have equal voting weight in final aggregation.',
                col1: 'Misclassified samples get higher weight in next rounds, and models with lower error get higher voting weight.'
              },
              {
                parameter: 'Robust against noise and outliers; rarely overfits.',
                col1: 'Can be sensitive to noisy data and outliers if tuned improperly.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-bagging-boosting',
          title: 'Bagging vs Boosting Flow Comparison',
          caption: 'Side-by-side architecture: Parallel training on bootstrap subsets (Bagging) vs Sequential error-weighted updates (Boosting).',
          type: 'svg-interactive',
          svgType: 'bagging-boosting'
        }
      ],
      summary: [
        'Bagging trains models in parallel to reduce variance (e.g., Random Forest).',
        'Boosting trains models sequentially to reduce bias (e.g., AdaBoost).',
        'Bagging weights all models equally; Boosting assigns weights based on accuracy.',
        'Both methods dramatically outperform individual weak learners.'
      ],
      keyPoints: [
        'Bagging = Parallel, Variance reduction',
        'Boosting = Sequential, Bias reduction',
        'Sample re-weighting in Boosting',
        'Bootstrap aggregation in Bagging'
      ]
    },
    {
      id: 'ml-u4-q11',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 11,
      title: 'Explain Random Forest Algorithm with Example (with diagram)',
      shortTitle: 'Random Forest Algorithm & Example',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q3(a)', marks: 6 }
      ],
      syllabusTopics: ['Random Forest', 'Bootstrapping', 'Feature Randomness', 'Out-of-Bag Error'],
      definition: 'Random Forest is an ensemble learning algorithm that builds a forest of multiple decision trees using bootstrap aggregation and random feature selection, combining their predictions to achieve high accuracy and prevent overfitting.',
      sections: [
        {
          title: '1. How Random Forest Works (Step-by-Step)',
          content: [
            'Step 1 (Bootstrap Sampling): Create B subsets of size N from the original dataset by sampling with replacement.',
            'Step 2 (Feature Randomness): At each split in every tree, randomly select a subset of m features (typically m = sqrt(total features)) rather than considering all features.',
            'Step 3 (Tree Construction): Train an unpruned decision tree on each bootstrap sample.',
            'Step 4 (Aggregation): For a new test sample, pass it through all B trees:',
            '- For Classification: Take the majority vote among all trees.',
            '- For Regression: Compute the numerical average of all tree predictions.'
          ]
        },
        {
          title: '2. Practical Example of Random Forest',
          content: [
            'Suppose a bank builds a Random Forest with 100 decision trees to predict whether a Loan Application should be Approved or Rejected.',
            'A customer applies with specific Credit Score, Income, and Loan Amount values.',
            'The customer data is evaluated by all 100 trees independently:',
            '- 85 trees predict "Approved"',
            '- 15 trees predict "Rejected"',
            'Final Decision: By majority vote (85:15), the loan is APPROVED.',
            'Why it works: Even if a few individual trees make mistakes due to noisy data, the majority consensus provides an accurate, dependable decision.'
          ]
        },
        {
          title: '3. Key Advantages of Random Forest',
          content: [
            '1. High Accuracy: Consistently delivers superior performance on complex tabular datasets.',
            '2. Prevents Overfitting: Averaging across diverse uncorrelated trees significantly reduces variance.',
            '3. Handles Missing Values: Effectively estimates missing data while maintaining prediction quality.',
            '4. Feature Importance: Automatically calculates which features contribute most to predictions.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-random-forest',
          title: 'Random Forest Architecture & Majority Voting',
          caption: 'Dataset split into bootstrap subsets, each building an independent decision tree, aggregated by majority vote.',
          type: 'svg-interactive',
          svgType: 'random-forest'
        }
      ],
      summary: [
        'Random Forest combines multiple decision trees using Bagging and random feature selection.',
        'Feature randomness (m = sqrt(D)) decorrelates individual trees.',
        'Final prediction uses majority voting (classification) or averaging (regression).',
        'Solves the overfitting problem of individual decision trees.'
      ],
      keyPoints: [
        'Bootstrap Aggregation',
        'Feature randomness m = sqrt(D)',
        'Majority voting aggregation',
        'Variance reduction'
      ]
    },
    {
      id: 'ml-u4-q12',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 12,
      title: 'Short Note on AdaBoost',
      shortTitle: 'AdaBoost (Adaptive Boosting) Algorithm',
      marks: 4,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(b)(ii)', marks: 4 }
      ],
      syllabusTopics: ['AdaBoost', 'Decision Stumps', 'Weight Update', 'Sequential Learning'],
      definition: 'AdaBoost (Adaptive Boosting) is an iterative boosting algorithm that converts a sequence of weak learners (typically 1-level decision stumps) into a strong classifier by adaptively increasing the sample weights of misclassified records.',
      sections: [
        {
          title: '1. Mathematical Workflow of AdaBoost',
          content: [
            '1. Initialize observation weights: wᵢ = 1/N for all i = 1, ..., N.',
            '2. For round t = 1 to T:',
            '   a. Fit weak classifier h_t(x) using weights w.',
            '   b. Compute weighted classification error: ε_t = ∑(wᵢ where h_t(xᵢ) ≠ yᵢ) / ∑wᵢ.',
            '   c. Calculate learner importance weight: α_t = 0.5 · ln((1 - ε_t) / ε_t).',
            '   d. Update sample weights: wᵢ := wᵢ · exp(α_t) for misclassified instances; wᵢ := wᵢ · exp(-α_t) for correct instances.',
            '   e. Normalize weights so that ∑wᵢ = 1.',
            '3. Final Composite Classifier: H(x) = sign(∑ α_t · h_t(x)).'
          ],
          formulas: [
            { name: 'Learner Weight (Alpha)', latex: '\\alpha_t = \\frac{1}{2}\\ln\\left(\\frac{1 - \\varepsilon_t}{\\varepsilon_t}\\right)' },
            { name: 'Weight Update Rule', latex: 'w_i^{(t+1)} = \\frac{w_i^{(t)} \\exp\\big(-\\alpha_t y_i h_t(x_i)\\big)}{Z_t}' }
          ]
        },
        {
          title: '2. Numerical Weight Adjustment Example',
          content: [
            '10 records, initial weights wᵢ = 0.10. Stump 1 misclassifies 3 records: error ε = 0.30.',
            'Learner importance: α = 0.5 · ln(0.70 / 0.30) = 0.5 · 0.847 = 0.424.',
            'Wrong samples weight factor: exp(+0.424) = 1.528 ==> unnormalized w = 0.153.',
            'Correct samples weight factor: exp(-0.424) = 0.654 ==> unnormalized w = 0.065.',
            'After normalization: misclassified samples receive weight ~0.167; correct samples drop to ~0.071.',
            'Next stump is forced to prioritize the 3 hard misclassified samples.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-adaboost-pipeline',
          title: 'AdaBoost Iterative Re-weighting Pipeline',
          caption: 'Sequential progression showing misclassified samples magnified in weight before passing to successive weak learners.',
          type: 'svg-interactive',
          svgType: 'adaboost-pipeline'
        }
      ],
      summary: [
        'AdaBoost adaptively increases weights of misclassified records at each round.',
        'Uses weak learners (decision stumps); combines them using performance weights α_t.',
        'Produces highly accurate non-linear classifiers, but is sensitive to noisy outliers.'
      ],
      keyPoints: [
        'Decision stump weak learner',
        'Learner stage weight α_t',
        'Exponential weight update rule',
        'Sensitivity to noisy outlier records'
      ]
    },
    {
      id: 'ml-u4-q13',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 13,
      title: 'Differentiate between Binary Classification and Multiclass Classification (with example)',
      shortTitle: 'Binary vs Multiclass Classification',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q4(a)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['Binary Classification', 'Multiclass Classification', 'Softmax', 'Sigmoid'],
      definition: 'Classification is a supervised machine learning task where algorithms categorize data into distinct groups, categorized by the number of possible output target labels.',
      sections: [
        {
          title: '1. Comparison between Binary and Multiclass Classification',
          table: {
            headers: ['Binary Classification', 'Multiclass Classification'],
            rows: [
              {
                parameter: 'Categorizes input data into exactly 2 mutually exclusive classes (e.g., 0 or 1, Yes or No).',
                col1: 'Categorizes input data into 3 or more distinct classes (e.g., Cat, Dog, Bird).'
              },
              {
                parameter: 'Uses the Sigmoid function to output a single probability score P(y=1).',
                col1: 'Uses the Softmax function to output a probability distribution across all classes summing to 1.'
              },
              {
                parameter: 'A single decision boundary (hyperplane) separates the two classes.',
                col1: 'Multiple decision boundaries are required to separate the various class regions.'
              },
              {
                parameter: 'Evaluated using a standard 2x2 confusion matrix (TP, FP, TN, FN).',
                col1: 'Evaluated using a KxK confusion matrix with Macro, Micro, and Weighted averages.'
              },
              {
                parameter: 'Example: Email Spam Detection (Spam or Not Spam).',
                col1: 'Example: Handwritten Digit Recognition (recognizing digits 0 through 9).'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-binary-multiclass',
          title: 'Binary vs Multiclass Decision Boundaries',
          caption: 'Single linear boundary separating 2 classes vs Multiple boundaries separating 3 classes.',
          type: 'svg-interactive',
          svgType: 'binary-multiclass'
        }
      ],
      summary: [
        'Binary classification predicts one of two classes using Sigmoid output.',
        'Multiclass classification predicts one of three or more classes using Softmax output.',
        'Binary uses a single decision boundary; Multiclass uses multiple boundaries.'
      ],
      keyPoints: [
        'Binary: 2 classes, Sigmoid function',
        'Multiclass: 3+ classes, Softmax function',
        'Single boundary vs Multiple boundaries',
        '2x2 matrix vs KxK matrix'
      ]
    },
    {
      id: 'ml-u4-q14',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 14,
      title: 'What is Multiclass Classification? Explain the Variants of Multiclass Classification',
      shortTitle: 'Multiclass Classification Variants (OvA vs OvO)',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['Multiclass Classification', 'One-vs-All (OvA)', 'One-vs-One (OvO)'],
      definition: 'Multiclass classification is the problem of categorizing input samples into one of three or more distinct classes.',
      sections: [
        {
          title: '1. What is Multiclass Classification?',
          content: [
            'In multiclass classification, each input data point belongs to exactly one class out of K possible classes (where K >= 3).',
            'Some algorithms (like Decision Trees, KNN, and Naive Bayes) naturally support multiple classes.',
            'Other algorithms (like standard binary SVM and Logistic Regression) require decomposition techniques to handle multiclass data.'
          ]
        },
        {
          title: '2. Variants of Multiclass Classification',
          content: [
            'There are two primary decomposition strategies:',
            '1. One-vs-All (OvA) / One-vs-Rest (OvR):',
            '- Trains K separate binary classifiers for K classes.',
            '- Each classifier is trained to distinguish one specific class from all other (K-1) classes combined.',
            '- During prediction, the query point is evaluated by all K classifiers. The class whose classifier outputs the highest confidence score is selected.',
            '- Total classifiers needed = K.',
            '2. One-vs-One (OvO):',
            '- Trains a binary classifier for every unique pair of classes.',
            '- During prediction, all classifiers evaluate the query point and cast a vote.',
            '- The class with the most pairwise votes is chosen as the final prediction.',
            '- Total classifiers needed = K(K - 1) / 2.'
          ]
        },
        {
          title: '3. Comparison between One-vs-All (OvA) and One-vs-One (OvO)',
          table: {
            headers: ['One-vs-All (OvA / OvR)', 'One-vs-One (OvO)'],
            rows: [
              {
                parameter: 'Number of classifiers: Trains K classifiers (e.g., 4 classifiers for 4 classes).',
                col1: 'Number of classifiers: Trains K(K-1)/2 classifiers (e.g., 6 classifiers for 4 classes).'
              },
              {
                parameter: 'Dataset size per model: Each classifier is trained on the entire dataset.',
                col1: 'Dataset size per model: Each classifier is trained only on data from the two selected classes (smaller datasets).'
              },
              {
                parameter: 'Class imbalance: Severe class imbalance occurs because 1 class is compared against (K-1) merged classes.',
                col1: 'Class imbalance: Balanced training because only 2 classes are compared at a time.'
              },
              {
                parameter: 'Prediction rule: Selects the class with the highest probability/confidence score.',
                col1: 'Prediction rule: Selects the class with the highest number of pairwise votes.'
              }
            ]
          }
        }
      ],
      summary: [
        'Multiclass classification handles problems with 3 or more target classes.',
        'One-vs-All (OvA) trains K classifiers; chooses the highest confidence score.',
        'One-vs-One (OvO) trains K(K-1)/2 classifiers; chooses by majority pairwise vote.',
        'OvA is faster to train; OvO avoids synthetic class imbalance.'
      ],
      keyPoints: [
        'K >= 3 classes',
        'One-vs-All (OvA) = K models',
        'One-vs-One (OvO) = K(K-1)/2 models',
        'Confidence score vs Voting'
      ]
    },
    {
      id: 'ml-u4-q15',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 15,
      title: 'Handling Imbalanced Data in Multiclass Classification',
      shortTitle: 'Handling Imbalanced Data',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q4(b)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q4(b)', marks: 6 }
      ],
      syllabusTopics: ['Class Imbalance', 'Resampling', 'SMOTE', 'Cost-Sensitive Learning'],
      definition: 'Class imbalance occurs when some classes have substantially fewer training examples than others, biasing models toward predicting only the majority classes.',
      sections: [
        {
          title: '1. Why Class Imbalance is a Problem',
          content: [
            'Standard Machine Learning algorithms assume balanced class distributions.',
            'If 95% of emails are legitimate and 5% are spam, a naive model predicting "Legitimate" for every email achieves 95% accuracy while completely failing to detect spam.',
            'Therefore, standard Accuracy becomes misleading, and special handling techniques are required.'
          ]
        },
        {
          title: '2. Techniques to Handle Class Imbalance',
          content: [
            '1. Resampling Methods:',
            '- Random Undersampling: Randomly discards instances from the majority class until classes are balanced (risk: loses valuable data).',
            '- Random Oversampling: Duplicates instances from the minority class (risk: can cause overfitting).',
            '- SMOTE (Synthetic Minority Over-sampling Technique): Synthesizes new minority examples by interpolating between neighboring minority points.',
            '2. Algorithmic Methods:',
            '- Cost-Sensitive Learning: Assigns a higher penalty (loss weight) to misclassifications of minority classes.',
            '- Balanced Class Weights: Many libraries (e.g. scikit-learn) automatically scale loss inversely proportional to class frequencies.',
            '3. Using Appropriate Evaluation Metrics:',
            '- Never rely on raw Accuracy.',
            '- Use Precision, Recall, Macro-F1 Score, and Precision-Recall AUC (PR-AUC) to measure minority class performance.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-imbalance-bars',
          title: 'Class Imbalance & SMOTE Balancing',
          caption: 'Severe 950 vs 50 class skew rebalanced to equal distributions using synthetic oversampling.',
          type: 'svg-interactive',
          svgType: 'imbalance-bars'
        }
      ],
      summary: [
        'Class imbalance biases models toward the majority class.',
        'Resampling techniques include Undersampling, Oversampling, and SMOTE.',
        'Cost-sensitive learning penalizes minority class errors more heavily.',
        'Evaluate models using Precision, Recall, and F1-score instead of Accuracy.'
      ],
      keyPoints: [
        'Majority vs Minority class skew',
        'SMOTE synthetic oversampling',
        'Cost-sensitive weighting',
        'Macro-F1 evaluation'
      ]
    },
    {
      id: 'ml-u4-q16',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 16,
      title: 'Techniques Used for Outlier Handling',
      shortTitle: 'Outlier Detection & Handling Methodologies',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q4(b)', marks: 6 }
      ],
      syllabusTopics: ['Outliers', 'IQR Rule', 'Z-Score', 'Winsorization'],
      definition: 'Outlier analysis encompasses statistical, distance, and density-based protocols to detect anomalous observations that deviate drastically from normal patterns and mitigate their distorting influence on models.',
      sections: [
        {
          title: '1. Detection Techniques',
          content: [
            '1. Interquartile Range (IQR) Boxplot Rule: Outlier if value < Q1 - 1.5·IQR or value > Q3 + 1.5·IQR, where IQR = Q3 - Q1.',
            '2. Z-Score (Standard Deviation Method): Compute z = (x - μ) / σ; instances with |z| > 3 are flagged as outliers.',
            '3. Visualization: Scatter plots, box plots, and histograms.',
            '4. Machine Learning Approaches: Isolation Forest, Local Outlier Factor (LOF), DBSCAN noise points.'
          ]
        },
        {
          title: '2. Handling & Remediation Protocols',
          table: {
            headers: ['Handling Strategy', 'Methodology', 'Pros & Tradeoffs'],
            rows: [
              { parameter: 'Trimming / Removal', col1: 'Drop outlier rows entirely from dataset', col2: 'Cleanest fix if outliers are errors; risks losing critical rare events.' },
              { parameter: 'Capping / Winsorization', col1: 'Cap values exceeding threshold at Q3 + 1.5·IQR or 99th percentile', col2: 'Preserves sample size while eliminating extreme leverage on models.' },
              { parameter: 'Mathematical Transformation', col1: 'Apply Log, Square Root, or Box-Cox transformations', col2: 'Compresses long-tailed distributions without deleting observations.' },
              { parameter: 'Imputation', col1: 'Replace extreme values with Median or Mode', col2: 'Prevents distribution distortion while maintaining row counts.' },
              { parameter: 'Robust Modeling', col1: 'Use tree ensembles (Random Forest) or Huber/MAE loss', col2: 'Models are naturally insensitive to extreme outliers.' }
            ]
          }
        }
      ],
      summary: [
        'Detect outliers via IQR rule (|value| > Q3 + 1.5·IQR), Z-scores (|z| > 3), or Isolation Forest.',
        'Handle via trimming (drop), Winsorization (capping), log transformations, or robust modeling.',
        'Never delete genuine rare events (e.g., fraud) without careful domain consideration.'
      ],
      keyPoints: [
        'IQR rule: Q1 - 1.5·IQR to Q3 + 1.5·IQR',
        'Z-score threshold |z| > 3',
        'Winsorization vs Trimming vs Log transform',
        'Model robustness considerations'
      ]
    },
    {
      id: 'ml-u4-q17',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 17,
      title: 'Methods for Evaluating Classification Models / Metrics for Evaluating Classifier Performance',
      shortTitle: 'Classifier Evaluation Metrics',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(c)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q3(c)', marks: 6 }
      ],
      syllabusTopics: ['Model Evaluation', 'Confusion Matrix', 'Accuracy', 'Precision', 'Recall', 'F1-Score'],
      definition: 'Evaluation metrics are quantitative measures used to evaluate how accurately and reliably a classification model performs on unseen test data.',
      sections: [
        {
          title: '1. Primary Classification Evaluation Metrics',
          content: [
            '1. Confusion Matrix: A tabular summary comparing actual class labels against predicted class labels (TP, FP, TN, FN).',
            '2. Accuracy: Ratio of total correct predictions to total predictions: (TP + TN) / Total. Effective for balanced datasets.',
            '3. Precision: Fraction of positive predictions that are truly positive: TP / (TP + FP). Critical when False Positives are costly (e.g., spam detection).',
            '4. Recall (Sensitivity): Fraction of actual positive instances found by the model: TP / (TP + FN). Critical when False Negatives are dangerous (e.g., disease detection).',
            '5. F1-Score: Harmonic mean of Precision and Recall: 2 * (Precision * Recall) / (Precision + Recall). Balances both metrics.'
          ],
          formulas: [
            { name: 'Accuracy', latex: '\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}' },
            { name: 'Precision', latex: '\\text{Precision} = \\frac{TP}{TP + FP}' },
            { name: 'Recall', latex: '\\text{Recall} = \\frac{TP}{TP + FN}' },
            { name: 'F1-Score', latex: 'F1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}' }
          ]
        },
        {
          title: '2. Validation Methods',
          content: [
            'Holdout Method: Splits dataset into 70% training and 30% testing.',
            'K-Fold Cross-Validation: Splits data into K equal folds, iteratively training on K-1 folds and testing on the remaining fold to calculate an unbiased average performance score.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-precision-recall',
          title: 'Precision-Recall Curve & Trade-Off',
          caption: 'PR curve demonstrating the inverse trade-off between Precision and Recall across classification thresholds.',
          type: 'svg-interactive',
          svgType: 'precision-recall'
        }
      ],
      summary: [
        'Accuracy measures overall correctness but fails on imbalanced data.',
        'Precision measures how clean positive predictions are.',
        'Recall measures how many real positives were captured.',
        'F1-score provides a single balanced score combining Precision and Recall.'
      ],
      keyPoints: [
        'Confusion Matrix',
        'Accuracy = (TP + TN) / Total',
        'Precision = TP / (TP + FP)',
        'Recall = TP / (TP + FN)',
        'F1 Harmonic Mean'
      ]
    },
    {
      id: 'ml-u4-q18',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 18,
      title: 'Short Note on Importance of Confusion Matrix',
      shortTitle: 'Importance of Confusion Matrix',
      marks: 4,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q3(c)', marks: 4 },
        { paper: 'Paper 6', questionNo: 'Q3(c)', marks: 4 }
      ],
      syllabusTopics: ['Confusion Matrix', 'True Positives', 'False Positives', 'Type I and Type II Errors'],
      definition: 'A Confusion Matrix is a tabular representation used to evaluate the performance of a classification model by comparing actual target values against model predictions.',
      sections: [
        {
          title: '1. Structure of a 2x2 Confusion Matrix',
          content: [
            'A binary confusion matrix contains four fundamental outcomes:',
            '1. True Positive (TP): Model correctly predicted Positive (e.g., patient has disease and model predicts disease).',
            '2. True Negative (TN): Model correctly predicted Negative (e.g., healthy person predicted healthy).',
            '3. False Positive (FP / Type I Error): Model incorrectly predicted Positive (e.g., healthy person predicted as diseased).',
            '4. False Negative (FN / Type II Error): Model incorrectly predicted Negative (e.g., sick patient predicted healthy).'
          ],
          table: {
            headers: ['Actual \\ Predicted', 'Predicted Positive', 'Predicted Negative'],
            rows: [
              { parameter: 'Actual Positive', col1: 'True Positive (TP)', col2: 'False Negative (FN) [Type II Error]' },
              { parameter: 'Actual Negative', col1: 'False Positive (FP) [Type I Error]', col2: 'True Negative (TN)' }
            ]
          }
        },
        {
          title: '2. Why the Confusion Matrix is Important',
          content: [
            '1. Reveals Error Types: Unlike raw accuracy, it clearly differentiates between Type I (FP) and Type II (FN) errors.',
            '2. Essential for Metric Computation: Precision, Recall, Specificity, and F1-score are all directly computed from its values.',
            '3. Critical for High-Stakes Applications: In medical diagnosis or fraud detection, False Negatives carry much higher costs than False Positives.'
          ]
        }
      ],
      summary: [
        'A Confusion Matrix tabulates actual vs predicted classes.',
        'Distinguishes between Type I (FP) and Type II (FN) errors.',
        'Forms the basis for calculating Precision, Recall, and F1-score.',
        'Essential for evaluating models on imbalanced datasets.'
      ],
      keyPoints: [
        'True Positive (TP) & True Negative (TN)',
        'False Positive (Type I) & False Negative (Type II)',
        'Foundation for Precision and Recall',
        'Reveals hidden classification errors'
      ]
    },
    {
      id: 'ml-u4-q19',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 19,
      title: 'Explain Accuracy, Precision, Recall and F-Score',
      shortTitle: 'Accuracy, Precision, Recall & F-Score',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q4(b)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q4(b)', marks: 6 }
      ],
      syllabusTopics: ['Accuracy', 'Precision', 'Recall', 'F-Score', 'Harmonic Mean'],
      definition: 'Accuracy, Precision, Recall, and F-Score are the four foundational metrics used to measure the performance and error characteristics of classification models.',
      sections: [
        {
          title: '1. Definitions and Formulas',
          content: [
            '1. Accuracy: Measures the overall proportion of correct predictions out of all predictions made.',
            'Formula: Accuracy = (TP + TN) / (TP + TN + FP + FN)',
            '2. Precision: Measures how many of the positively predicted instances are actually positive.',
            'Formula: Precision = TP / (TP + FP)',
            '3. Recall (Sensitivity): Measures how many of the actual positive instances were successfully identified by the model.',
            'Formula: Recall = TP / (TP + FN)',
            '4. F-Score (F1-Score): The harmonic mean of Precision and Recall, providing a single balanced metric.',
            'Formula: F1 = 2 * (Precision * Recall) / (Precision + Recall)'
          ],
          formulas: [
            { name: 'Accuracy', latex: '\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}' },
            { name: 'Precision', latex: '\\text{Precision} = \\frac{TP}{TP + FP}' },
            { name: 'Recall', latex: '\\text{Recall} = \\frac{TP}{TP + FN}' },
            { name: 'F1-Score', latex: 'F1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}' }
          ]
        },
        {
          title: '2. When to Use Each Metric',
          content: [
            '- Use Precision when False Positives are costly: e.g., Spam detection (do not classify important emails as spam).',
            '- Use Recall when False Negatives are dangerous: e.g., Cancer detection or Fraud detection (never miss a sick patient).',
            '- Use F1-Score when you need a balance between Precision and Recall, especially on imbalanced datasets.'
          ]
        }
      ],
      summary: [
        'Accuracy is overall correctness, but misleading on imbalanced data.',
        'Precision penalizes False Positives (false alarms).',
        'Recall penalizes False Negatives (missed cases).',
        'F1-score is the harmonic mean balancing Precision and Recall.'
      ],
      keyPoints: [
        'Accuracy = (TP + TN) / Total',
        'Precision = TP / (TP + FP)',
        'Recall = TP / (TP + FN)',
        'F1 = Harmonic mean of P and R'
      ]
    },
    {
      id: 'ml-u4-q20',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 20,
      title: 'Relation between Precision and Recall (with example)',
      shortTitle: 'Precision-Recall Relationship',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['Precision-Recall Trade-Off', 'Decision Threshold', 'PR Curve'],
      definition: 'Precision and Recall share an inverse relationship known as the Precision-Recall trade-off; increasing one metric typically causes the other metric to decrease.',
      sections: [
        {
          title: '1. The Precision-Recall Trade-Off',
          content: [
            'Classification models output a probability score between 0 and 1. A threshold (default = 0.5) decides whether a prediction is positive.',
            '1. Lowering the threshold (e.g. from 0.5 to 0.2):',
            '- The model classifies cases as positive more easily.',
            '- Catches almost all real positive cases -> Recall increases.',
            '- Also catches more false alarms (False Positives) -> Precision decreases.',
            '2. Raising the threshold (e.g. from 0.5 to 0.8):',
            '- The model only predicts positive when very confident.',
            '- Minimizes false alarms -> Precision increases.',
            '- Misses borderline positive cases (False Negatives) -> Recall decreases.'
          ]
        },
        {
          title: '2. Practical Example (Airport Security Metal Detector)',
          content: [
            'Consider an airport security metal detector screening passengers for weapons:',
            '- Scenario A (High Recall, Low Precision): The sensitivity threshold is set very low. The detector beeps for belt buckles, coins, and keys. It catches 100% of weapons (Recall = 1.0), but generates many false alarms (Low Precision).',
            '- Scenario B (High Precision, Low Recall): The threshold is set very high. It only beeps for heavy metal objects. Every beep is a confirmed weapon (Precision = 1.0), but small pocket knives might slip through unnoticed (Low Recall).'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-precision-recall',
          title: 'Precision-Recall Trade-off Curve',
          caption: 'Inverse relationship between Precision and Recall governed by decision threshold adjustment.',
          type: 'svg-interactive',
          svgType: 'precision-recall'
        }
      ],
      summary: [
        'Precision and Recall have an inverse trade-off.',
        'Lowering the threshold increases Recall but lowers Precision.',
        'Raising the threshold increases Precision but lowers Recall.',
        'The F1-score helps find the optimal threshold balance.'
      ],
      keyPoints: [
        'Inverse mathematical trade-off',
        'Decision threshold control',
        'Airport metal detector example',
        'F1-score balance'
      ]
    },
    {
      id: 'ml-u4-q21',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 21,
      title: 'K-Fold Cross-Validation: Effect of Large and Small K; How to Choose K',
      shortTitle: 'K-Fold Cross-Validation & K Selection',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(c)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q3(c)', marks: 6 }
      ],
      syllabusTopics: ['K-Fold Cross-Validation', 'Resampling', 'Bias-Variance Tradeoff in K', 'Choice of K'],
      definition: 'K-Fold Cross-Validation is a resampling procedure that partitions a dataset into K equal subsets (folds) to evaluate a model generalizability on unseen data.',
      sections: [
        {
          title: '1. How K-Fold Cross-Validation Works',
          content: [
            'Step 1: Partition the training dataset randomly into K equal-sized folds.',
            'Step 2: For each of the K iterations, select 1 fold as the validation/test set and train the model on the remaining K-1 folds.',
            'Step 3: Calculate the evaluation metric (e.g. accuracy or error) on the validation fold.',
            'Step 4: Repeat K times so every fold is used as the validation set exactly once.',
            'Step 5: Compute the average performance score across all K iterations as the final model evaluation score.'
          ]
        },
        {
          title: '2. Effect of Choosing Small vs Large K',
          table: {
            headers: ['Small K (e.g., K = 2 or 3)', 'Large K (e.g., K = 10 or K = N [LOOCV])'],
            rows: [
              {
                parameter: 'Computation: Very fast; trains only 2 or 3 models.',
                col1: 'Computation: Slow; requires training 10 or N separate models.'
              },
              {
                parameter: 'Training size: Uses only 50% to 66% of data for training each round.',
                col1: 'Training size: Uses 90% (or N-1 samples) for training, closer to full dataset size.'
              },
              {
                parameter: 'Bias: High bias; underestimates true model performance due to small training sets.',
                col1: 'Bias: Low bias; estimates performance very accurately.'
              },
              {
                parameter: 'Variance: Low variance between fold predictions.',
                col1: 'Variance: High variance; training sets across folds are nearly identical.'
              }
            ]
          }
        },
        {
          title: '3. How to Choose K in Practice',
          content: [
            'Empirical Rule: K = 5 or K = 10 is the standard choice in machine learning.',
            'Why K = 10 is preferred: Extensive empirical research shows K = 10 achieves the ideal compromise between low bias, manageable variance, and acceptable computation time.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-kfold-cv',
          title: '5-Fold Cross-Validation Protocol',
          caption: 'Dataset split into 5 folds with rotating validation fold across 5 training iterations.',
          type: 'svg-interactive',
          svgType: 'kfold-cv'
        }
      ],
      summary: [
        'K-Fold CV splits data into K subsets and rotates the validation fold.',
        'Averages performance across K iterations for an unbiased evaluation.',
        'Small K: Fast but higher bias.',
        'Large K: Low bias but slower and higher variance.',
        'K = 5 or 10 is the universally recommended standard.'
      ],
      keyPoints: [
        'K equal partitions',
        'Train on K-1, validate on 1',
        'Averaged validation score',
        'Standard choice K = 5 or 10'
      ]
    },
    {
      id: 'ml-u4-q22',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 22,
      title: 'Numerical: Macro-Average Precision, Recall and F-Score for a 4-Class Confusion Matrix',
      shortTitle: 'Solved Numerical: 4-Class Confusion Matrix & Macro Metrics',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['Macro-Average', 'Micro-Average', 'Multiclass Confusion Matrix', 'Evaluation Numerical'],
      definition: 'Complete step-by-step computation of per-class True Positives, Precision, Recall, and F1 followed by macro-averaging across an asymmetric 4-class confusion matrix.',
      sections: [
        {
          title: '1. Given 4-Class Confusion Matrix',
          content: [
            'Rows indicate Actual Ground Truth classes; Columns indicate Model Predicted classes.'
          ],
          table: {
            headers: ['Actual \\ Predicted', 'A', 'B', 'C', 'D', 'Row Total (Actual)'],
            rows: [
              { parameter: 'Actual A', col1: '100 (TP_A)', col2: '80', col3: '10', col4: '10', col5: '200' },
              { parameter: 'Actual B', col1: '0', col2: '9 (TP_B)', col3: '0', col4: '1', col5: '10' },
              { parameter: 'Actual C', col1: '0', col2: '1', col3: '8 (TP_C)', col4: '1', col5: '10' },
              { parameter: 'Actual D', col1: '0', col2: '1', col3: '0', col4: '9 (TP_D)', col5: '10' },
              { parameter: 'Col Total (Pred)', col1: '100', col2: '91', col3: '18', col4: '21', col5: 'Grand Total = 230' }
            ]
          }
        },
        {
          title: '2. Per-Class Precision, Recall, and F1 Calculations',
          content: [
            'Formulas: Precision = TP / Column Total; Recall = TP / Row Total; F1 = 2PR / (P + R)'
          ],
          table: {
            headers: ['Class', 'TP', 'Precision Calculation', 'Recall Calculation', 'F1-Score Calculation'],
            rows: [
              { parameter: 'Class A', col1: '100', col2: '100 / 100 = 1.000', col3: '100 / 200 = 0.500', col4: '2(1.0)(0.5) / (1.0 + 0.5) = 1.0 / 1.5 = 0.667' },
              { parameter: 'Class B', col1: '9', col2: '9 / 91 = 0.0989 ≈ 0.099', col3: '9 / 10 = 0.900', col4: '2(0.0989)(0.9) / (0.0989 + 0.9) = 0.178 / 0.999 = 0.178' },
              { parameter: 'Class C', col1: '8', col2: '8 / 18 = 0.444', col3: '8 / 10 = 0.800', col4: '2(0.444)(0.8) / (0.444 + 0.8) = 0.710 / 1.244 = 0.571' },
              { parameter: 'Class D', col1: '9', col2: '9 / 21 = 0.4286 ≈ 0.429', col3: '9 / 10 = 0.900', col4: '2(0.4286)(0.9) / (0.4286 + 0.9) = 0.771 / 1.329 = 0.581' }
            ]
          }
        },
        {
          title: '3. Step-by-Step Macro-Average Computation',
          content: [
            'Macro-Average gives equal weight to every individual class regardless of sample size:',
            'Macro Precision = (1.000 + 0.099 + 0.444 + 0.429) / 4 = 1.972 / 4 = 0.4930 ≈ 0.493 (49.3%)',
            'Macro Recall = (0.500 + 0.900 + 0.800 + 0.900) / 4 = 3.100 / 4 = 0.7750 = 0.775 (77.5%)',
            'Macro F1-Score = (0.667 + 0.178 + 0.571 + 0.581) / 4 = 1.997 / 4 = 0.4993 ≈ 0.499 (49.9%)',
            '(Alternative harmonic mean of macro P & R: 2·(0.493·0.775) / (0.493 + 0.775) = 0.764 / 1.268 = 0.603)'
          ]
        },
        {
          title: '4. Comparative Note: Micro-Average Calculation',
          content: [
            'Total TP = 100 + 9 + 8 + 9 = 126. Total Samples = 230.',
            'Micro Precision = Micro Recall = Micro F1 = Accuracy = 126 / 230 = 0.5478 (54.8%).',
            'Analytical Insight: Macro precision drops sharply to 0.493 because it equally penalizes the dismal precision of minority class B (0.099), whereas micro-average is dominated by large class A.'
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Compute Macro-Average Precision, Recall, and F1-Score for an asymmetric 4-Class (A, B, C, D) Confusion Matrix with 230 samples.',
        givenData: [
          { label: 'Classes', value: '4 (A, B, C, D)' },
          { label: 'Total Samples', value: '230' },
          { label: 'Actual Counts (Row Totals)', value: 'A:200, B:10, C:10, D:10' },
          { label: 'Predicted Counts (Col Totals)', value: 'A:100, B:91, C:18, D:21' },
          { label: 'Diagonal True Positives', value: 'TP_A=100, TP_B=9, TP_C=8, TP_D=9' }
        ],
        toFind: [
          'True Positives (TP) along main diagonal for each class',
          'Per-Class Precision = TP / Column Total',
          'Per-Class Recall = TP / Row Total',
          'Per-Class F1-Score = 2PR / (P + R)',
          'Macro Precision, Macro Recall, and Macro F1 (arithmetic means)'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Identify True Positives along the Diagonal',
            explanation: 'The diagonal cells where the actual class equals the predicted class represent the True Positives (TP) for classes A, B, C, and D.',
            calculation: 'Class A: Row A, Col A = 100 (TP_A)\nClass B: Row B, Col B = 9 (TP_B)\nClass C: Row C, Col C = 8 (TP_C)\nClass D: Row D, Col D = 9 (TP_D)\nTotal Correct Predictions = 100 + 9 + 8 + 9 = 126',
            result: 'TP_A = 100, TP_B = 9, TP_C = 8, TP_D = 9',
            tip: 'Diagonal entries are always the sole numerator in every class Precision and Recall calculation.'
          },
          {
            stepNumber: 2,
            title: 'Calculate Per-Class Precision (P_i = TP_i / Col_Total)',
            explanation: 'Precision measures how many of the items predicted as class i were actually class i. Divide each TP by its corresponding column total.',
            formula: 'P_i = \\frac{\\text{TP}_i}{\\sum_{\\text{row}} \\text{Pred}_i}',
            calculation: 'P_A = 100 / 100 = 1.000 (100%)\nP_B = 9 / 91 ≈ 0.0989 (9.89%)\nP_C = 8 / 18 ≈ 0.4444 (44.44%)\nP_D = 9 / 21 ≈ 0.4286 (42.86%)',
            result: 'P_A = 1.000, P_B = 0.099, P_C = 0.444, P_D = 0.429',
            tip: 'Notice that Class B has a very low precision (0.099) because the model predicted B 91 times, but only 9 were correct!'
          },
          {
            stepNumber: 3,
            title: 'Calculate Per-Class Recall (R_i = TP_i / Row_Total)',
            explanation: 'Recall measures the fraction of actual ground truth instances of class i successfully captured by the model. Divide each TP by its corresponding row total.',
            formula: 'R_i = \\frac{\\text{TP}_i}{\\sum_{\\text{col}} \\text{Actual}_i}',
            calculation: 'R_A = 100 / 200 = 0.500 (50%)\nR_B = 9 / 10 = 0.900 (90%)\nR_C = 8 / 10 = 0.800 (80%)\nR_D = 9 / 10 = 0.900 (90%)',
            result: 'R_A = 0.500, R_B = 0.900, R_C = 0.800, R_D = 0.900',
            tip: 'Class A has the lowest recall (0.500) because out of 200 actual A instances, only 100 were retrieved.'
          },
          {
            stepNumber: 4,
            title: 'Calculate Per-Class F1-Scores',
            explanation: 'Compute the harmonic mean of Precision and Recall for each of the four individual classes.',
            formula: 'F1_i = \\frac{2 \\times P_i \\times R_i}{P_i + R_i}',
            calculation: 'F1_A = 2(1.0)(0.5) / (1.0 + 0.5) = 1.0 / 1.5 = 0.667\nF1_B = 2(0.0989)(0.9) / (0.0989 + 0.9) = 0.178 / 0.9989 ≈ 0.178\nF1_C = 2(0.4444)(0.8) / (0.4444 + 0.8) = 0.711 / 1.2444 ≈ 0.571\nF1_D = 2(0.4286)(0.9) / (0.4286 + 0.9) = 0.771 / 1.3286 ≈ 0.581',
            result: 'F1_A = 0.667, F1_B = 0.178, F1_C = 0.571, F1_D = 0.581'
          },
          {
            stepNumber: 5,
            title: 'Compute Macro-Average Precision, Recall, and F1',
            explanation: 'In macro-averaging, sum the metric across all K = 4 classes and divide by 4. Each class carries equal 25% weight regardless of sample distribution.',
            formula: '\\text{Macro } M = \\frac{1}{K} \\sum_{i=1}^K M_i',
            calculation: 'Macro Precision = (1.000 + 0.0989 + 0.4444 + 0.4286) / 4 = 1.9719 / 4 = 0.4930 (49.3%)\nMacro Recall = (0.500 + 0.900 + 0.800 + 0.900) / 4 = 3.100 / 4 = 0.7750 (77.5%)\nMacro F1 = (0.667 + 0.178 + 0.571 + 0.581) / 4 = 1.997 / 4 = 0.4993 (49.9%)',
            result: 'Macro Precision = 0.493, Macro Recall = 0.775, Macro F1 = 0.499',
            tip: 'Macro-averaging heavily penalizes low performance on minority classes (like Class B precision = 0.099), making it ideal for imbalanced dataset diagnosis.'
          }
        ],
        finalAnswer: {
          label: 'Final Macro Metrics Across 4 Classes',
          value: 'Macro Precision = 0.493 | Macro Recall = 0.775 | Macro F1 = 0.499',
          interpretation: 'Across all 4 classes equally weighted, the model exhibits high macro recall (77.5%) but modest macro precision (49.3%) due to false alarms in class B.'
        }
      },
      summary: [
        'Diagonal values represent TP: TP_A=100, TP_B=9, TP_C=8, TP_D=9.',
        'Precision = TP / Column Total; Recall = TP / Row Total.',
        'Macro-Averages: Macro Precision = 0.493, Macro Recall = 0.775, Macro F1 = 0.499.',
        'Micro-Average = Accuracy = 126 / 230 = 0.548.'
      ],
      keyPoints: [
        'Diagonal TP identification',
        'Precision vs Recall division bases',
        'Macro arithmetic mean across 4 classes',
        'Macro (unweighted) vs Micro (sample-weighted) contrast'
      ]
    }
  ]
};
