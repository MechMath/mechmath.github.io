(function () {
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    var copied = document.execCommand('copy');
    textarea.remove();
    return copied ? Promise.resolve() : Promise.reject(new Error('Copy failed'));
  }

  function languageName(block) {
    var languageClass = Array.prototype.find.call(block.classList, function (className) {
      return className.indexOf('language-') === 0;
    });

    if (!languageClass) return 'code';

    var language = languageClass.slice('language-'.length);
    var names = {
      bash: 'Bash',
      shell: 'Bash',
      javascript: 'JavaScript',
      js: 'JavaScript',
      json: 'JSON',
      yaml: 'YAML',
      yml: 'YAML'
    };
    return names[language] || language.charAt(0).toUpperCase() + language.slice(1);
  }

  Array.prototype.slice.call(document.querySelectorAll('.blog-detail-card div.highlighter-rouge')).forEach(function (block) {
    var code = block.querySelector('pre code');
    if (!code || block.querySelector('.blog-code-copy')) return;

    var language = languageName(block);
    var button = document.createElement('button');
    button.className = 'blog-code-copy';
    button.type = 'button';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy ' + language + ' code');

    button.addEventListener('click', function () {
      copyText(code.textContent).then(function () {
        button.classList.remove('is-copy-error');
        button.classList.add('is-copied');
        button.textContent = 'Copied';
        button.setAttribute('aria-label', language + ' code copied');

        window.setTimeout(function () {
          button.classList.remove('is-copied');
          button.textContent = 'Copy';
          button.setAttribute('aria-label', 'Copy ' + language + ' code');
        }, 1800);
      }).catch(function () {
        button.classList.remove('is-copied');
        button.classList.add('is-copy-error');
        button.textContent = 'Failed';
        button.setAttribute('aria-label', 'Unable to copy ' + language + ' code');

        window.setTimeout(function () {
          button.classList.remove('is-copy-error');
          button.textContent = 'Copy';
          button.setAttribute('aria-label', 'Copy ' + language + ' code');
        }, 1800);
      });
    });

    block.appendChild(button);
  });
}());
