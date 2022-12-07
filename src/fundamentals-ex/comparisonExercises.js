export function isJane(name)
{
    if(name == "Jane"){
        return name
    }
    return false;
}

export function compareNumbers(number1, number2)
{
    let result = 10;
    if(number1 === number2) {
        return result;
    }
    return false;
}

export function isGreaterThan10(number)
{
    if(number > 10) {
        return number;
    }
    return false;
}

export function isGreaterThan10AndEqualTo20(numb)
{
    if(numb > 10 && numb == 20) {
        return numb;
    }
    return false;
}