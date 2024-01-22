javascript:(function() {
  var script = document.createElement('script');
  script.src = 'https://bukasz.github.io/utils/widget/widget.js?v=' + Math.random().toString(36).substring(7);
  document.body.appendChild(script);
})();