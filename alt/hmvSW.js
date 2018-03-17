// version: change this to update

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        'https://hadithmv.com.html',
        'https://hadithmv.com/alt/hmvManifest.json',
        'https://hadithmv.com/alt/Apk/Resc/app2.css',
        'https://hadithmv.com/alt/Apk/json/40nJson.js',
        'https://hadithmv.com/alt/Apk/Resc/app2.js',
        'https://hadithmv.com/img/playstore-badge/en_badge_web_generic-compressor.png',
        'https://hadithmv.com/img/newLogo5/newLogo5-compressor.svg',
      ]);
    })
  );
});