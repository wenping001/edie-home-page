const menu_toggle = document.getElementById('menu-toggle');
const menu_close = document.getElementById('menu-close');
const navMenu = document.getElementById('nav-menu');

menu_toggle.addEventListener('click', () => {
  menu_toggle.classList.add('hide');
  navMenu.classList.add('active');
  menu_close.classList.remove('hide');
});

menu_close.addEventListener('click', () => {
  menu_close.classList.add('hide');
  navMenu.classList.remove('active');
  menu_toggle.classList.remove('hide');
});
