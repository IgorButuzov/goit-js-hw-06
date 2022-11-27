// Напиши скрипт, який для кожного елемента масиву
// ingredients:

// Створить окремий елемент < li >.
// Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.

// Додасть елементу клас item.

// Після чого, вставить усі < li > за одну операцію у 
// список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// for (let i = 0; i < ingredients.length; i ++) {
  
//   const prodItem = document.createElement("li");
//   prodItem.textContent = `${ingredients[i]}`;
//   prodItem.classList.add("item");

//   const prodList = document.querySelector("#ingredients");
//   prodList.append(prodItem);
  
//   console.log(prodList)
// }
const prodEl = [];

for (let i = 0; i < ingredients.length; i++) {
  const prodItem = document.createElement("li");
  prodItem.textContent = `${ingredients[i]}`;
  prodItem.classList.add("item");
  prodEl.push(prodItem)
}

const prodList = document.querySelector("#ingredients");
  prodList.append(...prodEl);
  console.log(prodList)


  


  



