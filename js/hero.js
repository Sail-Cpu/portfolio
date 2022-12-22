const heroBanner = document.querySelector('.hero-banner-container');
const heroBannerImage = document.querySelector('.hero-banner-background-image');
const main = document.querySelector('main')
const whoIAm = document.querySelector('.who-i-am');
const welcome = document.querySelector('.welcome-container');
const sofianeLasoa = document.querySelector('.hero-banner h1');
const backgroundSpace = document.querySelector('.hero-banner-background-image');

const position = main.offsetTop;

window.addEventListener("scroll", () => {
    let percentage = 100 - (main.getBoundingClientRect().top - window.innerHeight) * 100 / (position - window.innerHeight);
    if(percentage <= 110){
        console.log(percentage)
        welcome.style.backgroundSize = percentage + "%";
        heroBannerImage.style.backgroundSize = (145 + (percentage * 0.3)) + "%";
        sofianeLasoa.style.backgroundPosition = percentage + "%";
    }

    if(percentage > 100){
        heroBanner.style.position = "absolute";
        heroBanner.style.bottom = "0";
    }else{
        heroBanner.style.position = "fixed";
    }
});

