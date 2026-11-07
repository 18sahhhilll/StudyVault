import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  Filter,
  CheckCircle2,
  Bookmark,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { allSubjects, getAllQuestions } from '@/data';
import { ImportanceBadge } from '@/components/common/ImportanceBadge';
import { MarksBadge } from '@/components/common/MarksBadge';
import { ImportanceCategory } from '@/types';

interface ImportantQuestionsViewProps {
  completedQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  onSelectQuestion: (subjectId: string, unitId: string, questionId: string) => void;
  onToggleCompleted: (questionId: string) => void;
  onToggleBookmarked: (questionId: string) => void;
}

export const ImportantQuestionsView: React.FC<ImportantQuestionsViewProps> = ({
  completedQuestionIds,
  bookmarkedQuestionIds,
  onSelectQuestion,
  onToggleCompleted,
  onToggleBookmarked,
}) => {
  const allQuestions = getAllQuestions();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [selectedImportance, setSelectedImportance] = useState<string>('all');
  const [selectedMarks, setSelectedMarks] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'completed' | 'pending'>('all');
  const [bookmarkedOnly, setBookmarkedOnly] = useState<boolean>(false);

  // Available units based on selected subject
  const availableUnits = React.useMemo(() => {
    if (selectedSubject === 'all') {
      const unitsMap = new Map<string, { id: string; label: string }>();
      allSubjects.forEach((s) => {
        s.units.forEach((u) => {
          const key = `${s.id}-${u.id}`;
          unitsMap.set(key, { id: u.id, label: `${s.code} U${u.unitNumber}: ${u.shortTitle}` });
        });
      });
      return Array.from(unitsMap.values());
    }
    const foundSubject = allSubjects.find((s) => s.id === selectedSubject);
    return foundSubject
      ? foundSubject.units.map((u) => ({ id: u.id, label: `Unit ${u.unitNumber}: ${u.shortTitle}` }))
      : [];
  }, [selectedSubject]);

  const filteredQuestions = allQuestions.filter((q) => {
    // Subject filter
    if (selectedSubject !== 'all' && q.subject.id !== selectedSubject) return false;

    // Search
    const matchesSearch =
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.syllabusTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    // Unit filter
    if (selectedUnit !== 'all' && q.unit.id !== selectedUnit) return false;

    // Importance filter
    if (selectedImportance !== 'all' && q.importance !== selectedImportance) return false;

    // Marks filter
    if (selectedMarks !== 'all') {
      const marksNum = parseInt(selectedMarks, 10);
      if (q.marks !== marksNum) return false;
    }

    // Status filter
    const isCompleted = completedQuestionIds.includes(q.id);
    if (selectedStatus === 'completed' && !isCompleted) return false;
    if (selectedStatus === 'pending' && isCompleted) return false;

    // Bookmarked filter
    if (bookmarkedOnly && !bookmarkedQuestionIds.includes(q.id)) return false;

    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-academic-900 dark:text-academic-50 font-sans flex items-center gap-2.5">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          <span>Centralized Question Bank & Exam Priorities</span>
        </h1>
        <p className="text-sm text-academic-500 mt-1">
          Explore all {allQuestions.length} examination questions with multi-parameter filtering by importance, marks, syllabus units, and completion status.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-academic-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by topic, concept, or keywords..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-academic-200 dark:border-academic-800 bg-academic-50 dark:bg-academic-950 text-academic-900 dark:text-academic-100 outline-none focus:border-blue-500"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 text-xs">
          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedUnit('all');
            }}
            className="w-full sm:w-auto px-3 py-2 rounded-lg border border-academic-200 dark:border-academic-700 bg-white dark:bg-academic-800 text-academic-800 dark:text-academic-200 outline-none text-xs"
          >
            <option value="all">All Subjects ({allSubjects.length})</option>
            {allSubjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.code})
              </option>
            ))}
          </select>

          {/* Unit Filter */}
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 rounded-lg border border-academic-200 dark:border-academic-700 bg-white dark:bg-academic-800 text-academic-800 dark:text-academic-200 outline-none text-xs"
          >
            <option value="all">All Units</option>
            {availableUnits.map((u, idx) => (
              <option key={idx} value={u.id}>
                {u.label}
              </option>
            ))}
          </select>

          {/* Importance Category Filter */}
          <select
            value={selectedImportance}
            onChange={(e) => setSelectedImportance(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 rounded-lg border border-academic-200 dark:border-academic-700 bg-white dark:bg-academic-800 text-academic-800 dark:text-academic-200 outline-none text-xs"
          >
            <option value="all">All Importance Categories</option>
            <option value="Frequently Asked">Frequently Asked (Top Priority)</option>
            <option value="Important">Important (High Priority)</option>
            <option value="Moderately Asked">Moderately Asked</option>
            <option value="Rarely Asked">Rarely Asked</option>
            <option value="Conceptual / Additional">Conceptual / Additional</option>
          </select>

          {/* Marks Filter */}
          <select
            value={selectedMarks}
            onChange={(e) => setSelectedMarks(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 rounded-lg border border-academic-200 dark:border-academic-700 bg-white dark:bg-academic-800 text-academic-800 dark:text-academic-200 outline-none text-xs"
          >
            <option value="all">All Marks Allocation</option>
            <option value="4">4 Marks</option>
            <option value="5">5 Marks</option>
            <option value="6">6 Marks</option>
            <option value="8">8 Marks</option>
            <option value="10">10 Marks</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as any)}
            className="w-full sm:w-auto px-3 py-2 rounded-lg border border-academic-200 dark:border-academic-700 bg-white dark:bg-academic-800 text-academic-800 dark:text-academic-200 outline-none text-xs"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending Only</option>
            <option value="completed">Completed Only</option>
          </select>

          {/* Bookmarked toggle */}
          <button
            onClick={() => setBookmarkedOnly(!bookmarkedOnly)}
            className={`w-full sm:w-auto justify-center px-3.5 py-2 rounded-lg border transition-colors flex items-center gap-1.5 font-medium ${
              bookmarkedOnly
                ? 'bg-amber-500 text-white border-amber-600'
                : 'border-academic-200 dark:border-academic-700 text-academic-600 dark:text-academic-400 hover:bg-academic-50 dark:hover:bg-academic-800'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarkedOnly ? 'fill-current' : ''}`} />
            <span>Saved Questions Only</span>
          </button>
        </div>
      </div>

      {/* Results Count & Reset Filter */}
      <div className="flex items-center justify-between text-xs text-academic-500 px-1">
        <span>
          Showing <strong>{filteredQuestions.length}</strong> of {allQuestions.length} questions
        </span>
        {(selectedSubject !== 'all' ||
          selectedUnit !== 'all' ||
          selectedImportance !== 'all' ||
          selectedMarks !== 'all' ||
          selectedStatus !== 'all' ||
          bookmarkedOnly ||
          searchQuery) && (
          <button
            onClick={() => {
              setSelectedSubject('all');
              setSelectedUnit('all');
              setSelectedImportance('all');
              setSelectedMarks('all');
              setSelectedStatus('all');
              setBookmarkedOnly(false);
              setSearchQuery('');
            }}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Questions Cards List */}
      <div className="space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-academic-900 rounded-xl border border-academic-200 dark:border-academic-800 text-academic-400">
            <HelpCircle className="w-10 h-10 mx-auto mb-2 opacity-40" />
            <h3 className="text-sm font-semibold text-academic-700 dark:text-academic-300">
              No questions match your current filters
            </h3>
            <p className="text-xs text-academic-500 mt-1">
              Try adjusting your importance category, marks, or search query.
            </p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isCompleted = completedQuestionIds.includes(q.id);
            const isBookmarked = bookmarkedQuestionIds.includes(q.id);
            return (
              <div
                key={q.id}
                onClick={() => onSelectQuestion(q.subject.id, q.unit.id, q.id)}
                className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 hover:border-blue-400 dark:hover:border-blue-700 hover:shadow-xs transition-all cursor-pointer group flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleCompleted(q.id);
                    }}
                    className={`mt-1 shrink-0 ${
                      isCompleted
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-academic-300 dark:text-academic-700 hover:text-academic-500'
                    }`}
                    title={isCompleted ? 'Completed' : 'Mark completed'}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </button>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-academic-700 dark:text-academic-300 bg-academic-100 dark:bg-academic-800 px-2 py-0.5 rounded">
                        Unit {q.unit.unitNumber} • Q{q.qNumber}
                      </span>
                      <MarksBadge marks={q.marks} />
                      <ImportanceBadge category={q.importance} occurrenceCount={q.occurrenceCount} />
                      <span className="text-xs text-academic-400 font-medium">
                        {q.unit.shortTitle}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-academic-900 dark:text-academic-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {q.title}
                    </h3>

                    {q.definition && (
                      <p className="text-xs text-academic-500 dark:text-academic-400 line-clamp-2">
                        {q.definition}
                      </p>
                    )}

                    {q.papersAsked.length > 0 && (
                      <div className="text-[11px] font-mono text-academic-500 pt-0.5">
                        Asked in:{' '}
                        <span className="text-academic-700 dark:text-academic-300 font-medium">
                          {q.papersAsked.map((p) => `${p.paper} ${p.questionNo}`).join(' | ')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmarked(q.id);
                    }}
                    className={`p-1.5 rounded-lg hover:bg-academic-100 dark:hover:bg-academic-800 transition-colors ${
                      isBookmarked ? 'text-amber-500' : 'text-academic-400'
                    }`}
                    title={isBookmarked ? 'Saved in bookmarks' : 'Bookmark question'}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>

                  <div className="w-8 h-8 rounded-lg bg-academic-50 dark:bg-academic-800/80 flex items-center justify-center text-academic-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60 transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
