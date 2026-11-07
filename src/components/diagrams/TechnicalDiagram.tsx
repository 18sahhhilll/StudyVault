import React, { useState } from 'react';
import { Maximize2, Minimize2, ZoomIn, Info } from 'lucide-react';
import { DiagramData } from '@/types';
import {
  ByzantineGeneralsDiagram,
  IotaTangleDiagram,
  BlockchainTypesDiagram,
  CordaArchitectureDiagram,
  HyperledgerFabricDiagram,
  PoWvsPoSDiagram
} from './blockchain/BlockchainPlatformsDiagrams';
import {
  BitcoinMiningWorkflowDiagram,
  CryptoWalletsDiagram,
  CustodialVsNonCustodialDiagram,
  CoinVsTokenDiagram,
  ZerocashProofDiagram
} from './blockchain/CryptoWalletsDiagrams';
import {
  EthereumStackDiagram,
  SmartContractLifecycleDiagram,
  GasExecutionDiagram,
  EVMArchitectureDiagram,
  SwarmStorageDiagram,
  WhisperMessagingDiagram
} from './blockchain/EthereumSolidityDiagrams';
import {
  SupplyChainDiagram,
  DigitalIdentityDiagram,
  HealthcareEHRDiagram,
  P2PEnergyTradingDiagram,
  BlockchainVotingDiagram
} from './blockchain/CaseStudiesDiagrams';
import {
  ActivationFunctionsDiagram,
  ArtificialNeuronDiagram,
  MLPArchitectureDiagram,
  BackpropFlowDiagram,
  RBFNetworkDiagram,
  FLANNArchitectureDiagram,
  RNNUnfoldedDiagram,
  CNNPipelineDiagram,
  MaxPoolingDiagram,
  CNNPaddingDiagram
} from './ml/NeuralNetworksDiagrams';
import {
  GreedyStrategyDiagram,
  FractionalKnapsackDiagram,
  JobSequencingDiagram,
  PrincipleOfOptimalityDiagram,
  MatrixChainDiagram,
  OBSTDiagram,
  ActivitySelectionDiagram
} from './daa/DAADiagrams';
import {
  BacktrackingStateSpaceTreeDiagram,
  NQueensChessboardDiagram,
  GraphColoringDiagram,
  SubsetSumTreeDiagram,
  BranchBoundStrategiesDiagram,
  TSPReducedMatrixDiagram,
  KnapsackBranchBoundDiagram
} from './daa/DAAUnit4Diagrams';
import {
  AmortizedStackDiagram,
  BinaryCounterDiagram,
  ComplexityClassesDiagram,
  RandomizedAlgorithmsDiagram,
  TSP2ApproxDiagram,
  EmbeddedSchedulerDiagram,
  EmbeddedInsertionSortDiagram
} from './daa/DAAUnit5Diagrams';

interface TechnicalDiagramProps {
  diagram: DiagramData;
}

export const TechnicalDiagram: React.FC<TechnicalDiagramProps> = ({ diagram }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const renderSVGContent = () => {
    switch (diagram.svgType) {
      case 'linear-regression':
        return (
          <svg viewBox="0 0 500 320" className="w-full h-auto select-none">
            {/* Grid */}
            <defs>
              <pattern id="grid-lr" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-academic-200 dark:text-academic-800" />
              </pattern>
            </defs>
            <rect width="500" height="320" fill="url(#grid-lr)" />

            {/* Axes */}
            <line x1="50" y1="280" x2="470" y2="280" stroke="currentColor" strokeWidth="2" className="text-academic-700 dark:text-academic-300" markerEnd="url(#arrow)" />
            <line x1="50" y1="280" x2="50" y2="30" stroke="currentColor" strokeWidth="2" className="text-academic-700 dark:text-academic-300" />
            
            {/* Axis Labels */}
            <text x="440" y="305" className="text-xs font-medium fill-academic-600 dark:fill-academic-400">x (Independent)</text>
            <text x="20" y="25" className="text-xs font-medium fill-academic-600 dark:fill-academic-400">y (Dependent)</text>

            {/* Regression Line */}
            <line x1="60" y1="250" x2="450" y2="60" stroke="#ef4444" strokeWidth="3" />
            <text x="360" y="50" className="text-xs font-semibold fill-red-600 dark:fill-red-400">ŷ = mx + b (Best-fit line)</text>

            {/* Residuals (Vertical dashed lines) */}
            {[
              { x: 100, y: 220, yLine: 230 },
              { x: 150, y: 185, yLine: 206 },
              { x: 200, y: 195, yLine: 182 },
              { x: 250, y: 135, yLine: 157 },
              { x: 300, y: 140, yLine: 133 },
              { x: 350, y: 95, yLine: 109 },
              { x: 400, y: 100, yLine: 84 },
            ].map((pt, i) => (
              <g key={i}>
                <line x1={pt.x} y1={pt.y} x2={pt.x} y2={pt.yLine} stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="5"
                  className="fill-blue-600 dark:fill-blue-400 cursor-pointer transition-transform hover:scale-125"
                  onMouseEnter={() => setHoveredElement(`Observed point (${pt.x}, ${pt.y}) | Residual e = ${(pt.yLine - pt.y).toFixed(1)}`)}
                  onMouseLeave={() => setHoveredElement(null)}
                />
              </g>
            ))}

            {/* Legend / Callout */}
            <rect x="70" y="50" width="170" height="60" rx="6" className="fill-white/90 dark:fill-academic-900/90 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
            <circle cx="85" cy="70" r="4" fill="#2563eb" />
            <text x="98" y="74" className="text-xs fill-academic-700 dark:fill-academic-300 font-medium">Observed Data Point</text>
            <line x1="80" y1="92" x2="92" y2="92" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="98" y="95" className="text-xs fill-academic-700 dark:fill-academic-300 font-medium">Residual (Error eᵢ = yᵢ - ŷᵢ)</text>
          </svg>
        );

      case 'fit-comparison':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Underfitting */}
            <div className="p-3 bg-academic-50 dark:bg-academic-900 rounded-lg border border-academic-200 dark:border-academic-800 text-center">
              <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider block mb-1">Underfitting</span>
              <p className="text-[11px] text-academic-500 mb-2">High Bias, Low Variance (Too Simple)</p>
              <svg viewBox="0 0 160 120" className="w-full h-auto">
                <line x1="15" y1="105" x2="150" y2="105" stroke="currentColor" strokeWidth="1.5" className="text-academic-400" />
                <line x1="15" y1="105" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" className="text-academic-400" />
                {[[25, 90], [50, 60], [75, 70], [100, 40], [125, 50], [145, 25]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" fill="#3b82f6" />
                ))}
                {/* Horizontal rigid line */}
                <line x1="15" y1="60" x2="150" y2="60" stroke="#ef4444" strokeWidth="2.5" />
              </svg>
            </div>
            {/* Good Fit */}
            <div className="p-3 bg-academic-50 dark:bg-academic-900 rounded-lg border border-emerald-300 dark:border-emerald-800/60 text-center">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">Good Fit (Optimal)</span>
              <p className="text-[11px] text-academic-500 mb-2">Balanced Bias & Variance (Generalizes)</p>
              <svg viewBox="0 0 160 120" className="w-full h-auto">
                <line x1="15" y1="105" x2="150" y2="105" stroke="currentColor" strokeWidth="1.5" className="text-academic-400" />
                <line x1="15" y1="105" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" className="text-academic-400" />
                {[[25, 90], [50, 60], [75, 70], [100, 40], [125, 50], [145, 25]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" fill="#3b82f6" />
                ))}
                {/* Smooth quadratic curve */}
                <path d="M 20 95 Q 80 70 145 25" fill="none" stroke="#10b981" strokeWidth="2.5" />
              </svg>
            </div>
            {/* Overfitting */}
            <div className="p-3 bg-academic-50 dark:bg-academic-900 rounded-lg border border-academic-200 dark:border-academic-800 text-center">
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">Overfitting</span>
              <p className="text-[11px] text-academic-500 mb-2">Low Bias, High Variance (Memorizes Noise)</p>
              <svg viewBox="0 0 160 120" className="w-full h-auto">
                <line x1="15" y1="105" x2="150" y2="105" stroke="currentColor" strokeWidth="1.5" className="text-academic-400" />
                <line x1="15" y1="105" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" className="text-academic-400" />
                {[[25, 90], [50, 60], [75, 70], [100, 40], [125, 50], [145, 25]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" fill="#3b82f6" />
                ))}
                {/* Wildly oscillating polynomial passing through every point */}
                <path d="M 15 102 C 20 85 22 92 25 90 C 35 80 40 40 50 60 C 60 75 70 85 75 70 C 85 45 92 30 100 40 C 110 55 118 65 125 50 C 135 30 140 15 145 25" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        );

      case 'bias-variance':
        return (
          <svg viewBox="0 0 500 300" className="w-full h-auto select-none">
            {/* Axes */}
            <line x1="50" y1="260" x2="470" y2="260" stroke="currentColor" strokeWidth="2" className="text-academic-700 dark:text-academic-300" />
            <line x1="50" y1="260" x2="50" y2="30" stroke="currentColor" strokeWidth="2" className="text-academic-700 dark:text-academic-300" />
            <text x="430" y="285" className="text-xs font-semibold fill-academic-600 dark:fill-academic-400">Model Complexity</text>
            <text x="15" y="25" className="text-xs font-semibold fill-academic-600 dark:fill-academic-400">Error</text>

            {/* Bias^2 Curve (Decreasing) */}
            <path d="M 60 50 C 120 70 180 200 450 250" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
            <text x="390" y="240" className="text-xs font-semibold fill-blue-600 dark:fill-blue-400">Bias²</text>

            {/* Variance Curve (Increasing) */}
            <path d="M 60 250 C 180 240 320 200 450 50" fill="none" stroke="#f97316" strokeWidth="2.5" />
            <text x="410" y="70" className="text-xs font-semibold fill-orange-600 dark:fill-orange-400">Variance</text>

            {/* Total Error Curve (U-shaped) */}
            <path d="M 60 70 C 130 120 210 170 235 170 C 270 170 360 120 450 65" fill="none" stroke="#ef4444" strokeWidth="3" />
            <text x="410" y="45" className="text-xs font-bold fill-red-600 dark:fill-red-400">Total Error</text>

            {/* Optimal Vertical Line */}
            <line x1="235" y1="260" x2="235" y2="170" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="235" cy="170" r="5" className="fill-emerald-600" />
            <text x="210" y="280" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">Optimal Complexity</text>

            {/* Underfitting / Overfitting Zone annotations */}
            <rect x="70" y="220" width="110" height="30" rx="4" className="fill-blue-500/10 stroke-blue-500/30" />
            <text x="80" y="240" className="text-[11px] font-medium fill-blue-600 dark:fill-blue-400">Underfitting (High Bias)</text>

            <rect x="310" y="220" width="125" height="30" rx="4" className="fill-orange-500/10 stroke-orange-500/30" />
            <text x="320" y="240" className="text-[11px] font-medium fill-orange-600 dark:fill-orange-400">Overfitting (High Variance)</text>
          </svg>
        );

      case 'lasso-ridge-geometry':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Lasso (L1) Diamond */}
            <div className="p-3 bg-academic-50 dark:bg-academic-900 rounded-lg border border-academic-200 dark:border-academic-800 text-center">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 block mb-1">Lasso (L1) Constraint: Diamond</span>
              <p className="text-[11px] text-academic-500 mb-2">Corner contact drives β₂ = 0 (Feature Selection)</p>
              <svg viewBox="0 0 200 160" className="w-full h-auto">
                <line x1="20" y1="80" x2="180" y2="80" stroke="currentColor" strokeWidth="1" className="text-academic-400" />
                <line x1="100" y1="10" x2="100" y2="150" stroke="currentColor" strokeWidth="1" className="text-academic-400" />
                <text x="170" y="75" className="text-[10px] fill-academic-500">β₁</text>
                <text x="105" y="20" className="text-[10px] fill-academic-500">β₂</text>
                {/* Diamond */}
                <polygon points="100,35 145,80 100,125 55,80" fill="#3b82f6" fillOpacity="0.2" stroke="#2563eb" strokeWidth="2" />
                {/* Elliptical error contours */}
                <ellipse cx="165" cy="50" rx="35" ry="20" fill="none" stroke="#ef4444" strokeWidth="1.5" transform="rotate(-20 165 50)" />
                <ellipse cx="165" cy="50" rx="55" ry="32" fill="none" stroke="#ef4444" strokeWidth="1.5" transform="rotate(-20 165 50)" />
                {/* Corner intersection */}
                <circle cx="145" cy="80" r="4" fill="#ef4444" />
                <text x="125" y="100" className="text-[10px] font-bold fill-red-600">β₂ = 0</text>
              </svg>
            </div>
            {/* Ridge (L2) Circle */}
            <div className="p-3 bg-academic-50 dark:bg-academic-900 rounded-lg border border-academic-200 dark:border-academic-800 text-center">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-1">Ridge (L2) Constraint: Circle</span>
              <p className="text-[11px] text-academic-500 mb-2">Smooth tangency keeps both β₁ ≠ 0 and β₂ ≠ 0</p>
              <svg viewBox="0 0 200 160" className="w-full h-auto">
                <line x1="20" y1="80" x2="180" y2="80" stroke="currentColor" strokeWidth="1" className="text-academic-400" />
                <line x1="100" y1="10" x2="100" y2="150" stroke="currentColor" strokeWidth="1" className="text-academic-400" />
                <text x="170" y="75" className="text-[10px] fill-academic-500">β₁</text>
                <text x="105" y="20" className="text-[10px] fill-academic-500">β₂</text>
                {/* Circle */}
                <circle cx="100" cy="80" r="45" fill="#6366f1" fillOpacity="0.2" stroke="#4f46e5" strokeWidth="2" />
                {/* Elliptical error contours */}
                <ellipse cx="160" cy="45" rx="30" ry="18" fill="none" stroke="#ef4444" strokeWidth="1.5" transform="rotate(-25 160 45)" />
                <ellipse cx="160" cy="45" rx="50" ry="30" fill="none" stroke="#ef4444" strokeWidth="1.5" transform="rotate(-25 160 45)" />
                {/* Tangent point */}
                <circle cx="132" cy="50" r="4" fill="#ef4444" />
                <text x="120" y="38" className="text-[10px] font-bold fill-red-600">Both β ≠ 0</text>
              </svg>
            </div>
          </div>
        );

      case 'gradient-descent':
        return (
          <svg viewBox="0 0 450 240" className="w-full h-auto select-none">
            {/* Parabola Cost function */}
            <line x1="30" y1="210" x2="420" y2="210" stroke="currentColor" strokeWidth="1.5" className="text-academic-400" />
            <line x1="30" y1="210" x2="30" y2="20" stroke="currentColor" strokeWidth="1.5" className="text-academic-400" />
            <text x="400" y="230" className="text-xs font-semibold fill-academic-500">Parameter θ</text>
            <text x="15" y="15" className="text-xs font-semibold fill-academic-500">Cost J(θ)</text>

            <path d="M 60 40 Q 225 240 390 40" fill="none" stroke="#2563eb" strokeWidth="3" />

            {/* Stepping arrows */}
            {[
              { fromX: 85, fromY: 70, toX: 130, toY: 130 },
              { fromX: 130, fromY: 130, toX: 175, toY: 168 },
              { fromX: 175, fromY: 168, toX: 205, toY: 185 },
              { fromX: 205, toX: 220, fromY: 185, toY: 190 },
            ].map((step, idx) => (
              <g key={idx}>
                <line x1={step.fromX} y1={step.fromY} x2={step.toX} y2={step.toY} stroke="#ef4444" strokeWidth="2" strokeDasharray={idx > 2 ? '2 2' : undefined} />
                <circle cx={step.fromX} cy={step.fromY} r="4" fill="#ef4444" />
              </g>
            ))}

            <circle cx="225" cy="190" r="5" fill="#10b981" />
            <text x="210" y="205" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">Minimum</text>
            <text x="60" y="60" className="text-xs font-semibold fill-red-600">Start (θ₀)</text>
            <text x="240" y="130" className="text-[11px] fill-academic-600 dark:fill-academic-300">Step size shrinks as slope decreases</text>
          </svg>
        );

      case 'knn-decision':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-auto select-none">
            {/* Grid */}
            <rect width="400" height="240" fill="none" stroke="currentColor" strokeWidth="1" className="text-academic-200 dark:text-academic-800" rx="8" />
            
            {/* Class A: Triangles */}
            {[[70, 70], [90, 110], [50, 140], [110, 80], [130, 130]].map(([x, y], i) => (
              <polygon key={i} points={`${x},${y-7} ${x+6},${y+5} ${x-6},${y+5}`} fill="#3b82f6" />
            ))}
            <text x="50" y="40" className="text-xs font-semibold fill-blue-600 dark:fill-blue-400">Class A (▲)</text>

            {/* Class B: Squares */}
            {[[250, 150], [280, 110], [310, 170], [270, 190], [220, 170]].map(([x, y], i) => (
              <rect key={i} x={x-5} y={y-5} width="10" height="10" fill="#ef4444" />
            ))}
            <text x="270" y="40" className="text-xs font-semibold fill-red-600 dark:fill-red-400">Class B (■)</text>

            {/* Query Point Star */}
            <circle cx="170" cy="130" r="55" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="170" y="135" className="text-xl font-bold fill-amber-500 text-anchor-middle">★</text>
            <text x="145" y="200" className="text-xs font-semibold fill-academic-700 dark:fill-academic-300">K = 3 Enclosure</text>
            <text x="135" y="215" className="text-[11px] fill-academic-500">2 Class A vs 1 Class B ➔ Predicted: Class A</text>
          </svg>
        );

      case 'svm-margin':
        return (
          <svg viewBox="0 0 460 260" className="w-full h-auto select-none">
            {/* Background Margin band */}
            <polygon points="50,220 220,20 280,20 110,220" fill="#3b82f6" fillOpacity="0.08" />

            {/* Class +1 Points */}
            {[[70, 90], [90, 40], [130, 60], [60, 140]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="5" fill="#3b82f6" fillOpacity="0.5" />
            ))}
            {/* Support Vectors Positive */}
            <circle cx="120" cy="100" r="6" fill="#1d4ed8" stroke="#ffffff" strokeWidth="2" />
            <circle cx="80" cy="170" r="6" fill="#1d4ed8" stroke="#ffffff" strokeWidth="2" />

            {/* Class -1 Points */}
            {[[320, 120], [350, 180], [300, 210], [370, 80]].map(([x, y], i) => (
              <polygon key={i} points={`${x},${y-5} ${x+5},${y+5} ${x-5},${y+5}`} fill="#ef4444" fillOpacity="0.5" />
            ))}
            {/* Support Vectors Negative */}
            <polygon points="240,115 246,127 234,127" fill="#b91c1c" stroke="#ffffff" strokeWidth="1.5" />
            <polygon points="200,185 206,197 194,197" fill="#b91c1c" stroke="#ffffff" strokeWidth="1.5" />

            {/* Boundaries */}
            {/* Left margin boundary: w·x + b = +1 */}
            <line x1="70" y1="230" x2="230" y2="20" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
            <text x="75" y="245" className="text-[10px] font-semibold fill-blue-600">w·x + b = +1</text>

            {/* Central Hyperplane: w·x + b = 0 */}
            <line x1="100" y1="230" x2="260" y2="20" stroke="#ef4444" strokeWidth="3" />
            <text x="265" y="35" className="text-xs font-bold fill-red-600">w·x + b = 0 (Hyperplane)</text>

            {/* Right margin boundary: w·x + b = -1 */}
            <line x1="130" y1="230" x2="290" y2="20" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
            <text x="145" y="245" className="text-[10px] font-semibold fill-blue-600">w·x + b = -1</text>

            {/* Margin dimension indicator */}
            <line x1="140" y1="130" x2="190" y2="105" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="165" y="145" className="text-xs font-bold fill-emerald-600">Margin = 2/||w||</text>
          </svg>
        );

      case 'confusion-matrix':
        return (
          <div className="max-w-md mx-auto p-4 bg-academic-50 dark:bg-academic-900 rounded-lg border border-academic-200 dark:border-academic-800">
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium">
              <div className="p-2"></div>
              <div className="p-2 font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded">Predicted Positive (+)</div>
              <div className="p-2 font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded">Predicted Negative (-)</div>

              <div className="p-3 font-bold text-academic-700 dark:text-academic-300 flex items-center justify-center bg-academic-100 dark:bg-academic-800 rounded">Actual Positive (+)</div>
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 rounded text-emerald-800 dark:text-emerald-200">
                <span className="text-sm font-bold block">True Positive (TP)</span>
                <span className="text-[10px] text-academic-500">Correctly detected</span>
              </div>
              <div className="p-3 bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-700 rounded text-red-800 dark:text-red-200">
                <span className="text-sm font-bold block">False Negative (FN)</span>
                <span className="text-[10px] text-red-600 dark:text-red-400 font-semibold">Type II Error (Missed)</span>
              </div>

              <div className="p-3 font-bold text-academic-700 dark:text-academic-300 flex items-center justify-center bg-academic-100 dark:bg-academic-800 rounded">Actual Negative (-)</div>
              <div className="p-3 bg-amber-100 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700 rounded text-amber-800 dark:text-amber-200">
                <span className="text-sm font-bold block">False Positive (FP)</span>
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">Type I Error (False Alarm)</span>
              </div>
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 rounded text-emerald-800 dark:text-emerald-200">
                <span className="text-sm font-bold block">True Negative (TN)</span>
                <span className="text-[10px] text-academic-500">Correctly rejected</span>
              </div>
            </div>
          </div>
        );

      case 'elbow-method':
        return (
          <svg viewBox="0 0 460 260" className="w-full h-auto select-none">
            {/* Axes */}
            <line x1="50" y1="220" x2="430" y2="220" stroke="currentColor" strokeWidth="2" className="text-academic-700 dark:text-academic-300" />
            <line x1="50" y1="220" x2="50" y2="20" stroke="currentColor" strokeWidth="2" className="text-academic-700 dark:text-academic-300" />
            <text x="350" y="245" className="text-xs font-semibold fill-academic-600 dark:fill-academic-400">Number of Clusters (K)</text>
            <text x="15" y="20" className="text-xs font-semibold fill-academic-600 dark:fill-academic-400">SSE / WCSS</text>

            {/* Ticks on X */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((k) => (
              <text key={k} x={50 + k * 44} y="235" className="text-xs font-medium fill-academic-500" textAnchor="middle">{k}</text>
            ))}

            {/* Elbow Curve Points: K=1(210), K=2(130), K=3(65), K=4(50), K=5(42), K=6(37), K=7(33), K=8(30) */}
            <polyline
              points="94,40 138,90 182,165 226,182 270,192 314,198 358,203 402,206"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
            />
            {[[94, 40], [138, 90], [182, 165], [226, 182], [270, 192], [314, 198], [358, 203], [402, 206]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="#1d4ed8" />
            ))}

            {/* Elbow annotation at K=3 */}
            <circle cx="182" cy="165" r="9" fill="none" stroke="#ef4444" strokeWidth="3" />
            <line x1="182" y1="150" x2="240" y2="100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
            <rect x="235" y="80" width="130" height="36" rx="4" className="fill-red-500/10 stroke-red-500/40" />
            <text x="245" y="96" className="text-xs font-bold fill-red-600 dark:fill-red-400">Elbow Point (K = 3)</text>
            <text x="245" y="108" className="text-[10px] fill-academic-500">Optimal Cluster Count</text>
          </svg>
        );

      case 'dendrogram':
        return (
          <svg viewBox="0 0 460 240" className="w-full h-auto select-none">
            {/* Distance axis */}
            <line x1="40" y1="200" x2="40" y2="20" stroke="currentColor" strokeWidth="1.5" className="text-academic-400" />
            <text x="20" y="15" className="text-[10px] font-semibold fill-academic-500">Distance</text>
            {[
              { d: 3, y: 170 },
              { d: 7, y: 130 },
              { d: 8, y: 110 },
              { d: 10, y: 80 }
            ].map((t) => (
              <g key={t.d}>
                <line x1="36" y1={t.y} x2="44" y2={t.y} stroke="currentColor" strokeWidth="1" className="text-academic-400" />
                <text x="22" y={t.y + 4} className="text-[10px] fill-academic-500 font-mono">{t.d}</text>
              </g>
            ))}

            {/* Leaves: 7, 10, 20, 28, 35 */}
            <text x="90" y="215" className="text-xs font-bold fill-academic-700 dark:fill-academic-300" textAnchor="middle">7</text>
            <text x="150" y="215" className="text-xs font-bold fill-academic-700 dark:fill-academic-300" textAnchor="middle">10</text>
            <text x="230" y="215" className="text-xs font-bold fill-academic-700 dark:fill-academic-300" textAnchor="middle">20</text>
            <text x="310" y="215" className="text-xs font-bold fill-academic-700 dark:fill-academic-300" textAnchor="middle">28</text>
            <text x="390" y="215" className="text-xs font-bold fill-academic-700 dark:fill-academic-300" textAnchor="middle">35</text>

            {/* Merges */}
            {/* Merge 7 & 10 at d = 3 (y = 170) */}
            <path d="M 90 200 L 90 170 L 150 170 L 150 200" fill="none" stroke="#2563eb" strokeWidth="2" />
            {/* Merge 28 & 35 at d = 7 (y = 130) */}
            <path d="M 310 200 L 310 130 L 390 130 L 390 200" fill="none" stroke="#2563eb" strokeWidth="2" />
            {/* Merge 20 with (28, 35) at d = 8 (y = 110) */}
            <path d="M 230 200 L 230 110 L 350 110 L 350 130" fill="none" stroke="#2563eb" strokeWidth="2" />
            {/* Merge (7, 10) with (20, 28, 35) at d = 10 (y = 80) */}
            <path d="M 120 170 L 120 80 L 290 80 L 290 110" fill="none" stroke="#2563eb" strokeWidth="2" />

            {/* Cut line at distance 9 */}
            <line x1="50" y1="95" x2="430" y2="95" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" />
            <text x="350" y="90" className="text-xs font-bold fill-red-600">Cut at d = 9 ➔ 2 Clusters</text>
          </svg>
        );

      case 'dbscan-points':
        return (
          <svg viewBox="0 0 460 250" className="w-full h-auto select-none">
            {/* Core point 1 with radius */}
            <circle cx="120" cy="120" r="60" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="160" cy="110" r="60" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Core points (blue) */}
            {[[120, 120], [100, 140], [140, 95], [160, 110], [150, 150]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="5" fill="#2563eb" />
            ))}

            {/* Border point (green) */}
            <rect x="200" y="115" width="10" height="10" fill="#10b981" />
            <text x="215" y="125" className="text-xs font-semibold fill-emerald-600">Border Point (&lt; MinPts)</text>

            {/* Noise point (red) */}
            <circle cx="380" cy="60" r="5" fill="#ef4444" />
            <text x="395" y="65" className="text-xs font-semibold fill-red-600">Noise (Outlier)</text>

            {/* Radius line */}
            <line x1="120" y1="120" x2="180" y2="120" stroke="#3b82f6" strokeWidth="2" />
            <text x="140" y="115" className="text-xs font-bold fill-blue-600">Radius ε</text>

            <rect x="60" y="210" width="340" height="28" rx="4" className="fill-academic-100 dark:fill-academic-800" />
            <text x="75" y="228" className="text-[11px] fill-academic-600 dark:fill-academic-400">MinPts = 4: Core points have ≥ 4 neighbours inside search radius ε</text>
          </svg>
        );

      // Blockchain Unit 3: Platforms & Consensus
      case 'byzantine-problem':
      case 'byzantine-generals':
        return <ByzantineGeneralsDiagram onHover={setHoveredElement} />;

      case 'iota-tangle':
        return <IotaTangleDiagram onHover={setHoveredElement} />;

      case 'blockchain-types':
        return <BlockchainTypesDiagram onHover={setHoveredElement} />;

      case 'corda-architecture':
        return <CordaArchitectureDiagram onHover={setHoveredElement} />;

      case 'hyperledger-architecture':
        return <HyperledgerFabricDiagram onHover={setHoveredElement} />;

      case 'pow-vs-pos':
        return <PoWvsPoSDiagram onHover={setHoveredElement} />;

      case 'bitcoin-lifecycle':
      case 'bitcoin-mining':
      case 'mining-flow':
      case 'pow-block':
        return <BitcoinMiningWorkflowDiagram onHover={setHoveredElement} />;

      // Blockchain Unit 4: Cryptocurrencies & Wallets
      case 'crypto-wallets':
        return <CryptoWalletsDiagram onHover={setHoveredElement} />;

      case 'custodial-vs-noncustodial':
        return <CustodialVsNonCustodialDiagram onHover={setHoveredElement} />;

      case 'coin-vs-token':
      case 'btc-vs-eth':
        return <CoinVsTokenDiagram onHover={setHoveredElement} />;

      case 'zerocash-proof':
        return <ZerocashProofDiagram onHover={setHoveredElement} />;

      // Blockchain Unit 5: Ethereum & Solidity
      case 'ethereum-stack':
      case 'consensus-types':
        return <EthereumStackDiagram onHover={setHoveredElement} />;

      case 'smart-contract-lifecycle':
        return <SmartContractLifecycleDiagram onHover={setHoveredElement} />;

      case 'gas-execution':
        return <GasExecutionDiagram onHover={setHoveredElement} />;

      case 'evm-architecture':
        return <EVMArchitectureDiagram onHover={setHoveredElement} />;

      case 'swarm-storage':
        return <SwarmStorageDiagram onHover={setHoveredElement} />;

      case 'whisper-messaging':
        return <WhisperMessagingDiagram onHover={setHoveredElement} />;

      // Blockchain Unit 6: Case Studies
      case 'supply-chain-blockchain':
        return <SupplyChainDiagram onHover={setHoveredElement} />;

      case 'digital-identity-blockchain':
        return <DigitalIdentityDiagram onHover={setHoveredElement} />;

      case 'healthcare-ehr-blockchain':
        return <HealthcareEHRDiagram onHover={setHoveredElement} />;

      case 'p2p-energy-trading':
        return <P2PEnergyTradingDiagram onHover={setHoveredElement} />;

      case 'blockchain-voting':
        return <BlockchainVotingDiagram onHover={setHoveredElement} />;

      // Machine Learning Unit 6: Neural Networks
      case 'activation-functions':
        return <ActivationFunctionsDiagram onHover={setHoveredElement} />;

      case 'artificial-neuron':
        return <ArtificialNeuronDiagram onHover={setHoveredElement} />;

      case 'mlp-architecture':
        return <MLPArchitectureDiagram onHover={setHoveredElement} />;

      case 'backprop-flow':
        return <BackpropFlowDiagram onHover={setHoveredElement} />;

      case 'rbf-network':
        return <RBFNetworkDiagram onHover={setHoveredElement} />;

      case 'flann-architecture':
        return <FLANNArchitectureDiagram onHover={setHoveredElement} />;

      case 'rnn-unfolded':
        return <RNNUnfoldedDiagram onHover={setHoveredElement} />;

      case 'cnn-pipeline':
        return <CNNPipelineDiagram onHover={setHoveredElement} />;

      case 'max-pooling':
        return <MaxPoolingDiagram onHover={setHoveredElement} />;

      case 'cnn-padding':
        return <CNNPaddingDiagram onHover={setHoveredElement} />;

      case 'greedy-strategy-flow':
        return <GreedyStrategyDiagram />;

      case 'knapsack-fractional-visual':
        return <FractionalKnapsackDiagram />;

      case 'job-scheduling-timeline':
        return <JobSequencingDiagram />;

      case 'dp-principle-optimality':
        return <PrincipleOfOptimalityDiagram />;

      case 'mcm-pyramid-grid':
        return <MatrixChainDiagram />;

      case 'obst-tree-diagram':
        return <OBSTDiagram />;

      case 'activity-selection-timeline':
        return <ActivitySelectionDiagram />;

      case 'backtracking-state-space-tree':
        return <BacktrackingStateSpaceTreeDiagram />;

      case 'nqueens-chessboard-visual':
        return <NQueensChessboardDiagram />;

      case 'graph-coloring-graph-tree':
        return <GraphColoringDiagram />;

      case 'subset-sum-state-tree':
        return <SubsetSumTreeDiagram />;

      case 'branch-bound-lc-tree':
        return <BranchBoundStrategiesDiagram />;

      case 'tsp-reduced-matrix-flow':
        return <TSPReducedMatrixDiagram />;

      case 'knapsack-branch-bound-tree':
        return <KnapsackBranchBoundDiagram />;

      case 'amortized-stack-multipop':
        return <AmortizedStackDiagram />;

      case 'binary-counter-amortized':
        return <BinaryCounterDiagram />;

      case 'complexity-classes-euler':
        return <ComplexityClassesDiagram />;

      case 'randomized-algorithms-hierarchy':
        return <RandomizedAlgorithmsDiagram />;

      case 'tsp-metric-2approximation':
        return <TSP2ApproxDiagram />;

      case 'embedded-scheduler-queues':
        return <EmbeddedSchedulerDiagram />;

      case 'embedded-insertion-sort':
        return <EmbeddedInsertionSortDiagram />;

      default:
        return (
          <div className="p-6 text-center text-academic-500 bg-academic-100 dark:bg-academic-900 rounded-lg">
            <Info className="w-8 h-8 mx-auto mb-2 text-academic-400" />
            <p className="text-xs font-medium">{diagram.description || diagram.caption}</p>
          </div>
        );
    }
  };

  return (
    <div className="my-6 rounded-xl border border-academic-200/80 dark:border-academic-800/80 bg-white dark:bg-academic-950/70 shadow-sm overflow-hidden transition-all duration-200 hover:border-academic-300 dark:hover:border-academic-700">
      {/* Header Bar */}
      <div className="px-4 py-2.5 bg-academic-50/80 dark:bg-academic-900/60 border-b border-academic-200/70 dark:border-academic-800/70 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <h4 className="text-xs sm:text-sm font-semibold text-academic-800 dark:text-academic-200">
            {diagram.title}
          </h4>
        </div>
        <div className="flex items-center space-x-2">
          {hoveredElement && (
            <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded border border-blue-200/50">
              {hoveredElement}
            </span>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded text-academic-500 hover:text-academic-900 dark:hover:text-academic-100 hover:bg-academic-200 dark:hover:bg-academic-800 transition-colors"
            title={isExpanded ? 'Collapse' : 'Expand full diagram'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* SVG Container */}
      <div className={`p-4 transition-all duration-300 flex items-center justify-center ${isExpanded ? 'max-h-[600px] overflow-auto' : 'max-h-[380px]'}`}>
        <div className="w-full max-w-2xl">
          {renderSVGContent()}
        </div>
      </div>

      {/* Caption Bar */}
      <div className="px-4 py-2 bg-academic-50/40 dark:bg-academic-900/40 border-t border-academic-200/40 dark:border-academic-800/40 text-[11px] sm:text-xs text-academic-500 flex items-center justify-between">
        <span>{diagram.caption}</span>
        <span className="font-mono text-[10px] text-academic-400">Interactive SVG Visual</span>
      </div>
    </div>
  );
};
