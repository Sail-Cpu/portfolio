/* Navigation animation*/

/* Menu anim */

const menuIcon = document.querySelector('.toogle-nav');
const menu = document.querySelector('.menu');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    if(menu.classList.contains('active')){
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
        menu.classList.add('active');
    }
})

/* Footer (animation when the user scroll in the footer) */

const footer = document.querySelector('footer');
const body = document.querySelector('body');

window.addEventListener('scroll', () => {
    let position = 0 - (footer.getBoundingClientRect().top - window.innerHeight);
    let size = footer.getBoundingClientRect().height;
    let percentage = position * 100 / size;
    if(percentage > 0){
        footer.style.padding = '80px ' + (percentage / 20)  + 'vw';
        body.style.boxShadow = '0 0 0 ' + (percentage / 20) + 'vw #5154ad inset';
    }else{
        footer.style.padding= 0 + 'px';
        body.style.boxShadow = '0 0 0 ' + (0) + 'px #5154ad inset';
    }
})


/* Footer (animation when mouse is over the contact block) */

const contactBlock = document.querySelectorAll('.contact-block');
const contactBlockH1 = document.querySelectorAll('.contact-block > h1');
const contactBlockContent = document.querySelectorAll('.contact-block-content');

for (let i = 0; i < contactBlock.length; i++) {
    contactBlock[i].addEventListener('mouseover', () => {
        if(!contactBlock[i].classList.contains('active')){
            contactBlock[i].classList.add('active');
            contactBlockH1[i].style.display = 'none';
            contactBlockContent[i].classList.add('active');
        }
    })
    contactBlock[i].addEventListener('mouseout', () => {
        if(contactBlock[i].classList.contains('active')){
            contactBlock[i].classList.remove('active');
            contactBlockH1[i].style.display = 'block';
            contactBlockContent[i].classList.remove('active');
        }
    }) 
}