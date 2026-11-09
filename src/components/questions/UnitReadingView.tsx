import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Bookmark,
  BookOpen,
  Share2,
  Printer,
  Sparkles,
  HelpCircle,
  Edit3,
  Save,
  Check,
  Search,
  ListFilter,
  Calculator,
  X
} from 'lucide-react';
import { Unit, Question, Subject } from '@/types';
import { ImportanceBadge } from '@/components/common/ImportanceBadge';
import { MarksBadge } from '@/components/common/MarksBadge';
import { MathRenderer } from '@/components/diagrams/MathRenderer';
import { TechnicalDiagram } from '@/components/diagrams/TechnicalDiagram';
import { StepByStepSolver } from '@/components/numericals/StepByStepSolver';

interface UnitReadingViewProps {
  subject: Subject;
  unit: Unit;
  activeQuestionId: string;
  completedQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  notesByQuestionId: Record<string, string>;
  onSelectQuestion: (questionId: string) => void;
  onToggleCompleted: (questionId: string) => void;
  onToggleBookmarked: (questionId: string) => void;
  onSaveNote: (questionId: string, note: string) => void;
  onBackToSubject: () => void;
}

export const UnitReadingView: React.FC<UnitReadingViewProps> = ({
  subject,
  unit,
  activeQuestionId,
  completedQuestionIds,
  bookmarkedQuestionIds,
  notesByQuestionId,
  onSelectQuestion,
  onToggleCompleted,
  onToggleBookmarked,
  onSaveNote,
  onBackToSubject,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'faq' | 'pending' | 'bookmarked'>('all');
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [userNote, setUserNote] = useState('');
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);
  const [mobileQuestionsOpen, setMobileQuestionsOpen] = useState(false);

  const currentQuestionIndex = unit.questions.findIndex((q) => q.id === activeQuestionId);
  const currentQuestion: Question =
    currentQuestionIndex !== -1 ? unit.questions[currentQuestionIndex] : unit.questions[0];

  useEffect(() => {
    setUserNote(notesByQuestionId[currentQuestion.id] || '');
  }, [currentQuestion.id, notesByQuestionId]);

  // Scroll main container to top when changing questions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuestion.id]);

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      onSelectQuestion(unit.questions[currentQuestionIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < unit.questions.length - 1) {
      onSelectQuestion(unit.questions[currentQuestionIndex + 1].id);
    }
  };

  const handleSaveNote = () => {
    onSaveNote(currentQuestion.id, userNote);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2000);
  };

  // Filter sidebar question list
  const filteredQuestions = unit.questions.filter((q) => {
    const matchesSearch =
      q.title.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
      q.shortTitle.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
      q.qNumber.toString().includes(sidebarSearch);

    if (!matchesSearch) return false;

    if (filterMode === 'faq') return q.importance === 'Frequently Asked';
    if (filterMode === 'pending') return !completedQuestionIds.includes(q.id);
    if (filterMode === 'bookmarked') return bookmarkedQuestionIds.includes(q.id);
    return true;
  });

  const isCompleted = completedQuestionIds.includes(currentQuestion.id);
  const isBookmarked = bookmarkedQuestionIds.includes(currentQuestion.id);

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start animate-in fade-in duration-200 w-full">
      {/* Mobile Sticky Quick Switcher Header (Visible only on mobile/tablet) */}
      <div className="w-full lg:hidden bg-white dark:bg-academic-900 rounded-xl border border-academic-200 dark:border-academic-800 p-2.5 shadow-xs flex items-center justify-between gap-2 sticky top-14 z-20">
        <button
          onClick={onBackToSubject}
          className="p-2 rounded-lg text-academic-500 hover:text-academic-900 dark:hover:text-academic-100 bg-academic-50 dark:bg-academic-800 transition-colors shrink-0"
          title="Back to Subject"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => setMobileQuestionsOpen(true)}
          className="flex-1 min-w-0 flex items-center justify-between px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-900 dark:text-blue-200 truncate"
        >
          <span className="truncate">
            U{unit.unitNumber}: Q{currentQuestion.qNumber} of {unit.questions.length}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 font-normal shrink-0 ml-1.5 bg-white/70 dark:bg-blue-900/60 px-1.5 py-0.5 rounded">
            <ListFilter className="w-3 h-3" />
            <span>List</span>
          </span>
        </button>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="p-2 rounded-lg border border-academic-200 dark:border-academic-800 text-academic-700 dark:text-academic-300 disabled:opacity-30 disabled:cursor-not-allowed bg-academic-50 dark:bg-academic-800"
            title="Previous Question"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === unit.questions.length - 1}
            className="p-2 rounded-lg border border-academic-200 dark:border-academic-800 text-academic-700 dark:text-academic-300 disabled:opacity-30 disabled:cursor-not-allowed bg-academic-50 dark:bg-academic-800"
            title="Next Question"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer for Question List */}
      {mobileQuestionsOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileQuestionsOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-white dark:bg-academic-900 shadow-2xl h-full flex flex-col p-4 animate-in slide-in-from-left duration-200 z-10">
            <div className="flex items-center justify-between pb-3 border-b border-academic-100 dark:border-academic-800">
              <div>
                <h3 className="text-sm font-bold text-academic-900 dark:text-academic-100">
                  Unit {unit.unitNumber}: {unit.shortTitle}
                </h3>
                <span className="text-[11px] text-academic-400 font-mono">
                  {unit.questions.filter((q) => completedQuestionIds.includes(q.id)).length} of {unit.questions.length} Solved
                </span>
              </div>
              <button
                onClick={() => setMobileQuestionsOpen(false)}
                className="p-1 rounded-lg text-academic-400 hover:text-academic-700 dark:hover:text-academic-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search and Filters inside Mobile Drawer */}
            <div className="py-2.5 space-y-2 border-b border-academic-100 dark:border-academic-800">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-academic-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  placeholder="Filter unit questions..."
                  className="w-full pl-8 pr-2 py-1 text-xs rounded-md bg-academic-50 dark:bg-academic-950 border border-academic-200 dark:border-academic-800 text-academic-800 dark:text-academic-200 outline-none"
                />
              </div>

              <div className="flex items-center gap-1 text-[11px] overflow-x-auto pb-1">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'faq', label: 'FAQs' },
                  { id: 'pending', label: 'Pending' },
                  { id: 'bookmarked', label: 'Saved' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilterMode(tab.id as any)}
                    className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                      filterMode === tab.id
                        ? 'bg-academic-900 dark:bg-white text-white dark:text-academic-900 font-semibold'
                        : 'text-academic-500 hover:text-academic-900 dark:hover:text-academic-100 bg-academic-100/50 dark:bg-academic-800/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions List in Drawer */}
            <div className="overflow-y-auto flex-1 divide-y divide-academic-100 dark:divide-academic-800/50 pt-1 space-y-0.5 pr-1">
              {filteredQuestions.map((q) => {
                const active = q.id === currentQuestion.id;
                const completed = completedQuestionIds.includes(q.id);
                const bookmarked = bookmarkedQuestionIds.includes(q.id);
                return (
                  <div
                    key={q.id}
                    onClick={() => {
                      onSelectQuestion(q.id);
                      setMobileQuestionsOpen(false);
                    }}
                    className={`p-2.5 rounded-lg text-left cursor-pointer transition-all flex items-start gap-2.5 group ${
                      active
                        ? 'bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 shadow-xs'
                        : 'hover:bg-academic-50 dark:hover:bg-academic-800/50'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCompleted(q.id);
                      }}
                      className={`mt-0.5 shrink-0 ${
                        completed
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-academic-300 dark:text-academic-700 hover:text-academic-500'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap mb-1">
                        <span className={`text-[10px] font-mono font-bold ${active ? 'text-blue-700 dark:text-blue-300' : 'text-academic-500'}`}>
                          Q{q.qNumber}
                        </span>
                        <MarksBadge marks={q.marks} />
                        {q.numericalSolution && (
                          <span className="text-[9px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-1 py-0.5 rounded flex items-center gap-0.5">
                            <Calculator className="w-2.5 h-2.5" />
                            <span>Solved</span>
                          </span>
                        )}
                        {q.importance === 'Frequently Asked' && (
                          <span className="text-[9px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-1 rounded">
                            FAQ
                          </span>
                        )}
                        {q.occurrenceCount > 1 ? (
                          <span
                            className="text-[9px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-1 py-0.5 rounded border border-amber-200/50"
                            title={`Appeared ${q.occurrenceCount} times in university papers`}
                          >
                            {q.occurrenceCount}x
                          </span>
                        ) : q.occurrenceCount === 1 ? (
                          <span
                            className="text-[9px] text-academic-500 bg-academic-100 dark:bg-academic-800 px-1 py-0.5 rounded"
                            title="Appeared once in university papers"
                          >
                            1x
                          </span>
                        ) : null}
                        {bookmarked && <Bookmark className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />}
                      </div>
                      <h4 className={`text-xs font-medium line-clamp-2 leading-snug ${active ? 'text-blue-950 dark:text-blue-100 font-semibold' : 'text-academic-700 dark:text-academic-300'}`}>
                        {q.shortTitle || q.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Left Sidebar: Unit Questions Navigation (Sticky, Hidden on mobile) */}
      <aside className="hidden lg:flex w-80 shrink-0 bg-white dark:bg-academic-900 rounded-xl border border-academic-200 dark:border-academic-800 p-4 lg:sticky lg:top-20 max-h-[85vh] flex-col shadow-sm">
        {/* Back and Unit Info */}
        <div className="pb-3 border-b border-academic-100 dark:border-academic-800 space-y-1">
          <button
            onClick={onBackToSubject}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-academic-500 hover:text-academic-900 dark:hover:text-academic-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{subject.name}</span>
          </button>
          <h2 className="text-sm font-bold text-academic-900 dark:text-academic-100">
            Unit {unit.unitNumber}: {unit.shortTitle}
          </h2>
          <div className="text-[11px] text-academic-400 font-mono">
            {unit.questions.filter((q) => completedQuestionIds.includes(q.id)).length} of {unit.questions.length} Solved
          </div>
        </div>

        {/* Search and Filters inside Unit */}
        <div className="py-2.5 space-y-2 border-b border-academic-100 dark:border-academic-800">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-academic-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder="Filter unit questions..."
              className="w-full pl-8 pr-2 py-1 text-xs rounded-md bg-academic-50 dark:bg-academic-950 border border-academic-200 dark:border-academic-800 text-academic-800 dark:text-academic-200 outline-none"
            />
          </div>

          <div className="flex items-center justify-between gap-1 text-[11px] overflow-x-auto pb-1">
            <div className="flex items-center gap-1">
              {[
                { id: 'all', label: 'All' },
                { id: 'faq', label: 'FAQs' },
                { id: 'pending', label: 'Pending' },
                { id: 'bookmarked', label: 'Saved' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterMode(tab.id as any)}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                    filterMode === tab.id
                      ? 'bg-academic-900 dark:bg-white text-white dark:text-academic-900 font-semibold'
                      : 'text-academic-500 hover:text-academic-900 dark:hover:text-academic-100 bg-academic-100/50 dark:bg-academic-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <span
              className="text-[9px] font-mono font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-1.5 py-0.5 rounded shrink-0 border border-rose-200/40"
              title="Questions arranged in descending order of frequency (Most occurring university PYQs first)"
            >
              Frequency ↓
            </span>
          </div>
        </div>

        {/* Questions List */}
        <div className="overflow-y-auto flex-1 divide-y divide-academic-100 dark:divide-academic-800/50 pt-1 space-y-0.5 pr-1">
          {filteredQuestions.map((q) => {
            const active = q.id === currentQuestion.id;
            const completed = completedQuestionIds.includes(q.id);
            const bookmarked = bookmarkedQuestionIds.includes(q.id);
            return (
              <div
                key={q.id}
                onClick={() => onSelectQuestion(q.id)}
                className={`p-2.5 rounded-lg text-left cursor-pointer transition-all flex items-start gap-2.5 group ${
                  active
                    ? 'bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 shadow-xs'
                    : 'hover:bg-academic-50 dark:hover:bg-academic-800/50'
                }`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleCompleted(q.id);
                  }}
                  className={`mt-0.5 shrink-0 ${
                    completed
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-academic-300 dark:text-academic-700 hover:text-academic-500'
                  }`}
                  title={completed ? 'Completed' : 'Mark completed'}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap mb-1">
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        active
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-academic-500'
                      }`}
                    >
                      Q{q.qNumber}
                    </span>
                    <MarksBadge marks={q.marks} />
                    {q.numericalSolution && (
                      <span className="text-[9px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-1 py-0.5 rounded flex items-center gap-0.5" title="Step-by-step Numerical Solver Available">
                        <Calculator className="w-2.5 h-2.5" />
                        <span>Solved</span>
                      </span>
                    )}
                    {q.importance === 'Frequently Asked' && (
                      <span className="text-[9px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-1 rounded">
                        FAQ
                      </span>
                    )}
                    {q.occurrenceCount > 1 ? (
                      <span
                        className="text-[9px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-1 py-0.5 rounded border border-amber-200/50"
                        title={`Appeared ${q.occurrenceCount} times in university papers`}
                      >
                        {q.occurrenceCount}x
                      </span>
                    ) : q.occurrenceCount === 1 ? (
                      <span
                        className="text-[9px] text-academic-500 bg-academic-100 dark:bg-academic-800 px-1 py-0.5 rounded"
                        title="Appeared once in university papers"
                      >
                        1x
                      </span>
                    ) : null}
                    {bookmarked && (
                      <Bookmark className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                    )}
                  </div>
                  <h4
                    className={`text-xs font-medium line-clamp-2 leading-snug ${
                      active
                        ? 'text-blue-950 dark:text-blue-100 font-semibold'
                        : 'text-academic-700 dark:text-academic-300'
                    }`}
                  >
                    {q.shortTitle || q.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main Reading Area (Digital Notebook / Textbook Design) */}
      <main className="flex-1 min-w-0 bg-white dark:bg-academic-900 rounded-xl border border-academic-200 dark:border-academic-800 shadow-sm overflow-hidden p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 w-full">
        {/* Top Header & Actions */}
        <div className="space-y-4 pb-6 border-b border-academic-100 dark:border-academic-800">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Unit {unit.unitNumber} • Question {currentQuestion.qNumber}
              </span>
              <MarksBadge marks={currentQuestion.marks} />
              <ImportanceBadge
                category={currentQuestion.importance}
                occurrenceCount={currentQuestion.occurrenceCount}
              />
              {currentQuestion.numericalSolution && (
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1 shadow-sm">
                  <Calculator className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Step-by-Step Numerical</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleBookmarked(currentQuestion.id)}
                className={`p-2 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                  isBookmarked
                    ? 'bg-amber-50 border-amber-300 text-amber-700 dark:bg-amber-950/50 dark:border-amber-800 dark:text-amber-300'
                    : 'border-academic-200 dark:border-academic-800 text-academic-600 dark:text-academic-400 hover:bg-academic-50 dark:hover:bg-academic-800'
                }`}
                title="Bookmark for quick revision"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </button>

              <button
                onClick={() => onToggleCompleted(currentQuestion.id)}
                className={`p-2 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                  isCompleted
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700 dark:bg-emerald-950/50 dark:border-emerald-800 dark:text-emerald-300'
                    : 'border-academic-200 dark:border-academic-800 text-academic-700 dark:text-academic-300 hover:bg-academic-50 dark:hover:bg-academic-800'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'fill-current' : ''}`} />
                <span>{isCompleted ? 'Completed' : 'Mark as Completed'}</span>
              </button>
            </div>
          </div>

          {/* Full Question Title */}
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-academic-900 dark:text-academic-50 font-sans leading-snug">
            {currentQuestion.title}
          </h1>

          {/* "Asked In" University Papers Box */}
          {currentQuestion.papersAsked.length > 0 && (
            <div className="p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 text-xs flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-bold text-blue-900 dark:text-blue-200">Asked in University Examinations:</span>
                <div className="font-mono text-blue-800 dark:text-blue-300 flex flex-wrap gap-x-3 gap-y-1 mt-1">
                  {currentQuestion.papersAsked.map((p, idx) => (
                    <span key={idx} className="bg-white/80 dark:bg-blue-900/40 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                      <strong>{p.paper}</strong>: {p.questionNo} {p.notes ? `(${p.notes})` : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Question Definition / Core Answer Lead */}
        {currentQuestion.definition && (
          <div className="p-4 sm:p-5 rounded-xl bg-academic-50 dark:bg-academic-950/60 border-l-4 border-l-blue-600 border border-academic-200 dark:border-academic-800">
            <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5">
              1. Definition / Core Concept
            </h3>
            <p className="text-sm sm:text-base text-academic-800 dark:text-academic-200 leading-relaxed font-sans">
              {currentQuestion.definition}
            </p>
          </div>
        )}

        {/* Interactive Step-by-Step Numerical Solver */}
        {currentQuestion.numericalSolution && (
          <div className="space-y-2">
            <StepByStepSolver solution={currentQuestion.numericalSolution} />
          </div>
        )}

        {/* Structured Answer Sections */}
        <div className="space-y-8">
          {currentQuestion.sections.map((sec, secIdx) => (
            <div key={secIdx} className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-academic-900 dark:text-academic-100 font-sans border-b border-academic-100 dark:border-academic-800 pb-2">
                {sec.title}
              </h3>

              {/* Bullet points & content */}
              {sec.content && sec.content.length > 0 && (
                <ul className="space-y-2.5">
                  {sec.content.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-sm sm:text-[15px] text-academic-700 dark:text-academic-300 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-academic-400 dark:bg-academic-600 shrink-0 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsection points if present */}
              {sec.subsections && (
                <div className="space-y-3 pl-4 border-l-2 border-academic-200 dark:border-academic-800">
                  {sec.subsections.map((sub, subIdx) => (
                    <div key={subIdx} className="space-y-1">
                      <h4 className="text-sm font-semibold text-academic-800 dark:text-academic-200">
                        {sub.subtitle}
                      </h4>
                      <ul className="space-y-1">
                        {sub.points.map((p, idx) => (
                          <li key={idx} className="text-xs text-academic-600 dark:text-academic-400">
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
                <div className="my-4 space-y-2">
                  {sec.formulas.map((form, fIdx) => (
                    <div key={fIdx} className="space-y-1">
                      <span className="text-xs font-semibold text-academic-500 block">
                        {form.name}:
                      </span>
                      <MathRenderer math={form.latex} block />
                    </div>
                  ))}
                </div>
              )}

              {/* Table rendering */}
              {sec.table && (
                <div className="my-4 overflow-x-auto -mx-1 sm:mx-0 rounded-lg border border-academic-200 dark:border-academic-800 shadow-xs">
                  <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
                    <thead className="bg-academic-50 dark:bg-academic-800/80 text-academic-700 dark:text-academic-200 font-semibold border-b border-academic-200 dark:border-academic-700">
                      <tr>
                        {sec.table.headers.map((h, i) => (
                          <th key={i} className="p-3 font-semibold whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-academic-100 dark:divide-academic-800/60 font-sans">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="hover:bg-academic-50/50 dark:hover:bg-academic-800/30 transition-colors"
                        >
                          <td className="p-3 font-medium text-academic-900 dark:text-academic-100 whitespace-nowrap">
                            {row.parameter}
                          </td>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((colNum) => {
                            const val = row[`col${colNum}`];
                            if (val === undefined) return null;
                            return (
                              <td key={colNum} className="p-3 text-academic-700 dark:text-academic-300">
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
            </div>
          ))}
        </div>

        {/* Technical Diagrams (Positioned directly beside/under explanation) */}
        {currentQuestion.diagrams && currentQuestion.diagrams.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-academic-100 dark:border-academic-800">
            <h3 className="text-xs font-bold text-academic-500 uppercase tracking-wider">
              Technical Architecture & Visual Representation
            </h3>
            {currentQuestion.diagrams.map((diag) => (
              <TechnicalDiagram key={diag.id} diagram={diag} />
            ))}
          </div>
        )}

        {/* 4-5 Line Exam Summary Box */}
        {currentQuestion.summary.length > 0 && (
          <div className="p-5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Exam Revision Summary (Revise in 4–5 Lines)</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-sans leading-relaxed">
              {currentQuestion.summary.map((line, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 shrink-0">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Points to Remember Box */}
        {currentQuestion.keyPoints.length > 0 && (
          <div className="p-5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
            <div className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              Key Keywords & High-Yield Exam Takeaways
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {currentQuestion.keyPoints.map((point, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 border border-amber-200/80 dark:border-amber-800/60"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Personal Study Notes Section for this question */}
        <div className="pt-6 border-t border-academic-200 dark:border-academic-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-academic-700 dark:text-academic-300 uppercase tracking-wider">
              <Edit3 className="w-4 h-4 text-academic-500" />
              <span>Personal Study Notes for Q{currentQuestion.qNumber}</span>
            </div>
            {noteSavedFeedback && (
              <span className="text-xs font-medium text-emerald-600 flex items-center gap-1 animate-in fade-in">
                <Check className="w-3.5 h-3.5" />
                <span>Saved locally</span>
              </span>
            )}
          </div>
          <textarea
            value={userNote}
            onChange={(e) => setUserNote(e.target.value)}
            placeholder="Type your personal mnemonic, exam tips, or doubts for this question (persists in localStorage)..."
            rows={3}
            className="w-full p-3 rounded-lg text-xs sm:text-sm bg-academic-50 dark:bg-academic-950 border border-academic-200 dark:border-academic-800 text-academic-900 dark:text-academic-100 placeholder:text-academic-400 outline-none focus:border-blue-500"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSaveNote}
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-academic-800 text-white dark:bg-academic-200 dark:text-academic-900 hover:bg-academic-700 dark:hover:bg-academic-100 transition-colors flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Note</span>
            </button>
          </div>
        </div>

        {/* Bottom Pagination & Navigation Footer */}
        <div className="pt-8 border-t border-academic-200 dark:border-academic-800 flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border border-academic-200 dark:border-academic-700 text-academic-700 dark:text-academic-300 hover:bg-academic-50 dark:hover:bg-academic-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Question</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <div className="text-center">
            <span className="text-xs font-mono text-academic-400">
              Q{currentQuestion.qNumber} of {unit.questions.length}
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === unit.questions.length - 1}
            className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-academic-900 dark:bg-white text-white dark:text-academic-900 hover:bg-academic-800 dark:hover:bg-academic-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shadow-sm"
          >
            <span className="hidden sm:inline">Next Question</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
};
