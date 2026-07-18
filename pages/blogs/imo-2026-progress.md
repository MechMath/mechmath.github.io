---
layout: default
body_class: blog-page
title: "IMO 2026: From Natural-Language Solutions to Lean Verification"
authors: MechMath Team
blog_date: 2026-07-18
summary: >-
  A progress report on complete natural-language and Lean 4 solutions to all six IMO 2026 problems. It presents the public proof artifacts, verification workflow, and recorded NL/FL proof-generation times.
permalink: /blogs/imo-2026-progress/
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


The 2026 International Mathematical Olympiad was held in Shanghai on July 15--16.  We report a complete set of solutions to **all six problems**, available in the [IMO2026 project repository](https://github.com/MechMath/IMO2026), produced within the MechMath Agent Team workflow: each problem is accompanied by a reader-facing **natural-language proof** and a **Lean 4 proof** checked by the compiler.  The collection is an end-to-end experiment in mathematical reasoning, from precise formulation and proof discovery to independently inspectable formal artifacts; across the six problems, the formal developments comprise 6,116 lines of Lean code.

## I. The Problem Suite, Results, and Performance

### 1.1. The Six Problems

The collection is deliberately heterogeneous.

- **Q1** is a number-theoretic process on a board of integers.  Its formalization develops the gcd/lcm move, proves termination and invariance properties, and identifies the terminal value through prime-adic data.
- **Q2** is a geometry problem formalized in the Euclidean plane.  The proof bridges geometric constraints and algebraic identities through a complex-coordinate representation.
- **Q3** concerns a combinatorial game on interval subdivisions.  Its development treats ordered piece lengths, alternating discrepancy, and the lower and upper bounds needed to determine the game value.  At 2,983 lines, it is the largest formal development in the suite.
- **Q4** is a geometric game formulated through triangle angles and recursively defined winning positions.
- **Q5** is a functional inequality on positive reals.  The formal proof first establishes a sound squared reformulation of the radical inequalities and then derives the requisite structural constraints on the function.
- **Q6** returns to number theory through a recursively defined sequence, using shared prime factors, squarefree reductions, and periodicity arguments.

The suite provides a compact but diverse testbed for the MechMath Agent Team workflow.  Its problems range across number theory, Euclidean geometry, combinatorics, games, and functional inequalities, and therefore test both mathematical route selection and the engineering of formal proofs.

### 1.2. Results, Verification, and Timing

For every problem, the project provides three artifacts:

- `problem.lean`, containing the formal statement;
- `solution.lean`, containing the complete machine-checked Lean proof; and
- `solution.pdf`, containing a presentation intended for mathematical readers.

The statement files retain `sorry` placeholders by design, so that they provide concise theorem interfaces.  The completed proofs are in the corresponding solution files.  Each formal solution concludes by printing the axioms of its principal theorem, making its logical dependencies directly inspectable after a build.  The complete source tree and reader-facing PDFs can be browsed in the [project repository](https://github.com/MechMath/IMO2026).

The timing data are presented in Table 1.  NL denotes the time recorded for generating the natural-language proof, and FL denotes the time recorded for generating the formal proof.

<figure class="proof-timing-figure" aria-labelledby="proof-timing-caption">
  <div class="proof-timing-figure__table-wrap" tabindex="0" aria-label="Proof-generation time table; scroll horizontally on narrow screens">
    <table>
      <thead>
        <tr>
          <th scope="col" rowspan="2">Problem</th>
          <th scope="colgroup" colspan="2">Generation time (min)</th>
          <th scope="col" rowspan="2">Reported total<br>(min)</th>
        </tr>
        <tr>
          <th scope="col">NL proof</th>
          <th scope="col">FL proof</th>
        </tr>
      </thead>
      <tbody>
        <tr><th scope="row">Q1</th><td>45.83</td><td>28.30</td><td>74.13</td></tr>
        <tr><th scope="row">Q2</th><td>97.33</td><td>147.25</td><td>244.58</td></tr>
        <tr><th scope="row">Q3</th><td>145.47</td><td>160.33</td><td>305.80</td></tr>
        <tr><th scope="row">Q4</th><td>41.73</td><td>18.85</td><td>60.58</td></tr>
        <tr><th scope="row">Q5</th><td>117.18</td><td>24.47</td><td>141.65</td></tr>
        <tr><th scope="row">Q6</th><td>327.62</td><td>24.07</td><td>351.68</td></tr>
      </tbody>
      <tfoot>
        <tr><th scope="row">Total</th><td>775.17</td><td>403.27</td><td>1,178.43</td></tr>
      </tfoot>
    </table>
  </div>
  <figcaption id="proof-timing-caption"><strong>Table 1. Proof-generation time by IMO 2026 problem.</strong> Wall-clock duration in minutes; values are rounded to two decimal places and reproduced from the project README.</figcaption>
</figure>

The reported grand total is retained exactly as recorded in the README; it should be read as a project-level wall-clock record, rather than as a value recomputed from the displayed rounded entries.  Timing alone is not a measure of mathematical difficulty or proof quality, but the contrast is informative.  Geometry and combinatorial arguments can demand substantial formal infrastructure, whereas a longer natural-language exploration may converge to a relatively compact formal certificate once the correct invariant or representation has been identified.

The project is built with Lean 4 and Mathlib, both at version 4.29.0.  A standard build checks the solution files and their theorem dependencies, while the printed axiom reports provide an additional, transparent verification record.

## II. Discussion

### 2.1. What Formal Verification Adds

Olympiad solutions are traditionally evaluated through expert reading.  This remains indispensable: a useful solution must reveal the governing idea, select an appropriate representation, and communicate the argument economically.  Formal verification serves a different and complementary purpose.  Once a theorem and its hypotheses have been encoded, Lean checks that every inference in the proof conforms to its logical foundations.

The distinction is especially valuable for long arguments.  Informal expressions such as “it is immediate,” “by symmetry,” or “the remaining cases are similar” often conceal assumptions that must be made explicit in a formal development.  The resulting proof artifact is therefore not simply a transcription of a polished solution; it is a structured account of the intermediate claims required to make the argument machine-checkable.

The important point is not that one formal technique fits every problem.  The suite instead illustrates a recurring principle: successful formalization begins with the right mathematical representation.  Complex coordinates make certain geometric relations algebraic; finite multisets and lists make game states explicit; and carefully chosen predicates expose the invariants of iterative processes.

### 2.2. The Agent-Team Workflow

MechMath Agent Team treats proof production as a coordinated research workflow rather than as a single model invocation.  The natural-language prover explores routes, proposes intermediate lemmas, and constructs a reader-oriented argument.  The formal-language prover translates or reconstructs the argument in Lean, decomposes proof obligations, and iterates against compiler feedback.  A knowledge-management layer retains definitions, successful lemmas, failed routes, and unresolved obstacles across the process.

This division of labour is consequential.  Natural-language proof generation and formal proof generation have different bottlenecks: the former must discover a convincing global strategy, while the latter must specify every local precondition and make all interfaces align.  Their recorded times should therefore be interpreted as complementary traces of one workflow, not as a competition between two isolated systems.

The IMO 2026 artifacts show that this workflow can carry a diverse set of nontrivial problems from mathematical exposition to machine-checked proof.  They also identify the next engineering challenge: to make the exchange between high-level proof ideas and low-level formal obligations increasingly direct, reusable, and transparent.

</article>

<aside class="blog-toc" data-blog-toc aria-label="On this page" hidden>
  <p class="blog-toc__title">On this page</p>
  <ol class="blog-toc__links"></ol>
</aside>
</div>
