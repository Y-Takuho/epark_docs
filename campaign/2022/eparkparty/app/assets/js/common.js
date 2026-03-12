$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  $('.flow-cnt-ttl').click(function(){
    $(this).toggleClass('is-active');
    $(this).next().slideToggle();
  });

  var windowSize = window.innerWidth,
      changeUrlSp02 = 'https://epark.jp/sp/shop_request/4954',
      changeUrlPc02 = 'https://epark.jp/shop_request/4954';
  if (windowSize <= 767) {
    $('.js-lnk-change02').attr('href', changeUrlSp02);
  } else {
    $('.js-lnk-change02').attr('href', changeUrlPc02);
  }
});