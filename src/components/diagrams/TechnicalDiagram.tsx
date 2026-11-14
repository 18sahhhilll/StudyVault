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
import {
  MultithreadedDAGDiagram,
  RaceConditionDiagram,
  ParallelMatrixMultDiagram,
  ParallelMergeSortDiagram,
  DistributedBFSDiagram,
  DistributedGHSMSTDiagram,
  RabinKarpRollingHashDiagram
} from './daa/DAAUnit6Diagrams';

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

      case 'multithreaded-dag-model':
        return <MultithreadedDAGDiagram />;

      case 'race-condition-visual':
        return <RaceConditionDiagram />;

      case 'parallel-matrix-multiplication':
        return <ParallelMatrixMultDiagram />;

      case 'parallel-merge-sort-pipeline':
        return <ParallelMergeSortDiagram />;

      case 'distributed-bfs-tree':
        return <DistributedBFSDiagram />;

      case 'distributed-ghs-mst':
        return <DistributedGHSMSTDiagram />;


      case 'rabin-karp-rolling-hash':
        return <RabinKarpRollingHashDiagram />;

      // ── ML Unit 3 missing diagrams ───────────────────────────────────────
      case 'regression-types':
        return (
          <svg viewBox="0 0 500 240" className="w-full h-auto select-none">
            <text x="80" y="20" textAnchor="middle" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">Linear</text>
            <line x1="20" y1="200" x2="140" y2="60" stroke="#3b82f6" strokeWidth="2.5"/>
            {[[25,195],[50,170],[75,145],[100,110],[130,70]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="#3b82f6"/>)}
            <text x="210" y="20" textAnchor="middle" className="text-xs font-bold fill-purple-600 dark:fill-purple-400">Polynomial</text>
            <path d="M165,190 Q220,50 290,130 Q330,180 350,70" fill="none" stroke="#9333ea" strokeWidth="2.5"/>
            {[[170,185],[200,100],[240,80],[280,130],[320,160],[345,80]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="#9333ea"/>)}
            <text x="390" y="20" textAnchor="middle" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">Multiple</text>
            <line x1="370" y1="190" x2="490" y2="70" stroke="#10b981" strokeWidth="2.5"/>
            {[[375,185],[400,160],[430,130],[460,100],[480,80]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="#10b981"/>)}
            <text x="80" y="225" textAnchor="middle" className="text-[10px] fill-academic-500">ŷ = ax + b</text>
            <text x="250" y="225" textAnchor="middle" className="text-[10px] fill-academic-500">ŷ = aₙxⁿ+...+b</text>
            <text x="430" y="225" textAnchor="middle" className="text-[10px] fill-academic-500">ŷ = b₀+b₁x₁+b₂x₂</text>
          </svg>
        );

      case 'generalization-error':
        return (
          <svg viewBox="0 0 500 280" className="w-full h-auto select-none">
            <line x1="50" y1="230" x2="460" y2="230" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            <line x1="50" y1="30" x2="50" y2="230" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            <text x="240" y="258" textAnchor="middle" className="text-xs fill-academic-500">Model Complexity →</text>
            <text x="18" y="135" textAnchor="middle" className="text-xs fill-academic-500" transform="rotate(-90,18,135)">Error →</text>
            <path d="M60,60 Q180,100 350,210 L440,215" fill="none" stroke="#3b82f6" strokeWidth="2.5"/>
            <path d="M60,180 Q200,80 300,70 Q380,65 440,120" fill="none" stroke="#ef4444" strokeWidth="2.5"/>
            <line x1="285" y1="30" x2="285" y2="230" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3"/>
            <text x="290" y="45" className="text-[10px] font-semibold fill-emerald-600">Optimal</text>
            <line x1="60" y1="265" x2="90" y2="265" stroke="#3b82f6" strokeWidth="2.5"/>
            <text x="95" y="269" className="text-[10px] fill-academic-600 dark:fill-academic-300">Training Error</text>
            <line x1="220" y1="265" x2="250" y2="265" stroke="#ef4444" strokeWidth="2.5"/>
            <text x="255" y="269" className="text-[10px] fill-academic-600 dark:fill-academic-300">Generalisation Error</text>
          </svg>
        );

      case 'batch-vs-sgd':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Batch GD', color: '#3b82f6', desc: 'Uses ALL samples each step. Smooth convergence, expensive per step.', path: 'M60,180 Q140,100 240,60' },
              { label: 'Stochastic GD', color: '#ef4444', desc: 'Uses ONE random sample per step. Noisy path, fast updates.', path: 'M60,180 Q80,160 100,140 Q110,120 95,100 Q120,85 150,90 Q170,70 200,65 Q220,55 240,60' },
            ].map(({label,color,desc,path},idx)=>(
              <div key={label} className="rounded-lg border border-academic-200 dark:border-academic-800 p-3">
                <p className="text-xs font-bold mb-2" style={{color}}>{label}</p>
                <svg viewBox="0 0 300 220" className="w-full h-auto">
                  <ellipse cx="240" cy="60" rx="50" ry="30" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2"/>
                  <ellipse cx="240" cy="60" rx="30" ry="18" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2"/>
                  <ellipse cx="240" cy="60" rx="12" ry="7" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="3 2"/>
                  <defs><marker id={`arr-sgd${idx}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill={color}/></marker></defs>
                  <path d={path} fill="none" stroke={color} strokeWidth="2.5" markerEnd={`url(#arr-sgd${idx})`}/>
                  <circle cx="60" cy="180" r="5" fill={color}/>
                  <text x="68" y="184" className="text-[10px] fill-academic-500">Start</text>
                  <circle cx="240" cy="60" r="5" fill="#10b981"/>
                  <text x="248" y="64" className="text-[10px] fill-emerald-600">Min</text>
                </svg>
                <p className="text-[10px] text-academic-500 dark:text-academic-400 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        );

      // ── ML Unit 4 missing diagrams ───────────────────────────────────────
      case 'kernel-trick':
        return (
          <svg viewBox="0 0 520 240" className="w-full h-auto select-none">
            <text x="100" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">Input Space ℝ²</text>
            {[[40,80],[60,120],[80,70],[100,110],[120,90],[140,75]].map(([x,y],i)=><circle key={`b${i}`} cx={x} cy={y} r="6" fill="#3b82f6"/>)}
            {[[55,160],[80,180],[100,165],[115,175],[135,155],[155,170]].map(([x,y],i)=><circle key={`r${i}`} cx={x} cy={y} r="6" fill="#ef4444"/>)}
            <text x="100" y="210" textAnchor="middle" className="text-[10px] fill-academic-500">Not separable</text>
            <defs><marker id="arr-kt" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/></marker></defs>
            <line x1="200" y1="120" x2="300" y2="120" stroke="#8b5cf6" strokeWidth="2.5" markerEnd="url(#arr-kt)"/>
            <text x="250" y="110" textAnchor="middle" className="text-xs font-bold fill-purple-600">φ(x)</text>
            <text x="250" y="135" textAnchor="middle" className="text-[10px] fill-academic-500">kernel trick</text>
            <text x="420" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">Feature Space ℝⁿ</text>
            {[[330,70],[360,80],[380,65],[410,75],[440,60],[460,80]].map(([x,y],i)=><circle key={`b2${i}`} cx={x} cy={y} r="6" fill="#3b82f6"/>)}
            {[[330,160],[360,175],[385,155],[415,170],[440,160],[460,175]].map(([x,y],i)=><circle key={`r2${i}`} cx={x} cy={y} r="6" fill="#ef4444"/>)}
            <line x1="310" y1="115" x2="490" y2="115" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6 3"/>
            <text x="420" y="210" textAnchor="middle" className="text-[10px] fill-emerald-600">Linearly separable ✓</text>
          </svg>
        );

      case 'svr-tube':
        return (
          <svg viewBox="0 0 500 280" className="w-full h-auto select-none">
            <line x1="40" y1="250" x2="470" y2="250" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            <line x1="40" y1="250" x2="40" y2="20" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            <path d="M60,210 Q200,100 440,120" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3"/>
            <path d="M60,160 Q200,50 440,70" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3"/>
            <path d="M60,185 Q200,75 440,95" fill="none" stroke="#ef4444" strokeWidth="2.5"/>
            <text x="380" y="68" className="text-xs font-bold fill-red-600">f(x)</text>
            <defs><marker id="arr-svr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6366f1"/></marker></defs>
            <line x1="300" y1="105" x2="300" y2="140" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arr-svr)"/>
            <text x="307" y="128" className="text-xs font-bold fill-indigo-600">ε</text>
            {[[100,175],[180,100],[260,100],[350,110]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5" fill="#10b981"/>)}
            {[[140,55],[320,145]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5" fill="#ef4444"/>)}
            <text x="250" y="268" textAnchor="middle" className="text-[10px] fill-academic-500">ε-tube: predictions within tube incur no loss</text>
          </svg>
        );

      case 'ensemble-concept':
        return (
          <svg viewBox="0 0 500 280" className="w-full h-auto select-none">
            <defs><marker id="arr-ec" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
            <rect x="10" y="110" width="80" height="50" rx="6" className="fill-blue-50 dark:fill-blue-950 stroke-blue-400" strokeWidth="1.5"/>
            <text x="50" y="132" textAnchor="middle" className="text-[10px] font-bold fill-blue-700 dark:fill-blue-300">Training</text>
            <text x="50" y="148" textAnchor="middle" className="text-[10px] fill-blue-600">Data</text>
            {[60,130,200].map((y,i)=>(<line key={i} x1="90" y1="135" x2="150" y2={y} stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-ec)"/>))}
            {[{y:40,label:'Model 1',c:'#8b5cf6'},{y:110,label:'Model 2',c:'#3b82f6'},{y:180,label:'Model 3',c:'#06b6d4'}].map(({y,label,c})=>(
              <g key={label}>
                <rect x="150" y={y} width="90" height="40" rx="6" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.5"/>
                <text x="195" y={y+16} textAnchor="middle" className="text-[10px] font-semibold" fill={c}>{label}</text>
                <text x="195" y={y+30} textAnchor="middle" className="text-[9px] fill-academic-500">(weak learner)</text>
                <line x1="240" y1={y+20} x2="300" y2="140" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-ec)"/>
              </g>
            ))}
            <rect x="300" y="105" width="90" height="60" rx="6" className="fill-emerald-50 dark:fill-emerald-950 stroke-emerald-500" strokeWidth="2"/>
            <text x="345" y="130" textAnchor="middle" className="text-[10px] font-bold fill-emerald-700 dark:fill-emerald-300">Aggregate</text>
            <text x="345" y="145" textAnchor="middle" className="text-[9px] fill-emerald-600">(Vote / Avg)</text>
            <line x1="390" y1="135" x2="440" y2="135" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-ec)"/>
            <rect x="440" y="110" width="55" height="50" rx="6" className="fill-amber-50 dark:fill-amber-950 stroke-amber-400" strokeWidth="1.5"/>
            <text x="467" y="132" textAnchor="middle" className="text-[10px] font-bold fill-amber-700 dark:fill-amber-300">Final</text>
            <text x="467" y="148" textAnchor="middle" className="text-[9px] fill-amber-600">Pred.</text>
            <text x="250" y="260" textAnchor="middle" className="text-[10px] fill-academic-500 dark:fill-academic-400">N weak learners combined → 1 strong prediction</text>
          </svg>
        );

      case 'ensemble-types':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: 'Bagging', color: '#3b82f6', desc: 'Parallel learners on bootstrap samples. Reduces variance. e.g. Random Forest', icon: '⊕' },
              { title: 'Boosting', color: '#f59e0b', desc: 'Sequential learners. Each corrects prior. Reduces bias. e.g. AdaBoost, XGBoost', icon: '→' },
              { title: 'Stacking', color: '#8b5cf6', desc: 'Meta-learner combines base models predictions from multiple different algorithms.', icon: '◇' },
            ].map(({title,color,desc,icon})=>(
              <div key={title} className="rounded-lg border p-3 text-center space-y-2" style={{borderColor:color}}>
                <div className="text-2xl">{icon}</div>
                <p className="text-sm font-bold" style={{color}}>{title}</p>
                <p className="text-[10px] text-academic-500 dark:text-academic-400">{desc}</p>
              </div>
            ))}
          </div>
        );

      case 'bagging-boosting':
        return (
          <svg viewBox="0 0 520 200" className="w-full h-auto select-none">
            <defs><marker id="arr-bb" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
            <text x="120" y="18" textAnchor="middle" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">BAGGING (Parallel)</text>
            <rect x="10" y="30" width="70" height="35" rx="4" className="fill-blue-50 dark:fill-blue-950 stroke-blue-400" strokeWidth="1.5"/>
            <text x="45" y="52" textAnchor="middle" className="text-[9px] fill-blue-700 dark:fill-blue-300">Training Data</text>
            {[{y:30,label:'BS₁'},{y:80,label:'BS₂'},{y:130,label:'BS₃'}].map(({y,label})=>(
              <g key={label}>
                <line x1="80" y1="47" x2="110" y2={y+17} stroke="#93c5fd" strokeWidth="1.5" markerEnd="url(#arr-bb)"/>
                <rect x="110" y={y} width="80" height="30" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1"/>
                <text x="150" y={y+19} textAnchor="middle" className="text-[9px] fill-blue-800">{label}</text>
              </g>
            ))}
            <line x1="190" y1="80" x2="225" y2="80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-bb)"/>
            <rect x="225" y="62" width="60" height="35" rx="4" className="fill-emerald-50 dark:fill-emerald-950 stroke-emerald-500" strokeWidth="1.5"/>
            <text x="255" y="82" textAnchor="middle" className="text-[9px] font-bold fill-emerald-700">Vote/Avg</text>
            <line x1="310" y1="10" x2="310" y2="190" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 3" className="dark:stroke-academic-700"/>
            <text x="415" y="18" textAnchor="middle" className="text-xs font-bold fill-amber-600 dark:fill-amber-400">BOOSTING (Sequential)</text>
            {[{y:30,label:'M₁'},{y:85,label:'M₂'},{y:140,label:'M₃'}].map(({y,label},i)=>(
              <g key={label}>
                <rect x="330" y={y} width="55" height="35" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
                <text x="357" y={y+22} textAnchor="middle" className="text-[9px] font-bold fill-amber-800">{label}</text>
                {i < 2 && <line x1="357" y1={y+35} x2="357" y2={y+55} stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-bb)"/>}
              </g>
            ))}
            <rect x="410" y="155" width="90" height="30" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5"/>
            <text x="455" y="174" textAnchor="middle" className="text-[9px] font-bold fill-emerald-700">Final H(x)</text>
          </svg>
        );

      case 'random-forest':
        return (
          <svg viewBox="0 0 520 270" className="w-full h-auto select-none">
            <defs><marker id="arr-rf" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
            <text x="260" y="18" textAnchor="middle" className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300">Random Forest Architecture</text>
            <rect x="210" y="25" width="100" height="35" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <text x="260" y="47" textAnchor="middle" className="text-[10px] font-bold fill-green-800">Training Dataset</text>
            {[{x:60,c:'#3b82f6'},{x:180,c:'#8b5cf6'},{x:300,c:'#f59e0b'},{x:410,c:'#ef4444'}].map(({x,c},i)=>(
              <g key={i}>
                <line x1="260" y1="60" x2={x+40} y2="90" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-rf)"/>
                <rect x={x} y="90" width="80" height="22" rx="4" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1"/>
                <text x={x+40} y="105" textAnchor="middle" className="text-[9px]" fill={c}>Bootstrap {i+1}</text>
                <line x1={x+40} y1="112" x2={x+40} y2="128" stroke={c} strokeWidth="2"/>
                <polygon points={`${x+40},128 ${x+15},175 ${x+65},175`} fill={c} fillOpacity="0.2" stroke={c} strokeWidth="1.5"/>
                <text x={x+40} y="168" textAnchor="middle" className="text-[9px] font-bold" fill={c}>Tree {i+1}</text>
                <line x1={x+40} y1="175" x2="260" y2="210" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-rf)"/>
              </g>
            ))}
            <rect x="185" y="210" width="150" height="40" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
            <text x="260" y="228" textAnchor="middle" className="text-[10px] font-bold fill-yellow-800">Majority Vote / Mean</text>
            <text x="260" y="265" textAnchor="middle" className="text-[9px] fill-academic-500">Random feature subset at each split reduces tree correlation</text>
          </svg>
        );

      case 'adaboost-pipeline':
        return (
          <svg viewBox="0 0 520 200" className="w-full h-auto select-none">
            <defs><marker id="arr-ab" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b"/></marker></defs>
            <text x="260" y="18" textAnchor="middle" className="text-xs font-bold fill-amber-600 dark:fill-amber-400">AdaBoost Iterative Weight Update</text>
            {[{x:10,iter:'t=1',acc:'70%'},{x:135,iter:'t=2',acc:'78%'},{x:260,iter:'t=3',acc:'85%'},{x:385,iter:'Final',acc:'~92%'}].map(({x,iter,acc},i)=>(
              <g key={i}>
                <rect x={x} y={35} width={110} height={80} rx="4" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
                <text x={x+55} y={30} textAnchor="middle" className="text-[9px] font-bold fill-amber-700 dark:fill-amber-300">{iter}</text>
                <rect x={x+10} y={50} width={90} height={30} rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
                <text x={x+55} y={69} textAnchor="middle" className="text-[9px] font-semibold fill-amber-800">h_t: {acc}</text>
                {i < 3 && (
                  <line x1={x+110} y1={75} x2={x+135} y2={75} stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-ab)"/>
                )}
                {i === 3 && (
                  <>
                    <text x={x+55} y={130} textAnchor="middle" className="text-[9px] font-bold fill-emerald-700">Strong H(x)</text>
                    <text x={x+55} y={144} textAnchor="middle" className="text-[9px] fill-emerald-600">∑αₜhₜ(x)</text>
                  </>
                )}
              </g>
            ))}
            <text x="260" y="185" textAnchor="middle" className="text-[9px] fill-academic-500 dark:fill-academic-400">Misclassified samples get higher weight → next learner focuses on them</text>
          </svg>
        );

      case 'binary-multiclass':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {title:'Binary Classification',color:'#3b82f6',classes:['Class A (spam)','Class B (not spam)'],desc:'2 classes. Output: single sigmoid neuron / threshold.'},
              {title:'Multi-class Classification',color:'#8b5cf6',classes:['Class 1','Class 2','Class 3','Class 4'],desc:'N classes. Softmax output with N neurons. OvR or OvO strategy.'},
            ].map(({title,color,classes,desc})=>(
              <div key={title} className="rounded-lg border p-3 space-y-2" style={{borderColor:color}}>
                <p className="text-xs font-bold" style={{color}}>{title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {classes.map((c,i)=><span key={i} className="text-[10px] px-2 py-0.5 rounded-full border" style={{borderColor:color,color}}>{c}</span>)}
                </div>
                <p className="text-[10px] text-academic-500 dark:text-academic-400">{desc}</p>
              </div>
            ))}
          </div>
        );

      case 'imbalance-bars':
        return (
          <svg viewBox="0 0 500 240" className="w-full h-auto select-none">
            <text x="250" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">Class Imbalance Problem</text>
            <text x="100" y="40" textAnchor="middle" className="text-[10px] fill-academic-500">Imbalanced Dataset</text>
            <rect x="40" y="50" width="60" height="140" rx="4" fill="#3b82f6" fillOpacity="0.8"/>
            <text x="70" y="200" textAnchor="middle" className="text-[9px] fill-blue-700 dark:fill-blue-300">Class 0</text>
            <text x="70" y="45" textAnchor="middle" className="text-[9px] fill-blue-800 font-bold">950</text>
            <rect x="130" y="175" width="60" height="15" rx="4" fill="#ef4444" fillOpacity="0.8"/>
            <text x="160" y="200" textAnchor="middle" className="text-[9px] fill-red-700 dark:fill-red-300">Class 1</text>
            <text x="160" y="170" textAnchor="middle" className="text-[9px] fill-red-800 font-bold">50</text>
            <text x="250" y="125" textAnchor="middle" className="text-xs font-bold fill-emerald-600">SMOTE /</text>
            <text x="250" y="140" textAnchor="middle" className="text-xs font-bold fill-emerald-600">Oversample →</text>
            <text x="390" y="40" textAnchor="middle" className="text-[10px] fill-academic-500">Balanced Dataset</text>
            <rect x="330" y="80" width="60" height="110" rx="4" fill="#3b82f6" fillOpacity="0.8"/>
            <text x="360" y="200" textAnchor="middle" className="text-[9px] fill-blue-700 dark:fill-blue-300">Class 0</text>
            <rect x="420" y="80" width="60" height="110" rx="4" fill="#ef4444" fillOpacity="0.8"/>
            <text x="450" y="200" textAnchor="middle" className="text-[9px] fill-red-700 dark:fill-red-300">Class 1</text>
            <text x="390" y="225" textAnchor="middle" className="text-[9px] fill-academic-500">Synthetic minority oversampling</text>
          </svg>
        );

      case 'precision-recall':
        return (
          <svg viewBox="0 0 500 270" className="w-full h-auto select-none">
            <text x="250" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">Precision vs Recall Trade-off (PR Curve)</text>
            <line x1="60" y1="230" x2="460" y2="230" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            <line x1="60" y1="30" x2="60" y2="230" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            {[0,0.25,0.5,0.75,1.0].map((v,i)=>(
              <g key={i}>
                <text x={60+i*100} y="244" textAnchor="middle" className="text-[9px] fill-academic-500">{v}</text>
                <text x="50" y={230-i*50} textAnchor="end" className="text-[9px] fill-academic-500">{v}</text>
              </g>
            ))}
            <text x="260" y="258" textAnchor="middle" className="text-xs fill-academic-500">Recall →</text>
            <text x="22" y="135" textAnchor="middle" className="text-xs fill-academic-500" transform="rotate(-90,22,135)">Precision ↑</text>
            <path d="M60,30 Q160,35 260,80 Q360,140 460,230" fill="none" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="60" y1="30" x2="460" y2="230" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3"/>
            <text x="380" y="150" className="text-[9px] fill-academic-400">Random</text>
            <path d="M60,30 Q160,35 260,80 Q360,140 460,230 L460,230 L60,230 Z" fill="#6366f1" fillOpacity="0.08"/>
            <text x="210" y="175" className="text-[10px] font-bold fill-indigo-600">AUC-PR</text>
          </svg>
        );

      case 'kfold-cv':
        return (
          <svg viewBox="0 0 520 220" className="w-full h-auto select-none">
            <text x="260" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">K-Fold Cross Validation (K=5)</text>
            {[0,1,2,3,4].map(fold=>(
              <g key={fold}>
                <text x="30" y={48+fold*35} className="text-[9px] fill-academic-500">Fold {fold+1}</text>
                {[0,1,2,3,4].map(block=>(
                  <rect key={block} x={60+block*90} y={33+fold*35} width="86" height="26" rx="4"
                    fill={block===fold?'#6366f1':'#bfdbfe'} stroke={block===fold?'#4f46e5':'#93c5fd'}
                    strokeWidth="1.5" fillOpacity={block===fold?1:0.6}/>
                ))}
                {[0,1,2,3,4].map(block=>(
                  <text key={block} x={60+block*90+43} y={33+fold*35+17} textAnchor="middle"
                    className="text-[9px] font-semibold"
                    fill={block===fold?'white':'#1e40af'}>
                    {block===fold?'Valid':'Train'}
                  </text>
                ))}
              </g>
            ))}
            <text x="260" y="210" textAnchor="middle" className="text-[9px] fill-academic-500 dark:fill-academic-400">Each fold serves as validation once → average metrics for robust estimate</text>
          </svg>
        );

      // ── ML Unit 5 missing diagrams ───────────────────────────────────────
      case 'kmeans-flow':
        return (
          <svg viewBox="0 0 520 180" className="w-full h-auto select-none">
            <defs><marker id="arr-km" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
            <text x="260" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">K-Means Algorithm Flow</text>
            {[
              {x:10,label:'1. Init\nK centroids',c:'#8b5cf6'},
              {x:120,label:'2. Assign\nnearest',c:'#3b82f6'},
              {x:235,label:'3. Recompute\ncentroids',c:'#f59e0b'},
              {x:350,label:'4. Converged?',c:'#10b981'},
              {x:460,label:'Done!',c:'#6366f1'},
            ].map(({x,label,c},i)=>(
              <g key={i}>
                <rect x={x} y="35" width="100" height="60" rx="8" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="2"/>
                {label.split('\n').map((line,j)=>(
                  <text key={j} x={x+50} y={65+j*14} textAnchor="middle" className="text-[9px] font-semibold" fill={c}>{line}</text>
                ))}
                {i < 4 && <line x1={x+100} y1="65" x2={x+120} y2="65" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-km)"/>}
              </g>
            ))}
            <path d="M400,95 Q400,145 237,145 Q155,145 155,95" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arr-km)"/>
            <text x="285" y="162" textAnchor="middle" className="text-[9px] fill-red-500">No (repeat)</text>
          </svg>
        );

      case 'kmeans-numerical':
        return (
          <svg viewBox="0 0 520 240" className="w-full h-auto select-none">
            <text x="260" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">K-Means Cluster Assignment (K=2)</text>
            {[
              {ox:20,title:'Step 1: Init',c1:'#3b82f6',c2:'#ef4444'},
              {ox:195,title:'Step 2: Assign',c1:'#3b82f6',c2:'#ef4444'},
              {ox:365,title:'Step 3: Update',c1:'#3b82f6',c2:'#ef4444'},
            ].map(({ox,title,c1,c2},si)=>(
              <g key={si}>
                <rect x={ox} y="25" width="155" height="185" rx="6" className="fill-academic-50 dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-700" strokeWidth="1"/>
                <text x={ox+77} y="42" textAnchor="middle" className="text-[9px] font-bold fill-academic-700 dark:fill-academic-300">{title}</text>
                {[[20,70],[35,55],[55,75],[30,90]].map(([px,py],j)=>(
                  <circle key={j} cx={ox+px} cy={py+25} r="5" fill={c1} fillOpacity="0.8"/>
                ))}
                {[[90,100],[110,115],[100,90],[120,105]].map(([px,py],j)=>(
                  <circle key={j} cx={ox+px} cy={py+25} r="5" fill={c2} fillOpacity="0.8"/>
                ))}
                <text cx={ox+35} cy={si<2?80:72} className="text-base font-bold" fill={c1}>
                  <tspan x={ox+35} y={si<2?80:72}>✕</tspan>
                </text>
                <text className="text-[9px]" fill={c1} x={ox+40} y={si<2?82:74}>C₁</text>
                <text cx={ox+105} cy={si<2?130:122} className="text-base font-bold" fill={c2}>
                  <tspan x={ox+105} y={si<2?130:122}>✕</tspan>
                </text>
                <text className="text-[9px]" fill={c2} x={ox+110} y={si<2?132:124}>C₂</text>
              </g>
            ))}
            <text x="260" y="230" textAnchor="middle" className="text-[9px] fill-academic-500">Centroids shift each iteration until assignments stop changing (convergence)</text>
          </svg>
        );

      case 'optics-reachability':
        return (
          <svg viewBox="0 0 500 240" className="w-full h-auto select-none">
            <text x="250" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">OPTICS Reachability Plot</text>
            <line x1="50" y1="200" x2="460" y2="200" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            <line x1="50" y1="30" x2="50" y2="200" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            <text x="255" y="220" textAnchor="middle" className="text-xs fill-academic-500">Points (ordered by OPTICS)</text>
            <text x="18" y="120" textAnchor="middle" className="text-xs fill-academic-500" transform="rotate(-90,18,120)">Reachability →</text>
            {[180,150,45,38,55,42,50,170,180,50,42,55,175,185,45,38,52,185].map((h,i)=>(
              <rect key={i} x={60+i*22} y={200-h} width="18" height={h} rx="1"
                fill={h>150?'#ef4444':h>100?'#f59e0b':'#3b82f6'} fillOpacity="0.75"/>
            ))}
            <rect x="93" y="185" width="88" height="14" rx="3" fill="#bfdbfe" fillOpacity="0.5"/>
            <text x="137" y="195" textAnchor="middle" className="text-[9px] fill-blue-700">Cluster 1</text>
            <rect x="247" y="185" width="88" height="14" rx="3" fill="#bfdbfe" fillOpacity="0.5"/>
            <text x="291" y="195" textAnchor="middle" className="text-[9px] fill-blue-700">Cluster 2</text>
            <text x="250" y="232" textAnchor="middle" className="text-[9px] fill-academic-500">Valleys = dense clusters; peaks = cluster boundaries or noise</text>
          </svg>
        );

      case 'outlier-scatter':
        return (
          <svg viewBox="0 0 500 250" className="w-full h-auto select-none">
            <text x="250" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">Outlier Detection: Scatter Plot View</text>
            <line x1="40" y1="220" x2="460" y2="220" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            <line x1="40" y1="20" x2="40" y2="220" stroke="currentColor" strokeWidth="1.5" className="text-academic-600 dark:text-academic-400"/>
            {[[100,170],[120,155],[140,165],[115,185],[135,148],[110,170],[150,160],[125,178]].map(([x,y],i)=>(
              <circle key={i} cx={x} cy={y} r="6" fill="#3b82f6" fillOpacity="0.7"/>
            ))}
            {[[280,95],[300,85],[315,105],[295,75],[330,90],[310,100]].map(([x,y],i)=>(
              <circle key={i} cx={x} cy={y} r="6" fill="#3b82f6" fillOpacity="0.7"/>
            ))}
            <circle cx="420" cy="45" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
            <text x="432" y="40" className="text-[10px] font-bold fill-red-600">Outlier</text>
            <circle cx="60" cy="55" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
            <text x="72" y="50" className="text-[10px] font-bold fill-red-600">Outlier</text>
            <circle cx="400" cy="200" r="8" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
            <text x="412" y="195" className="text-[10px] font-bold fill-amber-600">Anomaly</text>
            <circle cx="60" cy="238" r="5" fill="#3b82f6"/>
            <text x="70" y="241" className="text-[9px] fill-academic-600 dark:fill-academic-300">Normal</text>
            <circle cx="170" cy="238" r="5" fill="#ef4444"/>
            <text x="180" y="241" className="text-[9px] fill-academic-600 dark:fill-academic-300">Global Outlier</text>
            <circle cx="300" cy="238" r="5" fill="#f59e0b"/>
            <text x="310" y="241" className="text-[9px] fill-academic-600 dark:fill-academic-300">Anomaly</text>
          </svg>
        );

      case 'lof-density':
        return (
          <svg viewBox="0 0 520 250" className="w-full h-auto select-none">
            <text x="260" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">LOF: Local Outlier Factor</text>
            {[[80,150],[100,135],[120,155],[95,170],[110,145]].map(([x,y],i)=>(
              <g key={i}>
                <circle cx={x} cy={y} r="6" fill="#3b82f6" fillOpacity="0.8"/>
                <circle cx={x} cy={y} r="20" fill="none" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 2"/>
              </g>
            ))}
            <text x="100" y="200" textAnchor="middle" className="text-[9px] fill-blue-600">Dense region A</text>
            <text x="100" y="212" textAnchor="middle" className="text-[9px] fill-blue-500">LOF ≈ 1 (normal)</text>
            {[[280,110],[330,90],[310,140],[360,120]].map(([x,y],i)=>(
              <g key={i}>
                <circle cx={x} cy={y} r="6" fill="#8b5cf6" fillOpacity="0.8"/>
                <circle cx={x} cy={y} r="40" fill="none" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="3 2"/>
              </g>
            ))}
            <text x="320" y="192" textAnchor="middle" className="text-[9px] fill-purple-600">Sparse region B</text>
            <text x="320" y="204" textAnchor="middle" className="text-[9px] fill-purple-500">LOF ≈ 1 (normal)</text>
            <circle cx="460" cy="70" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
            <circle cx="460" cy="70" r="80" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeDasharray="4 3"/>
            <text x="460" y="158" textAnchor="middle" className="text-[9px] font-bold fill-red-600">{'LOF >> 1'}</text>
            <text x="460" y="170" textAnchor="middle" className="text-[9px] fill-red-500">(Outlier!)</text>
            <text x="260" y="235" textAnchor="middle" className="text-[9px] fill-academic-500">LOF compares local density of a point to its neighbours' densities</text>
          </svg>
        );

      case 'isolation-forest':
        return (
          <svg viewBox="0 0 520 240" className="w-full h-auto select-none">
            <text x="260" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">Isolation Forest: Anomaly Score</text>
            {[
              {ox:30,label:'Normal point',cuts:4,c:'#3b82f6'},
              {ox:280,label:'Anomaly',cuts:1,c:'#ef4444'},
            ].map(({ox,label,cuts,c})=>(
              <g key={label}>
                <text x={ox+110} y="38" textAnchor="middle" className="text-[9px] font-bold" fill={c}>{label} ({cuts} cut{cuts>1?'s':''})</text>
                {Array.from({length:cuts}).map((_,i)=>(
                  <g key={i}>
                    <rect x={ox+20+i*25} y={45+i*28} width={160-i*25} height="22" rx="4"
                      fill={c} fillOpacity={0.12+i*0.1} stroke={c} strokeWidth="1"/>
                    <text x={ox+100} y={60+i*28} textAnchor="middle" className="text-[9px]" fill={c}>Split {i+1}</text>
                  </g>
                ))}
                <circle cx={ox+110} cy={45+cuts*28+16} r="8" fill={c} fillOpacity="0.9"/>
                <text x={ox+110} y={45+cuts*28+36} textAnchor="middle" className="text-[9px]" fill={c}>Isolated!</text>
                <rect x={ox+30} y={150} width="160" height="30" rx="4" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.5"/>
                <text x={ox+110} y={169} textAnchor="middle" className="text-[9px] font-semibold" fill={c}>Score: {cuts===1?'~0.9 (anomaly)':'~0.4 (normal)'}</text>
              </g>
            ))}
            <text x="260" y="225" textAnchor="middle" className="text-[9px] fill-academic-500 dark:fill-academic-400">Anomalies need fewer random cuts to isolate → shorter path = anomaly</text>
          </svg>
        );

      case 'spectral-cut':
        return (
          <svg viewBox="0 0 520 250" className="w-full h-auto select-none">
            <text x="260" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">Spectral Clustering: Graph Cut</text>
            {[[80,95],[120,75],[110,125],[150,105],[90,135]].map(([x,y],i)=>(
              <g key={i}>
                <circle cx={x} cy={y} r="10" fill="#3b82f6" fillOpacity="0.8" stroke="#1d4ed8" strokeWidth="1.5"/>
                <text x={x} y={y+4} textAnchor="middle" className="text-[9px] fill-white font-bold">{i+1}</text>
              </g>
            ))}
            {[[80,95,120,75],[120,75,110,125],[110,125,150,105],[80,95,90,135],[90,135,150,105]].map(([x1,y1,x2,y2],i)=>(
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#93c5fd" strokeWidth="2.5"/>
            ))}
            {[[330,85],[370,65],[380,115],[340,135],[410,95]].map(([x,y],i)=>(
              <g key={i}>
                <circle cx={x} cy={y} r="10" fill="#ef4444" fillOpacity="0.8" stroke="#b91c1c" strokeWidth="1.5"/>
                <text x={x} y={y+4} textAnchor="middle" className="text-[9px] fill-white font-bold">{i+6}</text>
              </g>
            ))}
            {[[330,85,370,65],[370,65,380,115],[380,115,340,135],[340,135,410,95],[330,85,410,95]].map(([x1,y1,x2,y2],i)=>(
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fca5a5" strokeWidth="2.5"/>
            ))}
            <line x1="150" y1="105" x2="330" y2="85" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3"/>
            <text x="240" y="88" textAnchor="middle" className="text-[9px] fill-academic-500">min-cut</text>
            <rect x="60" y="168" width="390" height="45" rx="6" className="fill-academic-100 dark:fill-academic-800"/>
            <text x="255" y="188" textAnchor="middle" className="text-[9px] font-bold fill-academic-700 dark:fill-academic-300">L = D − A  (Graph Laplacian)</text>
            <text x="255" y="204" textAnchor="middle" className="text-[9px] fill-academic-500">Eigen-decompose L → embed in k-dim → K-Means</text>
            <text x="255" y="232" textAnchor="middle" className="text-[9px] fill-academic-500 dark:fill-academic-400">Works for non-convex / irregularly shaped clusters</text>
          </svg>
        );

      case 'silhouette-concept':
        return (
          <svg viewBox="0 0 520 250" className="w-full h-auto select-none">
            <text x="260" y="18" textAnchor="middle" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">Silhouette Score Concept</text>
            {[[80,115],[100,100],[120,125],[95,140],[110,105]].map(([x,y],i)=>(
              <circle key={i} cx={x} cy={y} r="7" fill="#3b82f6" fillOpacity="0.8"/>
            ))}
            <text x="100" y="162" textAnchor="middle" className="text-[9px] font-bold fill-blue-700">Cluster A</text>
            <circle cx="130" cy="113" r="9" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="2"/>
            <text x="130" y="117" textAnchor="middle" className="text-[8px] fill-white font-bold">P</text>
            <defs>
              <marker id="arr-sil-a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3b82f6"/></marker>
              <marker id="arr-sil-b" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker>
            </defs>
            <line x1="130" y1="113" x2="100" y2="117" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arr-sil-a)"/>
            <text x="108" y="103" className="text-[9px] fill-blue-700">a(i)</text>
            {[[320,105],[340,90],[360,115],[335,130],[355,100]].map(([x,y],i)=>(
              <circle key={i} cx={x} cy={y} r="7" fill="#ef4444" fillOpacity="0.8"/>
            ))}
            <text x="345" y="155" textAnchor="middle" className="text-[9px] font-bold fill-red-600">Cluster B</text>
            <line x1="130" y1="113" x2="320" y2="105" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-sil-b)"/>
            <text x="225" y="98" textAnchor="middle" className="text-[9px] fill-red-600">b(i)</text>
            <rect x="50" y="170" width="420" height="55" rx="6" className="fill-academic-100 dark:fill-academic-800"/>
            <text x="260" y="190" textAnchor="middle" className="text-[10px] font-bold fill-academic-700 dark:fill-academic-300">s(i) = [b(i) − a(i)] / max(a(i), b(i))</text>
            <text x="260" y="206" textAnchor="middle" className="text-[9px] fill-academic-500">a(i) = avg intra-cluster dist | b(i) = avg dist to nearest other cluster</text>
            <text x="260" y="230" textAnchor="middle" className="text-[9px] fill-academic-500 dark:fill-academic-400">s→+1 well-clustered | s→0 boundary | s→−1 mis-clustered</text>
          </svg>
        );

      case 'automated-testing-lifecycle':
        return (
          <svg viewBox="0 0 540 340" className="w-full h-auto select-none">
            <defs>
              <marker id="arr-atl" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#3b82f6" />
              </marker>
              <linearGradient id="grad-atl" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="520" height="320" rx="8" className="fill-academic-50 dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-800" strokeWidth="1" />
            <text x="270" y="32" textAnchor="middle" className="text-xs font-bold fill-academic-900 dark:fill-academic-100">Automated Testing Lifecycle Framework (ATLM)</text>

            {[
              { num: 'Phase 1', title: 'Feasibility Analysis', desc: 'ROI, candidate test cases, manual cost', y: 48, col: '#3b82f6' },
              { num: 'Phase 2', title: 'Tool Selection', desc: 'Evaluate commercial vs open-source tools', y: 92, col: '#2563eb' },
              { num: 'Phase 3', title: 'Framework Design', desc: 'Modular, Data-Driven, Hybrid, POM architecture', y: 136, col: '#1d4ed8' },
              { num: 'Phase 4', title: 'Proof of Concept (POC)', desc: 'Prototype on core workflows to verify feasibility', y: 180, col: '#4f46e5' },
              { num: 'Phase 5', title: 'Develop Framework', desc: 'Reusable libraries, configs, reporting engine', y: 224, col: '#4338ca' },
              { num: 'Phase 6', title: 'Scripting, Execution & Maintenance', desc: 'CI/CD pipeline runs, defect logging, script updates', y: 268, col: '#10b981' }
            ].map((p, i, arr) => (
              <g key={i}>
                <rect x="70" y={p.y} width="400" height="36" rx="6" className="fill-white dark:fill-academic-800 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1.5" />
                <rect x="70" y={p.y} width="95" height="36" rx="6" fill={p.col} fillOpacity="0.15" />
                <text x="117" y={p.y + 22} textAnchor="middle" className="text-[10px] font-bold" fill={p.col}>{p.num}</text>
                <text x="180" y={p.y + 16} className="text-[10px] font-bold fill-academic-900 dark:fill-academic-100">{p.title}</text>
                <text x="180" y={p.y + 28} className="text-[8.5px] fill-academic-500">{p.desc}</text>
                {i < arr.length - 1 && (
                  <line x1="270" y1={p.y + 36} x2="270" y2={p.y + 44} stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arr-atl)" />
                )}
              </g>
            ))}
            <text x="270" y="322" textAnchor="middle" className="text-[8.5px] fill-academic-400">Sequential engineering workflow: each phase deliverables feed directly into the next phase</text>
          </svg>
        );

      case 'selenium-webdriver-architecture':
        return (
          <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
            <defs>
              <marker id="arr-swd" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#3b82f6" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="260" rx="8" className="fill-academic-50 dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-800" strokeWidth="1" />
            <text x="270" y="30" textAnchor="middle" className="text-xs font-bold fill-academic-900 dark:fill-academic-100">Selenium WebDriver 4-Layer Architecture</text>

            {/* Layer 1: Client Libraries */}
            <rect x="25" y="50" width="105" height="180" rx="6" className="fill-white dark:fill-academic-800 stroke-blue-500" strokeWidth="1.5" />
            <text x="77" y="70" textAnchor="middle" className="text-[10px] font-bold fill-blue-600 dark:fill-blue-400">Layer 1: Client</text>
            <text x="77" y="84" textAnchor="middle" className="text-[9px] font-semibold fill-academic-700 dark:fill-academic-300">Language Bindings</text>
            {['Java', 'Python', 'C#', 'Ruby', 'JavaScript'].map((lang, idx) => (
              <rect key={idx} x="35" y={100 + idx * 24} width="85" height="18" rx="4" className="fill-blue-50 dark:fill-blue-950/60 stroke-blue-200 dark:stroke-blue-800" strokeWidth="1">
                <title>{lang}</title>
              </rect>
            ))}
            {['Java', 'Python', 'C#', 'Ruby', 'JavaScript'].map((lang, idx) => (
              <text key={idx} x="77" y={113 + idx * 24} textAnchor="middle" className="text-[9px] font-medium fill-academic-800 dark:fill-academic-200">{lang}</text>
            ))}

            {/* Protocol Arrow 1 */}
            <line x1="130" y1="140" x2="160" y2="140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arr-swd)" />
            <line x1="160" y1="150" x2="135" y2="150" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#arr-swd)" />

            {/* Layer 2: Protocol */}
            <rect x="165" y="75" width="100" height="130" rx="6" className="fill-amber-50 dark:fill-amber-950/40 stroke-amber-500" strokeWidth="1.5" />
            <text x="215" y="98" textAnchor="middle" className="text-[10px] font-bold fill-amber-700 dark:fill-amber-400">Layer 2: Protocol</text>
            <text x="215" y="115" textAnchor="middle" className="text-[9px] font-semibold fill-academic-800 dark:fill-academic-200">JSON Wire /</text>
            <text x="215" y="128" textAnchor="middle" className="text-[9px] font-bold fill-amber-600">W3C WebDriver</text>
            <text x="215" y="150" textAnchor="middle" className="text-[8px] fill-academic-500">Standard HTTP</text>
            <text x="215" y="162" textAnchor="middle" className="text-[8px] fill-academic-500">REST Requests</text>
            <text x="215" y="174" textAnchor="middle" className="text-[8px] fill-academic-500">& JSON Responses</text>

            {/* Protocol Arrow 2 */}
            <line x1="265" y1="140" x2="295" y2="140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arr-swd)" />
            <line x1="295" y1="150" x2="270" y2="150" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#arr-swd)" />

            {/* Layer 3: Browser Drivers */}
            <rect x="300" y="50" width="105" height="180" rx="6" className="fill-white dark:fill-academic-800 stroke-purple-500" strokeWidth="1.5" />
            <text x="352" y="70" textAnchor="middle" className="text-[10px] font-bold fill-purple-600 dark:fill-purple-400">Layer 3: Drivers</text>
            <text x="352" y="84" textAnchor="middle" className="text-[9px] font-semibold fill-academic-700 dark:fill-academic-300">Browser Drivers</text>
            {[
              { d: 'ChromeDriver', p: 'port 9515' },
              { d: 'GeckoDriver', p: 'port 4444' },
              { d: 'msedgedriver', p: 'port 9515' },
              { d: 'SafariDriver', p: 'builtin' }
            ].map((dr, idx) => (
              <g key={idx}>
                <rect x="310" y={100 + idx * 30} width="85" height="24" rx="4" className="fill-purple-50 dark:fill-purple-950/60 stroke-purple-200 dark:stroke-purple-800" strokeWidth="1" />
                <text x="352" y={113 + idx * 30} textAnchor="middle" className="text-[8.5px] font-medium fill-academic-800 dark:fill-academic-200">{dr.d}</text>
                <text x="352" y={122 + idx * 30} textAnchor="middle" className="text-[7.5px] fill-academic-400 font-mono">{dr.p}</text>
              </g>
            ))}

            {/* Arrow 3 */}
            <line x1="405" y1="140" x2="425" y2="140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arr-swd)" />

            {/* Layer 4: Real Browsers */}
            <rect x="430" y="50" width="90" height="180" rx="6" className="fill-white dark:fill-academic-800 stroke-emerald-500" strokeWidth="1.5" />
            <text x="475" y="70" textAnchor="middle" className="text-[10px] font-bold fill-emerald-600 dark:fill-emerald-400">Layer 4</text>
            <text x="475" y="84" textAnchor="middle" className="text-[9px] font-semibold fill-academic-700 dark:fill-academic-300">Real Browsers</text>
            {['Chrome', 'Firefox', 'Edge', 'Safari'].map((br, idx) => (
              <g key={idx}>
                <rect x="438" y={100 + idx * 30} width="74" height="24" rx="4" className="fill-emerald-50 dark:fill-emerald-950/60 stroke-emerald-200 dark:stroke-emerald-800" strokeWidth="1" />
                <text x="475" y={116 + idx * 30} textAnchor="middle" className="text-[8.5px] font-bold fill-academic-800 dark:fill-academic-200">{br}</text>
              </g>
            ))}

            <text x="270" y="255" textAnchor="middle" className="text-[8.5px] fill-academic-500">Direct native OS level communication bypassing the browser JavaScript sandbox</text>
          </svg>
        );

      case 'selenium-grid-architecture':
        return (
          <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
            <defs>
              <marker id="arr-grid" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#3b82f6" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="260" rx="8" className="fill-academic-50 dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-800" strokeWidth="1" />
            <text x="270" y="30" textAnchor="middle" className="text-xs font-bold fill-academic-900 dark:fill-academic-100">Selenium Grid Hub and Node Architecture</text>

            {/* Test Client Machine */}
            <rect x="25" y="90" width="100" height="100" rx="6" className="fill-white dark:fill-academic-800 stroke-blue-500" strokeWidth="1.5" />
            <text x="75" y="115" textAnchor="middle" className="text-[10px] font-bold fill-blue-600 dark:fill-blue-400">Test Client</text>
            <text x="75" y="130" textAnchor="middle" className="text-[8.5px] fill-academic-600 dark:fill-academic-400">TestNG / JUnit</text>
            <text x="75" y="145" textAnchor="middle" className="text-[8.5px] fill-academic-600 dark:fill-academic-400">Parallel Runners</text>
            <text x="75" y="165" textAnchor="middle" className="text-[7.5px] font-mono fill-academic-400">RemoteWebDriver</text>

            {/* Arrow to Hub */}
            <line x1="125" y1="140" x2="175" y2="140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arr-grid)" />
            <text x="150" y="132" textAnchor="middle" className="text-[8px] font-mono fill-academic-500">HTTP/JSON</text>

            {/* Hub Central Server */}
            <rect x="180" y="65" width="130" height="150" rx="8" className="fill-indigo-50 dark:fill-indigo-950/60 stroke-indigo-600" strokeWidth="2" />
            <text x="245" y="90" textAnchor="middle" className="text-xs font-bold fill-indigo-700 dark:fill-indigo-300">Central HUB</text>
            <text x="245" y="105" textAnchor="middle" className="text-[9px] font-mono fill-indigo-600">Port: 4444</text>
            <rect x="195" y="115" width="100" height="24" rx="4" className="fill-white dark:fill-academic-800 stroke-indigo-200 dark:stroke-indigo-800" strokeWidth="1" />
            <text x="245" y="130" textAnchor="middle" className="text-[8.5px] font-medium fill-academic-800 dark:fill-academic-200">Router & Session Queue</text>
            <rect x="195" y="145" width="100" height="24" rx="4" className="fill-white dark:fill-academic-800 stroke-indigo-200 dark:stroke-indigo-800" strokeWidth="1" />
            <text x="245" y="160" textAnchor="middle" className="text-[8.5px] font-medium fill-academic-800 dark:fill-academic-200">Distributor / Node Map</text>
            <rect x="195" y="175" width="100" height="24" rx="4" className="fill-white dark:fill-academic-800 stroke-indigo-200 dark:stroke-indigo-800" strokeWidth="1" />
            <text x="245" y="190" textAnchor="middle" className="text-[8.5px] font-medium fill-academic-800 dark:fill-academic-200">Event Bus</text>

            {/* Arrows from Hub to Nodes */}
            <line x1="310" y1="100" x2="355" y2="75" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arr-grid)" />
            <line x1="310" y1="140" x2="355" y2="140" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arr-grid)" />
            <line x1="310" y1="180" x2="355" y2="205" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arr-grid)" />

            {/* Nodes */}
            {/* Node 1: Windows */}
            <rect x="360" y="45" width="155" height="55" rx="6" className="fill-white dark:fill-academic-800 stroke-emerald-500" strokeWidth="1.5" />
            <text x="437" y="63" textAnchor="middle" className="text-[10px] font-bold fill-emerald-600 dark:fill-emerald-400">Node 1 (Windows 11)</text>
            <text x="437" y="78" textAnchor="middle" className="text-[8.5px] fill-academic-600 dark:fill-academic-400">Chrome v120 + Edge v120</text>
            <text x="437" y="90" textAnchor="middle" className="text-[7.5px] font-mono fill-academic-400">ChromeDriver / msedgedriver</text>

            {/* Node 2: Linux */}
            <rect x="360" y="112" width="155" height="55" rx="6" className="fill-white dark:fill-academic-800 stroke-emerald-500" strokeWidth="1.5" />
            <text x="437" y="130" textAnchor="middle" className="text-[10px] font-bold fill-emerald-600 dark:fill-emerald-400">Node 2 (Linux Ubuntu)</text>
            <text x="437" y="145" textAnchor="middle" className="text-[8.5px] fill-academic-600 dark:fill-academic-400">Firefox (GeckoDriver) + Headless</text>
            <text x="437" y="157" textAnchor="middle" className="text-[7.5px] font-mono fill-academic-400">Dockerized Container</text>

            {/* Node 3: macOS */}
            <rect x="360" y="180" width="155" height="55" rx="6" className="fill-white dark:fill-academic-800 stroke-emerald-500" strokeWidth="1.5" />
            <text x="437" y="198" textAnchor="middle" className="text-[10px] font-bold fill-emerald-600 dark:fill-emerald-400">Node 3 (macOS Sonoma)</text>
            <text x="437" y="213" textAnchor="middle" className="text-[8.5px] fill-academic-600 dark:fill-academic-400">Safari + Chrome</text>
            <text x="437" y="225" textAnchor="middle" className="text-[7.5px] font-mono fill-academic-400">safaridriver</text>

            <text x="270" y="255" textAnchor="middle" className="text-[8.5px] fill-academic-500">Hub distributes tests in parallel to remote Nodes matching desired capabilities (OS, Browser, Version)</text>
          </svg>
        );

      case 'waterfall-model':
        return (
          <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
            <defs>
              <marker id="arr-wf" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#3b82f6" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="260" rx="8" className="fill-academic-50 dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-800" strokeWidth="1" />
            <text x="270" y="30" textAnchor="middle" className="text-xs font-bold fill-academic-900 dark:fill-academic-100">Classical Waterfall Model of Software Development</text>

            {[
              { phase: '1. Requirements Analysis', desc: 'SRS document, feasibility, scope definition', x: 25, y: 48, col: '#2563eb' },
              { phase: '2. System Design', desc: 'High-Level & Low-Level Design (HLD/LLD), Architecture', x: 95, y: 82, col: '#3b82f6' },
              { phase: '3. Implementation (Coding)', desc: 'Module programming, Unit testing by developers', x: 165, y: 116, col: '#4f46e5' },
              { phase: '4. Testing & Verification', desc: 'Integration, System, and Acceptance (UAT) testing', x: 235, y: 150, col: '#7c3aed' },
              { phase: '5. Deployment', desc: 'Release to production environment / customer installation', x: 305, y: 184, col: '#059669' },
              { phase: '6. Maintenance', desc: 'Bug fixes, patches, performance updates, enhancements', x: 375, y: 218, col: '#10b981' }
            ].map((st, idx, arr) => (
              <g key={idx}>
                <rect x={st.x} y={st.y} width="150" height="30" rx="5" fill={st.col} fillOpacity="0.15" stroke={st.col} strokeWidth="1.5" />
                <text x={st.x + 75} y={st.y + 14} textAnchor="middle" className="text-[9px] font-bold fill-academic-900 dark:fill-academic-100">{st.phase}</text>
                <text x={st.x + 75} y={st.y + 24} textAnchor="middle" className="text-[7.5px] fill-academic-500">{st.desc}</text>
                {idx < arr.length - 1 && (
                  <path
                    d={`M ${st.x + 150} ${st.y + 15} H ${arr[idx+1].x + 75} V ${arr[idx+1].y - 2}`}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    markerEnd="url(#arr-wf)"
                  />
                )}
              </g>
            ))}
            <text x="270" y="262" textAnchor="middle" className="text-[8.5px] fill-academic-400">Linear sequential flow: subsequent phases begin strictly upon sign-off and completion of previous phase</text>
          </svg>
        );

      case 'neural-network-working':
        return (
          <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
            <defs>
              <marker id="arr-nn" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#3b82f6" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="260" rx="8" className="fill-academic-50 dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-800" strokeWidth="1" />
            <text x="270" y="30" textAnchor="middle" className="text-xs font-bold fill-academic-900 dark:fill-academic-100">Feedforward Artificial Neural Network Architecture</text>

            {/* Connections Input to Hidden */}
            {[[80, 80], [80, 140], [80, 200]].map(([x1, y1], i) =>
              [[270, 70], [270, 120], [270, 170], [270, 220]].map(([x2, y2], j) => (
                <line key={`ih-${i}-${j}`} x1={x1 + 18} y1={y1} x2={x2 - 18} y2={y2} stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.6" />
              ))
            )}

            {/* Connections Hidden to Output */}
            {[[270, 70], [270, 120], [270, 170], [270, 220]].map(([x1, y1], i) =>
              [[450, 140]].map(([x2, y2], j) => (
                <line key={`ho-${i}-${j}`} x1={x1 + 18} y1={y1} x2={x2 - 18} y2={y2} stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.8" />
              ))
            )}

            {/* Input Layer */}
            <text x="80" y="52" textAnchor="middle" className="text-[10px] font-bold fill-blue-600">Input Layer</text>
            {[
              { label: 'x₁', y: 80, name: 'Feature 1' },
              { label: 'x₂', y: 140, name: 'Feature 2' },
              { label: 'x₃', y: 200, name: 'Feature 3' }
            ].map((node, idx) => (
              <g key={idx}>
                <circle cx="80" cy={node.y} r="18" className="fill-blue-100 dark:fill-blue-950 stroke-blue-500" strokeWidth="2" />
                <text x="80" y={node.y + 4} textAnchor="middle" className="text-xs font-bold fill-blue-700 dark:fill-blue-300">{node.label}</text>
                <text x="40" y={node.y + 4} textAnchor="end" className="text-[8px] fill-academic-400">{node.name}</text>
              </g>
            ))}

            {/* Hidden Layer */}
            <text x="270" y="45" textAnchor="middle" className="text-[10px] font-bold fill-purple-600">Hidden Layer</text>
            {[
              { label: 'h₁', y: 70 },
              { label: 'h₂', y: 120 },
              { label: 'h₃', y: 170 },
              { label: 'h₄', y: 220 }
            ].map((node, idx) => (
              <g key={idx}>
                <circle cx="270" cy={node.y} r="18" className="fill-purple-100 dark:fill-purple-950 stroke-purple-500" strokeWidth="2" />
                <text x="270" y={node.y + 4} textAnchor="middle" className="text-xs font-bold fill-purple-700 dark:fill-purple-300">{node.label}</text>
              </g>
            ))}
            <text x="270" y="252" textAnchor="middle" className="text-[8px] font-mono fill-academic-500">z = Σ wᵢxᵢ + b | a = σ(z)</text>

            {/* Output Layer */}
            <text x="450" y="105" textAnchor="middle" className="text-[10px] font-bold fill-emerald-600">Output Layer</text>
            <circle cx="450" cy="140" r="18" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-500" strokeWidth="2" />
            <text x="450" y="144" textAnchor="middle" className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300">ŷ</text>
            <text x="495" y="144" className="text-[8px] fill-academic-400">Prediction</text>

            <text x="270" y="270" textAnchor="middle" className="text-[8.5px] fill-academic-400">Forward pass: input features multiplied by weight matrices, summed with bias, and transformed by non-linear activations</text>
          </svg>
        );

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
