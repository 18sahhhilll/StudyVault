import os, re

def update_unit_file(filepath, unit_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update quickRevision if missing coreFormulas / comparisonHighlights / examTips
    if '"comparisonHighlights":' not in content:
        qr_replacement = f"""  "quickRevision": {{
    "keyDefinitions": [
      {{ "term": "State Model", "definition": "Dynamic behavioral view showing object lifecycles, events, and transitions over time." }},
      {{ "term": "Class Model", "definition": "Static structural view showing classes, attributes, operations, and associations." }},
      {{ "term": "Design Pattern", "definition": "A reusable solution to a commonly occurring software design problem within a context." }}
    ],
    "coreFormulas": [],
    "comparisonHighlights": [
      {{ "title": "{unit_name} Key Distinction", "summary": "Exhaustive exam-oriented separation of structural architecture vs behavioral interaction." }}
    ],
    "examTips": [
      "Always draw diagrams directly under the definition before writing detailed section explanations.",
      "In SPPU exams, use 2-column tables for comparison questions and separate numbered points for advantages and disadvantages."
    ]
  }},"""
        content = re.sub(r'  "quickRevision":\s*\{.*?keyDefinitions.*?\]\s*\},', qr_replacement, content, flags=re.DOTALL)

    # 2. Fix comparisonTable -> move into section table
    # Pattern: "comparisonTable": { "headers": [...], "rows": [[...], [...]] }
    # Let's replace each question that has comparisonTable
    def repl_comp_table(match):
        headers_str = match.group(1)
        rows_str = match.group(2)
        import json
        headers = json.loads(f"[{headers_str}]")
        rows = json.loads(f"[{rows_str}]")
        
        # Convert rows into { parameter: ..., col1: ..., col2: ... }
        formatted_rows = []
        for r in rows:
            row_obj = {}
            if len(r) == 2:
                row_obj['parameter'] = r[0]
                row_obj['col1'] = r[1]
            elif len(r) == 3:
                row_obj['parameter'] = r[0]
                row_obj['col1'] = r[1]
                row_obj['col2'] = r[2]
            else:
                row_obj['parameter'] = r[0]
                for idx, val in enumerate(r[1:]):
                    row_obj[f'col{idx+1}'] = val
            formatted_rows.append(row_obj)
        
        table_json = json.dumps({"headers": headers, "rows": formatted_rows}, indent=12)
        sec_code = f"""{{
          "title": "2. Comparative Analysis Table",
          "content": [
            "Comprehensive exam comparison structured across key technical parameters:"
          ],
          "table": {table_json}
        }}"""
        return sec_code

    # If comparisonTable exists, replace sections: [] with sections: [ repl_comp_table ]
    # Check if file has comparisonTable
    if '"comparisonTable":' in content:
        # Extract headers and rows
        m = re.search(r'"comparisonTable":\s*\{\s*"headers":\s*\[(.*?)\]\s*,\s*"rows":\s*\[(.*?)\]\s*\}\s*,\s*"sections":\s*\[\s*\]', content, re.DOTALL)
        if m:
            sec_block = repl_comp_table(m)
            content = content[:m.start()] + f'"sections": [\n        {sec_block}\n      ]' + content[m.end():]

    # 3. Add summary and keyPoints to questions missing them
    # Match each question object inside questions array
    # A question ends with `}` before the next `, {` or `]`
    # Let's do it by regex matching each question object
    q_blocks = re.findall(r'(\{\s*"id":\s*"oomd-u\d-q\d+".*?\n    \})(?=\s*,\s*\{|\s*\])', content, re.DOTALL)
    for qb in q_blocks:
        new_qb = qb
        if '"summary":' not in qb:
            # extract title
            m_title = re.search(r'"title":\s*"(.*?)"', qb)
            title = m_title.group(1) if m_title else "Question topic"
            summary_code = f',\n      "summary": [\n        "Direct university exam answer covering {title[:60]}.",\n        "Includes textbook definitions, architectural components, and practical examples.",\n        "Follows strict SPPU evaluation guidelines with diagrams placed under definition."\n      ],\n      "keyPoints": [\n        "Textbook terminology",\n        "Standard UML notations",\n        "Exam-ready structure"\n      ]'
            # insert before last }
            new_qb = qb[:-6] + summary_code + qb[-6:]
            content = content.replace(qb, new_qb)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath} successfully.")

update_unit_file('src/data/subjects/oomd/unit-3.ts', 'Unit 3: Advanced State Modeling & Interaction Modeling')
update_unit_file('src/data/subjects/oomd/unit-4.ts', 'Unit 4: User Application Analysis & System Design')
update_unit_file('src/data/subjects/oomd/unit-5.ts', 'Unit 5: Class Design, Implementation Modeling & Legacy Systems')
update_unit_file('src/data/subjects/oomd/unit-6.ts', 'Unit 6: Design Patterns')
