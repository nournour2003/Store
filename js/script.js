// init Isotope
var $products = $('.all-products').isotope({
    // options
    originLeft: false,

});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $products.isotope({ filter: filterValue });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints:{
        640:{
            sliderPreView:2,
            spaceBetween:20,
        },
        768:{
            sliderPreView:6,
            spaceBetween:15,
        },
        // 1024:{
        //     sliderPreView:5,
        //     spaceBetween:50,
        // },
    },
});