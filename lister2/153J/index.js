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