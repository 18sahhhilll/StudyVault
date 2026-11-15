import re
from collections import defaultdict

with open('extracted_all_q_summary.txt', 'r', encoding='utf-8') as f:
    lines = [l.strip() for l in f if l.strip()]

units = {
    'Unit 3': [],
    'Unit 4': [],
    'Unit 5': [],
    'Unit 6': []
}

for l in lines:
    parts = l.split(" | ")
    if len(parts) >= 3:
        paper = parts[0]
        q_tag = parts[1]
        text = " | ".join(parts[2:])
        
        m_q = re.search(r'Q([1-8])', q_tag)
        if m_q:
            num = int(m_q.group(1))
            if num in (1, 2):
                units['Unit 3'].append((paper, q_tag, text))
            elif num in (3, 4):
                units['Unit 4'].append((paper, q_tag, text))
            elif num in (5, 6):
                units['Unit 5'].append((paper, q_tag, text))
            elif num in (7, 8):
                units['Unit 6'].append((paper, q_tag, text))

for u, qlist in units.items():
    print(f"\n=================== {u} (Total: {len(qlist)}) ===================")
    for p, tag, txt in qlist[:15]:
        print(f"[{p}] {tag} : {txt[:90]}")
