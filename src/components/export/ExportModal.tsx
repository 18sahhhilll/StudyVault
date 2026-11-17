import React, { useState, useMemo } from 'react';
import { Subject, Unit, ExportOptions, defaultExportOptions } from '@/types';
import {
  Download,
  X,
  FileText,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Sparkles,
  Layers,
  Bookmark,
  Calculator,
  ImageIcon,
  Loader2,
  BookOpen
} from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject;
  unit?: Unit;
  bookmarkedQuestionIds: string[];
  notesByQuestionId: Record<string, string>;
  onTriggerPrint: (options: ExportOptions, filename: string) => Promise<void>;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  subject,
  unit,
  bookmarkedQuestionIds,
  notesByQuestionId,
  onTriggerPrint,
}) => {
  const [options, setOptions] = useState<ExportOptions>(defaultExportOptions);
  const [isPreparing, setIsPreparing] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  const isFullSubject = !unit;
  const targetUnits = useMemo(() => (unit ? [unit] : subject.units), [unit, subject]);

  // Generate clean standard filename
  const pdfFilename = useMemo(() => {
    const sanitize = (str: string) => str.replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '');
    const subjClean = sanitize(subject.name);
    if (unit) {
      return `${subjClean}_Unit_${unit.unitNumber}_Notes.pdf`;
    }
    return `${subjClean}_Complete_Notes.pdf`;
  }, [subject, unit]);

  // Calculate question counts
  const totalQuestionsAvailable = useMemo(() => {
    return targetUnits.reduce((acc, u) => acc + u.questions.length, 0);
  }, [targetUnits]);

  const bookmarkedInTarget = useMemo(() => {
    return targetUnits.reduce((acc, u) => {
      const bCount = u.questions.filter((q) => bookmarkedQuestionIds.includes(q.id)).length;
      return acc + bCount;
    }, 0);
  }, [targetUnits, bookmarkedQuestionIds]);

  const questionsToExportCount = options.onlyBookmarked
    ? bookmarkedInTarget
    : totalQuestionsAvailable;

  const personalNotesInTarget = useMemo(() => {
    return targetUnits.reduce((acc, u) => {
      const nCount = u.questions.filter((q) => !!notesByQuestionId[q.id]?.trim()).length;
      return acc + nCount;
    }, 0);
  }, [targetUnits, notesByQuestionId]);

  if (!isOpen) return null;

  const handleDownload = async () => {
    if (questionsToExportCount === 0) return;
    setIsPreparing(true);
    try {
      await onTriggerPrint(options, pdfFilename);
      setSuccessNotice(true);
      setTimeout(() => {
        setSuccessNotice(false);
        onClose();
      }, 1500);
    } catch (e) {
      console.error('Print export failed:', e);
    } finally {
      setIsPreparing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-lg rounded-2xl bg-academic-900 border border-academic-750 p-6 shadow-2xl text-academic-100 space-y-5 animate-in zoom-in-95 duration-150 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="export-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-academic-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 id="export-modal-title" className="text-base font-bold text-academic-50">
                {isFullSubject ? 'Download Full Subject PDF' : 'Download Unit Notes PDF'}
              </h3>
              <p className="text-xs text-academic-400">
                Print-ready, high-resolution vector academic document
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isPreparing}
            className="p-1.5 rounded-lg text-academic-400 hover:text-academic-100 hover:bg-academic-800 transition-colors disabled:opacity-40"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Target Information Card */}
        <div className="p-3.5 rounded-xl bg-academic-950/60 border border-academic-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-950 text-blue-300 border border-blue-800">
              {subject.code} • {isFullSubject ? 'All 4 Units' : `Unit ${unit.unitNumber}`}
            </span>
            <span className="text-xs font-mono font-bold text-academic-300">
              {questionsToExportCount} Question{questionsToExportCount !== 1 ? 's' : ''}
            </span>
          </div>

          <h4 className="text-sm font-bold text-academic-50">
            {subject.name} {!isFullSubject && `— ${unit.title}`}
          </h4>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-academic-400 pt-1 border-t border-academic-800/80">
            <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate">File: {pdfFilename}</span>
          </div>
        </div>

        {/* Contents Summary Checklist */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-academic-400">
            Included Document Sections
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-academic-300 bg-academic-950/30 p-2.5 rounded-lg border border-academic-800/60">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Full Model Answers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Vector SVG Diagrams</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Comparison Tables</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>KaTeX Math Formulas</span>
            </div>
          </div>
        </div>

        {/* Export Options Toggles */}
        <div className="space-y-2.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-academic-400 flex items-center justify-between">
            <span>Export Configuration Options</span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Numerical Solutions */}
            <label className="flex items-center justify-between p-2.5 rounded-lg bg-academic-950/40 hover:bg-academic-800/40 border border-academic-800 cursor-pointer transition-colors">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-indigo-400" />
                <div>
                  <span className="font-semibold text-academic-200 block">Include Numerical Solvers</span>
                  <span className="text-[11px] text-academic-400">Step-by-step calculations with formula & workings</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={options.includeNumericals}
                onChange={(e) => setOptions((p) => ({ ...p, includeNumericals: e.target.checked }))}
                className="w-4 h-4 rounded text-blue-600 focus:ring-0 cursor-pointer accent-blue-600"
              />
            </label>

            {/* Diagrams */}
            <label className="flex items-center justify-between p-2.5 rounded-lg bg-academic-950/40 hover:bg-academic-800/40 border border-academic-800 cursor-pointer transition-colors">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-blue-400" />
                <div>
                  <span className="font-semibold text-academic-200 block">Include Visual Diagrams & Architecture</span>
                  <span className="text-[11px] text-academic-400">Inline vector graphics with captions</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={options.includeDiagrams}
                onChange={(e) => setOptions((p) => ({ ...p, includeDiagrams: e.target.checked }))}
                className="w-4 h-4 rounded text-blue-600 focus:ring-0 cursor-pointer accent-blue-600"
              />
            </label>

            {/* Fast Revision Summary */}
            <label className="flex items-center justify-between p-2.5 rounded-lg bg-academic-950/40 hover:bg-academic-800/40 border border-academic-800 cursor-pointer transition-colors">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="font-semibold text-academic-200 block">Include Fast Revision Summaries</span>
                  <span className="text-[11px] text-academic-400">Key points and exam memory bullet points</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={options.includeRevisionSummary}
                onChange={(e) => setOptions((p) => ({ ...p, includeRevisionSummary: e.target.checked }))}
                className="w-4 h-4 rounded text-blue-600 focus:ring-0 cursor-pointer accent-blue-600"
              />
            </label>

            {/* Personal Notes */}
            <label className="flex items-center justify-between p-2.5 rounded-lg bg-academic-950/40 hover:bg-academic-800/40 border border-academic-800 cursor-pointer transition-colors">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                <div>
                  <span className="font-semibold text-academic-200 block">Include My Personal Notes</span>
                  <span className="text-[11px] text-academic-400">
                    {personalNotesInTarget > 0
                      ? `${personalNotesInTarget} custom student note(s) found`
                      : 'No custom student notes recorded yet'}
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={options.includePersonalNotes}
                disabled={personalNotesInTarget === 0}
                onChange={(e) => setOptions((p) => ({ ...p, includePersonalNotes: e.target.checked }))}
                className="w-4 h-4 rounded text-blue-600 focus:ring-0 cursor-pointer accent-blue-600 disabled:opacity-40"
              />
            </label>

            {/* Only Bookmarked */}
            <label className="flex items-center justify-between p-2.5 rounded-lg bg-academic-950/40 hover:bg-academic-800/40 border border-academic-800 cursor-pointer transition-colors">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="font-semibold text-academic-200 block">Only Bookmarked Questions</span>
                  <span className="text-[11px] text-academic-400">
                    {bookmarkedInTarget} bookmarked out of {totalQuestionsAvailable} questions
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={options.onlyBookmarked}
                onChange={(e) => setOptions((p) => ({ ...p, onlyBookmarked: e.target.checked }))}
                className="w-4 h-4 rounded text-blue-600 focus:ring-0 cursor-pointer accent-blue-600"
              />
            </label>
          </div>
        </div>

        {/* Warning if 0 questions */}
        {options.onlyBookmarked && bookmarkedInTarget === 0 && (
          <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-800/80 text-xs text-amber-300 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              You have no bookmarked questions in this selection. Please bookmark questions first or uncheck &quot;Only Bookmarked Questions&quot; to export all notes.
            </span>
          </div>
        )}

        {/* Print Dialog Tip */}
        <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-900/60 text-[11px] text-blue-300 flex items-start gap-2">
          <HelpCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <span>
            <strong>Browser Print Tip:</strong> In the print preview, select Destination: <strong>&apos;Save as PDF&apos;</strong>, Paper: <strong>A4</strong>, and make sure <strong>&apos;Background graphics&apos;</strong> is checked.
          </span>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-academic-800">
          <button
            onClick={onClose}
            disabled={isPreparing}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-academic-400 hover:text-academic-100 hover:bg-academic-800 transition-colors disabled:opacity-40"
          >
            Cancel
          </button>

          <button
            onClick={handleDownload}
            disabled={isPreparing || questionsToExportCount === 0}
            className="px-5 py-2.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md flex items-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isPreparing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Preparing PDF Document...</span>
              </>
            ) : successNotice ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>PDF Ready!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download PDF ({questionsToExportCount} Qs)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
