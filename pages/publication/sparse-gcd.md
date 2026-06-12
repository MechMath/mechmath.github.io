---
layout: default
title: Output-sensitive Sparse Polynomial GCD over Finite Fields is NP-hard
authors: Ruichen Qiu, Yichuan Cao, Qiao-Long Huang, Ruyong Feng, Xiao-Shan Gao
abstract: >-
 In this paper, we prove that output-sensitive sparse polynomial GCD computation over finite fields is NP-hard under BPP many-one reduction. More precisely, for two sparse univariate polynomials $f,g$ with finite field coefficients, there exists no randomized algorithm to compute $\mathrm{gcd}(f,g)$, which is polynomial-time in the sizes of $f,g,\mathrm{gcd}(f,g)$ under the standard complexity assumption NP$\nsubseteq$BPP. This settles the open problem posed as Challenge 5 in the book _The Sparsity Challenges_ in the finite field setting. Furthermore, we show that the Roots of Unity Detection problem over finite fields is NP-hard; that is, determining whether the GCD of a sparse univariate polynomial and $x^n−1$ has nonzero degree is NP-hard.
publication_date: 2026-06-10 14:37:49 +0000
arxiv: https://arxiv.org/abs/2606.12144
permalink: /publication/sparse-gcd/
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

In this paper, we prove that output-sensitive sparse polynomial GCD computation over finite fields is NP-hard under BPP many-one reduction. More precisely, for two sparse univariate polynomials $f,g$ with finite field coefficients, there exists no randomized algorithm to compute $\mathrm{gcd}(f,g)$, which is polynomial-time in the sizes of $f,g,\mathrm{gcd}(f,g)$ under the standard complexity assumption NP$\nsubseteq$BPP. This settles the open problem posed as Challenge 5 in the book _The Sparsity Challenges_ in the finite field setting. Furthermore, we show that the Roots of Unity Detection problem over finite fields is NP-hard; that is, determining whether the GCD of a sparse univariate polynomial and xn−1 has nonzero degree is NP-hard.

{% include publication-links.html publication=page %}

</article>
