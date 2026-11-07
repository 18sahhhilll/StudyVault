import React from 'react';
import {
  ArrowLeft,
  BrainCircuit,
  BookOpen,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  FileText,
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react';
import { getSubjectById } from '@/data';
import { ImportanceBadge } from '@/components/common/ImportanceBadge';
import { MarksBadge } from '@/components/common/MarksBadge';

interface SubjectDetailViewProps {
  subjectId: string;
  onBack: () => void;
  onSelectUnit: (unitId: string) => void;
  onSelectQuestion: (unitId: string, questionId: string) => void;
  getUnitStats: (subjectId: string, unitId: string) => { total: number; completed: number; percentage: number };
  getSubjectStats: (subjectId: string) => { total: number; completed: number; percentage: number };
}

export const SubjectDetailView: React.FC<SubjectDetailViewProps> = ({
  subjectId,
  onBack,
  onSelectUnit,
  onSelectQuestion,
  getUnitStats,
  getSubjectStats,
}) => {
  const subject = getSubjectById(subjectId);
  if (!subject) return <div>Subject not found</div>;

  const subjectStats = getSubjectStats(subjectId);

  // High Frequency questions in this specific subject
  const subjectFAQs = subject.units
    .flatMap((u) => u.questions.map((q) => ({ ...q, unitShortTitle: u.shortTitle, unitNumber: u.unitNumber })))
    .filter((q) => q.importance === 'Frequently Asked')
    .sort((a, b) => b.occurrenceCount - a.occurrenceCount)
    .slice(0, 6);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-academic-500 hover:text-academic-900 dark:hover:text-academic-100 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Subjects</span>
      </button>

      {/* Subject Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                {subject.code}
              </span>
              <span className="text-xs font-medium text-academic-500">
                {subject.semester} • {subject.department}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-academic-900 dark:text-academic-50 font-sans">
              {subject.name}
            </h1>
            <p className="text-sm text-academic-600 dark:text-academic-400 max-w-3xl leading-relaxed">
              {subject.description}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-academic-50/70 dark:bg-academic-950/50 min-w-[220px] shrink-0 text-left md:text-right w-full md:w-auto">
            <span className="text-xs font-medium text-academic-500 block mb-1">Subject Completion</span>
            <div className="text-2xl font-bold font-mono text-academic-900 dark:text-academic-100">
              {subjectStats.percentage}%
            </div>
            <p className="text-[11px] text-academic-400 mt-0.5">
              {subjectStats.completed} of {subjectStats.total} Questions Solved
            </p>
            <div className="w-full h-2 bg-academic-200 dark:bg-academic-800 rounded-full overflow-hidden mt-3">
              <div
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${subjectStats.percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Syllabus Overview Box */}
        <div className="pt-6 border-t border-academic-100 dark:border-academic-800/80">
          <h3 className="text-xs font-bold text-academic-600 dark:text-academic-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Syllabus Modules Covered</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {subject.syllabusOverview.map((item, idx) => (
              <li
                key={idx}
                className="text-xs text-academic-600 dark:text-academic-400 p-2 rounded bg-academic-50 dark:bg-academic-950/40 border border-academic-100 dark:border-academic-800/50"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Unit-wise Navigation Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
            <Layers className="w-5 h-5 text-academic-500" />
            <span>Units & Structured Question Banks</span>
          </h2>
          <span className="text-xs text-academic-500">{subject.units.length} Modules Available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {subject.units.map((unit) => {
            const unitStats = getUnitStats(subject.id, unit.id);
            return (
              <div
                key={unit.id}
                className="p-5 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm flex flex-col justify-between hover:border-academic-300 dark:hover:border-academic-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-academic-100 dark:bg-academic-800 text-academic-800 dark:text-academic-200">
                      Unit {unit.unitNumber}
                    </span>
                    <span className="text-xs font-mono text-academic-500">
                      {unitStats.completed}/{unitStats.total} Solved
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-academic-900 dark:text-academic-100 mb-2">
                    {unit.title}
                  </h3>
                  <p className="text-xs text-academic-500 dark:text-academic-400 line-clamp-3 mb-4">
                    {unit.description}
                  </p>

                  {/* Topics Tags */}
                  <div className="space-y-1.5 mb-6">
                    <div className="text-[11px] font-semibold text-academic-400">Core Syllabus Topics:</div>
                    <div className="flex flex-wrap gap-1">
                      {unit.syllabus.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-academic-100 dark:bg-academic-800/60 text-academic-600 dark:text-academic-400"
                        >
                          {t}
                        </span>
                      ))}
                      {unit.syllabus.length > 4 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-academic-100 dark:bg-academic-800 text-academic-400">
                          +{unit.syllabus.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-academic-100 dark:border-academic-800/80 space-y-3">
                  <div className="w-full h-1.5 bg-academic-200 dark:bg-academic-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${unitStats.percentage}%` }}
                    />
                  </div>

                  <button
                    onClick={() => onSelectUnit(unit.id)}
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold bg-academic-900 dark:bg-white text-white dark:text-academic-900 hover:bg-academic-800 dark:hover:bg-academic-100 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Read Unit Notes ({unit.questions.length} Questions)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Frequently Asked Questions for this subject */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-rose-500" />
          <span>Frequently Asked Questions in {subject.name}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {subjectFAQs.map((q) => (
            <div
              key={q.id}
              onClick={() => onSelectQuestion(q.unitId, q.id)}
              className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 hover:border-academic-300 dark:hover:border-academic-700 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono font-semibold text-academic-600 dark:text-academic-400 bg-academic-100 dark:bg-academic-800 px-1.5 py-0.2 rounded">
                    Unit {q.unitNumber} • Q{q.qNumber}
                  </span>
                  <MarksBadge marks={q.marks} />
                  <ImportanceBadge category={q.importance} occurrenceCount={q.occurrenceCount} />
                </div>
                <h4 className="text-sm font-semibold text-academic-900 dark:text-academic-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {q.title}
                </h4>
              </div>

              <div className="mt-3 pt-2.5 border-t border-academic-100 dark:border-academic-800/60 flex items-center justify-between text-[11px] text-academic-500">
                <span className="font-mono truncate max-w-[240px]">
                  {q.papersAsked.map((p) => `${p.paper} ${p.questionNo}`).join(' | ')}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform shrink-0">
                  Read Answer →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
