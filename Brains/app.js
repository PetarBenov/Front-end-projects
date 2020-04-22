	$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 550) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }

    lightbox.option({
      	'resizeDuration': 200,
      	'wrapAround': true,
      	'alwaysShowNavOnTouchDevices': true
    });


});