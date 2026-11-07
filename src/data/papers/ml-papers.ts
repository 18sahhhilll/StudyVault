import { QuestionPaper } from '@/types';

export const mlQuestionPapers: QuestionPaper[] = [
  // ==========================================
  // Paper 1: April / May 2023 ([6004]-481, P546)
  // ==========================================
  {
    id: 'ml-april-2023',
    subjectId: 'machine-learning',
    subjectName: 'Machine Learning',
    subjectCode: '410242',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'April / May 2023',
    paperCode: '[6004]-481',
    paperSubCode: 'P546',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Attempt Q.1 or Q.2, Q.3 or Q.4, Q.5 or Q.6 and Q.7 or Q.8.',
      'Figures to the right indicate full marks.',
      'Neat diagrams must be drawn wherever necessary.',
      'Assume suitable data, if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Supervised Learning — Regression',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Explain the following terms with suitable examples:\ni) Bias\nii) Variance\niii) Under fitting and Over fitting',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q6',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Differentiate between Lasso Regression and Ridge Regression.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q8',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(c)',
              text: 'Explain gradient descent algorithm with example.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q10',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'What do you mean by regression? Explain with suitable example.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q1',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Write a short note on :\ni) MAE\nii) RMSE\niii) R²',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q14',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q2(c)',
              text: 'What is gradient descent? Compare batch gradient and stochastic gradient descent.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q10',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Supervised Learning — Classification',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Explain with example the variant of SVM, the support vector regression.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q7',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(b)',
              text: 'What do you mean by ensemble learning? Differentiate between bagging & boosting.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q10',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(c)',
              text: 'What are different variants of multi-class classification? Explain them with suitable example.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q14',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'Calculate macro average precision, macro average recall and macro average F-score for the following given confusion matrix of multi-class classification:\n\nPredictions →\n        A    B   C   D\nA     100   80  10  10\nB       0    9   0   1\nC       0    1   8   1\nD       0    1   0   9',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q22',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Write a short note on :\ni) Random forest\nii) Adaboost',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q11',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q4(c)',
              text: 'Discuss K-nearest neighbour algorithm with suitable example.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q1',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Unsupervised Learning & Clustering',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'With reference to Clustering explain the issue of "Optimization of Clusters".',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q3',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(b)',
              text: 'Compare Hierarchical clustering and K-means clustering.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q6',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(c)',
              text: 'Explain how a cluster is formed in the density based clustering algorithm.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q7',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'How would you choose the number of clusters when designing a K-Medoid clustering algorithm?',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q16',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Write a short note on outlier analysis with respect to clustering.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q9',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q6(c)',
              text: 'Differentiate between K-means and Spectral clustering.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q14',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Neural Networks & Deep Learning',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'What are building blocks of neural network, elaborate?',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q2',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(b)',
              text: 'Describe characteristics of back propagation algorithm.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(c)',
              text: 'Write a short note on Recurrent neural n/w & convolutional neural n/w.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q10',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Explain artificial neural n/w based on perceptron concept with diagram.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q2',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(b)',
              text: 'Describe multi-layer neural n/w. Explain why back propagation algorithm is required.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q3',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(c)',
              text: 'Discuss any two activation functions with example.',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q1',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // Paper 2: April / May 2024 ([6263]-82, PB-2244)
  // ==========================================
  {
    id: 'ml-april-2024',
    subjectId: 'machine-learning',
    subjectName: 'Machine Learning',
    subjectCode: '410242',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'April / May 2024',
    paperCode: '[6263]-82',
    paperSubCode: 'PB-2244',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Answer Q.1 or Q.2, Q.3 or Q.4, Q.5 or Q.6, Q.7 or Q.8.',
      'Figures to the right side indicate full marks.',
      'Draw neat diagram wherever necessary.',
      'Assume suitable data, if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Supervised Learning — Regression',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Define different regression models.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q2',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(b)',
              text: 'What are different techniques to reduce under fitting?',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q4',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(c)',
              text: 'With following data of shows company expenditure:\nx(month): 1, 2, 3, 4, 5\ny(expenditure): 12, 19, 29, 37, 45\nUsing regression model predict expenditure of 6th month.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q17',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'What is R² measure of evaluation?',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q14',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q2(b)',
              text: 'What do you mean by least square method? Explain least square method in the context of linear regression.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q12',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q2(c)',
              text: 'Write a short note on stochastic gradient descent algorithms.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q11',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Supervised Learning — Classification',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Why ensemble learning is used for ML?',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q8',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(b)',
              text: 'What are advantages and disadvantages of K-NN?',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q2',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(c)',
              text: 'What are different distance metrics used in k-NN?',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q3',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'What is multiclass classification? Explain the variants of multiclass classification.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q14',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Explain kernel methods which are suitable for SVM.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q6',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q4(c)',
              text: 'What are different techniques used for outlier handling?',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q16',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Unsupervised Learning & Clustering',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'Why K-medoid is used? Explain k-medoid algorithm.',
              marks: 5,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q4',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(b)',
              text: 'Why density based clustering is used? Explain any one.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q7',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(c)',
              text: 'What is outlier analysis?',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q9',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'What is isolation factor model?',
              marks: 5,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q11',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Explain k means algorithm.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q1',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q6(c)',
              text: 'Explain Hierarchical clustering with example.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Neural Networks & Deep Learning',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'What is Multilayer perceptron? Describe with diagram.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q3',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(b)',
              text: 'What are different activation function used in NN?',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q1',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(c)',
              text: 'Explain Convolution Neural Network (CNN) with suitable example.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q9',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Explain building blocks of RBF networks.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q5',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(b)',
              text: 'What is Personalized recommendation? What is content based recommendation?',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q12',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(c)',
              text: 'Explain Recurrent Neural Networks with an example.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q7',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // Paper 3: May 2024 ([6404]-82, PD4577)
  // ==========================================
  {
    id: 'ml-may-2024',
    subjectId: 'machine-learning',
    subjectName: 'Machine Learning',
    subjectCode: '410242',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'May 2024',
    paperCode: '[6404]-82',
    paperSubCode: 'PD4577',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Answer Q.1 or Q.2, Q.3 or Q.4, Q.5 or Q.6, Q.7 or Q.8.',
      'Figures to the right indicate full marks.',
      'Neat diagrams must be drawn wherever necessary.',
      'Make suitable assumption whenever necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Supervised Learning — Regression',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Explain Linear Regression in brief.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q1',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Differentiate overfitting and under fitting with example.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q3',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(c)',
              text: 'Write short note on Training error and Generalization error in machine learning.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q5',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'Explain in brief importance of Evaluation matrix.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q13',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Write short note on Lasso and Ridge Regression.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q8',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q2(c)',
              text: 'Memory (Capacity) and cost of RAM as shown in below table:\nX (Memory Capacity in GB): 2, 4, 8, 16\nY (Cost in $): 12, 16, 28, 62\ni) Find Regression line Y = aX + b using least square method.\nii) Estimate the cost of 32 GB RAM using line as equation.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q16',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Supervised Learning — Classification',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Differentiate Binary classification with multiclass classification with example.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q13',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(b)',
              text: 'Explain with example ensemble learning in ML.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q8',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(c)',
              text: 'Write short note on metrics for Evaluating classifier performance.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q17',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'Explain KNN with example.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q1',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Write short note on handling imbalance data in multiclass classification.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q15',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q4(c)',
              text: 'Explain Bagging and Boosting used in ensemble learning.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q10',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Unsupervised Learning & Clustering',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'Explain Hierarchical clustering with example.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(b)',
              text: 'What is outlier Analysis? Explain it with importance, advantages & disadvantages.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q9',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(c)',
              text: 'Write short note on Elbow method used in K-mean clustering.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q15',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'Compare Intrinsic motivation with extrinsic motivation.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q18',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Explain K mean clustering with essential steps used in it.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q1',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q6(c)',
              text: 'Write short note on:\ni) Graph Based clustering\nii) Density Based clustering',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q13',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Neural Networks & Deep Learning',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'Write short note on importance of Activation function used in Neural Network.',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q1',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(b)',
              text: 'Explain Recurrent Neural Network with Example. Compare it simple CNN.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q10',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(c)',
              text: 'Draw & Explain CNN architecture.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q9',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Compare Back propagation Network with feed forward Network.',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q6',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(b)',
              text: 'What are different types of padding used in CNN?',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q11',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(c)',
              text: 'Write short note on layers used in CNN:\ni) Convolutional layer\nii) Pooling layer',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q9',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // Paper 4: November / December 2023 ([6181]-102, P-6552)
  // ==========================================
  {
    id: 'ml-nov-2023',
    subjectId: 'machine-learning',
    subjectName: 'Machine Learning',
    subjectCode: '410242',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'November / December 2023',
    paperCode: '[6181]-102',
    paperSubCode: 'P-6552',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Answer Q1 or Q2, Q3 or Q4, Q5 or Q6, Q7 or Q8.',
      'Neat diagrams must be drawn wherever necessary.',
      'Figures to the right side indicate full marks.',
      'Assume suitable data if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Supervised Learning — Regression',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Differentiate between overfitting and underfitting.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q3',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(b)',
              text: 'The table below shows the number of grams of carbohydrates, X and the number of Calories, Y of six different foods. Find linear regression equation for this dataset:\nCarbohydrates (X): 8, 9.5, 10, 6, 7, 4\nCalories (Y): 12, 138, 147, 88, 108, 62\nAlso find the value of Y for X = 12.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q18',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(c)',
              text: 'Explain Bias Variance Trade off.',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q7',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'What is Linear Regression? Explain the concept of Ridge regression.',
              marks: 9,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q1',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Explain the following Evaluation Metrics :\ni) MAE\nii) RMSE\niii) R²',
              marks: 9,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q14',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Supervised Learning — Classification',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Differentiate between bagging and boosting.',
              marks: 4,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q10',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(b)',
              text: 'What is ensemble learning? Explain the concept of Random Forest ensemble learning.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q11',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(c)',
              text: 'What is the relation between precision and recall? Explain with an example.',
              marks: 4,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q20',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'What is K-fold cross-validation? In K-fold cross-validation, comment on the following situations:\ni) When the value of K is too large\nii) When the value of K is too small.\nHow do you decide the value of k in k-fold cross-validation?',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q21',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Explain i) Accuracy, ii) Precision, iii) Recall, and iv) F-Score',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q19',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Unsupervised Learning & Clustering',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'Explain K-Means clustering in detail with a suitable example.',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q1',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(b)',
              text: 'What is outlier analysis? How is Local Outlier Factor detected?',
              marks: 5,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q10',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(c)',
              text: 'Explain Spectral Clustering algorithm.',
              marks: 5,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q12',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'Explain Hierarchical and Density-based Clustering approaches.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Write short note on :\ni) Optimization of clusters\nii) K-Medoids\niii) Evaluation metrics',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q4',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Neural Networks & Deep Learning',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'Write a note on Single Layer Neural Network.',
              marks: 4,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q2',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(b)',
              text: 'Explain Radial Basis Function networks in detail.',
              marks: 8,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q5',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(c)',
              text: 'Explain Recurrent Neural Networks and its applications in brief.',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q8',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Explain the concept of Back Propagation in ANN with example.',
              marks: 8,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(b)',
              text: 'What is Functional Link Artificial Neural Network (FLANN)? Explain its merits over other ANNs.',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q6',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(c)',
              text: 'What is Activation Function? Explain with a suitable example.',
              marks: 4,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q1',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // Paper 5: November / December 2024 ([6354]-486, PC-2369)
  // ==========================================
  {
    id: 'ml-nov-2024',
    subjectId: 'machine-learning',
    subjectName: 'Machine Learning',
    subjectCode: '410242',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'November / December 2024',
    paperCode: '[6354]-486',
    paperSubCode: 'PC-2369',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Answer Q.1 OR Q.2, Q.3 OR Q.4, Q.5 OR Q.6, Q.7 OR Q.8.',
      'Figures to the right side indicate full marks.',
      'Draw neat diagram wherever necessary.',
      'Assume suitable data, if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Supervised Learning — Regression',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Explain Lasso Regression. Explain how Lasso Regression is used for feature selection.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q9',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Define different regression models.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q2',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q1(c)',
              text: 'Describe the bias-variance trade-off and its relationship to under fitting and overfitting.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q7',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'Explain the advantages of RMSE over MSE as an evaluation metric.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q15',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q2(b)',
              text: 'What do you mean by least square method? Explain least square method in the context of linear regression.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q12',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q2(c)',
              text: 'Write a short note on Stochastic gradient descendent algorithms.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Supervised Learning — Regression',
              mappedQuestionId: 'ml-u3-q11',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Supervised Learning — Classification',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Explain kernel methods which are suitable for SVM.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q6',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(b)',
              text: 'What are advantages and disadvantages of K-NN?',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q2',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q3(c)',
              text: 'What are different distance metrics are used in K-NN?',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q3',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'What is Multi Class Classification? Explain the variants of Multi Class Classification.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q14',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q4(b)',
              text: 'What are different techniques used for outlier handing?',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q16',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q4(c)',
              text: 'With suitable diagram, Explain Random forest Algorithm with example.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Supervised Learning — Classification',
              mappedQuestionId: 'ml-u4-q11',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Unsupervised Learning & Clustering',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'Why K-medoid is used? Explain K-medoid algorithm.',
              marks: 5,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q4',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(b)',
              text: 'Why density based clustering is used? Explain any one.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q7',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q5(c)',
              text: 'Cluster the following eight points (with (x, y) representing locations) into three clusters:\nP1(1, 3), P2(2, 2), P3(5, 8), P4(8, 5), P5(3, 9), P6(10, 7), P7(3, 3), P8(9, 4), P9(3, 7)\nUse K-Means Algorithm to find the three cluster.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q2',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'What is isolation factor model?',
              marks: 5,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q11',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Explain Hierarchical Clustering with an example.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q6(c)',
              text: 'Micro-Average Precision and Recall, Micro-Average F-score.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Unsupervised Learning',
              mappedQuestionId: 'ml-u5-q19',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Neural Networks & Deep Learning',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'Explain Recurrent Neural Networks with an example.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q7',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(b)',
              text: 'What are different activation function used in NN?',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q1',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q7(c)',
              text: 'What is multilayer perceptron? Describe with diagram.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q3',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Explain building blocks of RBF networks.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q5',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(b)',
              text: 'What is personalized recommendation? What is content based recommendation?',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q12',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            },
            {
              subNumber: 'Q8(c)',
              text: 'Explain the Convolution Neural Network (CNN) with suitable example.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Introduction to Neural Networks',
              mappedQuestionId: 'ml-u6-q9',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'machine-learning'
            }
          ]
        }
      }
    ]
  }
];
