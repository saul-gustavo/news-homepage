const navMenu = document.querySelector('.nav-open')
const navClose = document.querySelector('.nav-close')
const navLinks = document.querySelector('.nav-links')
const overlay = document.querySelector('.overlay');

navMenu.addEventListener('click', () => {
    navLinks.classList.add('nav-active')
    overlay.classList.add('overlay-active');
    navMenu.style.display = "none";
    navClose.style.display = "block";
})

navClose.addEventListener('click', () => {
    navLinks.classList.remove('nav-active')
    overlay.classList.remove('overlay-active');
    navMenu.style.display = "block";
    navClose.style.display = "none";
})