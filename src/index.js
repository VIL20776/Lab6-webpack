import {indexStructure} from "./indexStructure";
import {indexContent} from "./indexContent";

indexStructure();
indexContent();

Promise.resolve().finally();//babel polyfill test

var foo = function bar() {};//babel plugin test