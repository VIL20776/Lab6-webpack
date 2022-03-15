"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends3 = friends3;

var _friends = require("./friends4");

var _canny = _interopRequireDefault(require("../images/canny/canny3.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends3() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "They want to play Mario Party";
  image.src = _canny.default;
  image.alt = "canny3";
  page.innerHTML = "You feel lucky today, so you accept it.<br/>\n        Everyone else is saying than they are going to make <br/>\n        sure than you get in the last position, but you are <br/>\n        up for the challenge.";
  link.innerHTML = "Next";
  link.onclick = (0, _friends.friends4)();
}