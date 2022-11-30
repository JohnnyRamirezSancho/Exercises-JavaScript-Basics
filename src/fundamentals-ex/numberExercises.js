
export function checkVariable(number) {
    if (isNaN(number)) {
        return "No number";
    }
    return "number";
}

export function checkIfIsInteger(number) {
    if (Number.isInteger(number)) {
        return true;
    }
    return false;
}

export function checkIfNumberIsInfinite(number) {
    if (isFinite(number)) {
        return "Number is Finite"
    }
    return "Number is Infinite";
}

export function sum(numb1, numb2) {
    const result = numb1 + numb2;
    return result;    
}

export function subtract(numb1, numb2) {
    const result = numb1 - numb2;
    return result;    
}

export function multiply(numb1, numb2) {
    const result = numb1 * numb2;
    return result;    
}

export function divide(numbOne, numbTwo) {
    const result = numbOne / numbTwo;
    return result;    
}

export function checkIfNumbIsDivisibleByThree(numb1) {
    if(numb1 % 3 == 0){
        return "Number is divisible by 3";

    }
    return "Number is not divisible by 3"
}