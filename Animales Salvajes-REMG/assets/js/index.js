// JavaScript Document
import Animalito from './animal.js';
var $texto = '';
var $texto_modal = '';
var $animal_1;
var $animal_2;
var $animal_3
var $animal_4;
var $animal_5;

//-----------------------------------clases de animales ----------------------------
//---------------leon---------------------
class Leon extends Animalito {
  constructor(nombre, edad, obs, img, sonido) {
    super(nombre, edad, obs, img)
    this._sonido = 'Rugido.mp3';
  }

  get sonido() {
    return this._sonido
  }
  activaraudio() {
    var playme = document.getElementById('player');
    playme.src = 'assets/sounds/' + this.sonido;
    playme.load();
    playme.play();
  }
}

//---------------lobo---------------------
class Lobo extends Animalito {
  constructor(nombre, edad, obs, img, sonido) {
    super(nombre, edad, obs, img)
    this._sonido = 'Aullido.mp3';
  }

  get sonido() {
    return this._sonido
  }
  activaraudio() {
    var playme = document.getElementById('player');
    playme.src = 'assets/sounds/' + this.sonido;
    playme.load();
    playme.play();
  }
}

//---------------oso---------------------
class Oso extends Animalito {
  constructor(nombre, edad, obs, img, sonido) {
    super(nombre, edad, obs, img)
    this._sonido = 'Grunido.mp3';
  }

  get sonido() {
    return this._sonido
  }
  activaraudio() {
    var playme = document.getElementById('player');
    playme.src = 'assets/sounds/' + this.sonido;
    playme.load();
    playme.play();
  }
}
//---------------serpiente---------------------
class Serpiente extends Animalito {
  constructor(nombre, edad, obs, img, sonido) {
    super(nombre, edad, obs, img)
    this._sonido = 'Siseo.mp3';
  }

  get sonido() {
    return this._sonido
  }
  activaraudio() {
    var playme = document.getElementById('player');
    playme.src = 'assets/sounds/' + this.sonido;
    playme.load();
    playme.play();
  }
}
//---------------aguila---------------------
class Aguila extends Animalito {
  constructor(nombre, edad, obs, img, sonido) {
    super(nombre, edad, obs, img)
    this._sonido = 'Chillido.mp3';
  }

  get sonido() {
    return this._sonido
  }
  activaraudio() {
    var playme = document.getElementById('player');
    playme.src = 'assets/sounds/' + this.sonido;
    playme.load();
    playme.play();
  }
}


//--------------------------- guardar  animalito ----------------------------------
const guardar_animal = () => {
  var a0 = document.getElementById('animal').selectedIndex;
  var a1 = document.getElementById('animal').value;
  var e0 = document.getElementById('edad').selectedIndex;
  var e1 = document.getElementById('edad').value;
  var c1 = document.getElementById('comentarios').value;
 
  if (a0 > 0 && e0 > 0 && c1 != '') { //---------------VALIDA DATOS DEL FORMULARIO -----------
    $texto += '<div  id="' + a1 + '" class="card" style="width: 200px;background-color: #848080;"><img id="imagen_' + a0 + '" class="card-img-top" src="assets/imgs/' + cambiar_animal(a1) + '"  alt="Foto Animal Registrado"> <div class="card-body"><img   src="assets/imgs/audio.svg"  height="30px" alt=""';
    if (a0 == 1) {
      $animal_1 = new Leon(a1, e1, c1, 'Leon.png', 'Rugido.mp3');
      $texto += 'id="audio1"/></div></div>';
    } else
    if (a0 == 2) {
      $animal_2 = new Lobo(a1, e1, c1, 'Lobo.jpg', 'Aullido.mp3');
      $texto += 'id="audio2"/></div></div>';
    } else
    if (a0 == 3) {
      $animal_3 = new Oso(a1, e1, c1, 'Oso.jpg', 'Grunido.mp3');
      $texto += 'id="audio3"/></div></div>';
    } else
    if (a0 == 4) {
      $animal_4 = new Serpiente(a1, e1, c1, 'Serpiente.jpg', 'Siseo.mp3');
      $texto += 'id="audio4"/></div></div>';
    } else
    if (a0 == 5) {
      $animal_5 = new Aguila(a1, e1, c1, 'Aguila.png', 'Chillido.mp3');
      $texto += 'id="audio5"/></div></div>';
    }

    //-----------------------------------------------------------------------------------------------
    //------------ DEHABILITA EL ANIMAL SELECCIONADO DEL SELECT PARA QUE NO EXISTAN DUPLICIDAD-------
    let option = animal.querySelector(`option[value="${a1}"]`);
    option.disabled = true;
    //----------------------------LIMPIA LOS DATOS DEL FORMULARIO ----------------------------------    
    document.getElementById('Animales').innerHTML = $texto;
    document.getElementById('animal').value = "Seleccione un animal";
    document.getElementById('edad').value = "Seleccione un rango de años";
    document.getElementById('comentarios').value = '';
    var imagen = document.getElementById('preview');
    imagen.style.backgroundImage = 'url(assets/imgs/lion.svg)';
    alert('DATOS GUARDADOS'); //------MENSAJE INGRESO EXITOSO -----
  } else
    alert('***ERROR*** Faltan Datos por Ingresar'); //------MENSAJE DE ERROR SI FALTAN DATOS -----
}


//-----------------------guardar animalito------------------------------
let guardar = document.getElementById('btnRegistrar');
guardar.addEventListener('click', guardar_animal);


//------------llama a funcion cambia imagen al momento de cambiar el select---------------
document.getElementById("animal").onchange = function () {
  let value = document.getElementById("animal").value;
  var imagen = document.getElementById('preview');
  imagen.style.backgroundImage = 'url(assets/imgs/' + cambiar_animal(value) + ')';
}


//------------audio animalito------------------------------
$(document).on('click', '#audio1', function () {
  $animal_1.activaraudio();
})
$(document).on('click', '#audio2', function () {
  $animal_2.activaraudio();
})
$(document).on('click', '#audio3', function () {
  $animal_3.activaraudio();
})
$(document).on('click', '#audio4', function () {
  $animal_4.activaraudio();
})
$(document).on('click', '#audio5', function () {
  $animal_5.activaraudio();
})


//-----------------click  ventana modal ------------
$(document).on('click', '#imagen_1', async function() {
  document.getElementById('ventana_modal').innerHTML = await llenarmodal(1);
  $('#exampleModal').modal('show');
})
$(document).on('click', '#imagen_2', async function () {
  document.getElementById('ventana_modal').innerHTML =await llenarmodal(2);
  $('#exampleModal').modal('show');
})
$(document).on('click', '#imagen_3',async function () {
  document.getElementById('ventana_modal').innerHTML =await llenarmodal(3);
  $('#exampleModal').modal('show');
})
$(document).on('click', '#imagen_4', async function () {
  document.getElementById('ventana_modal').innerHTML =await llenarmodal(4);
  $('#exampleModal').modal('show');
})
$(document).on('click', '#imagen_5', async function () {
  document.getElementById('ventana_modal').innerHTML = await llenarmodal(5);
  $('#exampleModal').modal('show');
})

//----------------- función que muestra ventana modal ------------
const llenarmodal = (tipo_animal) => {
  let $aux_ima = '';
  let $aux_edad = '';
  let $aux_obs = '';
  switch (tipo_animal) {
    case 1:
      $aux_ima = $animal_1.img;
      $aux_edad = $animal_1.edad;
      $aux_obs = $animal_1.obs;
      break;
    case 2:
      $aux_ima = $animal_2.img;
      $aux_edad = $animal_2.edad;
      $aux_obs = $animal_2.obs;
      break;
    case 3:
      $aux_ima = $animal_3.img;
      $aux_edad = $animal_3.edad;
      $aux_obs = $animal_3.obs;
      break;
    case 4:
      $aux_ima = $animal_4.img;
      $aux_edad = $animal_4.edad;
      $aux_obs = $animal_4.obs;
      break;
    case 5:
      $aux_ima = $animal_5.img;
      $aux_edad = $animal_5.edad;
      $aux_obs = $animal_5.obs;
      break;
  }
  $texto_modal = '<div id="contenido_modal" style="color:white;">';
  $texto_modal += '<img width="200px" ';
  $texto_modal += ' src="assets/imgs/' + $aux_ima + '"  alt=""/>';
  $texto_modal += '<p align="center">' + $aux_edad + '</p>';
  $texto_modal += '<p align="center">COMENTARIOS</p>';
  $texto_modal += '<p align="center">' + $aux_obs + '</p>';
  $texto_modal += '</div>';
  return ($texto_modal);
}


//-----------funcion---cambia foto animalito al cambiar dato de select----------------
const cambiar_animal = (tipo_animal) => {
  let nombre_ima = ''
  if (tipo_animal == 'Leon')
    nombre_ima = 'Leon.png';
  else
  if (tipo_animal == 'Lobo')
    nombre_ima = 'Lobo.jpg';
  else
  if (tipo_animal == 'Oso')
    nombre_ima = 'Oso.jpg';
  else
  if (tipo_animal == 'Serpiente')
    nombre_ima = 'Serpiente.jpg';
  else
  if (tipo_animal == 'Aguila')
    nombre_ima = 'Aguila.png';
  return (nombre_ima)
}

