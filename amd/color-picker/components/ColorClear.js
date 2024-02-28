define(["exports", "react", "antd4mx/color-picker/util"], function (_exports, _react, _util) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var ColorClear = function ColorClear(_ref) {
    var prefixCls = _ref.prefixCls,
      value = _ref.value,
      colorCleared = _ref.colorCleared,
      onChange = _ref.onChange;
    var handleClick = function handleClick() {
      if (value && !colorCleared) {
        var hsba = value.toHsb();
        hsba.a = 0;
        var genColor = (0, _util.generateColor)(hsba);
        onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
      }
    };
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-clear"),
      onClick: handleClick
    });
  };
  var _default = _exports["default"] = ColorClear;
});