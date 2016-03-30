$(document).ready(function() {

	//responsive menu
    // $('.headermobile').click(function() {
    //     $('.releaseMenu').toggleClass('open');
    //     toggleMobileMenu();
    // });
    $('.headermobile').click(function() {
      $('.releaseMenu').toggleClass('open');
        toggleMobileMenu();
    });
    function toggleMobileMenu() {
        $('.menumobile').slideToggle();
    }

    $('.portfolio-description').hide();
    $('.portfolio-thumbnail').click(function(){
      var div = $(this).next();
      div.slideToggle();
      $('.portfolio-description').not(div).slideUp();
    });

});
