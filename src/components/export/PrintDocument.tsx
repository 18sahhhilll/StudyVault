import React, { useMemo } from 'react';
import { Subject, Unit, Question, ExportOptions } from '@/types';
import { PrintCoverPage } from './PrintCoverPage';
import { PrintTableOfContents } from './PrintTableOfContents';
import { PrintQuestionCard } from './PrintQuestionCard';
import { Layers } from 'lucide-react';

interface PrintDocumentProps {
  subject: Subject;
  units: Unit[];
  options: ExportOptions;
  bookmarkedQuestionIds: string[];
  notesByQuestionId: Record<string, string>;
}

export const PrintDocument: React.FC<PrintDocumentProps> = ({
  subject,
  units,
  options,
  bookmarkedQuestionIds,
  notesByQuestionId,
}) => {
  // Filter questions according to options.onlyBookmarked
  const filteredQuestionsByUnit = useMemo(() => {
    const map = new Map<string, Question[]>();
    for (const unit of units) {
      const qList = unit.questions.filter((q) => {
        if (options.onlyBookmarked) {
          return bookmarkedQuestionIds.includes(q.id);
        }
        return true;
      });
      map.set(unit.id, qList);
    }
    return map;
  }, [units, options.onlyBookmarked, bookmarkedQuestionIds]);

  const totalFilteredQuestions = useMemo(() => {
    let count = 0;
    filteredQuestionsByUnit.forEach((list) => {
      count += list.length;
    });
    return count;
  }, [filteredQuestionsByUnit]);

  const isSingleUnit = units.length === 1;

  return (
    <div className="print-document bg-white text-slate-900 font-sans leading-normal selection:bg-none">
      {/* 1. Cover Page */}
      <PrintCoverPage
        subject={subject}
        unit={isSingleUnit ? units[0] : undefined}
        totalQuestions={totalFilteredQuestions}
      />

      {/* 2. Table of Contents */}
      <PrintTableOfContents
        subject={subject}
        units={units}
        filteredQuestionsByUnit={filteredQuestionsByUnit}
      />

      {/* 3. Units & Questions */}
      <div className="print-content-body space-y-4">
        {units.map((unit, uIdx) => {
          const questions = filteredQuestionsByUnit.get(unit.id) || [];
          if (questions.length === 0) return null;

          return (
            <section
              key={unit.id}
              className={`print-unit-section ${uIdx > 0 ? 'break-before-page' : ''}`}
            >
              {/* Unit Title Banner */}
              <div className="p-4 rounded-lg bg-slate-100 border border-slate-300 mb-4 space-y-2 break-inside-avoid">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-black bg-blue-700 text-white uppercase tracking-wider">
                      Unit {unit.unitNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {subject.code} • {subject.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-700">
                    {questions.length} Question{questions.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                  {unit.title}
                </h2>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {unit.description}
                </p>

                {/* Syllabus Topics */}
                <div className="pt-1.5 border-t border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Syllabus Topics Covered:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {unit.syllabus.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-800 border border-slate-300 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Unit Questions List */}
              <div className="space-y-4">
                {questions.map((q) => (
                  <PrintQuestionCard
                    key={q.id}
                    question={q}
                    options={options}
                    userNote={notesByQuestionId[q.id]}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
