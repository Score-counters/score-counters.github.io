const CACHE_NAME = 'neo-score-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json'
];

// Install Service Worker dan simpan file ke Cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

// Ambil data dari Cache jika tersedia
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
