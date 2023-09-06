let myArray = [1, 2, 3, 4, 5]

function returnSum() {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    return sum;
}

console.log(returnSum());