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
  let n1 = document.getElementById('nombre').value;
  let m1 = parseInt(document.getElementById('monto').value);
  let d1 = parseInt(document.getElementById('deducible').value);
    
 if (m1 && d1 > 0) {
 
let resultado = new Impuestos(m1,d1);
div_mostrar.innerHTML = Impuestos.calcular();

}else {
div_mostrar.innerHTML = `Debe ingresar un número... `;
div_mostrar.innerHTML = ` y este debe ser mayor que cero`;
};

    
    
    
    

   
    
 /*

  var impuestox = new Pers(m1,d1);
  persona1.setAgregarPersona(impuestox);
 */
    
  document.getElementById("nombre").value = '';
  document.getElementById("monto").value = '';
  document.getElementById("deducible").value = '';
  alert('datos ingresados');
}


//----------- mostrar pacientes ------------------//
const mostrar= () => {
  var divr = document.getElementById("div_mostrar")
  var $i = 0;


  $texto = '<br><br><p ">-----------------  LISTADO DE PACIENTES -------------- </p>';


      for ($i = 0; $i < consultorio1.paciente.length; $i++) {
      $texto += '<p>NOMBRE:' + consultorio1.paciente[$i].getNombre() + ', EDAD:' + consultorio1.paciente[$i].getEdad() + ', RUT:';   
         $texto += consultorio1.paciente[$i].getRut() + ', DIAGNOSTICO:' + consultorio1.paciente[$i].getDiag() + '</p>';
   console.log(consultorio1.paciente[$i].nombre);
  }

  document.getElementById("div_mostrar").innerHTML = $texto;
}

