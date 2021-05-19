// JavaScript Document

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $("nav").addClass("scrolled");
    } else {
      $("nav").removeClass("scrolled");
    }
  });


  $('[data-toggle="tooltip"]').tooltip()
  //---- funcion que destaca sección seleccionada
  $('li').click(function () {
    $('li').each(function () {
      //Recorremos todos los "li" para quitarles los fondos
      $(this).css('background-color', '');
    });
    //Se lo añadimos al que se le hace el click
    $(this).css('background-color', '#387B8F');
  });


});


//-----     vista modal de los videos -----------	
$('#modal1').on('hidden.bs.modal', function () {

  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal12').on('hidden.bs.modal', function () {
  // do something...
  $('#modal12 iframe').attr("src", $("#modal12 iframe").attr("src"));
});
$('#modal13').on('hidden.bs.modal', function () {
  // do something...
  $('#modal13 iframe').attr("src", $("#modal13 iframe").attr("src"));
});
$('#modal14').on('hidden.bs.modal', function () {
  $('#modal14 iframe').attr("src", $("#modal14 iframe").attr("src"));
});


//---------- evento onload para así mostrar mensaje de carga pagina inicial ---//
$(window).on("load", function () {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});
