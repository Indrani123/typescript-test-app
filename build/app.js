"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calculate = function (a, b, operation) {
        var result = 0;
        switch (operation) {
            case "add":
                result = a + b;
                break;
            case "difference":
                result = a - b;
                break;
            case "multiply":
                result = a * b;
                break;
            case "divide":
                result = a / b;
                break;
        }
        return result;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
