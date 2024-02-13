"use strict"

//*Практика Home_work #25

   //Ширина Вюпорта
//const windowWidth = window.innerWidth;
//console.log (windowWidth)
//console.log (typeof windowWidth)

   //Висота Вюпорта
//const windowHeight = window.innerHeight;
//console.log (windowHeight)
//console.log (typeof windowHeight)


//console.log (navigator.userAgent)


//console.log (navigator.userAgentData.platform)
//? Підкажіть будь-ласка, цікавий фактт.
//? Дана властивість в консолі гугл хром на ПК
//? відображає платформу Андроід, а в Опері - Віндовс.
//? Підозрюю що це через Гугл акаунт, який одночасно авторизований в телефоні, але тим паче...

//console.log(location.href)

//let someLog = location.href +="#menu";
//console.log(someLog);

//alert('Hello World!!!')

//let confirmAnsver = confirm("Are you ready?")
//console.log(confirmAnsver)
//if (confirmAnsver) {
//   console.log("Lets go!")
//} else {
//   console.log("Oh no...")
//}
//confirmAnsver ? console.log("Lets go!") : console.log("Oh no...")

/*
let someAnswer = prompt("Сайт призначений для користувачів старше 18 років. Скільки вам років?")
if (someAnswer === null) {
   console.log('Користувач скасував вхід')
} else if (someAnswer >= 18) {
   console.log(`Користувач вказав, що йому ${someAnswer} років`) 
} else if (someAnswer < 18 && someAnswer > 0) {
   console.log('На жаль користувачу ще не виповнилось 18 років')
} else {
   console.log('Користувач не надав інформацію про свій вік')
}
*/

//*DOM

//const htmlElement = document.documentElement;
//console.log(htmlElement);

//const headElement = document.head;
//console.log(headElement);

//const bodyElement = document.body;
//console.log(bodyElement);


//ПЕРШИЙ І ОСТАННІЙ ДОЧІРНІ ЕЛЕМЕНТИ
//const bodyElement = document.body
//const firstChild = bodyElement.firstElementChild
//console.log(firstChild)
//const lastChild = bodyElement.lastElementChild
//console.log(lastChild)

//Колекція
//const bodyElement = document.body
//const bodyChildren = bodyElement.children
//console.log(bodyChildren)

//for (let i = 0; i < bodyChildren.length; ++i) {
//   console.log(bodyChildren[i])
//}

//for (let bodyChild of bodyChildren) {
//   console.log(bodyChild)
//}

//const bodyElement = document.body;
//const previousSibling = bodyElement.previousElementSibling
//console.log(previousSibling)

//const headElement = document.head;
//const nextSibling = headElement.nextElementSibling
//console.log(nextSibling)

//const mainElement = document.querySelector('main')
//console.log(mainElement)
//if (mainElement) {
//      console.log("someLog")
//}

//const mainElements = document.querySelectorAll('main')
//console.log(mainElements)

//if (mainElements.lenght) {
//   mainElements.forEach(item => {
//   console.log(item)
//   })
//}

//CLASS SELECTOR
//const page = document.querySelectorAll('.page')
//console.log(page)

//const container = document.querySelectorAll('[class*="__container"]')
//console.log(container)

//const page = document.querySelector('.page')
//const parentPage = page.parentElement
//console.log(parentPage)

//const itemBlock = document.querySelector('.block__item')
//const isClosest = itemBlock.closest('.wrapper')
//console.log(isClosest)

//*ЗМІНА HTML

//const blockItems = document.querySelectorAll('.block__item')
//blockItems.forEach(blockItem => {
//   blockItem.innerHTML = '<span>Hello world!</span>'
//})

//blockItems.forEach(blockItem => {
//   blockItem.textContent = '<span>Hello world!</span>'
//})

//*Створення обєктів HTML
//let newObject = document.createElement('ul')
//console.log(newObject)
//newObject.innerHTML = `<li>Hello!</li>`
//console.log(newObject)
//const wrapper = document.querySelector('.wrapper')
//wrapper.before(newObject)
//wrapper.after(newObject)
//wrapper.prepend(newObject)
//wrapper.append(newObject)


//const body = document.querySelector('body')
//body.insertAdjacentHTML("afterbegin", `
//   <ul>
//      <li>Hello</li>
//      <li>World!</li>
//   /ul>
//`)

//beforebegin
//afterbegin
//beforeend
//afterend

//let text = `
//  <ul>
//     <li>Hello</li>
//     <li>World!</li>
//   /ul>
//`
//const body = document.querySelector('body')
//body.insertAdjacentText("afterbegin", text)

//let newObject = document.createElement('ul')
//body.insertAdjacentElement("afterbegin", newObject)

//*ПЕРЕНЕСЕННЯ та копіювання обєкта
//const header = document.querySelector('header')
//let item = document.querySelector('.block')
//header.insertAdjacentElement("beforeend", item)


//const header = document.querySelector('header')
//const cloneHeader = header.cloneNode(true)
//console.log(cloneHeader)

//*Видалення обєкта
//const blockItem = document.querySelector('.block__item')
//blockItem.remove()

//*Перезапис класу
//const blockItem = document.querySelector('.block__item') 
//blockItem.className = 'block__element'

//*ДОДАВАННЯ ВИДАЛЕННЯ ТА ПЕРЕВІРКА класу
/*
const blockItem = document.querySelector('.block__item') 
blockItem.classList.add('block__item--big')
blockItem.classList.remove('block__item--big')
blockItem.classList.toggle('block__item--big')
blockItem.classList.contains('block__item--big')
if (blockItem.classList.contains('block__item--big')) {
   console.log(`Yes! I am big`)
}
*/

//*ДОДАВАННЯ СТИЛІВ

//const blockItem = document.querySelector('.block__item')
//blockItem.style.textDecoration = `underline`;
//let margin = 20
//blockItem.style.marginBottom = `${margin}px`;

//*ОТРИМАННЯ СТИЛІВ
/*
const blockItem = document.querySelector('.block__item')
const blockItemList = getComputedStyle(blockItem)
console.log(blockItemList)
const blockItemFontSize = parseFloat(blockItemList.fontSize)
console.log(blockItemFontSize)
*/

//*Атрибути
/*
const blockItem = document.querySelector('.block__item')
blockItem.dataset.newSize = 60
if (blockItem.hasAttribute(`data-new-size`)) {
   console.log(`Yuhu-u-u`)
}
let newSize = parseFloat(blockItem.dataset.newSize)
console.log(newSize)
blockItem.setAttribute(`data-new-size`, `300`)
blockItem.removeAttribute(`data-new-size`)
*/


//*Інші властивості
//const blockItem = document.querySelector('.block__item')
//console.log(blockItem.tagName)
//if (blockItem.tagName === `DIV`) {
//   console.log(`I am DIV`)
//}
//blockItem.hidden = true

//window.scrollTo({
//   top: 500,
//   left: 0,
//   behavior: "smooth"
//})

//const blockItem = document.querySelector('.block__item')
//function scrollToBlock(element) {
//   element.scrollIntoView({
//      block: "center",
//      inline: "nearset",
//      behevior: "smooth"
//   });
//}
//scrollToBlock(blockItem)





// Задачі

//!Задача №1
//Отримати в константу елемент <body>

//?Відповідь
const bodyElement = document.body;
console.log(bodyElement);


//!Задача №2
//Написати функцію, яка додає в <body> список UL
//з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)


//?Відповідь

//const bodyElement = document.body
const ulList = document.createElement("ul")
bodyElement.insertAdjacentElement("afterbegin", ulList)
function addListItem(liNumber = 5) {
   let liItem = '';
   for (let i = 1; i <= liNumber; ++i) {
      liItem += `<li>Елемент списку №${i}</li>`
   }
   ulList.insertAdjacentHTML("afterbegin", liItem)
}
addListItem()


//!Задача №3
//Додати до елементу <body> класс loaded.
//Потім перевірити чи є клас loaded у елемента <body>
//і, якщо є, додати стиль кольору тексту зелений.

//?Відповідь


//const bodyElement = document.body
bodyElement.classList.toggle('loaded')
if (bodyElement.classList.contains('loaded')) {
   bodyElement.style.color = `green`;
}




//!Задача №4
//Дано в html: три елементи з класом item.
//Треба отримати ці елементи в константу, кожному додати клас active, 
//та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

//?Відповідь

const pageItems = document.querySelectorAll(`.page__item`)
if (pageItems.length) {
   pageItems.forEach((pageItem, index) => {
      pageItem.classList.toggle("active");
      pageItem.textContent = `Елемент №${++index}`;
   })
} else {
   console.log(`Ooops`)
}

//!Задача №5
//Дано в html: текст, далі кнопка з класом button.
//Треба прокрутити скрол сторінки до кнопки

//?Відповідь

const button = document.querySelector('.page__button')
function scrollToButton(element) {
   element.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth"
   })
}
scrollToButton(button)



//!Задача №6
//Дано в html: посилання з класом link
//Треба додати до посилання дата атрибут зі значенням 100
//Поім отримати значення атрибуту, та, якщо значення меньше 200
//пофарбувати колір тексту посилання в червоний

//?Відповідь

const pageLink = document.querySelector(`.page__link`)
pageLink.dataset.newSize = 100
let newSize = parseFloat(pageLink.dataset.newSize)
if (newSize < 200) {
   pageLink.style.color = `red`;
} else {
   pageLink.style.color = `purple`;
}


