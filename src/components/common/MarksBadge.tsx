import React from 'react';

interface MarksBadgeProps {
  marks?: number;
  className?: string;
}

export const MarksBadge: React.FC<MarksBadgeProps> = ({ marks, className = '' }) => {
  if (!marks) return null;

  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-academic-100 text-academic-700 dark:bg-academic-800 dark:text-academic-300 border border-academic-200 dark:border-academic-700 ${className}`}
    >
      [{marks}M]
    </span>
  );
};
