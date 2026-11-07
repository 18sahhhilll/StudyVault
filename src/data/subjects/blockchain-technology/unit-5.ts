import { Unit } from '@/types';

export const blockchainUnit5Data: Unit = {
  id: 'unit-5',
  unitNumber: 5,
  title: 'Blockchain Ethereum Platform using Solidity',
  shortTitle: 'Ethereum & Solidity',
  description: 'Comprehensive study material covering Ethereum platform architecture, the 5-layer Ethereum stack, EVM execution engine, Smart Contract lifecycle and classification, Gas mechanics, Swarm decentralized storage, Whisper messaging protocol, Solidity syntax and programming patterns, and Account models.',
  syllabus: [
    'Ethereum Concept, History, and Contrast with Traditional Cryptocurrencies',
    'Core Features of Ethereum: Ether, Smart Contracts, EVM, DApps, DAOs',
    'The 5-Layer Ethereum Stack (EVM, Smart Contracts, Nodes, Client APIs, DApps)',
    'Ethereum Network Types: Mainnet, Testnets (Sepolia), and Private Networks (Ganache/Besu)',
    'Smart Contracts: Definition, Execution Flow, Benefits, and Limitations',
    'Taxonomy of Smart Contracts: Smart Legal Contracts, DAOs, Application Logic Contracts (ALC)',
    'Gas Mechanics: Gas Limit, Gas Price, Calculation Formulas, and Anti-Loop Protection',
    'Smart Contract Deployment Pipeline: Step-by-Step Flow and Tooling (Remix, Truffle, Web3)',
    'Swarm: Decentralized Storage, 4 KB Chunking, Content Hashing, and Incentive Layer',
    'Whisper Protocol: Darkness Principle, P2P DEVp2p Wire Messaging, Envelopes, and Topics',
    'Ethereum Virtual Machine (EVM): Architecture, Memory Areas (ROM, Memory, Storage), and Opcodes',
    'Solidity Programming: Syntax, Data Types, Modifiers, Error Handling, and Sample Contract',
    'Bonus Concepts: EOA vs Contract Accounts, Full vs Light Nodes, Block Header Structure'
  ],
  questionPaperIndex: [
    { paper: 'Paper 1', qMain: '(a) → Q2 (Features of Ethereum), Q4 (Network Types)', qOr: '(b) → Q5 (What is a Smart Contract), Q6 (Types of Smart Contracts), Q7 (Role of Gas), Q8 (Steps to Deploy), Q10 (Whisper)' },
    { paper: 'Paper 2', qMain: '(a) → Q3 (Components Stack), Q4 (Network Types)', qOr: '(b) → Q1 (What is Ethereum), Q5 (Smart Contracts), Q9 (Swarm), Q10 (Whisper)' },
    { paper: 'Paper 3', qMain: '(a) → Q1 (What is Ethereum), Q4 (Network Types)', qOr: '(b) → Q5 (Smart Contracts), Q9 (Swarm)' },
    { paper: 'Paper 4', qMain: '(a) → Q1 (Ethereum), Q4 (Networks), Q11 (EVM)', qOr: '(b) → Q5 (Smart Contracts), Q6 (Types of Contracts), Q8 (Steps to Deploy), Q9 (Swarm), Q10 (Whisper), Q12 (Solidity)' },
    { paper: 'Paper 5', qMain: '(a) → Q1 (Ethereum), Q11 (EVM)', qOr: '(b) → Q5 (Smart Contracts), Q6 (Types of Contracts), Q9 (Swarm), Q10 (Whisper)' },
    { paper: 'Paper 6', qMain: '(a) → Q1 (Ethereum), Q5 (Smart Contracts), Q6 (Types of Contracts)', qOr: '(b) → Q9 (Swarm), Q10 (Whisper), Q11 (EVM), Q12 (Solidity)' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Ethereum', definition: 'A decentralized, open-source blockchain platform with smart contract functionality that operates as a world computer executing decentralized applications (DApps).' },
      { term: 'Smart Contract', definition: 'A self-executing software program running directly on the Ethereum blockchain that automatically enforces and executes contractual terms without human intervention.' },
      { term: 'Ethereum Virtual Machine (EVM)', definition: 'The Turing-complete virtual runtime environment that executes compiled bytecode and computes deterministic state transitions across all Ethereum nodes.' },
      { term: 'Gas', definition: 'The fundamental unit that measures the computational effort and storage resources required to execute transactions and smart contracts on Ethereum.' },
      { term: 'Swarm', definition: 'Ethereum\'s native decentralized storage and content distribution service that splits files into 4 KB chunks identified by 32-byte content hashes.' },
      { term: 'Whisper', definition: 'Ethereum\'s decentralized, peer-to-peer messaging protocol that guarantees "dark" communication where the sender, receiver, and message content remain hidden from network observers.' },
      { term: 'Solidity', definition: 'A statically typed, contract-oriented high-level programming language designed specifically for authoring smart contracts that compile to EVM bytecode.' },
      { term: 'Externally Owned Account (EOA)', definition: 'An Ethereum account controlled directly by a private key with no associated code, capable of initiating transactions.' },
      { term: 'Contract Account', definition: 'An account governed entirely by smart contract code, containing its own storage and logic, which triggers only when called by an EOA or another contract.' }
    ],
    coreFormulas: [
      { name: 'Total Transaction Gas Fee', latex: '\\text{Gas Fee} = \\text{Gas Units Used} \\times \\text{Gas Price (in Gwei)}' },
      { name: 'Gas Fee in Ether', latex: '\\text{Total Fee (ETH)} = \\frac{\\text{Gas Used} \\times \\text{Price}_{\\text{Gwei}}}{10^9}' },
      { name: 'Ethereum Ether Denominations', latex: '1 \\text{ Ether} = 10^9 \\text{ Gwei} = 10^{18} \\text{ Wei}' },
      { name: 'Account State Tuple', latex: '\\sigma[a] = (\\text{nonce}, \\text{balance}, \\text{storageRoot}, \\text{codeHash})' }
    ],
    comparisonHighlights: [
      { title: 'Bitcoin vs Ethereum', summary: 'Bitcoin is digital gold (UTXO model, limited Script, store of value). Ethereum is a Turing-complete decentralized world computer (Account model, EVM, smart contracts, DApps).' },
      { title: 'Mainnet vs Testnet vs Private', summary: 'Mainnet has real monetary value and immutable financial risk. Testnets (Sepolia) use free faucet test ETH for staging. Private networks (Ganache) are isolated internal sandboxes.' },
      { title: 'EOA vs Contract Account', summary: 'EOA is controlled by a human with a private key (starts transactions, free to create). Contract Account has executable code and storage (only triggers when called, costs gas to deploy).' },
      { title: 'Swarm vs Whisper', summary: 'Swarm provides decentralized file and data storage (off-chain 4 KB chunks). Whisper provides encrypted peer-to-peer ephemeral communication with darkness/metadata privacy.' }
    ],
    examTips: [
      'Draw the 5-layer Ethereum Stack diagram from bottom (EVM) to top (DApps) — frequently asked in Paper 2.',
      'Remember the 3 memory areas of EVM: ROM (immutable code), Memory (temporary volatile bytes), Storage (permanent state Merkle trie).',
      'For the Gas question, explain why gas prevents infinite loops (Halting Problem resolution) and state the formula: Fee = Gas Used * Gas Price.',
      'In the Smart Contract deployment question, memorize the 6 steps: Create account -> Fund account -> Develop -> Compile -> Sign and Deploy -> Interact & Test.'
    ]
  },
  questions: [
    {
      id: 'bc-u5-q1',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 1,
      title: 'What is Ethereum? How Does it Differ Fundamentally from Traditional Cryptocurrencies Like Bitcoin?',
      shortTitle: 'Ethereum Platform & Bitcoin Contrast',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q5(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q5(a)', marks: 8 },
        { paper: 'Paper 4', questionNo: 'Q5(a)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q5(a)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q5(a)', marks: 8 }
      ],
      syllabusTopics: ['Ethereum Platform', 'Turing Completeness', 'Bitcoin vs Ethereum', 'Smart Contracts'],
      definition: 'Ethereum is a decentralized, open-source blockchain platform featuring smart contract functionality. Proposed in late 2013 by Vitalik Buterin and launched in 2015, Ethereum functions as a global decentralized world computer that executes autonomous application code across a peer-to-peer network without centralized control.',
      sections: [
        {
          title: '1. Beyond Digital Currency: Programmable State Machine',
          content: [
            'Decentralized Application Platform: While Bitcoin was created strictly as electronic cash and digital gold, Ethereum was designed as a generalized programmable platform for publishing and running Decentralized Applications (DApps).',
            'Turing-Complete Execution: Ethereum introduces the Ethereum Virtual Machine (EVM), a Turing-complete state machine capable of executing arbitrary computational logic, loops, and conditions.',
            'Account-Based Architecture: Replaces Bitcoin\'s Unspent Transaction Output (UTXO) model with an intuitive Account model maintaining explicit account balances, nonces, and persistent contract storage.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-ethereum-stack',
          title: 'The 5-Layer Ethereum Platform Architecture Stack',
          caption: 'Hierarchical architectural stack showing Level 1 (EVM Runtime) up through Level 5 (Decentralized End-User Applications).',
          type: 'svg-interactive',
          svgType: 'ethereum-stack'
        }
      ],
      tables: [
        {
          headers: ['Evaluation Parameter', 'Traditional Cryptocurrency (Bitcoin)', 'Ethereum Platform'],
          rows: [
            { parameter: 'Core Purpose & Vision', col1: 'Peer-to-peer electronic cash, digital gold, store of value', col2: 'Decentralized platform for programmable smart contracts & DApps' },
            { parameter: 'Programmability', col1: 'Extremely restricted; stateless non-Turing-complete Scripting', col2: 'Fully Turing-complete programming via Solidity, Vyper, and EVM' },
            { parameter: 'State Architecture', col1: 'UTXO (Unspent Transaction Output) graph model', col2: 'Account-based model (EOAs and Smart Contract Accounts)' },
            { parameter: 'Block Creation Interval', col1: 'Approximately 10 minutes per block', col2: 'Approximately 12 seconds per slot (PoS)' },
            { parameter: 'Computational Fuel', col1: 'No program execution engine required; miners receive BTC fee', col2: 'Gas (paid in Ether) meters computational steps to prevent infinite loops' },
            { parameter: 'Consensus Mechanism', col1: 'Proof of Work (SHA-256 hashrate mining)', col2: 'Proof of Stake (validator staking of 32 ETH; upgraded via The Merge)' },
            { parameter: 'Ecosystem Use Cases', col1: 'Monetary payments, remittances, wealth preservation', col2: 'DeFi protocols, DAOs, NFTs, decentralized identity, supply chain' }
          ]
        }
      ],
      summary: [
        'Ethereum is an open-source decentralized world computer executing smart contracts via the EVM.',
        'Bitcoin is digital cash with limited Script; Ethereum is a Turing-complete application platform.',
        'Uses an account-based model rather than Bitcoin\'s UTXO model.',
        'Features Ether as native fuel and gas to meter computational resource consumption.'
      ],
      keyPoints: [
        'Turing-complete decentralized world computer',
        'Account model vs UTXO model',
        'Ethereum Virtual Machine (EVM) runtime',
        'Smart contracts & DApps support'
      ]
    },
    {
      id: 'bc-u5-q2',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 2,
      title: 'Discuss the Prominent Features and Core Building Blocks of the Ethereum Platform',
      shortTitle: 'Core Features & Building Blocks of Ethereum',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q5(a)', marks: 6 }
      ],
      syllabusTopics: ['Ethereum Features', 'Ether Token', 'EVM', 'DApps', 'DAOs'],
      definition: 'Ethereum\'s technical dominance in distributed computing stems from an integrated suite of core technical features that together form a programmable, decentralized computing infrastructure.',
      sections: [
        {
          title: '1. The Core Architectural Pillars',
          content: [
            '1. Ether (ETH) - Native Crypto-Fuel: The native cryptocurrency of the Ethereum blockchain. Beyond serving as a store of value, Ether provides the essential crypto-fuel required to execute transactions and pay gas fees.',
            '2. Smart Contracts: Autonomous, self-executing software programs deployed on the blockchain that enforce agreements programmatically when predetermined conditions are met.',
            '3. Ethereum Virtual Machine (EVM): The sandboxed runtime environment that isolates contract execution from host computer operating systems, ensuring deterministic execution across all nodes.',
            '4. Decentralized Applications (DApps): Applications combining on-chain smart contract backends with standard web/mobile frontends, operating without central server dependencies.',
            '5. Decentralized Autonomous Organizations (DAOs): Organizations governed entirely by smart contracts and stakeholder token votes rather than traditional executive management.',
            '6. Solidity Programming Language: A statically typed, contract-oriented high-level language modeled after JavaScript, C++, and Python for authoring EVM smart contracts.'
          ]
        }
      ],
      summary: [
        'Ethereum combines Ether, Smart Contracts, the EVM, DApps, DAOs, and Solidity into a unified platform.',
        'Ether acts as crypto-fuel paying for computational resources.',
        'EVM ensures sandboxed, deterministic execution across all nodes globally.',
        'DAOs enable democratic, code-governed organizational decision making.'
      ],
      keyPoints: [
        'Ether (ETH) crypto-fuel',
        'Autonomous self-executing smart contracts',
        'Sandboxed EVM runtime environment',
        'Decentralized Autonomous Organizations (DAOs)'
      ]
    },
    {
      id: 'bc-u5-q3',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 3,
      title: 'Explain the 5-Layer Components Stack of the Ethereum Platform with Architecture Diagram',
      shortTitle: '5-Layer Ethereum Components Stack',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q6(a)', marks: 8 }
      ],
      syllabusTopics: ['Ethereum Stack', '5 Architectural Layers', 'EVM', 'Client APIs', 'Nodes'],
      definition: 'The Ethereum platform architecture is formally modeled as a 5-layer modular stack extending from the low-level virtual machine execution engine up to the user-facing web and mobile applications.',
      sections: [
        {
          title: '1. Layer-by-Layer Architectural Breakdown',
          content: [
            'Level 1: Ethereum Virtual Machine (EVM) — The foundational runtime execution layer. A stack-based engine that executes compiled bytecode opcodes (ADD, SSTORE, KECCAK256) and alters the global Ethereum state tree deterministically.',
            'Level 2: Smart Contracts — High-level application logic authored in Solidity or Vyper, compiled into EVM bytecode, and deployed to immutable addresses on the blockchain.',
            'Level 3: Ethereum Nodes & Clients — The physical peer-to-peer network infrastructure running execution and consensus client software (Geth, Nethermind, Besu). Nodes maintain ledger state, validate blocks, and propagate transactions.',
            'Level 4: Ethereum Client APIs & Libraries — Abstraction middleware (Ethers.js, Web3.js, Web3.py) that translate JSON-RPC communication between frontend applications and blockchain nodes.',
            'Level 5: End-User Applications (DApps) — The presentation tier comprising modern web/mobile user interfaces (React, Next.js) that allow end-users to interact with smart contracts via Web3 wallets like MetaMask.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-ethereum-stack-2',
          title: 'The 5-Layer Ethereum Platform Architecture Stack',
          caption: 'Visual diagram depicting Level 1 (EVM), Level 2 (Smart Contracts), Level 3 (Nodes), Level 4 (Client APIs), and Level 5 (End-User DApps).',
          type: 'svg-interactive',
          svgType: 'ethereum-stack'
        }
      ],
      summary: [
        'The Ethereum stack consists of 5 levels: EVM (L1), Smart Contracts (L2), Nodes (L3), Client APIs (L4), and End-User DApps (L5).',
        'L1 EVM executes opcodes and manages state transitions.',
        'L3 Nodes form the P2P gossip network maintaining the ledger.',
        'L4 APIs (Ethers.js) connect standard L5 web interfaces to the blockchain.'
      ],
      keyPoints: [
        'Level 1: EVM execution engine',
        'Level 2: Compiled smart contracts',
        'Level 3: P2P client nodes (Geth)',
        'Level 4: Client APIs (Web3.js/Ethers.js)',
        'Level 5: End-user web/mobile DApps'
      ]
    },
    {
      id: 'bc-u5-q4',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 4,
      title: 'Explain the Types of Ethereum Networks: Mainnet, Testnet, and Private Networks with Detailed Comparison',
      shortTitle: 'Ethereum Networks: Mainnet vs Testnet vs Private',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q5(a)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q6(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q5(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q5(a)', marks: 8 }
      ],
      syllabusTopics: ['Ethereum Networks', 'Mainnet', 'Testnets (Sepolia/Goerli)', 'Private Networks (Ganache/Besu)'],
      definition: 'Ethereum networks are isolated, distinct blockchain instances running the identical Ethereum protocol software. They are partitioned into Mainnet (production economic network), Testnets (public experimentation environments), and Private/Consortium Networks (closed internal instances).',
      sections: [
        {
          title: '1. Characterization of the Three Network Types',
          content: [
            '1. Mainnet (Production Network): The primary public live blockchain where actual real-value monetary and decentralized finance transactions occur. Ether on Mainnet has market financial value. Any deployed contract is immutable, and security errors result in irrecoverable monetary loss.',
            '2. Testnets (Public Testing Networks): Replicas of the Mainnet environment designed specifically for developers to test smart contracts and protocol upgrades before mainnet release. Ether on testnets (such as Sepolia and Holesky) is distributed for free via faucets and holds zero commercial value.',
            '3. Private / Local Networks: Enterprise or developer-operated closed blockchains configured with custom genesis files, private validator nodes, and restricted access. Examples include local in-memory instances (Ganache, Hardhat Network) and enterprise platforms (Hyperledger Besu, Quorum).'
          ]
        }
      ],
      tables: [
        {
          headers: ['Evaluation Parameter', 'Ethereum Mainnet', 'Ethereum Testnet (e.g. Sepolia)', 'Private / Local Network (e.g. Ganache)'],
          rows: [
            { parameter: 'Primary Purpose', col1: 'Live production transactions and real economic value', col2: 'Pre-production testing, security auditing, and staging', col3: 'Internal enterprise operations, local rapid development' },
            { parameter: 'Ether Economic Value', col1: 'Real monetary value traded on global exchanges', col2: 'Completely free; obtained from public test faucets', col3: 'Simulated; zero real-world monetary value' },
            { parameter: 'Network Access', col1: 'Public and permissionless; anyone can read and write', col2: 'Public; anyone can connect and test', col3: 'Private and permissioned; restricted to approved nodes' },
            { parameter: 'Financial Risk Profile', col1: 'High: bugs or failed transactions cost real money', col2: 'Zero: deployment and execution cost fake test tokens', col3: 'Zero: completely isolated internal environment' },
            { parameter: 'Consensus Engine', col1: 'Proof of Stake (validators staking 32 ETH)', col2: 'Proof of Stake or Proof of Authority (permissioned validators)', col3: 'Instantaneous in-memory mining or Clique (PoA)' },
            { parameter: 'Prominent Examples', col1: 'Ethereum Mainnet (Chain ID: 1)', col2: 'Sepolia, Holesky, Goerli (deprecated)', col3: 'Ganache, Hardhat node, Hyperledger Besu, Quorum' }
          ]
        }
      ],
      summary: [
        'Mainnet is the production network with real monetary value and high financial stakes.',
        'Testnets (Sepolia) provide risk-free staging with free faucet test ETH.',
        'Private networks (Ganache, Besu) offer closed, permissioned environments for local development and enterprise use.',
        'Development progression moves: Local Private -> Public Testnet -> Live Mainnet.'
      ],
      keyPoints: [
        'Mainnet real monetary transactions',
        'Testnet risk-free faucet staging (Sepolia)',
        'Private permissioned networks (Ganache/Besu)',
        'Three-stage Web3 deployment pipeline'
      ]
    },
    {
      id: 'bc-u5-q5',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 5,
      title: 'What is a Smart Contract? Explain Working with Real-World Example, Benefits, and Limitations',
      shortTitle: 'Smart Contract Architecture, Benefits & Limitations',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 6,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q5(b)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q5(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q6(a)', marks: 8 },
        { paper: 'Paper 4', questionNo: 'Q5(c)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q5(c), Q6(c)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q6(a)', marks: 8 }
      ],
      syllabusTopics: ['Smart Contract Concept', 'Execution Logic', 'Real-World Example', 'Benefits & Drawbacks'],
      definition: 'A smart contract is a computer program stored at a unique address on the blockchain that autonomously executes predetermined logic when specified conditions are verified. Originally conceptualized by Nick Szabo in 1994, smart contracts translate contractual terms into self-enforcing cryptographic code.',
      sections: [
        {
          title: '1. Execution Logic & Autonomy',
          content: [
            'Deterministic Conditional Execution: Operates on programmatic conditional rules: IF [Event X occurs with valid cryptographic parameters], THEN [Execute Action Y (transfer funds, change asset ownership)].',
            'Autonomous & Unstoppable: Once deployed on-chain, code cannot be modified, deleted, or paused by anyone unless explicit administration mechanisms were pre-programmed into the original bytecode.',
            'Eliminating Intermediaries: Replaces expensive third-party enforcement (lawyers, notaries, escrow agents) with deterministic mathematical execution.'
          ]
        },
        {
          title: '2. Real-World Example: Real Estate Escrow',
          content: [
            'Step 1: Buyer and Seller agree on property price (50 ETH) and terms.',
            'Step 2: Smart contract acts as impartial cryptographic escrow holding buyer\'s 50 ETH deposit.',
            'Step 3: When the municipal title registry oracle verifies deed transfer, the contract automatically releases 50 ETH to the seller and digital deed to the buyer.',
            'Step 4: If conditions are not fulfilled within 30 days, funds are automatically refunded to the buyer.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-smart-contract-lifecycle',
          title: 'Smart Contract Architecture & Execution Lifecycle',
          caption: 'Complete lifecycle showing Solidity source authoring, compilation to EVM bytecode and ABI, deployment transaction signing, and autonomous on-chain execution.',
          type: 'svg-interactive',
          svgType: 'smart-contract-lifecycle'
        }
      ],
      tables: [
        {
          headers: ['Dimension', 'Benefits of Smart Contracts', 'Limitations & Drawbacks'],
          rows: [
            { parameter: 'Speed & Cost', col1: 'Instantaneous execution; zero intermediary lawyer or escrow commissions', col2: 'Gas costs can be expensive during periods of network congestion' },
            { parameter: 'Trust & Autonomy', col1: 'Trustless; no counterparty risk of payment refusal or bad-faith default', col2: 'Oracle Problem: vulnerable if external real-world data feeds are spoofed' },
            { parameter: 'Accuracy & Security', col1: 'Deterministic execution; human processing errors and ambiguity eliminated', col2: 'Code Immutability: bugs or vulnerabilities in code cannot be patched easily' },
            { parameter: 'Legal Enforcement', col1: 'Automatic mathematical self-execution without relying on courts', col2: 'Difficulty codifying subjective human legal clauses (e.g. "good faith")' }
          ]
        }
      ],
      summary: [
        'Smart contracts are self-executing software programs deployed on the blockchain.',
        'Operate on conditional logic (IF/THEN) without human intermediaries or trust assumptions.',
        'Deliver high speed, cost savings, transparency, and deterministic execution.',
        'Face challenges with code immutability (hard to patch bugs) and reliance on oracles.'
      ],
      keyPoints: [
        'Nick Szabo conditional self-execution concept',
        'Autonomous & immutable bytecode on-chain',
        'Escrow disintermediation benefits',
        'Oracle dependency & code immutability risks'
      ]
    },
    {
      id: 'bc-u5-q6',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 6,
      title: 'Explain the Types and Purpose of Smart Contracts in Decentralized Systems',
      shortTitle: 'Smart Contract Taxonomy & Purposes',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q6(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q5(c)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q5(c)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q6(a)', marks: 6 }
      ],
      syllabusTopics: ['Smart Legal Contracts', 'DAOs', 'Application Logic Contracts (ALC)'],
      definition: 'Smart contracts are deployed to fulfill diverse operational roles across decentralized systems. They are primarily classified into three major architectural categories: Smart Legal Contracts, Decentralized Autonomous Organizations (DAOs), and Application Logic Contracts (ALC).',
      sections: [
        {
          title: '1. The Three Primary Smart Contract Types',
          content: [
            '1. Smart Legal Contracts: Hybrid legal agreements that combine legally binding commercial contracts with automated blockchain execution. If a party breaches terms, the contract triggers automated penalties or collateral liquidation. Used extensively in international trade finance, insurance claims, and structured loans.',
            '2. Decentralized Autonomous Organizations (DAO): Comprehensive multi-contract governance frameworks where the rules of an enterprise, fund, or community are encoded entirely into on-chain code. Decisions regarding treasury capital, protocol upgrades, and investments are made by member token voting without any CEO or board of directors.',
            '3. Application Logic Contracts (ALC): Specialized, device-facing smart contracts that manage application workflows and interact with the physical world (such as IoT networks, sensor arrays, and supply chain tracking). They harmonize decentralized data streams with smart business automation.'
          ]
        },
        {
          title: '2. Core Purposes of Smart Contracts',
          content: [
            'Trustless Automation: Eliminating human intervention in routine value transfers and data logging.',
            'Multi-Party Coordination: Synchronizing untrusted entities across global supply chains.',
            'Financial Programmability: Enabling permissionless lending, borrowing, and synthetic asset trading (DeFi).',
            'Identity & Ownership: Guaranteeing verifiable provenance for digital and real-world assets.'
          ]
        }
      ],
      summary: [
        'Smart contracts are categorized into Smart Legal Contracts, DAOs, and Application Logic Contracts (ALC).',
        'Smart Legal Contracts combine legal enforceability with automated penalty execution.',
        'DAOs manage collective corporate governance and treasury funds via token voting.',
        'Application Logic Contracts integrate IoT devices with automated business workflows.'
      ],
      keyPoints: [
        'Smart Legal Contracts (commercial enforceability)',
        'DAOs (token-governed organizations)',
        'Application Logic Contracts (IoT & workflows)',
        'Trustless multi-party coordination'
      ]
    },
    {
      id: 'bc-u5-q7',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 7,
      title: 'Explain the Role and Significance of Gas in Ethereum: Gas Limit, Gas Price, Fee Formula, and Anti-Loop Defense',
      shortTitle: 'Gas Mechanics & Anti-Loop Safeguards',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q5(b)', marks: 6 }
      ],
      syllabusTopics: ['Gas Role', 'Gas Limit', 'Gas Price', 'Halting Problem', 'Transaction Fee Formula'],
      definition: 'Gas is the internal execution unit that measures the amount of computational effort, storage writes, and cryptographic processing required to execute a specific transaction or smart contract operation on the Ethereum network.',
      sections: [
        {
          title: '1. Economic & Security Role of Gas',
          content: [
            'Decoupling Computation from Ether Market Price: Ethereum decouples computational costs from volatile ETH prices. An ADD instruction always costs 3 gas units, while the market price of gas floats dynamically based on network demand.',
            'Halting Problem Resolution (Anti-Loop Protection): Because Ethereum is Turing-complete, a malicious actor could write an infinite loop (`while(true) {}`) that could freeze all validating nodes globally. Gas solves this: every opcode consumes gas. When the transaction\'s prepaid gas runs out, execution halts with an "Out of Gas" exception, reverting all state modifications while retaining the burned gas to compensate validators.'
          ]
        },
        {
          title: '2. Parameters & Fee Formula',
          content: [
            'Gas Limit: Maximum units of gas the sender permits for the transaction (standard ETH transfer = 21,000 gas; complex smart contracts = 100,000 to 1,000,000+ gas).',
            'Gas Price: Amount of Ether the sender offers per unit of gas, measured in Gwei (1 Gwei = 10^-9 ETH).',
            'Fee Formula: Total Fee (in Wei) = Gas Units Used × Gas Price (in Wei)',
            'Calculation Example: 50,000 gas used × 20 Gwei gas price = 1,000,000 Gwei = 0.001 ETH.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-gas-execution',
          title: 'Ethereum Gas Consumption & Execution Safeguard Mechanism',
          caption: 'Step-by-step gas metering flowchart showing gas deduction per opcode, successful completion with refund, and Out-of-Gas state reversion.',
          type: 'svg-interactive',
          svgType: 'gas-execution'
        }
      ],
      summary: [
        'Gas measures the computational effort required to execute operations on Ethereum.',
        'Prevents infinite loops and DoS attacks by making every computational step cost gas.',
        'Total Transaction Fee = Gas Units Used × Gas Price (in Gwei).',
        'Unused gas is refunded upon success; Out-of-Gas halts execution and reverts state changes.'
      ],
      keyPoints: [
        'Computational effort measurement unit',
        'Anti-infinite loop defense (Halting Problem)',
        'Gas Limit vs Gas Price (in Gwei)',
        'Out-of-Gas transaction state reversion'
      ]
    },
    {
      id: 'bc-u5-q8',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 8,
      title: 'Detail the Complete Step-by-Step Process of Deploying a Smart Contract. Compare Online and Offline Development Tools',
      shortTitle: 'Smart Contract Deployment Pipeline & Tooling',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q6(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q6(c)', marks: 6 }
      ],
      syllabusTopics: ['Contract Deployment Lifecycle', 'Remix Online IDE', 'Truffle & Ganache', 'Compilation to Bytecode'],
      definition: 'Deploying a smart contract is the process of taking human-readable Solidity source code, compiling it into low-level EVM bytecode and an Application Binary Interface (ABI), and publishing it to the Ethereum network via a cryptographically signed transaction containing the deployment payload.',
      sections: [
        {
          title: '1. The 6-Step Deployment Pipeline',
          content: [
            'Step 1: Create Account — Set up an Ethereum account using a wallet interface (MetaMask) or generate programmatic keys via Web3.js/Ethers.js.',
            'Step 2: Fund Account — Obtain testnet Ether from a faucet (for Sepolia) or fund real ETH from an exchange (for Mainnet) to cover gas costs.',
            'Step 3: Develop Contract — Author smart contract logic in Solidity adhering to secure standards (OpenZeppelin).',
            'Step 4: Compile Code — Run the Solidity compiler (solc). Outputs: (a) EVM Bytecode (raw opcodes for execution) and (b) ABI JSON (metadata specifying function signatures and data types).',
            'Step 5: Sign and Deploy — Construct a contract creation transaction (recipient address 0x0) carrying the bytecode in its data payload. Sign via MetaMask and broadcast to nodes.',
            'Step 6: Interact and Test — Once confirmed by validators, verify source code on block explorers (Etherscan) and test functions via frontend Web3 interfaces.'
          ]
        }
      ],
      tables: [
        {
          headers: ['Development Mode', 'Primary Tools', 'Key Features & Workflow'],
          rows: [
            { parameter: 'Online Cloud Mode', col1: 'Remix Web IDE (remix.ethereum.org)', col2: 'Browser-based; zero installation; built-in static analysis, debugger, and 1-click MetaMask injection' },
            { parameter: 'Offline CLI Mode', col1: 'Hardhat, Truffle Suite, Foundry', col2: 'Local CLI frameworks with automated testing pipelines in Mocha/Chai, scriptable migrations, and plugin ecosystems' },
            { parameter: 'Local Test Blockchains', col1: 'Ganache CLI / GUI, Hardhat Network', col2: 'Instantaneous local in-memory blockchain running on port 8545 with 10 pre-funded test accounts' }
          ]
        }
      ],
      summary: [
        'Deploying smart contracts requires 6 steps: Create account, Fund, Develop, Compile, Sign & Deploy, and Interact & Test.',
        'Compilation outputs EVM bytecode for execution and ABI JSON for frontend communication.',
        'Online development uses Remix Web IDE; offline development uses Hardhat/Truffle with Ganache.',
        'Deployed contracts receive permanent 20-byte addresses computed deterministically from sender and nonce.'
      ],
      keyPoints: [
        '6-step deployment pipeline',
        'Bytecode and ABI compilation outputs',
        'Remix Web IDE for rapid browser staging',
        'Hardhat / Truffle and Ganache for enterprise testing'
      ]
    },
    {
      id: 'bc-u5-q9',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 9,
      title: 'Write a Comprehensive Technical Note on Swarm: Chunking, 32-Byte Hashes, Addressing, and Incentive Layer',
      shortTitle: 'Swarm Decentralized Storage Platform',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q5(a)', marks: 8 },
        { paper: 'Paper 3', questionNo: 'Q6(b)', marks: 8 },
        { paper: 'Paper 4', questionNo: 'Q5(b)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q6(b)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q5(c)', marks: 8 }
      ],
      syllabusTopics: ['Swarm Storage', 'Chunking Mechanism', 'Content Addressing', 'Bzz Protocol', 'Swarm vs IPFS'],
      definition: 'Swarm is Ethereum\'s official decentralized, peer-to-peer storage and content distribution platform. It provides censorship-resistant, permissionless, and fault-tolerant infrastructure designed to host DApp code, media files, and blockchain history off-chain.',
      sections: [
        {
          title: '1. Addressing the Blockchain Storage Bottleneck',
          content: [
            'Off-Chain Storage Necessity: Storing 1 GB of data directly on the Ethereum ledger costs millions of dollars in gas and strains node hardware. Swarm stores bulk data off-chain across a decentralized P2P mesh while using Ethereum for naming (ENS) and micropayments.',
            'Web3 Triad: Ethereum provides Computation, Swarm provides Storage, and Whisper provides Messaging.'
          ]
        },
        {
          title: '2. Architectural Components & Mechanics',
          content: [
            'Chunking: Large files are sliced into uniform small data blocks with a maximum size of 4 Kilobytes (4096 bytes).',
            'Content Addressing & 32-Byte Hash: Each chunk is uniquely identified by a 32-byte cryptographic hash of its content (Bzz hash). If a single byte changes, its address changes.',
            'Swarm Merkle Tree: Chunks are assembled into a balanced Merkle tree. The root hash becomes the master reference address for the entire file.',
            'Manifests: Specialized JSON data structures mapping human-readable URL file paths to specific Swarm chunk hashes, enabling decentralized website hosting.',
            'Incentive Layer (Bzz Token): Unlike conventional IPFS (which historically lacked built-in economic incentives for node operators), Swarm incorporates native cryptographic accounting protocols (Swap, Swear, and Swindle) where nodes are paid for bandwidth and storage.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-swarm-storage',
          title: 'Swarm Decentralized File Chunking & Content Hashing Architecture',
          caption: 'Diagram illustrating how files are sliced into 4 KB chunks, assigned 32-byte Bzz content hashes, assembled into a Merkle tree, and distributed over Kademlia nodes.',
          type: 'svg-interactive',
          svgType: 'swarm-storage'
        }
      ],
      summary: [
        'Swarm is Ethereum\'s decentralized storage system designed to host DApp code and files off-chain.',
        'Splits files into uniform 4 KB chunks identified by 32-byte cryptographic content hashes.',
        'Organizes chunks into a Merkle hash tree with a single root file reference.',
        'Features a built-in incentive layer (Bzz) compensating nodes for storage and bandwidth.'
      ],
      keyPoints: [
        'Decentralized off-chain file storage',
        '4 KB chunk size limit',
        '32-byte Bzz content addressing hash',
        'Built-in node incentive accounting layer'
      ]
    },
    {
      id: 'bc-u5-q10',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 10,
      title: 'Explain Whisper: Decentralized Messaging, Darkness Principle, Envelopes, Topics, and Routing',
      shortTitle: 'Whisper Protocol & Darkness Principle',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q6(a)', marks: 8 },
        { paper: 'Paper 2', questionNo: 'Q6(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q6(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q5(b)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q6(b)', marks: 8 }
      ],
      syllabusTopics: ['Whisper Protocol', 'Darkness Principle', 'DEVp2p Wire', 'Envelopes & Topics', 'Decentralized Messaging'],
      definition: 'Whisper is Ethereum\'s decentralized, peer-to-peer communication protocol designed for private, ephemeral, and censorship-resistant messaging between DApps and network participants without routing through centralized servers.',
      sections: [
        {
          title: '1. Role in the Ethereum Ecosystem & The Darkness Principle',
          content: [
            'Off-Chain Messaging: Smart contracts are too public and expensive for high-frequency communications (DApp chat, DEX order matching). Whisper handles these communications off-chain over Ethereum\'s DEVp2p wire network.',
            'The Darkness Principle: Standard encrypted messengers (WhatsApp, Signal) encrypt content but leak metadata (who communicated with whom, when, and how frequently). Whisper guarantees complete "darkness": outside observers cannot determine the sender, the intended recipient, or whether a node is merely routing a message or reading it.'
          ]
        },
        {
          title: '2. Envelopes, Topics, and Encryption',
          content: [
            'Envelopes: Messages are wrapped inside an Envelope containing Time-to-Live (TTL), Proof-of-Work threshold (anti-spam), 4-byte Topic, and encrypted payload.',
            'Topics: 4-byte arbitrary identifiers acting as broadcast channels. Nodes listen to specific topics using probabilistic Bloom filters.',
            'Dual Encryption: Supports Asymmetric encryption (recipient\'s public key for 1-to-1 privacy) and Symmetric encryption (shared key for group channels).'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-whisper-messaging',
          title: 'Whisper Protocol & Darkness Principle Architecture',
          caption: 'Diagram showing message encapsulation into encrypted envelopes, topic masking via Bloom filters, and gossip routing hiding sender and recipient metadata.',
          type: 'svg-interactive',
          svgType: 'whisper-messaging'
        }
      ],
      summary: [
        'Whisper is Ethereum\'s decentralized peer-to-peer messaging protocol operating over DEVp2p wire.',
        'Guarantees the Darkness Principle: complete metadata privacy hiding sender, receiver, and content.',
        'Messages are packaged in Envelopes with TTL, PoW thresholds, and 4-byte Topics.',
        'Modern successor protocols include Waku and Status for Web3 messaging.'
      ],
      keyPoints: [
        'Decentralized P2P messaging protocol',
        'The Darkness Principle (metadata privacy)',
        'Envelope wrapping & 4-byte topic filtering',
        'DEVp2p gossip wire routing'
      ]
    },
    {
      id: 'bc-u5-q11',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 11,
      title: 'Explain the Architecture and Working of the Ethereum Virtual Machine (EVM). Detail Addressable Data Components (ROM, Memory, Storage)',
      shortTitle: 'EVM Architecture & Addressable Memory Areas',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q6(a)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q6(a)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q6(c)', marks: 8 }
      ],
      syllabusTopics: ['EVM Architecture', 'Stack-based Machine', 'ROM vs Memory vs Storage', 'Bytecode & Opcodes'],
      definition: 'The Ethereum Virtual Machine (EVM) is a quasi-Turing-complete, sandboxed virtual execution engine that executes smart contract instructions and deterministically computes the global state transitions of the Ethereum blockchain after each transaction and block.',
      sections: [
        {
          title: '1. Technical Architecture & Sandboxed Isolation',
          content: [
            'Universal State Machine: Every full node runs an identical EVM implementation, executing identical bytecode opcodes to achieve consensus on global state roots.',
            'Sandboxed Isolation: Code running inside the EVM cannot access network ports, disk drives, or host OS processes, ensuring untrusted third-party code cannot harm validator nodes.',
            '256-Bit Word Size: EVM utilizes a 256-bit register word architecture, specifically chosen to facilitate Keccak-256 cryptographic hashing and 256-bit elliptic curve computations.'
          ]
        },
        {
          title: '2. Addressable Data Components',
          content: [
            '1. Program Code ROM (Read-Only Memory): An immutable byte array containing compiled contract bytecode. Read-only and loaded during execution.',
            '2. Volatile Memory (RAM): A transient byte-addressed memory space initialized to zero at each transaction call. Cleared upon call termination; costs gas quadratically as it expands.',
            '3. Permanent Storage (State Storage): A persistent key-value mapping (256-bit keys to 256-bit values) stored in the global Ethereum Merkle Patricia Trie. Persists permanently across transactions; very expensive in gas (SSTORE = 20,000 gas).',
            '4. Execution Stack: A Last-In-First-Out (LIFO) stack with a maximum depth limit of 1024 items. All opcodes (ADD, MUL, PUSH, POP) operate on stack operands.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-evm-architecture',
          title: 'Ethereum Virtual Machine (EVM) Internal Execution Engine',
          caption: 'Detailed diagram illustrating the 256-bit Stack, Volatile Memory (Byte Array), Program Code ROM, Permanent State Storage (Merkle Patricia Trie), and Gas Meter.',
          type: 'svg-interactive',
          svgType: 'evm-architecture'
        }
      ],
      summary: [
        'EVM is a quasi-Turing-complete, sandboxed execution engine running across all Ethereum nodes.',
        'Operates on a 256-bit word size tailored for cryptographic hashing and elliptic curves.',
        'Features 3 distinct memory spaces: Program ROM (code), Memory (transient RAM), and Storage (persistent state).',
        'Uses a 1024-depth LIFO stack for opcode operand execution.'
      ],
      keyPoints: [
        'Sandboxed deterministic execution engine',
        '256-bit register word architecture',
        'ROM (immutable) vs Memory (volatile) vs Storage (permanent)',
        '1024-depth execution stack'
      ]
    },
    {
      id: 'bc-u5-q12',
      unitId: 'unit-5',
      subjectId: 'blockchain-technology',
      qNumber: 12,
      title: 'Explain Solidity: Features, Data Types, Error Handling, and Write an Annotated Contract. Include Bonus Notes on EOA vs Contract Accounts, Nodes, and Headers',
      shortTitle: 'Solidity Programming, Accounts & Node Models',
      marks: 10,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q6(c)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q5(b)', marks: 6 }
      ],
      syllabusTopics: ['Solidity Syntax', 'Data Types', 'Error Handling (require/revert/assert)', 'EOA vs Contract Account', 'Full vs Light Nodes'],
      definition: 'Solidity is an object-oriented, high-level, statically typed programming language designed specifically for developing smart contracts that run on the Ethereum Virtual Machine (EVM). Influenced by C++, Python, and JavaScript, Solidity compiles human-readable code into EVM bytecode.',
      sections: [
        {
          title: '1. Language Characteristics, Types, and Error Handling',
          content: [
            'Static Typing & Object Orientation: Supports inheritance, abstract contracts, libraries, polymorphic interfaces, and custom structs.',
            'Data Types: Value types (`bool`, `uint8` to `uint256`, `int`, `address`, `bytes32`) and Reference types (`string`, dynamic arrays, `mapping(address => uint256)`, structs).',
            'Error Handling Constructs:',
            '  • `require(condition, "message")`: Validates inputs and prerequisites; reverts state changes and refunds remaining gas if false.',
            '  • `revert("message")`: Explicitly halts execution and rolls back state changes.',
            '  • `assert(condition)`: Validates internal invariants; failure indicates severe internal bug and burns all remaining gas.'
          ]
        },
        {
          title: '2. Annotated Solidity Smart Contract Example',
          content: [
            'The following contract illustrates state management, ownership control, events, and input validation:'
          ],
          codeBlock: {
            language: 'solidity',
            code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SimpleStorage
 * @dev Demonstrates state storage, owner modifier, and require validation
 */
contract SimpleStorage {
    address public owner;
    uint256 private storedData;

    event DataUpdated(address indexed updater, uint256 newValue);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only authorized owner can call");
        _;
    }

    constructor(uint256 initialValue) {
        owner = msg.sender;
        storedData = initialValue;
    }

    function set(uint256 x) public onlyOwner {
        require(x > 0, "Value must be strictly positive");
        storedData = x;
        emit DataUpdated(msg.sender, x);
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}`
          }
        }
      ],
      tables: [
        {
          headers: ['Evaluation Parameter', 'Externally Owned Account (EOA)', 'Contract Account'],
          rows: [
            { parameter: 'Governing Authority', col1: 'Private cryptographic key controlled by a human user', col2: 'Immutable smart contract code deployed on the blockchain' },
            { parameter: 'Associated Code', col1: 'None (contains balance and transaction nonce only)', col2: 'Contains EVM bytecode and dedicated persistent storage trie' },
            { parameter: 'Transaction Initiation', col1: 'Can actively create and initiate transactions', col2: 'Passive; only executes in response to incoming calls/transactions' },
            { parameter: 'Creation Overhead', col1: 'Completely free; generated mathematically locally', col2: 'Requires gas fee to deploy contract bytecode on-chain' },
            { parameter: 'Account State Tuple', col1: '(nonce, balance, emptyStorageRoot, emptyCodeHash)', col2: '(nonce, balance, storageRoot, codeHash)' }
          ]
        },
        {
          headers: ['Evaluation Parameter', 'Full Node', 'Light Node (SPV)'],
          rows: [
            { parameter: 'Ledger Storage', col1: 'Stores complete blockchain history and global state trie', col2: 'Stores only block headers; requests state proofs from full nodes' },
            { parameter: 'Transaction Verification', col1: 'Independently executes and validates every block and state transition', col2: 'Relies on full nodes for cryptographic Merkle proofs' },
            { parameter: 'Hardware Demands', col1: 'High (requires 1-2 TB SSD, 16+ GB RAM, high bandwidth)', col2: 'Minimal (can run on mobile phones, browser extensions, IoT)' }
          ]
        }
      ],
      summary: [
        'Solidity is the primary statically typed, contract-oriented programming language for EVM.',
        'Features require(), revert(), and assert() for robust runtime error handling.',
        'EOA accounts are owned by humans with private keys; Contract Accounts are governed by code.',
        'Full nodes independently validate all state transitions; light nodes store only block headers.'
      ],
      keyPoints: [
        'Statically typed contract-oriented language',
        'require(), revert(), assert() error handling',
        'EOA vs Contract Account distinction',
        'Full node vs Light node storage model'
      ]
    }
  ]
};
