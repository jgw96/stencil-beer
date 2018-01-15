importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});

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


workboxSW.precache([
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
    "url": "build/app.css",
    "revision": "419cf0a8f17d31f6826b210f1155e83c"
  },
  {
    "url": "build/app.js",
    "revision": "7bac67b6f0c32a6dd99e6ad3565255cf"
  },
  {
    "url": "build/app/08pp0bm5.js",
    "revision": "0b7595bd1a1f928f0f768ba3f3efb7d2"
  },
  {
    "url": "build/app/0svyxpfm.js",
    "revision": "1d7f9d59cda98b4fa78225c43bc3def1"
  },
  {
    "url": "build/app/12uiuzxf.js",
    "revision": "3be3a7b9a634633e26110db95a29008c"
  },
  {
    "url": "build/app/1oorymuz.js",
    "revision": "e0aa98c16954c2a04765e3e3963e4797"
  },
  {
    "url": "build/app/1wjzxtro.js",
    "revision": "0591a9f66d508de8bb8f481295114d42"
  },
  {
    "url": "build/app/2ddzatnm.js",
    "revision": "b714277d4c2402de518629ecfc59c0cd"
  },
  {
    "url": "build/app/2tya68ur.js",
    "revision": "46ab6ec313cceefda5da6141231102eb"
  },
  {
    "url": "build/app/2tya68ur.sc.js",
    "revision": "73aa809e7ad5d0d82a097f41fdb5d2bd"
  },
  {
    "url": "build/app/2y1qlqzr.js",
    "revision": "bf51a3d51da58c9f227ddebe06612ced"
  },
  {
    "url": "build/app/38vd26tp.js",
    "revision": "7cb7478fbf2978dfe407c2b21b6c903f"
  },
  {
    "url": "build/app/3dflekti.js",
    "revision": "3d735aa0e828b693ee1c4ef1cd07f2b5"
  },
  {
    "url": "build/app/3ukpcx0o.js",
    "revision": "671d45d28be00c80cfdb2ad18958888b"
  },
  {
    "url": "build/app/41gvtafn.js",
    "revision": "09385da370443e2931814f18358a0507"
  },
  {
    "url": "build/app/4abuongf.js",
    "revision": "85273b8c296ee36c99beccb7b9c30202"
  },
  {
    "url": "build/app/4paxhno3.js",
    "revision": "b2a69e27068131fae2d5fa2c02f33ec1"
  },
  {
    "url": "build/app/4r6piqii.js",
    "revision": "382ff105b5f68cf1c1608c5cbfa53488"
  },
  {
    "url": "build/app/4s5vjipl.js",
    "revision": "6ca5a0a49e40064ef363c64a725d4408"
  },
  {
    "url": "build/app/4s5vjipl.sc.js",
    "revision": "eda5175d1055ea79f984875df26b4c00"
  },
  {
    "url": "build/app/4xpo7th3.js",
    "revision": "6e6baec48508e0303bd413d4b0565260"
  },
  {
    "url": "build/app/510wuk6w.js",
    "revision": "d8640c8354763007447b95892fa3f6da"
  },
  {
    "url": "build/app/5e3mm8py.js",
    "revision": "d8783a51d88a5fe606e0bd94a40261be"
  },
  {
    "url": "build/app/5w8ehrat.js",
    "revision": "d15d589d01b53534e0b0fe7b73aaf76e"
  },
  {
    "url": "build/app/6h3gn76l.js",
    "revision": "b46ee5986c7fda07d6efbd4caa777cde"
  },
  {
    "url": "build/app/6oizmyrs.js",
    "revision": "cb01b204026c307ba6e7d2c9d6761ec4"
  },
  {
    "url": "build/app/6t4nu95t.js",
    "revision": "7a0ca7ca22dca994af7c4105d6815f95"
  },
  {
    "url": "build/app/81dmydfb.js",
    "revision": "bf8b46e2a4cd01d6e77207bc06d56ed7"
  },
  {
    "url": "build/app/8enwi2yp.js",
    "revision": "f3c19bd635ffb598ad571961739c4898"
  },
  {
    "url": "build/app/8jtvzivl.js",
    "revision": "b3e61b4754d8c32ef8834e2cf3721662"
  },
  {
    "url": "build/app/8wzaso7j.js",
    "revision": "b6be19ffd49fd5e4d8e92ebb1bc61b2c"
  },
  {
    "url": "build/app/9pr0ia7k.js",
    "revision": "d337a546cf2c029df36d0559cc75479e"
  },
  {
    "url": "build/app/9xcbnbio.js",
    "revision": "de387fdc0beaa8c02e4a5b9bee1a1930"
  },
  {
    "url": "build/app/a32owvr9.js",
    "revision": "61888b446d8153ba0517fb1cb3d1dffb"
  },
  {
    "url": "build/app/a7ppgers.js",
    "revision": "c3581aedb91774e308efa00bf2ff5b4e"
  },
  {
    "url": "build/app/a8bjoetn.js",
    "revision": "11860381ce95b33fc35db2670ba0878c"
  },
  {
    "url": "build/app/aavz6sml.js",
    "revision": "a3ee4383085fc135fa858c538e9d866c"
  },
  {
    "url": "build/app/acwhiyun.js",
    "revision": "a5d8d3e7261b1408449d2d2bca057c10"
  },
  {
    "url": "build/app/ahghgdyq.js",
    "revision": "fa903f4ae926aec0a16e61d174ebae14"
  },
  {
    "url": "build/app/amekrhmw.js",
    "revision": "cd491effb82d9f9febd1fed339192b28"
  },
  {
    "url": "build/app/anaclevb.js",
    "revision": "e6a18395f5a4461d7dc734ece3728965"
  },
  {
    "url": "build/app/app.coh323mc.js",
    "revision": "dd74fda095189745dbaff4eb1a20b5eb"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "864ebe2e5c3bda37daf1508c525c08e0"
  },
  {
    "url": "build/app/app.qwbwyf0k.js",
    "revision": "eba39628d0f44f65473cd74fee27c898"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "70d5a16ff0eb5e6904424c81f8e73ab7"
  },
  {
    "url": "build/app/app.v3vb8vhq.js",
    "revision": "f51108256dec74c4f0da42a36d2dbdc3"
  },
  {
    "url": "build/app/aqhym4jj.js",
    "revision": "52599aeca57b9736614b325feaebfa69"
  },
  {
    "url": "build/app/aso1rgbn.js",
    "revision": "8193b9d3dc0caf0f298430de0b004b0b"
  },
  {
    "url": "build/app/avsnzmpl.js",
    "revision": "ea838186842f34905523f65565c2cc96"
  },
  {
    "url": "build/app/axiskrin.js",
    "revision": "71cfe321bf2fade5c6ef336ae10f2174"
  },
  {
    "url": "build/app/azbru2hc.js",
    "revision": "8020221f5621d103ef491d95c68ede82"
  },
  {
    "url": "build/app/bg9p9bg0.js",
    "revision": "d2187a4a30f6805e532dca7df3a22e4c"
  },
  {
    "url": "build/app/bp4bo98a.js",
    "revision": "6bde4200085e7a6ea6078bc8814ec93a"
  },
  {
    "url": "build/app/bqmhjodh.js",
    "revision": "6b2417b74cbee1c8a9030d315bb34d8d"
  },
  {
    "url": "build/app/bsoumgtj.js",
    "revision": "d236bc78b8822014ffdbda653cdba4c6"
  },
  {
    "url": "build/app/c98ywgjj.js",
    "revision": "c2ae4a0f361a45533b787b38fd468483"
  },
  {
    "url": "build/app/cgtxjmgg.js",
    "revision": "a5a0f42a1e082bb9a8e436c56df78a94"
  },
  {
    "url": "build/app/crdk6uuq.js",
    "revision": "ac7c4b2b32f8411f3692e3ed3375101b"
  },
  {
    "url": "build/app/cv7cbtbi.js",
    "revision": "b425d7fba0b1c25730cf13a34af6b556"
  },
  {
    "url": "build/app/cx9uvftp.js",
    "revision": "f12a120b81d0c73f890d61a37975bf8c"
  },
  {
    "url": "build/app/cxfavi4b.js",
    "revision": "bcad5d04730e9620928cd20f97a17caa"
  },
  {
    "url": "build/app/cxxofgl1.js",
    "revision": "17bb5fd1b20c16e58d54e802dc63cfe2"
  },
  {
    "url": "build/app/cz4sa030.js",
    "revision": "8d667fef327882e1df0d5c3fbd8bbcdf"
  },
  {
    "url": "build/app/d3apn234.js",
    "revision": "fc7b7c5ddd43bd2f7aa53301378e88ae"
  },
  {
    "url": "build/app/d93ylumq.js",
    "revision": "a66faec3059db885f266dc696b9501d5"
  },
  {
    "url": "build/app/dbdlfpbh.js",
    "revision": "6b7339af0bd84960a7d2f27a0b17d394"
  },
  {
    "url": "build/app/dgqknpd5.js",
    "revision": "5f7a493f6e3c68c6ebe0c0e834b1bfef"
  },
  {
    "url": "build/app/diynvurk.js",
    "revision": "28ad01ee5639e72ef8b644377398c9c0"
  },
  {
    "url": "build/app/dojvzfoq.js",
    "revision": "13f52912508d5250e109ad2592223225"
  },
  {
    "url": "build/app/dqcpcxzx.js",
    "revision": "e7730e329869136b24670d14456acb27"
  },
  {
    "url": "build/app/dwor9tym.js",
    "revision": "a094da53b0393d4d61fe55fa7832ee4f"
  },
  {
    "url": "build/app/egrpgdxe.js",
    "revision": "ec5ecd137f3fda83cc3949bdcf611d48"
  },
  {
    "url": "build/app/ejvjzb5t.js",
    "revision": "0da23c8a3a7da6647e622b93c3f56743"
  },
  {
    "url": "build/app/euxnpt4q.js",
    "revision": "61507dbacac21b33134f39482f6702a9"
  },
  {
    "url": "build/app/f3on1ybh.js",
    "revision": "034d08e67bdbd7d3790e351e8298cd5e"
  },
  {
    "url": "build/app/f6pwflpp.js",
    "revision": "0e27133cdcd42eba567386712207d16a"
  },
  {
    "url": "build/app/ffcqsixn.js",
    "revision": "e77ea29a8278295475a6a6d108acc6ba"
  },
  {
    "url": "build/app/fgl5oqpl.js",
    "revision": "63bad92d5261c341ebe2e294bf560ec9"
  },
  {
    "url": "build/app/fk8vlwj8.js",
    "revision": "7c700767cc09da1f599c1b32e3abfac8"
  },
  {
    "url": "build/app/fkj98kns.js",
    "revision": "cae4f3c0accba6c1877311a0ea41c820"
  },
  {
    "url": "build/app/fm9tufhz.js",
    "revision": "5519fd38b6e460f5349bbcc4aa8ad983"
  },
  {
    "url": "build/app/fuaxrhrm.js",
    "revision": "82f8c1a9291f656a9df7f4fd3eca1982"
  },
  {
    "url": "build/app/gblgt8pi.js",
    "revision": "b42c41dd12c678144335e801ed5483bf"
  },
  {
    "url": "build/app/gbnswczo.js",
    "revision": "cf69904c7f2405104ccc4e34c3e41ce4"
  },
  {
    "url": "build/app/gu4mjmna.js",
    "revision": "f3daf85fb45acd183b70f046a12adea6"
  },
  {
    "url": "build/app/hhqxczdl.js",
    "revision": "b181bc7eeebbde96e8b6a614a44b8e71"
  },
  {
    "url": "build/app/hqfiheuv.js",
    "revision": "1437691daa83dd91cef564f3e04333be"
  },
  {
    "url": "build/app/hybpbbbl.js",
    "revision": "a6c6145927fce4558c9565160882e816"
  },
  {
    "url": "build/app/hzxn4evv.js",
    "revision": "e658a319bab28eb78057760a9123e43f"
  },
  {
    "url": "build/app/i0a38fqw.js",
    "revision": "481a8119e4d4c49ba2ed81b7db141679"
  },
  {
    "url": "build/app/idviecte.js",
    "revision": "cb4f684a09a9d0c31fe9cca99ec2e95a"
  },
  {
    "url": "build/app/iivsp60s.js",
    "revision": "90700025ffe9238dae3351e3c4375a34"
  },
  {
    "url": "build/app/ija5lrld.js",
    "revision": "e24e41b992e53a6c54b34d34128d021e"
  },
  {
    "url": "build/app/ikb1ybo6.js",
    "revision": "a1e63d4fa9837d6aca47fe0ed8c53304"
  },
  {
    "url": "build/app/il3lrymb.js",
    "revision": "0214594eb7d65e28343c37f3321e90e4"
  },
  {
    "url": "build/app/iws5og3u.js",
    "revision": "8873780544ac1fed769318ac316d2fbd"
  },
  {
    "url": "build/app/ixn2efd0.js",
    "revision": "0f5aacd34303bf5c89183e4cc74e813f"
  },
  {
    "url": "build/app/jgsay6qq.js",
    "revision": "25fc3adeb3c423259581532ecf617d87"
  },
  {
    "url": "build/app/jjf5hzrh.js",
    "revision": "730557ac659abae1ddc39332035f4ab2"
  },
  {
    "url": "build/app/jlxtwe5j.js",
    "revision": "bfa59997d8ae8e77a809a8d766fcd28c"
  },
  {
    "url": "build/app/jpxyurtn.js",
    "revision": "069c944568d09577c4cbaa976ddf787c"
  },
  {
    "url": "build/app/k8vpbwew.js",
    "revision": "758b9081918e1b00588f4e6f360ae914"
  },
  {
    "url": "build/app/kaqpaujv.js",
    "revision": "f76be489ed1fe1fd94f953fe1a5bd768"
  },
  {
    "url": "build/app/khzbhthh.js",
    "revision": "704cc63e77ebd9ce6cfd160af9f9588d"
  },
  {
    "url": "build/app/ksrq91np.js",
    "revision": "3b32ff434006a1eece0527f99af3a318"
  },
  {
    "url": "build/app/lk8klqc8.js",
    "revision": "b8a3ba0e354a36379867434e4614072f"
  },
  {
    "url": "build/app/lljm4afl.js",
    "revision": "45d0dbeb29a21adf7c1adc47597372e7"
  },
  {
    "url": "build/app/lri87luw.js",
    "revision": "7a7802e1a1f4898c55fa1771d57a1329"
  },
  {
    "url": "build/app/lsg7mdai.js",
    "revision": "e81622901a9ee77000ee2cdb73b65c4f"
  },
  {
    "url": "build/app/ltncmngz.js",
    "revision": "1fee58874d21904b8e943667f930dd63"
  },
  {
    "url": "build/app/lunprpvl.js",
    "revision": "863d6b3c49c82854c89850abe95b3805"
  },
  {
    "url": "build/app/lv1pj9wt.js",
    "revision": "6b9b4828ebf1807423f5b41ce6af33df"
  },
  {
    "url": "build/app/m3on7drb.js",
    "revision": "673c258eeae6b21a0bcd9d7e5d622c2b"
  },
  {
    "url": "build/app/m6zj5ium.js",
    "revision": "d1fe9f4a1b492032904ff3812ef98ba8"
  },
  {
    "url": "build/app/n6kduioo.js",
    "revision": "97411c2c6832a826eead4bb2e046f0e0"
  },
  {
    "url": "build/app/n7vwziuo.js",
    "revision": "8e0278f839e15bebffbfbbc257656c12"
  },
  {
    "url": "build/app/n7vwziuo.sc.js",
    "revision": "e3e690ddca9a71999697c61391f23cd6"
  },
  {
    "url": "build/app/ndcx1naq.js",
    "revision": "f4c4f6936191c7f64b1ef6e56cd4dacf"
  },
  {
    "url": "build/app/ndlxi4tv.js",
    "revision": "841c40f7a4b03d74726a18b0d49880cf"
  },
  {
    "url": "build/app/nfnyat3x.js",
    "revision": "37dee8ae64e59dd3091495e2b33fedfd"
  },
  {
    "url": "build/app/ngd7fupw.js",
    "revision": "f17375fe9dab939aec4adc42eead5865"
  },
  {
    "url": "build/app/nk9o76yg.js",
    "revision": "b7c263c28a847c7121640cec68a60fad"
  },
  {
    "url": "build/app/nq9yexon.js",
    "revision": "6148f38a01e0ace01e47b0a38ea6577c"
  },
  {
    "url": "build/app/nr8ak7a5.js",
    "revision": "49253f70605402069cabfcc63a3423a2"
  },
  {
    "url": "build/app/nxmq7odm.js",
    "revision": "74d423441ec19f7b83c3765ccaf42281"
  },
  {
    "url": "build/app/ny8ngbuy.js",
    "revision": "05a6d50b705913b303801dbd4b9f3922"
  },
  {
    "url": "build/app/o1ch85ro.js",
    "revision": "43e9b79778de06a6b481ec4b48ed66ce"
  },
  {
    "url": "build/app/o4quwike.js",
    "revision": "924fe4fe7f1e002c6de7b946d7c999c7"
  },
  {
    "url": "build/app/o71ru75s.js",
    "revision": "b0917cc672861958c4eba64fff378795"
  },
  {
    "url": "build/app/oonthlyp.js",
    "revision": "469bc88a4f1958b622c665532466f5b0"
  },
  {
    "url": "build/app/orsdhirh.js",
    "revision": "7438a81d2db06c201be7ba516d9071ca"
  },
  {
    "url": "build/app/p5fxobkb.js",
    "revision": "6641c3407e72d62aaa28d8c2825b6d5a"
  },
  {
    "url": "build/app/piilyobe.js",
    "revision": "b92e6b90c01261870cf7bf4161c5c859"
  },
  {
    "url": "build/app/psbze3vm.js",
    "revision": "e6857b14486510d4a503edeb1aaef008"
  },
  {
    "url": "build/app/pvwtk70k.js",
    "revision": "c6e708e3019e3e35bcdf7ffe4d4b4166"
  },
  {
    "url": "build/app/pwcet8tw.js",
    "revision": "9d663a3154d87176205bc6d5812ba33c"
  },
  {
    "url": "build/app/px3pxybe.js",
    "revision": "de1c8f49f57cfff0088e4b02618a3f80"
  },
  {
    "url": "build/app/q5atvxmm.js",
    "revision": "347b96bdfff0658ee3b54d73f0f8c0d5"
  },
  {
    "url": "build/app/q5c0uf8u.js",
    "revision": "2f0eded3b720f15c5ab90b5534e14075"
  },
  {
    "url": "build/app/q5rgiwft.js",
    "revision": "f4f2f0df548415bb50254e0cae4f52c9"
  },
  {
    "url": "build/app/q6otl59s.js",
    "revision": "7d85b82283b642935ade790f43139bd8"
  },
  {
    "url": "build/app/qe7qrrbr.js",
    "revision": "9182d3cec6eeebc1549cf6f1c9844cb3"
  },
  {
    "url": "build/app/qmvcz20j.js",
    "revision": "a9b02f74d6d0c4d435c95a8be3bcfc48"
  },
  {
    "url": "build/app/r7i8v4zs.js",
    "revision": "3a90396cf787c69fdf931d1708aa3601"
  },
  {
    "url": "build/app/rdmsk5gs.js",
    "revision": "3d1381561675bdf2c7ff38947e4ca814"
  },
  {
    "url": "build/app/rkifqqn2.js",
    "revision": "6606c9062b5c2ca5abbb406f457494f8"
  },
  {
    "url": "build/app/rwqjr0oz.js",
    "revision": "b21cbf6eb2e6d4cc97f44447d418e9b7"
  },
  {
    "url": "build/app/rxjhmtms.js",
    "revision": "4160b67dc55399e85fb685e2eee4e354"
  },
  {
    "url": "build/app/rxyepr6f.js",
    "revision": "77a73071af7b1121e37855642c87fc62"
  },
  {
    "url": "build/app/s5hcnrte.js",
    "revision": "47c1ddbaeb6e6d8650869754d640a529"
  },
  {
    "url": "build/app/seo3r9hs.js",
    "revision": "b64600c3a0b02153b6872e5fe81f9928"
  },
  {
    "url": "build/app/sfnqg2ws.js",
    "revision": "c2495ac64e96553e31e5609d360ce8c4"
  },
  {
    "url": "build/app/sg6wf7sn.js",
    "revision": "e5751594fff7aebbef9ffedaba2611f7"
  },
  {
    "url": "build/app/smppgfon.js",
    "revision": "9cad0b67d84383478ab8d440fd9698cb"
  },
  {
    "url": "build/app/srslu1fx.js",
    "revision": "422c4aa1148e3137d918f1b62d731f24"
  },
  {
    "url": "build/app/tcrga0c0.js",
    "revision": "6880dceff2f7bec347d7dc6d1ae2e25b"
  },
  {
    "url": "build/app/tk3s6ete.js",
    "revision": "466ecb2874efe9aa9d82f68ab640f057"
  },
  {
    "url": "build/app/ua8upbsa.js",
    "revision": "f5f36a5a2a64e92be6e41ffb561f9015"
  },
  {
    "url": "build/app/ugqfvbbl.js",
    "revision": "7f2e8434451e0e622e0f34c0ea90b419"
  },
  {
    "url": "build/app/ujmm1foe.js",
    "revision": "698cb335496e23a2112909bfbb90e911"
  },
  {
    "url": "build/app/uqkghafx.js",
    "revision": "edb48082a143a9186c0f6439197b36c1"
  },
  {
    "url": "build/app/uqpoqnek.js",
    "revision": "eebbdaba6af4a46634c5f3fc5144ecca"
  },
  {
    "url": "build/app/usakxnwk.js",
    "revision": "bd2ba882697c20df86fa1c7807dc6def"
  },
  {
    "url": "build/app/v8zmshmi.js",
    "revision": "55134cc0f400004ddb6c72cf7bf8d7dd"
  },
  {
    "url": "build/app/vbsax5lp.js",
    "revision": "1301ec975fa0a2ca38dc987687643954"
  },
  {
    "url": "build/app/vbsax5lp.sc.js",
    "revision": "56c2f6ea24589efd0329dcb73714cfe5"
  },
  {
    "url": "build/app/vendor/swiper.js",
    "revision": "f44ae3024a4323c4f98e7b69cefeee47"
  },
  {
    "url": "build/app/vsweaep6.js",
    "revision": "0074c096fe9d29e3eb0722ec08a88b7e"
  },
  {
    "url": "build/app/vzll1w5u.js",
    "revision": "4ad06daaa4948db0a3b627bbecf674c8"
  },
  {
    "url": "build/app/vznvgzbd.js",
    "revision": "1d0bfb9980f2a634ad7b94f0d02aa5b4"
  },
  {
    "url": "build/app/w31gosto.js",
    "revision": "8498d4d485b6ce14ead77580099f3717"
  },
  {
    "url": "build/app/wf2grord.js",
    "revision": "aa2176ce3d76d16df6abc95eca749b99"
  },
  {
    "url": "build/app/wjkwfxo2.js",
    "revision": "578da9b10c8e7570ec006ee7a7fb6982"
  },
  {
    "url": "build/app/wqjh6xpe.js",
    "revision": "7e798a206c3883445067b48c2f40ce8d"
  },
  {
    "url": "build/app/wr36ot1l.js",
    "revision": "0ade370122f2d745d515b95d19ad0dd8"
  },
  {
    "url": "build/app/wyhd1civ.js",
    "revision": "9d19bafcf1558b91e2d1941ff4b7954a"
  },
  {
    "url": "build/app/x4wcukxi.js",
    "revision": "af19f28448f4c865c5bc821f23d0a074"
  },
  {
    "url": "build/app/xbqgikgi.js",
    "revision": "8696d70b0798fae4f28bad262e2e8daf"
  },
  {
    "url": "build/app/xfutog2h.js",
    "revision": "43f138afdfb658f9b9185f57f72375a9"
  },
  {
    "url": "build/app/ybhz2j0x.js",
    "revision": "141dbf2728af616604bc7aa00005e4fe"
  },
  {
    "url": "build/app/ylkzzuvi.js",
    "revision": "1d44d1b027d42dffdde225b2d1761fca"
  },
  {
    "url": "build/app/ylmz6o3x.js",
    "revision": "9782c987331b1c1b63c7b2e1b5a9165f"
  },
  {
    "url": "build/app/yqxeomh1.js",
    "revision": "cb380d2e4a8885456d868986fe881afe"
  },
  {
    "url": "build/app/yyyqggyi.js",
    "revision": "85ce8db40643e94e65202d59ead24e01"
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
    "revision": "d6dd3db065045aa2dd24ef2e2e63b76e"
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
    "url": "sw.js",
    "revision": "aea8a02ed9ed831525b95bd9e2345c8a"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
