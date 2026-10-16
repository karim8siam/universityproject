# scripts/compile_b69_part1.py
import json
from make_b69_p1_chunk1 import chunk1
from make_b69_p1_chunk2 import chunk2

all_unis = chunk1 + chunk2
print(f"Total Part 1 USA unis: {len(all_unis)}")

SUBJECT_MAP = {
    'medicine': 'biology',
    'business': 'social-sciences',
    'arts-humanities': 'arts-design',
    'law': 'social-sciences',
    'humanities': 'arts-design',
}

def map_subject(s):
    return SUBJECT_MAP.get(s, s)

def map_subjects(sl):
    res = [SUBJECT_MAP.get(s, s) for s in sl]
    out = []
    for item in res:
        if item not in out:
            out.append(item)
    return out

start_opp_id = 10047
start_res_id = 4579

curr_opp_id = start_opp_id
curr_res_id = start_res_id

processed_unis = []

for u in all_unis:
    uni_obj = {
        "countryId": u["countryId"],
        "countryLabel": u["countryLabel"],
        "institution": u["institution"],
        "shortName": u["shortName"],
        "slug": u["slug"],
        "location": u["location"],
        "website": u["website"],
        "sourceRow": u["sourceRow"],
        "stats": u["stats"],
        "heroSummary": u["heroSummary"],
        "academicOverview": u["academicOverview"],
        "researchAdmissions": u["researchAdmissions"],
        "opportunities": [],
        "researchers": []
    }
    for opp in u["opps"]:
        opp_entry = {
            "id": curr_opp_id,
            "title": opp["title"],
            "type": opp["type"],
            "subject": map_subject(opp["subject"]),
            "subjects": map_subjects(opp["subjects"]),
            "university": u["institution"],
            "country": u["countryLabel"],
            "location": u["location"],
            "deadline": opp["deadline"],
            "deadlineText": opp["deadlineText"],
            "funding": opp["funding"],
            "fee": opp["fee"],
            "tuition": opp["tuition"],
            "desc": opp["desc"],
            "requirements": opp["requirements"],
            "source": opp["source"]
        }
        curr_opp_id += 1
        uni_obj["opportunities"].append(opp_entry)
        
    for res in u["researchers"]:
        res_entry = {
            "id": curr_res_id,
            "name": res["name"],
            "role": res["role"],
            "department": res["department"],
            "university": u["institution"],
            "country": u["countryLabel"],
            "subject": map_subject(res["subject"]),
            "recruiting": "Not verified",
            "source": u["website"],
            "bio": res["bio"]
        }
        curr_res_id += 1
        uni_obj["researchers"].append(res_entry)
        
    processed_unis.append(uni_obj)

print(f"Opp IDs: {start_opp_id} -> {curr_opp_id - 1} (Total: {curr_opp_id - start_opp_id})")
print(f"Res IDs: {start_res_id} -> {curr_res_id - 1} (Total: {curr_res_id - start_res_id})")

with open("scripts/batch69-data-part1.mjs", "w", encoding="utf-8") as f:
    f.write("// Batch 69 Part 1: USA (15 Universities: UMD to UNK)\n")
    f.write(f"// Opp IDs: {start_opp_id} to {curr_opp_id - 1}\n")
    f.write(f"// Res IDs: {start_res_id} to {curr_res_id - 1}\n\n")
    f.write("export const batch69Part1 = ")
    json.dump(processed_unis, f, indent=2, ensure_ascii=False)
    f.write(";\n")

print("Generated scripts/batch69-data-part1.mjs successfully!")
