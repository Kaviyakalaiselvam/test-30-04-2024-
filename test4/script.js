let count=0;
let isDarkTheme=false;

const display = document.getElementById('display');
const click = document.getElementById('click');
const reset = document.getElementById('reset');
const red = document.getElementById('red');
const blue= document.getElementById('blue');
const toggleBtn = document.getElementById('toggleBtn');

click.addEventListener('click', () => {
    count++;
    updateDisplay();
  });

  reset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
  });

  red.addEventListener('click', () => {
    display.style.backgroundColor = 'red';
  });

  blue.addEventListener('click', () => {
    display.style.backgroundColor = 'blue';
  });

  toggleBtn.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    updateTheme();
  });
  function updateDisplay() {
    display.innerText = `Count: ${count}`;

    if (count % 5 === 0) {
      display.classList.remove('square', 'rectangle');
      display.classList.add('circle');
    }  else if (count % 2 === 0) {
      display.classList.remove('circle', 'rectangle');
      display.classList.add('square');
    } else {
      display.classList.remove('circle', 'square');
      display.classList.add('rectangle');
    }
  }
  function updateTheme() {
    document.body.style.backgroundColor = isDarkTheme ? 'black' : 'white';
    document.body.style.color = isDarkTheme ? 'white' : 'black';
  }

  updateDisplay();
  updateTheme();

