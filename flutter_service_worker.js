'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a655a5da960212804b66b1a19adc8dd5",
".git/config": "514ac53c412b358cb1b26ff5d446ce18",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "03c114e636f994f73c7f3e1bedf85a3c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e462198a69029287b9e7dc0c7ca20f83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b04e1fc7806ccbb93634ba33730292c2",
".git/logs/refs/heads/Update10": "59f7d353fdf1df9ec07ff9f9704058f9",
".git/logs/refs/remotes/origin/MainTodo": "b6cc7da3e8782f782944b9bf982e5614",
".git/logs/refs/remotes/origin/Update": "c0cd6bd6da6f2c765c91098b07d39a54",
".git/logs/refs/remotes/origin/Update10": "58c55b0cc046607d185cb7fea18fba7d",
".git/logs/refs/remotes/origin/Update2": "83f46a1dc6a04b1a39e3132fd8463c58",
".git/logs/refs/remotes/origin/Update4": "d8f776a394b94a605ec87dab53aea8e8",
".git/logs/refs/remotes/origin/Update6": "64dafcf60fdef206727ae85d2765dd42",
".git/logs/refs/remotes/origin/Update7": "f3e0a36775460e6b0ddfbf0fe36a1493",
".git/logs/refs/remotes/origin/Update8": "4a0df3261497f57e6126695e275a08a8",
".git/logs/refs/remotes/origin/Update9": "ac76456e5b7c7b9f8c302e51c1293f1a",
".git/objects/05/db60a0f64dafb5810eab683d21c28c3903cdef": "a3181f4d6c37a10b4b5a9a40f3dd1288",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/0573cf7ecd44c87b8fedf710d4fa61923a3e1c": "7b5e5dec2ffc569203a11d431a048cc7",
".git/objects/18/d69969aca918d8074bbea6a33fcc763e50a9d0": "bc65a101c99599d84df885fcd98f5304",
".git/objects/1e/54ad95d3b51af2573dd0c53431d6620406c1d8": "85798f8c19b9354aaea191ac1b8d85ae",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/eed84780bc02828b076b4dd31906fc3c797549": "0c3504c1c9d864fdf50d29aed33573b9",
".git/objects/25/434147f9766e493750734c0fdf406cb16f8b28": "3adae70ee1f1d5aa98a5f2d0934d6246",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/1c7317936bf9e265c60d07b230895af9d3eb5c": "66f1000e22ebe4fec84205b4a11b8de3",
".git/objects/2b/c3067f27e915f20f6afe1818ffe6e22a8426f1": "1a07574194d769e27ec767ddee505785",
".git/objects/2c/429699ea83fa9714e51b4024548f23830ef509": "b7ea8cb771371ee133d3ac02fb589913",
".git/objects/2c/7adf5d107c49c1b40e8a86e18339499c396fb9": "94265578a48a99fdf624ebf51bee9b51",
".git/objects/2e/7ac4e2fe533f6b7d661985558b202728f0fee9": "27aec8abce18fb8a36c6c43734c9eae9",
".git/objects/2f/f41ce5f7164fe4f63847a06d1537fb264f0478": "4760c12181053e8cf1ce3a8ab14ea3f3",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/e156092e8fe1e7b88a8ea8a2b202b00b2faded": "8634a76b4cf9e14ab791aadf8c56c37e",
".git/objects/3e/8768bf0e83f9d5f6bb193d0093c4d57a9832c4": "62e47022bc838ef8f51548a2f211d9e3",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/4de4d3d93697f550555dec5d3798651c8f09a4": "c49813eb9074cec6aa551d2db085a561",
".git/objects/43/26bfc208754018b827e08b9253e1936864f85d": "a2cc424210b6236342fec9e4b65fe087",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/0071c4d43d4bc0b8a290b849ddc3e4f43418cd": "679d147c48e5be45130d9c291d864919",
".git/objects/47/57412ef18f4f1bed283965a1b1155d2299cccc": "1a2d141020a1fd1e54bef11a68c8ccc9",
".git/objects/4c/9f0e77424060ba91524dc2e1bd30c4f1e464c3": "ddbb562d426f13c8d25fce21b2aae90a",
".git/objects/55/e9f28060a390f6d2985c66d45dee6086911021": "e0d10ebc20100303e3367d520f2a2525",
".git/objects/57/c4ce53c9467f96c31d08c19bc33e5e25bdbd65": "ab4786f18e9eb8086eed1aae7456b3d1",
".git/objects/5e/de369dce99589ee44eb351fbcb4effa613bd59": "a63b3cd336dbd9013744ce61716aebf4",
".git/objects/5f/c8f1bd77f827af707816c5343f20e7fdd5700c": "47e8091384e85f4c5a72ab6bb77a81c7",
".git/objects/60/8893faa37ce6b0fccca52f081ead8931c712d6": "d895fd396e7f1de3d84ba65a3d2cfe7a",
".git/objects/66/1222e069a76506931059f5815cb4acf04926b0": "2d97a84438a5844979c11e21022ad21a",
".git/objects/66/463d246cba2b9c2677886a6862f533f5037fae": "b5d7377b475d3d4e5ac888f756a38ccf",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/97ecc813ddd8ee496ed94aac3dce034ab78d50": "3bbff44af2395f2ff9e5d399d091d63e",
".git/objects/72/f06ffec58f47ddd9be8345a93b553478e73da7": "2d5b26fdbbbec1490ff8a69f30088ce9",
".git/objects/7c/75822f0a26ae6fd7e94ef5af4723b127f8768a": "cff498c0733af6828db7e02ca269fb65",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/29fcc5dd0dd1d9bf55bb874367c33c02edff99": "b2637a2add1c7a040df27b70a53bdcb9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6df07d4cb49ec1175a5296ceecbd45aad07770": "a4372fd4ed0df7bdb4685fd79b16d13c",
".git/objects/89/d48b9791ee0a19a356b4c5ebd8b0c3da4ebf51": "bd58d0798816c39a8205717a13e1b1fa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/304dcbd585a380c55ebc3ed295505b8ad1337c": "2154d893ef538c1e0cae4c9310c907a0",
".git/objects/8c/507a513280fcb8155e122a168db38eec848946": "e3fe65f09cd6cd922ff851adca985068",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/c187af8a03c71f2d807a3027a6781a35ee6535": "a855acf2cfdeb1358766363f73a45429",
".git/objects/93/425ab881ebcacb9bf2ae7aa097cc85315e9173": "e0bff6c2f703acb20b4d99049f67bec3",
".git/objects/94/81815edaca7d5965dab0bd74bc8f6be5c56c8d": "c1033b795d26453cc9b94706ec6bda05",
".git/objects/94/b3abb5aa760d42db069d4eb8bc8cb9b57edf93": "150cdf8a21669197cfa2e0a27b0dc462",
".git/objects/95/b90d75edbd2d2f6245134569824bd74ce70691": "234c3510b29a4ba13201da559f74fbc2",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/c5fa52bd7d050e3c7395d6400026cc83372134": "9d1e46e6b909e49acb953015ff027200",
".git/objects/a5/5509a19e3dfbba5e0f6612604e7f72120f0e0d": "bc9bad1bb718a89a147cb392134beb00",
".git/objects/ab/9683bd2de4f5138becf0238d963e2e412d6aff": "74d5b861e85d0578da7838b8f42c68a3",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/4f73d80a3c9bc681e418bc8167c31ca4825418": "35f84271f7a3981952ad41ea465469b3",
".git/objects/b4/70771ab42becb8052713547f5dadcd59e2b263": "1e23aaf233a84372be299ba9286931df",
".git/objects/b4/e4fdcb6f1c3ebcb471e5f6bece13af374ef06e": "79014496ba448c0cbce511a183f72f05",
".git/objects/b6/fedd666c6e285999f4cecc98ca6808560a6707": "0a69868b1e9b0cfb55b764ffe6081602",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/33a355af7509b31a833610c5b50db25d8e8495": "9d1d9cc8d6699a98434dcf09b1156e4d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/0c1bd9f6a3bed7f36a566aee4cbb0a8590d845": "811780de81aee1ab58547145195cca68",
".git/objects/bd/474ef322162093f1128b5ab853c83fb19783c9": "27ebecd1deb1aa60fa664aa9a1c2a49b",
".git/objects/bf/4c3568d7726918b3168d16104927053defa139": "455792607bbadf76b143723c179b025a",
".git/objects/bf/9b91603ed48a6152e846aacf8be257d7f62ca1": "5984abcd03cd9d8758e5ec727de29f19",
".git/objects/c1/e9ba39cd20aeed431f0ed8a9ccd00f1248f704": "c9f78ce19974d8bfc4ad3ddce079b43f",
".git/objects/cd/7f930cdb678f2e64e01bd44832c65e3026b571": "8d63bf9c473591b6c6bf257357abb464",
".git/objects/ce/6789dce32873661b2d79d60bf56754aa1ef631": "c76341382577c276a0ddeb0fc1350601",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/45359220e94e2394becd560bc78bb49f818a28": "57be4a89817dbff3c6820c6b2215c794",
".git/objects/d2/d37092323811a163795260f309bdd7d93bc8bd": "4dc319bdf0b09b82ca30299ca9e7b98c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a6de093f29b30c3259cf63c757ad814b5b0f31": "4e22f930837e4cdd14985a659085c52e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e3/83b5a528726f89ed4c2a4a271896979f2da8cb": "a19192465ca9ddb3af2a8b33c157c7a1",
".git/objects/e8/77ac86508bd5ca70834a5e74fcc15c3d95020b": "fcff02b273542a0c308314e47730387b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/5541cddc5818886bebb9a894786d3ceca2aa29": "7daa5b63d53d897c27704f25dc8aaac7",
".git/objects/fc/2393f1bc73a8924d38388f22d5dd4381ddc3c4": "97e6a762eeef72d131354805e751c2df",
".git/refs/heads/Update10": "2bd4dfd71206424982e31c80e03ee923",
".git/refs/remotes/origin/MainTodo": "013a77db79aa250c4dbf0fe8f1d8a55c",
".git/refs/remotes/origin/Update": "5703b1fa91393c3267c1c7b98a90360a",
".git/refs/remotes/origin/Update10": "2bd4dfd71206424982e31c80e03ee923",
".git/refs/remotes/origin/Update2": "c3177527fa0d1ce2fc7558b6350c01d4",
".git/refs/remotes/origin/Update4": "583a24533f464df36634f9f0aaae88a8",
".git/refs/remotes/origin/Update6": "52f9f085bc9e1128d07cdb2e483b7249",
".git/refs/remotes/origin/Update7": "6fe9724d72569756ad51389a30bffda3",
".git/refs/remotes/origin/Update8": "596919afa5c53cc154d13ff96fdff01f",
".git/refs/remotes/origin/Update9": "93f670050e14532a9594efe2ded055a4",
"assets/AssetManifest.bin": "87649dafe7e3f1029884539f219cd7a6",
"assets/AssetManifest.bin.json": "590570e011ae4c801a36345f61d457a8",
"assets/AssetManifest.json": "d4c0d9b6332dd98fd0eb480479328cea",
"assets/assets/fonts/OLD.ttf": "9db54cfec3db3a0a2317e416e7ae6532",
"assets/assets/images/avator.jpg": "085707e1cc3c9da39ad4845478b477cf",
"assets/assets/images/background.jpg": "8a60359f1011e9e9aa21ce02d1229b62",
"assets/assets/images/background_land.jpg": "df90e66d6bd7bc9f23b11c5e6d80fed1",
"assets/FontManifest.json": "09e5b7f1df0bab455f64cc8b6d2ed67f",
"assets/fonts/MaterialIcons-Regular.otf": "9bbafc794c48fc8db547c77cabc5a394",
"assets/NOTICES": "ad8015911162907e8a64656b86e487db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "8026436f3605bacaae9f6a734be5b9b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14f4ba9b008020e1784969efaf720a50",
"/": "14f4ba9b008020e1784969efaf720a50",
"main.dart.js": "8eb2d3e3bc963db5c34653c406660afb",
"manifest.json": "fc96b7dde8a44c4a765289d3986f37fd",
"version.json": "6467133a1e365f8fc658325e44d2a9a9"};
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
