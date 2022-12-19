const heroBanner = document.querySelector('main');
const welcome = document.querySelector('.welcome-container');
const sofianeLasoa = document.querySelector('.hero-banner h1');

window.addEventListener("scroll", () => {
    let windowHeight = window.innerHeight;
    let heroBannerBottom = heroBanner.getBoundingClientRect().y;
    let size = (Math.abs(heroBannerBottom) * 450) / windowHeight;
    console.log(heroBanner.getBoundingClientRect())
    if(-windowHeight < heroBannerBottom){
        welcome.style.backgroundSize = size + "%";
        sofianeLasoa.style.backgroundPosition = size + "%";
    }
});