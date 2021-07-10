// JavaScript Document

//------------------CLASE ANIMAL -----------------//

export default class Animalito{
constructor(nombre,edad,img,obs){
this._nombre = nombre;
this._edad = edad;
this._img = img;
this._obs = obs;
}
    
get nombre(){
return this._nombre;
}
set nombre(nuevo_nombre){
this.nombre = nuevo_nombre;
}
    
get edad(){
return this._edad;
}
set edad(nuevo_edad){
this._edad = nuevo_edad;
}   

get img(){
return this._img;
}
set img(nuevo_img){
this._img = nuevo_img;
}   
 

get obs(){
return this._obs;
}
set obs(nuevo_obs){
this._obs = nuevo_obs;
}   
     
/*datosanimal() {
    return (`El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion} y el número de teléfono es:${this.telefono}`);
  }*/
    mostrardatos(tipo_animal){

    alert('llegó el animal'+tipo_animal);
}
}
/*
//-----------------------sonidos------------------------
class Animalsonido extends Animal {
  constructor(nombre,edad,img,obs, sonido) {
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
*/
//---------------leon---------------------
class Leon extends Animalito {
  constructor(nombre,edad,img,obs, sonido) {
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
  constructor(nombre,edad,img,obs, sonido) {
    super(nombre,edad,img,obs, sonido)
 }
//return('Aullido.mp3')
}  

//---------------oso---------------------
class Oso extends Animalito {
  constructor(nombre,edad,img,obs, sonido) {
    super(nombre,edad,img,obs, sonido)
 }
//return('Grunido.mp3')
}  
//---------------serpiente---------------------
class Serpiente extends Animalito {
  constructor(nombre,edad,img,obs, sonido) {
    super(nombre,edad,img,obs, sonido)
 }
//return('Siseo.mp3')
}  
//---------------aguila---------------------
class Aguila extends Animalito {
  constructor(nombre,edad,img,obs, sonido) {
    super(nombre,edad,img,obs, sonido)
 }
//return('Chillido.mp3')
}  
