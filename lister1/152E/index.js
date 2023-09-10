/* Oppgave 152 E  
Skriv en funksjon som tar en liste av tall som parameter og som returnerer true eller false basert på om listen er sortert eller ikke. 
Du skal bare gå gjennom listen en gang med kun én løkke. 

1. lag en liste av tall
2. lag en funksjon som går gjennom listen med en loop
3. lag en variablen for å sjekke nummer opp imot
4. lag en if-setning til å sjekke hvert nummer i listen ved å sjekke innholdet i index. 
5. dersom tallet du sjekker er større enn tallet du har i variabel, setter du variabel verdi til å bli likt tallet du sjekket og deretter sjekk neste tall.
6. dersom du har kommet gjennom hele loopen og alle tallene du sjekket var større for hver gang, var listen sortert.
7. dersom tallet i variabel(forrige tall) var større en nåværende tall vil if-setning bli false og returner false
*/

let myArray = [1, 2, 3, 4, 5];

function checkIfListSorted(arr) {
    let lastNum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (lastNum <= arr[i]) {
            lastNum = arr[i];
        } else {
            return false;
        }
    }
    return true;
}

console.log(checkIfListSorted(myArray));