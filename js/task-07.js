// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює
// інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

// < input id = "font-size-control"
// type = "range" min = "16" max = "96" />
// <br />
// <span id="text">Abracadabra!</span>

const changeInput = document.querySelector('#font-size-control');
const outputResult = document.querySelector('#text');


changeInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    outputResult.style.fontSize = event.currentTarget.value + "px";
}