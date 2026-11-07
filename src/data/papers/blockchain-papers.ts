import { QuestionPaper } from '@/types';

export const blockchainQuestionPapers: QuestionPaper[] = [
  // Paper 1: April / May 2023
  {
    id: 'bc-april-2023',
    subjectId: 'blockchain-technology',
    subjectName: 'Blockchain Technology',
    subjectCode: '410243',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'April / May 2023',
    paperCode: '[6004]-482',
    paperSubCode: 'P547',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Attempt Q.1 or Q.2, Q.3 or Q.4, Q.5 or Q.6, Q.7 or Q.8.',
      'Figures to the right side indicate full marks.',
      'Neat diagrams must be drawn wherever necessary.',
      'Assume suitable data, if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Blockchain Platforms and Consensus',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Explain in details:\ni) Bitcoin\nii) Hyperledger',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q1',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Explain types of Blockchain in details?',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q9',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q1(c)',
              text: 'Explain in details any one consensus or mining algorithm.',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q13',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'List different consensus algorithms used in Blockchain Technology. Explain any two algorithms in detail.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q12',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Write a note on Corda and R3 consortium.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q6',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q2(c)',
              text: 'Explain Byzantine General problem.',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q17',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Crypto Wallets and Cryptography',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Write a note on Bitcoin.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q1',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q3(b)',
              text: 'Describe Token in details with example?',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q6',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q3(c)',
              text: 'Define types of crypto currencies.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q3',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'Difference between Coinbase and Binance.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q13',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Explain in details crypto wallets.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q8',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q4(c)',
              text: 'Write a note on Coinbase.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q12',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Ethereum and Solidity',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'Discuss what is Ethereum.',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q1',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q5(b)',
              text: 'Explain In Details Whisper?',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q10',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q5(c)',
              text: 'Define the purpose and types of Smart Contracts.',
              marks: 4,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q6',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'Write a note on Ethereum Virtual Machine (EVM).',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q11',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Write a note on Swarm.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q9',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q6(c)',
              text: 'What is a smart contract? Explain with an example.',
              marks: 4,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Blockchain Applications and Case Studies',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'Explain use of Blockchain in retail.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q5',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q7(b)',
              text: 'List and explain benefits of using Blockchain in Government sector.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q7(c)',
              text: 'List and explain any two Blockchain applications.',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q1',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Discuss use of Blockchain in Healthcare.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q7',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q8(b)',
              text: 'List and explain any two applications of Blockchain in retail.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q5',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q8(c)',
              text: 'Explain how Blockchain can be used in Financial services.',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q6',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      }
    ]
  },

  // Paper 2: April / May 2024
  {
    id: 'bc-april-2024',
    subjectId: 'blockchain-technology',
    subjectName: 'Blockchain Technology',
    subjectCode: '410243',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'April / May 2024',
    paperCode: '[6263]-83',
    paperSubCode: 'PB2245',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Solve questions Q.1 or Q.2, Q.3 or Q.4, Q.5 or Q.6, Q.7 or Q.8.',
      'Neat diagrams must be drawn wherever necessary.',
      'Figures to the right indicate full marks.',
      'Assume suitable data if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Blockchain Platforms and Consensus',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Discuss following consensus algorithms used in blockchain technology:\ni) Proof of work\nii) Proof of activity\niii) Proof of Burn\niv) Proof of Stake',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q12',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Explain in detail:\ni) Bitcoin\nii) Ethereum\niii) Hyperledger',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q1',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q1(c)',
              text: 'Explain the concept of Bitcoin in Blockchain Technology.',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q1',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'Discuss the difference between Bitcoin and Ethereum.',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q3',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Explain the difference between a permissioned and permissionless consensus approach.',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q10',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q2(c)',
              text: 'Explain the Byzantine General Problem in the context of blockchain consensus.',
              marks: 4,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q17',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q2(d)',
              text: 'Explain the role of IOTA in the context of the Internet of Things (IoT).',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q8',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Crypto Wallets and Cryptography',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'What is Metamask, Illustrate in details.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q11',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q3(b)',
              text: 'List and explain types of cryptocurrencies.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q3',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'Compare and Contrast Coinbase and Binance.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q13',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Differentiate between metamask and coinbase wallet.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q14',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Ethereum and Solidity',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'What is Ethereum? Explain in detail it differs from traditional cryptocurrencies.',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q1',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q5(b)',
              text: 'Identify two types of Ethereum networks and briefly explain the purpose of each.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q4',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'Explain the concept of a smart contract with an example.',
              marks: 8,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q6(b)',
              text: 'How does Swarm contribute to decentralized storage in the Ethereum ecosystem?',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q9',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Blockchain Applications and Case Studies',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'Describe the role of blockchain in financial sector.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q6',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q7(b)',
              text: 'Describe the role of blockchain in Government sector.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Explain role of blockchain in healthcare.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q7',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q8(b)',
              text: 'Discuss potential challenges and benefits of implementing blockchain in Voting system.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q10',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      }
    ]
  },

  // Paper 3: In-Sem / May 2024 Exam
  {
    id: 'bc-insem-may-2024',
    subjectId: 'blockchain-technology',
    subjectName: 'Blockchain Technology',
    subjectCode: '410243',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'In-Sem Exam May 2024',
    paperCode: '[6404]-83',
    paperSubCode: 'PD4578',
    examType: 'In Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Answer Q.1 or Q.2, Q.3 or Q.4, Q.5 or Q.6 and Q.7 or Q.8.',
      'Neat diagram must be drawn whenever necessary.',
      'Figure to the right indicate full marks.',
      'Assume suitable data, if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Blockchain Platforms and Consensus',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'State and discuss bitcoin mining? Elaborate the functionality of miners.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q4',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Describe the features of Corda Block chain? Justify how makes it so different? Elaborate CorDapps?',
              marks: 9,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q6',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'Give the different types of block chain. State their advantages and disadvantages.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q9',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Illustrate 5 different types of consensus algorithm with example.',
              marks: 9,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q12',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Crypto Wallets and Cryptography',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Enlist and discuss types of cryptocurrency. “Is cryptocurrency safe?” Justify according to your opinion.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q4',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q3(b)',
              text: 'Describe Zero coin and its successor Zero cash in details.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q5',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'Compare Custodial and non-custodial cryptowallets.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q9',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Define the term Hot wallet storage and Cold Wallet storage. Discuss Meta mask and its importance along with its various benefits and drawbacks.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q10',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Ethereum and Solidity',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'Enlist features of Ethereum. Compare Ethereum Mainnet, Testnet, and Private Networks.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q4',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q5(b)',
              text: 'Define smart contracts with an example of a real-world scenario which will evaluate its benefits. Discuss the role of gas in the Ethereum network and its significance in smart contract execution.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'List Decentralized Messaging Platform. Discuss Whisper and its purpose in the Ethereum ecosystem.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q10',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Discuss in brief two types of smart contracts commonly used on the Ethereum platform. Elaborate the basic steps involved in deploying a smart contract on the Ethereum block chain.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q8',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Blockchain Applications and Case Studies',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'List the prominent block chain application. Explain in detail any one with the architecture.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q1',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q7(b)',
              text: 'Discuss in brief how cyber hack can be reduced for Digital identity using block chain.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q3',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Elaborate the use of block chain technology in the government sector. Which are the different block chain based applications available/proposed for it?',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q8(b)',
              text: 'Discuss the impact made by block chain with IOT and Block chain in banking.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q8',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      }
    ]
  },

  // Paper 4: November / December 2023
  {
    id: 'bc-nov-2023',
    subjectId: 'blockchain-technology',
    subjectName: 'Blockchain Technology',
    subjectCode: '410243',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'November / December 2023',
    paperCode: '[6181]-103',
    paperSubCode: 'P6553',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Attempt Q1 or Q2, Q3 or Q4, Q5 or Q6, Q7 or Q8.',
      'Figures to the right side indicate full marks.',
      'Neat diagram must be drawn wherever necessary.',
      'Assume suitable data if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Blockchain Platforms and Consensus',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Explain any two:\ni) R3\nii) Ethereum\niii) Hyperledger\niv) Corda',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q5',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Explain Proof of work with example.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q13',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q1(c)',
              text: 'What is Byzantine General Problem? Explain its significance.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q17',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'Explain any two Blockchain platforms:\ni) Public\nii) Private\niii) Consortium',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q9',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Explain proof of stake with example.',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q14',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q2(c)',
              text: 'What is consensus in Blockchain?',
              marks: 6,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q11',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Crypto Wallets and Cryptography',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Discuss the concept of Cryptowallets?',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q8',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q3(b)',
              text: 'Discuss types of cryptocurrency?',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q3',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q3(c)',
              text: 'What is Metamask?',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q11',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'Compare Coinbase and Binance.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q13',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q4(b)',
              text: 'What is the relevance of Crypto Usage. Discuss with example.',
              marks: 6,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q7',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q4(c)',
              text: 'What is bitcoin? Explain in detail.',
              marks: 5,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q1',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Ethereum and Solidity',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'What is ethereum? What are the types of ethereum?',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q1',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q5(b)',
              text: 'Explain SWARM (Decentralized storage platform) in detail.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q9',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q5(c)',
              text: 'What is the concept of smart contract? Discuss its types.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'What is the significance of EVM (Ethereum Virtual Machine)?',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q11',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Explain Whisper (Decentralized Messaging platform).',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q10',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q6(c)',
              text: 'Discuss how smart contracts are implemented using solidity.',
              marks: 6,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q12',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Blockchain Applications and Case Studies',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'Discuss any use case of Blockchain integration with any other domain like cloud.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q11',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q7(b)',
              text: 'Explain use of Blockchain in Energy and utilities.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q9',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q7(c)',
              text: 'Explain use of Blockchain in health sector.',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q7',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Discuss any use case of Blockchain integration with any other domain like Internet of things (IoT) etc.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q8',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q8(b)',
              text: 'What is the significance of adoption of Blockchain in banking and financial services.',
              marks: 6,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q6',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q8(c)',
              text: 'Explain any one application of Blockchain in Government sector.',
              marks: 5,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      }
    ]
  },

  // Paper 5: November / December 2024
  {
    id: 'bc-nov-2024',
    subjectId: 'blockchain-technology',
    subjectName: 'Blockchain Technology',
    subjectCode: '410243',
    pattern: '2019 Pattern',
    semester: 'Semester VII',
    monthYear: 'November / December 2024',
    paperCode: '[6354]-487',
    paperSubCode: 'PC-2370',
    examType: 'End Semester',
    maxMarks: 70,
    duration: '2½ Hours',
    instructions: [
      'Solve questions Q1 or Q2, Q3 or Q4, Q5 or Q6, Q7 or Q8.',
      'Neat diagrams must be drawn wherever necessary.',
      'Figures to the right indicate full marks.',
      'Assume suitable data, if necessary.'
    ],
    pairs: [
      {
        pairNumber: 1,
        pairTitle: 'Unit III: Blockchain Platforms and Consensus',
        unitNumber: 3,
        mainQuestion: {
          questionNumber: 'Q1',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q1(a)',
              text: 'Discuss in brief Bitcoin and Ethereum cryptocurrencies.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q3',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q1(b)',
              text: 'Explain following:\ni) Proof of work\nii) Proof of stake and\niii) Proof of activity',
              marks: 9,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q12',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q2',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q2(a)',
              text: 'List and explain types of Blockchain.',
              marks: 8,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q9',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q2(b)',
              text: 'Explain Byzantine general problem scenario. Explain the problem and its probable consequences.',
              marks: 9,
              unitNumber: 3,
              unitTitle: 'Blockchain Platforms and Consensus',
              mappedQuestionId: 'bc-u3-q17',
              mappedUnitId: 'unit-3',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 2,
        pairTitle: 'Unit IV: Crypto Wallets and Cryptography',
        unitNumber: 4,
        mainQuestion: {
          questionNumber: 'Q3',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q3(a)',
              text: 'Differentiate between Coinbase and Binance.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q13',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q3(b)',
              text: 'What is Metamask? Discuss any one application of Metamask.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q11',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q4',
          totalMarks: 17,
          subQuestions: [
            {
              subNumber: 'Q4(a)',
              text: 'List and explain types of crypto wallet.',
              marks: 8,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q8',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q4(b)',
              text: 'Write a note on Bitcoin.',
              marks: 9,
              unitNumber: 4,
              unitTitle: 'Crypto Wallets and Cryptography',
              mappedQuestionId: 'bc-u4-q1',
              mappedUnitId: 'unit-4',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 3,
        pairTitle: 'Unit V: Ethereum and Solidity',
        unitNumber: 5,
        mainQuestion: {
          questionNumber: 'Q5',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q5(a)',
              text: 'What is Swarm, and how does it address the need for decentralized storage in the Ethereum network?',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q9',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q5(b)',
              text: 'What is Ethereum? Define smart contracts and give an example of a real-world scenario where a smart contract could be beneficial.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q5',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q6',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q6(a)',
              text: 'State and explain the various components of Ethereum. Explain the various types of Ethereum Networks.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q3',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q6(b)',
              text: 'Explain Decentralized Messaging Platform - Whisper and its purpose in the Ethereum ecosystem.',
              marks: 9,
              unitNumber: 5,
              unitTitle: 'Ethereum and Solidity',
              mappedQuestionId: 'bc-u5-q10',
              mappedUnitId: 'unit-5',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      },
      {
        pairNumber: 4,
        pairTitle: 'Unit VI: Blockchain Applications and Case Studies',
        unitNumber: 6,
        mainQuestion: {
          questionNumber: 'Q7',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q7(a)',
              text: 'With the help of neat diagram explain how blockchain can be used for any supply chain application.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q2',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q7(b)',
              text: 'Explain the use of blockchain technology in the government sector. Which are the different blockchain based applications proposed for it?',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q4',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        },
        orQuestion: {
          questionNumber: 'Q8',
          totalMarks: 18,
          subQuestions: [
            {
              subNumber: 'Q8(a)',
              text: 'Explain how blockchain and IOT can work together.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q8',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            },
            {
              subNumber: 'Q8(b)',
              text: 'List out the applications of blockchain Technology in different areas. Explain any 2 in detail.',
              marks: 9,
              unitNumber: 6,
              unitTitle: 'Blockchain Applications and Case Studies',
              mappedQuestionId: 'bc-u6-q1',
              mappedUnitId: 'unit-6',
              mappedSubjectId: 'blockchain-technology'
            }
          ]
        }
      }
    ]
  }
];
