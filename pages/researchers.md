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
  {% assign researcher_groups = "professor:Professor|postdoc:Postdoctoral Researcher|phd:PhD Student|master:Master's Student|undergrad:Undergraduate Student" | split: "|" %}
  {% assign researcher_count = 0 %}

  <div class="researcher-group-grid">
    {% for group_entry in researcher_groups %}
      {% assign group_parts = group_entry | split: ":" %}
      {% assign group_key = group_parts[0] %}
      {% assign group_label = group_parts[1] %}
      {% assign group_researchers = researcher_pages | where: "researcher_group", group_key %}

      {% assign group_count = 0 %}
      {% for researcher in group_researchers %}
        {% unless researcher.researcher_template %}
          {% assign group_count = group_count | plus: 1 %}
        {% endunless %}
      {% endfor %}

      {% if group_count > 0 %}
        {% assign researcher_count = researcher_count | plus: group_count %}
        <article class="card researcher-group-card">
          <h3>{{ group_label }}</h3>
          <ul class="researcher-list">
            {% for researcher in group_researchers %}
              {% unless researcher.researcher_template %}
                <li>
                  <a href="{{ researcher.url | relative_url }}">{{ researcher.title }}</a>
                </li>
              {% endunless %}
            {% endfor %}
          </ul>
        </article>
      {% endif %}
    {% endfor %}
  </div>

  {% if researcher_count == 0 %}
    <p class="empty-state">暂无研究人员条目。</p>
  {% endif %}
</section>
