---
layout: default
title: Complexity of Low-Degree Skew Polynomial Multiplication over Finite Fields
authors: Ke Ye, Yichuan Cao, Ruichen Qiu
abstract: >-
  In this note, we study the complexity of multiplication in skew polynomial rings over finite fields. We prove that the product of two elements in $\mathbb{F}_{q^n}[x;\sigma]$ of degree at most $d < n$ can be computed using $\widetilde O(d^{\omega_K-1}n)$ arithmetic operations over $\mathbb{F}_q$, where $\sigma$ is the $q$-Frobenius automorphism. This matches the conjectural upper bound of Caruso--Le Borgne and is quasi-optimal in view of the lower bound of Chen--Ye. The proof reduces the finite-field case to the split algebra case using the equivariant multiplication theory of Couveignes–Ezome, and then applies existing fast algorithms.
tag: Differential Algebra
publication_date: 2026-07-01 05:50:36 +0000
arxiv: https://arxiv.org/abs/2607.00476
permalink: /publication/skew/
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

In this note, we study the complexity of multiplication in skew polynomial rings over finite fields. We prove that the product of two elements in $\mathbb{F}_{q^n}[x;\sigma]$ of degree at most $d < n$ can be computed using $\widetilde O(d^{\omega_K-1}n)$ arithmetic operations over $\mathbb{F}_q$, where $\sigma$ is the $q$-Frobenius automorphism. This matches the conjectural upper bound of Caruso--Le Borgne and is quasi-optimal in view of the lower bound of Chen--Ye. The proof reduces the finite-field case to the split algebra case using the equivariant multiplication theory of Couveignes–Ezome, and then applies existing fast algorithms.

{% include publication-links.html publication=page %}

</article>
