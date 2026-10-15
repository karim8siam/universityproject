// Batch 58 Aggregate Data Module
import { batch58Part1 } from './batch58-data-part1.mjs';
import { batch58Part2 } from './batch58-data-part2.mjs';
import { batch58Part3 } from './batch58-data-part3.mjs';

export const batch58Universities = [
  ...batch58Part1,
  ...batch58Part2,
  ...batch58Part3
];
