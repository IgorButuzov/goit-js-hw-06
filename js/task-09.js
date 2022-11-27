// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і виводить 
// значення кольору в span.color.
const bodyColor = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const yourCurrentColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', getRandomHexColor)

function getRandomHexColor(event) {
  bodyColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  yourCurrentColor.textContent = bodyColor.style.backgroundColor;
}
