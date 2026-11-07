import React from 'react';

interface DiagramProps {
  onHover?: (info: string | null) => void;
}

export const EthereumStackDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 290" className="w-full h-auto select-none">
    <text x="270" y="22" textAnchor="middle" className="text-xs font-bold fill-academic-800 dark:fill-academic-200">
      THE 5-LAYER ETHEREUM ARCHITECTURAL STACK
    </text>

    {/* Level 5: End-User Applications */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Level 5: DApps & Frontends (React, Web3 Browsers, Uniswap, OpenSea, Mobile Apps)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="40" y="38" width="460" height="38" rx="6" className="fill-indigo-100 dark:fill-indigo-950 stroke-indigo-600" strokeWidth="1.5" />
      <text x="55" y="61" className="text-xs font-bold fill-indigo-900 dark:fill-indigo-100">Level 5: End-User Applications (DApps)</text>
      <text x="485" y="61" textAnchor="end" className="text-[10px] font-mono fill-indigo-700 dark:fill-indigo-300">Web/Mobile UI, Wallets (MetaMask)</text>
    </g>

    {/* Level 4: Client APIs */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Level 4: Client APIs & Libraries (Ethers.js, Web3.js, Web3.py) translating JSON-RPC')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="40" y="84" width="460" height="38" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="55" y="107" className="text-xs font-bold fill-blue-900 dark:fill-blue-100">Level 4: Ethereum Client APIs</text>
      <text x="485" y="107" textAnchor="end" className="text-[10px] font-mono fill-blue-700 dark:fill-blue-300">Ethers.js, Web3.js, JSON-RPC</text>
    </g>

    {/* Level 3: Nodes & Clients */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Level 3: Nodes & Network (Geth, Nethermind, Besu) maintaining state and consensus')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="40" y="130" width="460" height="38" rx="6" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
      <text x="55" y="153" className="text-xs font-bold fill-emerald-900 dark:fill-emerald-100">Level 3: Ethereum Nodes & Clients</text>
      <text x="485" y="153" textAnchor="end" className="text-[10px] font-mono fill-emerald-700 dark:fill-emerald-300">Geth, Nethermind, P2P DEVp2p</text>
    </g>

    {/* Level 2: Smart Contracts */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Level 2: Smart Contracts (Solidity/Vyper code compiled into EVM Bytecode)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="40" y="176" width="460" height="38" rx="6" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="1.5" />
      <text x="55" y="199" className="text-xs font-bold fill-purple-900 dark:fill-purple-100">Level 2: Smart Contracts</text>
      <text x="485" y="199" textAnchor="end" className="text-[10px] font-mono fill-purple-700 dark:fill-purple-300">Solidity, Vyper, Bytecode & ABI</text>
    </g>

    {/* Level 1: EVM */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Level 1: Ethereum Virtual Machine (EVM) — Stack-based bytecode runtime engine')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="40" y="222" width="460" height="42" rx="6" className="fill-amber-100 dark:fill-amber-950 stroke-amber-600" strokeWidth="2" />
      <text x="55" y="247" className="text-xs font-bold fill-amber-900 dark:fill-amber-100">Level 1: Ethereum Virtual Machine (EVM)</text>
      <text x="485" y="247" textAnchor="end" className="text-[10px] font-mono font-bold fill-amber-700 dark:fill-amber-300">State Transition Engine & Opcodes</text>
    </g>

    {/* Bottom summary text */}
    <text x="270" y="280" textAnchor="middle" className="text-[9px] font-mono fill-academic-500">
      Architecture extends from low-level opcode runtime (EVM) to high-level user interface (DApps)
    </text>
  </svg>
);

export const SmartContractLifecycleDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* Step 1: Solidity Authoring */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('1. Authoring: Writing source code in Solidity (.sol) with state variables and functions')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="15" y="45" width="85" height="70" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="57" y="70" textAnchor="middle" className="text-[10px] font-bold fill-blue-800 dark:fill-blue-200">1. Solidity</text>
      <text x="57" y="85" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Contract.sol</text>
      <text x="57" y="98" textAnchor="middle" className="text-[7px] font-mono fill-blue-600">Source code</text>
    </g>

    <line x1="100" y1="80" x2="120" y2="80" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Step 2: solc Compiler */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('2. Compiler (solc): Generates raw EVM Bytecode and ABI JSON interface')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="120" y="45" width="85" height="70" rx="6" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="1.5" />
      <text x="162" y="70" textAnchor="middle" className="text-[10px] font-bold fill-purple-800 dark:fill-purple-200">2. Compiler</text>
      <text x="162" y="85" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">solc compiler</text>
      <text x="162" y="98" textAnchor="middle" className="text-[7px] font-mono fill-purple-600">Bytecode + ABI</text>
    </g>

    <line x1="205" y1="80" x2="225" y2="80" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Step 3: Transaction Signing (MetaMask) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('3. Sign Deployment: MetaMask signs contract creation transaction with payload to address 0x0')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="225" y="45" width="85" height="70" rx="6" className="fill-amber-100 dark:fill-amber-950 stroke-amber-600" strokeWidth="1.5" />
      <text x="267" y="70" textAnchor="middle" className="text-[10px] font-bold fill-amber-800 dark:fill-amber-200">3. Sign Tx</text>
      <text x="267" y="85" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">MetaMask / EOA</text>
      <text x="267" y="98" textAnchor="middle" className="text-[7px] font-mono fill-amber-600">Gas Prepaid</text>
    </g>

    <line x1="310" y1="80" x2="330" y2="80" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Step 4: Network Mining / Validation */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('4. Validation: Ethereum nodes execute constructor bytecode in EVM and store runtime code')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="330" y="45" width="85" height="70" rx="6" className="fill-teal-100 dark:fill-teal-950 stroke-teal-600" strokeWidth="1.5" />
      <text x="372" y="70" textAnchor="middle" className="text-[10px] font-bold fill-teal-800 dark:fill-teal-200">4. EVM Deploy</text>
      <text x="372" y="85" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Node consensus</text>
      <text x="372" y="98" textAnchor="middle" className="text-[7px] font-mono fill-teal-600">State updated</text>
    </g>

    <line x1="415" y1="80" x2="435" y2="80" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Step 5: Live Contract */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('5. On-Chain Live: Assigned permanent 20-byte address (e.g. 0x71C...aB); callable by DApps')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="435" y="45" width="90" height="70" rx="6" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="2" />
      <text x="480" y="70" textAnchor="middle" className="text-[10px] font-bold fill-emerald-800 dark:fill-emerald-200">5. Live 0x...</text>
      <text x="480" y="85" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Immutable</text>
      <text x="480" y="98" textAnchor="middle" className="text-[7px] font-mono fill-emerald-600">Contract Acc</text>
    </g>

    {/* Execution Workflow Box (Bottom half) */}
    <rect x="25" y="145" width="490" height="95" rx="8" className="fill-academic-50 dark:fill-academic-900/60 stroke-academic-200 dark:stroke-academic-800" />
    <text x="40" y="168" className="text-xs font-bold fill-academic-800 dark:fill-academic-200">On-Chain Interaction & State Execution</text>
    <text x="40" y="188" className="text-[10px] fill-academic-600 dark:fill-academic-400">
      DApp User ──[calls function(arg)]──&gt; EVM loads Contract Bytecode ──&gt; Gas Meter validates balance
    </text>
    <text x="40" y="206" className="text-[10px] fill-academic-600 dark:fill-academic-400">
      • Success: Permanent State variables update in Merkle Patricia Trie; Events logged on-chain.
    </text>
    <text x="40" y="224" className="text-[10px] font-semibold fill-rose-600">
      • Failure / Revert: If require() fails or gas runs out, all state rolls back to initial block state.
    </text>

    {/* Bottom summary text */}
    <text x="270" y="262" textAnchor="middle" className="text-[9px] font-mono fill-academic-500">
      Address Computation: Address = Keccak-256(RLP(sender_address, nonce))[12:]
    </text>
  </svg>
);

export const GasExecutionDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 270" className="w-full h-auto select-none">
    {/* Gas Input Parameters */}
    <rect x="20" y="20" width="500" height="45" rx="6" className="fill-amber-50 dark:fill-amber-950/40 stroke-amber-400" strokeWidth="1.5" />
    <text x="35" y="40" className="text-[11px] font-bold fill-amber-900 dark:fill-amber-200">Gas Configuration & Total Upfront Fee</text>
    <text x="35" y="55" className="text-[10px] font-mono fill-academic-700 dark:fill-academic-300">
      Gas Limit (e.g. 100,000 units) × Gas Price (e.g. 25 Gwei) = Maximum Fee Bound (0.0025 ETH)
    </text>

    {/* EVM Metering Box */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('EVM Opcode Meter: Deducts gas per instruction (ADD = 3 gas, SSTORE = 20,000 gas)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="140" y="85" width="260" height="55" rx="8" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="2" />
      <text x="270" y="108" textAnchor="middle" className="text-xs font-bold fill-purple-900 dark:fill-purple-100">EVM Gas Execution Meter</text>
      <text x="270" y="125" textAnchor="middle" className="text-[9px] font-mono fill-purple-700 dark:fill-purple-300">Gas Remaining = Gas Limit - ∑(Opcode Costs)</text>
    </g>

    {/* Outcome Branch 1: Success (Left) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Success Outcome: Execution completes; unspent gas is refunded to the sender account')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="165" width="235" height="75" rx="6" className="fill-emerald-50 dark:fill-emerald-950/40 stroke-emerald-500" strokeWidth="1.5" />
      <text x="35" y="188" className="text-xs font-bold fill-emerald-800 dark:fill-emerald-200">✅ Case A: Execution Successful</text>
      <text x="35" y="206" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Actual gas consumed: e.g. 45,000 units</text>
      <text x="35" y="222" className="text-[9px] font-semibold fill-emerald-600">• Refund: 55,000 unused gas returned to sender</text>
    </g>

    {/* Outcome Branch 2: Out of Gas Revert (Right) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Out of Gas (OOG): Gas reaches 0; transaction halts, state reverts completely, fee kept by validator')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="285" y="165" width="235" height="75" rx="6" className="fill-rose-50 dark:fill-rose-950/40 stroke-rose-500" strokeWidth="1.5" />
      <text x="300" y="188" className="text-xs font-bold fill-rose-800 dark:fill-rose-200">❌ Case B: Out of Gas (OOG Error)</text>
      <text x="300" y="206" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Gas reaches 0 before STOP/RETURN</text>
      <text x="300" y="222" className="text-[9px] font-bold fill-rose-600">• State Reverts: All changes rolled back; fee kept</text>
    </g>

    {/* Bottom summary text */}
    <rect x="20" y="248" width="500" height="18" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="261" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Anti-Loop Security: Halting Problem solved because infinite loops exhaust gas and terminate safely
    </text>
  </svg>
);

export const EVMArchitectureDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* EVM Execution Sandbox Container */}
    <rect x="15" y="15" width="510" height="235" rx="8" className="fill-academic-50 dark:fill-academic-900/40 stroke-academic-300 dark:stroke-academic-700" strokeWidth="2" />
    <text x="30" y="35" className="text-xs font-bold fill-academic-800 dark:fill-academic-200">
      EVM INTERNAL RUNTIME ENGINE ARCHITECTURE
    </text>

    {/* Component 1: Program Code ROM */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Program Code ROM: Immutable byte array loaded with compiled contract bytecode')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="30" y="55" width="145" height="75" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="102" y="78" textAnchor="middle" className="text-[10px] font-bold fill-blue-900 dark:fill-blue-100">Program Code ROM</text>
      <text x="102" y="95" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Immutable Bytecode</text>
      <text x="102" y="112" textAnchor="middle" className="text-[8px] font-mono fill-blue-700 dark:fill-blue-300">PC Instruction Counter</text>
    </g>

    {/* Component 2: Execution Stack */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Stack: 1024-depth LIFO stack with 256-bit word size. Opcodes push and pop operands here.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="195" y="55" width="145" height="75" rx="6" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="1.5" />
      <text x="267" y="78" textAnchor="middle" className="text-[10px] font-bold fill-purple-900 dark:fill-purple-100">Execution Stack</text>
      <text x="267" y="95" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">1024 Max Depth (LIFO)</text>
      <text x="267" y="112" textAnchor="middle" className="text-[8px] font-mono fill-purple-700 dark:fill-purple-300">256-bit Word Size</text>
    </g>

    {/* Component 3: Volatile Memory (RAM) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Volatile Memory: Temporary byte-addressed RAM for complex function computations; cleared after call')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="360" y="55" width="145" height="75" rx="6" className="fill-amber-100 dark:fill-amber-950 stroke-amber-600" strokeWidth="1.5" />
      <text x="432" y="78" textAnchor="middle" className="text-[10px] font-bold fill-amber-900 dark:fill-amber-100">Volatile Memory (RAM)</text>
      <text x="432" y="95" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Byte-addressed array</text>
      <text x="432" y="112" textAnchor="middle" className="text-[8px] font-mono fill-amber-700 dark:fill-amber-300">Quadratic gas expansion</text>
    </g>

    {/* Component 4: Permanent State Storage (Bottom width) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Storage: Permanent 256-bit key-value store in Ethereum Merkle Patricia Trie. Persists across transactions.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="30" y="145" width="475" height="65" rx="6" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
      <text x="45" y="168" className="text-xs font-bold fill-emerald-900 dark:fill-emerald-100">Permanent Storage (State Database)</text>
      <text x="45" y="185" className="text-[9px] fill-academic-600 dark:fill-academic-400">
        • Key-Value Mapping: 256-bit Keys ──&gt; 256-bit Values | Merkle Patricia Trie Root on Blockchain
      </text>
      <text x="45" y="200" className="text-[8px] font-mono fill-emerald-700 dark:fill-emerald-300">
        • Highly expensive in gas (SSTORE = 20,000 gas for new key) to discourage blockchain bloat
      </text>
    </g>

    {/* Bottom summary text */}
    <rect x="20" y="255" width="500" height="20" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="268" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      EVM Triad: Code ROM (Immutable) | Memory (Transient RAM) | Storage (Permanent State)
    </text>
  </svg>
);

export const SwarmStorageDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 270" className="w-full h-auto select-none">
    {/* Master File */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Original File: Large media or DApp frontend code')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="30" width="100" height="65" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="70" y="58" textAnchor="middle" className="text-xs font-bold fill-blue-900 dark:fill-blue-100">Original File</text>
      <text x="70" y="74" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">e.g. 10 MB Video</text>
    </g>

    {/* Chunking arrow */}
    <line x1="120" y1="62" x2="160" y2="62" stroke="#94a3b8" strokeWidth="1.5" />
    <text x="140" y="55" textAnchor="middle" className="text-[7px] font-mono fill-academic-500">Slice</text>

    {/* 4 KB Chunks */}
    {[
      { y: 25, id: 'Chunk 1', hash: 'Hash: 0x3f..a1' },
      { y: 55, id: 'Chunk 2', hash: 'Hash: 0x8b..c4' },
      { y: 85, id: 'Chunk n', hash: 'Hash: 0x1e..99' },
    ].map((c, i) => (
      <g
        key={i}
        className="cursor-pointer"
        onMouseEnter={() => onHover?.(`${c.id}: Sliced into max 4 KB block with 32-byte Bzz content hash`)}
        onMouseLeave={() => onHover?.(null)}
      >
        <rect x="160" y={c.y} width="115" height="24" rx="4" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" />
        <text x="170" y={c.y + 16} className="text-[8px] font-bold fill-purple-900 dark:fill-purple-100">{c.id} (4 KB)</text>
        <text x="235" y={c.y + 16} className="text-[7px] font-mono fill-purple-700 dark:fill-purple-300">{c.hash}</text>
      </g>
    ))}

    {/* Merkle Hash Tree Root */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Swarm Hash Tree: Merkle tree root hash forms single 32-byte content address for the entire file')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="310" y="30" width="95" height="65" rx="6" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
      <text x="357" y="58" textAnchor="middle" className="text-[10px] font-bold fill-emerald-900 dark:fill-emerald-100">Swarm Hash</text>
      <text x="357" y="74" textAnchor="middle" className="text-[8px] font-mono fill-emerald-700 dark:fill-emerald-300">Root: 32-byte</text>
    </g>

    {/* Kademlia Distribution Mesh (Right) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Kademlia DHT: Chunks are stored redundantly across decentralized peer nodes based on XOR distance')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="430" y="25" width="95" height="80" rx="6" className="fill-teal-100 dark:fill-teal-950 stroke-teal-600" strokeWidth="1.5" />
      <text x="477" y="52" textAnchor="middle" className="text-[10px] font-bold fill-teal-900 dark:fill-teal-100">Peer Mesh</text>
      <text x="477" y="68" textAnchor="middle" className="text-[8px] fill-teal-700">Kademlia DHT</text>
      <text x="477" y="84" textAnchor="middle" className="text-[7px] font-mono fill-teal-600">Bzz Incentivized</text>
    </g>

    {/* Swarm Features Box (Bottom half) */}
    <rect x="20" y="125" width="500" height="95" rx="8" className="fill-academic-50 dark:fill-academic-900/60 stroke-academic-200 dark:stroke-academic-800" />
    <text x="35" y="148" className="text-xs font-bold fill-academic-800 dark:fill-academic-200">Swarm Key Innovations & Incentives</text>
    <text x="35" y="168" className="text-[10px] fill-academic-600 dark:fill-academic-400">
      • Content Addressing: Hash is the address; impossible for a malicious node to tamper with chunk contents without altering the hash.
    </text>
    <text x="35" y="186" className="text-[10px] fill-academic-600 dark:fill-academic-400">
      • Manifests: URL-based hierarchical routing maps human-friendly website domains (bzz://site.eth) to chunk trees.
    </text>
    <text x="35" y="204" className="text-[10px] font-semibold fill-emerald-600">
      • Incentive Layer: Unlike basic IPFS, Swarm features native micropayments paying nodes for bandwidth and persistent storage.
    </text>

    {/* Bottom summary text */}
    <rect x="20" y="235" width="500" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="249" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Swarm Principle: 4 KB Max Chunks ──&gt; 32-Byte Hashes ──&gt; Kademlia DHT Storage Mesh
    </text>
  </svg>
);

export const WhisperMessagingDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 270" className="w-full h-auto select-none">
    {/* Sender Box */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('User 1: Crafts message, encrypts payload with recipient\'s public key, and adds PoW')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="40" width="115" height="75" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="77" y="65" textAnchor="middle" className="text-xs font-bold fill-blue-900 dark:fill-blue-100">User 1 (Sender)</text>
      <text x="77" y="82" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Encrypts Payload</text>
      <text x="77" y="98" textAnchor="middle" className="text-[8px] font-mono fill-blue-600">PoW Computed</text>
    </g>

    {/* Whisper Envelope in Center */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Whisper Envelope: Encrypted payload, 4-byte Topic filter, and TTL. Hides sender and receiver identities.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="175" y="30" width="190" height="95" rx="8" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="2" />
      <text x="270" y="55" textAnchor="middle" className="text-xs font-bold fill-purple-900 dark:fill-purple-100">Whisper Envelope</text>
      <text x="270" y="72" textAnchor="middle" className="text-[9px] font-mono fill-purple-700 dark:fill-purple-300">Topic: 4-byte Hash Filter</text>
      <text x="270" y="88" textAnchor="middle" className="text-[9px] fill-academic-600 dark:fill-academic-400">Payload: [ENCRYPTED DATA 🔒]</text>
      <text x="270" y="104" textAnchor="middle" className="text-[8px] font-mono fill-purple-600">TTL (Expiry) + Minor PoW</text>
    </g>

    {/* Receiver Box */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('User 2: Listens to specific topic with Bloom filter; decrypts envelope with private key')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="405" y="40" width="115" height="75" rx="6" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
      <text x="462" y="65" textAnchor="middle" className="text-xs font-bold fill-emerald-900 dark:fill-emerald-100">User 2 (Receiver)</text>
      <text x="462" y="82" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Bloom Filter Match</text>
      <text x="462" y="98" textAnchor="middle" className="text-[8px] font-mono fill-emerald-600">Decrypts with Key</text>
    </g>

    {/* Arrows */}
    <line x1="135" y1="77" x2="175" y2="77" stroke="#94a3b8" strokeWidth="1.5" />
    <line x1="365" y1="77" x2="405" y2="77" stroke="#94a3b8" strokeWidth="1.5" />

    {/* The Darkness Principle Box (Bottom) */}
    <rect x="20" y="145" width="500" height="75" rx="8" className="fill-academic-900 text-white dark:fill-black stroke-academic-700" strokeWidth="1.5" />
    <text x="35" y="170" className="text-xs font-bold fill-amber-400">🌙 The Darkness Principle (Metadata Privacy)</text>
    <text x="35" y="188" className="text-[9px] fill-academic-300">
      • Network observers CANNOT determine who sent the message, who is reading it, or its content.
    </text>
    <text x="35" y="204" className="text-[9px] fill-academic-300">
      • P2P Gossip Flooding: Every node forwards envelopes without knowing if a peer is the final recipient or just a relayer.
    </text>

    {/* Bottom summary text */}
    <rect x="20" y="235" width="500" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="249" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Web3 Triad: Ethereum (Compute) + Swarm (Storage) + Whisper/Waku (Messaging)
    </text>
  </svg>
);
