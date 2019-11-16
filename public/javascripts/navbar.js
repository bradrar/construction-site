$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
          $('a#homepage').addClass('color-change');
    }

    else {
          $('nav').removeClass('black');
          $('a#homepage').removeClass('color-change');
    }
})