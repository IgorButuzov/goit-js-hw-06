// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і виводить 
// значення кольору в span.color.
const bodyChangeColor = document.querySelector('body');
const yourCurrentColor = document.querySelector('.color');

bodyChangeColor.addEventListener('click', getRandomHexColor)

function getRandomHexColor(event) {
  yourCurrentColor.textContent = bodyChangeColor.style.backgroundColor;
  
  return bodyChangeColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
