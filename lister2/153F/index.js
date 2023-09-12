//Lag en funksjon som lager en tilfeldig kode med alle bokstavene i alfabetet i tilfeldig rekkefølge.

let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z','Æ','Ø','Å'];
let randomCode = [];

shuffleArray(alphabet);
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        randomCode.push(alphabet[i]);
    }
    console.log(randomCode);
}

// let temp = array[i];
// array[i] = array[j];
// array[j] = temp;