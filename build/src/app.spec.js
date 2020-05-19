"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var chai_1 = require("chai");
fdescribe('', function () {
    var calculateService;
    beforeEach(function () {
        calculateService = new app_1.Calculator();
    });
    describe('calculate', function () {
        it('should do addition when add is passed', function () {
            var result = calculateService.calculate(10, 20, 'add');
            chai_1.expect(result).to.eq(30);
        });
    });
});
