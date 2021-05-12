// JavaScript Document mio


//------------ envia alerta al ahcer click en el botón enviar correo
function enviarcorreo() {
    alert('"El correo fue enviado correctamente..."');
  }


//-----cambia color de rnegro a rojo y viceversa al hacer doble click
function cambiaarojo(elemento) {
	if (elemento.style.color=='red'){
		elemento.style.color='black';
	}else {
  					elemento.style.color='red';
		}
	return false;
}

//-----------ocultar tarjetas 

function myFunction(elemento) {
	$(document).ready(function()
	    {
	    $("#tarjeta1").on( "click", function() {	 
	        $('#cards1').toggle();
	         });
	    });
}

function myFunction2(elemento) {
	$(document).ready(function()
	    {
	    $("#tarjeta2").on( "click", function() {	 
	        $('#cards2').toggle();
	         });
	    });
}
function myFunction3(elemento) {
	$(document).ready(function()
	    {
	    $("#tarjeta3").on( "click", function() {	 
	        $('#cards3').toggle();
	         });
	    });
}

/*	
	switch (elemento) {
    case 'tarjeta1':	 alert('entro.1..'+elemento); 									$card1.toggle();
			break;
	case 'tarjeta2':	 alert('entro.2..'+elemento); $card2.toggle();
			break;
 	case 'tarjeta3':	  alert('entro.3..'+elemento);$card3.toggle();
			break;		
  }
  */


