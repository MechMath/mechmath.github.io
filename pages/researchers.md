---
layout: default
title: Researchers
permalink: /researchers/
---

<section class="home-card publication-summary">
  <h2>Researchers</h2>
  <p>Researchers collaborating on AI-assisted mathematical discovery, proof development, and formal verification.</p>
</section>

<section class="team-index">
  {% assign researcher_pages = site.pages | where_exp: "item", "item.path contains 'pages/researcher/'" | sort: "title" %}
  <div class="card-grid team-card-grid">
    {% assign researcher_count = 0 %}
    {% for researcher in researcher_pages %}
      {% unless researcher.researcher_template %}
        {% assign researcher_count = researcher_count | plus: 1 %}
        <article class="card researcher-card">
          <h3><a href="{{ researcher.url | relative_url }}">{{ researcher.title }}</a></h3>
          {% if researcher.role %}
            <p class="researcher-role">{{ researcher.role }}</p>
          {% endif %}
          {% if researcher.summary %}
            <p class="card-placeholder">{{ researcher.summary }}</p>
          {% endif %}
        </article>
      {% endunless %}
    {% endfor %}
  </div>
  {% if researcher_count == 0 %}
    <p class="empty-state">暂无研究人员条目。</p>
  {% endif %}
</section>
