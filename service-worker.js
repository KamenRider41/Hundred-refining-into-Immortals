/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "22941cd0b1995bfb585375841d200885"
  },
  {
    "url": "assets/css/0.styles.5bd8dc3d.css",
    "revision": "eb50d97bfae08b94edac0cbd118bab4e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.87460a67.js",
    "revision": "bfc28d34d2caa56d24974d9f9f6d590a"
  },
  {
    "url": "assets/js/11.a8a97867.js",
    "revision": "a1cfb61ffee16b5ec4e6fcf7bcd639fa"
  },
  {
    "url": "assets/js/12.3c120ecd.js",
    "revision": "108ca8c8dc85902f13693ac7ea2a2774"
  },
  {
    "url": "assets/js/13.1b9dd9b1.js",
    "revision": "78540e9f3469b2f6675435dc754818cf"
  },
  {
    "url": "assets/js/14.18f5eb3b.js",
    "revision": "900a3577a0f43f995eeb6f0921865e31"
  },
  {
    "url": "assets/js/15.67688b32.js",
    "revision": "7caafed371a6c4444b7edd747062be23"
  },
  {
    "url": "assets/js/16.e3f3a28c.js",
    "revision": "df0c11c20eb42548c70a337ed35b8366"
  },
  {
    "url": "assets/js/17.2a222e0e.js",
    "revision": "2ccf2303721aa3edf209182b8a6d0891"
  },
  {
    "url": "assets/js/18.b45aec24.js",
    "revision": "4bc5e8eb530a01a21f66ac24a48b3ba7"
  },
  {
    "url": "assets/js/19.a8ced1a4.js",
    "revision": "c1b56cfce7255a2d25771201f4fa3539"
  },
  {
    "url": "assets/js/2.75968125.js",
    "revision": "a263eef8e6aa83f9846031450308d44d"
  },
  {
    "url": "assets/js/20.80b86273.js",
    "revision": "14049b4cc9f657fcda347c231a659d9c"
  },
  {
    "url": "assets/js/21.1202dbdf.js",
    "revision": "0a9ffedc6b9babef937cc29c640a6c53"
  },
  {
    "url": "assets/js/22.fd12c5bb.js",
    "revision": "48040581f453d8fc3aae1da08ec132a9"
  },
  {
    "url": "assets/js/23.70bd34a4.js",
    "revision": "f02e1fff97d7cfad7fe4b8f11a6b2273"
  },
  {
    "url": "assets/js/24.3039c124.js",
    "revision": "ab65883778b3e77bcb3ca2b0c48831be"
  },
  {
    "url": "assets/js/25.51ff4fd6.js",
    "revision": "48c1ff04fb285a8b10d0b2fbe646a49f"
  },
  {
    "url": "assets/js/26.504ec63f.js",
    "revision": "ca65e543880acfd1203bb3720fb8367e"
  },
  {
    "url": "assets/js/27.b828db12.js",
    "revision": "63d8cf6a772572a9e9e58c33738657e1"
  },
  {
    "url": "assets/js/28.f4be1181.js",
    "revision": "7f1594d9952847224b3b03e01472533a"
  },
  {
    "url": "assets/js/29.fa0841f4.js",
    "revision": "8716d54b8dd699d70f8adc7be8cf8e2f"
  },
  {
    "url": "assets/js/3.6aa9ba9a.js",
    "revision": "05fc040d25bf0fa6c97b74d09baf5548"
  },
  {
    "url": "assets/js/30.cb2100b2.js",
    "revision": "3cc7841a2bbef1ca6512b1bfda4b75ad"
  },
  {
    "url": "assets/js/31.d0afc589.js",
    "revision": "a5f63f436bb8583a563e3b3f08596aae"
  },
  {
    "url": "assets/js/32.9ff2cb3e.js",
    "revision": "ac41a2f5b739945c77680844656e9f28"
  },
  {
    "url": "assets/js/33.38a861a2.js",
    "revision": "95d7cf7cfd5b187fde420c9fb4964000"
  },
  {
    "url": "assets/js/34.307ad15f.js",
    "revision": "9f55030b4c3611c080147a617450ccd9"
  },
  {
    "url": "assets/js/35.1349e407.js",
    "revision": "d950417eefa17a82a00325d9940b84c5"
  },
  {
    "url": "assets/js/36.c34298fe.js",
    "revision": "6ef815040dc79a8cb120f5df8c9a6d53"
  },
  {
    "url": "assets/js/37.790d5a3c.js",
    "revision": "cb8bbebcab376e5571a7fba09f802268"
  },
  {
    "url": "assets/js/38.84a8e6e0.js",
    "revision": "4c2cfdc108c7560af6b847294b479de0"
  },
  {
    "url": "assets/js/39.f2e6082d.js",
    "revision": "d548a3f9d736204c094344aaf6e2c3bd"
  },
  {
    "url": "assets/js/4.19449fff.js",
    "revision": "35b90776854e76fd7e0a5c31840dec1a"
  },
  {
    "url": "assets/js/40.bedb0ca4.js",
    "revision": "74adb652cc6a2f4c915ff8e481ce0750"
  },
  {
    "url": "assets/js/41.cb1ada15.js",
    "revision": "6237e63be95d4946ec96ff6ab1872445"
  },
  {
    "url": "assets/js/42.0cfe506c.js",
    "revision": "067964d592d5334ca36ed44d86fe791e"
  },
  {
    "url": "assets/js/43.8b7feacc.js",
    "revision": "209e1944ed1ec8426a0e0261a1ed11ac"
  },
  {
    "url": "assets/js/44.2627a6b6.js",
    "revision": "0ee95cb7f842dfe1752fa7770ce696ae"
  },
  {
    "url": "assets/js/45.324c06b4.js",
    "revision": "22d720ab16e4b0fe7f7db38a4eb1759c"
  },
  {
    "url": "assets/js/46.66f94539.js",
    "revision": "5fcdb12e6ef7967cc050a7f350e35b06"
  },
  {
    "url": "assets/js/47.b144fec6.js",
    "revision": "903b77f102a64df81a0eb14f0b98532f"
  },
  {
    "url": "assets/js/48.1a180565.js",
    "revision": "16f44f35c9ecf0939d3590e5a90aa244"
  },
  {
    "url": "assets/js/49.ddb31aeb.js",
    "revision": "64ad4dc4081b80bbe09d77a57226feb9"
  },
  {
    "url": "assets/js/5.a9dd5540.js",
    "revision": "a0de0aaea08d864ae2bf317a27d4392e"
  },
  {
    "url": "assets/js/50.3912e2c1.js",
    "revision": "d97391f679d4ef4711e2274349bde335"
  },
  {
    "url": "assets/js/51.22755c00.js",
    "revision": "1d687d877e7e22aa7edf58dd25355db1"
  },
  {
    "url": "assets/js/52.568c62bd.js",
    "revision": "4dff2d8408189a3a386e5f624d010669"
  },
  {
    "url": "assets/js/53.03eeeaca.js",
    "revision": "1be8ba0b04d682e90231dbe495bc0ebd"
  },
  {
    "url": "assets/js/54.65603fb1.js",
    "revision": "36469989207e07081196cf5fde10e638"
  },
  {
    "url": "assets/js/55.3c860a1a.js",
    "revision": "70daf0f40fe84b2736080543fe8f02ff"
  },
  {
    "url": "assets/js/56.dcac6e09.js",
    "revision": "f9285447ae3d43b04380c21de04488b7"
  },
  {
    "url": "assets/js/57.81245aa6.js",
    "revision": "0c8b07d2eca1d52855e693aa2fff3155"
  },
  {
    "url": "assets/js/58.3548b3fc.js",
    "revision": "d84ab6e804e4a5edbd6def39e80f39ec"
  },
  {
    "url": "assets/js/59.b70ff938.js",
    "revision": "1dd7ecfef976331182846ab70a7c9571"
  },
  {
    "url": "assets/js/6.c4ef703b.js",
    "revision": "d50a6461993d6ac138bfbfbc469718f8"
  },
  {
    "url": "assets/js/60.54959e8e.js",
    "revision": "011eae9db9964de66d92c3f5e738ade5"
  },
  {
    "url": "assets/js/61.9574d37d.js",
    "revision": "8c35df88bda7b56deebac29882d02a7a"
  },
  {
    "url": "assets/js/62.50ad37e7.js",
    "revision": "a1c3ec40a13131acb124654c9d1ff7e6"
  },
  {
    "url": "assets/js/63.5e509b76.js",
    "revision": "1db057098197585652ad4c5dc5a5a5a0"
  },
  {
    "url": "assets/js/64.fc588507.js",
    "revision": "f45924ab42979cfb624e51472093ab6e"
  },
  {
    "url": "assets/js/65.afdde58c.js",
    "revision": "cc6e818e8542fb4418b440739c2b5dfc"
  },
  {
    "url": "assets/js/66.c1bcbe18.js",
    "revision": "129c99c0a50f18137995c2085d756847"
  },
  {
    "url": "assets/js/67.db82fdee.js",
    "revision": "b7423d5c65c7f5b9bde83ba43e42a056"
  },
  {
    "url": "assets/js/68.547c6b01.js",
    "revision": "ec41a0a06a9297e4505298fbf90250fd"
  },
  {
    "url": "assets/js/69.5485b583.js",
    "revision": "a909a1b178443511c5e96736fd91c645"
  },
  {
    "url": "assets/js/7.7751eb02.js",
    "revision": "d3fb19e6322540d5905a65683413a124"
  },
  {
    "url": "assets/js/70.e79e045a.js",
    "revision": "e34d911f6edf63a9a1ac012cef16a3f7"
  },
  {
    "url": "assets/js/71.a5ebd2c8.js",
    "revision": "1af9864ab8936ee74e284a02844732d0"
  },
  {
    "url": "assets/js/72.a10449b6.js",
    "revision": "789d0194bca2730f8839815dfc904be7"
  },
  {
    "url": "assets/js/73.2714a3ec.js",
    "revision": "8479ae837054a94452e6a255c28f9445"
  },
  {
    "url": "assets/js/74.9481b170.js",
    "revision": "43614eabfb368542e526a1481c716723"
  },
  {
    "url": "assets/js/75.0e058528.js",
    "revision": "db95a70fdd0ac116d3dbf13f104eb24a"
  },
  {
    "url": "assets/js/76.a7a0fb7c.js",
    "revision": "184ff28acae9bf00530775260472e656"
  },
  {
    "url": "assets/js/77.76e4da6b.js",
    "revision": "25467150dd58889227268db0ee661796"
  },
  {
    "url": "assets/js/78.75f15171.js",
    "revision": "67fd3482cb77471ed52bf921b21fdda5"
  },
  {
    "url": "assets/js/79.93be61e7.js",
    "revision": "5e8b06924332886b9378ffe530152956"
  },
  {
    "url": "assets/js/8.d6a9de4c.js",
    "revision": "7dedeb54e834dd4d16097a1fd974af58"
  },
  {
    "url": "assets/js/80.0739cadd.js",
    "revision": "4b4fdfdf6b90a9474ec0045e7754d0a9"
  },
  {
    "url": "assets/js/81.830b16ef.js",
    "revision": "e97018b1695025df6ef692cf105e2fa7"
  },
  {
    "url": "assets/js/82.2f099d2f.js",
    "revision": "c4bd82eb567e72652ed2f1d29eef6c95"
  },
  {
    "url": "assets/js/83.1c599310.js",
    "revision": "816f22ef1c8422fb5e355b44d543a6e0"
  },
  {
    "url": "assets/js/84.3d2255cd.js",
    "revision": "63a087e70fc8786148439c5d3a34e66c"
  },
  {
    "url": "assets/js/85.bc5752c4.js",
    "revision": "9f0d470c0918af281b1a53b85c4b19d3"
  },
  {
    "url": "assets/js/86.302df6fc.js",
    "revision": "f49cfe2e3c824f30d76a397d3cdb6ec8"
  },
  {
    "url": "assets/js/9.97ce9281.js",
    "revision": "f8da5fae3f73a2a00d62b2d21316dbcd"
  },
  {
    "url": "assets/js/app.da1455f9.js",
    "revision": "9c197137f372caff367982104f5eef97"
  },
  {
    "url": "background.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "git1.png",
    "revision": "f8c0a19144debd2148589ab4f547d2c9"
  },
  {
    "url": "index.html",
    "revision": "8f923a36a282fc4234d08ac7c0f396fa"
  },
  {
    "url": "js.gif",
    "revision": "ca0c405bd2b0389ba323ede60395ea2a"
  },
  {
    "url": "logo.jpg",
    "revision": "0a94a359e0c4276230f1ecfc2cfcdb69"
  },
  {
    "url": "nav.png",
    "revision": "575bb6fe7f86e4f4f58097478ed9a3bb"
  },
  {
    "url": "partDocs/aboutme/aboutme.html",
    "revision": "35394351e8ee700330894c4b20133c04"
  },
  {
    "url": "partDocs/aboutme/biography.html",
    "revision": "164cc8e37553a2bfc22e43f71745b183"
  },
  {
    "url": "partDocs/aboutme/thanks.html",
    "revision": "9911a8bdca21cf7d64f7b86098446564"
  },
  {
    "url": "partDocs/css/css.html",
    "revision": "db2a3ab5bd8b48dbcce556dda4a8d598"
  },
  {
    "url": "partDocs/css/mianshi1.html",
    "revision": "08457fa50c1dfcbf807fb372cae70c11"
  },
  {
    "url": "partDocs/css/mianshi2.html",
    "revision": "e4bc2c9feca1a54d411224a1befaa4da"
  },
  {
    "url": "partDocs/html/html.html",
    "revision": "474fbd8259351eacdfecc5145c2e8178"
  },
  {
    "url": "partDocs/html/mianshi1.html",
    "revision": "904bae48bcf788d073035004a1b60075"
  },
  {
    "url": "partDocs/html/mianshi2.html",
    "revision": "fe6b2c6c373a78324ddb0b7aeeae2ecc"
  },
  {
    "url": "partDocs/html/mianshi3.html",
    "revision": "2eceb7cd7c66a1fdf77ada78c3801760"
  },
  {
    "url": "partDocs/html/mianshi4.html",
    "revision": "ab8f2b7753bedb3ff4c2f7b7223fcfff"
  },
  {
    "url": "partDocs/html/sanlan.html",
    "revision": "772c11f1fa68311037ba5ac0111b1a72"
  },
  {
    "url": "partDocs/internship/internship.html",
    "revision": "edd1b8ecdc312431a347a497cfbc8238"
  },
  {
    "url": "partDocs/internship/study/charles.html",
    "revision": "7a8f37b383fde49df40601369bb773dd"
  },
  {
    "url": "partDocs/internship/study/flutter/doctor.html",
    "revision": "a2532c333c3e69e22badef546f6f0fe3"
  },
  {
    "url": "partDocs/internship/study/flutter/flutter.html",
    "revision": "21b4372be822f80df4af69a95712a3ad"
  },
  {
    "url": "partDocs/internship/study/flutter/hello.html",
    "revision": "8a21fccbcd0594ef3258ea91187c86af"
  },
  {
    "url": "partDocs/internship/study/flutter/widget.html",
    "revision": "17a711d5c880aa69c1222dbea8190329"
  },
  {
    "url": "partDocs/internship/study/git/long/1.html",
    "revision": "8af3a566fef45ceaf536b56e5ea28a9b"
  },
  {
    "url": "partDocs/internship/study/git/long/2.html",
    "revision": "57bcf17d755a648da9b42fa03584a32e"
  },
  {
    "url": "partDocs/internship/study/git/main/gaoji.html",
    "revision": "315531a9453b7462b0a06e651bf0e90f"
  },
  {
    "url": "partDocs/internship/study/git/main/huati.html",
    "revision": "657ece8adb30bbdca141541db329a244"
  },
  {
    "url": "partDocs/internship/study/git/main/jichu.html",
    "revision": "3f17a280fac02ccf1658c7d0420232d9"
  },
  {
    "url": "partDocs/internship/study/git/main/yidong.html",
    "revision": "516845ce83c08e709b347e0a700dc4eb"
  },
  {
    "url": "partDocs/internship/study/git/main/zaxiang.html",
    "revision": "eb586b22c0fb700acf314d06423c9efd"
  },
  {
    "url": "partDocs/internship/study/git/peizhi.html",
    "revision": "83dcbecedae4da4ad62670e56954e39e"
  },
  {
    "url": "partDocs/internship/study/git/ziliao.html",
    "revision": "ed798f924f824871d660738bfe5ba888"
  },
  {
    "url": "partDocs/internship/study/prosemirror/prosemirror.html",
    "revision": "bc97d0717da7157b7f45bb7c38e02cb9"
  },
  {
    "url": "partDocs/internship/study/prosemirror/rumen.html",
    "revision": "ecdd8330f1d33e0cf34fe0fca309a6a7"
  },
  {
    "url": "partDocs/internship/study/react/compose.html",
    "revision": "fd387343c9dc90f9bd55d7aede5df94a"
  },
  {
    "url": "partDocs/internship/study/react/react.html",
    "revision": "bad34cba8ebeef7d44507f211a9760ea"
  },
  {
    "url": "partDocs/internship/study/react/rumen.html",
    "revision": "87ae9177ff00bd84425b8d1e559bffb5"
  },
  {
    "url": "partDocs/internship/study/typescript/jinjie.html",
    "revision": "ef8d1ea7ead8ffa289151e0b6e7fc4c0"
  },
  {
    "url": "partDocs/internship/study/typescript/rumen.html",
    "revision": "1fa8e38849e7ce7fecf62106503fb715"
  },
  {
    "url": "partDocs/internship/study/typescript/type.html",
    "revision": "ce6bf42a78d6c233252fd6f9685a1a30"
  },
  {
    "url": "partDocs/internship/write/bootcamp.html",
    "revision": "79b8ff2cf20ff3cdbe044f6717ef4123"
  },
  {
    "url": "partDocs/internship/write/bug/bug.html",
    "revision": "9b59d102f96938a790576821d29a340e"
  },
  {
    "url": "partDocs/internship/write/bug/flutter.html",
    "revision": "712cc170e08be7ff31c8d6bfaf6d40b0"
  },
  {
    "url": "partDocs/internship/write/bug/git.html",
    "revision": "993eace20f6bf3f3a0b55e2ace9a5217"
  },
  {
    "url": "partDocs/internship/write/bug/other.html",
    "revision": "9e67d601b2d5352a58a2be09093c14fa"
  },
  {
    "url": "partDocs/internship/write/bug/work.html",
    "revision": "5261c5d58800937cd66d6aafd08adc0c"
  },
  {
    "url": "partDocs/internship/write/question.html",
    "revision": "8db4f1c5d3ad1835d8c5007a1f660139"
  },
  {
    "url": "partDocs/internship/write/vscode.html",
    "revision": "3111226327b63aaf023552fa69e7ccfe"
  },
  {
    "url": "partDocs/javascript/es10.html",
    "revision": "7a370eb0ebdbe118249d6dda1f92af3b"
  },
  {
    "url": "partDocs/javascript/es11.html",
    "revision": "21c1e3d3108f880fe55317fa72e8573b"
  },
  {
    "url": "partDocs/javascript/es6.html",
    "revision": "f4f0ccd36b14d565cd1c9dd8bae12eb2"
  },
  {
    "url": "partDocs/javascript/es7.html",
    "revision": "a5c1077be56ab509fa3b2a8cb530e8e7"
  },
  {
    "url": "partDocs/javascript/es8.html",
    "revision": "7855049c6b0ef047f9956fea66b77750"
  },
  {
    "url": "partDocs/javascript/es9.html",
    "revision": "abf4920526622d5bf048c34eb4c77bbe"
  },
  {
    "url": "partDocs/javascript/javascript.html",
    "revision": "d05eea0f7278d2f2ab20c8b91a029938"
  },
  {
    "url": "partDocs/javascript/mianshi1.html",
    "revision": "c25e471d5e440471b9d7bc8ccf7a0f4c"
  },
  {
    "url": "partDocs/javascript/mianshi2.html",
    "revision": "0f03b8c2c90c2d554cb3f3da24b32c93"
  },
  {
    "url": "partDocs/javascript/shousi.html",
    "revision": "c5fc9887a8442ab06cd99ae1addf28e3"
  },
  {
    "url": "partDocs/leetcode.html",
    "revision": "2c0a3f060093d18fc8851a849e445cac"
  },
  {
    "url": "partDocs/react/compose.html",
    "revision": "c1973a06c4f65dc7a902f8c0c9e7911b"
  },
  {
    "url": "partDocs/react/react.html",
    "revision": "c46df3ef6e26e666f0f20aaf035ee64c"
  },
  {
    "url": "partDocs/react/rumen.html",
    "revision": "1db06d978dfaf77294fdae93e05256a4"
  },
  {
    "url": "partDocs/vue/mianshi1.html",
    "revision": "73934803e8125fe81a2793b88ccdb45d"
  },
  {
    "url": "partDocs/vue/mianshi2.html",
    "revision": "231814eacce7d68c74aee20fa84f5135"
  },
  {
    "url": "partDocs/vue/mianshi3.html",
    "revision": "1e5070df605151e41bbe1d42c1c2bbf0"
  },
  {
    "url": "partDocs/vue/mianshi4.html",
    "revision": "dc840de73360afe3fa687ff5079d2568"
  },
  {
    "url": "partDocs/vue/vue.html",
    "revision": "b5ca4536e6300e7a3be794c0b2535340"
  },
  {
    "url": "partDocs/worklog/before/before.html",
    "revision": "87e8167619884e562fb46e1a783767e6"
  },
  {
    "url": "partDocs/worklog/before/css.html",
    "revision": "25cd12d4a71c5da8f78abe96c87357a3"
  },
  {
    "url": "partDocs/worklog/before/research/3dqam.html",
    "revision": "12c9c1c039e26146f8a33baffe668e4d"
  },
  {
    "url": "partDocs/worklog/before/research/chua.html",
    "revision": "9ea8a86087dffb4124b7adfec9afe3d5"
  },
  {
    "url": "partDocs/worklog/before/research/ml.html",
    "revision": "e604b39221c569e1478668e551da6f5a"
  },
  {
    "url": "partDocs/worklog/before/research/research.html",
    "revision": "bad7ae26c1737bdaaa05d3cf40d898da"
  },
  {
    "url": "partDocs/worklog/worklog.html",
    "revision": "b9429cb4dc88447c075e9800d342a21e"
  },
  {
    "url": "pm1.png",
    "revision": "42b04c457f9a81eea1f6348300550b04"
  },
  {
    "url": "pm2.png",
    "revision": "a3089a54e0e21ee2b81aed5148a31908"
  },
  {
    "url": "pm3.png",
    "revision": "6f73ae2bd805d717442562b26009fcb3"
  },
  {
    "url": "pm4.png",
    "revision": "f5269a7980766fd3057801ef62b7c110"
  },
  {
    "url": "research/3dqam/ans.jpg",
    "revision": "20e5b0b0cd425d1ef5aac4a0a13e110e"
  },
  {
    "url": "research/3dqam/biao.png",
    "revision": "de575b58b4f02c9d3955cf130d8d9a33"
  },
  {
    "url": "research/3dqam/gongshi.png",
    "revision": "f2569b35289ea53fd3fbd96eb7503d09"
  },
  {
    "url": "research/3dqam/kuangjia.jpg",
    "revision": "e738e0f25b3d4c44f31c8af02e06c07c"
  },
  {
    "url": "research/3dqam/para.jpg",
    "revision": "132d2628f8cbfe1173d84292b62edfee"
  },
  {
    "url": "research/3dqam/rotation.jpg",
    "revision": "b053a1a4a722554d35caab1a692b9df0"
  },
  {
    "url": "research/3dqam/safe1.jpg",
    "revision": "c42a72e43088d955a3a4089ef94a7d12"
  },
  {
    "url": "research/3dqam/safe2.jpg",
    "revision": "1315b73ab42588404084329e6a35d425"
  },
  {
    "url": "research/3dqam/snr.jpg",
    "revision": "0083f55d5df2b02e1d5dfc802d39ed31"
  },
  {
    "url": "research/3dqam/three-con.jpg",
    "revision": "89aa94d95c5eb297691763516191a7fe"
  },
  {
    "url": "research/3dqam/threetotwo.jpg",
    "revision": "ff2a044ee9b16fcaa295fc582bb2bb88"
  },
  {
    "url": "research/3dqam/zhuangzhi.jpg",
    "revision": "3afeb5fc0892d6ba56dac5df54283ebd"
  },
  {
    "url": "research/chua/3.6a.png",
    "revision": "1b7f2525735112e474f68816e94de23a"
  },
  {
    "url": "research/chua/3.6b.png",
    "revision": "56cf817129d68d86d8af0153248a4dcf"
  },
  {
    "url": "research/chua/3.7a.png",
    "revision": "66a8405eaf27cd47534b7789aefa221a"
  },
  {
    "url": "research/chua/3.7b.png",
    "revision": "d34e7891abe30f264c56d6c3ceef2334"
  },
  {
    "url": "research/chua/3.8a.png",
    "revision": "a00912537717d12c387104fd0af6b3f1"
  },
  {
    "url": "research/chua/3.8b.png",
    "revision": "6ccf7dc86e881d1ae6c0e151b5a7cfec"
  },
  {
    "url": "research/chua/3.9a.png",
    "revision": "f14fb7e28a63276711ff042a82efa741"
  },
  {
    "url": "research/chua/3.9b.png",
    "revision": "6650a213f85ea51a5416700019e50c38"
  },
  {
    "url": "research/chua/chua-double.jpg",
    "revision": "b64361391f78cddff78f4d16c1f4be1c"
  },
  {
    "url": "research/chua/chua-shiyi.png",
    "revision": "6e77786d5de12493089fc1c13b682d02"
  },
  {
    "url": "research/chua/chua-single.png",
    "revision": "8b16687334089421a96beaec2b73d50c"
  },
  {
    "url": "research/chua/chua.png",
    "revision": "84bc7bde893c2ef07bce7d422ef492e8"
  },
  {
    "url": "research/chua/NI-chua.png",
    "revision": "79fb4b8b75c8cd464d45eb8a14212bf7"
  },
  {
    "url": "research/ml/deep.jpg",
    "revision": "3b426d64e1f2064d272f6f88e83a32eb"
  },
  {
    "url": "research/ml/ml-snr.png",
    "revision": "edfe73b9e7b5ef40cbba1920c2d78d30"
  },
  {
    "url": "research/ml/ml-time.png",
    "revision": "da158f1298ba6adbf4b08c1dea86451d"
  },
  {
    "url": "research/ml/net_roc1.png",
    "revision": "97acbc150dacd24ee2680217aaa1e437"
  },
  {
    "url": "research/ml/net_roc2.png",
    "revision": "8c347af67dde7d7d356cc2cf41edbce5"
  },
  {
    "url": "research/ml/net.jpg",
    "revision": "466fdee277793b71ad32e33b4ebcb910"
  },
  {
    "url": "research/ml/nn_confusion.jpg",
    "revision": "295b01194856e829a4be5741f2d0e5ef"
  },
  {
    "url": "research/ml/nn_pr.png",
    "revision": "b2786efe32eb33cc5e3908fbbeeb215e"
  },
  {
    "url": "research/ml/svm_confusion.jpg",
    "revision": "60484e334bf3115141423d581e238745"
  },
  {
    "url": "research/ml/svm_pr.png",
    "revision": "0f755ae5edd928b6e6df2444628fc7c9"
  },
  {
    "url": "research/ml/svm_roc1.png",
    "revision": "b5f980f72d33f296cdccd8c0f3378601"
  },
  {
    "url": "research/ml/svm_roc2.png",
    "revision": "3f644c7badd195de6532c91824748f84"
  },
  {
    "url": "research/ml/tree_confusion.jpg",
    "revision": "6c47e87c8d62a2298514c01025da2c6f"
  },
  {
    "url": "research/ml/tree_pr.png",
    "revision": "4253f26ec66cfd706afad7994e8ad18d"
  },
  {
    "url": "research/ml/tree_roc1.png",
    "revision": "db9d777c1b810867a8d02701bde879ca"
  },
  {
    "url": "research/ml/tree_roc2.png",
    "revision": "0ffc5b5dad1303750cca9dece031f818"
  },
  {
    "url": "research/sum.jpg",
    "revision": "6277d9bfbd9bbd6cd96dfaca1e9c0491"
  },
  {
    "url": "sakura.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "weixin.jpg",
    "revision": "08b19f516d1809bf0093708d7c046a53"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "395fecd12256a4491335e3470e8a55ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
