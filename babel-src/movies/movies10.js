"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies10 = movies10;

require("core-js/modules/es6.regexp.replace.js");

var _normal = _interopRequireDefault(require("../images/normal.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movies10() {
  let header = document.getElementById("header");
  let image = document.getElementById("image");
  let page = document.getElementById("page");
  let link = document.getElementById("link");
  header.textContent = "It was your mom";
  image.src = _normal.default;
  image.alt = "normal";
  page.innerHTML = "AIt was your mom after all.<br/>\n        She came earlier than expected and to your room to check<br/>\n        if you were alright. <br/>\n        You really were scared, but you think that this is <br/>\n        going to be a good story to tell in the future.";
  link.innerHTML = "End";

  link.onclick = () => {
    window.location.replace("index.html");
  };
}