define(["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@rc-component/color-picker"], function (_exports, _classCallCheck2, _createClass2, _colorPicker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.toHexFormat = _exports.getHex = _exports.ColorFactory = void 0;
  var toHexFormat = _exports.toHexFormat = function toHexFormat(value, alpha) {
    return (value === null || value === void 0 ? void 0 : value.replace(/[^\w/]/gi, '').slice(0, alpha ? 8 : 6)) || '';
  };
  var getHex = _exports.getHex = function getHex(value, alpha) {
    return value ? toHexFormat(value, alpha) : '';
  };
  var ColorFactory = _exports.ColorFactory = /*#__PURE__*/function () {
    function ColorFactory(color) {
      (0, _classCallCheck2["default"])(this, ColorFactory);
      this.metaColor = new _colorPicker.Color(color);
      if (!color) {
        this.metaColor.setAlpha(0);
      }
    }
    (0, _createClass2["default"])(ColorFactory, [{
      key: "toHsb",
      value: function toHsb() {
        return this.metaColor.toHsb();
      }
    }, {
      key: "toHsbString",
      value: function toHsbString() {
        return this.metaColor.toHsbString();
      }
    }, {
      key: "toHex",
      value: function toHex() {
        return getHex(this.toHexString(), this.metaColor.getAlpha() < 1);
      }
    }, {
      key: "toHexString",
      value: function toHexString() {
        return this.metaColor.getAlpha() === 1 ? this.metaColor.toHexString() : this.metaColor.toHex8String();
      }
    }, {
      key: "toRgb",
      value: function toRgb() {
        return this.metaColor.toRgb();
      }
    }, {
      key: "toRgbString",
      value: function toRgbString() {
        return this.metaColor.toRgbString();
      }
    }]);
    return ColorFactory;
  }();
});