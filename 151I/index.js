function writeHash() {
    document.getElementById('output').innerText += '#';
}

function writeSpace() {
    document.getElementById('output').innerText += ' ';
}

function writeLineBreak() {
    document.getElementById('output').innerText += '\n';
}

updateView();
function updateView() {
    writeTopHalf();
    writeBottomHalf();
}

function writeTopHalf() {
    for (let row = 0; row < 4; row++) {
        let spaceBefore = 0 + 1 * row; 
        let spaceAfter = 12 - 4 * row;
        let hash = 1 + 1 * row;

        for (let printSpace = 0; printSpace < spaceBefore; printSpace++) {
            writeSpace();
        }

        for (let i = 0; i < hash; i++) {
            writeHash();
        }

        for (let printSpace = 0; printSpace < spaceAfter; printSpace++) {
            writeSpace();
        }

        for (let i = 0; i < hash; i++) {
            writeHash();
        }
        writeLineBreak();
    }
}

function writeBottomHalf() {
    for (let row = 0; row < 4; row++) {
        let spaceBefore = 3 - 1 * row;
        let spaceAfter = 0 + 4 * row;
        let hash = 4 - 1 * row;

    for (let printSpace = 0; printSpace < spaceBefore; printSpace++) {
            writeSpace();
        }

        for (let i = 0; i < hash; i++) {
            writeHash();
        }
        
        for (let printSpace = 0; printSpace < spaceAfter; printSpace++) {
            writeSpace();
        }
        
        for (let i = 0; i < hash; i++) {
            writeHash();
        }
        writeLineBreak();
    }
}

/*  14
1   #            #
2    ##        ##
3     ###    ###
4      ########
5      ########
6     ###    ###
7    ##        ##
8   #            #  
*/