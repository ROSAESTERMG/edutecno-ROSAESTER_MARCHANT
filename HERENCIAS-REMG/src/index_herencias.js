// JavaScript Document

//--------------dueño----------------
class Dueno {
constructor(nombre, direccion,telefono) {
this._nombre = nombre;
this.direccion = direccion;
this.telefono = telefono;
}
get nombre(){
return this._nombre;
}
set nombre(nuevo_nombre){
this._nombre = nuevo_nombre;
}
    
get direccion(){
return this._direccion;
}
set direccion(nuevo_direccion){
this._direccion = nuevo_direccion;
}
    
    
get telefono(){
return this._telefono;
}
set telefono(nuevo_telefono){
this._nombretelefono = nuevo_telefono;
}
    
    
    
datosMascotaDueno(){
console.log('El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.domiclio} y el número de teléfono es:${this.telefono}');
}
 
    
let registrar = document.getElementById('guardar');
registrar.addEventListener('click',agregar);

  
}

function agregar() {
const perroData = registrando();
const nombre = perroData.nombre;
const raza = perroData.raza;
const data = document.getElementById('data');
const p = document.createElement('p');
    
    
p.innerHTML = `ðŸ¶ Nombre: ${nombre} - Raza: ${raza}`;
data.appendChild(p);
document.getElementById('nombre').value = '';
document.getElementById('raza').value = '';
}



//--------------animal------
class Animal extends Dueno {
constructor( tipo) {
super( tipo)
this._tipo = tipo;
}
    

get tipo(){
return this._tipo
}
set tipo(nuevo_tipo){
this._tipo = nuevo_tipo;
}
}



//-----dueno---------------------
class Mascota extends Dueno {
constructor(nombre_mas,  motivo) {
super(nombre_mas, motivo)
    
this._nombre_mas = nombre_mas;
this._motivo = motivo;
}
    
get nombre_mas(){
return this._nombre_mas
}
set nombre_mas(nuevo_nombre_mas){
this._nombre_mas = nuevo_nombre_mas;
}
    
    
get motivo(){
return this._motivo
}
set motivo(nuevo_motivo){
this._motivo = nuevo_motivo;
}    
    
    
}


class Arqueros extends Jugadores {
    constructor(nombre, edad, dorsal, lesiones, alimentacion, titular)
{
super(nombre, edad, dorsal, lesiones)
this._alimentacion = alimentacion;
this.titular = titular;
}
get alimentacion(){
return this._alimentacion = alimentacion;
}
set alimentacion(n_alimentacion){
this._alimentacion = n_alimentacion;
}
    

}
