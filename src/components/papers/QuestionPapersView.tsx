import React, { useState } from 'react';
import {
  FileText,
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  BookOpen,
  HelpCircle,
  Sparkles,
  Layers,
  Filter,
  Eye,
  EyeOff,
  GraduationCap,
  ArrowRight,
  Info
} from 'lucide-react';
import { QuestionPaper, PYQPair, PYQSubQuestion, Question } from '@/types';
import { allSubjects, getQuestionById, allQuestionPapers } from '@/data';
import { MarksBadge } from '@/components/common/MarksBadge';
import { MathRenderer } from '@/components/diagrams/MathRenderer';
import { TechnicalDiagram } from '@/components/diagrams/TechnicalDiagram';
import { StepByStepSolver } from '@/components/numericals/StepByStepSolver';

interface QuestionPapersViewProps {
  onNavigateQuestion: (subjectId: string, unitId: string, questionId: string) => void;
  onNavigateUnit: (subjectId: string, unitId: string) => void;
}

export const QuestionPapersView: React.FC<QuestionPapersViewProps> = ({
  onNavigateQuestion,
  onNavigateUnit,
}) => {
  // State: selected subject
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('daa');

  // Filter papers by subject
  const papersForSubject = allQuestionPapers.filter((p) => p.subjectId === selectedSubjectId);

  // State: selected paper
  const [selectedPaperId, setSelectedPaperId] = useState<string>(
    papersForSubject.length > 0 ? papersForSubject[0].id : ''
  );

  // State: active paper
  const currentPaper = papersForSubject.find((p) => p.id === selectedPaperId) || papersForSubject[0];

  // State: unit filter (null = all units)
  const [filterUnitNumber, setFilterUnitNumber] = useState<number | null>(null);

  // State: expanded question answers (keyed by subNumber, e.g. "Q1(a)")
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  // State: active tab per question pair (main vs or)
  const [pairActiveChoice, setPairActiveChoice] = useState<Record<number, 'main' | 'or'>>({
    1: 'main',
    2: 'main',
    3: 'main',
    4: 'main',
  });

  // Toggle single solution
  const toggleSolution = (subKey: string) => {
    setExpandedSolutions((prev) => ({
      ...prev,
      [subKey]: !prev[subKey],
    }));
  };

  // Expand all solutions in current view
  const expandAll = () => {
    if (!currentPaper) return;
    const allKeys: Record<string, boolean> = {};
    currentPaper.pairs.forEach((pair) => {
      pair.mainQuestion.subQuestions.forEach((sq) => {
        allKeys[`${pair.pairNumber}-${sq.subNumber}`] = true;
      });
      pair.orQuestion.subQuestions.forEach((sq) => {
        allKeys[`${pair.pairNumber}-${sq.subNumber}`] = true;
      });
    });
    setExpandedSolutions(allKeys);
  };

  // Collapse all solutions
  const collapseAll = () => {
    setExpandedSolutions({});
  };

  // Check how many solutions are currently expanded
  const expandedCount = Object.values(expandedSolutions).filter(Boolean).length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 font-sans selection:bg-blue-500/20 selection:text-blue-700 dark:selection:text-blue-300">
      {/* 1. Header & Title Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-700 text-white p-6 sm:p-8 shadow-md overflow-hidden">
        <div className="absolute right-0 top-0 -mt-6 -mr-6 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-blue-100 border border-white/20 backdrop-blur-xs">
              <GraduationCap className="w-3.5 h-3.5 text-blue-200" />
              SPPU B.E. Computer Engineering (2019 Pattern)
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-100 border border-emerald-400/30">
              <Sparkles className="w-3 h-3 text-emerald-300" />
              100% Solved Solutions
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Solved University Question Papers (PYQs)
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-3xl leading-relaxed">
            Practice authentic question papers with full answers, step-by-step numerical solvers, KaTeX mathematical derivations, and custom interactive SVG diagrams.
          </p>
        </div>
      </div>

      {/* 2. Subject Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-1 border-b border-academic-200 dark:border-academic-800">
        {allSubjects.map((subject) => {
          const isSelected = subject.id === selectedSubjectId;
          const paperCount = allQuestionPapers.filter((p) => p.subjectId === subject.id).length;

          return (
            <button
              key={subject.id}
              onClick={() => {
                setSelectedSubjectId(subject.id);
                const firstPaper = allQuestionPapers.find((p) => p.subjectId === subject.id);
                if (firstPaper) setSelectedPaperId(firstPaper.id);
                setFilterUnitNumber(null);
                setExpandedSolutions({});
              }}
              className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-150 flex items-center gap-2 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-academic-900 text-academic-700 dark:text-academic-300 hover:bg-academic-100 dark:hover:bg-academic-800 border border-academic-200 dark:border-academic-800'
              }`}
            >
              <span>{subject.name}</span>
              {paperCount > 0 ? (
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50'
                  }`}
                >
                  {paperCount} Papers
                </span>
              ) : (
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-academic-100 dark:bg-academic-800 text-academic-500">
                  Upload Pending
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Fallback if no papers are present for chosen subject */}
      {papersForSubject.length === 0 ? (
        <div className="p-10 rounded-2xl border-2 border-dashed border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900/50 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center">
            <FileText className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-academic-900 dark:text-academic-100">
              No Question Papers Uploaded Yet for This Subject
            </h3>
            <p className="text-sm text-academic-500 max-w-md mx-auto">
              You can provide the question papers and decodes for this subject, and they will be solved and indexed question paper-wise right here!
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* 3. Paper Switcher Pills */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-academic-500 dark:text-academic-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              Select Question Paper / Examination Session:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {papersForSubject.map((paper) => {
                const isSelected = paper.id === selectedPaperId;
                return (
                  <button
                    key={paper.id}
                    onClick={() => {
                      setSelectedPaperId(paper.id);
                      setExpandedSolutions({});
                    }}
                    className={`p-3.5 rounded-xl text-left border transition-all duration-150 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20 shadow-xs'
                        : 'bg-white dark:bg-academic-900 border-academic-200 dark:border-academic-800 hover:border-academic-300 dark:hover:border-academic-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-academic-100 dark:bg-academic-800 text-academic-600 dark:text-academic-400'
                          }`}
                        >
                          {paper.paperCode}
                        </span>
                        <span className="text-[10px] text-academic-500 font-medium">
                          {paper.examType}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-academic-900 dark:text-academic-100">
                        {paper.monthYear}
                      </h4>
                    </div>
                    <div className="mt-2 pt-2 border-t border-academic-100 dark:border-academic-800/80 flex items-center justify-between text-[11px] text-academic-500">
                      <span>Max: {paper.maxMarks}M</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        8 Questions
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Active Paper Information & Official Exam Header */}
          {currentPaper && (
            <div className="rounded-2xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 shadow-sm overflow-hidden">
              {/* Paper Official Header Banner */}
              <div className="p-4 sm:p-6 bg-academic-50/70 dark:bg-academic-900/90 border-b border-academic-200 dark:border-academic-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200/60">
                        {currentPaper.paperCode}
                      </span>
                      {currentPaper.paperSubCode && (
                        <span className="font-mono text-xs text-academic-500 bg-academic-200/60 dark:bg-academic-800 px-2 py-0.5 rounded">
                          {currentPaper.paperSubCode}
                        </span>
                      )}
                      <span className="text-xs font-semibold text-academic-600 dark:text-academic-400">
                        • {currentPaper.pattern}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-academic-900 dark:text-academic-100">
                      {currentPaper.subjectName} ({currentPaper.subjectCode})
                    </h2>
                    <p className="text-xs sm:text-sm text-academic-600 dark:text-academic-400">
                      B.E. (Computer Engineering) — {currentPaper.semester} • {currentPaper.monthYear}
                    </p>
                  </div>

                  {/* Seat No & Exam Stats Box */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right text-xs space-y-0.5">
                      <div className="flex items-center gap-1.5 text-academic-600 dark:text-academic-400">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span>Time: {currentPaper.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-bold text-academic-800 dark:text-academic-200">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>Max Marks: {currentPaper.maxMarks}</span>
                      </div>
                    </div>

                    <div className="hidden sm:block border-2 border-dashed border-academic-300 dark:border-academic-700 rounded-lg p-2 text-center w-28">
                      <span className="block text-[10px] text-academic-500 font-mono">SEAT NO.</span>
                      <span className="block text-xs font-mono font-bold text-academic-400">____</span>
                    </div>
                  </div>
                </div>

                {/* Instructions Bar */}
                <div className="text-xs bg-white dark:bg-academic-950/60 p-3 rounded-xl border border-academic-200/80 dark:border-academic-800 space-y-1 text-academic-600 dark:text-academic-400">
                  <span className="font-bold text-academic-700 dark:text-academic-300 block">
                    Instructions to Candidates:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px]">
                    {currentPaper.instructions.map((inst, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{inst}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Toolbar: Filter by Unit + Expand/Collapse All */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-academic-200/60 dark:border-academic-800/60">
                  {/* Unit Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs text-academic-500 font-medium mr-1 flex items-center gap-1">
                      <Filter className="w-3 h-3" />
                      Filter Unit:
                    </span>
                    <button
                      onClick={() => setFilterUnitNumber(null)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                        filterUnitNumber === null
                          ? 'bg-academic-800 text-white dark:bg-academic-200 dark:text-academic-900'
                          : 'bg-white dark:bg-academic-800 text-academic-600 dark:text-academic-400 hover:bg-academic-100'
                      }`}
                    >
                      All 4 Units
                    </button>
                    {[3, 4, 5, 6].map((uNum) => (
                      <button
                        key={uNum}
                        onClick={() => setFilterUnitNumber(uNum)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                          filterUnitNumber === uNum
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-academic-800 text-academic-600 dark:text-academic-400 hover:bg-academic-100'
                        }`}
                      >
                        Unit {uNum}
                      </button>
                    ))}
                  </div>

                  {/* Expand/Collapse All Buttons */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={expandAll}
                      className="flex-1 sm:flex-none justify-center px-3 py-1.5 sm:py-1 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-100 border border-blue-200/50 transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Expand All
                    </button>
                    <button
                      onClick={collapseAll}
                      className="flex-1 sm:flex-none justify-center px-3 py-1.5 sm:py-1 rounded-lg text-xs font-medium bg-academic-100 dark:bg-academic-800 text-academic-600 dark:text-academic-400 hover:bg-academic-200 transition-colors flex items-center gap-1.5"
                    >
                      <EyeOff className="w-3.5 h-3.5" />
                      Collapse All
                    </button>
                  </div>
                </div>
              </div>

              {/* 5. Paper Question Pairs Accordion */}
              <div className="p-4 sm:p-6 space-y-6">
                {currentPaper.pairs
                  .filter((pair) => filterUnitNumber === null || pair.unitNumber === filterUnitNumber)
                  .map((pair) => {
                    const activeChoice = pairActiveChoice[pair.pairNumber] || 'main';
                    const activeQuestionData =
                      activeChoice === 'main' ? pair.mainQuestion : pair.orQuestion;

                    return (
                      <div
                        key={pair.pairNumber}
                        className="rounded-xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-950/40 shadow-xs overflow-hidden"
                      >
                        {/* Section Header with Pair Title & Unit Indicator */}
                        <div className="px-3.5 sm:px-4 py-3 bg-academic-50 dark:bg-academic-900 border-b border-academic-200 dark:border-academic-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                              U{pair.unitNumber}
                            </span>
                            <div className="min-w-0">
                              <h3 className="text-xs sm:text-sm font-bold text-academic-900 dark:text-academic-100 truncate">
                                {pair.pairTitle}
                              </h3>
                              <p className="text-[11px] text-academic-500">
                                Solve {pair.mainQuestion.questionNumber} OR {pair.orQuestion.questionNumber} (Internal Choice)
                              </p>
                            </div>
                          </div>

                          {/* Main vs OR Toggle Switch */}
                          <div className="flex items-center justify-center p-1 rounded-lg bg-academic-200/80 dark:bg-academic-800 text-xs font-semibold w-full sm:w-auto">
                            <button
                              onClick={() =>
                                setPairActiveChoice((prev) => ({
                                  ...prev,
                                  [pair.pairNumber]: 'main',
                                }))
                              }
                              className={`flex-1 sm:flex-none px-3 py-1.5 sm:py-1 rounded-md transition-all text-center ${
                                activeChoice === 'main'
                                  ? 'bg-white dark:bg-academic-900 text-blue-600 dark:text-blue-400 shadow-xs font-bold'
                                  : 'text-academic-600 dark:text-academic-400 hover:text-academic-900'
                              }`}
                            >
                              {pair.mainQuestion.questionNumber} ({pair.mainQuestion.totalMarks}M)
                            </button>
                            <span className="px-2 text-academic-400 font-bold text-[10px]">OR</span>
                            <button
                              onClick={() =>
                                setPairActiveChoice((prev) => ({
                                  ...prev,
                                  [pair.pairNumber]: 'or',
                                }))
                              }
                              className={`flex-1 sm:flex-none px-3 py-1.5 sm:py-1 rounded-md transition-all text-center ${
                                activeChoice === 'or'
                                  ? 'bg-white dark:bg-academic-900 text-blue-600 dark:text-blue-400 shadow-xs font-bold'
                                  : 'text-academic-600 dark:text-academic-400 hover:text-academic-900'
                              }`}
                            >
                              {pair.orQuestion.questionNumber} ({pair.orQuestion.totalMarks}M)
                            </button>
                          </div>
                        </div>

                        {/* Questions List for Active Choice */}
                        <div className="p-3.5 sm:p-5 space-y-5 divide-y divide-academic-100 dark:divide-academic-800/80">
                          {activeQuestionData.subQuestions.map((subQ, idx) => {
                            const subKey = `${pair.pairNumber}-${subQ.subNumber}`;
                            const isExpanded = !!expandedSolutions[subKey];
                            const fullQuestion = getQuestionById(
                              subQ.mappedSubjectId,
                              subQ.mappedUnitId,
                              subQ.mappedQuestionId
                            );

                            return (
                              <div
                                key={subQ.subNumber}
                                className={idx > 0 ? 'pt-5' : ''}
                              >
                                {/* Question Header Row */}
                                <div className="space-y-3">
                                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                    <div className="flex items-start gap-2.5 flex-1 min-w-0">
                                      <span className="font-mono font-extrabold text-sm text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                                        {subQ.subNumber}
                                      </span>
                                      <div className="space-y-1.5 flex-1 min-w-0">
                                        <p className="text-sm sm:text-base font-semibold text-academic-900 dark:text-academic-100 leading-relaxed whitespace-pre-line break-words">
                                          {subQ.text}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-2 pt-1">
                                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 whitespace-nowrap">
                                            [{subQ.marks} Marks]
                                          </span>
                                          <span className="text-[11px] text-academic-500">
                                            Unit {subQ.unitNumber}: {subQ.unitTitle}
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Expand Solution Button */}
                                    <button
                                      onClick={() => toggleSolution(subKey)}
                                      className={`w-full sm:w-auto px-4 py-2 sm:py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all duration-150 flex items-center justify-center sm:justify-start gap-1.5 ${
                                        isExpanded
                                          ? 'bg-blue-600 text-white shadow-xs'
                                          : 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60 hover:bg-blue-100 dark:hover:bg-blue-900/80'
                                      }`}
                                    >
                                      <span>{isExpanded ? 'Hide Solution' : 'View Solved Solution'}</span>
                                      {isExpanded ? (
                                        <ChevronDown className="w-3.5 h-3.5" />
                                      ) : (
                                        <ChevronRight className="w-3.5 h-3.5" />
                                      )}
                                    </button>
                                  </div>

                                  {/* Solution Content Area (Expanded) */}
                                  {isExpanded && (
                                    <div className="mt-4 p-3.5 sm:p-6 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/20 dark:bg-blue-950/20 space-y-6 transition-all duration-200">
                                      {fullQuestion ? (
                                        <>
                                          {/* Solution Banner */}
                                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-blue-200/60 dark:border-blue-900/60">
                                            <div className="flex items-center gap-2">
                                              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                                              <span className="text-xs font-bold text-academic-800 dark:text-academic-200 uppercase tracking-wider">
                                                Complete Examination Answer
                                              </span>
                                            </div>
                                            <button
                                              onClick={() =>
                                                onNavigateQuestion(
                                                  subQ.mappedSubjectId,
                                                  subQ.mappedUnitId,
                                                  subQ.mappedQuestionId
                                                )
                                              }
                                              className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 self-start sm:self-auto"
                                            >
                                              <span>Open in Unit Reader</span>
                                              <ExternalLink className="w-3 h-3" />
                                            </button>
                                          </div>

                                          {/* Formal Definition */}
                                          {fullQuestion.definition && (
                                            <div className="p-3.5 rounded-lg bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 text-xs sm:text-sm text-academic-800 dark:text-academic-200 leading-relaxed">
                                              <strong className="text-blue-600 dark:text-blue-400 font-semibold block mb-1">
                                                Core Definition:
                                              </strong>
                                              {fullQuestion.definition}
                                            </div>
                                          )}

                                          {/* Interactive Step-by-Step Numerical Solver */}
                                          {fullQuestion.numericalSolution && (
                                            <div className="space-y-2">
                                              <div className="flex items-center gap-2">
                                                <Sparkles className="w-4 h-4 text-amber-500" />
                                                <h4 className="text-xs sm:text-sm font-bold text-academic-900 dark:text-academic-100">
                                                  Step-by-Step Interactive Numerical Solution
                                                </h4>
                                              </div>
                                              <StepByStepSolver
                                                solution={fullQuestion.numericalSolution}
                                              />
                                            </div>
                                          )}

                                          {/* Technical SVG Diagrams */}
                                          {fullQuestion.diagrams && fullQuestion.diagrams.length > 0 && (
                                            <div className="space-y-3">
                                              {fullQuestion.diagrams.map((diag) => (
                                                <TechnicalDiagram key={diag.id} diagram={diag} />
                                              ))}
                                            </div>
                                          )}

                                          {/* Answer Sections */}
                                          <div className="space-y-6">
                                            {fullQuestion.sections.map((sec, secIdx) => (
                                              <div key={secIdx} className="space-y-3">
                                                <h4 className="text-sm sm:text-base font-bold text-academic-900 dark:text-academic-100 border-b border-academic-200/80 dark:border-academic-800 pb-1.5">
                                                  {sec.title}
                                                </h4>

                                                {/* Bullet Points */}
                                                {sec.content && sec.content.length > 0 && (
                                                  <ul className="space-y-2">
                                                    {sec.content.map((point, pIdx) => (
                                                      <li
                                                        key={pIdx}
                                                        className="text-xs sm:text-sm text-academic-700 dark:text-academic-300 leading-relaxed flex items-start gap-2"
                                                      >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                                                        <span>{point}</span>
                                                      </li>
                                                    ))}
                                                  </ul>
                                                )}

                                                {/* Code Blocks */}
                                                {sec.codeBlock && (
                                                  <div className="rounded-lg bg-academic-950 text-academic-100 p-3 sm:p-4 font-mono text-xs overflow-x-auto shadow-inner">
                                                    <pre>{sec.codeBlock.code}</pre>
                                                  </div>
                                                )}

                                                {/* Formulas */}
                                                {sec.formulas && sec.formulas.length > 0 && (
                                                  <div className="space-y-2 my-2">
                                                    {sec.formulas.map((form, fIdx) => (
                                                      <div key={fIdx} className="space-y-1">
                                                        <span className="text-[11px] font-semibold text-academic-500">
                                                          {form.name}:
                                                        </span>
                                                        <MathRenderer math={form.latex} block />
                                                      </div>
                                                    ))}
                                                  </div>
                                                )}

                                                {/* Comparison Tables */}
                                                {sec.table && (
                                                  <div className="overflow-x-auto rounded-lg border border-academic-200 dark:border-academic-800 shadow-xs my-2">
                                                    <table className="w-full min-w-[480px] text-left text-xs">
                                                      <thead className="bg-academic-100/80 dark:bg-academic-800 text-academic-700 dark:text-academic-200 font-semibold border-b border-academic-200 dark:border-academic-700">
                                                        <tr>
                                                          {sec.table.headers.map((h, i) => (
                                                            <th key={i} className="p-2.5 font-semibold">
                                                              {h}
                                                            </th>
                                                          ))}
                                                        </tr>
                                                      </thead>
                                                      <tbody className="divide-y divide-academic-100 dark:divide-academic-800">
                                                        {sec.table.rows.map((row, rIdx) => (
                                                          <tr
                                                            key={rIdx}
                                                            className="hover:bg-academic-50/50 dark:hover:bg-academic-800/30"
                                                          >
                                                            <td className={`p-2.5 font-medium text-academic-900 dark:text-academic-100 ${sec.table?.headers.length === 2 ? 'align-top leading-relaxed min-w-[200px]' : ''}`}>
                                                              {row.parameter}
                                                            </td>
                                                            {[1, 2, 3, 4, 5, 6, 7, 8].map((colNum) => {
                                                              const val = row[`col${colNum}`];
                                                              if (val === undefined) return null;
                                                              return (
                                                                <td key={colNum} className={`p-2.5 text-academic-600 dark:text-academic-400 ${sec.table?.headers.length === 2 ? 'align-top leading-relaxed min-w-[200px]' : ''}`}>
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

                                          {/* Key Points Summary Pill Grid */}
                                          {fullQuestion.keyPoints && fullQuestion.keyPoints.length > 0 && (
                                            <div className="p-3 rounded-lg bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 space-y-2">
                                              <span className="text-[11px] font-bold text-academic-500 uppercase tracking-wider block">
                                                Exam Key Points / Keywords to Memorize:
                                              </span>
                                              <div className="flex flex-wrap gap-1.5">
                                                {fullQuestion.keyPoints.map((kp, kIdx) => (
                                                  <span
                                                    key={kIdx}
                                                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-academic-100 dark:bg-academic-800 text-academic-700 dark:text-academic-300"
                                                  >
                                                    • {kp}
                                                  </span>
                                                ))}
                                              </div>
                                            </div>
                                          )}
                                        </>
                                      ) : (
                                        <div className="p-4 text-center text-xs text-academic-500">
                                          Solution mapped to Question {subQ.mappedQuestionId}.
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
