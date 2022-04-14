const toggle = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icon');

toggle.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});