// JavaScript Document

//------------------CLASE ANIMAL -----------------//

export default class Animalito{
constructor(nombre,edad,obs,img){
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

    
}