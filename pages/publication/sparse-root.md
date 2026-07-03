---
layout: default
title: Deterministic Polynomial-time Exact-root Computation for Sparse Polynomials with Bounded Total Degree
authors: Qiao-Long Huang, Yichuan Cao, Ruichen Qiu, Xiao-Shan Gao
abstract: >-
  We study the problem of deterministically computing the exact root of a sparse polynomial in the multivariate setting. Let $f \in \F[x_1,\ldots,x_n]$ be a nonzero polynomial that is an exact $e$-th power, say $f = g^e$. Suppose $f$ is $s$-sparse, has an individual degree of at most $d$, and a total degree of $D = \tdeg(f)$. We prove a sparsity bound on the base polynomial $g$: $\|g\|_0 \le s^{D(2d+2)/e + 1}.$ Based on this bound, we develop a deterministic algorithm that computes the base $g$. In contrast to the general deterministic factorization algorithm of Bhargava, Saraf, and Volkovich \cite{BhargavaSarafVolkovich2020}, which achieves only a quasi-polynomial dependence on the input parameters, our algorithm is \emph{polynomial-time} in the setting where the total degree $D$ is bounded. Specifically,  the overall complexity is $\mathrm{poly}\left(s^{O(Dd)}, n, d, D\right) + s\cdot R(e),$ where $R(e)$ denotes the cost of constructing a single $e$-th root of a scalar in the base field $\F$, and, when $\operatorname{char}(\F)\mid e$, the cost of computing a single Frobenius root of a scalar. This term is field-dependent, and over finite fields, $\mathbb{Q}$, or number fields with a suitable representation, it is absorbed into the polynomial complexity bound. Within the bounded total-degree regime, this yields a deterministic polynomial-time algorithm for exact-root computation.
tag: Algebraic Complexity Theory
publication_date: 2026-07-02 16:06:29 +0000
arxiv: https://arxiv.org/abs/2607.02364
permalink: /publication/sparse-root/
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

We study the problem of deterministically computing the exact root of a sparse polynomial in the multivariate setting. Let $f \in \F[x_1,\ldots,x_n]$ be a nonzero polynomial that is an exact $e$-th power, say $f = g^e$. Suppose $f$ is $s$-sparse, has an individual degree of at most $d$, and a total degree of $D = \tdeg(f)$. We prove a sparsity bound on the base polynomial $g$: $\|g\|_0 \le s^{D(2d+2)/e + 1}.$ Based on this bound, we develop a deterministic algorithm that computes the base $g$. In contrast to the general deterministic factorization algorithm of Bhargava, Saraf, and Volkovich \cite{BhargavaSarafVolkovich2020}, which achieves only a quasi-polynomial dependence on the input parameters, our algorithm is \emph{polynomial-time} in the setting where the total degree $D$ is bounded. Specifically,  the overall complexity is $\mathrm{poly}\left(s^{O(Dd)}, n, d, D\right) + s\cdot R(e),$ where $R(e)$ denotes the cost of constructing a single $e$-th root of a scalar in the base field $\F$, and, when $\operatorname{char}(\F)\mid e$, the cost of computing a single Frobenius root of a scalar. This term is field-dependent, and over finite fields, $\mathbb{Q}$, or number fields with a suitable representation, it is absorbed into the polynomial complexity bound. Within the bounded total-degree regime, this yields a deterministic polynomial-time algorithm for exact-root computation.

{% include publication-links.html publication=page %}

</article>
