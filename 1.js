let display = document.querySelector('#display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate(value) {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid Calculation');
    clearDisplay();
  }
}
