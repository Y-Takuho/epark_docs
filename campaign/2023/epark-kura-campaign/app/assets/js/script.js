$(document).on('click', '.js-open', function(){
  $(this).slideUp();
  $(this).prev('.js-open-next').slideDown();
});
$('.js-year').text(new Date().getFullYear());