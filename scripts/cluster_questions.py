import re
from collections import defaultdict

with open('all_papers_detailed.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract all questions with their paper and question number
lines = text.splitlines()
all_q = []
curr_paper = "Unknown"
curr_qnum = ""
curr_sub = ""
curr_text = []
curr_marks = ""

for l in lines:
    m_p = re.search(r'\[(\d{4})\]-(\d+)', l)
    if m_p:
        curr_paper = f"[{m_p.group(1)}]-{m_p.group(2)}"
    
    m_q = re.match(r'^(Q[1-8])\\?(?:([a-c])\\?)?', l)
    if m_q:
        if curr_text and curr_qnum:
            all_q.append({
                'paper': curr_paper,
                'qnum': curr_qnum,
                'sub': curr_sub,
                'text': ' '.join(curr_text),
                'marks': curr_marks
            })
            curr_text = []
            curr_marks = ""
        curr_qnum = m_q.group(1)
        curr_sub = m_q.group(2) or ""
        rest = l[m_q.end():].strip()
        if rest:
            curr_text.append(rest)
    elif re.match(r'^([a-c])\\', l):
        if curr_text and curr_qnum:
            all_q.append({
                'paper': curr_paper,
                'qnum': curr_qnum,
                'sub': curr_sub,
                'text': ' '.join(curr_text),
                'marks': curr_marks
            })
            curr_text = []
            curr_marks = ""
        curr_sub = l[0]
        rest = l[2:].strip()
        if rest:
            curr_text.append(rest)
    else:
        m_m = re.findall(r'\[\s*(\d+)\s*\]', l)
        if m_m:
            curr_marks = m_m[-1]
        if l and not l.startswith('===') and not l.startswith('Time') and not l.startswith('Instructions') and not l.startswith('Total') and not l.startswith('B.E.'):
            curr_text.append(l)

if curr_text and curr_qnum:
    all_q.append({
        'paper': curr_paper,
        'qnum': curr_qnum,
        'sub': curr_sub,
        'text': ' '.join(curr_text),
        'marks': curr_marks
    })

print(f"Total question items extracted: {len(all_q)}")
# Write all questions to a summary file
with open('extracted_all_q_summary.txt', 'w', encoding='utf-8') as out:
    for q in all_q:
        out.write(f"{q['paper']} | {q['qnum']}{q['sub']} [{q['marks']}M] | {q['text']}\n")

print("Wrote extracted_all_q_summary.txt successfully.")
