# Bookmarklet-gui
funny bookmarklet gui 

just select and drag the code below to your bookmarks bar.
```
(function() {
  var script = document.createElement('script');
  script.async = 1;
  script.src = '<url to script>';
  document.getElementsByTagName('body')[0].appendChild(script);
})();```
