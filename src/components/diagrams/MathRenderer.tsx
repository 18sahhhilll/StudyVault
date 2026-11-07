import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ math, block = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch (err) {
      console.error('KaTeX rendering error:', err);
      return math;
    }
  }, [math, block]);

  if (block) {
    return (
      <div
        className={`my-3 p-3 overflow-x-auto rounded-lg bg-academic-100/60 dark:bg-academic-900/60 border border-academic-200/70 dark:border-academic-800/70 text-center font-mono text-sm sm:text-base ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline-block font-mono text-[0.95em] ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
