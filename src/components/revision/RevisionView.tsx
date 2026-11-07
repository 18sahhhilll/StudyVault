import React, { useState } from 'react';
import {
  FileText,
  Layers,
  Sparkles,
  BookOpen,
  ArrowRight,
  Calculator,
  Table,
  CheckCircle2,
  Lightbulb
} from 'lucide-react';
import { allSubjects } from '@/data';
import { MathRenderer } from '@/components/diagrams/MathRenderer';

interface RevisionViewProps {
  onSelectQuestion: (subjectId: string, unitId: string, questionId: string) => void;
}

export const RevisionView: React.FC<RevisionViewProps> = ({ onSelectQuestion }) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(allSubjects[0].id);
  const subject = allSubjects.find((s) => s.id === selectedSubjectId) || allSubjects[0];
  const [selectedUnitId, setSelectedUnitId] = useState<string>(subject.units[0].id);

  const handleSubjectChange = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    const sub = allSubjects.find((s) => s.id === subjectId);
    if (sub && sub.units.length > 0) {
      setSelectedUnitId(sub.units[0].id);
    }
  };

  const activeUnit = subject.units.find((u) => u.id === selectedUnitId) || subject.units[0];

  const faqsInUnit = activeUnit.questions.filter((q) => q.importance === 'Frequently Asked');
  const numericalQuestionsInUnit = activeUnit.questions.filter((q) => q.numericalSolution);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Exam-Eve Quick Revision Protocol</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-academic-900 dark:text-academic-50 font-sans">
          Fast Revision Mode
        </h1>
        <p className="text-sm text-academic-500 mt-1">
          Rapidly review key definitions, core mathematical formulas, comparison tables, and high-frequency exam questions before entering the exam hall.
        </p>
      </div>

      {/* Subject Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {allSubjects.map((s) => (
          <button
            key={s.id}
            onClick={() => handleSubjectChange(s.id)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
              selectedSubjectId === s.id
                ? 'bg-academic-900 text-white dark:bg-academic-100 dark:text-academic-900 shadow-sm'
                : 'bg-academic-100 dark:bg-academic-800/80 text-academic-600 dark:text-academic-400 hover:bg-academic-200 dark:hover:bg-academic-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{s.name} ({s.code})</span>
          </button>
        ))}
      </div>

      {/* Unit Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-academic-200 dark:border-academic-800 overflow-x-auto pb-1">
        {subject.units.map((unit) => (
          <button
            key={unit.id}
            onClick={() => setSelectedUnitId(unit.id)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors border-b-2 whitespace-nowrap flex items-center gap-2 ${
              selectedUnitId === unit.id
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30'
                : 'border-transparent text-academic-500 hover:text-academic-800 dark:hover:text-academic-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Unit {unit.unitNumber}: {unit.shortTitle}</span>
          </button>
        ))}
      </div>

      {/* Unit Title and Exam Tips Box */}
      <div className="p-5 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm space-y-4">
        <div>
          <span className="text-xs font-mono font-bold text-academic-400 uppercase tracking-wider">
            Unit {activeUnit.unitNumber} Quick Summary
          </span>
          <h2 className="text-xl font-bold text-academic-900 dark:text-academic-100 mt-0.5">
            {activeUnit.title}
          </h2>
          <p className="text-xs text-academic-500 mt-1">{activeUnit.description}</p>
        </div>

        {activeUnit.quickRevision.examTips.length > 0 && (
          <div className="p-4 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>High-Yield Examination Tips</span>
            </div>
            <ul className="space-y-1.5 text-xs text-amber-900 dark:text-amber-200">
              {activeUnit.quickRevision.examTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-amber-600 shrink-0">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Core Mathematical Formulas Sheet */}
      <div className="space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
          <Calculator className="w-5 h-5 text-indigo-600" />
          <span>Core Mathematical Formulas Reference Sheet</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeUnit.quickRevision.coreFormulas.map((form, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-xs space-y-2"
            >
              <span className="text-xs font-semibold text-academic-600 dark:text-academic-300 block">
                {form.name}
              </span>
              <MathRenderer math={form.latex} block />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Solved Numericals in Unit */}
      {numericalQuestionsInUnit.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
              <Calculator className="w-5 h-5 text-indigo-600" />
              <span>Interactive Solved Numericals ({numericalQuestionsInUnit.length})</span>
            </h2>
            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 px-2.5 py-0.5 rounded-full">
              Click-to-Solve
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {numericalQuestionsInUnit.map((q) => (
              <div
                key={q.id}
                onClick={() => onSelectQuestion(subject.id, activeUnit.id, q.id)}
                className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/40 via-white to-white dark:from-indigo-950/20 dark:via-academic-900 dark:to-academic-900 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-700 transition-all cursor-pointer group space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    Unit {activeUnit.unitNumber} • Q{q.qNumber} ({q.marks} Marks)
                  </span>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Solve Step-by-Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="text-sm font-bold text-academic-900 dark:text-academic-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {q.shortTitle}
                </h3>
                {q.numericalSolution && (
                  <p className="text-xs text-academic-600 dark:text-academic-400 line-clamp-2">
                    {q.numericalSolution.problemSummary}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* High-Yield Key Definitions Glossary */}
      <div className="space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span>Key Examination Definitions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeUnit.quickRevision.keyDefinitions.map((def, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-xs space-y-1.5"
            >
              <h3 className="text-sm font-bold text-blue-700 dark:text-blue-300">
                {def.term}
              </h3>
              <p className="text-xs text-academic-700 dark:text-academic-300 leading-relaxed">
                {def.definition}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Highlights */}
      {activeUnit.quickRevision.comparisonHighlights.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
            <Table className="w-5 h-5 text-emerald-600" />
            <span>Key Comparison Highlights</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeUnit.quickRevision.comparisonHighlights.map((comp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-xs space-y-1.5"
              >
                <h3 className="text-xs font-bold text-academic-900 dark:text-academic-100 uppercase tracking-wider">
                  {comp.title}
                </h3>
                <p className="text-xs text-academic-600 dark:text-academic-300 leading-relaxed">
                  {comp.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Unit Question Paper Index Mapping Table */}
      <div className="space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
          <FileText className="w-5 h-5 text-academic-500" />
          <span>Question Paper Index (Unit {activeUnit.unitNumber} University Mapping)</span>
        </h2>
        <p className="text-xs text-academic-500">
          Cross-reference index identifying the question number where every paper's question is answered in StudyVault.
        </p>

        <div className="overflow-x-auto rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm">
          <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
            <thead className="bg-academic-50 dark:bg-academic-800/80 text-academic-700 dark:text-academic-200 font-semibold border-b border-academic-200 dark:border-academic-700">
              <tr>
                <th className="p-3 font-semibold">University Paper</th>
                <th className="p-3 font-semibold">Main Question</th>
                <th className="p-3 font-semibold">OR Option Question</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-academic-100 dark:divide-academic-800/60 font-mono text-xs">
              {activeUnit.questionPaperIndex.map((row, idx) => (
                <tr key={idx} className="hover:bg-academic-50/50 dark:hover:bg-academic-800/30">
                  <td className="p-3 font-bold text-academic-900 dark:text-academic-100 font-sans">
                    {row.paper}
                  </td>
                  <td className="p-3 text-blue-600 dark:text-blue-400">{row.qMain}</td>
                  <td className="p-3 text-academic-700 dark:text-academic-300">{row.qOr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Frequently Asked Questions for this unit */}
      <div className="space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-academic-900 dark:text-academic-100 font-sans flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-rose-500" />
          <span>Frequently Asked Questions in Unit {activeUnit.unitNumber}</span>
        </h2>

        <div className="space-y-3">
          {faqsInUnit.map((q) => (
            <div
              key={q.id}
              onClick={() => onSelectQuestion(subject.id, activeUnit.id, q.id)}
              className="p-4 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 hover:border-academic-300 dark:hover:border-academic-700 hover:shadow-xs transition-all cursor-pointer group flex items-start justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold text-academic-700 dark:text-academic-300 bg-academic-100 dark:bg-academic-800 px-2 py-0.5 rounded">
                    Q{q.qNumber}
                  </span>
                  <span className="text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-200/50">
                    {q.occurrenceCount}x in Papers
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-academic-900 dark:text-academic-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {q.title}
                </h3>
                {q.summary.length > 0 && (
                  <p className="text-xs text-academic-500 dark:text-academic-400 line-clamp-2">
                    {q.summary[0]}
                  </p>
                )}
              </div>

              <div className="text-blue-600 dark:text-blue-400 flex items-center gap-1 text-xs font-semibold shrink-0 group-hover:translate-x-0.5 transition-transform">
                <span>Revise Q{q.qNumber}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
