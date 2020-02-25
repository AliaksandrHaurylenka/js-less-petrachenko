$(document).ready(function(){

  $('a[href="#tour"], .main_btn, a[href="#sheldure"]').on('click', function(){
    // console.log(this);
    $('.overlay, .modal').fadeToggle();
  });

  $('.close').on('click', function(){
    $('.overlay, .modal').fadeToggle();
  });
});