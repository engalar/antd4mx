define(["exports", "antd4mx/grid/col", "antd4mx/grid/hooks/useBreakpoint", "antd4mx/grid/row"], function (_exports, _col, _useBreakpoint, _row) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Col", {
    enumerable: true,
    get: function get() {
      return _col["default"];
    }
  });
  Object.defineProperty(_exports, "Row", {
    enumerable: true,
    get: function get() {
      return _row["default"];
    }
  });
  _exports["default"] = void 0;
  // Do not export params
  function useBreakpoint() {
    return (0, _useBreakpoint["default"])();
  }
  var _default = _exports["default"] = {
    useBreakpoint: useBreakpoint
  };
});