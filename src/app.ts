export class Calculator {

    calculate(a: number, b: number, operation: string): number {
        let result: number = 0;
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


    }
}