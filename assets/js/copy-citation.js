(function () {
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    return Promise.resolve();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-copy-citation]").forEach(function (button) {
      button.addEventListener("click", function () {
        const content = button.querySelector("[data-citation-content]");
        if (!content) return;

        copyText(content.textContent).then(function () {
          button.classList.add("is-copied");
          button.setAttribute("aria-label", "BibTeX copied");
          window.setTimeout(function () {
            button.classList.remove("is-copied");
            button.setAttribute("aria-label", "Copy BibTeX citation");
          }, 1800);
        });
      });
    });
  });
})();
