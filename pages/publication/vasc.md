---
layout: default
title: A Finite Certificate for the Positive $n=9$ Vasc Inequality
authors: Dakai Guo, Ruichen Qiu, Yichuan Cao, Ruyong Feng
abstract: >-
  We prove the positive-real $n=9$ case of the Vasc cyclic inequality. The proof was obtained with human-guided assistance from the AI agent MechMath Agent Team: the human-readable part reduces the rational inequality to a homogeneous polynomial inequality, fixes a cyclic maximum, and parametrizes each sorted fixed-maximum cone by cumulative gaps; the finite part is a certificate covering all $8!=40320$ sorted cones. MechMath Agent Team generated the certificate verification workflow through Python tool calls, including the case split, verification programs, and terminal classifications. The published certificate has $36815$ coefficient leaves, $2236$ ordinary Polya multiplier leaves, and $1269$ AM-GM midpoint overlay leaves. Human authors audited the mathematical reductions and verification logic, and a separate artifact contains the certificate, an independent verifier, and a from-source rebuild route.
publication_date: 2026-06-04 13:19:19 +0000
arxiv: https://arxiv.org/abs/2606.06136
github: https://github.com/MechMath/Vasc-n9-cert/releases/tag/v1.0.0
permalink: /publication/vasc/
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

We prove the positive-real $n=9$ case of the Vasc cyclic inequality. The proof was obtained with human-guided assistance from the AI agent MechMath Agent Team: the human-readable part reduces the rational inequality to a homogeneous polynomial inequality, fixes a cyclic maximum, and parametrizes each sorted fixed-maximum cone by cumulative gaps; the finite part is a certificate covering all $8!=40320$ sorted cones. MechMath Agent Team generated the certificate verification workflow through Python tool calls, including the case split, verification programs, and terminal classifications. The published certificate has $36815$ coefficient leaves, $2236$ ordinary Polya multiplier leaves, and $1269$ AM-GM midpoint overlay leaves. Human authors audited the mathematical reductions and verification logic, and a separate artifact contains the certificate, an independent verifier, and a from-source rebuild route.

{% include publication-links.html publication=page %}

</article>
