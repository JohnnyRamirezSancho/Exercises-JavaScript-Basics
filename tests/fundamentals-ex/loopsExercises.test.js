import { addSpanishInternationalPrefixes, countdown, createNumberList, makePizza } from "../../src/fundamentals-ex/loopsExercises";

describe('Loops', () => {
    test('while loop, should return GO when count arrive to 0', () => {
        const result = countdown();
        expect(result).toEqual('GO');
    });

    test('do ... while', () => {
        const items = 10;
        const result = createNumberList(items);
        expect(result[0]).toEqual(1); // comprueba que el primer número sea el uno
        expect(result).toContain(10); // comprueba que el array contiene el número 10
        expect(result).toHaveLength(10); // comprueba que la longitud del array es de 10
    });

    test('for loop', () => {
        let pizza = {
            ingredient1: 'masa',
            ingredient2: 'tomate',
            ingredient3: 'mozzarella',
            ingredient4: 'cheddar',
            ingredient5: 'gorgonzola',
            ingredient6: 'parmesano'
        }
        const miPizza = makePizza();

        expect(miPizza).toEqual(pizza);
    });

    test('foreach loop', () => {
        /* Completa el test y modifica la function addSpanishInternationalPrefixes */
        let phoneNumberList = ['+34-054060719','+34-029830776','+34-159949736','+34-663170151','+34-513407584'];
        const myPhoneList = addSpanishInternationalPrefixes();

        expect(myPhoneList).toContain('+34-159949736');
        expect(myPhoneList).toEqual(expect.arrayContaining(phoneNumberList));;
        
    });
});