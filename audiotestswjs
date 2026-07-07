const CACHE_NAME = "audio-test-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll([
        "./",
        "https://pinknake.github.io/Globalmusic/index.html",
        "https://pinknake.github.io/Globalmusic/manifest.json",
        "https://pinknake.github.io/Globalmusic/test.mp3"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(
      response => response || fetch(event.request)
    )
  );
});
