---
layout: default
title: Sparse Polynomial Divisibility Test over Finite Field is CoNP-hard
authors: Yichuan Cao, Ruichen Qiu, Qiao-Long Huang, Ruyong Feng, Xiao-Shan Gao
abstract: >-
 In this paper, we show that deciding whether a sparse polynomial does not divide another sparse polynomial exactly over finite fields is NP-hard under BPP many-one reductions. Equivalently, the sparse polynomial divisibility test over finite fields is CoNP-hard. This resolves the long-standing open problem concerning the computational complexity of the divisibility test for sparse polynomials in the setting of finite fields.
tag: Theory of Computation
publication_date: 2026-06-10 14:25:06 +0000
arxiv: https://arxiv.org/abs/2606.12130
github: https://github.com/MechMath/sparse-div
permalink: /publication/sparse-div/
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

In this paper, we show that deciding whether a sparse polynomial does not divide another sparse polynomial exactly over finite fields is NP-hard under BPP many-one reductions. Equivalently, the sparse polynomial divisibility test over finite fields is CoNP-hard. This resolves the long-standing open problem concerning the computational complexity of the divisibility test for sparse polynomials in the setting of finite fields.

{% include publication-links.html publication=page %}

</article>
