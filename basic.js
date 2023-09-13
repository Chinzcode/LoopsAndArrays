let testArray = [4, 5, 6, 7];
let test123 = [2,3,4,5];

test(testArray);
function test(array) {
    //for of = Hente ut verdien inni index. element = verdi
    // console.log(element) = 4,5,6,7
    for (let element of array) {
        // console.log(element);
    }

    //i = index(posisjonstall) //console.log(i) = 0,1,2,3
    //array[i] = verdi inni index //console.log(array[i]) = 4,5,6,7
    for (let i = 0; i < array.length; i++) {
        // console.log('i =', i);
        // console.log(array[i]);
    }
}