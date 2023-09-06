//Skriv en funksjon som teller antall a-er i en tekst.
function countA(text) {
    let countEachA = 0;
    for (let i = 0; i <= text.length; i++) {
        if (text.charAt(text.length - (1 * i)) == 'a') {
            countEachA++;
        }
    }
    console.log(countEachA);
}
countA('aaa');
//Utvid funksjonen så den teller både upper case og lower case.
function countUpperAndLowerCase(text) {
    let upperCaseCount = 0;
    let lowerCaseCount = 0;
    for (let i = 0; i <= text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            upperCaseCount++;
        }
        if (text[i] >= 'a' && text[i] <= 'z') {
            lowerCaseCount++;
        }
    }
    console.log(upperCaseCount, 'upper');
    console.log(lowerCaseCount, 'lower');
}
countUpperAndLowerCase('aaAAAA');
//Utvid funksjonen i forrige oppgave til å telle en hvilken som helst bokstav, som den også tar i mot som parameter.
function countChar(text, char) {
    let counterEachChar = 0;
    for (let i = 0; i <= text.length; i++) {
        if (text.charAt(text.length - (1 * i)) == char) {
            counterEachChar++;
        }
    }
    console.log(counterEachChar);
}
countChar('bbbbb', 'b');