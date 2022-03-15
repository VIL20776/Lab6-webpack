"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies3 = movies3;

var _movies = require("./movies4");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny3.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies3() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "Someone is trying to enter to the house";
  image.src = _uncanny.default;
  image.alt = "uncanny3";
  page.innerHTML = "You hear like someone is trying to open the main <br/>\n        door of your house. <br/>\n        ...";
  link.innerHTML = "Next";
  link.onclick = (0, _movies.movies4)();
}