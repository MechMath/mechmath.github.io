(function () {
  const agents = {
    kb: {
      name: "KB Manager",
      title: "KB-Manager",
      image: "/assets/images/collector.jpg",
      noteClass: "agent-note--kb",
      summary:
        "Maintains the persistent, auditable memory graph that makes mathematical knowledge reusable across a research project.",
      subagents:
        "Registrar, Orchestrator, Ingester, Archivist, and Researcher convert raw materials into structured, formalization-aware knowledge.",
      tools:
        "Uses typed cards and graph operations for ingestion, bounded retrieval, maintenance, and archiving of proofs, Lean artifacts, and verified obstructions."
    },
    nl: {
      name: "NL Prover",
      title: "NL-Prover",
      image: "/assets/images/NL.jpg",
      noteClass: "agent-note--nl",
      summary:
        "Leads mathematical discovery by coordinating a scalable proof pipeline that synthesizes and revises natural-language proofs.",
      subagents:
        "Coordinates core derivation, grounded interfaces, advanced reasoning, and documentation agents for decomposition, recovery, auditing, and publication-ready synthesis.",
      tools:
        "Its command-line tooling handles literature retrieval, PDF parsing, programmatic execution, and structural schema gating so the agents can focus on logical synthesis."
    },
    fl: {
      name: "FL Prover",
      title: "FL-Prover",
      image: "/assets/images/FL.jpg",
      noteClass: "agent-note--fl",
      summary:
        "Provides the deterministic logical boundary by formalizing into Lean 4 and mechanically verifying the resulting proof.",
      subagents:
        "Formalizer, F-Reviewer, F-Generator, Integrator, Golfer, and Regulator separate drafting, semantic review, proof search, integration, cleanup, and auditing.",
      tools:
        "Lean compiler checks, placeholder scans, statement snapshots, dependency indexes, and theorem search tools prevent drift and expose incomplete or invalid formalizations."
    }
  };

  const layouts = {
    kb: { top: "nl", bottom: "fl" },
    nl: { top: "kb", bottom: "fl" },
    fl: { top: "kb", bottom: "nl" }
  };

  const relations = {
    "nl>kb": "Archive",
    "kb>nl": "Inform",
    "fl>kb": "Archive",
    "kb>fl": "Inform",
    "nl>fl": "Formalize",
    "fl>nl": "Feedback"
  };

  function relationLabel(from, to) {
    return relations[`${from}>${to}`] || "Coordinate";
  }

  function setButton(button, agentId, isCenter) {
    const agent = agents[agentId];
    const image = button.querySelector("img");
    const label = button.querySelector("span");

    button.dataset.agentId = agentId;
    button.classList.toggle("is-active", isCenter);
    button.setAttribute("aria-pressed", isCenter ? "true" : "false");
    button.setAttribute(
      "aria-label",
      isCenter ? `${agent.name} is the current center agent` : `Select ${agent.name} as center agent`
    );
    if (image.dataset.agentImage !== agent.image) {
      image.src = agent.image;
      image.dataset.agentImage = agent.image;
    }
    label.textContent = agent.name;
  }

  function setCenter(centerId) {
    const stage = document.querySelector("[data-agent-stage]");
    const note = document.querySelector("[data-agent-note]");

    if (!stage || !note || !agents[centerId]) return;

    const layout = layouts[centerId];
    const slots = {
      top: stage.querySelector('[data-agent-slot="top"]'),
      center: stage.querySelector('[data-agent-slot="center"]'),
      bottom: stage.querySelector('[data-agent-slot="bottom"]')
    };

    setButton(slots.top, layout.top, false);
    setButton(slots.center, centerId, true);
    setButton(slots.bottom, layout.bottom, false);

    stage.querySelector('[data-relation-slot="top-to-center"]').textContent = relationLabel(layout.top, centerId);
    stage.querySelector('[data-relation-slot="center-to-top"]').textContent = relationLabel(centerId, layout.top);
    stage.querySelector('[data-relation-slot="bottom-to-center"]').textContent = relationLabel(layout.bottom, centerId);
    stage.querySelector('[data-relation-slot="center-to-bottom"]').textContent = relationLabel(centerId, layout.bottom);

    note.className = `agent-note ${agents[centerId].noteClass}`;
    note.querySelector("h3").textContent = agents[centerId].title;
    note.querySelector("[data-agent-summary]").textContent = agents[centerId].summary;
    note.querySelector("[data-agent-subagents]").textContent = agents[centerId].subagents;
    note.querySelector("[data-agent-tools]").textContent = agents[centerId].tools;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const stage = document.querySelector("[data-agent-stage]");
    if (!stage) return;

    Object.values(agents).forEach(function (agent) {
      const image = new Image();
      image.src = agent.image;
    });

    stage.addEventListener("click", function (event) {
      const button = event.target.closest("[data-agent-id]");
      if (!button || !stage.contains(button)) return;
      setCenter(button.dataset.agentId);
    });

    setCenter("nl");
  });
})();
