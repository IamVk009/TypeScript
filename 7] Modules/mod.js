"use strict";
// This file will become module when we export any one of its element.
exports.__esModule = true;
exports.Employee4 = exports.fun = exports.n = void 0;
exports.n = 200;
function fun(name) {
    console.log("Hello " + name);
}
exports.fun = fun;
var Employee4 = /** @class */ (function () {
    function Employee4() {
    }
    Employee4.prototype.showMsg = function () {
        console.log("This is showMsg function from Employee4 class.");
    };
    return Employee4;
}());
exports.Employee4 = Employee4;
