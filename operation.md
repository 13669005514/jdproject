<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <link rel="shortcut icon" href="//gold-cdn.xitu.io/favicons/favicon.ico">
    <title>跳转中...</title>
    <script>
      location.search.replace(/target=([^&]+)/, function (match, url) {
        url = decodeURIComponent(url).trim()
        if (!/^javascript:|^vbscript:|^data:/i.test(url)) {
          if (!/(https?:)?\/\//i.test(url)) {
            url = 'http://' + url
          }
          location.href = url
        }
      })
    </script>
  </head>
</html>
