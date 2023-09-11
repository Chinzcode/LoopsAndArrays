//Alfabet       ABCDEFGHIJKLMOPQRSTUVWXYZÆØÅ
//Hemmelig kode ÅØÆYUOIEABCDFGHJKLMPQRSTVWXZ
/*
1. Hente ut hver bokstav av tekst som skal krypteres
2. Søke opp hvilken index bokstav har i alphabet listen
3. Finne innholdet på samme index i secretCode
4. printe ut innholdet henta fra secretCode
*/
//Oppgave 153C
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z','Æ','Ø','Å'];
let secretCode = ['Å','Ø','Æ','Y','U','O','I','E','A','B','C','D','F','G','H','J','K','L','M','P','Q','R','S','T','V','W','X','Z'];

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

//Oppgave 153D
//Lag en funksjon som dekrypterer en kodet tekst.

decryptText('MUKBU');
function decryptText(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let x = text.charAt(i); 
        let y = secretCode.indexOf(x); 
        let z = alphabet[y]; 
        decryptedText += z;
    }
    console.log('MUKBU =', decryptedText);
}