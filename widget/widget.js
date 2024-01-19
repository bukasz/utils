
(function () {
  const app = document.createElement("div");
  app.id = "app";
  app.style = `
      position: fixed;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      background-color: lightgray;
      padding: 10px;
    `;
  document.body.appendChild(app);

  const module = document.createElement("script");
  module.type = "module";
  module.crossOrigin = "anonymous";
  module.src = "https://bukasz.github.io/utils/widget/assets/index-4sE9FSbD.js";
  document.head.appendChild(module);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.crossOrigin = "anonymous";
  link.href = "https://bukasz.github.io/utils/widget/assets/index-MfP6M3ow.css";
  document.head.appendChild(link);
})();
