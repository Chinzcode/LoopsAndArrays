// MÅ BRUKE DISSE 3 FUNKSJONENE
function writeHash() {
    document.getElementById('output').innerText += '#';
}

function writeSpace() {
    document.getElementById('output').innerText += ' ';
}

function writeLineBreak() {
    document.getElementById('output').innerText += '\n';
}

// OPPGAVE 151 G
//Function with 4 loops to add whitespaces at end
function A() {
    let addWhitespace = 0;
    let addHash = 8;
    for (row=0; row<4; row++) {
        for (col=0; col<addWhitespace; col++) {
            writeSpace();
        }
        for (col=0; col<addHash; col++) {
            writeHash();
        }
        for (col=0; col<addWhitespace; col++) {
            writeSpace();
        }
        addHash -= 2;
        addWhitespace++;
        writeLineBreak();
    }
}
A();

//Function with 3 loops without whitespaces at end
function B() {
    let addWhitespace = 0;
    let addHash = 8;
    for (row=0; row<4; row++) {
        for (col=0; col<addWhitespace; col++) {
            writeSpace();
        }
        for (col=0; col<addHash; col++) {
            writeHash();
        }
        addHash -= 2;
        addWhitespace++;
        writeLineBreak();
    }
}
B();

//Function made in class teaching
function C() {
    for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
        let spaceCount = rowIndex;
        for (let counter = 0; counter < spaceCount; counter++) {
            writeSpace();
        }
        let hashCount = 8 - 2 * rowIndex;            
        for (let counter = 0; counter < hashCount; counter++) {
            writeHash();
        }
        writeLineBreak();            
    }
}
C();




