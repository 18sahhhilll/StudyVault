import React from 'react';

// 1. Amortized Stack MULTIPOP & Credit/Potential Accounting Diagram
export const AmortizedStackDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="stackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Amortized Analysis: Stack MULTIPOP Operations, Credit Accounting & Potential Energy
    </text>

    {/* Stack Visualization */}
    <g transform="translate(60, 65)">
      <rect x="20" y="20" width="100" height="180" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="2" strokeDasharray="0 0" />
      {/* Stack Items */}
      <rect x="25" y="150" width="90" height="24" rx="3" fill="url(#stackGrad)" />
      <text x="70" y="166" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Item 1</text>
      <circle cx="100" cy="162" r="6" fill="url(#coinGrad)" />
      <text x="100" y="165" textAnchor="middle" fill="#78350f" fontSize="7" fontWeight="bold">$1</text>

      <rect x="25" y="122" width="90" height="24" rx="3" fill="url(#stackGrad)" />
      <text x="70" y="138" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Item 2</text>
      <circle cx="100" cy="134" r="6" fill="url(#coinGrad)" />
      <text x="100" y="137" textAnchor="middle" fill="#78350f" fontSize="7" fontWeight="bold">$1</text>

      <rect x="25" y="94" width="90" height="24" rx="3" fill="url(#stackGrad)" />
      <text x="70" y="110" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Item 3</text>
      <circle cx="100" cy="106" r="6" fill="url(#coinGrad)" />
      <text x="100" y="109" textAnchor="middle" fill="#78350f" fontSize="7" fontWeight="bold">$1</text>

      <rect x="25" y="66" width="90" height="24" rx="3" fill="url(#stackGrad)" />
      <text x="70" y="82" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Item 4</text>
      <circle cx="100" cy="78" r="6" fill="url(#coinGrad)" />
      <text x="100" y="81" textAnchor="middle" fill="#78350f" fontSize="7" fontWeight="bold">$1</text>

      <text x="70" y="55" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">← TOP (Size s=4)</text>
      <text x="70" y="215" textAnchor="middle" fill="#475569" fontSize="9">Stack Data Structure</text>
    </g>

    {/* Operation Costs Panel */}
    <g transform="translate(220, 65)">
      <rect width="420" height="195" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="20" y="25" fill="#0f172a" fontSize="12" fontWeight="bold">3 Amortized Methods for Stack Operations</text>

      {/* Aggregate Method */}
      <text x="20" y="50" fill="#0284c7" fontSize="11" fontWeight="bold">1. Aggregate Method: T(n) / n</text>
      <text x="35" y="66" fill="#334155" fontSize="9">• In any sequence of n operations, PUSH can be called at most n times.</text>
      <text x="35" y="80" fill="#334155" fontSize="9">• POP + MULTIPOP can pop at most as many items as were pushed (≤ n).</text>
      <text x="35" y="94" fill="#0284c7" fontSize="9" fontWeight="bold">Total Cost T(n) ≤ 2n ⇒ Amortized Cost = O(2n / n) = O(1).</text>

      {/* Accounting Method */}
      <text x="20" y="118" fill="#d97706" fontSize="11" fontWeight="bold">2. Accounting Method (Credits / Bank Account):</text>
      <text x="35" y="134" fill="#334155" fontSize="9">• PUSH charged $2: $1 pays actual cost, $1 deposited as credit on item.</text>
      <text x="35" y="148" fill="#334155" fontSize="9">• POP charged $0: pays actual $1 using credit stored on the popped item.</text>
      <text x="35" y="162" fill="#334155" fontSize="9">• MULTIPOP charged $0: every popped item pays for itself via its credit.</text>
      <text x="35" y="176" fill="#d97706" fontSize="9" fontWeight="bold">Total credit is always ≥ 0 ⇒ All amortized costs are O(1).</text>
    </g>

    {/* Bottom Formula Box */}
    <rect x="60" y="268" width="580" height="26" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="350" y="285" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">
      {"Potential Method: Φ(D) = stack size s | PUSH: c^ = 1 + (s+1 - s) = 2 | POP: c^ = 1 + (s-1 - s) = 0 | MULTIPOP: c^ = k + (s-k - s) = 0"}
    </text>
  </svg>
);

// 2. Binary Counter Increment Bit-Flip Ladder Diagram
export const BinaryCounterDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      k-bit Binary Counter Increment: Bit Flipping Frequency & Amortized O(1) Cost
    </text>

    {/* Bit Frequencies Table Layout */}
    <g transform="translate(50, 60)">
      <rect width="260" height="195" rx="6" fill="#ffffff" stroke="#cbd5e1" />
      <rect width="260" height="28" rx="6" fill="#f1f5f9" />
      <text x="25" y="18" fill="#0f172a" fontSize="10" fontWeight="bold">Bit Index i</text>
      <text x="110" y="18" fill="#0f172a" fontSize="10" fontWeight="bold">Flip Interval</text>
      <text x="200" y="18" fill="#0f172a" fontSize="10" fontWeight="bold">Flips in n Steps</text>

      <text x="25" y="48" fill="#1e40af" fontSize="9" fontWeight="bold">A[0] (LSB)</text>
      <text x="110" y="48" fill="#334155" fontSize="9">Every step</text>
      <text x="200" y="48" fill="#0284c7" fontSize="9" fontWeight="bold">n times</text>

      <text x="25" y="74" fill="#1e40af" fontSize="9" fontWeight="bold">A[1]</text>
      <text x="110" y="74" fill="#334155" fontSize="9">Every 2nd step</text>
      <text x="200" y="74" fill="#0284c7" fontSize="9" fontWeight="bold">⌊n / 2⌋ times</text>

      <text x="25" y="100" fill="#1e40af" fontSize="9" fontWeight="bold">A[2]</text>
      <text x="110" y="100" fill="#334155" fontSize="9">Every 4th step</text>
      <text x="200" y="100" fill="#0284c7" fontSize="9" fontWeight="bold">⌊n / 4⌋ times</text>

      <text x="25" y="126" fill="#1e40af" fontSize="9" fontWeight="bold">A[3]</text>
      <text x="110" y="126" fill="#334155" fontSize="9">Every 8th step</text>
      <text x="200" y="126" fill="#0284c7" fontSize="9" fontWeight="bold">⌊n / 8⌋ times</text>

      <text x="25" y="152" fill="#1e40af" fontSize="9" fontWeight="bold">A[i]</text>
      <text x="110" y="152" fill="#334155" fontSize="9">Every 2ⁱ-th step</text>
      <text x="200" y="152" fill="#0284c7" fontSize="9" fontWeight="bold">⌊n / 2ⁱ⌋ times</text>

      <rect x="10" y="165" width="240" height="22" rx="3" fill="#eff6ff" />
      <text x="130" y="180" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">
        {"Total Flips: Σ ⌊n/2ⁱ⌋ < n · Σ (1/2ⁱ) = 2n"}
      </text>
    </g>

    {/* Right Explanatory Panel */}
    <g transform="translate(330, 60)">
      <rect width="300" height="195" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="24" fill="#0f172a" fontSize="11" fontWeight="bold">Accounting & Potential Derivation</text>

      <text x="15" y="50" fill="#d97706" fontSize="10" fontWeight="bold">Accounting Method:</text>
      <text x="25" y="66" fill="#334155" fontSize="9">• Cost of setting 0 → 1: Charged $2</text>
      <text x="35" y="80" fill="#64748b" fontSize="8">($1 pays actual cost, $1 stays as credit on bit 1)</text>
      <text x="25" y="96" fill="#334155" fontSize="9">• Cost of resetting 1 → 0: Charged $0</text>
      <text x="35" y="110" fill="#64748b" fontSize="8">(Paid by the $1 credit previously saved on that bit)</text>

      <text x="15" y="132" fill="#059669" fontSize="10" fontWeight="bold">Potential Function Method:</text>
      <text x="25" y="148" fill="#334155" fontSize="9">• Define Φ(Dᵢ) = bᵢ = number of 1s in counter after step i.</text>
      <text x="25" y="162" fill="#334155" fontSize="9">• Suppose step i resets tᵢ bits and sets 1 bit.</text>
      <text x="25" y="176" fill="#059669" fontSize="9" fontWeight="bold">• c^ᵢ = (tᵢ + 1) + (bᵢ - bᵢ₋₁) = (tᵢ + 1) + (1 - tᵢ) = 2.</text>
    </g>

    {/* Bottom summary */}
    <rect x="50" y="265" width="580" height="26" rx="4" fill="#f0fdf4" stroke="#bbf7d0" />
    <text x="340" y="282" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">
      Result: Average cost per INCREMENT operation is strictly O(1), despite O(k) worst-case individual steps!
    </text>
  </svg>
);

// 3. Complexity Classes Euler Venn Diagram (P, NP, NP-Complete, NP-Hard)
export const ComplexityClassesDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="npcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#b91c1c" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Computational Complexity Hierarchy: P vs NP vs NP-Complete vs NP-Hard (Assuming P ≠ NP)
    </text>

    {/* Venn Diagram (Left Side) */}
    <g transform="translate(50, 55)">
      {/* NP-Hard Region (Outer boundary) */}
      <rect x="20" y="20" width="260" height="195" rx="12" fill="#fef2f2" stroke="#f87171" strokeWidth="2" strokeDasharray="5 3" />
      <text x="150" y="42" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">NP-Hard Class (Optimization Problems)</text>
      <text x="150" y="56" textAnchor="middle" fill="#7f1d1d" fontSize="8">TSP Optimization, 0/1 Knapsack, Halting Problem</text>

      {/* NP Ellipse (Overlapping with NP-Hard) */}
      <ellipse cx="150" cy="135" rx="115" ry="65" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
      <text x="150" y="90" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">NP Class (Verifiable in Poly-Time)</text>

      {/* P Ellipse (Inside NP, Non-overlapping with NP-Complete) */}
      <ellipse cx="90" cy="145" rx="42" ry="28" fill="url(#pGrad)" />
      <text x="90" y="142" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">P Class</text>
      <text x="90" y="156" textAnchor="middle" fill="#dbeafe" fontSize="8">MST, Sorting</text>

      {/* NP-Complete Intersection (Intersection of NP and NP-Hard) */}
      <ellipse cx="205" cy="145" rx="46" ry="28" fill="url(#npcGrad)" />
      <text x="205" y="141" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">NP-Complete</text>
      <text x="205" y="154" textAnchor="middle" fill="#fecaca" fontSize="8">SAT, Vertex Cover</text>
    </g>

    {/* Right Explanatory Table */}
    <g transform="translate(360, 55)">
      <rect width="280" height="205" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="24" fill="#0f172a" fontSize="11" fontWeight="bold">Complexity Classes Formal Criteria</text>

      <text x="15" y="48" fill="#1e40af" fontSize="10" fontWeight="bold">• Class P (Deterministic Poly-Time):</text>
      <text x="25" y="64" fill="#334155" fontSize="9">Solvable in O(nᵏ) on a Deterministic Turing Machine.</text>

      <text x="15" y="86" fill="#166534" fontSize="10" fontWeight="bold">• Class NP (Non-Deterministic Poly-Time):</text>
      <text x="25" y="102" fill="#334155" fontSize="9">Certificate/solution verifiable in O(nᵏ) time.</text>

      <text x="15" y="124" fill="#dc2626" fontSize="10" fontWeight="bold">• Class NP-Complete (NPC):</text>
      <text x="25" y="140" fill="#334155" fontSize="9">1. Problem is in NP.</text>
      <text x="25" y="154" fill="#334155" fontSize="9">2. Every problem in NP is poly-time reducible to it.</text>

      <text x="15" y="176" fill="#7f1d1d" fontSize="10" fontWeight="bold">• Class NP-Hard:</text>
      <text x="25" y="192" fill="#334155" fontSize="9">At least as hard as any NP problem; may not be in NP.</text>
    </g>

    {/* Bottom summary note */}
    <rect x="50" y="268" width="590" height="24" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="345" y="284" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">
      Cook-Levin Theorem: SAT was the first problem proven NP-Complete. If any NPC problem ∈ P, then P = NP!
    </text>
  </svg>
);

// 4. Taxonomy of Randomized Algorithms Diagram
export const RandomizedAlgorithmsDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="lvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="mcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Randomized Algorithms Classification: Las Vegas vs Monte Carlo Paradigms
    </text>

    {/* Root Node */}
    <rect x="240" y="55" width="200" height="36" rx="6" fill="#1e293b" />
    <text x="340" y="77" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Randomized Algorithms</text>

    {/* Split Lines */}
    <line x1="280" y1="91" x2="170" y2="125" stroke="#64748b" strokeWidth="2" />
    <line x1="400" y1="91" x2="510" y2="125" stroke="#64748b" strokeWidth="2" />

    {/* Left Column: Las Vegas */}
    <g transform="translate(50, 125)">
      <rect width="260" height="150" rx="8" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
      <rect width="260" height="30" rx="8" fill="url(#lvGrad)" />
      <text x="130" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">1. Las Vegas Algorithms</text>

      <text x="15" y="52" fill="#065f46" fontSize="10" fontWeight="bold">Correctness: 100% Guaranteed</text>
      <text x="15" y="70" fill="#334155" fontSize="9">• Always returns the correct, exact result.</text>
      <text x="15" y="86" fill="#b45309" fontSize="9" fontWeight="bold">Runtime: Random Variable</text>
      <text x="15" y="102" fill="#334155" fontSize="9">• Execution time varies between runs.</text>
      <text x="15" y="122" fill="#047857" fontSize="9" fontWeight="bold">Examples: Randomized QuickSort (O(n log n) expected),</text>
      <text x="15" y="136" fill="#047857" fontSize="9">Randomized Selection, Duplicate Element Finder.</text>
    </g>

    {/* Right Column: Monte Carlo */}
    <g transform="translate(370, 125)">
      <rect width="260" height="150" rx="8" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2" />
      <rect width="260" height="30" rx="8" fill="url(#mcGrad)" />
      <text x="130" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">2. Monte Carlo Algorithms</text>

      <text x="15" y="52" fill="#5b21b6" fontSize="10" fontWeight="bold">Runtime: Deterministic / Fixed</text>
      <text x="15" y="70" fill="#334155" fontSize="9">• Runs in guaranteed bounded time.</text>
      <text x="15" y="86" fill="#dc2626" fontSize="9" fontWeight="bold">Correctness: Probabilistic</text>
      <text x="15" y="102" fill="#334155" fontSize="9">• May produce incorrect result with probability ≤ ε.</text>
      <text x="15" y="122" fill="#6d28d9" fontSize="9" fontWeight="bold">Examples: Miller-Rabin Primality Testing,</text>
      <text x="15" y="136" fill="#6d28d9" fontSize="9">Fermat Primality Test, Karger’s Min-Cut Algorithm.</text>
    </g>
  </svg>
);

// 5. Metric TSP 2-Approximation (Twice-Around-the-Tree) Diagram
export const TSP2ApproxDiagram: React.FC = () => (
  <svg viewBox="0 0 680 300" className="w-full h-auto select-none font-sans">
    <defs>
      <marker id="arrowTour" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
      </marker>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Metric TSP 2-Approximation: Minimum Spanning Tree (MST) & Shortcut Tour
    </text>

    {/* Stage 1: MST */}
    <g transform="translate(40, 60)">
      <rect width="170" height="190" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="85" y="22" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">1. Compute MST (T)</text>

      {/* Nodes */}
      <circle cx="85" cy="55" r="12" fill="#3b82f6" />
      <text x="85" y="59" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">A</text>

      <circle cx="45" cy="110" r="12" fill="#3b82f6" />
      <text x="45" y="114" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">B</text>

      <circle cx="125" cy="110" r="12" fill="#3b82f6" />
      <text x="125" y="114" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">C</text>

      <circle cx="45" cy="165" r="12" fill="#3b82f6" />
      <text x="45" y="169" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">D</text>

      <circle cx="125" cy="165" r="12" fill="#3b82f6" />
      <text x="125" y="169" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">E</text>

      {/* MST Edges */}
      <line x1="85" y1="67" x2="45" y2="98" stroke="#1e40af" strokeWidth="2.5" />
      <line x1="85" y1="67" x2="125" y2="98" stroke="#1e40af" strokeWidth="2.5" />
      <line x1="45" y1="122" x2="45" y2="153" stroke="#1e40af" strokeWidth="2.5" />
      <line x1="125" y1="122" x2="125" y2="153" stroke="#1e40af" strokeWidth="2.5" />

      <text x="85" y="184" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">Cost(T) ≤ OPT</text>
    </g>

    {/* Stage 2: Euler Tour (Double Edges) */}
    <g transform="translate(255, 60)">
      <rect width="170" height="190" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="85" y="22" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">2. Full Euler Walk (2T)</text>

      <circle cx="85" cy="55" r="12" fill="#8b5cf6" />
      <text x="85" y="59" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">A</text>

      <circle cx="45" cy="110" r="12" fill="#8b5cf6" />
      <text x="45" y="114" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">B</text>

      <circle cx="125" cy="110" r="12" fill="#8b5cf6" />
      <text x="125" y="114" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">C</text>

      <circle cx="45" cy="165" r="12" fill="#8b5cf6" />
      <text x="45" y="169" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">D</text>

      <circle cx="125" cy="165" r="12" fill="#8b5cf6" />
      <text x="125" y="169" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">E</text>

      {/* Double Edges */}
      <line x1="82" y1="67" x2="42" y2="98" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="88" y1="67" x2="48" y2="98" stroke="#7c3aed" strokeWidth="2" />
      <line x1="82" y1="67" x2="122" y2="98" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="88" y1="67" x2="128" y2="98" stroke="#7c3aed" strokeWidth="2" />

      <text x="85" y="184" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="bold">Walk Cost = 2 · Cost(T)</text>
    </g>

    {/* Stage 3: Shortcut Hamiltonian Cycle */}
    <g transform="translate(470, 60)">
      <rect width="170" height="190" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="85" y="22" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">3. Shortcut Tour (H)</text>

      <circle cx="85" cy="55" r="12" fill="#10b981" />
      <text x="85" y="59" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">A</text>

      <circle cx="45" cy="110" r="12" fill="#10b981" />
      <text x="45" y="114" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">B</text>

      <circle cx="125" cy="110" r="12" fill="#10b981" />
      <text x="125" y="114" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">C</text>

      <circle cx="45" cy="165" r="12" fill="#10b981" />
      <text x="45" y="169" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">D</text>

      <circle cx="125" cy="165" r="12" fill="#10b981" />
      <text x="125" y="169" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">E</text>

      {/* Cycle Edges */}
      <line x1="85" y1="67" x2="45" y2="98" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowTour)" />
      <line x1="45" y1="122" x2="45" y2="153" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowTour)" />
      <line x1="45" y1="165" x2="125" y2="165" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowTour)" />
      <line x1="125" y1="153" x2="125" y2="122" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowTour)" />
      <line x1="125" y1="98" x2="85" y2="67" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowTour)" />

      <text x="85" y="184" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="bold">Cost(H) ≤ 2 · OPT</text>
    </g>

    {/* Bottom summary */}
    <rect x="40" y="262" width="600" height="26" rx="4" fill="#ecfdf5" stroke="#a7f3d0" />
    <text x="340" y="279" textAnchor="middle" fill="#065f46" fontSize="10" fontWeight="bold">
      Triangle Inequality Shortcut: dist(u, w) ≤ dist(u, v) + dist(v, w) guarantees Cost(H) ≤ 2 · Cost(MST) ≤ 2 · OPT.
    </text>
  </svg>
);

// 6. Real-Time Embedded Task Scheduling Architecture Diagram
export const EmbeddedSchedulerDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    <defs>
      <marker id="arrowQ" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
      </marker>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      Real-Time Embedded System Task Scheduling: Sleep, Ready & Deadline Priority Queues
    </text>

    {/* Queue 1: Sleep Queue */}
    <g transform="translate(30, 75)">
      <rect width="110" height="150" rx="6" fill="#ffffff" stroke="#64748b" strokeWidth="1.5" />
      <rect width="110" height="26" rx="6" fill="#f1f5f9" />
      <text x="55" y="17" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">Sleep Queue</text>
      <rect x="15" y="40" width="80" height="20" rx="3" fill="#e2e8f0" />
      <text x="55" y="54" textAnchor="middle" fill="#475569" fontSize="9">Task 4 (Timer)</text>
      <rect x="15" y="70" width="80" height="20" rx="3" fill="#e2e8f0" />
      <text x="55" y="84" textAnchor="middle" fill="#475569" fontSize="9">Task 5 (Event)</text>
      <text x="55" y="125" textAnchor="middle" fill="#64748b" fontSize="8">Awaiting Triggers</text>
    </g>

    <line x1="140" y1="150" x2="175" y2="150" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowQ)" />

    {/* Queue 2: Ready Queue */}
    <g transform="translate(180, 75)">
      <rect width="110" height="150" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
      <rect width="110" height="26" rx="6" fill="#eff6ff" />
      <text x="55" y="17" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Ready Queue</text>
      <rect x="15" y="40" width="80" height="20" rx="3" fill="#bfdbfe" />
      <text x="55" y="54" textAnchor="middle" fill="#1e3a8a" fontSize="9" fontWeight="bold">Task 1 (Sensor)</text>
      <rect x="15" y="70" width="80" height="20" rx="3" fill="#bfdbfe" />
      <text x="55" y="84" textAnchor="middle" fill="#1e3a8a" fontSize="9">Task 2 (Calc)</text>
      <rect x="15" y="100" width="80" height="20" rx="3" fill="#bfdbfe" />
      <text x="55" y="114" textAnchor="middle" fill="#1e3a8a" fontSize="9">Task 3 (Display)</text>
    </g>

    <line x1="290" y1="150" x2="325" y2="150" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowQ)" />

    {/* Queue 3: Deadlines / Priority Filter */}
    <g transform="translate(330, 75)">
      <rect width="120" height="150" rx="6" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" />
      <rect width="120" height="26" rx="6" fill="#fef3c7" />
      <text x="60" y="17" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Priority Filter</text>
      <rect x="15" y="40" width="90" height="22" rx="3" fill="#fde68a" />
      <text x="60" y="55" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="bold">P1: Vital Heart Rate</text>
      <rect x="15" y="70" width="90" height="22" rx="3" fill="#fef08a" />
      <text x="60" y="85" textAnchor="middle" fill="#78350f" fontSize="8">P2: Blood Pressure</text>
      <rect x="15" y="100" width="90" height="22" rx="3" fill="#fef9c3" />
      <text x="60" y="115" textAnchor="middle" fill="#78350f" fontSize="8">P3: Temperature</text>
    </g>

    <line x1="450" y1="150" x2="485" y2="150" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowQ)" />

    {/* Stage 4: CPU Execution & Blocked */}
    <g transform="translate(490, 75)">
      <rect width="150" height="70" rx="6" fill="#10b981" />
      <text x="75" y="32" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">CPU Executing</text>
      <text x="75" y="52" textAnchor="middle" fill="#d1fae5" fontSize="9">Highest Priority Task</text>

      <rect y="85" width="150" height="65" rx="6" fill="#ef4444" />
      <text x="75" y="115" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Blocked / Waiting</text>
      <text x="75" y="135" textAnchor="middle" fill="#fee2e2" fontSize="9">I/O or Mutual Exclusion</text>
    </g>

    {/* Bottom summary note */}
    <rect x="30" y="240" width="610" height="38" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="335" y="256" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">
      Fixed Priority (Rate Monotonic) vs Dynamic Priority (Earliest Deadline First):
    </text>
    <text x="335" y="271" textAnchor="middle" fill="#475569" fontSize="9">
      Tasks with strict hard deadlines preempt lower-priority tasks to ensure deterministic real-time response.
    </text>
  </svg>
);

// 7. Embedded In-Place Insertion Sort Memory Zone Diagram
export const EmbeddedInsertionSortDiagram: React.FC = () => (
  <svg viewBox="0 0 680 290" className="w-full h-auto select-none font-sans">
    <defs>
      <linearGradient id="sortedZone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="unsortedZone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
    </defs>

    {/* Title Header */}
    <rect x="20" y="10" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
    <text x="340" y="32" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
      In-Place Insertion Sort for Embedded Systems: Zero RAM Allocation & Adaptive Linear Best-Case
    </text>

    {/* Memory Array Layout */}
    <g transform="translate(60, 65)">
      {/* Indices */}
      <text x="35" y="-8" textAnchor="middle" fill="#64748b" fontSize="10">0</text>
      <text x="95" y="-8" textAnchor="middle" fill="#64748b" fontSize="10">1</text>
      <text x="155" y="-8" textAnchor="middle" fill="#64748b" fontSize="10">2</text>
      <text x="215" y="-8" textAnchor="middle" fill="#64748b" fontSize="10">3 (Key)</text>
      <text x="275" y="-8" textAnchor="middle" fill="#64748b" fontSize="10">4</text>
      <text x="335" y="-8" textAnchor="middle" fill="#64748b" fontSize="10">5</text>

      {/* Sorted Subarray A[0..2] */}
      <rect x="5" y="5" width="180" height="50" rx="4" fill="url(#sortedZone)" stroke="#047857" strokeWidth="2" />
      <text x="35" y="36" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">10</text>
      <line x1="65" y1="5" x2="65" y2="55" stroke="#ffffff" strokeWidth="1" />
      <text x="95" y="36" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">20</text>
      <line x1="125" y1="5" x2="125" y2="55" stroke="#ffffff" strokeWidth="1" />
      <text x="155" y="36" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">30</text>

      {/* Current Key Element temp = A[3] */}
      <rect x="190" y="5" width="50" height="50" rx="4" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
      <text x="215" y="36" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">15</text>

      {/* Unsorted Subarray A[4..5] */}
      <rect x="245" y="5" width="120" height="50" rx="4" fill="url(#unsortedZone)" stroke="#475569" strokeWidth="2" />
      <text x="275" y="36" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">50</text>
      <line x1="305" y1="5" x2="305" y2="55" stroke="#ffffff" strokeWidth="1" />
      <text x="335" y="36" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">40</text>

      {/* Zone Annotations */}
      <text x="95" y="75" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">Sorted Zone A[0..i-1]</text>
      <text x="215" y="75" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="bold">Key: temp=15</text>
      <text x="305" y="75" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Unsorted Zone A[i+1..n-1]</text>
    </g>

    {/* Right Explanatory Criteria */}
    <g transform="translate(460, 65)">
      <rect width="180" height="150" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="15" y="22" fill="#0f172a" fontSize="11" fontWeight="bold">Why Insertion Sort for IoT?</text>
      <text x="15" y="44" fill="#047857" fontSize="9" fontWeight="bold">1. In-Place: O(1) RAM</text>
      <text x="15" y="58" fill="#475569" fontSize="8">No dynamic heap allocation.</text>
      <text x="15" y="76" fill="#047857" fontSize="9" fontWeight="bold">2. Non-Recursive</text>
      <text x="15" y="90" fill="#475569" fontSize="8">Zero stack overflow danger.</text>
      <text x="15" y="108" fill="#047857" fontSize="9" fontWeight="bold">3. Adaptive O(n) Best Case</text>
      <text x="15" y="122" fill="#475569" fontSize="8">Near-sorted sensor streams.</text>
      <text x="15" y="140" fill="#047857" fontSize="9" fontWeight="bold">4. Tiny Code Footprint (ROM)</text>
    </g>

    {/* Bottom summary note */}
    <rect x="50" y="235" width="580" height="42" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="340" y="253" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">
      Optimal for Medical Vital Signs Stream: Data is continuous, temporal, and already nearly sorted in time.
    </text>
    <text x="340" y="268" textAnchor="middle" fill="#334155" fontSize="9">
      Insertion sort checks adjacent elements with single-comparison per item, achieving O(n) real-time streaming performance.
    </text>
  </svg>
);
