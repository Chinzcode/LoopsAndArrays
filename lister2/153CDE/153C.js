//Alfabet       ABCDEFGHIJKLMOPQRSTUVWXYZÆØÅ
//Hemmelig kode ÅØÆYUOIEABCDFGHJKLMPQRSTVWXZ
/*
1. Hente ut hver bokstav av tekst som skal krypteres
2. Søke opp hvilken index bokstav har i alphabet listen
3. Finne innholdet på samme index i secretCode
4. printe ut innholdet henta fra secretCode
*/

encryptText('TERJE');

function encryptText(text) {
    let secretText = '';
    for (let i = 0; i < text.length; i++) {
        let returnCharAtString = text.charAt(i); //returns char at index in a string. charAt(0) = T.
        let returnElementIndex = alphabet.indexOf(returnCharAtString); //returs the first index where element is found. T = 18.
        let secretChar = secretCode[returnElementIndex]; // secretCode[18] = M. T in normal alphabet = M in secretCode.
        secretText += secretChar;
    }
    console.log('TERJE =', secretText);
}