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
    "revision": "dec23ba939e30c832ea5e7716dfb4ac4"
  },
  {
    "url": "assets/css/0.styles.f99c2fb7.css",
    "revision": "e1c57a2fbb4ebfe5481498b43ca233c7"
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
    "url": "assets/js/11.71472216.js",
    "revision": "4a437571299e906ebee6540b38d4cc2e"
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
    "url": "assets/js/16.66c7272a.js",
    "revision": "c151e74b60cdd9652e3b73f5e86b19b2"
  },
  {
    "url": "assets/js/17.b3591785.js",
    "revision": "66c02046745bf2d6a56c79425a22f8d2"
  },
  {
    "url": "assets/js/18.a16bb134.js",
    "revision": "79597f3468b9fb29c9b123bb219ddc20"
  },
  {
    "url": "assets/js/19.71b97519.js",
    "revision": "1e1a6e20d2a2f8dc348d87094b556e2a"
  },
  {
    "url": "assets/js/2.4506bae1.js",
    "revision": "a263eef8e6aa83f9846031450308d44d"
  },
  {
    "url": "assets/js/20.6951cc46.js",
    "revision": "c438aa3e23aab2f9fbbbf1fa1a60ef81"
  },
  {
    "url": "assets/js/21.6d7a6ffa.js",
    "revision": "f56a6377c2f927f5f0b02a0a02d207cd"
  },
  {
    "url": "assets/js/22.5b26905c.js",
    "revision": "049748a64e40eba7978ffbab016dc17b"
  },
  {
    "url": "assets/js/23.0c320ea5.js",
    "revision": "aad834d572def362ea0a9fe6edcefbfe"
  },
  {
    "url": "assets/js/24.59820c52.js",
    "revision": "89d694866f839ac5966d3e5e7f3a11f4"
  },
  {
    "url": "assets/js/25.fbc2a9d0.js",
    "revision": "94fd176ee99e216036af44ba5843d5d3"
  },
  {
    "url": "assets/js/26.da15b1c8.js",
    "revision": "62b75526ad27a6edafd9728c0071878b"
  },
  {
    "url": "assets/js/27.20ecd213.js",
    "revision": "efe3d51a0b73876327140e8593eef36d"
  },
  {
    "url": "assets/js/28.7e66fd73.js",
    "revision": "4174b765401ab48908a10b294efdd2ce"
  },
  {
    "url": "assets/js/29.e0a05811.js",
    "revision": "7b61c9cf1dde946051d08660ab7111e9"
  },
  {
    "url": "assets/js/3.c98c3846.js",
    "revision": "042b12cb9fbb3506e7aca33ec2744f4a"
  },
  {
    "url": "assets/js/30.61c39fb1.js",
    "revision": "af120c19a0d30908b460964f1c95f643"
  },
  {
    "url": "assets/js/31.e3cf4e91.js",
    "revision": "461eb443786da107518e5388c8c82306"
  },
  {
    "url": "assets/js/32.79fb9e9d.js",
    "revision": "02ab6f0a1224adee3aea74c42faa845a"
  },
  {
    "url": "assets/js/33.b286f7bd.js",
    "revision": "2cb001fb9effd5a314d01cb02e1e944f"
  },
  {
    "url": "assets/js/34.3fe51f8e.js",
    "revision": "d1c7b3269ec333d79390d11fa013cceb"
  },
  {
    "url": "assets/js/35.60ed4a8e.js",
    "revision": "23fb488dbd4c060867996362270550dd"
  },
  {
    "url": "assets/js/36.62a81219.js",
    "revision": "975a7a2ee184d5d9b2214721d562533a"
  },
  {
    "url": "assets/js/37.575df45e.js",
    "revision": "c414d3d4b37a8d55127bf7b7fe9cfce9"
  },
  {
    "url": "assets/js/38.13811fb9.js",
    "revision": "199f4f1b74514afb3e2f71505ff4ca5d"
  },
  {
    "url": "assets/js/39.745bc730.js",
    "revision": "e4b8990d109aed8d49365a9448465c8e"
  },
  {
    "url": "assets/js/4.19449fff.js",
    "revision": "35b90776854e76fd7e0a5c31840dec1a"
  },
  {
    "url": "assets/js/40.1b56e27f.js",
    "revision": "bfb293ff5e6851f5881ffa7895bf09c0"
  },
  {
    "url": "assets/js/41.5d30ee7d.js",
    "revision": "92bb142171d0c6e403f2b3b41deec0bc"
  },
  {
    "url": "assets/js/42.c408c4d9.js",
    "revision": "efb6971e1518b372173ffca490bafe90"
  },
  {
    "url": "assets/js/43.458c2719.js",
    "revision": "4b63a953ab6fecf7a612db6b1a0c3aed"
  },
  {
    "url": "assets/js/44.b666c523.js",
    "revision": "a208dd1e1fe710e82ea5c77020ac325a"
  },
  {
    "url": "assets/js/45.724f6e5f.js",
    "revision": "b4a21d3529893f138a0c71c2ee1eb11b"
  },
  {
    "url": "assets/js/46.66161c2e.js",
    "revision": "ed4c28e8721d69ebc7434053502d8c55"
  },
  {
    "url": "assets/js/47.61224280.js",
    "revision": "3f3db1bcea20ad60769fd20da130ba56"
  },
  {
    "url": "assets/js/48.581be5ec.js",
    "revision": "dce6dd2f7529ca0e20be2524597bbe0c"
  },
  {
    "url": "assets/js/49.d44bbdd8.js",
    "revision": "cc4e8d6f7af011421c7bf98c9bb7f197"
  },
  {
    "url": "assets/js/5.d43f788b.js",
    "revision": "7f78d0c47941c7323252d4a764d5e9d8"
  },
  {
    "url": "assets/js/50.a4eb3a1f.js",
    "revision": "bbb1a159fad1996c61189f3195d0e0ab"
  },
  {
    "url": "assets/js/51.f690b9bb.js",
    "revision": "370e37bea28bda83c3c916699785ff96"
  },
  {
    "url": "assets/js/52.99c300d9.js",
    "revision": "7d4a15941eae6962337dca4d9cf43467"
  },
  {
    "url": "assets/js/53.97ec9ac7.js",
    "revision": "6afab5e579c1bce73c40701e1aff18c1"
  },
  {
    "url": "assets/js/54.462c5a2d.js",
    "revision": "c79222b2cad4dc7d14905721f9234f3f"
  },
  {
    "url": "assets/js/55.41fc0618.js",
    "revision": "7966981e484f3f41b8a1c90bc2b57774"
  },
  {
    "url": "assets/js/56.b2489f27.js",
    "revision": "4eb33d93ae089a9f40bd6ecc436c3960"
  },
  {
    "url": "assets/js/57.1a542f10.js",
    "revision": "7f504d9d055e0bc8ca5f61e8117acf80"
  },
  {
    "url": "assets/js/58.669b3d02.js",
    "revision": "455f3ad1eaca7ad43ddbdbc4cb2e9e20"
  },
  {
    "url": "assets/js/59.7d552cc7.js",
    "revision": "a8ac1219430e5551ab44c1237d48fe9e"
  },
  {
    "url": "assets/js/6.c4ef703b.js",
    "revision": "d50a6461993d6ac138bfbfbc469718f8"
  },
  {
    "url": "assets/js/60.54b11bb8.js",
    "revision": "c6976adbb121e5824a257baf69c1fb56"
  },
  {
    "url": "assets/js/61.cab6e843.js",
    "revision": "3114888abc90ce0cdbb24fd41374139d"
  },
  {
    "url": "assets/js/62.1d9c8048.js",
    "revision": "4d4daa4a56429de4e721a59b447788bb"
  },
  {
    "url": "assets/js/63.85751f0a.js",
    "revision": "c2a720c88971415247d1ed2775e1fe4f"
  },
  {
    "url": "assets/js/64.0697931e.js",
    "revision": "d107ffb2971b53f9b11a56e5aa6f1c75"
  },
  {
    "url": "assets/js/65.163ce498.js",
    "revision": "7c84130db119fcd3bfdf4fed88cc490b"
  },
  {
    "url": "assets/js/66.4b01a1fe.js",
    "revision": "351127f5a137b6939b4679d87a0a3d37"
  },
  {
    "url": "assets/js/67.b51d5286.js",
    "revision": "cee8fa22dec7c26c241382e0b7bf21e9"
  },
  {
    "url": "assets/js/68.de629871.js",
    "revision": "79ec461401d50874c689c9c98c7d238b"
  },
  {
    "url": "assets/js/69.07dd8b81.js",
    "revision": "a780aee68430562c605af885522c4b74"
  },
  {
    "url": "assets/js/7.7751eb02.js",
    "revision": "d3fb19e6322540d5905a65683413a124"
  },
  {
    "url": "assets/js/70.72426bfa.js",
    "revision": "1bb4a561095a0b06f4890fa8b2890fb9"
  },
  {
    "url": "assets/js/71.028fdb33.js",
    "revision": "e6a481500ccd8429b297a24a60b7f234"
  },
  {
    "url": "assets/js/72.d58c214b.js",
    "revision": "67e0380445e51fb55ac8dbe824335fd6"
  },
  {
    "url": "assets/js/73.0062ef3f.js",
    "revision": "01052502ff66ac7013fba529e0260caa"
  },
  {
    "url": "assets/js/74.53edec51.js",
    "revision": "278f6c14981ea523ed528e2ab6327ee7"
  },
  {
    "url": "assets/js/75.98b1de0f.js",
    "revision": "3e8834f6d460924214ceae56f4f5d949"
  },
  {
    "url": "assets/js/76.9e21f7cc.js",
    "revision": "af02230056f43c9245e95c50497dcf9f"
  },
  {
    "url": "assets/js/77.51487d7f.js",
    "revision": "4cb1e6fa15cea0a6ac5e9a0d0bc171f3"
  },
  {
    "url": "assets/js/8.564929c9.js",
    "revision": "ee74a2b4cd2c01e07955b0e044430ac3"
  },
  {
    "url": "assets/js/9.97ce9281.js",
    "revision": "f8da5fae3f73a2a00d62b2d21316dbcd"
  },
  {
    "url": "assets/js/app.5877cd7f.js",
    "revision": "8de850c076a9e9181a6e9a947f7cae28"
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
    "revision": "ac70e45c3be73d1d40e5f741c0ae9ec6"
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
    "url": "partDocs/aboutme.html",
    "revision": "d3e0b81952406455885ce8538207dd21"
  },
  {
    "url": "partDocs/css/css.html",
    "revision": "e80bae2aade6fcdb9b160a3bc4d9c470"
  },
  {
    "url": "partDocs/css/mianshi1.html",
    "revision": "c06ec16225303c627fc56eb081c1da64"
  },
  {
    "url": "partDocs/css/mianshi2.html",
    "revision": "77f75ed77eef5650c4126268ee8ebd68"
  },
  {
    "url": "partDocs/html/html.html",
    "revision": "c7bcf67209cba1dafeef77dc1741cd97"
  },
  {
    "url": "partDocs/html/mianshi1.html",
    "revision": "87a8e06db1e8344f1b539d80537e6c18"
  },
  {
    "url": "partDocs/html/mianshi2.html",
    "revision": "25baab318a1a41e0c1fd4f473c96539d"
  },
  {
    "url": "partDocs/html/mianshi3.html",
    "revision": "e57a32d7860374ebc340f364ba1631c9"
  },
  {
    "url": "partDocs/html/mianshi4.html",
    "revision": "b28e138c1af0b1ecfa9c91688c5b1b38"
  },
  {
    "url": "partDocs/html/sanlan.html",
    "revision": "7dcde55ad5e3633c1102649a6b76f3d2"
  },
  {
    "url": "partDocs/internship/bootcamp.html",
    "revision": "43a0fb86f7419a49b85114a06c986508"
  },
  {
    "url": "partDocs/internship/bug/bug.html",
    "revision": "da9ba907dcedc0bf94eec959c8a7f69a"
  },
  {
    "url": "partDocs/internship/bug/flutter.html",
    "revision": "aa00c98a1015ae47fda1917f8a7bc2ed"
  },
  {
    "url": "partDocs/internship/bug/git.html",
    "revision": "44491fa72fb6d086df5a791abd760c57"
  },
  {
    "url": "partDocs/internship/bug/other.html",
    "revision": "7309d83aa17087822ff11be3e2e25493"
  },
  {
    "url": "partDocs/internship/bug/work.html",
    "revision": "0643c7f02540ce938904fde379892d57"
  },
  {
    "url": "partDocs/internship/charles.html",
    "revision": "0ab1c70bdb963a3dd8129769730390e4"
  },
  {
    "url": "partDocs/internship/flutter/doctor.html",
    "revision": "b95e812e360f5d5bff800b9a70e43b58"
  },
  {
    "url": "partDocs/internship/flutter/flutter.html",
    "revision": "c940e0f03aa07b841e90f0a0ca770183"
  },
  {
    "url": "partDocs/internship/flutter/hello.html",
    "revision": "110fb292f0584a981e9fa2ad34cef2cf"
  },
  {
    "url": "partDocs/internship/flutter/widget.html",
    "revision": "93fa78d5737d6b539f40b56ef6012964"
  },
  {
    "url": "partDocs/internship/git/long/1.html",
    "revision": "f9fb0bd9060456b3920deec4ad4ac31f"
  },
  {
    "url": "partDocs/internship/git/long/2.html",
    "revision": "e2c3e13cf339a2f11286bcb26b402c87"
  },
  {
    "url": "partDocs/internship/git/main/gaoji.html",
    "revision": "c37cbb9b92ed42b7f42a3722a31cc733"
  },
  {
    "url": "partDocs/internship/git/main/huati.html",
    "revision": "a3d509da989b421899288ca83cd54d62"
  },
  {
    "url": "partDocs/internship/git/main/jichu.html",
    "revision": "e9eb0c3f56dc2e2e9c1d80c6724449a2"
  },
  {
    "url": "partDocs/internship/git/main/yidong.html",
    "revision": "afe516039825febf5d17d7ef8dac9ee4"
  },
  {
    "url": "partDocs/internship/git/main/zaxiang.html",
    "revision": "74591cd4c858fe2b7d7664b3d6e4778a"
  },
  {
    "url": "partDocs/internship/git/peizhi.html",
    "revision": "fa08d3bdbd300aadd3c2c842899b159e"
  },
  {
    "url": "partDocs/internship/git/ziliao.html",
    "revision": "9a2e55d22b39c209bd39b838f821624f"
  },
  {
    "url": "partDocs/internship/internship.html",
    "revision": "838299ebbb4a8b00be91f31ee6c0cfc9"
  },
  {
    "url": "partDocs/internship/prosemirror/prosemirror.html",
    "revision": "2a9e5a2b895192bd97c8f4adf292e82c"
  },
  {
    "url": "partDocs/internship/prosemirror/rumen.html",
    "revision": "5c17f6cc44d3a1af317e609a55b1bb80"
  },
  {
    "url": "partDocs/internship/question.html",
    "revision": "84d8ff8e22f50d73a9126c9453eeef0b"
  },
  {
    "url": "partDocs/internship/react/compose.html",
    "revision": "cc0400a5baee4e3337f9d8980d48eddb"
  },
  {
    "url": "partDocs/internship/react/react.html",
    "revision": "9d6f3949ab71c8b336085a6a80c5efc4"
  },
  {
    "url": "partDocs/internship/react/rumen.html",
    "revision": "42b36e881b4bc3094af9f153568706c1"
  },
  {
    "url": "partDocs/internship/typescript/jinjie.html",
    "revision": "96392607e4776c9df107df6ab03d39d3"
  },
  {
    "url": "partDocs/internship/typescript/rumen.html",
    "revision": "28473309cbaccc0719609e9b96464c0e"
  },
  {
    "url": "partDocs/internship/typescript/type.html",
    "revision": "29a248ffa69a47e806bccc83c6513b69"
  },
  {
    "url": "partDocs/internship/vscode.html",
    "revision": "e59f127792aeee1eab2dd30eb5dadb8a"
  },
  {
    "url": "partDocs/javascript/es10.html",
    "revision": "9a753e753de4513828eb751fcf491fc7"
  },
  {
    "url": "partDocs/javascript/es11.html",
    "revision": "2c22367fbd7de1b215d4dc586a1597db"
  },
  {
    "url": "partDocs/javascript/es6.html",
    "revision": "58a29eff94e4156a891707920ff66e4c"
  },
  {
    "url": "partDocs/javascript/es7.html",
    "revision": "18666a956878f938565d2125aabe1108"
  },
  {
    "url": "partDocs/javascript/es8.html",
    "revision": "00a513de26ef792987b4f7005c21d82b"
  },
  {
    "url": "partDocs/javascript/es9.html",
    "revision": "655ef6630c8e0524ebe87ff1f53f308f"
  },
  {
    "url": "partDocs/javascript/javascript.html",
    "revision": "91362f3013e7e0b0c36c2acb2c60715e"
  },
  {
    "url": "partDocs/javascript/mianshi1.html",
    "revision": "d8e5e14e4cb208c534903b36013d359a"
  },
  {
    "url": "partDocs/javascript/mianshi2.html",
    "revision": "0c938f560df561e6ca1fa7500ee9706d"
  },
  {
    "url": "partDocs/javascript/shousi.html",
    "revision": "26049e7e2db1595b02157360602ecf55"
  },
  {
    "url": "partDocs/leetcode.html",
    "revision": "db9fb98d0dd651c222879f5c335d3cac"
  },
  {
    "url": "partDocs/react/compose.html",
    "revision": "3ee245ccb572b000759fe48c99749a82"
  },
  {
    "url": "partDocs/react/react.html",
    "revision": "bec633ba1b573f1393b34e6a0c6e7ed0"
  },
  {
    "url": "partDocs/react/rumen.html",
    "revision": "f32c9f9f9b327e0b2af972a39e7b9675"
  },
  {
    "url": "partDocs/vue/mianshi1.html",
    "revision": "7dd5d9ec61f831e31374c8ec29937d34"
  },
  {
    "url": "partDocs/vue/mianshi2.html",
    "revision": "eac8e33280bf15b951607bc7904dd057"
  },
  {
    "url": "partDocs/vue/mianshi3.html",
    "revision": "d8f8bc2fa346a736db28f21f731f5ea9"
  },
  {
    "url": "partDocs/vue/mianshi4.html",
    "revision": "53ee1cdd88f178467fe8211f473c69d1"
  },
  {
    "url": "partDocs/vue/vue.html",
    "revision": "70e8b8b5c60e98ad3e88fbe6cc33aa08"
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
