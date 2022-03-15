"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies5 = movies5;

var _movies = require("./movies6");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny5.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies5() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "The dogs from the street went crazy";
  image.src = _uncanny.default;
  image.alt = "uncanny5";
  page.innerHTML = "All the street dogs started to bark loudly.<br/>\n        Just like in the movie. <br/>\n        ...";
  link.innerHTML = "Next";
  link.onclick = (0, _movies.movies6)();
}