'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "5dae3d124a0dc5ed9fcfa2d40d2bc227",
"assets/assets/logo/logo-black.svg": "f380ec9f5a8c0239190a9431db0cf23b",
"assets/assets/logo/logo-primary.svg": "dc035898129ebe61130ca4b9163d27fa",
"assets/assets/logo/logo-primary.png": "6a8a5fd6d46edaad7a837dee7100da6e",
"assets/assets/logo/icon-yellow.svg": "f9417b2e35760053050615cd5db06cf6",
"assets/assets/logo/icon-black.svg": "b607a43581d4d3541eea28a19f1bd74d",
"assets/assets/logo/icon-white.svg": "c6f73a78417862fa3be9a7dc08311526",
"assets/assets/logo/logo-yellow.svg": "1b6203e5798516acf12d21fdfd3ce38a",
"assets/assets/images/looking.svg": "6bccf165748386f15dec9d25109b68e7",
"assets/assets/images/delivery_screen/delivery-empty.svg": "85eca04802c5a55f94cd3fb14949a87f",
"assets/assets/images/search_screen/empty-results.svg": "6e01979cee695a233f2bcf90081a10b5",
"assets/assets/images/wishlist_screen/products-empty.svg": "fe6266fec334b4ca02a3b3262a14378c",
"assets/assets/images/mailbox.svg": "8841dea06b6761d692fa721ea72b1a7a",
"assets/assets/images/intro_screen/looking.svg": "d6532f3f2808d441a485815df2cf2033",
"assets/assets/images/intro_screen/paralax-background/image-3.svg": "96018e165176fea6c0f3f78e83604980",
"assets/assets/images/intro_screen/paralax-background/image-6.svg": "54bf7ba2d9c17478c37ad05fd34ef0ee",
"assets/assets/images/intro_screen/paralax-background/image-5.svg": "35260197c1071269a6120fc133aaedad",
"assets/assets/images/intro_screen/paralax-background/image-2.svg": "55a1b46d2e31d3723550b8c10f9ed5f8",
"assets/assets/images/intro_screen/paralax-background/image-1.svg": "cfae31a6f868da555088dab7f1b8e5d0",
"assets/assets/images/intro_screen/paralax-background/image-4.svg": "0f0886745e07c023e7d9e46dc03a73f2",
"assets/assets/images/intro_screen/mailbox.svg": "b48e2eb8f45a4a23754e3e05a9fdcf0a",
"assets/assets/images/intro_screen/products.svg": "4a8bef182285c9d19666ef86535bb8e0",
"assets/assets/images/order_screen/search-empty.svg": "76e0c4b60ccb8662f06dae83e86c27e8",
"assets/assets/images/profile_screen/profile-empty.svg": "44be3aad38cc462b8b47291712f6e35b",
"assets/assets/images/product_screen/products-empty.svg": "34f42b38f41aaebb608c327db6260cf5",
"assets/assets/images/products.svg": "e3165e75b57883078b501da18255ac29",
"assets/assets/icons/social-media/linkedin.svg": "4ff5bfbdd208f816fa31f2c32a8b209e",
"assets/assets/icons/social-media/twitter.svg": "1aa1b8b4ebcea63d348871f20164ec7d",
"assets/assets/icons/social-media/mail.svg": "53482ef882760f38391c6027e493090d",
"assets/assets/icons/social-media/instagram.svg": "9677faad21c14e50ed1767e243a39938",
"assets/assets/icons/social-media/github.svg": "2b4b2aa6ab9a5590b37b3d1343766bb1",
"assets/assets/icons/social-media/facebook.svg": "6d25caf587e43eadea138538a9c12603",
"assets/assets/icons/social-media/youtube.svg": "62a2e8b5fd909b52b34da90272af8caa",
"assets/assets/icons/others/eye.svg": "c8884d8dbc3aef00bd635b9be384f02f",
"assets/assets/icons/others/arrow-right.svg": "a71b7c73a522d49756c040821703b4f9",
"assets/assets/icons/others/lock.svg": "1928379cc5c30b6093ddb2623533407f",
"assets/assets/icons/others/trash-2.svg": "97e2c324415fab96c31c157ef36e39e9",
"assets/assets/icons/others/unlock.svg": "8490326383610cd3934d5dea762fd30e",
"assets/assets/icons/others/shopping-bag.svg": "ce3942f07abca0c685ef076925ba40e0",
"assets/assets/icons/others/chevron-right.svg": "b5aa06a26d57513798e036b2f77b6531",
"assets/assets/icons/others/trash.svg": "903a49137c633e7dac863a5a0d0814b0",
"assets/assets/icons/others/shopping-cart.svg": "0ce1a0b779ad68fb619f8bca3164df56",
"assets/assets/icons/others/chevron-left.svg": "34fcfc08a3f3697087517903e1fd84ab",
"assets/assets/icons/others/arrow-left.svg": "d0c8772cb63f48dd56631dd210dfc5e6",
"assets/assets/icons/others/log-in.svg": "a46c6dd3b1806ab8319fbb14695a8d6e",
"assets/assets/icons/others/sliders.svg": "e3357b174804c9b4595f0fe703c7c19e",
"assets/assets/icons/others/x.svg": "540604e349c852b693d3b1deb1c7e7bd",
"assets/assets/icons/others/log-out.svg": "2d922cea3d2df085a41923263c6d5e53",
"assets/assets/icons/others/arrow-right-circle.svg": "a5ce219fa4f44d8aa6fcc9ecb27925d5",
"assets/assets/icons/others/star.svg": "a9163ec6926baba05da78c7daf16bff3",
"assets/assets/icons/others/arrow-left-circle.svg": "28d4c7e69ff0e01553286a65cf7e7be1",
"assets/assets/icons/others/eye-off.svg": "2868fcd3daf4948bf4ccd780fc404ce6",
"assets/assets/icons/navigation-bar/user.svg": "64be12966c6bfeeab208cad8ac6c0a32",
"assets/assets/icons/navigation-bar/heart.svg": "125640e733a97b83ab341b46b8f4238c",
"assets/assets/icons/navigation-bar/home.svg": "7ea90749bb30379fa313ae6381d0d6a1",
"assets/assets/icons/navigation-bar/search.svg": "3f68651e37d340a47321fd5e598c5400",
"assets/assets/fonts/inter/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/inter/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/lora/Lora-SemiBold.ttf": "1bf445768a1e32b8c25e086b20b99488",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "85ac9bd41ccafe4db1aaaefbda383525",
"assets/AssetManifest.json": "e3737e2b862abd7ca4dd833e5a360568",
"assets/FontManifest.json": "ab7d2b5263d1aa4d808d14e48f38b610",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/fonts/MaterialIcons-Regular.otf": "ff4860792674e0fde3568a043e25dc51",
"index.html": "2fa8d67b7682d2f2e62165478c0ea941",
"/": "2fa8d67b7682d2f2e62165478c0ea941",
"main.dart.js": "82d136e8effeeaaa652f3593d73612ea",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"version.json": "f842570eaffd09a97469e0b3417c9961",
"manifest.json": "33adedcb82573c10f8233a2954a9b685",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "ae683dd58fca5bca1184fcdf614c5c9d",
"icons/Icon-maskable-192.png": "e0cbf642dabad2fed1a425de2fac212f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
