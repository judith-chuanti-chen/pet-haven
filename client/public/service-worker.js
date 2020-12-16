var CACHE_NAME = 'pwa-pet-haven';
const OFFLINE_URL = 'offline.html';
var urlsToCache = [
  './offline.html',
  './index.html',
  './static/js/main.chunk.js',
  './static/js/0.chunk.js',
  './static/js/0.chunk.js.map',
  './static/js/bundle.js',
  // './2bcf3269c5341f040900.hot-update.json'
];

console.log(urlsToCache);

// Install a service worker
this.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
this.addEventListener('fetch', event =>{
  console.log("online", navigator.onLine);
  if(!navigator.onLine){
    console.log("offline mode");
    return event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(OFFLINE_URL).then(resp => {
            console.log(resp);
            return resp
          }
        );
      })
    )

  }
  event.respondWith(
    fetch(event.request).then(resp => resp)
  );
  // event.respondWith(
  //   caches.match(event.request)
  //     .then(function(response) {
  //       // Return response as Cache is hit 
  //       if (response) {
  //         return response;
  //       }
  //       return fetch(event.request);
  //     }
  //   )
  // );
});

// Update a service worker
this.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-pet-haven'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});