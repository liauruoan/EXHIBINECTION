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