// model
let numbers = [7, 3, 1, 5, 8];
let chosenBar;
let inputValue;
let isDisabled = 'disabled';
let barText = 'ingen';

// view
updateView();
function updateView() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    document.getElementById('content').innerHTML = /*HTML*/`
        <svg id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        <span>Valgt stolpe: <i>${barText}</i></span>
        <br />
        <span>Verdi:</span>
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onclick="addNewBar()">Legg til stolpe</button>
        <button ${isDisabled} onclick="editChosenBar(${chosenBar})">Endre valgt stolpe</button><br />
        <button ${isDisabled} onclick="removeChosenBar()">Fjerne valgt stolpe</button>
    `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    let borderStyle = '';
    barNo == chosenBar ? borderStyle = `stroke: black; stroke-width: 1px;` : borderStyle = '';
    return `
    <rect 
    onclick="toggleActionForBar(${barNo}) 
    "width="${width}" 
    height="${height}"
    x="${x}" 
    y="${y}" 
    fill="${color}"
    style="${borderStyle}"
    ></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

// controller
function toggleActionForBar(barNo) {
    if (chosenBar === barNo) {
        chosenBar = null;
        barText = 'ingen';
        isDisabled = 'disabled';
    } else {
        chosenBar = barNo;
        barText = barNo;
        isDisabled = '';
    }
    updateView();
}

function removeChosenBar() {
    numbers.splice((chosenBar - 1), 1)
    chosenBar = null;
    barText = 'ingen';
    isDisabled = 'disabled';
    updateView();
}

function editChosenBar() {
    if (inputValue > 0 && inputValue < 11) {
        numbers.splice((chosenBar - 1), 1, inputValue)
    } else {
        alert("Ikke gyldig verdi oppgitt!")
    }
    inputValue = null;
    updateView();
}

function addNewBar() {
    if (inputValue > 0 && inputValue < 11) {
        numbers.push(inputValue);
    } else {
        alert("Ikke gyldig verdi oppgitt!")
    }
    inputValue = null;
    updateView();
}