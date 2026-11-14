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

// Function to detect whether a question explicitly or implicitly requires a diagram
export function detectDiagramRequirement(questionText, marks = 6) {
  const text = questionText.toLowerCase();

  // 1. Explicit indicators
  const explicitKeywords = [
    'neat diagram',
    'draw a diagram',
    'draw and explain',
    'explain with diagram',
    'explain with a diagram',
    'suitable diagram',
    'architecture',
    'system architecture',
    'block diagram',
    'flowchart',
    'flow chart',
    'lifecycle',
    'life cycle',
    'workflow',
    'process diagram',
    'circuit diagram',
    'network diagram',
    'data flow diagram',
    'uml diagram',
    'component diagram',
    'working with diagram',
    'structure and working'
  ];

  const hasExplicit = explicitKeywords.some(kw => text.includes(kw));

  // 2. Implicit indicators (essential technical topics where visual architecture is mandatory)
  const implicitTopics = [
    { pattern: /selenium\s+webdriver/i, type: 'selenium-webdriver-architecture', name: 'Selenium WebDriver Architecture' },
    { pattern: /selenium\s+grid/i, type: 'selenium-grid-architecture', name: 'Selenium Grid Hub & Node Architecture' },
    { pattern: /selenium\s+rc/i, type: 'selenium-rc-architecture', name: 'Selenium RC Architecture' },
    { pattern: /automated\s+testing\s+(process|lifecycle|framework)/i, type: 'automated-testing-lifecycle', name: 'Automated Testing Lifecycle Flowchart' },
    { pattern: /waterfall\s+model/i, type: 'waterfall-model', name: 'Waterfall Model Lifecycle' },
    { pattern: /cnn\s+architecture|convolutional\s+neural\s+network/i, type: 'cnn-architecture', name: 'CNN Architecture' },
    { pattern: /working\s+of.*neural\s+network|neural\s+network.*working/i, type: 'neural-network-working', name: 'Neural Network Layer Structure' },
    { pattern: /svm.*(hyperplane|margin)|separating\s+hyperplane/i, type: 'svm-hyperplane', name: 'SVM Hyperplane & Margin' },
    { pattern: /kernel\s+(trick|method)/i, type: 'kernel-trick', name: 'Kernel Trick Transformation' },
    { pattern: /random\s+forest/i, type: 'random-forest', name: 'Random Forest Architecture' },
    { pattern: /k-means\s+(clustering|flow|steps)/i, type: 'kmeans-flow', name: 'K-Means Iterative Flowchart' }
  ];

  const matchedTopic = implicitTopics.find(t => t.pattern.test(text));

  // 3. Negative filters (questions that explicitly do NOT need a diagram)
  const isPureDefinition = /^(define|what is)\s+(regression|supervised learning|unsupervised learning)/i.test(text);
  const isPureAdvantages = /advantages\s+of\s+automation/i.test(text);

  if (isPureDefinition || isPureAdvantages) {
    return { required: false, reason: 'Pure conceptual definition/advantages question' };
  }

  if (hasExplicit) {
    return {
      required: true,
      reason: 'Explicit diagram request in question',
      matchedTopic: matchedTopic ? matchedTopic.type : 'custom'
    };
  }

  if (matchedTopic && marks >= 4) {
    return {
      required: true,
      reason: `Implicit requirement for ${matchedTopic.name}`,
      matchedTopic: matchedTopic.type
    };
  }

  return { required: false, reason: 'No diagram required' };
}

// System Prompt enforcing the Golden Rule & SPPU BE Computer Engineering exam criteria
export function buildSystemPrompt(questionText, marks = 6) {
  const diagCheck = detectDiagramRequirement(questionText, marks);

  let diagramDirective = '';
  if (diagCheck.required) {
    diagramDirective = `
CRITICAL REQUIREMENT - DIAGRAM MANDATORY FOR THIS QUESTION:
This question requires a diagram (${diagCheck.reason}).
1. You MUST include a "diagrams" array with an accurate, labelled technical diagram.
2. Structure the answer specifically as follows:
   - "definition": Short introductory concept.
   - "diagrams": [
       {
         "id": "diag-${diagCheck.matchedTopic || 'visual'}",
         "title": "Clear Diagram Title",
         "caption": "Concise technical description of the diagram and components.",
         "type": "svg-interactive",
         "svgType": "${diagCheck.matchedTopic || 'custom'}"
       }
     ]
   - "sections": The written sections MUST directly describe and match the diagram!
     - Every major component, block, or phase shown in the diagram MUST be explained in the EXACT SAME SEQUENCE and with the EXACT SAME LABELS as in the diagram.
     - Number the phases/components identically.
`;
  } else {
    diagramDirective = `
DIAGRAM DIRECTIVE:
A diagram is NOT mandatory for this question (${diagCheck.reason}). Do NOT generate a "diagrams" array. Provide a clean, concise, direct written answer.
`;
  }

  return `
You are an expert Computer Engineering professor writing model exam answers for Savitribai Phule Pune University (SPPU) BE Computer Engineering students.

THE GOLDEN RULE:
ANSWER THE QUESTION THAT IS ACTUALLY ASKED.
Do not follow a rigid fixed template for every question.
Do not convert answers into bloated multi-page essays.
Do not add unnecessary sections like "Foundational Rationale", "Statistical Reasoning", "Computational Reasoning", "Representational Reasoning", or "Meta-algorithmic framework".
The question itself must strictly dictate the structure and contents.

${diagramDirective}

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
- 6-8 marks: Clear definition, diagram if required, working/steps, and quick revision.
- 10 marks: Comprehensive answer with all requested parts.

JSON OUTPUT FORMAT:
You must output ONLY valid JSON matching this structure:
{
  "definition": "Clear, simple 1-2 sentence definition",
  ${diagCheck.required ? `"diagrams": [
    {
      "id": "diag-${diagCheck.matchedTopic || 'visual'}",
      "title": "Diagram Title",
      "caption": "Concise diagram explanation",
      "type": "svg-interactive",
      "svgType": "${diagCheck.matchedTopic || 'custom'}"
    }
  ],` : ''}
  "sections": [
    {
      "title": "1. Section Title (Matching Diagram if present)",
      "content": [
        "Point 1",
        "Point 2"
      ]
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
}

/**
 * Call Gemini REST API
 */
async function callGemini(prompt, model = CONFIG.model, apiKey = CONFIG.geminiApiKey, marks = 6) {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in environment or .env');
  }

  const systemPrompt = buildSystemPrompt(prompt, marks);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  
  const body = {
    contents: [
      {
        role: 'user',
        parts: [{ text: `${systemPrompt}\n\nTask:\n${prompt}` }]
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
async function callOpenAI(prompt, model = CONFIG.model, apiKey = CONFIG.openaiApiKey, marks = 6) {
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set in environment or .env');
  }

  const systemPrompt = buildSystemPrompt(prompt, marks);
  const url = 'https://api.openai.com/v1/chat/completions';

  const body = {
    model: model,
    messages: [
      { role: 'system', content: systemPrompt },
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
        return await callOpenAI(questionPrompt, model, options.apiKey || CONFIG.openaiApiKey, options.marks || 6);
      } else {
        return await callGemini(questionPrompt, model, options.apiKey || CONFIG.geminiApiKey, options.marks || 6);
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
