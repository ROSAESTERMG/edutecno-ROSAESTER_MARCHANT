// JavaScript Document

   $(window).scroll(function() {
        if ($("#menu").offset().Top > 100) {
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


    $(window).scroll(function() {

        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('transp');
                $(this).parent().siblings().removeClass('transp');
            }
        });


        $("#navbar").toggleClass('scrolled', $(this).scrollTop() > $('#link1').height());
    });


    $('[data-toggle="tooltip"]').tooltip()



});