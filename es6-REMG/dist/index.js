"use strict";

var _persona = _interopRequireDefault(require("./persona.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// JavaScript Document
var guardar = document.getElementById('guardar');
guardar.addEventListener('click', guardarpersona);

function guardarpersona() {
  event.preventDefault();
  var n1 = document.getElementById('nombre_p').value;
  var m1 = parseInt(document.getElementById('monto_p').value);
  var d1 = parseInt(document.getElementById('deducible_p').value);

  if (m1 && d1 > 0) {
    var resultado = new _impuestos["default"](m1, d1);
    var persona1 = new _persona["default"](n1, [resultado]);
    console.log(persona1);
    div_mostrar.innerHTML = ' Sr(a) : ' + persona1.nombre + '<br>Monto Bruto:' + resultado.monto + '  <br>Deducible:' + resultado.deducible + ' <br>*** TOTAL IMPUESTO:' + resultado.calcular() + ' ***';
  } else {
    div_mostrar.innerHTML = 'Debe ingresar un número... ';
    div_mostrar.innerHTML = ' y este debe ser mayor que cero';
  }

  ;
  document.getElementById("nombre_p").value = '';
  document.getElementById("monto_p").value = '';
  document.getElementById("deducible_p").value = '';
  alert('datos ingresados');
}