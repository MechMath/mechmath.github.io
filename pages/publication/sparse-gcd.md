---
layout: default
title: Sparse Polynomial GCD Cannot Be Computed in Fixed-output Polynomial Time
authors: Yichuan Cao, Ruyong Feng, Xiao-Shan Gao, Qiao-Long Huang, Ruichen Qiu
abstract: >-
  This paper shows that, assuming $\\mathsf{P}\ne\mathsf{NP}$, sparse univariate polynomial GCD cannot be computed in fixed-output polynomial time over any fixed computable field. Precisely, there is no deterministic algorithm that can compute the GCD of sparse univariate polynomials over any fixed computable field with total bit complexity polynomial in the input size, with the output size as a fixed parameter. In particular, there is no deterministic algorithm for sparse polynomial GCD that runs in polynomial time with respect to both the input and the output sizes. This settles the open problem posed as Challenge 5 in the book _The Sparsity Challenges_ in the finite field setting. Furthermore, we show that the Roots of Unity Detection problem over finite fields is NP-hard under random reductions; that is, determining whether the GCD of a sparse univariate polynomial and $x^n - 1$ has nonzero degree is NP-hard.
tag: Algebraic Complexity Theory
publication_date: 2026-06-10 14:37:49 +0000
arxiv: https://arxiv.org/abs/2606.12144
github: https://github.com/MechMath/sparse-gcd
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

This paper shows that, assuming $\\mathsf{P}\ne\mathsf{NP}$, sparse univariate polynomial GCD cannot be computed in fixed-output polynomial time over any fixed computable field. Precisely, there is no deterministic algorithm that can compute the GCD of sparse univariate polynomials over any fixed computable field with total bit complexity polynomial in the input size, with the output size as a fixed parameter. In particular, there is no deterministic algorithm for sparse polynomial GCD that runs in polynomial time with respect to both the input and the output sizes. This settles the open problem posed as Challenge 5 in the book _The Sparsity Challenges_ in the finite field setting. Furthermore, we show that the Roots of Unity Detection problem over finite fields is NP-hard under random reductions; that is, determining whether the GCD of a sparse univariate polynomial and $x^n - 1$ has nonzero degree is NP-hard.

{% include publication-links.html publication=page %}

</article>
