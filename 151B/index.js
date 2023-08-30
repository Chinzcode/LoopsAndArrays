//model
let startInput;
let endInput;
let changeInput;
let result = '';

//view
function showHtml() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <label for="startInput">Start-verdi:</label><br>
        <input type="number" min="1" max="50" value="${startInput||''}" oninput="startInput=this.value"><br>
        <label for="endInput">Slutt-verdi:</label><br>
        <input type="number" min="1" max="50" value="${endInput||''}" oninput="endInput=this.value"><br>
        <label for="changeInput">endring:</label><br>
        <input type="number" min="1" max="50" value="${changeInput||''}" oninput="changeInput=this.value"><br><br>
        <button onclick="countNumberInput()">Tell</button>
        <div>${result||''}</div>
        
    `;
}
//controller
function countNumberInput() {
    for (let i = startInput; i <= endInput; i++) {
        result += i;
    }
    showHtml();
}

showHtml();
