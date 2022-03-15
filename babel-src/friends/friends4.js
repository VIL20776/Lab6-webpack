"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends4 = friends4;

var _friends = require("./friends5");

var _canny = _interopRequireDefault(require("../images/canny/canny4.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends4() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "You called your friends";
  image.src = _canny.default;
  image.alt = "canny4";
  page.innerHTML = "Nobody picked Waluigi.<br/>\n        Thats good, because he is your good luck character.<br/>\n        You already have a good feeling about this.";
  link.innerHTML = "Next";
  link.onclick = (0, _friends.friends5)();
}