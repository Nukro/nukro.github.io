$( document ).ready(function() {
    console.log( "ready!" );

    $('.nav-item.only-mobile').click(function(e){
       $(this).siblings().not(".only-mobile").toggle();
    });
});