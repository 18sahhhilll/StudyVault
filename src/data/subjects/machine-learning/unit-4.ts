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
      shortTitle: 'KNN Algorithm Architecture & Working Example',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(c)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['K-Nearest Neighbour', 'Lazy Learner', 'Euclidean Distance', 'Majority Voting'],
      definition: 'K-Nearest Neighbour (KNN) is a supervised, instance-based, non-parametric lazy learning algorithm that assigns an unseen query instance to the majority class among its K closest training points based on a distance metric.',
      sections: [
        {
          title: '1. Core Characteristics of KNN',
          content: [
            'Lazy Learner: No explicit training or model parameter abstraction phase; simply memorizes the training data. All computational work occurs during inference.',
            'Non-Parametric: Makes no assumptions regarding the underlying probability distribution of data.',
            'Instance-Based: Decisions are made purely through localized point-to-point geometric similarity.',
            'Choice of K: Odd values (3, 5, 7) are conventionally chosen for binary classification to prevent voting deadlocks.'
          ]
        },
        {
          title: '2. Step-by-Step Algorithmic Protocol',
          content: [
            '1. Choose parameter K (number of neighbours).',
            '2. Compute distance (usually Euclidean) between the test point x₀ and every point in the training set.',
            '3. Sort training points by ascending distance to identify the K nearest neighbours.',
            '4. Tally the class frequencies among these K neighbours.',
            '5. Assign the query instance to the class with the highest frequency count (majority vote).'
          ],
          formulas: [
            { name: 'Euclidean Distance Formula', latex: 'd(x, x\') = \\sqrt{\\sum_{i=1}^{n}(x_i - x\'_i)^2}' }
          ]
        },
        {
          title: '3. Illustrative Worked Example (Pass / Fail)',
          content: [
            'Internal & External exam scores (scale 1-10); classify new student x₀ = (3, 7) with K = 3.'
          ],
          table: {
            headers: ['Student', 'Internal', 'External', 'Status', 'Distance to (3, 7)'],
            rows: [
              { parameter: 'S1', col1: '7', col2: '7', col3: 'Pass', col4: '√[(7-3)² + (7-7)²] = √16 = 4.00' },
              { parameter: 'S2', col1: '7', col2: '4', col3: 'Pass', col4: '√[(7-3)² + (4-7)²] = √[16+9] = 5.00' },
              { parameter: 'S3', col1: '3', col2: '4', col3: 'Fail', col4: '√[(3-3)² + (4-7)²] = √9 = 3.00' },
              { parameter: 'S4', col1: '1', col2: '4', col3: 'Fail', col4: '√[(1-3)² + (4-7)²] = √[4+9] = 3.61' }
            ]
          }
        },
        {
          title: '4. Decision Computation',
          content: [
            'The 3 nearest points are S3 (dist = 3.00, Fail), S4 (dist = 3.61, Fail), and S1 (dist = 4.00, Pass).',
            'Voting score: Fail = 2 votes, Pass = 1 vote.',
            'Final Classification: The new student is predicted as FAIL.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-knn-decision',
          title: 'KNN Decision Boundary & Radius (K = 3)',
          caption: 'Query star point surrounded by dashed search radius enclosing 2 Triangles (Class A) and 1 Square (Class B).',
          type: 'svg-interactive',
          svgType: 'knn-decision'
        }
      ],
      summary: [
        'KNN classifies instances based on majority vote among its K nearest neighbours.',
        'Lazy learner with zero training time, highly intuitive and non-parametric.',
        'Features must be scaled before distance computation to avoid scale dominance.',
        'Odd K values are selected to avoid ties in two-class problems.'
      ],
      keyPoints: [
        'Instance-based / lazy learning',
        'Euclidean distance metric',
        'Majority voting rule',
        'Sensitivity to feature normalization'
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
        { paper: 'Paper 4', questionNo: 'Q3(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q3(b)', marks: 6 }
      ],
      syllabusTopics: ['KNN Pros and Cons', 'Curse of Dimensionality', 'Inference Latency'],
      definition: 'A balanced critique of KNN, highlighting its simplicity and adaptability against computational inefficiencies, memory overhead, and vulnerability to high dimensions.',
      sections: [
        {
          title: '1. Advantages & Disadvantages Matrix',
          table: {
            headers: ['Category', 'Advantages (Strengths)', 'Disadvantages (Weaknesses)'],
            rows: [
              { parameter: 'Training Phase', col1: 'Zero training time (O(1)); new data can be appended instantly without retraining.', col2: 'Extremely slow prediction time (O(N·D)); computes distance to every single training point.' },
              { parameter: 'Mathematical Assumptions', col1: 'Completely non-parametric; makes no assumptions about class boundaries or distributions.', col2: 'Sensitive to irrelevant features and scale; requires strict feature scaling.' },
              { parameter: 'Versatility', col1: 'Naturally handles multiclass classification and regression (by averaging neighbours).', col2: 'Suffers from the Curse of Dimensionality; distance metrics break down in high-dimensional space.' },
              { parameter: 'Memory & Storage', col1: 'Easy to parallelize across distributed nodes.', col2: 'High memory footprint; entire dataset must remain resident in RAM.' },
              { parameter: 'Data Distribution', col1: 'Adapts well to local patterns; decision boundary can be arbitrarily complex.', col2: 'Biased toward majority class on imbalanced datasets.' }
            ]
          }
        }
      ],
      summary: [
        'KNN is simple, assumption-free, and handles multiclass data natively.',
        'Major drawbacks: high inference latency, massive storage requirements, vulnerability to the curse of dimensionality.',
        'Feature scaling and careful choice of K are critical to acceptable performance.'
      ],
      keyPoints: [
        'Zero training vs Heavy prediction latency',
        'Curse of dimensionality impact',
        'RAM storage bottleneck',
        'Vulnerability to unscaled features and class imbalance'
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
      definition: 'Distance metrics quantify the geometric dissimilarity between feature vectors, forming the core measurement mechanism used by KNN to identify nearest neighbours.',
      sections: [
        {
          title: '1. Metric Formulations & Properties',
          table: {
            headers: ['Metric Name', 'Formula', 'Characteristics & Applications'],
            rows: [
              { parameter: 'Euclidean (L2 norm)', col1: '√[∑(xᵢ - yᵢ)²]', col2: 'Straight-line geometric distance. Most common for continuous numerical data.' },
              { parameter: 'Manhattan / City-block (L1 norm)', col1: '∑|xᵢ - yᵢ|', col2: 'Sum of absolute coordinate differences. Preferred for grid-like or high-dimensional data.' },
              { parameter: 'Minkowski (Lp norm)', col1: '[∑|xᵢ - yᵢ|^p]^(1/p)', col2: 'Generalized metric. When p = 1 ==> Manhattan; when p = 2 ==> Euclidean.' },
              { parameter: 'Hamming Distance', col1: '∑ I(xᵢ ≠ yᵢ)', col2: 'Counts number of mismatched positions. Used for categorical, boolean, or textual data.' }
            ]
          }
        },
        {
          title: '2. Calculation Example',
          content: [
            'Given vectors x = (1, 2) and y = (4, 6):',
            'Euclidean: √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5.0',
            'Manhattan: |4-1| + |6-2| = 3 + 4 = 7.0',
            'Minkowski (p = 3): (|3|³ + |4|³)^(1/3) = (27 + 64)^(1/3) = 91^(1/3) = 4.50'
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
      shortTitle: 'Support Vector Machine Hyperplanes & Margins',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q4(c)', marks: 6 }
      ],
      syllabusTopics: ['Support Vector Machine', 'Separating Hyperplane', 'Margin Maximization', 'Support Vectors'],
      definition: 'Support Vector Machine (SVM) is a maximum-margin linear classifier that identifies the optimal separating hyperplane that maximizes the geometric margin (empty corridor) separating positive and negative classes.',
      sections: [
        {
          title: '1. Separating Hyperplane',
          content: [
            'A hyperplane is a decision boundary that partitions a feature space into two distinct regions: w·x + b = 0.',
            'In 2D it is a straight line; in 3D a flat plane; in n-dimensional space an (n-1)-dimensional affine subspace.',
            'Classification decision rule: sign(w·x + b). Points with w·x + b > 0 belong to class +1; points with w·x + b < 0 belong to class -1.',
            'While infinitely many separating hyperplanes exist, SVM uniquely seeks the optimal hyperplane that provides the maximum margin.'
          ],
          formulas: [
            { name: 'Hyperplane Equation', latex: 'w \\cdot x + b = 0' }
          ]
        },
        {
          title: '2. Margin and Support Vectors',
          content: [
            'Margin: The shortest perpendicular distance between the decision hyperplane and the closest data points of either class.',
            'Mathematical Margin Width: 2 / ||w||. Maximizing the margin is mathematically equivalent to minimizing (1/2)||w||² subject to yᵢ(w·xᵢ + b) ≥ 1.',
            'Support Vectors: The critical training instances located directly on the margin boundaries w·x + b = ±1. If any non-support vector is moved or deleted, the decision boundary remains completely unaffected.',
            'Hard vs Soft Margin: Hard margin strictly forbids training errors (requires linearly separable data); Soft margin introduces slack variables ξᵢ and penalty parameter C to tolerate outliers.'
          ],
          formulas: [
            { name: 'Margin Width Formula', latex: '\\text{Margin Width} = \\frac{2}{\\|w\\|}' },
            { name: 'Optimization Problem', latex: '\\min_{w, b} \\frac{1}{2}\\|w\\|^2 \\quad \\text{subject to} \\quad y_i(w\\cdot x_i + b) \\ge 1, \\; \\forall i' }
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-svm-margin',
          title: 'SVM Maximum Margin Hyperplane & Support Vectors',
          caption: 'Optimal hyperplane w·x + b = 0 flanked by dashed margin boundaries w·x + b = ±1 with width 2/||w||, resting upon support vectors.',
          type: 'svg-interactive',
          svgType: 'svm-margin'
        }
      ],
      summary: [
        'Separating hyperplane w·x + b = 0 partitions classes in n-dimensional space.',
        'Margin is the corridor width 2/||w|| between the hyperplane and closest data points.',
        'SVM maximizes this margin, guaranteeing superior generalization and minimal overfitting.',
        'Support vectors are the critical points on the boundary that define the entire model.'
      ],
      keyPoints: [
        'Decision boundary equation w·x + b = 0',
        'Margin formula 2 / ||w||',
        'Support vectors role in boundary construction',
        'Hard vs Soft margin (parameter C)'
      ]
    },
    {
      id: 'ml-u4-q6',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 6,
      title: 'Kernel Methods Suitable for SVM',
      shortTitle: 'SVM Kernel Methods & Non-Linear Mapping',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q3(a)', marks: 6 }
      ],
      syllabusTopics: ['Kernel Trick', 'Non-linear SVM', 'RBF Kernel', 'Polynomial Kernel'],
      definition: 'Kernel methods allow SVM to solve non-linearly separable classification tasks by implicitly projecting input vectors into a higher-dimensional feature space where linear separation becomes feasible, without explicitly computing high-dimensional coordinates.',
      sections: [
        {
          title: '1. The Kernel Trick',
          content: [
            'When data cannot be linearly separated in original input space ℝⁿ, we map it to higher-dimensional space ℝᵐ (where m >> n) using mapping function Φ(x).',
            'In the dual formulation of SVM, data points enter solely via inner dot products Φ(x)·Φ(z).',
            'Kernel Trick: A kernel function K(x, z) directly computes this inner product in original space: K(x, z) = Φ(x)·Φ(z). This avoids the prohibitive computational cost of explicitly calculating high-dimensional coordinates.'
          ]
        },
        {
          title: '2. Standard Kernel Functions',
          table: {
            headers: ['Kernel Type', 'Mathematical Formula', 'Characteristics and Use Cases'],
            rows: [
              { parameter: 'Linear Kernel', col1: 'K(x, z) = x · z', col2: 'No projection; used when data is already linearly separable or feature count is large (e.g., text categorization).' },
              { parameter: 'Polynomial Kernel', col1: 'K(x, z) = (x · z + c)^d', col2: 'Captures feature interaction terms up to degree d; good for image classification and curved boundaries.' },
              { parameter: 'Radial Basis Function (RBF / Gaussian)', col1: 'K(x, z) = exp(-γ ||x - z||²)', col2: 'Most popular; projects into infinite-dimensional Hilbert space; handles highly complex non-linear structures.' },
              { parameter: 'Sigmoid Kernel', col1: 'K(x, z) = tanh(α x · z + c)', col2: 'Originates from neural network activation; behaves similarly to a two-layer perceptron.' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-kernel-trick',
          title: 'Kernel Trick: 1D Non-Separable to 2D Linearly Separable',
          caption: 'Non-separable 1D points transformed via z = x² into a 2D parabola where a flat linear hyperplane cleanly separates classes.',
          type: 'svg-interactive',
          svgType: 'kernel-trick'
        }
      ],
      summary: [
        'Kernel trick projects non-separable data into high dimensions where linear hyperplanes work.',
        'Computes dot products implicitly: K(x, z) = Φ(x)·Φ(z) without coordinate explosion.',
        'RBF (Gaussian) kernel is the standard choice; tuned via parameters C and γ using cross-validation.'
      ],
      keyPoints: [
        'Inner dot product computation',
        'Linear, Polynomial, RBF, Sigmoid kernels',
        'Parameter γ and C tuning',
        'Implicit high-dimensional mapping'
      ]
    },
    {
      id: 'ml-u4-q7',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 7,
      title: 'Explain with Example the Variant of SVM: Support Vector Regression (SVR)',
      shortTitle: 'Support Vector Regression (SVR) & ε-Insensitive Tube',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(a)', marks: 6 }
      ],
      syllabusTopics: ['Support Vector Regression', 'ε-Insensitive Loss', 'Slack Variables'],
      definition: 'Support Vector Regression (SVR) adapts SVM principles to continuous target prediction by fitting a function within an ε-insensitive tube, completely ignoring errors below threshold ε while penalizing deviations outside the tube.',
      sections: [
        {
          title: '1. Mechanism of the ε-Insensitive Tube',
          content: [
            'Unlike ordinary least squares which penalizes every minor deviation, SVR defines an ε-tube around predicted function f(x) = w·x + b.',
            'Errors inside the tube (|y - f(x)| ≤ ε) incur zero penalty.',
            'Deviations outside the tube (|y - f(x)| > ε) are penalized linearly using slack variables ξᵢ and ξᵢ* weighted by hyperparameter C.',
            'Points lying on or outside the tube boundary act as the support vectors that dictate the regression line.'
          ],
          formulas: [
            {
              name: 'SVR Optimization Formulation',
              latex: '\\min_{w, b, \\xi, \\xi^*} \\frac{1}{2}\\|w\\|^2 + C\\sum_{i=1}^{n}(\\xi_i + \\xi_i^*) \\quad \\text{s.t.} \\quad |y_i - (w\\cdot x_i + b)| \\le \\varepsilon + \\xi_i'
            }
          ]
        },
        {
          title: '2. Concrete Example (Real Estate Appraisal)',
          content: [
            'Predicting house price with tolerance ε = $10,000.',
            'Case 1: Actual price = $305,000, Predicted price = $300,000. Error is $5,000. Because $5,000 ≤ ε, error is ignored (zero loss).',
            'Case 2: Actual price = $325,000, Predicted price = $300,000. Error is $25,000. Only the excess ($25,000 - $10,000 = $15,000) is penalized.'
          ]
        },
        {
          title: '3. SVR vs Ordinary Linear Regression',
          table: {
            headers: ['Comparative Dimension', 'Linear Regression (OLS)', 'Support Vector Regression (SVR)'],
            rows: [
              { parameter: 'Loss Function', col1: 'Squared error applied to all points', col2: 'ε-insensitive linear loss (small errors ignored)' },
              { parameter: 'Outlier Sensitivity', col1: 'High (squaring exaggerates outlier impact)', col2: 'Robust (bounded penalty, controlled by C and ε)' },
              { parameter: 'Non-Linear Capabilities', col1: 'Requires manual polynomial terms', col2: 'Natively handled via non-linear Kernels (RBF)' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-svr-tube',
          title: 'Support Vector Regression with ε-Insensitive Tube',
          caption: 'Fitted regression line surrounded by dashed ±ε tube; support vectors lie on and outside the tube boundaries.',
          type: 'svg-interactive',
          svgType: 'svr-tube'
        }
      ],
      summary: [
        'SVR fits continuous targets inside a margin of tolerance called the ε-insensitive tube.',
        'Errors within ±ε of the prediction line are completely ignored.',
        'Points outside the tube become support vectors, providing robustness against minor noise and outliers.'
      ],
      keyPoints: [
        'ε-insensitive loss function',
        'Slack variables ξᵢ and ξᵢ*',
        'Regularization parameter C balance',
        'Robustness compared to Ordinary Least Squares'
      ]
    },
    {
      id: 'ml-u4-q8',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 8,
      title: 'What is Ensemble Learning? Why is it Used? (with example)',
      shortTitle: 'Ensemble Learning Architecture & Rationale',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(b)', notes: 'First part' },
        { paper: 'Paper 3', questionNo: 'Q3(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q3(a)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q3(b)', notes: 'First part' }
      ],
      syllabusTopics: ['Ensemble Learning', 'Weak Learners', 'Variance Reduction', 'Bias Reduction'],
      definition: 'Ensemble learning is a meta-algorithmic framework that strategically combines multiple individual models (weak learners) to produce a unified predictive model that achieves superior accuracy and robustness compared to any constituent model.',
      sections: [
        {
          title: '1. Foundational Rationale (Wisdom of the Crowd)',
          content: [
            'Core Premise: A collective group of moderately performing, uncorrelated weak learners can combine into an exceptional strong learner.',
            'Statistical Reason: Independent errors made by diverse individual models tend to cancel each other out during aggregation.',
            'Computational Reason: Combining multiple searches from different initializations reduces the risk of getting stuck in sub-optimal local minima.',
            'Representational Reason: An ensemble expands the effective hypothesis space, forming complex decision boundaries beyond the capacity of a single learner.'
          ]
        },
        {
          title: '2. Concrete Real-World Example',
          content: [
            'Medical Diagnostics: 5 independent classifiers evaluate whether a tumor biopsy is malignant.',
            'Classifiers 1, 2, 4, 5 predict "Malignant"; Classifier 3 predicts "Benign".',
            'Majority voting yields "Malignant" (4:1 vote). The isolated error of model 3 does not compromise patient diagnosis.'
          ]
        },
        {
          title: '3. Primary Ensemble Categories',
          content: [
            'Bagging (Parallel): Reduces variance; e.g., Random Forest.',
            'Boosting (Sequential): Reduces bias; e.g., AdaBoost, Gradient Boosting, XGBoost.',
            'Stacking (Hierarchical): Heterogeneous base learners combined via a meta-learning model.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-ensemble-concept',
          title: 'Ensemble Learning Architecture',
          caption: 'Training dataset routed into parallel base models whose independent predictions are aggregated via voting or averaging.',
          type: 'svg-interactive',
          svgType: 'ensemble-concept'
        }
      ],
      summary: [
        'Ensemble learning aggregates multiple weak models into a highly accurate single predictor.',
        'Reduces variance (Bagging) or reduces bias (Boosting) while providing error-cancellation robustness.',
        'Widely used in winning competitive machine learning solutions (Random Forest, XGBoost).'
      ],
      keyPoints: [
        'Weak learner to Strong learner paradigm',
        'Variance and bias reduction mechanisms',
        'Majority voting and averaging aggregators',
        'Independence of constituent models'
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
      shortTitle: 'Bagging vs Boosting In-Depth Comparison',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(b)', notes: 'Differentiate' },
        { paper: 'Paper 3', questionNo: 'Q4(c)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q3(a)', notes: 'Differentiate' }
      ],
      syllabusTopics: ['Bagging', 'Boosting', 'Bootstrap Aggregation', 'Variance vs Bias'],
      definition: 'Bagging is a parallel ensemble approach that averages independent base models trained on bootstrap subsets to minimize variance; Boosting is a sequential ensemble approach that trains learners iteratively on re-weighted data to minimize bias.',
      sections: [
        {
          title: '1. Mechanism of Bagging (Bootstrap Aggregating)',
          content: [
            '1. Generate B bootstrap datasets from original data (random sampling with replacement, containing ~63.2% unique instances).',
            '2. Train an independent, fully-grown high-variance model (e.g., deep decision tree) on each bootstrap set in parallel.',
            '3. Combine predictions: Majority voting for classification, arithmetic averaging for regression.',
            'Outcome: Effectively reduces model variance while maintaining low bias.'
          ]
        },
        {
          title: '2. Mechanism of Boosting',
          content: [
            '1. Initialize all training instances with equal weights wᵢ = 1/N.',
            '2. Train a weak base learner (e.g., 1-split decision stump).',
            '3. Increase weights of misclassified instances; decrease weights of correctly classified instances.',
            '4. Train next learner on re-weighted data, focusing on previously failed instances.',
            '5. Repeat sequentially; combine models using weighted majority voting based on each model\'s individual accuracy.'
          ]
        },
        {
          title: '3. Comprehensive Bagging vs Boosting Comparison Table',
          table: {
            headers: ['Comparative Aspect', 'Bagging (e.g., Random Forest)', 'Boosting (e.g., AdaBoost, XGBoost)'],
            rows: [
              { parameter: 'Training Architecture', col1: 'Parallel & Independent', col2: 'Sequential & Adaptive (dependent on previous step)' },
              { parameter: 'Sampling Strategy', col1: 'Random bootstrap sampling with replacement', col2: 'Re-weighted dataset emphasizing misclassified points' },
              { parameter: 'Sample Weights', col1: 'Equal weight for all observations', col2: 'Higher weights for harder, misclassified samples' },
              { parameter: 'Voting Mechanism', col1: 'Equal voting power across all models', col2: 'Weighted vote based on model accuracy (stage weight α)' },
              { parameter: 'Primary Objective', col1: 'Reduce Variance (prevents overfitting)', col2: 'Reduce Bias (turns weak learners into strong learner)' },
              { parameter: 'Base Model Capacity', col1: 'Complex, high-variance models (deep trees)', col2: 'Simple, high-bias weak models (decision stumps)' },
              { parameter: 'Susceptibility to Noise', col1: 'Robust to noise and outliers', col2: 'Highly sensitive to noise (tends to overfit outliers)' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-bagging-boosting',
          title: 'Architectural Comparison: Bagging vs Boosting',
          caption: 'Parallel training flow of Bagging compared to sequential error-reweighting feedback pipeline of Boosting.',
          type: 'svg-interactive',
          svgType: 'bagging-boosting'
        }
      ],
      summary: [
        'Bagging builds parallel models on bootstrap samples; reduces variance (Random Forest).',
        'Boosting builds sequential models on re-weighted data; reduces bias (AdaBoost).',
        'Bagging models hold equal votes; Boosting weights votes by learner performance.',
        'Bagging handles noise well; Boosting can overfit on outliers.'
      ],
      keyPoints: [
        'Parallel vs Sequential execution',
        'Bootstrap sampling vs Adaptive re-weighting',
        'Variance reduction vs Bias reduction',
        'Equal vs Weighted voting power'
      ]
    },
    {
      id: 'ml-u4-q11',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 11,
      title: 'Explain Random Forest Algorithm with Example (with diagram)',
      shortTitle: 'Random Forest Algorithm Architecture & Workflow',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(b)(i)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q4(a)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q4(c)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q3(b)', notes: 'Random Forest part' }
      ],
      syllabusTopics: ['Random Forest', 'Bagging', 'Feature Subspace Sampling', 'Out-of-Bag Error'],
      definition: 'Random Forest is a supervised ensemble algorithm that constructs a collection of unpruned decision trees using bootstrap aggregation combined with random feature subspace sampling, aggregating individual predictions via majority voting or averaging.',
      sections: [
        {
          title: '1. Two Pillars of Randomness in Random Forest',
          content: [
            '1. Bootstrap Sampling (Row Bagging): Each tree is trained on a distinct random sample of N records drawn with replacement from the training set.',
            '2. Random Feature Subspace (Column Bagging): At each split in a tree, only a random subset of m features (typically m = √M for classification, m = M/3 for regression) is considered rather than all M features.',
            'Why Feature Randomization Matters: Decorrelates the trees. If one dominant feature exists, ordinary bagging produces similar splits across all trees; random feature selection forces diverse decision structures.'
          ]
        },
        {
          title: '2. Algorithmic Protocol',
          content: [
            '1. For b = 1 to B (number of trees):',
            '   a. Draw a bootstrap sample Z* of size N from training data.',
            '   b. Grow a decision tree T_b to the terminal leaves without pruning.',
            '   c. At each candidate node split: Select m random features from M, pick best split among m.',
            '2. Output ensemble prediction: Majority vote (classification) or mean average (regression).'
          ]
        },
        {
          title: '3. Practical Banking Loan Approval Example',
          content: [
            'Features: Age, Income, Credit Score, Job Tenure, Existing Debt.',
            'A bank builds 100 decision trees on randomized customer data slices.',
            'When a new loan applicant arrives: 72 trees predict "Approve", 28 trees predict "Reject".',
            'By majority vote (72% > 50%), the loan is approved.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-random-forest',
          title: 'Random Forest Architecture & Majority Voting',
          caption: 'Original dataset sampled into bootstrap subsets with random feature splits across Tree 1, Tree 2, Tree 3 leading to final voting.',
          type: 'svg-interactive',
          svgType: 'random-forest'
        }
      ],
      summary: [
        'Random Forest = Bagging + Deep Decision Trees + Random Feature Subspace Sampling.',
        'Decorrelating trees sharply reduces variance without increasing bias.',
        'Extremely robust, handles missing values, resistant to overfitting, but less interpretable than single trees.'
      ],
      keyPoints: [
        'Bootstrap sampling with replacement',
        'Random feature subset size m = √M',
        'Decorrelation of individual trees',
        'Majority voting / Averaging aggregation'
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
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q3(a)', marks: 6 }
      ],
      syllabusTopics: ['Binary Classification', 'Multiclass Classification', 'Taxonomy'],
      definition: 'Binary classification categorizes instances into exactly one of two mutually exclusive classes; Multiclass classification assigns instances to one of three or more distinct classes.',
      sections: [
        {
          title: '1. Comparative Analysis Table',
          table: {
            headers: ['Comparative Parameter', 'Binary Classification', 'Multiclass Classification'],
            rows: [
              { parameter: 'Number of Target Classes', col1: 'Exactly two (e.g., 0/1, Positive/Negative)', col2: 'Three or more (e.g., Cat/Dog/Bird, Digits 0-9)' },
              { parameter: 'Output Representation', col1: 'Single probability score p (or sign ±1)', col2: 'Probability vector over C classes (via Softmax)' },
              { parameter: 'Typical Real-World Examples', col1: 'Spam Detection (Spam / Ham), Disease diagnosis (Sick / Healthy)', col2: 'Handwritten digit recognition (0-9), Iris flower species (3 classes)' },
              { parameter: 'Standard Algorithms', col1: 'Logistic Regression, Binary SVM, Perceptron', col2: 'Naive Bayes, Decision Trees, Random Forest, Softmax Regression' },
              { parameter: 'Extension Strategies', col1: 'Native foundation for most algorithms', col2: 'Binary algorithms require decomposition (One-vs-All, One-vs-One)' },
              { parameter: 'Evaluation Metrics', col1: 'Accuracy, Precision, Recall, F1, ROC-AUC', col2: 'Confusion Matrix (C×C), Macro/Micro-averaged Precision, Recall, F1' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-binary-multiclass',
          title: 'Decision Boundaries: Binary vs Multiclass',
          caption: 'Single linear boundary dividing 2 classes versus intersecting boundaries partitioning 3 distinct class zones.',
          type: 'svg-interactive',
          svgType: 'binary-multiclass'
        }
      ],
      summary: [
        'Binary classification selects between 2 classes; Multiclass selects one from > 2 classes.',
        'Multiclass problems are more complex and require decomposition for naturally binary models like SVM.',
        'Evaluation extends to C×C confusion matrices and Macro/Micro averaging.'
      ],
      keyPoints: [
        '2 classes vs > 2 classes',
        'Sigmoid vs Softmax activation',
        'Native multiclass vs Decomposed binary models',
        'Macro vs Micro evaluation extensions'
      ]
    },
    {
      id: 'ml-u4-q14',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 14,
      title: 'What is Multiclass Classification? Explain the Variants of Multiclass Classification',
      shortTitle: 'Multiclass Classification Variants (OvA, OvO, ECOC)',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(c)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['Multiclass Classification', 'One-vs-All', 'One-vs-One', 'ECOC'],
      definition: 'Multiclass classification variants are architectural decomposition schemes that transform a complex multi-class problem into a set of simpler binary classification tasks solvable by standard binary learners.',
      sections: [
        {
          title: '1. One-vs-All (OvA) / One-vs-Rest (OvR)',
          content: [
            'Principle: For N classes, train N separate binary classifiers. Classifier k treats class k as positive (+1) and all remaining N - 1 classes combined as negative (-1).',
            'Inference: Run all N classifiers on query point x; select the class whose classifier produces the highest confidence score / probability.',
            'Pros & Cons: Requires only N models (computationally fast); but individual training sets are heavily imbalanced (1 class vs N-1 classes).'
          ]
        },
        {
          title: '2. One-vs-One (OvO) / All-vs-All (AvA)',
          content: [
            'Principle: Build a binary classifier for every unique pair of classes. Total models = N(N - 1) / 2. Each classifier is trained exclusively on data from its two assigned classes.',
            'Inference: Query point is submitted to all N(N - 1)/2 classifiers. Each model casts a vote for one class; the class receiving the highest cumulative votes wins.',
            'Pros & Cons: Subsets are small and balanced (fast training per model); but total model count explodes quadratically (for 10 classes = 45 models; for 100 classes = 4,950 models).'
          ]
        },
        {
          title: '3. Error-Correcting Output Codes (ECOC)',
          content: [
            'Principle: Assigns each class a unique binary codeword of length L. Train L binary classifiers, one for each bit column.',
            'Inference: Running all L classifiers produces an output bit string. Assign to the class whose predetermined codeword has the shortest Hamming distance to the prediction.',
            'Pros: Redundant code design enables error-correction even if several individual classifiers predict incorrectly.'
          ]
        },
        {
          title: '4. Summary Comparison Table',
          table: {
            headers: ['Decomposition Strategy', 'Number of Models for N Classes', 'Training Data per Model', 'Decision Rule'],
            rows: [
              { parameter: 'One-vs-All (OvA)', col1: 'N (e.g., 10 for N = 10)', col2: 'Entire dataset (imbalanced)', col3: 'Argmax confidence score' },
              { parameter: 'One-vs-One (OvO)', col1: 'N(N - 1)/2 (e.g., 45 for N = 10)', col2: 'Subset of 2 classes only (balanced)', col3: 'Max voting tally' },
              { parameter: 'ECOC', col1: 'L (codeword length)', col2: 'Structured multi-class partitions', col3: 'Minimum Hamming distance' }
            ]
          }
        }
      ],
      summary: [
        'Multiclass decomposition transforms C classes into binary sub-problems.',
        'One-vs-All trains C models (fast, imbalanced subsets).',
        'One-vs-One trains C(C-1)/2 pairwise models (balanced, quadratic scaling).',
        'ECOC uses binary codeword mapping with built-in error correction.'
      ],
      keyPoints: [
        'OvA: N models, argmax confidence',
        'OvO: N(N-1)/2 models, majority voting',
        'ECOC Hamming distance error correction',
        'Computational scaling tradeoffs'
      ]
    },
    {
      id: 'ml-u4-q15',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 15,
      title: 'Handling Imbalanced Data in Multiclass Classification',
      shortTitle: 'Handling Class Imbalance in Multiclass Classification',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q4(b)', marks: 6 }
      ],
      syllabusTopics: ['Class Imbalance', 'SMOTE', 'Cost-Sensitive Learning', 'Resampling'],
      definition: 'Techniques to mitigate severe class distribution skew where majority classes overwhelm minority classes, rendering standard accuracy misleading and biasing model predictions toward the majority.',
      sections: [
        {
          title: '1. The Problem of Class Imbalance',
          content: [
            'In applications like fraud detection or rare disease diagnosis, negative cases may constitute 99% of data.',
            'Accuracy Paradox: A naive model predicting "Negative" 100% of the time achieves 99% accuracy while having zero real-world utility.',
            'Standard loss functions assume equal class distributions and treat all misclassifications identically.'
          ]
        },
        {
          title: '2. Remediation Strategies',
          content: [
            '1. Data-Level Resampling:',
            '   - Random Under-sampling: Remove instances from majority classes (risk of discarding informative samples).',
            '   - Random Over-sampling: Duplicate minority instances (risk of overfitting).',
            '   - SMOTE (Synthetic Minority Over-sampling Technique): Synthesizes new minority instances along line segments connecting existing k-nearest minority neighbours.',
            '2. Algorithm-Level Modifications:',
            '   - Cost-Sensitive Learning: Assign higher misclassification penalty C_minority >> C_majority in the loss objective.',
            '   - Class Weighting: Automatically scale weights inversely proportional to class frequencies.',
            '3. Metric Selection:',
            '   - Discard raw Accuracy. Prioritize Precision, Recall, F1-Score, PR-AUC, and Macro-averaged F1.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-imbalance-bars',
          title: 'Balanced vs Imbalanced Class Distributions',
          caption: 'Visual contrast between equal class partitions and a skewed distribution with severe minority representation.',
          type: 'svg-interactive',
          svgType: 'imbalance-bars'
        }
      ],
      summary: [
        'Class imbalance causes models to ignore rare minority instances while displaying falsely high accuracy.',
        'Remedies: Data resampling (SMOTE synthesis), cost-sensitive loss weighting, stratified cross-validation.',
        'Always evaluate imbalanced multiclass models using Precision, Recall, and Macro-F1 rather than Accuracy.'
      ],
      keyPoints: [
        'Accuracy paradox on skewed data',
        'SMOTE synthetic oversampling',
        'Cost-sensitive loss weighting',
        'Macro-F1 and Precision-Recall metrics'
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
      shortTitle: 'Comprehensive Classification Evaluation Framework',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q3(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q3(c)', marks: 6 }
      ],
      syllabusTopics: ['Classification Metrics', 'Confusion Matrix', 'ROC-AUC', 'Cross-Validation'],
      definition: 'A comprehensive suite of quantitative statistical metrics and validation protocols used to assess the discriminative power, calibration, and generalization performance of classification models.',
      sections: [
        {
          title: '1. The Core Metrics Suite',
          table: {
            headers: ['Metric Name', 'Mathematical Formula', 'Conceptual Interpretation'],
            rows: [
              { parameter: 'Accuracy', col1: '(TP + TN) / (TP + TN + FP + FN)', col2: 'Overall fraction of correct predictions across all classes.' },
              { parameter: 'Precision', col1: 'TP / (TP + FP)', col2: 'Reliability of positive calls: "Of all flagged positives, how many are truly positive?"' },
              { parameter: 'Recall (Sensitivity)', col1: 'TP / (TP + FN)', col2: 'Coverage of true positives: "Of all actual positive cases, how many did we capture?"' },
              { parameter: 'Specificity (TNR)', col1: 'TN / (TN + FP)', col2: 'Coverage of true negatives: "Of all actual negatives, how many were correctly cleared?"' },
              { parameter: 'F1-Score', col1: '2 · (Precision · Recall) / (Precision + Recall)', col2: 'Harmonic mean of precision and recall; balanced single metric.' },
              { parameter: 'ROC-AUC', col1: 'Area Under Curve (TPR vs FPR)', col2: 'Threshold-independent discrimination capacity across all possible cutoffs.' }
            ]
          }
        },
        {
          title: '2. Validation Protocols',
          content: [
            'Hold-Out Validation: Train/Test split (e.g., 80/20). Fast, but sensitive to sample splitting variance.',
            'K-Fold Cross-Validation: Splits data into K equal folds; trains on K-1, tests on 1, repeated K times. Reports mean score.',
            'Stratified K-Fold: Ensures each fold preserves exact population class proportions (essential for imbalanced data).'
          ]
        }
      ],
      summary: [
        'Classification evaluation relies on the confusion matrix (TP, TN, FP, FN).',
        'Primary metrics: Accuracy, Precision, Recall, F1-Score, Specificity, and ROC-AUC.',
        'Validation protocols: Train/Test split, K-Fold CV, Stratified K-Fold CV.'
      ],
      keyPoints: [
        'Confusion matrix baseline',
        'Precision vs Recall vs Specificity formulas',
        'Harmonic mean in F1 score',
        'Stratified K-Fold cross-validation'
      ]
    },
    {
      id: 'ml-u4-q18',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 18,
      title: 'Short Note on Importance of Confusion Matrix',
      shortTitle: 'Importance of the Confusion Matrix',
      marks: 4,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q4(b)', marks: 4 }
      ],
      syllabusTopics: ['Confusion Matrix', 'TP', 'TN', 'FP', 'FN'],
      definition: 'A Confusion Matrix is a tabular representation that compares actual ground truth class labels against predicted model outputs, forming the mathematical foundation for all classification metrics.',
      sections: [
        {
          title: '1. Binary Matrix Structure',
          content: [
            'True Positive (TP): Actual Positive correctly predicted as Positive.',
            'True Negative (TN): Actual Negative correctly predicted as Negative.',
            'False Positive (FP - Type I Error): Actual Negative incorrectly predicted as Positive (false alarm).',
            'False Negative (FN - Type II Error): Actual Positive incorrectly predicted as Negative (missed case).'
          ],
          table: {
            headers: ['-', 'Predicted Positive (+)', 'Predicted Negative (-)'],
            rows: [
              { parameter: 'Actual Positive (+)', col1: 'True Positive (TP)', col2: 'False Negative (FN) [Type II Error]' },
              { parameter: 'Actual Negative (-)', col1: 'False Positive (FP) [Type I Error]', col2: 'True Negative (TN)' }
            ]
          }
        },
        {
          title: '2. Why the Confusion Matrix is Indispensable',
          content: [
            '1. Detailed Error Profiling: Reveals not just error counts, but the exact nature of mistakes (Type I vs Type II).',
            '2. Asymmetric Error Costs: In medical diagnosis, a False Negative (missed cancer) is far more catastrophic than a False Positive (extra biopsy).',
            '3. Foundation for Advanced Metrics: Accuracy, Precision, Recall, Specificity, and F1 all derive directly from matrix cells.',
            '4. Invaluable for Multiclass Diagnosis: In C×C matrices, off-diagonal cells immediately expose which classes are frequently confused with each other.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-confusion-matrix',
          title: 'Confusion Matrix Architecture & Error Types',
          caption: '2x2 contingency table illustrating True Positives, True Negatives, False Positives (Type I), and False Negatives (Type II).',
          type: 'svg-interactive',
          svgType: 'confusion-matrix'
        }
      ],
      summary: [
        'The confusion matrix maps actual vs predicted labels into TP, TN, FP, and FN.',
        'Distinguishes between Type I (False Positive) and Type II (False Negative) errors.',
        'Crucial for asymmetric cost problems (medical diagnosis, fraud, security).'
      ],
      keyPoints: [
        'TP, TN, FP, FN cell definitions',
        'Type I vs Type II error classification',
        'Asymmetric real-world error costs',
        'Base for all derived classification metrics'
      ]
    },
    {
      id: 'ml-u4-q19',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 19,
      title: 'Explain Accuracy, Precision, Recall and F-Score',
      shortTitle: 'Accuracy, Precision, Recall & F-Score Explained',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 6', questionNo: 'Q4(b)', marks: 6 }
      ],
      syllabusTopics: ['Accuracy', 'Precision', 'Recall', 'F-Score', 'Metrics'],
      definition: 'Comprehensive mathematical breakdown of the four pillars of classification evaluation, detailing formulas, intuitive meanings, and appropriate application contexts.',
      sections: [
        {
          title: '1. Mathematical Formulations & Interpretations',
          content: [
            'Accuracy = (TP + TN) / Total: Percentage of total correct decisions. Valid only when class distributions are roughly equal.',
            'Precision = TP / (TP + FP): Fraction of positive predictions that were accurate. Critical when False Positives carry high cost (e.g., spam filter marking legitimate business email as spam).',
            'Recall (Sensitivity) = TP / (TP + FN): Fraction of actual positive instances successfully detected. Critical when False Negatives carry high cost (e.g., failing to detect infectious virus).',
            'F1-Score = 2·(Precision·Recall) / (Precision + Recall): Harmonic mean ensuring balanced performance. A high F1 is only possible if both precision and recall are simultaneously strong.'
          ],
          formulas: [
            { name: 'Accuracy', latex: '\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}' },
            { name: 'Precision', latex: '\\text{Precision} = \\frac{TP}{TP + FP}' },
            { name: 'Recall', latex: '\\text{Recall} = \\frac{TP}{TP + FN}' },
            { name: 'F1-Score', latex: 'F_1 = 2\\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2TP}{2TP + FP + FN}' }
          ]
        },
        {
          title: '2. Worked Calculation Example',
          content: [
            'Given evaluation counts: TP = 40, FP = 10, FN = 20, TN = 30. Total = 100.'
          ],
          table: {
            headers: ['Metric', 'Formula Substitution', 'Computed Score'],
            rows: [
              { parameter: 'Accuracy', col1: '(40 + 30) / 100', col2: '70 / 100 = 0.700 (70.0%)' },
              { parameter: 'Precision', col1: '40 / (40 + 10)', col2: '40 / 50 = 0.800 (80.0%)' },
              { parameter: 'Recall', col1: '40 / (40 + 20)', col2: '40 / 60 = 0.667 (66.7%)' },
              { parameter: 'F1-Score', col1: '2 · (0.800 · 0.667) / (0.800 + 0.667)', col2: '1.067 / 1.467 = 0.727 (72.7%)' }
            ]
          }
        }
      ],
      summary: [
        'Accuracy = Correct / Total (fails on imbalanced data).',
        'Precision = TP / (TP + FP) (minimizes false alarms).',
        'Recall = TP / (TP + FN) (minimizes missed detections).',
        'F1-Score is the harmonic mean balancing Precision and Recall.'
      ],
      keyPoints: [
        'Formulas for Accuracy, Precision, Recall, F1',
        'Harmonic mean mathematical property',
        'Cost of FP vs Cost of FN in practice',
        'Standard 100-sample worked verification'
      ]
    },
    {
      id: 'ml-u4-q20',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 20,
      title: 'Relation between Precision and Recall (with example)',
      shortTitle: 'Precision-Recall Trade-off & Decision Thresholds',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 6', questionNo: 'Q3(c)', marks: 6 }
      ],
      syllabusTopics: ['Precision-Recall Tradeoff', 'Decision Threshold', 'PR Curve'],
      definition: 'Precision and Recall exist in an inherent inverse mathematical trade-off governed by the classification decision threshold: adjusting the threshold to increase one metric inevitably degrades the other.',
      sections: [
        {
          title: '1. Mechanism of the Decision Threshold',
          content: [
            'Probabilistic classifiers output p(y = 1 | x). The default decision boundary is threshold θ = 0.50.',
            'Raising the Threshold (e.g., θ = 0.80): The model only flags positive if extremely confident. False Positives plummet ==> Precision increases. However, many borderline positives are missed ==> Recall decreases.',
            'Lowering the Threshold (e.g., θ = 0.20): The model becomes aggressive in flagging positives. Missed cases drop ==> Recall increases. However, false alarms multiply ==> Precision decreases.'
          ]
        },
        {
          title: '2. Concrete Numerical Demonstration (Spam Classifier, 60 Actual Spam Emails)',
          table: {
            headers: ['Decision Threshold', 'TP', 'FP', 'FN', 'Precision: TP/(TP+FP)', 'Recall: TP/(TP+FN)'],
            rows: [
              { parameter: 'Low Threshold (0.30)', col1: '55', col2: '30', col3: '5', col4: '55 / 85 = 0.647', col5: '55 / 60 = 0.917' },
              { parameter: 'Medium Threshold (0.50)', col1: '40', col2: '10', col3: '20', col4: '40 / 50 = 0.800', col5: '40 / 60 = 0.667' },
              { parameter: 'High Threshold (0.80)', col1: '25', col2: '2', col3: '35', col4: '25 / 27 = 0.926', col5: '25 / 60 = 0.417' }
            ]
          }
        },
        {
          title: '3. Domain Selection Criteria',
          content: [
            'Prioritize High Precision: Spam filtering (losing a critical client contract to spam is disastrous), YouTube video recommendation.',
            'Prioritize High Recall: Cancer screening (missing a tumor is fatal), airport weapons screening, fraud monitoring.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-precision-recall',
          title: 'Precision-Recall Inverse Trade-off Curve',
          caption: 'Visualizing the non-linear inverse trade-off curve across low, medium, and high classification probability thresholds.',
          type: 'svg-interactive',
          svgType: 'precision-recall'
        }
      ],
      summary: [
        'Precision and Recall exhibit an inverse relationship driven by the decision threshold.',
        'High threshold = High Precision, Low Recall (few false alarms, misses marginal cases).',
        'Low threshold = High Recall, Low Precision (catches all positives, generates false alarms).',
        'Threshold is tuned based on real-world cost asymmetry of Type I vs Type II errors.'
      ],
      keyPoints: [
        'Decision threshold parameter θ',
        'Inverse mathematical relationship',
        'Spam filter (Precision) vs Cancer screening (Recall)',
        'Precision-Recall curve visualization'
      ]
    },
    {
      id: 'ml-u4-q21',
      unitId: 'unit-4',
      subjectId: 'machine-learning',
      qNumber: 21,
      title: 'K-Fold Cross-Validation: Effect of Large and Small K; How to Choose K',
      shortTitle: 'K-Fold Cross-Validation & Parameter K Selection',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 6', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['K-Fold Cross-Validation', 'LOOCV', 'Bias-Variance of Estimator', 'Stratified K-Fold'],
      definition: 'K-Fold Cross-Validation is a resampling evaluation methodology that partitions data into K equal folds, sequentially testing on each fold while training on the remaining K - 1 folds to provide an unbiased estimate of generalization error.',
      sections: [
        {
          title: '1. Protocol of K-Fold Cross-Validation',
          content: [
            '1. Randomly shuffle and split dataset into K equal-sized folds.',
            '2. For i = 1 to K: Hold out fold i as validation set; train model on remaining K - 1 folds; compute validation score Sᵢ.',
            '3. Aggregate scores: Overall CV Performance = (1/K) ∑ Sᵢ.'
          ]
        },
        {
          title: '2. Effect of the Value of K',
          table: {
            headers: ['Evaluation Parameter', 'K is Large (e.g., K = N, LOOCV)', 'K is Small (e.g., K = 2)'],
            rows: [
              { parameter: 'Training Set Size per Fold', col1: 'Very large (~100% of data; N-1 points)', col2: 'Small (only 50% of data for K = 2)' },
              { parameter: 'Bias of Performance Estimate', col1: 'Low Bias (trained on almost full dataset)', col2: 'High Bias (underestimates model capability due to smaller data)' },
              { parameter: 'Variance of Performance Estimate', col1: 'High Variance (training sets are almost identical, highly correlated)', col2: 'Low Variance (training sets are largely distinct)' },
              { parameter: 'Computational Overhead', col1: 'Extremely high (must train N complete models)', col2: 'Very cheap and fast (trains only 2 models)' }
            ]
          }
        },
        {
          title: '3. Guidelines for Choosing K',
          content: [
            'Standard Empirical Choice: K = 5 or K = 10 offers the optimal balance between bias, variance, and computational expense.',
            'Small Datasets: Use large K (or Leave-One-Out CV) to ensure sufficient data is available for model training.',
            'Massive Datasets: Use K = 3 or K = 5 (or simple train/val/test holdout) to bound training time.',
            'Classification Tasks: Always use Stratified K-Fold to maintain identical class ratios across every fold.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-kfold-cv',
          title: '5-Fold Cross-Validation Split Protocol',
          caption: 'Grid of 5 sequential iterations showing 4 green training folds and 1 red rotating test fold per round.',
          type: 'svg-interactive',
          svgType: 'kfold-cv'
        }
      ],
      summary: [
        'K-Fold CV splits data into K folds, rotating the test fold across K iterations.',
        'Large K (LOOCV) = Low bias, high variance, heavy computation.',
        'Small K = High bias, low variance, fast computation.',
        'K = 5 or 10 is the standard sweet spot; use Stratified K-Fold for classification.'
      ],
      keyPoints: [
        'K-Fold resampling protocol',
        'Large K (LOOCV) vs Small K tradeoffs',
        'Bias-Variance trade-off of the estimator',
        'K = 5 / 10 empirical rule and Stratification'
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
