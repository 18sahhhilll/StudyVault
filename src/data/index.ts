import { Subject, Unit, Question } from '@/types';
import { machineLearningSubject } from './subjects/machine-learning';
import { blockchainSubject } from './subjects/blockchain-technology';
import { daaSubject } from './subjects/daa';
import { stqaSubject } from './subjects/stqa';

// Helper to sort questions within each unit by occurrence frequency descending (most occurrences first)
function sortQuestionsByFrequency(unit: Unit): Unit {
  const sorted = [...unit.questions]
    .sort((a, b) => {
      // 1. Highest occurrence count first (most recurring university PYQs first)
      const countA = a.occurrenceCount ?? a.papersAsked?.length ?? 0;
      const countB = b.occurrenceCount ?? b.papersAsked?.length ?? 0;
      if (countB !== countA) {
        return countB - countA;
      }

      // 2. Tiebreaker: Frequently Asked category takes precedence
      if (a.importance !== b.importance) {
        if (a.importance === 'Frequently Asked') return -1;
        if (b.importance === 'Frequently Asked') return 1;
      }

      // 3. Tiebreaker: Higher marks first
      const marksA = a.marks ?? 0;
      const marksB = b.marks ?? 0;
      if (marksB !== marksA) {
        return marksB - marksA;
      }

      // 4. Stable order: fallback to original qNumber
      return a.qNumber - b.qNumber;
    })
    .map((q, idx) => ({
      ...q,
      qNumber: idx + 1
    }));

  return {
    ...unit,
    questions: sorted
  };
}

function processSubject(subject: Subject): Subject {
  return {
    ...subject,
    units: subject.units.map(sortQuestionsByFrequency)
  };
}

export const allSubjects: Subject[] = [
  processSubject(machineLearningSubject),
  processSubject(blockchainSubject),
  processSubject(daaSubject),
  processSubject(stqaSubject)
];

export function getSubjectById(subjectId: string): Subject | undefined {
  return allSubjects.find((s) => s.id === subjectId);
}

export function getUnitById(subjectId: string, unitId: string): Unit | undefined {
  const subject = getSubjectById(subjectId);
  if (!subject) return undefined;
  return subject.units.find((u) => u.id === unitId);
}

export function getQuestionById(subjectId: string, unitId: string, questionId: string): Question | undefined {
  const unit = getUnitById(subjectId, unitId);
  if (!unit) return undefined;
  return unit.questions.find((q) => q.id === questionId);
}

export function getAllQuestions(): (Question & { subject: Subject; unit: Unit })[] {
  const results: (Question & { subject: Subject; unit: Unit })[] = [];
  allSubjects.forEach((subject) => {
    subject.units.forEach((unit) => {
      unit.questions.forEach((q) => {
        results.push({
          ...q,
          subject,
          unit
        });
      });
    });
  });
  return results.sort((a, b) => {
    const countA = a.occurrenceCount ?? a.papersAsked?.length ?? 0;
    const countB = b.occurrenceCount ?? b.papersAsked?.length ?? 0;
    if (countB !== countA) {
      return countB - countA;
    }
    return (b.marks ?? 0) - (a.marks ?? 0);
  });
}

export function searchQuestions(query: string) {
  const qLower = query.toLowerCase().trim();
  if (!qLower) return [];

  const all = getAllQuestions();
  return all.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(qLower);
    const shortTitleMatch = item.shortTitle.toLowerCase().includes(qLower);
    const defMatch = item.definition?.toLowerCase().includes(qLower);
    const topicMatch = item.syllabusTopics.some((t) => t.toLowerCase().includes(qLower));
    const subjectMatch = item.subject.name.toLowerCase().includes(qLower);
    const unitMatch = item.unit.title.toLowerCase().includes(qLower);
    const summaryMatch = item.summary.some((s) => s.toLowerCase().includes(qLower));
    const sectionMatch = item.sections.some(
      (sec) =>
        sec.title.toLowerCase().includes(qLower) ||
        sec.content?.some((c) => c.toLowerCase().includes(qLower))
    );

    return (
      titleMatch ||
      shortTitleMatch ||
      defMatch ||
      topicMatch ||
      subjectMatch ||
      unitMatch ||
      summaryMatch ||
      sectionMatch
    );
  });
}

export * from './papers';
