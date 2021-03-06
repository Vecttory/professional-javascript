self.addEventListener('install', event => {
    event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
    const request = event.request;
    if(request.method !== 'GET') {
        return;
    }

    event.respondWith(cachedResponse(request));

    event.waitUntil(updateCache(request));
})

const VERSION = 'v1';

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.ts',
        // '/assets/waterfall.mp4',
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}