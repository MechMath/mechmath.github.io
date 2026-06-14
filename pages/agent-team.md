---
layout: default
title: Agent Team
permalink: /agent-team/
---

<section class="home-card publication-summary">
  <h2>Agent Team</h2>
  <p>Agents coordinate across knowledge base management, natural language proof, and formal verification.</p>
</section>

<section class="team-index">
  <div class="card-grid team-card-grid">
    <article class="card agent-card">
      <img src="{{ '/assets/images/collector.jpg' | relative_url }}" alt="KB Manager agent illustration">
      <h3>KB Manager</h3>
      <p class="card-placeholder">A persistent research knowledge base. Researchers provide raw sources, and KB-Manager handles reading, extraction, cross-referencing, and compilation into a structured wiki.</p>
    </article>
    <article class="card agent-card">
      <img src="{{ '/assets/images/NL.jpg' | relative_url }}" alt="NL Prover agent illustration">
      <h3>NL Prover</h3>
      <p class="card-placeholder">An natural language proof system with single-agent solve mode and multi-agent orchestration. Sketcher decomposes problems into lemmas, Generators prove them, Verifiers check each proof, and the Orchestrator assembles the final proof.</p>
    </article>
    <article class="card agent-card">
      <img src="{{ '/assets/images/FL.jpg' | relative_url }}" alt="FL Prover agent illustration">
      <h3>FL Prover</h3>
      <p class="card-placeholder">A formal proof system for Lean. It can automatically complete Lean proofs from formalized problems or translate natural-language mathematical arguments into Lean statements and proof scripts.</p>
    </article>
  </div>
</section>
