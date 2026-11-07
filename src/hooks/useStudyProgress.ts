import { useState, useEffect, useCallback } from 'react';
import { UserProgress } from '@/types';
import { allSubjects, getAllQuestions } from '@/data';

const STORAGE_KEY = 'studyvault_user_progress_v1';

const defaultProgress: UserProgress = {
  completedQuestionIds: [],
  bookmarkedQuestionIds: [],
  notesByQuestionId: {},
  updatedAt: new Date().toISOString(),
};

export function useStudyProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to read study progress from localStorage:', e);
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to persist study progress to localStorage:', e);
    }
  }, [progress]);

  const toggleCompleted = useCallback((questionId: string) => {
    setProgress((prev) => {
      const exists = prev.completedQuestionIds.includes(questionId);
      const updated = exists
        ? prev.completedQuestionIds.filter((id) => id !== questionId)
        : [...prev.completedQuestionIds, questionId];
      return {
        ...prev,
        completedQuestionIds: updated,
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  const toggleBookmarked = useCallback((questionId: string) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedQuestionIds.includes(questionId);
      const updated = exists
        ? prev.bookmarkedQuestionIds.filter((id) => id !== questionId)
        : [...prev.bookmarkedQuestionIds, questionId];
      return {
        ...prev,
        bookmarkedQuestionIds: updated,
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  const recordLastStudied = useCallback((subjectId: string, unitId: string, questionId: string) => {
    setProgress((prev) => ({
      ...prev,
      lastStudiedSubjectId: subjectId,
      lastStudiedUnitId: unitId,
      lastStudiedQuestionId: questionId,
      updatedAt: new Date().toISOString(),
    }));
  }, []);

  const saveQuestionNote = useCallback((questionId: string, note: string) => {
    setProgress((prev) => ({
      ...prev,
      notesByQuestionId: {
        ...prev.notesByQuestionId,
        [questionId]: note,
      },
      updatedAt: new Date().toISOString(),
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    setProgress({
      completedQuestionIds: [],
      bookmarkedQuestionIds: [],
      notesByQuestionId: {},
      updatedAt: new Date().toISOString(),
    });
  }, []);

  // Real Calculated Statistics
  const allQuestions = getAllQuestions();
  const totalQuestions = allQuestions.length;
  const completedCount = progress.completedQuestionIds.filter((id) =>
    allQuestions.some((q) => q.id === id)
  ).length;
  const bookmarkedCount = progress.bookmarkedQuestionIds.filter((id) =>
    allQuestions.some((q) => q.id === id)
  ).length;
  const overallPercentage = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

  const getSubjectStats = useCallback(
    (subjectId: string) => {
      const subject = allSubjects.find((s) => s.id === subjectId);
      if (!subject) return { total: 0, completed: 0, percentage: 0 };

      let total = 0;
      let completed = 0;
      subject.units.forEach((u) => {
        u.questions.forEach((q) => {
          total++;
          if (progress.completedQuestionIds.includes(q.id)) {
            completed++;
          }
        });
      });
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { total, completed, percentage };
    },
    [progress.completedQuestionIds]
  );

  const getUnitStats = useCallback(
    (subjectId: string, unitId: string) => {
      const subject = allSubjects.find((s) => s.id === subjectId);
      const unit = subject?.units.find((u) => u.id === unitId);
      if (!unit) return { total: 0, completed: 0, percentage: 0 };

      const total = unit.questions.length;
      const completed = unit.questions.filter((q) =>
        progress.completedQuestionIds.includes(q.id)
      ).length;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { total, completed, percentage };
    },
    [progress.completedQuestionIds]
  );

  return {
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
  };
}
