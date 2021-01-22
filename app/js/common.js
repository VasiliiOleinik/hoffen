$(function () {
  $('input').on('click', function () {
    $('.gradient-input').removeClass('isFocus');
    $('.gradient-textarea').removeClass('isFocus');
    $(this).parent().addClass('isFocus');
  });
  $('textarea').on('click', function () {
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
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  });
  $('.review-nav_item').each(function (index) {
    $(this).attr('data-idx', ++index);
  });
  $('.review-nav_item').on('click', function () {
    const order = $(this).attr('data-idx');
    $('.review-nav_item').removeClass('active');
    $(this).addClass('active');
    $('.review-item').css({ 'order': 2 });
    $(`.review-item:nth-child(${order})`).css({ 'order': -5 });
    if (screen.width < 992) {
      $('.review-item').hide();
      $(`.review-item:nth-child(${order})`).show().css({ 'display': 'flex' });
    }
  });
  $('.hover-box').hover(function () {
    $(this).find('.hover-box-hover').fadeIn(200);
  }, function () {
    $(this).find('.hover-box-hover').fadeOut(200);
  });
  $('.mobile-left-nav-btn').on('click', function () {

    $(this).addClass('active');
    $(this).text('Close menu');
    $('.main-left-nav').addClass('active');
  });
  $(document).mouseup(function (e) {
    var div = $(".main-left-nav.active");
    var btn = $(".mobile-left-nav-btn.active");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.removeClass('active');
      btn.removeClass('active');
    }
    // if(btn.is(e.target)) {
    //   div.removeClass('active');
    //   btn.removeClass('active');
    // }
  });


});
