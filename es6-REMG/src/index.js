// JavaScript Document

import Persona from './persona.js';
import Impuestos from './impuestos.js';


let guardar = document.getElementById('guardar');
guardar.addEventListener('click',guardarpersona);

function guardarpersona() {
event.preventDefault();
  let n1 = document.getElementById('nombre_p').value;
  let m1 = parseInt(document.getElementById('monto_p').value);
  let d1 = parseInt(document.getElementById('deducible_p').value);
    
 if (m1 && d1 > 0) {
 let resultado = new Impuestos(m1,d1);
 let resultado = new Impuestos(m1,d1);
div_mostrar.innerHTML =' Sr(a) : <br>Monto Bruto:'+resultado.monto+'  <br>Deducible:'+resultado.deducible+' <br>*** TOTAL IMPUESTO:'+resultado.calcular()+' ***';
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


