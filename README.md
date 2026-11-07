# StudyVault — Personal Academic Study & Exam Preparation Web App

**StudyVault** is a modern, frontend-only academic study application engineered for university examination preparation. It transforms academic syllabus topics, university question papers, LaTeX source files, and lecture notes into structured, exam-oriented study material with interactive technical diagrams, step-by-step numerical solvers, KaTeX mathematical formulas, and progress tracking.

---

## 🌟 Key Features

### 1. Structured University Exam Question Bank
- **126 Exam-Oriented Questions across 8 Complete Units**:
  - **Machine Learning (CS801)**:
    - Unit III: Supervised Learning — Regression (19 Questions)
    - Unit IV: Supervised Learning — Classification (22 Questions)
    - Unit V: Unsupervised Learning & Clustering (19 Questions)
    - Unit VI: Introduction to Neural Networks (12 Questions)
  - **Blockchain Technology (CS802)**:
    - Unit 3: Platforms and Consensus (14 Questions)
    - Unit 4: Cryptocurrency, Bitcoin, and Tokens (14 Questions)
    - Unit 5: Ethereum Platform using Solidity (14 Questions)
    - Unit 6: Blockchain Case Studies & Real-World Deployments (12 Questions)
- **Exam-Oriented Answer Format**:
  - Marks allocations ([2M], [4M], [6M], [8-10M]).
  - Definitions and core concepts.
  - Step-by-step explanations, comparison tables, and code snippets.
  - 4–5 line fast exam revision summaries.
  - High-yield keywords and key points.
- **University Paper Frequency Tracking**:
  - Cross-references appearances across 6 previous years' question papers (e.g., *"Paper 1 Q1(a) | Paper 4 Q2(a)"*).
  - Categorized by importance: *Frequently Asked (FAQ)*, *Important*, *Moderately Asked*, *Rarely Asked*, and *Conceptual*.

---

### 2. Interactive Step-by-Step Numerical Solver 📐
- **Click-to-Advance Solving**:
  - Step through complex calculations one step at a time with `Next Step →` and `← Previous Step` controls.
  - Test yourself on paper before revealing the next intermediate step.
  - Interactive stepper pills to jump directly to any calculation stage.
  - Toggle between **Step-by-Step Mode** and **Show All Steps**.
- **Pedagogical Step Structure**:
  - **Concept & Approach**: Plain-English explanation of why this step is performed.
  - **Formula Applied**: Exact mathematical formula rendered via KaTeX.
  - **Values Substituted**: Variables replaced with actual problem inputs.
  - **Working Calculation & Data Tables**: Tabulated coordinate calculations, distances, and normal equation sums.
  - **Step Result**: Highlighted intermediate result with units.
  - **⚠️ University Exam Advice & Common Pitfalls**: Alerts warning against common calculation traps.
  - **Boxed Final Exam Answer**: Final answer highlighted and boxed as required in university examination answer sheets.
- **Supported Solved Numericals**:
  - *RAM Capacity vs Cost Prediction* (Least Squares Normal Equations)
  - *Company Monthly Expenditure Forecast* (Linear Extrapolation)
  - *Linear Regression Line of Best Fit Derivation*
  - *K-Nearest Neighbors (KNN) Pass/Fail Classification* (Euclidean Distance & Majority Voting)
  - *4-Class Confusion Matrix & Macro Metrics* (Precision, Recall, F1, Macro-Averaging)
  - *CNN Output Spatial Dimensions & Padding Schemes* (Valid, Same, Full Padding & Strides)

---

### 3. Visual Learning & Interactive Technical Diagrams
Over 30 responsive, labeled SVG technical diagrams rendered inline beside concepts:
- **Neural Networks & Deep Learning**:
  - Activation Function Curves (Sigmoid, Tanh, ReLU)
  - Artificial Neuron / Perceptron Architecture
  - Multilayer Perceptron (MLP) Forward & Backward Flow
  - Backpropagation Delta Error Flow ($\delta_k \to \delta_j$)
  - Radial Basis Function (RBF) Network Architecture
  - Functional Link ANN (FLANN) Expansion
  - Recurrent Neural Network (RNN) Folded & Time-Unfolded Sequence
  - Convolutional Neural Network (CNN) End-to-End Pipeline
  - $2 \times 2$ Max-Pooling Matrix Reduction
  - CNN Zero-Padding ($P=1$) Geometry
- **Supervised & Unsupervised Machine Learning**:
  - Linear Regression Best-Fit Line with Residual Errors
  - Underfitting vs Good Fit vs Overfitting Comparison
  - Bias-Variance Trade-off Curve
  - L1 Lasso Diamond vs L2 Ridge Circle Regularization Geometry
  - Gradient Descent Convex Trajectory
  - Support Vector Machine (SVM) Maximum-Margin Hyperplane
  - SVR $\pm\varepsilon$-Insensitive Tube
  - AdaBoost Sequential Re-weighting Pipeline
  - K-Means 9-Point Iterative Cluster Convergence
  - Hierarchical Clustering Dendrogram
  - DBSCAN Core, Border, and Noise Points
  - Elbow Method Curve (SSE vs $K$)
  - Silhouette Metric Geometry
- **Blockchain Technology**:
  - Bitcoin vs Ethereum Architecture comparison
  - Hyperledger Fabric Permissioned Architecture
  - Proof of Work (PoW) Nonce Mining Cycle
  - Proof of Stake (PoS) Validator Staking
  - Byzantine Fault Tolerance (PBFT) Consensus Rounds
  - UTXO Transaction Model vs Account-Based Model
  - Merkle Tree Hash Verification
  - HD Wallet Hierarchical Key Derivation
  - Solidity Smart Contract Execution Lifecycle
  - Gas & EVM Execution Architecture
  - Decentralized Supply Chain Provenance Tracking
  - Real Estate Land Registry Workflow

---

### 4. Mathematical Formula Engine
- Fully rendered with KaTeX for both inline formulas and full display equation blocks.
- Covers normal equations, gradient descent, SVM optimization, loss functions, cluster distance metrics, and CNN dimensional formulas.

---

### 5. Exam-Eve Fast Revision Mode
- Rapid-access summary dashboard designed for the night before exams.
- High-yield definitions glossary.
- Core mathematical formulas reference sheet.
- Direct-access list of all interactive solved numericals.
- Key comparison tables.
- Question Paper Index mapping table cross-referencing which exam paper asked which question.

---

### 6. Local Progress Persistence
- Mark questions as completed (`Completed` tracking).
- Bookmark high-priority questions for quick revision.
- Save personal study notes for any question.
- Real computed study statistics saved locally in browser `localStorage`.
- Reset progress option with confirmation safeguard.

---

### 7. Instant Global Search (`Ctrl + K`)
- Fast, full-text fuzzy search across all subjects, units, question titles, definitions, and syllabus topics.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Math Rendering**: [KaTeX](https://katex.org/) (`rehype-katex` / custom KaTeX math renderer)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Storage**: Browser `localStorage` (No external database required)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/18sahhhilll/StudyVault.git

# Navigate to project folder
cd StudyVault

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser at `http://localhost:5173/` to view the application.

### Building for Production

```bash
# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
StudyVault/
├── src/
│   ├── components/
│   │   ├── common/           # ImportanceBadge, MarksBadge, SearchModal
│   │   ├── dashboard/        # Subject and unit dashboard
│   │   ├── diagrams/         # Interactive SVG diagrams (ML, Blockchain, KaTeX renderer)
│   │   ├── layout/           # Navigation and app chrome
│   │   ├── numericals/       # StepByStepSolver interactive component
│   │   ├── questions/        # UnitReadingView, Question navigation, ImportantQuestionsView
│   │   ├── revision/         # RevisionView (Fast revision mode)
│   │   └── subjects/         # SubjectDetailView, SubjectsView
│   ├── data/
│   │   ├── subjects/
│   │   │   ├── machine-learning/   # Units 3, 4, 5, 6 questions & notes
│   │   │   └── blockchain/         # Units 3, 4, 5, 6 questions & notes
│   │   └── index.ts
│   ├── types/                # TypeScript interfaces (Question, Unit, Subject, NumericalSolution)
│   ├── App.tsx               # Main application controller
│   └── main.tsx              # Application entrypoint
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

This repository is maintained for personal academic study and university examination preparation.
