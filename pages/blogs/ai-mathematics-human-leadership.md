---
layout: default
body_class: blog-page
title: "AI Is Transforming Mathematics—How Can Humans Remain in the Lead?"
authors: Xiao-Shan Gao
blog_date: 2026-09-11
summary: >-
  As AI systems become increasingly capable at mathematical reasoning, the central question is no longer whether mathematicians should use them, but how. Xiao-Shan Gao explains how mathematical research agents combine language models, formal verification, and persistent knowledge—and why human creativity must remain in the lead.
permalink: /blogs/ai-mathematics-human-leadership/
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

The 67th International Mathematical Olympiad recently concluded with China at the top of the team rankings. Beyond the official competition, another contest attracted considerable attention: several large language models achieved perfect scores, while the mathematical research agent developed at the Academy of Mathematics and Systems Science, Chinese Academy of Sciences, independently completed all six problems.

At the same time, rapid advances in AI have prompted mathematicians to ask where their discipline is heading. In this interview, Xiao-Shan Gao explains how large language models and mathematical research agents approach proofs, where these systems can contribute to research, and why human creativity must remain in the lead.

## How Does the AI We Use Solve Mathematical Problems?

### Q: People now routinely use large language models such as DeepSeek and Doubao not only for conversation, but also for solving mathematical problems. In principle, how does a large language model answer a mathematics question?

**A:** At its foundation, a large language model is a probabilistic generator built on the Transformer architecture. When we enter a mathematical problem, the model draws on patterns learned from large collections of textbooks, papers, and problem sets to calculate a probability distribution for the next token. It repeats this process until it has generated a complete response.

The “most probable” response is the one that best fits the mathematical context the model has learned and appears most logically coherent. If the prompt reproduces a problem from a familiar collection, for example, the original solution may be the highest-probability continuation and the model may generate essentially the same answer.

But probability is not proof. This mechanism can also produce hallucinations: arguments that look convincing but are mathematically wrong.

### Q: How is the mathematical research agent that performed well at the IMO different from a large language model?

**A:** First, general-purpose large language models usually reason about mathematics in natural language. A mathematical research agent can provide both a natural-language proof and a corresponding formal version.

Most proofs in textbooks and research papers are natural-language proofs: they are written for human readers and rely on familiar habits of mathematical reasoning. Natural language is highly expressive, but it can also hide a great deal of information. “It is easy to see” may conceal an invalid implication; “the other cases are similar” may omit a boundary case; and a proof may quietly alter the definition of an object. Large language models are especially good at producing well-structured prose with confident language and polished notation, so an incorrect answer may still be difficult for a reader to detect.

A formal proof, by contrast, encodes the statement and its inference rules in a precise language used by a proof assistant such as Lean or Rcoq. Every reasoning step must produce a valid proof term. If a hypothesis is missing, a type is wrong, an argument is circular, an intermediate result remains unproved, or a theorem has been invented, verification fails.

Compiler acceptance provides a machine-checkable guarantee that the proof establishes its formal statement under the declared axioms. Researchers must still ensure that the formal statement faithfully represents the intended problem, but formal verification removes the hidden logical gaps that natural-language exposition can contain.

Second, a single language model can lose coherence when a difficult theorem requires a very long proof. A mathematical research agent repeatedly invokes language models and specialized tools within a systematic, long-horizon reasoning framework. The MechMath Agent Team organizes the mathematical research process into more than 30 subagents and tools, coordinated by three principal components:

- **NL-Prover** generates mathematical proofs in natural language.

- **FL-Prover** generates formal proofs, or translates natural-language proofs into code that a compiler can verify.

- **KB-Manager** organizes and preserves the history of mathematical reasoning.

The compiler checks every formal step and rejects any proof that fails verification. This architecture has two main advantages. It can handle longer and more complex proofs—the formal solution to IMO 2026 Problem 3, a combinatorial game, comprised nearly 3,000 lines of Lean code—and its verified artifacts can be independently reproduced and audited, substantially reducing the risk of hallucination.

## Do Humans Still Need Mathematicians?

### Q: In practical terms, how can AI contribute to mathematical research?

**A:** AI can support several stages of the research process:

- **Proof auditing:** follow the chain of reasoning in a paper, check conditions one by one, identify gaps or incorrect citations, and generate counterexamples.

- **Theorem proving and route exploration:** attempt a proof and, when a complete proof is not found, report the progress made, the point at which the argument is blocked, and possible routes forward.

- **Proof completion and literature search:** once a mathematician supplies the central idea, fill in intermediate lemmas and search the relevant literature and libraries.

- **Formalization of new results:** translate a proof into a formal development and verify it with a proof assistant.

- **Certification of symbolic computation:** incorporate complex identities, finite classifications, and certificates produced by computer algebra systems into formal proofs.

- **Long-term project memory:** organize definitions, theorems, partial proofs, counterexamples, and unsuccessful approaches into a reusable knowledge graph so that later work does not have to begin again from scratch.

### Q: Hong Wang and Yu Deng recently received Fields Medals, drawing broad public attention to mathematical research. Against the backdrop of AI's rapidly improving mathematical capabilities, some have called 2026 “the last Fields Medal year without AI” and imagine that AI will eventually solve every difficult problem. What is your view?

**A:** As a researcher in this field, I favor a more measured assessment.

Today's mathematical agents cannot independently solve top-level problems that require an original theoretical framework, such as the Kakeya conjecture. Their present role is primarily that of a research assistant: carrying out laborious derivations, suggesting ideas when a proof stalls, and accelerating local parts of the argument.

I do not believe AI will completely replace mathematicians. Formulating good questions, identifying the essential concepts, and building entirely new theoretical frameworks remain human strengths. AI is likely to become a standard part of the mathematician's toolkit and may improve research efficiency severalfold, perhaps even by an order of magnitude. The work recognized by the next Fields Medals will very likely bear the imprint of AI, but intellectual leadership will remain with human beings.

The right response is therefore to embrace AI without following it blindly, and to use it without becoming dependent on it. AI may become a super-assistant for scientific research, but the creativity to ask the questions that define its future remains human.

<p class="blog-source-note"><em>This article is adapted and translated from an <a href="https://amss.cas.cn/cmsm/202609/t20260911_8280715.html" target="_blank" rel="noopener">interview with Xiao-Shan Gao</a> by Zhenxin Zhu, originally published by PLA Daily on September 9, 2026, and republished by AMSS on September 11, 2026.</em></p>

</article>

<aside class="blog-toc" data-blog-toc aria-label="On this page" hidden>
  <p class="blog-toc__title">On this page</p>
  <ol class="blog-toc__links"></ol>
</aside>
</div>
