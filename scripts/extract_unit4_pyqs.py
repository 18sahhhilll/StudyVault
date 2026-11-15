with open('all_papers_detailed.txt', 'r', encoding='utf-8') as f:
    text = f.read()

import re

papers = re.split(r'={20,} PAPER SECTION \d+ ={20,}', text)

print("==== UNIT 4 PYQs EXTRACT ====\n")
for p in papers:
    lines = [l.strip() for l in p.splitlines() if l.strip() and 't.me' not in l]
    if not lines: continue
    code = ""
    for l in lines[:10]:
        m = re.search(r'\[\d{4}\]-\d+', l)
        if m: code = m.group(0); break
    
    q_lines = []
    capture = False
    for l in lines:
        if re.match(r'^Q[34]\b', l) or re.match(r'^Q\.[34]\b', l):
            capture = True
        elif re.match(r'^Q[5-8]\b', l) or re.match(r'^Q\.[5-8]\b', l):
            capture = False
        if capture:
            q_lines.append(l)
    if q_lines:
        print(f"--- Paper: {code} ---")
        print('\n'.join(q_lines))
        print()
