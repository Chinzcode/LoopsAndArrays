//model
//view
// updateView();
// function updateView() {
    //     document.getElementById('app').innerHTML = /*HTML*/ `
    //     <textarea name="myTextArea" oninput="textAreaInput=this.value" rows="4" cols="40" placeholder="Write something."></textarea>
    //     <br>
    //     <button onclick="isAlphaNumeric(textAreaInput)">Submit text</button>
    //     `;
    
    // }
//controller

// checkAlphaNumeric('Det var tre, hei på deg, Det var en, hei på deg');
// function checkAlphaNumeric(str) {
    //     let input;
    //     let cleanedInput = '';
    //     let inputArray;
    //     for (let i = 0; i < str.length; i++) {
        //         input = str.charCodeAt(i);
        //         if ((input > 64 && input < 91) //64-91 = (A-Z)
        //         || (input > 96 && input < 123) //96-123 = (a-z)
        //         || (input > 196 && input < 199) // Å/Æ
        //         || (input > 228 && input < 231) // å/æ
        //         || (input == 216) //Ø
        //         || (input == 248) //ø
        //         || (input == 32)) { //32 = space
        //             cleanedInput += String.fromCharCode(input);
        //         } 
        //     }
        //     inputArray = cleanedInput.split(' ');
        //     checkForDuplicateWords(inputArray)
        // }

let words = [];
let wordCounts = [];

clean('Det var to, hei og hade, Det var en, hei og hade, Det Det');
function clean(text){
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let validChars = letters + letters.toUpperCase() + ' ';
    let cleanedText = '';
    let inputArray;
    for (let letter of text){
        if(validChars.includes(letter)) cleanedText+=letter;
    }
    inputArray = cleanedText.split(' ');
    checkForDuplicateWords(inputArray);
}

function checkForDuplicateWords(array) {
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        console.log(word);
        let index = words.indexOf(word);
        console.log(index);
        if (index == -1) {
            words.push(word);
            wordCounts.push(1)
        } else {
            wordCounts[index]++;
        }
    }
    console.log(words);
    console.log(wordCounts);
}