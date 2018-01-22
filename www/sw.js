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
    "url": "assets/favorite-heart-button.png",
    "revision": "a52d3fe6957c3f3680dc2609180e7b0e"
  },
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
    "url": "assets/photo-camera.png",
    "revision": "1977c7bc5fa09fd72a78bcdd6d5de963"
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
    "url": "build/app.css",
    "revision": "f3fb8ce3ad3126b88b6ae007afd98d16"
  },
  {
    "url": "build/app.js",
    "revision": "c37fd94113323f8a4bb022e7e475632b"
  },
  {
    "url": "build/app/app.core.js",
    "revision": "89d574d02d369f665511d0b035159fd3"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "535d6b047c6d3faf0733d303b1185ef5"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "f4fa9953c382ff4007be225d0d074543"
  },
  {
    "url": "build/app/auth-page.js",
    "revision": "3ea32e6f0e0202515c4fb17658e140e3"
  },
  {
    "url": "build/app/bar-directions.js",
    "revision": "f9fbbffc01d1190e6d90075d8087fec4"
  },
  {
    "url": "build/app/bar-list.js",
    "revision": "242a59282ec2e953cb472ca8181641dd"
  },
  {
    "url": "build/app/beer-detail.js",
    "revision": "3be7f2936b0aa06bc1083fab889e7fe6"
  },
  {
    "url": "build/app/beer-item.js",
    "revision": "1fd023dadb3d0db474f4c00588c4aeb4"
  },
  {
    "url": "build/app/es5-build-disabled.js",
    "revision": "fea234cb3ef16f063c930dd30a4b14af"
  },
  {
    "url": "build/app/favorites-page.js",
    "revision": "107ea3639a0c0147c6b85dba8728f9a5"
  },
  {
    "url": "build/app/ion-action-sheet.ios.js",
    "revision": "21e5d00f9f0f920c63f03a551da69892"
  },
  {
    "url": "build/app/ion-action-sheet.md.js",
    "revision": "9451a5c6741d98b0cead406342428edc"
  },
  {
    "url": "build/app/ion-alert.ios.js",
    "revision": "1f997449e36a82609ce2d60dfa13966b"
  },
  {
    "url": "build/app/ion-alert.md.js",
    "revision": "224a10366f360070575072a419bd4058"
  },
  {
    "url": "build/app/ion-animation-controller.js",
    "revision": "8d4cb9450327d7eccc611092356a755c"
  },
  {
    "url": "build/app/ion-app.ios.js",
    "revision": "338e172a603c2cfcb4f3c6518efbebed"
  },
  {
    "url": "build/app/ion-app.md.js",
    "revision": "7e954e2f2c0bb8a0a43b080d47b7ea89"
  },
  {
    "url": "build/app/ion-avatar.ios.js",
    "revision": "a9d4b2b984a190c74ff70fec0e6967cc"
  },
  {
    "url": "build/app/ion-avatar.md.js",
    "revision": "2d03cf4a686125c85eeaf686639ab1ee"
  },
  {
    "url": "build/app/ion-backdrop.js",
    "revision": "93185dc21f37a461bd5edb4923c687e0"
  },
  {
    "url": "build/app/ion-button.ios.js",
    "revision": "0ec4a17f94d033bb31afd0996cc5df24"
  },
  {
    "url": "build/app/ion-button.md.js",
    "revision": "c0b21c5fc0fa6a4d876509482832ab70"
  },
  {
    "url": "build/app/ion-card-subtitle.ios.js",
    "revision": "34890df7dc4e1b99889b9f333d6c1414"
  },
  {
    "url": "build/app/ion-card-subtitle.md.js",
    "revision": "6d81e17026b88d6ab9330a752e1e4df0"
  },
  {
    "url": "build/app/ion-card.ios.js",
    "revision": "f9be93c73ebd9c02bb0c8acccb55b2ec"
  },
  {
    "url": "build/app/ion-card.md.js",
    "revision": "7c2bde1577a9e1643fe445ee160dde3c"
  },
  {
    "url": "build/app/ion-checkbox.ios.js",
    "revision": "3a1de516081e8aacd1a8f485c6fdd0cd"
  },
  {
    "url": "build/app/ion-checkbox.md.js",
    "revision": "ad38221c2504e3f0cc62655ecb5bcbc3"
  },
  {
    "url": "build/app/ion-chip.ios.js",
    "revision": "b256ce67c154300c43f481f1d470049f"
  },
  {
    "url": "build/app/ion-chip.md.js",
    "revision": "938530d8ba8affe7f6fa4cd5e13a81f8"
  },
  {
    "url": "build/app/ion-col.ios.js",
    "revision": "e6f298833406034d0c0ceae309a972d1"
  },
  {
    "url": "build/app/ion-col.md.js",
    "revision": "a31390932e25ba434884dfc8d291d582"
  },
  {
    "url": "build/app/ion-datetime.ios.js",
    "revision": "c0105f4d1e599fcf67266e28af0797f9"
  },
  {
    "url": "build/app/ion-datetime.md.js",
    "revision": "a4b9fd0021b368ec69ddb412c8322ebf"
  },
  {
    "url": "build/app/ion-events.js",
    "revision": "2262e2e7de2785283f860c831a516d1a"
  },
  {
    "url": "build/app/ion-fab.ios.js",
    "revision": "46738c6120f5622e19627e93ac1f6e84"
  },
  {
    "url": "build/app/ion-fab.md.js",
    "revision": "117132096459dc43509e9cde98d01ec0"
  },
  {
    "url": "build/app/ion-gesture.js",
    "revision": "24ad6db0fecab64a62eff3942f80b70b"
  },
  {
    "url": "build/app/ion-infinite-scroll.js",
    "revision": "66693fe06e9f045db489ae29fe7f0e1f"
  },
  {
    "url": "build/app/ion-input.ios.js",
    "revision": "2865d9f343c0d393d8515f31ed61afbf"
  },
  {
    "url": "build/app/ion-input.md.js",
    "revision": "2e2ed85d9d4eae090ecd2d8e0b1d23d1"
  },
  {
    "url": "build/app/ion-item-option.ios.js",
    "revision": "1b4ae8b3f1b140217a359d691a526945"
  },
  {
    "url": "build/app/ion-item-option.md.js",
    "revision": "ec04bb0ec1ec39113f6d465bfed7dff1"
  },
  {
    "url": "build/app/ion-item.ios.js",
    "revision": "af776544c890bbd06d067de4a44691fd"
  },
  {
    "url": "build/app/ion-item.md.js",
    "revision": "6b1e9d27d314481d4b053a14560df2e7"
  },
  {
    "url": "build/app/ion-keyboard-controller.js",
    "revision": "bb291b47c1fab536ea9f0e96fb283ab9"
  },
  {
    "url": "build/app/ion-loading.ios.js",
    "revision": "b6e6bcf5a0163f2d23f2167e73a9eafc"
  },
  {
    "url": "build/app/ion-loading.md.js",
    "revision": "cd86f6f3daf6b2515ee736cc2cfa1070"
  },
  {
    "url": "build/app/ion-menu.ios.js",
    "revision": "388027f1fab6456a88df4c7441092c91"
  },
  {
    "url": "build/app/ion-menu.md.js",
    "revision": "149916b2bba02835fff8d39d8345b4e5"
  },
  {
    "url": "build/app/ion-modal.ios.js",
    "revision": "f9d9557a8d17365a81fafac4595bbe3e"
  },
  {
    "url": "build/app/ion-modal.md.js",
    "revision": "3914f52978c70ce080e2b46a3e63f939"
  },
  {
    "url": "build/app/ion-nav.js",
    "revision": "4cccde5da5335e6359faeb652a99c142"
  },
  {
    "url": "build/app/ion-note.ios.js",
    "revision": "468ef68f0cad40b213f15b247ea85820"
  },
  {
    "url": "build/app/ion-note.md.js",
    "revision": "1f8e9a84b1aa4ba86adb6e4d6839c145"
  },
  {
    "url": "build/app/ion-popover.ios.js",
    "revision": "54f02d0eea99345946b3b2e173b84c38"
  },
  {
    "url": "build/app/ion-popover.md.js",
    "revision": "688a276ba3774f38fb892d37962d5622"
  },
  {
    "url": "build/app/ion-radio.ios.js",
    "revision": "a15333bbd90c8218f96eda7f9e8a17f3"
  },
  {
    "url": "build/app/ion-radio.md.js",
    "revision": "c5184ec82794936a112b0ca730c54341"
  },
  {
    "url": "build/app/ion-range.ios.js",
    "revision": "510165cff2393ffb2445081a9f29d103"
  },
  {
    "url": "build/app/ion-range.md.js",
    "revision": "16e7e313a246001b3431f146f7f4b83a"
  },
  {
    "url": "build/app/ion-refresher.js",
    "revision": "70c2c0dc46e5e3b8e3f84f7551e13a99"
  },
  {
    "url": "build/app/ion-reorder.js",
    "revision": "4d193e3ba7c52c64d75a1888f8d0ec9d"
  },
  {
    "url": "build/app/ion-ripple-effect.js",
    "revision": "9ae06b4142fbfff9a35dc162e1917082"
  },
  {
    "url": "build/app/ion-route-link.js",
    "revision": "0ccc51dbcaa091f2fa563b49a74dd66a"
  },
  {
    "url": "build/app/ion-route.js",
    "revision": "d14e4810f9bec020ba4f2d986b4723f7"
  },
  {
    "url": "build/app/ion-searchbar.ios.js",
    "revision": "b76c9d5e6500d7cf634ad4ec347c029c"
  },
  {
    "url": "build/app/ion-searchbar.md.js",
    "revision": "3976f4ee7259579af296f790caba6425"
  },
  {
    "url": "build/app/ion-segment.ios.js",
    "revision": "5e0a0290178b68547696c4ab5f63fec9"
  },
  {
    "url": "build/app/ion-segment.md.js",
    "revision": "1327170f3e173e453751cc566c20a6cb"
  },
  {
    "url": "build/app/ion-select.ios.js",
    "revision": "0ef67073ec3d6f9a2895e48f50a782cc"
  },
  {
    "url": "build/app/ion-select.md.js",
    "revision": "b819acaaee52e187433d3a2c181c2b94"
  },
  {
    "url": "build/app/ion-slide.js",
    "revision": "9549c0fe70ebdd7ca2e2f0aec98b33f8"
  },
  {
    "url": "build/app/ion-spinner.ios.js",
    "revision": "6e047a04d3517cbb3a9748b3c9da93a9"
  },
  {
    "url": "build/app/ion-spinner.md.js",
    "revision": "fa4a59a47399dcfee9fa5d67d604dd3e"
  },
  {
    "url": "build/app/ion-split-pane.ios.js",
    "revision": "83a160c707dea35419b8f1939b111c88"
  },
  {
    "url": "build/app/ion-split-pane.md.js",
    "revision": "26fd3a2b577c641991133b37762d462d"
  },
  {
    "url": "build/app/ion-tab.ios.js",
    "revision": "238464940b7f1f40fe08664ab0851f85"
  },
  {
    "url": "build/app/ion-tab.md.js",
    "revision": "c0f6621341a9836353209ef44b1026bc"
  },
  {
    "url": "build/app/ion-tap-click.js",
    "revision": "218ff50dbffb0211a8b4cdfb1bef5583"
  },
  {
    "url": "build/app/ion-text.ios.js",
    "revision": "c5fc1ebb77bc330692cc039f10f600fa"
  },
  {
    "url": "build/app/ion-text.md.js",
    "revision": "2c591ab4a85c1384d4c0ed81a81356b5"
  },
  {
    "url": "build/app/ion-toast.ios.js",
    "revision": "fb7afc9c913aee88bdd60026be6a7c1d"
  },
  {
    "url": "build/app/ion-toast.md.js",
    "revision": "39ebd01795fd6c3603a3057e7af4574c"
  },
  {
    "url": "build/app/ion-toggle.ios.js",
    "revision": "b95819b88b8e7015fb2f352fb6ae34b0"
  },
  {
    "url": "build/app/ion-toggle.md.js",
    "revision": "8b4714d4815a26322422d3ade1cb3e51"
  },
  {
    "url": "build/app/main-page.js",
    "revision": "fcfa59602d5dd759fa7e0e476f428701"
  },
  {
    "url": "build/app/main-page.sc.js",
    "revision": "66b6080028a17058d797fc11111561b4"
  },
  {
    "url": "build/app/profile-page.js",
    "revision": "e41d208b02d6b8cd62ab6d4c103a098e"
  },
  {
    "url": "build/app/share-button.js",
    "revision": "7fdaea8d53ea935cc35c052f1e82c4c4"
  },
  {
    "url": "build/app/st-img.js",
    "revision": "3d6985ef06e9ed0e3d48b8a0f53b8fc4"
  },
  {
    "url": "build/app/st-img.sc.js",
    "revision": "87f79d42d5f07c815632e1678ccfaca6"
  },
  {
    "url": "build/app/stencil-async-content.js",
    "revision": "6713d2158485390acaa05404e3a6ed81"
  },
  {
    "url": "build/app/test-app.js",
    "revision": "6c452e1d627fee91f0292e7aa211b546"
  },
  {
    "url": "build/app/user-profile.js",
    "revision": "b8480a46989bd485428eee415232a530"
  },
  {
    "url": "build/app/users-list.js",
    "revision": "f0b34ee0825c505268fa7d73fda2156a"
  },
  {
    "url": "build/app/vendor/swiper.js",
    "revision": "f44ae3024a4323c4f98e7b69cefeee47"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "host.config.json",
    "revision": "2ead70571bff7c8d381e10f8c1789866"
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
