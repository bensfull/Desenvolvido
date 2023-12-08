let navbar = document.querySelector('.header .navbar')
let searchform= document.querySelector('.header .search-form')
let loginform= document.querySelector('.header .login-form')
let contactinfo= document.querySelector('.contact-info')

document.getElementById('menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchform.classList.remove('active')
    loginform.classList.remove('active')
}

document.getElementById('search-btn').onclick = () =>{
    searchform.classList.toggle('active')
    loginform.classList.remove('active')
    navbar.classList.remove('active')

}
document.getElementById('login-btn').onclick = () =>{
    loginform.classList.toggle('active')
    searchform.classList.remove('active')
    navbar.classList.remove('active')
}

document.querySelector('#info-btn').onclick = () => {
    contactinfo.classList.add('active')
}
document.querySelector('#close-contact-info').onclick = () => {
    contactinfo.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
    searchform.classList.remove('active')
    loginform.classList.remove('active')
    contactinfo.classList.remove('active')
}



var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 5,
        },
    },
});


var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 5,
        },
    },
});


var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },
});
