import { Calculator } from "./app";
import { expect } from 'chai';
describe('Calculator', () => {
    let calculateService: Calculator;
    beforeEach(() => {
        calculateService = new Calculator();
    });

    describe('calculate',()=>{
        it('should do addition when add is passed',()=>{
            const result = calculateService.calculate(1,2, 'add');
            expect(result).to.eq(3);
        });

        it('should do subtraction when difference is passed',()=>{
            const result = calculateService.calculate(20,10, 'difference');
            expect(result).to.eq(10);
        });

        it('should do addition when multiply is passed',()=>{
            const result = calculateService.calculate(20,10, 'multiply');
            expect(result).to.eq(200);
        });

        it('should do divide when divide is passed',()=>{
            const result = calculateService.calculate(20,10, 'divide');
            expect(result).to.eq(2);
        });
    })
})