importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "cfb994aca3977b07491e7c75afe4670e"
  },
  {
    "url": "bars/index.html",
    "revision": "a5137b6b79119913f0c1e6e95e1f83cd"
  },
  {
    "url": "beers/index.html",
    "revision": "7c7520c11579cc4debd9c051238c45dc"
  },
  {
    "url": "build/app.js",
    "revision": "3c4fa4e09870e6e226d08c965499bfd6"
  },
  {
    "url": "build/app/0l9lewav.js",
    "revision": "b7b4162e329a3a65f8365f7bbca3ffc8"
  },
  {
    "url": "build/app/0n68rovf.js",
    "revision": "d279a2a589c9fcd3faac6e4765057519"
  },
  {
    "url": "build/app/0vte5tbs.js",
    "revision": "4544fe2b23fe13a408b00cb354b22a1f"
  },
  {
    "url": "build/app/3klbfckm.js",
    "revision": "78bbcbee2fdd171e4a9f5b227809505c"
  },
  {
    "url": "build/app/3y5anirz.js",
    "revision": "508edefed8b59fc9827351d25de7dc0d"
  },
  {
    "url": "build/app/4mcmtzyk.js",
    "revision": "4b56c379b472eaa47397228486baea2e"
  },
  {
    "url": "build/app/4q4gnrio.js",
    "revision": "effabf67434921c4c22a3f8ffb707d33"
  },
  {
    "url": "build/app/4z57tuzn.js",
    "revision": "729eee415743c51951d30a744a58da90"
  },
  {
    "url": "build/app/5k1niy4w.js",
    "revision": "79ea5633c9332a092c99566aea834286"
  },
  {
    "url": "build/app/7ekn2eqt.js",
    "revision": "1bc5913636f4dd41329da3415d49f5b3"
  },
  {
    "url": "build/app/7fngxaqd.js",
    "revision": "22135b55037a672696c1ad7195d132aa"
  },
  {
    "url": "build/app/7sabxgee.js",
    "revision": "4029171b5e06f08a2639dff8ecd34439"
  },
  {
    "url": "build/app/7uvdubdz.js",
    "revision": "e682231ddd5e694dfe420095eb5e5116"
  },
  {
    "url": "build/app/8ethwtgs.js",
    "revision": "d50b2be8bf65667b5cb4f9706dc1caaf"
  },
  {
    "url": "build/app/8x2kinzi.js",
    "revision": "4867e339915a59af0f686c822c8d7dd7"
  },
  {
    "url": "build/app/9aabgthl.js",
    "revision": "1ae84c0a92b203ffa4ed2900b98384da"
  },
  {
    "url": "build/app/9lxzp6us.js",
    "revision": "1af579a9114307f3cb2e0440dc5c1877"
  },
  {
    "url": "build/app/aappy8nv.js",
    "revision": "63fd6badef9ba8c70d9902c449de2ea7"
  },
  {
    "url": "build/app/app.eujcqoer.js",
    "revision": "8dadb160e786a8f4fb81e0f59b11ae4e"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "5b95ab06f9c63a291ab648af9b786ef7"
  },
  {
    "url": "build/app/app.kxeqypl1.js",
    "revision": "72d173d60e93aba49dca8c73eb2c5bf6"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "e4afe9a8bc11adbb6998ffc8174f6f0d"
  },
  {
    "url": "build/app/bvrykdam.js",
    "revision": "8b0d19850f739be48dd3dcc5a4981b93"
  },
  {
    "url": "build/app/c398ps6m.js",
    "revision": "5de04e0b701e1b40c5bcfd3b17c88a75"
  },
  {
    "url": "build/app/ccmacghh.js",
    "revision": "c4dfb0fcdfacff41cde0e86b12b76036"
  },
  {
    "url": "build/app/clkyw4s6.js",
    "revision": "d8d6b8e3ba271dc52a2f4e09f120a583"
  },
  {
    "url": "build/app/clyrpg2k.js",
    "revision": "946e6ea6576efb33a1a8b94fbef9148d"
  },
  {
    "url": "build/app/dlg6spgr.js",
    "revision": "a42cd776a2eb23d41e775385a9226515"
  },
  {
    "url": "build/app/dvch8do0.js",
    "revision": "821465867d2971b3793554640ef99a1e"
  },
  {
    "url": "build/app/e0ivnhnm.js",
    "revision": "979b5f0910c2c542a8b8712fa143d484"
  },
  {
    "url": "build/app/e2v9zue4.js",
    "revision": "6ae0a7bcec137d0316d7ac252ef5c71d"
  },
  {
    "url": "build/app/ecfy8ir6.js",
    "revision": "f51bdb85a7f0c26315e78c68cb6d385b"
  },
  {
    "url": "build/app/er52qmue.js",
    "revision": "cabd7d1072367d8d12179125403b8f72"
  },
  {
    "url": "build/app/er9o2upl.js",
    "revision": "0cdb85cdd189f522a70692610f5c0ed1"
  },
  {
    "url": "build/app/faogs4qo.js",
    "revision": "6e72ecad79bfe98223302076f2f5df4e"
  },
  {
    "url": "build/app/fhw1hije.js",
    "revision": "1e8ca70a8bdd92ddefe4730ebe73a829"
  },
  {
    "url": "build/app/fprxtbf1.js",
    "revision": "6727a4c6ed4e58083a42103c81933210"
  },
  {
    "url": "build/app/fx984cgi.js",
    "revision": "c5ff68bda91800b044fc7275e769cf8b"
  },
  {
    "url": "build/app/fz4lqilx.js",
    "revision": "863b5db31bbb5eeb4e00d9ba42870d55"
  },
  {
    "url": "build/app/gca87o2v.js",
    "revision": "e9ed7ad25ca5f6c1b29edea3c444f76b"
  },
  {
    "url": "build/app/glns0stp.js",
    "revision": "c23efabd0d3c8913c7d124e346e56449"
  },
  {
    "url": "build/app/hpmi8l3v.js",
    "revision": "63dc3f58d2eaa7a2416a50628df6dd74"
  },
  {
    "url": "build/app/htp46gwe.js",
    "revision": "c9e833bce49fcc804b68d09fa36e5794"
  },
  {
    "url": "build/app/jko2fkts.js",
    "revision": "e3e8932005dce29698d2e45c3d69acad"
  },
  {
    "url": "build/app/jop2cajd.js",
    "revision": "2265e306c0c4642c8c379c2e4ef320e0"
  },
  {
    "url": "build/app/kamyq6lq.js",
    "revision": "2b9e046594c446351a0348d399d5797b"
  },
  {
    "url": "build/app/krahgnxf.js",
    "revision": "42e68af384a846ef6a566b26fb6f2f46"
  },
  {
    "url": "build/app/kxfef33l.js",
    "revision": "e7df7d1275c5d43696a9c22fc9ac7b86"
  },
  {
    "url": "build/app/lc3eh6tv.js",
    "revision": "b5da7809a7e69e145fdfb2dfd65ab694"
  },
  {
    "url": "build/app/lhjw1ms6.js",
    "revision": "9343fb5cc5e912ddbd0e1fb9e46a20d6"
  },
  {
    "url": "build/app/m1cslbij.js",
    "revision": "17d9c8c15ea836e2ccc0ef2dc3ec2a4f"
  },
  {
    "url": "build/app/mfk22ued.js",
    "revision": "542e9ef91357287016486e43341ab72e"
  },
  {
    "url": "build/app/mgubyea4.js",
    "revision": "7e1d52b58de236c1c6ac6bfffa40572e"
  },
  {
    "url": "build/app/n4gut1z5.js",
    "revision": "ec4080398ed11039b20cf0c94de4187a"
  },
  {
    "url": "build/app/nupzfm78.js",
    "revision": "8847f92f73c284027da093e4779ac74b"
  },
  {
    "url": "build/app/o286baqo.js",
    "revision": "2cd9e582a27133a49b82c528a5d27948"
  },
  {
    "url": "build/app/o3c87uhx.js",
    "revision": "58946d5e17cf2472193eb44da0bfca16"
  },
  {
    "url": "build/app/p58hdd5b.js",
    "revision": "a62bf305201fc79c63bc6ce48dd6482b"
  },
  {
    "url": "build/app/peg5n024.js",
    "revision": "cde4fe51e487d022d140d3204c3ac102"
  },
  {
    "url": "build/app/pofqq3ho.js",
    "revision": "23b247eadd400f251b36b5ac35b1fbe2"
  },
  {
    "url": "build/app/qbqqkwex.js",
    "revision": "636f14ff06555a01dc61c677d4a48da3"
  },
  {
    "url": "build/app/qo7xktp1.js",
    "revision": "eb0b1b7517c6424c348640388109a4c3"
  },
  {
    "url": "build/app/qvkxkbgz.js",
    "revision": "56c593d88f5c707f54086bd1330d69a6"
  },
  {
    "url": "build/app/qx2l3z3q.js",
    "revision": "1fa5774cd0ccd5af9a76869554b60826"
  },
  {
    "url": "build/app/qyzoflck.js",
    "revision": "8a63bb842db75d2c4dceb39e404a2797"
  },
  {
    "url": "build/app/rfeigqn5.js",
    "revision": "408c1cca8918e989c21b3bf3dd9d0568"
  },
  {
    "url": "build/app/rkhz7d98.js",
    "revision": "973a38d4c44c29ebb30700d68b7e9898"
  },
  {
    "url": "build/app/ronunol3.js",
    "revision": "3af5bd79ffdfce5227ed79ce1206af36"
  },
  {
    "url": "build/app/sahhhydr.js",
    "revision": "f25a794a412ec1f9fd2e3fc50b78e75d"
  },
  {
    "url": "build/app/tka8x4oo.js",
    "revision": "edfe365b77b6d5b9169f07c8a80addf3"
  },
  {
    "url": "build/app/tzyf14d8.js",
    "revision": "aacb6eef79bcffebcd2c955babd7c293"
  },
  {
    "url": "build/app/uc2mpgiq.js",
    "revision": "920d779478a0021a19350fa2940eae59"
  },
  {
    "url": "build/app/uegftlcd.js",
    "revision": "aac7481572eb1d8d61744bceb024c923"
  },
  {
    "url": "build/app/upqpoi63.js",
    "revision": "cc39a2109ee4e6075cc6e89abe861267"
  },
  {
    "url": "build/app/upsd3eyg.js",
    "revision": "776a68d3626adc62f23fb21a2ceb3680"
  },
  {
    "url": "build/app/uqrgsgva.js",
    "revision": "b62b507504d2abfb8a8f69ab081b1416"
  },
  {
    "url": "build/app/vendor/swiper.js",
    "revision": "f44ae3024a4323c4f98e7b69cefeee47"
  },
  {
    "url": "build/app/vmshsixz.js",
    "revision": "b2149ec42a5d5b21e1d0edd41a15e9a4"
  },
  {
    "url": "build/app/vnbzd9zp.js",
    "revision": "959b1a36315a0f327852c103bab71094"
  },
  {
    "url": "build/app/wawblzzc.js",
    "revision": "6b544ad3322fd7e547a56dc08dbda1d1"
  },
  {
    "url": "build/app/wqtkagwi.js",
    "revision": "441919859103e736a1a4bd61bd2c342f"
  },
  {
    "url": "build/app/wtxdkpl8.js",
    "revision": "665423ba08877ed11d1d9e678ee7a3ad"
  },
  {
    "url": "build/app/xq2mhe6t.js",
    "revision": "05a0f6fd00964f443e993277e06c6b2c"
  },
  {
    "url": "build/app/y9tznkjc.js",
    "revision": "3e766703cafaff0d3db34f79d1dcb7ee"
  },
  {
    "url": "build/app/yhor9hkl.js",
    "revision": "faad59e78bc35153b66698248678f65b"
  },
  {
    "url": "build/app/ymqwtboh.js",
    "revision": "cb20edf2e187d362f2319acc1651e957"
  },
  {
    "url": "build/app/yogkdefm.js",
    "revision": "042c961b62ff4471d088f3edb16208f0"
  },
  {
    "url": "build/app/ypnafjoj.js",
    "revision": "ea5906a71384acee1a8095ae1e3e533c"
  },
  {
    "url": "build/app/zadqhlhe.js",
    "revision": "0b5fe7defff3892b6fc36a87a1b63a57"
  },
  {
    "url": "build/app/zagbqzvx.js",
    "revision": "a01d24ac3cf5dd842912c8ba2f53271e"
  },
  {
    "url": "build/app/zezto9qd.js",
    "revision": "de4f8030b6ee50bdefa430d156a332ab"
  },
  {
    "url": "build/app/zur1rlim.js",
    "revision": "1b55df15cccbb67bade41ba81f38d6c6"
  },
  {
    "url": "build/app/zwgl5hxv.js",
    "revision": "ccf98d2761450dbed5da3d5c8e04029d"
  },
  {
    "url": "build/app/zyurrmsn.js",
    "revision": "8b2141aa077dadc4b3566df363fbad6b"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
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
    "url": "index.html",
    "revision": "5a91a480b9649266fc09e2b08409ea6e"
  },
  {
    "url": "manifest.json",
    "revision": "c1d318cee3e66000978b35d24e89ee48"
  },
  {
    "url": "workbox-sw.prod.v2.0.1.js",
    "revision": "679d4e73dc756b21e46ee8f1bb52c882"
  },
  {
    "url": "workbox-sw.prod.v2.0.3.js",
    "revision": "60b4da760c6a02cbbf5efc80c4da7090"
  },
  {
    "url": "workbox-sw.prod.v2.1.0.js",
    "revision": "e5f207838d7fd9c81835d5705a73cfa2"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
