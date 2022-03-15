"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends6 = friends6;

var _friends = require("./friends7");

var _canny = _interopRequireDefault(require("../images/canny/canny6.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends6() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "You win all the free for all minigames";
  image.src = _canny.default;
  image.alt = "canny6";
  page.innerHTML = "You win all the free for all minigames<br/>\n        and the everyone against you minigames too so far.<br/>\n        You feel unstopabled.";
  link.innerHTML = "Next";
  link.onclick = (0, _friends.friends7)();
}