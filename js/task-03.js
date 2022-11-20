// Напиши скрипт для створення галереї зображень на 
// підставі масиву даних.HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення 
// елементів < img >, вкладених в < li >.Для створення 
// розмітки використовуй шаблонні рядки і 
// метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну 
// операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або 
// грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

  

  
  
for (const image of images) {
  const imgList = document.createElement("li");

  const imgs = document.createElement("img");
  imgs.src =  image.url;
  imgs.alt = image.alt;
  imgs.classList.add("img");
  imgList.append(imgs);
  
  const pictures = document.querySelector(".gallery");
  pictures.append(imgList); 
    console.log(pictures)
}


  


// const imgList = document.querySelector(".gallery");
// document.createElement("li");
// // console.log(imgList);
  
// const imgs = document.createElement("img");
// imgs.src = images.map(image => image.url);
// imgs.alt = images.map(image => image.alt);
// // console.log(imgs)

// for (const image of images) {
//   console.log(image)
// }


