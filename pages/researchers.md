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
      {% assign ordered_researchers = group_researchers | where_exp: "researcher", "researcher.order" | sort: "order" %}
      {% assign unordered_researchers = group_researchers | where_exp: "researcher", "researcher.order == nil" %}

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
          <div class="researcher-person-grid">
            {% for researcher in ordered_researchers %}
              {% unless researcher.researcher_template %}
                <article class="researcher-person-card">
                  {% assign researcher_photo = researcher.photo | default: "/assets/images/default-researcher.svg" %}
                  {% if researcher.homepage %}
                    <a class="researcher-person-card__link" href="{{ researcher.homepage }}">
                      <img class="researcher-photo" src="{{ researcher_photo | relative_url }}" alt="{{ researcher.title }} photo">
                      <span class="researcher-person-card__body">
                        <span class="researcher-person-card__name">{{ researcher.title }}</span>
                        {% if researcher.summary %}
                          <span class="researcher-person-card__summary">{{ researcher.summary }}</span>
                        {% endif %}
                      </span>
                    </a>
                  {% else %}
                    <div class="researcher-person-card__link researcher-person-card__link--disabled">
                      <img class="researcher-photo" src="{{ researcher_photo | relative_url }}" alt="{{ researcher.title }} photo">
                      <span class="researcher-person-card__body">
                        <span class="researcher-person-card__name">{{ researcher.title }}</span>
                        {% if researcher.summary %}
                          <span class="researcher-person-card__summary">{{ researcher.summary }}</span>
                        {% endif %}
                      </span>
                    </div>
                  {% endif %}
                </article>
              {% endunless %}
            {% endfor %}
            {% for researcher in unordered_researchers %}
              {% unless researcher.researcher_template %}
                <article class="researcher-person-card">
                  {% assign researcher_photo = researcher.photo | default: "/assets/images/default-researcher.svg" %}
                  {% if researcher.homepage %}
                    <a class="researcher-person-card__link" href="{{ researcher.homepage }}">
                      <img class="researcher-photo" src="{{ researcher_photo | relative_url }}" alt="{{ researcher.title }} photo">
                      <span class="researcher-person-card__body">
                        <span class="researcher-person-card__name">{{ researcher.title }}</span>
                        {% if researcher.summary %}
                          <span class="researcher-person-card__summary">{{ researcher.summary }}</span>
                        {% endif %}
                      </span>
                    </a>
                  {% else %}
                    <div class="researcher-person-card__link researcher-person-card__link--disabled">
                      <img class="researcher-photo" src="{{ researcher_photo | relative_url }}" alt="{{ researcher.title }} photo">
                      <span class="researcher-person-card__body">
                        <span class="researcher-person-card__name">{{ researcher.title }}</span>
                        {% if researcher.summary %}
                          <span class="researcher-person-card__summary">{{ researcher.summary }}</span>
                        {% endif %}
                      </span>
                    </div>
                  {% endif %}
                </article>
              {% endunless %}
            {% endfor %}
          </div>
        </article>
      {% endif %}
    {% endfor %}
  </div>

  {% if researcher_count == 0 %}
    <p class="empty-state">暂无研究人员条目。</p>
  {% endif %}
</section>
