import { checkIfIsInteger, checkIfNumberIsInfinite, checkIfNumbIsDivisibleByThree, checkVariable, divide, multiply, subtract, sum } from "../../src/fundamentals-ex/numberExercises";

describe.skip('Numbers', () => {
    test.skip('should be 1', () => {
        const number = 1;
        expect(number).toBe(1);
    });

    test.skip('should return "number"', () => {
        const number = 1;
        const isNumber = checkVariable(number);
        expect(isNumber).toBe("number");
    });

    test.skip('should return false if is not an integer', () => {
        const number = 0.5;
        const result = checkIfIsInteger(number);
        expect(result).toBe(false);
    });

    test.skip('should return "Number is Infinite"', () => {
        const number = 5 * Infinity ;
        const result = checkIfNumberIsInfinite(number);
        expect(result).toBe("Number is Infinite");
    });

});

describe('Arithmetic operators', () => {
    test.skip('should return 25', () => {
        const numb1 = 10;
        const numb2 = 15;
        const result = sum(numb1, num2);
        expect(result).toBe(25);
    });

    test.skip('should return 30 after subtract', () => {
        const numb1 = 55;
        const numb2 = 25;
        const result = subtract(numb1, numb2);
        expect(result).toBe(30);
    });

    test.skip('should return 15 after multiply', () => {
        const numb1 = 3;
        const numb2 = 5;
        const result = multiply(numb1, numb2);
        expect(result).toBe(15);
    });

    test.skip('should return 25 after divide', () => {
        const numbOne = 50;
        const numbTwo = 2;
        const result = divide(numbOne, numbTwo);
        expect(result).toBe(25);
    });

    test.skip('should return 0 after use modulus operator', () => {
        const numb1 = 3;
        const result = checkIfNumbIsDivisibleByThree(numb1);
        expect(result).toBe('Number is divisible by 3');
    });
});