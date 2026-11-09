import React, { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { DashboardView } from '@/components/dashboard/DashboardView';
import { SubjectsView } from '@/components/subjects/SubjectsView';
import { SubjectDetailView } from '@/components/subjects/SubjectDetailView';
import { UnitReadingView } from '@/components/questions/UnitReadingView';
import { ImportantQuestionsView } from '@/components/questions/ImportantQuestionsView';
import { RevisionView } from '@/components/revision/RevisionView';
import { QuestionPapersView } from '@/components/papers/QuestionPapersView';
import { SearchModal } from '@/components/common/SearchModal';
import { useStudyProgress } from '@/hooks/useStudyProgress';
import { useNavigationRouter } from '@/hooks/useNavigationRouter';
import { getSubjectById, getUnitById } from '@/data';

export function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const {
    currentRoute,
    breadcrumbs,
    canNavigateBack,
    navigateTo,
    navigateBack,
    openSubject,
    openUnit,
    openQuestion,
    selectTab,
  } = useNavigationRouter();

  const currentTab = currentRoute.tab;
  const selectedSubjectId = currentRoute.subjectId || null;
  const selectedUnitId = currentRoute.unitId || null;
  const activeQuestionId = currentRoute.questionId || null;

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
    openSubject(subjectId);
  };

  const handleOpenUnit = (subjectId: string, unitId: string) => {
    openUnit(subjectId, unitId);
    const unit = getUnitById(subjectId, unitId);
    if (unit && unit.questions.length > 0) {
      recordLastStudied(subjectId, unitId, unit.questions[0].id);
    }
  };

  const handleOpenQuestion = (subjectId: string, unitId: string, questionId: string) => {
    openQuestion(subjectId, unitId, questionId);
    recordLastStudied(subjectId, unitId, questionId);
  };

  const handleBackToSubject = () => {
    navigateBack();
  };

  const handleBackToSubjectsList = () => {
    navigateBack();
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
          onNavigateImportant={() => selectTab('important')}
          onNavigateRevision={() => selectTab('revision')}
          onNavigatePapers={() => selectTab('papers')}
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
              onSelectQuestion={(qId) => handleOpenQuestion(subject.id, unit.id, qId)}
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

    if (currentTab === 'papers') {
      return (
        <QuestionPapersView
          onNavigateQuestion={handleOpenQuestion}
          onNavigateUnit={handleOpenUnit}
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
      onSelectTab={selectTab}
      onOpenSearch={() => setSearchModalOpen(true)}
      completedCount={completedCount}
      totalQuestions={totalQuestions}
      overallPercentage={overallPercentage}
      onResetProgress={resetAllProgress}
      canNavigateBack={canNavigateBack}
      onNavigateBack={navigateBack}
      breadcrumbs={breadcrumbs}
      onNavigateRoute={(route) => navigateTo(route)}
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
