---
layout: default
title: Irreducibility Testing of Sparse Polynomials over Integers is NP-hard and Probabilistic Polynomial Time
authors: Yichuan Cao, Xiao-Shan Gao, Qiao-Long Huang, Jiawei Nie
abstract: >-
 In this paper, we prove that irreducibility testing for sparse polynomials in $\mathbb{Z}[X]$ is coNP-hard under deterministic polynomial-time many-one reductions. That is, there exists no polynomial-time irreducibility test algorithm unless $\mathsf{P}=\mathsf{NP}$. We also provide an upper bound for this problem by demonstrating that the same irreducibility testing problem lies in $\mathsf{PP}\subset\mathsf{PSPACE}$; in other words, it can be solved in probabilistic polynomial time and, moreover, within polynomial space. The fact that $\mathsf{Sparselrred_\mathbb{Z}\in\mathsf{PP}$ relies on the quasi-Riemann hypothesis result of Cureton--Thorner and on the uniform effective prime-ideal bound by Frei--Sofos--Widmer just posted recently.
tag: Algebraic Complexity Theory
publication_date: 2026-10-27 13:04:01 +0000
arxiv: https://arxiv.org/abs/2610.37179
github: https://github.com/MechMath/sparse-irr
permalink: /publication/sparse-irr/
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

In this paper, we prove that irreducibility testing for sparse polynomials in $\mathbb{Z}[X]$ is coNP-hard under deterministic polynomial-time many-one reductions. That is, there exists no polynomial-time irreducibility test algorithm unless $\mathsf{P}=\mathsf{NP}$. We also provide an upper bound for this problem by demonstrating that the same irreducibility testing problem lies in $\mathsf{PP}\subset\mathsf{PSPACE}$; in other words, it can be solved in probabilistic polynomial time and, moreover, within polynomial space. The fact that $\mathsf{Sparselrred_\mathbb{Z}\in\mathsf{PP}$ relies on the quasi-Riemann hypothesis result of Cureton--Thorner and on the uniform effective prime-ideal bound by Frei--Sofos--Widmer just posted recently.

{% include publication-links.html publication=page %}

</article>
