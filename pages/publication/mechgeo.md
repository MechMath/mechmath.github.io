---
layout: default
title: >-
  MechGeo: Autoformalizing and Proving Euclidean Geometry in Lean 4
authors: Hao Shen, Junyu Guo, Tian Cui, Yuxuan Xiao, Lihong Zhi
abstract: >-
  We present MechGeo, a Mathlib native agentic framework that jointly addresses faithful autoformalization and certified proof construction for Euclidean geometry. In this framework, GeoFormalizer represents informal problems in GeoIR, deterministically translates them into Lean 4, and iteratively repairs candidate statements using structural diagnostics and semantic evaluation. GeoProver constructs geometric proof plans, derives intermediate lemmas, and selectively algebraizes suitable subgoals through a library verified in Lean. Singular or SymPy may generate algebraic certificates, but all resulting proofs and counterexamples are checked by Lean's kernel. Experiments across seven LLM backbones show substantial improvements in autoformalization, particularly for models with weaker direct translation performance. On 43 historical IMO geometry problems, GeoFormalizer generates formal statements that GeoProver proves in 29 cases; for the remaining 14, it constructs counterexamples verified in Lean and proves all repaired statements after expert correction. Together with IMO 2026 Problem 2, this yields, to the best of our knowledge, the largest reported collection of automated, kernel-checked Lean proofs for IMO geometry problems. On the 14 geometry statements in LEAP's Lean-IMO-Bench, MechGeo proves 12 for the first time, formally refutes the remaining two, and proves both repaired statements. These results establish counterexample guided diagnosis, geometric reasoning, and certified symbolic computation as a practical foundation for trustworthy formal geometry.
tag: AI4Math
publication_date: 2026-08-03 14:24:12 +0000
arxiv: https://arxiv.org/abs/2608.02295
github: https://github.com/MechMath/MechGeoBench
permalink: /publication/mechgeo/
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

We present MechGeo, a Mathlib native agentic framework that jointly addresses faithful autoformalization and certified proof construction for Euclidean geometry. In this framework, GeoFormalizer represents informal problems in GeoIR, deterministically translates them into Lean 4, and iteratively repairs candidate statements using structural diagnostics and semantic evaluation. GeoProver constructs geometric proof plans, derives intermediate lemmas, and selectively algebraizes suitable subgoals through a library verified in Lean. Singular or SymPy may generate algebraic certificates, but all resulting proofs and counterexamples are checked by Lean's kernel. Experiments across seven LLM backbones show substantial improvements in autoformalization, particularly for models with weaker direct translation performance. On 43 historical IMO geometry problems, GeoFormalizer generates formal statements that GeoProver proves in 29 cases; for the remaining 14, it constructs counterexamples verified in Lean and proves all repaired statements after expert correction. Together with IMO 2026 Problem 2, this yields, to the best of our knowledge, the largest reported collection of automated, kernel-checked Lean proofs for IMO geometry problems. On the 14 geometry statements in LEAP's Lean-IMO-Bench, MechGeo proves 12 for the first time, formally refutes the remaining two, and proves both repaired statements. These results establish counterexample guided diagnosis, geometric reasoning, and certified symbolic computation as a practical foundation for trustworthy formal geometry.

{% include publication-links.html publication=page %}

</article>
