importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});


workboxSW.precache([]);
