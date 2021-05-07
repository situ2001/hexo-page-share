# Hexo-page-share

This is a simple hexo plugin used to generating QR code of URL of the current page.

## Setup

Install to your hexo blog folder.

```powershell
npm install hexo-page-share
```

Add a statement to your `ejs` or `njk` template, so that the QR code can be correctly rendered when you run `hexo g`.

If you use `ejs` as the template format of your theme. You may add this statement to the corresponding place where you want the site to show the QR code.

```ejs
<%- renderShare() %>
```

Or if you use `njk`.

```njk
{{ renderShare() }}
```

## How to use in hexo-theme-next

A simple way(not the best) to apply this plugin to **hexo-theme-next** is to add injection to this theme.

Create file `share` in folder `source/_data` then add the following statement.

```njk
{{ renderShare() }}
```

Create `share.js` in folder `scripts`, if the folder does not exist, newly create one.

Then add these codes to `share.js`

```javascript
/* global hexo */
'use strict';

hexo.extend.filter.register('theme_inject', injects => {
  injects.postBodyEnd.file('share', 'source/_data/share');
});

```
