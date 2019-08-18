const toggle = document.querySelector('.toggler'),
    about = document.querySelector('#about'),
aboutText = document.querySelector('#about-text'),
rates = document.querySelector('#rates'),
ratesText = document.querySelector('#rates-text'),
testimonials = document.querySelector('#testimonials'),
testimonialsText = document.querySelector('#testimonials-text'),
contact = document.querySelector('#contact'),
contactText = document.querySelector('#contact-text');


function aboutClose () {
    aboutText.scrollIntoView();
    toggle.checked = false;
    
}
function ratesClose () {
    ratesText.scrollIntoView();
    toggle.checked = false;
    
}

function testimonialsClose () {
    testimonialsText.scrollIntoView();
    toggle.checked = false;
    
}

function contactClose () {
    contactText.scrollIntoView();
    toggle.checked = false;
    
}





about.addEventListener('click', aboutClose)
rates.addEventListener('click', ratesClose)
testimonials.addEventListener('click', testimonialsClose)
contact.addEventListener('click', contactClose)