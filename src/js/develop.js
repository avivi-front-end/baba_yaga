$(document).ready(function () {
   $('.js-screen-slider').slick({
       arrows: false,
       infinite: false,
       dots: false,
       slidesToShow: 5,
       slidesToScroll: 1,
       centerMode: true,
       swipeToSlide: true
   });

   $('.js-news-inn-slider').slick({
       arrows: true,
       infinite: true,
       dots: false,
       slidesToShow: 6,
       slidesToScroll: 1
   });

    $('.js-gallery-slider').slick({
        arrows: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.js-products-slider').slick({
        arrows: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});