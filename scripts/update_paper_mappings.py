# Let's update build_oomd_papers.py mappings for Unit 6
with open('src/data/papers/oomd-papers.ts', 'r', encoding='utf-8') as f:
    papers_content = f.read()

# Replace any mappedQuestionId in unit 6 with accurate IDs
mappings = [
    ('"mappedQuestionId": "oomd-u6-q4"', '"mappedQuestionId": "oomd-u6-q6"'), # Client-Dispatcher is now q6
    ('"mappedQuestionId": "oomd-u6-q5"', '"mappedQuestionId": "oomd-u6-q7"'), # Pub-Sub is now q7
    ('"mappedQuestionId": "oomd-u6-q6"', '"mappedQuestionId": "oomd-u6-q9"'), # View Handler is now q9
    ('"mappedQuestionId": "oomd-u6-q7"', '"mappedQuestionId": "oomd-u6-q11"'), # Counted Pointer is now q11
    ('"mappedQuestionId": "oomd-u6-q8"', '"mappedQuestionId": "oomd-u6-q10"')  # Idioms is now q10
]

for old, new in mappings:
    papers_content = papers_content.replace(old, new)

with open('src/data/papers/oomd-papers.ts', 'w', encoding='utf-8') as f:
    f.write(papers_content)

print("Updated mappedQuestionIds in src/data/papers/oomd-papers.ts successfully.")
