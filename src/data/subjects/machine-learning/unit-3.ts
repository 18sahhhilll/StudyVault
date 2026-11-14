import { Unit } from '@/types';

export const unit3Data: Unit = {
  id: 'unit-3',
  unitNumber: 3,
  title: 'Supervised Learning — Regression',
  shortTitle: 'Regression',
  description: 'In-depth coverage of Bias, Variance, Overfitting, Underfitting, Linear, Ridge, and Lasso Regression, Gradient Descent algorithms, Least Squares, and comprehensive evaluation metrics.',
  syllabus: [
    'Bias and Variance',
    'Generalization, Underfitting and Overfitting',
    'Linear Regression & Multiple Linear Regression',
    'Lasso (L1) and Ridge (L2) Regularization',
    'Gradient Descent & Stochastic Gradient Descent (SGD)',
    'Least Square Method & Normal Equations',
    'Evaluation Metrics: MAE, MSE, RMSE, R² and Adjusted R²'
  ],
  questionPaperIndex: [
    { paper: 'Paper 1', qMain: '(a) → Q1, (b) → Q3, (c) → Q5', qOr: '(a) → Q13, (b) → Q8, (c) → Q16' },
    { paper: 'Paper 2', qMain: '(a) → Q2, (b) → Q4, (c) → Q17', qOr: '(a) → Q14, (b) → Q12, (c) → Q11' },
    { paper: 'Paper 3', qMain: '(a) → Q9, (b) → Q2, (c) → Q7', qOr: '(a) → Q15, (b) → Q12, (c) → Q11' },
    { paper: 'Paper 4', qMain: '(a) → Q6 (+Q3), (b) → Q8, (c) → Q10', qOr: '(a) → Q1, (b) → Q14, (c) → Q10' },
    { paper: 'Paper 5', qMain: '(a) → Q3, (b) → Q18, (c) → Q7', qOr: '(a) → Q1 + Q8, (b) → Q14' },
    { paper: 'Paper 6', qMain: '(a) → Q4, (b) → Q19, (c) → Q14', qOr: '(a) → Q8, (b) → Q7, (c) → Q13' },
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Regression', definition: 'Supervised learning technique modeling the relationship between dependent continuous variable (y) and one or more independent variables (x).' },
      { term: 'Linear Regression', definition: 'Fits a straight line y = mx + b (or h_θ(x) = θ₀ + θ₁x) to predict continuous outcomes by minimizing sum of squared errors.' },
      { term: 'Underfitting', definition: 'High bias, low variance; model is too simple to capture underlying patterns, resulting in high training and test errors.' },
      { term: 'Overfitting', definition: 'Low bias, high variance; model is overly complex and memorizes noise, leading to very low training error but high test error.' },
      { term: 'Ridge Regression', definition: 'Linear regression with L2 regularization (λ∑βⱼ²), which shrinks coefficients toward zero without eliminating features; handles multicollinearity.' },
      { term: 'Lasso Regression', definition: 'Linear regression with L1 regularization (λ∑|βⱼ|), which shrinks coefficients exactly to zero to perform automatic feature selection.' },
      { term: 'Gradient Descent', definition: 'First-order iterative optimization algorithm moving in the direction of negative gradient to minimize the cost function: θ := θ - η∇J(θ).' },
      { term: 'Coefficient of Determination (R²)', definition: 'Metric representing the proportion of variance in dependent variable explained by the model: R² = 1 - (SS_res / SS_tot).' }
    ],
    coreFormulas: [
      { name: 'Linear Regression Hypothesis', latex: 'y = mx + b \\quad \\text{or} \\quad h_\\theta(x) = \\theta_0 + \\theta_1 x' },
      { name: 'Least Squares Slope (a)', latex: 'a = \\frac{n\\sum xy - \\sum x \\sum y}{n\\sum x^2 - (\\sum x)^2}' },
      { name: 'Least Squares Intercept (b)', latex: 'b = \\bar{y} - a\\bar{x}' },
      { name: 'Total Error Decomposition', latex: '\\text{Total Error} = \\text{Bias}^2 + \\text{Variance} + \\sigma^2 \\text{ (Irreducible)}' },
      { name: 'Ridge Cost (L2)', latex: 'J(\\beta) = \\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2 + \\lambda \\sum_{j=1}^{p}\\beta_j^2' },
      { name: 'Lasso Cost (L1)', latex: 'J(\\beta) = \\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2 + \\lambda \\sum_{j=1}^{p}|\\beta_j|' },
      { name: 'Gradient Descent Update', latex: '\\theta_{j} := \\theta_{j} - \\eta \\frac{\\partial J(\\theta)}{\\partial \\theta_{j}}' },
      { name: 'Mean Absolute Error (MAE)', latex: '\\text{MAE} = \\frac{1}{N}\\sum_{i=1}^{N}|y_i - \\hat{y}_i|' },
      { name: 'Root Mean Squared Error (RMSE)', latex: '\\text{RMSE} = \\sqrt{\\frac{1}{N}\\sum_{i=1}^{N}(y_i - \\hat{y}_i)^2}' },
      { name: 'R-Squared (R²)', latex: 'R^2 = 1 - \\frac{SS_{res}}{SS_{tot}} = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}' },
      { name: 'Adjusted R²', latex: 'R^2_{adj} = 1 - \\frac{(1 - R^2)(N - 1)}{N - p - 1}' }
    ],
    comparisonHighlights: [
      { title: 'Overfitting vs Underfitting', summary: 'Overfitting = Low Bias, High Variance, complex model, fails on test data. Underfitting = High Bias, Low Variance, overly simple model, fails on both.' },
      { title: 'Ridge (L2) vs Lasso (L1)', summary: 'Ridge shrinks weights smoothly (circular constraint, keeps all features, handles collinearity). Lasso shrinks weights to exact zeros (diamond constraint, does feature selection).' },
      { title: 'Batch GD vs SGD', summary: 'Batch GD uses entire dataset per step (smooth, deterministic, slow). SGD uses 1 sample per step (fast, noisy, low memory, escapes local minima).' },
      { title: 'MAE vs RMSE', summary: 'MAE is robust to outliers and represents median error. RMSE penalizes larger errors heavily and matches the scale/unit of target y.' }
    ],
    examTips: [
      'In numericals, always tabulate x, y, xy, x² first and state total sums before plugging into slope formula a and intercept b.',
      'Always sketch the Bias-Variance tradeoff curve and label the optimal complexity point clearly to secure full marks.',
      'Highlight difference between Ridge and Lasso using the geometric constraint diagram (circle vs diamond).'
    ]
  },
  questions: [
    {
      id: 'ml-u3-q1',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 1,
      title: 'What is Regression? Explain Linear Regression (with example)',
      shortTitle: 'Regression & Linear Regression Explained',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q1(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q2(a)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q2(a)', notes: 'First part; Ridge part covered in Q8' }
      ],
      syllabusTopics: ['Regression', 'Linear Regression', 'Least Squares'],
      definition: 'Linear Regression is a supervised Machine Learning algorithm used to predict a continuous numerical value by establishing a linear relationship between dependent and independent variables.',
      sections: [
        {
          title: '1. Definition and Simple Explanation',
          content: [
            'Definition: Linear Regression is a supervised machine learning algorithm that models the linear relationship between a continuous dependent target variable (y) and one or more independent predictor features (x).',
            'In simple words:',
            'Linear Regression finds the straight-line relationship between input features and output values and uses that relationship to predict new continuous numerical values.'
          ]
        },
        {
          title: '2. Mathematical Formulation & Equation',
          content: [
            'Simple Linear Regression fits a straight line with one independent variable:',
            'Equation: y = mx + b  (or h_θ(x) = θ₀ + θ₁x)',
            'Where each term means:',
            '• y = Dependent variable (the value we want to predict).',
            '• x = Independent variable (the input feature).',
            '• m (or θ₁) = Slope: represents the change in y for every 1-unit increase in x.',
            '• b (or θ₀) = Intercept: represents the baseline value of y when x is 0.',
            'Multiple Linear Regression extends this to multiple input features: y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε.'
          ],
          formulas: [
            { name: 'Simple Linear Regression Line', latex: 'y = mx + b \\quad \\Longleftrightarrow \\quad h_\\theta(x) = \\theta_0 + \\theta_1 x' },
            { name: 'Multiple Linear Regression', latex: 'y = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + \\dots + \\beta_n x_n + \\epsilon' }
          ]
        },
        {
          title: '3. Concrete Relatable Example (Study Hours vs Exam Marks)',
          content: [
            'Suppose we want to predict a student examination marks based on the number of hours they study.',
            'If the trained regression model produces the line:',
            'y = 10 + 8x',
            'Where:',
            '• x = Number of study hours.',
            '• y = Predicted examination marks.',
            '• 10 = Intercept (baseline marks scored even with 0 study hours).',
            '• 8 = Slope (each additional hour of study increases predicted marks by 8).',
            'If a student studies for 5 hours (x = 5):',
            'y = 10 + 8(5) = 10 + 40 = 50 marks.',
            'Therefore, the predicted marks are 50.'
          ]
        },
        {
          title: '4. Advantages, Limitations, and Applications',
          content: [
            'Advantages:',
            '• Simple to understand, interpret, and explain to non-technical stakeholders.',
            '• Fast to train and computationally efficient even on large datasets.',
            '• Highly effective when the underlying data relationship is linear.',
            'Limitations:',
            '• Assumes strict linearity between features and target (underfits curved patterns).',
            '• Highly sensitive to extreme outlier points which pull the line away from the true trend.',
            '• Vulnerable to multicollinearity when independent features are strongly correlated.',
            'Real-World Applications: House price prediction from square footage, employee salary estimation from years of experience, and sales revenue forecasting from advertising budget.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-linear-regression',
          title: 'Linear Regression Best-Fit Line & Data Points',
          caption: 'Fitted linear regression line y = mx + b with observed training points and residual distances.',
          type: 'svg-interactive',
          svgType: 'linear-regression'
        }
      ],
      summary: [
        'Regression predicts continuous targets from input predictors.',
        'Linear regression fits a straight line y = mx + b minimizing squared residual errors.',
        'Slope m indicates sensitivity; intercept b defines the baseline value at x = 0.',
        'Determined analytically via Least Squares or iteratively via Gradient Descent.'
      ],
      keyPoints: [
        'Supervised learning technique',
        'Continuous target output',
        'Straight line hypothesis y = mx + b',
        'Least squares optimization criterion'
      ]
    },
    {
      id: 'ml-u3-q2',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 2,
      title: 'Define Different Regression Models',
      shortTitle: 'Different Regression Models & Taxonomies',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q1(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q1(b)', marks: 6 }
      ],
      syllabusTopics: ['Regression Models', 'Polynomial Regression', 'Ridge', 'Lasso', 'Logistic Regression'],
      definition: 'Regression models are supervised learning algorithms used to establish mathematical relationships between input predictor variables and a continuous target variable.',
      sections: [
        {
          title: '1. What are Regression Models?',
          content: [
            'Definition: Regression models are statistical algorithms that estimate the relationships between one or more independent variables (features) and a continuous dependent variable (outcome).',
            'In simple words:',
            'Regression models help us answer quantitative questions like "What will the price be?", "How much revenue will be earned?", or "What temperature will be recorded?".'
          ]
        },
        {
          title: '2. Primary Types of Regression Models (2-Column Comparison)',
          table: {
            headers: ['Regression Model & Formula', 'When Used, Core Behavior & Real-World Example'],
            rows: [
              {
                parameter: 'Simple Linear Regression: y = β₀ + β₁x',
                col1: 'Used when a single input feature has a straight-line relationship with continuous target; e.g., predicting student marks based on study hours.'
              },
              {
                parameter: 'Multiple Linear Regression: y = β₀ + ∑ βᵢxᵢ',
                col1: 'Used when multiple input features together influence a continuous target; e.g., predicting house prices using size, rooms, and location rating.'
              },
              {
                parameter: 'Polynomial Regression: y = θ₀ + θ₁x + θ₂x² + ... + θ_d x^d',
                col1: 'Used when data patterns are curved and non-linear; fits curves by adding powers of features, but risks severe overfitting at high degrees.'
              },
              {
                parameter: 'Ridge Regression (L2): Cost = SSE + λ ∑ βⱼ²',
                col1: 'Used when independent features are highly correlated (multicollinearity); shrinks weights toward zero without removing any feature.'
              },
              {
                parameter: 'Lasso Regression (L1): Cost = SSE + λ ∑ |βⱼ|',
                col1: 'Used for high-dimensional data with many redundant features; shrinks unimportant weights to exact zero (0.0) to perform automatic feature selection.'
              },
              {
                parameter: 'Logistic Regression: p = 1 / (1 + e^(-z))',
                col1: 'Used for categorical classification outcomes (0 or 1); transforms linear combinations through the sigmoid function to output calibrated probabilities.'
              }
            ]
          }
        },
        {
          title: '3. How to Choose the Right Regression Model',
          content: [
            '• If data is simple and linear: Use Simple or Multiple Linear Regression.',
            '• If data shows curved trends: Use Polynomial Regression (keep degree d low to avoid overfitting).',
            '• If features are highly correlated: Use Ridge Regression (L2) to stabilize coefficient estimates.',
            '• If there are hundreds of features and many are irrelevant: Use Lasso Regression (L1) to eliminate useless features.',
            '• If the target is categorical (Yes/No, Pass/Fail): Use Logistic Regression.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-regression-types',
          title: 'Taxonomy of Regression Models',
          caption: 'Structural hierarchy of linear, polynomial, regularized (Ridge/Lasso), and classification-oriented (Logistic) models.',
          type: 'svg-interactive',
          svgType: 'regression-types'
        }
      ],
      summary: [
        'Linear Regression fits straight lines; Polynomial fits curves using power terms.',
        'Ridge (L2) shrinks coefficients to combat multicollinearity and variance.',
        'Lasso (L1) zeros out irrelevant coefficients to achieve sparse feature selection.',
        'Logistic Regression uses sigmoid transformation to output probabilities for classification.'
      ],
      keyPoints: [
        'Linear vs Non-linear vs Regularized vs Logistic',
        'L2 squared penalty (Ridge) vs L1 absolute penalty (Lasso)',
        'Sigmoid activation function in Logistic regression',
        'Model selection based on linearity, dimensionality, and multicollinearity'
      ]
    },
    {
      id: 'ml-u3-q3',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 3,
      title: 'Differentiate between Overfitting and Underfitting (with example)',
      shortTitle: 'Overfitting vs Underfitting Comparison',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q1(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q1(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q1(a)(iii)', marks: 4 }
      ],
      syllabusTopics: ['Overfitting', 'Underfitting', 'Model Generalization', 'Bias-Variance'],
      definition: 'Underfitting occurs when a model is excessively simple and fails to capture underlying patterns, whereas Overfitting occurs when a model is excessively complex and memorizes training noise at the expense of generalization.',
      sections: [
        {
          title: '1. Theoretical Framework',
          content: [
            'Underfitting (High Bias, Low Variance): The model makes overly rigid assumptions. As a consequence, it generates high error on both training and unseen testing sets.',
            'Overfitting (Low Bias, High Variance): The model adapts too closely to the specific idiosyncrasies and noise of training observations. It scores near-zero training error but exhibits massive testing error.',
            'Good Fit (Balanced Generalization): The model captures the underlying data generating function while ignoring random noise, achieving low and comparable training and test errors.'
          ]
        },
        {
          title: '2. Comparative Analysis Table',
          table: {
            headers: ['Overfitting (High Variance)', 'Underfitting (High Bias)'],
            rows: [
              {
                parameter: 'The model is excessively complex (e.g. 15th-degree polynomial or deep tree) with far too many parameters.',
                col1: 'The model is overly simplistic (e.g. a flat line trying to fit a curved pattern) with too few parameters.'
              },
              {
                parameter: 'Training error is near zero because the model memorizes every single training sample including random noise.',
                col1: 'Training error is very high because the model cannot even capture the basic trend in the training data.'
              },
              {
                parameter: 'Testing error is very high; the model fails dramatically when given new, unseen real-world data.',
                col1: 'Testing error is also very high, closely matching the poor performance on training data.'
              },
              {
                parameter: 'Exhibits Low Bias and High Variance (it is overly sensitive to slight fluctuations in the training set).',
                col1: 'Exhibits High Bias and Low Variance (it makes rigid assumptions that ignore real data patterns).'
              },
              {
                parameter: 'Happens when there are too many features relative to the number of available training samples.',
                col1: 'Happens when features are missing, insufficient, or non-informative for the task.'
              },
              {
                parameter: 'Fixed by: Applying L1/L2 regularization, pruning decision trees, gathering more data, and dropping noisy features.',
                col1: 'Fixed by: Adding polynomial features, using more complex algorithms, and decreasing regularization penalty (λ).'
              }
            ]
          }
        },
        {
          title: '3. Intuitive Example (Real Estate Pricing)',
          content: [
            'Underfitting: Predicting house price purely from a horizontal line (θ₀). Size is completely ignored.',
            'Good Fit: A smooth quadratic curve capturing diminishing returns of square footage.',
            'Overfitting: A degree-10 polynomial passing through every single house data point, predicting negative prices or wild spikes in between samples.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-fit-comparison',
          title: 'Underfitting vs Good Fit vs Overfitting',
          caption: 'Comparing a rigid underfitted line, a balanced good fit, and a wildly oscillating overfitted curve.',
          type: 'svg-interactive',
          svgType: 'fit-comparison'
        }
      ],
      summary: [
        'Underfitting = Model too simple, high training and testing error, high bias.',
        'Overfitting = Model memorizes noise, low training error but high test error, high variance.',
        'Generalization gap reveals overfitting: large discrepancy between train and test loss.',
        'Proper regularization and cross-validation help discover the optimal balance.'
      ],
      keyPoints: [
        'High bias vs high variance',
        'Training error vs generalization error gap',
        'Causes: capacity, features, noise, sample size',
        'Remedies: regularization, more data, feature engineering'
      ]
    },
    {
      id: 'ml-u3-q4',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 4,
      title: 'Techniques to Reduce Underfitting and Overfitting',
      shortTitle: 'Techniques to Mitigate Underfitting & Overfitting',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q1(b)', notes: 'Focused on underfitting' },
        { paper: 'Paper 6', questionNo: 'Q1(a)', notes: 'Comprehensive both' }
      ],
      syllabusTopics: ['Regularization', 'Cross-Validation', 'Early Stopping', 'Feature Engineering'],
      definition: 'Remediation techniques for underfitting and overfitting are reciprocal strategies designed to adjust model complexity, capacity, and regularization constraints toward minimal generalization error.',
      sections: [
        {
          title: '1. Techniques to Reduce Underfitting (High Bias)',
          content: [
            '1. Increase Model Complexity: Upgrade from linear to polynomial regression, increase tree depth, or add hidden layers in neural networks.',
            '2. Add More Informative Features: Perform feature engineering (domain-specific ratios, interaction terms, non-linear transformations).',
            '3. Reduce Regularization Constraints: Decrease the regularization parameter λ (or alpha) to loosen penalties on weights.',
            '4. Increase Training Epochs / Duration: Train until convergence when optimization has stopped prematurely.',
            '5. Remove Noise Filters: Ensure useful variance in the dataset has not been prematurely discarded.'
          ]
        },
        {
          title: '2. Techniques to Reduce Overfitting (High Variance)',
          content: [
            '1. Apply Regularization (L1 Lasso / L2 Ridge): Impose penalties on coefficient magnitudes to restrict model flexibility.',
            '2. Collect More Training Data: Increases diversity of observations, preventing the algorithm from fitting noise.',
            '3. Feature Selection / Dimensionality Reduction: Eliminate non-informative features using PCA or backward elimination.',
            '4. Cross-Validation (K-Fold): Tune hyperparameters on unseen folds to prevent data leakage.',
            '5. Early Stopping: Halt training once validation loss starts to increase while training loss continues decreasing.',
            '6. Ensemble Methods: Aggregate predictions across diverse learners (e.g., Bagging, Random Forests) to smooth out individual variances.'
          ]
        },
        {
          title: '3. Comparative Summary Strategy',
          table: {
            headers: ['Techniques to Fix Underfitting (High Bias)', 'Techniques to Fix Overfitting (High Variance)'],
            rows: [
              {
                parameter: 'Increase the number of features by engineering new domain-specific variables and interaction terms.',
                col1: 'Decrease the number of features using Lasso (L1) regularization or dropping noisy, irrelevant variables.'
              },
              {
                parameter: 'Increase model complexity by using higher-degree polynomials, deeper trees, or non-linear algorithms.',
                col1: 'Reduce model complexity by pruning decision trees, setting max depth limits, or using simpler models.'
              },
              {
                parameter: 'Decrease or remove regularization penalty (reduce λ) to give the model freedom to learn patterns.',
                col1: 'Increase regularization penalty (increase λ in Ridge/Lasso) to heavily penalize large, erratic weights.'
              },
              {
                parameter: 'Train for more epochs and ensure gradient descent has enough iterations to converge properly.',
                col1: 'Use early stopping to halt training as soon as validation error begins to rise.'
              },
              {
                parameter: 'Adding more data alone will NOT help if the model architecture is fundamentally too weak to learn.',
                col1: 'Collect more training data or use data augmentation to expose the model to diverse examples.'
              }
            ]
          }
        }
      ],
      summary: [
        'To fix underfitting: make model more expressive, add features, lower regularization, train longer.',
        'To fix overfitting: constrain model, regularize (L1/L2), prune features, early stopping, ensemble, collect more data.',
        'The two solutions act in diametrically opposed directions on the complexity spectrum.'
      ],
      keyPoints: [
        'Feature engineering vs Feature selection',
        'Regularization hyperparameter λ tuning',
        'Early stopping on validation error curve',
        'Cross-validation and ensemble aggregation'
      ]
    },
    {
      id: 'ml-u3-q5',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 5,
      title: 'Short Note: Training Error and Generalization Error',
      shortTitle: 'Training Error vs Generalization Error',
      marks: 4,
      importance: 'Moderately Asked',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q1(c)', marks: 4 }
      ],
      syllabusTopics: ['Training Error', 'Generalization Error', 'Generalization Gap'],
      definition: 'Training error is the discrepancy between predicted and actual targets computed on the dataset used for model parameter fitting, whereas Generalization error (test error) is the expected error on previously unseen data drawn from the same underlying distribution.',
      sections: [
        {
          title: '1. Core Concepts & Definitions',
          content: [
            'Training Error: Computed directly over training samples. As model complexity grows, training error monotonically decreases toward zero.',
            'Generalization Error (Test Error): Measures how effectively the model extrapolates to new instances. Exhibits a U-shaped curve as complexity increases.',
            'Generalization Gap: The mathematical difference: Generalization Gap = Generalization Error - Training Error.'
          ],
          formulas: [
            { name: 'Generalization Gap', latex: '\\text{Gap} = E_{\\text{test}} - E_{\\text{train}}' }
          ]
        },
        {
          title: '2. Direct 2-Column Comparison: Training Error vs Generalization Error',
          table: {
            headers: ['Training Error', 'Generalization (Test) Error'],
            rows: [
              {
                parameter: 'Calculated directly on the training dataset that the model used to fit its parameters.',
                col1: 'Calculated on completely fresh, unseen testing data drawn from the real world.'
              },
              {
                parameter: 'Monotonically decreases towards zero as model complexity or training iterations increase.',
                col1: 'Follows a U-shaped curve: decreases initially, reaches an optimal minimum, then climbs rapidly due to overfitting.'
              },
              {
                parameter: 'Low training error does NOT guarantee that the model will perform well on future real-world predictions.',
                col1: 'Low generalization error confirms that the model has learned true underlying patterns and will succeed in production.'
              },
              {
                parameter: 'Very high training error indicates Underfitting (the model is too simple to capture even basic trends).',
                col1: 'Very high test error combined with near-zero training error indicates Overfitting (model memorized training noise).'
              },
              {
                parameter: 'Analogy: A student scoring 100% on homework questions they have already memorized.',
                col1: 'Analogy: The same student taking an unseen final examination covering new problems.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-generalization-error',
          title: 'Training vs Generalization Error Curves',
          caption: 'Monotonically decreasing training error alongside the U-shaped generalization error curve, showing the generalization gap.',
          type: 'svg-interactive',
          svgType: 'generalization-error'
        }
      ],
      summary: [
        'Training error evaluates performance on seen instances; generalization error tests unseen instances.',
        'A wide generalization gap is the primary indicator of overfitting.',
        'Machine learning algorithms aim to minimize generalization error, not solely training error.'
      ],
      keyPoints: [
        'Monotonic training error decrease',
        'U-shaped generalization curve',
        'Generalization gap diagnostic',
        'Early stopping criterion'
      ]
    },
    {
      id: 'ml-u3-q6',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 6,
      title: 'Explain Bias, Variance, Under fitting and Over fitting with Suitable Examples',
      shortTitle: 'Bias, Variance, Underfitting & Overfitting In-Depth',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q1(a)', marks: 6 }
      ],
      syllabusTopics: ['Bias', 'Variance', 'Underfitting', 'Overfitting'],
      definition: 'Bias is the systematic error stemming from erroneous or overly simplified modeling assumptions; Variance is the sensitivity of predictions to fluctuations and perturbations in the training dataset.',
      sections: [
        {
          title: '1. Deep Dive: Bias',
          content: [
            'Definition: Difference between the expected (average) prediction across multiple training draws and the true target value: Bias = E[h(x)] - f(x).',
            'High Bias Models: Make rigid assumptions; systematically miss key data trends (Underfitting). Examples: Linear Regression, Logistic Regression, Linear Discriminant Analysis (LDA).',
            'Low Bias Models: Minimal assumptions; conform flexibly to training data. Examples: Decision Trees, k-NN, Kernel SVMs.',
            'Example: Fitting a flat line across parabolic projectile trajectory data results in high bias.'
          ]
        },
        {
          title: '2. Deep Dive: Variance',
          content: [
            'Definition: Measures how drastically the learned hypothesis changes when trained on a different training split from the same population: Var = E[(h(x) - E[h(x)])²].',
            'High Variance Models: Extremely sensitive to sample perturbations and noise (Overfitting). Examples: Unpruned Decision Trees, 1-NN, high-degree Polynomials.',
            'Low Variance Models: Produces consistent hypotheses across varied random training samples.',
            'Example: An unpruned decision tree built on different student samples yields radically conflicting split hierarchies.'
          ]
        },
        {
          title: '3. Bias vs Variance Comparison Table',
          table: {
            headers: ['Bias (Systematic Error)', 'Variance (Random Error)'],
            rows: [
              {
                parameter: 'Systematic error that comes from oversimplified, rigid assumptions in the learning algorithm.',
                col1: 'Random error that comes from excessive sensitivity to small fluctuations in the training data.'
              },
              {
                parameter: 'Directly causes Underfitting (poor accuracy on both training and test datasets).',
                col1: 'Directly causes Overfitting (flawless accuracy on training, but terrible accuracy on test data).'
              },
              {
                parameter: 'High Bias models include: Linear Regression, Logistic Regression, and Naive Bayes.',
                col1: 'High Variance models include: Deep Neural Networks, Unpruned Decision Trees, and 1-Nearest Neighbor.'
              },
              {
                parameter: 'The model is too rigid; adding more training samples does not fix the underlying mistakes.',
                col1: 'The model changes drastically whenever trained on a slightly different subset of data.'
              },
              {
                parameter: 'Remedy: Increase model complexity, engineer new features, and decrease regularization penalty (λ).',
                col1: 'Remedy: Collect more training data, apply L1/L2 regularization, and prune complex trees.'
              }
            ]
          }
        }
      ],
      summary: [
        'Bias represents systematic error caused by oversimplification (causes underfitting).',
        'Variance represents instability caused by oversensitivity to sample noise (causes overfitting).',
        'Simple models have high bias and low variance; complex models have low bias and high variance.'
      ],
      keyPoints: [
        'Systematic vs Random variation',
        'Model assumption strength',
        'Algorithm classification by bias/variance profile'
      ]
    },
    {
      id: 'ml-u3-q7',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 7,
      title: 'Explain Bias-Variance Trade-off (and its relation to Underfitting and Overfitting)',
      shortTitle: 'Bias-Variance Trade-off & Mathematical Error Decomposition',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q1(c)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q1(c)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q2(b)', marks: 6 }
      ],
      syllabusTopics: ['Bias-Variance Tradeoff', 'Error Decomposition', 'Optimal Model Complexity'],
      definition: 'The Bias-Variance Trade-off is the foundational machine learning dilemma where decreasing bias by increasing model complexity inevitably inflates variance, and vice versa; total expected error is minimized only at an intermediate optimal complexity.',
      sections: [
        {
          title: '1. Mathematical Error Decomposition',
          content: [
            'Given noisy targets y = f(x) + ε where E[ε] = 0 and Var(ε) = σ²:',
            'The expected test Mean Squared Error decomposes mathematically into three distinct components:'
          ],
          formulas: [
            {
              name: 'Total Expected Error Formula',
              latex: '\\text{Total Expected Error} = \\text{Bias}[\\hat{f}(x)]^2 + \\text{Var}[\\hat{f}(x)] + \\sigma^2'
            }
          ]
        },
        {
          title: '2. The Fundamental Conflict',
          content: [
            'Irreducible Error (σ²): Inherent ambient noise in the data collection process that no model can eliminate.',
            'As model complexity increases: Bias² decreases monotonically while Variance increases monotonically.',
            'The optimal complexity ("sweet spot") is the exact balance point where the sum (Bias² + Variance) achieves its absolute global minimum.'
          ]
        },
        {
          title: '3. Four Quadrants of Model Performance',
          table: {
            headers: ['Bias / Variance State', 'Model Behaviour & Real-World Implication'],
            rows: [
              { parameter: 'Low Bias, Low Variance', col1: 'The Ideal Model: Highly accurate and consistent (theoretically bounded by irreducible noise).' },
              { parameter: 'Low Bias, High Variance', col1: 'Overfitting: Accurate on average across models, but wildly unstable for any single model instance.' },
              { parameter: 'High Bias, Low Variance', col1: 'Underfitting: Highly consistent predictions, but systematically wrong on average.' },
              { parameter: 'High Bias, High Variance', col1: 'Worst Possible Model: Both inaccurate on average and completely inconsistent across samples.' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-bias-variance',
          title: 'Bias-Variance Trade-off Curves',
          caption: 'Visualizing Bias², Variance, Total Error, and the optimal complexity point minimizing generalization loss.',
          type: 'svg-interactive',
          svgType: 'bias-variance'
        }
      ],
      summary: [
        'Total Error = Bias² + Variance + Irreducible Error σ².',
        'Decreasing bias forces variance upward; decreasing variance forces bias upward.',
        'Optimal complexity minimizes the combined sum to maximize generalization capability.'
      ],
      keyPoints: [
        'Total error decomposition',
        'Irreducible error bound σ²',
        'U-shaped total error curve',
        'Complexity sweet-spot identification'
      ]
    },
    {
      id: 'ml-u3-q8',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 8,
      title: 'Short Note on Lasso and Ridge Regression (Differentiate Lasso and Ridge)',
      shortTitle: 'Ridge (L2) vs Lasso (L1) Regularization In-Depth',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q2(b)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q2(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q1(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q2(a)', notes: 'Second part (Ridge)' }
      ],
      syllabusTopics: ['Lasso Regression', 'Ridge Regression', 'L1 Regularization', 'L2 Regularization', 'Feature Selection'],
      definition: 'Ridge Regression (L2) and Lasso Regression (L1) are regularization techniques that prevent overfitting in linear models by adding a penalty on large weights.',
      sections: [
        {
          title: '1. What is Regularization and Why is it Needed?',
          content: [
            'Regularization is a technique used in Machine Learning to stop a model from overfitting.',
            'Overfitting happens when a model tries to memorize every small detail and random noise in the training data, causing it to fail on new real-world data.',
            'In Simple Words:',
            'When a model overfits, its weights (coefficients) become unnaturally large and unstable. Regularization adds a penalty on large weights to keep the model simple, smooth, and balanced.'
          ]
        },
        {
          title: '2. Ridge Regression (L2 Regularization)',
          content: [
            'Adds a penalty proportional to the sum of squared weights: λ ∑ βⱼ².',
            'In Simple Words:',
            'Ridge Regression reduces the values of large weights so no single feature dominates the model. It pulls weights close to zero, but never makes them exactly zero. All features stay in the equation.',
            'Real-World Example (House Price Prediction):',
            'Suppose you predict house prices using Area, Bedrooms, and Location Rating. If Area and Bedrooms are correlated, standard regression gives them huge unstable weights. Ridge Regression shrinks these weights evenly so the prediction is steady and reliable.',
            'Analytical closed-form solution: β_ridge = (XᵀX + λI)⁻¹ XᵀY.'
          ],
          formulas: [
            { name: 'Ridge Cost Function', latex: 'J_{\\text{Ridge}}(\\beta) = \\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2 + \\lambda \\sum_{j=1}^{p}\\beta_j^2' }
          ]
        },
        {
          title: '3. Lasso Regression (L1 Regularization)',
          content: [
            'Lasso stands for Least Absolute Shrinkage and Selection Operator.',
            'Adds a penalty proportional to the sum of absolute values of weights: λ ∑ |βⱼ|.',
            'In Simple Words:',
            'Lasso shrinks weights just like Ridge. But Lasso can shrink unimportant weights all the way to absolute zero (0.0). When a weight becomes zero, that feature is completely removed from the model. Thus, Lasso does automatic feature selection.',
            'Real-World Example (House Price with Useless Features):',
            'Suppose you also included Door Color and Owner Age in the house dataset. Lasso sets the weights of Door Color and Owner Age to exactly zero (0.0), automatically throwing them out of the formula and keeping only Area and Bedrooms.'
          ],
          formulas: [
            { name: 'Lasso Cost Function', latex: 'J_{\\text{Lasso}}(\\beta) = \\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2 + \\lambda \\sum_{j=1}^{p}|\\beta_j|' }
          ]
        },
        {
          title: '4. Difference Between Ridge and Lasso Regression (2-Column Format)',
          table: {
            headers: ['Ridge Regression (L2)', 'Lasso Regression (L1)'],
            rows: [
              {
                parameter: 'Adds a penalty equal to the sum of squared weights (λ ∑ βⱼ²) to the cost function.',
                col1: 'Adds a penalty equal to the sum of absolute values of weights (λ ∑ |βⱼ|) to the cost function.'
              },
              {
                parameter: 'Shrinks weights smoothly close to zero, but never makes any weight exactly zero.',
                col1: 'Shrinks weights and can force unimportant weights to become exactly zero (0.0).'
              },
              {
                parameter: 'Does not perform feature selection; all original features are retained in the final equation.',
                col1: 'Performs automatic feature selection; features with zero weights are completely removed.'
              },
              {
                parameter: 'Has a smooth, circular constraint boundary where error contours touch curves, keeping weights non-zero.',
                col1: 'Has a sharp diamond constraint boundary with pointed corners on axes, easily forcing weights to zero.'
              },
              {
                parameter: 'Handles multicollinearity by sharing weights and shrinking correlated features together.',
                col1: 'Handles multicollinearity by arbitrarily picking one correlated feature and zeroing out the rest.'
              },
              {
                parameter: 'Has a direct closed-form analytical matrix formula: β = (XᵀX + λI)⁻¹ XᵀY.',
                col1: 'Has no closed-form formula; it must be calculated iteratively using coordinate descent.'
              },
              {
                parameter: 'Best used when you have many features and almost all of them contribute to the outcome.',
                col1: 'Best used when you have many features, but suspect only a small subset really matters.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-lasso-ridge-geometry',
          title: 'Geometric Constraint Regions: Lasso (L1) vs Ridge (L2)',
          caption: 'Error elliptical contours touching the sharp diamond corner of L1 (producing β₂ = 0) versus the smooth circle of L2.',
          type: 'svg-interactive',
          svgType: 'lasso-ridge-geometry'
        }
      ],
      summary: [
        'Ridge (L2) adds λ∑βⱼ², shrinks coefficients smoothly, retains all features, resolves multicollinearity.',
        'Lasso (L1) adds λ∑|βⱼ|, drives coefficients to exact zero, provides automatic feature selection.',
        'L1 has diamond geometry with sharp axis corners; L2 has circular smooth geometry.'
      ],
      keyPoints: [
        'L1 absolute vs L2 squared penalty',
        'Automatic feature selection in Lasso',
        'Multicollinearity mitigation in Ridge',
        'Geometric diamond vs circular constraint regions'
      ]
    },
    {
      id: 'ml-u3-q9',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 9,
      title: 'Explain Lasso Regression. How is Lasso Regression used for Feature Selection?',
      shortTitle: 'Lasso Regression for Automatic Feature Selection',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q1(a)', marks: 6 }
      ],
      syllabusTopics: ['Lasso Regression', 'Feature Selection', 'L1 Penalty', 'Sparsity'],
      definition: 'Lasso (Least Absolute Shrinkage and Selection Operator) is an L1-regularized regression technique that produces sparse models by driving coefficients of redundant features to zero, thus acting as an embedded feature selector.',
      sections: [
        {
          title: '1. Mechanism of Feature Selection via L1 Norm',
          content: [
            '1. In standard regression, every input feature receives a non-zero coefficient regardless of importance.',
            '2. The Lasso cost function adds λ∑|βⱼ|. In constrained optimization form, this minimizes SSE subject to ∑|βⱼ| ≤ t.',
            '3. The L1 constraint forms a hyper-polyhedron (diamond in 2D) with vertices situated precisely along the feature axes.',
            '4. When the elliptical contours of the sum of squared errors expand from the unconstrained OLS solution, they almost always touch the constraint boundary at a vertex.',
            '5. At any axis vertex, all coordinates other than that axis are exactly zero. Therefore, irrelevant features are completely dropped.'
          ]
        },
        {
          title: '2. Tuning the Sparsity Parameter λ',
          content: [
            'When λ = 0: Lasso is identical to Ordinary Least Squares (all features retained).',
            'As λ increases: Shrinkage pressure intensifies, forcing progressively more feature coefficients to zero.',
            'If λ is excessively large: All coefficients become zero, resulting in a null model.',
            'The optimal λ is selected using K-Fold Cross-Validation (typically choosing the λ that minimizes validation MSE).'
          ]
        },
        {
          title: '3. Concrete Example',
          content: [
            'Predicting house price with 5 candidate features: Area, Location Score, Bedrooms, Front Door Color, Owner Age.',
            'After fitting Lasso with tuned λ: Area = +4.5, Location = +2.8, Bedrooms = +1.1, Door Color = 0.0, Owner Age = 0.0.',
            'The algorithm automatically discards door color and owner age without requiring human intervention.'
          ]
        }
      ],
      summary: [
        'Lasso minimizes SSE + λ∑|βⱼ|.',
        'Sharp diamond vertices of the L1 norm force optimization intersections directly on axes.',
        'Coefficients become exactly zero, yielding embedded, automatic feature selection.',
        'Cross-validation determines the optimal tuning parameter λ.'
      ],
      keyPoints: [
        'L1 diamond constraint geometry',
        'Axis-intercept point of contact',
        'Sparse weight vector',
        'Hyperparameter λ tuning via cross-validation'
      ]
    },
    {
      id: 'ml-u3-q10',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 10,
      title: 'Explain Gradient Descent Algorithm with Example. Compare Batch and Stochastic Gradient Descent',
      shortTitle: 'Gradient Descent Algorithm & Batch vs SGD Comparison',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q1(c)', notes: 'Explain with example' },
        { paper: 'Paper 4', questionNo: 'Q2(c)', notes: 'What is GD + Compare Batch and SGD' }
      ],
      syllabusTopics: ['Gradient Descent', 'Optimization', 'Batch GD', 'Stochastic GD', 'Learning Rate'],
      definition: 'Gradient Descent is a first-order iterative optimization algorithm used to find the local minimum of a differentiable cost function by taking successive steps proportional to the negative of the gradient.',
      sections: [
        {
          title: '1. Mathematical Foundation & Update Rule',
          content: [
            'Cost function J(θ) measures model prediction error (e.g., Mean Squared Error).',
            'The gradient ∇J(θ) is the vector of partial derivatives pointing in the direction of steepest ascent.',
            'To minimize error, parameters are iteratively updated in the exact opposite direction (steepest descent):'
          ],
          formulas: [
            {
              name: 'General Parameter Update Rule',
              latex: '\\theta_{\\text{new}} = \\theta_{\\text{old}} - \\eta \\nabla J(\\theta)'
            },
            {
              name: 'Linear Regression Gradient Update',
              latex: '\\theta_j := \\theta_j - \\eta \\frac{1}{m}\\sum_{i=1}^{m}\\Big(h_\\theta(x^{(i)}) - y^{(i)}\\Big) x_j^{(i)}'
            }
          ]
        },
        {
          title: '2. Numerical Walkthrough Example',
          content: [
            'Minimize single-variable function f(x) = x².',
            'Derivative: f\'(x) = 2x. Let initial point x₀ = 4.0 and learning rate η = 0.1.'
          ],
          table: {
            headers: ['Iteration (t)', 'Current x_t', 'Gradient 2x_t', 'Step: η · 2x_t', 'Updated x_(t+1)'],
            rows: [
              { parameter: 'Step 1', col1: '4.000', col2: '8.000', col3: '0.800', col4: '4.0 - 0.8 = 3.200' },
              { parameter: 'Step 2', col1: '3.200', col2: '6.400', col3: '0.640', col4: '3.2 - 0.64 = 2.560' },
              { parameter: 'Step 3', col1: '2.560', col2: '5.120', col3: '0.512', col4: '2.56 - 0.512 = 2.048' },
              { parameter: 'Step 4', col1: '2.048', col2: '4.096', col3: '0.410', col4: '2.048 - 0.410 = 1.638' },
              { parameter: 'Convergence', col1: '... → 0.0', col2: '... → 0.0', col3: '... → 0.0', col4: 'Converges cleanly to global minimum x = 0' }
            ]
          }
        },
        {
          title: '3. Comparative Analysis: Batch GD vs SGD vs Mini-Batch GD',
          table: {
            headers: ['Batch Gradient Descent', 'Stochastic Gradient Descent (SGD)'],
            rows: [
              {
                parameter: 'Uses the entire training dataset (all m samples) to compute the gradient at every single step.',
                col1: 'Uses only a single randomly chosen training sample to compute the gradient at each step.'
              },
              {
                parameter: 'Computation is very slow per step on large datasets because it processes all rows every iteration.',
                col1: 'Computation is instantaneous per step because it only evaluates one single row at a time.'
              },
              {
                parameter: 'Follows a smooth, direct, deterministic path straight down toward the cost minimum.',
                col1: 'Follows a noisy, oscillating zig-zag path that bounces around but trends toward the minimum.'
              },
              {
                parameter: 'Requires loading the entire dataset into RAM, which is infeasible for massive big-data applications.',
                col1: 'Requires minimal RAM footprint because only one data point needs to be in memory at any instant.'
              },
              {
                parameter: 'Can easily get permanently stuck in local minima or flat saddle points on complex loss surfaces.',
                col1: 'Random noise in individual sample steps helps it escape shallow local minima into better regions.'
              },
              {
                parameter: 'Reaches the exact minimum smoothly on convex error surfaces.',
                col1: 'Fluctuates around the minimum and needs a decreasing learning rate schedule to settle down.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-gradient-descent',
          title: 'Convex Cost Surface & Gradient Descent Steps',
          caption: 'Step-by-step parameter updates down the parabolic bowl J(θ) with step size naturally diminishing near the minimum.',
          type: 'svg-interactive',
          svgType: 'gradient-descent'
        }
      ],
      summary: [
        'Gradient descent minimizes cost via iterative updates: θ := θ - η∇J(θ).',
        'Learning rate η controls step magnitude; too large overshoots, too small converges sluggishly.',
        'Batch GD uses all data per update (smooth, slow); SGD updates per single instance (fast, noisy).'
      ],
      keyPoints: [
        'Negative gradient vector direction',
        'Learning rate tuning dilemma',
        'Batch vs Stochastic vs Mini-Batch tradeoff',
        'Convex vs Non-convex optimization dynamics'
      ]
    },
    {
      id: 'ml-u3-q11',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 11,
      title: 'Short Note on Stochastic Gradient Descent (SGD) Algorithm',
      shortTitle: 'Stochastic Gradient Descent (SGD) Protocol',
      marks: 4,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q2(c)', marks: 4 },
        { paper: 'Paper 3', questionNo: 'Q2(c)', marks: 4 }
      ],
      syllabusTopics: ['Stochastic Gradient Descent', 'Online Learning', 'Learning Rate Scheduling'],
      definition: 'Stochastic Gradient Descent (SGD) is an optimization variant where parameters are updated incrementally using the loss gradient computed from only a single randomly selected training instance at each iteration.',
      sections: [
        {
          title: '1. Algorithmic Protocol',
          content: [
            '1. Randomly initialize parameter vector θ and set base learning rate η.',
            '2. Shuffle the entire training dataset to avoid cyclic bias.',
            '3. For each individual sample (x⁽ⁱ⁾, y⁽ⁱ⁾): Compute gradient for that isolated sample and immediately update parameters: θ := θ - η(h_θ(x⁽ⁱ⁾) - y⁽ⁱ⁾)x⁽ⁱ⁾.',
            '4. Repeat for multiple passes (epochs) through the dataset until average loss stabilizes.'
          ],
          formulas: [
            { name: 'SGD Update Rule for Single Sample', latex: '\\theta_j := \\theta_j - \\eta \\cdot \\Big(h_\\theta(x^{(i)}) - y^{(i)}\\Big) x_j^{(i)}' }
          ]
        },
        {
          title: '2. Direct 2-Column Comparison: Advantages vs Limitations of SGD',
          table: {
            headers: ['Key Advantages of SGD', 'Key Limitations of SGD'],
            rows: [
              {
                parameter: 'Computation is instantaneous per step because it calculates the gradient on only one single row at a time.',
                col1: 'Noisy gradient estimates cause erratic zig-zag oscillations that make the convergence path unstable.'
              },
              {
                parameter: 'Extremely memory efficient; runs comfortably on large datasets or streaming data that do not fit in RAM.',
                col1: 'Never settles permanently at the global minimum without a gradually decaying learning rate schedule.'
              },
              {
                parameter: 'Stochastic fluctuations and noise help the parameters dislodge and jump out of shallow local minima.',
                col1: 'Highly sensitive to feature scaling and requires careful tuning of the initial learning rate.'
              },
              {
                parameter: 'Enables online and incremental learning where new data samples arrive continuously in real time.',
                col1: 'Cannot take full advantage of highly parallelized GPU/SIMD vector math compared to batch processing.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-batch-vs-sgd',
          title: 'Contour Plot: Batch GD vs SGD Trajectories',
          caption: 'Smooth, direct trajectory of Batch GD compared with the fluctuating, noisy path of SGD toward the cost minimum.',
          type: 'svg-interactive',
          svgType: 'batch-vs-sgd'
        }
      ],
      summary: [
        'SGD updates parameters after every single training example rather than the entire dataset.',
        'Significantly faster with minimal memory footprint; suited for online streaming data.',
        'Noisy updates cause oscillations around the minimum, managed via learning rate decay.'
      ],
      keyPoints: [
        'Single-sample parameter update',
        'Shuffle training instances per epoch',
        'Stochastic fluctuation vs Deterministic descent',
        'Foundation for modern deep learning optimizers'
      ]
    },
    {
      id: 'ml-u3-q12',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 12,
      title: 'What do you mean by Least Square Method? Explain it in the context of Linear Regression',
      shortTitle: 'Least Squares Method & Normal Equations',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q2(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q2(b)', marks: 6 }
      ],
      syllabusTopics: ['Least Squares', 'Normal Equations', 'Residuals', 'SSE'],
      definition: 'The Least Squares Method is an analytical mathematical technique that determines the optimal line of best fit by minimizing the Sum of Squared Residuals (SSE) between observed data points and predicted values.',
      sections: [
        {
          title: '1. Mathematical Definition of Residuals and SSE',
          content: [
            'For observed sample (xᵢ, yᵢ) and predicted value ŷᵢ = axᵢ + b:',
            'Residual (error): eᵢ = yᵢ - ŷᵢ = yᵢ - (axᵢ + b).',
            'Sum of Squared Errors: SSE = ∑(eᵢ)² = ∑[yᵢ - (axᵢ + b)]².',
            'Why square the residuals? (1) Eliminates sign cancellation between positive and negative errors, (2) Penalizes large outlier deviations heavily, (3) Yields a smooth, continuously differentiable parabolic function with a unique analytical minimum.'
          ],
          formulas: [
            { name: 'Sum of Squared Errors (SSE)', latex: '\\text{SSE} = \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2 = \\sum_{i=1}^{n} \\big[y_i - (ax_i + b)\\big]^2' }
          ]
        },
        {
          title: '2. Derivation of the Normal Equations',
          content: [
            'To find parameters a (slope) and b (intercept) that minimize SSE, set partial derivatives to zero:',
            '∂SSE/∂a = -2∑xᵢ[yᵢ - (axᵢ + b)] = 0  ==>  a∑xᵢ² + b∑xᵢ = ∑xᵢyᵢ',
            '∂SSE/∂b = -2∑[yᵢ - (axᵢ + b)] = 0   ==>  a∑xᵢ + n·b = ∑yᵢ',
            'Solving this linear 2x2 system simultaneously yields the standard closed-form Least Squares formulas:'
          ],
          formulas: [
            {
              name: 'Slope Formula (a)',
              latex: 'a = \\frac{n\\sum xy - \\sum x\\sum y}{n\\sum x^2 - (\\sum x)^2} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sum(x - \\bar{x})^2}'
            },
            {
              name: 'Intercept Formula (b)',
              latex: 'b = \\bar{y} - a\\bar{x} = \\frac{\\sum y - a\\sum x}{n}'
            }
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-least-squares',
          title: 'Least Squares Residual Errors & Best-Fit Line',
          caption: 'Visual depiction of vertical dashed residual offsets e_i between observations and the least-squares regression line.',
          type: 'svg-interactive',
          svgType: 'linear-regression'
        }
      ],
      summary: [
        'Least squares finds the line minimizing sum of squared vertical offsets: SSE = ∑(yᵢ - ŷᵢ)².',
        'Setting partial derivatives ∂SSE/∂a and ∂SSE/∂b to zero produces the normal equations.',
        'Directly yields closed-form analytical solutions for slope a and intercept b.'
      ],
      keyPoints: [
        'Vertical residual definition eᵢ = yᵢ - ŷᵢ',
        'Normal equations derivation',
        'Slope a and intercept b formulas',
        'Analytical closed-form guarantee'
      ]
    },
    {
      id: 'ml-u3-q13',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 13,
      title: 'Importance of Evaluation Metrics / Short Note on Evaluation Metrics',
      shortTitle: 'Importance of Regression Evaluation Metrics',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q2(a)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q2(c)', marks: 6 }
      ],
      syllabusTopics: ['Evaluation Metrics', 'MAE', 'MSE', 'RMSE', 'R2'],
      definition: 'Evaluation metrics are quantitative statistical measures used to assess prediction accuracy, compare alternative modeling approaches, monitor convergence during optimization, and validate generalization capabilities.',
      sections: [
        {
          title: '1. Why Evaluation Metrics are Indispensable',
          content: [
            '1. Performance Quantification: Translates model effectiveness into standardized numerical values understandable by domain engineers and stakeholders.',
            '2. Model Selection: Provides an objective benchmark to pick between competing models (e.g., Linear vs Polynomial vs Ridge).',
            '3. Diagnosing Overfitting & Underfitting: Comparing metric scores across training and validation sets detects generalization breakdown.',
            '4. Loss Function Guidance: Functions like MSE serve as the exact mathematical objective minimized by gradient-based optimizers.',
            '5. Hyperparameter Optimization: Acts as the fitness evaluation target during grid search and cross-validation for tuning λ or learning rates.'
          ]
        },
        {
          title: '2. Direct 2-Column Comparison of Primary Regression Metrics',
          table: {
            headers: ['Evaluation Metric & Formula', 'Core Characteristic, Sensitivity & Ideal Value'],
            rows: [
              {
                parameter: 'Mean Absolute Error (MAE): (1/N) ∑ |yᵢ - ŷᵢ|',
                col1: 'Calculates the average linear error magnitude in original target units; robust against outliers; ideal score is 0.'
              },
              {
                parameter: 'Mean Squared Error (MSE): (1/N) ∑ (yᵢ - ŷᵢ)²',
                col1: 'Squares errors to heavily penalize large mistakes; outputs squared units; smooth differentiable loss for optimization; ideal score is 0.'
              },
              {
                parameter: 'Root Mean Squared Error (RMSE): √MSE',
                col1: 'Restores measurement scale back to original target units while retaining heavy penalties on large blunders; ideal score is 0.'
              },
              {
                parameter: 'Coefficient of Determination (R²): 1 - [SS_res / SS_tot]',
                col1: 'Measures the proportion of total variance explained by the model compared to guessing the mean; dimensionless ratio (0 to 1); ideal score is 1.0.'
              },
              {
                parameter: 'Adjusted R²: 1 - [(1 - R²)(N - 1)/(N - p - 1)]',
                col1: 'Penalizes the addition of useless predictor features p to prevent misleading artificial inflation of R²; ideal score is 1.0.'
              }
            ]
          }
        }
      ],
      summary: [
        'Evaluation metrics provide objective assessment of model prediction quality.',
        'Facilitates comparison, hyperparameter optimization, and overfitting diagnosis.',
        'Primary metrics: MAE (linear scale), RMSE (penalizes outliers, target scale), R² (% variance explained).'
      ],
      keyPoints: [
        'Objective performance benchmark',
        'Train vs Test metric discrepancy',
        'Differentiation between MAE, MSE, RMSE, R²',
        'Loss function role in training'
      ]
    },
    {
      id: 'ml-u3-q14',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 14,
      title: 'Short Note on MAE, RMSE and R² (What is R² as a measure of evaluation?)',
      shortTitle: 'MAE, RMSE, and R² In-Depth with Numerical Verification',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q2(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q2(b)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q1(c)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q2(a)', notes: 'Specifically focused on R²' }
      ],
      syllabusTopics: ['MAE', 'MSE', 'RMSE', 'R-Squared', 'Adjusted R2'],
      definition: 'In Machine Learning, MAE, RMSE and R² are evaluation metrics used to measure the performance of a regression model. They tell us how accurately a model predicts values and how close predictions are to actual target observations.',
      sections: [
        {
          title: '1. What are MAE, RMSE, and R² (Evaluation Metrics)?',
          content: [
            'In Machine Learning, MAE, RMSE and R² are evaluation metrics used to measure the performance of a regression model.',
            'They help us understand how accurately a model predicts values and diagnose whether predictions have small or catastrophic errors.'
          ]
        },
        {
          title: '2. MAE (Mean Absolute Error)',
          content: [
            'Definition: MAE is the average of the absolute differences between actual values and predicted values.',
            'In simple words:',
            'MAE tells us how far the model predictions are from the actual values on average, without worrying about whether the prediction was too high or too low.',
            'Formula: MAE = (1/n) * Σ |yᵢ - ŷᵢ|',
            'Concrete Example:',
            '• Actual house price = 100, Predicted house price = 90 ==> Error = |100 - 90| = 10.',
            '• If another prediction has Error = 6, average error across the two is (10 + 6) / 2 = 8.',
            'Advantages:',
            '• Easy to understand and calculate for both engineers and non-technical stakeholders.',
            '• Less sensitive to large outlier errors because mistakes are not squared.',
            '• Lower MAE indicates better model performance (0 is perfect).'
          ],
          formulas: [
            { name: 'MAE Formula', latex: '\\text{MAE} = \\frac{1}{n}\\sum_{i=1}^{n}|y_i - \\hat{y}_i|' }
          ]
        },
        {
          title: '3. RMSE (Root Mean Square Error)',
          content: [
            'Definition: RMSE is the square root of the average of squared differences between actual and predicted values.',
            'In simple words:',
            'RMSE measures prediction errors while giving much heavier importance and penalties to large mistakes.',
            'Formula: RMSE = √[ (1/n) * Σ (yᵢ - ŷᵢ)² ]',
            'Concrete Example:',
            '• An error of 2 units contributes 2² = 4 to the sum.',
            '• A blunder of 10 units contributes 10² = 100 to the sum (25 times more impact for a 5x larger error!).',
            'Advantages:',
            '• Heavily penalizes large prediction errors, making it critical for medical, finance, and safety systems.',
            '• Useful for measuring model accuracy in real-world engineering applications.',
            '• Expressed in the exact same measurement unit as the target variable (due to the square root).',
            '• Lower RMSE indicates better model performance (0 is perfect).'
          ],
          formulas: [
            { name: 'RMSE Formula', latex: '\\text{RMSE} = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2}' }
          ]
        },
        {
          title: '4. R² (R-Squared / Coefficient of Determination)',
          content: [
            'Definition: R² is a statistical measure that tells us how well a regression model explains the variation in the actual data.',
            'In simple words:',
            'R² tells us what percentage of the variation in the output is successfully captured and explained by the model compared to simply guessing the average.',
            'Formula: R² = 1 - (SS_res / SS_tot)',
            'Where:',
            '• SS_res = Sum of squared errors (residuals) = Σ (yᵢ - ŷᵢ)²',
            '• SS_tot = Total sum of squares from the mean = Σ (yᵢ - ȳ)²',
            'Concrete Example:',
            'If R² = 0.80, it means the model explains 80% of the variation in the target variable, while 20% remains unexplained random noise.'
          ],
          formulas: [
            { name: 'R-Squared Formula', latex: 'R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}} = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}' }
          ],
          table: {
            headers: ['R² Value', 'Meaning & Model Quality'],
            rows: [
              { parameter: '1.0', col1: 'Perfect prediction: Model hits every actual data point with zero error.' },
              { parameter: '0.9', col1: 'Very good fit: 90% of data variation is captured by the model.' },
              { parameter: '0.8', col1: 'Good fit: Reliable predictor for practical deployment.' },
              { parameter: '0.5', col1: 'Moderate fit: Captures general direction but leaves 50% unexplained.' },
              { parameter: '0.0', col1: 'No improvement: Performs no better than simply predicting the mean (ȳ).' },
              { parameter: 'Negative (< 0)', col1: 'Worse than predicting the mean: Model predictions are severely inaccurate.' }
            ]
          }
        },
        {
          title: '5. Direct 2-Column Difference: MAE vs RMSE',
          table: {
            headers: ['MAE (Mean Absolute Error)', 'RMSE (Root Mean Square Error)'],
            rows: [
              { parameter: 'MAE calculates the simple average of absolute differences without squaring.', col1: 'RMSE squares all errors before averaging and then takes the square root.' },
              { parameter: 'Treats all errors proportionally (an error of 10 is simply 5 times an error of 2).', col1: 'Gives disproportionately heavier penalties to large mistakes (error of 10 counts 25 times more).' },
              { parameter: 'Robust and less sensitive to extreme outliers.', col1: 'Highly sensitive to outliers—a single huge blunder inflates the entire RMSE.' },
              { parameter: 'Absolute value function has non-differentiable sharp corner at error = 0.', col1: 'Smooth and mathematically differentiable everywhere, making it ideal for gradient descent.' },
              { parameter: 'Best used when all errors carry equal operational risk.', col1: 'Best used when large errors are dangerous or catastrophic (e.g., flight trajectory, medical dosage).' }
            ]
          }
        },
        {
          title: '6. Quick Comparison: MAE vs RMSE vs R²',
          table: {
            headers: ['Metric Name & Type', 'What It Measures, Sensitivity & Ideal Score'],
            rows: [
              { parameter: 'Mean Absolute Error (MAE) [Absolute Error Metric]', col1: 'Measures average magnitude of prediction errors in original units; robust to outliers; lower is better (0 is ideal).' },
              { parameter: 'Root Mean Square Error (RMSE) [Quadratic Error Metric]', col1: 'Measures prediction error giving heavy penalties to large mistakes; in original units; lower is better (0 is ideal).' },
              { parameter: 'R-Squared (R²) [Goodness-of-Fit Ratio]', col1: 'Measures proportion of output variation explained by the model; dimensionless (0 to 1); higher is better (1.0 is ideal).' }
            ]
          }
        },
        {
          title: '7. Easy Way to Remember (Fast Exam Memory Hook)',
          content: [
            '• MAE: How much error does the model make on average in plain numbers?',
            '• RMSE: How much error does the model make, giving heavy punishment to large mistakes?',
            '• R²: How well does the model explain the variation in data compared to guessing the average?'
          ]
        },
        {
          title: '8. Worked Numerical Verification (For 6-Mark Exam Answers)',
          content: [
            'Dataset: x = [1, 2, 3, 4], Actual y = [3, 4, 5, 7]. Regression line ŷ = 1.3x + 1.5. N = 4.',
            '• Predicted ŷ: [2.8, 4.1, 5.4, 6.7]',
            '• Absolute Errors |y - ŷ|: [0.2, 0.1, 0.4, 0.3] ==> Sum = 1.0 ==> MAE = 1.0 / 4 = 0.25',
            '• Squared Errors (y - ŷ)²: [0.04, 0.01, 0.16, 0.09] ==> Sum (SS_res) = 0.30 ==> RMSE = √(0.30 / 4) = 0.274',
            '• Total Variation from Mean ȳ (4.75): SS_tot = 8.75 ==> R² = 1 - (0.30 / 8.75) = 0.9657 (Explains 96.57% of data variance).'
          ]
        }
      ],
      summary: [
        'MAE measures average absolute error without penalizing outliers.',
        'RMSE penalizes large errors heavily and is expressed in target units.',
        'R² measures the percentage of data variance explained (0 to 1; 1 is perfect, < 0 is worse than mean).',
        'Memory hook: MAE = average error, RMSE = punished large blunders, R² = percentage explained.'
      ],
      keyPoints: [
        'Formula derivation and units comparison',
        'Robustness (MAE) vs Sensitivity to outliers (RMSE)',
        'Scale-free baseline comparison (R²)',
        'SS_res vs SS_tot variance partitioning'
      ]
    },
    {
      id: 'ml-u3-q15',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 15,
      title: 'Advantages of RMSE over MSE as an Evaluation Metric',
      shortTitle: 'Advantages of RMSE over MSE',
      marks: 4,
      importance: 'Moderately Asked',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q2(a)', marks: 4 }
      ],
      syllabusTopics: ['RMSE', 'MSE', 'Evaluation Comparison'],
      definition: 'Root Mean Squared Error (RMSE = √MSE) provides key interpretability advantages over Mean Squared Error by scaling error units back to the original measurement scale of the target variable.',
      sections: [
        {
          title: '1. Key Comparative Advantages of RMSE',
          content: [
            '1. Direct Unit Dimensionality: MSE reports errors in squared units (e.g., dollars², kg², Celsius²), which lacks physical interpretability. RMSE restores original units ($ or kg).',
            '2. Directly Comparable with Target and MAE: RMSE can be directly juxtaposed against target mean ȳ or MAE to assess relative percentage error.',
            '3. Comprehensible Numerical Scale: The square root scales enormous squared numbers back to standard human-readable ranges.',
            '4. Retains Quadratic Outlier Penalty: Because squaring occurs before rooting, RMSE retains the critical property of heavily penalizing large outliers.',
            '5. Represents Standard Deviation of Residuals: RMSE directly approximates the standard deviation of unexplained variance in the regression fit.'
          ]
        },
        {
          title: '2. Direct 2-Column Difference: RMSE vs MSE',
          table: {
            headers: ['Root Mean Square Error (RMSE)', 'Mean Squared Error (MSE)'],
            rows: [
              { parameter: 'Calculates the square root of mean squared errors: RMSE = √MSE.', col1: 'Calculates the raw mean of squared errors without taking a square root: MSE = (1/n) Σ (y - ŷ)².' },
              { parameter: 'Measured in the exact same units as the target variable (e.g., dollars, meters, kg).', col1: 'Measured in squared units (e.g., dollars², meters², kg²), which lacks physical intuition.' },
              { parameter: 'Easy to interpret and explain directly to business clients and project managers.', col1: 'Difficult for humans to interpret because squared numbers are unnaturally large.' },
              { parameter: 'Directly comparable against the dataset mean (ȳ) or MAE.', col1: 'Cannot be directly compared to dataset mean because units do not match.' },
              { parameter: 'Preferred for model evaluation, executive reporting, and paper publications.', col1: 'Preferred as the mathematical loss function during gradient descent because its derivative is simpler.' }
            ]
          }
        },
        {
          title: '3. Illustrative Concrete Example',
          content: [
            'Suppose we are predicting product delivery cost ($). Errors on two test shipments: e₁ = $2, e₂ = $4.',
            '• MSE = (2² + 4²) / 2 = (4 + 16) / 2 = 10 ($²). "10 squared dollars" makes no physical sense to a customer.',
            '• RMSE = √10 = $3.16. A manager immediately understands that predictions miss the true delivery cost by about $3.16 on average.'
          ]
        },
        {
          title: '4. Easy Way to Remember',
          content: [
            '• MSE: Math-friendly loss function, but outputs weird squared units (dollars²).',
            '• RMSE: The square root fix that converts the error back into normal human units (dollars).'
          ]
        }
      ],
      summary: [
        'RMSE = √MSE expresses errors in the original units of target variable y.',
        'Retains heavy penalty on large outliers while offering direct physical interpretability.',
        'Preferred for reporting and communication, whereas MSE is favored during gradient optimization.'
      ],
      keyPoints: [
        'Original unit alignment',
        'Direct comparability with MAE and mean y',
        'Quadratic outlier weighting preserved',
        'Reporting vs Optimization preference'
      ]
    },
    {
      id: 'ml-u3-q16',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 16,
      title: 'Numerical: Memory (Capacity) and Cost of RAM',
      shortTitle: 'Solved Numerical: RAM Capacity vs Cost Prediction',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q2(c)', marks: 6 }
      ],
      syllabusTopics: ['Least Squares Numerical', 'Slope and Intercept', 'Linear Extrapolation'],
      definition: 'Application of least squares normal equations to derive a linear cost model from empirical RAM capacity data and predict future hardware pricing.',
      sections: [
        {
          title: '1. Problem Statement',
          content: [
            'Given empirical data relating Memory capacity X (in GB) to Cost Y (in $):',
            'X = [2, 4, 8, 16], Y = [12, 16, 28, 62]. Number of data points n = 4.',
            '(i) Determine the linear regression line Y = aX + b using least squares.',
            '(ii) Predict the estimated cost for a 32 GB RAM module.'
          ]
        },
        {
          title: '2. Calculation Table',
          table: {
            headers: ['X (GB)', 'Y ($)', 'XY', 'X²'],
            rows: [
              { parameter: 'Sample 1', col1: '2', col2: '12', col3: '24', col4: '4' },
              { parameter: 'Sample 2', col1: '4', col2: '16', col3: '64', col4: '16' },
              { parameter: 'Sample 3', col1: '8', col2: '28', col3: '224', col4: '64' },
              { parameter: 'Sample 4', col1: '16', col2: '62', col3: '992', col4: '256' },
              { parameter: 'Totals', col1: '∑X = 30', col2: '∑Y = 118', col3: '∑XY = 1304', col4: '∑X² = 340' }
            ]
          }
        },
        {
          title: '3. Step-by-Step Parameter Computation',
          content: [
            'Means: x̄ = 30 / 4 = 7.5 GB, ȳ = 118 / 4 = 29.5 $',
            'Numerator for slope a: n∑XY - (∑X)(∑Y) = 4(1304) - (30)(118) = 5216 - 3540 = 1676',
            'Denominator for slope a: n∑X² - (∑X)² = 4(340) - (30)² = 1360 - 900 = 460',
            'Slope a = 1676 / 460 = 3.6435 ≈ 3.643 $/GB',
            'Intercept b = ȳ - a·x̄ = 29.5 - (3.6435)(7.5) = 29.5 - 27.326 = 2.174 $',
            'Fitted Linear Regression Equation: Y = 3.643 X + 2.174'
          ],
          formulas: [
            { name: 'Derived Linear Equation', latex: 'Y = 3.643 X + 2.174' },
            { name: 'Prediction for X = 32 GB', latex: 'Y = 3.643(32) + 2.174 = 116.576 + 2.174 = \\$118.75 \\approx \\$118.77' }
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Find the Linear Regression Equation Y = aX + b for RAM capacity vs cost and predict cost for 32 GB RAM.',
        givenData: [
          { label: 'Sample size (n)', value: '4' },
          { label: 'X (Memory in GB)', value: '[2, 4, 8, 16]' },
          { label: 'Y (Cost in $)', value: '[12, 16, 28, 62]' },
          { label: 'Target input X_new', value: '32 GB' }
        ],
        toFind: [
          'Sums: ∑X, ∑Y, ∑XY, and ∑X²',
          'Slope parameter (a) and Intercept parameter (b)',
          'Fitted Regression Line: Y = aX + b',
          'Forecasted cost for 32 GB RAM'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Construct Calculation Table & Compute Sums',
            explanation: 'Tabulate each sample point and calculate product XY and square X² to aggregate the necessary normal equation sums.',
            table: {
              headers: ['Sample', 'X (GB)', 'Y ($)', 'XY', 'X²'],
              rows: [
                ['1', '2', '12', '24', '4'],
                ['2', '4', '16', '64', '16'],
                ['3', '8', '28', '224', '64'],
                ['4', '16', '62', '992', '256'],
                ['Total Sums', '∑X = 30', '∑Y = 118', '∑XY = 1304', '∑X² = 340']
              ]
            },
            result: '∑X = 30, ∑Y = 118, ∑XY = 1304, ∑X² = 340',
            tip: 'Always double-check the final row sum before plugging into slope equations; an error here cascades through all subsequent marks.'
          },
          {
            stepNumber: 2,
            title: 'Compute Sample Means (x̄ and ȳ)',
            explanation: 'Divide the respective column sums by sample size n = 4 to find the centroid coordinates of the data.',
            formula: '\\bar{X} = \\frac{\\sum X}{n}, \\quad \\bar{Y} = \\frac{\\sum Y}{n}',
            substitution: '\\bar{X} = \\frac{30}{4} = 7.5 \\text{ GB}, \\quad \\bar{Y} = \\frac{118}{4} = 29.5 \\text{ \\$}',
            result: 'x̄ = 7.5 GB, ȳ = 29.5 $',
            tip: 'The regression line is guaranteed to pass through the centroid point (x̄, ȳ).'
          },
          {
            stepNumber: 3,
            title: 'Calculate Slope Parameter (a)',
            explanation: 'Apply the standard least-squares normal equation for slope a.',
            formula: 'a = \\frac{n\\sum XY - (\\sum X)(\\sum Y)}{n\\sum X^2 - (\\sum X)^2}',
            substitution: 'a = \\frac{4(1304) - (30)(118)}{4(340) - (30)^2}',
            calculation: 'Numerator = 5216 - 3540 = 1676\nDenominator = 1360 - 900 = 460\na = 1676 / 460 = 3.6435 ≈ 3.643',
            result: 'a = 3.643 $/GB',
            tip: 'Watch out: (∑X)² is 30² = 900, which is totally different from ∑X² = 340!'
          },
          {
            stepNumber: 4,
            title: 'Calculate Y-Intercept Parameter (b)',
            explanation: 'Substitute the computed slope a and sample means x̄, ȳ into the centroid equation b = ȳ - a·x̄.',
            formula: 'b = \\bar{Y} - a\\bar{X}',
            substitution: 'b = 29.5 - (3.6435 \\times 7.5) = 29.5 - 27.326',
            calculation: 'b = 2.174 $',
            result: 'b = 2.174 $',
            tip: 'A positive intercept indicates the base manufacturing and packaging cost independent of memory capacity.'
          },
          {
            stepNumber: 5,
            title: 'Formulate Fitted Line of Regression',
            explanation: 'Combine the derived slope a and intercept b into the linear predictor formula.',
            formula: 'Y = aX + b',
            substitution: 'Y = 3.643 X + 2.174',
            result: 'Y = 3.643X + 2.174',
            tip: 'State units clearly: X is in Gigabytes (GB) and Y is in US Dollars ($).'
          },
          {
            stepNumber: 6,
            title: 'Predict Cost for 32 GB RAM Module',
            explanation: 'Plug the query value X = 32 into the fitted regression equation to extrapolate the forecasted price.',
            formula: 'Y_{pred} = 3.643(32) + 2.174',
            calculation: '3.643 \\times 32 = 116.576\n116.576 + 2.174 = 118.75 $',
            result: '$118.75 (or $118.77 with unrounded floats)',
            tip: 'Always provide a brief concluding remark explaining whether this extrapolation is reliable.'
          }
        ],
        finalAnswer: {
          label: 'Fitted Regression Model & Predicted Cost',
          value: 'Y = 3.643X + 2.174  ==>  Cost(32 GB) ≈ $118.75',
          interpretation: 'For every additional 1 GB of RAM capacity, cost increases by approximately $3.64. The predicted cost for a 32 GB RAM module is $118.75.'
        }
      },
      summary: [
        'Computed sums: ∑X = 30, ∑Y = 118, ∑XY = 1304, ∑X² = 340.',
        'Slope a = 1676 / 460 = 3.643; Intercept b = 2.174.',
        'Equation: Y = 3.643X + 2.174.',
        'Predicted cost of 32 GB RAM module is approximately $118.77.'
      ],
      keyPoints: [
        'Summation table accuracy',
        'Normal equations slope formula',
        'Intercept derivation from means',
        'Linear extrapolation prediction'
      ]
    },
    {
      id: 'ml-u3-q17',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 17,
      title: 'Numerical: Company Expenditure -- Predict the 6th Month',
      shortTitle: 'Solved Numerical: Company Monthly Expenditure Forecast',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q1(c)', marks: 6 }
      ],
      syllabusTopics: ['Least Squares Numerical', 'Forecasting', 'Time Series Regression'],
      definition: 'Using linear least squares regression to determine expenditure trend over 5 consecutive months and forecast the 6th month expenditure.',
      sections: [
        {
          title: '1. Problem Statement',
          content: [
            'Given monthly expenditure data for 5 months:',
            'Month x = [1, 2, 3, 4, 5]',
            'Expenditure y = [12, 19, 29, 37, 45]. Sample size n = 5.',
            'Task: Derive linear regression line y = ax + b and predict expenditure for month 6.'
          ]
        },
        {
          title: '2. Calculation Table',
          table: {
            headers: ['Month (x)', 'Expenditure (y)', 'xy', 'x²'],
            rows: [
              { parameter: 'Month 1', col1: '1', col2: '12', col3: '12', col4: '1' },
              { parameter: 'Month 2', col1: '2', col2: '19', col3: '38', col4: '4' },
              { parameter: 'Month 3', col1: '3', col2: '29', col3: '87', col4: '9' },
              { parameter: 'Month 4', col1: '4', col2: '37', col3: '148', col4: '16' },
              { parameter: 'Month 5', col1: '5', col2: '45', col3: '225', col4: '25' },
              { parameter: 'Totals', col1: '∑x = 15', col2: '∑y = 142', col3: '∑xy = 510', col4: '∑x² = 55' }
            ]
          }
        },
        {
          title: '3. Step-by-Step Parameter Computation',
          content: [
            'Means: x̄ = 15 / 5 = 3.0, ȳ = 142 / 5 = 28.4',
            'Numerator for slope a: 5(510) - (15)(142) = 2550 - 2130 = 420',
            'Denominator for slope a: 5(55) - (15)² = 275 - 225 = 50',
            'Slope a = 420 / 50 = 8.4 units/month',
            'Intercept b = ȳ - a·x̄ = 28.4 - 8.4(3) = 28.4 - 25.2 = 3.2',
            'Fitted Linear Regression Equation: y = 8.4x + 3.2'
          ],
          formulas: [
            { name: 'Linear Regression Model', latex: 'y = 8.4x + 3.2' },
            { name: 'Forecast for Month 6 (x = 6)', latex: 'y = 8.4(6) + 3.2 = 50.4 + 3.2 = 53.6 \\text{ units}' }
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Derive linear regression line y = ax + b for 5 months of expenditure and forecast month 6 expenditure.',
        givenData: [
          { label: 'Sample count (n)', value: '5 months' },
          { label: 'x (Months)', value: '[1, 2, 3, 4, 5]' },
          { label: 'y (Expenditure)', value: '[12, 19, 29, 37, 45]' },
          { label: 'Target forecast', value: 'Month x = 6' }
        ],
        toFind: [
          'Sums: ∑x, ∑y, ∑xy, ∑x²',
          'Slope rate a (expenditure increase per month)',
          'Base intercept b',
          'Forecasted expenditure at x = 6'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Build Summations Table',
            explanation: 'Construct the product and squares columns for the integer months x = 1 to 5.',
            table: {
              headers: ['Month (x)', 'Expenditure (y)', 'xy', 'x²'],
              rows: [
                ['1', '12', '12', '1'],
                ['2', '19', '38', '4'],
                ['3', '29', '87', '9'],
                ['4', '37', '148', '16'],
                ['5', '45', '225', '25'],
                ['Total', '∑x = 15', '∑y = 142', '∑xy = 510', '∑x² = 55']
              ]
            },
            result: '∑x = 15, ∑y = 142, ∑xy = 510, ∑x² = 55',
            tip: 'Since x is sequential from 1 to 5, ∑x = 15 and ∑x² = 55 can be quickly verified using n(n+1)/2 and n(n+1)(2n+1)/6.'
          },
          {
            stepNumber: 2,
            title: 'Compute Sample Means (x̄ and ȳ)',
            explanation: 'Calculate the average month and average monthly expenditure.',
            formula: '\\bar{x} = \\frac{\\sum x}{n} = \\frac{15}{5} = 3.0, \\quad \\bar{y} = \\frac{\\sum y}{n} = \\frac{142}{5} = 28.4',
            result: 'x̄ = 3.0, ȳ = 28.4'
          },
          {
            stepNumber: 3,
            title: 'Compute Slope Rate (a)',
            explanation: 'Substitute sums into the slope formula to determine monthly growth.',
            formula: 'a = \\frac{n\\sum xy - (\\sum x)(\\sum y)}{n\\sum x^2 - (\\sum x)^2}',
            substitution: 'a = \\frac{5(510) - (15)(142)}{5(55) - (15)^2}',
            calculation: 'Numerator = 2550 - 2130 = 420\nDenominator = 275 - 225 = 50\na = 420 / 50 = 8.4 units/month',
            result: 'a = 8.4 units/month',
            tip: 'The positive slope indicates that expenditure is growing steadily at 8.4 units per month.'
          },
          {
            stepNumber: 4,
            title: 'Compute Baseline Intercept (b)',
            explanation: 'Find the starting base cost b using the centroid formula.',
            formula: 'b = \\bar{y} - a\\bar{x}',
            substitution: 'b = 28.4 - 8.4(3.0) = 28.4 - 25.2 = 3.2',
            result: 'b = 3.2 units'
          },
          {
            stepNumber: 5,
            title: 'Formulate Prediction Line',
            explanation: 'Combine slope and intercept into the complete linear forecasting model.',
            formula: 'y = 8.4x + 3.2',
            result: 'y = 8.4x + 3.2'
          },
          {
            stepNumber: 6,
            title: 'Forecast Month 6 Expenditure',
            explanation: 'Evaluate the equation at x = 6 to forecast future expenditure.',
            formula: 'y(6) = 8.4(6) + 3.2',
            calculation: '8.4 \\times 6 = 50.4\n50.4 + 3.2 = 53.6 units',
            result: '53.6 units',
            tip: 'Box this final numerical value on your exam answer sheet for full credit.'
          }
        ],
        finalAnswer: {
          label: 'Fitted Equation & 6th Month Expenditure',
          value: 'y = 8.4x + 3.2  ==>  y(6) = 53.6 units',
          interpretation: 'Monthly expenditure increases by 8.4 units each month. The forecasted expenditure for Month 6 is 53.6 units.'
        }
      },
      summary: [
        'Sums: ∑x = 15, ∑y = 142, ∑xy = 510, ∑x² = 55.',
        'Slope a = 8.4, Intercept b = 3.2 ==> y = 8.4x + 3.2.',
        'Expenditure increases by 8.4 units every month.',
        'Forecasted expenditure for Month 6 is exactly 53.6 units.'
      ],
      keyPoints: [
        'Standard sums computation',
        'Direct substitution into normal equations',
        'Slope rate of 8.4 units/month',
        'Month 6 forecast = 53.6'
      ]
    },
    {
      id: 'ml-u3-q18',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 18,
      title: 'Numerical: Carbohydrates (X) and Calories (Y)',
      shortTitle: 'Solved Numerical: Carbohydrates vs Calories Regression',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q1(b)', marks: 6 }
      ],
      syllabusTopics: ['Least Squares Numerical', 'Nutritional Modeling', 'Prediction'],
      definition: 'Linear regression analysis fitting carbohydrates content against total calories to estimate calorie count for arbitrary carbohydrate amounts.',
      sections: [
        {
          title: '1. Problem Statement',
          content: [
            'Given sample observations of Carbohydrates X (grams) and Calories Y:',
            'X = [8, 9.5, 10, 6, 7, 4], Y = [12, 138, 147, 88, 108, 62]. Sample size n = 6.',
            'Task: Compute linear regression equation Y = aX + b and estimate calories for X = 12 grams.'
          ]
        },
        {
          title: '2. Calculation Table',
          table: {
            headers: ['X (Carbs)', 'Y (Calories)', 'XY', 'X²'],
            rows: [
              { parameter: 'Item 1', col1: '8.0', col2: '12', col3: '96.0', col4: '64.00' },
              { parameter: 'Item 2', col1: '9.5', col2: '138', col3: '1311.0', col4: '90.25' },
              { parameter: 'Item 3', col1: '10.0', col2: '147', col3: '1470.0', col4: '100.00' },
              { parameter: 'Item 4', col1: '6.0', col2: '88', col3: '528.0', col4: '36.00' },
              { parameter: 'Item 5', col1: '7.0', col2: '108', col3: '756.0', col4: '49.00' },
              { parameter: 'Item 6', col1: '4.0', col2: '62', col3: '248.0', col4: '16.00' },
              { parameter: 'Totals', col1: '∑X = 44.5', col2: '∑Y = 555', col3: '∑XY = 4409.0', col4: '∑X² = 355.25' }
            ]
          }
        },
        {
          title: '3. Step-by-Step Parameter Computation',
          content: [
            'Means: x̄ = 44.5 / 6 = 7.4167, ȳ = 555 / 6 = 92.5',
            'Numerator for slope a: 6(4409) - (44.5)(555) = 26454 - 24697.5 = 1756.5',
            'Denominator for slope a: 6(355.25) - (44.5)² = 2131.5 - 1980.25 = 151.25',
            'Slope a = 1756.5 / 151.25 = 11.6132 ≈ 11.613 calories/gram',
            'Intercept b = ȳ - a·x̄ = 92.5 - (11.6132)(7.4167) = 92.5 - 86.131 = 6.369 calories',
            'Fitted Linear Regression Equation: Y = 11.613 X + 6.369'
          ],
          formulas: [
            { name: 'Linear Model', latex: 'Y = 11.613 X + 6.369' },
            { name: 'Prediction for X = 12 grams', latex: 'Y = 11.613(12) + 6.369 = 139.356 + 6.369 = 145.725 \\approx 145.73 \\text{ calories}' }
          ]
        }
      ],
      summary: [
        'Sums: ∑X = 44.5, ∑Y = 555, ∑XY = 4409, ∑X² = 355.25.',
        'Slope a = 11.613 (each gram of carbohydrate adds ~11.61 calories).',
        'Intercept b = 6.369.',
        'Estimated calories for 12 grams of carbohydrate: ~145.73 calories.'
      ],
      keyPoints: [
        'Floating-point sums precision',
        'Normal equations slope computation: 1756.5 / 151.25 = 11.613',
        'Baseline intercept b = 6.369',
        'Prediction = 145.73 calories'
      ]
    },
    {
      id: 'ml-u3-q19',
      unitId: 'unit-3',
      subjectId: 'machine-learning',
      qNumber: 19,
      title: 'Numerical: Find the Linear Regression Line for X=1,2,3,4 and Y=3,4,5,7',
      shortTitle: 'Solved Numerical: Linear Regression Line Derivation',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 6', questionNo: 'Q1(b)', marks: 6 }
      ],
      syllabusTopics: ['Least Squares Numerical', 'Line of Best Fit'],
      definition: 'Complete derivation of the standard least-squares regression line for basic sequential integer inputs.',
      sections: [
        {
          title: '1. Problem Statement',
          content: [
            'Given data pairs: (1, 3), (2, 4), (3, 5), (4, 7). Number of pairs n = 4.',
            'Task: Derive the least squares regression line equation Y = aX + b.'
          ]
        },
        {
          title: '2. Calculation Table',
          table: {
            headers: ['X', 'Y', 'XY', 'X²'],
            rows: [
              { parameter: 'Pair 1', col1: '1', col2: '3', col3: '3', col4: '1' },
              { parameter: 'Pair 2', col1: '2', col2: '4', col3: '8', col4: '4' },
              { parameter: 'Pair 3', col1: '3', col2: '5', col3: '15', col4: '9' },
              { parameter: 'Pair 4', col1: '4', col2: '7', col3: '28', col4: '16' },
              { parameter: 'Totals', col1: '∑X = 10', col2: '∑Y = 19', col3: '∑XY = 54', col4: '∑X² = 30' }
            ]
          }
        },
        {
          title: '3. Step-by-Step Parameter Computation',
          content: [
            'Means: x̄ = 10 / 4 = 2.5, ȳ = 19 / 4 = 4.75',
            'Numerator for slope a: n∑XY - (∑X)(∑Y) = 4(54) - (10)(19) = 216 - 190 = 26',
            'Denominator for slope a: n∑X² - (∑X)² = 4(30) - (10)² = 120 - 100 = 20',
            'Slope a = 26 / 20 = 1.3',
            'Intercept b = ȳ - a·x̄ = 4.75 - 1.3(2.5) = 4.75 - 3.25 = 1.5',
            'Fitted Linear Regression Equation: Y = 1.3 X + 1.5'
          ],
          formulas: [
            { name: 'Final Regression Line', latex: 'Y = 1.3 X + 1.5' }
          ]
        }
      ],
      numericalSolution: {
        problemSummary: 'Find the standard least squares linear regression line Y = aX + b for X = [1, 2, 3, 4] and Y = [3, 4, 5, 7].',
        givenData: [
          { label: 'Sample size (n)', value: '4' },
          { label: 'X values', value: '[1, 2, 3, 4]' },
          { label: 'Y values', value: '[3, 4, 5, 7]' }
        ],
        toFind: [
          'Calculated sums: ∑X, ∑Y, ∑XY, ∑X²',
          'Slope parameter (a)',
          'Y-intercept parameter (b)',
          'Final equation of best fit line Y = aX + b'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'Tabulate Coordinates & Compute Required Sums',
            explanation: 'Create a 4-row computation table with columns for X, Y, product XY, and squared X².',
            table: {
              headers: ['Pair', 'X', 'Y', 'XY', 'X²'],
              rows: [
                ['1', '1', '3', '3', '1'],
                ['2', '2', '4', '8', '4'],
                ['3', '3', '5', '15', '9'],
                ['4', '4', '7', '28', '16'],
                ['Total Sums', '∑X = 10', '∑Y = 19', '∑XY = 54', '∑X² = 30']
              ]
            },
            result: '∑X = 10, ∑Y = 19, ∑XY = 54, ∑X² = 30'
          },
          {
            stepNumber: 2,
            title: 'Compute Sample Means (x̄ and ȳ)',
            explanation: 'Divide column totals by sample size n = 4 to locate the dataset centroid.',
            formula: '\\bar{X} = \\frac{10}{4} = 2.5, \\quad \\bar{Y} = \\frac{19}{4} = 4.75',
            result: 'x̄ = 2.5, ȳ = 4.75'
          },
          {
            stepNumber: 3,
            title: 'Calculate Slope (a) via Normal Equations',
            explanation: 'Substitute sums into the standard least squares slope formula.',
            formula: 'a = \\frac{n\\sum XY - (\\sum X)(\\sum Y)}{n\\sum X^2 - (\\sum X)^2}',
            substitution: 'a = \\frac{4(54) - (10)(19)}{4(30) - (10)^2}',
            calculation: 'Numerator = 216 - 190 = 26\nDenominator = 120 - 100 = 20\na = 26 / 20 = 1.30',
            result: 'a = 1.30',
            tip: 'Denominator is always n∑X² - (∑X)², not n∑X² - ∑X².'
          },
          {
            stepNumber: 4,
            title: 'Calculate Y-Intercept (b)',
            explanation: 'Substitute slope a = 1.30 and centroids x̄ = 2.5, ȳ = 4.75 into b = ȳ - a·x̄.',
            formula: 'b = \\bar{Y} - a\\bar{X}',
            substitution: 'b = 4.75 - 1.30(2.5) = 4.75 - 3.25 = 1.50',
            result: 'b = 1.50'
          },
          {
            stepNumber: 5,
            title: 'State Final Best Fit Regression Line',
            explanation: 'Combine slope and intercept into the final exam format.',
            formula: 'Y = 1.3X + 1.5',
            result: 'Y = 1.3X + 1.5',
            tip: 'Verify quickly: when X = 1, Y_pred = 1.3(1) + 1.5 = 2.8 (close to actual Y = 3).'
          }
        ],
        finalAnswer: {
          label: 'Fitted Best Fit Line',
          value: 'Y = 1.3X + 1.5',
          interpretation: 'For every unit increase in X, Y increases by 1.3. The baseline value when X = 0 is 1.5.'
        }
      },
      summary: [
        'Sums: ∑X = 10, ∑Y = 19, ∑XY = 54, ∑X² = 30.',
        'Slope a = 26 / 20 = 1.3; Intercept b = 4.75 - 3.25 = 1.5.',
        'Final regression line: Y = 1.3X + 1.5.',
        'This line serves as the foundation for the evaluation metric verification in Q14.'
      ],
      keyPoints: [
        'Integer coordinates tabular solution',
        'Slope a = 1.3',
        'Intercept b = 1.5',
        'Cross-validated with worked Q14 metrics'
      ]
    }
  ]
};
