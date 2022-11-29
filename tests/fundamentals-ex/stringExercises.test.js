import { concatenateStrings, giveAllLettersInUppercase, giveOneLetter, giveTheIndexOfWord, removeWhiteSpaces, replaceFishWords, returnAString, returnHello } from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
    test.skip('should say Hello', () => {
        const word = "Hello";
        const result = returnHello(word);
        expect(result).toBe('Hello');
    });

    test.skip('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises */
        const result = returnAString();
        expect(result).toBe('Hello World');
    });

    test.skip('should be return I Love JS', () => {
        /* Añade las líneas necesarias al test / Modifica la function concatenateStrings */
        
        const result = concatenateStrings();
        expect(result).toBe('I Love JS');
    });

    test('should return letter g', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
        const letter = "g";
        const searchLetter = giveOneLetter(letter);
        expect(searchLetter).toBe('g');
    });

    test.skip('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */
        const result = giveTheIndexOfWord();
        expect(result).toEqual(-1);
    });

    test.skip('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */
        const replacement = "Pussy Cat";
        const result = replaceFishWords(replacement);
        expect(result).toBe('Give a Man a Pussy Cat');
    });

    test.skip('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        const result = giveAllLettersInUppercase();
        expect(result).toBe('RIDE HIM, COWBOY!');
    });

    test.skip('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */
        const result = removeWhiteSpaces();
        expect(result).toBe('Hands Down');
    });
});