"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends5 = friends5;

var _friends = require("./friends6");

var _canny = _interopRequireDefault(require("../images/canny/canny5.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends5() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "First turn!";
  image.src = _canny.default;
  image.alt = "canny5";
  page.innerHTML = "You get the first turn!<br/>\n        There is no way you are going to lose.";
  link.innerHTML = "Next";
  link.onclick = (0, _friends.friends6)();
}