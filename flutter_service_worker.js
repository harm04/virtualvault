'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d4e45019f452317421eaf4710c76b6a5",
"index.html": "997c34f7ab1f4909e67854cd8eb9e1ed",
"/": "997c34f7ab1f4909e67854cd8eb9e1ed",
"main.dart.js": "69d5cf3bb1e948b5b3e2d2cee530dc25",
"version.json": "cc41e5cc49b9384b3609ce4550107ee6",
"assets/assets/rive/space_coffee.riv": "a24bb5f0fcea086ae1efc41beffc00fa",
"assets/assets/rive/skullface.riv": "ac995bdb733e53448bbca56c1af1df2d",
"assets/assets/rive/octopus_loop.riv": "534b38b20f38f8c9feeb7ca0238c8e86",
"assets/fonts/FiraCode.ttf": "975eb23ba46d8164c8401e265af15fd7",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "244bc387bb24bf768cd3bfe375399e1e",
"assets/AssetManifest.bin": "f8bbc4be57f30acccd64a8226efe63e1",
"assets/FontManifest.json": "eb79aef376d8f19c178af7158bbd9d93",
"assets/AssetManifest.bin.json": "599422b75f811b508b783d557cc86ad6",
"assets/NOTICES": "1b7462ec30dbc262493a20bee53d24ac",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "997553304cb28f7fd4a28bad7e0045ce",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "c0b5ac70c67ad163ad4b98469e2a6dfc",
".git/refs/remotes/origin/main": "c0b5ac70c67ad163ad4b98469e2a6dfc",
".git/objects/54/085195b68da459a0c09198abc8492cc864bd68": "f7336f8f6ec218d08ecb50ee377e286e",
".git/objects/53/5ad95a37054a96553eed2046afac91409aaedb": "7083e8385188d9c37e2590b254545237",
".git/objects/11/63371305158f03829b76893c131a25d9d8b0a2": "ad8e967ff2a4d4d5ca95f55c8dbe3522",
".git/objects/37/18a6543c8820cb7b9c971f66ba8fcc5131055a": "17589628f250936e03704de98affe6b4",
".git/objects/10/efbaa775bd4635ed75a496aa45a3995ad24489": "f50c5835fc72ce00cbce089ef9bea418",
".git/objects/d3/fef0208784b1a38f3886a20bda877822d27bea": "78296e7b09367884de45c41afa1bdecd",
".git/objects/8b/d1074710b9be63c678b22b070de3df5cb108ca": "7e305c343ae352cb7ceee6832f2481f3",
".git/objects/85/a1d1a0507c410d9df0ff790ad8af5f60e9bf74": "878389ecc8426915917b9caef1661dfb",
".git/objects/27/7c18b0ffb4496ccc4bb340bbce30e2004f32af": "0ca110ef72e3d9bd17035524866e2dc0",
".git/objects/56/55ed51458712ec48319bb13356fa691a9d0334": "9995cb286dcd58a11d25b8c61f3beab0",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "50f9559dfdededf95c19fda1c0bd4435",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "a5a0fabd70e30315c7d26f6f7da696ec",
".git/objects/d5/23b0ae8a7a38ec804d54e709a2c2056e193e4f": "1b2b1fafe9883e3b18862310d0d7e4bd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "c61efd0b2feea66b7e3396ea660bc62b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "36855539208bacf200952d53b5c029ae",
".git/objects/b3/59164771315f06385ce7fd883dca876e638086": "3dedb72cf9e3909c22c35247b148c7c6",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "7e2eab304f6eda193338a1bb6c1206ea",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "9bd7f047779a7755b060077abdf50a99",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "77e4fefd79b33d2861f4713a74b16e8f",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "01f97a206118cb77cf45b2ec700bc33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "245a422a284004e104940c5fab52cbe0",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "3465d9e5ea33a62249816d958054276a",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "d63b5a4835f3592e89ed8517f13fa8af",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "fedf41b09c05d07a8f6e1746bf8dbd35",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "05549526a4023c242add4494a234d8f2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "2e3ad7cdd4c3f033a3606f21dfae8c55",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "6775b0dfe2fe1d44509a3e070e80608b",
".git/objects/66/38ef1680501c04dea62d45e805848fe7e3435a": "13395504e1bb68ed14c30d5988ed6903",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "bc522999155f18b4a88627a6079c0e2b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "53865af4f80b7c4a4b086d24433b0303",
".git/objects/88/4398dc7b6f5854fe82f99c78aa5d025a96a9ef": "c3c5087e2267db99218676c6bce8b609",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "0662e7cbe81df961ba8a36c819f471d3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "d2eb7b4070ad770bdf75e1be4265beec",
".git/objects/f9/bec079f1cf99587135dbfd4ca59023650272f8": "994d223fe08b5753d10f9efdcf606e65",
".git/objects/e2/2a02a341fd17a6900cef6be3cb6f6d3d104431": "e7c7f7151af99f600e931f54dd80c1ae",
".git/objects/ff/e1726263ae400a8ce879e6ff61186bf6c9472a": "be76bad55919d49dbdc3e28082ed5663",
".git/objects/c4/e56f8643ca3561970b1ae79c3a5b202e9f2897": "af39fafb5a0d8e1ce9bec0b98a2b531b",
".git/objects/41/528de5c9830613d57c1422ad7df038ef8700ff": "4ff910512026ee4cc57abff14303b3a2",
".git/objects/ce/db45410bd03c64f999e0e363ac9e6cf644b02c": "6165e20cd25891593c2aeac5f663dcc1",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "53b8c6b7cc0c6e337d9b980a21785373",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "aa2fc39d0c02f49933d354be9ba07e09",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "2f7f5b401d68e9894c82bbe53e24cc1d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/35/acd5730fe6c44ebd5b861aad34119692f39201": "405eecd2580129d7d5dde809d29a0908",
".git/objects/61/3f730a811c3d6bce7a14e3ac9c8cc0f75d80c5": "96fd2af29015bab7bd5959abed8f3df7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "48e12f6ffb6481c814972fa0e109a039",
".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/logs/HEAD": "33728eefbda26f34008c0f6b5181dfb5",
".git/logs/refs/heads/main": "33728eefbda26f34008c0f6b5181dfb5",
".git/logs/refs/remotes/origin/main": "29780b83b9a9de0cd984a74cf483d6c8",
".git/config": "aee6d1c451c10f2a53457c472edc6c20"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
