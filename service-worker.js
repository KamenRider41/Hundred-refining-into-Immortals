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
    "revision": "0bb2efd49437ccb320ea7b8641d1a6ef"
  },
  {
    "url": "assets/css/0.styles.3a97788b.css",
    "revision": "8a1442170f0deb8c0769bd975ab25b7e"
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
    "url": "assets/js/16.3bb107ac.js",
    "revision": "9b068369842c6ddfb0fe325573de49e5"
  },
  {
    "url": "assets/js/17.2a222e0e.js",
    "revision": "2ccf2303721aa3edf209182b8a6d0891"
  },
  {
    "url": "assets/js/18.ce914eac.js",
    "revision": "050a4a6282ba1fb0f7868f5686538bb3"
  },
  {
    "url": "assets/js/19.748144ef.js",
    "revision": "32cdea11573623265b74ffacf0556231"
  },
  {
    "url": "assets/js/2.b02a5763.js",
    "revision": "a263eef8e6aa83f9846031450308d44d"
  },
  {
    "url": "assets/js/20.a1ef2ba8.js",
    "revision": "2ed50e1ce0e0ed61ee1150e8bf0f85dd"
  },
  {
    "url": "assets/js/21.f2d8373a.js",
    "revision": "9785590c1fefb244eaffbe269d242795"
  },
  {
    "url": "assets/js/22.c78ca343.js",
    "revision": "94cc648e386652240ab1ef06f1d3fba1"
  },
  {
    "url": "assets/js/23.38ab0fac.js",
    "revision": "283da5afb8f0b05a7ce69bfc158ad7a4"
  },
  {
    "url": "assets/js/24.fec83c8f.js",
    "revision": "f70e5f53eb5a09675e4e62b3d83e4ccf"
  },
  {
    "url": "assets/js/25.312da697.js",
    "revision": "0ef28006f598076e4b9158fdcb9ba7aa"
  },
  {
    "url": "assets/js/26.504ec63f.js",
    "revision": "ca65e543880acfd1203bb3720fb8367e"
  },
  {
    "url": "assets/js/27.47081dee.js",
    "revision": "b7b1cee21c3f741994f29a19b2ba47b0"
  },
  {
    "url": "assets/js/28.883717d1.js",
    "revision": "f1fc5287000452e523845e364b828ea8"
  },
  {
    "url": "assets/js/29.8996d6f9.js",
    "revision": "95c050ce889d1b692c79dfde86065078"
  },
  {
    "url": "assets/js/3.6aa9ba9a.js",
    "revision": "05fc040d25bf0fa6c97b74d09baf5548"
  },
  {
    "url": "assets/js/30.0f0491c1.js",
    "revision": "53b8854bf5df3d8b7f63b4de2f22417e"
  },
  {
    "url": "assets/js/31.4e097ab7.js",
    "revision": "6642aea0edc0f8ec32abed5682270fe5"
  },
  {
    "url": "assets/js/32.53f96c74.js",
    "revision": "a8bc4bd8aef866bd4e2c4b6fed451ea2"
  },
  {
    "url": "assets/js/33.512d6872.js",
    "revision": "66d23c8c464625d1a7e0c7e7a0f48c29"
  },
  {
    "url": "assets/js/34.8235adb4.js",
    "revision": "a90ca2e4c95095f81acf040ddde960d2"
  },
  {
    "url": "assets/js/35.075a13e6.js",
    "revision": "984032f55ddd92e75af5b516864cc568"
  },
  {
    "url": "assets/js/36.9d25aff8.js",
    "revision": "93c7228a6c11a546aa30d6afde434627"
  },
  {
    "url": "assets/js/37.3963733a.js",
    "revision": "4cea2696042d122a262610c7747c55b9"
  },
  {
    "url": "assets/js/38.7182e07d.js",
    "revision": "33609b26a5c8a885fc50680b707fb5f7"
  },
  {
    "url": "assets/js/39.5b4ac4c5.js",
    "revision": "05c22aa6dafcaa8a7f266fa102ff64cc"
  },
  {
    "url": "assets/js/4.19449fff.js",
    "revision": "35b90776854e76fd7e0a5c31840dec1a"
  },
  {
    "url": "assets/js/40.5c98eb2a.js",
    "revision": "3060cf4cd5de01cf0f6ad9c69268d441"
  },
  {
    "url": "assets/js/41.cb1ada15.js",
    "revision": "6237e63be95d4946ec96ff6ab1872445"
  },
  {
    "url": "assets/js/42.b4838914.js",
    "revision": "cc6e3d5aabb1e65c5e0ace0566b0abb1"
  },
  {
    "url": "assets/js/43.2c5ac895.js",
    "revision": "2b826615307d589b43791aed81c47738"
  },
  {
    "url": "assets/js/44.64573f0c.js",
    "revision": "e5d4ace77a6eae58cc0051f87481e189"
  },
  {
    "url": "assets/js/45.54337cf1.js",
    "revision": "f1cf7043105e5ead88a5871e1ce45737"
  },
  {
    "url": "assets/js/46.6ca34229.js",
    "revision": "2e2052c36ce5dc2d35e6e8d22940a660"
  },
  {
    "url": "assets/js/47.b144fec6.js",
    "revision": "903b77f102a64df81a0eb14f0b98532f"
  },
  {
    "url": "assets/js/48.f2802459.js",
    "revision": "1d4cb8130b10b96e1bcb4d5c69358ebd"
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
    "url": "assets/js/50.1f8f8a7c.js",
    "revision": "245ef667cb8f8932a36ae5be65467c61"
  },
  {
    "url": "assets/js/51.2acd5e7e.js",
    "revision": "c8078e213e87c194d0beeca54571c5bd"
  },
  {
    "url": "assets/js/52.d63d2bb1.js",
    "revision": "8e8411417a39d0fc69d1a3076c926b6b"
  },
  {
    "url": "assets/js/53.3834bf1a.js",
    "revision": "907434f8a459450fe49ae209cc7fe5da"
  },
  {
    "url": "assets/js/54.780b2d62.js",
    "revision": "015c39e3062118a1e58a12f908cc98ee"
  },
  {
    "url": "assets/js/55.39ff99f0.js",
    "revision": "274312aa89cc7748993346bc01f69506"
  },
  {
    "url": "assets/js/56.dcac6e09.js",
    "revision": "f9285447ae3d43b04380c21de04488b7"
  },
  {
    "url": "assets/js/57.3100dc93.js",
    "revision": "f5b92e91844123db4a6d298764b28f0b"
  },
  {
    "url": "assets/js/58.1659b175.js",
    "revision": "86a0494bc9543d160567f18c429eea6e"
  },
  {
    "url": "assets/js/59.55a3cbb4.js",
    "revision": "5fb3f366237a3752c55c16747be1ac2a"
  },
  {
    "url": "assets/js/6.c4ef703b.js",
    "revision": "d50a6461993d6ac138bfbfbc469718f8"
  },
  {
    "url": "assets/js/60.b0df71e3.js",
    "revision": "462c5add61fb2f7a3169db1162781a48"
  },
  {
    "url": "assets/js/61.bb7eb196.js",
    "revision": "e6c3e067bce7ae0b1ab061b30b95c43f"
  },
  {
    "url": "assets/js/62.0f15e135.js",
    "revision": "2a996528f6812259396320ab82bc30de"
  },
  {
    "url": "assets/js/63.49c2f91f.js",
    "revision": "559a481cd3319e3769cd64a4a0e54c12"
  },
  {
    "url": "assets/js/64.ba09a7ec.js",
    "revision": "bcf797a504d8b4aa9096587188b078b7"
  },
  {
    "url": "assets/js/65.6fc94349.js",
    "revision": "44d6424523d626e16259d07dc85ea8ba"
  },
  {
    "url": "assets/js/66.2d3a720a.js",
    "revision": "6e99f8e780966b36b9ef61140e4c7b17"
  },
  {
    "url": "assets/js/67.80a3d612.js",
    "revision": "48f511862a2e807e9dea1dc244c1da86"
  },
  {
    "url": "assets/js/68.ada41c35.js",
    "revision": "f5df3ee5eaedfde9165946f8b967312a"
  },
  {
    "url": "assets/js/69.d8d7681f.js",
    "revision": "888d2e64b65eabd3b035d5b911e41d07"
  },
  {
    "url": "assets/js/7.7751eb02.js",
    "revision": "d3fb19e6322540d5905a65683413a124"
  },
  {
    "url": "assets/js/70.73d2a3e0.js",
    "revision": "978961915e742a2010427d8c3fd34a1c"
  },
  {
    "url": "assets/js/71.b6d59319.js",
    "revision": "bcbffb4bc2bfa161659e131fbd6d51c5"
  },
  {
    "url": "assets/js/72.a10449b6.js",
    "revision": "789d0194bca2730f8839815dfc904be7"
  },
  {
    "url": "assets/js/73.2a9e3542.js",
    "revision": "429c5d497b1fc7896e88dd5d2776a3e5"
  },
  {
    "url": "assets/js/74.f8dfac01.js",
    "revision": "1e7f552aa48c97fd9f4386d5ad0d8e90"
  },
  {
    "url": "assets/js/75.05630925.js",
    "revision": "b39a80f5f03da79f9d636dac1e7f1c37"
  },
  {
    "url": "assets/js/76.d5ce2588.js",
    "revision": "bc287a8b711302c9cfb69a3390ffddcc"
  },
  {
    "url": "assets/js/77.8f35a423.js",
    "revision": "0782fb97894e2a607792d484dc7ca557"
  },
  {
    "url": "assets/js/78.a8331a4f.js",
    "revision": "1235d885fdf20adec6328d552491a062"
  },
  {
    "url": "assets/js/79.b7f646ee.js",
    "revision": "ebed2de5686421b02e10fc7595e686ba"
  },
  {
    "url": "assets/js/8.d6a9de4c.js",
    "revision": "7dedeb54e834dd4d16097a1fd974af58"
  },
  {
    "url": "assets/js/80.f91e19df.js",
    "revision": "8d26cf94b79b73e530c90b9ac396d0e7"
  },
  {
    "url": "assets/js/81.830b16ef.js",
    "revision": "e97018b1695025df6ef692cf105e2fa7"
  },
  {
    "url": "assets/js/82.17674ea5.js",
    "revision": "026abe9dad31760acd24ef8306874c7a"
  },
  {
    "url": "assets/js/83.b5f3ef2f.js",
    "revision": "8ae23698e0ea61931ef081ba07fe377b"
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
    "url": "assets/js/9.ea21e9ba.js",
    "revision": "f8da5fae3f73a2a00d62b2d21316dbcd"
  },
  {
    "url": "assets/js/app.e3d28b7f.js",
    "revision": "193aacd1165f24a2dd824b21251942e1"
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
    "revision": "14951be2191cb960d0dd84c9353cced1"
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
    "revision": "2b0aaa25176c25864f76404a7f5be140"
  },
  {
    "url": "partDocs/aboutme/biography.html",
    "revision": "db7318174aeea17a580a8d4fab5e09c6"
  },
  {
    "url": "partDocs/aboutme/thanks.html",
    "revision": "b6ba881aad9f88994a08d200f0b0c391"
  },
  {
    "url": "partDocs/css/css.html",
    "revision": "20bf2cbc91a826f51e1e546ac80c4718"
  },
  {
    "url": "partDocs/css/mianshi1.html",
    "revision": "ed2b3d7f4daa7bc1c2e77a46a3ebb0d7"
  },
  {
    "url": "partDocs/css/mianshi2.html",
    "revision": "61d6b6d32d29282dd7d69e91fa353715"
  },
  {
    "url": "partDocs/html/html.html",
    "revision": "1135fdf3ccc82b9721f3340406f58004"
  },
  {
    "url": "partDocs/html/mianshi1.html",
    "revision": "031c71a0c54f45005f5bd35daa22a8d7"
  },
  {
    "url": "partDocs/html/mianshi2.html",
    "revision": "1ae6466bda66d81f62182617076cd291"
  },
  {
    "url": "partDocs/html/mianshi3.html",
    "revision": "1de2e32f6098619032ad32ccf57666b4"
  },
  {
    "url": "partDocs/html/mianshi4.html",
    "revision": "97d2b33b0177805fa97e37393806e31f"
  },
  {
    "url": "partDocs/html/sanlan.html",
    "revision": "5a3f7b35902fefa7430909a1a7bf7b9d"
  },
  {
    "url": "partDocs/internship/internship.html",
    "revision": "913f714dcac3e95ef4171c41f4c93570"
  },
  {
    "url": "partDocs/internship/study/charles.html",
    "revision": "099711442afd8165ded1b5e78f195163"
  },
  {
    "url": "partDocs/internship/study/flutter/doctor.html",
    "revision": "8ac818351f4d482c4201a6fbc8bbdf72"
  },
  {
    "url": "partDocs/internship/study/flutter/flutter.html",
    "revision": "3762fb92710c68975f726f68a320faef"
  },
  {
    "url": "partDocs/internship/study/flutter/hello.html",
    "revision": "6d375e8196113e80fc199ea43a7df7be"
  },
  {
    "url": "partDocs/internship/study/flutter/widget.html",
    "revision": "5c5db9547962e7f47564a24e85bfff8b"
  },
  {
    "url": "partDocs/internship/study/git/long/1.html",
    "revision": "6a38faf7198f1aa00182852bdd3b452b"
  },
  {
    "url": "partDocs/internship/study/git/long/2.html",
    "revision": "4d108c3b5f11a9e1bcaad82ed700632e"
  },
  {
    "url": "partDocs/internship/study/git/main/gaoji.html",
    "revision": "3b85fe4a7e1213011bf89632831b42cc"
  },
  {
    "url": "partDocs/internship/study/git/main/huati.html",
    "revision": "af63da72f08ad93f184f1f7969378794"
  },
  {
    "url": "partDocs/internship/study/git/main/jichu.html",
    "revision": "ccf42cecb1ac9cb81ccba6a40cb3cd70"
  },
  {
    "url": "partDocs/internship/study/git/main/yidong.html",
    "revision": "725de98e057596970d4776f14d81c837"
  },
  {
    "url": "partDocs/internship/study/git/main/zaxiang.html",
    "revision": "96dbc43eb0bd8eb51eb10ad0c698c53e"
  },
  {
    "url": "partDocs/internship/study/git/peizhi.html",
    "revision": "1c2595cad507ce2f916373e4add7a802"
  },
  {
    "url": "partDocs/internship/study/git/ziliao.html",
    "revision": "8a6681eb29348d5d8849d08eef72c21f"
  },
  {
    "url": "partDocs/internship/study/prosemirror/prosemirror.html",
    "revision": "cdb0c817aca34dca184c2c3c2ca2fce5"
  },
  {
    "url": "partDocs/internship/study/prosemirror/rumen.html",
    "revision": "ce5511f8b22b5632f5b94a05ede0a861"
  },
  {
    "url": "partDocs/internship/study/react/compose.html",
    "revision": "f4cb29424bdd4ae8428ac908f1a6ff61"
  },
  {
    "url": "partDocs/internship/study/react/react.html",
    "revision": "78ec566f1373acb54cb172bd9bffe105"
  },
  {
    "url": "partDocs/internship/study/react/rumen.html",
    "revision": "2f639573c12e76bd2f0e20365096f9b8"
  },
  {
    "url": "partDocs/internship/study/typescript/jinjie.html",
    "revision": "a8f2171d560a83696259501fc404dfdd"
  },
  {
    "url": "partDocs/internship/study/typescript/rumen.html",
    "revision": "9c27b3e5fb56d838069e35ce2e23ee09"
  },
  {
    "url": "partDocs/internship/study/typescript/type.html",
    "revision": "be90823fa3cfed5bf2ee13b428adb35f"
  },
  {
    "url": "partDocs/internship/write/bootcamp.html",
    "revision": "3246be7149338cc200505759866f71e6"
  },
  {
    "url": "partDocs/internship/write/bug/bug.html",
    "revision": "474b013f0aff86ef57f036946bca3726"
  },
  {
    "url": "partDocs/internship/write/bug/flutter.html",
    "revision": "62cf351c9c40b9e537bec7a307047a4b"
  },
  {
    "url": "partDocs/internship/write/bug/git.html",
    "revision": "662d5d95651431150e460ca897cb2287"
  },
  {
    "url": "partDocs/internship/write/bug/other.html",
    "revision": "c694221aa2ce00ceca3639ce6c5c361b"
  },
  {
    "url": "partDocs/internship/write/bug/work.html",
    "revision": "64bff312c1398b12986b2a0a1d335a0f"
  },
  {
    "url": "partDocs/internship/write/question.html",
    "revision": "05a536b9867b5223b10d457a3dc2ba4f"
  },
  {
    "url": "partDocs/internship/write/vscode.html",
    "revision": "c6e5c461e4392ee95609283d5faa7d07"
  },
  {
    "url": "partDocs/javascript/es10.html",
    "revision": "3f59205b2ab554060e43a8a01a1ddee1"
  },
  {
    "url": "partDocs/javascript/es11.html",
    "revision": "7ea3b45518b43371d5d7c97f14fb9919"
  },
  {
    "url": "partDocs/javascript/es6.html",
    "revision": "4c8ade988282db97001720b093fb0eec"
  },
  {
    "url": "partDocs/javascript/es7.html",
    "revision": "b6b4409770e9f11f8308eea110d98f5b"
  },
  {
    "url": "partDocs/javascript/es8.html",
    "revision": "5e4cfeaf514fed8be52979e0ddd4fa0d"
  },
  {
    "url": "partDocs/javascript/es9.html",
    "revision": "826636baeba0739a3c4a8e4d192cf42c"
  },
  {
    "url": "partDocs/javascript/javascript.html",
    "revision": "2d0dd49b54aa26738b26f9dd2ef1e9c3"
  },
  {
    "url": "partDocs/javascript/mianshi1.html",
    "revision": "6c80d2c9f1cb8c9ed8051c54ca227127"
  },
  {
    "url": "partDocs/javascript/mianshi2.html",
    "revision": "0399c3811e421b0b0381c12b95e45005"
  },
  {
    "url": "partDocs/javascript/shousi.html",
    "revision": "da9c7350cc6c869d91a36ccfeeda4e33"
  },
  {
    "url": "partDocs/leetcode.html",
    "revision": "130e4cae92c24fa930a7b052852fc5b8"
  },
  {
    "url": "partDocs/react/compose.html",
    "revision": "ee0c9bfe8d2d324e73f74b27f6db9dc7"
  },
  {
    "url": "partDocs/react/react.html",
    "revision": "75ba235fae2283024f37e367b3c3461a"
  },
  {
    "url": "partDocs/react/rumen.html",
    "revision": "77bdb5388502f6536e0ff8869b8c46a2"
  },
  {
    "url": "partDocs/vue/mianshi1.html",
    "revision": "9bc673c66e8018f92b62a6a4fb2913f4"
  },
  {
    "url": "partDocs/vue/mianshi2.html",
    "revision": "3c638afc8d0762c0fa09de1b601a20cf"
  },
  {
    "url": "partDocs/vue/mianshi3.html",
    "revision": "d276f884fcc7b350f4c69257921544ca"
  },
  {
    "url": "partDocs/vue/mianshi4.html",
    "revision": "8b1fd8d0d9af6d5af61bfece72b0678b"
  },
  {
    "url": "partDocs/vue/vue.html",
    "revision": "9d4f7349a80441f636450cbba736be4e"
  },
  {
    "url": "partDocs/worklog/before/before.html",
    "revision": "82f7ad2ffd5c35117f3b38069de8f444"
  },
  {
    "url": "partDocs/worklog/before/css.html",
    "revision": "1c27cde11042a51dfdd159e80106b3b4"
  },
  {
    "url": "partDocs/worklog/before/research/3dqam.html",
    "revision": "d199105d3e40c1e56f8e1aa3bff87fc7"
  },
  {
    "url": "partDocs/worklog/before/research/chua.html",
    "revision": "42dfaf582949257364d744ace66ceaaa"
  },
  {
    "url": "partDocs/worklog/before/research/ml.html",
    "revision": "99bb0c8f6a5d56db61051b5f2340265d"
  },
  {
    "url": "partDocs/worklog/before/research/research.html",
    "revision": "b077e2bd20df91053c8aa51e2ec8bcff"
  },
  {
    "url": "partDocs/worklog/worklog.html",
    "revision": "a79e2b138987bc962a3cee109f79479c"
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
