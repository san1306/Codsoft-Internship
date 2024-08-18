// Get references to the display and buttons
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        handleButtonClick(value);
    });
});

function handleButtonClick(value) {
    if (value === 'AC') {
        display.value = '';
    } else if (value === 'del') {
        display.value = display.value.slice(0, -1);
    } else if (value === '=') {
        try {
            display.value = eval(display.value.replace('x', '*'));
        } catch {
            display.value = 'Error';
        }
    } else if (value === '%') {
        display.value = (parseFloat(display.value) / 100).toString();
    } else {
        display.value += value;
    }
}

