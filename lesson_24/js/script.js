"use strict"

//Практика Home-work #23

//оголошення змінної
//let daysInYear;

// присвоєння змінній значення 
/*
   let daysInMonth = 30;
   let daysInYear;
   daysInYear = 365;
   console.log(daysInYear);
*/

//оголошення константи
//const DAY_IN_WEEK = 15;

//Типи даних:

//undefined
/*
   let daysInYear;
   console.log(typeof daysInYear);
   console.log( daysInYear);
*/


//null
/*
   let daysInYear = null;
   console.log(typeof daysInYear);
   console.log( daysInYear);
*/

//number
/*
   let daysInYear = 365;
   console.log(typeof daysInYear);
   console.log( daysInYear);
*/
   //infinity
   /*
      let daysInYear = 365 / 0;
      console.log(typeof daysInYear);
      console.log( daysInYear);
   */

   //NaN
   /*
      let daysInYear = 365 / `Days`;
      console.log(typeof daysInYear);
      console.log( daysInYear);
   */

//string 
/*
   let daysInYear = `365 Days`;
   console.log(typeof daysInYear);
   console.log( daysInYear);
*/

//boolean
/*
   let daysInYear;
   console.log(typeof Boolean(daysInYear));
   console.log(Boolean(daysInYear));

   let daysInWeek = ` `;
   console.log(typeof Boolean(daysInWeek));
   console.log(Boolean(daysInWeek));

   let week = `7`;
   console.log(typeof Boolean(week));
   console.log(Boolean(week));
*/

//Довжина рядка
/*
   let daysInWeek
   daysInWeek = 'Week has 7 days'
   console.log(daysInWeek.length)
*/

//Регістр літер 
/*
   let daysInWeek
   daysInWeek = 'Week has 7 days'
   console.log(daysInWeek.toUpperCase())
*/

//Пошук
/*
   let daysInWeek = 'Week has 7 days'
   console.log(daysInWeek.includes('7'));
   console.log(daysInWeek.startsWith('We'));
   console.log(daysInWeek.endsWith('has'));
*/

//Пошук та заміна
/*
   let daysInWeek = `How many days in a week?`;
   daysInWeek = daysInWeek.replace('days', 'days and nights');
   console.log(daysInWeek);
*/

//Округлення 
/*
   let daysInWeek = 7.2;
   console.log(Math.floor(daysInWeek));

   daysInWeek = 6.8;
   console.log(Math.ceil(daysInWeek));

   daysInWeek = 6.6;
   console.log(Math.abs(daysInWeek));

   console.log(Math.random());
*/

//Оператори
/*
   let day = `1`
   let daysInWeek = 7
   let daysInYear = 365
   let varOne = `days`
   let varTwo = `nights`

   let varRes = daysInWeek - day;
   console.log(typeof varRes);
   console.log(varRes);

   let varRes = day + varOne;
   console.log(typeof varRes);
   console.log(varRes);

   let varRes = daysInYear + varOne;
   console.log(typeof varRes);
   console.log(varRes);

   let varRes = daysInWeek / day;
   console.log(typeof varRes);
   console.log(varRes);

   let varRes = daysInYear * varTwo;
   console.log(typeof varRes);
   console.log(varRes);

   let varRes = daysInYear % daysInWeek;
   console.log(typeof varRes);
   console.log(varRes);

   let day = +`1`
   let daysInWeek = +`7`
   let varSumm = daysInWeek + day;
   console.log(typeof varSumm);
   console.log(varSumm);

   ++day
   console.log(typeof day);
   console.log(day);

   --daysInWeek
   console.log(typeof daysInWeek);
   console.log(daysInWeek);
*/

//Практика Home-work #24
/*
   let day = `1`
   let daysInWeek = 7
   let daysInYear = 365
   let varOne = 1
   let varTwo = `7`

   let result = daysInWeek == varTwo;
   console.log(result);

   result = daysInWeek === varTwo;
   console.log(result);

   result = daysInWeek > varOne;
   console.log(result);

   result = daysInYear <= varTwo;
   console.log(result);

   result = daysInWeek + varOne <= varTwo + day;
   console.log(!result);

   result = (daysInWeek && varOne) || day;
   console.log(result);
   console.log(typeof result);

   if (varOne > day) {
      let result = varOne + day;
      console.log(result);
   } else if (daysInWeek === `7`) {
      console.log(`daysInWeek = 7`);
   } else if (daysInYear / daysInWeek < 40) {
      let result = `Year has` + daysInYear;
      console.log(result)
   } else {
      console.log('else');
   }

   if (varOne >= day && daysInWeek >= 8 || daysInYear !== 365) {
	let result = "Day in week 7";
   console.log(result);
   } else {
      let result = "Error";
      console.log(result);
   }
*/

//let daysInWeek = 7
//let daysInYear = 365

//let someVar = daysInYear / daysInWeek > 60 ? `true` : `false`
//console.log (typeof someVar)
//console.log (someVar)

//let daysInYear = "Year has 365 days!!!"
//console.log(`Символів: ${daysInYear.length}`);
//for (let i = 0; i < 100; ++i) {
//	console.log(daysInYear[i]);
//}

//let time = ["Ранок", "День", `16-00`, "Вечір", "Ніч"];
//console.log(time);
//for (let i = 0; i < time.length; ++i) {
//console.log(time[i]);
//}

//time.forEach(eachTime => {
//	console.log(eachTime);
//});

//time.forEach((eachTime, index) => {
//	console.log(eachTime);
//   console.log(index)
//});

//time.push("04-00");
//console.log(time);

//console.log(Array.isArray(time));

//let timeStr = time.join(' ');
//console.log(timeStr);
//console.log(typeof timeStr);


//function showMessage() {
//   console.log("Warning!!! Error!!!");
//   }

//showMessage()

//function calc(a = 2, b = 6, c = 0) {
//   return a + b * c
// }
// function showMessage(text = "Текст за замовченням") {
//   console.log(text);
// }
//  showMessage(calc(5, 20, 1))
 
// let result = calc(7, 1, 6);
// showMessage(result);


//const text = "Я майже Фрілансер!!!!"
//let template = ``;
//function createText(text) {
//  for (let i = 0; i < text.length; ++i) {
//    const item = text[i]
//    template += `<span style="animation-delay: 0.${i}s">${item}</span>`
//  }
//}
//createText(text);
//const page = document.querySelector('.page');
//page.insertAdjacentHTML("beforeend", template);



//Задачі Home-work #24

//!Задача №1
//Що потрапить в консоль?
//let someVar = 0;
//++someVar;
//if (someVar) {
//	console.log(someVar);
//}

//!Відповідь
// В консоль потрапляє число 1, оскільки оголошена змінна someVar має значення нуль, яке в подальшому збільшується на 1 інкриментом, 
// та яке потім і потрапляє в консоль, оскільки його булеве значення true, тобто значення змінної існує і відповідно умова if виконується!


//!Задача №2
//За допомогою циклу FOR виведіть в консоль 10 рядків:
//Пункт №1
//Пункт №2
//і т.д.

//!Відповідь
let someString = `Пункт №`
for (let i = 1; i <= 10; ++i) {
	console.log(someString + i);
}

//Задача №3
//Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

//!Відповідь 
   // (40 <= 10) - false; 
   // 15 < 5 - false ТА 10 <= "10" ("10" переведеться в число яке дорівнює числу 10) - true. Але оскільки одне із значень - false, то умова ТА не виконується, і загалом повернеться false;
   // 20 === "20" - строге порівняння, "20" не переведеться в число, число не дорівнює рядку - false;
   // Загалом отримуємо false || false || false, відповідно жодного true немає, тому умова if не виконається

//Задача №4
//Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
//Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
//Функція не має повертати NaN, Infinite або помилку 


//!Відповідь 

function calcDiv(a, b) {
	let result = a / b;
   if (b == 0 || b == null) {
      console.log("На нуль ділити не можливо");
   } else if (isNaN (result)) {
      console.log("Неможливо виконати операцію");
   }
   else {
      console.log(`Результат ділення: ${result}`);
   };
}
   calcDiv (null, -3)
   console.log(typeof result) 


//!Задача №5
//Створіть масив даних - 5 елементів, один з яких число 10
//Обробіть масив за допомогою методу перебору
//Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль


//!Відповідь 

let myArray = ['Вова', "Жека", '10', true, null, 10];
myArray.forEach((item, index) => {
   if (item == 10) {
      console.log(item)
      console.log(index)
   }
});
