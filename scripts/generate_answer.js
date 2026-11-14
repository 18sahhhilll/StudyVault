/**
 * StudyVault Answer Generation & Rewriting Pipeline
 * 
 * Supports configurable LLM providers:
 * - Google Gemini (gemini-1.5-flash, gemini-1.5-pro, gemini-2.0-flash-exp)
 * - OpenAI (gpt-4o, gpt-4o-mini)
 * 
 * Complies strictly with University Examination rules:
 * - Answers ONLY what is actually asked.
 * - Simple English for BE Computer Engineering students.
 * - Marks-based length and 2-5 sections max.
 * - Replaces bloated academic jargon with direct, understandable explanations.
 */

import fs from 'fs';
import path from 'path';

// 1. Simple .env loader if present
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

// Configuration
export const CONFIG = {
  provider: process.env.LLM_PROVIDER || 'gemini', // 'gemini' | 'openai'
  model: process.env.LLM_MODEL || (process.env.LLM_PROVIDER === 'openai' ? 'gpt-4o' : 'gemini-1.5-flash'),
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
};

// System Prompt enforcing the Golden Rule & SPPU BE Computer Engineering exam criteria
export const EXAM_SYSTEM_PROMPT = `
You are an expert Computer Engineering professor writing model exam answers for Savitribai Phule Pune University (SPPU) BE Computer Engineering students.

THE GOLDEN RULE:
ANSWER THE QUESTION THAT IS ACTUALLY ASKED.
Do not follow a rigid fixed template for every question.
Do not convert answers into bloated multi-page essays.
Do not add unnecessary sections like "Foundational Rationale", "Statistical Reasoning", "Computational Reasoning", "Representational Reasoning", or "Meta-algorithmic framework".
The question itself must strictly dictate the structure and contents.

LANGUAGE & VOCABULARY RULES:
- Use simple, clear, professional English.
- Avoid unnecessarily complicated words.
  - DO NOT USE: "Meta-algorithmic framework", "Strategically combines", "Constituent predictive models", "Superior predictive robustness", "Irreducible computational architecture", "Hypothesis-space expansion", "Statistical aggregation mechanisms".
  - USE INSTEAD: "Technique", "Method", "Combines", "Models", "Predictions", "Accuracy", "Performance", "Error", "Training data", "Testing data".
- Explain one point at a time with short, complete sentences.
- Use numbered points for reasons, steps, and advantages.

MARKS-BASED LENGTH:
- 2-3 marks: Direct definition and 2-3 important points (concise).
- 4-5 marks: Definition, explanation, and clear points/example.
- 6-8 marks: Clear definition, working/steps, 2-column comparison or simple practical example, and quick revision.
- 10 marks: Comprehensive answer with all requested parts.

QUESTION ADAPTATION:
- "What is X? Why is it used? (with example)":
  1. What is X? (Definition + In simple words)
  2. Why is X used? (Numbered direct reasons)
  3. Practical Example (e.g. 5 models voting on tumor diagnosis)
  4. Quick Revision (4-5 bullet points)
- "Differentiate between X and Y":
  1. Brief 1-line introduction
  2. Direct 2-column comparison table (Parameter/Feature vs Comparison points)
  3. Brief conclusion if helpful
- "Explain X with an example":
  1. Definition & simple explanation
  2. Working / Step-by-step algorithm
  3. Concrete practical example with step-by-step resolution
  4. Quick Revision
- "Write a short note on X":
  1. Definition
  2. Working / Key characteristics
  3. Applications or types
  4. Quick Revision

JSON OUTPUT FORMAT:
You must output ONLY valid JSON matching this structure:
{
  "definition": "Clear, simple 1-2 sentence definition",
  "sections": [
    {
      "title": "Section Title",
      "content": [
        "Point 1",
        "Point 2"
      ],
      "formulas": [
        { "name": "Formula Name", "latex": "\\\\text{LaTeX formula}" }
      ],
      "table": {
        "headers": ["Col 1", "Col 2"],
        "rows": [
          { "parameter": "Row 1", "col1": "Val 1" }
        ]
      }
    }
  ],
  "summary": [
    "Quick revision bullet point 1",
    "Quick revision bullet point 2",
    "Quick revision bullet point 3",
    "Quick revision bullet point 4"
  ],
  "keyPoints": [
    "Keyword 1",
    "Keyword 2",
    "Keyword 3"
  ]
}
`;

/**
 * Call Gemini REST API
 */
async function callGemini(prompt, model = CONFIG.model, apiKey = CONFIG.geminiApiKey) {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in environment or .env');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  
  const body = {
    contents: [
      {
        role: 'user',
        parts: [{ text: `${EXAM_SYSTEM_PROMPT}\n\nTask:\n${prompt}` }]
      }
    ],
    generationConfig: {
      temperature: 0.2,
      responseMimeType: 'application/json'
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API Error [${response.status}]: ${errorText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Gemini API returned an empty response.');
  }

  return JSON.parse(text);
}

/**
 * Call OpenAI REST API
 */
async function callOpenAI(prompt, model = CONFIG.model, apiKey = CONFIG.openaiApiKey) {
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set in environment or .env');
  }

  const url = 'https://api.openai.com/v1/chat/completions';

  const body = {
    model: model,
    messages: [
      { role: 'system', content: EXAM_SYSTEM_PROMPT },
      { role: 'user', content: prompt }
    ],
    temperature: 0.2,
    response_format: { type: 'json_object' }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API Error [${response.status}]: ${errorText}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error('OpenAI API returned an empty response.');
  }

  return JSON.parse(text);
}

/**
 * Unified generation entry point
 */
export async function generateAnswer(questionPrompt, options = {}) {
  const provider = options.provider || CONFIG.provider;
  const model = options.model || CONFIG.model;

  console.log(`[AnswerGenerator] Calling ${provider} (${model})...`);

  let retries = 3;
  let delay = 2000;

  while (retries > 0) {
    try {
      if (provider === 'openai') {
        return await callOpenAI(questionPrompt, model, options.apiKey || CONFIG.openaiApiKey);
      } else {
        return await callGemini(questionPrompt, model, options.apiKey || CONFIG.geminiApiKey);
      }
    } catch (err) {
      console.warn(`[AnswerGenerator] Attempt failed: ${err.message}`);
      retries--;
      if (retries === 0) throw err;
      console.log(`[AnswerGenerator] Retrying in ${delay / 1000}s...`);
      await new Promise((r) => setTimeout(r, delay));
      delay *= 2;
    }
  }
}

// CLI direct run support
if (process.argv[1] && process.argv[1].endsWith('generate_answer.js')) {
  const sampleQuestion = "Question: What is Ensemble Learning? Why is it Used? (with example)\nMarks: 6\nSubject: Machine Learning (BE Computer Engineering SPPU)";
  console.log(`Configured Provider: ${CONFIG.provider}`);
  console.log(`Configured Model: ${CONFIG.model}`);
  console.log(`Gemini Key Present: ${!!CONFIG.geminiApiKey}`);
  console.log(`OpenAI Key Present: ${!!CONFIG.openaiApiKey}`);
}
