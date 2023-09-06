function writeHash() {
    document.getElementById('output').innerText += '#';
}

function writeSpace() {
    document.getElementById('output').innerText += ' ';
}

function writeLineBreak() {
    document.getElementById('output').innerText += '\n';
}

function writeTopHalf() {
    for (let row = 0; row < 4; row++) {
        let spaceBefore = 0 + 1 * row; 
        let spaceAfter = 12 - 4 * row;
        let hash = 1 + 1 * row;

        for (let i = 0; i < spaceBefore; i++) {
            writeSpace();
        }
        for (let j = 0; j < hash; j++) {
            writeHash();
        }
        for (let k = 0; k < spaceAfter; k++) {
            writeSpace();
        }
        for (let l = 0; l < hash; l++) {
            writeHash();
        }
        writeLineBreak();
    }
}

function writeBottomHalf() {
    for (let row = 0; row < 4; row++) {
        let spaceBefore = 3 - (1 * row);
        let spaceAfter = 0 + (4 * row);
        let hash = 4 - (1 * row);

        for (let i = 0; i < spaceBefore; i++) {
            writeSpace();
        }
        for (let j = 0; j < hash; j++) {
            writeHash();
        }
        for (let k = 0; k < spaceAfter; k++) {
            writeSpace();
        }
        for (let l = 0; l < hash; l++) {
            writeHash();
        }
        writeLineBreak();
    }   
}

writeTopHalf();
writeBottomHalf();