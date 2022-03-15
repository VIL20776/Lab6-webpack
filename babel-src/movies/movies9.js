"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies9 = movies9;

var _movies = require("./movies10");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny1.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies9() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "Lights came back";
  image.src = _uncanny.default;
  image.alt = "uncanny1";
  page.innerHTML = "The lights came back, you feel somewhat less scared.";
  link.innerHTML = "Next";
  link.onclick = (0, _movies.movies10)();
}