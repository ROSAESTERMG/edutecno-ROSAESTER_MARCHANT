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


$("#video1").mouseenter(function(){
  
  $(this).attr("src",$(this).attr("src") + "?autoplay=1");
});

$("#video1").mouseleave(function(){
  var src= $(this).attr("src");
  var arr_str = src.split("?");
  $(this).attr("src",arr_str[0]);
});

