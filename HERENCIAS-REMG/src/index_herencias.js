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
    
    
    
datosPropietario(){
console.log('El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.domiclio} y el número de teléfono es:${this.telefono}');
}
}


let guardar = document.getElementById('guardar');
guardar.addEventListener('click',guardarpersona);

function guardarpersona() {
	    var valor = document.getElementById("TIPO");
        var valor = valor.value;
    alert(valor);
 if valor=='GATO'{
const gato = new Animal_g(valor);
 }
else
   if valor=='PERRO'{
const perro = new Animal_p(valor);
 }
else
    if valor=='CONEJO'{
const conejo = new Animal_c(valor);
 }


    
    
p.innerHTML = `ðŸ¶ Nombre: ${nombre} - Raza: ${raza}`;
data.appendChild(p);
document.getElementById('nombre').value = '';
document.getElementById('raza').value = '';
*/
}



//--------------gato------
class Animal_g extends Dueno {
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



//--------------perro------
class Animal_p extends Dueno {
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

//--------------conejo------
class Animal_c extends Dueno {
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
