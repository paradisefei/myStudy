"use strict";

var _module = require("./module1.js");

var _module2 = require("./module2.js");

var _module3 = require("./module3.js");

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//导入统一导出
(0, _module.foo)();
//导入默认导出
//导入分别导出

(0, _module2.bar)();
console.log(_module.a);
console.log(_module2.b);
console.log(_module4.default);