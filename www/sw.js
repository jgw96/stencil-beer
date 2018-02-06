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
    "url": "assets/photo-camera.png",
    "revision": "1977c7bc5fa09fd72a78bcdd6d5de963"
  },
  {
    "url": "build/app.css",
    "revision": "1834da1c9cae8d43f5b063f7ef60e895"
  },
  {
    "url": "build/app.js",
    "revision": "a4f6caa15907d7e58f0b1e72b1710978"
  },
  {
    "url": "build/app/0sefzzse.js",
    "revision": "0be1b05bf8963acaf4a23d26858dc33e"
  },
  {
    "url": "build/app/1ihmmktc.js",
    "revision": "738d2b17b1da49ba29f5f8867d0928e6"
  },
  {
    "url": "build/app/1tkty2mc.js",
    "revision": "e764ab0941bdc019722c212e46c59978"
  },
  {
    "url": "build/app/1yscrcuc.js",
    "revision": "8c678355adcdad0f5ddb69b237247fdb"
  },
  {
    "url": "build/app/2birezdf.js",
    "revision": "5839f0114cf2dab03031a647fcafa767"
  },
  {
    "url": "build/app/2dngub52.js",
    "revision": "09c93898eaca6903240d72b19e739519"
  },
  {
    "url": "build/app/2eqtzjxq.js",
    "revision": "ff44672fcd13c8882397b6e5ece732f3"
  },
  {
    "url": "build/app/34mhqdby.js",
    "revision": "cd82bd0ea8850c16ccfe9132d0d999d7"
  },
  {
    "url": "build/app/3fwgmwjg.js",
    "revision": "890e334e0631eec732e0728b854bd465"
  },
  {
    "url": "build/app/3lnm8jln.js",
    "revision": "f3b8e1129b5a95d2e635b4c800bef7fd"
  },
  {
    "url": "build/app/3vxicccm.js",
    "revision": "c3e70a2e504b7b7130b9eff2bd049c10"
  },
  {
    "url": "build/app/6b0uk2ro.js",
    "revision": "580b9df236b527561d8801c51925db21"
  },
  {
    "url": "build/app/6uwzoxfn.js",
    "revision": "c7779ecdcc4b21ba59edb799e254c1a0"
  },
  {
    "url": "build/app/8fe5rc1p.js",
    "revision": "073252e6f07640c181aaae4b7e3bfa92"
  },
  {
    "url": "build/app/8lyiuhsa.js",
    "revision": "0c0a456e8984cdd1777d104d89e7f2d1"
  },
  {
    "url": "build/app/an1wfchn.js",
    "revision": "bd37d67cb6d50fc2e47028441a002a20"
  },
  {
    "url": "build/app/app.3titdhwa.js",
    "revision": "e215888632bb9ff3644fdcfc1180e751"
  },
  {
    "url": "build/app/app.cojv6ltc.js",
    "revision": "a5735e8173860adcd89d6ff40e11a1f2"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "926a66d1399962bf4a715b9fe557c473"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "c22657d647226e9abcbd264f775df9d6"
  },
  {
    "url": "build/app/befzc7q6.js",
    "revision": "81530c251ada53635dbaf1e4da862a2a"
  },
  {
    "url": "build/app/bggxyeqm.js",
    "revision": "ec17d03adfe881845106bd2301a3727a"
  },
  {
    "url": "build/app/biuzizd5.js",
    "revision": "3099bcf808993058cdc156df2e34837c"
  },
  {
    "url": "build/app/bjsivzmq.js",
    "revision": "a3d459546123e108d8d3f06a33dbfa84"
  },
  {
    "url": "build/app/bpx0xghh.js",
    "revision": "d59b01a0b401b785d4cbcd6cd2ba35d9"
  },
  {
    "url": "build/app/brci1awp.js",
    "revision": "a4101ad500c2f651ffb95ade1b3cb483"
  },
  {
    "url": "build/app/bttvx9vk.js",
    "revision": "1ce71b2e6f7a0ad4ed2fe78d5bc8fd0d"
  },
  {
    "url": "build/app/by61iodu.js",
    "revision": "01d72e1c002ae3e122cf40646085b4fd"
  },
  {
    "url": "build/app/chunk1.js",
    "revision": "3d3f849ad7ca3bba8d23d54458314c8e"
  },
  {
    "url": "build/app/chunk2.js",
    "revision": "4710ebca5c6e63d6241aafde670ad181"
  },
  {
    "url": "build/app/chunk3.js",
    "revision": "c8d6b47934286a84550acebf25337a4d"
  },
  {
    "url": "build/app/chunk4.js",
    "revision": "951d9c0e2196901d3965dd4510cd78bf"
  },
  {
    "url": "build/app/chunk5.js",
    "revision": "b5630496e7f647dd238bbd9c9fe54d30"
  },
  {
    "url": "build/app/chunk6.js",
    "revision": "2cc82e58508cecb0837994cfc6befd15"
  },
  {
    "url": "build/app/chunk7.js",
    "revision": "6b915369cb7319ba79c3bba298884ee7"
  },
  {
    "url": "build/app/csai25d6.js",
    "revision": "5ff0803d6cd5e8859221afd3369192bf"
  },
  {
    "url": "build/app/cyikxdml.js",
    "revision": "c05cd3f5784234b2e570465b7df180aa"
  },
  {
    "url": "build/app/d4ukmrbp.js",
    "revision": "671e40c8d93c64c719ca35685d900de9"
  },
  {
    "url": "build/app/dr0eezre.js",
    "revision": "f742251242b1f35b385b7d2ac0872980"
  },
  {
    "url": "build/app/e8qiaqw1.js",
    "revision": "eeac209f060df899b184476727403c9d"
  },
  {
    "url": "build/app/egpjbbkg.js",
    "revision": "7da349d1349e7177902e01079c2de5ab"
  },
  {
    "url": "build/app/exgltmq2.js",
    "revision": "45122cd575706921290d633ee5bc1a2e"
  },
  {
    "url": "build/app/f1c7zpvm.js",
    "revision": "5d8996f03dbef5f6acb0b56c1d13842b"
  },
  {
    "url": "build/app/f2f9zkd8.js",
    "revision": "a8d79c74b13968766341f4c3b4593268"
  },
  {
    "url": "build/app/fc5twjhc.js",
    "revision": "265077d55723004925eadfb3410f7ff2"
  },
  {
    "url": "build/app/fpmjpubs.js",
    "revision": "3b0e945fe55ef7c076b601547790d106"
  },
  {
    "url": "build/app/frdpkdqe.js",
    "revision": "ac9bd925e0389abad5dd4e695134f6cc"
  },
  {
    "url": "build/app/fs4glrao.js",
    "revision": "3c8f20024bd47071cd11e7b204a4a1ec"
  },
  {
    "url": "build/app/gifh2jkr.js",
    "revision": "0d91cb0c6ae08103861d176a36bfb9fa"
  },
  {
    "url": "build/app/gldqwp7t.js",
    "revision": "70d8e239ceaf9d6af1f257b02e625856"
  },
  {
    "url": "build/app/glffwfzh.js",
    "revision": "fa159a0947f97a231c717a0c9c6ac537"
  },
  {
    "url": "build/app/gmkdyfjn.js",
    "revision": "260358618061920e2846cfda8221ac68"
  },
  {
    "url": "build/app/h0sxxi4e.js",
    "revision": "f4263c6956ca3b4fa20c2d8d6606aee8"
  },
  {
    "url": "build/app/h1v84rww.js",
    "revision": "31c394c8f317d5396748bc22c2ad20b0"
  },
  {
    "url": "build/app/h4r8gqqk.js",
    "revision": "b938cb0ced6098800c14f5b4ea028c47"
  },
  {
    "url": "build/app/hb0xuaxx.js",
    "revision": "c0a4ab8a184bc458b80f8afa3418dbcd"
  },
  {
    "url": "build/app/hfxewf2y.js",
    "revision": "e9fbff3e6b56e8432e247672a62875ff"
  },
  {
    "url": "build/app/hk0cblun.js",
    "revision": "e9bc55d570d7470e08b2585d78619315"
  },
  {
    "url": "build/app/hq5ymp8l.js",
    "revision": "a1d247c585dd73d43da0986aba90bef8"
  },
  {
    "url": "build/app/i8fohxyb.js",
    "revision": "71432ac3dd46fcacd91c9d2e8c55a90b"
  },
  {
    "url": "build/app/i9cbkc2h.js",
    "revision": "1ac0830af3774ed7267a0ac71406cb86"
  },
  {
    "url": "build/app/ih9lqhjw.js",
    "revision": "263bbc46ec8d00235af6acdda9a6b37c"
  },
  {
    "url": "build/app/jcqkgpkx.js",
    "revision": "951b1e79c3eb018ff29ef79b9414979e"
  },
  {
    "url": "build/app/jm0ja2dy.js",
    "revision": "2366a8deb491773a9906e24c71d0088c"
  },
  {
    "url": "build/app/joa1lddg.js",
    "revision": "8a5dec7bcb1c90f715f05568f93e9f22"
  },
  {
    "url": "build/app/jr9a49fj.js",
    "revision": "b3144bdd17d3aad1be6ef32413b24a60"
  },
  {
    "url": "build/app/kymgdljo.js",
    "revision": "39c8af7723d84b8e181291b4ccab5655"
  },
  {
    "url": "build/app/ldqn1ell.js",
    "revision": "1b679760ccb51526873c4793d6ab43d8"
  },
  {
    "url": "build/app/ls1fdcen.js",
    "revision": "7d372ad00581ab57a4b2d8abf1a25bab"
  },
  {
    "url": "build/app/mfcxg1az.js",
    "revision": "2d386fc9b3739e412663dee18b8fe6c8"
  },
  {
    "url": "build/app/mh7pqpgg.js",
    "revision": "1580777ea2992686afad43c18d3602a5"
  },
  {
    "url": "build/app/mrjr3g2y.js",
    "revision": "d6c94f73e47d2cbd7ae1721a8dcd2b46"
  },
  {
    "url": "build/app/mvkp1eom.js",
    "revision": "31c9b063309f6e042a11d660257aee71"
  },
  {
    "url": "build/app/nnvd1tkv.js",
    "revision": "2d137eca38cdfdf7014785f63b127dc6"
  },
  {
    "url": "build/app/nzyhlyce.js",
    "revision": "bc7bc5c84305b5f35135903903f7bda2"
  },
  {
    "url": "build/app/oa0u2qt2.js",
    "revision": "f6412f7b8a2f08442b8f9e1f229217e6"
  },
  {
    "url": "build/app/onynqrjx.js",
    "revision": "cb5dd6dd7056d15c4ac5fcb84545f9da"
  },
  {
    "url": "build/app/osaxqwpf.js",
    "revision": "f8873c75a927bd8b392c6cd4a531e2ec"
  },
  {
    "url": "build/app/prbjimxc.js",
    "revision": "cdaeafa3db4a0110eb89064bf056b70f"
  },
  {
    "url": "build/app/psdyx2bw.js",
    "revision": "406e82b55150106c6e25d803df3e4c5a"
  },
  {
    "url": "build/app/puby85yf.js",
    "revision": "a5e18cb41aaee7cfffece34d2cfb9ed5"
  },
  {
    "url": "build/app/pvsinxia.js",
    "revision": "855348bc263388b2f0adc862c2eaa1b0"
  },
  {
    "url": "build/app/qdrnmfxb.js",
    "revision": "cb5059e2a02e2c82a09231536979f7a9"
  },
  {
    "url": "build/app/qjrkeoqf.js",
    "revision": "eb17eb7f16025bed86a79e6abca09108"
  },
  {
    "url": "build/app/qlkgg4zv.js",
    "revision": "630a18535c6655761da8ed7178a3f3f1"
  },
  {
    "url": "build/app/qs4y0amv.js",
    "revision": "a58a0984eaa105ff56c04cf8cd602d4e"
  },
  {
    "url": "build/app/r37s2kua.js",
    "revision": "46b86af40957d839d5d39ce4afa6a42e"
  },
  {
    "url": "build/app/rf4sz5y5.js",
    "revision": "56e01093553ce0347151f81873419e0b"
  },
  {
    "url": "build/app/rs9p8wsr.js",
    "revision": "e20804d6b9465e4dfcd39f3250c593a6"
  },
  {
    "url": "build/app/rugwjqoe.js",
    "revision": "5a773f556848e379aca1bf8a458d8eb6"
  },
  {
    "url": "build/app/sadojbwh.js",
    "revision": "5a3c257bef5f7f7c95dace10ba624191"
  },
  {
    "url": "build/app/sc7pnst6.js",
    "revision": "b6ecbc10d0b4cb685b3985954448e53d"
  },
  {
    "url": "build/app/sekisbtp.js",
    "revision": "a5d9255f008c9dede87acbed4c29b934"
  },
  {
    "url": "build/app/sghgzic7.js",
    "revision": "168b3eccad8d0751e3c1929f02ade945"
  },
  {
    "url": "build/app/ssxtgw0f.js",
    "revision": "d369c0ce7a1727f84ee69c54bb8d882a"
  },
  {
    "url": "build/app/tjcvmqts.js",
    "revision": "1980657bdd66a950d5391b83fc4671c2"
  },
  {
    "url": "build/app/ukuynxtl.js",
    "revision": "7adc8c5c761d179fcf2edb89ecbc06d8"
  },
  {
    "url": "build/app/umsl9a8t.js",
    "revision": "d59aa5b4ecb5ca4c086111f03d3d70b2"
  },
  {
    "url": "build/app/undjlgpb.js",
    "revision": "4be4a7e3dec44e00a2fc8d0cf517faaa"
  },
  {
    "url": "build/app/upiseqk2.js",
    "revision": "7a84e4748fb1e4e8c4f4532493f3ed2b"
  },
  {
    "url": "build/app/vendor/swiper.js",
    "revision": "f44ae3024a4323c4f98e7b69cefeee47"
  },
  {
    "url": "build/app/wimyj6sh.js",
    "revision": "655058eb55abb353e20bf4ae6ad10ca5"
  },
  {
    "url": "build/app/xnhlrl1m.js",
    "revision": "c9afbd51ef60d119813b68d3d3424098"
  },
  {
    "url": "build/app/xrm3xvvu.js",
    "revision": "8366bf75ea8536ae3ce0680e01d8e060"
  },
  {
    "url": "build/app/z1tn3ekx.js",
    "revision": "782d7e47ae33df56dfd53dc4c0bbb0e8"
  },
  {
    "url": "host.config.json",
    "revision": "709c35dd7aa6117a6fe8ff4405b72b8d"
  },
  {
    "url": "index.html",
    "revision": "d36ba73120c80ef6141aed95940b0454"
  },
  {
    "url": "manifest.json",
    "revision": "37fa51e0adb6d06a091eb83d34f06110"
  }
]);
