import { Subject, Unit } from './index';

export interface ExportOptions {
  includeNumericals: boolean; // default true
  includeDiagrams: boolean; // default true
  includeRevisionSummary: boolean; // default true
  includePersonalNotes: boolean; // default false
  onlyBookmarked: boolean; // default false
}

export const defaultExportOptions: ExportOptions = {
  includeNumericals: true,
  includeDiagrams: true,
  includeRevisionSummary: true,
  includePersonalNotes: false,
  onlyBookmarked: false,
};

export interface ExportTarget {
  type: 'unit' | 'subject';
  subject: Subject;
  unit?: Unit;
}
