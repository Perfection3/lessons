const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
   document.documentElement.classList.toggle('menu-open');
})

const list = document.querySelector('.popular__title');
list.addEventListener('click', function () {
   document.documentElement.classList.toggle('list-open');
})