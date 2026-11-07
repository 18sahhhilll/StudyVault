import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { searchQuestions } from '@/data';
import { ImportanceBadge } from './ImportanceBadge';
import { MarksBadge } from './MarksBadge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuestion: (subjectId: string, unitId: string, questionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectQuestion,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global Ctrl+K / Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = searchQuestions(query);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white dark:bg-academic-900 rounded-xl shadow-2xl border border-academic-200 dark:border-academic-800 overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-3 sm:p-4 border-b border-academic-200 dark:border-academic-800 flex items-center space-x-3">
          <Search className="w-5 h-5 text-academic-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions, topics, formulas, definitions, papers..."
            className="w-full bg-transparent border-none outline-none text-sm sm:text-base text-academic-900 dark:text-academic-100 placeholder:text-academic-400 font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-academic-400 hover:text-academic-600 dark:hover:text-academic-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[11px] font-mono px-1.5 py-0.5 rounded bg-academic-100 dark:bg-academic-800 text-academic-500 border border-academic-200 dark:border-academic-700">
            ESC
          </span>
        </div>

        {/* Results Container */}
        <div className="p-2 sm:p-3 overflow-y-auto flex-1 divide-y divide-academic-100 dark:divide-academic-800/50">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-academic-400">
              <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium">Type a keyword or topic to search</p>
              <p className="text-xs text-academic-500 mt-1">
                Try "Lasso", "K-Means", "DBSCAN", "Bias-Variance", "Precision", or "Numerical"
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-academic-400">
              <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium text-academic-600 dark:text-academic-300">
                No matching study materials found
              </p>
              <p className="text-xs text-academic-500 mt-1">
                Try searching for broader terms like "Regression", "SVM", or "Clustering"
              </p>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectQuestion(item.subject.id, item.unit.id, item.id);
                  onClose();
                }}
                className="p-3 rounded-lg hover:bg-academic-50 dark:hover:bg-academic-800/60 cursor-pointer transition-colors group flex items-start justify-between gap-3"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-1.5 py-0.2 rounded border border-blue-200/50">
                      Unit {item.unit.unitNumber} • Q{item.qNumber}
                    </span>
                    <MarksBadge marks={item.marks} />
                    <ImportanceBadge category={item.importance} occurrenceCount={item.occurrenceCount} />
                  </div>
                  <h4 className="text-sm font-medium text-academic-900 dark:text-academic-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                    {item.title}
                  </h4>
                  {item.definition && (
                    <p className="text-xs text-academic-500 dark:text-academic-400 line-clamp-2">
                      {item.definition}
                    </p>
                  )}
                  <div className="flex items-center gap-1.5 text-[10px] text-academic-400 font-medium">
                    <span>{item.subject.name}</span>
                    <span>•</span>
                    <span>{item.unit.shortTitle}</span>
                    {item.papersAsked.length > 0 && (
                      <>
                        <span>•</span>
                        <span className="text-academic-500">
                          {item.papersAsked.map((p) => `${p.paper} ${p.questionNo}`).join(' | ')}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-academic-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-transform shrink-0 mt-2" />
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        {results.length > 0 && (
          <div className="px-4 py-2 bg-academic-50 dark:bg-academic-950/70 border-t border-academic-200 dark:border-academic-800 text-[11px] text-academic-500 flex items-center justify-between">
            <span>Found {results.length} result{results.length === 1 ? '' : 's'}</span>
            <span className="font-mono text-[10px]">Click any question to open directly</span>
          </div>
        )}
      </div>
    </div>
  );
};
