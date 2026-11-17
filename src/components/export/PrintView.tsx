import React, { useState } from 'react';
import { Subject, Unit, ExportOptions, defaultExportOptions } from '@/types';
import { PrintDocument } from './PrintDocument';
import {
  ArrowLeft,
  Printer,
  Download,
  Settings2,
  HelpCircle,
  FileText,
  Bookmark,
  ImageIcon,
  Calculator,
  Sparkles
} from 'lucide-react';

interface PrintViewProps {
  subject: Subject;
  unit?: Unit;
  bookmarkedQuestionIds: string[];
  notesByQuestionId: Record<string, string>;
  onBack: () => void;
  onPrint?: () => void;
}

export const PrintView: React.FC<PrintViewProps> = ({
  subject,
  unit,
  bookmarkedQuestionIds,
  notesByQuestionId,
  onBack,
  onPrint,
}) => {
  const [options, setOptions] = useState<ExportOptions>(defaultExportOptions);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const units = unit ? [unit] : subject.units;
  const isFullSubject = !unit;

  const pdfFilename = isFullSubject
    ? `${subject.name.replace(/\s+/g, '_')}_Complete_Notes`
    : `${subject.name.replace(/\s+/g, '_')}_Unit_${unit?.unitNumber}_Notes`;

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = pdfFilename;

    const wasDark = document.documentElement.classList.contains('dark');
    if (wasDark) {
      document.documentElement.classList.remove('dark');
    }

    if (onPrint) {
      onPrint();
    } else {
      setTimeout(() => {
        window.print();
        const cleanup = () => {
          document.title = originalTitle;
          if (wasDark) {
            document.documentElement.classList.add('dark');
          }
          window.removeEventListener('afterprint', cleanup);
        };
        window.addEventListener('afterprint', cleanup, { once: true });
        setTimeout(cleanup, 1000);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-academic-950 text-slate-900">
      {/* Top Action Bar (Hidden during print) */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-academic-900/95 backdrop-blur-md border-b border-slate-200 dark:border-academic-800 px-4 py-3 shadow-xs no-print">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-academic-400 hover:text-slate-900 dark:hover:text-academic-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <div className="h-4 w-[1px] bg-slate-300 dark:bg-academic-800" />
            <div>
              <h1 className="text-sm font-bold text-slate-900 dark:text-academic-100">
                PDF Print Preview: {subject.name} {unit && `(Unit ${unit.unitNumber})`}
              </h1>
              <p className="text-[11px] text-slate-500 dark:text-academic-400">
                A4 Paper • High Contrast Light Academic Format
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Options Toggle Button */}
            <div className="relative">
              <button
                onClick={() => setOptionsOpen(!optionsOpen)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 dark:border-academic-700 hover:bg-slate-50 dark:hover:bg-academic-800 text-slate-700 dark:text-academic-300 flex items-center gap-1.5 transition-colors"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Options</span>
              </button>

              {optionsOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 rounded-xl bg-white dark:bg-academic-900 border border-slate-300 dark:border-academic-700 p-3 shadow-xl space-y-2 z-50 text-xs">
                  <span className="font-bold text-slate-800 dark:text-academic-200 block border-b border-slate-200 dark:border-academic-800 pb-1">
                    Export Filters
                  </span>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-700 dark:text-academic-300">Numericals</span>
                    <input
                      type="checkbox"
                      checked={options.includeNumericals}
                      onChange={(e) => setOptions((p) => ({ ...p, includeNumericals: e.target.checked }))}
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-700 dark:text-academic-300">Diagrams</span>
                    <input
                      type="checkbox"
                      checked={options.includeDiagrams}
                      onChange={(e) => setOptions((p) => ({ ...p, includeDiagrams: e.target.checked }))}
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-700 dark:text-academic-300">Revision Summary</span>
                    <input
                      type="checkbox"
                      checked={options.includeRevisionSummary}
                      onChange={(e) => setOptions((p) => ({ ...p, includeRevisionSummary: e.target.checked }))}
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-700 dark:text-academic-300">Personal Notes</span>
                    <input
                      type="checkbox"
                      checked={options.includePersonalNotes}
                      onChange={(e) => setOptions((p) => ({ ...p, includePersonalNotes: e.target.checked }))}
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-700 dark:text-academic-300">Only Bookmarks</span>
                    <input
                      type="checkbox"
                      checked={options.onlyBookmarked}
                      onChange={(e) => setOptions((p) => ({ ...p, onlyBookmarked: e.target.checked }))}
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Tip Banner */}
        <div className="max-w-5xl mx-auto mt-2 p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-[11px] text-blue-800 dark:text-blue-300 flex items-center gap-2">
          <HelpCircle className="w-3.5 h-3.5 shrink-0" />
          <span>
            In the print preview dialog, choose <strong>&apos;Save as PDF&apos;</strong>, Paper size: <strong>A4</strong>, and check <strong>&apos;Background graphics&apos;</strong> to preserve accent colors and shaded bands.
          </span>
        </div>
      </div>

      {/* Sheet Simulation Container */}
      <div className="max-w-[210mm] mx-auto my-6 bg-white shadow-xl rounded-sm print:shadow-none print:m-0 print:max-w-none">
        <PrintDocument
          subject={subject}
          units={units}
          options={options}
          bookmarkedQuestionIds={bookmarkedQuestionIds}
          notesByQuestionId={notesByQuestionId}
        />
      </div>
    </div>
  );
};
