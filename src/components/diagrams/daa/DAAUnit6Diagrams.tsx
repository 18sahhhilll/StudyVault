import React from 'react';

// 1. Computational DAG Model & Dynamic Multithreading Diagram
export const MultithreadedDAGDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="strandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <marker id="arrowDag" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
      </marker>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Dynamic Multithreading DAG: Strands, Spawn Edges, Continuation Edges & Critical Span
    </text>

    {/* DAG Graph Representation */}
    <g transform="translate(60, 55)">
      {/* Root Strand */}
      <circle cx="160" cy="20" r="15" fill="url(#strandGrad)" />
      <text x="160" y="24" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">A</text>

      {/* Continuation edge (horizontal) */}
      <line x1="175" y1="20" x2="245" y2="20" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowDag)" />
      <text x="210" y="14" textAnchor="middle" fill="#64748b" fontSize="8">Continuation</text>

      {/* Spawn edge (downward) */}
      <line x1="160" y1="35" x2="100" y2="85" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDag)" />
      <text x="115" y="55" fill="#1e40af" fontSize="8" fontWeight="bold">spawn</text>

      {/* Strand B (Spawned child) */}
      <circle cx="100" cy="95" r="15" fill="url(#strandGrad)" />
      <text x="100" y="99" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">B</text>

      {/* Strand C (Parent continuing) */}
      <circle cx="260" cy="20" r="15" fill="url(#strandGrad)" />
      <text x="260" y="24" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">C</text>

      {/* C spawns D */}
      <line x1="260" y1="35" x2="220" y2="85" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDag)" />

      {/* Strand D */}
      <circle cx="220" cy="95" r="15" fill="url(#strandGrad)" />
      <text x="220" y="99" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">D</text>

      {/* B continues to E */}
      <line x1="100" y1="110" x2="100" y2="155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowDag)" />
      <circle cx="100" cy="165" r="15" fill="url(#strandGrad)" />
      <text x="100" y="169" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">E</text>

      {/* D continues to F */}
      <line x1="220" y1="110" x2="220" y2="155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowDag)" />
      <circle cx="220" cy="165" r="15" fill="url(#strandGrad)" />
      <text x="220" y="169" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">F</text>

      {/* Sync join into Strand G */}
      <line x1="100" y1="180" x2="150" y2="215" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowDag)" />
      <line x1="220" y1="180" x2="170" y2="215" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowDag)" />
      <text x="160" y="200" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="bold">sync</text>

      <circle cx="160" cy="225" r="16" fill="#10b981" stroke="#047857" strokeWidth="2" />
      <text x="160" y="229" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">G</text>
    </g>

    {/* Work & Span Equations Panel */}
    <g transform="translate(360, 55)">
      <rect width="280" height="205" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="24" fill="#0f172a" fontSize="11" fontWeight="bold">Work, Span & Parallelism Laws</text>

      <text x="15" y="48" fill="#1e40af" fontSize="10" fontWeight="bold">1. Work (T₁):</text>
      <text x="25" y="64" fill="#334155" fontSize="9">• Total time on 1 processor (Sum of all strands).</text>
      <text x="25" y="78" fill="#0284c7" fontSize="9" fontWeight="bold">Work Law: T_P ≥ T₁ / P</text>

      <text x="15" y="100" fill="#dc2626" fontSize="10" fontWeight="bold">2. Span (T_∞):</text>
      <text x="25" y="116" fill="#334155" fontSize="9">• Longest directed path in the DAG (Critical Path).</text>
      <text x="25" y="130" fill="#b91c1c" fontSize="9" fontWeight="bold">Span Law: T_P ≥ T_∞</text>

      <text x="15" y="152" fill="#047857" fontSize="10" fontWeight="bold">3. Parallelism (T₁ / T_∞):</text>
      <text x="25" y="168" fill="#334155" fontSize="9">• Maximum possible speedup with unlimited cores.</text>
      <text x="25" y="182" fill="#047857" fontSize="9" fontWeight="bold">Parallel Slackness: (T₁ / T_∞) / P</text>
      <text x="25" y="196" fill="#475569" fontSize="8">If Slackness &gt; 1 ⇒ Linear speedup achieved!</text>
    </g>

    {/* Bottom summary note */}
    <rect x="50" y="268" width="580" height="24" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="340" y="284" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">
      Keywords: `spawn` creates concurrent child branch | `sync` blocks parent until all spawned children complete.
    </text>
  </svg>
);

// 2. Race Condition (Determinacy Race) Memory Hazard Diagram
export const RaceConditionDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="raceHazard" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#b91c1c" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Determinacy Race Condition: Shared Memory Hazard in Parallel Threads (a = a + 1)
    </text>

    {/* Shared Memory Cell */}
    <g transform="translate(260, 55)">
      <rect width="160" height="40" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
      <text x="80" y="25" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">Shared RAM: a = 0</text>
    </g>

    {/* Thread 1 (Left) */}
    <g transform="translate(50, 110)">
      <rect width="240" height="135" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <rect width="240" height="26" rx="8" fill="#eff6ff" />
      <text x="120" y="17" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Thread 1 (Core 1)</text>

      <text x="15" y="46" fill="#334155" fontSize="9">Step 1: Read a into r₁ (r₁ = 0)</text>
      <text x="15" y="68" fill="#334155" fontSize="9">Step 2: Increment r₁ (r₁ = 1)</text>
      <text x="15" y="90" fill="#334155" fontSize="9">Step 3: Write r₁ to a (a = 1)</text>

      <text x="15" y="118" fill="#0284c7" fontSize="9" fontWeight="bold">Expected: a becomes 1</text>
    </g>

    {/* Thread 2 (Right) */}
    <g transform="translate(390, 110)">
      <rect width="240" height="135" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <rect width="240" height="26" rx="8" fill="#fef2f2" />
      <text x="120" y="17" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Thread 2 (Core 2)</text>

      <text x="15" y="46" fill="#334155" fontSize="9">Step 1: Read a into r₂ (r₂ = 0)</text>
      <text x="15" y="68" fill="#334155" fontSize="9">Step 2: Increment r₂ (r₂ = 1)</text>
      <text x="15" y="90" fill="#334155" fontSize="9">Step 3: Write r₂ to a (a = 1)</text>

      <text x="15" y="118" fill="#dc2626" fontSize="9" fontWeight="bold">Hazard: Overwrites Thread 1!</text>
    </g>

    {/* Center Collision Flash */}
    <g transform="translate(300, 145)">
      <circle cx="40" cy="30" r="28" fill="url(#raceHazard)" />
      <text x="40" y="27" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">RACE</text>
      <text x="40" y="39" textAnchor="middle" fill="#ffffff" fontSize="8">HAZARD</text>
    </g>

    {/* Bottom summary note */}
    <rect x="40" y="252" width="600" height="28" rx="4" fill="#fef2f2" stroke="#fecaca" />
    <text x="340" y="270" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">
      Result: Lost Update Bug! Final a = 1 instead of 2. Fixed via atomic operations, mutex locks, or reduction.
    </text>
  </svg>
);

// 3. Parallel Matrix Multiplication Block Decomposition Diagram
export const ParallelMatrixMultDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="matAGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="matBGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Multithreaded Matrix Multiplication: Divide-and-Conquer 8 Concurrent Spawns
    </text>

    {/* Matrix Blocks Layout */}
    <g transform="translate(40, 60)">
      {/* Matrix A */}
      <rect width="90" height="90" rx="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
      <line x1="45" y1="0" x2="45" y2="90" stroke="#cbd5e1" />
      <line x1="0" y1="45" x2="90" y2="45" stroke="#cbd5e1" />
      <text x="22" y="28" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">A₁₁</text>
      <text x="68" y="28" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">A₁₂</text>
      <text x="22" y="73" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">A₂₁</text>
      <text x="68" y="73" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">A₂₂</text>
      <text x="45" y="105" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">Matrix A</text>

      <text x="105" y="50" textAnchor="middle" fill="#64748b" fontSize="14" fontWeight="bold">×</text>

      {/* Matrix B */}
      <g transform="translate(120, 0)">
        <rect width="90" height="90" rx="4" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <line x1="45" y1="0" x2="45" y2="90" stroke="#cbd5e1" />
        <line x1="0" y1="45" x2="90" y2="45" stroke="#cbd5e1" />
        <text x="22" y="28" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">B₁₁</text>
        <text x="68" y="28" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">B₁₂</text>
        <text x="22" y="73" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">B₂₁</text>
        <text x="68" y="73" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">B₂₂</text>
        <text x="45" y="105" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="bold">Matrix B</text>
      </g>

      <text x="225" y="50" textAnchor="middle" fill="#64748b" fontSize="14" fontWeight="bold">=</text>

      {/* Matrix C */}
      <g transform="translate(240, 0)">
        <rect width="90" height="90" rx="4" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2" />
        <line x1="45" y1="0" x2="45" y2="90" stroke="#cbd5e1" />
        <line x1="0" y1="45" x2="90" y2="45" stroke="#cbd5e1" />
        <text x="22" y="28" textAnchor="middle" fill="#6d28d9" fontSize="9" fontWeight="bold">C₁₁</text>
        <text x="68" y="28" textAnchor="middle" fill="#6d28d9" fontSize="9" fontWeight="bold">C₁₂</text>
        <text x="22" y="73" textAnchor="middle" fill="#6d28d9" fontSize="9" fontWeight="bold">C₂₁</text>
        <text x="68" y="73" textAnchor="middle" fill="#6d28d9" fontSize="9" fontWeight="bold">C₂₂</text>
        <text x="45" y="105" textAnchor="middle" fill="#6d28d9" fontSize="9" fontWeight="bold">Matrix C</text>
      </g>
    </g>

    {/* Right Complexity Equations */}
    <g transform="translate(390, 60)">
      <rect width="250" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="22" fill="#0f172a" fontSize="11" fontWeight="bold">8 Concurrent Recursive Spawns:</text>
      <text x="15" y="42" fill="#1e40af" fontSize="9">• spawn PMatMulRec(C₁₁, A₁₁, B₁₁)</text>
      <text x="15" y="56" fill="#1e40af" fontSize="9">• spawn PMatMulRec(T₁₁, A₁₂, B₂₁)</text>
      <text x="15" y="70" fill="#334155" fontSize="8">...6 more parallel subproblems...</text>
      <text x="15" y="86" fill="#10b981" fontSize="9" fontWeight="bold">• sync: parallel for add Cᵢⱼ = Cᵢⱼ + Tᵢⱼ</text>

      <line x1="15" y1="95" x2="235" y2="95" stroke="#e2e8f0" />
      <text x="15" y="112" fill="#334155" fontSize="9" fontWeight="bold">Work: T₁(n) = 8T₁(n/2) + Θ(n²) = Θ(n³)</text>
      <text x="15" y="128" fill="#dc2626" fontSize="9" fontWeight="bold">Span: T_∞(n) = T_∞(n/2) + Θ(log n) = Θ(log² n)</text>
      <text x="15" y="144" fill="#047857" fontSize="9" fontWeight="bold">Parallelism: Θ(n³ / log² n)</text>
    </g>

    {/* Bottom summary note */}
    <rect x="40" y="235" width="600" height="42" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="340" y="253" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">
      Rectangular Matrices (m × n) × (n × p): Conventional Time = O(m · n · p).
    </text>
    <text x="340" y="268" textAnchor="middle" fill="#334155" fontSize="9">
      Multithreaded with parallel loops yields Work = Θ(mnp), Span = Θ(n), and Parallelism = Θ(mp).
    </text>
  </svg>
);

// 4. Multithreaded Merge Sort with Parallel Merge Diagram
export const ParallelMergeSortDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Multithreaded Merge Sort: PMerge Dual Binary Search Splitting into 4 Subproblems
    </text>

    {/* Dual Array Splitting Layout */}
    <g transform="translate(60, 60)">
      {/* Array 1 (Longer) */}
      <rect width="260" height="32" rx="4" fill="#dbeafe" stroke="#3b82f6" />
      <text x="130" y="14" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">Subarray 1: T[a₁ .. c₁]</text>
      <line x1="130" y1="0" x2="130" y2="32" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="3 2" />
      <text x="65" y="27" textAnchor="middle" fill="#1e3a8a" fontSize="9">≤ x (Median)</text>
      <text x="195" y="27" textAnchor="middle" fill="#1e3a8a" fontSize="9">≥ x</text>

      {/* Array 2 */}
      <g transform="translate(0, 50)">
        <rect width="260" height="32" rx="4" fill="#dcfce7" stroke="#10b981" />
        <text x="130" y="14" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="bold">Subarray 2: T[a₂ .. c₂] (Binary Searched)</text>
        <line x1="90" y1="0" x2="90" y2="32" stroke="#047857" strokeWidth="2" strokeDasharray="3 2" />
        <text x="45" y="27" textAnchor="middle" fill="#047857" fontSize="9">≤ x</text>
        <text x="175" y="27" textAnchor="middle" fill="#047857" fontSize="9">≥ x</text>
      </g>
    </g>

    {/* Right Explanatory Box */}
    <g transform="translate(360, 60)">
      <rect width="270" height="150" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="22" fill="#0f172a" fontSize="11" fontWeight="bold">PMerge Parallel Breakthrough</text>

      <text x="15" y="44" fill="#dc2626" fontSize="9" fontWeight="bold">Naive Merge Sort Bottleneck:</text>
      <text x="25" y="58" fill="#475569" fontSize="8">Sequential Merge: Span = Θ(n) ⇒ Parallelism = Θ(log n).</text>

      <text x="15" y="78" fill="#047857" fontSize="9" fontWeight="bold">Parallel PMerge Solution:</text>
      <text x="25" y="92" fill="#334155" fontSize="8">1. Find median x of longer list.</text>
      <text x="25" y="104" fill="#334155" fontSize="8">2. Binary search x in shorter list in O(log n).</text>
      <text x="25" y="116" fill="#334155" fontSize="8">3. Spawn 2 parallel merges on lower & upper halves.</text>

      <text x="15" y="136" fill="#1e40af" fontSize="9" fontWeight="bold">PMerge Span: T_∞(n) = Θ(log² n)</text>
    </g>

    {/* Bottom summary note */}
    <rect x="40" y="225" width="600" height="50" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="340" y="244" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">
      Overall Multithreaded Merge Sort: Work T₁(n) = Θ(n log n) | Span T_∞(n) = Θ(log³ n)
    </text>
    <text x="340" y="260" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">
      Enormous Parallelism: P = T₁ / T_∞ = Θ(n / log² n) — Scales seamlessly across hundreds of cores!
    </text>
  </svg>
);

// 5. Distributed Breadth-First Search (BFS) Tree Generation Diagram
export const DistributedBFSDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="rootNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#b91c1c" />
      </linearGradient>
      <marker id="arrowBfs" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
      </marker>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Distributed Breadth-First Search (BFS): Round-by-Round Message Wave & Tree Generation
    </text>

    {/* Graph Layout for 7 Vertices A-G from University Papers */}
    <g transform="translate(60, 55)">
      {/* Root Node A (Source i_0) */}
      <circle cx="140" cy="25" r="18" fill="url(#rootNodeGrad)" />
      <text x="140" y="30" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">A (i₀)</text>
      <text x="140" y="5" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Round 1 Source</text>

      {/* Wave to B and C */}
      <line x1="125" y1="35" x2="65" y2="85" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrowBfs)" />
      <line x1="155" y1="35" x2="215" y2="85" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrowBfs)" />

      {/* Level 1 Nodes B and C */}
      <circle cx="60" cy="95" r="18" fill="#3b82f6" />
      <text x="60" y="100" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">B</text>
      <text x="15" y="97" fill="#1e40af" fontSize="8" fontWeight="bold">parent=A</text>

      <circle cx="220" cy="95" r="18" fill="#3b82f6" />
      <text x="220" y="100" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">C</text>
      <text x="245" y="97" fill="#1e40af" fontSize="8" fontWeight="bold">parent=A</text>

      {/* Wave to D, E and F, G */}
      <line x1="50" y1="110" x2="25" y2="160" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowBfs)" />
      <line x1="70" y1="110" x2="95" y2="160" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowBfs)" />
      <line x1="210" y1="110" x2="185" y2="160" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowBfs)" />
      <line x1="230" y1="110" x2="255" y2="160" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowBfs)" />

      {/* Level 2 Nodes D, E, F, G */}
      <circle cx="20" cy="175" r="16" fill="#10b981" />
      <text x="20" y="180" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">D</text>

      <circle cx="100" cy="175" r="16" fill="#10b981" />
      <text x="100" y="180" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">E</text>

      <circle cx="180" cy="175" r="16" fill="#10b981" />
      <text x="180" y="180" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">F</text>

      <circle cx="260" cy="175" r="16" fill="#10b981" />
      <text x="260" y="180" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">G</text>
    </g>

    {/* Right Explanatory Box */}
    <g transform="translate(360, 55)">
      <rect width="280" height="205" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="24" fill="#0f172a" fontSize="11" fontWeight="bold">Distributed BFS Protocol Execution</text>

      <text x="15" y="48" fill="#dc2626" fontSize="10" fontWeight="bold">Round 1:</text>
      <text x="25" y="64" fill="#334155" fontSize="9">Source node A marks itself visited, sends search to {"{B, C}"}.</text>

      <text x="15" y="86" fill="#1e40af" fontSize="10" fontWeight="bold">Round 2:</text>
      <text x="25" y="102" fill="#334155" fontSize="9">Nodes B and C receive search, set parent = A.</text>
      <text x="25" y="116" fill="#334155" fontSize="9">B forwards search to {"{D, E}"}; C forwards search to {"{F, G}"}.</text>

      <text x="15" y="138" fill="#047857" fontSize="10" fontWeight="bold">Round 3:</text>
      <text x="25" y="154" fill="#334155" fontSize="9">D and E set parent = B; F and G set parent = C.</text>
      <text x="25" y="168" fill="#334155" fontSize="9">No unvisited nodes remain. Protocol terminates!</text>

      <rect x="15" y="178" width="250" height="20" rx="3" fill="#eff6ff" />
      <text x="140" y="192" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">
        Time: O(Diameter) | Messages: O(|E|)
      </text>
    </g>
  </svg>
);

// 6. Distributed Minimum Spanning Tree (GHS Algorithm) Diagram
export const DistributedGHSMSTDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Distributed MST (GHS Algorithm): Fragment Growth & Minimum Weight Outgoing Edge (MWOE)
    </text>

    {/* Fragment Merge Visual */}
    <g transform="translate(60, 60)">
      {/* Fragment 1 */}
      <rect width="180" height="130" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
      <text x="90" y="24" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Fragment 1 (Level k)</text>
      <circle cx="50" cy="65" r="14" fill="#3b82f6" />
      <text x="50" y="69" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">u</text>
      <circle cx="130" cy="65" r="14" fill="#3b82f6" />
      <text x="130" y="69" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">v</text>
      <line x1="64" y1="65" x2="116" y2="65" stroke="#1e40af" strokeWidth="2" />
      <text x="90" y="58" textAnchor="middle" fill="#1e40af" fontSize="8">w=2</text>
      <text x="90" y="110" textAnchor="middle" fill="#64748b" fontSize="8">Core Node: v</text>

      {/* MWOE Connecting Edge */}
      <line x1="144" y1="65" x2="226" y2="65" stroke="#dc2626" strokeWidth="3" />
      <text x="185" y="55" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">MWOE</text>
      <text x="185" y="80" textAnchor="middle" fill="#991b1b" fontSize="8">weight = 1</text>

      {/* Fragment 2 */}
      <g transform="translate(210, 0)">
        <rect width="180" height="130" rx="10" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />
        <text x="90" y="24" textAnchor="middle" fill="#065f46" fontSize="10" fontWeight="bold">Fragment 2 (Level k)</text>
        <circle cx="50" cy="65" r="14" fill="#10b981" />
        <text x="50" y="69" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">x</text>
        <circle cx="130" cy="65" r="14" fill="#10b981" />
        <text x="130" y="69" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">y</text>
        <line x1="64" y1="65" x2="116" y2="65" stroke="#047857" strokeWidth="2" />
        <text x="90" y="58" textAnchor="middle" fill="#047857" fontSize="8">w=3</text>
        <text x="90" y="110" textAnchor="middle" fill="#64748b" fontSize="8">Core Node: x</text>
      </g>
    </g>

    {/* Right Explanatory Box */}
    <g transform="translate(480, 60)">
      <rect width="170" height="150" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="22" fill="#0f172a" fontSize="10" fontWeight="bold">GHS Algorithm Phases</text>
      <text x="15" y="44" fill="#1e40af" fontSize="9">• Level 0: Each node is a fragment.</text>
      <text x="15" y="62" fill="#334155" fontSize="8">• Each fragment broadcasts initiate</text>
      <text x="15" y="74" fill="#334155" fontSize="8">  to find its MWOE.</text>
      <text x="15" y="92" fill="#dc2626" fontSize="8" fontWeight="bold">• Fragments merge across MWOE.</text>
      <text x="15" y="106" fill="#047857" fontSize="8">  Level increases to k + 1.</text>

      <line x1="15" y1="116" x2="155" y2="116" stroke="#e2e8f0" />
      <text x="15" y="132" fill="#334155" fontSize="8" fontWeight="bold">Messages: O(V log V + E)</text>
      <text x="15" y="144" fill="#334155" fontSize="8" fontWeight="bold">Time: O(V log V)</text>
    </g>

    {/* Bottom summary note */}
    <rect x="40" y="225" width="600" height="42" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="340" y="244" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">
      Gallager-Humblet-Spira (GHS) Protocol: Distributed equivalent of Kruskal’s MST algorithm.
    </text>
    <text x="340" y="259" textAnchor="middle" fill="#475569" fontSize="9">
      Fragments never create cycles because each merge connects via the unique minimum weight outgoing edge.
    </text>
  </svg>
);

// 7. Rabin-Karp String Matching Rolling Hash Diagram
export const RabinKarpRollingHashDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <defs>
      <marker id="arrowRk" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
      </marker>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Rabin-Karp Rolling Hash: O(1) Window Sliding with Modulo Arithmetic (q = 11)
    </text>

    {/* Rolling Hash Mechanism Formula */}
    <g transform="translate(50, 60)">
      {/* Current Window t_s */}
      <rect width="180" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="90" y="22" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Window s: Digits [d₁ .. dₘ]</text>
      <text x="90" y="44" textAnchor="middle" fill="#0284c7" fontSize="12" fontWeight="bold">Hash t_s = 26 ⇒ t_s mod 11 = 4</text>

      {/* Transition Arrow */}
      <line x1="190" y1="90" x2="250" y2="90" stroke="#0284c7" strokeWidth="2.5" markerEnd="url(#arrowRk)" />
      <text x="220" y="80" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="bold">Shift s+1</text>

      {/* Next Window t_{s+1} */}
      <g transform="translate(260, 0)">
        <rect width="180" height="60" rx="6" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
        <text x="90" y="22" textAnchor="middle" fill="#065f46" fontSize="10" fontWeight="bold">Window s+1: Shift in next digit</text>
        <text x="90" y="44" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="bold">{"t_{s+1} in O(1) time"}</text>
      </g>
    </g>

    {/* Rolling Hash Formula Box */}
    <g transform="translate(50, 140)">
      <rect width="580" height="65" rx="6" fill="#ffffff" stroke="#cbd5e1" />
      <text x="290" y="25" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">
        {"Constant-Time Rolling Hash Formula: t_{s+1} = ( d · ( t_s - T[s+1] · h ) + T[s+m+1] ) mod q"}
      </text>
      <text x="290" y="48" textAnchor="middle" fill="#64748b" fontSize="10">
        where d = 10 (decimal radix), h = d^(m-1) mod q, and q is a prime number (e.g. q = 11).
      </text>
    </g>

    {/* Spurious Hit Demonstration (From Paper 3 Q8(b)) */}
    <g transform="translate(50, 215)">
      <rect width="580" height="65" rx="6" fill="#fef2f2" stroke="#fecaca" />
      <text x="290" y="22" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">
        Understanding Spurious Hits (Hash Collision)
      </text>
      <text x="290" y="40" textAnchor="middle" fill="#334155" fontSize="9">
        • Spurious Hit: When t_s ≡ p (mod q), but actual characters T[s+1..s+m] ≠ P.
      </text>
      <text x="290" y="55" textAnchor="middle" fill="#475569" fontSize="9">
        Example: Pattern P = 26 (26 mod 11 = 4). A text window "15" has 15 mod 11 = 4 (Hash matches, but "15" ≠ "26" ⇒ SPURIOUS HIT!).
      </text>
    </g>
  </svg>
);
