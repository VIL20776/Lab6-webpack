"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends9 = friends9;

var _friends = require("./friends10");

var _uncanny = _interopRequireDefault(require("../images/uncanny/uncanny1.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends9() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "You won, but ...";
  image.src = _uncanny.default;
  image.alt = "uncanny1";
  page.innerHTML = "Everyone is mad at you.<br/>\n        They call you cheater and other things.";
  link.innerHTML = "Next";
  link.onclick = (0, _friends.friends10)();
}