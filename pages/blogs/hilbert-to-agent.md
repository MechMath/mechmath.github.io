---
layout: default
body_class: blog-page
title: From Hilbert's Decision Problem to Reasoning Agents
authors: Xiao-Shan Gao
blog_date: 2026-07-08
summary: >-
  A review of automated theorem proving from Hilbert's decision problem to LLM-based research agents, with an introduction to MechMath Agent Team.
permalink: /blogs/hilbert-to-agent/
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

Since Hilbert proposed the decision problem in 1928, automated theorem proving has developed for nearly a century, passing through several major stages: theoretical foundations, symbolic reasoning, interactive proving, mathematics mechanization, and large-language-model (LLM) reasoning. Today, with the rapid development of LLMs and the use of agents, LLM-based mathematical research agents have become capable assistants to mathematicians.

This short article briefly reviews the principal achievements of automated theorem proving, introduces the mathematical research agent MechMath Agent Team developed by our group, and finally shares several experiences and reflections.


## I. A Century-Long Journey in Automated Theorem Proving

Over the past century, automated theorem proving has undergone four paradigm shifts, each reshaping humanity's understanding of “machine reasoning” or “AI reasoning.”

### 1. Theoretical foundations: Hilbert's decision problem

From 1900 to 1930, Hilbert gradually developed the grand plan later known as Hilbert's program: to axiomatize the various branches of mathematics and prove their consistency and completeness. In particular, he sought to develop a unified algorithm for proving all mathematical theorems in an axiomatic system—the famous decision problem (*Entscheidungsproblem*), whose essence was the pursuit of automated theorem proving.

Gödel, Herbrand, Turing, and others gave breakthrough answers to Hilbert's decision problem, laying the theoretical foundations for AI reasoning:

- In 1931, Gödel proved that every consistent axiomatic system containing Peano arithmetic necessarily contains propositions that are “true but unprovable,” shattering the hope of automatically proving mathematical theorems.

- On the other hand, Herbrand also gave a positive result for a special decision problem in 1931. He provided a semi-decision algorithm for first-order logic: as long as a proof of a proposition exists, the algorithm can generate it automatically.

- In 1936, in order to describe precisely the concepts of “decision” and “computation,” Turing introduced the universal computational model of the “Turing machine.”

These results show that Hilbert's decision problem has been completely resolved in theory. For a first-order logical axiomatic system, there exists a Turing machine that can automatically generate all of its proofs. But reality is far from so simple: the complexity of Herbrand's algorithm is too high to prove nontrivial theorems even on today's computers.

### 2. A boom meets obstacles: the optimism, progress, and difficulties of symbolic AI

In 1956, Newell and Simon released the “Logic Theory Machine,” which automatically proved, in one stroke, 38 propositional-logic theorems among the first 52 theorems of *Principia Mathematica*. This work was one of the foundational works of AI and inaugurated symbolic artificial intelligence. They subsequently introduced the “General Problem Solver,” attempting to achieve general problem solving through the accumulation of knowledge and automated reasoning. In 1965, Robinson proposed the “efficient” resolution method for first-order logic theorem proving. The field was at one time optimistic that artificial general intelligence was close at hand.

In 1971, Cook proved that propositional-logic theorem proving (SAT) is NP-complete. This means that, unless P = NP (one of the seven Millennium Prize Problems), no complete and efficient theorem-proving algorithm exists, and the ideal of symbolic AI was obstructed.

### 3. Persevering onward: interactive proving and mathematics mechanization

The continued advance of automated theorem proving split into two new routes. Simply put, interactive proving partly gave up automation, while mathematics mechanization partly gave up completeness.

Interactive theorem proving (ITP; 1968, AUTOMATH) no longer has machines automatically generate proofs; instead, it has computers automatically verify the logical rigor of existing proofs. Formal-verification tools thereby created, such as Isabelle, Rocq, and Lean, are used not only to verify the rigor of complex proofs, but also to verify the security of chips, operating systems, and network protocols. Formalized mathematics is mathematical knowledge that has undergone formal verification. Somewhat unexpectedly, formalizing existing mathematical proofs is also very time-consuming: in a 2024 talk, Fields Medalist Terence Tao stated that formalizing a proof of moderate difficulty may take ten times as long as producing the proof by hand. Szegedy's pessimistic estimate in 2020 was that only 0.001% of mathematical knowledge had been formalized at that time.

Mathematics mechanization (the Wu method, 1978) refers to the development of efficient algorithms for meaningful branches of mathematics or classes of problems. For example, Wu Wenjun's Wu method not only “turned geometric theorem proving from a not very successful field of automated reasoning into one of the most successful fields,” but was also widely applied in CAD, robot vision, cryptanalysis, and numerical-control machine tools. Along this route, new disciplines such as computer algebra, computational number theory, computational algebraic geometry, computational topology, computational group theory, and symbolic analysis emerged.

### 4. The LLM era: AI becomes a powerful assistant to mathematicians

In 2022, OpenAI launched ChatGPT, marking AI's entry into the LLM era. LLMs possess vast stores of knowledge and strong generalization abilities. Combined with agent systems that systematically invoke LLMs and other tools, they have propelled AI reasoning into a wholly new stage. Mathematical agents based on LLMs have now become important tools for assisting mathematicians in research. LLM-driven AI reasoning can roughly be divided into two stages:

The first stage is competition-level theorem proving, which may be regarded as the capability-testing and validation stage. Representative achievements include AlphaGeometry and AlphaProof, which won a silver medal at IMO 2024. At present, it is relatively easy for LLM agents to solve competition problems.

The second stage is research-level theorem proving. Representative LLM agents include AlphaEvolve (June 2025), which improved lower bounds for Ramsey numbers and several other mathematical counting problems through LLM-driven evolutionary optimization; and Aletheia (February 2026), which helped mathematicians complete five mathematics papers.

It should be noted that, although theoretical research related to LLM mathematical reasoning has made significant progress, existing theory still finds it difficult to characterize the mathematical reasoning abilities of LLMs in actual deployment.


## II. Mathematical Research Agent: MechMath Agent Team

MechMath Agent Team (MMAT) is an LLM-based mathematical research agent developed by the Laboratory of Mathematics Mechanization at the Academy of Mathematics and Systems Science, Chinese Academy of Sciences. Its goal is to provide mathematicians with a capable assistant throughout the full mathematical research workflow.

### 1. Introduction to MMAT

MMAT mainly consists of two parts: a general architecture (General Harness) and three agents.

General architecture: it can be understood vividly as the operating system of an LLM, planning how to use LLMs and other tools for mathematical research. This general architecture templates the principal steps or methods of mathematical research into more than 30 SubAgents and tools with different functions, and manages them effectively. Typical SubAgents include:

- Query and checking: querying and checking papers;

- Proof generation: route exploration, sketch generation, proof generation, counterexample generation, conclusion verification, and evaluation;

- Symbolic computation: programming and invocation of symbolic-computation tools;

- Human–machine interaction: providing suggestions, identifying difficulties, and receiving feedback;

- Formal verification: Lean-code generation and semantic-alignment checking.

MMAT agents: on the basis of the General Harness, three agents are formed through the use of SubAgents in different roles and external tools:

- **NL-Prover, the natural-language prover.** It generates mathematical proofs in natural language and follows a “generation–verification–revision” closed loop: it independently retrieves literature, decomposes large propositions into multi-level lemmas, explores multiple proof paths in parallel, automatically searches for counterexamples to validate approaches, and automatically archives failed paths to accumulate experience.

- **FL-Prover, the formal-language prover.** It automatically generates, or converts natural-language proofs into, formal code verifiable by the Lean 4 compiler, while ensuring semantic alignment between natural and formal languages.

- **KB-Manager, the mathematical knowledge manager.** It constructs dedicated knowledge graphs for research topics, uniformly archives literature, definitions, proved lemmas, formal code, unfinished proofs, failed approaches, and obstacles, supports the continuous iteration of long-term projects, and addresses the fragmentation of knowledge across multiple rounds of research.

### 2. Test results

MMAT has independently, or interactively with mathematicians, solved 11 mathematical problems, including eight long-standing open problems in algebraic computation theory, differential algebra, and number theory, and has submitted nine arXiv papers. Among them, four problems were solved fully automatically and independently by MMAT; for the other seven, the key core lemmas were proved by MMAT. MMAT has also provided formal verification for two papers. The problems solved include:

- The Erdős–Rényi (1949) sparsity conjecture for perfect powers of sparse polynomials. The univariate case was solved by Schinzel (1987) and Zannier (2008). We solved the multivariate case.

- The open problem of Plaisted (1984) and others on deciding sparse-polynomial divisibility. We proved that deciding sparse-polynomial divisibility over finite fields is CoNP-hard.

- We solved the equivalence problem for generalized Airy operators proposed by Katz (1987).

- The output-sensitive GCD-computation challenge of Davenport et al. (2009). We proved that output-sensitive sparse-polynomial GCD computation over finite fields is NP-hard.

- The open problem of Roche (2018) on quasi-linear multiplication of sparse polynomials. We gave a quasi-linear-time algorithm for multiplication of sparse polynomials with integer coefficients.

- We obtained a partial result on the finiteness of the Shafarevich–Tate group of CM elliptic curves related to the BSD conjecture.

Experimental verification shows that MMAT can indeed be used throughout the full mathematical research workflow and has strong capabilities for solving mathematical problems; it can serve as a capable assistant to mathematicians.

## III. Several Experiences and Reflections

Based on the use of MMAT, I share several experiences and reflections.

1. A well-designed LLM mathematical agent has the following notable capabilities. First, its mathematical knowledge has very broad coverage, basically encompassing the frontier content of modern mathematics. Second, the agent exhibits strong abilities in planning the solution of mathematical problems, proving, and using tools. Finally, unlike using an LLM directly, an LLM mathematical agent can better suppress hallucinations through dedicated verification mechanisms. For example, once MMAT generates a proof, in most cases it has strong logical rigor.

2. For difficult mathematical problems, LLM agents generally cannot give a complete proof in a single attempt. Mathematicians still play a crucial role in providing hints for proof ideas, verifying the correctness of proofs, and understanding the suggestions of LLM agents; human–machine interaction is an effective way to use LLM agents.

3. There is a huge gap between the ability of an LLM agent to generate natural-language proofs and its ability to generate formal proofs. At present, the capability of NL-Prover is far greater than that of FL-Prover. In most cases, proofs generated by NL-Prover still cannot be completely formalized, and experts are needed to verify their correctness.

4. The capability of the underlying LLM model and the design of the agent harness are key to the capability of LLM agents. On the other hand, previously developed logical solvers (SAT and SMT), mathematics mechanization, and symbolic-computation methods are used by LLM agents to strengthen the weakness of LLMs in computation; interactive formalization is used to verify the correctness of proofs.

5. The development of LLM mathematical agents has made Terence Tao's 2024 prediction, “AI Will Become Mathematicians' Co-Pilot,” a reality. LLM agents have become powerful research assistants for mathematical research, greatly improving its efficiency.

6. Mathematicians will remain the main body of mathematical research. In key links such as identifying core research questions, checking proofs derived by AI, building complete theoretical frameworks, creating entirely new mathematical concepts, and assessing the value of academic results, human mathematicians have an irreplaceable role.

</article>

<aside class="blog-toc" data-blog-toc aria-label="On this page" hidden>
  <p class="blog-toc__title">On this page</p>
  <ol class="blog-toc__links"></ol>
</aside>
</div>
