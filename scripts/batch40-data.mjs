// Combines Batch 40 parts 1, 2, and 3
import { part1Universities } from './batch40-data-part1.mjs';
import { part2Universities } from './batch40-data-part2.mjs';
import { part3Universities } from './batch40-data-part3.mjs';

export const batch40Universities = [
  ...part1Universities,
  ...part2Universities,
  ...part3Universities
];
