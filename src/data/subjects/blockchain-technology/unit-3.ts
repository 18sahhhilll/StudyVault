import { Unit } from '@/types';

export const blockchainUnit3Data: Unit = {
  id: 'unit-3',
  unitNumber: 3,
  title: 'Blockchain Platforms and Consensus',
  shortTitle: 'Platforms & Consensus',
  description: 'Exploration of public, enterprise, and DAG platforms (Bitcoin, Ethereum, Hyperledger Fabric, R3 Corda, IOTA) and consensus mechanisms (PoW, PoS, PoA, PoB, DPoS, PoET, and the Byzantine Generals Problem).',
  syllabus: [
    'Bitcoin Platform & Architecture',
    'Ethereum Platform & EVM Introduction',
    'Enterprise Platforms: Hyperledger Fabric & Modular Frameworks',
    'R3 Corda & CorDapps (Point-to-Point Distributed Ledger)',
    'IOTA Tangle & Directed Acyclic Graph (DAG) for IoT',
    'Types of Blockchain: Public, Private, Consortium, and Hybrid',
    'Permissioned vs Permissionless Blockchains',
    'The Consensus Problem & Fault Tolerance',
    'Consensus Algorithms: Proof of Work (PoW), Proof of Stake (PoS), Proof of Activity (PoA), Proof of Burn (PoB), DPoS, PoET',
    'The Byzantine Generals Problem and Blockchain Resolution'
  ],
  questionPaperIndex: [
    { paper: 'Paper 1', qMain: '(a) → Q1 (Bitcoin), Q2 (Ethereum)', qOr: '(b) → Q13 (PoW), Q14 (PoS), Q15 (PoA), Q17 (Byzantine)' },
    { paper: 'Paper 2', qMain: '(a) → Q4 (Mining), Q9 (Types)', qOr: '(b) → Q6 (Corda), Q12 (Consensus Algorithms)' },
    { paper: 'Paper 3', qMain: '(a) → Q13 (PoW), Q14 (PoS), Q15 (PoA), Q16 (PoB)', qOr: '(b) → Q1, Q2, Q3 (BTC vs ETH), Q5 (Hyperledger), Q8 (IOTA), Q10 (Permissioned), Q17 (Byzantine)' },
    { paper: 'Paper 4', qMain: '(a) → Q1, Q5, Q13, Q14', qOr: '(b) → Q9, Q12, Q6, Q7 (R3), Q17 (Byzantine)' },
    { paper: 'Paper 5', qMain: '(a) → Q2, Q5, Q6, Q7', qOr: '(b) → Q9, Q11 (Consensus), Q13, Q14, Q17' },
    { paper: 'Paper 6', qMain: '(a) → Q8, Q9', qOr: '(b) → Q13, Q14, Q15' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Consensus Algorithm', definition: 'The protocol and set of mathematical rules by which distributed nodes reach agreement on the single, true state of the ledger without trusting a central authority.' },
      { term: 'Proof of Work (PoW)', definition: 'Miners solve computationally intensive cryptographic hash puzzles (SHA-256) to validate transactions and append blocks; secured by hash-rate expenditure.' },
      { term: 'Proof of Stake (PoS)', definition: 'Validators lock up native tokens as collateral (stake); chosen pseudo-randomly proportional to stake size to propose and vote on new blocks.' },
      { term: 'Byzantine Generals Problem', definition: 'Classic game-theoretic dilemma illustrating how distributed actors can coordinate a unified strategy over an unreliable network with potential traitors.' },
      { term: 'Hyperledger Fabric', definition: 'Modular, permissioned enterprise blockchain platform featuring private channels, pluggable consensus, and smart contracts (chaincode).' },
      { term: 'R3 Corda', definition: 'Permissioned distributed ledger for financial institutions that records direct agreements point-to-point without a global broadcast of transactions.' },
      { term: 'IOTA Tangle', definition: 'Blockless, minerless distributed ledger using a Directed Acyclic Graph (DAG) where each new transaction approves two previous transactions; zero fees for IoT.' }
    ],
    coreFormulas: [
      { name: 'PoW Target Condition', latex: '\\text{SHA-256}(\\text{BlockHeader} + \\text{Nonce}) < \\text{Target}' },
      { name: 'Byzantine Fault Tolerance Bound', latex: 'N \\ge 3f + 1 \\quad \\Longleftrightarrow \\quad f < \\frac{N}{3}' },
      { name: 'PoS Stake Probability', latex: 'P(\\text{Validator } i) = \\frac{\\text{Stake}_i}{\\sum_{j} \\text{Stake}_j}' },
      { name: 'Block Time Interval', latex: 'T_{\\text{BTC}} \\approx 10 \\text{ minutes}, \\quad T_{\\text{ETH}} \\approx 12 \\text{ seconds}' }
    ],
    comparisonHighlights: [
      { title: 'Bitcoin vs Ethereum', summary: 'Bitcoin is digital gold/money (store of value, PoW, script limited). Ethereum is a global decentralized computer (Solidity smart contracts, EVM, PoS).' },
      { title: 'Public vs Private vs Consortium', summary: 'Public = anyone joins, transparent, slow. Private = single enterprise, restricted, fast. Consortium = multi-organization federation, shared governance.' },
      { title: 'PoW vs PoS', summary: 'PoW uses physical hardware and electricity (51% hashrate security). PoS uses economic stake (slashing penalty for malicious validators).' },
      { title: 'Blockchain vs Corda vs Tangle', summary: 'Blockchain batches into global blocks. Corda does point-to-point bilateral sharing. Tangle uses a blockless DAG of approving transactions.' }
    ],
    examTips: [
      'In Byzantine Generals Problem answers, always sketch the 3-general diagram (Commander and Lieutenants) and explain why 1/3 traitors prevents agreement without PoW or BFT.',
      'For Corda, highlight that it has NO global broadcast and NO mining; transactions are strictly between participating nodes and notarized by a Notary.',
      'Highlight IOTA Tangle DAG with a visual of incoming transactions approving two previous tip transactions.'
    ]
  },
  questions: [
    {
      id: 'bc-u3-q1',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 1,
      title: 'Explain Bitcoin Architecture, Working and Characteristics',
      shortTitle: 'Bitcoin Architecture & Core Properties',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q1(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q1(b)(i)', marks: 4 },
        { paper: 'Paper 3', questionNo: 'Q1(c)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q1(a)(i)', marks: 6 }
      ],
      syllabusTopics: ['Bitcoin', 'Cryptocurrency', 'Proof of Work', 'UTXO'],
      definition: 'Bitcoin is the world\'s first decentralized cryptocurrency, created by Satoshi Nakamoto in 2009. It enables peer-to-peer digital payments over a public, permissionless blockchain without intermediary financial institutions.',
      sections: [
        {
          title: '1. Foundational Characteristics of Bitcoin',
          content: [
            'Public and Permissionless: Anyone with an internet connection can join, transmit transactions, read ledger history, or operate a mining node.',
            'Decentralized Peer-to-Peer Architecture: No central bank, government, or middleman controls issuance or validates transactions.',
            'Capped Supply: Mathematically hardcoded cap of 21 million BTC, creating deflationary digital scarcity.',
            'Immutability: Once confirmed across successive blocks, transactions cannot be altered or reversed without rewriting the majority of cumulative proof-of-work.',
            'Average Block Time: A new block is mined approximately every 10 minutes, dynamically recalibrated via difficulty adjustments every 2016 blocks (~2 weeks).',
            'Double-Spending Solution: Solved the classical digital double-spending problem through cryptographic timestamping and decentralized consensus.'
          ]
        },
        {
          title: '2. Step-by-Step Transaction Lifecycle',
          content: [
            '1. Transaction Creation: Sender signs a digital transaction specifying inputs (Unspent Transaction Outputs - UTXOs) and destination recipient address using their private key.',
            '2. Peer-to-Peer Propagation: Transaction is broadcast across the P2P network and pooled into nodes\' mempools (memory pools).',
            '3. Block Construction: Miners collect pending transactions, verify signatures, ensure no UTXO is double-spent, and construct a candidate block with a Merkle root.',
            '4. Proof of Work Mining: Miners iterate through nonce values until finding a SHA-256 double hash meeting the network difficulty target.',
            '5. Verification & Finality: The winning block is broadcast to the network; other nodes independently verify validity and append it to their longest chain.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-bitcoin-lifecycle',
          title: 'Bitcoin Transaction Lifecycle & Block Chaining',
          caption: 'Step-by-step pipeline: Transaction signing -> Mempool broadcast -> Miner PoW block assembly -> Consensus validation -> Ledger append.',
          type: 'svg-interactive',
          svgType: 'bitcoin-lifecycle'
        }
      ],
      summary: [
        'Bitcoin is the first decentralized digital currency created in 2009 by Satoshi Nakamoto.',
        'Runs on public Proof of Work, uses SHA-256 hashing, and has a 21 million coin cap.',
        'Blocks are mined roughly every 10 minutes and recorded on an immutable distributed ledger.',
        'Eliminates double-spending without requiring central bank intermediaries.'
      ],
      keyPoints: [
        'Peer-to-peer digital currency',
        '21 million hard supply limit',
        'SHA-256 Proof of Work consensus',
        'UTXO model & 10-minute block interval'
      ]
    },
    {
      id: 'bc-u3-q2',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 2,
      title: 'Explain Ethereum Platform, Smart Contracts, and EVM',
      shortTitle: 'Ethereum Platform & Programmable Blockchain',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q1(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q1(b)(ii)', marks: 4 },
        { paper: 'Paper 5', questionNo: 'Q1(a)', marks: 6 }
      ],
      syllabusTopics: ['Ethereum', 'Smart Contracts', 'EVM', 'Ether (ETH)'],
      definition: 'Ethereum is an open-source, decentralized, programmable blockchain platform proposed by Vitalik Buterin in 2013. It enables developers to execute Turing-complete smart contracts and build Decentralized Applications (DApps).',
      sections: [
        {
          title: '1. Architectural Elements',
          content: [
            'Programmable World Computer: Unlike Bitcoin which operates as a transactional ledger, Ethereum executes arbitrary state machine logic via smart contracts.',
            'Smart Contracts: Self-executing agreements written in high-level languages like Solidity or Vyper, compiled into bytecode for deterministic execution.',
            'Ethereum Virtual Machine (EVM): Sandboxed runtime environment running on every network node, guaranteeing identical execution outcomes globally.',
            'Ether (ETH): Native cryptocurrency serving both as money and as "gas" to compensate validators for computation and storage.',
            'Consensus Transition: Originally operated on Proof of Work (Ethash); transitioned to Proof of Stake (Beacon Chain / "The Merge") in September 2022.'
          ]
        },
        {
          title: '2. Core Application Ecosystem',
          content: [
            'Decentralized Finance (DeFi): Lending protocols, decentralized exchanges (Uniswap), algorithmic stablecoins.',
            'Non-Fungible Tokens (NFTs): ERC-721 and ERC-1155 token standards for verified digital asset ownership.',
            'Decentralized Autonomous Organizations (DAOs): Transparent governance organizations operated through immutable smart contracts.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-ethereum-stack',
          title: 'Ethereum 5-Level Architecture Stack',
          caption: 'Level 1 EVM runtime -> Level 2 Smart Contracts -> Level 3 Nodes -> Level 4 Client APIs -> Level 5 DApps.',
          type: 'svg-interactive',
          svgType: 'ethereum-stack'
        }
      ],
      summary: [
        'Ethereum is a programmable decentralized platform for smart contracts and DApps.',
        'Uses the EVM (Ethereum Virtual Machine) to execute Solidity bytecode deterministically.',
        'Ether (ETH) fuels transactions and pays for computational gas.',
        'Powers DeFi, NFTs, DAOs, and decentralized enterprise automation.'
      ],
      keyPoints: [
        'Programmable blockchain platform',
        'Solidity smart contracts',
        'EVM deterministic execution engine',
        'Gas computation model'
      ]
    },
    {
      id: 'bc-u3-q3',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 3,
      title: 'Difference between Bitcoin and Ethereum',
      shortTitle: 'Bitcoin vs Ethereum Comprehensive Comparison',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q2(a)', marks: 6 }
      ],
      syllabusTopics: ['Bitcoin vs Ethereum', 'Smart Contracts', 'Consensus Comparison'],
      definition: 'Bitcoin was engineered as a decentralized alternative currency and store of value, whereas Ethereum was developed as a general-purpose programmable platform for decentralized applications.',
      sections: [
        {
          title: '1. Comparative Analysis Matrix',
          table: {
            headers: ['Comparative Feature', 'Bitcoin (BTC)', 'Ethereum (ETH)'],
            rows: [
              { parameter: 'Primary Purpose', col1: 'Digital cash, store of value ("Digital Gold")', col2: 'Programmable platform for smart contracts & DApps' },
              { parameter: 'Creator & Launch Year', col1: 'Satoshi Nakamoto (2009)', col2: 'Vitalik Buterin (2013 proposal, 2015 launch)' },
              { parameter: 'Native Coin', col1: 'BTC (Bitcoin)', col2: 'ETH (Ether)' },
              { parameter: 'Consensus Mechanism', col1: 'Proof of Work (PoW via SHA-256)', col2: 'Proof of Stake (PoS, formerly PoW)' },
              { parameter: 'Average Block Interval', col1: '~10 minutes', col2: '~12 seconds' },
              { parameter: 'Total Coin Supply', col1: 'Strictly capped at 21,000,000 BTC', col2: 'No hard cap (dynamic burn via EIP-1559)' },
              { parameter: 'Smart Contract Capability', col1: 'Very limited (non-Turing complete Script)', col2: 'Full Turing-complete support (Solidity, Vyper)' },
              { parameter: 'Virtual Machine', col1: 'None (script engine)', col2: 'Ethereum Virtual Machine (EVM)' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-btc-vs-eth',
          title: 'Bitcoin vs Ethereum Paradigm Comparison',
          caption: 'Specialized transactional digital money ledger versus generalized smart contract state machine architecture.',
          type: 'svg-interactive',
          svgType: 'btc-vs-eth'
        }
      ],
      summary: [
        'Bitcoin is focused on decentralized money and value storage with a 21M cap and 10-minute blocks.',
        'Ethereum is a world computer for smart contracts and DApps with ~12-second blocks.',
        'Bitcoin uses PoW; Ethereum uses PoS.',
        'Bitcoin script is limited; Ethereum Solidity is Turing-complete.'
      ],
      keyPoints: [
        'Store of value vs Global decentralized computer',
        'PoW vs PoS consensus',
        '21 million cap vs dynamic supply',
        '10 minutes vs 12 seconds block time'
      ]
    },
    {
      id: 'bc-u3-q4',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 4,
      title: 'Bitcoin Mining and the Functionality of Miners',
      shortTitle: 'Bitcoin Mining Process & Miners Roles',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q1(a)', marks: 6 }
      ],
      syllabusTopics: ['Bitcoin Mining', 'Hashcash', 'Difficulty Adjustment', 'Mining Rewards'],
      definition: 'Mining is the decentralized computational process of verifying transactions, resolving cryptographic Proof of Work puzzles, and appending new blocks to the Bitcoin blockchain in exchange for freshly minted coins and transaction fees.',
      sections: [
        {
          title: '1. Primary Functions of Miners',
          content: [
            '1. Collect Transactions: Miners gather pending broadcast transactions from the global network mempool.',
            '2. Transaction Validation: Verify digital signatures, ensure input UTXOs exist, and verify that no coins are double-spent.',
            '3. Block Construction: Aggregate verified transactions, create the Coinbase transaction (awarding miner reward), and compute the Merkle Root.',
            '4. Proof of Work Execution: Repeatedly alter the 32-bit Nonce and calculate SHA-256(SHA-256(BlockHeader)) until the output hash is smaller than the target threshold.',
            '5. Block Propagation: Broadcast the successful block across the P2P network for peer validation.',
            '6. Network Security: Provide cumulative computational hashpower that defends the network against history reorganization and 51% attacks.'
          ]
        },
        {
          title: '2. Incentive Structure',
          content: [
            'Block Subsidy: New bitcoins minted per block; halves every 210,000 blocks (~4 years): 50 BTC (2009) -> 25 BTC (2012) -> 12.5 BTC (2016) -> 6.25 BTC (2020) -> 3.125 BTC (2024).',
            'Transaction Fees: Paid by senders to incentivize miners to prioritize their transactions during network congestion.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-mining-flow',
          title: 'Bitcoin Mining & Proof of Work Puzzle Loop',
          caption: 'Miner hashes Block Header + Nonce -> If Hash < Target: Valid Block Found! -> Broadcast -> Reward Issued.',
          type: 'svg-interactive',
          svgType: 'mining-flow'
        }
      ],
      summary: [
        'Mining validates transactions, secures the ledger, and mints new bitcoins.',
        'Miners solve hash puzzles by changing nonces until finding a hash below the difficulty target.',
        'Rewards consist of block subsidy (halves every 4 years) plus user transaction fees.',
        'Mining difficulty dynamically self-adjusts every 2016 blocks to maintain a 10-minute block pace.'
      ],
      keyPoints: [
        'SHA-256 proof of work hashing',
        'Nonce alteration search loop',
        'Block reward halving schedule',
        'Network difficulty auto-adjustment'
      ]
    },
    {
      id: 'bc-u3-q5',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 5,
      title: 'Explain Hyperledger Project and Hyperledger Fabric Architecture',
      shortTitle: 'Hyperledger Fabric Enterprise Architecture',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q1(b)(iii)', marks: 4 },
        { paper: 'Paper 4', questionNo: 'Q1(a)(ii)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q1(a)', marks: 6 }
      ],
      syllabusTopics: ['Hyperledger', 'Hyperledger Fabric', 'Permissioned Blockchain', 'Chaincode', 'Channels'],
      definition: 'Hyperledger is an open-source umbrella project hosted by the Linux Foundation. Its flagship platform, Hyperledger Fabric, is a modular, permissioned enterprise blockchain framework that supports private channels and pluggable consensus.',
      sections: [
        {
          title: '1. Key Architectural Features of Fabric',
          content: [
            'Modular Architecture: Plug-and-play consensus algorithms (Raft, BFT), identity providers, and encryption.',
            'Private Channels: Multi-lateral sub-networks where transactions and ledgers are visible only to invited member organizations.',
            'Chaincode (Smart Contracts): Written in standard languages like Go, Java, and JavaScript/TypeScript running inside isolated Docker containers.',
            'Membership Service Provider (MSP) & CA: Cryptographically issues X.509 digital certificates to authenticate all participant organizations, nodes, and clients.',
            'No Built-in Cryptocurrency: Avoids mining overhead, speculation, and transaction fee fluctuations.'
          ]
        },
        {
          title: '2. Execute-Order-Validate Transaction Flow',
          content: [
            'Unlike traditional blockchains (Order-then-Execute), Fabric uses an Execute-Order-Validate architecture:',
            '1. Endorsement (Execution): Client submits transaction proposal to designated endorsing peers which execute chaincode in parallel and sign endorsement.',
            '2. Ordering: Ordering Service nodes package endorsed transactions into blocks sequentially without executing code (high throughput).',
            '3. Validation: Committing peers verify endorsements match policy, detect state conflicts, and commit block to ledger.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-hyperledger-architecture',
          title: 'Hyperledger Fabric Architecture & Channels',
          caption: 'Client application interacting with Endorsing Peers, Orderer Nodes, MSP Certificate Authority, and isolated Channels.',
          type: 'svg-interactive',
          svgType: 'hyperledger-architecture'
        }
      ],
      summary: [
        'Hyperledger is a Linux Foundation enterprise project for permissioned blockchains.',
        'Fabric is modular, permissioned, and uses private channels for strict business confidentiality.',
        'Uses standard programming languages (Go, Java) for smart contracts (chaincode).',
        'Employs an Execute-Order-Validate flow eliminating PoW energy waste.'
      ],
      keyPoints: [
        'Permissioned enterprise framework',
        'Private channels for data confidentiality',
        'MSP & X.509 identity certificates',
        'Execute-Order-Validate pipeline'
      ]
    },
    {
      id: 'bc-u3-q6',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 6,
      title: 'Features of Corda, Why it is Different, and CorDapps',
      shortTitle: 'R3 Corda Architecture & CorDapps',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q1(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q2(c)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q1(a)', marks: 6 }
      ],
      syllabusTopics: ['Corda', 'CorDapps', 'Notary', 'Bilateral Privacy', 'States and Contracts'],
      definition: 'Corda is an open-source distributed ledger platform developed by R3 specifically for regulated financial institutions. It records and automates legal agreements point-to-point without a global broadcast of transactions.',
      sections: [
        {
          title: '1. Why Corda is Fundamentally Different',
          content: [
            '"Both a Blockchain and Not a Blockchain": Corda cryptographically links transaction histories into DAG structures, but it has no global blocks and no global broadcast.',
            'Point-to-Point Privacy: Data is shared strictly on a need-to-know basis. If Bank A trades with Bank B, Bank C never sees or stores that transaction.',
            'No Mining or Cryptocurrency: Does not require wasteful PoW or volatile tokens.',
            'Legal Prose Linking: Smart contract code is directly linked to legally binding prose (Ricardian Contracts), ensuring enforceability in court.',
            'Notary Service: Dedicated notary nodes provide uniqueness consensus to prevent double-spending without broadcasting transaction data.'
          ]
        },
        {
          title: '2. CorDapps (Corda Distributed Applications) Components',
          content: [
            '1. State: Immutable objects representing shared facts on the ledger at a point in time (e.g., Cash, IOU, Loan).',
            '2. Contract: Deterministic code defining rules that govern valid state transitions.',
            '3. Flow: Coordinated sequence of actions nodes execute to propose, verify, sign, notarize, and commit a transaction.',
            '4. Services: Long-running utilities such as oracle services (external data feeds) and vault querying.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-corda-architecture',
          title: 'R3 Corda Point-to-Point Architecture',
          caption: 'Direct bilateral communication between Node A and Node B with Notary uniqueness check; Node C is excluded from deal visibility.',
          type: 'svg-interactive',
          svgType: 'corda-architecture'
        }
      ],
      summary: [
        'Corda is a financial distributed ledger with no global blocks and no global broadcast.',
        'Data is shared point-to-point strictly between transacting parties for privacy.',
        'Notary services prevent double-spending without viewing transaction details.',
        'CorDapps consist of States (facts), Contracts (rules), and Flows (protocols).'
      ],
      keyPoints: [
        'Point-to-point need-to-know privacy',
        'Notary service uniqueness verification',
        'Legally binding Ricardian smart contracts',
        'CorDapps structure: States, Contracts, Flows'
      ]
    },
    {
      id: 'bc-u3-q7',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 7,
      title: 'Write a Note on R3 Consortium and Corda Settler',
      shortTitle: 'R3 Banking Consortium & Enterprise Ecosystem',
      marks: 4,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q2(c)', marks: 4 },
        { paper: 'Paper 5', questionNo: 'Q1(a)', marks: 4 }
      ],
      syllabusTopics: ['R3', 'Corda Settler', 'Banking Consortium', 'Enterprise DLT'],
      definition: 'R3 is an enterprise software company leading an international consortium of over 100 banks, financial institutions, and trade associations, founded in 2014 to build and govern the Corda distributed ledger platform.',
      sections: [
        {
          title: '1. Background & Strategic Mission',
          content: [
            'Founded in 2014 by banking giants including JPMorgan Chase, Goldman Sachs, Barclays, and Credit Suisse.',
            'Core Objective: Adapt blockchain and distributed ledger capabilities to regulated financial markets where regulatory compliance, strict privacy, and legal enforceability are non-negotiable.',
            'Major Industry Partners: Collaborates with global payment networks like SWIFT, trade finance consortia like Marco Polo, MonetaGo, and national central banks.'
          ]
        },
        {
          title: '2. Corda Settler',
          content: [
            'Launched in 2018 as an open-source CorDapp that allows obligations arising on Corda to be settled using any payment rail.',
            'Supports settlement via both traditional payment rails (RTGS, fiat wire) and cryptographic tokens (initially tested with Ripple XRP).',
            'Verifies that payment has been made off-ledger or on an external chain before releasing the contractual state on Corda.'
          ]
        }
      ],
      summary: [
        'R3 is an enterprise fintech company leading a consortium of 100+ global financial institutions.',
        'Created Corda to address institutional banking needs for privacy and legal compliance.',
        'Corda Settler enables cross-border settlement using cryptocurrency or traditional bank payment rails.'
      ],
      keyPoints: [
        '100+ member banking consortium',
        'Financial market focus',
        'Corda Settler multi-rail settlement',
        'Enterprise legal compliance'
      ]
    },
    {
      id: 'bc-u3-q8',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 8,
      title: 'Explain IOTA Platform, Tangle DAG, and its Role in IoT',
      shortTitle: 'IOTA & Tangle Directed Acyclic Graph (DAG)',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q2(d)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q1(a)(iv)', marks: 4 }
      ],
      syllabusTopics: ['IOTA', 'Tangle', 'Directed Acyclic Graph (DAG)', 'IoT Micropayments'],
      definition: 'IOTA is an open-source distributed ledger designed specifically for the Internet of Things (IoT). Instead of a blockchain, it uses a blockless Directed Acyclic Graph (DAG) called the Tangle to achieve zero transaction fees and high scalability.',
      sections: [
        {
          title: '1. The Tangle Architecture (Directed Acyclic Graph)',
          content: [
            'No Blocks and No Miners: Transactions are individual nodes in a directed graph pointing backwards toward earlier transactions.',
            'Self-Consensus Mechanism: To issue a new transaction, an IoT device must perform lightweight Proof of Work and validate two prior unconfirmed transactions ("tips").',
            'Network Scaling Advantage: Unlike traditional blockchains that experience throughput bottlenecks as traffic surges, the Tangle becomes faster and more secure as transaction volume increases.'
          ]
        },
        {
          title: '2. Role and Advantages in IoT',
          content: [
            'Zero Transaction Fees: Enables true machine-to-machine (M2M) nano-payments (e.g., paying a fraction of a cent for 1 KB of sensor telemetry or per-second EV charging).',
            'Low Resource Footprint: Lightweight cryptographic requirements designed for low-power microcontrollers and embedded sensors.',
            'Quantum-Resistant Cryptography: Utilizes Winternitz one-time signatures to resist potential quantum computer decryption.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-iota-tangle',
          title: 'IOTA Tangle: Directed Acyclic Graph (DAG)',
          caption: 'New incoming transaction approves two prior tip transactions; graph grows organically from Genesis without linear blocks.',
          type: 'svg-interactive',
          svgType: 'iota-tangle'
        }
      ],
      summary: [
        'IOTA replaces linear blockchain with the Tangle, a Directed Acyclic Graph (DAG).',
        'New transactions approve two previous transactions, eliminating dedicated miners.',
        'Offers zero transaction fees, ideal for machine-to-machine (M2M) IoT micro-transactions.',
        'Throughput and security scale upwards with transaction activity.'
      ],
      keyPoints: [
        'Blockless Directed Acyclic Graph (DAG)',
        'Zero fee model for micro-payments',
        'IoT device self-verification mechanism',
        'Scalability improves with network volume'
      ]
    },
    {
      id: 'bc-u3-q9',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 9,
      title: 'Types of Blockchain (Public, Private, Consortium, Hybrid) with Pros and Cons',
      shortTitle: 'Four Types of Blockchain Architecture',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q2(a)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q2(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q1(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q2(a)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q1(a)', marks: 6 }
      ],
      syllabusTopics: ['Public Blockchain', 'Private Blockchain', 'Consortium Blockchain', 'Hybrid Blockchain'],
      definition: 'Blockchains are categorized into four structural models based on access control, participation rights, governance structure, and data visibility: Public, Private, Consortium, and Hybrid.',
      sections: [
        {
          title: '1. Detailed Taxonomy of Blockchain Types',
          content: [
            '1. Public Blockchain: Fully decentralized and permissionless. Anyone can read, submit transactions, and participate in consensus. Examples: Bitcoin, Ethereum. Pros: Censorship resistant, transparent, tamper-proof. Cons: Slow, high energy use, no privacy.',
            '2. Private Blockchain: Completely permissioned and operated by a single centralized enterprise. Access is strictly governed. Examples: Hyperledger Fabric, Multichain. Pros: Extremely fast, confidential, customizable. Cons: Centralized authority, risk of insider tampering.',
            '3. Consortium (Federated) Blockchain: Governed by a predetermined coalition of organizations (e.g., consortium of 10 banks). Selected nodes validate blocks. Examples: Corda, Quorum. Pros: Shared trust, high throughput, collective oversight. Cons: Difficult governance negotiations.',
            '4. Hybrid Blockchain: Combines private state execution with public proof verification. Sensitive data remains private while cryptographic hash proofs are anchored onto a public chain for auditability. Examples: Dragonchain, IBM Food Trust.'
          ]
        },
        {
          title: '2. Comprehensive Comparison Table',
          table: {
            headers: ['Characteristic', 'Public', 'Private', 'Consortium', 'Hybrid'],
            rows: [
              { parameter: 'Access Permission', col1: 'Permissionless (Open to all)', col2: 'Strictly Single Organization', col3: 'Group of Pre-approved Organizations', col4: 'Mixed (Public audit + Private state)' },
              { parameter: 'Transaction Speed', col1: 'Slow (10 - 30 TPS)', col2: 'Very Fast (1000+ TPS)', col3: 'High (hundreds to thousands TPS)', col4: 'Fast' },
              { parameter: 'Decentralization', col1: 'Fully Decentralized', col2: 'Centralized', col3: 'Partially Decentralized (Federated)', col4: 'Selective' },
              { parameter: 'Consensus Decision', col1: 'All miners / validators', col2: 'Single organization node', col3: 'Designated consortium nodes', col4: 'Organization + Public check' },
              { parameter: 'Immutability', col1: 'Practically impossible to tamper', col2: 'Owner organization can modify history', col3: 'Requires colluding majority of members', col4: 'Publicly anchored hashes cannot tamper' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-blockchain-types',
          title: 'Spectrum of Blockchain Architectures',
          caption: 'From fully decentralized, permissionless Public chains (Bitcoin) through Consortium and Hybrid to centralized Private chains.',
          type: 'svg-interactive',
          svgType: 'blockchain-types'
        }
      ],
      summary: [
        'Public: Permissionless, open to all, fully decentralized, slow (Bitcoin, Ethereum).',
        'Private: Controlled by one organization, fast, confidential, centralized (Hyperledger).',
        'Consortium: Governed by a federation of organizations (R3 Corda, Quorum).',
        'Hybrid: Combines private data storage with public proof verification (Dragonchain).'
      ],
      keyPoints: [
        'Permissionless vs Permissioned access',
        'Centralized vs Federated vs Decentralized governance',
        'Speed vs Trust trade-offs',
        'Read and write permission matrix'
      ]
    },
    {
      id: 'bc-u3-q10',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 10,
      title: 'Permissioned vs Permissionless Blockchain',
      shortTitle: 'Permissioned vs Permissionless Blockchains',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q2(b)', marks: 6 }
      ],
      syllabusTopics: ['Permissioned', 'Permissionless', 'Access Control', 'Identity'],
      definition: 'Permissionless blockchains allow anyone to join, participate in consensus, and read ledger data anonymously; Permissioned blockchains enforce an access-control layer where identities are known and actions are governed by role-based privileges.',
      sections: [
        {
          title: '1. Comparative Analysis Matrix',
          table: {
            headers: ['Parameter', 'Permissionless (Public)', 'Permissioned (Private / Consortium)'],
            rows: [
              { parameter: 'Participation Access', col1: 'Open to anyone globally without approval', col2: 'Restricted; requires vetting and digital certificate' },
              { parameter: 'User Identity', col1: 'Pseudonymous (wallet addresses)', col2: 'Known, authenticated (KYC / X.509 certs)' },
              { parameter: 'Throughput & Speed', col1: 'Slow (due to massive global consensus)', col2: 'Fast (trusted validator set, minimal latency)' },
              { parameter: 'Cryptocurrency Token', col1: 'Mandatory (rewards miners and deters spam)', col2: 'Not required (incentives governed by contracts)' },
              { parameter: 'Consensus Algorithms', col1: 'PoW, PoS, DPoS (Proof of Burn)', col2: 'Raft, PBFT, IBFT, PoET' },
              { parameter: 'Governance', col1: 'Community consensus / Hard & soft forks', col2: 'Defined by corporate board / consortium contract' }
            ]
          }
        }
      ],
      summary: [
        'Permissionless = Anonymous, open to all, requires cryptocurrency incentives, slower.',
        'Permissioned = Authenticated identities, restricted access, no cryptocurrency required, high throughput.',
        'Permissionless suits global digital currencies; Permissioned suits enterprise supply chain and banking.'
      ],
      keyPoints: [
        'Open vs Restricted entry',
        'Pseudonymity vs Known identity',
        'Cryptocurrency requirement contrast',
        'Throughput and latency differentiation'
      ]
    },
    {
      id: 'bc-u3-q11',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 11,
      title: 'What is Consensus? Why is it Needed in Blockchain?',
      shortTitle: 'Consensus Fundamentals & Byzantine Fault Tolerance',
      marks: 4,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q2(c)', marks: 4 }
      ],
      syllabusTopics: ['Consensus', 'Fault Tolerance', 'Double Spending'],
      definition: 'Consensus is the automated mechanism by which distributed nodes in an untrusted peer-to-peer network agree upon a single consistent version of ledger state without reliance on a central coordinating authority.',
      sections: [
        {
          title: '1. Why Consensus is Essential',
          content: [
            '1. Eliminates Central Authority: Replaces centralized clearinghouses with automated cryptographic rules.',
            '2. Prevents Double-Spending: Guarantees that a digital token cannot be copied or spent simultaneously in two different transactions.',
            '3. Ledger Synchronization: Ensures all honest nodes across the globe maintain an identical chronological transaction history.',
            '4. Byzantine Fault Tolerance: Enables the network to function correctly even if a subset of nodes crash, disconnect, or act maliciously.',
            '5. Trustless Operation: Parties who do not know or trust each other can safely execute transactions with guaranteed finality.'
          ]
        }
      ],
      summary: [
        'Consensus is the core protocol enabling distributed nodes to agree on ledger state.',
        'Essential for eliminating double-spending and operating without central authorities.',
        'Ensures network survivability against malicious or crashing nodes (fault tolerance).'
      ],
      keyPoints: [
        'Agreement without central coordinator',
        'Double-spending elimination',
        'State machine replication consistency',
        'Byzantine fault tolerance'
      ]
    },
    {
      id: 'bc-u3-q12',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 12,
      title: 'List Consensus Algorithms and Explain Any Two (or 5 Types with Examples)',
      shortTitle: 'Taxonomy of Consensus Algorithms',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q2(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q2(b)', marks: 6 }
      ],
      syllabusTopics: ['Consensus Algorithms', 'PoW', 'PoS', 'DPoS', 'PoET', 'PBFT'],
      definition: 'Consensus algorithms are mathematical protocols designed to achieve agreement on distributed ledgers, categorized based on computational proof, stake ownership, randomized delay, or voting rounds.',
      sections: [
        {
          title: '1. Major Consensus Algorithms Catalog',
          table: {
            headers: ['Algorithm', 'Underlying Working Idea', 'Flagship Example'],
            rows: [
              { parameter: 'Proof of Work (PoW)', col1: 'Solve computationally intensive cryptographic puzzle', col2: 'Bitcoin, Litecoin' },
              { parameter: 'Proof of Stake (PoS)', col1: 'Lock cryptocurrency as collateral; lottery proportional to stake', col2: 'Ethereum, Cardano, Solana' },
              { parameter: 'Delegated Proof of Stake (DPoS)', col1: 'Coin holders vote for a small committee of trusted block producers', col2: 'EOS, Tron, Steem' },
              { parameter: 'Proof of Elapsed Time (PoET)', col1: 'Random wait timers executed inside trusted hardware (Intel SGX)', col2: 'Hyperledger Sawtooth' },
              { parameter: 'Proof of Activity (PoA)', col1: 'Hybrid: PoW miners mine empty header, PoS validators sign it', col2: 'Decred' },
              { parameter: 'Proof of Burn (PoB)', col1: 'Permanently destroy coins to an unspendable address to earn mining rights', col2: 'Slimcoin, Factom' },
              { parameter: 'Proof of Authority (PoA)', col1: 'Pre-vetted, identified institutions serve as block validators', col2: 'VeChain, Binance Smart Chain' },
              { parameter: 'Practical Byzantine Fault Tolerance (PBFT)', col1: 'Multi-round message voting (Pre-prepare, Prepare, Commit)', col2: 'Zilliqa, Hyperledger Fabric' }
            ]
          }
        },
        {
          title: '2. Deep Dive: DPoS and PoET',
          content: [
            'Delegated PoS (DPoS): Token holders vote for 21-100 "witnesses" who take turns producing blocks in round-robin fashion. Offers extreme speed (thousands of TPS), but introduces partial centralization.',
            'Proof of Elapsed Time (PoET): Designed for permissioned networks. Each node requests a random wait time from a Trusted Execution Environment (Intel SGX). The node whose timer expires first wakes up and publishes the block.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-consensus-types',
          title: 'Taxonomy of Blockchain Consensus Mechanisms',
          caption: 'Classification into Computation-based (PoW), Resource-based (PoS, PoB), Hardware-based (PoET), and Voting-based (DPoS, PBFT).',
          type: 'svg-interactive',
          svgType: 'consensus-types'
        }
      ],
      summary: [
        'Consensus mechanisms provide Byzantine fault tolerance across distributed networks.',
        'Primary types: PoW (puzzle), PoS (stake), DPoS (elected witnesses), PoET (random timers), PoA (hybrid).',
        'Selection balances decentralization, security, throughput, and energy efficiency.'
      ],
      keyPoints: [
        'Consensus algorithm classification spectrum',
        'PoW vs PoS vs DPoS differences',
        'Hardware-enforced wait times in PoET',
        'Voting-round based PBFT'
      ]
    },
    {
      id: 'bc-u3-q13',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 13,
      title: 'Proof of Work (PoW) with Example, Pros and Cons',
      shortTitle: 'Proof of Work (PoW) Deep Dive',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q1(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q1(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q2(a)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q1(b)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q1(b)', marks: 6 }
      ],
      syllabusTopics: ['Proof of Work', 'Hash Function', '51% Attack', 'Energy Consumption'],
      definition: 'Proof of Work (PoW) is the original blockchain consensus mechanism where miners compete to solve a computationally demanding cryptographic puzzle; the first to find a valid nonce broadcasts the block and receives a reward.',
      sections: [
        {
          title: '1. Mechanism of Proof of Work',
          content: [
            'Target Inequality: Miners search for a 32-bit nonce such that: SHA-256(SHA-256(BlockHeader)) < Target.',
            'Asymmetric Verification: Finding the nonce requires billions of trial-and-error hash computations (computationally hard). Verifying the solution requires only a single hash calculation (instantaneous).',
            'Longest Chain Rule: In case of temporary blockchain forks, nodes always adopt the chain with the greatest cumulative proof-of-work.'
          ],
          formulas: [
            { name: 'PoW Mathematical Condition', latex: '\\text{SHA-256}\\Big(\\text{SHA-256}(\\text{Header}_{\\text{prev}} + \\text{MerkleRoot} + \\text{Time} + \\text{Bits} + \\text{Nonce})\\Big) \\le \\text{Target}' }
          ]
        },
        {
          title: '2. Advantages and Disadvantages',
          table: {
            headers: ['Strengths of PoW', 'Weaknesses / Limitations of PoW'],
            rows: [
              { parameter: 'Battle-Tested Security', col1: 'Unbroken security track record since 2009 in Bitcoin.', col2: 'Massive electricity consumption (comparable to whole nations).' },
              { parameter: 'Sybil Resistance', col1: 'Cannot forge votes without expending real physical energy.', col2: 'Low transaction throughput (Bitcoin limited to ~7 TPS).' },
              { parameter: 'Decentralized Entry', col1: 'Anyone with hardware can join permissionlessly.', col2: 'Hardware centralization in massive ASIC mining farms.' },
              { parameter: 'Byzantine Resolution', col1: 'Robust game-theoretic economic security.', col2: 'Risk of 51% attack if a pool commands majority hashpower.' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-pow-block',
          title: 'Proof of Work Cryptographic Chaining',
          caption: 'Block N pointing to Previous Hash N-1 with Merkle Root, Nonce search, and Target verification leading to next block.',
          type: 'svg-interactive',
          svgType: 'pow-block'
        }
      ],
      summary: [
        'PoW requires miners to find a hash meeting network difficulty targets.',
        'Extremely secure and Sybil-resistant because redoing history requires massive physical energy.',
        'Major drawbacks are high energy usage, slow block confirmation, and low scalability.'
      ],
      keyPoints: [
        'Asymmetric verification (hard to find, easy to check)',
        'SHA-256 double hashing',
        'Longest chain consensus rule',
        '51% attack threshold'
      ]
    },
    {
      id: 'bc-u3-q14',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 14,
      title: 'Proof of Stake (PoS) with Example, Comparison with PoW',
      shortTitle: 'Proof of Stake (PoS) Architecture & Slashing',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q1(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q1(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q2(a)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q2(b)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q1(c)', marks: 6 }
      ],
      syllabusTopics: ['Proof of Stake', 'Validators', 'Slashing', 'Nothing at Stake'],
      definition: 'Proof of Stake (PoS) is an energy-efficient consensus mechanism where block creators (validators) are pseudo-randomly selected to propose and attest to blocks in proportion to the quantity of cryptocurrency they lock up as economic collateral (stake).',
      sections: [
        {
          title: '1. Mechanism of Proof of Stake',
          content: [
            'Validators Replace Miners: No computational puzzle solving; validators deposit tokens into a smart contract (e.g., 32 ETH in Ethereum).',
            'Selection Probability: The likelihood of being chosen to propose a block is proportional to the fraction of total network stake held.',
            'Attestation & Voting: Other validators verify the proposed block and cast cryptographic votes (attestations).',
            'Slashing Penalty: If a validator proposes conflicting blocks (double signing) or acts maliciously, their locked stake is automatically confiscated (slashed) and burned.'
          ]
        },
        {
          title: '2. Proof of Work vs Proof of Stake Comparison Table',
          table: {
            headers: ['Comparative Dimension', 'Proof of Work (PoW)', 'Proof of Stake (PoS)'],
            rows: [
              { parameter: 'Block Creator', col1: 'Miner (competes with computing hardware)', col2: 'Validator (locks up cryptocurrency collateral)' },
              { parameter: 'Resource Required', col1: 'High electricity & specialized ASIC hardware', col2: 'Native cryptocurrency tokens' },
              { parameter: 'Energy Consumption', col1: 'Enormous (~99.9% higher than PoS)', col2: 'Minimal (eco-friendly, 99.95% reduction)' },
              { parameter: 'Attacker Deterrence', col1: 'Must control > 50% of global mining hashrate', col2: 'Must own > 33% to 51% of total staked token supply' },
              { parameter: 'Penalties for Bad Behavior', col1: 'Wasted electricity cost', col2: 'Direct financial confiscation (Slashing of stake)' },
              { parameter: 'Transaction Speed', col1: 'Slower block intervals (e.g. 10 minutes)', col2: 'Faster block slots (e.g. 12 seconds)' }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-pow-vs-pos',
          title: 'Consensus Comparison: Proof of Work vs Proof of Stake',
          caption: 'PoW hardware race consuming electricity vs PoS economic collateral with validator selection lottery and slashing.',
          type: 'svg-interactive',
          svgType: 'pow-vs-pos'
        }
      ],
      summary: [
        'PoS replaces physical electricity expenditure with economic capital at risk.',
        'Validators stake coins to earn transaction fees and risk slashing for misbehavior.',
        'Reduces energy consumption by over 99.95% while speeding up block confirmation.',
        'Criticisms include "the rich get richer" and potential coin centralization.'
      ],
      keyPoints: [
        'Validator staking collateral',
        'Economic slashing mechanism',
        '99.9% energy consumption reduction',
        'Nothing-at-stake challenge resolution'
      ]
    },
    {
      id: 'bc-u3-q15',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 15,
      title: 'Explain Proof of Activity (PoA) Consensus',
      shortTitle: 'Proof of Activity (PoA) Hybrid Consensus',
      marks: 4,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q1(b)', marks: 4 },
        { paper: 'Paper 3', questionNo: 'Q1(a)', marks: 4 },
        { paper: 'Paper 6', questionNo: 'Q1(b)', marks: 4 }
      ],
      syllabusTopics: ['Proof of Activity', 'Hybrid Consensus', 'Decred'],
      definition: 'Proof of Activity (PoA) is a hybrid consensus mechanism combining elements of Proof of Work and Proof of Stake, where miners first mine empty block templates using PoW and staked coin holders validate and sign the block.',
      sections: [
        {
          title: '1. Step-by-Step Execution Protocol',
          content: [
            '1. PoW Mining: Miners compete to solve a computational puzzle to mine an empty block header (containing previous hash, miner address, and nonce, but no transactions).',
            '2. Header Broadcast: Once a valid hash is found, the empty header is broadcast across the network.',
            '3. Validator Selection: The hash of the block header is used as a deterministic seed to pseudo-randomly select N stakeholders from the ledger.',
            '4. PoS Attestation: Selected stakeholders verify the block, fill it with transactions, and sign it with their private keys.',
            '5. Reward Sharing: Once all N validators sign, the block is appended and block rewards are split between the PoW miner and the PoS validators.'
          ]
        },
        {
          title: '2. Security Advantage',
          content: [
            'To execute a 51% attack, an adversary must simultaneously control 51% of global computational hashrate AND 51% of all staked coins, making attacks prohibitively expensive.',
            'Example: Decred cryptocurrency.'
          ]
        }
      ],
      summary: [
        'PoA combines PoW (to mine empty block headers) and PoS (validators sign block).',
        'Dual requirements make 51% attacks virtually impossible.',
        'Rewards are shared equitably between hardware miners and coin stakeholders.'
      ],
      keyPoints: [
        'Hybrid PoW + PoS architecture',
        'Deterministic stakeholder selection from header hash',
        'Dual-layer attack immunity',
        'Split reward distribution'
      ]
    },
    {
      id: 'bc-u3-q16',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 16,
      title: 'Explain Proof of Burn (PoB) Consensus',
      shortTitle: 'Proof of Burn (PoB) Protocol',
      marks: 4,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q1(a)', marks: 4 }
      ],
      syllabusTopics: ['Proof of Burn', 'Eater Address', 'Virtual Mining'],
      definition: 'Proof of Burn (PoB) is an eco-friendly consensus mechanism where miners demonstrate economic commitment by permanently destroying (burning) cryptocurrency, receiving virtual mining power in return.',
      sections: [
        {
          title: '1. Working Mechanism',
          content: [
            'Burning Mechanism: Coins are sent to a verifiable, unspendable "eater address" (an address whose private key is mathematically impossible to know, like all-zeros).',
            'Virtual Rig: Burning coins is equivalent to purchasing virtual mining hardware without consuming real-world electricity.',
            'Decay Function: Mining power decays over time, encouraging miners to burn additional coins periodically to retain their block production rights.',
            'Examples: Slimcoin, Counterparty, Factom.'
          ]
        }
      ],
      summary: [
        'PoB simulates mining without hardware by sending coins to an unspendable eater address.',
        'Greater burn volume increases probability of mining subsequent blocks.',
        'Eco-friendly alternative to PoW, but criticized for permanently wasting wealth.'
      ],
      keyPoints: [
        'Cryptographic eater address',
        'Virtual mining rig equivalent',
        'Time-decay of burned voting weight',
        'Low energy footprint'
      ]
    },
    {
      id: 'bc-u3-q17',
      unitId: 'unit-3',
      subjectId: 'blockchain-technology',
      qNumber: 17,
      title: 'The Byzantine Generals Problem and its Solution in Blockchain',
      shortTitle: 'Byzantine Generals Problem & Solution',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q2(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q2(c)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q2(d)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q1(c)', marks: 6 }
      ],
      syllabusTopics: ['Byzantine Generals Problem', 'Byzantine Fault Tolerance', 'PoW Solution'],
      definition: 'The Byzantine Generals Problem is a classical computer science thought experiment describing the fundamental challenge decentralized parties face in reaching consensus over an unreliable communications channel when some parties are traitors.',
      sections: [
        {
          title: '1. The Scenario Description',
          content: [
            'Several divisions of the Byzantine army surround an enemy city, each led by its own general.',
            'Communication is possible only via messengers on foot who can be captured or delayed.',
            'The generals must decide collectively on a single plan: ATTACK or RETREAT.',
            'A partial attack leads to disaster; victory is guaranteed only if all loyal generals attack simultaneously.',
            'Complication: One or more generals (or messengers) are traitors sending conflicting messages (e.g., telling General A to "Attack" while telling General B to "Retreat").'
          ]
        },
        {
          title: '2. Blockchain Mapping and Consequences If Unsolved',
          content: [
            'Generals = Distributed blockchain nodes.',
            'Messengers = Peer-to-peer network communication channels.',
            'Attack Plan = Current valid ledger transaction state.',
            'Consequences if Unsolved: Double-spending becomes feasible, nodes hold conflicting ledgers, and the network fractures into irrecoverable forks.'
          ]
        },
        {
          title: '3. How Bitcoin Solved the Problem',
          content: [
            'Unsolved for decades until Satoshi Nakamoto introduced Proof of Work in 2008:',
            '1. Cost of Lying Exceeds Benefit: Producing a block requires immense computational energy (PoW). A traitor would have to out-compute the rest of the honest network to rewrite history.',
            '2. Objective Verification: The longest chain containing the greatest cumulative PoW provides an unambiguous, mathematical definition of truth.',
            '3. Economic Incentive Alignment: Honest miners are rewarded with newly minted coins and fees; trying to cheat results in wasted energy with zero payout.',
            'Traditional BFT systems tolerate up to f < N/3 traitors; Bitcoin PoW tolerates up to 50% Byzantine computational power.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-byzantine-problem',
          title: 'The Byzantine Generals Dilemma & Traitor Communication',
          caption: 'General 1 sending Attack, General 2 sending Attack, and Traitor General sending conflicting Retreat orders around the besieged city.',
          type: 'svg-interactive',
          svgType: 'byzantine-problem'
        }
      ],
      summary: [
        'The Byzantine Generals Problem models consensus in an untrusted network with malicious actors.',
        'Without consensus, nodes disagree and double-spending corrupts the ledger.',
        'Bitcoin solved it using Proof of Work: makes lying computationally expensive and incentivizes honesty.',
        'Standard BFT tolerates < 1/3 faulty nodes; PoW tolerates up to 50% malicious hashrate.'
      ],
      keyPoints: [
        'Game-theoretic coordination dilemma',
        'Traitor sending conflicting orders',
        'PoW economic cost barrier solution',
        'Longest chain objective truth rule'
      ]
    }
  ]
};
