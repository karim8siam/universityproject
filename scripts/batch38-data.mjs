// Batch 38 Data - Aggregator for all 30 Universities
import { batch38Part1Universities } from './batch38-data-part1.mjs';
import { batch38Part2Universities } from './batch38-data-part2.mjs';
import { batch38Part3Universities } from './batch38-data-part3.mjs';

export const batch38Universities = [
  ...batch38Part1Universities,
  ...batch38Part2Universities,
  ...batch38Part3Universities
];
