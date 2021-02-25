$(document).ready(function() {
  $('.showMenu').on('click', function(e){
      e.preventDefault();
      $('body').toggleClass('showMenu-list-show');
  });
});

$(document).ready(function(){
  $('.cart').click(function(){ 
      $('.cartList').slideToggle();
  });
});

$(document).ready(function () {

  $('.top').click(function(event) { 
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
});