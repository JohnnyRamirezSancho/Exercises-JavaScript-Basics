export function returnHello(word) {
    return word;
}

export function returnAString() {
    return 'Hello World';
}

export function concatenateStrings() {
    /* Completa la function */
    const firstWord = 'I';
    const secondWord = 'Love';
    const thirdWord = 'JS';
    const space = " ";
    const result = firstWord + space + secondWord + space + thirdWord;
    return result;

}

export function giveOneLetter(searchLetter) {
    /* Completa la function */
    const dog = 'dog';
    const foundLetter = dog.indexOf(searchLetter);
    if (foundLetter >= 0) {
        return searchLetter;
    }
    return false;

}

export function giveTheIndexOfWord() {
    const wordToSearch = 'Butterfly';
    const phrase = "Once upon a time!!!";
    const result = phrase.indexOf(wordToSearch);
    return result;

}

export function replaceFishWords(replacement) {
    let phrase = 'Give a Man a Fish';
    phrase = phrase.replace("Fish", replacement);
    return phrase;

}

export function giveAllLettersInUppercase() {
    let phrase = 'Ride Him, Cowboy!';
    const result = phrase.toUpperCase();
    return result;
}

export function removeWhiteSpaces() {
    let phrase = '    Hands Down    ';
    const result = phrase.trim();
    return result;


}