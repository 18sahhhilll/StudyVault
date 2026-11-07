# StudyVault — Personal Academic Study & Exam Preparation Web App

**StudyVault** is a modern, frontend-only academic study application built for university examination preparation. It transforms academic syllabus topics, university question papers, and LaTeX source files into structured, exam-oriented study material with interactive diagrams, mathematical formulas, and progress tracking.

---

## 🌟 Key Features

1. **Structured University Exam Question Bank**:
   - Organized across **Unit III (Regression)**, **Unit IV (Classification)**, and **Unit V (Unsupervised Learning)**.
   - All 60 university-level questions with marks allocation ([2M], [4M], [6M], [8-10M]), definitions, structured explanations, comparison tables, and worked numericals.
   - Exact university paper frequency tracking ("Asked in: Paper 1 Q1(a) | Paper 4 Q2(a)...") mapping across 6 previous-year question papers.

2. **Visual Learning & Interactive Technical Diagrams**:
   - Responsive, dark-mode-ready SVG technical diagrams:
     - Linear Regression Best-Fit Line with Residual Errors ($e_i = y_i - \hat{y}_i$)
     - Underfitting vs Good Fit vs Overfitting visual comparison
     - Bias-Variance Trade-off curve ($E = \text{Bias}^2 + \text{Variance} + \sigma^2$)
     - L1 Lasso Diamond constraint vs L2 Ridge Circle constraint geometry
     - Gradient Descent parabolic convex descent trajectory
     - KNN Decision boundaries and $K=3$ neighbourhood radius
     - SVM Maximum-Margin Hyperplane with Support Vectors ($2 / \|w\|$)
     - SVR $\pm\varepsilon$-Insensitive Tube
     - AdaBoost sequential error re-weighting pipeline
     - Confusion Matrix 2x2 contingency layout with Type I and Type II errors
     - Precision-Recall inverse trade-off curve
     - K-Means 9-point coordinate scatter with final cluster convergence
     - Dendrogram tree with single and complete linkage cuts
     - DBSCAN Core, Border, and Noise points diagram
     - OPTICS Reachability distance plot (valleys = clusters)
     - Isolation Forest random partition outlier isolation
     - The Elbow Method (SSE vs $K$) with inflection point
     - Silhouette metric ($a$ vs $b$) distance geometry
   - Interactive zoom and expandable view modal.

3. **Formula Engine & Mathematical Rigor**:
   - Equations rendered via KaTeX (Least Squares Normal Equations, Gradient Descent updates, MAE, MSE, RMSE, $R^2$, SVM primal/dual, LRD/LOF, Isolation scores).

4. **Exam-Eve Revision Mode**:
   - Unit-wise rapid revision sheets.
   - High-yield definitions dictionary.
   - Core mathematical formulas reference sheet.
   - Key comparison tables.
   - Question Paper Index mapping table cross-referencing which exam paper asked which question.

5. **Local Progress Persistence**:
   - Mark questions as completed.
   - Bookmark questions for focused revision.
   - Save personal study notes for any question.
   - Real calculated progress percentages (no fake stats).
   - Saved locally in browser `localStorage`.
   - Reset progress option with confirmation modal.

6. **Instant Global Search**:
   - Keyboard shortcut: `Ctrl + K`.
   - Real-time search across all subjects, units, question titles, definitions, and syllabus keywords.

---

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS with custom academic palette & dark mode
- **Math Rendering**: KaTeX
- **Icons**: Lucide React
- **Persistence**: Browser `localStorage` (100% offline-ready, no backend or database required)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (or pnpm/yarn)

### Installation & Development
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser (typically http://localhost:5173)
```

### Production Build
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Architecture

```text
Notes/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── types/
│   │   └── index.ts                 # Type definitions for Subjects, Units, Questions, Progress
│   ├── data/
│   │   ├── index.ts                 # Global data registry and fast search engine
│   │   └── subjects/
│   │       └── machine-learning/
│   │           ├── metadata.ts      # Subject syllabus overview & metadata
│   │           ├── unit-3.ts        # Unit III: Supervised Learning — Regression (19 Questions)
│   │           ├── unit-4.ts        # Unit IV: Supervised Learning — Classification (22 Questions)
│   │           ├── unit-5.ts        # Unit V: Unsupervised Learning (19 Questions)
│   │           └── index.ts         # Machine Learning Subject aggregation
│   ├── hooks/
│   │   ├── useStudyProgress.ts      # LocalStorage progress tracking & real statistics
│   │   └── useTheme.ts              # Light / Dark mode switcher
│   ├── components/
│   │   ├── layout/
│   │   │   └── AppLayout.tsx        # Academic sidebar layout, mobile drawer, search trigger
│   │   ├── dashboard/
│   │   │   └── DashboardView.tsx    # Calculated stats, continue studying, FAQ quick list
│   │   ├── subjects/
│   │   │   ├── SubjectsView.tsx     # Semester & subject cards catalog
│   │   │   └── SubjectDetailView.tsx# Unit syllabus navigation & subject FAQs
│   │   ├── questions/
│   │   │   ├── UnitReadingView.tsx  # Digital textbook Q&A reader with navigator & personal notes
│   │   │   └── ImportantQuestionsView.tsx # Multi-parameter question filter & bank
│   │   ├── revision/
│   │   │   └── RevisionView.tsx     # Quick cramming sheets, formulas, paper index
│   │   ├── diagrams/
│   │   │   ├── MathRenderer.tsx     # KaTeX math formula renderer
│   │   │   └── TechnicalDiagram.tsx # SVG technical diagram visual components
│   │   └── common/
│   │       ├── ImportanceBadge.tsx  # Priority indicator badge (FAQ, Important, etc.)
│   │       ├── MarksBadge.tsx       # Marks badge ([4M], [6M])
│   │       └── SearchModal.tsx      # Ctrl+K global search modal
│   ├── App.tsx                      # Main application state and routing
│   ├── main.tsx                     # React root mount
│   └── index.css                    # Tailwind CSS & academic typography
```

---

## ➕ Adding Future Subjects

The codebase is built on an extensible data architecture. To add a new subject:

1. Create a new folder under `src/data/subjects/<new-subject>/`
2. Create `unit-1.ts`, `unit-2.ts`, etc. implementing the `Unit` interface.
3. Export the subject from `src/data/subjects/<new-subject>/index.ts`
4. Register the subject in `allSubjects` array in `src/data/index.ts`.
5. The dashboard, statistics, filters, search, and reading interfaces will automatically include the new subject without modifying UI components!
