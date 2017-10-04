importScripts('workbox-sw.prod.v2.0.3.js');

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
    "revision": "0d93b2a291e41af4cf30cd605e01175c"
  },
  {
    "url": "beers/index.html",
    "revision": "5f5e2f7b1419b19f1b7cf45deef0ec78"
  },
  {
    "url": "build/app.global.js",
    "revision": "399623ff387a2a494fbd674e24efa5da"
  },
  {
    "url": "build/app.js",
    "revision": "d72ed9d2b3624a9d2ad43d27f5cc41b1"
  },
  {
    "url": "build/app.registry.json",
    "revision": "661ea800caa1c0190540f865c9ccd25f"
  },
  {
    "url": "build/app/06ic4yhp.css",
    "revision": "b0a6364d0a9f604b59aec815d2728503"
  },
  {
    "url": "build/app/0hxnh8jd.css",
    "revision": "6c5dd52d6ed112f4a0ef65d09af43690"
  },
  {
    "url": "build/app/0jqvdqhk.css",
    "revision": "5a981a9dd5281c0a4b34d08a142e9b1c"
  },
  {
    "url": "build/app/0uzl7bcx.css",
    "revision": "03ac0eb8190067b7dc64d85c7c5dc797"
  },
  {
    "url": "build/app/1ksfzagb.css",
    "revision": "0fafbf8f4a6551a78fe6dbdf086d68d3"
  },
  {
    "url": "build/app/2kykbghb.css",
    "revision": "627b30aa015830bc72926899536a5b29"
  },
  {
    "url": "build/app/2pvpqemf.js",
    "revision": "6d09bfcd0315dd74ae0097b08f25b147"
  },
  {
    "url": "build/app/2uip2kzf.css",
    "revision": "93fb74fca66b682b2e20d19e66a18325"
  },
  {
    "url": "build/app/3umevl1d.js",
    "revision": "325a1d699f6246bcc2a2c86037afef4d"
  },
  {
    "url": "build/app/47xdjwuc.js",
    "revision": "e08600fc5abb9b97cf4c96c32c87c407"
  },
  {
    "url": "build/app/49zjgs1o.css",
    "revision": "84a7506a5b446bb5bf456576d182d0b6"
  },
  {
    "url": "build/app/4gp3d0xt.js",
    "revision": "ea6b75bf59738ca7aff2890dcea88698"
  },
  {
    "url": "build/app/4iwl584z.css",
    "revision": "da522fbeb420c4fac69306f513fc609a"
  },
  {
    "url": "build/app/4rnded7o.css",
    "revision": "c45340fa1a202fc3e7bd4569477bad62"
  },
  {
    "url": "build/app/4vsdqbz7.css",
    "revision": "3e0b706c97d296745d1e213e26de6fb5"
  },
  {
    "url": "build/app/5aimje9v.js",
    "revision": "477becbf6b62337b0b00d70eeeeeaffc"
  },
  {
    "url": "build/app/5hscuabi.css",
    "revision": "b7464a84fc5c2cb16f947c05ee5a1c4e"
  },
  {
    "url": "build/app/5jsnqxir.css",
    "revision": "fc8de64cd02cda93d165f0da0e33f604"
  },
  {
    "url": "build/app/6dqshtes.css",
    "revision": "940aff532bdd8fdb00ba924ea1ac5e17"
  },
  {
    "url": "build/app/6eegosjq.css",
    "revision": "8d879d6d56850e1e7f51bf34dec99d84"
  },
  {
    "url": "build/app/6fhzxxo9.js",
    "revision": "f26467ef13d7ab3b056ef8366f88760c"
  },
  {
    "url": "build/app/78ucclxa.js",
    "revision": "2f48293bfa8cee087b30622e3c28f29d"
  },
  {
    "url": "build/app/7ewyr8bj.css",
    "revision": "cd927348c414bfdee50de0b6d6db5637"
  },
  {
    "url": "build/app/7urdugdx.css",
    "revision": "99b0dd4d25cc9b75bb60f3732d68c48d"
  },
  {
    "url": "build/app/8cs2ebdy.js",
    "revision": "34a38157d352ee2e569f508d01891d38"
  },
  {
    "url": "build/app/8cujg9aa.css",
    "revision": "3b5754d56c63341f1a7a21564e76cca5"
  },
  {
    "url": "build/app/9pgest20.css",
    "revision": "9594b0b18a35316f11dde417ea05a16c"
  },
  {
    "url": "build/app/9rflixhu.css",
    "revision": "2fa86cc60fd97d6ebc44d3ae5e2aac4b"
  },
  {
    "url": "build/app/9rqmilsp.js",
    "revision": "b89679d1b83b47ab47170c40f40d4bf3"
  },
  {
    "url": "build/app/a9zp9z7k.css",
    "revision": "e7c7381ba1df2ca3a3af22e450d726d4"
  },
  {
    "url": "build/app/aasp1nnk.css",
    "revision": "0b4f6efbb20d73367edc95e26ae253d9"
  },
  {
    "url": "build/app/afszhnlq.css",
    "revision": "1e738872440984a85184a72ff8a1b53d"
  },
  {
    "url": "build/app/app.xmg1rssj.pf.js",
    "revision": "d98beca24d4fa738e65c42b270016ac0"
  },
  {
    "url": "build/app/app.ymij1atu.js",
    "revision": "3503453b2e54f33050eb0152b03b0d27"
  },
  {
    "url": "build/app/au2o1dlq.css",
    "revision": "3df3691eefe0ae5b3c3acb2514e389db"
  },
  {
    "url": "build/app/az2ne6wf.css",
    "revision": "2ecc9c23bddfeca6d110047f1fcfc4dd"
  },
  {
    "url": "build/app/bkwb65g6.css",
    "revision": "4e22704b5f3b3a036f2ff0779f2d7010"
  },
  {
    "url": "build/app/bkwppxbe.js",
    "revision": "0b218a2817f096db7395b5226bdaa016"
  },
  {
    "url": "build/app/bngvz016.css",
    "revision": "c917fd1e1b9b7b1c8497f157d0f200e2"
  },
  {
    "url": "build/app/bsaais6h.js",
    "revision": "8fbcbc0866b257f4a0980c11dfa7a5d8"
  },
  {
    "url": "build/app/bxnpxlbz.css",
    "revision": "d73f82a715c6eb878fe33e4fccdfecf5"
  },
  {
    "url": "build/app/cc3e4zho.js",
    "revision": "55d213bc4935a3daff91d1e5dced0df4"
  },
  {
    "url": "build/app/d3xn1mai.js",
    "revision": "1377117af411fc8d05d470d505965593"
  },
  {
    "url": "build/app/df4cbjox.css",
    "revision": "ab80bfa41d118be4b0ae399c517bdb05"
  },
  {
    "url": "build/app/djp8mbr3.css",
    "revision": "6dd3446b737ca9c9c591aa96c1fbe34e"
  },
  {
    "url": "build/app/e5ll71p0.css",
    "revision": "bbfccdefd4a3ed319a8854fe1e6017b3"
  },
  {
    "url": "build/app/eqzbwdkq.css",
    "revision": "8fce37026e2d1a6e5c70ccb768a2a4c6"
  },
  {
    "url": "build/app/fkswlgbs.css",
    "revision": "89a4b377892ec078fc2ef7d3efd4d44f"
  },
  {
    "url": "build/app/fom5fqld.css",
    "revision": "23cd01222f1bdb3d12e8587128303e02"
  },
  {
    "url": "build/app/fwk5qq3e.js",
    "revision": "51c31cc219c9c5e430ed177d9a98040b"
  },
  {
    "url": "build/app/fyyer5aq.css",
    "revision": "8b00c85605a084d1072a1d8b651d9abe"
  },
  {
    "url": "build/app/g82xarp6.css",
    "revision": "0ce9d3b19756ef79783f85bafed2b6e6"
  },
  {
    "url": "build/app/g8hqhkj4.css",
    "revision": "82b298334c64455ba78be00e457ab94d"
  },
  {
    "url": "build/app/ggu5ncys.js",
    "revision": "89d188575a9f73efc786bb957dde5f31"
  },
  {
    "url": "build/app/gj6v93wx.js",
    "revision": "812bcb15bb4a603490c583504e7c57d3"
  },
  {
    "url": "build/app/gmhvw0y5.css",
    "revision": "f297fd09c89a2097b5619e9243b9d470"
  },
  {
    "url": "build/app/gvsz836o.js",
    "revision": "917431d11f6395bde964034610eba654"
  },
  {
    "url": "build/app/gz0ls20c.js",
    "revision": "375367899566eb2167d0c97a5e915c86"
  },
  {
    "url": "build/app/h3wx8ps6.js",
    "revision": "81380d088fd1f42a03fba78c546cf853"
  },
  {
    "url": "build/app/hid4ko9s.css",
    "revision": "c283e8e139369189f11e3616960ef7a0"
  },
  {
    "url": "build/app/hkeowayx.css",
    "revision": "bf42ea7443940d8175e8637f532e7252"
  },
  {
    "url": "build/app/hlwgmz6g.css",
    "revision": "a651c3dc36dc897af5a23a9dbc6d0366"
  },
  {
    "url": "build/app/hthytjll.css",
    "revision": "9ea3647b356b6bf01b832075af1942d5"
  },
  {
    "url": "build/app/hz0g45ye.js",
    "revision": "5cb3268fb8f8141d81c7bf7f97a62c49"
  },
  {
    "url": "build/app/i9gpwjnp.css",
    "revision": "da6b9d8ddc0e6333f7e33243b8bf8dd8"
  },
  {
    "url": "build/app/igw1bpbv.css",
    "revision": "b1776bfc76514a034876f7533b9255d6"
  },
  {
    "url": "build/app/inuypkmr.css",
    "revision": "19257270822bf732a02cea6114886da9"
  },
  {
    "url": "build/app/ixvfeing.js",
    "revision": "3638efff0efb05a46575b0bd9d89a3a2"
  },
  {
    "url": "build/app/jb1dawg7.js",
    "revision": "2e83c15b97abf59846eaaa0601eb7067"
  },
  {
    "url": "build/app/jthhebfb.css",
    "revision": "e64fc06d64e43273c0737815f26b60ca"
  },
  {
    "url": "build/app/jwfjsmop.css",
    "revision": "bc3b25cedbaa764c1e981715d1355013"
  },
  {
    "url": "build/app/k4p6m5oa.css",
    "revision": "59e67e5006cfc39cb017f6c4ceb240be"
  },
  {
    "url": "build/app/k5xnmovs.js",
    "revision": "80f0ab518fecf41005b29f18c0ec9f31"
  },
  {
    "url": "build/app/leaenogh.css",
    "revision": "3e2bc3fd735560ab352a3f9aa77d484c"
  },
  {
    "url": "build/app/lkivfl34.css",
    "revision": "6976f9b17165b988730db47d1cff4c87"
  },
  {
    "url": "build/app/lylgdzho.css",
    "revision": "c2264e7363fbfcf86aafbe9cd7862320"
  },
  {
    "url": "build/app/ma0zxhhh.js",
    "revision": "b922856902e8b7c509bdb8309d8c0d1b"
  },
  {
    "url": "build/app/maqkzelk.css",
    "revision": "766d0c9f1a6cab54c0b53bcb3adb69ba"
  },
  {
    "url": "build/app/mobtb1ta.css",
    "revision": "dc8b6ab953c81b4b104833f94d82b06a"
  },
  {
    "url": "build/app/n0efedrw.css",
    "revision": "cba26a844d33526ed68e9732a2bca91c"
  },
  {
    "url": "build/app/nd09darn.css",
    "revision": "487612c86912e4a36bf95c2d7b3e0057"
  },
  {
    "url": "build/app/o4tnwai4.css",
    "revision": "75e02147c03175f4f333aa2ef13f0026"
  },
  {
    "url": "build/app/o6yhknon.js",
    "revision": "edd661862aabfe5a8cdf5c945bfed282"
  },
  {
    "url": "build/app/omgzokan.css",
    "revision": "06408edbec7779d1407742da5d3a1ab6"
  },
  {
    "url": "build/app/onpxyelt.css",
    "revision": "b6d6bbb6d61a59a2fa66bd6b795a5ca2"
  },
  {
    "url": "build/app/ow25j8t0.css",
    "revision": "c5ac672ba824005aa4e6ac05108664eb"
  },
  {
    "url": "build/app/ow7advcv.js",
    "revision": "7156d80cac7d7f6e36f6a7b36c06c5c6"
  },
  {
    "url": "build/app/p7azrhos.css",
    "revision": "38acb25ecb01ad93df92b32f966eadc3"
  },
  {
    "url": "build/app/p86ieuzr.js",
    "revision": "51de1b24698516e67fcb57494875e222"
  },
  {
    "url": "build/app/pakudkaw.css",
    "revision": "0a4d60e226a43204d5746d27d1b4dd70"
  },
  {
    "url": "build/app/pgomunr3.css",
    "revision": "4b48b87df44c34ddb46a74ad938b2bfe"
  },
  {
    "url": "build/app/po4gctgr.css",
    "revision": "b9c3a83330ae948e83aea0eef61cb59c"
  },
  {
    "url": "build/app/pwy3u1fv.css",
    "revision": "3aa72a73c97ac47d9df1d839146a4d31"
  },
  {
    "url": "build/app/q4uvhhdz.css",
    "revision": "6512de135913772bea9c9a67f0c3473c"
  },
  {
    "url": "build/app/q7vnkbpo.css",
    "revision": "d6fd47e9edea78daa8c672cf54c1ff19"
  },
  {
    "url": "build/app/qekhqmnv.css",
    "revision": "2a13b19c09b652ae0506b97fd0aa0fbd"
  },
  {
    "url": "build/app/qezwi11y.js",
    "revision": "1c70943c80e8ab8aa425463d4248636b"
  },
  {
    "url": "build/app/qfngy8zv.css",
    "revision": "f2563334372d760cbda29d0159e0df74"
  },
  {
    "url": "build/app/qnsivgok.css",
    "revision": "501c074a4789ee5bbf729e149bb32739"
  },
  {
    "url": "build/app/qwenaxla.css",
    "revision": "b32ac154fe7bf50f4e78f7fd60f2bc8f"
  },
  {
    "url": "build/app/r97ij9mc.js",
    "revision": "1727230c36f7d6b8ad8fb08db731eff3"
  },
  {
    "url": "build/app/ronaubm1.js",
    "revision": "5165803fdc8cb2375aa2b0533c166357"
  },
  {
    "url": "build/app/rxxjezd9.css",
    "revision": "dd6d6df4c2779c709fe923925cf42ccf"
  },
  {
    "url": "build/app/sadehnky.css",
    "revision": "ee3309bd62fcec6c6c80fb182c0ce401"
  },
  {
    "url": "build/app/sw8c1gzm.css",
    "revision": "b6e44a79615a021472c9de4e63ce2db5"
  },
  {
    "url": "build/app/syw5wsxc.js",
    "revision": "064ac30058ccf06020913381e3056869"
  },
  {
    "url": "build/app/t0u2oupf.js",
    "revision": "d204219a6cc05889c3927f0cfe8c8410"
  },
  {
    "url": "build/app/t6ec4dkt.css",
    "revision": "4a1f8c511d916e814fd87d0e409a087a"
  },
  {
    "url": "build/app/taqqg0q6.js",
    "revision": "cf729e38aa1b20dde79c60f2de171daa"
  },
  {
    "url": "build/app/tkogqyqu.css",
    "revision": "355e199aff2bf788259fcec44d097fb7"
  },
  {
    "url": "build/app/ufcwkqek.css",
    "revision": "a7a690003ddb15deb591d3713a294d4b"
  },
  {
    "url": "build/app/uqrxsyxw.css",
    "revision": "182bb1b7cbb6de1cd0568c48bc6f1075"
  },
  {
    "url": "build/app/utly53m5.css",
    "revision": "45b042526b68ec18631b2c4c48244cfc"
  },
  {
    "url": "build/app/v4syyat3.js",
    "revision": "7c421211c5ad5917c41c9c57db021ac0"
  },
  {
    "url": "build/app/v7d20mpx.js",
    "revision": "0203438f4a773ea9e3169559219e6f47"
  },
  {
    "url": "build/app/vendor/swiper.js",
    "revision": "f44ae3024a4323c4f98e7b69cefeee47"
  },
  {
    "url": "build/app/w2egy1rg.js",
    "revision": "5a181cbc412e10488558b20aab0ff24e"
  },
  {
    "url": "build/app/wk85vj3k.css",
    "revision": "5ae1f535c4e9a9efacc08b0dde4a1d47"
  },
  {
    "url": "build/app/wpmzw6ar.css",
    "revision": "a62031ef78a4c16ee1a3ebfde1b9a582"
  },
  {
    "url": "build/app/wrkfxzcm.css",
    "revision": "4303972a2f5c556d2d956ed0f7418bb5"
  },
  {
    "url": "build/app/wvzgakqi.css",
    "revision": "b82e9a71fc7550c84fe3238d103a1817"
  },
  {
    "url": "build/app/wzhdu3bt.css",
    "revision": "a38e76ff48231aa1b8bb35ae31bc7a15"
  },
  {
    "url": "build/app/x8wvs2fa.js",
    "revision": "a8e36c1b75323d0022ecfbe5ec3d1fb3"
  },
  {
    "url": "build/app/xbwzlnf7.js",
    "revision": "6149ff60a1ce9d8a5cf71aa3bb158806"
  },
  {
    "url": "build/app/xnfscga7.css",
    "revision": "12f89e651ee3e4ff04603690fbec7453"
  },
  {
    "url": "build/app/ya39bpzh.js",
    "revision": "33d8f09900dcb33112768fdcbc56364a"
  },
  {
    "url": "build/app/z4mrascm.css",
    "revision": "21806ea829f0bd84dae9e3789003338a"
  },
  {
    "url": "build/app/z4wpobp6.css",
    "revision": "cc3bdee23be90b947f453c002100a2e8"
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
    "revision": "4b669caca23e41bceace25c4e90291d5"
  },
  {
    "url": "manifest.json",
    "revision": "c1d318cee3e66000978b35d24e89ee48"
  },
  {
    "url": "workbox-sw.prod.v2.0.1.js",
    "revision": "679d4e73dc756b21e46ee8f1bb52c882"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
