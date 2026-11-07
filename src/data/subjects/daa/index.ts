import { Subject } from '@/types';
import { daaMetadata } from './metadata';
import { daaUnit3Data } from './unit-3';
import { daaUnit4Data } from './unit-4';

export const daaSubject: Subject = {
  ...daaMetadata,
  units: [
    daaUnit3Data,
    daaUnit4Data
  ]
};
