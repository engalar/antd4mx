define(["exports", "react", "antd4mx/_util/warning"], function (_exports, React, _warning) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /**
   * Warning for ConfigProviderProps.
   * This will be empty function in production.
   */
  var PropWarning = /*#__PURE__*/React.memo(function (_ref) {
    var dropdownMatchSelectWidth = _ref.dropdownMatchSelectWidth;
    var warning = (0, _warning.devUseWarning)('ConfigProvider');
    warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
    return null;
  });
  if (process.env.NODE_ENV !== 'production') {
    PropWarning.displayName = 'PropWarning';
  }
  var _default = _exports["default"] = process.env.NODE_ENV !== 'production' ? PropWarning : function () {
    return null;
  };
});