import { Unit } from '@/types';

export const blockchainUnit6Data: Unit = {
  id: 'unit-6',
  unitNumber: 6,
  title: 'Blockchain Case Studies',
  shortTitle: 'Enterprise Case Studies',
  description: 'Practical enterprise case studies, domain architectures, and sector-specific applications of blockchain technology spanning Global Supply Chains, Sovereign Digital Identity, Government Services, Banking & Capital Markets, Healthcare Electronic Health Records (EHR), Internet of Things (IoT), Peer-to-Peer Energy Microgrids, Decentralized Voting Systems, and Cloud BaaS Integrations.',
  syllabus: [
    'Taxonomy of Prominent Industrial Blockchain Applications',
    'Supply Chain Management: End-to-End Traceability, IoT Logging, and Smart Contracts',
    'Digital Identity Management: Reducing Cyber Hacks via Self-Sovereign Identity (SSI)',
    'Government Sector Applications: Land Titling, Welfare Distribution, Taxation, and Smart Cities',
    'Retail Banking: Remittances, KYC Automation, and Fraud Prevention',
    'Institutional Banking & Financial Markets: Trade Finance (we.trade, ANZ), Clearing, and Settlement',
    'Healthcare Systems: Patient-Centric EHR, Interoperability, Clinical Trials, and Pharma Tracking',
    'Blockchain and the Internet of Things (IoT): Distribution, Immutability, and Decentralization',
    'Energy and Utilities: P2P Solar Energy Trading, Microgrids, and Renewable Energy Certificates (RECs)',
    'E-Voting Systems: Cryptographic Verification, Challenges, and Civil Benefits',
    'Multi-Domain Cross-Layer Integration: Cloud BaaS, Decentralized DNS, and Edge Computing'
  ],
  questionPaperIndex: [
    { paper: 'Paper 1', qMain: '(a) → Q1 (Prominent Applications), Q2 (Supply Chain), Q4 (Government Sector)', qOr: '(b) → Q3 (Digital Identity), Q6 (Banking & Finance), Q8 (IoT & Blockchain)' },
    { paper: 'Paper 2', qMain: '(a) → Q2 (Supply Chain), Q4 (Government Sector)', qOr: '(b) → Q1 (Prominent Applications), Q8 (IoT & Blockchain)' },
    { paper: 'Paper 3', qMain: '(a) → Q4 (Government Sector), Q6 (Banking & Finance)', qOr: '(b) → Q7 (Healthcare), Q10 (Voting Systems)' },
    { paper: 'Paper 4', qMain: '(a) → Q8 (Blockchain & IoT), Q11 (Integration with Cloud/IoT)', qOr: '(b) → Q4 (Government), Q6 (Banking & Finance), Q7 (Healthcare), Q9 (Energy & Utilities)' },
    { paper: 'Paper 5', qMain: '(a) → Q4 (Government), Q5 (Retail Banking)', qOr: '(b) → Q1 (Prominent Applications), Q6 (Banking & Finance), Q7 (Healthcare)' },
    { paper: 'Paper 6', qMain: '(a) → Q5 (Retail Banking), Q6 (Banking & Finance), Q11 (Integration)', qOr: '(b) → Q4 (Government Sector), Q7 (Healthcare), Q8 (IoT)' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Supply Chain Blockchain', definition: 'A shared, immutable distributed ledger where every supplier, logistics carrier, customs agent, retailer, and consumer traces the custody, environmental telemetry, and provenance of physical goods.' },
      { term: 'Self-Sovereign Identity (SSI)', definition: 'A user-centric digital identity model where individuals own and control their personal cryptographic identity credentials without relying on centralized identity authorities.' },
      { term: 'Electronic Health Record (EHR)', definition: 'A digital longitudinal record of patient health encounters across healthcare providers, coordinated securely via blockchain access-control permissions.' },
      { term: 'P2P Energy Trading', definition: 'A decentralized energy exchange model where residential prosumers with solar arrays trade surplus kilowatt-hours directly with local neighbors via smart contract settlement.' },
      { term: 'Blockchain-as-a-Service (BaaS)', definition: 'A cloud-hosted managed service allowing enterprises to build, host, and operate their own blockchain applications without managing hardware infrastructure.' },
      { term: 'Immutable Audit Trail', definition: 'A cryptographically linked sequence of historical log records that cannot be modified, deleted, or backdated by any administrator.' }
    ],
    coreFormulas: [
      { name: 'Supply Chain Provenance Verification', latex: 'H_n = \\text{SHA-256}(H_{n-1} \\parallel \\text{GPS} \\parallel \\text{Temp} \\parallel \\text{CustodianSignature})' },
      { name: 'P2P Energy Settlement', latex: '\\text{Cost} = \\text{kWh}_{\\text{transferred}} \\times \\text{Tariff}_{\\text{smart\\_contract}}' },
      { name: 'Voting Double-Vote Prevention', latex: '\\text{Nullifier} = \\text{Hash}(\\text{VoterSecretKey} \\parallel \\text{ElectionID})' }
    ],
    comparisonHighlights: [
      { title: 'Traditional vs Blockchain Supply Chain', summary: 'Traditional has isolated paper silos, fraud, and slow recalls. Blockchain provides single shared truth, automated payments on delivery, and instant provenance scan.' },
      { title: 'Centralized vs Decentralized Identity', summary: 'Centralized creates giant hacker honeypots (Aadhar/Equifax breaches). SSI keeps personal data encrypted locally, publishing only zero-knowledge cryptographic proofs.' },
      { title: 'Centralized vs P2P Energy Grid', summary: 'Centralized incurs high transmission loss and utility middleman margins. P2P microgrids match local renewable generation directly to local consumer demand.' },
      { title: 'Conventional vs Blockchain Voting', summary: 'Conventional relies on physical trust and opaque recount audits. Blockchain voting provides mathematical guarantee: 1 voter = 1 vote, tamper-proof tally, voter privacy.' }
    ],
    examTips: [
      'In university exams, always draw the full Supply Chain architecture: Manufacturer -> Distributor -> Retailer -> Customer with the shared ledger bar below.',
      'For the Government Sector question, cite 4 concrete examples: Land registry, smart cities, vaccination tracking, and automated payroll tax.',
      'Remember the 3 core properties when explaining Blockchain + IoT: Distribution (no central target), Immutability (tamper-proof telemetry), Decentralization (direct M2M micropayments).',
      'For Voting Systems, mention both benefits (transparency, fraud prevention) and realistic technical challenges (digital divide, key loss, device malware).'
    ]
  },
  questions: [
    {
      id: 'bc-u6-q1',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 1,
      title: 'Provide a Comprehensive Overview of Prominent Blockchain Applications. Detail Any One or Two with System Architecture',
      shortTitle: 'Prominent Industrial Blockchain Applications',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q7(a)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q8(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q7(c)', marks: 8 }
      ],
      syllabusTopics: ['Industrial Applications', 'Sector Taxonomy', 'Supply Chain', 'Financial Services', 'Digital Identity'],
      definition: 'While blockchain was first introduced as the foundational mechanism behind Bitcoin to solve the double-spending problem in electronic cash, it has expanded into a universal multi-party trust infrastructure deployed across modern industry wherever shared, auditable, and immutable ledgers are needed.',
      sections: [
        {
          title: '1. Industrial Adoption Landscape',
          content: [
            'Broad Spectrum: Enterprise adoption spans banking, supply chain logistics, healthcare, government, utilities, and digital media, transforming isolated silos into synchronized networks.'
          ]
        }
      ],
      summary: [
        'Blockchain has expanded from cryptocurrency cash into a universal multi-party trust infrastructure.',
        'Core sectors include remittances, supply chains, healthcare records, digital identity, and voting.',
        'Delivers transparency, eliminates redundant reconciliation, and replaces manual auditing with math.',
        'Primary recommended architectures for exam answers are Supply Chain (Q2) and Healthcare EHR (Q7).'
      ],
      keyPoints: [
        'Universal trust infrastructure across industries',
        'Cross-border payments & financial clearing',
        'Supply chain provenance & healthcare records',
        'Decentralized identity & automated governance'
      ]
    },
    {
      id: 'bc-u6-q2',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 2,
      title: 'Explain Blockchain in Supply Chain Management. Draw and Explain System Architecture, Workflow, and Real-World Benefits',
      shortTitle: 'Supply Chain Provenance Architecture & Workflow',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q7(a)', marks: 8 },
        { paper: 'Paper 2', questionNo: 'Q7(a)', marks: 8 }
      ],
      syllabusTopics: ['Supply Chain Architecture', 'Provenance Tracking', 'IoT Sensor Logging', 'Smart Contract Settlement'],
      definition: 'A supply chain represents the sequence of processes involved in the production and distribution of a commodity from raw material extraction to final consumer delivery. Blockchain provides a shared, immutable distributed ledger that cryptographically logs every handover, inspection, and sensor measurement across all supply chain actors.',
      sections: [
        {
          title: '1. Pathologies of Traditional Supply Chains',
          content: [
            'Data Fragmentation: Each company maintains isolated internal ERP silos; discrepancies, paper invoices, and reconciliation disputes are rampant.',
            'Counterfeiting & Fraud: Billions lost annually in counterfeit pharmaceuticals and luxury goods due to lack of verifiable origin.',
            'Opaque Recalls: When contamination occurs (e.g. foodborne illness), tracing the contaminated farm takes days or weeks across paper manifests.',
            'Payment Latency: Suppliers wait 60 to 90 days for invoice approvals and freight audits.'
          ]
        },
        {
          title: '2. Step-by-Step Operational Workflow',
          content: [
            'Step 1: Origin & Tagging — Manufacturer logs product batch details, origin, and timestamp on-chain, attaching an RFID/cryptographic QR tag.',
            'Step 2: Logistics Transit & IoT Logging — Cargo transit conditions (GPS location, temperature for cold-chain vaccines) are logged automatically by IoT sensors to smart contracts.',
            'Step 3: Port Customs Clearance — Customs agents verify cryptographic certificates on the shared ledger, stamping clearance digitally.',
            'Step 4: Retail Stocking & Automated Settlement — Retailer confirms physical receipt; smart contracts immediately trigger automated invoice settlement.',
            'Step 5: Consumer Verification — End-consumer scans the QR code with a smartphone to inspect the complete immutable history from factory to shelf.'
          ]
        },
        {
          title: '3. Real-World Case Studies',
          content: [
            'Walmart & IBM Food Trust: Traced origin of leafy greens and mangoes in 2.2 seconds compared to 7 days using legacy paper trails.',
            'Pharmaceutical Safety: Chronicled and Curisium deploy blockchain systems ensuring life-saving drugs are genuine and stored within required thermal ranges.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-supply-chain-blockchain',
          title: 'End-to-End Blockchain Supply Chain System Architecture',
          caption: 'Visual workflow linking Manufacturer, Logistics Distributor, Retailer, and End Customer over a synchronized, immutable blockchain ledger with smart contracts and IoT sensor validation.',
          type: 'svg-interactive',
          svgType: 'supply-chain-blockchain'
        }
      ],
      summary: [
        'Blockchain supply chains provide a single shared, tamper-proof record of product journeys.',
        'Links manufacturers, logistics carriers, customs, retailers, and end customers.',
        'IoT sensors log real-time cold-chain temperature and GPS coordinates directly to smart contracts.',
        'Reduces food contamination recall times from 7 days down to 2 seconds (Walmart case study).'
      ],
      keyPoints: [
        'End-to-end transparent provenance tracking',
        'IoT cold-chain telemetry logging',
        'Smart contract escrow automated payments',
        'Consumer QR verification from origin to shelf'
      ]
    },
    {
      id: 'bc-u6-q3',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 3,
      title: 'How Can Cyber Hacks and Data Breaches Be Reduced for Digital Identity Using Blockchain Technology?',
      shortTitle: 'Digital Identity Protection & Cyber Hack Reduction',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q7(b)', marks: 6 }
      ],
      syllabusTopics: ['Digital Identity Hacks', 'Self-Sovereign Identity (SSI)', 'Eliminating Centralized Honeypots', 'Zero-Knowledge Proofs'],
      definition: 'Digital identity represents the online cryptographic proof of an individual\'s legal credentials (name, national ID, date of birth, biometric records, and financial standing). Blockchain eliminates cyber hacks by shifting from vulnerable centralized database "honeypots" to decentralized, Self-Sovereign Identity (SSI).',
      sections: [
        {
          title: '1. The Centralized Database Honeypot Vulnerability',
          content: [
            'Honeypot Architecture: Today, single centralized servers (credit bureaus, government portals) store millions of sensitive identities in cleartext or weakly encrypted tables. A single security breach compromises millions of citizens (e.g. Equifax hack of 147M records).',
            'Lack of User Control: Users cannot revoke credentials once shared, leading to unauthorized data brokering and identity theft.'
          ]
        },
        {
          title: '2. The Blockchain SSI Defense Architecture',
          content: [
            'Eliminating Central Honeypots: No centralized database exists to attack. Personal data remains encrypted on the user\'s local device; the blockchain stores only decentralized identifiers (DIDs) and cryptographic public keys.',
            'Private Key Consent: Every identity verification requires a cryptographic signature from the user\'s private key, preventing unauthorized identity sharing.',
            'Selective Disclosure via Zero-Knowledge: Users prove statements (e.g. "I am over 21 years old") using zero-knowledge proofs without revealing their exact birth date, address, or national ID number.',
            'Immutable Audit Trail: All credential verification requests are cryptographically logged, enabling instant detection of fraudulent attempts.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-digital-identity-blockchain',
          title: 'Self-Sovereign Digital Identity (SSI) vs Centralized Honeypot Architecture',
          caption: 'Architectural contrast illustrating how decentralized DIDs and zero-knowledge verifiable credentials prevent catastrophic single-point server hacks.',
          type: 'svg-interactive',
          svgType: 'digital-identity-blockchain'
        }
      ],
      summary: [
        'Centralized identity databases act as hacker honeypots where one breach compromises millions.',
        'Self-Sovereign Identity (SSI) keeps personal data encrypted locally on user devices.',
        'Blockchain stores only Decentralized Identifiers (DIDs) and cryptographic verification proofs.',
        'Zero-knowledge proofs allow selective disclosure (proving age > 21 without revealing birthdate).'
      ],
      keyPoints: [
        'Elimination of centralized database honeypots',
        'Self-Sovereign Identity (SSI) & DIDs',
        'Private key authorization and consent',
        'Zero-knowledge selective disclosure proofs'
      ]
    },
    {
      id: 'bc-u6-q4',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 4,
      title: 'Explain the Role and Significance of Blockchain in the Government Sector. Detail Major Public Applications and Use Cases',
      shortTitle: 'Government Sector Applications & Public Services',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 6,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q8(a)', marks: 8 },
        { paper: 'Paper 2', questionNo: 'Q7(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q7(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q8(c)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q7(b)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q8(c)', marks: 8 }
      ],
      syllabusTopics: ['Government Blockchain', 'Land Registration', 'Smart Cities', 'Welfare & Taxation', 'Civil Registries'],
      definition: 'A blockchain-based digital government is an administrative governance model where public agencies, citizens, and enterprises interact over shared, cryptographically secured distributed ledgers, eliminating bureaucratic friction, paper fraud, and single points of corruption.',
      sections: [
        {
          title: '1. Administrative Imperatives in Public Administration',
          content: [
            'Protection of Public Data: Secures citizen registries against unauthorized manipulation or physical paper loss.',
            'Slashing Administrative Costs: Eliminates manual paper reconciliation and speeds public service delivery.',
            'Corruption Reduction: Smart contracts automate entitlement payouts and public tenders, eliminating kickbacks and bribery.'
          ]
        }
      ],
      summary: [
        'Blockchain transforms government from paper-heavy bureaucracies into transparent digital services.',
        'Core applications include land registration, civil records, public procurement, welfare, and taxation.',
        'Prevents land deed forgery and eliminates administrative middlemen in welfare distribution.',
        'Smart cities utilize blockchain for peer-to-peer municipal utility management.'
      ],
      keyPoints: [
        'Tamper-proof land titling and deeds',
        'Direct welfare benefit distribution via smart contracts',
        'Automated taxation and procurement transparency',
        'Smart city municipal infrastructure coordination'
      ]
    },
    {
      id: 'bc-u6-q5',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 5,
      title: 'Discuss the Application and Strategic Impact of Blockchain Technology in Retail Banking. Explain Two Use Cases in Detail',
      shortTitle: 'Retail Banking Applications & Disintermediation',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 5', questionNo: 'Q7(a), Q8(b)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q7(a)', marks: 6 }
      ],
      syllabusTopics: ['Retail Banking', 'Cross-Border Remittances', 'Fraud Prevention', 'KYC Compliance'],
      definition: 'Retail banking refers to consumer-facing commercial banking services (savings accounts, consumer loans, remittances, and credit card processing). Blockchain provides a shared, cryptographically synchronized ledger that eliminates intermediary clearinghouses, accelerates settlement, and minimizes systemic fraud.',
      sections: [
        {
          title: '1. Strategic Pillars for Retail Banks',
          content: [
            'Three Core Strengths: Data Handling (unifying customer records across branches without data silos), Disintermediation (cutting costly correspondent banking networks), and Cryptographic Trust (tamper-proof fraud prevention).',
            'Infrastructure Modernization: Leading banks deploy enterprise frameworks like Hyperledger Fabric to replace legacy paper-heavy processes and manual loan origination.'
          ]
        },
        {
          title: '2. Detailed Exploration of Two Core Applications',
          content: [
            '1. Cross-Border Remittances: Traditional remittances rely on correspondent banking networks (SWIFT) with 3% to 7% wire fees and 2-5 day clearing delays. Blockchain-based remittance rails settle transactions point-to-point in seconds with negligible network fees, benefiting migrant workers and international families.',
            '2. KYC Verification & Fraud Prevention: Today each bank repeats expensive redundant KYC verification. With blockchain, an encrypted customer identity profile is authenticated once by a certified entity and stored in a consortium ledger. Partner banks verify customer credentials instantly with cryptographic consent, slashing compliance overhead by up to 80%.'
          ]
        }
      ],
      summary: [
        'Retail banking uses blockchain for cross-border remittances, KYC automation, and fraud prevention.',
        'Eliminates correspondent banking networks (SWIFT), settling international wires in seconds.',
        'Consortium KYC ledgers eliminate redundant identity checks, slashing operational compliance costs.',
        'Hyperledger Fabric is widely adopted by major banks to modernize retail operations.'
      ],
      keyPoints: [
        'Instantaneous cross-border consumer remittances',
        'Disintermediation of SWIFT wire fees',
        'Consortium-shared KYC verification',
        'Fraud reduction and tamper-proof credit assessment'
      ]
    },
    {
      id: 'bc-u6-q6',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 6,
      title: 'Explain the Role and Significance of Blockchain in Institutional Banking and Financial Services. Discuss we.trade and ANZ Solutions',
      shortTitle: 'Institutional Banking, Capital Markets & we.trade',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 6,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q8(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q7(a)', marks: 8 },
        { paper: 'Paper 4', questionNo: 'Q8(b)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q8(c)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q7(a), Q8(b)', marks: 8 }
      ],
      syllabusTopics: ['Trade Finance', 'Letters of Credit', 'we.trade Consortium', 'ANZ Fraud Prevention', 'Clearing & Settlement'],
      definition: 'In institutional banking and wholesale capital markets, blockchain replaces centuries-old paper-heavy financial instruments (Letters of Credit, Bills of Lading, Bank Guarantees) with programmable smart contracts and shared permissioned ledgers across international banking consortia.',
      sections: [
        {
          title: '1. The Institutional Dilemma & Business Drivers',
          content: [
            'Paper-Heavy Inefficiencies: Global trade finance still relies on physical couriers sending paper Bills of Lading and Letters of Credit between buyers, sellers, carriers, and banks, requiring up to 20 days to settle.',
            'Business Benefits: Operational simplification, automated regulatory compliance, real-time liquidity, and point-to-point atomic settlement.'
          ]
        }
      ],
      summary: [
        'Institutional banking uses blockchain to modernize trade finance, bond clearing, and settlement.',
        'we.trade platform automates Letters of Credit and payment releases upon logistics milestones.',
        'ANZ Bank digitizes commercial lease guarantees to eliminate paper fraud and forgery.',
        'Enables continuous Real-Time Gross Settlement (RTGS) for interbank transfers.'
      ],
      keyPoints: [
        'Trade finance paper disintermediation',
        'we.trade European banking consortium',
        'ANZ Bank guarantee fraud reduction',
        'Real-Time Gross Settlement (RTGS) continuous clearing'
      ]
    },
    {
      id: 'bc-u6-q7',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 7,
      title: 'Explain How Blockchain Technology Revolutionizes Healthcare Systems: Patient-Centric EHR, Pharma Tracking, and Clinical Trials',
      shortTitle: 'Healthcare EHR Systems & Pharma Traceability',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q8(a)', marks: 8 },
        { paper: 'Paper 4', questionNo: 'Q7(c)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q8(a)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q7(c)', marks: 8 }
      ],
      syllabusTopics: ['Healthcare Blockchain', 'Patient-Centric EHR', 'HIPAA Compliance', 'Pharma Supply Chain', 'Clinical Trials'],
      definition: 'In healthcare, blockchain provides a secure, decentralized architecture for sharing sensitive medical records across disparate hospitals, diagnostic labs, pharmacies, and insurance providers while granting patients total sovereign control over who accesses their health history.',
      sections: [
        {
          title: '1. Resolving the Healthcare Data Crisis',
          content: [
            'EHR Silos: Hospital networks maintain isolated, incompatible Electronic Medical Record (EMR) databases. When patients switch providers, doctors lack complete medical histories, causing delayed diagnoses, redundant testing, and lethal drug interactions.',
            'Ransomware Defense: Hospital databases are primary targets for ransomware attacks. Distributed blockchain consensus ensures critical medical data cannot be held hostage by centralized cyber extortionists.'
          ]
        },
        {
          title: '2. Major Clinical Use Cases',
          content: [
            '1. Patient-Centric Electronic Health Records (EHR): Medical records are encrypted and stored in off-chain decentralized storage (Swarm/IPFS). The blockchain maintains access-control smart contracts. Patients use private keys to grant temporary, audited access permissions to doctors.',
            '2. Pharmaceutical Supply Chain & Counterfeit Prevention: Serialized QR codes on prescription medicines are scanned at each transit checkpoint. Systems like Chronicled and Curisium verify medicine authenticity and cold-chain temperature compliance.',
            '3. Verifiable Medical Staff Credentials: Doctor qualifications, board certifications, and surgical licenses are cryptographically verified on-chain, eliminating credential fraud and speeding hospital hiring.',
            '4. Clinical Trial Integrity & Genomics Management: Research protocols and clinical trial outcomes are hashed to the blockchain before study initiation, preventing pharmaceutical companies from concealing adverse trial outcomes or altering test data.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-healthcare-ehr-blockchain',
          title: 'Patient-Centric Blockchain Electronic Health Record (EHR) Ecosystem',
          caption: 'Architectural diagram illustrating patient consent control, cryptographic access tokens, and interoperable record sharing among hospitals, labs, pharmacies, and insurers.',
          type: 'svg-interactive',
          svgType: 'healthcare-ehr-blockchain'
        }
      ],
      summary: [
        'Blockchain eliminates hospital EHR silos, giving patients sovereign control over medical records.',
        'Encrypted health records reside off-chain; access permissions are managed via smart contracts.',
        'Chronicled and Curisium trace pharmaceutical shipments to prevent counterfeit drugs.',
        'Pre-trial hashing prevents pharmaceutical companies from falsifying clinical trial outcomes.'
      ],
      keyPoints: [
        'Patient-centric Electronic Health Records (EHR)',
        'Off-chain encrypted storage + on-chain access control',
        'Pharmaceutical counterfeit prevention (Chronicled)',
        'Clinical trial and genomics data integrity'
      ]
    },
    {
      id: 'bc-u6-q8',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 8,
      title: 'Explain How Blockchain and IoT Work Together. Detail the Three Key Properties (Distribution, Immutability, Decentralization) with Examples',
      shortTitle: 'Blockchain and IoT Integration Mechanics',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 4,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q8(b)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q8(a)', marks: 8 },
        { paper: 'Paper 4', questionNo: 'Q8(a)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q7(b)', marks: 8 }
      ],
      syllabusTopics: ['Blockchain & IoT', 'Distribution', 'Immutability', 'Decentralization', 'M2M Economy'],
      definition: 'The Internet of Things (IoT) is a global network of billions of connected smart devices (sensors, cameras, meters, actuators, and connected vehicles) that collect and exchange telemetry data. Blockchain serves as the decentralized security and transaction layer for IoT, providing a shared, tamper-proof record of device actions and enabling autonomous Machine-to-Machine (M2M) commerce.',
      sections: [
        {
          title: '1. The Three Foundational Properties of Blockchain for IoT',
          content: [
            '1. Distribution (No Single Target for Hackers):',
            '  • Telemetry data and device authentication states are distributed across thousands of peer nodes rather than residing on a central cloud server.',
            '  • Example (Surveillance Camera Security): If a burglar attacks a house protected by standard cameras, they can disable the local DVR or cloud server to erase footage. With blockchain, camera frame hashes are distributed instantly across peer nodes; the burglar cannot erase the distributed cryptographic record.',
            '2. Immutability (Tamper-Proof Sensor Auditability):',
            '  • Once an IoT sensor logs a measurement (temperature, vibration, pressure) to the blockchain, it cannot be altered or retroactively manipulated by anyone.',
            '  • Example (Court Evidence & Industrial Accidents): If an industrial boiler explodes, the manufacturing company cannot falsify historical maintenance logs; the blockchain provides an unalterable forensic record for investigators and courts.',
            '3. Decentralization & Autonomous M2M Settlements:',
            '  • Devices execute autonomous micro-transactions using smart contracts without human intervention.',
            '  • Example (Smart EV Charging): An electric vehicle negotiates directly with a smart charging station, verifies tariff pricing, initiates charging, and pays in tokens automatically via smart contracts.'
          ]
        }
      ],
      summary: [
        'Blockchain provides the decentralized security and consensus layer for the Internet of Things.',
        'Distribution eliminates centralized cloud broker vulnerabilities and DDoS targets.',
        'Immutability guarantees tamper-proof sensor telemetry for legal evidence and forensics.',
        'Decentralization enables autonomous machine-to-machine (M2M) micro-transactions.'
      ],
      keyPoints: [
        'Distribution: no single cloud failure point',
        'Immutability: tamper-proof sensor logs',
        'Decentralization: autonomous M2M micropayments',
        'Smart vehicle charging & industrial telemetry'
      ]
    },
    {
      id: 'bc-u6-q9',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 9,
      title: 'Write a Comprehensive Technical Note on Blockchain in Energy and Utilities: P2P Trading, Microgrids, and RECs',
      shortTitle: 'P2P Energy Trading, Microgrids & Utilities',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q7(b)', marks: 6 }
      ],
      syllabusTopics: ['P2P Energy Trading', 'Microgrids', 'Renewable Energy Certificates (RECs)', 'Smart Meters'],
      definition: 'In the energy and utility sector, blockchain provides a decentralized transaction layer that records electricity generation, distribution, and consumption across a shared ledger, facilitating decentralized microgrids and enabling households with solar panels to trade energy peer-to-peer without central utility middlemen.',
      sections: [
        {
          title: '1. The Prosumer Transformation',
          content: [
            'Prosumer Concept: Modern households with solar panels and domestic battery storage (Tesla Powerwall) both produce and consume electricity. Centralized grid utilities offer unfavorable feed-in tariffs and lack the agility to facilitate localized energy exchange.',
            'Blockchain Solution: Decentralized microgrids where neighbors trade surplus green energy directly via automated smart contracts.'
          ]
        },
        {
          title: '2. Major Energy Use Cases',
          content: [
            '1. Peer-to-Peer (P2P) Energy Trading: Prosumers generate excess solar energy. Instead of selling it back to the utility monopoly at unfavorable wholesale feed-in tariffs, a smart contract matches their excess supply with a neighbor\'s demand in real time, settling trades directly at a mutually beneficial price.',
            '2. Renewable Energy Certificates (RECs): RECs authenticate that 1 Megawatt-hour (MWh) of electricity was generated from renewable sources. Conventional paper REC markets suffer from double-counting fraud and high brokerage fees. Blockchain tokenizes RECs, guaranteeing transparent provenance and instant verification.',
            '3. Decentralized Microgrids: Self-sufficient localized energy grids connecting local distributed energy resources (solar, wind, batteries). Investment in microgrids minimizes transmission line losses and guarantees power during regional blackout events.',
            '4. Automated Smart Meter Settlement: Smart meters log real-time power consumption directly to the blockchain, computerizing utility billing and eliminating manual meter reading disputes.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-p2p-energy-trading',
          title: 'Decentralized P2P Solar Energy Trading Microgrid Architecture',
          caption: 'Visual model showing residential prosumers selling excess rooftop solar energy directly to neighboring consumers via smart meter IoT and automated smart contract settlement.',
          type: 'svg-interactive',
          svgType: 'p2p-energy-trading'
        }
      ],
      summary: [
        'Blockchain enables residential solar prosumers to trade surplus energy directly with neighbors.',
        'Smart contracts match local energy generation with local demand, settling trades automatically.',
        'Tokenizes Renewable Energy Certificates (RECs) to eliminate double-counting fraud.',
        'Decentralized microgrids minimize transmission losses and enhance blackout resilience.'
      ],
      keyPoints: [
        'Peer-to-Peer (P2P) residential solar energy trading',
        'Smart meter IoT automated tariff settlement',
        'Tokenized Renewable Energy Certificates (RECs)',
        'Decentralized microgrid resilience'
      ]
    },
    {
      id: 'bc-u6-q10',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 10,
      title: 'Discuss the Architecture, Benefits, and Critical Challenges of Implementing Blockchain in Electronic Voting Systems',
      shortTitle: 'Blockchain Electronic Voting Architecture & Challenges',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 3', questionNo: 'Q8(b)', marks: 6 }
      ],
      syllabusTopics: ['Blockchain Voting', 'Election Integrity', 'Civil Benefits', 'Cyber Challenges', 'Voter Privacy'],
      definition: 'A blockchain-based electronic voting system records each cast ballot as an immutable, cryptographically verified transaction on a distributed ledger, ensuring that each registered voter votes exactly once, votes cannot be deleted or manipulated, and election tallies can be independently audited by anyone.',
      sections: [
        {
          title: '1. Resolving the Democratic Election Dilemma',
          content: [
            'Vulnerabilities in Conventional Elections: Paper voting requires expensive manual counting and risks physical ballot stuffing. Centralized electronic voting machines (EVMs) can suffer from proprietary software flaws and lack transparent public auditability.',
            'Blockchain Value: Provides mathematical proof of election integrity: One person = One vote, zero double-voting, tamper-proof ballot storage, and real-time verifiable tallies.'
          ]
        },
        {
          title: '3. Key Benefits vs Implementation Challenges of Blockchain Voting (2-Column Format)',
          table: {
            headers: ['Key Benefits of Blockchain Voting', 'Critical Implementation Challenges'],
            rows: [
              {
                parameter: 'Remote Voter Accessibility: Enables secure, borderless voting from smartphones, dramatically increasing participation for overseas citizens and disabled voters.',
                col1: 'Digital Divide & Inequity: Severely marginalizes rural citizens lacking smartphones, reliable high-speed internet, or digital literacy.'
              },
              {
                parameter: 'Tamper-Proof Ballot Integrity: Cryptographically impossible for corrupted election officials to inject fake ballots, swap choices, or destroy physical vote records.',
                col1: 'Endpoint Malware Vulnerability: Voter smartphones infected with spyware, keyloggers, or trojans can compromise or alter votes before encryption.'
              },
              {
                parameter: 'Instant Verifiable Auditability: Near-instantaneous automated tallies verifiable by independent observers using cryptographic Merkle proofs.',
                col1: 'Scalability & Network Congestion: Handling tens of millions of nationwide votes simultaneously within narrow polling hours creates severe blockchain congestion.'
              },
              {
                parameter: 'Zero-Knowledge Privacy: Zero-Knowledge proofs (zk-SNARKs) verify that a citizen is eligible to vote without revealing their individual ballot choice.',
                col1: 'Coercion & Vote-Buying Risk: Remote smartphone voting lacks the isolated secrecy of a voting booth, exposing voters to extortion or forced vote selling.'
              }
            ]
          }
        }
      ],
      diagrams: [
        {
          id: 'diag-blockchain-voting',
          title: 'Verifiable Blockchain Electronic Voting Architecture',
          caption: 'Diagram showing biometric citizen verification, anonymous ballot generation via zero-knowledge proofs, immutable block hashing, and transparent public tallying.',
          type: 'svg-interactive',
          svgType: 'blockchain-voting'
        }
      ],
      summary: [
        'Blockchain voting records ballots as immutable transactions, preventing double-voting and ballot tampering.',
        'Delivers real-time, mathematically auditable tallies and increases voter turnout.',
        'Critical challenges include endpoint malware on voter phones, voter coercion, and the digital divide.',
        'Hybrid models combining paper audits with blockchain verification provide the strongest security.'
      ],
      keyPoints: [
        'Cryptographic one-voter-one-vote guarantee',
        'Zero-knowledge voter privacy shielding',
        'Tamper-proof real-time election tallying',
        'Client malware & coercion resistance challenges'
      ]
    },
    {
      id: 'bc-u6-q11',
      unitId: 'unit-6',
      subjectId: 'blockchain-technology',
      qNumber: 11,
      title: 'Explain the Cross-Domain Integration of Blockchain with Cloud Computing (BaaS), the Internet of Things, and Decentralized DNS',
      shortTitle: 'Cross-Domain Integration: Cloud BaaS, IoT & DNS',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q7(a), Q8(a)', marks: 8 },
        { paper: 'Paper 6', questionNo: 'Q8(a)', marks: 8 }
      ],
      syllabusTopics: ['Cross-Domain Integration', 'Blockchain-as-a-Service (BaaS)', 'Decentralized DNS (ENS)', 'Telecom & Digital Assets'],
      definition: 'Blockchain does not operate in isolation. In modern enterprise computing, it serves as a foundational trust protocol integrated horizontally across Cloud Computing, IoT sensor fabrics, the Domain Name System (DNS), telecommunications, and digital asset management.',
      sections: [
        {
          title: '1. Multi-Domain Integration Architectures',
          content: [
            '1. Cloud Computing Integration (Blockchain-as-a-Service - BaaS):',
            '  • Managed Blockchain: Major cloud providers (AWS, Microsoft Azure, IBM Cloud) offer managed BaaS environments, allowing enterprises to deploy Hyperledger Fabric, Corda, and Ethereum clusters without managing physical hardware.',
            '  • Decentralized Cloud Storage: Combining cloud computing with decentralized storage protocols (Swarm, IPFS) to avoid single-cloud monopoly lock-in.',
            '2. Internet of Things (IoT) Integration:',
            '  • Edge devices stream environmental and custody telemetry directly to blockchain smart contracts, enabling autonomous machine-to-machine workflows across automotive, pharmacy, smart homes, and logistics.',
            '3. Decentralized Domain Name System (DNS on Blockchain):',
            '  • Conventional DNS converts human domain names to IP addresses but is governed by centralized registries (ICANN) vulnerable to censorship, hijacking, and DDoS attacks.',
            '  • Blockchain DNS (Ethereum Name Service - ENS: e.g. "vitalik.eth") maps human names directly to crypto addresses and decentralized Swarm websites via smart contracts, providing completely censorship-resistant domains.',
            '4. Telecommunications & Digital Asset Tokenization:',
            '  • Telecom carriers deploy consortium blockchains to streamline wholesale roaming reconciliation, 5G network slicing agreements, and fraud detection.',
            '  • Tokenizing conventional commercial assets (stocks, bonds, land titles, and airline frequent flyer miles) into liquid on-chain tokens.'
          ]
        }
      ],
      summary: [
        'Blockchain integrates horizontally across Cloud (BaaS), IoT, and Decentralized DNS.',
        'Blockchain-as-a-Service (BaaS) provides 1-click cloud deployment of enterprise nodes.',
        'Decentralized DNS (ENS) replaces vulnerable centralized registries with censorship-resistant domains.',
        'Telecommunications uses blockchain for wholesale roaming reconciliation and 5G network slicing.'
      ],
      keyPoints: [
        'Cloud Blockchain-as-a-Service (AWS, IBM BaaS)',
        'Decentralized DNS & Ethereum Name Service (ENS)',
        'IoT edge device telemetry smart contract integration',
        'Telecom wholesale roaming settlement'
      ]
    }
  ]
};
