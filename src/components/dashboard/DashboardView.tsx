import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Bookmark,
  TrendingUp,
  BrainCircuit,
  ArrowRight,
  Layers,
  Sparkles,
  HelpCircle,
  FileText,
  Clock,
  Compass
} from 'lucide-react';
import { allSubjects, getAllQuestions } from '@/data';
import { ImportanceBadge } from '@/components/common/ImportanceBadge';
import { MarksBadge } from '@/components/common/MarksBadge';

interface DashboardViewProps {
  completedCount: number;
  totalQuestions: number;
  bookmarkedCount: number;
  overallPercentage: number;
  lastStudied?: {
    subjectId?: string;
    unitId?: string;
    questionId?: string;
  };
  onNavigateSubject: (subjectId: string) => void;
  onNavigateUnit: (subjectId: string, unitId: string) => void;
  onNavigateQuestion: (subjectId: string, unitId: string, questionId: string) => void;
  onNavigateImportant: () => void;
  onNavigateRevision: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  completedCount,
  totalQuestions,
  bookmarkedCount,
  overallPercentage,
  lastStudied,
  onNavigateSubject,
  onNavigateUnit,
  onNavigateQuestion,
  onNavigateImportant,
  onNavigateRevision,
}) => {
  const allQuestions = getAllQuestions();
  const totalUnits = allSubjects.reduce((acc, s) => acc + s.units.length, 0);

  // High Frequency Questions across the whole library
  const frequentlyAskedQuestions = allQuestions
    .filter((q) => q.importance === 'Frequently Asked')
    .sort((a, b) => b.occurrenceCount - a.occurrenceCount)
    .slice(0, 6);

  // Find last studied question data if exists
  const lastQuestionObj = lastStudied?.questionId
    ? allQuestions.find((q) => q.id === lastStudied.questionId)
    : undefined;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Welcome Banner */}
      <div className="rounded-2xl border border-academic-200 dark:border-academic-800 bg-gradient-to-br from-white via-academic-50/50 to-blue-50/30 dark:from-academic-900 dark:via-academic-900/60 dark:to-blue-950/20 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>University Examination Preparation System</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-academic-900 dark:text-academic-50 font-sans">
              Welcome to StudyVault
            </h1>
            <p className="text-sm sm:text-base text-academic-600 dark:text-academic-400 leading-relaxed">
              Your centralized, university-exam-oriented study repository. Structured question banks, technically accurate diagrams, formula breakdowns, and real previous-year paper frequencies.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <button
              onClick={onNavigateImportant}
              className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-academic-900 dark:bg-white text-white dark:text-academic-900 hover:bg-academic-800 dark:hover:bg-academic-100 shadow-sm transition-colors flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Important Questions</span>
            </button>
            <button
              onClick={onNavigateRevision}
              className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-white dark:bg-academic-800 text-academic-800 dark:text-academic-200 hover:bg-academic-100 dark:hover:bg-academic-700 border border-academic-300 dark:border-academic-700 transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Revision Mode</span>
            </button>
          </div>
        </div>

        {/* Global Progress Metric Bar */}
        <div className="mt-8 pt-6 border-t border-academic-200/80 dark:border-academic-800/80">
          <div className="flex items-center justify-between text-xs font-medium mb-2">
            <span className="text-academic-600 dark:text-academic-400 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Overall Examination Preparation Progress
            </span>
            <span className="font-mono font-bold text-academic-900 dark:text-academic-100 text-sm">
              {overallPercentage}% ({completedCount} of {totalQuestions} Questions)
            </span>
          </div>
          <div className="w-full h-2.5 bg-academic-200 dark:bg-academic-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${overallPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Real Statistics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-academic-500">Total Subjects</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <BrainCircuit className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-academic-900 dark:text-academic-100">
            {allSubjects.length}
          </div>
          <p className="text-[11px] text-academic-400 mt-1">{allSubjects.map((s) => s.code).join(' & ')}</p>
        </div>

        <div className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-academic-500">Total Units</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-academic-900 dark:text-academic-100">
            {totalUnits}
          </div>
          <p className="text-[11px] text-academic-400 mt-1">Across {allSubjects.length} subjects</p>
        </div>

        <div className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-academic-500">Solved Questions</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-academic-900 dark:text-academic-100">
            {completedCount} <span className="text-sm font-normal text-academic-400">/ {totalQuestions}</span>
          </div>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">
            {overallPercentage}% Completed
          </p>
        </div>

        <div className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-academic-500">Bookmarked</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Bookmark className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-academic-900 dark:text-academic-100">
            {bookmarkedCount}
          </div>
          <p className="text-[11px] text-academic-400 mt-1">Saved for revision</p>
        </div>
      </div>

      {/* Resume Studying / Last Studied Card */}
      {lastQuestionObj && (
        <div className="p-5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <Clock className="w-4 h-4" />
              <span>Continue Studying from where you left off</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-academic-900 dark:text-academic-100">
              Unit {lastQuestionObj.unit.unitNumber}: Q{lastQuestionObj.qNumber}. {lastQuestionObj.shortTitle}
            </h3>
            <p className="text-xs text-academic-500">
              {lastQuestionObj.subject.name} • {lastQuestionObj.unit.title}
            </p>
          </div>
          <button
            onClick={() => onNavigateQuestion(lastQuestionObj.subject.id, lastQuestionObj.unit.id, lastQuestionObj.id)}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shrink-0 flex items-center gap-1.5 shadow-sm"
          >
            <span>Resume Reading</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Subjects Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
            <Compass className="w-5 h-5 text-academic-500" />
            <span>Academic Subjects</span>
          </h2>
          <span className="text-xs text-academic-500">Semester VI CSE Curriculum</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allSubjects.map((subject) => {
            const subjectQuestions = subject.units.reduce((acc, u) => acc + u.questions.length, 0);
            return (
              <div
                key={subject.id}
                onClick={() => onNavigateSubject(subject.id)}
                className="group p-5 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 hover:border-blue-400 dark:hover:border-blue-600/70 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                      <BrainCircuit className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-academic-100 dark:bg-academic-800 text-academic-600 dark:text-academic-300">
                      {subject.code}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-academic-900 dark:text-academic-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-academic-500 dark:text-academic-400 line-clamp-2 mb-4">
                    {subject.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-academic-100 dark:border-academic-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-academic-500 font-medium">
                    <span>{subject.units.length} Units Included</span>
                    <span>{subjectQuestions} Solved Questions</span>
                  </div>

                  {/* Units pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {subject.units.map((unit) => (
                      <span
                        key={unit.id}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-academic-100 dark:bg-academic-800/60 text-academic-600 dark:text-academic-300"
                      >
                        Unit {unit.unitNumber}: {unit.shortTitle} ({unit.questions.length})
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 pt-1 group-hover:translate-x-1 transition-transform">
                    <span>Open Subject Library</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Frequently Asked Questions Quick Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-500" />
              <span>High-Frequency Exam Questions</span>
            </h2>
            <p className="text-xs text-academic-500 mt-0.5">
              Verified questions appearing repeatedly across university previous-year question papers (Papers 1 to 6)
            </p>
          </div>
          <button
            onClick={onNavigateImportant}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>View All Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {frequentlyAskedQuestions.map((q) => (
            <div
              key={q.id}
              onClick={() => onNavigateQuestion(q.subject.id, q.unit.id, q.id)}
              className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 hover:border-academic-300 dark:hover:border-academic-700 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono font-semibold text-academic-600 dark:text-academic-400 bg-academic-100 dark:bg-academic-800 px-1.5 py-0.2 rounded">
                    Unit {q.unit.unitNumber} • Q{q.qNumber}
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
