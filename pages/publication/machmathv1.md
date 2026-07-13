---
layout: default
title: >-
  MechMath: Sorrifier-Driven Formal Decomposition Workflow for Automated Theorem Proving
authors: Ruichen Qiu, Yichuan Cao, Junqi Liu, Dakai Guo, Xiao-Shan Gao, Lihong Zhi, Ruyong Feng
abstract: >-
  Recent advances in large language models (LLMs) and LLM-based agents have substantially improved the capabilities of automated theorem proving. However, for problems that require complex mathematical reasoning, current systems rarely succeed on the first try and must repeatedly modify their proof strategies. Existing approaches for handling failed attempts typically either iteratively fix errors within the proof or discard the entire proof and regenerate it from scratch. The former leads to progressively longer contexts, which progressively degrade the model's ability to attend to the remaining unresolved subproblems, while the latter is inefficient, as it may abandon mostly correct reasoning due to localized errors. To address this dilemma, we propose _MechMath_, a novel agent system that employs a sorrifier-driven formal decomposition strategy. By leveraging the `sorry` placeholder in Lean to precisely isolate unresolved subgoals while preserving the surrounding verified proof structure, MechMath extracts each failed subproblem into a clean, self-contained context and resolves it independently. This avoids both the waste of full regeneration and the excessive context length induced by repeated repairs. Experimental results on challenging mathematical competition benchmarks, including IMO 2025, Putnam 2025, miniF2F, and a subset of ProverBench, demonstrate that our agent achieves significant advantages in proving efficiency.
tag: AI4Math
publication_date: 2026-06-26 23:59:00 +0000
arxiv: https://arxiv.org/abs/2603.24465
github: https://github.com/MechMath/MechMath-v1
permalink: /publication/mechmathv1/
citation: |
  @inproceedings{qiu2026mechmath,
    title={MechMath: Sorrifier-Driven Formal Decomposition Workflow for Automated Theorem Proving},
    author={Ruichen Qiu and Yichuan Cao and Junqi Liu and Dakai Guo and Xiao-Shan Gao and Lihong Zhi and Ruyong Feng},
    booktitle={3rd AI for Math Workshop: Toward Self-Evolving Scientific Agents},
    year={2026},
    url={https://openreview.net/forum?id=a4idI3jLJn}
  }
---

<article class="home-card publication-detail-card" markdown="1">

{% if page.publication_date %}
<div class="publication-detail-date">
  <time class="publication-date" datetime="{{ page.publication_date | date_to_xmlschema }}">{{ page.publication_date | date: "%b %-d, %Y" }}</time>
</div>
{% endif %}

# {{ page.title }}

{% if page.authors %}
<p class="publication-detail-authors">{{ page.authors }}</p>
{% endif %}

<hr class="publication-detail-divider">

## Abstract

Recent advances in large language models (LLMs) and LLM-based agents have substantially improved the capabilities of automated theorem proving. However, for problems that require complex mathematical reasoning, current systems rarely succeed on the first try and must repeatedly modify their proof strategies. Existing approaches for handling failed attempts typically either iteratively fix errors within the proof or discard the entire proof and regenerate it from scratch. The former leads to progressively longer contexts, which progressively degrade the model's ability to attend to the remaining unresolved subproblems, while the latter is inefficient, as it may abandon mostly correct reasoning due to localized errors. To address this dilemma, we propose _MechMath_, a novel agent system that employs a sorrifier-driven formal decomposition strategy. By leveraging the `sorry` placeholder in Lean to precisely isolate unresolved subgoals while preserving the surrounding verified proof structure, MechMath extracts each failed subproblem into a clean, self-contained context and resolves it independently. This avoids both the waste of full regeneration and the excessive context length induced by repeated repairs. Experimental results on challenging mathematical competition benchmarks, including IMO 2025, Putnam 2025, miniF2F, and a subset of ProverBench, demonstrate that our agent achieves significant advantages in proving efficiency.

{% include publication-links.html publication=page %}

</article>
