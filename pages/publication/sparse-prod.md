---
layout: default
title: Quasi-linear Time Multiplication of Sparse Polynomials with Integer Coefficients
authors: Qiao-Long Huang, Yichuan Cao, Ruichen Qiu, Xiao-Shan Gao
abstract: >-
  Sparse polynomial multiplication is a fundamental problem in computer algebra and the theory of computation, and the development of a quasi-linear time output-sensitive multiplication algorithm has been posed as an open challenge. In this paper, a counterexample is provided to a previously claimed solution to this open problem for integer coefficients. By employing the existing quasi-linear modular-black-box interpolation algorithm, we are able to provide an algorithm with quasi-linear bit complexity for the integer coefficients setting. Furthermore, in the case of coefficients over a finite field, we obtain an algorithm whose bit complexity is linear in the number of terms, the logarithm of the degree, and the logarithm of the size of the finite field.
publication_date: 2026-06-10 13:56:31 +0000
arxiv: https://arxiv.org/abs/2606.12100
github: https://github.com/EonMath/sparse-product
permalink: /publication/sparse-prod/
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

Sparse polynomial multiplication is a fundamental problem in computer algebra and the theory of computation, and the development of a quasi-linear time output-sensitive multiplication algorithm has been posed as an open challenge. In this paper, a counterexample is provided to a previously claimed solution to this open problem for integer coefficients. By employing the existing quasi-linear modular-black-box interpolation algorithm, we are able to provide an algorithm with quasi-linear bit complexity for the integer coefficients setting. Furthermore, in the case of coefficients over a finite field, we obtain an algorithm whose bit complexity is linear in the number of terms, the logarithm of the degree, and the logarithm of the size of the finite field.

{% include publication-links.html publication=page %}

</article>
