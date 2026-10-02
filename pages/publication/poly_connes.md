---
layout: default
title: >-
  An Explicit Polynomial Counterexample to Connes' Embedding Conjecture
authors: Jiaqi Wang, Lihong Zhi
abstract: >-
  We construct an explicit Hermitian polynomial $f$ with integer coefficients, of degree $12$ in $65$ selfadjoint variables, whose normalized trace is at least $3/4$ on every tuple of selfadjoint matrix contractions, in every dimension, and equals $-1$ at a specified tuple of selfadjoint unitaries in a group von Neumann algebra. Consequently, $f+\varepsilon$ lies outside the contraction quadratic module modulo commutators for $0\le\varepsilon<1$, giving an explicit counterexample to the algebraic formulation of Connes' embedding conjecture. Combining the group construction of Kun and Thom with the normalization argument of Thom and the spectral correction theorem of Alekseev, Liu, and Thom, we determine an explicit positive integer $\mu$ for which $f=1-(P-Q)^2+\mu\sum_{\nu=1}^{825}E_\nu^*E_\nu+\mu\sum_{j=1}^{65}(1-X_j^2)^2.$ Here $P,Q$ encode conjugate involutions, and the $E_\nu$ encode relation defects.
tag: Operator Algebras
publication_date: 2026-10-01 12:09:37 +0000
arxiv: https://arxiv.org/abs/2610.01536
permalink: /publication/poly-connes/
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

  We construct an explicit Hermitian polynomial $f$ with integer coefficients, of degree $12$ in $65$ selfadjoint variables, whose normalized trace is at least $3/4$ on every tuple of selfadjoint matrix contractions, in every dimension, and equals $-1$ at a specified tuple of selfadjoint unitaries in a group von Neumann algebra. Consequently, $f+\varepsilon$ lies outside the contraction quadratic module modulo commutators for $0\le\varepsilon<1$, giving an explicit counterexample to the algebraic formulation of Connes' embedding conjecture. 

  Combining the group construction of Kun and Thom with the normalization argument of Thom and the spectral correction theorem of Alekseev, Liu, and Thom, we determine an explicit positive integer $\mu$ for which 
  
  $$f=1-(P-Q)^2+\mu\sum_{\nu=1}^{825}E_\nu^*E_\nu+\mu\sum_{j=1}^{65}(1-X_j^2)^2.$$
  
  Here $P,Q$ encode conjugate involutions, and the $E_\nu$ encode relation defects.

{% include publication-links.html publication=page %}

</article>
