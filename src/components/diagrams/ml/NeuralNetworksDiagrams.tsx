import React from 'react';

interface DiagramProps {
  onHover?: (info: string | null) => void;
}

export const ActivationFunctionsDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 520 280" className="w-full h-auto select-none">
    {/* Grid */}
    <defs>
      <pattern id="grid-act" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-academic-200 dark:text-academic-800" />
      </pattern>
    </defs>
    <rect width="520" height="280" fill="url(#grid-act)" />

    {/* Axes */}
    <line x1="40" y1="160" x2="480" y2="160" stroke="#94a3b8" strokeWidth="2" />
    <line x1="260" y1="20" x2="260" y2="250" stroke="#94a3b8" strokeWidth="2" />

    {/* Axis Labels */}
    <text x="475" y="180" className="text-xs font-semibold fill-academic-600 dark:fill-academic-400">v (net input)</text>
    <text x="268" y="32" className="text-xs font-semibold fill-academic-600 dark:fill-academic-400">f(v) (activation)</text>

    {/* Reference guides */}
    <line x1="40" y1="80" x2="480" y2="80" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
    <text x="485" y="84" className="text-[10px] font-mono fill-academic-400">+1.0</text>

    <line x1="40" y1="240" x2="480" y2="240" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
    <text x="485" y="244" className="text-[10px] font-mono fill-academic-400">-1.0</text>

    {/* Sigmoid Curve (Blue): Range (0, 1), at v=0 f(0)=0.5 -> y = 160 - 0.5*80 = 120 */}
    <path
      d="M 60 158 Q 160 156 210 145 T 260 120 T 310 95 Q 360 84 460 82"
      fill="none"
      stroke="#2563eb"
      strokeWidth="3"
      className="cursor-pointer hover:stroke-width-4 transition-all"
      onMouseEnter={() => onHover?.('Sigmoid: f(v) = 1/(1+e^-v) | Range: (0, 1) | Smooth probability')}
      onMouseLeave={() => onHover?.(null)}
    />

    {/* Tanh Curve (Red dashed): Range (-1, 1), at v=0 f(0)=0 -> y = 160 */}
    <path
      d="M 60 238 Q 180 235 220 210 T 260 160 T 300 110 Q 340 85 460 82"
      fill="none"
      stroke="#dc2626"
      strokeWidth="2.5"
      strokeDasharray="5 3"
      className="cursor-pointer hover:stroke-width-4 transition-all"
      onMouseEnter={() => onHover?.('Tanh: f(v) = (e^v - e^-v)/(e^v + e^-v) | Range: (-1, 1) | Zero-centered')}
      onMouseLeave={() => onHover?.(null)}
    />

    {/* ReLU (Green dash-dot): 0 for v<=0, v for v>0 */}
    <path
      d="M 60 160 L 260 160 L 380 40"
      fill="none"
      stroke="#16a34a"
      strokeWidth="3"
      strokeDasharray="8 3 2 3"
      className="cursor-pointer hover:stroke-width-4 transition-all"
      onMouseEnter={() => onHover?.('ReLU: f(v) = max(0, v) | Range: [0, ∞) | Solves vanishing gradient for v>0')}
      onMouseLeave={() => onHover?.(null)}
    />

    {/* Legend Box */}
    <rect x="50" y="30" width="165" height="75" rx="6" className="fill-white/95 dark:fill-academic-900/95 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <line x1="60" y1="48" x2="85" y2="48" stroke="#2563eb" strokeWidth="3" />
    <text x="95" y="52" className="text-[10px] font-bold fill-blue-600">Sigmoid (0 to 1)</text>

    <line x1="60" y1="68" x2="85" y2="68" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 2" />
    <text x="95" y="72" className="text-[10px] font-bold fill-red-600">Tanh (-1 to +1)</text>

    <line x1="60" y1="88" x2="85" y2="88" stroke="#16a34a" strokeWidth="3" strokeDasharray="6 2" />
    <text x="95" y="92" className="text-[10px] font-bold fill-emerald-600">ReLU: max(0, v)</text>
  </svg>
);

export const ArtificialNeuronDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 260" className="w-full h-auto select-none">
    {/* Inputs */}
    {[
      { y: 35, label: 'x₁', w: 'w₁' },
      { y: 85, label: 'x₂', w: 'w₂' },
      { y: 135, label: 'x₃', w: 'w₃' },
      { y: 195, label: 'xₙ', w: 'wₙ' },
    ].map((inp, i) => (
      <g
        key={i}
        className="cursor-pointer"
        onMouseEnter={() => onHover?.(`Input ${inp.label} scaled by synaptic weight ${inp.w}`)}
        onMouseLeave={() => onHover?.(null)}
      >
        <circle cx="50" cy={inp.y} r="18" className="fill-academic-100 dark:fill-academic-800 stroke-academic-400" strokeWidth="1.5" />
        <text x="50" y={inp.y + 4} textAnchor="middle" className="text-xs font-bold fill-academic-800 dark:fill-academic-100">{inp.label}</text>
        <line x1="68" y1={inp.y} x2="200" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="125" y={inp.y < 120 ? inp.y + 15 : inp.y - 10} className="text-[10px] font-mono fill-blue-600 dark:fill-blue-400 font-bold">{inp.w}</text>
      </g>
    ))}
    <text x="50" y="165" textAnchor="middle" className="text-sm font-bold fill-academic-400">⋮</text>

    {/* Bias */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Bias b (x₀=+1): Horizontal activation offset preventing 0-passing constraint')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="120" y="15" width="70" height="28" rx="4" className="fill-amber-100 dark:fill-amber-950 stroke-amber-500" strokeWidth="1.5" />
      <text x="155" y="33" textAnchor="middle" className="text-[10px] font-bold fill-amber-900 dark:fill-amber-100">Bias b</text>
      <line x1="155" y1="43" x2="220" y2="100" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 2" />
    </g>

    {/* Summing Junction */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Summing Junction: Computes linear combination v = Σ(w_i * x_i) + b')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="230" cy="120" r="32" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
      <text x="230" y="126" textAnchor="middle" className="text-lg font-bold fill-blue-900 dark:fill-blue-100">∑</text>
      <text x="230" y="168" textAnchor="middle" className="text-[9px] font-mono fill-academic-500">v = Σwᵢxᵢ + b</text>
    </g>

    {/* Transfer line */}
    <line x1="262" y1="120" x2="330" y2="120" stroke="#2563eb" strokeWidth="2" />
    <text x="295" y="112" textAnchor="middle" className="text-[10px] font-mono font-bold fill-blue-600">v</text>

    {/* Activation Function Box */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Activation Function: Non-linear transfer mapping y = f(v)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="330" y="92" width="75" height="56" rx="6" className="fill-orange-100 dark:fill-orange-950 stroke-orange-600" strokeWidth="2" />
      <text x="367" y="125" textAnchor="middle" className="text-xs font-bold fill-orange-900 dark:fill-orange-100">f(v)</text>
      <text x="367" y="168" textAnchor="middle" className="text-[9px] font-mono fill-academic-500">Activation</text>
    </g>

    {/* Output Arrow */}
    <line x1="405" y1="120" x2="480" y2="120" stroke="#059669" strokeWidth="2.5" />
    <text x="500" y="125" className="text-sm font-bold fill-emerald-600">y</text>

    {/* Bottom summary note */}
    <rect x="40" y="225" width="460" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="239" textAnchor="middle" className="text-[10px] font-mono fill-academic-700 dark:fill-academic-300">
      Perceptron Formula: y = f( w₁x₁ + w₂x₂ + ... + wₙxₙ + b )
    </text>
  </svg>
);

export const MLPArchitectureDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* Input Layer (3 nodes) */}
    {[60, 130, 200].map((y, i) => (
      <g
        key={i}
        className="cursor-pointer"
        onMouseEnter={() => onHover?.(`Input Node x_${i+1}: Passes feature signal forward`)}
        onMouseLeave={() => onHover?.(null)}
      >
        <circle cx="80" cy={y} r="18" className="fill-gray-100 dark:fill-gray-800 stroke-gray-500" strokeWidth="1.5" />
        <text x="80" y={y + 4} textAnchor="middle" className="text-xs font-bold fill-gray-800 dark:fill-gray-200">x_{i+1}</text>
      </g>
    ))}
    <text x="80" y="30" textAnchor="middle" className="text-xs font-bold fill-academic-600 dark:fill-academic-400">Input Layer</text>

    {/* Hidden Layer (4 nodes) */}
    {[45, 105, 165, 225].map((y, i) => (
      <g
        key={i}
        className="cursor-pointer"
        onMouseEnter={() => onHover?.(`Hidden Node h_${i+1}: Non-linear transformation overcoming XOR linear inseparability`)}
        onMouseLeave={() => onHover?.(null)}
      >
        <circle cx="270" cy={y} r="18" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
        <text x="270" y={y + 4} textAnchor="middle" className="text-xs font-bold fill-blue-800 dark:fill-blue-200">h_{i+1}</text>
      </g>
    ))}
    <text x="270" y="25" textAnchor="middle" className="text-xs font-bold fill-blue-600">Hidden Layer</text>

    {/* Output Layer (2 nodes) */}
    {[95, 175].map((y, i) => (
      <g
        key={i}
        className="cursor-pointer"
        onMouseEnter={() => onHover?.(`Output Node y_${i+1}: Generates final prediction classification / regression`)}
        onMouseLeave={() => onHover?.(null)}
      >
        <circle cx="460" cy={y} r="18" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
        <text x="460" y={y + 4} textAnchor="middle" className="text-xs font-bold fill-emerald-800 dark:fill-emerald-200">y_{i+1}</text>
      </g>
    ))}
    <text x="460" y="65" textAnchor="middle" className="text-xs font-bold fill-emerald-600">Output Layer</text>

    {/* Connections: Input to Hidden */}
    {[60, 130, 200].map((y1) =>
      [45, 105, 165, 225].map((y2, j) => (
        <line key={`ih-${y1}-${j}`} x1="98" y1={y1} x2="252" y2={y2} stroke="#94a3b8" strokeWidth="0.8" opacity="0.6" />
      ))
    )}

    {/* Connections: Hidden to Output */}
    {[45, 105, 165, 225].map((y1) =>
      [95, 175].map((y2, j) => (
        <line key={`ho-${y1}-${j}`} x1="288" y1={y1} x2="442" y2={y2} stroke="#94a3b8" strokeWidth="0.8" opacity="0.6" />
      ))
    )}

    {/* Arrows for forward & backward flow */}
    <line x1="80" y1="255" x2="460" y2="255" stroke="#2563eb" strokeWidth="2" />
    <text x="270" y="250" textAnchor="middle" className="text-[9px] font-bold fill-blue-600">─── Feedforward Signal Propagation ───&gt;</text>

    <line x1="460" y1="270" x2="80" y2="270" stroke="#dc2626" strokeWidth="2" />
    <text x="270" y="278" textAnchor="middle" className="text-[9px] font-bold fill-red-600">&lt;─── Backpropagation Error Gradient Flow ───</text>
  </svg>
);

export const BackpropFlowDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 260" className="w-full h-auto select-none">
    {/* Nodes: Input -> Hidden -> Output -> Target */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Input node x_i: Provides training feature signal')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="60" cy="100" r="22" className="fill-gray-100 dark:fill-gray-800 stroke-gray-500" strokeWidth="1.5" />
      <text x="60" y="105" textAnchor="middle" className="text-xs font-bold fill-gray-800 dark:fill-gray-200">xᵢ</text>
    </g>

    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Hidden node z_j: Computes z_j = f(z_in,j)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="230" cy="100" r="22" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="230" y="105" textAnchor="middle" className="text-xs font-bold fill-blue-800 dark:fill-blue-200">zⱼ</text>
    </g>

    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Output node y_k: Computes y_k = f(y_in,k)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="400" cy="100" r="22" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
      <text x="400" y="105" textAnchor="middle" className="text-xs font-bold fill-emerald-800 dark:fill-emerald-200">yₖ</text>
    </g>

    {/* Target Node */}
    <rect x="475" y="82" width="45" height="36" rx="4" className="fill-academic-100 dark:fill-academic-800 stroke-academic-400" strokeWidth="1.5" />
    <text x="497" y="104" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">tₖ</text>

    {/* Forward Pass Lines (Blue) */}
    <line x1="82" y1="90" x2="208" y2="90" stroke="#2563eb" strokeWidth="2.5" />
    <text x="145" y="80" textAnchor="middle" className="text-[10px] font-bold fill-blue-600">wᵢⱼ</text>

    <line x1="252" y1="90" x2="378" y2="90" stroke="#2563eb" strokeWidth="2.5" />
    <text x="315" y="80" textAnchor="middle" className="text-[10px] font-bold fill-blue-600">vⱼₖ</text>

    <line x1="422" y1="100" x2="475" y2="100" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />

    {/* Backward Pass Lines (Red Deltas) */}
    <line x1="400" y1="135" x2="252" y2="135" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 2" />
    <text x="330" y="152" textAnchor="middle" className="text-[9px] font-mono font-bold fill-red-600">
      δₖ = (tₖ - yₖ)·f'(y_in,k)
    </text>

    <line x1="230" y1="165" x2="82" y2="165" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 2" />
    <text x="160" y="182" textAnchor="middle" className="text-[9px] font-mono font-bold fill-red-600">
      δⱼ = (∑ δₖ vⱼₖ)·f'(z_in,j)
    </text>

    {/* Phase Headings */}
    <text x="270" y="45" textAnchor="middle" className="text-xs font-bold fill-blue-700 dark:fill-blue-300">
      1. FORWARD PASS: Activation Signals (Inputs ──&gt; Outputs)
    </text>
    <text x="270" y="215" textAnchor="middle" className="text-xs font-bold fill-red-700 dark:fill-red-400">
      2. BACKWARD PASS: Delta Error Gradients via Calculus Chain Rule (Output ──&gt; Hidden)
    </text>

    {/* Bottom summary text */}
    <rect x="30" y="232" width="480" height="20" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="245" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Weight Updates: Δvⱼₖ = η·δₖ·zⱼ | Δwᵢⱼ = η·δⱼ·xᵢ
    </text>
  </svg>
);

export const RBFNetworkDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 260" className="w-full h-auto select-none">
    {/* Input Nodes */}
    {[70, 160].map((y, i) => (
      <g
        key={i}
        className="cursor-pointer"
        onMouseEnter={() => onHover?.(`Input node x_${i+1}: Passes raw unweighted features directly to RBF centers`)}
        onMouseLeave={() => onHover?.(null)}
      >
        <circle cx="60" cy={y} r="20" className="fill-gray-100 dark:fill-gray-800 stroke-gray-500" strokeWidth="1.5" />
        <text x="60" y={y + 5} textAnchor="middle" className="text-xs font-bold fill-gray-800 dark:fill-gray-200">x_{i+1}</text>
      </g>
    ))}
    <text x="60" y="35" textAnchor="middle" className="text-xs font-bold fill-academic-600 dark:fill-academic-400">Input Layer</text>

    {/* Hidden RBF Gaussian Nodes */}
    {[50, 115, 180].map((y, i) => (
      <g
        key={i}
        className="cursor-pointer"
        onMouseEnter={() => onHover?.(`RBF Unit φ_${i+1}: Gaussian basis centered at μ_${i+1}. Local response: exp(-||X - μ||² / 2σ²)`)}
        onMouseLeave={() => onHover?.(null)}
      >
        <circle cx="260" cy={y} r="22" className="fill-orange-100 dark:fill-orange-950 stroke-orange-600" strokeWidth="2" />
        <text x="260" y={y + 5} textAnchor="middle" className="text-xs font-bold fill-orange-900 dark:fill-orange-100">φ_{i+1}</text>
      </g>
    ))}
    <text x="260" y="20" textAnchor="middle" className="text-xs font-bold fill-orange-600">Hidden RBF Units (Gaussian)</text>

    {/* Output Linear Node */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Output Unit: Computes strictly linear combination y = Σ w_j * φ_j(X) + b')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="450" cy="115" r="24" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="2" />
      <text x="450" y="122" textAnchor="middle" className="text-base font-bold fill-emerald-900 dark:fill-emerald-100">∑</text>
    </g>
    <text x="450" y="70" textAnchor="middle" className="text-xs font-bold fill-emerald-600">Linear Output</text>
    <line x1="474" y1="115" x2="515" y2="115" stroke="#059669" strokeWidth="2" />
    <text x="525" y="119" className="text-xs font-bold fill-emerald-600">y</text>

    {/* Connections: Input to Hidden (Direct, unweighted) */}
    {[70, 160].map((y1) =>
      [50, 115, 180].map((y2, j) => (
        <line key={`ih-${y1}-${j}`} x1="80" y1={y1} x2="238" y2={y2} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
      ))
    )}

    {/* Connections: Hidden to Output (Trainable linear weights w_j) */}
    {[50, 115, 180].map((y1, i) => (
      <g key={`ho-${i}`}>
        <line x1="282" y1={y1} x2="426" y2="115" stroke="#059669" strokeWidth="2" />
        <text x="350" y={y1 < 115 ? y1 + 10 : y1 - 5} className="text-[10px] font-mono font-bold fill-emerald-600">w_{i+1}</text>
      </g>
    ))}

    {/* Bottom summary text */}
    <rect x="30" y="225" width="480" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="239" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Two-Stage Training: 1. k-means for cluster centers μⱼ | 2. Least squares / pseudo-inverse for weights wⱼ
    </text>
  </svg>
);

export const FLANNArchitectureDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 250" className="w-full h-auto select-none">
    {/* Inputs */}
    <circle cx="45" cy="80" r="18" className="fill-gray-100 dark:fill-gray-800 stroke-gray-500" strokeWidth="1.5" />
    <text x="45" y="85" textAnchor="middle" className="text-xs font-bold fill-gray-800 dark:fill-gray-200">x₁</text>

    <circle cx="45" cy="140" r="18" className="fill-gray-100 dark:fill-gray-800 stroke-gray-500" strokeWidth="1.5" />
    <text x="45" y="145" textAnchor="middle" className="text-xs font-bold fill-gray-800 dark:fill-gray-200">x₂</text>

    <line x1="63" y1="80" x2="110" y2="100" stroke="#94a3b8" strokeWidth="1.5" />
    <line x1="63" y1="140" x2="110" y2="120" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Functional Expansion Box */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Functional Expansion: Expands [x_1, x_2] into [x_1, sin(πx_1), cos(πx_1), x_2, sin(πx_2), x_1*x_2]')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="110" y="45" width="130" height="130" rx="8" className="fill-amber-100 dark:fill-amber-950/70 stroke-amber-500" strokeWidth="2" />
      <text x="175" y="70" textAnchor="middle" className="text-xs font-bold fill-amber-900 dark:fill-amber-100">Functional</text>
      <text x="175" y="85" textAnchor="middle" className="text-xs font-bold fill-amber-900 dark:fill-amber-100">Expansion Φ(X)</text>
      <text x="175" y="110" textAnchor="middle" className="text-[8px] font-mono fill-amber-700 dark:fill-amber-300">Trigonometric /</text>
      <text x="175" y="122" textAnchor="middle" className="text-[8px] font-mono fill-amber-700 dark:fill-amber-300">Polynomial Basis</text>
      <text x="175" y="145" textAnchor="middle" className="text-[8px] font-bold fill-emerald-600">No Hidden Layers!</text>
    </g>

    {/* Expanded Feature Lines */}
    {[60, 90, 130, 160].map((y, i) => (
      <line key={i} x1="240" y1={y} x2="350" y2="110" stroke="#2563eb" strokeWidth="1.5" />
    ))}
    <text x="270" y="55" className="text-[8px] font-mono fill-blue-600">x₁</text>
    <text x="270" y="85" className="text-[8px] font-mono fill-blue-600">sin(πx₁)</text>
    <text x="270" y="135" className="text-[8px] font-mono fill-blue-600">cos(πx₂)</text>
    <text x="270" y="165" className="text-[8px] font-mono fill-blue-600">x₁·x₂</text>

    {/* Single Summing & Activation Unit */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Single Layer Output: Computes y = f( Σ w_j * Φ_j(X) ); convex error surface, no local minima!')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="370" cy="110" r="22" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
      <text x="370" y="116" textAnchor="middle" className="text-sm font-bold fill-blue-900 dark:fill-blue-100">∑</text>

      <rect x="420" y="92" width="45" height="36" rx="4" className="fill-orange-100 dark:fill-orange-950 stroke-orange-600" strokeWidth="1.5" />
      <text x="442" y="114" textAnchor="middle" className="text-xs font-bold fill-orange-900 dark:fill-orange-100">f(·)</text>
    </g>

    <line x1="392" y1="110" x2="420" y2="110" stroke="#2563eb" strokeWidth="2" />
    <line x1="465" y1="110" x2="505" y2="110" stroke="#059669" strokeWidth="2" />
    <text x="515" y="114" className="text-xs font-bold fill-emerald-600">ŷ</text>

    {/* Bottom summary text */}
    <rect x="30" y="210" width="480" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="224" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      FLANN Advantages: Faster convergence | Convex error surface | Zero local minima trapping
    </text>
  </svg>
);

export const RNNUnfoldedDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 270" className="w-full h-auto select-none">
    {/* Left: Folded Representation */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Folded RNN: Recurrent loop feeds hidden state back into itself at every time step')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="25" y="25" width="100" height="200" rx="8" className="fill-academic-50 dark:fill-academic-900/50 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1.5" />
      <text x="75" y="45" textAnchor="middle" className="text-[11px] font-bold fill-academic-700 dark:fill-academic-300">Folded Model</text>

      {/* Input */}
      <circle cx="75" cy="190" r="16" className="fill-gray-100 dark:fill-gray-800 stroke-gray-500" />
      <text x="75" y="194" textAnchor="middle" className="text-[10px] font-bold fill-gray-800 dark:fill-gray-200">xₜ</text>

      {/* Hidden with Recurrent Loop */}
      <rect x="55" y="110" width="40" height="40" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
      <text x="75" y="134" textAnchor="middle" className="text-xs font-bold fill-blue-900 dark:fill-blue-100">hₜ</text>

      {/* Self loop */}
      <path d="M 95 125 C 125 105, 125 155, 98 140" fill="none" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow-red)" />
      <text x="120" y="134" className="text-[8px] font-mono font-bold fill-red-600">W_hh</text>

      {/* Output */}
      <circle cx="75" cy="65" r="16" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" />
      <text x="75" y="69" textAnchor="middle" className="text-[10px] font-bold fill-emerald-800 dark:fill-emerald-200">yₜ</text>

      <line x1="75" y1="174" x2="75" y2="150" stroke="#2563eb" strokeWidth="1.5" />
      <line x1="75" y1="110" x2="75" y2="81" stroke="#059669" strokeWidth="1.5" />
    </g>

    {/* Unfolding Big Arrow */}
    <text x="145" y="130" className="text-xl font-bold fill-academic-400">⟹</text>

    {/* Right: Unfolded Across Time Steps (t-1, t, t+1) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Unfolded Graph: Computation across sequential time steps. Shared parameters W_xh, W_hh, W_hy.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="175" y="25" width="345" height="200" rx="8" className="fill-blue-50/50 dark:fill-blue-950/20 stroke-blue-400" strokeWidth="1.5" />
      <text x="347" y="45" textAnchor="middle" className="text-[11px] font-bold fill-blue-800 dark:fill-blue-200">
        Time-Unfolded Computational Graph
      </text>

      {[
        { x: 230, t: 't-1' },
        { x: 345, t: 't' },
        { x: 460, t: 't+1' },
      ].map((step, i) => (
        <g key={i}>
          {/* Input */}
          <circle cx={step.x} cy="190" r="16" className="fill-gray-100 dark:fill-gray-800 stroke-gray-500" />
          <text x={step.x} y="194" textAnchor="middle" className="text-[9px] font-bold fill-gray-800 dark:fill-gray-200">x_{step.t}</text>

          {/* Hidden */}
          <rect x={step.x - 20} y="110" width="40" height="40" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
          <text x={step.x} y="134" textAnchor="middle" className="text-xs font-bold fill-blue-900 dark:fill-blue-100">h_{step.t}</text>

          {/* Output */}
          <circle cx={step.x} cy="65" r="16" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" />
          <text x={step.x} y="69" textAnchor="middle" className="text-[9px] font-bold fill-emerald-800 dark:fill-emerald-200">y_{step.t}</text>

          <line x1={step.x} y1="174" x2={step.x} y2="150" stroke="#2563eb" strokeWidth="1.5" />
          <line x1={step.x} y1="110" x2={step.x} y2="81" stroke="#059669" strokeWidth="1.5" />
        </g>
      ))}

      {/* Recurrent Links between Hidden States (Red) */}
      <line x1="250" y1="130" x2="325" y2="130" stroke="#dc2626" strokeWidth="2.5" />
      <text x="287" y="122" textAnchor="middle" className="text-[9px] font-mono font-bold fill-red-600">W_hh</text>

      <line x1="365" y1="130" x2="440" y2="130" stroke="#dc2626" strokeWidth="2.5" />
      <text x="402" y="122" textAnchor="middle" className="text-[9px] font-mono font-bold fill-red-600">W_hh</text>
    </g>

    {/* Bottom summary text */}
    <rect x="25" y="235" width="495" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="249" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      State Equation: hₜ = tanh( W_hh · hₜ₋₁ + W_xh · xₜ + b_h ) | Parameters shared across all time steps
    </text>
  </svg>
);

export const CNNPipelineDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 250" className="w-full h-auto select-none">
    {/* 1. Input Image */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Input Image: 2D grid matrix (e.g. 32x32x3 RGB)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="15" y="65" width="45" height="75" rx="4" className="fill-gray-100 dark:fill-gray-800 stroke-gray-500" strokeWidth="1.5" />
      <text x="37" y="105" textAnchor="middle" className="text-[9px] font-bold fill-academic-800 dark:fill-academic-200">Image</text>
      <text x="37" y="120" textAnchor="middle" className="text-[7px] font-mono fill-academic-500">32×32</text>
    </g>

    <line x1="62" y1="102" x2="80" y2="102" stroke="#94a3b8" strokeWidth="1.5" />

    {/* 2. Conv + ReLU 1 */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Conv Layer 1: Learnable filter kernels convolve over image with shared weights')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="80" y="55" width="55" height="95" rx="4" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="107" y="98" textAnchor="middle" className="text-[9px] font-bold fill-blue-900 dark:fill-blue-100">Conv1</text>
      <text x="107" y="112" textAnchor="middle" className="text-[7px] font-mono fill-blue-700">+ ReLU</text>
    </g>

    <line x1="137" y1="102" x2="155" y2="102" stroke="#94a3b8" strokeWidth="1.5" />

    {/* 3. Max Pooling 1 */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Max Pooling 1: Downsamples spatial dimensions by 75% (2x2 filter, stride 2)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="155" y="70" width="45" height="65" rx="4" className="fill-orange-100 dark:fill-orange-950 stroke-orange-600" strokeWidth="1.5" />
      <text x="177" y="102" textAnchor="middle" className="text-[8px] font-bold fill-orange-900 dark:fill-orange-100">Pool1</text>
      <text x="177" y="115" textAnchor="middle" className="text-[7px] font-mono fill-orange-700">Max</text>
    </g>

    <line x1="202" y1="102" x2="220" y2="102" stroke="#94a3b8" strokeWidth="1.5" />

    {/* 4. Conv + ReLU 2 */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Conv Layer 2: Deeper abstract feature extraction (textures, parts)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="220" y="60" width="55" height="85" rx="4" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="247" y="98" textAnchor="middle" className="text-[9px] font-bold fill-blue-900 dark:fill-blue-100">Conv2</text>
      <text x="247" y="112" textAnchor="middle" className="text-[7px] font-mono fill-blue-700">+ ReLU</text>
    </g>

    <line x1="277" y1="102" x2="295" y2="102" stroke="#94a3b8" strokeWidth="1.5" />

    {/* 5. Max Pooling 2 */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Max Pooling 2: Second spatial downsampling providing translation invariance')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="295" y="75" width="45" height="55" rx="4" className="fill-orange-100 dark:fill-orange-950 stroke-orange-600" strokeWidth="1.5" />
      <text x="317" y="102" textAnchor="middle" className="text-[8px] font-bold fill-orange-900 dark:fill-orange-100">Pool2</text>
      <text x="317" y="115" textAnchor="middle" className="text-[7px] font-mono fill-orange-700">Max</text>
    </g>

    <line x1="342" y1="102" x2="360" y2="102" stroke="#94a3b8" strokeWidth="1.5" />

    {/* 6. Flattening */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Flattening: Unrolls 2D feature maps into a single 1D vector')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="360" y="55" width="25" height="95" rx="4" className="fill-teal-100 dark:fill-teal-950 stroke-teal-600" strokeWidth="1.5" />
      <text x="372" y="105" textAnchor="middle" className="text-[8px] font-bold fill-teal-900 dark:fill-teal-100" transform="rotate(-90 372 105)">Flatten</text>
    </g>

    <line x1="387" y1="102" x2="405" y2="102" stroke="#94a3b8" strokeWidth="1.5" />

    {/* 7. Dense Fully Connected */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Fully Connected (Dense): Standard multi-layer dense classification layer')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="405" y="65" width="45" height="75" rx="4" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="1.5" />
      <text x="427" y="105" textAnchor="middle" className="text-[9px] font-bold fill-purple-900 dark:fill-purple-100">Dense</text>
      <text x="427" y="120" textAnchor="middle" className="text-[7px] font-mono fill-purple-700">FC Layer</text>
    </g>

    <line x1="452" y1="102" x2="475" y2="102" stroke="#94a3b8" strokeWidth="1.5" />

    {/* 8. Softmax Output */}
    <circle cx="495" cy="102" r="18" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="2" />
    <text x="495" y="106" textAnchor="middle" className="text-[8px] font-bold fill-emerald-800 dark:fill-emerald-100">Softmax</text>

    {/* Bottom summary text */}
    <rect x="25" y="185" width="490" height="35" rx="6" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="202" textAnchor="middle" className="text-[10px] font-semibold fill-academic-800 dark:fill-academic-200">
      Feature Extraction (Conv + ReLU + Pooling) ──&gt; Classification (Flatten + Dense + Softmax)
    </text>
    <text x="270" y="215" textAnchor="middle" className="text-[9px] font-mono fill-academic-500">
      Core CNN Principles: Local Receptive Fields | Shared Filter Weights | Spatial Downsampling
    </text>
  </svg>
);

export const MaxPoolingDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 520 220" className="w-full h-auto select-none">
    {/* 4x4 Input Matrix */}
    <text x="120" y="25" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">4×4 Input Feature Map</text>
    
    {/* Top-left quadrant (Orange max 6) */}
    <rect x="40" y="35" width="40" height="40" className="fill-orange-50 dark:fill-orange-950/40 stroke-orange-300" />
    <text x="60" y="60" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">1</text>
    <rect x="80" y="35" width="40" height="40" className="fill-orange-50 dark:fill-orange-950/40 stroke-orange-300" />
    <text x="100" y="60" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">3</text>
    <rect x="40" y="75" width="40" height="40" className="fill-orange-50 dark:fill-orange-950/40 stroke-orange-300" />
    <text x="60" y="100" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">5</text>
    <rect x="80" y="75" width="40" height="40" className="fill-orange-200 dark:fill-orange-900 stroke-orange-500" strokeWidth="2" />
    <text x="100" y="100" textAnchor="middle" className="text-xs font-bold fill-orange-950 dark:fill-orange-100">6★</text>

    {/* Top-right quadrant (Blue max 4) */}
    <rect x="120" y="35" width="40" height="40" className="fill-blue-50 dark:fill-blue-950/40 stroke-blue-300" />
    <text x="140" y="60" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">2</text>
    <rect x="160" y="35" width="40" height="40" className="fill-blue-200 dark:fill-blue-900 stroke-blue-500" strokeWidth="2" />
    <text x="180" y="60" textAnchor="middle" className="text-xs font-bold fill-blue-950 dark:fill-blue-100">4★</text>
    <rect x="120" y="75" width="40" height="40" className="fill-blue-50 dark:fill-blue-950/40 stroke-blue-300" />
    <text x="140" y="100" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">1</text>
    <rect x="160" y="75" width="40" height="40" className="fill-blue-50 dark:fill-blue-950/40 stroke-blue-300" />
    <text x="180" y="100" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">0</text>

    {/* Bottom-left quadrant (Teal max 3) */}
    <rect x="40" y="115" width="40" height="40" className="fill-teal-50 dark:fill-teal-950/40 stroke-teal-300" />
    <text x="60" y="140" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">2</text>
    <rect x="80" y="115" width="40" height="40" className="fill-teal-50 dark:fill-teal-950/40 stroke-teal-300" />
    <text x="100" y="140" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">1</text>
    <rect x="40" y="155" width="40" height="40" className="fill-teal-50 dark:fill-teal-950/40 stroke-teal-300" />
    <text x="60" y="180" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">0</text>
    <rect x="80" y="155" width="40" height="40" className="fill-teal-200 dark:fill-teal-900 stroke-teal-500" strokeWidth="2" />
    <text x="100" y="180" textAnchor="middle" className="text-xs font-bold fill-teal-950 dark:fill-teal-100">3★</text>

    {/* Bottom-right quadrant (Purple max 8) */}
    <rect x="120" y="115" width="40" height="40" className="fill-purple-200 dark:fill-purple-900 stroke-purple-500" strokeWidth="2" />
    <text x="140" y="140" textAnchor="middle" className="text-xs font-bold fill-purple-950 dark:fill-purple-100">8★</text>
    <rect x="160" y="115" width="40" height="40" className="fill-purple-50 dark:fill-purple-950/40 stroke-purple-300" />
    <text x="180" y="140" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">3</text>
    <rect x="120" y="155" width="40" height="40" className="fill-purple-50 dark:fill-purple-950/40 stroke-purple-300" />
    <text x="140" y="180" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">2</text>
    <rect x="160" y="155" width="40" height="40" className="fill-purple-50 dark:fill-purple-950/40 stroke-purple-300" />
    <text x="180" y="180" textAnchor="middle" className="text-xs fill-academic-700 dark:fill-academic-300">1</text>

    {/* Operation Arrow */}
    <line x1="225" y1="115" x2="295" y2="115" stroke="#94a3b8" strokeWidth="2.5" />
    <text x="260" y="105" textAnchor="middle" className="text-[10px] font-bold fill-academic-600 dark:fill-academic-400">2×2 Max Pool</text>
    <text x="260" y="132" textAnchor="middle" className="text-[9px] font-mono fill-academic-500">Stride = 2</text>

    {/* 2x2 Pooled Output Matrix */}
    <text x="380" y="45" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">2×2 Output Matrix</text>

    <rect x="330" y="65" width="50" height="50" className="fill-orange-200 dark:fill-orange-900 stroke-orange-500" strokeWidth="2" />
    <text x="355" y="95" textAnchor="middle" className="text-sm font-bold fill-orange-950 dark:fill-orange-100">6</text>

    <rect x="380" y="65" width="50" height="50" className="fill-blue-200 dark:fill-blue-900 stroke-blue-500" strokeWidth="2" />
    <text x="405" y="95" textAnchor="middle" className="text-sm font-bold fill-blue-950 dark:fill-blue-100">4</text>

    <rect x="330" y="115" width="50" height="50" className="fill-teal-200 dark:fill-teal-900 stroke-teal-500" strokeWidth="2" />
    <text x="355" y="145" textAnchor="middle" className="text-sm font-bold fill-teal-950 dark:fill-teal-100">3</text>

    <rect x="380" y="115" width="50" height="50" className="fill-purple-200 dark:fill-purple-900 stroke-purple-500" strokeWidth="2" />
    <text x="405" y="145" textAnchor="middle" className="text-sm font-bold fill-purple-950 dark:fill-purple-100">8</text>

    {/* Bottom summary note */}
    <text x="260" y="210" textAnchor="middle" className="text-[10px] font-mono fill-academic-500">
      Area reduced by 75% | Preserves strongest activations | Translational invariance
    </text>
  </svg>
);

export const CNNPaddingDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 520 250" className="w-full h-auto select-none">
    {/* Zero-padded 6x6 border grid surrounding 4x4 image */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Zero Padding (P=1): Surrounds 4x4 image with zeros to expand dimension to 6x6')}
      onMouseLeave={() => onHover?.(null)}
    >
      {/* 6x6 Grid */}
      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => {
          const isBorder = row === 0 || row === 5 || col === 0 || col === 5;
          const x = 70 + col * 32;
          const y = 30 + row * 32;
          return (
            <g key={`${row}-${col}`}>
              <rect
                x={x}
                y={y}
                width="32"
                height="32"
                className={isBorder ? 'fill-red-50 dark:fill-red-950/40 stroke-red-300' : 'fill-blue-100 dark:fill-blue-900/60 stroke-blue-500'}
                strokeWidth={isBorder ? 1 : 1.5}
              />
              <text
                x={x + 16}
                y={y + 20}
                textAnchor="middle"
                className={`text-xs ${isBorder ? 'font-mono fill-red-500 font-semibold' : 'font-bold fill-blue-900 dark:fill-blue-100'}`}
              >
                {isBorder ? '0' : `x${row}${col}`}
              </text>
            </g>
          );
        })
      )}
    </g>

    {/* Legend & Details on Right */}
    <g transform="translate(300, 35)">
      <rect width="195" height="170" rx="8" className="fill-academic-50 dark:fill-academic-900/60 stroke-academic-200 dark:stroke-academic-800" />
      <text x="15" y="25" className="text-xs font-bold fill-academic-800 dark:fill-academic-200">Padding Specifications</text>

      <circle cx="22" cy="48" r="5" fill="#ef4444" />
      <text x="35" y="52" className="text-[10px] font-semibold fill-red-600">Zero Padding Border (P = 1)</text>

      <circle cx="22" cy="72" r="5" fill="#2563eb" />
      <text x="35" y="76" className="text-[10px] font-semibold fill-blue-600">Original 4×4 Image</text>

      <text x="15" y="105" className="text-[10px] font-bold fill-academic-700 dark:fill-academic-300">Why Padding is Required:</text>
      <text x="15" y="122" className="text-[9px] fill-academic-600 dark:fill-academic-400">1. Prevents spatial shrinking across layers</text>
      <text x="15" y="137" className="text-[9px] fill-academic-600 dark:fill-academic-400">2. Prevents loss of border/edge features</text>

      <text x="15" y="158" className="text-[9px] font-mono fill-emerald-600 font-semibold">Same Padding: P = (F - 1) / 2</text>
    </g>

    {/* Bottom summary note */}
    <text x="260" y="240" textAnchor="middle" className="text-[10px] font-mono fill-academic-500">
      Formula: W_out = floor((W - F + 2P)/S) + 1 | With Same Padding, Output Size = Input Size
    </text>
  </svg>
);
