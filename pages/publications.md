---
layout: default
title: Publications
permalink: /publications/
---

<section class="home-card publication-summary">
  <h2>Publications</h2>
  <p>Our publications explore AI-assisted mathematics across theorem proving, formal verification, symbolic computation, and computational complexity. Recent work includes Lean-formalized solutions to OEIS conjectures, finite certificates for inequalities, complexity results for sparse polynomial problems, fast algorithms in computer algebra, and human-AI collaborations through the MechMath Agent Team.</p>
</section>

<section class="publication-index" id="publications-app" data-page-size="7">
  {% assign publication_pages = site.pages | where_exp: "item", "item.path contains 'pages/publication/'" | sort: "publication_date" | reverse %}
  <div class="publication-search">
    <label for="publication-search-input">Search publications</label>
    <input id="publication-search-input" type="search" data-publication-search placeholder="Search by title or abstract">
  </div>
  <div class="publication-list">
    {% assign publication_count = 0 %}
    {% for publication in publication_pages %}
      {% unless publication.publication_template %}
        {% assign publication_count = publication_count | plus: 1 %}
        {% assign publication_search_text = publication.title | append: " " | append: publication.abstract | strip_html | normalize_whitespace %}
        <article class="home-card publication-card" data-publication-card data-publication-text="{{ publication_search_text | escape }}">
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
  <nav class="publication-pagination" data-publication-pagination aria-label="Publication pages"></nav>
  <p class="empty-state" data-publication-empty hidden>No publications match your search.</p>
  {% if publication_count == 0 %}
    <p class="empty-state">暂无论文条目。</p>
  {% endif %}
</section>

<script>
  (function () {
    var app = document.getElementById('publications-app');
    if (!app) return;

    var pageSize = parseInt(app.getAttribute('data-page-size'), 10) || 7;
    var cards = Array.prototype.slice.call(app.querySelectorAll('[data-publication-card]'));
    var pagination = app.querySelector('[data-publication-pagination]');
    var searchInput = app.querySelector('[data-publication-search]');
    var emptyState = app.querySelector('[data-publication-empty]');
    var currentPage = 1;
    var filteredCards = cards;

    function renderPagination(totalPages) {
      pagination.innerHTML = '';
      if (totalPages <= 1) return;

      var previous = document.createElement('button');
      previous.type = 'button';
      previous.textContent = 'Previous';
      previous.disabled = currentPage === 1;
      previous.addEventListener('click', function () {
        setPage(currentPage - 1);
      });
      pagination.appendChild(previous);

      for (var page = 1; page <= totalPages; page += 1) {
        var button = document.createElement('button');
        button.type = 'button';
        button.textContent = page;
        button.setAttribute('aria-label', 'Page ' + page);
        if (page === currentPage) {
          button.className = 'is-active';
          button.setAttribute('aria-current', 'page');
        }
        button.addEventListener('click', function (event) {
          setPage(parseInt(event.currentTarget.textContent, 10));
        });
        pagination.appendChild(button);
      }

      var next = document.createElement('button');
      next.type = 'button';
      next.textContent = 'Next';
      next.disabled = currentPage === totalPages;
      next.addEventListener('click', function () {
        setPage(currentPage + 1);
      });
      pagination.appendChild(next);
    }

    function setPage(page) {
      var totalPages = Math.max(1, Math.ceil(filteredCards.length / pageSize));
      currentPage = Math.min(Math.max(page, 1), totalPages);
      var start = (currentPage - 1) * pageSize;
      var end = start + pageSize;

      cards.forEach(function (card, index) {
        var filteredIndex = filteredCards.indexOf(card);
        card.hidden = filteredIndex === -1 || filteredIndex < start || filteredIndex >= end;
      });

      renderPagination(totalPages);
      if (emptyState) {
        emptyState.hidden = filteredCards.length > 0;
      }
    }

    function filterCards() {
      var query = searchInput.value.trim().toLowerCase();
      filteredCards = cards.filter(function (card) {
        return !query || card.getAttribute('data-publication-text').toLowerCase().indexOf(query) !== -1;
      });
      setPage(1);
    }

    if (searchInput) {
      searchInput.addEventListener('input', filterCards);
    }

    setPage(1);
  })();
</script>
