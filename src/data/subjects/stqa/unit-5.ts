import { Unit } from '@/types';

export const unit5Data: Unit = {
  id: 'unit-5',
  unitNumber: 5,
  title: 'Unit V: Test Automation and Automation Tools',
  shortTitle: 'Test Automation & Selenium',
  description: 'Study of Test Automation Fundamentals, Manual vs Automated Testing, Automation Life Cycle, Tool Selection Criteria, Selenium Suite (IDE, RC, WebDriver, Grid), Robotic Process Automation (RPA), and Apache JMeter Performance Testing.',
  syllabus: [
    'Test Automation: Fundamentals, Benefits, Limitations, Manual vs Automation',
    'Automated Testing Process and Lifecycle Framework',
    'Criteria for Choosing an Automation Testing Tool',
    'Selenium Tool Suite: Architecture, Selenium IDE, Selenium RC, Selenium WebDriver, Selenium Grid',
    'Robotic Process Automation (RPA) in Software Testing',
    'Performance Testing Tools: Apache JMeter Architecture and Working'
  ],
  questionPaperIndex: [
    { paper: 'April 2023 ([6004]-491)', qMain: 'Q5(a) Automation Testing (6M), Q5(b) Selenium IDE (6M), Q5(c) Selenium WebDriver (6M)', qOr: 'Q6(a) Benefits of Automation (6M), Q6(b) Automated Process (6M), Q6(c) RPA (6M)' },
    { paper: 'Nov 2023 ([6181]-112)', qMain: 'Q5(a) Choose Automation Tool (6M), Q5(b) Selenium Suite (6M), Q5(c) RPA (6M)', qOr: 'Q6(a) Automated Process (6M), Q6(b) Selenium RC (6M), Q6(c) Selenium Grid (6M)' },
    { paper: 'April 2024 ([6263]-92)', qMain: 'Q5(a) Manual vs Automation (6M), Q5(b) Benefits (6M), Q5(c) Performance Testing (6M)', qOr: 'Q6(a) Automation Testing (6M), Q6(b) Automated Process (6M), Q6(c) Apache JMeter (6M)' },
    { paper: 'May 2024 ([6404]-92)', qMain: 'Q5(a) Performance Testing (6M), Q5(b) Selenium Suite (6M), Q5(c) Selenium WebDriver (6M)', qOr: 'Q6(a) RPA (6M), Q6(b) Choose Automation Tool (6M), Q6(c) Selenium Grid (6M)' },
    { paper: 'Nov 2024 ([6584]-102)', qMain: 'Q5(a) Automation Benefits (6M), Q5(b) Performance Testing (6M), Q5(c) Automated Process (6M)', qOr: 'Q6(a) Manual Process (6M), Q6(b) RPA (6M), Q6(c) Selenium IDE (6M)' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Test Automation', definition: 'The use of specialized software tools to control test execution, compare actual vs expected outcomes, and set preconditions.' },
      { term: 'Selenium WebDriver', definition: 'A browser automation framework that accepts commands and sends them directly to native browser drivers via HTTP.' },
      { term: 'Selenium Grid', definition: 'A distributed testing tool allowing parallel test execution across multiple remote physical/virtual machines and browsers.' },
      { term: 'RPA', definition: 'Robotic Process Automation; using software robots (bots) to mimic human interactions with digital systems for repetitive UI workflows.' }
    ],
    coreFormulas: [
      { name: 'Automation ROI', latex: '\\text{ROI} = \\frac{\\text{Manual Test Cost} - \\text{Automated Test Cost}}{\\text{Automated Test Cost}} \\times 100\\%' }
    ],
    comparisonHighlights: [
      { title: 'Manual vs Automation Testing', summary: 'Manual is flexible and human-centered; Automation is fast, repeatable, and essential for regression.' },
      { title: 'Selenium IDE vs WebDriver', summary: 'IDE is record-and-playback for quick prototypes; WebDriver provides programmatic cross-browser control.' }
    ],
    examTips: [
      'Remember that "Selenium IQE" in SPPU papers refers to Selenium IDE (Integrated Development Environment).',
      'Draw the Hub-and-Node architecture when answering questions on Selenium Grid.',
      'Highlight criteria for tool selection: project budget, technology stack, team skill, and test maintenance.'
    ]
  },
  questions: []
};
