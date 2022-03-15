"use strict";

require("core-js/modules/es7.promise.finally.js");

var _indexStructure = require("./indexStructure");

var _indexContent = require("./indexContent");

(0, _indexStructure.indexStructure)();
(0, _indexContent.indexContent)();
Promise.resolve().finally(); //babel polyfill test

var foo = function () {
  function bar() {}

  return bar;
}(); //babel plugin test