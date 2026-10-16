# scripts/compile_b72_part2.py
import json

with open('scripts/b72_p2_chunk1_raw.json') as f:
    c1 = json.load(f)

with open('scripts/b72_p2_chunk2_raw.json') as f:
    c2 = json.load(f)

part2_unis = c1 + c2

print(f'Total universities in Part 2: {len(part2_unis)}')
total_opps = sum(len(u['opportunities']) for u in part2_unis)
total_res = sum(len(u['researchers']) for u in part2_unis)
print(f'Total opportunities: {total_opps}')
print(f'Total researchers: {total_res}')

# Output to batch72-data-part2.mjs
mjs_content = f"""// Batch 72 Part 2: USA (15 Universities: UConn Waterbury to UNM Taos)
// Opp IDs: 10677 to 10766
// Res IDs: 4894 to 4938

export const batch72Part2 = {json.dumps(part2_unis, indent=2)};
"""

with open('scripts/batch72-data-part2.mjs', 'w') as f:
    f.write(mjs_content)

print('Successfully written scripts/batch72-data-part2.mjs')
