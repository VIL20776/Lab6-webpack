"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friends7 = friends7;

var _friends = require("./friends8");

var _canny = _interopRequireDefault(require("../images/canny/canny7.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friends7() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "Jackpot!";
  image.src = _canny.default;
  image.alt = "canny7";
  page.innerHTML = "Just a few turns to end, you stealed all the coins<br/>\n        from the one that had the most coins.\n        You are rich!";
  link.innerHTML = "Next";
  link.onclick = (0, _friends.friends8)();
}