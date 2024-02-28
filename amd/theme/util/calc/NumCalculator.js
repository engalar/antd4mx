define(["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/isNativeReflectConstruct", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "antd4mx/theme/util/calc/calculator"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _isNativeReflectConstruct2, _getPrototypeOf2, _inherits2, _calculator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _callSuper(t, o, e) {
    return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e));
  }
  var NumCalculator = _exports["default"] = /*#__PURE__*/function (_AbstractCalculator) {
    (0, _inherits2["default"])(NumCalculator, _AbstractCalculator);
    function NumCalculator(num) {
      var _this;
      (0, _classCallCheck2["default"])(this, NumCalculator);
      _this = _callSuper(this, NumCalculator);
      _this.result = 0;
      if (num instanceof NumCalculator) {
        _this.result = num.result;
      } else if (typeof num === 'number') {
        _this.result = num;
      }
      return _this;
    }
    (0, _createClass2["default"])(NumCalculator, [{
      key: "add",
      value: function add(num) {
        if (num instanceof NumCalculator) {
          this.result += num.result;
        } else if (typeof num === 'number') {
          this.result += num;
        }
        return this;
      }
    }, {
      key: "sub",
      value: function sub(num) {
        if (num instanceof NumCalculator) {
          this.result -= num.result;
        } else if (typeof num === 'number') {
          this.result -= num;
        }
        return this;
      }
    }, {
      key: "mul",
      value: function mul(num) {
        if (num instanceof NumCalculator) {
          this.result *= num.result;
        } else if (typeof num === 'number') {
          this.result *= num;
        }
        return this;
      }
    }, {
      key: "div",
      value: function div(num) {
        if (num instanceof NumCalculator) {
          this.result /= num.result;
        } else if (typeof num === 'number') {
          this.result /= num;
        }
        return this;
      }
    }, {
      key: "equal",
      value: function equal() {
        return this.result;
      }
    }]);
    return NumCalculator;
  }(_calculator["default"]);
});