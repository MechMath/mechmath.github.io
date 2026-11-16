---
layout: default
body_class: blog-page
title: "MechMath Excels in Theorem Proving Competition"
authors: MechMath Team
blog_date: 2026-11-12
summary: MechPV helps Hao Shen win first prize.
permalink: /blogs/mechpv-theorem-proving-competition/
scripts:
  - /assets/js/blog-toc.js
---

<div class="blog-page-layout">
<article class="home-card blog-detail-card" markdown="1">

{% if page.blog_date %}
<div class="blog-detail-date">
  <time class="blog-date" datetime="{{ page.blog_date | date_to_xmlschema }}">{{ page.blog_date | date: "%b %-d, %Y" }}</time>
</div>
{% endif %}

# {{ page.title }}

{% if page.authors %}
<p class="blog-detail-authors">{{ page.authors }}</p>
{% endif %}

{% if page.affiliation %}
<p class="blog-detail-affiliation">{{ page.affiliation }}</p>
{% endif %}

<hr class="blog-detail-divider">

In Tianjin on November 8, MechMath members from AMSS’s Key Laboratory of Mathematics Mechanization won awards in the human–AI collaboration finals of the second theorem proving competition at the 2026 CCF China Software Conference.

Hao Shen (third-year doctoral student, supervised by Lihong Zhi) finished all eight problems first in 50 minutes using **MechPV (Mechanized Program Verification)**, winning first prize. Yichuan Cao (fourth-year doctoral student, supervised by Xiao-Shan Gao) and postdoctoral researcher Dakai Guo won third prizes.

The three-hour final required machine-checkable program proofs for array algorithms, hash tables, RSA encoding/decoding, and string matching.

Developed under Dakai Guo’s responsibility, MechPV combines large language models, QCP, and Coq/Rocq. Hierarchical agent collaboration handles algorithm analysis, loop invariants, auxiliary lemmas, and verification. Coordinated definitions and interfaces, plus compiler and verifier feedback, guide annotation and proof repair until complete machine verification.

Shen verified musl’s Two-Way string-matching function in approximately 19 minutes, discharging all 171 obligations for correctness, pointer arithmetic, and memory safety.

These results demonstrate MechMath’s AI-assisted verification capabilities and multi-agent collaboration for trustworthy software.

## Related Links

- [Original report (AMSS)](https://amss.cas.cn/kyjz1/202611/t20261112_8308811.html)
- [Competition report](https://www.qua.codes/news/ai-verification-final.html)
- [QCP](https://www.qua.codes/)

</article>

<aside class="blog-toc" data-blog-toc aria-label="On this page" hidden>
  <p class="blog-toc__title">On this page</p>
  <ol class="blog-toc__links"></ol>
</aside>
</div>
