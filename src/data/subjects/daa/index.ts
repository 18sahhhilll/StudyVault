import { Subject } from '@/types';
import { daaMetadata } from './metadata';
import { daaUnit3Data } from './unit-3';

export const daaSubject: Subject = {
  ...daaMetadata,
  units: [
    daaUnit3Data
  ]
};
