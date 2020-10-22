(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1.js":2,"./module2.js":3,"./module3.js":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
function foo() {
  console.log('foo-----');
}
var a = exports.a = 100;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function bar() {
  console.log('bar----');
}

var b = [1, 2, 3, 4, 5];

exports.bar = bar;
exports.b = b;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  a: "hello",
  b: 'world'
};
},{}]},{},[1]);
