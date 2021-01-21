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
  $('.review-nav_item').each(function(index) {
    $(this).attr('data-idx', ++index);
  });
  $('.review-nav_item').on('click', function() {
    const order = $(this).attr('data-idx');
    $('.review-nav_item').removeClass('active');
    $(this).addClass('active');
    $('.review-item').css({'order': 2});
    $(`.review-item:nth-child(${order})`).css({'order': -5});
  });
  $('.hover-box').hover(function() {
    $(this).find('.hover-box-hover').fadeIn(200);
  }, function() {
    $(this).find('.hover-box-hover').fadeOut(200);
  });
});
