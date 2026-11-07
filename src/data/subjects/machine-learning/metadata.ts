import { Subject } from '@/types';

export const machineLearningMetadata: Omit<Subject, 'units'> = {
  id: 'machine-learning',
  code: 'CS602',
  name: 'Machine Learning',
  semester: 'Semester VI',
  department: 'Computer Science & Engineering',
  description: 'Comprehensive university examination question bank and structured revision notes covering Supervised Learning (Regression & Classification) and Unsupervised Learning.',
  iconName: 'BrainCircuit',
  accentColor: 'indigo',
  syllabusOverview: [
    'Unit III: Supervised Learning — Regression (Bias-Variance, Linear, Ridge, Lasso, Gradient Descent, Evaluation Metrics)',
    'Unit IV: Supervised Learning — Classification (KNN, SVM, Ensembles: Bagging, Boosting, Random Forest, AdaBoost, Multiclass, Metrics)',
    'Unit V: Unsupervised Learning (K-Means, K-Medoids, Hierarchical, DBSCAN, OPTICS, DENCLUE, Outlier Analysis: LOF, iForest, Spectral Clustering, Validation)'
  ]
};
