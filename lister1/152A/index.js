function makeAndReturnArray() {
    let myArray = [];
    for (let i = 100; i < 1000; i+= 7) {
        myArray.push(i);
    }
    return myArray;
}

console.log(makeAndReturnArray());