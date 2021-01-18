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
});
