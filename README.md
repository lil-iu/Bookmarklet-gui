# Bookmarklet-gui
funny bookmarklet gui 

just select and drag the code below to your bookmarks bar.
```
javascript:(function() {
  var script = document.createElement('script');
  script.async = 1;
  script.src = 'https://raw.githubusercontent.com/lil-iu/Bookmarklet-gui/refs/heads/main/bookmarklet%20gui.js';
  document.getElementsByTagName('body')[0].appendChild(script);
})();
