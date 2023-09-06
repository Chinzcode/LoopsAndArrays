//model
let textInput;
let numberInput;

//view
function showHtml() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <label for="textField">Skriv tekst:</label><br>
    <input type=text value="${textInput||''}" oninput="textInput=this.value"/><br>
    <label for="numberField">Maks lengde:</label><br>
    <input type="number" min="1" max="50" value="${numberInput||''}" oninput="numberInput=this.value">
    <br><br>
    <button onclick="repeatText()">Gjenta</button>
    <div>${textInput||''}</div>
    `;
}
//controller
function repeatText(){
    for (let i = 0; i < numberInput.length; i++) {
        textInput += textInput;
    }
    showHtml();
}


showHtml();
