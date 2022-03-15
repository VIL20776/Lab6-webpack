"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends8 = friends8;

var _friends = require("./friends9");

var _canny = _interopRequireDefault(require("../images/canny/canny8.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends8() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "You won!";
  image.src = _canny.default;
  image.alt = "canny8";
  page.innerHTML = "Thanks to the bonus stars from the end, you had enough<br/>\n        to get the first place.<br/>\n        You won! Even when everyone else tried their best to ruin you.";
  link.innerHTML = "Next";
  link.onclick = (0, _friends.friends9)();
}