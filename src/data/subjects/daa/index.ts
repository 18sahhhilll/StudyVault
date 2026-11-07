import { Subject } from '@/types';
import { daaMetadata } from './metadata';
import { daaUnit3Data } from './unit-3';
import { daaUnit4Data } from './unit-4';
import { daaUnit5Data } from './unit-5';

export const daaSubject: Subject = {
  ...daaMetadata,
  units: [
    daaUnit3Data,
    daaUnit4Data,
    daaUnit5Data
  ]
};
