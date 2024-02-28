define(["exports", "@ant-design/cssinjs", "antd4mx/theme/interface", "antd4mx/theme/useToken", "antd4mx/theme/util/genComponentStyleHook", "antd4mx/theme/util/genPresetColor", "antd4mx/theme/util/statistic", "antd4mx/theme/util/useResetIconStyle", "antd4mx/theme/util/calc", "antd4mx/theme/themes/shared/genFontSizes", "antd4mx/theme/context"], function (_exports, _cssinjs, _interface, _useToken, _genComponentStyleHook, _genPresetColor, _statistic, _useResetIconStyle, _calc, _genFontSizes, _context) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "DesignTokenContext", {
    enumerable: true,
    get: function get() {
      return _context.DesignTokenContext;
    }
  });
  Object.defineProperty(_exports, "PresetColors", {
    enumerable: true,
    get: function get() {
      return _interface.PresetColors;
    }
  });
  Object.defineProperty(_exports, "calc", {
    enumerable: true,
    get: function get() {
      return _calc["default"];
    }
  });
  Object.defineProperty(_exports, "defaultConfig", {
    enumerable: true,
    get: function get() {
      return _context.defaultConfig;
    }
  });
  Object.defineProperty(_exports, "genComponentStyleHook", {
    enumerable: true,
    get: function get() {
      return _genComponentStyleHook["default"];
    }
  });
  Object.defineProperty(_exports, "genPresetColor", {
    enumerable: true,
    get: function get() {
      return _genPresetColor["default"];
    }
  });
  Object.defineProperty(_exports, "genStyleHooks", {
    enumerable: true,
    get: function get() {
      return _genComponentStyleHook.genStyleHooks;
    }
  });
  Object.defineProperty(_exports, "genSubStyleComponent", {
    enumerable: true,
    get: function get() {
      return _genComponentStyleHook.genSubStyleComponent;
    }
  });
  Object.defineProperty(_exports, "getLineHeight", {
    enumerable: true,
    get: function get() {
      return _genFontSizes.getLineHeight;
    }
  });
  Object.defineProperty(_exports, "mergeToken", {
    enumerable: true,
    get: function get() {
      return _statistic.merge;
    }
  });
  Object.defineProperty(_exports, "statisticToken", {
    enumerable: true,
    get: function get() {
      return _statistic["default"];
    }
  });
  Object.defineProperty(_exports, "useResetIconStyle", {
    enumerable: true,
    get: function get() {
      return _useResetIconStyle["default"];
    }
  });
  Object.defineProperty(_exports, "useStyleRegister", {
    enumerable: true,
    get: function get() {
      return _cssinjs.useStyleRegister;
    }
  });
  Object.defineProperty(_exports, "useToken", {
    enumerable: true,
    get: function get() {
      return _useToken["default"];
    }
  });
});