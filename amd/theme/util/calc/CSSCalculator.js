define(["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/isNativeReflectConstruct", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "antd4mx/theme/util/calc/calculator"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _isNativeReflectConstruct2, _getPrototypeOf2, _inherits2, _calculator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _callSuper(t, o, e) {
    return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e));
  }
  var CALC_UNIT = 'CALC_UNIT';
  function unit(value) {
    if (typeof value === 'number') {
      return "".concat(value).concat(CALC_UNIT);
    }
    return value;
  }
  var CSSCalculator = _exports["default"] = /*#__PURE__*/function (_AbstractCalculator) {
    (0, _inherits2["default"])(CSSCalculator, _AbstractCalculator);
    function CSSCalculator(num) {
      var _this;
      (0, _classCallCheck2["default"])(this, CSSCalculator);
      _this = _callSuper(this, CSSCalculator);
      _this.result = '';
      if (num instanceof CSSCalculator) {
        _this.result = "(".concat(num.result, ")");
      } else if (typeof num === 'number') {
        _this.result = unit(num);
      } else if (typeof num === 'string') {
        _this.result = num;
      }
      return _this;
    }
    (0, _createClass2["default"])(CSSCalculator, [{
      key: "add",
      value: function add(num) {
        if (num instanceof CSSCalculator) {
          this.result = "".concat(this.result, " + ").concat(num.getResult());
        } else if (typeof num === 'number' || typeof num === 'string') {
          this.result = "".concat(this.result, " + ").concat(unit(num));
        }
        this.lowPriority = true;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(num) {
        if (num instanceof CSSCalculator) {
          this.result = "".concat(this.result, " - ").concat(num.getResult());
        } else if (typeof num === 'number' || typeof num === 'string') {
          this.result = "".concat(this.result, " - ").concat(unit(num));
        }
        this.lowPriority = true;
        return this;
      }
    }, {
      key: "mul",
      value: function mul(num) {
        if (this.lowPriority) {
          this.result = "(".concat(this.result, ")");
        }
        if (num instanceof CSSCalculator) {
          this.result = "".concat(this.result, " * ").concat(num.getResult(true));
        } else if (typeof num === 'number' || typeof num === 'string') {
          this.result = "".concat(this.result, " * ").concat(num);
        }
        this.lowPriority = false;
        return this;
      }
    }, {
      key: "div",
      value: function div(num) {
        if (this.lowPriority) {
          this.result = "(".concat(this.result, ")");
        }
        if (num instanceof CSSCalculator) {
          this.result = "".concat(this.result, " / ").concat(num.getResult(true));
        } else if (typeof num === 'number' || typeof num === 'string') {
          this.result = "".concat(this.result, " / ").concat(num);
        }
        this.lowPriority = false;
        return this;
      }
    }, {
      key: "getResult",
      value: function getResult(force) {
        return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
      }
    }, {
      key: "equal",
      value: function equal(options) {
        var _ref = options || {},
          _ref$unit = _ref.unit,
          cssUnit = _ref$unit === void 0 ? true : _ref$unit;
        var regexp = new RegExp("".concat(CALC_UNIT), 'g');
        this.result = this.result.replace(regexp, cssUnit ? 'px' : '');
        if (typeof this.lowPriority !== 'undefined') {
          return "calc(".concat(this.result, ")");
        }
        return this.result;
      }
    }]);
    return CSSCalculator;
  }(_calculator["default"]);
});