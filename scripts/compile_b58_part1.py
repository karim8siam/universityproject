import json
from make_b58_part1 import part1 as chunk1
from make_b58_p1_chunk2 import chunk2
from make_b58_p1_chunk3 import chunk3

all_p1 = chunk1 + chunk2 + chunk3
print(f"Total Part 1 Universities: {len(all_p1)}")

total_opps = sum(len(u["opportunities"]) for u in all_p1)
total_res = sum(len(u["researchers"]) for u in all_p1)
print(f"Total Opps: {total_opps}, Total Res: {total_res}")

content = f"""// Batch 58 Part 1: USA (14 Universities, Rows 686-731)
// Opp IDs: 8067-8150 (84 opps)
// Res IDs: 3589-3630 (42 res)

export const batch58Part1 = {json.dumps(all_p1, indent=2)};
"""

with open("scripts/batch58-data-part1.mjs", "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully written scripts/batch58-data-part1.mjs!")
