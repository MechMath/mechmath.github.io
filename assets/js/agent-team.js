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
    if (stage) {
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
    }

    const workflowStages = {
      "route-exploration": {
        image: "/assets/images/workflow/route-exploration.png",
        alt: "Problem Understanding and Route Exploration stage from the full-cycle theorem proving workflow",
        caption: "Problem Understanding and Route Exploration",
        color: "#057db8"
      },
      "proof-development": {
        image: "/assets/images/workflow/proof-development.png",
        alt: "Proof Development and Bottleneck Identification stage from the full-cycle theorem proving workflow",
        caption: "Proof Development and Bottleneck Identification",
        color: "#9785b7"
      },
      "strategic-recovery": {
        image: "/assets/images/workflow/strategic-recovery.png",
        alt: "Mechanism Blockage and Strategic Recovery stage from the full-cycle theorem proving workflow",
        caption: "Mechanism Blockage and Strategic Recovery",
        color: "#c6152b"
      },
      "computation-certification": {
        image: "/assets/images/workflow/computation-certification.png",
        alt: "Computation Certification and Proof Assembly stage from the full-cycle theorem proving workflow",
        caption: "Computation Certification and Proof Assembly",
        color: "#af9217"
      },
      "lean-formalization": {
        image: "/assets/images/workflow/lean-formalization.png",
        alt: "Lean 4 Formalization and Verification stage from the full-cycle theorem proving workflow",
        caption: "Lean 4 Formalization and Verification",
        color: "#2b9487"
      }
    };
    const workflowControls = document.querySelector("[data-workflow-controls]");
    const workflowDetail = document.querySelector("[data-workflow-detail]");
    const workflowModal = document.querySelector("[data-workflow-modal]");

    if (!workflowControls || !workflowDetail || !workflowModal) return;

    const workflowImage = workflowDetail.querySelector("[data-workflow-image]");
    const workflowCaption = workflowDetail.querySelector("[data-workflow-caption]");
    const workflowClose = workflowModal.querySelector("[data-workflow-close]");

    function resetWorkflowControls() {
      workflowControls.querySelectorAll("[data-workflow-stage]").forEach(function (control) {
        control.classList.remove("is-active");
        control.setAttribute("aria-expanded", "false");
      });
    }

    workflowControls.addEventListener("click", function (event) {
      const button = event.target.closest("[data-workflow-stage]");
      if (!button || !workflowControls.contains(button)) return;

      const stageData = workflowStages[button.dataset.workflowStage];
      const isOpen = button.getAttribute("aria-expanded") === "true";

      resetWorkflowControls();

      if (isOpen || !stageData) {
        workflowDetail.hidden = true;
        workflowImage.removeAttribute("src");
        workflowImage.alt = "";
        workflowCaption.textContent = "";
        workflowModal.close();
        return;
      }

      button.classList.add("is-active");
      button.setAttribute("aria-expanded", "true");
      workflowImage.src = stageData.image;
      workflowImage.alt = stageData.alt;
      workflowCaption.textContent = stageData.caption;
      workflowDetail.style.setProperty("--workflow-active-color", stageData.color);
      workflowModal.style.setProperty("--workflow-active-color", stageData.color);
      workflowDetail.hidden = false;
      workflowModal.showModal();
    });

    workflowClose.addEventListener("click", function () {
      workflowModal.close();
    });

    workflowModal.addEventListener("click", function (event) {
      if (event.target === workflowModal) workflowModal.close();
    });

    workflowModal.addEventListener("close", function () {
      resetWorkflowControls();
    });

    const discoveryCarousel = document.querySelector("[data-discovery-carousel]");
    if (!discoveryCarousel) return;

    const discoveryTrack = discoveryCarousel.querySelector("[data-discovery-track]");
    const discoveryPrevious = discoveryCarousel.querySelector("[data-discovery-previous]");
    const discoveryNext = discoveryCarousel.querySelector("[data-discovery-next]");
    const discoveryDots = discoveryCarousel.querySelector("[data-discovery-dots]");
    const discoveryViewport = discoveryCarousel.querySelector(".discovery-carousel__viewport");
    const discoveryCards = Array.from(discoveryTrack.children);
    let discoveryIndex = 0;

    function setDiscoveryCard(index) {
      discoveryIndex = (index + discoveryCards.length) % discoveryCards.length;
      discoveryTrack.style.transform = `translateX(-${discoveryCards[discoveryIndex].offsetLeft}px)`;
      discoveryCards.forEach(function (card, cardIndex) {
        card.setAttribute("aria-hidden", cardIndex === discoveryIndex ? "false" : "true");
      });
      discoveryDots.querySelectorAll("[data-discovery-go]").forEach(function (dot) {
        const isActive = Number(dot.dataset.discoveryGo) === discoveryIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    }

    discoveryPrevious.addEventListener("click", function () {
      setDiscoveryCard(discoveryIndex - 1);
    });

    discoveryNext.addEventListener("click", function () {
      setDiscoveryCard(discoveryIndex + 1);
    });

    discoveryDots.addEventListener("click", function (event) {
      const dot = event.target.closest("[data-discovery-go]");
      if (!dot || !discoveryDots.contains(dot)) return;
      setDiscoveryCard(Number(dot.dataset.discoveryGo));
    });

    discoveryViewport.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") setDiscoveryCard(discoveryIndex - 1);
      if (event.key === "ArrowRight") setDiscoveryCard(discoveryIndex + 1);
    });

    setDiscoveryCard(0);
    window.addEventListener("resize", function () {
      setDiscoveryCard(discoveryIndex);
    });
  });
})();
