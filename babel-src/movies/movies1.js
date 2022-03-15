"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies1 = movies1;

var _movies = require("./movies2");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny1.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies1() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "You whatched a horror movie";
  image.src = _uncanny.default;
  image.alt = "uncanny1";
  page.innerHTML = "It was way scarier than what you expected.";
  link.innerHTML = "Next";
  link.onclick = (0, _movies.movies2)();
}