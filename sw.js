self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('472').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/script.js',
          '/precomp.js',
          '/favicon.ico',
          '/manifest.webmanifest',
          '/images/favicon-16x16.png',
          '/images/favicon-32x32.png',
          '/images/favicon-96x96.png'
        ]);
      })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if(response){
                return response
            }
            return fetch(event.request);
        }
    )
  );
});