import React from 'react';

interface DiagramProps {
  onHover?: (info: string | null) => void;
}

export const ByzantineGeneralsDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 320" className="w-full h-auto select-none">
    {/* Target City in Center */}
    <rect x="210" y="110" width="120" height="90" rx="8" className="fill-amber-100 dark:fill-amber-950/60 stroke-amber-500" strokeWidth="2" />
    <text x="270" y="145" textAnchor="middle" className="text-xs font-bold fill-amber-900 dark:fill-amber-200">ENEMY CITY</text>
    <text x="270" y="165" textAnchor="middle" className="text-[10px] fill-amber-700 dark:fill-amber-400">Target of Attack</text>
    <text x="270" y="180" textAnchor="middle" className="text-[9px] fill-amber-600 dark:fill-amber-500">(Requires Consensus)</text>

    {/* General 1 (Commander / Loyalist) - Top */}
    <g
      className="cursor-pointer transition-transform hover:scale-105"
      onMouseEnter={() => onHover?.('General 1 (Commander): Sends order "ATTACK at dawn"')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="270" cy="40" r="28" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
      <text x="270" y="38" textAnchor="middle" className="text-[11px] font-bold fill-blue-800 dark:fill-blue-200">Gen 1</text>
      <text x="270" y="52" textAnchor="middle" className="text-[9px] font-semibold fill-emerald-600">Loyal</text>
    </g>

    {/* General 2 (Loyalist) - Left */}
    <g
      className="cursor-pointer transition-transform hover:scale-105"
      onMouseEnter={() => onHover?.('General 2 (Lieutenant): Receives order, echoes to peers')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="70" cy="155" r="28" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
      <text x="70" y="153" textAnchor="middle" className="text-[11px] font-bold fill-blue-800 dark:fill-blue-200">Gen 2</text>
      <text x="70" y="167" textAnchor="middle" className="text-[9px] font-semibold fill-emerald-600">Loyal</text>
    </g>

    {/* General 3 (Traitor / Byzantine Node) - Right */}
    <g
      className="cursor-pointer transition-transform hover:scale-105"
      onMouseEnter={() => onHover?.('General 3 (TRAITOR): Confuses network by echoing conflicting orders (tells Gen 4 "RETREAT")')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="470" cy="155" r="28" className="fill-red-100 dark:fill-red-950 stroke-red-600" strokeWidth="2.5" />
      <text x="470" y="153" textAnchor="middle" className="text-[11px] font-bold fill-red-800 dark:fill-red-200">Gen 3</text>
      <text x="470" y="167" textAnchor="middle" className="text-[9px] font-bold fill-red-600">Traitor ⚠️</text>
    </g>

    {/* General 4 (Loyalist) - Bottom */}
    <g
      className="cursor-pointer transition-transform hover:scale-105"
      onMouseEnter={() => onHover?.('General 4 (Lieutenant): Must deduce true consensus despite contradictory traitor messages')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="270" cy="270" r="28" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
      <text x="270" y="268" textAnchor="middle" className="text-[11px] font-bold fill-blue-800 dark:fill-blue-200">Gen 4</text>
      <text x="270" y="282" textAnchor="middle" className="text-[9px] font-semibold fill-emerald-600">Loyal</text>
    </g>

    {/* Messenger Arrows with Labels */}
    <defs>
      <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="#2563eb" />
      </marker>
      <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="#ef4444" />
      </marker>
    </defs>

    {/* Gen 1 to Gen 2: Attack */}
    <line x1="245" y1="55" x2="95" y2="135" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-blue)" />
    <text x="155" y="85" className="text-[9px] font-semibold fill-blue-600 dark:fill-blue-400">"Attack"</text>

    {/* Gen 1 to Gen 3: Attack */}
    <line x1="295" y1="55" x2="445" y2="135" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-blue)" />
    <text x="365" y="85" className="text-[9px] font-semibold fill-blue-600 dark:fill-blue-400">"Attack"</text>

    {/* Gen 2 to Gen 4: Attack */}
    <line x1="95" y1="175" x2="245" y2="255" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-blue)" />
    <text x="145" y="225" className="text-[9px] font-semibold fill-blue-600 dark:fill-blue-400">"Attack"</text>

    {/* Gen 3 (Traitor) to Gen 4: Malicious "Retreat" */}
    <line x1="445" y1="175" x2="295" y2="255" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2" markerEnd="url(#arrow-red)" />
    <text x="360" y="225" className="text-[9px] font-bold fill-red-600">"Retreat!" (False)</text>

    {/* Bottom Mathematical Rule Box */}
    <rect x="50" y="295" width="440" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="310" textAnchor="middle" className="text-[10px] font-mono fill-academic-700 dark:fill-academic-300">
      BFT Condition: N ≥ 3f + 1 | Tolerates up to f &lt; 33.3% malicious Byzantine nodes
    </text>
  </svg>
);

export const IotaTangleDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    <defs>
      <marker id="tangle-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="#0d9488" />
      </marker>
    </defs>

    {/* Genesis Transaction */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Genesis Transaction: Root of the Tangle containing all initial tokens')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="115" width="55" height="40" rx="6" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="2" />
      <text x="47" y="135" textAnchor="middle" className="text-[10px] font-bold fill-purple-800 dark:fill-purple-200">Genesis</text>
      <text x="47" y="147" textAnchor="middle" className="text-[8px] fill-purple-600">Blockless</text>
    </g>

    {/* Confirmed Transactions (Layer 1) */}
    {[
      { x: 120, y: 60, id: 'Tx 1', weight: 'High' },
      { x: 120, y: 170, id: 'Tx 2', weight: 'High' },
      { x: 220, y: 40, id: 'Tx 3', weight: 'High' },
      { x: 220, y: 120, id: 'Tx 4', weight: 'Med' },
      { x: 220, y: 200, id: 'Tx 5', weight: 'High' },
      { x: 330, y: 70, id: 'Tx 6', weight: 'Med' },
      { x: 330, y: 160, id: 'Tx 7', weight: 'Med' },
    ].map((node, i) => (
      <g
        key={i}
        className="cursor-pointer transition-transform hover:scale-105"
        onMouseEnter={() => onHover?.(`${node.id}: Confirmed transaction (cumulative weight: ${node.weight})`)}
        onMouseLeave={() => onHover?.(null)}
      >
        <rect x={node.x} y={node.y} width="55" height="40" rx="6" className="fill-teal-100 dark:fill-teal-950 stroke-teal-600" strokeWidth="1.5" />
        <text x={node.x + 27} y={node.y + 20} textAnchor="middle" className="text-[10px] font-bold fill-teal-900 dark:fill-teal-100">{node.id}</text>
        <text x={node.x + 27} y={node.y + 32} textAnchor="middle" className="text-[8px] fill-emerald-600 font-semibold">Verified</text>
      </g>
    ))}

    {/* Tips (Unapproved Transactions waiting for validation) */}
    {[
      { x: 440, y: 50, id: 'Tip A' },
      { x: 440, y: 130, id: 'Tip B' },
      { x: 440, y: 210, id: 'Tip C' },
    ].map((tip, i) => (
      <g
        key={i}
        className="cursor-pointer transition-transform hover:scale-105"
        onMouseEnter={() => onHover?.(`${tip.id} (TIP): New unapproved transaction. Must validate 2 prior transactions to join.`)}
        onMouseLeave={() => onHover?.(null)}
      >
        <rect x={tip.x} y={tip.y} width="60" height="40" rx="6" className="fill-amber-100 dark:fill-amber-950/70 stroke-amber-500" strokeWidth="2" strokeDasharray="3 2" />
        <text x={tip.x + 30} y={tip.y + 20} textAnchor="middle" className="text-[10px] font-bold fill-amber-900 dark:fill-amber-200">{tip.id}</text>
        <text x={tip.x + 30} y={tip.y + 32} textAnchor="middle" className="text-[8px] fill-amber-600 font-semibold">Tip (New)</text>
      </g>
    ))}

    {/* DAG Verification Arrows (Each approves two prior) */}
    <path d="M 120 80 L 75 125" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#tangle-arrow)" />
    <path d="M 120 180 L 75 145" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#tangle-arrow)" />

    <path d="M 220 60 L 175 75" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#tangle-arrow)" />
    <path d="M 220 70 L 175 175" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#tangle-arrow)" />

    <path d="M 220 140 L 175 90" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#tangle-arrow)" />
    <path d="M 220 145 L 175 185" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#tangle-arrow)" />

    <path d="M 330 90 L 275 60" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#tangle-arrow)" />
    <path d="M 330 95 L 275 135" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#tangle-arrow)" />

    {/* Tips approving 2 previous txs */}
    <path d="M 440 70 L 385 85" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#tangle-arrow)" />
    <path d="M 440 75 L 385 170" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#tangle-arrow)" />

    <path d="M 440 150 L 385 95" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#tangle-arrow)" />
    <path d="M 440 155 L 385 175" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#tangle-arrow)" />

    {/* Bottom Legend */}
    <rect x="40" y="255" width="460" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="269" textAnchor="middle" className="text-[10px] font-mono fill-academic-700 dark:fill-academic-300">
      Directed Acyclic Graph (DAG) | Zero Transaction Fees | Scalability increases with transaction volume
    </text>
  </svg>
);

export const BlockchainTypesDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 290" className="w-full h-auto select-none">
    <text x="270" y="22" textAnchor="middle" className="text-xs font-bold fill-academic-800 dark:fill-academic-200">
      BLOCKCHAIN CLASSIFICATION SPECTRUM
    </text>

    {/* 4 Quadrants / Cards */}
    {/* 1. Public Blockchain */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Public: 100% permissionless, anonymous, decentralized (Bitcoin, Ethereum)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="45" width="235" height="100" rx="8" className="fill-blue-50 dark:fill-blue-950/40 stroke-blue-500" strokeWidth="1.5" />
      <text x="35" y="70" className="text-xs font-bold fill-blue-700 dark:fill-blue-300">1. Public Blockchain</text>
      <text x="35" y="88" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Permissionless access (Anyone can join)</text>
      <text x="35" y="103" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Fully decentralized, slower TPS</text>
      <text x="35" y="118" className="text-[10px] fill-academic-600 dark:fill-academic-400">• High transparency, proof-based consensus</text>
      <text x="35" y="133" className="text-[10px] font-semibold fill-blue-600">e.g. Bitcoin, Ethereum Mainnet</text>
    </g>

    {/* 2. Private Blockchain */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Private: Controlled by single enterprise, closed network, ultra fast (Hyperledger Besu)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="285" y="45" width="235" height="100" rx="8" className="fill-rose-50 dark:fill-rose-950/40 stroke-rose-500" strokeWidth="1.5" />
      <text x="300" y="70" className="text-xs font-bold fill-rose-700 dark:fill-rose-300">2. Private Blockchain</text>
      <text x="300" y="88" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Single organizational authority</text>
      <text x="300" y="103" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Strict permissioned access & identity</text>
      <text x="300" y="118" className="text-[10px] fill-academic-600 dark:fill-academic-400">• High throughput (thousands of TPS)</text>
      <text x="300" y="133" className="text-[10px] font-semibold fill-rose-600">e.g. Hyperledger Fabric, Multichain</text>
    </g>

    {/* 3. Consortium Blockchain */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Consortium: Governed by a federation of multiple companies, pre-selected nodes (R3 Corda, B3i)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="160" width="235" height="100" rx="8" className="fill-emerald-50 dark:fill-emerald-950/40 stroke-emerald-500" strokeWidth="1.5" />
      <text x="35" y="185" className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300">3. Consortium Blockchain</text>
      <text x="35" y="203" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Governed by a group/federation of entities</text>
      <text x="35" y="218" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Multi-stakeholder permissioned consensus</text>
      <text x="35" y="233" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Ideal for banking & supply chain consortia</text>
      <text x="35" y="248" className="text-[10px] font-semibold fill-emerald-600">e.g. R3 Corda, we.trade, Energy Web</text>
    </g>

    {/* 4. Hybrid Blockchain */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Hybrid: Combines private enterprise privacy with public cryptographic verification (Dragonchain, XinFin)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="285" y="160" width="235" height="100" rx="8" className="fill-purple-50 dark:fill-purple-950/40 stroke-purple-500" strokeWidth="1.5" />
      <text x="300" y="185" className="text-xs font-bold fill-purple-700 dark:fill-purple-300">4. Hybrid Blockchain</text>
      <text x="300" y="203" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Dual architecture: public + private layers</text>
      <text x="300" y="218" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Sensitive data private; hash anchored publicly</text>
      <text x="300" y="233" className="text-[10px] fill-academic-600 dark:fill-academic-400">• Highly flexible governance and compliance</text>
      <text x="300" y="248" className="text-[10px] font-semibold fill-purple-600">e.g. Dragonchain, XinFin (XDC)</text>
    </g>

    {/* Axis spectrum bar */}
    <line x1="20" y1="275" x2="520" y2="275" stroke="#94a3b8" strokeWidth="2" />
    <text x="25" y="287" className="text-[9px] font-semibold fill-blue-600">← Fully Decentralized & Permissionless</text>
    <text x="400" y="287" className="text-[9px] font-semibold fill-rose-600">Centralized Enterprise Authority →</text>
  </svg>
);

export const CordaArchitectureDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* Notary Service Cluster (Top) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Notary Cluster: Prevents double-spending by checking transaction uniqueness without seeing business data')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="195" y="20" width="150" height="55" rx="8" className="fill-amber-100 dark:fill-amber-950/60 stroke-amber-500" strokeWidth="2" />
      <text x="270" y="42" textAnchor="middle" className="text-xs font-bold fill-amber-900 dark:fill-amber-200">NOTARY POOL</text>
      <text x="270" y="58" textAnchor="middle" className="text-[9px] fill-amber-700 dark:fill-amber-400">Uniqueness & Time-stamping</text>
    </g>

    {/* Node Bank A */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Bank A: Participant node; maintains private state of transactions it is party to')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="40" y="140" width="130" height="75" rx="8" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
      <text x="105" y="165" textAnchor="middle" className="text-xs font-bold fill-blue-800 dark:fill-blue-200">Bank Node A</text>
      <text x="105" y="180" textAnchor="middle" className="text-[9px] fill-academic-600 dark:fill-academic-400">Vault & CorDapp</text>
      <text x="105" y="195" textAnchor="middle" className="text-[8px] fill-emerald-600 font-semibold">Knows Party B Only</text>
    </g>

    {/* Node Bank B */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Bank B: Bilateral trading partner; receives point-to-point agreement')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="370" y="140" width="130" height="75" rx="8" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
      <text x="435" y="165" textAnchor="middle" className="text-xs font-bold fill-blue-800 dark:fill-blue-200">Bank Node B</text>
      <text x="435" y="180" textAnchor="middle" className="text-[9px] fill-academic-600 dark:fill-academic-400">Vault & CorDapp</text>
      <text x="435" y="195" textAnchor="middle" className="text-[8px] fill-emerald-600 font-semibold">Bilateral Privacy</text>
    </g>

    {/* Node Bank C (Uninvolved Party - Demonstrates privacy) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Bank C: Uninvolved node. DOES NOT receive or see Bank A and B transaction! (No global broadcast)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="205" y="195" width="130" height="50" rx="6" className="fill-academic-100 dark:fill-academic-900 stroke-academic-400" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="270" y="218" textAnchor="middle" className="text-[11px] font-bold fill-academic-600 dark:fill-academic-400">Bank Node C</text>
      <text x="270" y="233" textAnchor="middle" className="text-[8px] fill-rose-500 font-semibold">Zero Data Shared ❌</text>
    </g>

    {/* Point-to-Point Transaction between A and B */}
    <defs>
      <marker id="arrow-corda" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="#2563eb" />
      </marker>
    </defs>
    <line x1="170" y1="170" x2="370" y2="170" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrow-corda)" />
    <text x="270" y="162" textAnchor="middle" className="text-[10px] font-bold fill-blue-600 dark:fill-blue-400">
      Direct Point-to-Point State Exchange (No Global Broadcast)
    </text>

    {/* Notary verification lines */}
    <line x1="105" y1="140" x2="215" y2="75" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="435" y1="140" x2="325" y2="75" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 3" />
    <text x="140" y="98" className="text-[8px] font-mono fill-amber-600">Notarize Tx</text>

    {/* Bottom summary */}
    <rect x="40" y="255" width="460" height="20" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="268" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      R3 Corda: "Need-to-Know" data sharing strictly between transacting counterparties
    </text>
  </svg>
);

export const HyperledgerFabricDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* Client Application */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Client App: Submits transaction proposal to endorsing peers')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="105" width="90" height="60" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="65" y="132" textAnchor="middle" className="text-xs font-bold fill-blue-800 dark:fill-blue-200">Client App</text>
      <text x="65" y="148" textAnchor="middle" className="text-[9px] fill-blue-600">Proposer</text>
    </g>

    {/* Endorsing Peers (Execute Step) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Endorsing Peers: Execute chaincode in isolation and sign endorsement certificate')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="150" y="45" width="115" height="75" rx="6" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
      <text x="207" y="70" textAnchor="middle" className="text-xs font-bold fill-emerald-800 dark:fill-emerald-200">Endorsing Peer</text>
      <text x="207" y="86" textAnchor="middle" className="text-[9px] fill-emerald-700">Runs Chaincode</text>
      <text x="207" y="102" textAnchor="middle" className="text-[8px] font-mono fill-emerald-600">Sign Endorsement</text>
    </g>

    {/* Orderer Node (Order Step) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Orderer Node: Sequences endorsed transactions chronologically into blocks (Raft consensus)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="305" y="45" width="105" height="75" rx="6" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="1.5" />
      <text x="357" y="70" textAnchor="middle" className="text-xs font-bold fill-purple-800 dark:fill-purple-200">Ordering Service</text>
      <text x="357" y="86" textAnchor="middle" className="text-[9px] fill-purple-700">Raft Consensus</text>
      <text x="357" y="102" textAnchor="middle" className="text-[8px] font-mono fill-purple-600">Pack Blocks</text>
    </g>

    {/* Committing Peers (Validate & Commit Step) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Committing Peers: Validate endorsements, check concurrency (read-write conflict), and write to ledger')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="440" y="105" width="85" height="75" rx="6" className="fill-teal-100 dark:fill-teal-950 stroke-teal-600" strokeWidth="1.5" />
      <text x="482" y="132" textAnchor="middle" className="text-xs font-bold fill-teal-800 dark:fill-teal-200">Commit Peer</text>
      <text x="482" y="148" textAnchor="middle" className="text-[9px] fill-teal-700">Validates State</text>
      <text x="482" y="162" textAnchor="middle" className="text-[8px] font-mono fill-teal-600">Ledger Append</text>
    </g>

    {/* Membership Service Provider (MSP) - Security Layer */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('MSP (Membership Service Provider): Issues X.509 PKI certificates to verify identities')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="150" y="165" width="260" height="50" rx="6" className="fill-amber-50 dark:fill-amber-950/40 stroke-amber-500" strokeWidth="1.5" />
      <text x="280" y="188" textAnchor="middle" className="text-xs font-bold fill-amber-800 dark:fill-amber-200">MSP & Private Channels</text>
      <text x="280" y="204" textAnchor="middle" className="text-[9px] fill-amber-700 dark:fill-amber-400">X.509 PKI Digital Identity & Encrypted Sub-channels</text>
    </g>

    {/* Workflow connecting lines */}
    <line x1="110" y1="120" x2="150" y2="85" stroke="#2563eb" strokeWidth="1.5" />
    <line x1="265" y1="80" x2="305" y2="80" stroke="#059669" strokeWidth="1.5" />
    <line x1="410" y1="80" x2="440" y2="120" stroke="#7c3aed" strokeWidth="1.5" />

    {/* Flow Label Box */}
    <rect x="30" y="240" width="480" height="24" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="256" textAnchor="middle" className="text-[10px] font-mono fill-academic-700 dark:fill-academic-300">
      Hyperledger Fabric Workflow: 1. Execute (Endorsement) → 2. Order (Consensus) → 3. Validate & Commit
    </text>
  </svg>
);

export const PoWvsPoSDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* Left Side: Proof of Work */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Proof of Work: Computational puzzle solving (SHA-256), massive energy consumption, 51% hashrate security')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="20" width="235" height="215" rx="8" className="fill-orange-50 dark:fill-orange-950/30 stroke-orange-500" strokeWidth="1.5" />
      <text x="137" y="45" textAnchor="middle" className="text-xs font-bold fill-orange-700 dark:fill-orange-300">Proof of Work (PoW)</text>
      
      {/* Miner ASIC rig graphic */}
      <rect x="60" y="65" width="155" height="40" rx="4" className="fill-orange-200 dark:fill-orange-900 stroke-orange-600" />
      <text x="137" y="88" textAnchor="middle" className="text-[10px] font-mono font-bold fill-orange-900 dark:fill-orange-100">Miner ASIC / GPU Rig</text>

      {/* Hash computation */}
      <text x="137" y="125" textAnchor="middle" className="text-[10px] font-mono fill-academic-700 dark:fill-academic-300">SHA-256(Header + Nonce) &lt; Target</text>
      <text x="137" y="145" textAnchor="middle" className="text-[9px] fill-academic-500">• Resource: High Electricity & Hardware</text>
      <text x="137" y="162" textAnchor="middle" className="text-[9px] fill-academic-500">• Attack Cost: 51% Hashrate acquisition</text>
      <text x="137" y="179" textAnchor="middle" className="text-[9px] fill-academic-500">• Reward: Block Subsidy + Tx Fees</text>
      
      <rect x="60" y="195" width="155" height="24" rx="4" className="fill-orange-100 dark:fill-orange-950 stroke-orange-400" />
      <text x="137" y="211" textAnchor="middle" className="text-[9px] font-semibold fill-orange-700 dark:fill-orange-300">Example: Bitcoin (BTC)</text>
    </g>

    {/* Right Side: Proof of Stake */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Proof of Stake: Economic capital collateral, 99.95% energy reduction, slashing penalty for dishonest validators')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="285" y="20" width="235" height="215" rx="8" className="fill-emerald-50 dark:fill-emerald-950/30 stroke-emerald-500" strokeWidth="1.5" />
      <text x="402" y="45" textAnchor="middle" className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300">Proof of Stake (PoS)</text>

      {/* Validator Staking graphic */}
      <rect x="325" y="65" width="155" height="40" rx="4" className="fill-emerald-200 dark:fill-emerald-900 stroke-emerald-600" />
      <text x="402" y="88" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-900 dark:fill-emerald-100">Validator Staking (32 ETH)</text>

      {/* Slot Leader Selection */}
      <text x="402" y="125" textAnchor="middle" className="text-[10px] font-mono fill-academic-700 dark:fill-academic-300">P(Leader) ∝ Collateral Staked</text>
      <text x="402" y="145" textAnchor="middle" className="text-[9px] fill-academic-500">• Resource: Financial Capital (Tokens)</text>
      <text x="402" y="162" textAnchor="middle" className="text-[9px] fill-academic-500">• Penalty: Slashing (Burning deposit)</text>
      <text x="402" y="179" textAnchor="middle" className="text-[9px] fill-academic-500">• Efficiency: 99.95% less energy consumed</text>

      <rect x="325" y="195" width="155" height="24" rx="4" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-400" />
      <text x="402" y="211" textAnchor="middle" className="text-[9px] font-semibold fill-emerald-700 dark:fill-emerald-300">Example: Ethereum 2.0</text>
    </g>

    {/* Bottom summary bar */}
    <rect x="20" y="250" width="500" height="20" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="264" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Comparison: PoW relies on physical thermodynamic work; PoS relies on economic capital security
    </text>
  </svg>
);
