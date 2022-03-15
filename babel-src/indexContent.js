"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexContent = indexContent;

var _normal = _interopRequireDefault(require("./images/normal.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function indexContent() {
  let header = document.getElementById("header");
  let subheader = document.getElementById("subheader");
  let img = document.getElementById("image");
  let page = document.getElementById("page");
  let newA1 = document.getElementById("moviesLink");
  let newA2 = document.getElementById("friendsLink"); //Asignacion de atributos

  header.textContent = "You are alone in your house at night";
  subheader.textContent = "(Mr. Incredible Story Mode Meme)";
  img.src = _normal.default;
  img.alt = "normal";
  page.innerHTML = "You are alone in your house at night,<br/>\n        your mother went to the supermarket and she won't<br/>\n        come back any time soon.<br/>\n        Nothing really happens were you live so there's nothing<br/>\n        to worry about.<br/>\n        <br/>\n        You decide to...<br/>";
  newA1.href = "story1.html";
  newA1.innerHTML = "Watch movie";
  newA2.href = "story2.html";
  newA2.innerHTML = "Call friends";
}