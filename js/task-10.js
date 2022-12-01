// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити,
//     колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.


const boxGroup = document.querySelector('#boxes');
const inputNum = document.querySelector('input');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

inputNum.addEventListener('input', getAmount)

let amount = 0;
let boxlSize = 30;
btnCreate.addEventListener('click', createBoxes);

btnDestroy.addEventListener('click', () => {
  boxGroup.innerHTML = '';
  boxlSize = 30;
});

function getAmount(event) {
  amount = event.currentTarget.value;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(event) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    
  const box = document.createElement('div');
    box.classList.add('box')
    box.textContent = `box ${(i + 1)}`;
    boxlSize += 10;
    box.style.height = `${boxlSize}px`;
    box.style.width = `${boxlSize}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    boxes.push(box);
    
  }
    
  boxGroup.append(...boxes);
};
// const inputEl = document.querySelector('input');
// const btnCreate = document.querySelector('[data-create]');
// const btnDestroy = document.querySelector('[data-destroy]');
// const boxesEl = document.querySelector('#boxes');
// let numberInput = 0;
// inputEl.addEventListener('input', () => {
//   numberInput = Number(inputEl.value);
// });
// btnCreate.addEventListener('click', () => {
//   createBoxes(numberInput);
// });
// btnDestroy.addEventListener('click', destroyBoxes);
// let boxlSize = 20;
// function createBoxes(amount) {
//   const div = [];
//   for (let index = 1; index <= amount; index += 1) {
//     const divEl = document.createElement('div');
//     boxlSize += 10;
//     divEl.style.width = `${boxlSize}px`;
//     divEl.style.height = `${boxlSize}px`;
//     divEl.style.backgroundColor = `${getRandomHexColor()}`;
//     div.push(divEl);
//   }
//   boxesEl.prepend(...div);
// }
// function destroyBoxes() {
//   boxesEl.innerHTML = '';
//   boxlSize = 20;
// }
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }