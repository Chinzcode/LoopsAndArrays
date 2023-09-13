let smallStraight = [1,2,3,4,5];
let bigStraight = [2,3,4,5,6];

function checkStraight(array) {
    let elementValue;
    let answer = '';
    array[0] == 1 ? elementValue = 0 : elementValue = 1;
    for (let i = 0; i < array.length; i++) {
        if (elementValue + 1 == array[i]) {
            elementValue++;
        } else {
            return 'Ikke straight';
        }
    }
    array[0] == 1 ? answer = 'En liten straight' : answer = 'En stor straight';
    return answer;
}

console.log('small =', checkStraight(smallStraight));
console.log('big =', checkStraight(bigStraight));

/*
Hva er forskjell på liten og stor straight?
1. Start verdi
2. Slutt verdi
3. Sum av alle verdier

Hvordan sjekke om du har en straight?
1. 5 verdier på rad, hvor verdien øker med en for hver gang (det er parallelt med i økning)
2. gå gjennom hele listen og sjekk verdi på hvert element
3. sjekke om det er en økning på en (hvordan?)
4. Lagre element verdi i en variabel. Bruke denne variabelen til å sjekk opp imot.
5. hvis variabel + 1 = element verdi {
    variabel++;
} hvis ikke {
    return 'ikke en straight'
}
*/

// checkStraight(smallStraight);
// function checkStraight(array) {
//     let elementValue;
//     //Sjekke om straight starter på 1 eller 2.
//     if(array[0] == 1) {
//         elementValue = 0;
//     } else {
//         elementValue = 1;
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (elementValue + 1 == array[i]) {
//             elementValue++;
//         } else {
//             return 'Ikke straight';
//         }
//     }
//     if(array[0] == 1) {
//         return 'En liten straight';
//     } else {
//         return 'En stor straight';
//     }
// }
