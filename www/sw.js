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
    "revision": "50d8b47b68e83a975a654d3e6ce8d534"
  },
  {
    "url": "build/app.js",
    "revision": "6919d9c5751b2f0f447ca339db1ae140"
  },
  {
    "url": "build/app/0q7y9cqb.es5.js",
    "revision": "436794621c0c5cc3513fab0e97fc67a7"
  },
  {
    "url": "build/app/0q7y9cqb.js",
    "revision": "081ca15bf840eb7d150c7a13b48b6f90"
  },
  {
    "url": "build/app/0wkawdza.es5.js",
    "revision": "544fd12b6eb2f8b90cb2301cfc5a7e83"
  },
  {
    "url": "build/app/0wkawdza.js",
    "revision": "b4c9dd30433d0922b71a0e5615f043ef"
  },
  {
    "url": "build/app/2birezdf.es5.js",
    "revision": "804a7ac0bf8efe47c4eca597f36364e9"
  },
  {
    "url": "build/app/2birezdf.js",
    "revision": "5839f0114cf2dab03031a647fcafa767"
  },
  {
    "url": "build/app/387iv9xk.es5.js",
    "revision": "9a870323cb2f652547db4b46550af91d"
  },
  {
    "url": "build/app/387iv9xk.js",
    "revision": "6c9c761187ef7195051dc9c764cb3cbc"
  },
  {
    "url": "build/app/39xacmao.es5.js",
    "revision": "68593dd73160cea89fc14267ec6c9a39"
  },
  {
    "url": "build/app/39xacmao.js",
    "revision": "e8afc4ce4e3b369137b603223bfe1bad"
  },
  {
    "url": "build/app/3izfv3a5.es5.js",
    "revision": "a9e128c2b11f28300a1ac0c58985a8b8"
  },
  {
    "url": "build/app/3izfv3a5.js",
    "revision": "34160cb790f06812046998f640ad7472"
  },
  {
    "url": "build/app/3nn1xsdz.es5.js",
    "revision": "d4b1b0831e192828431dd59d0b252315"
  },
  {
    "url": "build/app/3nn1xsdz.js",
    "revision": "51bd2ed2f3d98e50073d10826b1b714e"
  },
  {
    "url": "build/app/4ndjybtm.es5.js",
    "revision": "3bd0bc7d29cc771fc2c573200530118a"
  },
  {
    "url": "build/app/4ndjybtm.js",
    "revision": "80ff836c1e00832542b277d065161203"
  },
  {
    "url": "build/app/54whf8gk.es5.js",
    "revision": "97917adc18472a1cf31e08c23f37237e"
  },
  {
    "url": "build/app/54whf8gk.js",
    "revision": "bb610f130510576a5f951959d59935a8"
  },
  {
    "url": "build/app/599wbicy.es5.js",
    "revision": "bfcbcdbd3d4a10d633ffbe0d2f4f38e9"
  },
  {
    "url": "build/app/599wbicy.js",
    "revision": "85d0fd116705032a7bc5bfbe4ba24549"
  },
  {
    "url": "build/app/5puhq0i9.es5.js",
    "revision": "9d164e6d5cc5c0c323aa37676d5bc0af"
  },
  {
    "url": "build/app/5puhq0i9.js",
    "revision": "27d74c0b3a9d4105e928374482facf78"
  },
  {
    "url": "build/app/66svllln.es5.js",
    "revision": "3314ecdb67a1104f4f75d4755a0467fc"
  },
  {
    "url": "build/app/66svllln.js",
    "revision": "21131bbb0cb988fa9c91d394d8151341"
  },
  {
    "url": "build/app/6b0uk2ro.es5.js",
    "revision": "96939ed5da69955d13b45166f015e78e"
  },
  {
    "url": "build/app/6b0uk2ro.js",
    "revision": "580b9df236b527561d8801c51925db21"
  },
  {
    "url": "build/app/6rnl8ofw.es5.js",
    "revision": "a0039902a948fb97e34ffbded87d5426"
  },
  {
    "url": "build/app/6rnl8ofw.js",
    "revision": "5940501096c097d9c205132071d3cd11"
  },
  {
    "url": "build/app/7kbuyjam.es5.js",
    "revision": "9c4fb8522aa9a71b7bef39e6909b3493"
  },
  {
    "url": "build/app/7kbuyjam.js",
    "revision": "dedff339adc284855f76689338324920"
  },
  {
    "url": "build/app/7krk8dzq.es5.js",
    "revision": "5e419bfccbc16dce756ccdf07b57121f"
  },
  {
    "url": "build/app/7krk8dzq.js",
    "revision": "5981d89b363a5463286bc1353c490de5"
  },
  {
    "url": "build/app/80ur5vvd.es5.js",
    "revision": "59de7a04b30627ce4fd48534de809f49"
  },
  {
    "url": "build/app/80ur5vvd.js",
    "revision": "14feeb92ef70ecee85b8646ce3892b3a"
  },
  {
    "url": "build/app/8fe5rc1p.es5.js",
    "revision": "9417afbad7ae14131ae6228382862f24"
  },
  {
    "url": "build/app/8fe5rc1p.js",
    "revision": "073252e6f07640c181aaae4b7e3bfa92"
  },
  {
    "url": "build/app/9gsqglgt.es5.js",
    "revision": "ef19c94f4449cd7a20feca8102f51935"
  },
  {
    "url": "build/app/9gsqglgt.js",
    "revision": "d0b22038f5dd64a1c469ba8ebe0a8b92"
  },
  {
    "url": "build/app/9nvdrdrd.es5.js",
    "revision": "deecff04a9ae36ee7b51afea339a2c85"
  },
  {
    "url": "build/app/9nvdrdrd.js",
    "revision": "8311e50607ada60ef09f84e6bf974ba0"
  },
  {
    "url": "build/app/a1wppn7q.es5.js",
    "revision": "af848edf6bbb221370c19d79264665c5"
  },
  {
    "url": "build/app/a1wppn7q.js",
    "revision": "2282ca084f5df499b82e83136174bf10"
  },
  {
    "url": "build/app/a6fjjgzj.es5.js",
    "revision": "420d56687326bf80e0e4b3ec9aaa49df"
  },
  {
    "url": "build/app/a6fjjgzj.js",
    "revision": "44a33cfdbbc6043dfe1548fda6f464bf"
  },
  {
    "url": "build/app/ab2mf2rk.es5.js",
    "revision": "2e4199c01ebd68c4099348c0befa6e9a"
  },
  {
    "url": "build/app/ab2mf2rk.js",
    "revision": "63f78cacf75c37f2cecb35bb4c1a71ba"
  },
  {
    "url": "build/app/accinihg.es5.js",
    "revision": "b7bdcface103b1e343e922f6969cec7d"
  },
  {
    "url": "build/app/accinihg.js",
    "revision": "88deaebd642f64bd3c48532985d6a590"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "e2804f3e84b7171197d6b8e03c4f8459"
  },
  {
    "url": "build/app/app.junuz4hv.js",
    "revision": "3102d12a3d12182784854841a8e95f7f"
  },
  {
    "url": "build/app/app.pz6spwro.js",
    "revision": "45148d265093246408ec00577f820767"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "182c9950d490e8317de13af30d48eafb"
  },
  {
    "url": "build/app/biuzizd5.es5.js",
    "revision": "e50d573f47ddc08aefbd4337b9b64a0a"
  },
  {
    "url": "build/app/biuzizd5.js",
    "revision": "3099bcf808993058cdc156df2e34837c"
  },
  {
    "url": "build/app/bpgk5cjn.es5.js",
    "revision": "d3b91f576c92c41ab85eefe64ca25952"
  },
  {
    "url": "build/app/bpgk5cjn.js",
    "revision": "e06aad4c2894401d01f65223ea9086d5"
  },
  {
    "url": "build/app/bpx0xghh.es5.js",
    "revision": "7bb12a1f88d7b488634347b37c44bc10"
  },
  {
    "url": "build/app/bpx0xghh.js",
    "revision": "d59b01a0b401b785d4cbcd6cd2ba35d9"
  },
  {
    "url": "build/app/c3fbw6k5.es5.js",
    "revision": "ba755e684285d7f290bc5c0875bfb623"
  },
  {
    "url": "build/app/c3fbw6k5.js",
    "revision": "e38c2fad39dd5a745e64b471bf00e8d8"
  },
  {
    "url": "build/app/csai25d6.es5.js",
    "revision": "d4f2f8e6f53f1bc9f7eacc0afd9aa4f5"
  },
  {
    "url": "build/app/csai25d6.js",
    "revision": "5ff0803d6cd5e8859221afd3369192bf"
  },
  {
    "url": "build/app/cyyebqmd.es5.js",
    "revision": "8d26f5068e730be5597b821832210e2e"
  },
  {
    "url": "build/app/cyyebqmd.js",
    "revision": "44f6c1ce27effe6ffc6933e6e4c51cd4"
  },
  {
    "url": "build/app/dit5psuq.es5.js",
    "revision": "645ed4f074d34f58b26ec20be993ebce"
  },
  {
    "url": "build/app/dit5psuq.js",
    "revision": "b97403c33fac3bead7c2d9d29c39248f"
  },
  {
    "url": "build/app/dpmeryyf.es5.js",
    "revision": "313cd47b560c7b986fc227861270cfec"
  },
  {
    "url": "build/app/dpmeryyf.js",
    "revision": "faff591172f95deeb1123442ccbcee96"
  },
  {
    "url": "build/app/dr0eezre.es5.js",
    "revision": "a8957d93ea0f0658d952912eac72968d"
  },
  {
    "url": "build/app/dr0eezre.js",
    "revision": "f742251242b1f35b385b7d2ac0872980"
  },
  {
    "url": "build/app/dydbhrpt.es5.js",
    "revision": "cc84d461008934a0b056e766f4aeeab5"
  },
  {
    "url": "build/app/dydbhrpt.js",
    "revision": "a13957f225c3b0f04d025742e7f0d185"
  },
  {
    "url": "build/app/dyyummgj.es5.js",
    "revision": "f75f25b3f247354e37bb935c55b02b82"
  },
  {
    "url": "build/app/dyyummgj.js",
    "revision": "da6bf56cf394d71ed11980ea9019b233"
  },
  {
    "url": "build/app/e40826xq.es5.js",
    "revision": "16f0e881278b361568ad03193a03a0af"
  },
  {
    "url": "build/app/e40826xq.js",
    "revision": "e6c4332882d35870b919d1d7b8053d21"
  },
  {
    "url": "build/app/e8qiaqw1.es5.js",
    "revision": "16ce198c01174ef85af17f875a4eaa8a"
  },
  {
    "url": "build/app/e8qiaqw1.js",
    "revision": "eeac209f060df899b184476727403c9d"
  },
  {
    "url": "build/app/ezaqz7rv.es5.js",
    "revision": "05b9499bb357dc154cad490e4aac1c05"
  },
  {
    "url": "build/app/ezaqz7rv.js",
    "revision": "f6bb9ba779c92f57f0918dd69ffa6bdf"
  },
  {
    "url": "build/app/f1c7zpvm.es5.js",
    "revision": "0af36f2c15a6cb9e62d55f5cc715200f"
  },
  {
    "url": "build/app/f1c7zpvm.js",
    "revision": "5d8996f03dbef5f6acb0b56c1d13842b"
  },
  {
    "url": "build/app/f2f9zkd8.es5.js",
    "revision": "69cde366b9c1bb763e718c168d6d3139"
  },
  {
    "url": "build/app/f2f9zkd8.js",
    "revision": "a8d79c74b13968766341f4c3b4593268"
  },
  {
    "url": "build/app/fsbxvmxn.es5.js",
    "revision": "0fe20a7a05151467eb39a1e07095fd0c"
  },
  {
    "url": "build/app/fsbxvmxn.js",
    "revision": "34db76a655484e670a74c5c9ee6d63ed"
  },
  {
    "url": "build/app/g14tpdat.es5.js",
    "revision": "c719e22d4144d6fd9af16199c1cdebfd"
  },
  {
    "url": "build/app/g14tpdat.js",
    "revision": "c59459850fd7c266704bab9ae0190d68"
  },
  {
    "url": "build/app/idtkz5tv.es5.js",
    "revision": "855c5cbfe8fdd59d4f49b28fc72aa9ef"
  },
  {
    "url": "build/app/idtkz5tv.js",
    "revision": "b41df0fd150be196c8c5466d89eb5b5a"
  },
  {
    "url": "build/app/if7we6al.es5.js",
    "revision": "c32e9dbca11a9447eeadcfaf87746474"
  },
  {
    "url": "build/app/if7we6al.js",
    "revision": "0f82da0060c238e0bc2008db5d633ff9"
  },
  {
    "url": "build/app/ih9lqhjw.es5.js",
    "revision": "022f4a4eb76cbeb34dbcf0dbfa5801bc"
  },
  {
    "url": "build/app/ih9lqhjw.js",
    "revision": "263bbc46ec8d00235af6acdda9a6b37c"
  },
  {
    "url": "build/app/j1xfitw6.es5.js",
    "revision": "f4d8aac509c51fbd1d227c2cc3775921"
  },
  {
    "url": "build/app/j1xfitw6.js",
    "revision": "9f50b99bf1849e3039861597b0c2be8a"
  },
  {
    "url": "build/app/kdp47wb4.es5.js",
    "revision": "cbc96ee779a0052baecc2087fca23469"
  },
  {
    "url": "build/app/kdp47wb4.js",
    "revision": "125cdcd639936bb6846240356ceebea9"
  },
  {
    "url": "build/app/knzca5fb.es5.js",
    "revision": "bd9c53f2153aadca3644dc9c7d5be2fb"
  },
  {
    "url": "build/app/knzca5fb.js",
    "revision": "38a336fba43ff56c3e8355b86467331c"
  },
  {
    "url": "build/app/kxjphjjg.es5.js",
    "revision": "3131ef9ec9fd489d337c535313d96987"
  },
  {
    "url": "build/app/kxjphjjg.js",
    "revision": "6bf7713268bdd048658b0f7138a048c0"
  },
  {
    "url": "build/app/l2rpec3j.es5.js",
    "revision": "488ff011f90b8a3bfd39f62484ecb4c5"
  },
  {
    "url": "build/app/l2rpec3j.js",
    "revision": "26388f035e95e07b0629d01d21aa914f"
  },
  {
    "url": "build/app/l6tbulri.es5.js",
    "revision": "6b82bc2576495bfd9155f834c5f40fe4"
  },
  {
    "url": "build/app/l6tbulri.js",
    "revision": "cf82004e897f160b68fd88190691955e"
  },
  {
    "url": "build/app/ldibwp2d.es5.js",
    "revision": "7b6641b06f10f13e5e36451760fdca6f"
  },
  {
    "url": "build/app/ldibwp2d.js",
    "revision": "ab63741e7bbe50c04d724326a62c26b6"
  },
  {
    "url": "build/app/mbb9r9bm.es5.js",
    "revision": "f5be1020e24a7787a31f5aa77bfd6ac1"
  },
  {
    "url": "build/app/mbb9r9bm.js",
    "revision": "01ed206d23f2343f0a65e39a184f144d"
  },
  {
    "url": "build/app/mhh252jf.es5.js",
    "revision": "a4992dc8fc8fd4a6b211b25d2d744fed"
  },
  {
    "url": "build/app/mhh252jf.js",
    "revision": "c121a74161e5e406810f6c12d128146d"
  },
  {
    "url": "build/app/mrjr3g2y.es5.js",
    "revision": "a622ab72301f475e0a1932557f0eb2bb"
  },
  {
    "url": "build/app/mrjr3g2y.js",
    "revision": "d6c94f73e47d2cbd7ae1721a8dcd2b46"
  },
  {
    "url": "build/app/mvkp1eom.es5.js",
    "revision": "c901196c182f251803f6d5aca0643380"
  },
  {
    "url": "build/app/mvkp1eom.js",
    "revision": "31c9b063309f6e042a11d660257aee71"
  },
  {
    "url": "build/app/or9wgizt.es5.js",
    "revision": "e3b5efa293e7813e9706d84ae854d733"
  },
  {
    "url": "build/app/or9wgizt.js",
    "revision": "ad34ec375b30317d8ab70578c3ca4233"
  },
  {
    "url": "build/app/p6cwdjwu.es5.js",
    "revision": "9285d94b76ab2ac67e91411166392ba8"
  },
  {
    "url": "build/app/p6cwdjwu.js",
    "revision": "62ba9a88fd57fc16cbe5cafdfe1a8e6d"
  },
  {
    "url": "build/app/prbjimxc.es5.js",
    "revision": "2adf224f575bb704c8cf3ac55c2548bd"
  },
  {
    "url": "build/app/prbjimxc.js",
    "revision": "cdaeafa3db4a0110eb89064bf056b70f"
  },
  {
    "url": "build/app/puby85yf.es5.js",
    "revision": "6dada1b26b0b62d7421b3e5bfa51953a"
  },
  {
    "url": "build/app/puby85yf.js",
    "revision": "a5e18cb41aaee7cfffece34d2cfb9ed5"
  },
  {
    "url": "build/app/pvbipg2c.es5.js",
    "revision": "cb93faee2fff626322063e9b7d921a54"
  },
  {
    "url": "build/app/pvbipg2c.js",
    "revision": "56f043a131940175a535d68eda12f541"
  },
  {
    "url": "build/app/pvsinxia.es5.js",
    "revision": "407df312dc927cc6880f43acf9ed69c5"
  },
  {
    "url": "build/app/pvsinxia.js",
    "revision": "855348bc263388b2f0adc862c2eaa1b0"
  },
  {
    "url": "build/app/pzdrxf0h.es5.js",
    "revision": "b629b67adfd09c95891027a90985166f"
  },
  {
    "url": "build/app/pzdrxf0h.js",
    "revision": "9b230bbf71013e8d74dd6a62c82ebc72"
  },
  {
    "url": "build/app/qdrnmfxb.es5.js",
    "revision": "ceb81166d72787c3c78b34dc5f81de92"
  },
  {
    "url": "build/app/qdrnmfxb.js",
    "revision": "cb5059e2a02e2c82a09231536979f7a9"
  },
  {
    "url": "build/app/qlybm4m2.es5.js",
    "revision": "64af049afb11cba817b0a7dcdcc34a01"
  },
  {
    "url": "build/app/qlybm4m2.js",
    "revision": "3d617f36c28434ce07d451084c1e2402"
  },
  {
    "url": "build/app/r37s2kua.es5.js",
    "revision": "a7af2e41b7b9bd4992f1ebb83bace139"
  },
  {
    "url": "build/app/r37s2kua.js",
    "revision": "46b86af40957d839d5d39ce4afa6a42e"
  },
  {
    "url": "build/app/rjdlothd.es5.js",
    "revision": "34c717c86910ad5823721c485572cfaa"
  },
  {
    "url": "build/app/rjdlothd.js",
    "revision": "2ec344bb84dd2bd260429683a97594d1"
  },
  {
    "url": "build/app/rq6y3tvb.es5.js",
    "revision": "0f6622462ef35416e1e4cc922d5e73fe"
  },
  {
    "url": "build/app/rq6y3tvb.js",
    "revision": "00c6335fd17094b67f5f43a035db37f4"
  },
  {
    "url": "build/app/sc7pnst6.es5.js",
    "revision": "5ba0f3889ebff8d1ba9b37d84373ecdb"
  },
  {
    "url": "build/app/sc7pnst6.js",
    "revision": "b6ecbc10d0b4cb685b3985954448e53d"
  },
  {
    "url": "build/app/sghgzic7.es5.js",
    "revision": "6474f5c18021d09d430880a1e2f8ddda"
  },
  {
    "url": "build/app/sghgzic7.js",
    "revision": "168b3eccad8d0751e3c1929f02ade945"
  },
  {
    "url": "build/app/sqmwgtjx.es5.js",
    "revision": "66c3df07ba7ee089c8292c00e234f0e6"
  },
  {
    "url": "build/app/sqmwgtjx.js",
    "revision": "4c98587f9830f259327d91f743856c02"
  },
  {
    "url": "build/app/tjcvmqts.es5.js",
    "revision": "eeb1b784dd6eddb05c4e318a40496a55"
  },
  {
    "url": "build/app/tjcvmqts.js",
    "revision": "1980657bdd66a950d5391b83fc4671c2"
  },
  {
    "url": "build/app/tq84qqiv.es5.js",
    "revision": "63e5ca42d42b5a1d2ab5c9ee7e6bc279"
  },
  {
    "url": "build/app/tq84qqiv.js",
    "revision": "69d6df7b1e2327b6f2a73810d5e4b391"
  },
  {
    "url": "build/app/u46dsb2x.es5.js",
    "revision": "4816c7bcdc41a1bb32d451809f4260a8"
  },
  {
    "url": "build/app/u46dsb2x.js",
    "revision": "e1afeff12606a2344696134acdf68fae"
  },
  {
    "url": "build/app/ufgu0pgz.es5.js",
    "revision": "dee866d11d463e049b3e6423087438b2"
  },
  {
    "url": "build/app/ufgu0pgz.js",
    "revision": "17230bef6b53e9e4e2327157b5620aac"
  },
  {
    "url": "build/app/ukvesiyr.es5.js",
    "revision": "a99d2bbc0d6f31731d32c78edd62e81a"
  },
  {
    "url": "build/app/ukvesiyr.js",
    "revision": "fa04420d2771bb788262d6171347c941"
  },
  {
    "url": "build/app/up4qrosp.es5.js",
    "revision": "6f2992e77b012e11eb2ca4fabb948f2e"
  },
  {
    "url": "build/app/up4qrosp.js",
    "revision": "3b2fdb9a9e86bf807e6eaaace824565b"
  },
  {
    "url": "build/app/utylnlvc.es5.js",
    "revision": "fc60240c5341300c6e135ecd44052bba"
  },
  {
    "url": "build/app/utylnlvc.js",
    "revision": "e17a6c9c7fa816546422482e50e00b5e"
  },
  {
    "url": "build/app/vendor/swiper.js",
    "revision": "f44ae3024a4323c4f98e7b69cefeee47"
  },
  {
    "url": "build/app/vkoqnpww.es5.js",
    "revision": "e9afe5f36bb42915cb9412b21e9e6ce2"
  },
  {
    "url": "build/app/vkoqnpww.js",
    "revision": "ec934e44ec0338e7f7ef9e50f36bfa4f"
  },
  {
    "url": "build/app/vy129wn8.es5.js",
    "revision": "4629dc42044ffe60fee981e5c0f23e79"
  },
  {
    "url": "build/app/vy129wn8.js",
    "revision": "62da922acfba71c3d37a4dfc2ea39863"
  },
  {
    "url": "build/app/weynqauc.es5.js",
    "revision": "7a44ae0b525dd3f3487cba5c794b1d1b"
  },
  {
    "url": "build/app/weynqauc.js",
    "revision": "db48a0d3d3e4522c768682d42a6454af"
  },
  {
    "url": "build/app/xcrqwx6x.es5.js",
    "revision": "419c76c864c0459a72ad7d398e044a47"
  },
  {
    "url": "build/app/xcrqwx6x.js",
    "revision": "b6688f6e7e399b1df01bc635b6f83bda"
  },
  {
    "url": "build/app/xgp6fgbd.es5.js",
    "revision": "20846038395e38a47e08ad40493c5b19"
  },
  {
    "url": "build/app/xgp6fgbd.js",
    "revision": "ac8d754e5aa035f22f3232c55d7458d1"
  },
  {
    "url": "build/app/xnhlrl1m.es5.js",
    "revision": "b13f415fac2334e9bfabecbf208e579e"
  },
  {
    "url": "build/app/xnhlrl1m.js",
    "revision": "c9afbd51ef60d119813b68d3d3424098"
  },
  {
    "url": "build/app/xsi4grll.es5.js",
    "revision": "eedd6472a20c5fd4bed34df3e15224db"
  },
  {
    "url": "build/app/xsi4grll.js",
    "revision": "36a6e178ae20ca2fc10209c417bf615c"
  },
  {
    "url": "build/app/xysiigrj.es5.js",
    "revision": "f8c7fe3412dce02092756c13cb350c79"
  },
  {
    "url": "build/app/xysiigrj.js",
    "revision": "3db14df9dd5bfe8fa9e36a12275c1665"
  },
  {
    "url": "build/app/yayakfgb.es5.js",
    "revision": "30ebc72070ade9bde2b09971cde70459"
  },
  {
    "url": "build/app/yayakfgb.js",
    "revision": "13ba88fae8b6ddf7c4d3945b81c21609"
  },
  {
    "url": "build/app/zbtu8moq.es5.js",
    "revision": "20188aacaa2d43287b607455cb1b30a5"
  },
  {
    "url": "build/app/zbtu8moq.js",
    "revision": "fdd31bef4675e09ffbd19b395515e66a"
  },
  {
    "url": "build/app/zknckkpr.es5.js",
    "revision": "6729a2bd2a14269ddf3cb66eaff08215"
  },
  {
    "url": "build/app/zknckkpr.js",
    "revision": "12942f6063c4f46846beace6e297e6e4"
  },
  {
    "url": "build/app/zvs2qivr.es5.js",
    "revision": "66117d0fb07dd0f26f0041c810ca9d8b"
  },
  {
    "url": "build/app/zvs2qivr.js",
    "revision": "60e078854a51e077c43c5ddd3a9a4c69"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "host.config.json",
    "revision": "0d402ec60e66a5cd71572dd16bdcbd20"
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
