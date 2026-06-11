---
layout: default
title: Publications
permalink: /publications/
---

<section class="home-card publication-summary">
  <h2>Publications</h2>
  <p>We conduct broad mathematical research through AI for Mathematics.</p>
</section>

<section class="publication-index">
  {% assign publication_pages = site.pages | where_exp: "item", "item.path contains 'pages/publication/'" | sort: "publication_date" | reverse %}
  <div class="publication-list">
    {% assign publication_count = 0 %}
    {% for publication in publication_pages %}
      {% unless publication.publication_template %}
        {% assign publication_count = publication_count | plus: 1 %}
        <article class="home-card publication-card">
          {% if publication.publication_date %}
            <time class="publication-date" datetime="{{ publication.publication_date | date_to_xmlschema }}">{{ publication.publication_date | date: "%b %-d, %Y" }}</time>
          {% endif %}
          <h3><a href="{{ publication.url | relative_url }}">{{ publication.title }}</a></h3>
          {% if publication.authors %}
            <p class="publication-authors">{{ publication.authors }}</p>
          {% endif %}
          {% if publication.abstract %}
            <p class="publication-abstract">{{ publication.abstract }}</p>
          {% endif %}
          <div class="publication-links">
            {% if publication.arxiv and publication.arxiv != "pending" %}
              <a href="{{ publication.arxiv }}" aria-label="arXiv">
                <img src="{{ '/assets/icons/arxiv-logo-one-color-white.svg' | relative_url }}" alt="">
              </a>
            {% else %}
              <span>arXiv pending</span>
            {% endif %}
            {% if publication.github and publication.github != "pending" %}
              <a href="{{ publication.github }}" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.18 1.18A11.1 11.1 0 0 1 12 6.1c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.15c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </a>
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
