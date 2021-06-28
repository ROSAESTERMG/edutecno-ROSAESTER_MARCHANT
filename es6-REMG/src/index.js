// JavaScript Document

import Persona from './persona.js';
import Impuestos from './impuestos.js';

var $texto = '';

//----------------fin ----paciente----------------------------//
/*
Consultorio.prototype.setAgregarPaciente = function (paciente_nuevo) {
  this.paciente.push(paciente_nuevo);
}

var paciente1 = new Paciente('Marcelo', 20, '111-1', 'ANEMIA');
var consultorio1 = new Consultorio('Arica', [paciente1]);
*/



//----------- guardar pacientes ------------------//
let guardar = document.getElementById('guardar');
guardar.addEventListener('click',guardarpersona);

function guardarpersona() {
event.preventDefault();
  let n1 = document.getElementById('nombre_p').value;
  let m1 = parseInt(document.getElementById('monto_p').value);
  let d1 = parseInt(document.getElementById('deducible_p').value);
    
 if (m1 && d1 > 0) {
 let resultado = new Impuestos(m1,d1);
div_mostrar.innerHTML = Impuestos.calcular();
}
else {
div_mostrar.innerHTML = 'Debe ingresar un número... ';
div_mostrar.innerHTML = ' y este debe ser mayor que cero';
};
   
    
  document.getElementById("nombre_p").value = '';
  document.getElementById("monto_p").value = '';
  document.getElementById("deducible_p").value = '';
  alert('datos ingresados');
}


