function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


function clearDisplayAndReload() {
    clearDisplay();
    location.reload();
}


function calculateResult() {
    const displayValue = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(displayValue);
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

const buttons = document.querySelectorAll('.calculator button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculateResult();
        } else if (button.textContent === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(button.textContent);
        }
    });
});


document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = '1234567890.+-*/%=C';

  
    if (validKeys.includes(key)) {
        if (key === '=') {
            calculateResult();
        } else if (key === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(key);
        }
    }
});
