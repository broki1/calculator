const input = document.getElementById('calculatorInput');
const buttons = document.querySelectorAll('.inputElements');
const clear = document.querySelector('.clear');
const evaluate = document.querySelector('.evaluate');

input.innerText = "";

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    input.innerText = input.innerText.concat(button.innerText);
  });
});

clear.addEventListener('click', () => {
  input.innerText = "";
});

evaluate.addEventListener('click', () => {
  input.innerText = eval(input.innerText);
})
