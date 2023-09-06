//model
let numbers = [4, null, 1, 6, 3, 9, 2, 5, 8, 10, 11, 12, 13, 14, 15, 16];
const sizeX = 8;
//view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
        <div class="grid" style="grid-template-columns: repeat(${sizeX}, 1fr);">
            ${createDiv()}
        </div>
    `;
}

function createDiv() {
    let html = '';
    for (let i = 0; i < numbers.length; i++) {
        html += `<div onclick="changeNumbersWithBlank(${i})">${numbers[i]}</div>`;
    }
    return html;
}
//controller
changeNumbersWithBlank();
function changeNumbersWithBlank(numIndex) {
    let nullPos = numbers.indexOf(null);
    if(nullPos + sizeX == numIndex
        || nullPos - sizeX == numIndex
        || (nullPos + 1 == numIndex) && (numIndex % sizeX != 0)
        || (nullPos - 1 == numIndex) && (numIndex % sizeX != sizeX-1)) 
            [numbers[numIndex],numbers[nullPos]] = [numbers[nullPos],numbers[numIndex]];
    updateView();
}