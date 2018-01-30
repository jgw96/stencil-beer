importScripts('workbox-v3.0.0-alpha.3/workbox-sw.js')

self.workbox.skipWaiting();
self.workbox.clientsClaim();

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});


self.workbox.precaching.precacheAndRoute([
  {
    "url": "assets/http-service.js",
    "revision": "9ae9aacb1a943f6852dcedd9b5d1a6e0"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "cfb994aca3977b07491e7c75afe4670e"
  },
  {
    "url": "assets/worker-request.js",
    "revision": "06ecbb404b3b5055ad8a5c9fdb120033"
  },
  {
    "url": "bars/index.html",
    "revision": "edc06951d1e53a852a8bc68b60daf6f2"
  },
  {
    "url": "beers/index.html",
    "revision": "012647b77a97f0cef91f90528ba4256c"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "host.config.json",
    "revision": "2ccd43dfb3cc0b52bb905c9c0d858385"
  },
  {
    "url": "images/bars.jpeg",
    "revision": "92f9bdebef255a78ba58c15068283e97"
  },
  {
    "url": "images/beers.jpeg",
    "revision": "8aced51bdac089a8d7bee88f7c0aaec7"
  },
  {
    "url": "images/smaller-bars.jpeg",
    "revision": "88b0cefd3a5bf3d56d96734562fd065c"
  },
  {
    "url": "images/smaller-beers.jpeg",
    "revision": "94bbfa83bf0d1a9ec32e6d6fab403680"
  },
  {
    "url": "index.html",
    "revision": "c04aa2dc47a5d31d1cb6e83f2869dc3b"
  },
  {
    "url": "main/bars/index.html",
    "revision": "c35028ad669ffee762905a1b77709e1f"
  },
  {
    "url": "main/beers/index.html",
    "revision": "b96cb4dd270dbb7033251938c7eddc21"
  },
  {
    "url": "manifest.json",
    "revision": "37fa51e0adb6d06a091eb83d34f06110"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "e6fcd3e6dda0e5072525e564d08db75f"
  }
]);
