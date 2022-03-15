"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies4 = movies4;

var _movies = require("./movies5");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny4.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies4() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "The movie went like this";
  image.src = _uncanny.default;
  image.alt = "uncanny4";
  page.innerHTML = "You remembered than the movie you just watched<br/>\n        went something like this. <br/>\n        All of this is just a coincidence right? <br/>\n        ... Right?";
  link.innerHTML = "Next";
  link.onclick = (0, _movies.movies5)();
}