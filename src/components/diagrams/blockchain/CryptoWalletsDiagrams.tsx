import React from 'react';

interface DiagramProps {
  onHover?: (info: string | null) => void;
}

export const BitcoinMiningWorkflowDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* Step 1: User Signs Transaction */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('1. Transaction Created: User signs inputs and recipient address with ECDSA private key')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="15" y="40" width="85" height="70" rx="6" className="fill-blue-100 dark:fill-blue-950 stroke-blue-600" strokeWidth="1.5" />
      <text x="57" y="65" textAnchor="middle" className="text-[10px] font-bold fill-blue-800 dark:fill-blue-200">1. Sign Tx</text>
      <text x="57" y="80" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Private Key</text>
      <text x="57" y="94" textAnchor="middle" className="text-[7px] font-mono fill-blue-600">secp256k1</text>
    </g>

    {/* Arrow 1 */}
    <line x1="100" y1="75" x2="125" y2="75" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Step 2: Mempool */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('2. Mempool: Unconfirmed transactions pool on full nodes waiting for inclusion')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="125" y="40" width="85" height="70" rx="6" className="fill-amber-100 dark:fill-amber-950 stroke-amber-600" strokeWidth="1.5" />
      <text x="167" y="65" textAnchor="middle" className="text-[10px] font-bold fill-amber-800 dark:fill-amber-200">2. Mempool</text>
      <text x="167" y="80" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Tx Buffer</text>
      <text x="167" y="94" textAnchor="middle" className="text-[7px] font-mono fill-amber-600">Fee sorted</text>
    </g>

    {/* Arrow 2 */}
    <line x1="210" y1="75" x2="235" y2="75" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Step 3: Block Candidate */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('3. Candidate Block: Miner packages transactions and calculates Merkle root')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="235" y="40" width="85" height="70" rx="6" className="fill-purple-100 dark:fill-purple-950 stroke-purple-600" strokeWidth="1.5" />
      <text x="277" y="65" textAnchor="middle" className="text-[10px] font-bold fill-purple-800 dark:fill-purple-200">3. Block Prep</text>
      <text x="277" y="80" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Merkle Root</text>
      <text x="277" y="94" textAnchor="middle" className="text-[7px] font-mono fill-purple-600">Prev Hash</text>
    </g>

    {/* Arrow 3 */}
    <line x1="320" y1="75" x2="345" y2="75" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Step 4: Mining Loop */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('4. PoW Hash Loop: Finding nonce such that SHA-256(SHA-256(Header)) < Target')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="345" y="40" width="85" height="70" rx="6" className="fill-orange-100 dark:fill-orange-950 stroke-orange-600" strokeWidth="2" />
      <text x="387" y="65" textAnchor="middle" className="text-[10px] font-bold fill-orange-800 dark:fill-orange-200">4. PoW Loop</text>
      <text x="387" y="80" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Nonce Trial</text>
      <text x="387" y="94" textAnchor="middle" className="text-[7px] font-mono fill-orange-600">Target Check</text>
    </g>

    {/* Arrow 4 */}
    <line x1="430" y1="75" x2="455" y2="75" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Step 5: Append to Chain */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('5. Blockchain Append: Valid block broadcast to all nodes; becomes immutable')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="455" y="40" width="70" height="70" rx="6" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-600" strokeWidth="1.5" />
      <text x="490" y="65" textAnchor="middle" className="text-[10px] font-bold fill-emerald-800 dark:fill-emerald-200">5. Chain</text>
      <text x="490" y="80" textAnchor="middle" className="text-[8px] fill-academic-600 dark:fill-academic-400">Confirmed</text>
      <text x="490" y="94" textAnchor="middle" className="text-[7px] font-mono fill-emerald-600">10m block</text>
    </g>

    {/* Chained Blocks Visualization (Bottom half) */}
    <rect x="25" y="145" width="490" height="95" rx="8" className="fill-academic-50 dark:fill-academic-900/60 stroke-academic-200 dark:stroke-academic-800" />
    <text x="40" y="165" className="text-xs font-bold fill-academic-700 dark:fill-academic-300">Blockchain Cryptographic Linked Structure</text>

    {/* Block N-1 */}
    <rect x="40" y="175" width="130" height="50" rx="4" className="fill-white dark:fill-academic-950 stroke-academic-300 dark:stroke-academic-700" />
    <text x="50" y="193" className="text-[10px] font-bold fill-academic-700 dark:fill-academic-300">Block #840,001</text>
    <text x="50" y="206" className="text-[8px] font-mono fill-academic-500">Hash: 000000..a4b2</text>
    <text x="50" y="217" className="text-[8px] font-mono fill-academic-400">Nonce: 2,891,440</text>

    {/* Pointer line */}
    <line x1="170" y1="200" x2="200" y2="200" stroke="#059669" strokeWidth="2" />

    {/* Block N */}
    <rect x="200" y="175" width="130" height="50" rx="4" className="fill-white dark:fill-academic-950 stroke-academic-300 dark:stroke-academic-700" />
    <text x="210" y="193" className="text-[10px] font-bold fill-academic-700 dark:fill-academic-300">Block #840,002</text>
    <text x="210" y="206" className="text-[8px] font-mono fill-emerald-600 font-semibold">Prev: 000000..a4b2</text>
    <text x="210" y="217" className="text-[8px] font-mono fill-academic-400">Nonce: 4,120,985</text>

    {/* Pointer line */}
    <line x1="330" y1="200" x2="360" y2="200" stroke="#059669" strokeWidth="2" />

    {/* Block N+1 */}
    <rect x="360" y="175" width="130" height="50" rx="4" className="fill-white dark:fill-academic-950 stroke-academic-300 dark:stroke-academic-700" />
    <text x="370" y="193" className="text-[10px] font-bold fill-academic-700 dark:fill-academic-300">Block #840,003</text>
    <text x="370" y="206" className="text-[8px] font-mono fill-emerald-600 font-semibold">Prev: 000000..89c1</text>
    <text x="370" y="217" className="text-[8px] font-mono fill-academic-400">Target verified</text>

    {/* Bottom summary text */}
    <text x="270" y="260" textAnchor="middle" className="text-[9px] font-mono fill-academic-500">
      Changing any historical transaction invalidates all downstream block hashes
    </text>
  </svg>
);

export const CryptoWalletsDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 280" className="w-full h-auto select-none">
    {/* Key Derivation Bar (Top) */}
    <rect x="20" y="15" width="500" height="55" rx="6" className="fill-indigo-50 dark:fill-indigo-950/40 stroke-indigo-400" strokeWidth="1.5" />
    <text x="35" y="35" className="text-[11px] font-bold fill-indigo-800 dark:fill-indigo-200">Asymmetric Cryptography Architecture</text>
    
    <text x="35" y="55" className="text-[9px] fill-academic-600 dark:fill-academic-400">
      Private Key (256-bit secret) ──[secp256k1 Curve]──&gt; Public Key ──[SHA256 + RIPEMD160]──&gt; Public Address (Shareable)
    </text>

    {/* Left Column: Hot Storage */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Hot Storage: Online, connected to internet; desktop, mobile, browser extensions (MetaMask, Trust Wallet)')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="85" width="240" height="155" rx="8" className="fill-amber-50 dark:fill-amber-950/30 stroke-amber-500" strokeWidth="1.5" />
      <text x="35" y="110" className="text-xs font-bold fill-amber-800 dark:fill-amber-300">🔥 Hot Storage (Online Wallets)</text>
      
      <rect x="35" y="125" width="210" height="30" rx="4" className="fill-white dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-700" />
      <text x="45" y="144" className="text-[10px] font-medium fill-academic-700 dark:fill-academic-300">Desktop & Browser (MetaMask)</text>

      <rect x="35" y="160" width="210" height="30" rx="4" className="fill-white dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-700" />
      <text x="45" y="179" className="text-[10px] font-medium fill-academic-700 dark:fill-academic-300">Mobile Apps (Trust Wallet)</text>

      <text x="35" y="210" className="text-[9px] fill-amber-700 dark:fill-amber-400 font-semibold">Pros: Instant 1-click DeFi & payments</text>
      <text x="35" y="225" className="text-[9px] fill-red-600 font-semibold">Cons: Exposed to malware & phishing</text>
    </g>

    {/* Right Column: Cold Storage */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Cold Storage: Offline physical isolation; Hardware wallets (Ledger, Trezor) and Paper wallets')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="280" y="85" width="240" height="155" rx="8" className="fill-cyan-50 dark:fill-cyan-950/30 stroke-cyan-500" strokeWidth="1.5" />
      <text x="295" y="110" className="text-xs font-bold fill-cyan-800 dark:fill-cyan-300">❄️ Cold Storage (Offline Wallets)</text>

      <rect x="295" y="125" width="210" height="30" rx="4" className="fill-white dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-700" />
      <text x="305" y="144" className="text-[10px] font-medium fill-academic-700 dark:fill-academic-300">Hardware Devices (Ledger, Trezor)</text>

      <rect x="295" y="160" width="210" height="30" rx="4" className="fill-white dark:fill-academic-900 stroke-academic-200 dark:stroke-academic-700" />
      <text x="305" y="179" className="text-[10px] font-medium fill-academic-700 dark:fill-academic-300">Paper Printouts (Physical QR)</text>

      <text x="295" y="210" className="text-[9px] fill-cyan-700 dark:fill-cyan-400 font-semibold">Pros: Immune to internet cyber attacks</text>
      <text x="295" y="225" className="text-[9px] fill-academic-500 font-semibold">Cons: Less convenient; costs $60-$200</text>
    </g>

    {/* Bottom summary text */}
    <rect x="20" y="250" width="500" height="20" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="264" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Rule of Thumb: Store 90% savings in Cold Storage; keep 10% daily spending in Hot Storage
    </text>
  </svg>
);

export const CustodialVsNonCustodialDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 270" className="w-full h-auto select-none">
    {/* Left: Custodial Exchange Model */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Custodial: Third-party holds private keys. User has account login, subject to exchange freezing or bankruptcy.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="25" width="235" height="195" rx="8" className="fill-rose-50 dark:fill-rose-950/30 stroke-rose-400" strokeWidth="1.5" />
      <text x="137" y="50" textAnchor="middle" className="text-xs font-bold fill-rose-800 dark:fill-rose-300">Custodial Wallet (Exchange)</text>
      
      {/* Centralized server icon/box */}
      <rect x="40" y="70" width="195" height="50" rx="4" className="fill-rose-100 dark:fill-rose-900 stroke-rose-500" />
      <text x="137" y="92" textAnchor="middle" className="text-[10px] font-bold fill-rose-900 dark:fill-rose-100">Exchange Centralized Server</text>
      <text x="137" y="106" textAnchor="middle" className="text-[8px] fill-rose-800 dark:fill-rose-200">Holds ALL Master Private Keys</text>

      <text x="40" y="145" className="text-[9px] fill-academic-600 dark:fill-academic-400">• User gets: Email/Password login</text>
      <text x="40" y="160" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Control: Exchange can freeze funds</text>
      <text x="40" y="175" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Recovery: Easy via email support</text>
      <text x="40" y="200" className="text-[9px] font-bold fill-rose-600">"Not your keys, not your coins"</text>
    </g>

    {/* Right: Non-Custodial Self-Custody Model */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Non-Custodial: True self-sovereignty. User holds 12-word seed phrase locally. Interacts directly with blockchain.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="285" y="25" width="235" height="195" rx="8" className="fill-emerald-50 dark:fill-emerald-950/30 stroke-emerald-400" strokeWidth="1.5" />
      <text x="402" y="50" textAnchor="middle" className="text-xs font-bold fill-emerald-800 dark:fill-emerald-300">Non-Custodial (Self-Custody)</text>

      {/* User device box */}
      <rect x="305" y="70" width="195" height="50" rx="4" className="fill-emerald-100 dark:fill-emerald-900 stroke-emerald-500" />
      <text x="402" y="92" textAnchor="middle" className="text-[10px] font-bold fill-emerald-900 dark:fill-emerald-100">User Device (MetaMask / Ledger)</text>
      <text x="402" y="106" textAnchor="middle" className="text-[8px] fill-emerald-800 dark:fill-emerald-200">12-Word Secret Seed Phrase</text>

      <text x="305" y="145" className="text-[9px] fill-academic-600 dark:fill-academic-400">• User gets: Exclusive mathematical keys</text>
      <text x="305" y="160" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Control: 100% sovereign censorship-free</text>
      <text x="305" y="175" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Recovery: Only with 12-word seed phrase</text>
      <text x="305" y="200" className="text-[9px] font-bold fill-emerald-600">"Your keys = Your sovereign coins"</text>
    </g>

    {/* Bottom summary text */}
    <rect x="20" y="235" width="500" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="249" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Examples: Custodial = Coinbase/Binance Account | Non-Custodial = MetaMask, Trust Wallet, Trezor
    </text>
  </svg>
);

export const CoinVsTokenDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 270" className="w-full h-auto select-none">
    {/* Left: Cryptocurrency Coin (Layer 1) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Cryptocurrency Coin: Operates on native Layer-1 blockchain (BTC, ETH, SOL). Requires miners/validators.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="25" width="235" height="195" rx="8" className="fill-blue-50 dark:fill-blue-950/30 stroke-blue-500" strokeWidth="1.5" />
      <text x="137" y="52" textAnchor="middle" className="text-xs font-bold fill-blue-800 dark:fill-blue-300">Native Coin (Layer 1)</text>

      <rect x="40" y="70" width="195" height="40" rx="4" className="fill-blue-200 dark:fill-blue-900 stroke-blue-600" />
      <text x="137" y="94" textAnchor="middle" className="text-[10px] font-bold fill-blue-950 dark:fill-blue-100">Dedicated Blockchain Ledger</text>

      <text x="40" y="130" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Created via: Mining (PoW) or Staking (PoS)</text>
      <text x="40" y="148" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Primary role: Base currency & gas fuel</text>
      <text x="40" y="166" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Overhead: High (requires bootstrapping nodes)</text>
      <text x="40" y="195" className="text-[10px] font-semibold fill-blue-600">Examples: Bitcoin (BTC), Ether (ETH)</text>
    </g>

    {/* Right: Cryptographic Token (Layer 2 / Smart Contract) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Cryptographic Token: Deployed on existing host blockchain via smart contract (ERC-20 USDT, LINK, UNI).')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="285" y="25" width="235" height="195" rx="8" className="fill-violet-50 dark:fill-violet-950/30 stroke-violet-500" strokeWidth="1.5" />
      <text x="402" y="52" textAnchor="middle" className="text-xs font-bold fill-violet-800 dark:fill-violet-300">Cryptographic Token (DApp Layer)</text>

      <rect x="305" y="70" width="195" height="40" rx="4" className="fill-violet-200 dark:fill-violet-900 stroke-violet-600" />
      <text x="402" y="94" textAnchor="middle" className="text-[10px] font-bold fill-violet-950 dark:fill-violet-100">Smart Contract on Host Chain</text>

      <text x="305" y="130" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Created via: Smart contract deployment</text>
      <text x="305" y="148" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Primary role: DApp utility, governance, USD peg</text>
      <text x="305" y="166" className="text-[9px] fill-academic-600 dark:fill-academic-400">• Standard: ERC-20, BEP-20, SPL</text>
      <text x="305" y="195" className="text-[10px] font-semibold fill-violet-600">Examples: Tether (USDT), Chainlink (LINK)</text>
    </g>

    {/* Bottom summary text */}
    <rect x="20" y="235" width="500" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="249" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Key Distinction: Coins have their own independent blockchain; Tokens piggyback on host blockchains
    </text>
  </svg>
);

export const ZerocashProofDiagram: React.FC<DiagramProps> = ({ onHover }) => (
  <svg viewBox="0 0 540 270" className="w-full h-auto select-none">
    {/* Left: Zerocoin (Burn & Redeem Link-Breaker) */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Zerocoin: Burns base BTC to mint private token; redeems fresh BTC later via zero-knowledge proof. 45 KB proof size.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="20" y="25" width="235" height="195" rx="8" className="fill-slate-50 dark:fill-slate-900 stroke-slate-400" strokeWidth="1.5" />
      <text x="137" y="48" textAnchor="middle" className="text-xs font-bold fill-slate-800 dark:fill-slate-200">Zerocoin (2013)</text>
      
      {/* 3 Step Flow */}
      <rect x="35" y="65" width="205" height="30" rx="4" className="fill-amber-100 dark:fill-amber-950 stroke-amber-500" />
      <text x="137" y="84" textAnchor="middle" className="text-[9px] font-bold fill-amber-900 dark:fill-amber-100">1. Burn Bitcoin → Mint Zerocoin</text>

      <rect x="35" y="105" width="205" height="30" rx="4" className="fill-blue-100 dark:fill-blue-950 stroke-blue-500" />
      <text x="137" y="124" textAnchor="middle" className="text-[9px] font-bold fill-blue-900 dark:fill-blue-100">2. Zero-Knowledge Accumulator Proof</text>

      <rect x="35" y="145" width="205" height="30" rx="4" className="fill-emerald-100 dark:fill-emerald-950 stroke-emerald-500" />
      <text x="137" y="164" textAnchor="middle" className="text-[9px] font-bold fill-emerald-900 dark:fill-emerald-100">3. Redeem Untraceable Bitcoin</text>

      <text x="35" y="195" className="text-[8px] font-mono fill-rose-600 font-semibold">⚠️ Limitation: Large proofs (~45 KB), slow verification</text>
    </g>

    {/* Right: Zerocash zk-SNARKs */}
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover?.('Zerocash: zk-SNARKs shielded transactions. Sender, receiver, and amount are all completely hidden. 288-byte proof.')}
      onMouseLeave={() => onHover?.(null)}
    >
      <rect x="285" y="25" width="235" height="195" rx="8" className="fill-teal-50 dark:fill-teal-950/40 stroke-teal-500" strokeWidth="1.5" />
      <text x="402" y="48" textAnchor="middle" className="text-xs font-bold fill-teal-800 dark:fill-teal-200">Zerocash / Zcash (2014-2016)</text>

      {/* Shielded Transaction Box */}
      <rect x="300" y="65" width="205" height="110" rx="6" className="fill-teal-150 dark:fill-teal-900/50 stroke-teal-600" />
      <text x="402" y="85" textAnchor="middle" className="text-[10px] font-bold fill-teal-900 dark:fill-teal-100">Shielded zk-SNARK Transaction</text>
      <text x="402" y="105" textAnchor="middle" className="text-[9px] fill-teal-800 dark:fill-teal-200">Sender: [HIDDEN 🔒]</text>
      <text x="402" y="122" textAnchor="middle" className="text-[9px] fill-teal-800 dark:fill-teal-200">Receiver: [HIDDEN 🔒]</text>
      <text x="402" y="139" textAnchor="middle" className="text-[9px] fill-teal-800 dark:fill-teal-200">Amount: [HIDDEN 🔒]</text>
      <text x="402" y="160" textAnchor="middle" className="text-[8px] font-mono font-bold fill-emerald-600">Proof Size: ~288 bytes (ms verify)</text>

      <text x="300" y="195" className="text-[8px] font-mono fill-teal-700 dark:fill-teal-300 font-semibold">✅ Full anonymity + arbitrary transacted amounts</text>
    </g>

    {/* Bottom summary text */}
    <rect x="20" y="235" width="500" height="22" rx="4" className="fill-academic-100 dark:fill-academic-900 stroke-academic-300 dark:stroke-academic-700" strokeWidth="1" />
    <text x="270" y="249" textAnchor="middle" className="text-[9px] font-mono fill-academic-700 dark:fill-academic-300">
      Zero-Knowledge Proof: Proves statement truth without revealing the underlying transaction data
    </text>
  </svg>
);
