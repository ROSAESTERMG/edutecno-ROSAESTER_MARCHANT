// JavaScript Document

//------------------CLASE ANIMAL -----------------//

export default class Animal{
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
    
    
mostrardatos(){
//return ((monto*deducible)*0,21);
}
}

//-----------------------sonidos------------------------
class AnimalSonido extends Animal {
  constructor(nombre,edad,img,comentarios, sonido) {
    super(nombre,edad,img,comentarios)
    this._sonido = sonido;
  }

  get sonido() {
    return this._sonido
  }
  set sonido(nuevo_sonido) {
    this._sonido = nuevo_sonido;
  }
}



//---------------leon---------------------
class Leon extends AnimalSonido {
  constructor(nombre,edad,img,comentarios, sonido,tipo) {
    super(nombre,edad,img,comentarios, sonido)
    this._tipo = tipo;
 }

  get tipo() {
    return this._tipo
  }
  set tipo(nuevo_tipo) {
    this._tipo = nuevo_tipo;
  }

 emitirsonido() {
    return (`El tipo de animal es un:${this.tipo} , mientras que el nombre de la mascota es: ${this.nombre_mas} y la enfermedad es:${this.motivo}`);
  }
}    



