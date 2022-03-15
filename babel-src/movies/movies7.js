"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies7 = movies7;

var _movies = require("./movies8");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny7.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies7() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "Someone is going up";
  image.src = _uncanny.default;
  image.alt = "uncanny7";
  page.innerHTML = "You hear footsteps from the stairs.<br/>\n        Someone is going up, and your room is just up the stairs.";
  link.innerHTML = "Next";
  link.onclick = (0, _movies.movies8)();
}