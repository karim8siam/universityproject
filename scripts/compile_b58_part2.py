import json
from make_b58_p2_chunk1 import chunk1
from make_b58_p2_chunk2 import chunk2

all_p2 = chunk1 + chunk2
print(f"Total Part 2 Universities: {len(all_p2)}")

total_opps = sum(len(u["opportunities"]) for u in all_p2)
total_res = sum(len(u["researchers"]) for u in all_p2)
print(f"Total Opps: {total_opps}, Total Res: {total_res}")

content = f"""// Batch 58 Part 2: Germany (13 Universities, Rows 306-343)
// Opp IDs: 8151-8228 (78 opps)
// Res IDs: 3631-3669 (39 res)

export const batch58Part2 = {json.dumps(all_p2, indent=2)};
"""

with open("scripts/batch58-data-part2.mjs", "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully written scripts/batch58-data-part2.mjs!")
