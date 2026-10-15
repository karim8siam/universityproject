// Batch 43 Data aggregator: combines parts 1, 2, and 3
import { part1Universities } from './batch43-data-part1.mjs';
import { part2Universities } from './batch43-data-part2.mjs';
import { part3Universities } from './batch43-data-part3.mjs';

export const batch43Universities = [
  ...part1Universities,
  ...part2Universities,
  ...part3Universities
];
