var cacheName = "cache-v1";

var urlCache = [
	'/',
  '/index.html',
  '/restaurant.html',
	'/css/styles.css',
	'/data/restaurants.json',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg',
	'/js/main.js',
	'/js/restaurant_info.js',
  '/js/dbhelper.js',
]

self.addEventListener('install', function(event) {
  // install steps
 event.waitUntil(
    //open cache
   caches.open(cacheName).then(function(cache) {
     return cache.addAll(urlCache);
   })
 );
});

self.addEventListener('fetch', function(event) {

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
			})
			.catch(function(error) {
				console.log("Error fetching and caching new data", error);
			})
	)
})
