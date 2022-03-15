"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends2 = friends2;

var _friends = require("./friends3");

var _canny = _interopRequireDefault(require("../images/canny/canny2.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends2() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "Everyone came here";
  image.src = _canny.default;
  image.alt = "canny2";
  page.innerHTML = "Everyone came here and they brought sodas and nachos.";
  link.innerHTML = "Next";
  link.onclick = (0, _friends.friends3)();
}