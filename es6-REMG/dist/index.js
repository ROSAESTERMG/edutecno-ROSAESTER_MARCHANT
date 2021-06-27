"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol.description.js");

var Persona = _interopRequireWildcard(require("persona"));

var Impuestos = _interopRequireWildcard(require("impuesto"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// JavaScript Document
//import Persona from 'persona.js';
//import Impuestos from 'impuesto.js';
var $texto = ''; //----------------fin ----paciente----------------------------//

Consultorio.prototype.setAgregarPaciente = function (paciente_nuevo) {
  this.paciente.push(paciente_nuevo);
};

var paciente1 = new Paciente('Marcelo', 20, '111-1', 'ANEMIA');
var consultorio1 = new Consultorio('Arica', [paciente1]); //----------- guardar pacientes ------------------//

var guardar_pacientes = function guardar_pacientes() {
  var n1 = document.getElementById('nombre').value;
  var m1 = parseInt(document.getElementById('monto').value);
  var d1 = parseInt(document.getElementById('deducible').value);
  var impuestox = new Impuestos(m1, d1);
  console.log(impuestox.monto);
  console.log(impuestox.deducible);
  /*
  
   var impuestox = new Pers(m1,d1);
   persona1.setAgregarPersona(impuestox);
  */

  document.getElementById("nombre").value = '';
  document.getElementById("monto").value = '';
  document.getElementById("deducible").value = '';
  alert('datos ingresados');
}; //----------- mostrar pacientes ------------------//


var mostrar_pacientes = function mostrar_pacientes() {
  var divr = document.getElementById("div_mostrar");
  var $i = 0;
  $texto = '<br><br><p ">-----------------  LISTADO DE PACIENTES -------------- </p>';

  for ($i = 0; $i < consultorio1.paciente.length; $i++) {
    $texto += '<p>NOMBRE:' + consultorio1.paciente[$i].getNombre() + ', EDAD:' + consultorio1.paciente[$i].getEdad() + ', RUT:';
    $texto += consultorio1.paciente[$i].getRut() + ', DIAGNOSTICO:' + consultorio1.paciente[$i].getDiag() + '</p>';
    console.log(consultorio1.paciente[$i].nombre);
  }

  document.getElementById("div_mostrar").innerHTML = $texto;
};