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
    "url": "assets/bars.jpeg",
    "revision": "92f9bdebef255a78ba58c15068283e97"
  },
  {
    "url": "assets/beers.jpeg",
    "revision": "8aced51bdac089a8d7bee88f7c0aaec7"
  },
  {
    "url": "assets/favorite-heart-button.png",
    "revision": "a52d3fe6957c3f3680dc2609180e7b0e"
  },
  {
    "url": "assets/firebase-auth.js",
    "revision": "b1b0404c2e9c0e4ec3e4adc0a440893b"
  },
  {
    "url": "assets/firestore.js",
    "revision": "a160e3304763e6f528dcf7d0edd82d75"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b322ae6fbd32c97b144ce7fb3727b471"
  },
  {
    "url": "assets/oceanic.css",
    "revision": "3ab6649d9b92deee0c9eb1817a47b502"
  },
  {
    "url": "assets/photo-camera.png",
    "revision": "1977c7bc5fa09fd72a78bcdd6d5de963"
  },
  {
    "url": "build/app.css",
    "revision": "1834da1c9cae8d43f5b063f7ef60e895"
  },
  {
    "url": "build/app.js",
    "revision": "ccacec5d59172bc3e27d25ac4a961f7b"
  },
  {
    "url": "build/app/1tkty2mc.js",
    "revision": "e764ab0941bdc019722c212e46c59978"
  },
  {
    "url": "build/app/2ljruyzc.js",
    "revision": "f0a2d60243057eced3b48cc5c14ed5a4"
  },
  {
    "url": "build/app/55mgk4di.js",
    "revision": "75e69896dcbddd91e7dcba14b6dc1439"
  },
  {
    "url": "build/app/6uwzoxfn.js",
    "revision": "c7779ecdcc4b21ba59edb799e254c1a0"
  },
  {
    "url": "build/app/7htz9bmr.js",
    "revision": "ed94f5d3d5539cdfae8054ec2e102390"
  },
  {
    "url": "build/app/9xqx6itz.js",
    "revision": "a17e7c7e7a7f6e01d06d46fd05f2f379"
  },
  {
    "url": "build/app/a4epc4yg.js",
    "revision": "c7934e18c145e5141ccde84e92cc2fe4"
  },
  {
    "url": "build/app/aexjlis3.js",
    "revision": "d0fec238f47775ce2a206076a3340709"
  },
  {
    "url": "build/app/akgz2p36.js",
    "revision": "8a762af367f1ed39c6053d345d092619"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "40d5d830066621084503959fa7f86f15"
  },
  {
    "url": "build/app/app.iwjxnygr.js",
    "revision": "4b043fcdc957f76a506d298f614f003b"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "7d0ce3b95177f57463470ca1797afbe4"
  },
  {
    "url": "build/app/app.ymzq2bps.js",
    "revision": "fab7d7392e270af409cba34d39770e81"
  },
  {
    "url": "build/app/awxzmrk7.js",
    "revision": "a5b86f3d930651a8803828960f916f68"
  },
  {
    "url": "build/app/bsr4ofe1.js",
    "revision": "434524aa964cb1cb45604d6aa1ec84fd"
  },
  {
    "url": "build/app/bsr4ofe1.sc.js",
    "revision": "dd5c5dd97844c1383509bbb23bca5976"
  },
  {
    "url": "build/app/chunk1.js",
    "revision": "f8f708f8fb7d12a4778ebd6d74832e98"
  },
  {
    "url": "build/app/chunk2.js",
    "revision": "ff70ccc6cb05b87ecf2df355bc1f00ea"
  },
  {
    "url": "build/app/chunk3.js",
    "revision": "c859c86b7b80fae197b1b04b6d487666"
  },
  {
    "url": "build/app/chunk4.js",
    "revision": "d475abe5145484404f70b149d379a8f9"
  },
  {
    "url": "build/app/chunk5.js",
    "revision": "c515df7b94ba9f4db8e8701e0dd9ec95"
  },
  {
    "url": "build/app/eyes7kld.js",
    "revision": "0516295ff31af8a40d4b3b502424f797"
  },
  {
    "url": "build/app/ezgfaznu.js",
    "revision": "7c5c081a9f4beaf8024b1cd3853e099d"
  },
  {
    "url": "build/app/hfgqu0s1.js",
    "revision": "e77d8093fef3ba39668ff945f1c30cbc"
  },
  {
    "url": "build/app/hk0cblun.js",
    "revision": "e9bc55d570d7470e08b2585d78619315"
  },
  {
    "url": "build/app/iffdfl06.js",
    "revision": "59395befa5f2bc67d6cfb208c93e7a15"
  },
  {
    "url": "build/app/iffdfl06.sc.js",
    "revision": "aa52f5caffc2c131bee6db1c6884dcaa"
  },
  {
    "url": "build/app/jrxmfe4j.js",
    "revision": "e1e0d26e9a8e64d6b7907ca58a09092c"
  },
  {
    "url": "build/app/kcjehfho.js",
    "revision": "388da029fa5beba9eb57d8b9f5e74eb4"
  },
  {
    "url": "build/app/lgvs7mmj.js",
    "revision": "9c18c2b79c3d7e630177ba880c355a2b"
  },
  {
    "url": "build/app/lk0hozll.js",
    "revision": "58e98104ff8ca742e27d74c827e95030"
  },
  {
    "url": "build/app/m3gayda1.js",
    "revision": "9cdc13108390b59d8d14532ffe823392"
  },
  {
    "url": "build/app/n5y9h5ii.js",
    "revision": "3d4f6dfc573e86fcd415edfbf8c7fbb8"
  },
  {
    "url": "build/app/neohjtov.js",
    "revision": "1acef68ab0f33b61c4fce47021d8e8a5"
  },
  {
    "url": "build/app/ngd6ulmk.js",
    "revision": "268ced808c328d293c4708f7e0f24f60"
  },
  {
    "url": "build/app/nhsggzqb.js",
    "revision": "5c6eb157fc680c0b88de958c32b5299f"
  },
  {
    "url": "build/app/nkxopunn.js",
    "revision": "4f3efbaad09938d24378be0552251837"
  },
  {
    "url": "build/app/qchrdmco.js",
    "revision": "53e4cac235a5babcf05612507214f4cd"
  },
  {
    "url": "build/app/sf5chi9z.js",
    "revision": "30de0cc2279a25ea7ad1bd9f8baba496"
  },
  {
    "url": "build/app/u07guqgr.js",
    "revision": "a05990ba9d0b8c64ba26b371893c5319"
  },
  {
    "url": "build/app/wtasx79w.js",
    "revision": "4e8e3dff5af30d5392e115593640dab7"
  },
  {
    "url": "build/app/xixvanvs.js",
    "revision": "a2f64b1b90265d99bcd2d28abf9f46f0"
  },
  {
    "url": "build/app/yrxiskby.js",
    "revision": "1cd0b2c9dd2a0c5ff73f015f6562b801"
  },
  {
    "url": "build/app/ywzau1lh.js",
    "revision": "3a6845c2d04381e0a75d85790b0b2a34"
  },
  {
    "url": "build/app/zknnu76e.js",
    "revision": "5ef307c20387b10134d1afbf1b0983d0"
  },
  {
    "url": "build/app/zld9newv.js",
    "revision": "7137272da2708d43ad98aef95d38cc1e"
  },
  {
    "url": "host.config.json",
    "revision": "472f813180e902376ce1a314ad72ab4f"
  },
  {
    "url": "index.html",
    "revision": "39553fefae4df2117f47b69c1e5a1103"
  },
  {
    "url": "manifest.json",
    "revision": "37fa51e0adb6d06a091eb83d34f06110"
  }
]);
