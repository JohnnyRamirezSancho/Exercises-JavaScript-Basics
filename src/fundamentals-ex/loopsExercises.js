export function countdown()
{
    let count = 10;
    while (count > 0) {
        count--;
    }
    if(count == 0) {
        return "GO";
    }
    return false;

}

export function createNumberList(items)
{
    let arrNumbers = [];
    let count = 1;
    do {
        arrNumbers.push(count);
        count++;
    }
    while (count <= items);
    return arrNumbers;
}

export function makePizza()
{
    let pizza = {};
    let ingredients = ['masa','tomate', 'mozzarella','cheddar','gorgonzola','parmesano'];
    for(let count = 0; count < ingredients.length; count++) {
        pizza[`ingredient${count + 1}`] = ingredients[count];
    }

    return pizza;

}

export function addSpanishInternationalPrefixes()
{
    let phoneNumberList = ['054060719','029830776','159949736','663170151','513407584'];
    let myPhoneNumberList = [];
    phoneNumberList.forEach(phoneNumber => {
        const count = myPhoneNumberList.push(`+34-${phoneNumber}`); 
    });
    return myPhoneNumberList;
}