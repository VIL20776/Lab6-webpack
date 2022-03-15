"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies2 = movies2;

var _movies = require("./movies3");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny2.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies2() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "A blackout happens";
  image.src = _uncanny.default;
  image.alt = "uncanny2";
  page.innerHTML = "A blackout just happend. <br/>\n        Everything turns black.";
  link.innerHTML = "Next";
  link.onclick = (0, _movies.movies3)();
}