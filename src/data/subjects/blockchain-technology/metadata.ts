import { Subject } from '@/types';

export const blockchainMetadata: Omit<Subject, 'units'> = {
  id: 'blockchain-technology',
  code: 'CS603',
  name: 'Blockchain Technology',
  semester: 'Semester VI',
  department: 'Computer Science & Engineering',
  description: 'Comprehensive university examination question bank and structured technical notes covering Blockchain Platforms & Consensus, Cryptocurrencies & Wallets, Ethereum Platform with Solidity, and Enterprise Case Studies.',
  iconName: 'Link2',
  accentColor: 'emerald',
  syllabusOverview: [
    'Unit 3: Blockchain Platforms and Consensus (Bitcoin, Ethereum, Corda, Hyperledger, IOTA, PoW, PoS, PoA, PoB, Byzantine Generals Problem)',
    'Unit 4: Cryptocurrency, Bitcoin and Token (Wallets, Hot/Cold, Custodial/Non-Custodial, MetaMask, Coinbase vs Binance, Zerocash, Tokenomics)',
    'Unit 5: Blockchain Ethereum Platform using Solidity (EVM, Smart Contracts, Gas, Swarm, Whisper, Solidity Syntax, Networks)',
    'Unit 6: Blockchain Case Studies (Supply Chain, Healthcare EHR, Banking, IoT, Government, P2P Energy Trading, Voting, Cloud BaaS)'
  ]
};
