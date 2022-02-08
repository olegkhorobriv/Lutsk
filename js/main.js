$(function () {

    $('.kafe__inner').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.red__inner').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.travel__inner').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                }
    },
]
    });

var mixer = mixitup('.products__inner-box');

    $('.kafe__menu-btn').on('click', function(){
$('.kafe__menu').slideToggle();
});
        $('.drop-down__li1').on('click', function(){
$('.drop-down__lis1').slideToggle();
});
         $('.drop-down__li2').on('click', function(){
$('.drop-down__lis2').slideToggle();
})
        $('.drop-down__li3').on('click', function(){
$('.drop-down__lis3').slideToggle();
})
        $('.drop-down__li4').on('click', function(){
$('.drop-down__lis4').slideToggle();
})
        $('.drop-down__li5').on('click', function(){
$('.drop-down__lis5').slideToggle();
})
});
