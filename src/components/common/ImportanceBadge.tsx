import React from 'react';
import { ImportanceCategory } from '@/types';

interface ImportanceBadgeProps {
  category: ImportanceCategory;
  occurrenceCount?: number;
  className?: string;
}

export const ImportanceBadge: React.FC<ImportanceBadgeProps> = ({
  category,
  occurrenceCount,
  className = '',
}) => {
  let colorClasses = '';

  switch (category) {
    case 'Frequently Asked':
      colorClasses = 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60';
      break;
    case 'Important':
      colorClasses = 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/60';
      break;
    case 'Moderately Asked':
      colorClasses = 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900/60';
      break;
    case 'Rarely Asked':
      colorClasses = 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800/40 dark:text-slate-300 dark:border-slate-700/60';
      break;
    case 'Conceptual / Additional':
      colorClasses = 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-900/60';
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-medium border ${colorClasses} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      <span>{category}</span>
      {occurrenceCount !== undefined && occurrenceCount > 1 && (
        <span className="font-mono text-[10px] px-1 py-0.2 rounded bg-black/5 dark:bg-white/10 ml-0.5">
          {occurrenceCount}x
        </span>
      )}
    </span>
  );
};
