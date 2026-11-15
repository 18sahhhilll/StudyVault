import { detectFormatRequirement, detectDiagramRequirement } from './generate_answer.js';

const TEST_CASES = [
  {
    q: 'Advantages and Disadvantages of KNN',
    marks: 6,
    expectedFormat: 'separate-numbered-lists',
    expectedTableAllowed: false,
    expectedDiagram: false
  },
  {
    q: 'Difference Between Batch and Stochastic Gradient Descent',
    marks: 6,
    expectedFormat: 'comparison-table',
    expectedTableAllowed: true,
    expectedDiagram: false
  },
  {
    q: 'Features of Neural Networks',
    marks: 6,
    expectedFormat: 'numbered-points',
    expectedTableAllowed: false,
    expectedDiagram: false
  },
  {
    q: 'Applications of Machine Learning',
    marks: 6,
    expectedFormat: 'numbered-points',
    expectedTableAllowed: false,
    expectedDiagram: false
  },
  {
    q: 'Compare CNN and RNN',
    marks: 6,
    expectedFormat: 'comparison-table',
    expectedTableAllowed: true,
    expectedDiagram: false
  },
  {
    q: 'Benefits and Limitations of Automation Testing',
    marks: 6,
    expectedFormat: 'separate-numbered-lists',
    expectedTableAllowed: false,
    expectedDiagram: false
  },
  {
    q: 'Explain Selenium WebDriver Architecture with a neat diagram',
    marks: 6,
    expectedTableAllowed: false,
    expectedDiagram: true
  }
];

console.log('=====================================================');
console.log('RUNNING TABLE USAGE & PRESENTATION FORMAT TESTS');
console.log('=====================================================\n');

let allPassed = true;

TEST_CASES.forEach((tc, idx) => {
  const formatRes = detectFormatRequirement(tc.q, tc.marks);
  const diagRes = detectDiagramRequirement(tc.q, tc.marks);

  const formatPass = !tc.expectedFormat || formatRes.type === tc.expectedFormat;
  const tablePass = formatRes.tableAllowed === tc.expectedTableAllowed;
  const diagPass = diagRes.required === tc.expectedDiagram;

  const passed = formatPass && tablePass && diagPass;
  if (!passed) allPassed = false;

  console.log(`Test ${idx + 1}: "${tc.q}" [${tc.marks}M]`);
  console.log(`  -> Format Type: ${formatRes.type} (Expected: ${tc.expectedFormat || 'any'})`);
  console.log(`  -> Table Allowed: ${formatRes.tableAllowed} (Expected: ${tc.expectedTableAllowed})`);
  console.log(`  -> Diagram Required: ${diagRes.required} (Expected: ${tc.expectedDiagram})`);
  console.log(`  -> Description: ${formatRes.description}`);
  console.log(`  -> Status: ${passed ? '✓ PASS' : '✗ FAIL'}\n`);
});

console.log('=====================================================');
console.log(`Overall Test Result: ${allPassed ? 'ALL TESTS PASSED ✓' : 'SOME TESTS FAILED ✗'}`);
console.log('=====================================================');

if (!allPassed) {
  process.exit(1);
}
