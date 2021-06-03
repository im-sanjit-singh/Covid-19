const  Hamburger = document.querySelector('.hamburger');
const NavLinks = document.querySelector('.nav-links');

Hamburger.addEventListener('click', ()=>{
  NavLinks.classList.toggle('show');
});
