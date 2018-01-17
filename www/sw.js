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
    "revision": "eaaa8daa7cda59164629472566569aa0"
  },
  {
    "url": "beers/index.html",
    "revision": "fdbec792ab1e67019ac0c780a95a8206"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "host.config.json",
    "revision": "7bd185f91766904234e9b87cd10e24c7"
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
    "revision": "511fd6501eba394b062ea15729dcde54"
  },
  {
    "url": "main/bars/index.html",
    "revision": "a43116e0922fad4630644e8a782e1568"
  },
  {
    "url": "main/beers/index.html",
    "revision": "1524ae6600235d1617eb785d7e0114ae"
  },
  {
    "url": "manifest.json",
    "revision": "37fa51e0adb6d06a091eb83d34f06110"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-background-sync.dev.js",
    "revision": "3884a7463bd3aac94c00e4ed7ed78fd1"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-background-sync.prod.js",
    "revision": "319da38669e1340c326c65b4316029e7"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-broadcast-cache-update.dev.js",
    "revision": "6443c5e843fa45a5a28d458a142d7fdc"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-broadcast-cache-update.prod.js",
    "revision": "2a751e67dcb327caf4f41d382fca6303"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-cache-expiration.dev.js",
    "revision": "c2ed209d3bbbd99943d358b504b49a2d"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-cache-expiration.prod.js",
    "revision": "baec4d701a493a1f646ac92017a41e21"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-cacheable-response.dev.js",
    "revision": "e7b9142e780171fc8fdf2a0ea80098ca"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-cacheable-response.prod.js",
    "revision": "37c3065091dd638c7fbefde9dd9f8869"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-core.dev.js",
    "revision": "0959594cb68ce7bb6e90f443eb239a7a"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-core.prod.js",
    "revision": "ecd1e443d7d905e1575d89fb17ddee6b"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-google-analytics.dev.js",
    "revision": "fed1f5a263ec9516a5e58cf62166f087"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-google-analytics.prod.js",
    "revision": "98c51bbd3864a989302d46d2841d172b"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-precaching.dev.js",
    "revision": "1be782f9de8162cbdfc2a18531e4c008"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-precaching.prod.js",
    "revision": "c7f9ca0deb8c1d9c8a9682595147ef27"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-routing.dev.js",
    "revision": "1f6e712eda65a35033f7345f20920139"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-routing.prod.js",
    "revision": "5adff290fc54da8f76bc21c75d344fe2"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-strategies.dev.js",
    "revision": "8bbeff2138a480ac62dddbf87f680e08"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-strategies.prod.js",
    "revision": "225c939ee3b2c593c81b1978cfff2524"
  },
  {
    "url": "workbox-v3.0.0-alpha.3/workbox-sw.js",
    "revision": "7c14ca7f495c8ad909918876cd254a70"
  }
]);
