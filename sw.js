self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("cartonaje-v1").then((cache) => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "iconos/icon-192.png",
                "iconos/icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((respuesta) => {
            return respuesta || fetch(e.request);
        })
    );
});