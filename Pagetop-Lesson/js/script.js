/*global $*/
$(function(){
  $('#back a').on('click',function(event){ /*#back内のaタグがクリックされた時の処理*/
    $('body,html').animate({
      scrollTop:0
    },800);
    event.preventDefault();
  });
});