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

  var windowSize = window.innerWidth,
      changeUrlSp = 'https://eparkapp.onelink.me/yuvN?pid=eparkfair_202208_sp',
      changeUrlPc = 'https://eparkapp.onelink.me/yuvN?pid=eparkfair_202208_pc';
  if (windowSize <= 767) {
    $('.js-lnk-change').attr('href', changeUrlSp);
  } else {
    $('.js-lnk-change').attr('href', changeUrlPc);
  }
});