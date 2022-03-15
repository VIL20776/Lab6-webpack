"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies6 = movies6;

var _movies = require("./movies7");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny6.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies6() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "You tried to make a call";
  image.src = _uncanny.default;
  image.alt = "uncanny6";
  page.innerHTML = "You tried to make a call with your smartphone.<br/>\n        But you forgot to charge it, so it doesn't turn on.";
  link.innerHTML = "Next";
  link.onclick = (0, _movies.movies7)();
}