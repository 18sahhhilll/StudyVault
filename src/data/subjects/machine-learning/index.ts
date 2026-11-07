import { Subject } from '@/types';
import { machineLearningMetadata } from './metadata';
import { unit3Data } from './unit-3';
import { unit4Data } from './unit-4';
import { unit5Data } from './unit-5';
import { unit6Data } from './unit-6';

export const machineLearningSubject: Subject = {
  ...machineLearningMetadata,
  units: [unit3Data, unit4Data, unit5Data, unit6Data]
};
