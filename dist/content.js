/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	chrome.runtime.onMessage.addListener(__webpack_require__(1));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var actions = {
		'badge-click': __webpack_require__(2),
	};
	
	module.exports = __webpack_require__(3)(actions);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function () {
		document
			.querySelectorAll('img')
			.forEach(function (img) {
				img.style.display = 'none';
			});
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(actions){
	    /**
	    * @function execute - routes actions
	    */
	    return function execute(request, sender, callback) {
	        var handle = actions[request.context + '-' + request.action];
	        if(typeof handle === 'function') {
	            handle(request.data);
	        }
	    }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=content.js.map