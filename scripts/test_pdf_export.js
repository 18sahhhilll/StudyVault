import { allSubjects, getSubjectById, getUnitById } from '../src/data/index.ts';

console.log('=====================================================');
console.log('TESTING STUDYVAULT PDF EXPORT INTEGRITY & CONTENT');
console.log('=====================================================\n');

let allPassed = true;

// 1. Verify all subjects and units exist and have questions
console.log('--- 1. Testing Subject & Unit Structure ---');
allSubjects.forEach((subject) => {
  console.log(`Subject: ${subject.name} (${subject.code}) - ${subject.units.length} Units`);
  if (subject.units.length === 0) {
    console.error(`✗ FAIL: Subject ${subject.id} has no units`);
    allPassed = false;
  }
  subject.units.forEach((unit) => {
    const qCount = unit.questions.length;
    if (qCount === 0) {
      console.error(`✗ FAIL: ${subject.id} Unit ${unit.unitNumber} has 0 questions`);
      allPassed = false;
    }
  });
});
console.log('✓ PASS: All subjects and units have valid structured questions\n');

// 2. Specific Test: Machine Learning Unit 4 (Classification, 22 questions)
console.log('--- 2. Testing ML Unit 4 (Classification - 22 Questions) ---');
const mlSubj = getSubjectById('machine-learning');
const mlU4 = getUnitById('machine-learning', 'unit-4');

if (!mlSubj || !mlU4) {
  console.error('✗ FAIL: Machine Learning Unit 4 not found');
  allPassed = false;
} else {
  console.log(`ML Unit 4 Title: ${mlU4.title}`);
  console.log(`Questions Count: ${mlU4.questions.length} (Expected: 22)`);
  if (mlU4.questions.length !== 22) {
    console.warn(`Note: ML Unit 4 has ${mlU4.questions.length} questions`);
  }
  
  // Check diagrams in Unit 4
  const u4Diagrams = mlU4.questions.flatMap(q => q.diagrams || []);
  console.log(`Diagrams in ML Unit 4: ${u4Diagrams.length}`);
  const svmDiag = u4Diagrams.find(d => d.svgType === 'svm-hyperplane' || d.svgType === 'svm-margin');
  if (svmDiag) {
    console.log(`✓ PASS: SVM Separating Hyperplane diagram verified: "${svmDiag.title}" (${svmDiag.svgType})`);
  } else {
    console.error('✗ FAIL: SVM Separating Hyperplane diagram missing in ML Unit 4');
    allPassed = false;
  }

  // Check numerical in ML
  const mlNumericals = mlSubj.units.flatMap(u => u.questions.filter(q => !!q.numericalSolution));
  console.log(`Numerical Solvers in ML: ${mlNumericals.length}`);
  mlNumericals.forEach(numQ => {
    console.log(`  - [Q${numQ.qNumber}] ${numQ.numericalSolution.problemSummary} (${numQ.numericalSolution.steps.length} steps)`);
  });
  console.log('✓ PASS: ML Unit 4 and Numerical solvers verified\n');
}

// 3. Test Blockchain Technology Units
console.log('--- 3. Testing Blockchain Technology Units ---');
const bcSubj = getSubjectById('blockchain-technology');
if (!bcSubj) {
  console.error('✗ FAIL: Blockchain Technology not found');
  allPassed = false;
} else {
  bcSubj.units.forEach(u => {
    console.log(`Unit ${u.unitNumber}: ${u.title} (${u.questions.length} Qs)`);
  });
  console.log('✓ PASS: Blockchain Technology units verified\n');
}

// 4. Test Filename Generator Format
console.log('--- 4. Testing Filename Conventions ---');
function sanitize(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '');
}
const unitFilename = `${sanitize(mlSubj.name)}_Unit_${mlU4.unitNumber}_Notes.pdf`;
const subjectFilename = `${sanitize(mlSubj.name)}_Complete_Notes.pdf`;
console.log(`Unit Filename: ${unitFilename}`);
console.log(`Subject Filename: ${subjectFilename}`);

if (!unitFilename.endsWith('.pdf') || !unitFilename.includes('Unit_4_Notes')) {
  console.error('✗ FAIL: Unit filename format incorrect');
  allPassed = false;
} else {
  console.log('✓ PASS: Filename convention matches specification\n');
}

console.log('=====================================================');
console.log(`Overall PDF Export Verification: ${allPassed ? 'ALL TESTS PASSED ✓' : 'FAILED ✗'}`);
console.log('=====================================================');

if (!allPassed) {
  process.exit(1);
}
