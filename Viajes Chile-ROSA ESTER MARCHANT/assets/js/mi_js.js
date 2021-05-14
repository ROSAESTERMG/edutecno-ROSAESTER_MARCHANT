// JavaScript Document

   $(window).scroll(function() {
        if ($("#menu_sup").offset().Top > 100) {
            $("#menu_sup").addClass("menu_transp");
        } else {
            $("#menu_sup").removeClass("menu_transp");
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

    
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


/*------------autopaly videos al pasar el mosue---------*/
/*---- video 1----*/
$("#video1").mouseenter(function(){
  
  $(this).attr("src",$(this).attr("src") + "?autoplay=1");
});

$("#video1").mouseleave(function(){
  var src= $(this).attr("src");
  var arr_str = src.split("?");
  $(this).attr("src",arr_str[0]);
});


/*---- video 2----*/
$("#video2").mouseenter(function(){
  
  $(this).attr("src",$(this).attr("src") + "?autoplay=1");
});

$("#video2").mouseleave(function(){
  var src= $(this).attr("src");
  var arr_str = src.split("?");
  $(this).attr("src",arr_str[0]);
});


/*---- video 3----*/
$("#video3").mouseenter(function(){
  
  $(this).attr("src",$(this).attr("src") + "?autoplay=1");
});

$("#video3").mouseleave(function(){
  var src= $(this).attr("src");
  var arr_str = src.split("?");
  $(this).attr("src",arr_str[0]);
});

/*---- video 4----*/
$("#video4").mouseenter(function(){
  
  $(this).attr("src",$(this).attr("src") + "?autoplay=1");
});

$("#video4").mouseleave(function(){
  var src= $(this).attr("src");
  var arr_str = src.split("?");
  $(this).attr("src",arr_str[0]);
});

/*--------fin----autopaly videos al pasar el mosue---------*/