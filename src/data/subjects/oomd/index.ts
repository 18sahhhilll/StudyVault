import { Subject } from '@/types';
import { oomdMetadata } from './metadata';
import { unit3Data } from './unit-3';
import { unit4Data } from './unit-4';
import { unit5Data } from './unit-5';
import { unit6Data } from './unit-6';

export const oomdSubject: Subject = {
  ...oomdMetadata,
  units: [unit3Data, unit4Data, unit5Data, unit6Data]
};
