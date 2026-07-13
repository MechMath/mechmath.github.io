(function () {
  var tocBlocks = Array.prototype.slice.call(document.querySelectorAll('[data-blog-toc]'));

  tocBlocks.forEach(function (toc) {
    var layout = toc.closest('.blog-page-layout');
    var article = layout && layout.querySelector('.blog-detail-card');
    var list = toc.querySelector('.blog-toc__links');
    if (!article || !list) return;

    var headings = Array.prototype.slice.call(article.querySelectorAll('h2, h3'));
    if (!headings.length) return;

    headings.forEach(function (heading, index) {
      if (!heading.id) {
        heading.id = 'section-' + (index + 1);
      }

      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      link.className = 'blog-toc__link blog-toc__link--level-' + heading.tagName.slice(1);
      item.appendChild(link);
      list.appendChild(item);
    });

    toc.hidden = false;
  });
}());
