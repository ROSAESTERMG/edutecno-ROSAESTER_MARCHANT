// JavaScript Document

var texto = '';
//--------------dueño----------------
class Dueno {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }

  get direccion() {
    return this._direccion;
  }
  set direccion(nuevo_direccion) {
    this._direccion = nuevo_direccion;
  }


  get telefono() {
    return this._telefono;
  }
  set telefono(nuevo_telefono) {
    this._nombretelefono = nuevo_telefono;
  }


  datosPropietario() {
    return (`El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion} y el número de teléfono es:${this.telefono}`);
  }
}


//--------------Animal------
class Animal extends Dueno {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono)
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo
  }
  set tipo(nuevo_tipo) {
    this._tipo = nuevo_tipo;
  }
}


//-----gatos---------------------
class Gatos extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombre_mas, motivo) {
    super(nombre, direccion, telefono, tipo)

    this._nombre_mas = nombre_mas;
    this._motivo = motivo;
  }

  get nombre_mas() {
    return this._nombre_mas
  }
  set nombre_mas(nuevo_nombre_mas) {
    this._nombre_mas = nuevo_nombre_mas;
  }


  get motivo() {
    return this._motivo
  }
  set motivo(nuevo_motivo) {
    this._motivo = nuevo_motivo;
  }

  info() {
    return (`El tipo de animal es un:${this.tipo} , mientras que el nombre de la mascota es: ${this.nombre_mas} y la enfermedad es:${this.motivo}`);
  }
}


//-----perros---------------------
class Perros extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombre_mas, motivo) {
    super(nombre, direccion, telefono, tipo)
    this._nombre_mas = nombre_mas;
    this._motivo = motivo;
  }

  get nombre_mas() {
    return this._nombre_mas
  }
  set nombre_mas(nuevo_nombre_mas) {
    this._nombre_mas = nuevo_nombre_mas;
  }


  get motivo() {
    return this._motivo
  }
  set motivo(nuevo_motivo) {
    this._motivo = nuevo_motivo;
  }
  info() {
    return `El tipo de animal es un:${this.tipo} , mientras que el nombre de la mascota es: ${this.nombre_mas} y la enfermedad es:${this.motivo}`;
  }
}


//-----conejos---------------------
class Conejos extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombre_mas, motivo) {
    super(nombre, direccion, telefono, tipo)

    this._nombre_mas = nombre_mas;
    this._motivo = motivo;
  }

  get nombre_mas() {
    return this._nombre_mas
  }
  set nombre_mas(nuevo_nombre_mas) {
    this._nombre_mas = nuevo_nombre_mas;
  }


  get motivo() {
    return this._motivo
  }
  set motivo(nuevo_motivo) {
    this._motivo = nuevo_motivo;
  }
  info() {
    return `El tipo de animal es un:${this.tipo} , mientras que el nombre de la mascota es: ${this.nombre_mas} y la enfermedad es:${this.motivo}`;
  }

}


//------------------------------------------
let guardar = document.getElementById('guardar');
guardar.addEventListener('click', guardarpersona);


//------------------------------------------
function guardarpersona() {
  let valor = document.getElementById("TIPO").value;
  let n1 = document.getElementById('nom_due').value;
  let n2 = document.getElementById('tele').value;
  let n3 = document.getElementById('domi').value;
  let n4 = document.getElementById('nom_masc').value;
  let n6 = document.getElementById('motivo').value;
  texto = '<p align="center">DATOS GUARDADOS';


  if (valor == 'GATO') {
    const gato = new Gatos(n1, n2, n3, valor, n4, n6);
    texto += '<br><li align="center">' + gato.datosPropietario() + '</li></p>';
    texto += '<br><li align="center">' + gato.info() + '</li></p>';


  } else
  if (valor == 'PERRO') {
    const perro = new Perros(n1, n2, n3, valor, n4, n6);
    texto += '<br><li align="center">' + perro.datosPropietario() + '</li></p>';
    texto += '<br><li align="center">' + perro.info() + '</li></p>';;
  } else
  if (valor == 'CONEJO') {
    const conejo = new Conejos(n1, n2, n3, valor, n4, n6);
    texto += '<br><li align="center">' + conejo.datosPropietario() + '</li></p>';
    texto += '<br><li align="center">' + conejo.info() + '</li></p>';

  }


  div_mostrar.innerHTML = texto;

  document.getElementById('nom_due').value = '';
  document.getElementById('tele').value = '';
  document.getElementById('domi').value = '';
  document.getElementById('nom_masc').value = '';
  document.getElementById('TIPO').value = 'PERRO';
  document.getElementById('motivo').value = '';
}
