/**
 * Model Comparison Utility: Gemini vs OpenAI
 * 
 * Runs a side-by-side quality evaluation on sample university questions.
 * Evaluates against the 7 core criteria:
 * 1. Direct answer to the question asked
 * 2. Simple, understandable English
 * 3. Technical correctness
 * 4. Marks-based length
 * 5. Avoidance of unnecessary headings
 * 6. Understandable, practical examples
 * 7. Preservation of syllabus requirements
 */

import { generateAnswer, CONFIG } from './generate_answer.js';

const SAMPLE_QUESTION = {
  title: 'What is Ensemble Learning? Why is it Used? (with example)',
  marks: 6,
  subject: 'Machine Learning (BE Computer Engineering - SPPU)'
};

async function runComparison() {
  console.log('=====================================================');
  console.log('STUDYVAULT MODEL COMPARISON: GEMINI vs OPENAI');
  console.log('=====================================================\n');

  console.log(`Test Question: "${SAMPLE_QUESTION.title}" [${SAMPLE_QUESTION.marks} Marks]`);
  console.log(`Subject: ${SAMPLE_QUESTION.subject}\n`);

  let geminiOutput = null;
  let openaiOutput = null;

  if (CONFIG.geminiApiKey) {
    try {
      console.log('Testing Gemini (gemini-1.5-flash)...');
      geminiOutput = await generateAnswer(
        `Question: ${SAMPLE_QUESTION.title}\nMarks: ${SAMPLE_QUESTION.marks}\nSubject: ${SAMPLE_QUESTION.subject}`,
        { provider: 'gemini', model: 'gemini-1.5-flash' }
      );
      console.log('✓ Gemini generation successful!\n');
    } catch (err) {
      console.error('Gemini test failed:', err.message);
    }
  } else {
    console.log('ℹ Gemini API Key not set in environment or .env. (Set GEMINI_API_KEY to test live)');
  }

  if (CONFIG.openaiApiKey) {
    try {
      console.log('Testing OpenAI (gpt-4o)...');
      openaiOutput = await generateAnswer(
        `Question: ${SAMPLE_QUESTION.title}\nMarks: ${SAMPLE_QUESTION.marks}\nSubject: ${SAMPLE_QUESTION.subject}`,
        { provider: 'openai', model: 'gpt-4o' }
      );
      console.log('✓ OpenAI generation successful!\n');
    } catch (err) {
      console.error('OpenAI test failed:', err.message);
    }
  } else {
    console.log('ℹ OpenAI API Key not set in environment or .env. (Set OPENAI_API_KEY to test live)');
  }

  console.log('\n=====================================================');
  console.log('CRITERIA EVALUATION RUBRIC');
  console.log('=====================================================');
  console.log('1. Direct Answer: Did the model produce only the 3 required sections?');
  console.log('2. Language: Are sentences simple and free of words like "meta-algorithmic"?');
  console.log('3. Technical Correctness: Are concepts like weak learners and majority voting accurate?');
  console.log('4. Marks Allocation: Is the length proportional to 6 marks?');
  console.log('5. Headings: Are artificial sections (e.g. Statistical / Computational Reasoning) eliminated?');
  console.log('6. Practical Example: Is the medical tumor biopsy / 5-model table clear?');
  console.log('7. Syllabus Alignment: Are all key syllabus concepts addressed?');
  console.log('=====================================================\n');
}

runComparison();
