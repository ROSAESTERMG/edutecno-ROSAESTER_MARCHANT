// JavaScript Document
import Animal from './animal.js';
import Clinica from './clinica.js';

var $texto = '';

//----------------fin --------------------------------//

Clinica.prototype.setAgregarAnimal = function (animal_nuevo) {
  this.animal.push(animal_nuevo_nuevo);
}

var animal1 = new Animal('mio', 'ANEMIA');
var clinica1 = new Clinica('Australia', [animal1]);




//----------- guardar  ------------------//
const guardar_animal = () => {

var a0 = document.getElementById('animal').selectedIndex ;
var a1 = document.getElementById('animal').value ;    
var e0 = document.getElementById('edad').selectedIndex;
var e1 = document.getElementById('edad').value;
var c1 = document.getElementById('comentarios').value;
var i1 = document.getElementById('preview').style.backgroundImage;

if (a0>0 && eo>0 && c1!='' )   
{
    
let animalx = new Animal(a1,e1,c1,i1);

console.log(animalx.nombre);
    console.log(animalx.edad);
    console.log(animalx.obs);
console.log(animalx.img);
$texto = '<div class="card" style="width: 18rem;background-color: #848080;">'
$texto += '<img class="card-img-top" src="" alt="Foto Animal Registrado">'
$texto = '<div class="card-body" >'
$texto = '<img src="assets/imgs/audio.svg"  height="30px" alt=""/>'
$texto = '</div></div>'
alert('datos ingresados');
}
    else
        alert('***ERROR*** Faltan Datos por Ingresar')

}



//------------------------------------------
let guardar = document.getElementById('btnRegistrar');
guardar.addEventListener('click', guardar_animal);


//------------ cambiar imagen ---------------//

document.getElementById("animal").onchange = function(){
    let value = document.getElementById("animal").value;
    cambiar_animal(value)
}


const cambiar_animal = (tipo_animal) => {
var imagen= document.getElementById('preview');
if (tipo_animal=='Leon')
     imagen.style.backgroundImage='url(assets/imgs/Leon.png)';  
else
if (tipo_animal=='Lobo')
imagen.style.backgroundImage='url(assets/imgs/Lobo.jpg)'; 
else
if (tipo_animal=='Oso')
imagen.style.backgroundImage='url(assets/imgs/Oso.jpg)'; 
else
if (tipo_animal=='Serpiente')
imagen.style.backgroundImage='url(assets/imgs/Serpiente.jpg)'; 
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

