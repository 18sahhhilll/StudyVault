import { Unit } from '@/types';

export const blockchainUnit4Data: Unit = {
  id: 'unit-4',
  unitNumber: 4,
  title: 'Cryptocurrency, Bitcoin and Token',
  shortTitle: 'Crypto, Bitcoin & Wallets',
  description: 'In-depth university examination study material covering Cryptocurrencies, Bitcoin mechanics, Coins vs Tokens, Privacy protocols (Zerocoin, Zerocash), Crypto Wallet Architectures (Hot vs Cold, Custodial vs Non-Custodial), and Web3 ecosystem tools (MetaMask, Coinbase, Binance).',
  syllabus: [
    'Bitcoin Concept, Working, Mining, and Significance',
    'Cryptocurrency: Definition, Requirements, Purpose, and Mechanics',
    'Classification of Cryptocurrencies: Payment, Utility, Stablecoins, CBDCs',
    'Safety, Risk Analysis, and Investment Security of Cryptocurrencies',
    'Privacy-Preserving Cryptocurrencies: Zerocoin and Zerocash (zk-SNARKs)',
    'Tokens vs Coins: ERC-20 Standards and Smart Contract Generation',
    'Corporate Relevance and Adoption Paths: Hands-off vs Hands-on',
    'Cryptographic Wallets: Public/Private Key Infrastructure and Storage Categories',
    'Custodial vs Non-Custodial Wallets ("Not your keys, not your coins")',
    'Hot Storage vs Cold Storage Security Trade-offs',
    'MetaMask: Architecture, DApp Gateway, Features, and Remix Deployment',
    'Centralized & Decentralized Exchanges: Coinbase and Coinbase Wallet',
    'Comparative Analysis: Coinbase vs Binance',
    'Web3 Wallet Comparison: MetaMask vs Coinbase Wallet'
  ],
  questionPaperIndex: [
    { paper: 'Paper 1', qMain: '(a) → Q3 (Types of Crypto), Q4 (Is Crypto Safe)', qOr: '(b) → Q5 (Zerocoin/Zerocash), Q9 (Custodial vs Non-custodial), Q10 (Hot vs Cold), Q11 (MetaMask)' },
    { paper: 'Paper 2', qMain: '(a) → Q8 (Crypto Wallets Concept & Types), Q13 (Coinbase vs Binance)', qOr: '(b) → Q1 (Bitcoin in Detail), Q11 (MetaMask)' },
    { paper: 'Paper 3', qMain: '(a) → Q11 (MetaMask), Q13 (Coinbase vs Binance)', qOr: '(b) → Q3 (Types of Crypto), Q14 (MetaMask vs Coinbase Wallet)' },
    { paper: 'Paper 4', qMain: '(a) → Q8 (Crypto Wallets), Q13 (Coinbase vs Binance)', qOr: '(b) → Q1 (Bitcoin in Detail), Q3 (Types of Crypto), Q7 (Relevance of Crypto), Q11 (MetaMask)' },
    { paper: 'Paper 5', qMain: '(a) → Q1 (Bitcoin), Q13 (Coinbase vs Binance)', qOr: '(b) → Q3 (Types of Crypto), Q6 (Token with Example), Q8 (Crypto Wallets), Q12 (Coinbase)' },
    { paper: 'Paper 6', qMain: '(a) → Q2 (What is Cryptocurrency), Q3 (Types of Crypto)', qOr: '(b) → Q1 (Bitcoin), Q8 (Crypto Wallets), Q11 (MetaMask), Q13 (Coinbase vs Binance)' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Cryptocurrency', definition: 'A digital or virtual currency secured by cryptography, functioning on a peer-to-peer decentralized blockchain network without central bank or government control.' },
      { term: 'Bitcoin', definition: 'The first decentralized peer-to-peer electronic cash system, created in 2009 by Satoshi Nakamoto, limited to 21 million units, secured via Proof of Work.' },
      { term: 'Token', definition: 'A digital asset deployed on top of an existing host blockchain (e.g. ERC-20 on Ethereum) via smart contracts, rather than having its own independent underlying chain.' },
      { term: 'Crypto Wallet', definition: 'A software program or hardware device that stores public and private cryptographic keys, interacts with the blockchain, and authorizes transactions.' },
      { term: 'Hot Wallet', definition: 'A wallet connected to the internet (desktop, mobile, browser extension, cloud); offers high transaction convenience but is exposed to online hacking.' },
      { term: 'Cold Wallet', definition: 'An offline physical device (hardware USB, paper printout) that stores private keys completely isolated from internet connectivity.' },
      { term: 'Custodial Wallet', definition: 'A wallet service where a third party (exchange) controls the private keys on behalf of the user ("Not your keys, not your coins").' },
      { term: 'MetaMask', definition: 'A leading non-custodial Web3 browser extension and mobile wallet developed by Consensys that acts as the primary gateway to Ethereum DApps.' },
      { term: 'zk-SNARK', definition: 'Zero-Knowledge Succinct Non-Interactive Argument of Knowledge; mathematical proof allowing one party to prove a statement is true without revealing any underlying secret data.' }
    ],
    coreFormulas: [
      { name: 'Bitcoin Supply Cap', latex: 'S_{\\max} = 21{,}000{,}000 \\text{ BTC}' },
      { name: 'Halving Schedule', latex: 'R_n = \\frac{50}{2^n} \\text{ BTC per block (halves every 210,000 blocks } \\approx 4 \\text{ years)}' },
      { name: 'ECDSA Key Derivation', latex: 'K_{\\text{public}} = k_{\\text{private}} \\cdot G \\quad (\\text{secp256k1 curve})' },
      { name: 'Bitcoin Address Generation', latex: '\\text{Address} = \\text{Base58Check}(\\text{RIPEMD160}(\\text{SHA-256}(K_{\\text{public}})))' }
    ],
    comparisonHighlights: [
      { title: 'Coin vs Token', summary: 'Coins (BTC, ETH) operate on their own native Layer 1 blockchain. Tokens (ERC-20, USDT) are programmed smart contract units created on top of host chains.' },
      { title: 'Custodial vs Non-Custodial', summary: 'Custodial wallets leave private keys in the custody of an exchange (Coinbase/Binance). Non-custodial wallets put key ownership completely in the hands of the user via a 12-word seed phrase.' },
      { title: 'Hot vs Cold Storage', summary: 'Hot wallets are online, fast, and free, suitable for daily transactions. Cold wallets are offline hardware or paper, immune to online attacks, designed for long-term secure vaults.' },
      { title: 'Coinbase vs Binance', summary: 'Coinbase is US-regulated, public-listed, beginner-friendly with fiat on-ramps. Binance is the global trading volume leader with extensive altcoins and the BNB ecosystem.' }
    ],
    examTips: [
      'In university exams, always draw the key flow diagram: Public Key = Account Number (shareable), Private Key = Secret PIN/Signature (never shared).',
      'For the Coin vs Token question, mention ERC-20 standard and write a clear 4-row contrast table.',
      'Remember the 4-year halving cycle for Bitcoin: 50 -> 25 -> 12.5 -> 6.25 -> 3.125 BTC.',
      'Always quote the golden Web3 rule: "Not your keys, not your coins" when explaining Custodial vs Non-custodial wallets.'
    ]
  },
  questions: [
    {
      id: 'bc-u4-q1',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 1,
      title: 'Explain Bitcoin in Detail: Architecture, Mechanics, Mining and Significance',
      shortTitle: 'Bitcoin Architecture, Mining & Significance',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q4(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q4(c)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q3(a)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q4(c)', marks: 6 }
      ],
      syllabusTopics: ['Bitcoin', 'Peer-to-Peer Cash', 'Mining Loop', 'Economic Model'],
      definition: 'Bitcoin is the first decentralized cryptocurrency and digital payment system invented in 2008 and released as open-source software in 2009 by Satoshi Nakamoto. It operates peer-to-peer without banks or central administrators, acting as the pioneer decentralized digital currency.',
      sections: [
        {
          title: '1. Foundational Concept & Mechanics',
          content: [
            'System vs Unit: Bitcoin represents the distributed protocol system, while bitcoins (BTC) are the transactional units of value.',
            'Public Blockchain Ledger: All confirmed transactions are permanently recorded in a public distributed ledger replicated across thousands of full nodes globally.',
            'Cryptographic Trust: Bitcoins are not printed like fiat currency; they are minted through mathematical Proof of Work. Its value originates from mathematical scarcity, cryptographic guarantees, and network adoption.',
            'Pseudonymity & Irreversibility: Addresses are cryptographic public key hashes. Once a transaction is confirmed in the chain, it cannot be canceled, altered, or reversed.'
          ]
        },
        {
          title: '2. How Bitcoin Works (Step-by-Step)',
          content: [
            'Step 1: Keypair Assignment — Each user holds a wallet containing a Public Key (analogous to a bank account number for receiving funds) and a Private Key (analogous to a secret password/PIN used for digital signatures).',
            'Step 2: Transaction Signing — Sender creates a transaction and cryptographically signs it using their private key with the ECDSA algorithm on secp256k1.',
            'Step 3: Network Broadcast — The signed transaction is propagated across the peer-to-peer network and enters validating nodes\' memory pools (mempool).',
            'Step 4: Miner Verification — Miners aggregate pending transactions from the mempool, verify cryptographic signatures, and assemble candidate blocks.',
            'Step 5: Proof of Work — Miners compete to find a nonce value that yields a double SHA-256 hash below the current difficulty target.',
            'Step 6: Block Appendage — The winning miner appends the block to the chain (~every 10 minutes) and broadcasts it. All nodes verify and synchronize their state.'
          ]
        },
        {
          title: '3. Mining & Economic Halving',
          content: [
            'Mining Reward: Miners are incentivized with newly minted bitcoins (block subsidy) plus transaction fees offered by senders.',
            'Halving Cycle: The block reward is programmed to halve every 210,000 blocks (roughly every 4 years): 50 BTC (2009) → 25 BTC (2012) → 12.5 BTC (2016) → 6.25 BTC (2020) → 3.125 BTC (2024), enforcing the 21 million BTC cap.'
          ]
        },
        {
          title: '4. Significance & Regulatory Status',
          content: [
            'Financial Sovereignty: Enables censorship-resistant, borderless payments immune to arbitrary capital controls or fiat hyperinflation.',
            'Eliminates Credit Card Intermediary Fees: Enables merchants to receive direct digital payments without 2-3% payment processor fees.',
            'Status in India: Cryptocurrency buying, holding, and trading is not illegal in India, subject to structured capital gains taxation (30% on virtual digital assets + 1% TDS) while statutory regulatory frameworks evolve.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-bitcoin-mining',
          title: 'Bitcoin End-to-End Transaction & Mining Workflow',
          caption: 'Visual workflow from transaction signing, mempool broadcast, block packaging, Proof of Work mining, to immutable chain appending.',
          type: 'svg-interactive',
          svgType: 'bitcoin-mining'
        }
      ],
      summary: [
        'Bitcoin is the first decentralized digital currency created in 2009 by Satoshi Nakamoto.',
        'Runs on peer-to-peer architecture with a 21 million BTC supply limit and Proof of Work consensus.',
        'Blocks are mined roughly every 10 minutes with rewards halving approximately every 4 years.',
        'Transactions are digitally signed with private keys, verified by miners, and permanently irreversible.'
      ],
      keyPoints: [
        'Decentralized peer-to-peer cash',
        '21 million mathematical supply cap',
        'SHA-256 Proof of Work mining',
        '4-year block halving cycle',
        'Irreversible cryptographic transactions'
      ]
    },
    {
      id: 'bc-u4-q2',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 2,
      title: 'What is Cryptocurrency? Explain Core Requirements, Working, Advantages and Disadvantages',
      shortTitle: 'Cryptocurrency Definition, Mechanics & Trade-offs',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 6', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['Cryptocurrency Definition', 'Distributed Ledger', 'Mining Requirements', 'Risk Analysis'],
      definition: 'A cryptocurrency is a digital or virtual currency secured by cryptography. It exists strictly in electronic form and is recorded across a decentralized peer-to-peer blockchain network, operating independent of central banks or governmental monetary authorities.',
      sections: [
        {
          title: '1. Technical Characterization & Requirements',
          content: [
            'Encrypted Data String: Represents a mathematically verifiable unit of digital currency.',
            'Double-Spending Resistance: Solves digital duplication without banks using distributed consensus and cryptographic hashing.',
            'No Central Authority: Maintained democratically through a globally distributed network of peer nodes.',
            'Unit State Accounting: The protocol maintains continuous ledger records of all currency units and corresponding account ownership.',
            'Issuance Governance: Protocol code determines how, when, and under what mathematical constraints new units can be created.',
            'Cryptographic Ownership: Ownership is proven strictly through possession of private cryptographic keys.'
          ]
        },
        {
          title: '2. Operational Purpose & Working',
          content: [
            'Low-Barrier Access: Anyone with a smartphone and internet connectivity can hold and transfer funds globally.',
            'Intermediary Disintermediation: Transactions settle directly peer-to-peer without commercial bank clearance delays or wire commissions.',
            'Public Verifiability: Transaction data is cryptographically signed, hashed, and visible on public blockchain explorers.'
          ]
        },
        {
          title: '3. Advantages vs Disadvantages of Cryptocurrencies (2-Column Format)',
          table: {
            headers: ['Advantages of Cryptocurrencies', 'Disadvantages & Inherent Risks'],
            rows: [
              {
                parameter: 'Decentralized Sovereignty: Immune to government hyperinflation, political asset freezing, and arbitrary banking censorship.',
                col1: 'Extreme Price Volatility: Rapid speculative price fluctuations make stable daily commerce and budgeting challenging.'
              },
              {
                parameter: 'Frictionless Global Remittance: Borderless cross-border transfers settle in minutes 24/7 with minimal transaction fees.',
                col1: 'Irreversible Transactions: Mistakes, typo addresses, and stolen funds cannot be refunded or reversed by any support desk.'
              },
              {
                parameter: 'Universal Financial Inclusion: Anyone with an internet connection can create a wallet without banking history or credit approval.',
                col1: 'Digital Literacy Barrier: Requires understanding private keys, seed phrases, gas fees, and avoiding phishing scams.'
              },
              {
                parameter: 'Cryptographic Transparency: Transactions are immutably auditable on public ledgers, eliminating corporate accounting fraud.',
                col1: 'Regulatory Uncertainty: Vulnerable to sudden government crackdowns, tax policy shifts, and banking bans.'
              }
            ]
          }
        }
      ],
      summary: [
        'A cryptocurrency is a cryptographically secured digital currency operating on decentralized networks.',
        'Eliminates central bank intermediaries and solves the double-spending problem mathematically.',
        'Requires decentralized state tracking, cryptographic ownership proofs, and programmatic issuance.',
        'Delivers high financial sovereignty but introduces market volatility and self-custody key responsibility.'
      ],
      keyPoints: [
        'Decentralized digital currency',
        'Cryptographic proof replaces trust',
        'Direct peer-to-peer settlements',
        'High price volatility & key management risk'
      ]
    },
    {
      id: 'bc-u4-q3',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 3,
      title: 'Explain the Types of Cryptocurrencies with Examples and Comparative Analysis',
      shortTitle: 'Cryptocurrency Classification & Major Coins',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q3(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q3(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q3(c)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q3(a)', marks: 6 }
      ],
      syllabusTopics: ['Cryptocurrency Classification', 'Payment Coins', 'Utility Tokens', 'Stablecoins', 'CBDCs'],
      definition: 'Cryptocurrencies are classified into four major functional categories based on their design utility, technical architecture, and economic role: Payment Cryptocurrencies, Utility Tokens, Stablecoins, and Central Bank Digital Currencies (CBDCs).',
      sections: [
        {
          title: '1. The Four Primary Categories',
          content: [
            '1. Payment Cryptocurrencies: Engineered as peer-to-peer digital money, stores of value, and mediums of exchange operating on their own native Layer-1 blockchains. Example: Bitcoin (BTC), Litecoin (LTC).',
            '2. Utility Tokens: Cryptographic units deployed on top of existing host blockchains via smart contracts, granting holders access to decentralized protocol services or governance. Example: Chainlink (LINK), ERC-20 tokens.',
            '3. Stablecoins: Digital assets designed to maintain a stable peg (typically 1:1) against reserve fiat assets like the US Dollar to eliminate volatility for trading and commerce. Example: Tether (USDT), USD Coin (USDC).',
            '4. Central Bank Digital Currencies (CBDC): Digital representations of sovereign fiat currency authorized, issued, and regulated directly by a national central bank. Example: Reserve Bank of India\'s Digital Rupee (e₹), China\'s e-CNY.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-coin-vs-token',
          title: 'Cryptocurrency Classification & Layered Architecture',
          caption: 'Classification hierarchy separating Native Layer-1 Coins, Smart Contract Tokens, Pegged Stablecoins, and Centralized CBDCs.',
          type: 'svg-interactive',
          svgType: 'coin-vs-token'
        }
      ],
      summary: [
        'Cryptocurrencies comprise 4 types: Payment Coins, Utility Tokens, Stablecoins, and CBDCs.',
        'Payment coins operate on native Layer-1 blockchains; utility tokens run on host chains via smart contracts.',
        'Stablecoins peg value to fiat currencies (USDT); CBDCs are sovereign central bank digital currencies.',
        'Prominent coins include BTC (store of value), ETH (smart contracts), and XRP (interbank settlement).'
      ],
      keyPoints: [
        'Payment crypto vs Utility tokens',
        'Fiat-pegged stablecoins (USDT)',
        'Sovereign Central Bank Digital Currencies',
        'Layer-1 coins vs Secondary tokens'
      ]
    },
    {
      id: 'bc-u4-q4',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 4,
      title: 'Is Cryptocurrency Safe? Provide a Technical and Investment Risk Assessment',
      shortTitle: 'Cryptocurrency Safety & Risk Evaluation',
      marks: 5,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(a)', marks: 5 }
      ],
      syllabusTopics: ['Crypto Security', 'Cryptographic Guarantees', 'Vulnerabilities', 'Investment Risks'],
      definition: 'The assessment of cryptocurrency safety must be decoupled into Technological Safety (the cryptographic consensus mathematics of distributed ledgers) and Operational/Financial Safety (market volatility, custody mistakes, scams, and exchange failures).',
      sections: [
        {
          title: '1. Why the Underlying Technology is Robust and Safe',
          content: [
            'Cryptographic Tamper-Resistance: Hashes (SHA-256) and digital signatures make historical ledger entries practically impossible to alter without dominating majority computational power.',
            'Decentralization & Resilience: Absence of a single centralized server prevents single-point-of-failure network collapse or targeted DDoS server takedowns.',
            'Algorithmic Transparency: Open-source protocol code and public blockchain explorers ensure all rules, transactions, and supply parameters can be audited by anyone.'
          ]
        },
        {
          title: '2. Why Operational and Investment Risks are Substantial',
          content: [
            'Exchange Security Breaches: Centralized custodians represent high-value hacker honeypots (e.g. 2018 Coincheck hack of $534M, BitGrail loss of $195M, Mt. Gox 850,000 BTC loss).',
            'Severe Price Volatility: Speculative trading causes rapid cyclical swings (e.g., 70-80% market drawdowns during crypto winters).',
            'Unforgiving Key Custody: Blockchains lack customer service or password recovery; losing a private key or sending funds to an incorrect address causes irreversible asset loss.',
            'Scams and Phishing: Unregulated ecosystems expose novice investors to fraudulent token rug-pulls and credential-stealing phishing sites.'
          ]
        },
        {
          title: '3. Technical Recommendations & Conclusion',
          content: [
            'Security Best Practices: Store high-value assets in offline hardware cold wallets; mandate hardware two-factor authentication (FIDO/YubiKey) on exchange accounts; never disclose seed phrases online; invest only discretionary risk capital.'
          ]
        }
      ],
      summary: [
        'Cryptocurrency technology is mathematically and cryptographically secure against tampering.',
        'Major risks arise from human operational mistakes, centralized exchange hacks, and high price volatility.',
        'Loss of private keys is permanent with no possibility of password recovery.',
        'Optimal strategy requires offline cold wallet storage and rigorous key management.'
      ],
      keyPoints: [
        'Technologically secure cryptographic ledger',
        'Centralized exchange vulnerability honeypots',
        'Irreversible private key custody loss',
        'Hardware cold wallet best practice'
      ]
    },
    {
      id: 'bc-u4-q5',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 5,
      title: 'Write a Detailed Note on Zerocoin and Zerocash. Explain zk-SNARKs and Compare Both Protocols',
      shortTitle: 'Zerocoin vs Zerocash Privacy Protocols',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q3(b)', marks: 6 }
      ],
      syllabusTopics: ['Zerocoin Protocol', 'Zerocash Protocol', 'zk-SNARKs', 'Privacy Cryptography'],
      definition: 'Zerocoin and Zerocash are groundbreaking cryptographic privacy protocols developed to resolve Bitcoin\'s pseudonymity flaw, where publicly traceable transaction graphs enable analytics firms to deanonymize wallet owners.',
      sections: [
        {
          title: '1. Zerocoin Protocol (2013)',
          content: [
            'Origin: Proposed in 2013 by Johns Hopkins researchers (Ian Miers, Christina Garman, Matthew Green, Aviel Rubin) as an extension overlay for Bitcoin.',
            'Working: A user "burns" a base Bitcoin to mint a cryptographic token called a Zerocoin. Later, the user redeems the Zerocoin for a fresh, untainted Bitcoin by proving in zero-knowledge that they own a valid minted token without revealing which specific coin was burned.',
            'Limitations: Huge cryptographic proof sizes (~45 KB) requiring heavy computational verification; supported only fixed denominations; hid only the sender, not the transaction amount.'
          ]
        },
        {
          title: '2. Zerocash Protocol (2014) & zk-SNARKs',
          content: [
            'Origin: Developed in 2014 by Eli Ben-Sasson, Alessandro Chiesa, Matthew Green, Eran Tromer, and colleagues as a standalone cryptocurrency protocol overcoming Zerocoin\'s limits.',
            'zk-SNARKs Innovation: Uses Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge. Allows prover to mathematically convince a verifier that a statement is true in milliseconds without revealing private transaction details.',
            'Total Privacy: Shields the sender, receiver, and transaction amount simultaneously.',
            'Practical Application: Formed the foundation for Zcash (ZEC), launched in 2016 with transparent and shielded transaction modes.'
          ]
        },
        {
          title: '3. Difference Between Zerocoin and Zerocash Protocols (2-Column Format)',
          table: {
            headers: ['Zerocoin Protocol (2013)', 'Zerocash Protocol (2014)'],
            rows: [
              {
                parameter: 'Architecture: Built as a proposed privacy extension / add-on protocol intended for the Bitcoin network.',
                col1: 'Architecture: Engineered as a standalone, ground-up independent cryptocurrency protocol (launched as Zcash / ZEC).'
              },
              {
                parameter: 'Cryptographic Primitive: Uses RSA Accumulators and basic zero-knowledge proofs to mint and spend anonymous coins.',
                col1: 'Cryptographic Primitive: Uses zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge).'
              },
              {
                parameter: 'Privacy Scope: Breaks the transaction link between sender and receiver, but transaction amounts remain public.',
                col1: 'Privacy Scope: Complete total shield: hides sender address, receiver address, transaction amount, and account balances.'
              },
              {
                parameter: 'Supported Amounts: Restricted strictly to fixed denominations (e.g. minting exactly 1 BTC or 10 BTC batches).',
                col1: 'Supported Amounts: Supports arbitrary custom fractional transaction amounts (e.g. sending 0.00342 ZEC).'
              },
              {
                parameter: 'Proof Size & Verification: Heavy proof size (~45 KB per proof) resulting in slow cryptographic verification times.',
                col1: 'Proof Size & Verification: Ultra-compact proof size (~288 bytes) enabling lightning-fast millisecond verification.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-zerocash-proof',
          title: 'Zerocoin vs Zerocash zk-SNARK Privacy Architecture',
          caption: 'Visual contrast between Zerocoin\'s burn-and-mint link breaker and Zerocash\'s zero-knowledge shielded transactions hiding sender, receiver, and value.',
          type: 'svg-interactive',
          svgType: 'zerocash-proof'
        }
      ],
      summary: [
        'Zerocoin (2013) introduced zero-knowledge proofs to Bitcoin by burning and redeeming coins to break transaction links.',
        'Zerocoin suffered from large proof sizes (~45 KB) and fixed denominations.',
        'Zerocash (2014) utilized zk-SNARKs to create compact (288 bytes) proofs hiding sender, receiver, and amount.',
        'Zerocash launched in 2016 as the privacy-focused cryptocurrency Zcash (ZEC).'
      ],
      keyPoints: [
        'Bitcoin pseudonymity tracing flaw',
        'Zerocoin burn-and-mint link breaker',
        'Zerocash zk-SNARK compact proofs',
        'Shielded transactions hiding sender, receiver, and value'
      ]
    },
    {
      id: 'bc-u4-q6',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 6,
      title: 'What is a Cryptographic Token? Explain with Examples and Compare Coins vs Tokens',
      shortTitle: 'Cryptographic Tokens & Coin vs Token Comparison',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q3(b)', marks: 6 }
      ],
      syllabusTopics: ['Crypto Token Definition', 'ERC-20 Standard', 'Coin vs Token Comparison'],
      definition: 'A cryptographic token is a digital asset built and deployed on top of an existing host blockchain platform using smart contracts, rather than possessing its own independent underlying Layer-1 ledger.',
      sections: [
        {
          title: '1. Mechanism & Standards',
          content: [
            'Secondary Layer Construction: While native coins (like BTC or ETH) serve as the underlying gas and foundational asset of their network, tokens utilize the consensus, security, and validator nodes of the host chain.',
            'Smart Contract Generation: Tokens are not mined. They are instantiated by compiling and deploying smart contracts defining total supply, balances, and transfer rules.',
            'Standard Specifications: Ethereum popularized token standards, notably ERC-20 (fungible tokens) and ERC-721/1155 (non-fungible tokens). Other chains have equivalents (BEP-20 on BNB Chain, SPL on Solana).'
          ]
        },
        {
          title: '2. Token Types & Real-World Examples',
          content: [
            'Utility Tokens: Chainlink (LINK) used to pay decentralized oracle operators for off-chain data feeds.',
            'Fiat Stablecoins: Tether (USDT) and USD Coin (USDC) issued on Ethereum and other chains to represent digitized US dollars.',
            'Governance Tokens: Uniswap (UNI) granting protocol voting rights over decentralized exchange parameters.'
          ]
        },
        {
          title: '3. Difference Between Cryptocurrency Coin and Cryptographic Token (2-Column Format)',
          table: {
            headers: ['Cryptocurrency Coin (Native Layer-1)', 'Cryptographic Token (Layer-2 / Smart Contract)'],
            rows: [
              {
                parameter: 'Blockchain Layer: Operates on its own native, independent Layer-1 blockchain ledger (e.g. Bitcoin, Ethereum, Solana).',
                col1: 'Blockchain Layer: Created on top of an existing host blockchain using smart contract token standards (e.g. ERC-20, BEP-20).'
              },
              {
                parameter: 'Creation Mechanism: Minted at protocol level via core consensus rules (Proof of Work block rewards or Proof of Stake validation).',
                col1: 'Creation Mechanism: Created and distributed programmatically by deploying a smart contract (e.g. a 50-line Solidity contract).'
              },
              {
                parameter: 'Gas & Transaction Fees: Used directly as the fundamental native currency to pay gas/network fees across the entire blockchain.',
                col1: 'Gas & Transaction Fees: Cannot be used alone to pay gas; transactions still require the host chain\'s native coin (e.g. ETH for USDT).'
              },
              {
                parameter: 'Infrastructure & Security: Requires bootstrapping an independent peer-to-peer network, node infrastructure, and consensus security.',
                col1: 'Infrastructure & Security: Inherits the full established security, decentralization, and validator power of the underlying host chain.'
              },
              {
                parameter: 'Benchmark Examples: Bitcoin (BTC), Ether (ETH), Solana (SOL), Cardano (ADA), Litecoin (LTC).',
                col1: 'Benchmark Examples: Tether (USDT on Ethereum), Uniswap (UNI), Chainlink (LINK), Basic Attention Token (BAT).'
              }
            ]
          }
        }
      ],
      summary: [
        'Coins operate on their own native Layer-1 blockchains; tokens exist on top of host chains via smart contracts.',
        'Tokens do not require mining; they are instantiated by smart contract standards like ERC-20.',
        'Tokens provide platform utility, DApp governance, and digital dollar representation.',
        'Building tokens avoids the massive overhead of bootstrapping an independent blockchain network.'
      ],
      keyPoints: [
        'Native Layer-1 coins vs secondary tokens',
        'Smart contract instantiation (ERC-20)',
        'Zero mining overhead for tokens',
        'Utility, governance, and stablecoin roles'
      ]
    },
    {
      id: 'bc-u4-q7',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 7,
      title: 'Discuss the Corporate Relevance of Cryptocurrency Usage. Explain Hands-off vs Hands-on Models with Examples',
      shortTitle: 'Enterprise Crypto Adoption & Treasury Models',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q4(b)', marks: 6 }
      ],
      syllabusTopics: ['Corporate Crypto Adoption', 'Hands-off vs Hands-on Models', 'Treasury & Payments'],
      definition: 'Crypto usage relevance refers to how commercial businesses, multinational corporations, and institutions adopt cryptocurrencies for commercial payments, cross-border treasury management, liquidity optimization, and balance-sheet asset diversification.',
      sections: [
        {
          title: '1. Strategic Drivers for Enterprise Adoption',
          content: [
            'Capturing High-Value Consumers: Demographic studies reveal crypto consumers spend up to twice as much per order compared to credit card users.',
            'Brand Innovation: Accepting digital assets positions an enterprise as modern, innovative, and aligned with digital-first consumers.',
            'Lower Payment Processing Friction: Eliminates credit card interchange fees (saving 2-4%) and prevents chargeback fraud.',
            'Programmable Real-Time Treasury: Smart contracts enable instantaneous international supplier payments without correspondent banking delays.'
          ]
        },
        {
          title: '2. The Two Corporate Adoption Paths',
          content: [
            'Hands-off Approach (Third-Party Conversion): The enterprise partners with a payment gateway (e.g., BitPay, Coinbase Commerce). The customer pays in Bitcoin/crypto, but the gateway immediately converts it into fiat currency (USD, INR) and deposits it into the company\'s bank account. The company incurs zero price volatility risk, zero crypto accounting complexity, and requires no digital wallet management.',
            'Hands-on Approach (Direct Custody & Management): The enterprise directly accepts, manages, and custody\'s cryptocurrencies on its balance sheet using enterprise custody software (e.g. Fireblocks). Enables direct participation in Web3 protocols, staking yield generation, and balance-sheet inflation hedging.'
          ]
        },
        {
          title: '3. Real-World Case Examples',
          content: [
            'Shopify & Microsoft: Integrated hands-off payment checkout options allowing millions of shoppers to purchase digital software and retail goods in Bitcoin.',
            'MicroStrategy & Tesla: Executed hands-on corporate treasury diversification strategies by allocating corporate balance sheet cash reserves into Bitcoin.',
            'Sovereign Adoption: In 2021, El Salvador enacted the Bitcoin Law, making BTC legal tender alongside the US Dollar.'
          ]
        }
      ],
      summary: [
        'Businesses adopt crypto to attract tech-savvy shoppers, eliminate credit card fees, and modernize treasury operations.',
        'Hands-off path converts crypto to fiat instantly via gateways, eliminating balance sheet risk.',
        'Hands-on path directly holds crypto on corporate balance sheets for treasury diversification.',
        'Examples include Shopify/Microsoft for hands-off checkout and MicroStrategy/Tesla for hands-on treasury.'
      ],
      keyPoints: [
        'Interchange fee elimination (2-4% savings)',
        'Hands-off fiat conversion gateway model',
        'Hands-on direct balance-sheet custody',
        'El Salvador sovereign legal tender adoption'
      ]
    },
    {
      id: 'bc-u4-q8',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 8,
      title: 'Explain the Concept of Crypto Wallets, Public/Private Key Mechanics, and Classify Major Wallet Types',
      shortTitle: 'Crypto Wallet Architecture & Classification',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q4(a)', marks: 8 },
        { paper: 'Paper 4', questionNo: 'Q3(a)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q4(b)', marks: 6 },
        { paper: 'Paper 6', questionNo: 'Q4(b)', marks: 8 }
      ],
      syllabusTopics: ['Crypto Wallet Architecture', 'Public & Private Keys', 'Software Wallets', 'Hardware Wallets', 'Paper Wallets'],
      definition: 'A crypto wallet is a software application or physical electronic hardware device that manages public and private cryptographic keys, monitors on-chain token balances, interfaces with blockchain networks, and cryptographically authorizes transactions.',
      sections: [
        {
          title: '1. Foundational Architecture & Key Mechanics',
          content: [
            'Coins Do NOT Reside in the Wallet: A common misconception. Cryptocurrencies reside permanently on the decentralized blockchain. The wallet stores the cryptographic credentials (private keys) required to unlock and transfer those on-chain funds.',
            'Public Key: Derived from the private key via asymmetric elliptic curve cryptography (secp256k1). Serves as the public account number / address that can be freely shared to receive funds.',
            'Private Key: A secret 256-bit random number. Acts as the cryptographic digital signature and password authorizing outgoing fund transfers. Must never be shared with anyone.'
          ]
        },
        {
          title: '2. Major Categories of Crypto Wallets',
          content: [
            '1. Software Wallets (Hot Wallets - Connected to Internet):',
            '  • Desktop Wallets: Software installed directly on a computer (e.g., Electrum, Exodus). Convenient, but vulnerable to computer viruses, malware, and keyloggers.',
            '  • Mobile Wallets: Smartphone apps (e.g., Trust Wallet, MetaMask Mobile). Highly convenient for daily point-of-sale spending via QR code scans.',
            '  • Online / Web Wallets: Cloud-hosted browser-accessible wallets. Maximum convenience across devices, but dependent on third-party security infrastructure.',
            '2. Hardware Wallets (Cold Wallets - Isolated Offline Storage):',
            '  • Dedicated physical electronic devices (e.g. Ledger Nano X, Trezor Model T).',
            '  • Private keys are permanently isolated inside a secure element chip and never exposed to the internet. Transactions are signed offline inside the device before transmission.',
            '3. Paper Wallets (Cold Physical Storage):',
            '  • A physical paper document containing the public address and private key printed as alphanumeric text and QR codes.',
            '  • Completely immune to online cyber attacks, but vulnerable to physical damage (fire, water, ink fading, physical theft).'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-crypto-wallets',
          title: 'Crypto Wallet Taxonomy & Asymmetric Key Architecture',
          caption: 'Comprehensive taxonomy showing Hot vs Cold wallet storage categories alongside Public Key (receiving) vs Private Key (signing) mechanics.',
          type: 'svg-interactive',
          svgType: 'crypto-wallets'
        }
      ],
      summary: [
        'Crypto wallets do not store coins; they store the private keys required to unlock on-chain assets.',
        'Public keys act as shareable receiving addresses; private keys act as confidential transaction signing credentials.',
        'Software wallets (hot) are online and convenient but exposed to malware.',
        'Hardware and paper wallets (cold) are offline and secure, immune to remote internet attacks.'
      ],
      keyPoints: [
        'Coins stay on blockchain; wallet stores keys',
        'Public key (account) vs Private key (PIN)',
        'Hot (online: desktop, mobile, web)',
        'Cold (offline: Ledger, Trezor, paper)'
      ]
    },
    {
      id: 'bc-u4-q9',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 9,
      title: 'Compare Custodial and Non-Custodial Wallets. Explain the Maxim "Not Your Keys, Not Your Coins"',
      shortTitle: 'Custodial vs Non-Custodial Wallets',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(a)', marks: 6 }
      ],
      syllabusTopics: ['Custodial Wallets', 'Non-Custodial Wallets', 'Key Custody', 'Security Trade-offs'],
      definition: 'The difference between Custodial and Non-Custodial wallets centers on key ownership: in a custodial wallet, an external third-party institution holds the private keys on behalf of the user, whereas in a non-custodial (self-custody) wallet, the user maintains exclusive control over their private keys.',
      sections: [
        {
          title: '1. "Not Your Keys, Not Your Coins"',
          content: [
            'Core Principle: If a user does not personally control the private cryptographic keys for an address, they do not truly own the digital assets. Instead, they merely hold an unsecured promissory claim (IOU) against a commercial entity.',
            'Counterparty Risk: If a custodial exchange goes bankrupt, halts withdrawals, or suffers internal fraud (e.g., FTX, Celsius), customer funds can be frozen or lost permanently without blockchain recourse.'
          ]
        },
        {
          title: '2. Architectural Divergence',
          content: [
            'Custodial Model: Operates like a conventional bank. User assets are pooled into internal company hot/cold wallets, with customer balances maintained on centralized internal database ledgers. Authenticated via standard email, password, and SMS/app 2FA.',
            'Non-Custodial Model: True decentralized self-custody. The user generates and controls a 12-to-24 word BIP-39 mnemonic seed phrase locally on their device, interacting directly with the blockchain.'
          ]
        },
        {
          title: '3. Difference Between Custodial and Non-Custodial Wallets (2-Column Format)',
          table: {
            headers: ['Custodial Wallets (Third-Party Controlled)', 'Non-Custodial Wallets (Self-Custody)'],
            rows: [
              {
                parameter: 'Private Key Ownership: Private keys are held and managed by a centralized third-party custodian (e.g. Binance, Coinbase).',
                col1: 'Private Key Ownership: The user exclusively holds and controls their own private keys and 12/24-word secret seed phrase.'
              },
              {
                parameter: 'Asset Control & Sovereignty: Limited sovereignty; the custodian can freeze balances, enforce withdrawal limits, or halt trading.',
                col1: 'Absolute Financial Sovereignty: Uncensored control; no third party, bank, or government can freeze funds or block transactions.'
              },
              {
                parameter: 'Account Password Recovery: Easy recovery through traditional web login: password reset links, email verification, and KYC helpdesk.',
                col1: 'Zero Recovery Helpdesk: Recoverable strictly through the seed phrase; if you lose the seed phrase, funds are permanently lost forever.'
              },
              {
                parameter: 'Security Threat Profile: Vulnerable to centralized exchange hacks, rogue employee theft, and corporate bankruptcy (e.g. FTX collapse).',
                col1: 'Security Threat Profile: Immune to corporate insolvency; vulnerable only to individual user mistakes (phishing links, malware, stolen seed).'
              },
              {
                parameter: 'Regulatory KYC & Privacy: Strict mandatory identity submission: government passport, national ID card, and face scans.',
                col1: 'Zero KYC Anonymity: Pseudonymous; anyone can generate a brand-new wallet in seconds without submitting personal identification.'
              },
              {
                parameter: 'Web3 & DApp Connectivity: Restricted; cannot directly interact with decentralized DeFi protocols, DEXs, or NFT marketplaces.',
                col1: 'Native Web3 Integration: Seamless one-click connection to DeFi protocols, decentralized exchanges (Uniswap), and NFT platforms.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-custodial-vs-noncustodial',
          title: 'Custodial vs Non-Custodial Architecture & Trust Model',
          caption: 'Visual contrast between centralized custodial exchange databases and decentralized non-custodial self-sovereign key control.',
          type: 'svg-interactive',
          svgType: 'custodial-vs-noncustodial'
        }
      ],
      summary: [
        'Custodial wallets rely on third-party exchanges holding private keys ("Not your keys, not your coins").',
        'Non-custodial wallets give users complete sovereign control over their private keys via a 12-word seed phrase.',
        'Custodial wallets allow easy password reset but carry counterparty bankruptcy and freezing risks.',
        'Non-custodial wallets enable full Web3/DApp access with zero counterparty risk, but require diligent seed phrase preservation.'
      ],
      keyPoints: [
        'Third-party custody vs self-sovereignty',
        '"Not your keys, not your coins"',
        'Seed phrase recovery necessity',
        'Centralized counterparty risk'
      ]
    },
    {
      id: 'bc-u4-q10',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 10,
      title: 'Differentiate Between Hot Wallet Storage and Cold Wallet Storage. Provide Detailed Recommendations',
      shortTitle: 'Hot Wallet vs Cold Wallet Storage',
      marks: 5,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(b)', marks: 5 }
      ],
      syllabusTopics: ['Hot Storage', 'Cold Storage', 'Security Profiles', 'Storage Recommendations'],
      definition: 'Hot wallet storage refers to any cryptocurrency wallet connected to the internet, prioritizing immediate transaction convenience. Cold wallet storage refers to offline storage mechanisms completely isolated from internet connectivity, prioritizing maximum security.',
      sections: [
        {
          title: '1. Operational Mechanisms',
          content: [
            'Hot Wallets: Functions like a physical cash wallet in your pocket. Used for daily spending and active DApp interactions. Because the private key resides on an internet-connected device, it is continuously exposed to remote attack vectors (trojans, phishing, clipboard hijackers).',
            'Cold Wallets: Functions like an underground bank vault. Private keys are generated and stored offline on dedicated hardware chips or physical paper. Transactions are signed offline, making remote internet hacks technically impossible.'
          ]
        },
        {
          title: '3. Difference Between Hot Wallet and Cold Wallet Storage (2-Column Format)',
          table: {
            headers: ['Hot Wallet Storage (Online / Connected)', 'Cold Wallet Storage (Offline / Air-Gapped)'],
            rows: [
              {
                parameter: 'Internet Connectivity: Continuously or frequently connected to the internet on smartphones, browsers, or PCs.',
                col1: 'Internet Connectivity: Completely offline and air-gapped; private keys never touch an internet-connected operating system.'
              },
              {
                parameter: 'Cyber Attack Exposure: Vulnerable to remote online threats: malware, browser keyloggers, clipboard hijacking, and phishing sites.',
                col1: 'Cyber Attack Exposure: Physically immune to remote internet hacks; private keys are isolated inside a secure cryptographic element.'
              },
              {
                parameter: 'Transaction Convenience: Instantaneous 1-click execution; ideal for fast day-trading, decentralized finance (DeFi), and minting NFTs.',
                col1: 'Transaction Convenience: Slower signing process requiring physical USB/Bluetooth connection, manual PIN entry, and physical button presses.'
              },
              {
                parameter: 'Acquisition Cost: 100% free software: freely downloadable as mobile apps, desktop software, or browser extensions.',
                col1: 'Acquisition Cost: Requires purchasing dedicated hardware devices costing \$60 to \$250 (e.g. Ledger, Trezor).'
              },
              {
                parameter: 'Recommended Asset Scale: Best used as a digital "pocket wallet" for small spending balances and active gas fees.',
                col1: 'Recommended Asset Scale: Best used as a digital "bank vault" for substantial long-term wealth, life savings, and treasury reserves.'
              },
              {
                parameter: 'Benchmark Examples: MetaMask browser extension, Phantom wallet, Trust Wallet mobile app, Exodus desktop.',
                col1: 'Benchmark Examples: Ledger Nano S/X, Trezor Model One/Safe 3, Keystone 3 Pro, secure paper wallets.'
              }
            ]
          }
        }
      ],
      summary: [
        'Hot wallets are online, fast, and free, suitable for daily transactions but exposed to cyber threats.',
        'Cold wallets are offline, paid hardware devices that isolate keys from the internet, immune to remote hacks.',
        'Best practice recommends keeping 90-95% of holdings in cold storage and 5-10% in hot wallets for daily use.'
      ],
      keyPoints: [
        'Online hot wallet vs offline cold storage',
        'Immunity of hardware wallets to malware',
        'Transaction speed vs deep vault security',
        'Tiered portfolio allocation best practice'
      ]
    },
    {
      id: 'bc-u4-q11',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 11,
      title: 'Explain MetaMask: Importance, Features, Benefits, Limitations, and Smart Contract Deployment',
      shortTitle: 'MetaMask Architecture & Web3 Integration',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q4(b)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q3(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q3(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q3(c)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q3(b)', marks: 6 }
      ],
      syllabusTopics: ['MetaMask Architecture', 'Browser Extension', 'Web3 Provider', 'Remix IDE Integration'],
      definition: 'MetaMask is a premier non-custodial cryptocurrency wallet and Web3 gateway operating as a web browser extension and mobile application. Developed by Consensys in 2016, it connects web applications to Ethereum and EVM-compatible blockchains without forcing users to run full blockchain nodes.',
      sections: [
        {
          title: '1. Core Importance & Architecture',
          content: [
            'Web2 to Web3 Bridge: Injects a JavaScript provider object (`window.ethereum`) into standard browser pages, enabling websites to interact with Ethereum smart contracts securely.',
            'Light Node Client: Connects to remote full nodes (e.g. Infura) via JSON-RPC, sparing users from downloading hundreds of gigabytes of blockchain ledger history.',
            'Local Encrypted Key Storage: Generates and stores private keys in local browser storage, protected by a user password and backed up by a 12-word Secret Recovery Phrase.'
          ]
        },
        {
          title: '2. Features, Benefits, and Limitations',
          content: [
            'Key Features: Multi-chain EVM support (Mainnet, Sepolia testnet, Polygon, Arbitrum, BSC); custom gas price and gas limit controls; integrated ERC-20 token swaps and fiat on-ramp aggregators.',
            'Benefits: Free and open-source; intuitive GUI; instant connection to thousands of DApps; universal testnet support allowing developers to build without spending real money.',
            'Limitations: As a hot wallet, it is exposed to malicious phishing links and fake extension clones; gas fee spikes on Mainnet can be costly; no customer service desk can recover a lost 12-word recovery phrase.'
          ]
        },
        {
          title: '3. Developer Application: Deploying Contracts via Remix IDE',
          content: [
            'Step 1: Write Solidity contract code in the Remix Web IDE (remix.ethereum.org).',
            'Step 2: Compile the code into EVM bytecode and ABI.',
            'Step 3: In the Deploy tab, select "Injected Provider - MetaMask" as the environment.',
            'Step 4: Switch MetaMask to an active testnet (e.g. Sepolia) funded with test ETH from a faucet.',
            'Step 5: Click "Deploy". MetaMask automatically pops up requesting cryptographic signature and gas payment.',
            'Step 6: Validator confirms the transaction, deploying the contract to an on-chain address for interaction.'
          ]
        }
      ],
      summary: [
        'MetaMask is a non-custodial browser extension and mobile wallet connecting web apps to Ethereum and EVM chains.',
        'Acts as an RPC light client, injecting `window.ethereum` into web pages.',
        'Stores private keys locally, backed up by a 12-word Secret Recovery Phrase.',
        'Integrates seamlessly with Remix Web IDE for 1-click smart contract deployment and testing.'
      ],
      keyPoints: [
        'Consensys Web3 browser gateway',
        'window.ethereum JavaScript provider injection',
        '12-word seed phrase local encryption',
        'Remix IDE contract deployment integration'
      ]
    },
    {
      id: 'bc-u4-q12',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 12,
      title: 'Write a Detailed Note on Coinbase and Coinbase Wallet: Features, Architecture, and Security',
      shortTitle: 'Coinbase Exchange & Coinbase Wallet',
      marks: 5,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q4(c)', marks: 5 }
      ],
      syllabusTopics: ['Coinbase Platform', 'Coinbase Wallet', 'Custodial vs Self-Custodial', 'Enterprise Compliance'],
      definition: 'Coinbase is a prominent United States-based cryptocurrency exchange platform founded in 2012 by Brian Armstrong and Fred Ehrsam. Publicly traded on NASDAQ (COIN), its mission is to build an open financial system by providing regulated on-ramps between traditional fiat banking and digital assets.',
      sections: [
        {
          title: '1. Coinbase Centralized Platform (Custodial)',
          content: [
            'All-in-One Financial Hub: Combines retail spot cryptocurrency trading, advanced order-book trading, merchant payment gateways, and institutional custody (Coinbase Prime).',
            'Internal Zero-Fee Transfers: Off-chain transactions between verified Coinbase accounts are settled internally on company databases instantly with zero network gas fees.',
            'High Regulatory Compliance: Licensed money transmitter across all US states, adhering strictly to FinCEN and SEC regulatory standards.'
          ]
        },
        {
          title: '2. Coinbase Wallet (Self-Custody)',
          content: [
            'Distinct from Exchange: Coinbase Wallet is an independent, non-custodial mobile app and browser extension. The user controls the 12-word seed phrase locally.',
            'Multi-Chain & NFT Support: Natively supports non-EVM blockchains (Bitcoin, Solana, Dogecoin) alongside Ethereum, EVM Layer-2s, and decentralized Web3 DApp browsing.',
            'Optional Cloud Backup: Allows users to back up their encrypted recovery phrase to personal Google Drive or Apple iCloud accounts.'
          ]
        },
        {
          title: '3. Advantages and Limitations',
          content: [
            'Advantages: Institutional-grade security, regulated US banking connections, intuitive interface ideal for beginners, and strong separation between exchange and self-custody wallet.',
            'Limitations: High retail transaction spreads on basic buy/sell interfaces; mandatory KYC surveillance; closed-source centralized backend; historic customer support response bottlenecks.'
          ]
        }
      ],
      summary: [
        'Coinbase is a publicly traded, US-regulated crypto exchange platform founded in 2012.',
        'Coinbase Exchange provides custodial trading and seamless fiat bank connections.',
        'Coinbase Wallet is an independent self-custody multi-chain wallet (supporting BTC, ETH, SOL) with 12-word seed phrase control.',
        'Combines institutional regulatory compliance with accessible Web3 self-sovereignty.'
      ],
      keyPoints: [
        'NASDAQ-listed US regulated exchange (COIN)',
        'Custodial exchange vs non-custodial Coinbase Wallet',
        'Cross-chain support (BTC, ETH, SOL)',
        'Institutional custody & compliance standards'
      ]
    },
    {
      id: 'bc-u4-q13',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 13,
      title: 'Provide a Comprehensive Comparative Analysis Between Coinbase and Binance Across Technical, Operational, and Regulatory Parameters',
      shortTitle: 'Coinbase vs Binance Comparative Analysis',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q3(a)', marks: 8 },
        { paper: 'Paper 3', questionNo: 'Q4(a)', marks: 8 },
        { paper: 'Paper 4', questionNo: 'Q4(a)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q4(a)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q3(c)', marks: 6 }
      ],
      syllabusTopics: ['Coinbase vs Binance', 'Exchange Comparison', 'Regulatory Compliance', 'Native Tokens', 'Trading Volume'],
      definition: 'Coinbase and Binance are the two largest cryptocurrency exchange ecosystems globally. Coinbase is a US-regulated, publicly traded exchange emphasizing compliance, institutional custody, and beginner ease. Binance is the global trading volume leader, recognized for its expansive altcoin markets, derivatives, low fees, and native blockchain ecosystem.',
      sections: [
        {
          title: '1. Contrasting Philosophies & Ecosystems',
          content: [
            'Regulatory Stance: Coinbase prioritized alignment with US regulators (SEC, FinCEN) from inception. Binance originated with a globally distributed model (Cayman Islands, UAE) to achieve massive international liquidity.',
            'Native Token Architecture: Binance created Binance Coin (BNB), which powers transaction fee discounts and functions as the gas token of the BNB Chain. Coinbase does not have an exchange token, maintaining direct public stock equity (NASDAQ: COIN).'
          ]
        },
        {
          title: '3. Difference Between Coinbase and Binance Exchanges (2-Column Format)',
          table: {
            headers: ['Coinbase Exchange', 'Binance Exchange'],
            rows: [
              {
                parameter: 'Founding & Corporate Base: Founded in 2012 by Brian Armstrong in the US; publicly traded on NASDAQ (COIN).',
                col1: 'Founding & Corporate Base: Founded in 2017 by Changpeng Zhao (CZ) in China/Japan, now operating with global decentralized entities.'
              },
              {
                parameter: 'Target Audience: Tailored for retail beginners and risk-averse institutional corporations seeking clean, licensed interfaces.',
                col1: 'Target Audience: Tailored for aggressive day-traders, crypto-native degens, and global derivative/futures traders.'
              },
              {
                parameter: 'Fee Structure: Higher retail fees (~0.5% to 1.5% spread fees on basic app; lower tiered maker/taker on Advanced Trade).',
                col1: 'Fee Structure: Industry-leading low trading fees (0.1% baseline spot fees, further discounted by 25% when paying with BNB).'
              },
              {
                parameter: 'Asset Selection & Variety: Conservative catalog of ~250+ strictly vetted digital currencies complying with US SEC regulations.',
                col1: 'Asset Selection & Variety: Massive global catalog of 500+ cryptocurrencies, futures contracts, leveraged tokens, and new listings.'
              },
              {
                parameter: 'Native Ecosystem Utility Token: No native exchange coin; relies purely on traditional corporate equity on NASDAQ.',
                col1: 'Native Ecosystem Utility Token: BNB (Binance Coin), powering fee discounts and functioning as the gas coin of BNB Smart Chain.'
              },
              {
                parameter: 'Regulatory Compliance: Heavy regulatory alignment; holds FinCEN money transmitter licenses in all 50 US states and NY BitLicense.',
                col1: 'Regulatory Compliance: Faced severe historic regulatory scrutiny (2023 US DOJ \$4.3B plea settlement and global licensing overhauls).'
              }
            ]
          }
        }
      ],
      summary: [
        'Coinbase (2012) is US-regulated and public-listed, focusing on beginner usability and institutional custody.',
        'Binance (2017) is the world trading volume leader, offering low fees, extensive altcoins, and the BNB ecosystem.',
        'Coinbase charges higher fees in exchange for strict regulatory compliance.',
        'Binance provides advanced trading derivatives and developed BNB Smart Chain.'
      ],
      keyPoints: [
        'US regulated public company vs global trading volume leader',
        'Fee structure: Coinbase higher retail spreads vs Binance 0.1% base',
        'Binance Coin (BNB) ecosystem token vs Coinbase equity (COIN)',
        'Strict regulatory vetting vs expansive altcoin listings'
      ]
    },
    {
      id: 'bc-u4-q14',
      unitId: 'unit-4',
      subjectId: 'blockchain-technology',
      qNumber: 14,
      title: 'Compare MetaMask and Coinbase Wallet in Detail: Architecture, Chains, Target Users, and Web3 Suitability',
      shortTitle: 'MetaMask vs Coinbase Wallet Comparison',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q4(b)', marks: 6 }
      ],
      syllabusTopics: ['MetaMask vs Coinbase Wallet', 'Web3 Interface', 'Multi-Chain Support', 'Developer Tooling'],
      definition: 'MetaMask and Coinbase Wallet are two leading self-custody Web3 wallets designed to grant users sovereign control over digital assets and provide direct interfaces to decentralized applications (DApps) and DeFi smart contracts.',
      sections: [
        {
          title: '1. Architectural Comparison',
          content: [
            'MetaMask: Built by Consensys as the pioneering Ethereum-first wallet. It is the de facto benchmark tool for Ethereum and EVM smart contract developers, deeply integrated into developer suites like Remix, Hardhat, and Truffle.',
            'Coinbase Wallet: Engineered by Coinbase as a multi-chain consumer-facing gateway. Beyond Ethereum and EVM chains, it natively supports non-EVM blockchains such as Bitcoin, Solana, and Dogecoin within a unified interface.'
          ]
        },
        {
          title: '3. Difference Between MetaMask and Coinbase Wallet (2-Column Format)',
          table: {
            headers: ['MetaMask Wallet', 'Coinbase Wallet'],
            rows: [
              {
                parameter: 'Developer & Company: Developed by Consensys (founded by Ethereum co-founder Joseph Lubin in 2016).',
                col1: 'Developer & Company: Developed by Coinbase Global, Inc. as their standalone self-custody flagship wallet.'
              },
              {
                parameter: 'Blockchain Ecosystem Support: Focused on Ethereum and EVM-compatible Layer-2 networks (Arbitrum, Optimism, Polygon, BSC).',
                col1: 'Blockchain Ecosystem Support: Native multi-chain out of the box: supports Bitcoin (BTC), Solana (SOL), and all EVM networks.'
              },
              {
                parameter: 'Seed Phrase Backup: Standard BIP-39 12-word mnemonic seed phrase; user must write it down manually on paper.',
                col1: 'Seed Phrase Backup: Offers standard 12-word seed phrase plus optional encrypted cloud backup (Google Drive / iCloud).'
              },
              {
                parameter: 'Smart Contract Developer Adoption: The undisputed universal gold standard for Web3 developers testing on Remix IDE and Hardhat.',
                col1: 'Smart Contract Developer Adoption: Focused primarily on end-consumer UX with direct Coinbase exchange fiat onboarding.'
              },
              {
                parameter: 'Exchange Alignment: Vendor-neutral; uses third-party decentralized swap aggregators without pushing a specific centralized exchange.',
                col1: 'Exchange Alignment: Direct deep-linking with Coinbase exchange accounts, enabling seamless instant fiat-to-crypto purchasing.'
              }
            ]
          }
        }
      ],
      summary: [
        'MetaMask is the developer standard for Ethereum and EVM smart contract ecosystems.',
        'Coinbase Wallet provides multi-chain consumer support (BTC, ETH, SOL) with optional cloud backup.',
        'Both wallets are non-custodial, giving users exclusive control of their 12-word seed phrases.',
        'MetaMask is ideal for developers using Remix; Coinbase Wallet is ideal for cross-chain retail users.'
      ],
      keyPoints: [
        'Consensys EVM benchmark vs Coinbase multi-chain wallet',
        'Non-EVM chain support in Coinbase Wallet (BTC, SOL)',
        'Remix IDE native injection standard in MetaMask',
        'Self-custody 12-word seed phrase security model'
      ]
    }
  ]
};
