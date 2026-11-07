import React from 'react';

// 1. Backtracking State-Space Tree Architecture Diagram
export const BacktrackingStateSpaceTreeDiagram: React.FC = () => (
  <svg viewBox="0 0 680 320" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="liveNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="eNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="answerNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <marker id="arrowDfs" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
      </marker>
    </defs>

    {/* Title Header */}
    <rect x="20" y="12" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="34" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Backtracking: State-Space Tree Node Classifications & Depth-First Pruning
    </text>

    {/* Tree Levels */}
    <text x="50" y="75" fill="#64748b" fontSize="10" fontWeight="600">Level 0 (Root)</text>
    <text x="50" y="145" fill="#64748b" fontSize="10" fontWeight="600">Level 1 (x₁)</text>
    <text x="50" y="215" fill="#64748b" fontSize="10" fontWeight="600">Level 2 (x₂)</text>
    <text x="50" y="285" fill="#64748b" fontSize="10" fontWeight="600">Level 3 (x₃)</text>

    {/* Edges */}
    <g stroke="#94a3b8" strokeWidth="2">
      {/* Root to L1 */}
      <line x1="340" y1="85" x2="210" y2="135" />
      <line x1="340" y1="85" x2="470" y2="135" />

      {/* Left branch L1 to L2 */}
      <line x1="210" y1="155" x2="140" y2="205" />
      <line x1="210" y1="155" x2="280" y2="205" />

      {/* Right branch L1 to L2 */}
      <line x1="470" y1="155" x2="400" y2="205" />
      <line x1="470" y1="155" x2="540" y2="205" />

      {/* L2 to L3 */}
      <line x1="280" y1="225" x2="230" y2="275" />
      <line x1="280" y1="225" x2="330" y2="275" />
      <line x1="400" y1="225" x2="400" y2="275" />
    </g>

    {/* Root Node (Problem State) */}
    <circle cx="340" cy="75" r="16" fill="url(#liveNodeGrad)" />
    <text x="340" y="79" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">1</text>
    <text x="370" y="75" fill="#1e40af" fontSize="10" fontWeight="bold">Root (Initial State)</text>

    {/* Level 1 Nodes */}
    {/* Node 2: Live -> E-node */}
    <circle cx="210" cy="145" r="16" fill="url(#eNodeGrad)" />
    <text x="210" y="149" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">2</text>
    <text x="145" y="135" fill="#d97706" fontSize="9" fontWeight="bold">E-Node (Expanding)</text>

    {/* Node 3: Live */}
    <circle cx="470" cy="145" r="16" fill="url(#liveNodeGrad)" />
    <text x="470" y="149" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">3</text>
    <text x="495" y="145" fill="#3b82f6" fontSize="9">Live Node</text>

    {/* Level 2 Nodes */}
    {/* Node 4: Bounded / Dead Node */}
    <circle cx="140" cy="215" r="15" fill="#ef4444" />
    <text x="140" y="219" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">4</text>
    <line x1="125" y1="235" x2="155" y2="235" stroke="#dc2626" strokeWidth="2" />
    <text x="140" y="248" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Dead Node (Killed)</text>
    <text x="140" y="258" textAnchor="middle" fill="#991b1b" fontSize="8">B(a₁,a₂) = False</text>

    {/* Node 5: E-node child */}
    <circle cx="280" cy="215" r="15" fill="url(#eNodeGrad)" />
    <text x="280" y="219" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">5</text>

    {/* Node 6: Explored */}
    <circle cx="400" cy="215" r="15" fill="url(#liveNodeGrad)" />
    <text x="400" y="219" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">6</text>

    {/* Node 7: Pruned immediately */}
    <circle cx="540" cy="215" r="15" fill="#ef4444" />
    <text x="540" y="219" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">7</text>
    <text x="540" y="240" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Pruned</text>

    {/* Level 3 Nodes */}
    {/* Node 8: Dead */}
    <circle cx="230" cy="280" r="14" fill="#94a3b8" />
    <text x="230" y="284" textAnchor="middle" fill="#ffffff" fontSize="10">8</text>

    {/* Node 9: Answer State / Solution */}
    <circle cx="330" cy="280" r="16" fill="url(#answerNodeGrad)" stroke="#065f46" strokeWidth="2" />
    <text x="330" y="284" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">9</text>
    <text x="330" y="306" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">✓ Answer State</text>

    {/* Node 10: Solution */}
    <circle cx="400" cy="280" r="14" fill="#94a3b8" />
    <text x="400" y="284" textAnchor="middle" fill="#ffffff" fontSize="10">10</text>

    {/* Legend Box */}
    <g transform="translate(480, 245)">
      <rect width="180" height="65" rx="5" fill="#ffffff" stroke="#e2e8f0" />
      <circle cx="15" cy="15" r="6" fill="#f59e0b" />
      <text x="30" y="19" fill="#334155" fontSize="9">E-Node (Currently expanding)</text>
      <circle cx="15" cy="32" r="6" fill="#3b82f6" />
      <text x="30" y="36" fill="#334155" fontSize="9">Live Node (Pending children)</text>
      <circle cx="15" cy="49" r="6" fill="#ef4444" />
      <text x="30" y="53" fill="#334155" fontSize="9">Dead Node (Killed / Bounded)</text>
    </g>
  </svg>
);

// 2. N-Queens Chessboard Placement & Diagonal Math Diagram
export const NQueensChessboardDiagram: React.FC = () => (
  <svg viewBox="0 0 680 310" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="queenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      4-Queens Problem: Board Geometry, Tuple x = [2, 4, 1, 3] & Diagonal Conflict Formula
    </text>

    {/* 4x4 Chessboard */}
    <g transform="translate(60, 60)">
      {/* Column labels */}
      <text x="25" y="-8" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">Col 1</text>
      <text x="75" y="-8" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">Col 2</text>
      <text x="125" y="-8" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">Col 3</text>
      <text x="175" y="-8" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">Col 4</text>

      {/* Row labels */}
      <text x="-15" y="30" textAnchor="end" fill="#475569" fontSize="11" fontWeight="bold">Row 1</text>
      <text x="-15" y="80" textAnchor="end" fill="#475569" fontSize="11" fontWeight="bold">Row 2</text>
      <text x="-15" y="130" textAnchor="end" fill="#475569" fontSize="11" fontWeight="bold">Row 3</text>
      <text x="-15" y="180" textAnchor="end" fill="#475569" fontSize="11" fontWeight="bold">Row 4</text>

      {/* Row 1 */}
      <rect x="0" y="0" width="50" height="50" fill="#f1f5f9" stroke="#cbd5e1" />
      <rect x="50" y="0" width="50" height="50" fill="#cbd5e1" stroke="#cbd5e1" />
      <rect x="100" y="0" width="50" height="50" fill="#f1f5f9" stroke="#cbd5e1" />
      <rect x="150" y="0" width="50" height="50" fill="#cbd5e1" stroke="#cbd5e1" />

      {/* Row 2 */}
      <rect x="0" y="50" width="50" height="50" fill="#cbd5e1" stroke="#cbd5e1" />
      <rect x="50" y="50" width="50" height="50" fill="#f1f5f9" stroke="#cbd5e1" />
      <rect x="100" y="50" width="50" height="50" fill="#cbd5e1" stroke="#cbd5e1" />
      <rect x="150" y="50" width="50" height="50" fill="#f1f5f9" stroke="#cbd5e1" />

      {/* Row 3 */}
      <rect x="0" y="100" width="50" height="50" fill="#f1f5f9" stroke="#cbd5e1" />
      <rect x="50" y="100" width="50" height="50" fill="#cbd5e1" stroke="#cbd5e1" />
      <rect x="100" y="100" width="50" height="50" fill="#f1f5f9" stroke="#cbd5e1" />
      <rect x="150" y="100" width="50" height="50" fill="#cbd5e1" stroke="#cbd5e1" />

      {/* Row 4 */}
      <rect x="0" y="150" width="50" height="50" fill="#cbd5e1" stroke="#cbd5e1" />
      <rect x="50" y="150" width="50" height="50" fill="#f1f5f9" stroke="#cbd5e1" />
      <rect x="100" y="150" width="50" height="50" fill="#cbd5e1" stroke="#cbd5e1" />
      <rect x="150" y="150" width="50" height="50" fill="#f1f5f9" stroke="#cbd5e1" />

      {/* Queens Placements for (2, 4, 1, 3) */}
      {/* Q1 at (Row 1, Col 2) */}
      <circle cx="75" cy="25" r="18" fill="url(#queenGrad)" />
      <text x="75" y="31" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">♛ Q₁</text>

      {/* Q2 at (Row 2, Col 4) */}
      <circle cx="175" cy="75" r="18" fill="url(#queenGrad)" />
      <text x="175" y="81" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">♛ Q₂</text>

      {/* Q3 at (Row 3, Col 1) */}
      <circle cx="25" cy="125" r="18" fill="url(#queenGrad)" />
      <text x="25" y="131" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">♛ Q₃</text>

      {/* Q4 at (Row 4, Col 3) */}
      <circle cx="125" cy="175" r="18" fill="url(#queenGrad)" />
      <text x="125" y="181" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">♛ Q₄</text>
    </g>

    {/* Right Explanation & Math Rules Panel */}
    <g transform="translate(300, 60)">
      <rect width="340" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" />

      <text x="20" y="25" fill="#1e293b" fontSize="12" fontWeight="bold">Constraints & Formulation</text>

      <text x="20" y="50" fill="#0284c7" fontSize="11" fontWeight="bold">1. 1D Solution Vector Representation:</text>
      <text x="35" y="68" fill="#334155" fontSize="10">x = [x₁, x₂, ..., xₙ] where x[i] = column of Queen in row i</text>
      <text x="35" y="83" fill="#059669" fontSize="10" fontWeight="600">Solution 1: x = [2, 4, 1, 3]  |  Solution 2: x = [3, 1, 4, 2]</text>

      <text x="20" y="108" fill="#d97706" fontSize="11" fontWeight="bold">2. Explicit Constraints:</text>
      <text x="35" y="125" fill="#334155" fontSize="10">{"x[i] ∈ {1, 2, ..., n} for all 1 ≤ i ≤ n"}</text>

      <text x="20" y="148" fill="#dc2626" fontSize="11" fontWeight="bold">3. Implicit Constraints (Non-Attacking):</text>
      <text x="35" y="165" fill="#334155" fontSize="10">Column Check: x[i] ≠ x[j] (No two in same column)</text>
      <text x="35" y="182" fill="#7c3aed" fontSize="10" fontWeight="bold">Diagonal Check: |x[i] - x[j]| ≠ |i - j|</text>
    </g>

    {/* Bottom summary note */}
    <rect x="60" y="275" width="580" height="28" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="350" y="293" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">
      Time Complexity: O(n!) with backtracking vs O(nⁿ) brute-force. 4-Queens has 2 solutions; 8-Queens has 92 solutions.
    </text>
  </svg>
);

// 3. Graph m-Coloring Architecture Diagram
export const GraphColoringDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Planar Graph m-Coloring Problem: Vertex Adjacency & 3-Coloring (R, G, B) Backtracking
    </text>

    {/* Graph Geometry (6 Vertices from University Exam Question) */}
    <g transform="translate(40, 55)">
      {/* Edges */}
      <line x1="120" y1="30" x2="50" y2="90" stroke="#64748b" strokeWidth="2.5" />
      <line x1="120" y1="30" x2="190" y2="90" stroke="#64748b" strokeWidth="2.5" />
      <line x1="50" y1="90" x2="120" y2="140" stroke="#64748b" strokeWidth="2.5" />
      <line x1="190" y1="90" x2="120" y2="140" stroke="#64748b" strokeWidth="2.5" />
      <line x1="120" y1="140" x2="50" y2="190" stroke="#64748b" strokeWidth="2.5" />
      <line x1="120" y1="140" x2="190" y2="190" stroke="#64748b" strokeWidth="2.5" />
      <line x1="50" y1="190" x2="120" y2="230" stroke="#64748b" strokeWidth="2.5" />
      <line x1="190" y1="190" x2="120" y2="230" stroke="#64748b" strokeWidth="2.5" />

      {/* Vertex A (Red = 1) */}
      <circle cx="120" cy="30" r="18" fill="url(#redGrad)" />
      <text x="120" y="35" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">A (R)</text>

      {/* Vertex B (Green = 2) */}
      <circle cx="50" cy="90" r="18" fill="url(#greenGrad)" />
      <text x="50" y="95" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">B (G)</text>

      {/* Vertex C (Blue = 3) */}
      <circle cx="190" cy="90" r="18" fill="url(#blueGrad)" />
      <text x="190" y="95" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">C (B)</text>

      {/* Vertex D (Red = 1) */}
      <circle cx="120" cy="140" r="18" fill="url(#redGrad)" />
      <text x="120" y="145" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">D (R)</text>

      {/* Vertex E (Green = 2) */}
      <circle cx="50" cy="190" r="18" fill="url(#greenGrad)" />
      <text x="50" y="195" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">E (G)</text>

      {/* Vertex F (Blue = 3) */}
      <circle cx="190" cy="190" r="18" fill="url(#blueGrad)" />
      <text x="190" y="195" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">F (B)</text>

      {/* Vertex G (Bottom) */}
      <circle cx="120" cy="230" r="16" fill="url(#redGrad)" />
      <text x="120" y="235" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">G (R)</text>
    </g>

    {/* Right Explanatory Box */}
    <g transform="translate(310, 55)">
      <rect width="340" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="20" y="24" fill="#0f172a" fontSize="12" fontWeight="bold">m-Coloring Algorithm Mechanics</text>

      <text x="20" y="50" fill="#0369a1" fontSize="11" fontWeight="bold">1. Adjacency Matrix Constraint G[k, j] == 1:</text>
      <text x="35" y="68" fill="#334155" fontSize="10">If edge (k, j) exists, then color x[k] ≠ x[j].</text>

      <text x="20" y="94" fill="#047857" fontSize="11" fontWeight="bold">2. Gen_Col_Value(k) Subroutine:</text>
      <text x="35" y="112" fill="#334155" fontSize="10">x[k] = (x[k] + 1) mod (m + 1)</text>
      <text x="35" y="127" fill="#334155" fontSize="10">Loops over m available colors; returns 0 if exhausted.</text>

      <text x="20" y="152" fill="#b45309" fontSize="11" fontWeight="bold">3. Recursive Backtracking Driver:</text>
      <text x="35" y="170" fill="#334155" fontSize="10">mColoring(k): Assigns color to vertex k, checks validity,</text>
      <text x="35" y="185" fill="#334155" fontSize="10">and recurses to k + 1. Backtracks on 0.</text>

      <rect x="20" y="198" width="300" height="22" rx="4" fill="#fef2f2" stroke="#fecaca" />
      <text x="170" y="213" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">
        Worst-Case State Tree Nodes: Σ mⁱ = O(mⁿ)  |  Per Node Work: O(n)
      </text>
    </g>
  </svg>
);

// 4. Sum of Subsets Binary State-Space Tree Diagram
export const SubsetSumTreeDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="subsetHitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Sum of Subsets: Binary Inclusion/Exclusion State-Space Tree & Bounding Rules
    </text>

    {/* Tree Visualization for S = {2, 3, 5, 6, 8, 10}, M = 10 */}
    <g transform="translate(40, 55)">
      {/* Root */}
      <circle cx="300" cy="20" r="16" fill="#3b82f6" />
      <text x="300" y="24" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">s=0</text>

      {/* L1: include 2 vs exclude 2 */}
      <line x1="300" y1="36" x2="180" y2="75" stroke="#64748b" strokeWidth="2" />
      <line x1="300" y1="36" x2="420" y2="75" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
      <text x="230" y="52" fill="#0284c7" fontSize="10" fontWeight="bold">x₁=1 (+2)</text>
      <text x="375" y="52" fill="#64748b" fontSize="10">x₁=0</text>

      <circle cx="180" cy="85" r="16" fill="#3b82f6" />
      <text x="180" y="89" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">s=2</text>

      <circle cx="420" cy="85" r="16" fill="#94a3b8" />
      <text x="420" y="89" textAnchor="middle" fill="#ffffff" fontSize="10">s=0</text>

      {/* L2: include 3 vs exclude 3 from s=2 */}
      <line x1="180" y1="101" x2="110" y2="140" stroke="#64748b" strokeWidth="2" />
      <line x1="180" y1="101" x2="250" y2="140" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
      <text x="135" y="117" fill="#0284c7" fontSize="9" fontWeight="bold">x₂=1 (+3)</text>
      <text x="225" y="117" fill="#64748b" fontSize="9">x₂=0</text>

      <circle cx="110" cy="150" r="16" fill="#3b82f6" />
      <text x="110" y="154" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">s=5</text>

      <circle cx="250" cy="150" r="16" fill="#3b82f6" />
      <text x="250" y="154" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">s=2</text>

      {/* L3: from s=5, include 5 -> sum = 10 (SOLUTION 1: {2, 3, 5}) */}
      <line x1="110" y1="166" x2="60" y2="210" stroke="#059669" strokeWidth="2.5" />
      <circle cx="60" cy="220" r="18" fill="url(#subsetHitGrad)" />
      <text x="60" y="224" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">s=10</text>
      <text x="60" y="248" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="bold">✓ Sol: {"{2, 3, 5}"}</text>

      {/* L3: from s=2, include 8 -> sum = 10 (SOLUTION 2: {2, 8}) */}
      <line x1="250" y1="166" x2="250" y2="210" stroke="#059669" strokeWidth="2.5" />
      <circle cx="250" cy="220" r="18" fill="url(#subsetHitGrad)" />
      <text x="250" y="224" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">s=10</text>
      <text x="250" y="248" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="bold">✓ Sol: {"{2, 8}"}</text>

      {/* Pruning demonstration: s=5 + 6 = 11 > 10 */}
      <line x1="110" y1="166" x2="160" y2="210" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="160" cy="220" r="15" fill="#fecaca" stroke="#ef4444" />
      <text x="160" y="224" textAnchor="middle" fill="#dc2626" fontSize="10">s=11</text>
      <text x="160" y="248" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">✕ Pruned &gt; M</text>
    </g>

    {/* Bounding Conditions Summary Box */}
    <g transform="translate(390, 160)">
      <rect width="260" height="115" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="20" fill="#0f172a" fontSize="11" fontWeight="bold">Dual Bounding Functions (Pruning):</text>
      <text x="15" y="42" fill="#b91c1c" fontSize="10" fontWeight="bold">1. Exceeds Target Bound:</text>
      <text x="25" y="58" fill="#475569" fontSize="9">Kill if current_sum + w[k+1] &gt; M</text>
      <text x="15" y="80" fill="#1e40af" fontSize="10" fontWeight="bold">2. Insufficient Remainder Bound:</text>
      <text x="25" y="96" fill="#475569" fontSize="9">Kill if current_sum + Σ remaining &lt; M</text>
    </g>
  </svg>
);

// 5. Branch and Bound Exploration Strategies (FIFO, LIFO, LC) Diagram
export const BranchBoundStrategiesDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="fifoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="lifoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#5b21b6" />
      </linearGradient>
      <linearGradient id="lcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Branch and Bound Exploration Strategies: FIFO vs LIFO vs Least-Cost (LC) Search
    </text>

    {/* Column 1: FIFO Branch and Bound */}
    <g transform="translate(30, 60)">
      <rect width="190" height="205" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
      <rect width="190" height="32" rx="8" fill="url(#fifoGrad)" />
      <text x="95" y="21" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">1. FIFO Branch & Bound</text>

      <text x="15" y="55" fill="#1e40af" fontSize="10" fontWeight="bold">Data Structure: FIFO Queue</text>
      <text x="15" y="75" fill="#334155" fontSize="9">• Traversal: Breadth-First Search (BFS)</text>
      <text x="15" y="92" fill="#334155" fontSize="9">• Generates all children at depth d</text>
      <text x="15" y="107" fill="#334155" fontSize="9">  before moving to depth d + 1.</text>
      <text x="15" y="127" fill="#334155" fontSize="9">• First generated child becomes next</text>
      <text x="15" y="142" fill="#334155" fontSize="9">  E-node after current finishes.</text>
      <text x="15" y="165" fill="#dc2626" fontSize="9" fontWeight="bold">• Disadvantage: High memory;</text>
      <text x="15" y="180" fill="#dc2626" fontSize="9">  explores unpromising subtrees.</text>
    </g>

    {/* Column 2: LIFO Branch and Bound */}
    <g transform="translate(245, 60)">
      <rect width="190" height="205" rx="8" fill="#ffffff" stroke="#8b5cf6" strokeWidth="1.5" />
      <rect width="190" height="32" rx="8" fill="url(#lifoGrad)" />
      <text x="95" y="21" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">2. LIFO Branch & Bound</text>

      <text x="15" y="55" fill="#5b21b6" fontSize="10" fontWeight="bold">Data Structure: LIFO Stack</text>
      <text x="15" y="75" fill="#334155" fontSize="9">• Traversal: D-Search (Depth search)</text>
      <text x="15" y="92" fill="#334155" fontSize="9">• Most recently generated child</text>
      <text x="15" y="107" fill="#334155" fontSize="9">  is popped first as next E-node.</text>
      <text x="15" y="127" fill="#334155" fontSize="9">• Memory efficient like backtracking,</text>
      <text x="15" y="142" fill="#334155" fontSize="9">  but can dive deep into poor zones.</text>
      <text x="15" y="165" fill="#7c3aed" fontSize="9" fontWeight="bold">• Uses bounding upper value</text>
      <text x="15" y="180" fill="#7c3aed" fontSize="9">  to prune dead ends.</text>
    </g>

    {/* Column 3: Least-Cost (LC) Branch and Bound */}
    <g transform="translate(460, 60)">
      <rect width="190" height="205" rx="8" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
      <rect width="190" height="32" rx="8" fill="url(#lcGrad)" />
      <text x="95" y="21" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">3. LC Branch & Bound (Best)</text>

      <text x="15" y="55" fill="#047857" fontSize="10" fontWeight="bold">Data Structure: Min-Heap</text>
      <text x="15" y="75" fill="#334155" fontSize="9">• Ranking: Heuristic Cost ĉ(x)</text>
      <text x="15" y="92" fill="#065f46" fontSize="9" fontWeight="bold">• ĉ(x) = f(h(x)) + g(x)</text>
      <text x="15" y="107" fill="#334155" fontSize="9">  where g(x) = path cost from root</text>
      <text x="15" y="122" fill="#334155" fontSize="9">  h(x) = estimate to goal leaf.</text>
      <text x="15" y="142" fill="#047857" fontSize="9" fontWeight="bold">• Pruning Rule: Kill if ĉ(x) ≥ u</text>
      <text x="15" y="165" fill="#15803d" fontSize="9" fontWeight="bold">• Reaches optimal answer</text>
      <text x="15" y="180" fill="#15803d" fontSize="9">  with minimum node expansions.</text>
    </g>
  </svg>
);

// 6. Traveling Salesperson Problem (TSP) Reduced Matrix Flow Diagram
export const TSPReducedMatrixDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    <defs>
      <marker id="arrowTsp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
      </marker>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Traveling Salesperson Problem (TSP): Reduced Matrix Technique & Bounding Formula
    </text>

    {/* Stage 1: Initial Cost Matrix */}
    <g transform="translate(30, 65)">
      <rect width="125" height="135" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
      <rect width="125" height="25" rx="6" fill="#eff6ff" />
      <text x="62" y="17" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">1. Cost Matrix M</text>
      <text x="12" y="45" fill="#334155" fontSize="9">Diag: M[i, i] = ∞</text>
      <text x="12" y="65" fill="#334155" fontSize="9">Row 1: [∞, 10, 15, 20]</text>
      <text x="12" y="85" fill="#334155" fontSize="9">Row 2: [10, ∞, 35, 25]</text>
      <text x="12" y="105" fill="#334155" fontSize="9">Row 3: [15, 35, ∞, 30]</text>
      <text x="12" y="125" fill="#334155" fontSize="9">Row 4: [20, 25, 30, ∞]</text>
    </g>

    <line x1="160" y1="130" x2="185" y2="130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowTsp)" />

    {/* Stage 2: Row Reduction */}
    <g transform="translate(190, 65)">
      <rect width="135" height="135" rx="6" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" />
      <rect width="135" height="25" rx="6" fill="#fef3c7" />
      <text x="67" y="17" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">2. Row Reduction</text>
      <text x="12" y="45" fill="#334155" fontSize="9">r₁ = min(row 1) = 10</text>
      <text x="12" y="65" fill="#334155" fontSize="9">r₂ = min(row 2) = 10</text>
      <text x="12" y="85" fill="#334155" fontSize="9">r₃ = min(row 3) = 15</text>
      <text x="12" y="105" fill="#334155" fontSize="9">r₄ = min(row 4) = 20</text>
      <text x="12" y="125" fill="#b45309" fontSize="9" fontWeight="bold">Sum r = 55</text>
    </g>

    <line x1="330" y1="130" x2="355" y2="130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowTsp)" />

    {/* Stage 3: Column Reduction */}
    <g transform="translate(360, 65)">
      <rect width="135" height="135" rx="6" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />
      <rect width="135" height="25" rx="6" fill="#d1fae5" />
      <text x="67" y="17" textAnchor="middle" fill="#065f46" fontSize="10" fontWeight="bold">3. Column Reduction</text>
      <text x="12" y="45" fill="#334155" fontSize="9">Subtract min of each</text>
      <text x="12" y="65" fill="#334155" fontSize="9">column that lacks a 0.</text>
      <text x="12" y="90" fill="#334155" fontSize="9">Sum c = col_mins</text>
      <text x="12" y="120" fill="#047857" fontSize="9" fontWeight="bold">Root Cost ĉ = r + c</text>
    </g>

    <line x1="500" y1="130" x2="525" y2="130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowTsp)" />

    {/* Stage 4: Child Branching Formula */}
    <g transform="translate(530, 65)">
      <rect width="125" height="135" rx="6" fill="#ffffff" stroke="#8b5cf6" strokeWidth="1.5" />
      <rect width="125" height="25" rx="6" fill="#f3e8ff" />
      <text x="62" y="17" textAnchor="middle" fill="#6b21a8" fontSize="10" fontWeight="bold">4. Child Node ĉ(j)</text>
      <text x="10" y="45" fill="#334155" fontSize="8">• Set row i = ∞</text>
      <text x="10" y="65" fill="#334155" fontSize="8">• Set col j = ∞</text>
      <text x="10" y="85" fill="#334155" fontSize="8">• Set M[j, 1] = ∞</text>
      <text x="10" y="105" fill="#334155" fontSize="8">• Reduce matrix</text>
      <text x="10" y="125" fill="#7c3aed" fontSize="8" fontWeight="bold">ĉ(j) = ĉ(i) + M[i,j] + r'</text>
    </g>

    {/* Bottom Formula Box */}
    <rect x="30" y="220" width="625" height="48" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="342" y="240" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">
      {"Dynamic Branching Cost Formula: ĉ(child) = ĉ(parent) + M_parent[i, j] + r_reduction"}
    </text>
    <text x="342" y="258" textAnchor="middle" fill="#475569" fontSize="10">
      Always pick the unexpanded live node with the minimum ĉ(x) from the priority min-heap.
    </text>
  </svg>
);

// 7. 0/1 Knapsack Branch and Bound State-Space Tree Diagram
export const KnapsackBranchBoundDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="bbBestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      0/1 Knapsack LCBB: State-Space Tree, Heuristic Upper Bound u(x) & Lower Bound ĉ(x)
    </text>

    {/* Tree Structure */}
    <g transform="translate(60, 55)">
      {/* Root Node 1 */}
      <circle cx="280" cy="20" r="18" fill="#3b82f6" />
      <text x="280" y="24" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">1</text>
      <text x="310" y="16" fill="#1e40af" fontSize="9" fontWeight="bold">ĉ = -90, u = -90</text>
      <text x="310" y="28" fill="#64748b" fontSize="8">Root (m = 100)</text>

      {/* L1: Item 4 Decision */}
      <line x1="280" y1="38" x2="170" y2="85" stroke="#64748b" strokeWidth="2" />
      <line x1="280" y1="38" x2="390" y2="85" stroke="#64748b" strokeWidth="2" />
      <text x="200" y="60" fill="#0284c7" fontSize="9" fontWeight="bold">with Item 4</text>
      <text x="350" y="60" fill="#64748b" fontSize="9">without Item 4</text>

      {/* Node 2: with Item 4 */}
      <circle cx="170" cy="95" r="18" fill="#f59e0b" />
      <text x="170" y="99" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">2</text>
      <text x="95" y="93" fill="#b45309" fontSize="9" fontWeight="bold">ĉ = -90, u = -90</text>
      <text x="95" y="105" fill="#059669" fontSize="8">Least Cost Pick</text>

      {/* Node 3: without Item 4 */}
      <circle cx="390" cy="95" r="18" fill="#94a3b8" />
      <text x="390" y="99" textAnchor="middle" fill="#ffffff" fontSize="10">3</text>
      <text x="415" y="93" fill="#64748b" fontSize="9">ĉ = -75, u = -70</text>
      <text x="415" y="105" fill="#dc2626" fontSize="8">✕ Suboptimal (ĉ &gt; u)</text>

      {/* L2: Item 5 Decision from Node 2 */}
      <line x1="170" y1="113" x2="100" y2="165" stroke="#059669" strokeWidth="2.5" />
      <line x1="170" y1="113" x2="240" y2="165" stroke="#64748b" strokeWidth="2" />
      <text x="110" y="135" fill="#047857" fontSize="9" fontWeight="bold">with Item 5</text>
      <text x="220" y="135" fill="#64748b" fontSize="9">without Item 5</text>

      {/* Node 4: with Item 4 and Item 5 (OPTIMAL) */}
      <circle cx="100" cy="175" r="20" fill="url(#bbBestGrad)" stroke="#065f46" strokeWidth="2" />
      <text x="100" y="179" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">4</text>
      <text x="100" y="210" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">✓ OPTIMAL SOLUTION</text>
      <text x="100" y="223" textAnchor="middle" fill="#047857" fontSize="9">Items {"{4, 5}"} | Max Profit = 90</text>
      <text x="100" y="235" textAnchor="middle" fill="#64748b" fontSize="8">Weight = 40 + 60 = 100 ≤ m</text>

      {/* Node 5: without Item 5 */}
      <circle cx="240" cy="175" r="16" fill="#ef4444" />
      <text x="240" y="179" textAnchor="middle" fill="#ffffff" fontSize="10">5</text>
      <text x="265" y="175" fill="#dc2626" fontSize="9">ĉ = -70, u = -60</text>
      <text x="265" y="188" fill="#dc2626" fontSize="8">✕ Killed (ĉ ≥ u* = -90)</text>
    </g>

    {/* Mathematical Bounding Explanation Box */}
    <g transform="translate(390, 155)">
      <rect width="260" height="115" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="20" fill="#0f172a" fontSize="11" fontWeight="bold">Knapsack Bounding Functions:</text>
      <text x="15" y="42" fill="#0284c7" fontSize="10" fontWeight="bold">Lower Bound ĉ(x) (Minimization):</text>
      <text x="25" y="58" fill="#475569" fontSize="9">-(current_profit + fractional fill of next)</text>
      <text x="15" y="80" fill="#d97706" fontSize="10" fontWeight="bold">Upper Bound u(x):</text>
      <text x="25" y="96" fill="#475569" fontSize="9">-(current_profit + discrete items only)</text>
      <text x="15" y="112" fill="#15803d" fontSize="9" fontWeight="bold">Kills node x if ĉ(x) ≥ upper bound</text>
    </g>
  </svg>
);
