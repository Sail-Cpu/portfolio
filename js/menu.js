const menuIcon = document.querySelector('.toogle-nav');
const menu = document.querySelector('.menu');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    if(menuIcon.classList.contains('active')){
        menuIcon.classList.remove('active');
        menu.classList.add('disactive');
        setTimeout(() => {
            menu.classList.remove('disactive');
            menu.classList.remove('active');
            nav.classList.remove('active');
        }, 500)
        
    }else{
        menuIcon.classList.add('active');
        nav.classList.add('active');
        setTimeout(() => {
            menu.classList.add('active');
        }, 1000)
    }
})