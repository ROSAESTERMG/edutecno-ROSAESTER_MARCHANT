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





//------------------------------------------
let guardar = document.getElementById('guardar');
guardar.addEventListener('click',guardarpersona);

//------------------------------------------
function guardarpersona() {
	    let valor = document.getElementById("TIPO").value;
       // var valor = valor.value;

let n1 = document.getElementById('nom_due').value;
let n2 = document.getElementById('tele').value;
    let n3 = document.getElementById('domi').value;
    let n4 = document.getElementById('nom_masc').value;
    let n6 = document.getElementById('motivo').value;
    
    if (valor=='GATO'){

    const gato = new Gatos(valor,n4, n6);
     console.log(gato.tipo);
 }
else
   if (valor=='PERRO'){
const perro = new Perros(valor,n4, n6);
       console.log(perro.tipo);
 }
else
    if (valor=='CONEJO'){
const conejo = new Conejos(valor,n4, n6);
        console.log(conejo.tipo);
 }


    

/*    
p.innerHTML = `ðŸ¶ Nombre: ${nombre} - Raza: ${raza}`;
data.appendChild(p);
document.getElementById('nombre').value = '';
document.getElementById('raza').value = '';
*/
}



//--------------Animal------
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




//-----gatos---------------------
class Gatos extends Animal {
constructor(tipo,nombre_mas,  motivo) {
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
    info() {
return 'El tipo de animal es un:${this.tipo} , mientras que el nombre de la mascota es: ${this.nombre_mas} y la enfermedad es:${this.motivo}';
}
}


//-----perros---------------------
class Perros extends Animal {
constructor(tipo,nombre_mas,  motivo) {
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
    info() {
return 'El tipo de animal es un:${this.tipo} , mientras que el nombre de la mascota es: ${this.nombre_mas} y la enfermedad es:${this.motivo}';
}
}


//-----conejos---------------------
class Conejos extends Animal {
constructor(nombre_mas,  motivo) {
super(tipo,nombre_mas, motivo)
    
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
info() {
return 'El tipo de animal es un:${this.tipo} , mientras que el nombre de la mascota es: ${this.nombre_mas} y la enfermedad es:${this.motivo}';
}

}


