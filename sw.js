var cacheName = 'hello-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/scripts/main.js',
    '/images/tiles/aud.jpg',
    '/images/tiles/cad.jpg',
    '/images/tiles/chf_alt.jpg',
    '/images/tiles/eur.jpg',
    '/images/tiles/gbp.jpg',
    '/images/tiles/jpy.jpg',
    '/images/tiles/nzd.jpg',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
