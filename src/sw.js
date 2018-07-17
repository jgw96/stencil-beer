importScripts('workbox-v3.4.1/workbox-sw.js')

self.workbox.skipWaiting();
self.workbox.clientsClaim();

/*
  Routes
*/
workbox.routing.registerRoute(
  new RegExp('https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/*'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'apidata',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 3,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://lh3.googleusercontent.com/*'),
  workbox.strategies.cacheFirst({
    cacheName: 'userprofile'
  }),
);

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


self.workbox.precaching.precacheAndRoute([]);
