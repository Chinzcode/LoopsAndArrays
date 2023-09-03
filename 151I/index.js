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
        let spaceAfter = 12 - 4 * row;
        let spaceBefore = 0 + 1 * row; 
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

writeTopHalf();





















// let test2 = 0
// for (let row = 0; row < 4; row++) {
//     test2++;
//     for (let printSpace = 4; printSpace > test2; printSpace--) {
//         writeSpace();
//     }
//     writeHash();
//     writeLineBreak();
// }

// function writeTopHalf() {
//     let test = 4
//     for (let row = 0; row < 4; row++) {
//         test--;
//         for (let printSpace = 3; printSpace > test; printSpace--) {
//             writeSpace();
//         }
//         writeHash();
//         writeLineBreak();
//     }
//     let test2 = 0
//     for (let row = 0; row < 4; row++) {
//         test2++;
//         for (let printSpace = 4; printSpace > test2; printSpace--) {
//             writeSpace();
//         }
//         writeHash();
//         writeLineBreak();
//     }
// }