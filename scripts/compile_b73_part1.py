# scripts/compile_b73_part1.py
import json

with open('scripts/b73_p1_chunk1_raw.json') as f:
    c1 = json.load(f)

with open('scripts/b73_p1_chunk2_raw.json') as f:
    c2 = json.load(f)

part1_unis = c1 + c2

print(f'Total universities in Part 1: {len(part1_unis)}')
total_opps = sum(len(u['opportunities']) for u in part1_unis)
total_res = sum(len(u['researchers']) for u in part1_unis)
print(f'Total opportunities: {total_opps}')
print(f'Total researchers: {total_res}')

# Output to batch73-data-part1.mjs
mjs_content = f"""// Batch 73 Part 1: USA (15 Universities: Highlands College to Indiana University School of Medicine)
// Opp IDs: 10767 to 10856
// Res IDs: 4939 to 4983

export const batch73Part1 = {json.dumps(part1_unis, indent=2)};
"""

with open('scripts/batch73-data-part1.mjs', 'w') as f:
    f.write(mjs_content)

print('Successfully written scripts/batch73-data-part1.mjs')
