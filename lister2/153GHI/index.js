let myArray = [2,2,2,4,4];
let newArray = [0,0,0,0,0];

returnFrequencyTable(myArray);
function returnFrequencyTable(array) {
    //Om man har behov for index
    // for (let i = 0; i < array.length; i++) {
    //     newArray[array[i]] +=1
    // }

    //Om man kun trenger verdien
    for(let element of array){
        newArray[i]+=1;
    }
    returnTypeNumber(newArray);
    yatzyPoints(newArray);
}

function returnTypeNumber(array) {
    //Finne høyeste tall i frekvenstabell/mest brukte.
    let num = 0;
    for(let element of array){
        if (num < element) {
            num = element;
        }
    }
    return num;
}

function yatzyPoints(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 2) {  
            sum = i * 2; //2 enere = index 1 = 2, 2 t
        }
    }
    return sum;
}