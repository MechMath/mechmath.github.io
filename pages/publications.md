---
layout: default
title: Publications
permalink: /publications/
---

<section class="home-card publication-summary">
  <h2>Publications</h2>
  <p>Our publications explore AI-assisted mathematics across theorem proving, formal verification, symbolic computation, and computational complexity. Recent work includes Lean-formalized solutions to OEIS conjectures, finite certificates for inequalities, complexity results for sparse polynomial problems, fast algorithms in computer algebra, and human-AI collaborations through the MechMath Agent Team.</p>
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
            <div class="publication-abstract">{{ publication.abstract | markdownify }}</div>
          {% endif %}
          {% include publication-links.html publication=publication %}
        </article>
      {% endunless %}
    {% endfor %}
  </div>
  {% if publication_count == 0 %}
    <p class="empty-state">暂无论文条目。</p>
  {% endif %}
</section>
