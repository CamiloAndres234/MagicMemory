const CACHE_NAME = "magic-memory-v1";
const urlsToCache = [
  "/MagicMemory/",        // 👈 muy importante poner tu carpeta base
  "/MagicMemory/index.html",
  "/MagicMemory/style.css",
  "/MagicMemory/script.js",
  "/MagicMemory/icons/icon-192.png",
  "/MagicMemory/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
