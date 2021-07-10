// JavaScript Document
import Animalito from './animal.js';
var $texto='';
var $animal_1;
var $animal_2;
var $animal_3
var $animal_4;
var $animal_5;



//-----------------------------------clases de animales ----------------------------
//---------------leon---------------------
class Leon extends Animalito {
  constructor(nombre,edad,obs,img, sonido) {
   super(nombre,edad,img,obs)
    this._sonido = sonido;
  }

  get sonido() {
    return this._sonido
  }
  set sonido(nuevo_sonido) {
    this._sonido = nuevo_sonido;
  }
    mostrardatos(){
    var playme = document.getElementById('player'); 
        playme.src='assets/sounds/'+this.sonido; 
        playme.load();
        playme.play();
        alert('assets/sounds/'+this.sonido)
}
}

//---------------lobo---------------------
class Lobo extends Animalito {
  constructor(nombre,edad,obs,img, sonido) {
    super(nombre,edad,img,obs, sonido)
 }
  get sonido() {
    return this._sonido
  }
  set sonido(nuevo_sonido) {
    this._sonido = nuevo_sonido;
  }
}  

//---------------oso---------------------
class Oso extends Animalito {
  constructor(nombre,edad,obs,img, sonido) {
    super(nombre,edad,img,obs, sonido)
 }

  get sonido() {
    return this._sonido
  }
  set sonido(nuevo_sonido) {
    this._sonido = nuevo_sonido;
  }
}  
//---------------serpiente---------------------
class Serpiente extends Animalito {
  constructor(nombre,edad,obs,img, sonido) {
    super(nombre,edad,img,obs, sonido)
 }

  get sonido() {
    return this._sonido
  }
  set sonido(nuevo_sonido) {
    this._sonido = nuevo_sonido;
  }
}  
//---------------aguila---------------------
class Aguila extends Animalito {
  constructor(nombre,edad,obs,img, sonido) {
    super(nombre,edad,img,obs, sonido)
 }

  get sonido() {
    return this._sonido
  }
  set sonido(nuevo_sonido) {
    this._sonido = nuevo_sonido;
  }
}  


//--------------------------- guardar  animalito ----------------------------------
const guardar_animal = () => {
event.preventDefault();
var a0 = document.getElementById('animal').selectedIndex ;
var a1 = document.getElementById('animal').value ;    
var e0 = document.getElementById('edad').selectedIndex;
var e1 = document.getElementById('edad').value;
var c1 = document.getElementById('comentarios').value;
var i1 = document.getElementById('preview').style.backgroundImage;

if (a0>0 && e0>0 && c1!='' ) { //---------------VALIDA DATOS DEL FORMULARIO -----------
$texto += '<div  class="card" style="width: 300px;background-color: #848080;"><img class="card-img-top" src="assets/imgs/'+cambiar_animal(a1)+'"  alt="Foto Animal Registrado">    <div class="card-body"><img   src="assets/imgs/audio.svg"  height="30px" alt=""';
if (a0==1){
    $animal_1 = new Leon(a1,e1,c1,i1,'Rugido.mp3');
     $texto +='id="audio1"/></div></div>';
}
else
if (a0==2){
    $animal_2 = new Lobo(a1,e1,c1,i1,'Aullido.mp3');
     $texto +='id="audio2"/></div></div>';
}
else
if (a0==3){
    $animal_3 = new Oso(a1,e1,c1,i1,'Grunido.mp3'); 
     $texto +='id="audio3"/></div></div>';
}
else
if (a0==4){
    $animal_4 = new Serpiente(a1,e1,c1,i1,'Siseo.mp3');
     $texto +='id="audio4"/></div></div>';
}
else
if (a0==5){
    $animal_5 = new Aguila(a1,e1,c1,i1,'Chillido.mp3');
     $texto +='id="audio5"/></div></div>';
}
    
//-----------------------------------------------------------------------------------------------
//------------ DEHABILITA EL ANIMAL SELECCIONADO DEL SELECT PARA QUE NO EXISTAN DUPLICIDAD-------
let option = animal.querySelector(`option[value="${a1}"]`);
option.disabled = true;
//----------------------------LIMPIA LOS DATOS DEL FORMULARIO ----------------------------------    
document.getElementById('Animales').innerHTML =$texto;
document.getElementById('animal').value="Seleccione un animal";
document.getElementById('edad').value="Seleccione un rango de años";
document.getElementById('comentarios').value='';
var imagen= document.getElementById('preview');
imagen.style.backgroundImage='url(assets/imgs/lion.svg)';
alert('DATOS GUARDADOS');//------MENSAJE INGRESO EXITOSO -----
}
else
        alert('***ERROR*** Faltan Datos por Ingresar'); //------MENSAJE DE ERROR SI FALTAN DATOS -----
}


//-----------------------guardar animalito------------------------------
let guardar = document.getElementById('btnRegistrar');
guardar.addEventListener('click', guardar_animal);


//------------llama a funcion cambia imagen al momento de cambiar el select---------------
document.getElementById("animal").onchange = function(){
    let value = document.getElementById("animal").value;
    //cambiar_animal(value)
    var imagen= document.getElementById('preview');
    imagen.style.backgroundImage='url(assets/imgs/'+cambiar_animal(value)+')';  
}


//------------audio animalito------------------------------
 $(document).on('click','#audio1',function(){
      $animal_1.mostrardatos();
 })


//--------------cambia foto animalito-----------------
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


