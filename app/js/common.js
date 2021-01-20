$(function() {
	$('input').on('click', function() {
    $('.gradient-input').removeClass('isFocus');
    $('.gradient-textarea').removeClass('isFocus');
    $(this).parent().addClass('isFocus');
  });
  $('textarea').on('click', function() {
    $('.gradient-input').removeClass('isFocus');
    $('.gradient-textarea').removeClass('isFocus');
    $(this).parent().addClass('isFocus');
  });

  $('#completed-carousel-js').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.completed-prev-arrow'),
    nextArrow: $('.completed-next-arrow'),
  });
});
