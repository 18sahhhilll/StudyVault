import React, { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { DashboardView } from '@/components/dashboard/DashboardView';
import { SubjectsView } from '@/components/subjects/SubjectsView';
import { SubjectDetailView } from '@/components/subjects/SubjectDetailView';
import { UnitReadingView } from '@/components/questions/UnitReadingView';
import { ImportantQuestionsView } from '@/components/questions/ImportantQuestionsView';
import { RevisionView } from '@/components/revision/RevisionView';
import { SearchModal } from '@/components/common/SearchModal';
import { useStudyProgress } from '@/hooks/useStudyProgress';
import { getSubjectById, getUnitById } from '@/data';

export function App() {
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'subjects' | 'important' | 'revision'>('dashboard');
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Drilldown states for Subjects / Units / Questions reading
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  const {
    progress,
    toggleCompleted,
    toggleBookmarked,
    recordLastStudied,
    saveQuestionNote,
    resetAllProgress,
    totalQuestions,
    completedCount,
    bookmarkedCount,
    overallPercentage,
    getSubjectStats,
    getUnitStats,
  } = useStudyProgress();

  // Navigation handlers
  const handleOpenSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedUnitId(null);
    setActiveQuestionId(null);
    setCurrentTab('subjects');
  };

  const handleOpenUnit = (subjectId: string, unitId: string) => {
    const subject = getSubjectById(subjectId);
    const unit = subject?.units.find((u) => u.id === unitId);
    if (unit && unit.questions.length > 0) {
      setSelectedSubjectId(subjectId);
      setSelectedUnitId(unitId);
      setActiveQuestionId(unit.questions[0].id);
      recordLastStudied(subjectId, unitId, unit.questions[0].id);
      setCurrentTab('subjects');
    }
  };

  const handleOpenQuestion = (subjectId: string, unitId: string, questionId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedUnitId(unitId);
    setActiveQuestionId(questionId);
    recordLastStudied(subjectId, unitId, questionId);
    setCurrentTab('subjects');
  };

  const handleBackToSubject = () => {
    setActiveQuestionId(null);
    setSelectedUnitId(null);
  };

  const handleBackToSubjectsList = () => {
    setSelectedSubjectId(null);
    setSelectedUnitId(null);
    setActiveQuestionId(null);
  };

  // Render content according to active route & tab
  const renderContent = () => {
    if (currentTab === 'dashboard') {
      return (
        <DashboardView
          completedCount={completedCount}
          totalQuestions={totalQuestions}
          bookmarkedCount={bookmarkedCount}
          overallPercentage={overallPercentage}
          lastStudied={{
            subjectId: progress.lastStudiedSubjectId,
            unitId: progress.lastStudiedUnitId,
            questionId: progress.lastStudiedQuestionId,
          }}
          onNavigateSubject={handleOpenSubject}
          onNavigateUnit={handleOpenUnit}
          onNavigateQuestion={handleOpenQuestion}
          onNavigateImportant={() => setCurrentTab('important')}
          onNavigateRevision={() => setCurrentTab('revision')}
        />
      );
    }

    if (currentTab === 'subjects') {
      // 1. If inside a specific Question in a Unit ==> render textbook reader
      if (selectedSubjectId && selectedUnitId && activeQuestionId) {
        const subject = getSubjectById(selectedSubjectId);
        const unit = getUnitById(selectedSubjectId, selectedUnitId);
        if (subject && unit) {
          return (
            <UnitReadingView
              subject={subject}
              unit={unit}
              activeQuestionId={activeQuestionId}
              completedQuestionIds={progress.completedQuestionIds}
              bookmarkedQuestionIds={progress.bookmarkedQuestionIds}
              notesByQuestionId={progress.notesByQuestionId}
              onSelectQuestion={(qId) => {
                setActiveQuestionId(qId);
                recordLastStudied(subject.id, unit.id, qId);
              }}
              onToggleCompleted={toggleCompleted}
              onToggleBookmarked={toggleBookmarked}
              onSaveNote={saveQuestionNote}
              onBackToSubject={handleBackToSubject}
            />
          );
        }
      }

      // 2. If inside a specific Subject ==> render subject detail
      if (selectedSubjectId) {
        return (
          <SubjectDetailView
            subjectId={selectedSubjectId}
            onBack={handleBackToSubjectsList}
            onSelectUnit={(unitId) => handleOpenUnit(selectedSubjectId, unitId)}
            onSelectQuestion={(unitId, questionId) =>
              handleOpenQuestion(selectedSubjectId, unitId, questionId)
            }
            getUnitStats={getUnitStats}
            getSubjectStats={getSubjectStats}
          />
        );
      }

      // 3. Otherwise ==> render all subjects
      return (
        <SubjectsView
          onSelectSubject={handleOpenSubject}
          getSubjectStats={getSubjectStats}
        />
      );
    }

    if (currentTab === 'important') {
      return (
        <ImportantQuestionsView
          completedQuestionIds={progress.completedQuestionIds}
          bookmarkedQuestionIds={progress.bookmarkedQuestionIds}
          onSelectQuestion={handleOpenQuestion}
          onToggleCompleted={toggleCompleted}
          onToggleBookmarked={toggleBookmarked}
        />
      );
    }

    if (currentTab === 'revision') {
      return <RevisionView onSelectQuestion={handleOpenQuestion} />;
    }

    return null;
  };

  return (
    <AppLayout
      currentTab={currentTab}
      onSelectTab={(tab) => {
        setCurrentTab(tab);
        // Reset sub-drilldowns when switching major tabs
        if (tab !== 'subjects') {
          setSelectedSubjectId(null);
          setSelectedUnitId(null);
          setActiveQuestionId(null);
        }
      }}
      onOpenSearch={() => setSearchModalOpen(true)}
      completedCount={completedCount}
      totalQuestions={totalQuestions}
      overallPercentage={overallPercentage}
      onResetProgress={resetAllProgress}
    >
      {renderContent()}

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectQuestion={handleOpenQuestion}
      />
    </AppLayout>
  );
}

export default App;
