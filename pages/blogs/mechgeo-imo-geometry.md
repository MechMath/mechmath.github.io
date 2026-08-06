---
layout: default
body_class: blog-page
title: "MechGeo: Automatically Formalizing and Proving IMO Geometry in Lean 4"
authors: MechMath Team
blog_date: 2026-08-06
summary: >-
  MechGeo unifies autoformalization and automated proving for trustworthy Euclidean geometry. It produced Lean-checked statements, proofs, and counterexamples for 44 IMO geometry problems from 2000–2026 and achieved faithful coverage of all 14 LEAP geometry problems after validation and repair.
permalink: /blogs/mechgeo-imo-geometry/
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

<hr class="blog-detail-divider">

MechGeo brings autoformalization and automated proving into a single Lean 4 verification loop, taking informal Euclidean geometry problems from faithful formal statements to kernel-checked proofs or counterexamples. This post introduces the framework and reports its results on IMO geometry problems from 2000–2026 and on LEAP's Lean-IMO-Bench.

<figure class="proof-timing-figure mechgeo-stats" aria-labelledby="mechgeo-stats-caption">
  <div class="proof-timing-figure__table-wrap" tabindex="0" aria-label="MechGeo benchmark results; scroll horizontally on narrow screens">
    <table>
      <thead>
        <tr>
          <th scope="col">44</th>
          <th scope="col">12/14</th>
          <th scope="col">14/14</th>
          <th scope="col">Lean 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IMO geometry problems<br>2000–2026</td>
          <td>Original LEAP statements<br>automatically proved</td>
          <td>Faithful LEAP coverage<br>after repair</td>
          <td>All proofs and<br>counterexamples checked</td>
        </tr>
      </tbody>
    </table>
  </div>
  <figcaption id="mechgeo-stats-caption"><strong>MechGeo benchmark results.</strong> All reported proofs and counterexamples are checked in Lean 4.</figcaption>
</figure>

## I. A Unified Formalization and Proving Pipeline

We are pleased to announce **MechGeo** and the accompanying **MechGeoBench**, which is available at [https://github.com/MechMath/MechGeoBench](https://github.com/MechMath/MechGeoBench). MechGeo is a Mathlib-native framework that automatically translates an informal Euclidean geometry problem into a Lean 4 theorem and then automatically constructs a complete, kernel-checked proof. By placing autoformalization and automated proving in the same verification loop, MechGeo moves beyond evaluations that begin with manually prepared formal statements.

At the statement level, **GeoFormalizer** reads the natural-language problem, represents its geometric content in the typed intermediate language **GeoIR**, and deterministically translates it into a Mathlib-native Lean statement. Compiler diagnostics and semantic evaluation guide iterative repair, helping the system generate statements that are not only well typed, but also consistent with the informal statement.

At the proof level, **GeoProver** receives only the formal Lean statement. It reconstructs the configuration, develops a proof plan, derives intermediate lemmas, and selectively converts suitable geometric subgoals into polynomial constraints. Singular or SymPy may help discover algebraic certificates, but every certificate, counterexample, and final proof is checked by Lean's kernel.

## II. Benchmark-Scale Results on IMO Geometry

Using this pipeline, we constructed faithful formal statements and complete Lean proofs for **44 IMO geometry problems spanning 2000–2026**. Among the 43 historical problems, GeoProver directly proved 29 automatically generated statements. For the remaining 14, it automatically produced Lean-verified counterexamples, typically exposing missing nondegeneracy or point-order assumptions. After expert repair, GeoProver proved all 14 corrected statements. MechGeo also autoformalized and proved IMO 2026 Problem 2 directly from the original informal problem. To the best of our knowledge, this is the first benchmark-scale result combining automatic statement formalization with automated, kernel-checked proof construction for IMO geometry across this period.

## III. LEAP and Counterexample-Guided Repair

MechGeo also establishes a new result on the 14 geometry problems in LEAP's Lean-IMO-Bench. GeoProver automatically proves **12 original formal statements for the first time**, formally refutes the remaining two, and proves both after the missing assumptions are repaired. The directly comparable result is 12/14 on the original benchmark, with faithful verified coverage of 14/14 after validation and repair.

The key lesson is that a formal statement can compile, and may even be provable, while still misrepresenting the intended problem because of a degenerate configuration or an omitted order condition. MechGeo therefore supports a stronger workflow: autoformalize, automatically prove or refute, repair when necessary, and prove again. This counterexample-guided loop makes automated geometry both more capable and more trustworthy.

## IV. Paper and Benchmark

<div class="system-feature__links">
  <a class="system-link" href="https://arxiv.org/abs/2608.02295" target="_blank" rel="noopener">Read the paper <span aria-hidden="true">→</span></a>
  <a class="system-link" href="https://github.com/MechMath/MechGeoBench" target="_blank" rel="noopener">View MechGeoBench on GitHub <span aria-hidden="true">→</span></a>
</div>

</article>

<aside class="blog-toc" data-blog-toc aria-label="On this page" hidden>
  <p class="blog-toc__title">On this page</p>
  <ol class="blog-toc__links"></ol>
</aside>
</div>
