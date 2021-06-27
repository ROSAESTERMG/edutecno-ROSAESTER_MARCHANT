// JavaScript Document


//--------------------- clase persona ----------------------//
export default class Persona{
constructor(nombre,impuestos){
    
this._nombre = nombre;
this._impuestos = impuestos || [];  
}    
get nombre(){
return this._nombre;
}
set nombre(nuevo_nombre){
this._nombre = nuevo_nombre;
}


}
