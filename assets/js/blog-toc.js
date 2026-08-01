(function () {
  var tocBlocks = Array.prototype.slice.call(document.querySelectorAll('[data-blog-toc]'));

  tocBlocks.forEach(function (toc) {
    var layout = toc.closest('.blog-page-layout');
    var article = layout && layout.querySelector('.blog-detail-card');
    var list = toc.querySelector('.blog-toc__links');
    if (!article || !list) return;

    var headings = Array.prototype.slice.call(article.querySelectorAll('h2, h3'));
    if (!headings.length) return;

    var links = [];

    function createLink(heading) {
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      link.className = 'blog-toc__link blog-toc__link--level-' + heading.tagName.slice(1);
      return link;
    }

    headings.forEach(function (heading, index) {
      if (!heading.id) {
        heading.id = 'section-' + (index + 1);
      }

      var item = document.createElement('li');
      var link = createLink(heading);
      item.appendChild(link);
      list.appendChild(item);
      links.push(link);
    });

    toc.hidden = false;

    var mobileToc = document.createElement('details');
    mobileToc.className = 'blog-mobile-toc';

    var mobileSummary = document.createElement('summary');
    mobileSummary.textContent = 'On this page';
    mobileToc.appendChild(mobileSummary);

    var mobileList = document.createElement('ol');
    mobileList.className = 'blog-toc__links';
    headings.forEach(function (heading) {
      var item = document.createElement('li');
      var link = createLink(heading);
      link.addEventListener('click', function () {
        mobileToc.open = false;
      });
      item.appendChild(link);
      mobileList.appendChild(item);
      links.push(link);
    });
    mobileToc.appendChild(mobileList);

    var divider = article.querySelector('.blog-detail-divider');
    if (divider) {
      divider.insertAdjacentElement('afterend', mobileToc);
    } else {
      article.insertBefore(mobileToc, article.firstChild);
    }

    var progress = document.createElement('div');
    progress.className = 'blog-reading-progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'Article reading progress');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    progress.setAttribute('aria-valuenow', '0');

    var progressBar = document.createElement('span');
    progressBar.className = 'blog-reading-progress__bar';
    progress.appendChild(progressBar);
    document.body.appendChild(progress);

    var ticking = false;

    function updateReadingState() {
      var articleTop = article.getBoundingClientRect().top + window.scrollY;
      var readableDistance = Math.max(1, article.offsetHeight - window.innerHeight);
      var progressValue = Math.min(1, Math.max(0, (window.scrollY - articleTop) / readableDistance));
      var progressPercent = Math.round(progressValue * 100);
      progressBar.style.transform = 'scaleX(' + progressValue + ')';
      progress.setAttribute('aria-valuenow', String(progressPercent));

      var activeIndex = 0;
      headings.forEach(function (heading, index) {
        if (heading.getBoundingClientRect().top <= 140) activeIndex = index;
      });

      links.forEach(function (link) {
        var isActive = link.getAttribute('href') === '#' + headings[activeIndex].id;
        link.classList.toggle('is-active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });

      ticking = false;
    }

    function requestReadingStateUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateReadingState);
    }

    window.addEventListener('scroll', requestReadingStateUpdate, { passive: true });
    window.addEventListener('resize', requestReadingStateUpdate);
    mobileToc.addEventListener('toggle', requestReadingStateUpdate);
    updateReadingState();
  });
}());
