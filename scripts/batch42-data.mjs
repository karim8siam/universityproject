// Batch 42 Data aggregator: combines parts 1, 2, and 3
import { part1Universities } from './batch42-data-part1.mjs';
import { part2Universities } from './batch42-data-part2.mjs';
import { part3Universities } from './batch42-data-part3.mjs';

export const batch42Universities = [
  ...part1Universities,
  ...part2Universities,
  ...part3Universities
];
