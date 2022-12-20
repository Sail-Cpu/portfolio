const menuIcon = document.querySelector('.toogle-nav');
const menu = document.querySelector('.menu-container');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    if(menuIcon.classList.contains('active')){
        menuIcon.classList.remove('active');
        menu.classList.remove('active');
        nav.classList.remove('active');
    }else{
        menuIcon.classList.add('active');
        menu.classList.add('active');
        nav.classList.add('active');
    }
})