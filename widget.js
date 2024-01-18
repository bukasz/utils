(function() {
  const widget = document.createElement('div');
  widget.textContent = 'Hello, world!';
  widget.style = `
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    background-color: lightgray;
    padding: 10px;
  `;

  document.body.appendChild(widget);
})();