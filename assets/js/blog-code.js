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

  var icons = {
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></svg>',
    copied: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4 4L19 7"></path></svg>',
    error: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v5"></path><path d="M12 16.5h.01"></path></svg>'
  };

  function setButtonState(button, state, language) {
    var labels = {
      copy: 'Copy ' + language + ' code',
      copied: language + ' code copied',
      error: 'Unable to copy ' + language + ' code'
    };

    button.classList.toggle('is-copied', state === 'copied');
    button.classList.toggle('is-copy-error', state === 'error');
    button.innerHTML = icons[state];
    button.setAttribute('aria-label', labels[state]);
    button.title = labels[state];
  }

  Array.prototype.slice.call(document.querySelectorAll('.blog-detail-card div.highlighter-rouge')).forEach(function (block) {
    var code = block.querySelector('pre code');
    if (!code || block.querySelector('.blog-code-copy')) return;

    var language = languageName(block);
    var button = document.createElement('button');
    button.className = 'blog-code-copy';
    button.type = 'button';
    setButtonState(button, 'copy', language);

    button.addEventListener('click', function () {
      copyText(code.textContent).then(function () {
        setButtonState(button, 'copied', language);

        window.setTimeout(function () {
          setButtonState(button, 'copy', language);
        }, 1800);
      }).catch(function () {
        setButtonState(button, 'error', language);

        window.setTimeout(function () {
          setButtonState(button, 'copy', language);
        }, 1800);
      });
    });

    block.appendChild(button);
  });
}());
