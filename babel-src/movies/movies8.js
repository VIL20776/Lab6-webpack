"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies8 = movies8;

var _movies = require("./movies9");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny8.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies8() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "This is the end";
  image.src = _uncanny.default;
  image.alt = "uncanny8";
  page.innerHTML = "There is nowhere to scape and nowhere to hide.<br/>\n        It's the end for you and you already accepted your fate.";
  link.innerHTML = "Next";
  link.onclick = (0, _movies.movies9)();
}