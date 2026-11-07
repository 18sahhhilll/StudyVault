import { Unit } from '@/types';

export const unit5Data: Unit = {
  id: 'unit-5',
  unitNumber: 5,
  title: 'Unsupervised Learning',
  shortTitle: 'Unsupervised Learning',
  description: 'In-depth exploration of Partitioning Clustering (K-Means, K-Medoids/PAM), Hierarchical Clustering (Agglomerative, Divisive, Dendrograms), Density-Based Clustering (DBSCAN, OPTICS, DENCLUE), Graph-Based & Spectral Clustering, Outlier Analysis (LOF, Isolation Forest), and Validation Metrics (Elbow Method, Silhouette, Intrinsic vs Extrinsic).',
  syllabus: [
    'Unsupervised Learning Fundamentals & Cluster Taxonomy',
    'K-Means Clustering: Objective, Algorithm, and Limitations',
    'Cluster Optimization & Objective Function Minimization',
    'K-Medoids / Partitioning Around Medoids (PAM) Algorithm',
    'Hierarchical Clustering: Agglomerative (AGNES), Divisive (DIANA), Dendrograms',
    'Linkage Criteria: Single, Complete, Average, Centroid Linkage',
    'Density-Based Clustering: DBSCAN (Core, Border, Noise points)',
    'Advanced Density Clustering: OPTICS Reachability & DENCLUE Density Attractors',
    'Outlier Analysis & Anomaly Detection Frameworks',
    'Local Outlier Factor (LOF): k-distance, LRD, and Calculation',
    'Isolation Factor Model (Isolation Forest / iForest)',
    'Graph-Based Clustering & Minimum Spanning Tree (MST)',
    'Spectral Clustering: Affinity Matrix, Graph Laplacian, Eigenvectors',
    'Clustering Evaluation: Elbow Method (SSE/WCSS) and Silhouette Coefficient',
    'Validation Metrics: Intrinsic (Silhouette, Davies-Bouldin) vs Extrinsic (Rand, ARI, Homogeneity, Completeness)'
  ],
  questionPaperIndex: [
    { paper: 'Paper 1', qMain: '(a) → Q5, (b) → Q9, (c) → Q15', qOr: '(a) → Q18, (b) → Q1, (c) → (i) Q13, (ii) Q7' },
    { paper: 'Paper 2', qMain: '(a) → Q4, (b) → Q7, (c) → Q2', qOr: '(a) → Q11, (b) → Q5, (c) → Q19' },
    { paper: 'Paper 3', qMain: '(a) → Q4, (b) → Q7, (c) → Q9', qOr: '(a) → Q11, (b) → Q1, (c) → Q5' },
    { paper: 'Paper 4', qMain: '(a) → Q1, (b) → Q9 + Q10, (c) → Q12', qOr: '(a) → Q5 + Q7, (b) → (i) Q3, (ii) Q4, (iii) Q17' },
    { paper: 'Paper 5', qMain: '(a) → Q3, (b) → Q6, (c) → Q7', qOr: '(a) → Q16, (b) → Q9, (c) → Q14' },
    { paper: 'Paper 6', qMain: '(a) → Q8, (b) → Q1, (c) → (i) Q5, (ii) Q5 (dendrogram)', qOr: '(a) → Q10, (b) → Q13, (c) → (i) Q15, (ii) Q18' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Unsupervised Learning', definition: 'Machine learning paradigms operating on unlabelled data to discover inherent natural groupings, latent structures, or anomalous patterns.' },
      { term: 'Clustering', definition: 'Grouping data points such that objects within the same cluster exhibit high intra-cluster similarity (cohesion) and low inter-cluster similarity (separation).' },
      { term: 'K-Means', definition: 'Centroid-based partitioning algorithm iteratively minimizing within-cluster sum of squared Euclidean distances to cluster means m_k.' },
      { term: 'Medoid', definition: 'The most centrally positioned actual observed data point of a cluster whose average dissimilarity to all points in that cluster is minimal.' },
      { term: 'Dendrogram', definition: 'Tree diagram illustrating the hierarchical sequence of nested cluster merges (agglomerative) or splits (divisive) across distance thresholds.' },
      { term: 'DBSCAN Core Point', definition: 'A data point that contains at least MinPts neighbouring points within a specified spherical radius ε (eps).' },
      { term: 'Local Outlier Factor (LOF)', definition: 'Density-based anomaly score comparing the local reachability density of an object against the local densities of its k-nearest neighbours.' },
      { term: 'Isolation Forest', definition: 'Anomaly detector based on random feature partitioning; isolates outliers with significantly shorter tree path lengths than dense normal points.' },
      { term: 'Silhouette Coefficient', definition: 'Intrinsic cluster validation metric s(i) = (b - a) / max(a, b) ranging from -1 to +1, balancing cohesion against separation.' }
    ],
    coreFormulas: [
      { name: 'K-Means Objective (WCSS / SSE)', latex: 'W(C) = \\sum_{k=1}^{K}\\sum_{x_i \\in C_k}\\|x_i - m_k\\|^2' },
      { name: 'Centroid Mean Update', latex: 'm_k = \\frac{1}{|C_k|}\\sum_{x_i \\in C_k} x_i' },
      { name: 'DBSCAN Core Condition', latex: '|N_\\varepsilon(p)| \\ge \\text{MinPts}, \\quad N_\\varepsilon(p) = \\{q \\in D \\mid \\text{dist}(p, q) \\le \\varepsilon\\}' },
      { name: 'Local Reachability Density (LRD)', latex: '\\text{LRD}_k(p) = \\frac{|N_k(p)|}{\\sum_{o \\in N_k(p)}\\text{reach-dist}_k(p, o)}' },
      { name: 'Local Outlier Factor (LOF)', latex: '\\text{LOF}_k(p) = \\frac{\\sum_{o \\in N_k(p)}\\frac{\\text{LRD}_k(o)}{\\text{LRD}_k(p)}}{|N_k(p)|}' },
      { name: 'Isolation Score', latex: 's(x, n) = 2^{-\\frac{E[h(x)]}{c(n)}}' },
      { name: 'Graph Laplacian', latex: 'L = D - A \\quad \\text{where } D_{ii} = \\sum_{j} A_{ij}' },
      { name: 'Silhouette Coefficient', latex: 's(i) = \\frac{b(i) - a(i)}{\\max\\big(a(i), b(i)\\big)}' }
    ],
    comparisonHighlights: [
      { title: 'K-Means vs K-Medoids', summary: 'K-Means uses artificial mean centroids (sensitive to outliers, spherical only). K-Medoids uses actual data points (robust to outliers, any distance metric).' },
      { title: 'K-Means vs Hierarchical', summary: 'K-Means is flat, fast O(N·K·t), requires K upfront. Hierarchical builds tree dendrogram, slow O(N²)-O(N³), does not require pre-specifying K.' },
      { title: 'K-Means vs DBSCAN', summary: 'K-Means requires K, assumes spherical clusters, fails on noise. DBSCAN discovers arbitrary shapes, requires no K, identifies noise points natively.' },
      { title: 'Intrinsic vs Extrinsic Validation', summary: 'Intrinsic evaluates internal structure (cohesion & separation, no ground truth labels). Extrinsic evaluates match against known ground truth labels.' }
    ],
    examTips: [
      'In K-Means numerical questions, show coordinates of assigned clusters, sum of coordinates, and updated centroids for every iteration until convergence.',
      'For DBSCAN, explicitly define Core Point (≥ MinPts), Border Point (< MinPts but in ε of core), and Noise (neither).',
      'In Hierarchical clustering, clearly distinguish between Single Linkage (minimum distance, chaining risk) and Complete Linkage (maximum distance, compact).'
    ]
  },
  questions: [
    {
      id: 'ml-u5-q1',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 1,
      title: 'K-Means Clustering: Explain with Essential Steps and Example',
      shortTitle: 'K-Means Algorithm Architecture, Steps & Example',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q6(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q6(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q5(a)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q5(b)', marks: 6 }
      ],
      syllabusTopics: ['K-Means Clustering', 'Centroids', 'WCSS / SSE', 'Partitioning'],
      definition: 'K-Means is an unsupervised, iterative, centroid-based partitioning clustering algorithm that divides N observations into K disjoint clusters, where each instance belongs to the cluster with the nearest mean centroid.',
      sections: [
        {
          title: '1. Mathematical Objective Function',
          content: [
            'Goal: Partition dataset into K non-overlapping clusters C₁, C₂, ..., C_K to minimize Within-Cluster Sum of Squares (WCSS):'
          ],
          formulas: [
            {
              name: 'K-Means Cost Function (WCSS)',
              latex: 'W(C) = \\sum_{k=1}^{K}\\sum_{x_i \\in C_k} \\|x_i - m_k\\|^2'
            }
          ]
        },
        {
          title: '2. Essential Algorithmic Protocol',
          content: [
            '1. Initialization: Specify cluster count K. Select K initial centroids m₁, ..., m_K (randomly or via K-Means++).',
            '2. Assignment Step: Assign each data point xᵢ to its nearest centroid based on minimum Euclidean distance: C(i) = argmin_k ||xᵢ - m_k||².',
            '3. Update Step: Recompute the centroid m_k of each cluster as the mathematical mean of all assigned points: m_k = (1 / |C_k|) ∑_{x ∈ C_k} x.',
            '4. Convergence Check: Repeat steps 2 and 3 until centroids cease moving (or assignment changes fall below threshold).'
          ]
        },
        {
          title: '3. Illustrative Worked Example (7 Subjects, 2 Variables A & B, K = 2)',
          content: [
            'Points: S1(1, 1), S2(1.5, 2), S3(3, 4), S4(5, 7), S5(3.5, 5), S6(4.5, 5), S7(3.5, 4.5).',
            'Initial Centroids: Pick two furthest points: c₁ = S1(1, 1), c₂ = S4(5, 7).',
            'Iteration 1: Distance to c₁ vs c₂ assigns Cluster 1 = {S1, S2, S3} and Cluster 2 = {S4, S5, S6, S7}.',
            'Updated Centroids: c₁ = (1.83, 2.33), c₂ = (4.13, 5.38).',
            'Iteration 2: Re-checking distances reveals S3 is now closer to c₂ (dist 1.8 < 2.1). S3 moves to Cluster 2!',
            'Final Convergence: Cluster 1 = {S1, S2} with centroid (1.25, 1.50); Cluster 2 = {S3, S4, S5, S6, S7} with centroid (3.90, 5.10).'
          ]
        },
        {
          title: '4. Strengths & Limitations Matrix',
          table: {
            headers: ['Strengths of K-Means', 'Limitations of K-Means'],
            rows: [
              { parameter: 'Computation', col1: 'Very efficient O(N·K·t); scales cleanly to large datasets.', col2: 'Requires specifying K in advance.' },
              { parameter: 'Convergence', col1: 'Guaranteed to converge to a local minimum.', col2: 'Sensitive to initial centroid positions; can get trapped in sub-optimal local minima.' },
              { parameter: 'Geometry', col1: 'Intuitive and mathematically straightforward.', col2: 'Assumes spherical clusters of similar size; fails on complex or elongated shapes.' },
              { parameter: 'Outliers', col1: 'Fast updates via batch means.', col2: 'Highly sensitive to outliers (extreme points drag cluster means).' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-kmeans-flow',
          title: 'K-Means Iterative Optimization Flowchart',
          caption: 'Cyclic pipeline of centroid initialization, Euclidean point assignment, mean recalculation, and convergence check.',
          type: 'svg-interactive',
          svgType: 'kmeans-flow'
        }
      ],
      summary: [
        'K-Means partitions data into K non-overlapping clusters by minimizing squared distance to means.',
        'Iterative steps: Initialize K centroids -> Assign to closest centroid -> Recompute means -> Repeat until stable.',
        'Fast and scalable, but requires K upfront, sensitive to initial seeds and outliers, and assumes spherical clusters.'
      ],
      keyPoints: [
        'Centroid-based partitioning',
        'WCSS / SSE objective minimization',
        'Assignment and Update iteration cycles',
        'K-Means++ initialization enhancement'
      ]
    },
    {
      id: 'ml-u5-q2',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 2,
      title: 'Numerical: K-Means on Nine Points with K = 3',
      shortTitle: 'Solved Numerical: K-Means on 9 Points (2 Full Iterations)',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q5(c)', marks: 6 }
      ],
      syllabusTopics: ['K-Means Numerical', 'Euclidean Distance', 'Centroid Update'],
      definition: 'Complete two-iteration execution of K-Means on 9 2D points with K = 3, verifying distance calculations, cluster memberships, and final convergence.',
      sections: [
        {
          title: '1. Problem Setup',
          content: [
            'Given 9 Points: P1(1, 3), P2(2, 2), P3(5, 8), P4(8, 5), P5(3, 9), P6(10, 7), P7(3, 3), P8(9, 4), P9(3, 7).',
            'Number of clusters K = 3.',
            'Initial Centroids chosen: C₁ = P1(1, 3), C₂ = P4(8, 5), C₃ = P5(3, 9).',
            'Distance formula: d = √[(x - x_c)² + (y - y_c)²]'
          ]
        },
        {
          title: '2. Iteration 1 Distance Calculations',
          table: {
            headers: ['Point', 'dist to C₁(1, 3)', 'dist to C₂(8, 5)', 'dist to C₃(3, 9)', 'Assigned Cluster'],
            rows: [
              { parameter: 'P1 (1, 3)', col1: '0.00', col2: '7.28', col3: '6.32', col4: 'Cluster 1 (C₁)' },
              { parameter: 'P2 (2, 2)', col1: '1.41', col2: '6.71', col3: '7.07', col4: 'Cluster 1 (C₁)' },
              { parameter: 'P3 (5, 8)', col1: '6.40', col2: '4.24', col3: '2.24', col4: 'Cluster 3 (C₃)' },
              { parameter: 'P4 (8, 5)', col1: '7.28', col2: '0.00', col3: '6.40', col4: 'Cluster 2 (C₂)' },
              { parameter: 'P5 (3, 9)', col1: '6.32', col2: '6.40', col3: '0.00', col4: 'Cluster 3 (C₃)' },
              { parameter: 'P6 (10, 7)', col1: '9.85', col2: '2.83', col3: '7.28', col4: 'Cluster 2 (C₂)' },
              { parameter: 'P7 (3, 3)', col1: '2.00', col2: '5.39', col3: '6.00', col4: 'Cluster 1 (C₁)' },
              { parameter: 'P8 (9, 4)', col1: '8.06', col2: '1.41', col3: '7.81', col4: 'Cluster 2 (C₂)' },
              { parameter: 'P9 (3, 7)', col1: '4.47', col2: '5.39', col3: '2.00', col4: 'Cluster 3 (C₃)' }
            ]
          }
        },
        {
          title: '3. Iteration 1 Centroid Updates',
          content: [
            'Cluster 1: {P1, P2, P7} ==> Mean = ((1+2+3)/3, (3+2+3)/3) = (2.00, 2.67)',
            'Cluster 2: {P4, P6, P8} ==> Mean = ((8+10+9)/3, (5+7+4)/3) = (9.00, 5.33)',
            'Cluster 3: {P3, P5, P9} ==> Mean = ((5+3+3)/3, (8+9+7)/3) = (3.67, 8.00)'
          ]
        },
        {
          title: '4. Iteration 2 Distance Verification & Convergence',
          table: {
            headers: ['Point', 'dist to (2, 2.67)', 'dist to (9, 5.33)', 'dist to (3.67, 8.00)', 'Cluster Decision'],
            rows: [
              { parameter: 'P1 (1, 3)', col1: '1.05', col2: '8.33', col3: '5.67', col4: 'Cluster 1 (No change)' },
              { parameter: 'P2 (2, 2)', col1: '0.67', col2: '7.75', col3: '6.23', col4: 'Cluster 1 (No change)' },
              { parameter: 'P3 (5, 8)', col1: '6.11', col2: '4.81', col3: '1.33', col4: 'Cluster 3 (No change)' },
              { parameter: 'P4 (8, 5)', col1: '6.43', col2: '1.05', col3: '5.27', col4: 'Cluster 2 (No change)' },
              { parameter: 'P5 (3, 9)', col1: '6.41', col2: '7.03', col3: '1.20', col4: 'Cluster 3 (No change)' },
              { parameter: 'P6 (10, 7)', col1: '9.10', col2: '1.94', col3: '6.41', col4: 'Cluster 2 (No change)' },
              { parameter: 'P7 (3, 3)', col1: '1.05', col2: '6.44', col3: '5.04', col4: 'Cluster 1 (No change)' },
              { parameter: 'P8 (9, 4)', col1: '7.13', col2: '1.33', col3: '6.66', col4: 'Cluster 2 (No change)' },
              { parameter: 'P9 (3, 7)', col1: '4.45', col2: '6.23', col3: '1.20', col4: 'Cluster 3 (No change)' }
            ]
          }
        },
        {
          title: '5. Final Conclusion',
          content: [
            'Because zero points changed cluster assignment in Iteration 2, the algorithm has reached full convergence.',
            'Final Cluster 1: {P1, P2, P7} with centroid (2.00, 2.67)',
            'Final Cluster 2: {P4, P6, P8} with centroid (9.00, 5.33)',
            'Final Cluster 3: {P3, P5, P9} with centroid (3.67, 8.00)'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-kmeans-numerical',
          title: 'K-Means 9-Point Scatter with Converged Clusters',
          caption: '2D coordinate plot showing the 9 points grouped cleanly into 3 dashed elliptical clusters around their final centroids.',
          type: 'svg-interactive',
          svgType: 'kmeans-numerical'
        }
      ],
      summary: [
        'Initial centroids (1, 3), (8, 5), (3, 9) partition points into {P1,P2,P7}, {P4,P6,P8}, {P3,P5,P9}.',
        'Updated means: (2, 2.67), (9, 5.33), (3.67, 8.00).',
        'Iteration 2 distance check yields zero point reassignments.',
        'Algorithm terminates with complete convergence.'
      ],
      keyPoints: [
        'Distance calculation accuracy',
        'Mean recalculation formulas',
        'Convergence detection criteria',
        'Final cluster and centroid summary'
      ]
    },
    {
      id: 'ml-u5-q3',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 3,
      title: '"Optimization of Clusters" in Clustering',
      shortTitle: 'Cluster Optimization & Objective Minimization',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q5(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q6(b)(i)', marks: 4 }
      ],
      syllabusTopics: ['Cluster Optimization', 'WCSS Minimization', 'Cohesion and Separation'],
      definition: 'Cluster optimization is the mathematical formulation of clustering as an objective minimization task aimed at simultaneously maximizing intra-cluster compactness (cohesion) and maximizing inter-cluster separation.',
      sections: [
        {
          title: '1. Mathematical Formulation',
          content: [
            'In partitioning algorithms like K-Means, optimization is formally defined as minimizing the total within-cluster scatter W(C):'
          ],
          formulas: [
            {
              name: 'Pairwise Scatter Formulation',
              latex: 'W(C) = \\frac{1}{2}\\sum_{k=1}^{K}\\sum_{C(i)=k}\\sum_{C(j)=k}\\|x_i - x_j\\|^2 = \\sum_{k=1}^{K} N_k \\sum_{C(i)=k}\\|x_i - m_k\\|^2'
            }
          ]
        },
        {
          title: '2. Major Challenges in Cluster Optimization',
          content: [
            '1. Unknown K: Increasing K always decreases W(C) trivially (K = N gives W(C) = 0). Finding true K requires trade-off metrics like the Elbow method or Silhouette score.',
            '2. Non-Convex Objective & Local Minima: W(C) surface contains numerous local minima; algorithms can get trapped easily based on bad initial seeds. Handled via repeated restarts or K-Means++.',
            '3. Sensitivity to Scale: Attributes with large variances dominate Euclidean distances, warping the cluster optimization path. Solved via Z-score normalization.',
            '4. Non-Spherical Geometry: Standard W(C) assumes circular/spherical density distributions; complex manifolds require spectral or density-based optimization.'
          ]
        }
      ],
      summary: [
        'Cluster optimization seeks groupings with maximum internal compactness and maximum separation.',
        'Formalized as minimizing within-cluster sum of squares W(C).',
        'Core challenges include determining optimal K, avoiding local minima, handling outliers, and feature scaling.'
      ],
      keyPoints: [
        'Cohesion vs Separation duality',
        'Pairwise distance minimization',
        'Local minima trap and K-Means++',
        'Feature standardization necessity'
      ]
    },
    {
      id: 'ml-u5-q4',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 4,
      title: 'K-Medoids: Why is it Used? Explain the K-Medoids (PAM) Algorithm',
      shortTitle: 'K-Medoids (PAM) Algorithm & Robustness',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q5(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q5(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q6(b)(ii)', marks: 4 }
      ],
      syllabusTopics: ['K-Medoids', 'PAM Algorithm', 'Robustness to Outliers'],
      definition: 'K-Medoids (Partitioning Around Medoids - PAM) is a robust partitioning clustering algorithm where each cluster is represented by an actual observed data point (medoid) rather than an artificial arithmetic mean.',
      sections: [
        {
          title: '1. Why K-Medoids is Used (Over K-Means)',
          content: [
            '1. Extreme Robustness to Outliers: Means are severely pulled by extreme outliers, whereas medoids are actual centrally located median points that remain stable.',
            '2. Arbitrary Distance Metrics: K-Means strictly requires Euclidean distance for means to be valid. K-Medoids works with any metric: Manhattan, Minkowski, cosine, or categorical distances.',
            '3. Interpretability: The cluster center is an actual observed entity from the dataset (e.g., an actual patient or actual document).',
            '4. Numerical & Categorical Flexibility: Can cluster non-numeric and discrete data where computing an arithmetic mean is mathematically impossible.'
          ]
        },
        {
          title: '2. The PAM (Partitioning Around Medoids) Algorithm',
          content: [
            '1. Initialize: Arbitrarily select K objects from dataset as the initial medoids.',
            '2. Assign: Associate each non-medoid object to its closest medoid.',
            '3. Swap Search: For each medoid m and each non-medoid object O\':',
            '   a. Calculate the total swap cost S = (Cost after swapping m with O\') - (Current total cost).',
            '   b. Total cost is the sum of absolute dissimilarities of all points to their assigned medoids.',
            '4. Update: If S < 0 (total cost decreases), execute the swap making O\' the new medoid.',
            '5. Repeat: Continue steps 2 to 4 until medoid assignments stabilize.'
          ]
        },
        {
          title: '3. K-Means vs K-Medoids Comparison',
          table: {
            headers: ['Comparative Feature', 'K-Means', 'K-Medoids (PAM)'],
            rows: [
              { parameter: 'Cluster Center', col1: 'Arithmetic Mean (frequently not an actual data point)', col2: 'Actual observed data point (Medoid)' },
              { parameter: 'Sensitivity to Outliers', col1: 'Very High (outliers drag centroid locations)', col2: 'Very Low (robust to extreme values and noise)' },
              { parameter: 'Applicable Data Types', col1: 'Continuous numerical features only', col2: 'Numerical, categorical, or arbitrary distance matrices' },
              { parameter: 'Computational Complexity', col1: 'O(N·K·t) (very fast, scales to large data)', col2: 'O(K·(N - K)²·t) (computationally heavy on large N)' }
            ]
          }
        }
      ],
      summary: [
        'K-Medoids represents clusters using real central data points called medoids.',
        'Provides extreme robustness against outliers and works with arbitrary distance metrics.',
        'PAM algorithm searches for cost-improving swaps; computationally heavier than K-Means.'
      ],
      keyPoints: [
        'Medoid definition (most centrally located actual object)',
        'Robustness against outlier distortion',
        'Swap cost evaluation S < 0 rule',
        'Computational scaling comparison'
      ]
    },
    {
      id: 'ml-u5-q5',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 5,
      title: 'Hierarchical Clustering with Example (Agglomerative, Divisive, Dendrogram)',
      shortTitle: 'Hierarchical Clustering (Agglomerative, Divisive & Dendrograms)',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q5(a)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q6(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q6(c)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q6(a)', notes: 'Hierarchical part' },
        { paper: 'Paper 6', questionNo: 'Q5(c)', notes: '(i) Agglomerative, (ii) Dendrogram' }
      ],
      syllabusTopics: ['Hierarchical Clustering', 'Agglomerative', 'Divisive', 'Dendrogram', 'Linkage'],
      definition: 'Hierarchical clustering constructs a multi-level nested hierarchy of clusters represented as a tree diagram called a dendrogram, eliminating the requirement to specify cluster count K in advance.',
      sections: [
        {
          title: '1. Methodological Paradigms: Agglomerative vs Divisive',
          content: [
            'Agglomerative (AGNES - Bottom-Up): Starts with every point as an individual single-element cluster. Successively merges the two closest clusters at each step until only one root cluster remains.',
            'Divisive (DIANA - Top-Down): Starts with all points contained within a single grand cluster. Successively splits clusters into smaller partitions until every point forms its own cluster.'
          ],
          table: {
            headers: ['Parameter', 'Agglomerative (AGNES)', 'Divisive (DIANA)'],
            rows: [
              { parameter: 'Approach Direction', col1: 'Bottom-up merging', col2: 'Top-down splitting' },
              { parameter: 'Initial State', col1: 'N clusters (each point separate)', col2: '1 single cluster (all points together)' },
              { parameter: 'Strength', col1: 'Excels at identifying small, tight clusters', col2: 'Excels at identifying broad, large clusters' }
            ]
          }
        },
        {
          title: '2. Cluster Linkage Criteria',
          table: {
            headers: ['Linkage Criterion', 'Mathematical Distance Definition', 'Behavioral Characteristic'],
            rows: [
              { parameter: 'Single Linkage (Min)', col1: 'min { d(x, y) : x ∈ A, y ∈ B }', col2: 'Nearest neighbours; can form long elongated chains (chaining effect).' },
              { parameter: 'Complete Linkage (Max)', col1: 'max { d(x, y) : x ∈ A, y ∈ B }', col2: 'Furthest neighbours; generates compact, tight spherical clusters.' },
              { parameter: 'Average Linkage', col1: '(1 / |A||B|) ∑∑ d(x, y)', col2: 'Average of all pairwise distances; balanced compromise.' },
              { parameter: 'Centroid Linkage', col1: 'd(m_A, m_B)', col2: 'Distance between cluster mean centroids; good for small clusters.' }
            ]
          }
        },
        {
          title: '3. Solved Step-by-Step Example (Data: 7, 10, 20, 28, 35)',
          content: [
            'Single Linkage Execution:',
            'Step 1: Smallest distance is between 7 and 10 (dist = 3) ==> Merge (7, 10).',
            'Step 2: Next smallest distance is between 28 and 35 (dist = 7) ==> Merge (28, 35).',
            'Step 3: Distance from 20 to (28, 35) is min(8, 15) = 8 ==> Merge (20, 28, 35).',
            'Step 4: Final merge between (7, 10) and (20, 28, 35) at min(10) = 10.',
            'Cutting dendrogram at distance 9 yields 2 clean clusters: {7, 10} and {20, 28, 35}.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-dendrogram',
          title: 'Hierarchical Clustering Dendrogram (Single vs Complete)',
          caption: 'Dendrogram tree hierarchy showing horizontal cluster merge lines across distances 3, 7, 8, 10 with a horizontal cutting line.',
          type: 'svg-interactive',
          svgType: 'dendrogram'
        }
      ],
      summary: [
        'Hierarchical clustering builds a tree-like hierarchy of clusters called a dendrogram.',
        'Agglomerative is bottom-up (iterative merging); Divisive is top-down (iterative splitting).',
        'Linkage types: Single (min distance, chaining), Complete (max distance, compact), Average.',
        'Cutting the dendrogram at chosen height yields the desired number of clusters.'
      ],
      keyPoints: [
        'Agglomerative (AGNES) vs Divisive (DIANA)',
        'Dendrogram interpretation and horizontal cut',
        'Single, Complete, and Average linkage criteria',
        'Chaining effect in single linkage'
      ]
    },
    {
      id: 'ml-u5-q6',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 6,
      title: 'Compare Hierarchical Clustering and K-Means Clustering',
      shortTitle: 'Hierarchical vs K-Means Comparison',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q5(b)', marks: 6 }
      ],
      syllabusTopics: ['Hierarchical vs K-Means', 'Complexity', 'Determinism', 'Cluster Geometry'],
      definition: 'A comprehensive comparative analysis contrasting tree-based hierarchical clustering against centroid-based partitioning K-Means across complexity, assumptions, and performance.',
      sections: [
        {
          title: '1. Comparative Analysis Matrix',
          table: {
            headers: ['Comparative Dimension', 'Hierarchical Clustering', 'K-Means Clustering'],
            rows: [
              { parameter: 'Structural Output', col1: 'Multi-level nested tree hierarchy (Dendrogram)', col2: 'Flat, single-level disjoint partitions' },
              { parameter: 'Cluster Count K', col1: 'Not required upfront; decided post-hoc by cutting tree', col2: 'K must be strictly specified prior to execution' },
              { parameter: 'Determinism', col1: 'Deterministic (identical dendrogram every run)', col2: 'Stochastic (results depend on random centroid seeds)' },
              { parameter: 'Computational Complexity', col1: 'High: O(N²) to O(N³) time and O(N²) memory', col2: 'Low: O(N·K·t) time and O(N) memory' },
              { parameter: 'Reversibility of Steps', col1: 'Irreversible (merges/splits cannot be undone)', col2: 'Reversible (points freely change clusters each pass)' },
              { parameter: 'Cluster Geometry', col1: 'Handles non-spherical shapes (via Single Linkage)', col2: 'Strictly restricted to spherical, equal-sized clusters' },
              { parameter: 'Data Types', col1: 'Any distance or dissimilarity matrix', col2: 'Numerical only (requires continuous arithmetic means)' }
            ]
          }
        }
      ],
      summary: [
        'Hierarchical builds a rich dendrogram without needing K, but scales poorly O(N²-N³).',
        'K-Means is extremely fast O(N·K·t) and scales to massive data, but requires K and assumes spherical clusters.',
        'Choose K-Means for large data; choose Hierarchical for small data requiring taxonomic insight.'
      ],
      keyPoints: [
        'Dendrogram hierarchy vs Flat partitions',
        'Pre-specifying K vs Post-hoc cutting',
        'Deterministic vs Stochastic behavior',
        'Computational complexity O(N³) vs O(N)'
      ]
    },
    {
      id: 'ml-u5-q7',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 7,
      title: 'Density-Based Clustering: Why is it Used? Explain DBSCAN (How a Cluster is Formed)',
      shortTitle: 'DBSCAN Algorithm, Core Points & Cluster Formation',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q5(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q5(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q5(c)', marks: 6 },
        { paper: 'Paper 1', questionNo: 'Q6(c)(ii)', marks: 4 },
        { paper: 'Paper 4', questionNo: 'Q6(a)', notes: 'Density-based part' }
      ],
      syllabusTopics: ['DBSCAN', 'Core Point', 'Border Point', 'Noise Point', 'Density Reachability'],
      definition: 'DBSCAN (Density-Based Spatial Clustering of Applications with Noise) groups contiguous high-density regions separated by low-density regions, discovering arbitrary shapes and explicitly isolating noise.',
      sections: [
        {
          title: '1. Why Density-Based Clustering is Indispensable',
          content: [
            '1. Arbitrary Cluster Shapes: Excels on concentric rings, interleaved crescent moons, and winding structures where distance-to-centroid algorithms (K-Means) completely fail.',
            '2. Automatic Cluster Count: No requirement to supply parameter K in advance.',
            '3. Native Noise and Outlier Handling: Does not force every point into a cluster; sparse isolated points are cleanly tagged as noise.',
            '4. Insensitive to Point Ordering: Produces consistent cluster structures regardless of data scan sequence.'
          ]
        },
        {
          title: '2. The Two Essential Parameters',
          content: [
            'ε (epsilon): The search radius neighborhood around any point p: N_ε(p) = {q ∈ D | dist(p, q) ≤ ε}.',
            'MinPts: The minimum number of points required within the ε-neighborhood to constitute a dense core region.'
          ]
        },
        {
          title: '3. Point Classifications',
          content: [
            'Core Point: Has at least MinPts within its ε-neighborhood: |N_ε(p)| ≥ MinPts (including itself).',
            'Border Point: Has fewer than MinPts within ε, but falls within the ε-neighborhood of a core point.',
            'Noise Point: Neither a core point nor a border point; isolated in a sparse region.'
          ]
        },
        {
          title: '4. How a Cluster is Formed (Expansion Mechanism)',
          content: [
            '1. Mark all points as unvisited. Select an arbitrary unvisited point p.',
            '2. Retrieve its ε-neighborhood N_ε(p).',
            '3. If |N_ε(p)| ≥ MinPts: p is a Core Point. Create a new cluster C and add p to C.',
            '4. Expand Cluster: For each point q in N_ε(p):',
            '   a. If q is unvisited, mark visited and inspect its neighborhood N_ε(q).',
            '   b. If q is also a Core Point, append its neighbours to the expansion search queue.',
            '   c. If q is not yet assigned to any cluster, add q to cluster C (border point).',
            '5. When queue empties, cluster C is fully sealed. Pick next unvisited point and repeat.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-dbscan-points',
          title: 'DBSCAN Core, Border, and Noise Points (MinPts = 4)',
          caption: 'Visualizing dashed ε-radii around Blue Core points (≥ 4 neighbours), Green Border point (< 4 neighbours but touching core), and Red Noise.',
          type: 'svg-interactive',
          svgType: 'dbscan-points'
        }
      ],
      summary: [
        'DBSCAN identifies clusters as contiguous dense regions separated by low-density areas.',
        'Requires two parameters: radius ε and threshold MinPts.',
        'Points are categorized as Core (≥ MinPts), Border (< MinPts near core), or Noise.',
        'Discovers arbitrary shapes and rejects noise, but struggles with clusters of varying densities.'
      ],
      keyPoints: [
        'Radius ε and MinPts parameters',
        'Core point condition |N_ε(p)| ≥ MinPts',
        'Directly density-reachable vs Density-connected',
        'Arbitrary shape discovery and noise isolation'
      ]
    },
    {
      id: 'ml-u5-q8',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 8,
      title: 'Density-Based Clustering: DBSCAN, OPTICS and DENCLUE',
      shortTitle: 'DBSCAN vs OPTICS vs DENCLUE In-Depth',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 6', questionNo: 'Q5(a)', marks: 6 }
      ],
      syllabusTopics: ['DBSCAN', 'OPTICS', 'DENCLUE', 'Reachability Plot', 'Kernel Density'],
      definition: 'A comprehensive technical comparison of the three major density-based clustering paradigms: region-growing DBSCAN, hierarchical reachability-ordering OPTICS, and kernel density attractor DENCLUE.',
      sections: [
        {
          title: '1. DBSCAN Overview & Limitations',
          content: [
            'Uses a single global ε and MinPts to grow clusters from core points.',
            'Critical Flaw: Cannot handle datasets where different clusters have varying densities. If ε is set for a dense cluster, sparse clusters are dropped as noise; if ε is set for a sparse cluster, dense clusters merge together.'
          ]
        },
        {
          title: '2. OPTICS (Ordering Points To Identify Clustering Structure)',
          content: [
            'Overcomes DBSCAN\'s varying density flaw.',
            'Does not produce rigid clusters directly. Instead, outputs an augmented ordering of points along with two distance values:',
            '1. Core Distance: The smallest radius ε\' ≤ ε making point p a core point.',
            '2. Reachability Distance of p from o: max{core-distance(o), dist(o, p)}.',
            'Reachability Plot: Points are plotted in OPTICS order against their reachability distance. Valleys in the plot represent dense clusters; peaks represent boundaries or noise.'
          ]
        },
        {
          title: '3. DENCLUE (DENsity-based CLUstEring)',
          content: [
            'Grounded in mathematical statistics and Kernel Density Estimation (KDE).',
            'Every data point exerts an influence function (e.g., Gaussian) that diminishes with distance: f(x, y) = exp(-d(x, y)² / 2σ²).',
            'Total Density: The sum of influence functions from all points across the feature space.',
            'Density Attractors: Local maxima of the overall density function discovered via gradient hill climbing.',
            'Clusters are formed by points that climb to the same density attractor exceeding noise threshold ξ.'
          ]
        },
        {
          title: '4. Summary Comparison Table',
          table: {
            headers: ['Technique', 'Core Underlying Principle', 'Parameters', 'Varying Density Handling'],
            rows: [
              { parameter: 'DBSCAN', col1: 'Core point region expansion via fixed radius', col2: 'ε (eps) and MinPts', col3: 'Poor (fails when cluster densities differ)' },
              { parameter: 'OPTICS', col1: 'Reachability distance ordering & reachability plot', col2: 'MinPts and max ε', col3: 'Excellent (valleys represent multi-density clusters)' },
              { parameter: 'DENCLUE', col1: 'Sum of Gaussian kernels & density attractor climbing', col2: 'σ (influence width) and ξ (noise cutoff)', col3: 'Good (handles complex non-linear shapes smoothly)' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-optics-reachability',
          title: 'OPTICS Reachability Plot (Valleys = Clusters)',
          caption: 'Reachability distance plot showing deep valleys corresponding to dense clusters A and C, a shallow valley for cluster B, and peaks for noise.',
          type: 'svg-interactive',
          svgType: 'optics-reachability'
        }
      ],
      summary: [
        'DBSCAN uses fixed ε and fails on variable densities.',
        'OPTICS orders points by reachability distance; valleys in reachability plot expose clusters of varying density.',
        'DENCLUE uses Gaussian kernel density estimation and climbs gradients to density attractors.'
      ],
      keyPoints: [
        'Fixed ε limitation of DBSCAN',
        'Core distance and Reachability distance in OPTICS',
        'Reachability plot valleys interpretation',
        'Gaussian kernel density attractors in DENCLUE'
      ]
    },
    {
      id: 'ml-u5-q9',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 9,
      title: 'Outlier Analysis: Importance, Advantages and Disadvantages',
      shortTitle: 'Outlier Analysis: Importance, Pros & Cons',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q5(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q5(c)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q5(b)', notes: 'First part' },
        { paper: 'Paper 5', questionNo: 'Q6(b)', notes: 'In relation to clustering' }
      ],
      syllabusTopics: ['Outlier Analysis', 'Anomaly Detection', 'Fraud Detection', 'Data Quality'],
      definition: 'Outlier analysis is the process of detecting and evaluating data objects that deviate drastically from typical patterns, indicating either data collection errors or rare, high-value real-world events.',
      sections: [
        {
          title: '1. What is an Outlier?',
          content: [
            'An outlier (anomaly) is an observation that appears inconsistent with the remaining observations in the dataset.',
            'Originates from three primary causes: (1) Data entry or measurement instrument error, (2) Random statistical noise, or (3) Genuine, rare underlying phenomena (e.g., fraudulent credit card transactions, cyber intrusions).'
          ]
        },
        {
          title: '2. Importance & Real-World Applications',
          content: [
            '1. Financial Fraud Detection: Identifying unusual card transactions, insider trading, and insurance claims.',
            '2. Cybersecurity & Intrusion Detection: Spotting abnormal network traffic spikes signaling DDoS attacks or data exfiltration.',
            '3. Industrial Predictive Maintenance: Detecting unusual sensor vibrations indicating impending turbine or engine failure.',
            '4. Healthcare & Medical Diagnostics: Spotting abnormal blood test readings or irregular ECG rhythms.',
            '5. Data Preprocessing for ML: Removing corrupted outliers that would distort regression slopes or pull K-Means centroids.'
          ]
        },
        {
          title: '3. Outlier Analysis with Respect to Clustering',
          content: [
            'Dual Interrelationship:',
            'A. Clustering as Outlier Detection: Points that fail to join any dense cluster (DBSCAN noise) or reside far from all centroids are identified as outliers.',
            'B. Outlier Impact on Clustering: Outliers distort mean centroids in K-Means; removing outliers first or utilizing robust methods (K-Medoids, DBSCAN) is essential.'
          ]
        },
        {
          title: '4. Advantages and Disadvantages Matrix',
          table: {
            headers: ['Advantages of Outlier Analysis', 'Disadvantages & Inherent Difficulties'],
            rows: [
              { parameter: 'Detection Value', col1: 'Uncovers critical, rare events (fraud, intrusions, diseases).', col2: 'Defining "normal" vs "abnormal" is highly subjective and context-dependent.' },
              { parameter: 'Data Quality', col1: 'Cleans corrupt data, significantly boosting downstream model accuracy.', col2: 'Differentiating between ambient noise and genuine rare events is extremely hard.' },
              { parameter: 'Supervision', col1: 'Unsupervised methods require zero manual labeling.', col2: 'Suffers from masking (outliers conceal each other) and swamping (normal points falsely flagged).' },
              { parameter: 'High Dimensions', col1: 'Reveals latent structural anomalies.', col2: 'Distance-based metrics degrade sharply in high dimensions (Curse of Dimensionality).' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-outlier-scatter',
          title: 'Scatter Plot with Clustered Data and Isolated Outliers',
          caption: 'Two dense clusters C1 and C2 alongside isolated anomaly points O1 and O2 lying far outside standard cluster boundaries.',
          type: 'svg-interactive',
          svgType: 'outlier-scatter'
        }
      ],
      summary: [
        'Outlier analysis detects points that deviate drastically from standard distributions.',
        'Critical for fraud detection, cybersecurity, predictive maintenance, and data cleansing.',
        'Intertwined with clustering: clustering helps detect outliers, but outliers distort clusters.',
        'Challenges include defining normal behavior and overcoming the curse of dimensionality.'
      ],
      keyPoints: [
        'Causes: measurement error vs rare event',
        'Fraud, intrusion, and medical diagnostics',
        'Clustering and outlier mutual interaction',
        'Masking and swamping challenges'
      ]
    },
    {
      id: 'ml-u5-q10',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 10,
      title: 'Local Outlier Factor (LOF): What is it and How is it Calculated?',
      shortTitle: 'Local Outlier Factor (LOF) Algorithm & Formula',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q5(b)', notes: 'Second part' },
        { paper: 'Paper 6', questionNo: 'Q6(a)', marks: 6 }
      ],
      syllabusTopics: ['Local Outlier Factor', 'Density-based Outlier', 'Reachability Distance', 'LRD'],
      definition: 'Local Outlier Factor (LOF) is an unsupervised density-based algorithm that measures the local anomaly of a point by comparing its local reachability density against the densities of its k-nearest neighbours.',
      sections: [
        {
          title: '1. Foundational Concept: Local vs Global Outliers',
          content: [
            'Global outlier detectors assume a single uniform density, failing when a dataset has multiple clusters of varying densities.',
            'LOF evaluates density locally: A point is flagged as an outlier only if its local density is substantially lower than the density of its immediate neighbours.'
          ]
        },
        {
          title: '2. Step-by-Step Calculation Protocol',
          content: [
            'Let k be the user-specified neighbour count.',
            'Step 1: k-distance(p) = Distance between point p and its k-th nearest neighbour.',
            'Step 2: k-neighborhood N_k(p) = Set of all points whose distance to p is ≤ k-distance(p).',
            'Step 3: Reachability Distance of p from neighbour o:',
            '   reach-dist_k(p, o) = max { k-distance(o), dist(p, o) }',
            'Step 4: Local Reachability Density (LRD) of p = Inverse of average reachability distance from neighbours:',
            '   LRD_k(p) = |N_k(p)| / ∑_{o ∈ N_k(p)} reach-dist_k(p, o)',
            'Step 5: Local Outlier Factor (LOF) = Average ratio of neighbours\' LRD to p\'s LRD:'
          ],
          formulas: [
            {
              name: 'Local Outlier Factor (LOF) Formula',
              latex: '\\text{LOF}_k(p) = \\frac{\\sum_{o \\in N_k(p)} \\frac{\\text{LRD}_k(o)}{\\text{LRD}_k(p)}}{|N_k(p)|}'
            }
          ]
        },
        {
          title: '3. Numerical Score Interpretation',
          table: {
            headers: ['LOF Value Range', 'Physical Meaning', 'Categorization'],
            rows: [
              { parameter: 'LOF ≈ 1.0', col1: 'Point has comparable density to its neighbours.', col2: 'Normal Inlier Point' },
              { parameter: 'LOF < 1.0', col1: 'Point lies in a denser region than its neighbours.', col2: 'Dense Core Inlier' },
              { parameter: 'LOF >> 1.0 (e.g. > 1.5)', col1: 'Point is in a significantly sparser region than its neighbours.', col2: 'Outlier (Anomaly)' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-lof-density',
          title: 'LOF Relative Local Density Comparison',
          caption: 'Point p in a sparse region whose neighbours reside in a dense cluster, causing LOF(p) >> 1.',
          type: 'svg-interactive',
          svgType: 'lof-density'
        }
      ],
      summary: [
        'LOF compares local density of an instance against densities of its k neighbours.',
        'Computes k-distance, reachability distance, Local Reachability Density (LRD), and LOF ratio.',
        'LOF ≈ 1 indicates normal point; LOF >> 1 indicates local outlier.',
        'Effective for multi-density datasets, but sensitive to parameter k.'
      ],
      keyPoints: [
        'Local density comparison principle',
        'k-distance and reachability distance',
        'Local Reachability Density (LRD) inversion',
        'LOF interpretation (≈ 1 inlier, >> 1 outlier)'
      ]
    },
    {
      id: 'ml-u5-q11',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 11,
      title: 'Isolation Factor Model (Isolation Forest)',
      shortTitle: 'Isolation Forest (iForest) Anomaly Detection',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q6(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q6(a)', marks: 6 }
      ],
      syllabusTopics: ['Isolation Forest', 'Isolation Tree', 'Path Length', 'Anomaly Score'],
      definition: 'Isolation Forest (iForest) is an unsupervised anomaly detection algorithm that isolates outliers by constructing random partitioning trees, exploiting the fact that anomalies are "few and different" and thus require fewer splits to isolate.',
      sections: [
        {
          title: '1. Foundational Premise of Isolation',
          content: [
            'Traditional anomaly detectors compute distance or density around points (computationally expensive O(N²)).',
            'Isolation Forest reverses the approach: Rather than modeling normal points, it explicitly isolates anomalies.',
            'Anomalies are rare and possess distinct attribute values. Consequently, random axis-aligned splits isolate anomalies very close to the tree root (short path length h(x)).',
            'Normal instances reside deep inside dense clusters, requiring numerous random cuts to isolate (long path length h(x)).'
          ]
        },
        {
          title: '2. Algorithmic Protocol',
          content: [
            '1. Construct an ensemble of t Isolation Trees (iTrees), each built from a random sub-sample of size ψ (typically ψ = 256).',
            '2. At each tree node: Select a random feature q, and pick a random split value p uniformly between min(q) and max(q).',
            '3. Recursively partition data until points are completely isolated or max tree height is reached.',
            '4. Measure path length h(x): The number of edges traversed from root to terminal leaf for point x.',
            '5. Compute average path length E[h(x)] across all t trees.'
          ]
        },
        {
          title: '3. Mathematical Anomaly Score',
          content: [
            'Path length is normalized using the average path length of an unsuccessful search in a Binary Search Tree (BST):',
            'c(n) = 2 · [ln(n - 1) + 0.5772156649] - 2(n - 1) / n'
          ],
          formulas: [
            {
              name: 'Isolation Anomaly Score Formula',
              latex: 's(x, n) = 2^{-\\frac{E[h(x)]}{c(n)}}'
            }
          ]
        },
        {
          title: '4. Score Interpretation',
          table: {
            headers: ['Score s(x, n)', 'Expected Path Length E[h(x)]', 'Classification'],
            rows: [
              { parameter: 's → 1.0 (s ≥ 0.6)', col1: 'E[h(x)] → 0 (very short path length)', col2: 'Definite Anomaly / Outlier' },
              { parameter: 's < 0.5', col1: 'E[h(x)] approaches c(n) (long path length)', col2: 'Normal Inlier Point' },
              { parameter: 's ≈ 0.5', col1: 'Uniform average path lengths across sample', col2: 'No distinct anomalies in sample' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-isolation-forest',
          title: 'Isolation Forest: Outlier vs Inlier Splitting',
          caption: 'Random partition lines isolating an extreme anomaly in just 1 split, while normal points require many dense cuts.',
          type: 'svg-interactive',
          svgType: 'isolation-forest'
        }
      ],
      summary: [
        'Isolation Forest isolates anomalies using recursive random feature splitting.',
        'Outliers are isolated quickly (short path length); normal points require many splits.',
        'Linear time complexity O(N), low memory footprint, scales to high-dimensional big data.',
        'Anomaly score s close to 1 indicates an anomaly; s < 0.5 indicates normal.'
      ],
      keyPoints: [
        '"Few and different" anomaly premise',
        'Recursive random feature splitting',
        'Path length h(x) metric',
        'Normalized anomaly score formula s(x, n)'
      ]
    },
    {
      id: 'ml-u5-q12',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 12,
      title: 'Spectral Clustering Algorithm',
      shortTitle: 'Spectral Clustering & Graph Laplacian',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q5(c)', marks: 6 }
      ],
      syllabusTopics: ['Spectral Clustering', 'Affinity Matrix', 'Graph Laplacian', 'Eigenvectors'],
      definition: 'Spectral clustering is a graph-theoretic clustering technique that uses the spectrum (eigenvalues and eigenvectors) of the graph Laplacian derived from a data similarity matrix to project data into a low-dimensional manifold before clustering via K-Means.',
      sections: [
        {
          title: '1. Foundational Graph Cut Formulation',
          content: [
            'Data points are treated as nodes V in an undirected similarity graph G = (V, E).',
            'Edges weights A_ij represent pairwise similarity (e.g., Gaussian affinity: A_ij = exp(-||xᵢ - x_j||² / 2σ²)).',
            'Clustering = Graph Partitioning: Cut the graph into K subgraphs such that edges between groups have minimal weight (Min-Cut / Normalized Cut) while edges within groups have maximal weight.'
          ]
        },
        {
          title: '2. Step-by-Step Spectral Algorithm',
          content: [
            '1. Construct Similarity Matrix A ∈ ℝⁿˣⁿ (via Gaussian RBF or k-NN graph).',
            '2. Compute Diagonal Degree Matrix D where D_ii = ∑_j A_ij.',
            '3. Form the Graph Laplacian Matrix L = D - A (or normalized L_sym = D^(-1/2) L D^(-1/2)).',
            '4. Compute the K eigenvectors corresponding to the K smallest eigenvalues of L.',
            '5. Form matrix U ∈ ℝⁿˣᴷ whose columns are these K eigenvectors. Each row of U is the new low-dimensional representation of point xᵢ.',
            '6. Apply standard K-Means clustering on the rows of U to obtain final cluster assignments.'
          ],
          formulas: [
            { name: 'Unnormalized Graph Laplacian', latex: 'L = D - A' },
            { name: 'Normalized Symmetric Laplacian', latex: 'L_{\\text{sym}} = D^{-1/2} L D^{-1/2} = I - D^{-1/2} A D^{-1/2}' }
          ]
        },
        {
          title: '3. Advantages & Limitations',
          table: {
            headers: ['Strengths of Spectral Clustering', 'Limitations of Spectral Clustering'],
            rows: [
              { parameter: 'Cluster Geometry', col1: 'Flawlessly identifies complex non-convex shapes (concentric circles, interlocking spirals).', col2: 'Requires choosing scaling parameter σ and cluster count K.' },
              { parameter: 'Input Format', col1: 'Only requires pairwise similarity matrix; coordinates not mandatory.', col2: 'Eigen-decomposition has O(N³) computational complexity; slow on big data.' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-spectral-cut',
          title: 'Similarity Graph and Spectral Cut',
          caption: 'Graph nodes with dense intra-cluster edges partitioned by a dashed spectral cut slicing through weak inter-cluster connections.',
          type: 'svg-interactive',
          svgType: 'spectral-cut'
        }
      ],
      summary: [
        'Spectral clustering frames clustering as a normalized graph cut problem.',
        'Uses eigenvectors of the Graph Laplacian L = D - A to embed data into low-dimensional space.',
        'Applies K-Means in the spectral embedding space to discover complex non-convex manifolds.',
        'Superior for complex shapes, but computationally expensive O(N³) for large datasets.'
      ],
      keyPoints: [
        'Graph cut optimization objective',
        'Affinity matrix A and Degree matrix D',
        'Graph Laplacian L = D - A',
        'Eigenvector embedding and post K-Means'
      ]
    },
    {
      id: 'ml-u5-q13',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 13,
      title: 'Graph-Based Clustering',
      shortTitle: 'Graph-Based Clustering & Minimum Spanning Trees',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q6(c)(i)', marks: 4 },
        { paper: 'Paper 6', questionNo: 'Q6(b)', marks: 6 }
      ],
      syllabusTopics: ['Graph-Based Clustering', 'Minimum Spanning Tree', 'Connected Components'],
      definition: 'Graph-based clustering models data as a weighted graph of nodes (points) and edges (similarity/distance), partitioning the graph into disconnected components by severing long or low-similarity edges.',
      sections: [
        {
          title: '1. Graph Construction Framework',
          content: [
            '1. ε-Neighborhood Graph: Connect nodes whose distance is less than threshold ε.',
            '2. k-Nearest Neighbour (k-NN) Graph: Connect each point to its k closest neighbours.',
            '3. Fully Connected Graph: Connect all pairs with edges weighted by Gaussian similarity A_ij = exp(-d_ij² / 2σ²).'
          ]
        },
        {
          title: '2. Major Graph Clustering Techniques',
          content: [
            '1. Threshold Inconsistency (Connected Components): Remove all edges exceeding a distance threshold; remaining connected subgraphs form clusters.',
            '2. Minimum Spanning Tree (MST) Clustering: Construct the MST connecting all points with minimum total edge weight. Remove the K - 1 longest edges to yield K distinct clusters.',
            '3. Spectral Graph Partitioning: Slicing the graph using Laplacian eigenvectors (see Q12).',
            '4. Community Detection: Modularity optimization in social and interaction networks.'
          ]
        }
      ],
      summary: [
        'Graph-based clustering treats data points as nodes and similarities as weighted edges.',
        'Clusters are formed by pruning weak, long edges to leave strongly connected subgraphs.',
        'Key methods: Connected components, MST edge deletion, and Spectral graph cuts.',
        'Excels at arbitrary shapes and network data, but graph construction is costly.'
      ],
      keyPoints: [
        'Graph representation G = (V, E)',
        'k-NN and ε-neighbourhood graph models',
        'MST edge deletion for K clusters',
        'Natural fit for social and relational networks'
      ]
    },
    {
      id: 'ml-u5-q14',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 14,
      title: 'Differentiate between K-Means and Spectral Clustering',
      shortTitle: 'K-Means vs Spectral Clustering Comparison',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q6(c)', marks: 6 }
      ],
      syllabusTopics: ['K-Means vs Spectral', 'Non-Convex Clusters', 'Computational Cost'],
      definition: 'A direct technical comparison highlighting the divide between centroid-distance partitioning in original feature space (K-Means) and graph Laplacian spectral projection (Spectral Clustering).',
      sections: [
        {
          title: '1. Comparison Matrix',
          table: {
            headers: ['Comparative Criterion', 'K-Means Clustering', 'Spectral Clustering'],
            rows: [
              { parameter: 'Underlying Concept', col1: 'Centroid-based distance minimization (compactness)', col2: 'Graph connectivity and spectral graph partitioning' },
              { parameter: 'Input Requirement', col1: 'Continuous numerical coordinate vectors', col2: 'Pairwise affinity / similarity matrix (coordinates optional)' },
              { parameter: 'Cluster Geometry', col1: 'Strictly convex, spherical, circular clusters', col2: 'Arbitrary, complex, non-convex shapes (rings, spirals)' },
              { parameter: 'Mathematical Space', col1: 'Operates directly in original input feature space ℝⁿ', col2: 'Transforms data into low-dimensional Laplacian eigenspace' },
              { parameter: 'Computational Complexity', col1: 'Linear in samples: O(N·K·t); extremely fast', col2: 'Cubic in samples: O(N³) due to eigen-decomposition' },
              { parameter: 'Scalability', col1: 'Scales to millions of instances', col2: 'Restricted to small-to-moderate datasets' }
            ]
          }
        }
      ],
      summary: [
        'K-Means operates on original coordinates, is fast O(N), but only finds spherical clusters.',
        'Spectral clustering operates on graph laplacians, finds arbitrary non-convex shapes, but is slow O(N³).',
        'Spectral clustering actually uses K-Means as its final sub-step on the eigenvector space.'
      ],
      keyPoints: [
        'Centroid distance vs Graph connectivity',
        'Spherical vs Arbitrary manifold geometry',
        'Linear O(N) vs Cubic O(N³) scaling',
        'K-Means role in the final spectral step'
      ]
    },
    {
      id: 'ml-u5-q15',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 15,
      title: 'Elbow Method for Finding the Optimal Number of Clusters (K-Means)',
      shortTitle: 'The Elbow Method & WCSS Curve Analysis',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q5(c)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q6(c)(i)', marks: 4 }
      ],
      syllabusTopics: ['Elbow Method', 'Optimal K', 'WCSS', 'Distortion'],
      definition: 'The Elbow Method is a heuristic visual diagnostic used to determine the optimal cluster count K in K-Means by plotting the Within-Cluster Sum of Squares (WCSS / SSE) against K and locating the "elbow" bend where marginal reduction in error diminishes sharply.',
      sections: [
        {
          title: '1. Theoretical Foundation',
          content: [
            'As K increases from 1 to N, each cluster contains fewer points situated closer to their centroids. Consequently, WCSS (SSE) monotonically decreases.',
            'When K is less than the true cluster count: Adding a cluster significantly reduces SSE (steep downward drop).',
            'When K exceeds the true cluster count: Additional clusters merely partition existing natural clusters (shallow, slow decline).',
            'The inflection point where the curve abruptly bends from steep to shallow resembles an elbow, identifying the optimal K.'
          ],
          formulas: [
            {
              name: 'Sum of Squared Errors (SSE)',
              latex: '\\text{SSE} = \\sum_{k=1}^{K}\\sum_{x_i \\in C_k} \\|x_i - m_k\\|^2'
            }
          ]
        },
        {
          title: '2. Step-by-Step Procedure',
          content: [
            '1. Run K-Means for a range of K values (e.g., K = 1, 2, ..., 10).',
            '2. Compute and record the total SSE (distortion) for each run.',
            '3. Plot SSE on the Y-axis against K on the X-axis.',
            '4. Identify the elbow point where the slope flattens out.',
            '5. Limitation: If the curve is smooth without a sharp angle, the elbow is ambiguous. In such cases, cross-validate with the Silhouette score.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-elbow-method',
          title: 'The Elbow Method: SSE vs Number of Clusters K',
          caption: 'Line chart of SSE vs K showing a steep decline from K=1 to K=3 followed by a flat plateau, highlighting the optimal elbow at K=3.',
          type: 'svg-interactive',
          svgType: 'elbow-method'
        }
      ],
      summary: [
        'The Elbow Method plots SSE (within-cluster variance) against candidate K values.',
        'SSE drops rapidly until the true number of clusters, then levels off.',
        'The distinct bend (elbow) indicates the optimal balance between compactness and model complexity.',
        'Should be corroborated with Silhouette analysis when the curve lacks a sharp bend.'
      ],
      keyPoints: [
        'Monotonic SSE decrease with K',
        'Marginal gain reduction principle',
        'Elbow inflection point identification',
        'Ambiguity limitation on smooth curves'
      ]
    },
    {
      id: 'ml-u5-q16',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 16,
      title: 'How to Choose the Number of Clusters in K-Medoids',
      shortTitle: 'Choosing Optimal K in K-Medoids (PAM)',
      marks: 4,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q6(a)', marks: 4 }
      ],
      syllabusTopics: ['K-Medoids K Selection', 'Medoid Cost', 'Silhouette Method'],
      definition: 'Techniques for determining the optimal number of clusters K in K-Medoids (PAM) based on total medoid dissimilarity cost curves, silhouette width maximization, and domain constraints.',
      sections: [
        {
          title: '1. Primary Selection Methodologies',
          content: [
            '1. Elbow Method on Total Medoid Cost: Run PAM across candidate K values; compute total absolute dissimilarity: Cost = ∑∑ d(xᵢ, medoid_k). Plot Cost vs K and locate the elbow point.',
            '2. Average Silhouette Width Method: For each candidate K, compute the mean silhouette coefficient across all points. Select K that maximizes the global average silhouette score (closest to 1.0).',
            '3. Davies-Bouldin Index: Ratio of within-cluster scatter to separation between medoids; choose K that minimizes this index.',
            '4. Domain & Business Constraints: Align K with practical operational needs (e.g., marketing budget allocating campaigns to exactly 4 consumer segments).'
          ]
        }
      ],
      summary: [
        'Choose K in K-Medoids using the Elbow method on total medoid cost.',
        'Combine with Silhouette coefficient maximization (highest average s).',
        'Cross-check using Davies-Bouldin index and real-world domain requirements.'
      ],
      keyPoints: [
        'Total medoid dissimilarity cost curve',
        'Silhouette width maximization',
        'Davies-Bouldin minimization',
        'Domain operational requirements'
      ]
    },
    {
      id: 'ml-u5-q17',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 17,
      title: 'Evaluation Metrics and Score for Clustering',
      shortTitle: 'Clustering Evaluation Metrics Suite (Intrinsic & Extrinsic)',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q6(b)(iii)', marks: 6 }
      ],
      syllabusTopics: ['Clustering Metrics', 'Silhouette Score', 'Davies-Bouldin', 'Rand Index', 'ARI'],
      definition: 'Because clustering is unsupervised and operates without ground-truth labels, evaluation relies on intrinsic metrics assessing cluster geometry and extrinsic metrics benchmarking against reference labels.',
      sections: [
        {
          title: '1. Intrinsic Metrics (No Ground Truth Required)',
          content: [
            '1. Silhouette Coefficient s(i): For point i, let a(i) = average distance to own cluster, b(i) = minimum average distance to another cluster. s(i) = (b - a) / max(a, b). Ranges from -1 to +1 (near +1 = excellent; near 0 = boundary; near -1 = misclustered).',
            '2. Davies-Bouldin Index (DB): Computes similarity between each cluster and its most similar rival based on scatter vs distance. Lower is better.',
            '3. Calinski-Harabasz Index (Variance Ratio Criterion): Ratio of between-cluster dispersion to within-cluster dispersion. Higher is better.'
          ],
          formulas: [
            { name: 'Silhouette Coefficient', latex: 's(i) = \\frac{b(i) - a(i)}{\\max\\big(a(i), b(i)\\big)}' }
          ]
        },
        {
          title: '2. Extrinsic Metrics (Ground Truth Available for Benchmark)',
          table: {
            headers: ['Metric Name', 'Mathematical Concept', 'Best Score'],
            rows: [
              { parameter: 'Homogeneity', col1: 'Each cluster contains only instances from a single ground-truth class: 1 - H(C|K)/H(C)', col2: '1.0' },
              { parameter: 'Completeness', col1: 'All instances of a given class are grouped into the same cluster: 1 - H(K|C)/H(K)', col2: '1.0' },
              { parameter: 'Rand Index (RI)', col1: 'Percentage of point pairs correctly grouped together or apart: (a + b) / (n choose 2)', col2: '1.0' },
              { parameter: 'Adjusted Rand Index (ARI)', col1: 'Rand Index adjusted for chance agreement; ranges from -1 to +1', col2: '1.0' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-silhouette-concept',
          title: 'Silhouette Metric Geometry: a vs b',
          caption: 'Point i showing intra-cluster average distance a (cohesion) versus shortest inter-cluster average distance b (separation).',
          type: 'svg-interactive',
          svgType: 'silhouette-concept'
        }
      ],
      summary: [
        'Intrinsic metrics judge cluster geometry without labels: Silhouette (near 1), Davies-Bouldin (low), Calinski-Harabasz (high).',
        'Extrinsic metrics evaluate alignment with true labels: Homogeneity, Completeness, Rand Index, Adjusted Rand Index (ARI).',
        'Silhouette coefficient is the most versatile standard metric.'
      ],
      keyPoints: [
        'Silhouette distance formulation (b - a) / max(a, b)',
        'Davies-Bouldin and Calinski-Harabasz indices',
        'Homogeneity vs Completeness entropy definitions',
        'Adjusted Rand Index chance correction'
      ]
    },
    {
      id: 'ml-u5-q18',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 18,
      title: 'Intrinsic and Extrinsic Methods (Intrinsic vs Extrinsic)',
      shortTitle: 'Intrinsic vs Extrinsic Evaluation in Machine Learning',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q6(a)', notes: 'Compare intrinsic vs extrinsic motivation / methods' },
        { paper: 'Paper 6', questionNo: 'Q6(c)(ii)', marks: 4 }
      ],
      syllabusTopics: ['Intrinsic Evaluation', 'Extrinsic Evaluation', 'Ground Truth', 'Validation'],
      definition: 'Intrinsic methods evaluate clustering quality internally through geometric cohesion and separation without reference labels; Extrinsic methods evaluate clustering externally by measuring agreement against known ground-truth benchmark classifications.',
      sections: [
        {
          title: '1. Machine Learning Evaluation Meaning (Core Syllabus Focus)',
          table: {
            headers: ['Comparative Dimension', 'Intrinsic Evaluation Methods', 'Extrinsic Evaluation Methods'],
            rows: [
              { parameter: 'Ground Truth Labels', col1: 'Completely unneeded (evaluates unlabelled data)', col2: 'Strictly required (needs prior class labels)' },
              { parameter: 'Evaluation Basis', col1: 'Geometric cluster compactness (cohesion) and separation', col2: 'Mathematical agreement between clusters and true classes' },
              { parameter: 'Primary Metrics', col1: 'Silhouette Coefficient, Davies-Bouldin, Calinski-Harabasz, WCSS', col2: 'Homogeneity, Completeness, V-Measure, Rand Index, ARI' },
              { parameter: 'Real-World Application', col1: 'Standard operational clustering on unlabelled real data', col2: 'Benchmarking and testing new clustering algorithms on research datasets' }
            ]
          }
        },
        {
          title: '2. Educational Addendum: Intrinsic vs Extrinsic Motivation',
          content: [
            'Note: Academic question papers occasionally reference the psychological distinction cited in textbooks:',
            'Intrinsic Motivation: Undertaking an activity for its own inherent enjoyment and personal satisfaction (e.g., learning machine learning out of intellectual curiosity).',
            'Extrinsic Motivation: Undertaking an activity to earn an external reward or avoid punishment (e.g., studying to secure an exam grade or corporate promotion).'
          ]
        }
      ],
      summary: [
        'In Machine Learning: Intrinsic methods evaluate cluster geometry without labels (Silhouette, DB); Extrinsic methods evaluate agreement with known ground truth (Rand, ARI).',
        'In Motivation psychology: Intrinsic comes from internal satisfaction; Extrinsic is driven by external rewards.',
        'Both interpretations should be stated in examination answers to secure full marks.'
      ],
      keyPoints: [
        'ML definition: with labels vs without labels',
        'Cohesion/separation vs Class agreement',
        'Metric classification into Intrinsic vs Extrinsic',
        'Dual coverage of ML and motivation perspectives'
      ]
    },
    {
      id: 'ml-u5-q19',
      unitId: 'unit-5',
      subjectId: 'machine-learning',
      qNumber: 19,
      title: 'Micro-Average Precision, Recall and F-Score (with Example)',
      shortTitle: 'Micro-Average Precision, Recall & F-Score Formulation',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q6(c)', marks: 6 }
      ],
      syllabusTopics: ['Micro-Average', 'Macro-Average', 'Multiclass Evaluation'],
      definition: 'Micro-averaging aggregates individual true positives, false positives, and false negatives globally across all classes to compute a single pooled metric, giving equal weight to every individual sample.',
      sections: [
        {
          title: '1. Mathematical Formulations',
          content: [
            'In multiclass problems with C classes:',
            'Micro-Precision = (∑ TP_c) / (∑ TP_c + ∑ FP_c)',
            'Micro-Recall = (∑ TP_c) / (∑ TP_c + ∑ FN_c)',
            'In single-label multiclass classification, every mistake is simultaneously a False Positive for the predicted class and a False Negative for the true class. Hence ∑ FP_c = ∑ FN_c.',
            'Consequently: Micro-Precision = Micro-Recall = Micro-F1 = Overall Accuracy!'
          ],
          formulas: [
            { name: 'Micro Precision', latex: '\\text{Micro-Precision} = \\frac{\\sum_{c=1}^{C} TP_c}{\\sum_{c=1}^{C} TP_c + \\sum_{c=1}^{C} FP_c}' },
            { name: 'Micro Recall', latex: '\\text{Micro-Recall} = \\frac{\\sum_{c=1}^{C} TP_c}{\\sum_{c=1}^{C} TP_c + \\sum_{c=1}^{C} FN_c}' }
          ]
        },
        {
          title: '2. Comparative Difference: Micro vs Macro',
          table: {
            headers: ['Comparative Aspect', 'Micro-Average', 'Macro-Average'],
            rows: [
              { parameter: 'Weighting Level', col1: 'Sample-weighted (each sample has equal influence)', col2: 'Class-weighted (each class has equal influence)' },
              { parameter: 'Impact of Majority Class', col1: 'Dominated by large majority classes', col2: 'Equalized across small minority and large majority classes' },
              { parameter: 'Best Practical Use', col1: 'When overall per-instance classification accuracy is paramount', col2: 'When performance on rare minority classes is critical' }
            ]
          }
        }
      ],
      summary: [
        'Micro-average pools TP, FP, and FN across all classes before computing metrics.',
        'Every sample holds equal weight; heavily influenced by dominant majority classes.',
        'For single-label multiclass tasks, Micro-Precision = Micro-Recall = Micro-F1 = Accuracy.'
      ],
      keyPoints: [
        'Global pooling of TP, FP, FN',
        'Equivalence of Micro-P, Micro-R, and Accuracy',
        'Sample weighting vs Class weighting',
        'Contrast with Macro-average sensitivity'
      ]
    }
  ]
};
