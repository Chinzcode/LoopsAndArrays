//Skriv et program som leser inn en linje tekst og teller antall ord, finner det lengste ordet, ordet med flest vokaler og ev. annen statistikk du har lyst til å lage.
function wordCount(str) {
    let wordCount = 0;
    let longestWord;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            wordCount++;
        }
    }
    return wordCount + 1;
}

console.log(wordCount('this is four words'));

function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ 
        longestWord = strSplit[i].length; 
      }
    }
    return longestWord; 
}

console.log(findLongestWord("t te tes test tests"));