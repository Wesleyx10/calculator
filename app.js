const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  const value = button.dataset.value;

  if (value) {
    button.addEventListener('click', () => {
      display.value += value;
    });
  } else if (button.classList.contains('equal')) {
    button.addEventListener('click', () => {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    });
  } else if (button.classList.contains('clear')) {
    button.addEventListener('click', () => {
      display.value = '';
    });
  }
});
