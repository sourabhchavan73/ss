const nextIcon = '<img class="brand-logo" src="../resources/images/nextIcon.png" alt="logo">';
const prevIcon = '<img class="brand-logo" src="../resources/images/prevIcon.png" alt="logo">';

$('.owl-carousel1').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    margin: 10,
    nav: true,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1,
            loop:true
        },
        576: {
            items: 1,
            loop:true
        },
        768: {
            items: 2,
            loop:true
        },
        992: {
            items: 3,
            loop:true
        },
        1200: {
            items: 4,
            loop:true
        }
    }
});

$('.owl-carousel2').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    margin: 10,
    nav: true,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1,
            loop:true
        },
        576: {
            items: 2,
            loop:true
        },
        768: {
            items: 2,
            loop:true
        },
        992: {
            items: 2,
            loop:true
        },
        1200: {
            items: 3,
            loop:true
        }
    }
});