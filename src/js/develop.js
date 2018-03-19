$(document).ready(function () {
   $('.js-screen-slider').slick({
       arrows: false,
       infinite: true,
       dots: false,
       slidesToShow: 5,
       slidesToScroll: 1
   });

   $('.js-news-inn-slider').slick({
       arrows: true,
       infinite: true,
       dots: false,
       slidesToShow: 6,
       slidesToScroll: 1
   });
});