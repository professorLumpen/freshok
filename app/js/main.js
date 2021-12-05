$(function(){

  

  $('.user-icons__link--search').on("click", function () {
    $('.search').toggleClass('search--active');
  });

  $('.catalog__btn').on("click", function(){
    $(this).toggleClass('catalog__btn--active');
    $('.catalog__list').toggleClass('catalog__list--active');
  });

  $('.user-icons__link--cart, .shopping-cart__close').on("click", function () {
    $('.shopping-cart').toggleClass('shopping-cart--active');
    $('body').toggleClass('overlay');
  });

  $('.burger, .home__close').on("click", function () {
    $('.home').toggleClass('home--active');
    $('body').toggleClass('overlay');
  });



  $('.slider-top').slick({
    infinite: false,
    dots: true
  });


  (function ($) {
    $(function () {

      $('input, select').styler();

    });
  })(jQuery);

  var mixer = mixitup('.products--top');
  var mixer = mixitup('.products--promo');

});