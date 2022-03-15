"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends1 = friends1;

var _friends = require("./friends2");

var _canny = _interopRequireDefault(require("../images/canny/canny1.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends1() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "You called your friends";
  image.src = _canny.default;
  image.alt = "canny1";
  page.innerHTML = "Coincidentally, most of them are around were you live.<br/>\n        They are going to be here in a few minutes.";
  link.innerHTML = "Next";
  link.onclick = (0, _friends.friends2)();
}