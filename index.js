const navbar = document.querySelector('nav');
const openMenu = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close');

openMenu.addEventListener('click', () => {
  navbar.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  navbar.classList.remove('open');
});
