import React from 'react';

interface DiagramProps {
  onHover?: (info: string | null) => void;
}

export const SupplyChainDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* 4 Supply Chain Nodes */}
    {/* 1. Manufacturer */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('1. Manufacturer: Records batch origin, date, and affixes cryptographic QR tag')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="30" width="105" height="75" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="72" y="55" textAnchor="middle" className="text-xs font-bold fill-blue-900 dark:fill-blue-100">Manufacturer</text>
      <text x="72" y="72" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Batch Origin</text>
      <text x="72" y="88" textAnchor="middle" className="text-[8px] font-mono fill-blue-600">Mint Digital ID</text>
    </g>

    {/* Arrow 1 */}
    <line x1="125" y1="67" x2="155" y2="67" stroke="#94a3b8" strokeWidth="2" />

    {/* 2. Logistics / Distributor */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('2. Logistics / Carrier: IoT sensors log GPS location and cold-chain temperature')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="155" y="30" width="105" height="75" rx="6" className="fill-amber-100 dark:fill-amber-950 stroke-amber-600" strokeWidth="1.5" />
      <text x="207" y="55" textAnchor="middle" className="text-xs font-bold fill-amber-900 dark:fill-amber-100">Distributor</text>
      <text x="207" y="72" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Transit & Storage</text>
      <text x="207" y="88" textAnchor="middle" className="text-[8px] font-mono fill-amber-600">IoT Sensor Log</text>
    </g>

    {/* Arrow 2 */}
    <line x1="260" y1="67" x2="290" y2="67" stroke="#94a3b8" strokeWidth="2" />

    {/* 3. Retailer */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('3. Retailer: Verifies inventory authenticity; triggers automated smart contract payment')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="290" y="30" width="105" height="75" rx="6" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="1.5" />
      <text x="342" y="55" textAnchor="middle" className="text-xs font-bold fill-purple-900 dark:fill-purple-100">Retailer</text>
      <text x="342" y="72" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Inventory Stock</text>
      <text x="342" y="88" textAnchor="middle" className="text-[8px] font-mono fill-purple-600">Escrow Payout</text>
    </g>

    {/* Arrow 3 */}
    <line x1="395" y1="67" x2="425" y2="67" stroke="#94a3b8" strokeWidth="2" />

    {/* 4. Customer */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('4. End Consumer: Scans QR code with smartphone to verify complete immutable product journey')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="425" y="30" width="95" height="75" rx="6" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
      <text x="472" y="55" textAnchor="middle" className="text-xs font-bold fill-emerald-900 dark:fill-emerald-100">Customer</text>
      <text x="472" y="72" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Scans QR Code</text>
      <text x="472" y="88" textAnchor="middle" className="text-[8px] font-mono fill-emerald-600">100% Provenance</text>
    </g>

    {/* Shared Blockchain Ledger (Bottom full width bar) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Shared Ledger: Single immutable source of truth; all handovers, timestamps, and sensor telemetry recorded')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="135" width="500" height="90" rx="8" className="fill-emerald-50 dark:fill-emerald-950/40 stroke-emerald-500" strokeWidth="2" />
      <text x="270" y="160" textAnchor="middle" className="text-xs font-bold fill-emerald-800 dark:fill-emerald-200">
        SHARED IMMUTABLE BLOCKCHAIN LEDGER & SMART CONTRACTS
      </text>
      <text x="270" y="178" textAnchor="middle" className="text-[10px] fill-academic-600 dark:fill-academic-400">
        Single synchronized source of truth across Manufacturer, Logistics, Retailer, and Consumer
      </text>
      <text x="270" y="196" textAnchor="middle" className="text-[9px] font-mono fill-emerald-700 dark:fill-emerald-300">
        • Anti-Counterfeiting • Automated Escrow Release on Delivery • 2-Second Contamination Recall
      </text>
    </g>

    {/* Up/Down connecting lines between actors and ledger */}
    <line x1="72" y1="105" x2="72" y2="135" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="207" y1="105" x2="207" y2="135" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="342" y1="105" x2="342" y2="135" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="472" y1="105" x2="472" y2="135" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Bottom summary text */}
    <rect x="20" y="240" width="500" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="254" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Case Benchmark: Walmart & IBM Food Trust reduced produce tracking time from 7 days to 2.2 seconds
    </text>
  </svg>
);

export const DigitalIdentityDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 270" className="w-full h-auto select-none">
    {/* Left: Centralized Honeypot Vulnerability */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Centralized Vulnerability: Single master database holds millions of records. One breach leaks all identities.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="25" width="235" height="195" rx="8" className="fill-rose-50 dark:fill-rose-950/30 stroke-rose-400" strokeWidth="1.5" />
      <text x="137" y="50" textAnchor="middle" className="text-xs font-bold fill-rose-800 dark:fill-rose-300">Centralized Database "Honeypot"</text>

      <rect x="40" y="70" width="195" height="50" rx="4" className="fill-rose-100 dark:fill-rose-900 stroke-rose-500" />
      <text x="137" y="92" textAnchor="middle" className="text-[10px] font-bold fill-rose-900 dark:fill-rose-100">Central Government / Corporate DB</text>
      <text x="137" y="106" textAnchor="middle" className="text-[8px] fill-rose-700 dark:fill-rose-300">100M+ Cleartext Records</text>

      <text x="40" y="145" className="text-[9px] fill-academic-600 dark:fill-academic-400">• High-value single target for hackers</text>
      <text x="40" y="160" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Catastrophic breach spills all identities</text>
      <text x="40" y="175" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Users have zero revocation control</text>
      <text x="40" y="200" className="text-[9px] font-bold fill-rose-600">e.g. Equifax (147M leaked records)</text>
    </g>

    {/* Right: Decentralized Self-Sovereign Identity (SSI) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Decentralized SSI: User keeps personal data encrypted locally. Blockchain only holds DIDs and zero-knowledge proofs.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="285" y="25" width="235" height="195" rx="8" className="fill-emerald-50 dark:fill-emerald-950/30 stroke-emerald-400" strokeWidth="1.5" />
      <text x="402" y="50" textAnchor="middle" className="text-xs font-bold fill-emerald-800 dark:fill-emerald-300">Self-Sovereign Identity (SSI)</text>

      <rect x="305" y="70" width="195" height="50" rx="4" className="fill-emerald-100 dark:fill-emerald-900 stroke-emerald-500" />
      <text x="402" y="92" textAnchor="middle" className="text-[10px] font-bold fill-emerald-900 dark:fill-emerald-100">User Device Encrypted Vault</text>
      <text x="402" y="106" textAnchor="middle" className="text-[8px] fill-emerald-700 dark:fill-emerald-300">DID & Verifiable Credentials</text>

      <text x="305" y="145" className="text-[9px] fill-academic-600 dark:fill-academic-400">• No central database honeypot exists</text>
      <text x="305" y="160" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Zero-Knowledge selective disclosure</text>
      <text x="305" y="175" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Private keys grant explicit consent</text>
      <text x="305" y="200" className="text-[9px] font-bold fill-emerald-600">Proves age &gt; 21 without revealing birthdate</text>
    </g>

    {/* Bottom summary text */}
    <rect x="20" y="235" width="500" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="249" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      SSI Paradigm: Move from centralized credential honeypots to decentralized user-sovereign cryptography
    </text>
  </svg>
);

export const HealthcareEHRDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* Patient in Center */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Patient: Sole sovereign controller of their health data; grants cryptographic consent via private keys')}
      onMouseLeave={() => onHover?.(null)}
    >
      <circle cx="270" cy="120" r="42" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="2.5" />
      <text x="270" y="115" textAnchor="middle" className="text-xs font-bold fill-emerald-900 dark:fill-emerald-100">PATIENT</text>
      <text x="270" y="130" textAnchor="middle" className="text-[9px] fill-emerald-700 dark:fill-emerald-300">Key Custodian</text>
      <text x="270" y="144" textAnchor="middle" className="text-[7px] font-mono fill-emerald-600">Consent Control</text>
    </g>

    {/* Surrounding Healthcare Entities */}
    {/* 1. Hospital Network */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Hospitals: Access patient medical history upon permission; log clinical diagnoses and surgeries')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="30" width="130" height="50" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="85" y="52" textAnchor="middle" className="text-[10px] font-bold fill-blue-900 dark:fill-blue-100">Hospital A & Doctors</text>
      <text x="85" y="67" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Temporary Access</text>
    </g>

    {/* 2. Diagnostic Labs */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Diagnostic Labs: Upload authenticated lab results and scan hashes directly to patient vault')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="390" y="30" width="130" height="50" rx="6" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="1.5" />
      <text x="455" y="52" textAnchor="middle" className="text-[10px] font-bold fill-purple-900 dark:fill-purple-100">Diagnostic & Blood Labs</text>
      <text x="455" y="67" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Reports Hashed</text>
    </g>

    {/* 3. Pharmacy Network */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Pharmacy: Verifies authentic digital prescription and prevents duplicate prescription fills')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="160" width="130" height="50" rx="6" className="fill-amber-100 dark:fill-amber-950 stroke-amber-600" strokeWidth="1.5" />
      <text x="85" y="182" textAnchor="middle" className="text-[10px] font-bold fill-amber-900 dark:fill-amber-100">Pharmacies</text>
      <text x="85" y="197" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Digital Prescription</text>
    </g>

    {/* 4. Insurance Companies */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Insurers: Smart contracts automate claim verification and settlement without bureaucratic delays')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="390" y="160" width="130" height="50" rx="6" className="fill-teal-100 dark:fill-teal-950 stroke-teal-600" strokeWidth="1.5" />
      <text x="455" y="182" textAnchor="middle" className="text-[10px] font-bold fill-teal-900 dark:fill-teal-100">Insurance Providers</text>
      <text x="455" y="197" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Automated Claims</text>
    </g>

    {/* Connecting Consent Permission Lines */}
    <line x1="150" y1="65" x2="230" y2="105" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="390" y1="65" x2="310" y2="105" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="150" y1="175" x2="230" y2="135" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="390" y1="175" x2="310" y2="135" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Bottom summary text */}
    <rect x="20" y="240" width="500" height="24" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="256" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      HIPAA Compliant Architecture: Encrypted records off-chain; Access control smart contracts on-chain
    </text>
  </svg>
);

export const P2PEnergyTradingDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* Left: Solar Prosumer */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Solar Prosumer: Produces excess rooftop solar electricity; sells directly to local microgrid')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="35" width="145" height="100" rx="8" className="fill-amber-100 dark:fill-amber-950/60 stroke-amber-500" strokeWidth="2" />
      <text x="92" y="65" textAnchor="middle" className="text-xs font-bold fill-amber-900 dark:fill-amber-100">☀️ Prosumer Home</text>
      <text x="92" y="82" textAnchor="middle" className="text-[9px] fill-amber-800 dark:fill-amber-300">Rooftop Solar Array</text>
      <text x="92" y="98" textAnchor="middle" className="text-[8px] font-mono fill-amber-700 dark:fill-amber-400">IoT Smart Meter</text>
      <text x="92" y="118" textAnchor="middle" className="text-[9px] font-bold fill-emerald-600">+15 kWh Surplus</text>
    </g>

    {/* Center: Smart Contract Energy Exchange */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Smart Contract: Matches local renewable supply with neighbor demand, settling tariff automatically')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="200" y="30" width="140" height="110" rx="8" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="2" />
      <text x="270" y="55" textAnchor="middle" className="text-xs font-bold fill-purple-900 dark:fill-purple-100">Smart Contract</text>
      <text x="270" y="72" textAnchor="middle" className="text-[9px] font-bold fill-purple-700 dark:fill-purple-300">Energy Exchange</text>
      <text x="270" y="92" textAnchor="middle" className="text-[8px] font-mono fill-academic-600 dark:fill-academic-400">Rate: ₹4.50 / kWh</text>
      <text x="270" y="108" textAnchor="middle" className="text-[8px] font-mono fill-academic-600 dark:fill-academic-400">Atomic Settlement</text>
      <text x="270" y="126" textAnchor="middle" className="text-[8px] font-semibold fill-emerald-600">Zero Utility Cut</text>
    </g>

    {/* Right: Neighbor Consumer */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Consumer Neighbor: Purchases cheaper clean local energy than utility monopoly rates')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="375" y="35" width="145" height="100" rx="8" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="2" />
      <text x="447" y="65" textAnchor="middle" className="text-xs font-bold fill-blue-900 dark:fill-blue-100">🏡 Consumer Home</text>
      <text x="447" y="82" textAnchor="middle" className="text-[9px] fill-blue-800 dark:fill-blue-300">Consuming Electricity</text>
      <text x="447" y="98" textAnchor="middle" className="text-[8px] font-mono fill-blue-700 dark:fill-blue-400">IoT Smart Meter</text>
      <text x="447" y="118" textAnchor="middle" className="text-[9px] font-bold fill-blue-600">Buys at 20% Discount</text>
    </g>

    {/* Flow arrows */}
    <line x1="165" y1="75" x2="200" y2="75" stroke="#059669" strokeWidth="2" />
    <line x1="340" y1="75" x2="375" y2="75" stroke="#059669" strokeWidth="2" />

    {/* Physical Microgrid Power Line (Bottom) */}
    <rect x="20" y="165" width="500" height="55" rx="6" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1.5" />
    <text x="35" y="188" className="text-[11px] font-bold fill-academic-800 dark:fill-academic-200">Local Physical Microgrid Cable (Low Transmission Loss)</text>
    <text x="35" y="205" className="text-[9px] fill-academic-600 dark:fill-academic-400">
      Electricity flows physically through local neighborhood wires; financial settlement occurs instantaneously via tokens
    </text>

    {/* Bottom summary text */}
    <rect x="20" y="235" width="500" height="24" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="251" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Disintermediation: Eliminates central utility broker commissions and tokenizes Renewable Energy Certificates (RECs)
    </text>
  </svg>
);

export const BlockchainVotingDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 270" className="w-full h-auto select-none">
    {/* Step 1: Biometric Verification */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('1. Voter Verification: Biometric or government identity checked; receives 1 single voting token')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="35" width="100" height="85" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="70" y="62" textAnchor="middle" className="text-xs font-bold fill-blue-900 dark:fill-blue-100">1. Verification</text>
      <text x="70" y="78" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">National ID Check</text>
      <text x="70" y="95" textAnchor="middle" className="text-[8px] font-mono fill-blue-600">1 Citizen = 1 Token</text>
    </g>

    <line x1="120" y1="77" x2="150" y2="77" stroke="#94a3b8" strokeWidth="2" />

    {/* Step 2: Anonymous Ballot Cast */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('2. Cast Ballot: Casts vote shielded with zero-knowledge proof. Ballot cannot be linked back to voter.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="150" y="35" width="105" height="85" rx="6" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="1.5" />
      <text x="202" y="62" textAnchor="middle" className="text-xs font-bold fill-purple-900 dark:fill-purple-100">2. Cast Ballot</text>
      <text x="202" y="78" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">zk-SNARK Shielded</text>
      <text x="202" y="95" textAnchor="middle" className="text-[8px] font-mono fill-purple-600">Voter Privacy</text>
    </g>

    <line x1="255" y1="77" x2="285" y2="77" stroke="#94a3b8" strokeWidth="2" />

    {/* Step 3: Blockchain Append */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('3. Blockchain Consensus: Vote is sealed in tamper-proof block. Token is spent (zero double-voting).')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="285" y="35" width="105" height="85" rx="6" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
      <text x="337" y="62" textAnchor="middle" className="text-xs font-bold fill-emerald-900 dark:fill-emerald-100">3. Immutable Block</text>
      <text x="337" y="78" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Cryptographic Seal</text>
      <text x="337" y="95" textAnchor="middle" className="text-[8px] font-mono fill-emerald-600">No Double-Voting</text>
    </g>

    <line x1="390" y1="77" x2="420" y2="77" stroke="#94a3b8" strokeWidth="2" />

    {/* Step 4: Transparent Public Tally */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('4. Public Audit: Anyone can independently calculate and verify election tally in real time')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="420" y="35" width="100" height="85" rx="6" className="fill-amber-100 dark:fill-amber-950 stroke-amber-600" strokeWidth="1.5" />
      <text x="470" y="62" textAnchor="middle" className="text-xs font-bold fill-amber-900 dark:fill-amber-100">4. Real-Time Tally</text>
      <text x="470" y="78" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Public Auditability</text>
      <text x="470" y="95" textAnchor="middle" className="text-[8px] font-mono fill-amber-600">Zero Recount Fraud</text>
    </g>

    {/* Security Trade-offs & Reality Check Box */}
    <rect x="20" y="140" width="500" height="75" rx="8" className="fill-academic-50 dark:fill-academic-900/60 stroke-academic-200 dark:stroke-academic-800" />
    <text x="35" y="162" className="text-xs font-bold fill-academic-800 dark:fill-academic-200">Critical Election Engineering Safeguards</text>
    <text x="35" y="180" className="text-[9px] fill-academic-600 dark:fill-academic-400">
      • Sybil & Double-Vote Defense: One cryptographic nullifier per registered citizen ID prevents ballot duplication.
    </text>
    <text x="35" y="196" className="text-[9px] fill-rose-600 dark:fill-rose-400 font-semibold">
      • Challenges: Device malware, coercion outside private polling booths, and the citizen digital divide.
    </text>

    {/* Bottom summary text */}
    <rect x="20" y="230" width="500" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="244" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Democracy on Blockchain: Verifiable Mathematical Integrity + Cryptographic Voter Anonymity
    </text>
  </svg>
);
