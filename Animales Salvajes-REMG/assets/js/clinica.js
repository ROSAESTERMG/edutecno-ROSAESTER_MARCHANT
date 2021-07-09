// JavaScript Document


//--------------------- clase clinica ----------------------//
export default class Clinica{
constructor(nombrec, animal){
    
this._nombrec = nombrec;
this._animal = animal || [];  
}    
get nombrec(){
return this._nombrec;
}
set nombrec(nuevo_nombrec){
this._nombrec = nuevo_nombrec;
}


}
