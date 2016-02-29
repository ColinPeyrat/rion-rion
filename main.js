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
});