$(function () {
    //ジャンルから選ぶへ戻る
  var toGenre = $('#toGenre');
  toGenre.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 2000 ) {
      toGenre.fadeIn();
    } else {
      toGenre.fadeOut();
    }
  });
  $('#toGenre a').on('click', function() {
    $('#genre').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
    

    
    
});    