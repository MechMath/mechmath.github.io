---
layout: default
title: Publications
permalink: /publications/
---

<section class="page-section">
  <h2>Publications</h2>
  {% assign publication_pages = site.pages | where_exp: "item", "item.path contains 'pages/publication/'" | sort: "title" %}
  <div class="card-grid">
    {% assign publication_count = 0 %}
    {% for publication in publication_pages %}
      {% unless publication.publication_template %}
        {% assign publication_count = publication_count | plus: 1 %}
        <article class="card publication-card">
          <h3><a href="{{ publication.url | relative_url }}">{{ publication.title }}</a></h3>
          {% if publication.authors %}
            <p class="publication-authors">{{ publication.authors }}</p>
          {% endif %}
          {% if publication.abstract %}
            <p class="publication-abstract">{{ publication.abstract }}</p>
          {% endif %}
          <div class="publication-links">
            {% if publication.arxiv and publication.arxiv != "pending" %}
              <a href="{{ publication.arxiv }}">arXiv</a>
            {% else %}
              <span>arXiv pending</span>
            {% endif %}
            {% if publication.github and publication.github != "pending" %}
              <a href="{{ publication.github }}">GitHub</a>
            {% else %}
              <span>GitHub pending</span>
            {% endif %}
          </div>
        </article>
      {% endunless %}
    {% endfor %}
  </div>
  {% if publication_count == 0 %}
    <p class="empty-state">暂无论文条目。</p>
  {% endif %}
</section>
