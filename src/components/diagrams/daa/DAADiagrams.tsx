import React from 'react';

// 1. Greedy Strategy Principle & Decision Flow Diagram
export const GreedyStrategyDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="greedyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="greedyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="greedyGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <marker id="arrowGreedy" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
      </marker>
    </defs>

    {/* Title / Process Header */}
    <rect x="20" y="20" width="640" height="40" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
    <text x="340" y="45" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Greedy Algorithmic Strategy: Step-by-Step Feasibility & Selection Architecture
    </text>

    {/* Stage 1: Input Candidate Set */}
    <g transform="translate(30, 90)">
      <rect width="140" height="90" rx="8" fill="url(#greedyGrad1)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
      <text x="70" y="35" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Candidate Set (D)</text>
      <text x="70" y="55" textAnchor="middle" fill="#dbeafe" fontSize="10">n Inputs to choose from</text>
      <text x="70" y="72" textAnchor="middle" fill="#bfdbfe" fontSize="9">Items / Jobs / Edges</text>
    </g>

    <line x1="170" y1="135" x2="210" y2="135" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowGreedy)" />

    {/* Stage 2: Selection Function */}
    <g transform="translate(210, 80)">
      <rect width="150" height="110" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
      <text x="75" y="28" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">1. Selection Function</text>
      <text x="75" y="50" textAnchor="middle" fill="#334155" fontSize="10">Select element x ∈ D</text>
      <text x="75" y="70" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="600">Locally Optimal Choice</text>
      <text x="75" y="90" textAnchor="middle" fill="#64748b" fontSize="9">Based on Greedy Criterion</text>
    </g>

    <line x1="360" y1="135" x2="400" y2="135" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowGreedy)" />

    {/* Stage 3: Feasibility Check */}
    <g transform="translate(400, 80)">
      <polygon points="75,0 150,55 75,110 0,55" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
      <text x="75" y="50" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Feasible?</text>
      <text x="75" y="68" textAnchor="middle" fill="#b45309" fontSize="9">Satisfies constraints?</text>
    </g>

    {/* Feasible Yes -> Add to solution */}
    <line x1="550" y1="135" x2="580" y2="135" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreedy)" />
    <text x="565" y="125" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">YES</text>

    <g transform="translate(580, 95)">
      <rect width="70" height="80" rx="8" fill="url(#greedyGrad2)" />
      <text x="35" y="35" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Add to</text>
      <text x="35" y="52" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Solution</text>
      <text x="35" y="68" textAnchor="middle" fill="#d1fae5" fontSize="9">Irrevocable</text>
    </g>

    {/* Feasible No -> Discard */}
    <path d="M 475 190 L 475 230 L 285 230 L 285 195" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowGreedy)" />
    <text x="495" y="215" fill="#dc2626" fontSize="10" fontWeight="bold">NO (Discard x)</text>

    {/* Bottom Properties Bar */}
    <rect x="30" y="250" width="620" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
    <text x="340" y="272" textAnchor="middle" fill="#334155" fontSize="10">
      Key Properties: <tspan fontWeight="bold" fill="#1e40af">1. Greedy Choice Property</tspan> (Locally optimal leads to global) | <tspan fontWeight="bold" fill="#047857">2. Optimal Substructure</tspan> | <tspan fontWeight="bold" fill="#b45309">3. Irrevocable Decisions</tspan>
    </text>
  </svg>
);

// 2. Fractional Knapsack Greedy Ratio Filling Diagram
export const FractionalKnapsackDiagram: React.FC = () => (
  <svg viewBox="0 0 680 320" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="knapBagGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
    </defs>

    {/* Header */}
    <text x="340" y="25" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">
      Fractional Knapsack: Greedy Sorting by Value-to-Weight Ratio (p_i / w_i)
    </text>

    {/* Items sorted by ratio */}
    <g transform="translate(30, 45)">
      <rect width="360" height="150" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      <text x="180" y="22" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">
        Step 1: Sort Items in Descending Order of Density (p_i / w_i)
      </text>

      {/* Item 1 */}
      <rect x="15" y="40" width="75" height="95" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="52" y="60" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">Item 1</text>
      <text x="52" y="78" textAnchor="middle" fill="#475569" fontSize="10">w = 10, p = 60</text>
      <rect x="25" y="90" width="55" height="20" rx="4" fill="#3b82f6" />
      <text x="52" y="104" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">p/w = 6.0</text>
      <text x="52" y="125" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Rank #1 (Take 1.0)</text>

      {/* Item 2 */}
      <rect x="100" y="40" width="75" height="95" rx="6" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
      <text x="137" y="60" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold">Item 2</text>
      <text x="137" y="78" textAnchor="middle" fill="#475569" fontSize="10">w = 20, p = 100</text>
      <rect x="110" y="90" width="55" height="20" rx="4" fill="#10b981" />
      <text x="137" y="104" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">p/w = 5.0</text>
      <text x="137" y="125" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Rank #2 (Take 1.0)</text>

      {/* Item 3 */}
      <rect x="185" y="40" width="75" height="95" rx="6" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="222" y="60" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Item 3</text>
      <text x="222" y="78" textAnchor="middle" fill="#475569" fontSize="10">w = 30, p = 120</text>
      <rect x="195" y="90" width="55" height="20" rx="4" fill="#f59e0b" />
      <text x="222" y="104" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">p/w = 4.0</text>
      <text x="222" y="125" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="bold">Rank #3 (Fraction)</text>

      {/* Item 4 */}
      <rect x="270" y="40" width="75" height="95" rx="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
      <text x="307" y="60" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="bold">Item 4</text>
      <text x="307" y="78" textAnchor="middle" fill="#94a3b8" fontSize="10">w = 15, p = 30</text>
      <rect x="280" y="90" width="55" height="20" rx="4" fill="#94a3b8" />
      <text x="307" y="104" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">p/w = 2.0</text>
      <text x="307" y="125" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">Discard (Full)</text>
    </g>

    {/* Knapsack Container Simulation */}
    <g transform="translate(420, 45)">
      <rect width="230" height="250" rx="12" fill="url(#knapBagGrad)" stroke="#64748b" strokeWidth="2" />
      <text x="115" y="25" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">
        Knapsack (Capacity W = 50)
      </text>

      {/* Inside Knapsack Blocks */}
      {/* Block 1: Item 1 */}
      <rect x="20" y="45" width="190" height="45" rx="4" fill="#3b82f6" />
      <text x="115" y="68" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
        Take x₁ = 1.0 (w=10, profit = $60)
      </text>
      <text x="115" y="82" textAnchor="middle" fill="#dbeafe" fontSize="9">
        Capacity remaining: 50 - 10 = 40
      </text>

      {/* Block 2: Item 2 */}
      <rect x="20" y="95" width="190" height="65" rx="4" fill="#10b981" />
      <text x="115" y="125" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
        Take x₂ = 1.0 (w=20, profit = $100)
      </text>
      <text x="115" y="142" textAnchor="middle" fill="#d1fae5" fontSize="9">
        Capacity remaining: 40 - 20 = 20
      </text>

      {/* Block 3: Fraction of Item 3 */}
      <rect x="20" y="165" width="190" height="65" rx="4" fill="#f59e0b" stroke="#b45309" strokeDasharray="4 2" />
      <text x="115" y="195" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
        Take x₃ = 20/30 = 2/3 (Fractional)
      </text>
      <text x="115" y="212" textAnchor="middle" fill="#fef3c7" fontSize="9">
        Profit: (2/3) × 120 = $80 | Remaining = 0
      </text>

      <rect x="15" y="235" width="200" height="25" rx="4" fill="#0f172a" />
      <text x="115" y="252" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">
        Max Total Profit = $60 + $100 + $80 = $240
      </text>
    </g>

    {/* Math summary on bottom left */}
    <g transform="translate(30, 210)">
      <rect width="360" height="85" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="15" y="22" fill="#0f172a" fontSize="11" fontWeight="bold">Theorem (Greedy Fractional Knapsack):</text>
      <text x="15" y="40" fill="#334155" fontSize="10">
        • Greedily selecting items in decreasing order of p_i / w_i always yields an optimal solution.
      </text>
      <text x="15" y="58" fill="#334155" fontSize="10">
        • Time Complexity: <tspan fontWeight="bold" fill="#2563eb">O(n log n)</tspan> dominated by ratio sorting.
      </text>
      <text x="15" y="74" fill="#ef4444" fontSize="10" fontWeight="600">
        • Note: This greedy ratio strategy FAILS for 0/1 Knapsack (requires DP).
      </text>
    </g>
  </svg>
);

// 3. Job Sequencing with Deadlines Timeline Diagram
export const JobSequencingDiagram: React.FC = () => (
  <svg viewBox="0 0 680 280" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="slotGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
    </defs>

    <text x="340" y="25" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">
      Job Sequencing with Deadlines: Greedy Slot Reservation Architecture
    </text>

    {/* Timeline Slot Track */}
    <g transform="translate(60, 50)">
      <text x="0" y="15" fill="#475569" fontSize="11" fontWeight="bold">Time Slots (Unit Time = 1):</text>

      {/* Slot 1: [0, 1] */}
      <rect x="0" y="30" width="180" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="90" y="55" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Slot 1: [0 → 1]</text>
      <text x="90" y="75" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="bold">Assigned to: J₂ (p = 100)</text>

      {/* Slot 2: [1, 2] */}
      <rect x="190" y="30" width="180" height="60" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
      <text x="280" y="55" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Slot 2: [1 → 2]</text>
      <text x="280" y="75" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold">Assigned to: J₁ (p = 60)</text>

      {/* Slot 3: [2, 3] */}
      <rect x="380" y="30" width="180" height="60" rx="6" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
      <text x="470" y="55" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Slot 3: [2 → 3]</text>
      <text x="470" y="75" textAnchor="middle" fill="#d97706" fontSize="11" fontWeight="bold">Assigned to: J₃ (p = 20)</text>
    </g>

    {/* Job evaluation table */}
    <g transform="translate(60, 160)">
      <rect width="560" height="100" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="20" y="22" fill="#0f172a" fontSize="11" fontWeight="bold">Greedy Processing Order (Decreasing Profit):</text>

      <text x="20" y="42" fill="#334155" fontSize="10">
        1. <tspan fontWeight="bold" fill="#16a34a">J₂ (p=100, d=1):</tspan> Slot 1 is empty → <tspan fill="#16a34a" fontWeight="bold">SCHEDULED in Slot [0,1]</tspan>.
      </text>
      <text x="20" y="58" fill="#334155" fontSize="10">
        2. <tspan fontWeight="bold" fill="#16a34a">J₁ (p=60, d=2):</tspan> Slot 2 is empty → <tspan fill="#16a34a" fontWeight="bold">SCHEDULED in Slot [1,2]</tspan>.
      </text>
      <text x="20" y="74" fill="#334155" fontSize="10">
        3. <tspan fontWeight="bold" fill="#ef4444">J₄ (p=40, d=2):</tspan> Deadline 2 full, Slot 1 full → <tspan fill="#ef4444" fontWeight="bold">REJECTED (Cannot meet deadline)</tspan>.
      </text>
      <text x="20" y="90" fill="#334155" fontSize="10">
        4. <tspan fontWeight="bold" fill="#16a34a">J₃ (p=20, d=3):</tspan> Slot 3 is empty → <tspan fill="#16a34a" fontWeight="bold">SCHEDULED in Slot [2,3]</tspan>. Total Profit = 100 + 60 + 20 = <tspan fontWeight="bold" fill="#1e40af">180</tspan>.
      </text>
    </g>
  </svg>
);

// 4. Dynamic Programming Principle of Optimality Diagram
export const PrincipleOfOptimalityDiagram: React.FC = () => (
  <svg viewBox="0 0 680 280" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="optGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#4338ca" />
      </linearGradient>
    </defs>

    <text x="340" y="25" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">
      Dynamic Programming: Principle of Optimality (Bellman, 1957)
    </text>

    {/* Graph Representation */}
    <g transform="translate(60, 50)">
      {/* Node S */}
      <circle cx="50" cy="80" r="26" fill="url(#optGrad)" />
      <text x="50" y="85" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">S</text>
      <text x="50" y="125" textAnchor="middle" fill="#475569" fontSize="10">Start State</text>

      {/* Node K */}
      <circle cx="280" cy="80" r="26" fill="#10b981" />
      <text x="280" y="85" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">K</text>
      <text x="280" y="125" textAnchor="middle" fill="#047857" fontSize="10">Intermediate Decision</text>

      {/* Node D */}
      <circle cx="510" cy="80" r="26" fill="#0284c7" />
      <text x="510" y="85" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">D</text>
      <text x="510" y="125" textAnchor="middle" fill="#0369a1" fontSize="10">Destination / Goal</text>

      {/* Sub-path 1 */}
      <path d="M 76 80 L 254 80" stroke="#4338ca" strokeWidth="3" markerEnd="url(#arrowGreedy)" />
      <text x="165" y="70" textAnchor="middle" fill="#4338ca" fontSize="11" fontWeight="bold">Optimal Sub-path S → K</text>

      {/* Sub-path 2 */}
      <path d="M 306 80 L 484 80" stroke="#059669" strokeWidth="3" markerEnd="url(#arrowGreedy)" />
      <text x="395" y="70" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold">Optimal Sub-path K → D</text>

      {/* Alternate sub-optimal path dotted */}
      <path d="M 70 60 Q 280 10 490 60" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="280" y="20" textAnchor="middle" fill="#dc2626" fontSize="10">Sub-optimal Alternative (Discarded)</text>
    </g>

    {/* Bellman Quote Box */}
    <g transform="translate(60, 190)">
      <rect width="560" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="280" y="26" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">
        Bellman's Principle of Optimality:
      </text>
      <text x="280" y="45" textAnchor="middle" fill="#334155" fontSize="11" fontStyle="italic">
        "An optimal policy has the property that whatever the initial state and initial decision are,
      </text>
      <text x="280" y="60" textAnchor="middle" fill="#334155" fontSize="11" fontStyle="italic">
        the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision."
      </text>
    </g>
  </svg>
);

// 5. Matrix Chain Multiplication Pyramid DP Table Diagram
export const MatrixChainDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <text x="340" y="25" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">
      Matrix Chain Multiplication (MCM): Dynamic Programming Triangular Table
    </text>

    {/* Triangular Pyramid Table Layout */}
    <g transform="translate(140, 50)">
      {/* Row 4: m[1,4] */}
      <rect x="160" y="10" width="80" height="35" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
      <text x="200" y="32" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">m[1,4] (Goal)</text>

      {/* Row 3 */}
      <rect x="115" y="55" width="80" height="35" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="155" y="77" textAnchor="middle" fill="#92400e" fontSize="11">m[1,3]</text>

      <rect x="205" y="55" width="80" height="35" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="245" y="77" textAnchor="middle" fill="#92400e" fontSize="11">m[2,4]</text>

      {/* Row 2 */}
      <rect x="70" y="100" width="80" height="35" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
      <text x="110" y="122" textAnchor="middle" fill="#075985" fontSize="11">m[1,2]</text>

      <rect x="160" y="100" width="80" height="35" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
      <text x="200" y="122" textAnchor="middle" fill="#075985" fontSize="11">m[2,3]</text>

      <rect x="250" y="100" width="80" height="35" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
      <text x="290" y="122" textAnchor="middle" fill="#075985" fontSize="11">m[3,4]</text>

      {/* Row 1: Diagonal m[i,i] = 0 */}
      <rect x="25" y="145" width="80" height="35" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
      <text x="65" y="167" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">m[1,1]=0</text>

      <rect x="115" y="145" width="80" height="35" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
      <text x="155" y="167" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">m[2,2]=0</text>

      <rect x="205" y="145" width="80" height="35" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
      <text x="245" y="167" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">m[3,3]=0</text>

      <rect x="295" y="145" width="80" height="35" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
      <text x="335" y="167" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">m[4,4]=0</text>
    </g>

    {/* Recurrence Equation Box */}
    <g transform="translate(60, 240)">
      <rect width="560" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="280" y="27" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">
        {"Recurrence: m[i, j] = min (m[i, k] + m[k+1, j] + p[i-1] · p[k] · p[j]) where i ≤ k < j  |  Time Complexity: O(n³)"}
      </text>
    </g>
  </svg>
);

// 6. Optimal Binary Search Tree (OBST) Architecture Diagram
export const OBSTDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="obstKeyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>

    <text x="340" y="25" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">
      Optimal Binary Search Tree (OBST): Subtree Root Structure & Dummy Keys
    </text>

    {/* Tree Structure */}
    <g transform="translate(190, 50)">
      {/* Root Node k_r */}
      <circle cx="150" cy="30" r="24" fill="url(#obstKeyGrad)" />
      <text x="150" y="34" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Root kᵣ</text>
      <text x="150" y="8" textAnchor="middle" fill="#1e40af" fontSize="9">Prob pᵣ</text>

      {/* Left Child Line */}
      <line x1="130" y1="45" x2="70" y2="90" stroke="#64748b" strokeWidth="2" />
      {/* Right Child Line */}
      <line x1="170" y1="45" x2="230" y2="90" stroke="#64748b" strokeWidth="2" />

      {/* Left Subtree Node k_{r-1} */}
      <circle cx="70" cy="100" r="22" fill="#10b981" />
      <text x="70" y="104" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Keys &lt; kᵣ</text>
      <text x="70" y="132" textAnchor="middle" fill="#065f46" fontSize="9">Optimal Left Tree</text>

      {/* Right Subtree Node k_{r+1} */}
      <circle cx="230" cy="100" r="22" fill="#10b981" />
      <text x="230" y="104" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Keys &gt; kᵣ</text>
      <text x="230" y="132" textAnchor="middle" fill="#065f46" fontSize="9">Optimal Right Tree</text>

      {/* Dummy Leaf Nodes d_i (Unsuccessful Searches) */}
      <line x1="55" y1="120" x2="30" y2="160" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
      <rect x="15" y="160" width="30" height="24" rx="3" fill="#f1f5f9" stroke="#64748b" />
      <text x="30" y="176" textAnchor="middle" fill="#334155" fontSize="10">d₀</text>

      <line x1="85" y1="120" x2="110" y2="160" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
      <rect x="95" y="160" width="30" height="24" rx="3" fill="#f1f5f9" stroke="#64748b" />
      <text x="110" y="176" textAnchor="middle" fill="#334155" fontSize="10">d₁</text>

      <line x1="245" y1="120" x2="270" y2="160" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
      <rect x="255" y="160" width="30" height="24" rx="3" fill="#f1f5f9" stroke="#64748b" />
      <text x="270" y="176" textAnchor="middle" fill="#334155" fontSize="10">dₙ</text>
    </g>

    {/* Cost Formula Box */}
    <g transform="translate(60, 235)">
      <rect width="560" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="280" y="27" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">
        {"Cost Recurrence: C[i, j] = W[i, j] + min (C[i, k-1] + C[k, j]) for i < k ≤ j  |  Weights: W[i, j] = W[i, j-1] + p[j] + q[j]"}
      </text>
    </g>
  </svg>
);

// 7. Activity Selection Problem Timeline Diagram
export const ActivitySelectionDiagram: React.FC = () => (
  <svg viewBox="0 0 680 270" className="w-full h-auto select-none font-sans">
    <text x="340" y="25" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">
      Activity Selection Problem: Greedy Sorting by Earliest Finish Time (f_i)
    </text>

    {/* Timeline Axis */}
    <g transform="translate(60, 50)">
      <line x1="0" y1="160" x2="560" y2="160" stroke="#64748b" strokeWidth="2" />
      {[0, 2, 4, 6, 8, 10, 12].map((time) => (
        <g key={time} transform={`translate(${time * 46}, 160)`}>
          <line x1="0" y1="0" x2="0" y2="6" stroke="#64748b" strokeWidth="2" />
          <text x="0" y="18" textAnchor="middle" fill="#64748b" fontSize="10">{time}</text>
        </g>
      ))}

      {/* Activity A: [1, 3] (Selected) */}
      <rect x="46" y="10" width="92" height="22" rx="4" fill="#10b981" />
      <text x="92" y="25" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">A [1 → 3] (Selected)</text>

      {/* Activity B: [3, 4] (Selected) */}
      <rect x="138" y="40" width="46" height="22" rx="4" fill="#10b981" />
      <text x="161" y="55" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">B [3 → 4] (Selected)</text>

      {/* Activity C: [2, 5] (Conflicted) */}
      <rect x="92" y="70" width="138" height="22" rx="4" fill="#fca5a5" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 2" />
      <text x="161" y="85" textAnchor="middle" fill="#991b1b" fontSize="10">C [2 → 5] (Conflict! Reject)</text>

      {/* Activity E: [5, 9] (Selected) */}
      <rect x="230" y="100" width="184" height="22" rx="4" fill="#10b981" />
      <text x="322" y="115" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">E [5 → 9] (Selected)</text>

      {/* Activity F: [8, 10] (Conflicted) */}
      <rect x="368" y="130" width="92" height="22" rx="4" fill="#fca5a5" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 2" />
      <text x="414" y="145" textAnchor="middle" fill="#991b1b" fontSize="10">F [8 → 10] (Conflict! Reject)</text>
    </g>

    {/* Result Note */}
    <g transform="translate(60, 225)">
      <rect width="560" height="35" rx="6" fill="#f0fdf4" stroke="#86efac" />
      <text x="280" y="22" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">
        Optimal Non-Conflicting Schedule: {`{A, B, E, G}`}  |  Always picks activity with minimum finish time!
      </text>
    </g>
  </svg>
);
