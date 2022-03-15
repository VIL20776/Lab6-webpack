"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends10 = friends10;

var _normal = _interopRequireDefault(require("../images/normal.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends10() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "Your mom came back";
  image.src = _normal.default;
  image.alt = "normal";
  page.innerHTML = "Your mom came back from the supermarket.<br/>\n        She says that is going to do something for everyone to eat<br/>\n        Everyone seems to forget about your victory,<br/>\n        no friends lost today.";
  link.innerHTML = "End";
  link.href = "index.html";
}