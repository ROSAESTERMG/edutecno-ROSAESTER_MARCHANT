"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// JavaScript Document
//------------------CLASE IMPUESTOS -----------------//
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto, deducible) {
    _classCallCheck(this, Impuestos);

    this._monto = monto;
    this.deducible = deducible;
  }

  _createClass(Impuestos, [{
    key: "monto",
    get: function get() {
      return this._monto;
    },
    set: function set(nuevo_monto) {
      this.monto = nuevo_monto;
    }
  }, {
    key: "deducible",
    get: function get() {
      return this._deducible;
    },
    set: function set(nuevo_deducible) {
      this._deducible = nuevo_deducible;
    }
  }, {
    key: "calcular",
    value: function calcular() {
      return monto * deducible * 0, 21;
    }
  }]);

  return Impuestos;
}(); // (monto_bruto_anual − deducciones) * 21%)


exports["default"] = Impuestos;