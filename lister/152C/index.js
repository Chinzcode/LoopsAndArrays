//model
let numbers = [4, null, 1, 6, 3, 9, 2, 5, 8];
//view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
        <div class="grid">
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
function changeNumbersWithBlank(index) {
    let nullPos = numbers.indexOf(null);
    if(nullPos + 3 == index
        || nullPos - 3 == index
        || (nullPos + 1 == index) && (index % 3 != 0)
        || (nullPos - 1 == index) && (index % 3 != 2))
            [numbers[index],numbers[nullPos]] = [numbers[nullPos],numbers[index]];
    updateView();
}