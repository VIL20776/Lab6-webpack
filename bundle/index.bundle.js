/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/normal.png":
/*!*******************************!*\
  !*** ./src/images/normal.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/normal.png\");\n\n//# sourceURL=webpack://lab6/./src/images/normal.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _indexStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexStructure */ \"./src/indexStructure.js\");\n/* harmony import */ var _indexContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexContent */ \"./src/indexContent.js\");\n\r\n\r\n\r\n(0,_indexStructure__WEBPACK_IMPORTED_MODULE_0__.indexStructure)();\r\n(0,_indexContent__WEBPACK_IMPORTED_MODULE_1__.indexContent)();\n\n//# sourceURL=webpack://lab6/./src/index.js?");

/***/ }),

/***/ "./src/indexContent.js":
/*!*****************************!*\
  !*** ./src/indexContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indexContent\": () => (/* binding */ indexContent)\n/* harmony export */ });\n/* harmony import */ var _images_normal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/normal.png */ \"./src/images/normal.png\");\n\n\nfunction indexContent () {\n    let header = document.getElementById(\"header\");\n    let subheader = document.getElementById(\"subheader\");\n    let img = document.getElementById(\"image\");\n    let page = document.getElementById(\"page\");\n    let newA1 = document.getElementById(\"moviesLink\");\n    let newA2 = document.getElementById(\"friendsLink\");\n\n    //Asignacion de atributos\n    header.textContent = \"You are alone in your house at night\";\n    subheader.textContent = \"(Mr. Incredible Story Mode Meme)\";\n    img.src = _images_normal_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    img.alt = \"normal\";\n    page.innerHTML = `You are alone in your house at night,<br/>\n        your mother went to the supermarket and she won't<br/>\n        come back any time soon.<br/>\n        Nothing really happens were you live so there's nothing<br/>\n        to worry about.<br/>\n        <br/>\n        You decide to...<br/>`;\n    newA1.href = \"story1.html\";\n    newA1.innerHTML = \"Watch movie\"\n    newA2.href = \"story2.html\";\n    newA2.innerHTML = \"Call friends\";\n}\n\n//# sourceURL=webpack://lab6/./src/indexContent.js?");

/***/ }),

/***/ "./src/indexStructure.js":
/*!*******************************!*\
  !*** ./src/indexStructure.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indexStructure\": () => (/* binding */ indexStructure)\n/* harmony export */ });\nfunction indexStructure () {\n    //Creacion de elementos\n    let newDiv = document.createElement(\"div\");\n    let newH1 = document.createElement(\"h1\");\n    let newH2 = document.createElement(\"h2\");\n    let newImg = document.createElement(\"img\");\n    let newP = document.createElement(\"p\");\n    let newUl = document.createElement(\"ul\");\n    let newLi1 = document.createElement(\"li\");\n    let newA1 = document.createElement(\"a\");\n    let newLi2 = document.createElement(\"li\");\n    let newA2 = document.createElement(\"a\");\n\n    newH1.id = \"header\";\n    newH2.id = \"subheader\";\n    newImg.id = \"image\";\n    newP.id = \"page\";\n    newA1.id = \"moviesLink\";\n    newA2.id = \"friendsLink\";\n\n    //Creacion de la estructura\n    document.body.appendChild(newDiv);\n    document.body.appendChild(newH1);\n    document.body.appendChild(newH2);\n    document.body.appendChild(newImg);\n    document.body.appendChild(newP);\n    document.body.appendChild(newUl);\n    newUl.appendChild(newLi1);\n    newLi1.appendChild(newA1);\n    newUl.appendChild(newLi2);\n    newLi2.appendChild(newA2);\n}\n\n\n//# sourceURL=webpack://lab6/./src/indexStructure.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;