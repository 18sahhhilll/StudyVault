import { QuestionPaper } from '@/types';
import { daaQuestionPapers } from './daa-papers';
import { blockchainQuestionPapers } from './blockchain-papers';
import { mlQuestionPapers } from './ml-papers';

export const allQuestionPapers: QuestionPaper[] = [
  ...daaQuestionPapers,
  ...blockchainQuestionPapers,
  ...mlQuestionPapers
];

export function getPapersBySubjectId(subjectId: string): QuestionPaper[] {
  return allQuestionPapers.filter((p) => p.subjectId === subjectId);
}

export function getPaperById(paperId: string): QuestionPaper | undefined {
  return allQuestionPapers.find((p) => p.id === paperId);
}
