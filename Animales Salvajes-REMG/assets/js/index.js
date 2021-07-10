// JavaScript Document
import Animal from './animal.js';

var $texto = '';

//----------------fin --------------------------------//

//Clinica.prototype.setAgregarAnimal = function (animal_nuevo) {
//  this.animal.push(animal_nuevo_nuevo);
//}

//var animal1 = new Animal('mio', 'ANEMIA');
//var clinica1 = new Clinica('Australia', [animal1]);


//----------- guardar  ------------------//
const guardar_animal = () => {
var a0 = document.getElementById('animal').selectedIndex ;
var a1 = document.getElementById('animal').value ;    
var e0 = document.getElementById('edad').selectedIndex;
var e1 = document.getElementById('edad').value;
var c1 = document.getElementById('comentarios').value;
var i1 = document.getElementById('preview').style.backgroundImage;

if (a0>0 && e0>0 && c1!='' )   
{
if (a0==1){
    let animalx = new Leon(a1,e1,c1,i1);
    $texto = '<div class="card" style="width: 300px;background-color: #848080;"><img class="card-img-top" src="assets/imgs/'+cambiar_animal(a1)+'"  alt="Foto Animal Registrado">    <div class="card-body"><img src="assets/imgs/audio.svg"  height="30px" alt=""/ onclic="Leon.mostrardatos("'+a1+'")"></div>  </div>';
}
else
if (a0==2){
    let animalx = new Lobo(a1,e1,c1,i1);
}
else
if (a0==3){
    let animalx = new Oso(a1,e1,c1,i1); 
}
else
if (a0==4){
    let animalx = new Serpiente(a1,e1,c1,i1);
}
else
if (a0==5){}
     let animalx = new Aguila(a1,e1,c1,i1);
}
    
$texto = '<div class="card" style="width: 300px;background-color: #848080;"><img class="card-img-top" src="assets/imgs/'+cambiar_animal(a1)+'"  alt="Foto Animal Registrado">    <div class="card-body"><img src="assets/imgs/audio.svg"  height="30px" alt=""/ onclic="animalx.mostrardatos("'+a1+'")"></div>  </div>';

document.getElementById('Animales').innerHTML =$texto;
alert('datos ingresados');
}
else
        alert('***ERROR*** Faltan Datos por Ingresar');
}



//------------------------------------------
let guardar = document.getElementById('btnRegistrar');
guardar.addEventListener('click', guardar_animal);


//------------ cambiar imagen ---------------//
document.getElementById("animal").onchange = function(){
    let value = document.getElementById("animal").value;
    //cambiar_animal(value)
    var imagen= document.getElementById('preview');
    imagen.style.backgroundImage='url(assets/imgs/'+cambiar_animal(value)+')';  
}

const cambiar_animal = (tipo_animal) => {
let nombre_ima=''
if (tipo_animal=='Leon')
     nombre_ima='Leon.png';  
else
if (tipo_animal=='Lobo')
nombre_ima='Lobo.jpg'; 
else
if (tipo_animal=='Oso')
nombre_ima='Oso.jpg'; 
else
if (tipo_animal=='Serpiente')
nombre_ima='Serpiente.jpg'; 
else
if (tipo_animal=='Aguila')
nombre_ima='Aguila.png'; 
return (nombre_ima)
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

