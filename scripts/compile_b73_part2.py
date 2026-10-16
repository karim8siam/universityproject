# scripts/compile_b73_part2.py
import json

with open('scripts/b73_p2_chunk1_raw.json') as f:
    c1 = json.load(f)

with open('scripts/b73_p2_chunk2_raw.json') as f:
    c2 = json.load(f)

part2_unis = c1 + c2

print(f'Total universities in Part 2: {len(part2_unis)}')
total_opps = sum(len(u['opportunities']) for u in part2_unis)
total_res = sum(len(u['researchers']) for u in part2_unis)
print(f'Total opportunities: {total_opps}')
print(f'Total researchers: {total_res}')

# Output to batch73-data-part2.mjs
mjs_content = f"""// Batch 73 Part 2: USA (15 Universities: IU Nursing to Nebraska State College System)
// Opp IDs: 10857 to 10946
// Res IDs: 4984 to 5028

export const batch73Part2 = {json.dumps(part2_unis, indent=2)};
"""

with open('scripts/batch73-data-part2.mjs', 'w') as f:
    f.write(mjs_content)

print('Successfully written scripts/batch73-data-part2.mjs')
