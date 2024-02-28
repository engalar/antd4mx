define(["exports", "antd4mx/theme/util/calc/NumCalculator", "antd4mx/theme/util/calc/CSSCalculator"], function (_exports, _NumCalculator, _CSSCalculator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var genCalc = function genCalc(type) {
    var Calculator = type === 'css' ? _CSSCalculator["default"] : _NumCalculator["default"];
    return function (num) {
      return new Calculator(num);
    };
  };
  var _default = _exports["default"] = genCalc;
});