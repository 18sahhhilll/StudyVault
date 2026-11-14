import { detectDiagramRequirement } from './generate_answer.js';

const TEST_CASES = [
  {
    q: 'Explain the Automated Testing Process/Lifecycle in Detail with a Neat Diagram.',
    marks: 6,
    expectedRequired: true,
    expectedType: 'automated-testing-lifecycle'
  },
  {
    q: 'What is Selenium WebDriver? Explain its Architecture.',
    marks: 6,
    expectedRequired: true,
    expectedType: 'selenium-webdriver-architecture'
  },
  {
    q: 'Explain CNN Architecture.',
    marks: 6,
    expectedRequired: true,
    expectedType: 'cnn-architecture'
  },
  {
    q: 'Explain the Advantages of Automation Testing.',
    marks: 6,
    expectedRequired: false
  },
  {
    q: 'Define Regression.',
    marks: 2,
    expectedRequired: false
  },
  {
    q: 'Explain the working of a Neural Network.',
    marks: 6,
    expectedRequired: true,
    expectedType: 'neural-network-working'
  }
];

console.log('=====================================================');
console.log('RUNNING QUESTION-AWARE DIAGRAM DETECTION TESTS');
console.log('=====================================================\n');

let allPassed = true;

TEST_CASES.forEach((tc, idx) => {
  const result = detectDiagramRequirement(tc.q, tc.marks);
  const passRequired = result.required === tc.expectedRequired;
  const passType = !tc.expectedType || result.matchedTopic === tc.expectedType;
  const passed = passRequired && passType;

  if (!passed) allPassed = false;

  console.log(`Test ${idx + 1}: "${tc.q}" [${tc.marks}M]`);
  console.log(`  -> Detected Required: ${result.required} (Expected: ${tc.expectedRequired})`);
  console.log(`  -> Reason: ${result.reason}`);
  if (result.matchedTopic) {
    console.log(`  -> Matched Diagram Type: ${result.matchedTopic}`);
  }
  console.log(`  -> Status: ${passed ? '✓ PASS' : '✗ FAIL'}\n`);
});

console.log('=====================================================');
console.log(`Overall Test Result: ${allPassed ? 'ALL TESTS PASSED ✓' : 'SOME TESTS FAILED ✗'}`);
console.log('=====================================================');

if (!allPassed) {
  process.exit(1);
}
