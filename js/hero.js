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
    if(percentage <= 100){
        welcome.style.backgroundSize = percentage + "%";
        heroBannerImage.style.transform = 'scale(' + (1 +  (percentage * 0.4 / 100)) + ")";
        sofianeLasoa.style.backgroundPosition = percentage + "%";
    }else{
        welcome.style.backgroundSize = 100 + "%";
        heroBannerImage.style.transform = 'scale(' + (1 +  (100 * 0.4 / 100)) + ")";
        sofianeLasoa.style.backgroundPosition = 100 + "%";
    }
    if(percentage > 100){
        heroBanner.style.position = "absolute";
        heroBanner.style.bottom = "0";
        heroBannerImage.style.position = "absolute";
        heroBannerImage.style.bottom = "0";
    }else{
        heroBanner.style.position = "fixed";
        heroBannerImage.style.position = "fixed";
    }
});

