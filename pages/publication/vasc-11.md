---
layout: default
title: Exact rational certificates and a Lean formalization of the eleven-variable Vasc inequality
authors: Dakai Guo, Ruichen Qiu, Yichuan Cao, Ruyong Feng, Xiao-Shan Gao
abstract: >-
  We prove that the cyclic sum $\sum_{i=0}^{10} (x_i - x_{i+1}) / (x_{i+1} + x_{i+2})$ is nonnegative for every strictly positive real eleven-tuple, with indices taken modulo eleven. Clearing denominators reduces the problem to a homogeneous polynomial. Subtracting the smallest coordinate then separates the proof into nonnegativity of a common-translation derivative and nonnegativity on a full boundary face. We supply exact rational polynomial certificates in Gram-matrix form for both statements. The derivative certificate uses a linear multiplier, centered monomials and cyclic averaging; the boundary certificate uses a strictly positive quadratic multiplier and uncentered monomials. Their verification requires 6,069 cyclic coefficient comparisons and 34,304 literal coefficient comparisons. All 606 certificate matrices are certified by integer congruences with strictly diagonally dominant images. A Lean 4 development formally verifies the certificate checks and their connection to the original inequality. The exact certificate data, replay programs, and formal sources are publicly available.
tag: Symbolic Computation
publication_date: 2026-10-09 12:01:49 +0000
arxiv: https://arxiv.org/abs/2610.13463
github: https://github.com/MechMath/Vasc-n11
permalink: /publication/vasc-n11/
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

We prove that the cyclic sum $\sum_{i=0}^{10}(x_i−x_{i+1})/(x_{i+1}+x_{i+2})$ is nonnegative for every strictly positive real eleven-tuple, with indices taken modulo eleven. Clearing denominators reduces the problem to a homogeneous polynomial. Subtracting the smallest coordinate then separates the proof into nonnegativity of a common-translation derivative and nonnegativity on a full boundary face. We supply exact rational polynomial certificates in Gram-matrix form for both statements. The derivative certificate uses a linear multiplier, centered monomials and cyclic averaging; the boundary certificate uses a strictly positive quadratic multiplier and uncentered monomials. Their verification requires 6,069 cyclic coefficient comparisons and 34,304 literal coefficient comparisons. All 606 certificate matrices are certified by integer congruences with strictly diagonally dominant images. A Lean 4 development formally verifies the certificate checks and their connection to the original inequality. The exact certificate data, replay programs, and formal sources are publicly available.

{% include publication-links.html publication=page %}

</article>
