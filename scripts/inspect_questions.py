import re

with open('all_papers_detailed.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's inspect each paper's Q1..Q8
sections = content.split("==================== PAPER SECTION ")
for s in sections:
    if not s.strip():
        continue
    sec_num = s.split("\n")[0]
    lines = s.split("\n")[1:]
    paper_code = ""
    for l in lines[:10]:
        m = re.search(r'\[\d{4}\]-\d+', l)
        if m:
            paper_code = m.group(0)
            break
    print(f"\n>>> Section {sec_num} Paper: {paper_code} <<<")
    # print question lines
    for l in lines:
        if re.match(r'^(?:Q[1-8]|OR|\bQ\.[1-8])', l) or re.match(r'^[a-c]\\[A-Z]', l):
            print("  ", l[:100])
