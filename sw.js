const CACHE_NAME = "gmusic-v3";

const urlsToCache = [
  "./",
  "https://pinknake.github.io/Globalmusic/index.html",
  "https://pinknake.github.io/Globalmusic/manifest.json",
  "https://pinknake.github.io/Globalmusic/test",
  "https://pinknake.github.io/Globalmusic/cover.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
