$(document).ready(function () {

  $(function () {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      prevArrow: false,
      nextArrow: false,
    });

    $('.service-carusel').slick({
      dots: true,
      prevArrow: false,
      nextArrow: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $('.btn-popup').on('click', function () {
      $('.popupMess').addClass('popup-active');
    });

    $('.popupMess-close').on('click', function () {
      $('.popupMess').removeClass('popup-active');
    });
  })

  let $status = $('.slider-number__this');
  let $slickElement = $('.slider');
  let $satusAll = $('slider-number__all');
  
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text('0'+i);
    $satusAll.text('0' + slick.slideCount)
  });

  $('.select-style').styler();
  

});



