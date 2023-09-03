//model

//view
function showHtml() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <pre id="output"></pre>
    `;
}
showHtml();

function writeHash() {
    document.getElementById('output').innerText += '#';
}

function writeSpace() {
    document.getElementById('output').innerText += ' ';
}

function writeLineBreak() {
    document.getElementById('output').innerText += '\n';
}

//controller
function loopA() {
    let whiteSpace = 3;
    let hash = 2;

    for(let row = 0; row < 4; row++) {
        for (let col = 0; col < whiteSpace; col++) {
            writeSpace();
        }
        for (let col = 0; col < hash; col++) {
            writeHash();
        }
        hash += 2
        whiteSpace --;
        writeLineBreak();
    }
}
loopA();

function loopB() {
    let whiteSpace = 0;
    let hash = 8;

    for(let row = 0; row < 4; row++) {
        for (let col = 0; col < whiteSpace; col++) {
            writeSpace();
        }
        for (let col = 0; col < hash; col++) {
            writeHash();
        }
        hash -= 2
        whiteSpace ++;  
        writeLineBreak();
    }
}
loopB();

//oppg 151H        
// for (let rowIndex = 3; rowIndex >= 0; rowIndex--) {
//     writeRowH(rowIndex);
// }        
// for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
//     writeRowH(rowIndex);
// }        

// function writeRowH(rowIndex){
//     let spaceCount = rowIndex;
//     for (let counter = 0; counter < spaceCount; counter++) {
//         writeSpace();
//     }
//     let hashCount = 8 - 2 * rowIndex;            
//     for (let counter = 0; counter < hashCount; counter++) {
//         writeHash();
//     }
//     writeLineBreak();   
// }