// JavaScript Document

// --- SCROLL -----
   $(window).scroll(function() {
        if ($("#menu_sup").offset().Top > 100) {
            $("#menu_sup").addClass("menu_transp");
        } else {
            $("#menu_sup").removeClass("menu_transp");
        }
    });



//----TOOLTIP------
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  var scrollLink = $('.scroll');
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });
})
	
//----- VISTA MODAL -----------	
$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});


var $preLoader = $(".main-loader");
$(window).load(function() {
    $preLoader.fadeOut(""); // Animate loader off screen
});