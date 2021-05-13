// JavaScript Document

   $(window).scroll(function() {
        if ($("#menu_sup").offset().Top > 100) {
            $("#menu").addClass("menu_transp");
        } else {
            $("#menu").removeClass("menu_transp");
        }
    });


$(document).ready(function() {

    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });




    $('[data-toggle="tooltip"]').tooltip()



});