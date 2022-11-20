// Напиши скрипт, який:

// 1)Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.

// 2)Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії
// (усіх < li >, вкладених в нього).
//
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categoriesEl = categories.children;
console.log(categoriesEl);
console.log(`Number of categories: ${(categoriesEl.length)}`);

const animalEl = categories.firstElementChild;
console.log(`Category: ${(animalEl.firstElementChild.textContent)}`)
console.log(`Elements: ${(animalEl.lastElementChild.children.length)}`)

const productEl = animalEl.nextElementSibling;
console.log(`Category: ${(productEl.firstElementChild.textContent)}`)
console.log(`Elements: ${(productEl.lastElementChild.children.length)}`)

const techEl = categories.lastElementChild;
console.log(`Category: ${(techEl.firstElementChild.textContent)}`)
console.log(`Elements: ${(techEl.lastElementChild.children.length)}`)


