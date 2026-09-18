---
layout: default
title: >-
  A Dimension-Independent Commutator Bound
authors: Hao Shen, Jiaqi Wang, Lihong Zhi
abstract: >-
  We prove that every trace-zero matrix $A\in M_n(\mathbb{C})$ admits a representation $A=BC−CB$ with $B,C\in M_n(\mathbb{C})$ and $\lVert B\rVert \lVert C\rVert\leq K\lVert A\rVert$, where $K$ is an absolute constant independent of $n$, and $\lVert\cdot\rVert$ denotes the operator norm. For a fixed $t>0$, the proof splits according to whether $\lVert Re(e^{i\theta}A)\rVert_1\geq tn\lVert A\rVert$ holds for all $\theta\in\mathbb{R}$, where $\lVert\cdot\rVert_1$ denotes the trace norm. When this lower bound holds, we construct a commutator representation directly. Otherwise, the vector-selection theorem of Marcus, Spielman, and Srivastava yields smaller trace-zero compressions whose norms are small enough for the induction to close. We also construct an explicit family of zero-diagonal Hermitian unitaries that forces a lower bound of order $\sqrt{\log n}$ for $\lVert B\rVert\lVert C\rVert$ when either factor is required to be diagonal in the prescribed basis. The same family admits $\epsilon$-pavings with fewer than $2\epsilon−2$ blocks and representations by two normal factors with optimal norm product $1/2$. This establishes a distinction between unrestricted commutator bounds and bounds under a prescribed diagonal restriction. The main results and their essential inputs are formalized in Lean 4 using Mathlib. The development also includes a formal derivation of the Kadison-Singer state-extension theorem from the same vector-selection theorem.
tag: Operator Algebras
publication_date: 2026-09-09 09:28:00 +0000
arxiv: https://arxiv.org/abs/2609.09938
github: https://github.com/WuProver/lean-commutator
permalink: /publication/com-bound/
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

  We prove that every trace-zero matrix $A\in M_n(\mathbb{C})$ admits a representation $A=BC−CB$ with $B,C\in M_n(\mathbb{C})$ and $\lVert B\rVert \lVert C\rVert\leq K\lVert A\rVert$, where $K$ is an absolute constant independent of $n$, and $\lVert\cdot\rVert$ denotes the operator norm. For a fixed $t>0$, the proof splits according to whether $\lVert Re(e^{i\theta}A)\rVert_1\geq tn\lVert A\rVert$ holds for all $\theta\in\mathbb{R}$, where $\lVert\cdot\rVert_1$ denotes the trace norm. When this lower bound holds, we construct a commutator representation directly. Otherwise, the vector-selection theorem of Marcus, Spielman, and Srivastava yields smaller trace-zero compressions whose norms are small enough for the induction to close. We also construct an explicit family of zero-diagonal Hermitian unitaries that forces a lower bound of order $\sqrt{\log n}$ for $\lVert B\rVert\lVert C\rVert$ when either factor is required to be diagonal in the prescribed basis. The same family admits $\epsilon$-pavings with fewer than $2\epsilon−2$ blocks and representations by two normal factors with optimal norm product $1/2$. This establishes a distinction between unrestricted commutator bounds and bounds under a prescribed diagonal restriction. The main results and their essential inputs are formalized in Lean 4 using Mathlib. The development also includes a formal derivation of the Kadison-Singer state-extension theorem from the same vector-selection theorem.

{% include publication-links.html publication=page %}

</article>
