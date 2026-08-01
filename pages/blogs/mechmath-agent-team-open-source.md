---
layout: default
body_class: blog-page
title: "MechMath Agent Team Is Now Open Source"
authors: MechMath Team
blog_date: 2026-08-01
summary: >-
  The MechMath Agent Team project template is now publicly available. Learn how to create a research project, install its dependencies, and launch its natural-language, formal-language, and knowledge-management agents.
permalink: /blogs/mechmath-agent-team-open-source/
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

We are pleased to make the **MechMath Agent Team (MMAT) project template** publicly available at [github.com/MechMath/MechMath-agent-team](https://github.com/MechMath/MechMath-agent-team). The repository packages the three principal MMAT agents—**NL-Prover**, **FL-Prover**, and **KB-Manager**—with a shared project structure and a reproducible launch procedure for mathematical research.

NL-Prover supports literature search, route exploration, natural-language proof construction, counterexample search, and independent review. FL-Prover turns mathematical statements and arguments into Lean 4 developments and applies compilation, placeholder, axiom, and statement-integrity checks. KB-Manager preserves sources, proof artifacts, formal developments, failed approaches, and reusable results in a persistent knowledge base. The agents exchange their work through the project's shared `data/` directory, allowing an investigation to continue across multiple sessions.

## Getting Started

The integrated workspace requires Git, [uv](https://docs.astral.sh/uv/), Python 3.14, and the Codex CLI. Lean 4 is additionally required for formalization with FL-Prover; Claude Code and several external model API keys are optional. Clone the repository into a directory for your new mathematical project, initialize it, and install all workspace dependencies:

```bash
git clone https://github.com/MechMath/MechMath-agent-team.git my-math-project
cd my-math-project
./init.sh
uv sync --all-packages
```

The initialization script asks you to type `INIT` before it proceeds. It then creates an independent Git repository for the new project and **permanently removes the cloned template's Git metadata and history**. Use it only in a fresh project copy, not in a checkout that you intend to use for maintaining or contributing to the template itself.

If you plan to use optional external verification backends, copy the supplied environment examples and add only the credentials you need:

```bash
cp nl-prover/.env.example nl-prover/.env
cp fl-prover/.env.example fl-prover/.env
```

Local `.env` files are excluded from version control. The repository documentation lists the supported provider keys and the additional Lean configuration available to FL-Prover.

## Running a Research Session

Start the interactive launcher from the project root:

```bash
./start.sh
```

Select KB-Manager when you want to register or ingest sources, query the project knowledge base, or archive verified results. Select NL-Prover to provide a mathematical problem and develop a natural-language proof through a generation–verification–revision loop. Select FL-Prover when you have a statement or informal argument to formalize and verify in Lean 4. Exit the current CLI and run `./start.sh` again whenever you want to switch components. You can also pass CLI options through the launcher; for example, `./start.sh --search` enables web search in a Codex session.

Each problem receives its own workspace under `data/workspace/`. Human-provided files and handoffs to KB-Manager can be placed in `data/inbox/`, while the persistent wiki, source archive, and curated Lean artifacts remain available across the project. More detailed workflows and manual launch commands are documented in the [repository README](https://github.com/MechMath/MechMath-agent-team#readme) and in the README for each component.

## Share What You Build

We hope researchers, students, and developers will use the open-source template to explore mathematical questions, construct and review proofs, build Lean formalizations, and develop new workflows around AI-assisted mathematics. If MMAT helps you complete a task, establish a result, create a useful formal artifact, or discover a new application, we would be delighted to hear from you. Please contact the MechMath team at [mmat@amss.ac.cn](mailto:mmat@amss.ac.cn) and tell us what you built.

</article>

<aside class="blog-toc" data-blog-toc aria-label="On this page" hidden>
  <p class="blog-toc__title">On this page</p>
  <ol class="blog-toc__links"></ol>
</aside>
</div>
