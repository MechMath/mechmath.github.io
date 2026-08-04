---
layout: default
title: >-
  Automated Tactics for Polynomial Reasoning in Lean 4
authors: Hao Shen, Junyu Guo, Junqi Liu, Lihong Zhi
abstract: >-
  Applying Gröbner basis theory to concrete problems in Lean 4 remains difficult since the current formalization of multivariate polynomials is based on a non-computable representation and is therefore not suitable for efficient symbolic computation. As a result, computing Gröbner bases directly inside Lean is impractical for realistic examples. To address this issue, we propose a certificate-based approach that combines external computer algebra systems, such as SageMath or SymPy, with formal verification in Lean 4. Our approach uses a computable representation of multivariate polynomials in Lean to import and verify externally generated Gröbner basis computations. The external solver carries out the main algebraic computations, while the returned results are verified inside Lean. Based on this method, we develop automated tactics that transfer polynomial data between Lean and the external system and certify the returned results. These tactics support tasks such as remainder verification, Gröbner basis checking, ideal equality, and ideal or radical membership. This work provides a practical way to integrate external symbolic computation into Lean 4 while preserving the reliability of formal proof.
tag: Lean
publication_date: 2026-04-15 05:59:19 +0000
arxiv: https://arxiv.org/abs/2604.13514
github: https://github.com/WuProver/GroebnerTactic
permalink: /publication/groebner/
related_system_url: /groebner-tactic/
related_system_label: Explore Gröbner Tactic
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

Applying Gröbner basis theory to concrete problems in Lean 4 remains difficult since the current formalization of multivariate polynomials is based on a non-computable representation and is therefore not suitable for efficient symbolic computation. As a result, computing Gröbner bases directly inside Lean is impractical for realistic examples. To address this issue, we propose a certificate-based approach that combines external computer algebra systems, such as SageMath or SymPy, with formal verification in Lean 4. Our approach uses a computable representation of multivariate polynomials in Lean to import and verify externally generated Gröbner basis computations. The external solver carries out the main algebraic computations, while the returned results are verified inside Lean. Based on this method, we develop automated tactics that transfer polynomial data between Lean and the external system and certify the returned results. These tactics support tasks such as remainder verification, Gröbner basis checking, ideal equality, and ideal or radical membership. This work provides a practical way to integrate external symbolic computation into Lean 4 while preserving the reliability of formal proof.

{% include publication-links.html publication=page %}

</article>
