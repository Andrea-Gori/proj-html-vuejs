/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

var app = new Vue({
  el: '#root',
  data: {
    collegamenti: [{
      name: 'Order Online'
    }, {
      name: 'About'
    }, {
      name: 'News'
    }, {
      name: ' Contact Us'
    }],
    popularDishes: [{
      name: "./assets/img/skin-on-fries.jpg",
      title: 'Skin On Fries',
      price: '$3.00 – $6.00'
    }, {
      name: "./assets/img/choco-cookie-frappe.jpg",
      title: 'Choco Cookie Frappe',
      price: '$4.99'
    }, {
      name: "./assets/img/donut-burger.jpg",
      title: 'The Donut Burger',
      price: '$6.99'
    }],
    menuCategories: [{
      immagine: './assets/img/appetizers-menu-background.jpg',
      text: 'appetizer'
    }, {
      immagine: './assets/img/burgers-menu-background.jpg',
      text: 'burgers'
    }, {
      immagine: './assets/img/pizza-menu-background.jpg',
      text: 'pizzas'
    }, {
      immagine: './assets/img/fries-menu-background.jpg',
      text: 'fries'
    }, {
      immagine: './assets/img/sides-menu-background.jpg',
      text: 'fries'
    }, {
      immagine: './assets/img/desserts-menu-background.jpg',
      text: 'desserts'
    }, {
      immagine: './assets/img/beverages-menu-background.jpg',
      text: 'beverages'
    }, {
      immagine: './assets/img/specials-menu-background.jpg',
      text: 'specials'
    }],
    allergeni: [{
      immagine: './assets/img/vegetarian.jpg',
      text: 'vegetarian'
    }, {
      immagine: './assets/img/gluten-free.jpg',
      text: 'gluten free'
    }, {
      immagine: './assets/img/dairy-free.jpg',
      text: 'dairy free'
    }, {
      immagine: './assets/img/keto-friendly.jpg',
      text: 'keto friendly'
    }],
    gnus: [{
      immagine: './assets/img/pancake-burger.jpg',
      title: 'NEW: The Pancake Burger',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales ipsum vel elementum vehicula. Suspendisse sit amet aliquet ex. Pellentesque commodo tortor vel mi'
    }, {
      immagine: './assets/img/new-milkshake-menu.jpg',
      title: 'New Milkshake Menu',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales ipsum vel elementum vehicula. Suspendisse sit amet aliquet ex. Pellentesque commodo tortor vel mi'
    }],
    orderOnline: [{
      text: 'Appetizer'
    }, {
      text: 'Burger'
    }, {
      text: 'Pizza'
    }, {
      text: 'Fries'
    }, {
      text: 'Sides'
    }, {
      text: 'Dessert'
    }, {
      text: 'Beverages'
    }, {
      text: 'Specials'
    }],
    navigate: [{
      text: 'Home'
    }, {
      text: 'Alternate Home'
    }, {
      text: 'Menu'
    }, {
      text: 'About'
    }, {
      text: 'News'
    }, {
      text: 'Contact Us'
    }, {
      text: 'Cart'
    }],
    information: [{
      text: 'My Account'
    }, {
      text: 'Terms Of Service'
    }, {
      text: 'Privacy Policy'
    }, {
      button: './assets/img/app-store-badge.png'
    }, {
      button: './assets/img/play-store-badge.png'
    }],
    openingHours: [{
      day: 'Mon - ',
      hours: '10AM to 11PM'
    }, {
      day: 'Tue - ',
      hours: '10AM to 11PM'
    }, {
      day: 'Wed - ',
      hours: '10AM to 11PM'
    }, {
      day: 'thur - ',
      hours: '10AM to 11PM'
    }, {
      day: 'Fri - ',
      hours: '10AM to 11PM'
    }, {
      day: 'Sat - ',
      hours: '10AM to 1PM'
    }, {
      day: 'Sun - ',
      hours: '11AM to 10PM'
    }],
    socials: [{
      icon: 'fab fa-facebook-f',
      link: ''
    }, {
      icon: 'fab fa-twitter',
      link: ''
    }, {
      icon: 'fab fa-instagram',
      link: ''
    }, {
      icon: 'fab fa-linkedin-in',
      link: ''
    }, {
      icon: 'fas fa-rss',
      link: ''
    }, {
      icon: 'fab fa-youtube',
      link: ''
    }, {
      icon: 'far fa-envelope',
      link: ''
    }]
  },
  methods: {}
});

/***/ }),

/***/ "./src/master.scss":
/*!*************************!*\
  !*** ./src/master.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/master"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/master"], () => (__webpack_require__("./src/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;