
(function () {
  if (window.__csWidget) window.__csWidget.unmount();
  var old = document.getElementById("app");
  if (old) old.remove();
  document.querySelectorAll(
    'script[src*="widget.js"], script[src*="/assets/index-"], script[src*="/assets/Ksef-"], link[href*="/assets/style-"], link[href*="/assets/Ksef-"]'
  ).forEach(function (el) { el.remove(); });

  const app = document.createElement("div");
  app.id = "app";
  document.body.appendChild(app);

  const random = Math.random().toString(36).substring(7);

  const module = document.createElement("script");
  module.type = "module";
  module.crossOrigin = "anonymous";
  module.src = "https://bukasz.github.io/utils/widget/assets/index-077PwHa7.js?v=" + random;
  document.head.appendChild(module);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.crossOrigin = "anonymous";
  link.href = "https://bukasz.github.io/utils/widget/assets/style-ne8oy1o8.css?v=" + random;
  document.head.appendChild(link);
})();
