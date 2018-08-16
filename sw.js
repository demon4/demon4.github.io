self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('472').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/index.html',
          '/style.css',
          '/script.js',
          '/precomp.js',
          '/favicon.ico'
        ]);
      })
    );
});

self.addEventListener('fetch', function(event) {

    console.log(event.request.url);
    
    event.respondWith(
    
    caches.match(event.request).then(function(response) {
    
    return response || fetch(event.request);
    
    })
    
    );
    
});