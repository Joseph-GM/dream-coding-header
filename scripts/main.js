const toggle = document.querySelector('.navbar_toggleBtn'); //class node 중 navbar_toggleBtn 지정
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icon');

toggle.addEventListener('click', ()=>{
    menu.classList.toggle('active'); // click했을 때 active가 없다면 active를 추가해 주고 있으면 active를 없애줌
    icons.classList.toggle('active');
});