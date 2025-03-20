// All Sections

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const delivery = document.getElementById('delivery-info');
const faq = document.getElementById('faqs');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// Function for alteration

function displaySections(dIndex) {
    if (dIndex == 0) {
        // Home
        home.classList.remove('hide');
        menu.classList.add('hide');
        delivery.classList.add('hide');
        faq.classList.add('hide');
        about.classList.add('hide');
        contact.classList.remove('hide');
    } else if (dIndex == 1) {
        // Menu
        home.classList.add('hide');
        menu.classList.remove('hide');
        delivery.classList.add('hide');
        faq.classList.add('hide');
        about.classList.add('hide');
        contact.classList.add('hide');
    } else if (dIndex == 2) {
        // Delivery
        home.classList.add('hide');
        menu.classList.add('hide');
        delivery.classList.remove('hide');
        faq.classList.add('hide');
        about.classList.add('hide');
        contact.classList.remove('hide');
    } else if (dIndex == 3) {
        // FAQ's
        home.classList.add('hide');
        menu.classList.add('hide');
        delivery.classList.add('hide');
        faq.classList.remove('hide');
        about.classList.add('hide');
        contact.classList.remove('hide');
    } else if (dIndex == 4) {
        // About
        home.classList.add('hide');
        menu.classList.add('hide');
        delivery.classList.add('hide');
        faq.classList.add('hide');
        about.classList.remove('hide');
        contact.classList.add('hide');
    }
}

// All Buttons

const logo = document.getElementById('logo');

const menuNav = document.getElementById('menu-btn-nav');
const deliveryNav = document.getElementById('delivery-btn-nav');
const faqNav = document.getElementById('faq-btn-nav');
const aboutNav = document.getElementById('about-btn-nav');

const menuCarousel = document.getElementById('menu-carousel');

const deliveryLink = document.getElementById('delivery-link');

// Combinations

logo.addEventListener('click', () => {displaySections(0)});
menuNav.addEventListener('click', () => {displaySections(1)});
menuCarousel.addEventListener('click', () => {displaySections(1)});
deliveryNav.addEventListener('click', () => {displaySections(2)});
deliveryLink.addEventListener('click', () => {displaySections(2)});
faqNav.addEventListener('click', () => {displaySections(3)});
aboutNav.addEventListener('click', () => {displaySections(4)});
