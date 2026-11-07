import { Subject } from '@/types';
import { blockchainMetadata } from './metadata';
import { blockchainUnit3Data } from './unit-3';
import { blockchainUnit4Data } from './unit-4';
import { blockchainUnit5Data } from './unit-5';
import { blockchainUnit6Data } from './unit-6';

export const blockchainSubject: Subject = {
  ...blockchainMetadata,
  units: [
    blockchainUnit3Data,
    blockchainUnit4Data,
    blockchainUnit5Data,
    blockchainUnit6Data
  ]
};
