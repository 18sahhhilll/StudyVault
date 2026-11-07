import React, { useState } from 'react';
import { BrainCircuit, ArrowRight, Search, BookOpen, Layers } from 'lucide-react';
import { allSubjects } from '@/data';

interface SubjectsViewProps {
  onSelectSubject: (subjectId: string) => void;
  getSubjectStats: (subjectId: string) => { total: number; completed: number; percentage: number };
}

export const SubjectsView: React.FC<SubjectsViewProps> = ({
  onSelectSubject,
  getSubjectStats,
}) => {
  const [filterSemester, setFilterSemester] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = allSubjects.filter((subject) => {
    const matchesSemester = filterSemester === 'All' || subject.semester === filterSemester;
    const matchesSearch =
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSemester && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-academic-900 dark:text-academic-50 font-sans">
            Curriculum Subjects
          </h1>
          <p className="text-sm text-academic-500 mt-0.5">
            Organized subject libraries with unit-wise syllabus breakdowns and exam question banks
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Search className="w-4 h-4 text-academic-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter subjects..."
              className="pl-9 pr-3 py-1.5 text-xs rounded-lg border border-academic-300 dark:border-academic-700 bg-white dark:bg-academic-900 text-academic-800 dark:text-academic-200 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center rounded-lg border border-academic-300 dark:border-academic-700 bg-white dark:bg-academic-900 p-0.5 text-xs font-medium">
            {['All', 'Semester VI'].map((sem) => (
              <button
                key={sem}
                onClick={() => setFilterSemester(sem)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  filterSemester === sem
                    ? 'bg-academic-900 dark:bg-white text-white dark:text-academic-900 font-semibold'
                    : 'text-academic-600 dark:text-academic-400 hover:text-academic-900 dark:hover:text-academic-100'
                }`}
              >
                {sem}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubjects.map((subject) => {
          const stats = getSubjectStats(subject.id);
          return (
            <div
              key={subject.id}
              onClick={() => onSelectSubject(subject.id)}
              className="group p-6 rounded-2xl border border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 hover:border-blue-500 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-academic-100 dark:bg-academic-800 text-academic-700 dark:text-academic-300">
                      {subject.code}
                    </span>
                    <span className="block text-[11px] text-academic-400 mt-1">{subject.semester}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-academic-900 dark:text-academic-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {subject.name}
                </h3>
                <p className="text-xs text-academic-600 dark:text-academic-400 leading-relaxed mb-6 line-clamp-3">
                  {subject.description}
                </p>

                {/* Units List */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-semibold text-academic-500 flex items-center gap-1.5 uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Included Syllabus Units ({subject.units.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {subject.units.map((unit) => (
                      <div
                        key={unit.id}
                        className="p-2 rounded-lg bg-academic-50 dark:bg-academic-950/50 border border-academic-100 dark:border-academic-800/60 text-xs flex items-center justify-between"
                      >
                        <span className="font-medium text-academic-700 dark:text-academic-300">
                          Unit {unit.unitNumber}: {unit.shortTitle}
                        </span>
                        <span className="font-mono text-[11px] text-academic-400">
                          {unit.questions.length} Questions
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress and Action Footer */}
              <div className="pt-4 border-t border-academic-100 dark:border-academic-800/80">
                <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                  <span className="text-academic-500">Study Progress</span>
                  <span className="font-mono font-bold text-academic-900 dark:text-academic-100">
                    {stats.percentage}% ({stats.completed} / {stats.total})
                  </span>
                </div>
                <div className="w-full h-2 bg-academic-200 dark:bg-academic-800 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span>Enter Subject Study Material</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
