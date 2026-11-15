import re

with open('extracted_pyq.txt', 'r', encoding='utf-8') as f:
    raw_lines = [l.strip() for l in f if l.strip() and 't.me' not in l]

# Let's clean up and reconstruct questions
papers = []
current_paper = None

for line in raw_lines:
    m = re.search(r'\[(\d{4})\]-(\d+)', line)
    if m:
        code = f"[{m.group(1)}]-{m.group(2)}"
        # Check if new paper or page header of current paper
        if not current_paper or (current_paper['code'] != code and len(current_paper['lines']) > 30):
            current_paper = {'code': code, 'lines': []}
            papers.append(current_paper)
    if current_paper:
        current_paper['lines'].append(line)

print(f"Total papers extracted: {len(papers)}")
for idx, p in enumerate(papers):
    text = '\n'.join(p['lines'])
    # Find examination session
    session = "Unknown"
    if "May" in text or "MAY" in text:
        session = "May"
    elif "Nov" in text or "NOV" in text or "Dec" in text:
        session = "Nov/Dec"
    elif "Oct" in text:
        session = "Oct"
    elif "April" in text:
        session = "April"
    
    year_match = re.search(r'202\d', text)
    year = year_match.group(0) if year_match else "Year?"
    print(f"\n--- Paper {idx+1}: {p['code']} ({session} {year}) ---")
    
    # Extract questions
    q_matches = re.findall(r'(Q[1-8]\s*(?:\\|\))?\s*[a-c]?\s*(?:\\|\))?.*?)(?=(?:Q[1-8]|\Z))', text, re.DOTALL)
    print(f"Questions block count: {len(q_matches)}")
    for q in q_matches:
        first_line = q.strip().splitlines()[0]
        marks = re.findall(r'\[\s*\d+\s*\]', q)
        print(f"  {first_line[:80]} | Marks: {marks}")
