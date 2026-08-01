(function () {
  var article = document.querySelector('.blog-detail-card');
  if (!article || article.querySelector('.blog-reading-meta')) return;

  var content = article.cloneNode(true);
  var excludedSelectors = [
    '.blog-detail-date',
    '.blog-detail-authors',
    '.blog-detail-affiliation',
    '.blog-detail-divider',
    '.blog-reading-meta',
    'h1',
    'pre',
    'code',
    'script',
    'style',
    'noscript',
    'mjx-container',
    '.MathJax',
    '.MathJax_Preview'
  ];

  Array.prototype.slice.call(content.querySelectorAll(excludedSelectors.join(','))).forEach(function (element) {
    element.remove();
  });

  var text = content.textContent.replace(/\s+/g, ' ').trim();
  if (!text) return;

  var cjkPattern = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3040-\u30ff\uac00-\ud7af]/g;
  var cjkCharacters = (text.match(cjkPattern) || []).length;
  var nonCjkText = text.replace(cjkPattern, ' ');
  var wordMatches = nonCjkText.match(/[\p{L}\p{N}]+(?:[\u2019'-][\p{L}\p{N}]+)*/gu) || [];
  var wordCount = wordMatches.length;
  var readingMinutes = Math.max(1, Math.ceil((wordCount / 200) + (cjkCharacters / 400)));
  var formatter = new Intl.NumberFormat('en-US');
  var lengthLabel = cjkCharacters > wordCount
    ? formatter.format(cjkCharacters) + ' characters'
    : formatter.format(wordCount) + ' words';

  var metadata = document.createElement('p');
  metadata.className = 'blog-reading-meta';
  metadata.setAttribute('aria-label', 'Article length and estimated reading time');
  metadata.dataset.wordCount = String(wordCount);
  metadata.dataset.cjkCharacterCount = String(cjkCharacters);
  metadata.dataset.readingMinutes = String(readingMinutes);

  function appendMetadataItem(label) {
    var item = document.createElement('span');
    item.className = 'blog-reading-meta__item';
    item.textContent = label;
    metadata.appendChild(item);
  }

  [lengthLabel, readingMinutes + ' min read'].forEach(appendMetadataItem);

  var divider = article.querySelector('.blog-detail-divider');
  if (divider) {
    article.insertBefore(metadata, divider);
  } else {
    var heading = article.querySelector('h1');
    if (heading) heading.insertAdjacentElement('afterend', metadata);
  }

  var analytics = window.mechmathAnalytics;
  if (!analytics || !analytics.enabled) return;

  function loadViewCount(retriesRemaining) {
    var counterUrl = analytics.counterBaseUrl + '/counter/' + encodeURIComponent(analytics.path) + '.json';

    window.fetch(counterUrl, { credentials: 'omit' })
      .then(function (response) {
        if (!response.ok) throw new Error('View count unavailable');
        return response.json();
      })
      .then(function (data) {
        if (!data || typeof data.count !== 'string' || !/\d/.test(data.count)) return;

        var numericCount = Number(data.count.replace(/[^\d]/g, ''));
        appendMetadataItem(data.count + (numericCount === 1 ? ' view' : ' views'));
        metadata.setAttribute('aria-label', 'Article length, estimated reading time, and page views');
      })
      .catch(function () {
        if (retriesRemaining > 0) {
          window.setTimeout(function () {
            loadViewCount(retriesRemaining - 1);
          }, 2000);
        }
      });
  }

  loadViewCount(1);
}());
