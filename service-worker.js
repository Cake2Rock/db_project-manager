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
    "revision": "add879748f94c11f0b346d8bf68c0cde"
  },
  {
    "url": "assets/css/0.styles.dcacb46d.css",
    "revision": "866b5838769479eec153c54b4cf24d5f"
  },
  {
    "url": "assets/img/db.ce4ef3dc.png",
    "revision": "ce4ef3dc3cd9018818409d8df5feeed4"
  },
  {
    "url": "assets/img/del.0ca74444.png",
    "revision": "0ca7444469cbaad5d76e6be6df475098"
  },
  {
    "url": "assets/img/delres.ad092875.png",
    "revision": "ad092875d56a97dcf18ff5c7643109b1"
  },
  {
    "url": "assets/img/getall.5df97ae0.png",
    "revision": "5df97ae0963a7f89a1fe8ed3039d21e4"
  },
  {
    "url": "assets/img/getallansw.4e810c7b.png",
    "revision": "4e810c7b38b211d635dddd73a47e4c74"
  },
  {
    "url": "assets/img/getid.340b1d8b.png",
    "revision": "340b1d8b700b2db1a69332244e3cf797"
  },
  {
    "url": "assets/img/getidans.ea9d43bb.png",
    "revision": "ea9d43bbf24f94a033424ead29e7dca9"
  },
  {
    "url": "assets/img/postreq.282c6b4a.png",
    "revision": "282c6b4ac1b55f39e9e4801a2c7118da"
  },
  {
    "url": "assets/img/postreqans.c94a811d.png",
    "revision": "c94a811d32af31b9a8985a92cac3e422"
  },
  {
    "url": "assets/img/postres.d529b32c.png",
    "revision": "d529b32c99a80c4c55705e4072bc19c4"
  },
  {
    "url": "assets/img/put.e7658bbc.png",
    "revision": "e7658bbc7335138a757aa65197f13b67"
  },
  {
    "url": "assets/img/putans.6d9633ab.png",
    "revision": "6d9633abdeeeea9452af609913947c4c"
  },
  {
    "url": "assets/img/putres.6c57d291.png",
    "revision": "6c57d291589498b4635d5fe861d993f5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/serverstart.9f3d575b.png",
    "revision": "9f3d575b8304adfc7ade47937a69b80c"
  },
  {
    "url": "assets/js/1.4426dca0.js",
    "revision": "812289864e601288ab76fe4d45de417c"
  },
  {
    "url": "assets/js/10.3baf4b98.js",
    "revision": "90fe59fc3972e90a247d4d7ae729917b"
  },
  {
    "url": "assets/js/13.fa04081f.js",
    "revision": "f3e06dc4f894a393f17024c5029f0d89"
  },
  {
    "url": "assets/js/14.9cbe0827.js",
    "revision": "f8bcfabbc9a39ba20faa1b4d39495111"
  },
  {
    "url": "assets/js/15.4f86aff7.js",
    "revision": "aaf4252a551538ea97e8c098d905953f"
  },
  {
    "url": "assets/js/16.71cf2634.js",
    "revision": "c225426bbecc3573489fc19537833bbe"
  },
  {
    "url": "assets/js/17.c44d0c11.js",
    "revision": "9d42a7a03a91b30d57a63b9b581e0416"
  },
  {
    "url": "assets/js/18.15adf88e.js",
    "revision": "430d15fe7ba03c487296169708bd2a5d"
  },
  {
    "url": "assets/js/19.763bcea3.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.e6a076d5.js",
    "revision": "a076c4204bef58dbe24929cc1058323b"
  },
  {
    "url": "assets/js/20.8def63bd.js",
    "revision": "067d8215e1f38bd1c5781cdf91ce1b49"
  },
  {
    "url": "assets/js/21.99b82fa4.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.c67875c4.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.e05ee494.js",
    "revision": "9a2b1e995bf1b4f119fab2ef74f29e07"
  },
  {
    "url": "assets/js/25.e0495cad.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.ad577dbc.js",
    "revision": "15c785f28027fbb9c69a924ef7a17245"
  },
  {
    "url": "assets/js/27.2748973e.js",
    "revision": "271a91208920e70c364106bd33fad46d"
  },
  {
    "url": "assets/js/28.0a20bebf.js",
    "revision": "c9f1f1aa943dec323b93806b33c916f9"
  },
  {
    "url": "assets/js/29.6944b056.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.5fb97a49.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.5131d77a.js",
    "revision": "a169c9f3599e0f411782c0273fe6bc54"
  },
  {
    "url": "assets/js/31.99c5bf4c.js",
    "revision": "41dab334019acb540fda9413b9490cc1"
  },
  {
    "url": "assets/js/32.8ad662fb.js",
    "revision": "674cddf0e7373d2006ab2d0b5ae1def8"
  },
  {
    "url": "assets/js/33.a422b1bc.js",
    "revision": "033c8e754f9c5f719146d6df25b3e786"
  },
  {
    "url": "assets/js/34.3a97d803.js",
    "revision": "579cdb82cfb3c3e56e4f7bc87506e1fb"
  },
  {
    "url": "assets/js/35.e0a351e7.js",
    "revision": "240d3abaf9b6023d689f21e3d1ec4041"
  },
  {
    "url": "assets/js/36.800eab7b.js",
    "revision": "09dde742680852c5138116aefee2b999"
  },
  {
    "url": "assets/js/37.8c036a7e.js",
    "revision": "ab2d6b93163bfbc65933c66e70604d2e"
  },
  {
    "url": "assets/js/38.58ed8876.js",
    "revision": "5736df23f5183919749567758af25ff0"
  },
  {
    "url": "assets/js/39.b41d7c9b.js",
    "revision": "4008c3940db3222761cecd565ffba682"
  },
  {
    "url": "assets/js/4.ee15f330.js",
    "revision": "168ca6b6450e0c632d5ac1d3aeb19cc5"
  },
  {
    "url": "assets/js/41.63992af2.js",
    "revision": "a412ec70e0be7985e3c5da6b9dae65ae"
  },
  {
    "url": "assets/js/5.3db56175.js",
    "revision": "fbb3d98629027bb98f0618953fda0c4f"
  },
  {
    "url": "assets/js/6.d905959e.js",
    "revision": "a5e299a92e506fea3591903551e65fb1"
  },
  {
    "url": "assets/js/7.69f77fdf.js",
    "revision": "441a70ecb4ba2ffc7179843e82d5a4e5"
  },
  {
    "url": "assets/js/8.47d34b0b.js",
    "revision": "250993683b4cfa781119fa67cd3601c2"
  },
  {
    "url": "assets/js/9.8d834d49.js",
    "revision": "26d631ed9185ff94682f1ece94571ad0"
  },
  {
    "url": "assets/js/app.212e2555.js",
    "revision": "61ef3b271493a09c3f8e1cbfa96434c3"
  },
  {
    "url": "assets/js/vendors~docsearch.5be2fec7.js",
    "revision": "9e1a7d0470eb4fe8cff785290fea0323"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4b23cfc2091f7c035aea8ff67c1782fb"
  },
  {
    "url": "design/index.html",
    "revision": "57cb434c81f0cc615c2e1024560c5856"
  },
  {
    "url": "index.html",
    "revision": "5b1d709b8942d1f7e1c0c7e75a7474c6"
  },
  {
    "url": "intro/index.html",
    "revision": "8d4b0561458d53661af3b1d37c38b1d9"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "72ab7ccb2e31af653dd13076413e2d57"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "bf07f8bac016f5d54d910c19b7601940"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "baf14f9535e3e816489001404238208a"
  },
  {
    "url": "software/index.html",
    "revision": "095e250111a8efb7fb096a1477b2f18a"
  },
  {
    "url": "test/index.html",
    "revision": "30c8ce1afb7770a743310c8e56520c6f"
  },
  {
    "url": "use cases/index.html",
    "revision": "869f02e4b9dc83914a8ea805b41ecce1"
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
