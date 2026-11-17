import React from 'react';
import { Question, ExportOptions } from '@/types';
import { MarksBadge } from '@/components/common/MarksBadge';
import { ImportanceBadge } from '@/components/common/ImportanceBadge';
import { MathRenderer } from '@/components/diagrams/MathRenderer';
import { TechnicalDiagram } from '@/components/diagrams/TechnicalDiagram';
import { StepByStepSolver } from '@/components/numericals/StepByStepSolver';
import { Sparkles, Calculator, Check, Edit3 } from 'lucide-react';

interface PrintQuestionCardProps {
  question: Question;
  options: ExportOptions;
  userNote?: string;
}

export const PrintQuestionCard: React.FC<PrintQuestionCardProps> = ({
  question,
  options,
  userNote,
}) => {
  return (
    <article className="print-question-card py-4 border-b border-slate-300 text-slate-900 space-y-3">
      {/* Question Header */}
      <div className="space-y-2 break-after-avoid">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-900 border border-blue-200">
              Q{question.qNumber} • [{question.marks || 6}M]
            </span>
            <MarksBadge marks={question.marks} />
            <ImportanceBadge
              category={question.importance}
              occurrenceCount={question.occurrenceCount}
            />
            {question.numericalSolution && (
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1">
                <Calculator className="w-3 h-3" />
                <span>Step-by-Step Numerical</span>
              </span>
            )}
          </div>

          <div className="text-[10px] font-mono text-slate-500">
            {question.id}
          </div>
        </div>

        {/* Full Question Title */}
        <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug break-after-avoid">
          {question.title}
        </h2>

        {/* Asked in University Exams Bar */}
        {question.papersAsked && question.papersAsked.length > 0 && (
          <div className="p-1.5 rounded bg-slate-50 border border-slate-200 text-[10.5px] text-slate-700 flex items-start gap-1.5">
            <span className="font-bold text-blue-800 shrink-0">
              Asked in University Examinations:
            </span>
            <div className="font-mono text-slate-800 flex flex-wrap gap-x-2 gap-y-0.5">
              {question.papersAsked.map((p, idx) => (
                <span key={idx} className="bg-white px-1.5 py-0.2 rounded border border-slate-200">
                  <strong>{p.paper}</strong>: {p.questionNo} {p.notes ? `(${p.notes})` : ''}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Definition Block */}
      {question.definition && (
        <div className="p-2.5 rounded-r-lg bg-blue-50/50 border-l-4 border-blue-600 border border-slate-200 text-xs text-slate-800 leading-relaxed">
          <span className="text-[9.5px] font-bold uppercase tracking-wider text-blue-700 block mb-0.5">
            Definition & Core Concept
          </span>
          <p>{question.definition}</p>
        </div>
      )}

      {/* Diagrams (If enabled) */}
      {options.includeDiagrams && question.diagrams && question.diagrams.length > 0 && (
        <div className="space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
            Diagram & Visual Architecture
          </div>
          {question.diagrams.map((diag) => (
            <TechnicalDiagram key={diag.id} diagram={diag} printMode={true} />
          ))}
        </div>
      )}

      {/* Numerical Solver (If enabled) */}
      {options.includeNumericals && question.numericalSolution && (
        <div>
          <StepByStepSolver solution={question.numericalSolution} printMode={true} />
        </div>
      )}

      {/* Detailed Answer Sections */}
      <div className="space-y-3">
        {question.sections.map((sec, secIdx) => (
          <div key={secIdx} className="space-y-2">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 border-b border-slate-200 pb-0.5 break-after-avoid">
              {sec.title}
            </h3>

            {/* Bullet Points */}
            {sec.content && sec.content.length > 0 && (
              <ul className="space-y-1">
                {sec.content.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-xs text-slate-800 leading-relaxed flex items-start gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Subsections */}
            {sec.subsections && (
              <div className="space-y-1.5 pl-2.5 border-l-2 border-slate-200 my-1.5">
                {sec.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="space-y-0.5">
                    <h4 className="text-[11.5px] font-bold text-slate-900 break-after-avoid">
                      {sub.subtitle}
                    </h4>
                    <ul className="space-y-0.5">
                      {sub.points.map((p, idx) => (
                        <li key={idx} className="text-xs text-slate-700">
                          • {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Formulas */}
            {sec.formulas && sec.formulas.length > 0 && (
              <div className="my-1.5 space-y-1">
                {sec.formulas.map((form, fIdx) => (
                  <div key={fIdx} className="space-y-0.5">
                    <span className="text-[9.5px] font-semibold text-slate-600 block">
                      {form.name}:
                    </span>
                    <MathRenderer math={form.latex} block />
                  </div>
                ))}
              </div>
            )}

            {/* Comparison / Structured Tables */}
            {sec.table && (
              <div className="my-2 overflow-visible rounded border border-slate-300">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                    <tr>
                      {sec.table.headers.map((h, i) => (
                        <th key={i} className="p-1.5 border border-slate-200">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {sec.table.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={rIdx % 2 === 1 ? 'bg-slate-50' : 'bg-white'}
                      >
                        <td className="p-1.5 border border-slate-200 font-semibold text-slate-900 align-top">
                          {row.parameter}
                        </td>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((colNum) => {
                          const val = row[`col${colNum}`];
                          if (val === undefined) return null;
                          return (
                            <td
                              key={colNum}
                              className="p-1.5 border border-slate-200 text-slate-800 align-top leading-relaxed"
                            >
                              {val}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Code Block */}
            {sec.codeBlock && (
              <div className="my-2 rounded-lg border border-slate-300 bg-slate-50 p-2.5 font-mono text-xs text-slate-900 border-l-4 border-l-blue-600 overflow-visible whitespace-pre-wrap break-words">
                <div className="text-[9.5px] font-bold uppercase text-slate-500 mb-0.5 border-b border-slate-200 pb-0.5">
                  Code Snippet ({sec.codeBlock.language})
                </div>
                <code>{sec.codeBlock.code}</code>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Revision Summary (If enabled) */}
      {options.includeRevisionSummary && question.summary && question.summary.length > 0 && (
        <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-300 text-xs text-emerald-950 space-y-1">
          <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-emerald-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fast Revision Summary</span>
          </div>
          <ul className="space-y-0.5 leading-relaxed">
            {question.summary.map((line, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="font-bold text-emerald-700 shrink-0">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Points (If enabled) */}
      {options.includeRevisionSummary && question.keyPoints && question.keyPoints.length > 0 && (
        <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200 text-xs text-amber-950 space-y-1">
          <div className="text-[9.5px] font-bold uppercase tracking-wider text-amber-800">
            Key Points to Mention in University Exam:
          </div>
          <div className="flex flex-wrap gap-1">
            {question.keyPoints.map((point, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 rounded text-[10.5px] font-medium bg-white text-amber-900 border border-amber-300"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Personal Notes (If enabled) */}
      {options.includePersonalNotes && userNote && (
        <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-200 text-xs text-indigo-950 space-y-1">
          <div className="flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-wider text-indigo-800">
            <Edit3 className="w-3 h-3 text-indigo-600" />
            <span>My Personal Study Notes:</span>
          </div>
          <p className="italic text-slate-800 whitespace-pre-wrap">{userNote}</p>
        </div>
      )}
    </article>
  );
};
