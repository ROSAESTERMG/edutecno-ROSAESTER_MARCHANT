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

    this.monto = monto;
    this.deducible = deducible;
  }

  _createClass(Impuestos, [{
    key: "calcular",
    value: function calcular() {
      return this.monto * this.deducible * 21 / 100;
    }
  }]);

  return Impuestos;
}();

exports["default"] = Impuestos;