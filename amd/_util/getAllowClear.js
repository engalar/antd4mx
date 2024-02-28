define(["exports", "react", "@ant-design/icons/es/icons/CloseCircleFilled"], function (_exports, _react, _CloseCircleFilled) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var getAllowClear = function getAllowClear(allowClear) {
    var mergedAllowClear;
    if (_typeof(allowClear) === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
      mergedAllowClear = allowClear;
    } else if (allowClear) {
      mergedAllowClear = {
        clearIcon: /*#__PURE__*/_react["default"].createElement(_CloseCircleFilled["default"], null)
      };
    }
    return mergedAllowClear;
  };
  var _default = _exports["default"] = getAllowClear;
});