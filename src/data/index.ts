import { Subject, Unit, Question } from '@/types';
import { machineLearningSubject } from './subjects/machine-learning';
import { blockchainSubject } from './subjects/blockchain-technology';
import { daaSubject } from './subjects/daa';

export const allSubjects: Subject[] = [
  machineLearningSubject,
  blockchainSubject,
  daaSubject
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
  return results;
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
