"use strict"

//*Практика Home_work #26

//* Обєкти
//const someObject = {
//	name: "Perfection",
//	age: 30
//};
//console.log(someObject.age)

//const windowSize = {
//   width: window.innerWidth,
//   height: window.innerHeight
//}
//console.log(windowSize)


//*Події

//const link = document.querySelector('.link')
//link.addEventListener('click', () => {
   
//})

//link.addEventListener('click', clickReaction)
//link.addEventListener('moeseenter', clickReaction)
//link.addEventListener('moeseleave', clickReaction)



//function clickReaction(e) {
   //console.log(e.type)
   //if (e.type === "click") {
   //   console.log('You click')
   //}
   //const tag = e.target.tagName
   //if (tag === "A") {
   //   console.log('It is link')
   //} else {
   //   console.log('((((')
   //}
//   e.preventDefault();
//}


//const links = document.querySelectorAll('.link')
//links.forEach(link => {
//   link.addEventListener('click', clickReaction)
//})


//* Делегування Подій
/*
document.addEventListener('click', documentAction)

function documentAction(e) {
   console.log('click')
   const targetElement = e.target
   if (targetElement.closest('.link')) {
      console.log('Yes, that is  what wee need')
      e.preventDefault()
   }
}
const page = document.querySelector('.page')
page.insertAdjacentHTML('beforeend', '<a href="https://google.com" target="_blank" class="link">Посилання</a>')
*/


//* Scroll

//window.addEventListener('scroll', windowScroll)
//function windowScroll(e) {
//   console.log(window.scrollY)
//   if (window.scrollY >= 1000) {
//      const upButton= document.querySelector('.up-button')
//      upButton.classList.add('active')
//   } else {
//      upButton.classList.remove('active')
//   }
//}

//* Intersection observer
/*
let options = {
   root: null,
   rootMargin: '0px 0px 0px 0px',
   threshold: 0.3,
}
let callback = (entries, observer) => {
   entries.forEach((entry) => {
      const targetElement = entry.target;
      if (entry.isIntersecting) {
         targetElement.classList.add('show')
         console.log('i see you')
      } else {
         targetElement.classList.remove('show')
         console.log('i didnt see you')
      }
   });
}
let observer = new IntersectionObserver(callback, options);

//* if one element

//const target = document.querySelector('.button');
//observer.observe(target);

//* if MANY element

let someElements = document.querySelectorAll("[class*='--anim']")
someElements.forEach(someElement => {
   observer.observe(someElement)
});
*/

//* LOADED
/*
window.addEventListener("DOMContentLoaded", domLoaded)
function domLoaded(e) {

}
*/
/*
window.addEventListener("load", pageLoaded)
function pageLoaded(e) {
   document.documentElement.classList.add("loaded")
}
*/

//* Timer
/*
function someFunc() {
   console.log('go go go')
}
setTimeout(() => {
   someFunc();
}, 5000);

//* Interval

let i = 5;
let timer = setInterval(() => {
   console.log(i)
   i === 1 ? clearInterval(timer) : null;
   --i;
}, 1000);
*/

//* AJAX
/*
async function addContent() {
   const response = await fetch('url', {});
   if (response.ok) {
      let responseResult = await response.json();
   } else {
      alert('Error');
   }
}
addContent();
*/

//* BURGER
/*
document.addEventListener('click', documentAction)

function documentAction(e) {
   const targetElement = e.target
   if (targetElement.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open')
   }
   e.preventDefault()
}
*/

//* SHOW PASS
/*
document.addEventListener('click', documentAction)

function documentAction(e) {
   const targetElement = e.target
   if (targetElement.closest('.show-pass')) {
      const inputPass = document.querySelector('.pass-input');
      if (inputPass.getAttribute('type') === 'password') {
         inputPass.setAttribute("type", "text")
         targetElement.closest(".show-pass").innerHTML = "Close PASS"
      } else {
         inputPass.setAttribute("type", "password")
         targetElement.closest(".show-pass").innerHTML = "Show PASS"
      }
   }
}
*/

//* Home work #26

// !Задача №1
//Дано в html: три елементи з класом item.
//При кліку на кожен з елментів додати клас active,
//при повторному кліку прибрати клас 

//? Відповідь
/*
document.addEventListener('click', documentAction)

function documentAction(e) {
   //console.log('click')
   const targetElement = e.target
   if (targetElement.closest('.item')) {
      //console.log('Yes, that is  what wee need')
      const activeItem = targetElement.closest('.item')
      activeItem.classList.toggle('active')
   }
}
*/
// !Задача №2
//Дано в css/scss: body прозорий
//При повному завантаженню сторінки додати клас до body який прибирає прозорість.

//? Відповідь

const body = document.body;
window.addEventListener("load", pageLoaded)
function pageLoaded(e) {
   body.classList.add('loaded');
}

// !Задача №3
//Дано в html: header main footer
//Пи наведенні курсору на header змінювати колір фону у footer.
//Коли курсор йде з header повертати початковий фон для footer.

//? Відповідь

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
//console.log(header)
if (header.tagName === "HEADER") {
   header.addEventListener("mouseenter", () => {
      footer.classList.add('footer--grey')
   })
   header.addEventListener("mouseleave", () => {
	footer.classList.remove('footer--grey')
   })
}

//? Відповідь

// !Задача №4
//Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
//Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
//Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
//Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

//? Відповідь

let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 1,
}
function counter(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const item = entry.target;
			const start = itemElement.dataset.start;
			const end = itemElement.dataset.end;
			const delay = itemElement.dataset.delay;
			observer.unobserve(itemElement);
			let counter = start;
			const timer = setInterval(() => {
				item.textContent = counter;
				counter++;
				if (counter > end) {
					clearInterval(timer);
				}
			}, delay);
		} else {
   console.log("ooops")
		}
	});
}
let observer = new IntersectionObserver(counter, options);
const itemElement = document.querySelector('.item');
observer.observe(itemElement);

