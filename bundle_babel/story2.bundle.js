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

/***/ "./src/friends/friends1.js":
/*!*********************************!*\
  !*** ./src/friends/friends1.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends1\": () => (/* binding */ friends1)\n/* harmony export */ });\n/* harmony import */ var _friends2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends2 */ \"./src/friends/friends2.js\");\n/* harmony import */ var _images_canny_canny1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/canny/canny1.png */ \"./src/images/canny/canny1.png\");\n\n\nfunction friends1() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"You called your friends\";\n  image.src = _images_canny_canny1_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  image.alt = \"canny1\";\n  page.innerHTML = \"Coincidentally, most of them are around were you live.<br/>\\n        They are going to be here in a few minutes.\";\n  link.innerHTML = \"Next\";\n  link.onclick = (0,_friends2__WEBPACK_IMPORTED_MODULE_0__.friends2)();\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends1.js?");

/***/ }),

/***/ "./src/friends/friends10.js":
/*!**********************************!*\
  !*** ./src/friends/friends10.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends10\": () => (/* binding */ friends10)\n/* harmony export */ });\n/* harmony import */ var _images_normal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/normal.png */ \"./src/images/normal.png\");\n\nfunction friends10() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"Your mom came back\";\n  image.src = _images_normal_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  image.alt = \"normal\";\n  page.innerHTML = \"Your mom came back from the supermarket.<br/>\\n        She says that is going to do something for everyone to eat<br/>\\n        Everyone seems to forget about your victory,<br/>\\n        no friends lost today.\";\n  link.innerHTML = \"End\";\n  link.href = \"index.html\";\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends10.js?");

/***/ }),

/***/ "./src/friends/friends2.js":
/*!*********************************!*\
  !*** ./src/friends/friends2.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends2\": () => (/* binding */ friends2)\n/* harmony export */ });\n/* harmony import */ var _friends3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends3 */ \"./src/friends/friends3.js\");\n/* harmony import */ var _images_canny_canny2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/canny/canny2.png */ \"./src/images/canny/canny2.png\");\n\n\nfunction friends2() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"Everyone came here\";\n  image.src = _images_canny_canny2_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  image.alt = \"canny2\";\n  page.innerHTML = \"Everyone came here and they brought sodas and nachos.\";\n  link.innerHTML = \"Next\";\n  link.onclick = (0,_friends3__WEBPACK_IMPORTED_MODULE_0__.friends3)();\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends2.js?");

/***/ }),

/***/ "./src/friends/friends3.js":
/*!*********************************!*\
  !*** ./src/friends/friends3.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends3\": () => (/* binding */ friends3)\n/* harmony export */ });\n/* harmony import */ var _friends4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends4 */ \"./src/friends/friends4.js\");\n/* harmony import */ var _images_canny_canny3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/canny/canny3.png */ \"./src/images/canny/canny3.png\");\n\n\nfunction friends3() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"They want to play Mario Party\";\n  image.src = _images_canny_canny3_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  image.alt = \"canny3\";\n  page.innerHTML = \"You feel lucky today, so you accept it.<br/>\\n        Everyone else is saying than they are going to make <br/>\\n        sure than you get in the last position, but you are <br/>\\n        up for the challenge.\";\n  link.innerHTML = \"Next\";\n  link.onclick = (0,_friends4__WEBPACK_IMPORTED_MODULE_0__.friends4)();\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends3.js?");

/***/ }),

/***/ "./src/friends/friends4.js":
/*!*********************************!*\
  !*** ./src/friends/friends4.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends4\": () => (/* binding */ friends4)\n/* harmony export */ });\n/* harmony import */ var _friends5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends5 */ \"./src/friends/friends5.js\");\n/* harmony import */ var _images_canny_canny4_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/canny/canny4.png */ \"./src/images/canny/canny4.png\");\n\n\nfunction friends4() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"You called your friends\";\n  image.src = _images_canny_canny4_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  image.alt = \"canny4\";\n  page.innerHTML = \"Nobody picked Waluigi.<br/>\\n        Thats good, because he is your good luck character.<br/>\\n        You already have a good feeling about this.\";\n  link.innerHTML = \"Next\";\n  link.onclick = (0,_friends5__WEBPACK_IMPORTED_MODULE_0__.friends5)();\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends4.js?");

/***/ }),

/***/ "./src/friends/friends5.js":
/*!*********************************!*\
  !*** ./src/friends/friends5.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends5\": () => (/* binding */ friends5)\n/* harmony export */ });\n/* harmony import */ var _friends6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends6 */ \"./src/friends/friends6.js\");\n/* harmony import */ var _images_canny_canny5_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/canny/canny5.png */ \"./src/images/canny/canny5.png\");\n\n\nfunction friends5() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"First turn!\";\n  image.src = _images_canny_canny5_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  image.alt = \"canny5\";\n  page.innerHTML = \"You get the first turn!<br/>\\n        There is no way you are going to lose.\";\n  link.innerHTML = \"Next\";\n  link.onclick = (0,_friends6__WEBPACK_IMPORTED_MODULE_0__.friends6)();\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends5.js?");

/***/ }),

/***/ "./src/friends/friends6.js":
/*!*********************************!*\
  !*** ./src/friends/friends6.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends6\": () => (/* binding */ friends6)\n/* harmony export */ });\n/* harmony import */ var _friends7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends7 */ \"./src/friends/friends7.js\");\n/* harmony import */ var _images_canny_canny6_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/canny/canny6.png */ \"./src/images/canny/canny6.png\");\n\n\nfunction friends6() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"You win all the free for all minigames\";\n  image.src = _images_canny_canny6_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  image.alt = \"canny6\";\n  page.innerHTML = \"You win all the free for all minigames<br/>\\n        and the everyone against you minigames too so far.<br/>\\n        You feel unstopabled.\";\n  link.innerHTML = \"Next\";\n  link.onclick = (0,_friends7__WEBPACK_IMPORTED_MODULE_0__.friends7)();\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends6.js?");

/***/ }),

/***/ "./src/friends/friends7.js":
/*!*********************************!*\
  !*** ./src/friends/friends7.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends7\": () => (/* binding */ friends7)\n/* harmony export */ });\n/* harmony import */ var _friends8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends8 */ \"./src/friends/friends8.js\");\n/* harmony import */ var _images_canny_canny7_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/canny/canny7.png */ \"./src/images/canny/canny7.png\");\n\n\nfunction friends7() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"Jackpot!\";\n  image.src = _images_canny_canny7_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  image.alt = \"canny7\";\n  page.innerHTML = \"Just a few turns to end, you stealed all the coins<br/>\\n        from the one that had the most coins.\\n        You are rich!\";\n  link.innerHTML = \"Next\";\n  link.onclick = (0,_friends8__WEBPACK_IMPORTED_MODULE_0__.friends8)();\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends7.js?");

/***/ }),

/***/ "./src/friends/friends8.js":
/*!*********************************!*\
  !*** ./src/friends/friends8.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends8\": () => (/* binding */ friends8)\n/* harmony export */ });\n/* harmony import */ var _friends9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends9 */ \"./src/friends/friends9.js\");\n/* harmony import */ var _images_canny_canny8_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/canny/canny8.png */ \"./src/images/canny/canny8.png\");\n\n\nfunction friends8() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"You won!\";\n  image.src = _images_canny_canny8_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  image.alt = \"canny8\";\n  page.innerHTML = \"Thanks to the bonus stars from the end, you had enough<br/>\\n        to get the first place.<br/>\\n        You won! Even when everyone else tried their best to ruin you.\";\n  link.innerHTML = \"Next\";\n  link.onclick = (0,_friends9__WEBPACK_IMPORTED_MODULE_0__.friends9)();\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends8.js?");

/***/ }),

/***/ "./src/friends/friends9.js":
/*!*********************************!*\
  !*** ./src/friends/friends9.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends9\": () => (/* binding */ friends9)\n/* harmony export */ });\n/* harmony import */ var _friends10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends10 */ \"./src/friends/friends10.js\");\n/* harmony import */ var _images_uncanny_uncanny1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/uncanny/uncanny1.png */ \"./src/images/uncanny/uncanny1.png\");\n\n\nfunction friends9() {\n  let header = document.getElementById(\"header\");\n  let image = document.getElementById(\"image\");\n  let page = document.getElementById(\"page\");\n  let link = document.getElementById(\"link\");\n  header.textContent = \"You won, but ...\";\n  image.src = _images_uncanny_uncanny1_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  image.alt = \"uncanny1\";\n  page.innerHTML = \"Everyone is mad at you.<br/>\\n        They call you cheater and other things.\";\n  link.innerHTML = \"Next\";\n  link.onclick = (0,_friends10__WEBPACK_IMPORTED_MODULE_0__.friends10)();\n}\n\n//# sourceURL=webpack://lab6/./src/friends/friends9.js?");

/***/ }),

/***/ "./src/friends/story2.js":
/*!*******************************!*\
  !*** ./src/friends/story2.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _friends1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends1 */ \"./src/friends/friends1.js\");\n\n(0,_friends1__WEBPACK_IMPORTED_MODULE_0__.friends1)();\n\n//# sourceURL=webpack://lab6/./src/friends/story2.js?");

/***/ }),

/***/ "./src/images/canny/canny1.png":
/*!*************************************!*\
  !*** ./src/images/canny/canny1.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/canny1.png\");\n\n//# sourceURL=webpack://lab6/./src/images/canny/canny1.png?");

/***/ }),

/***/ "./src/images/canny/canny2.png":
/*!*************************************!*\
  !*** ./src/images/canny/canny2.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/canny2.png\");\n\n//# sourceURL=webpack://lab6/./src/images/canny/canny2.png?");

/***/ }),

/***/ "./src/images/canny/canny3.png":
/*!*************************************!*\
  !*** ./src/images/canny/canny3.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/canny3.png\");\n\n//# sourceURL=webpack://lab6/./src/images/canny/canny3.png?");

/***/ }),

/***/ "./src/images/canny/canny4.png":
/*!*************************************!*\
  !*** ./src/images/canny/canny4.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/canny4.png\");\n\n//# sourceURL=webpack://lab6/./src/images/canny/canny4.png?");

/***/ }),

/***/ "./src/images/canny/canny5.png":
/*!*************************************!*\
  !*** ./src/images/canny/canny5.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/canny5.png\");\n\n//# sourceURL=webpack://lab6/./src/images/canny/canny5.png?");

/***/ }),

/***/ "./src/images/canny/canny6.png":
/*!*************************************!*\
  !*** ./src/images/canny/canny6.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/canny6.png\");\n\n//# sourceURL=webpack://lab6/./src/images/canny/canny6.png?");

/***/ }),

/***/ "./src/images/canny/canny7.png":
/*!*************************************!*\
  !*** ./src/images/canny/canny7.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/canny7.png\");\n\n//# sourceURL=webpack://lab6/./src/images/canny/canny7.png?");

/***/ }),

/***/ "./src/images/canny/canny8.png":
/*!*************************************!*\
  !*** ./src/images/canny/canny8.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/canny8.png\");\n\n//# sourceURL=webpack://lab6/./src/images/canny/canny8.png?");

/***/ }),

/***/ "./src/images/normal.png":
/*!*******************************!*\
  !*** ./src/images/normal.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/normal.png\");\n\n//# sourceURL=webpack://lab6/./src/images/normal.png?");

/***/ }),

/***/ "./src/images/uncanny/uncanny1.png":
/*!*****************************************!*\
  !*** ./src/images/uncanny/uncanny1.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/uncanny1.png\");\n\n//# sourceURL=webpack://lab6/./src/images/uncanny/uncanny1.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/friends/story2.js");
/******/ 	
/******/ })()
;