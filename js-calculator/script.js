function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay(value) {
    document.getElementById('display').value = '';
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


var characters = calculatorTypeText.split('');

function typeText(index) {
    if (index < characters.length) {
        calculatorTypeElement.textContent += characters[index];
        index++;
        setTimeout(function() {
            typeText(index);
        }, 200)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    typeText(0);
});