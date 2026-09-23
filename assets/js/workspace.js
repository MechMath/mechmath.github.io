(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const workspaceLink = document.querySelector("[data-internal-workspace]");
    if (!workspaceLink) return;

    workspaceLink.addEventListener("click", function (event) {
      const shouldContinue = window.confirm(
        "MechMath Workspace is only accessible from within the AMSS network. Do you want to continue?"
      );

      if (!shouldContinue) event.preventDefault();
    });
  });
})();
