import React from 'react';
import { Subject, Unit, Question } from '@/types';
import { MarksBadge } from '@/components/common/MarksBadge';
import { ImportanceBadge } from '@/components/common/ImportanceBadge';
import { Calculator } from 'lucide-react';

interface PrintTableOfContentsProps {
  subject: Subject;
  units: Unit[];
  filteredQuestionsByUnit: Map<string, Question[]>;
}

export const PrintTableOfContents: React.FC<PrintTableOfContentsProps> = ({
  subject,
  units,
  filteredQuestionsByUnit,
}) => {
  return (
    <div className="print-toc-page p-5 bg-white text-slate-900 break-after-page space-y-3">
      {/* Header */}
      <div className="border-b-2 border-slate-800 pb-2 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight uppercase">
            Table of Contents
          </h2>
          <p className="text-[11px] text-slate-500 font-medium">
            {subject.name} ({subject.code}) — Structured Question Bank Index
          </p>
        </div>
        <div className="text-right text-[10px] font-mono text-slate-500">
          StudyVault Academic Series
        </div>
      </div>

      {/* Units & Questions Tree */}
      <div className="space-y-3">
        {units.map((unit) => {
          const questions = filteredQuestionsByUnit.get(unit.id) || [];
          if (questions.length === 0) return null;

          return (
            <div key={unit.id} className="space-y-2">
              {/* Unit Header Bar */}
              <div className="p-2 rounded bg-slate-100 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase text-blue-800 mr-2">
                    Unit {unit.unitNumber}:
                  </span>
                  <span className="text-[11px] font-bold text-slate-900">
                    {unit.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">
                  {questions.length} Question{questions.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Questions List */}
              <div className="divide-y divide-slate-100 border-l-2 border-slate-200 ml-2.5 pl-2.5 space-y-0.5">
                {questions.map((q) => (
                  <div
                    key={q.id}
                    className="py-0.5 flex items-start justify-between gap-2 text-[10.5px]"
                  >
                    <div className="flex items-start gap-1.5 flex-1 min-w-0">
                      <span className="font-mono font-bold text-blue-700 shrink-0">
                        Q{q.qNumber}.
                      </span>
                      <span className="text-slate-800 font-medium leading-tight">
                        {q.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 pt-0.2">
                      {q.numericalSolution && (
                        <span className="px-1 py-0.2 rounded text-[8.5px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-0.5">
                          <Calculator className="w-2.5 h-2.5" />
                          <span>Numerical</span>
                        </span>
                      )}
                      <MarksBadge marks={q.marks} />
                      <ImportanceBadge
                        category={q.importance}
                        occurrenceCount={q.occurrenceCount}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
