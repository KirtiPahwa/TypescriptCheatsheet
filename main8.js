"use strict";
// MODULES 
// In typescript , we have concept called modules . 
// Each file is accessible anywhere.
// In typescript , each file defines its own scope. You can use other files variables by just importing 
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x) {
        this.x = x;
    }
    Point.prototype.draw = function () {
        console.log(this.x);
    };
    return Point;
}());
exports.Point = Point;
// wwe will import this in main9.ts
