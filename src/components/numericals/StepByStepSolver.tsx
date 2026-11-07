import React, { useState } from 'react';
import {
  Calculator,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Eye,
  CheckCircle,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { NumericalSolution, NumericalStep } from '@/types';
import { MathRenderer } from '@/components/diagrams/MathRenderer';

interface StepByStepSolverProps {
  solution: NumericalSolution;
}

export const StepByStepSolver: React.FC<StepByStepSolverProps> = ({ solution }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'step-by-step' | 'all-steps'>('step-by-step');
  const [revealedSteps, setRevealedSteps] = useState<number[]>([0]);

  const totalSteps = solution.steps.length;
  const currentStep = solution.steps[currentStepIndex];
  const isLastStep = currentStepIndex === totalSteps - 1;
  const isFirstStep = currentStepIndex === 0;

  const handleNextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      if (!revealedSteps.includes(nextIndex)) {
        setRevealedSteps((prev) => [...prev, nextIndex]);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleSelectStep = (index: number) => {
    setCurrentStepIndex(index);
    if (!revealedSteps.includes(index)) {
      setRevealedSteps((prev) => [...prev, index]);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setRevealedSteps([0]);
  };

  const handleRevealAll = () => {
    setViewMode('all-steps');
    setRevealedSteps(solution.steps.map((_, i) => i));
  };

  return (
    <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-indigo-950/20 dark:via-academic-900 dark:to-academic-900 shadow-md overflow-hidden transition-all">
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-indigo-100 dark:border-indigo-900/50 bg-white/70 dark:bg-academic-900/80 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Interactive Numerical Solver
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  Exam Step-by-Step
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-academic-900 dark:text-academic-100 mt-0.5">
                {solution.problemSummary}
              </h4>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-academic-100 dark:bg-academic-800 text-xs">
            <button
              onClick={() => setViewMode('step-by-step')}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                viewMode === 'step-by-step'
                  ? 'bg-white dark:bg-academic-700 text-indigo-700 dark:text-indigo-300 shadow-sm'
                  : 'text-academic-600 dark:text-academic-400 hover:text-academic-900'
              }`}
            >
              Step-by-Step Mode
            </button>
            <button
              onClick={handleRevealAll}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                viewMode === 'all-steps'
                  ? 'bg-white dark:bg-academic-700 text-indigo-700 dark:text-indigo-300 shadow-sm'
                  : 'text-academic-600 dark:text-academic-400 hover:text-academic-900'
              }`}
            >
              Show All Steps
            </button>
          </div>
        </div>

        {/* Given Data & To Find Badges */}
        <div className="mt-3.5 pt-3 border-t border-indigo-100/70 dark:border-indigo-900/40 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 space-y-1">
            <span className="font-semibold text-indigo-900 dark:text-indigo-300 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              Given Data:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {solution.givenData.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-white dark:bg-academic-800 border border-indigo-200 dark:border-indigo-800 text-academic-700 dark:text-academic-300 font-mono text-[11px]"
                >
                  <strong>{item.label}:</strong> {item.value}
                </span>
              ))}
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-1">
            <span className="font-semibold text-blue-900 dark:text-blue-300 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              To Calculate / Derive:
            </span>
            <ul className="space-y-0.5 text-[11px] text-academic-700 dark:text-academic-300">
              {solution.toFind.map((tf, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{tf}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stepper Progress Bar (for step-by-step mode) */}
      {viewMode === 'step-by-step' && (
        <div className="px-4 sm:px-6 py-3 bg-academic-50/80 dark:bg-academic-950/40 border-b border-indigo-100 dark:border-indigo-900/30">
          <div className="flex items-center justify-between text-xs font-medium text-academic-500 mb-2">
            <span>
              Step {currentStepIndex + 1} of {totalSteps}
            </span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400">
              {Math.round(((currentStepIndex + 1) / totalSteps) * 100)}% Completed
            </span>
          </div>

          {/* Step Pills Navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {solution.steps.map((step, idx) => {
              const isCurrent = idx === currentStepIndex;
              const isRevealed = revealedSteps.includes(idx);
              const isPast = idx < currentStepIndex;

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectStep(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    isCurrent
                      ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400 dark:ring-indigo-600'
                      : isPast
                      ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200'
                      : isRevealed
                      ? 'bg-academic-100 dark:bg-academic-800 text-academic-700 dark:text-academic-300'
                      : 'bg-academic-100 dark:bg-academic-800 text-academic-400 dark:text-academic-600'
                  }`}
                  title={step.title}
                >
                  {isPast ? (
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  ) : (
                    <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                  )}
                  <span className="max-w-[130px] truncate">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Interactive Step Card or All Steps List */}
      <div className="p-4 sm:p-6 space-y-6">
        {viewMode === 'step-by-step' ? (
          // Single Active Step Card
          <div className="space-y-5 animate-in fade-in duration-150">
            {/* Step Banner */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-academic-100 dark:border-academic-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-600 text-white">
                  Step {currentStep.stepNumber}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-academic-900 dark:text-academic-50">
                  {currentStep.title}
                </h3>
              </div>
              <span className="text-xs text-academic-400 hidden sm:inline">
                Click Next Step to advance
              </span>
            </div>

            {/* Step Explanation */}
            <div className="p-3.5 rounded-lg bg-academic-50 dark:bg-academic-950/60 border border-academic-200 dark:border-academic-800 text-sm sm:text-[15px] text-academic-700 dark:text-academic-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-academic-900 dark:text-academic-100 block mb-0.5">
                    Concept & Approach:
                  </strong>
                  {currentStep.explanation}
                </div>
              </div>
            </div>

            {/* Formula Block (if available) */}
            {currentStep.formula && (
              <div className="space-y-1">
                <span className="text-xs font-semibold text-academic-500 uppercase tracking-wider block">
                  Formula Applied:
                </span>
                <div className="p-3 rounded-lg bg-white dark:bg-academic-950 border border-academic-200 dark:border-academic-800 overflow-x-auto shadow-sm">
                  <MathRenderer math={currentStep.formula} block />
                </div>
              </div>
            )}

            {/* Substitution Block (if available) */}
            {currentStep.substitution && (
              <div className="space-y-1">
                <span className="text-xs font-semibold text-academic-500 uppercase tracking-wider block">
                  Values Substituted:
                </span>
                <div className="p-3 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/60 overflow-x-auto font-mono text-sm text-indigo-900 dark:text-indigo-200">
                  <MathRenderer math={currentStep.substitution} block />
                </div>
              </div>
            )}

            {/* Calculation / Arithmetic Working */}
            {currentStep.calculation && (
              <div className="space-y-1">
                <span className="text-xs font-semibold text-academic-500 uppercase tracking-wider block">
                  Working Calculation:
                </span>
                <div className="p-3 rounded-lg bg-academic-50 dark:bg-academic-950 border border-academic-200 dark:border-academic-800 text-sm font-mono text-academic-800 dark:text-academic-200 leading-relaxed whitespace-pre-line">
                  {currentStep.calculation}
                </div>
              </div>
            )}

            {/* Table (if this step is a data table) */}
            {currentStep.table && (
              <div className="overflow-x-auto rounded-lg border border-academic-200 dark:border-academic-800">
                <table className="w-full text-xs text-left">
                  <thead className="bg-academic-100 dark:bg-academic-800 text-academic-800 dark:text-academic-200 font-semibold">
                    <tr>
                      {currentStep.table.headers.map((h, i) => (
                        <th key={i} className="p-2.5">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-academic-100 dark:divide-academic-800 font-mono">
                    {currentStep.table.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={
                          rIdx === currentStep.table!.rows.length - 1
                            ? 'bg-indigo-50/70 dark:bg-indigo-950/40 font-bold'
                            : 'hover:bg-academic-50 dark:hover:bg-academic-800/40'
                        }
                      >
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-2.5">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Step Result Box */}
            {currentStep.result && (
              <div className="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 uppercase tracking-wide">
                    Step {currentStep.stepNumber} Result:
                  </span>
                </div>
                <div className="text-sm sm:text-base font-bold font-mono text-emerald-800 dark:text-emerald-300 px-3 py-1 bg-white dark:bg-academic-900 rounded border border-emerald-200 dark:border-emerald-800 shadow-sm">
                  {currentStep.result}
                </div>
              </div>
            )}

            {/* Exam Tip / Common Pitfall Alert */}
            {currentStep.tip && (
              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block mb-0.5">Exam Advice / Pitfall:</strong>
                  {currentStep.tip}
                </div>
              </div>
            )}

            {/* Navigation Buttons for Step-by-Step */}
            <div className="pt-4 border-t border-academic-100 dark:border-academic-800 flex items-center justify-between gap-3">
              <button
                onClick={handlePrevStep}
                disabled={isFirstStep}
                className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isFirstStep
                    ? 'opacity-40 cursor-not-allowed bg-academic-100 dark:bg-academic-800 text-academic-400'
                    : 'bg-white dark:bg-academic-800 border border-academic-200 dark:border-academic-700 text-academic-700 dark:text-academic-200 hover:bg-academic-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-academic-500 hover:text-academic-900 dark:hover:text-academic-100 transition-colors flex items-center gap-1"
                  title="Reset to Step 1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>

                {!isLastStep ? (
                  <button
                    onClick={handleNextStep}
                    className="px-5 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 transition-all transform active:scale-95"
                  >
                    <span>Next Step ({currentStepIndex + 2}/{totalSteps})</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleRevealAll}
                    className="px-5 py-2 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm flex items-center gap-1.5 transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>View Complete Solution</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          // All Steps Stacked View
          <div className="space-y-6">
            {solution.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-950/40 space-y-3"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-academic-100 dark:border-academic-800">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-indigo-600 text-white">
                    Step {step.stepNumber}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-academic-900 dark:text-academic-100">
                    {step.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-academic-700 dark:text-academic-300 leading-relaxed">
                  {step.explanation}
                </p>

                {step.formula && (
                  <div className="p-2.5 rounded bg-academic-50 dark:bg-academic-900 border border-academic-200 dark:border-academic-800">
                    <MathRenderer math={step.formula} block />
                  </div>
                )}

                {step.substitution && (
                  <div className="p-2.5 rounded bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900 font-mono text-xs text-indigo-900 dark:text-indigo-200">
                    <MathRenderer math={step.substitution} block />
                  </div>
                )}

                {step.calculation && (
                  <div className="p-2.5 rounded bg-academic-50 dark:bg-academic-900 text-xs font-mono text-academic-800 dark:text-academic-200 whitespace-pre-line">
                    {step.calculation}
                  </div>
                )}

                {step.table && (
                  <div className="overflow-x-auto rounded border border-academic-200 dark:border-academic-800">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-academic-100 dark:bg-academic-800 text-academic-800 dark:text-academic-200 font-semibold">
                        <tr>
                          {step.table.headers.map((h, i) => (
                            <th key={i} className="p-2">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-academic-100 dark:divide-academic-800 font-mono">
                        {step.table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={
                              rIdx === step.table!.rows.length - 1
                                ? 'bg-indigo-50/70 dark:bg-indigo-950/40 font-bold'
                                : ''
                            }
                          >
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-2">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {step.result && (
                  <div className="p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    <span>Result:</span>
                    <span className="font-mono">{step.result}</span>
                  </div>
                )}

                {step.tip && (
                  <div className="p-2 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{step.tip}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Final Exam Answer Box (Boxed as required in university exam sheets) */}
        {(isLastStep || viewMode === 'all-steps') && (
          <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border-2 border-emerald-500 dark:border-emerald-600 shadow-md animate-in slide-in-from-bottom-2 duration-200 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-sm sm:text-base font-bold text-emerald-950 dark:text-emerald-100 uppercase tracking-wide">
                Final University Examination Answer
              </h4>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-academic-900 border-2 border-dashed border-emerald-400 dark:border-emerald-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-academic-500 block">
                  {solution.finalAnswer.label}:
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-700 dark:text-emerald-300">
                  {solution.finalAnswer.value}
                </span>
              </div>
              {solution.finalAnswer.interpretation && (
                <div className="text-xs sm:text-sm text-academic-700 dark:text-academic-300 sm:max-w-md sm:text-right">
                  <strong>Interpretation:</strong> {solution.finalAnswer.interpretation}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
