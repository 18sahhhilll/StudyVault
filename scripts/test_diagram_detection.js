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
  },
  {
    q: 'SVM Terms: Separating Hyperplane and Margin',
    marks: 6,
    expectedRequired: true,
    expectedType: 'svm-hyperplane'
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
console.log(`Diagram Detection Tests: ${allPassed ? 'ALL TESTS PASSED ✓' : 'SOME TESTS FAILED ✗'}`);
console.log('=====================================================\n');

if (!allPassed) {
  process.exit(1);
}

// 2. Comprehensive Audit: Verify every svgType in subject data has a renderer in TechnicalDiagram.tsx
console.log('=====================================================');
console.log('AUDITING ALL SUBJECT SVG TYPES AGAINST RENDERERS');
console.log('=====================================================\n');

import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const subjectFiles = walk('src/data/subjects');
const usedSvgTypes = new Map();

for (const file of subjectFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /['"]?svgType['"]?\s*:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const svgType = match[1];
    if (!usedSvgTypes.has(svgType)) {
      usedSvgTypes.set(svgType, []);
    }
    usedSvgTypes.get(svgType).push(file);
  }
}

const diagramFiles = walk('src/components/diagrams');
let allDiagramCode = '';
for (const file of diagramFiles) {
  allDiagramCode += fs.readFileSync(file, 'utf8') + '\n';
}

const missingSvgTypes = [];
for (const [svgType, files] of usedSvgTypes.entries()) {
  const regex = new RegExp(`['"]${svgType}['"]`);
  if (!regex.test(allDiagramCode)) {
    missingSvgTypes.push({ svgType, sampleFile: files[0] });
  }
}

if (missingSvgTypes.length > 0) {
  console.error(`✗ FAIL: ${missingSvgTypes.length} svgType(s) missing from TechnicalDiagram.tsx:`);
  console.error(JSON.stringify(missingSvgTypes, null, 2));
  process.exit(1);
} else {
  console.log(`✓ PASS: All ${usedSvgTypes.size} unique subject diagram svgTypes have active renderers!`);
  console.log('No fallback placeholder icons will be displayed in production.\n');
}
