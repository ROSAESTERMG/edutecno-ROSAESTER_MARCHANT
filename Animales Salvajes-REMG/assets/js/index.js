// JavaScript Document
import Animal from './animal.js';
import Clinica from './clinica.js';

var $texto = '';

//----------------fin --------------------------------//

Clinica.prototype.setAgregarAnimal = function (animal_nuevo) {
  this.animal.push(animal_nuevo_nuevo);
}

var animal1 = new Animal('mio', 'ANEMIA');
var clinica1 = new Clinica('Arica', [animal1]);




//----------- guardar  ------------------//
const guardar_animal = () => {

  var n1 = document.getElementById('animal').value;
  var m1 = parseInt(document.getElementById('edad').value);
  var d1 = parseInt(document.getElementById('comnetarios').value);

   let impuestox = new Impuestos(m1,d1);
console.log(impuestox.monto);
console.log(impuestox.deducible); 
     
    /*document.getElementById("nombre").value = '';
  document.getElementById("monto").value = '';
  document.getElementById("deducible").value = '';*/
  alert('datos ingresados');
}

//------------------------------------------
let guardar = document.getElementById('btnRegistrar');
guardar.addEventListener('click', guardar_animal);


//------------ cambiar imagen ---------------//
//let cambiar = document.getElementById('animal');

document.getElementById("animal").onchange = function(){
    let value = document.getElementById("animal").value;
    cambiar_animal(value)
}


const cambiar_animal = (tipo_animal) => {
 var imagen= document.getElementById('preview');
         
console.log(tipo_animal)
if (tipo_animal=='Leon')
     imagen.style.backgroundImage='url(assets/imgs/Leon.png)';  
else
if (tipo_animal=='Lobo')
imagen.style.backgroundImage='url(assets/imgs/Lobo.png)'; 
else
if (tipo_animal=='Oso')
imagen.style.backgroundImage='url(assets/imgs/Oso.png)'; 
else
if (tipo_animal=='Serpiente')
imagen.style.backgroundImage='url(assets/imgs/Serpiente.png)'; 
else
if (tipo_animal=='Aguila')
imagen.style.backgroundImage='url(assets/imgs/Aguila.png)'; 

}

//----------- mostrar animal ------------------//
const mostrar_animal = () => {
  var divr = document.getElementById("div_mostrar")
  var $i = 0;


  $texto = '<br><br><p ">-----------------  animales -------------- </p>';


      for ($i = 0; $i < consultorio1.paciente.length; $i++) {
      $texto += '<p>NOMBRE:' + consultorio1.paciente[$i].getNombre() + ', EDAD:' + consultorio1.paciente[$i].getEdad() + ', RUT:';   
         $texto += consultorio1.paciente[$i].getRut() + ', DIAGNOSTICO:' + consultorio1.paciente[$i].getDiag() + '</p>';
   console.log(consultorio1.paciente[$i].nombre);
  }

  document.getElementById("div_mostrar").innerHTML = $texto;
}
