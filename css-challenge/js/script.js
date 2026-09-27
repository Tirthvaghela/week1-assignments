(function () {
  "use strict";

  var grid = document.getElementById("dashboardGrid");
  var caption = document.getElementById("gridCaption");
  var tabs = document.querySelectorAll(".grid-switch__tab");
  if (!grid || !tabs.length) return;

  var captions = {
    desktop: "repeat(4, 1fr) · bento, 3 rows",
    tablet: "repeat(2, 1fr) · paired, 4 rows",
    mobile: "repeat(1, 1fr) · stacked, 6 rows"
  };

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var layout = tab.getAttribute("data-layout");

      tabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      grid.setAttribute("data-preview", layout);
      if (caption && captions[layout]) caption.textContent = captions[layout];
    });
  });
})();
