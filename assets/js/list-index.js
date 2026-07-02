(function () {
  var indexes = Array.prototype.slice.call(document.querySelectorAll('[data-list-index]'));
  if (!indexes.length) return;

  indexes.forEach(function (app) {
    var pageSize = parseInt(app.getAttribute('data-page-size'), 10) || 7;
    var cards = Array.prototype.slice.call(app.querySelectorAll('[data-list-card]'));
    var pagination = app.querySelector('[data-list-pagination]');
    var searchInput = app.querySelector('[data-list-search]');
    var emptyState = app.querySelector('[data-list-empty]');
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

      cards.forEach(function (card) {
        var filteredIndex = filteredCards.indexOf(card);
        card.hidden = filteredIndex === -1 || filteredIndex < start || filteredIndex >= end;
      });

      if (pagination) {
        renderPagination(totalPages);
      }
      if (emptyState) {
        emptyState.hidden = filteredCards.length > 0;
      }
    }

    function filterCards() {
      var query = searchInput.value.trim().toLowerCase();
      filteredCards = cards.filter(function (card) {
        return !query || card.getAttribute('data-list-text').toLowerCase().indexOf(query) !== -1;
      });
      setPage(1);
    }

    if (searchInput) {
      searchInput.addEventListener('input', filterCards);
    }

    setPage(1);
  });
})();
