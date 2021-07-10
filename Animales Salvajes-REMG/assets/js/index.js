// JavaScript Document
import Animalito from './animal.js';
var $texto = '';

//---------------------clases de animales ----------------------
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









//----------- guardar  ------------------//
const guardar_animal = () => {
event.preventDefault();
var a0 = document.getElementById('animal').selectedIndex ;
var a1 = document.getElementById('animal').value ;    
var e0 = document.getElementById('edad').selectedIndex;
var e1 = document.getElementById('edad').value;
var c1 = document.getElementById('comentarios').value;
var i1 = document.getElementById('preview').style.backgroundImage;
if (a0>0 && e0>0 && c1!='' ) {
if (a0==1){
    let animalx = new Leon(a1,e1,c1,i1,'Rugido.mp3');
    $texto = '<div class="card" style="width: 300px;background-color: #848080;"><img class="card-img-top" src="assets/imgs/'+cambiar_animal(a1)+'"  alt="Foto Animal Registrado">    <div class="card-body"><img src="assets/imgs/audio.svg"  height="30px" alt=""/ onclic="Leon.mostrardatos("'+a1+'")"></div>  </div>';
console.log(animalx);
}
else
if (a0==2){
    let animalx = new Lobo(a1,e1,c1,i1,'Aullido.mp3');
    $texto = '<div class="card" style="width: 300px;background-color: #848080;"><img class="card-img-top" src="assets/imgs/'+cambiar_animal(a1)+'"  alt="Foto Animal Registrado">    <div class="card-body"><img src="assets/imgs/audio.svg"  height="30px" alt=""/ onclic="Lobo.mostrardatos("'+a1+'")"></div>  </div>';
}
else
if (a0==3){
    let animalx = new Oso(a1,e1,c1,i1,'Grunido.mp3'); 
    $texto = '<div class="card" style="width: 300px;background-color: #848080;"><img class="card-img-top" src="assets/imgs/'+cambiar_animal(a1)+'"  alt="Foto Animal Registrado">    <div class="card-body"><img src="assets/imgs/audio.svg"  height="30px" alt=""/ onclic="Oso.mostrardatos("'+a1+'")"></div>  </div>';
}
else
if (a0==4){
    let animalx = new Serpiente(a1,e1,c1,i1,'Siseo.mp3');
    $texto = '<div class="card" style="width: 300px;background-color: #848080;"><img class="card-img-top" src="assets/imgs/'+cambiar_animal(a1)+'"  alt="Foto Animal Registrado">    <div class="card-body"><img src="assets/imgs/audio.svg"  height="30px" alt=""/ onclic="Serpiente.mostrardatos("'+a1+'")"></div>  </div>';
}
else
if (a0==5){
     let animalx = new Aguila(a1,e1,c1,i1,'Chillido.mp3');
    $texto = '<div class="card" style="width: 300px;background-color: #848080;"><img class="card-img-top" src="assets/imgs/'+cambiar_animal(a1)+'"  alt="Foto Animal Registrado">    <div class="card-body"><img src="assets/imgs/audio.svg"  height="30px" alt=""/ onclic="Aguila.mostrardatos("'+a1+'")"></div>  </div>';
}

//$texto = '<div class="card" style="width: 300px;background-color: #848080;"><img class="card-img-top" src="assets/imgs/'+cambiar_animal(a1)+'"  alt="Foto Animal Registrado">    <div class="card-body"><img src="assets/imgs/audio.svg"  height="30px" alt=""/ onclic="animalx.mostrardatos("'+a1+'")"></div>  </div>';

document.getElementById('Animales').innerHTML =$texto;
alert('datos ingresados');
}
else
        alert('***ERROR*** Faltan Datos por Ingresar');
}



//------------guardar animalito------------------------------
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


