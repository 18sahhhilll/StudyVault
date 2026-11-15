# Fix unit-5.ts
with open('src/data/subjects/oomd/unit-5.ts', 'r', encoding='utf-8') as f:
    u5 = f.read()

target_u5 = """      "definition": "Reverse Engineering is the process of analyzing an existing software system to extract architectural, structural, and behavioral information directly from source code and runtime artifacts to recover high-level models.",
      "comparisonTable": {
        "headers": ["Comparison Aspect", "Forward Engineering", "Reverse Engineering"],
        "rows": [
          ["Direction of Flow", "Moves forward from high-level requirements to design models to executable code.", "Moves backward from existing executable code and database schemas to design models."],
          ["Certainty & Determinism", "High certainty: Developers are guided by structured requirement documents.", "Lower certainty: Engineers must infer original design intent from incomplete code artifacts."],
          ["Methodological Nature", "Prescriptive: Tells developers how software should be constructed.", "Adaptive: Discovers and documents what developers actually did."],
          ["Time Requirement", "Substantial time required to develop software from scratch.", "Significantly less time required to recover architectural models from existing code."],
          ["Model Precision", "Final model must be complete, unambiguous, and syntactically verified.", "Recovered model can be approximate (capturing roughly 80% of core architecture)."]
        ]
      },
      "sections": ["""

replacement_u5 = """      "definition": "Reverse Engineering is the process of analyzing an existing software system to extract architectural, structural, and behavioral information directly from source code and runtime artifacts to recover high-level models.",
      "sections": [
        {
          "title": "1. Forward Engineering vs Reverse Engineering Comparison",
          "content": [
            "Technical comparison across workflow direction, certainty, and model precision:"
          ],
          "table": {
            "headers": ["Forward Engineering", "Reverse Engineering"],
            "rows": [
              {
                "parameter": "Direction of Flow: Moves forward from high-level requirements to design models to executable code.",
                "col1": "Direction of Flow: Moves backward from existing executable code and database schemas to design models."
              },
              {
                "parameter": "Certainty & Determinism: High certainty; developers are guided by structured requirement documents.",
                "col1": "Certainty & Determinism: Lower certainty; engineers infer original design intent from incomplete code artifacts."
              },
              {
                "parameter": "Methodological Nature: Prescriptive; tells developers how software should be constructed.",
                "col1": "Methodological Nature: Adaptive; discovers and documents what developers actually did."
              },
              {
                "parameter": "Time Requirement: Substantial engineering time required to develop software from scratch.",
                "col1": "Time Requirement: Significantly less time required to recover architectural models from existing code."
              },
              {
                "parameter": "Model Precision: Final model must be complete, unambiguous, and syntactically verified.",
                "col1": "Model Precision: Recovered model can be approximate (capturing roughly 80% of core architecture)."
              }
            ]
          }
        },"""

if target_u5 in u5:
    u5 = u5.replace(target_u5, replacement_u5)
    with open('src/data/subjects/oomd/unit-5.ts', 'w', encoding='utf-8') as f:
        f.write(u5)
    print("Fixed unit-5.ts")
else:
    print("target_u5 not found in unit-5.ts")

# Fix unit-6.ts
with open('src/data/subjects/oomd/unit-6.ts', 'r', encoding='utf-8') as f:
    u6 = f.read()

target_u6 = """      "definition": "An Idiom is a low-level, language-specific pattern that describes how to implement particular aspects of components or relationships using the unique features and idioms of a specific programming language.",
      "comparisonTable": {
        "headers": ["Comparison Dimension", "Design Pattern", "Programming Idiom"],
        "rows": [
          ["Level of Abstraction", "Medium to high level: Architectural arrangement of classes, roles, and relationships.", "Low level: Close to syntax, memory management, and compiler idioms."],
          ["Language Portability", "Language-independent: Can be implemented identically in C++, Java, C#, Python.", "Language-specific: Relies on unique language features (e.g., RAII in C++, decorators in Python)."],
          ["Scope of Problem", "Solves recurring software design and subsystem communication problems.", "Solves coding and implementation issues (resource cleanup, pointer safety, operator overloading)."],
          ["Examples", "Strategy, Observer, Factory Method, Client-Dispatcher-Server.", "Counted Pointer, Resource Acquisition Is Initialization (RAII), Copy-and-Swap."]
        ]
      },
      "sections": ["""

replacement_u6 = """      "definition": "An Idiom is a low-level, language-specific pattern that describes how to implement particular aspects of components or relationships using the unique features and idioms of a specific programming language.",
      "sections": [
        {
          "title": "1. Design Patterns vs Programming Idioms Comparison",
          "content": [
            "Technical comparison across abstraction level, portability, and problem scope:"
          ],
          "table": {
            "headers": ["Design Pattern", "Programming Idiom"],
            "rows": [
              {
                "parameter": "Level of Abstraction: Medium to high level; architectural arrangement of classes, roles, and relationships.",
                "col1": "Level of Abstraction: Low level; close to syntax, memory management, and compiler idioms."
              },
              {
                "parameter": "Language Portability: Language-independent; can be implemented identically in C++, Java, C#, Python.",
                "col1": "Language Portability: Language-specific; relies on unique language features (e.g., RAII in C++, decorators in Python)."
              },
              {
                "parameter": "Scope of Problem: Solves recurring software design and subsystem communication problems.",
                "col1": "Scope of Problem: Solves coding and implementation issues (resource cleanup, pointer safety, operator overloading)."
              },
              {
                "parameter": "Representative Examples: Strategy, Observer, Factory Method, Client-Dispatcher-Server.",
                "col1": "Representative Examples: Counted Pointer, Resource Acquisition Is Initialization (RAII), Copy-and-Swap."
              }
            ]
          }
        },"""

if target_u6 in u6:
    u6 = u6.replace(target_u6, replacement_u6)
    with open('src/data/subjects/oomd/unit-6.ts', 'w', encoding='utf-8') as f:
        f.write(u6)
    print("Fixed unit-6.ts")
else:
    print("target_u6 not found in unit-6.ts")
