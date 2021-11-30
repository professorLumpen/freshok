$(function(){

  $('.catalog__btn').on("click", function(){
    $(this).toggleClass('catalog__btn--active');
    $('.catalog__list').toggleClass('catalog__list--active');
  });

  $('.user-icons__link--cart, .shopping-cart__close').on("click", function () {
    $('.shopping-cart').toggleClass('shopping-cart--active');
    $('body').toggleClass('body-hidden');
  });

  $('.slider-top').slick({
    infinite: false
  });

  var mixer = mixitup('.products--top');
  var mixer = mixitup('.products--promo');

});