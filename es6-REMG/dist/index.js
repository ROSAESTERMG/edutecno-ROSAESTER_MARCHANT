"use strict";

var _persona = _interopRequireDefault(require("./persona.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// JavaScript Document
var $texto = ''; //----------------fin ----paciente----------------------------//

/*
Consultorio.prototype.setAgregarPaciente = function (paciente_nuevo) {
  this.paciente.push(paciente_nuevo);
}

var paciente1 = new Paciente('Marcelo', 20, '111-1', 'ANEMIA');
var consultorio1 = new Consultorio('Arica', [paciente1]);
*/
//----------- guardar pacientes ------------------//

var guardar = document.getElementById('guardar');
guardar.addEventListener('click', guardarpersona);

function guardarpersona() {
  event.preventDefault();
  var n1 = document.getElementById('nombre').value;
  var m1 = parseInt(document.getElementById('monto').value);
  var d1 = parseInt(document.getElementById('deducible').value);

  if (m1 && d1 > 0) {
    var resultado = new _impuestos["default"](m1, d1);
    div_mostrar.innerHTML = _impuestos["default"].calcular();
  } else {
    div_mostrar.innerHTML = 'Debe ingresar un número... ';
    div_mostrar.innerHTML = ' y este debe ser mayor que cero';
  }

  ;
  document.getElementById("nombre").value = '';
  document.getElementById("monto").value = '';
  document.getElementById("deducible").value = '';
  alert('datos ingresados');
}