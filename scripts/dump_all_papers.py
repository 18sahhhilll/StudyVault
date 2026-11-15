import re

with open('extracted_pyq.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's write a script that dumps each paper cleanly to a text file for complete inspection
papers_raw = re.split(r'(?=\[\d{4}\]-\d+)', text)

with open('all_papers_detailed.txt', 'w', encoding='utf-8') as out:
    for idx, p in enumerate(papers_raw):
        clean_lines = [l.strip() for l in p.splitlines() if l.strip() and 't.me' not in l]
        out.write(f"\n==================== PAPER SECTION {idx} ====================\n")
        out.write('\n'.join(clean_lines))
        out.write("\n")

print("Wrote all_papers_detailed.txt successfully.")
