import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
// import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import Swiper from '../../node_modules/swiper/swiper-bundle';


// Бургер-меню

let html = document.querySelector('html');
let body = document.querySelector('body');
let menuBtn = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let menuIsOpen = false;

menuBtn.addEventListener('click', function() {
    if(!menuIsOpen) {
        menuIsOpen = true;
        menuBtn.classList.add('opened');
        headerMenu.classList.add('opened');
        html.classList.add('no-scroll');
        body.classList.add('no-scroll');
    } else {
        menuIsOpen = false;
        menuBtn.classList.remove('opened');
        headerMenu.classList.remove('opened');
        html.classList.remove('no-scroll');
        body.classList.remove('no-scroll');
    }
})

headerMenu.addEventListener('click', function () {
    menuIsOpen = false;
    menuBtn.classList.remove('opened');
    headerMenu.classList.remove('opened');
    html.classList.remove('no-scroll');
    body.classList.remove('no-scroll');
})

// Слайдер

let slider = document.getElementById('slider');

const swiper = new Swiper(slider, {
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 2
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 48,
            pagination : {
                dynamicBullets: false,
            }
        }
    }
});

// отправка формы

function validateEmail(email) {
    const regex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}


let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let formSubmit = document.getElementById('submit');

formSubmit.addEventListener('click', function() {
    const isValid = validateEmail(email.value);
    if(name.value.length==0) {
        name.classList.add('error');
    } else {
        name.classList.remove('error');
        if (message.value.length == 0) {
            message.classList.add('error');
        } else {
            message.classList.remove('error');
            if (isValid) {
                email.classList.remove('invalid');
                console.log('Имя: '+name.value);
                console.log('Email: '+email.value);
                console.log('Сообщение: '+message.value);

                name.value = '';
                email.value = '';
                message.value = '';
            } else {
                email.classList.add('invalid');
            }
        }
    }
})




ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

// header.init();
lazyLoading.init();
