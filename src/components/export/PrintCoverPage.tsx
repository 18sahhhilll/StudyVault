import React from 'react';
import { Subject, Unit } from '@/types';
import { BookOpen, Award, CheckCircle2, Calendar, FileText } from 'lucide-react';

interface PrintCoverPageProps {
  subject: Subject;
  unit?: Unit;
  totalQuestions: number;
}

export const PrintCoverPage: React.FC<PrintCoverPageProps> = ({
  subject,
  unit,
  totalQuestions,
}) => {
  const isFullSubject = !unit;
  const todayFormatted = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  const allTopics = isFullSubject
    ? subject.units.flatMap((u) => u.syllabus).slice(0, 16)
    : unit.syllabus;

  return (
    <div className="print-cover-page flex flex-col justify-between min-h-[260mm] p-10 bg-white text-slate-900 border-4 border-double border-slate-300 rounded-xl relative overflow-hidden break-after-page">
      {/* Decorative Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500" />

      {/* Top Header */}
      <div className="pt-6 space-y-4">
        <div className="flex items-center justify-between border-b-2 border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
              SV
            </div>
            <div>
              <span className="text-sm font-black tracking-wider uppercase text-slate-900 block leading-tight">
                StudyVault
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold block">
                University Examination Prep Series
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200">
              {subject.code}
            </span>
          </div>
        </div>

        <div className="pt-2 text-xs font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-2">
          <span>{subject.department}</span>
          <span>•</span>
          <span>{subject.semester}</span>
        </div>
      </div>

      {/* Central Hero Block */}
      <div className="my-auto py-8 space-y-6">
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
            {isFullSubject ? 'Complete Subject Study Notes' : `Module Notes • Unit ${unit.unitNumber}`}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {subject.name}
          </h1>
          {!isFullSubject && (
            <h2 className="text-2xl font-bold text-blue-700 tracking-tight">
              Unit {unit.unitNumber}: {unit.title}
            </h2>
          )}
        </div>

        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          {isFullSubject ? subject.description : unit.description}
        </p>

        {/* Syllabus / Key Topics Highlight */}
        <div className="pt-4 space-y-2 border-t border-slate-200">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
            {isFullSubject ? 'Key Core Modules & Topics Covered:' : 'Unit Syllabus Topics Covered:'}
          </span>
          <div className="flex flex-wrap gap-1.5 max-w-2xl">
            {allTopics.map((topic, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Metadata & Exam Spec Card */}
      <div className="space-y-5 pt-6 border-t-2 border-slate-800">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              Total Questions
            </span>
            <span className="text-xl font-black text-slate-900 font-mono">
              {totalQuestions}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              PYQ Coverage
            </span>
            <span className="text-xl font-black text-blue-700 font-mono">
              2022–2025
            </span>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              Target Standard
            </span>
            <span className="text-xl font-black text-slate-900 font-mono">
              SPPU Pattern
            </span>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              Format
            </span>
            <span className="text-xl font-black text-emerald-700 font-mono">
              Model Q&A
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
          <span>StudyVault • High-Yield Engineering Notes</span>
          <span>Generated: {todayFormatted}</span>
        </div>
      </div>
    </div>
  );
};
