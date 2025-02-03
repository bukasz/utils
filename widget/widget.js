
(function () {
  const app = document.createElement("div");
  app.id = "app";
  document.body.appendChild(app);

  const random = Math.random().toString(36).substring(7);

  const module = document.createElement("script");
  module.type = "module";
  module.crossOrigin = "anonymous";
  module.src = "https://bukasz.github.io/utils/widget/assets/index-U-n8K644.js?v=" + random;
  document.head.appendChild(module);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.crossOrigin = "anonymous";
  link.href = "https://bukasz.github.io/utils/widget/assets/index-aO0qxCwY.css?v=" + random;
  document.head.appendChild(link);
})();
