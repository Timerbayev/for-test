let color = prompt('Какой будет фон у страницы?');
const b = document.querySelector('body');
b.style.backgroundColor = color;
let color_text = prompt('Какой будет цвет текста на странице?');
const tex = document.querySelector('.page');
tex.style.color = color_text;
let man = prompt('Как зовут человека, который вас вдохновляет');
const person = document.querySelector('.name');
person.innerText = man;
let adress = prompt('Введите адрес картинки');
const ad = document.querySelector('img');
ad.setAttribute('src','img/navy.jpg');
let text_of_page = prompt('Введите текст страницы');
const texts = document.querySelector('.shortBio');
texts.innerText = text_of_page;
texts.className += ' animated'