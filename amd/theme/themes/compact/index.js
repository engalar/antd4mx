define(["exports", "antd4mx/theme/themes/shared/genControlHeight", "antd4mx/theme/themes/default", "antd4mx/theme/themes/compact/genCompactSizeMapToken", "antd4mx/theme/themes/shared/genFontMapToken"], function (_exports, _genControlHeight, _default2, _genCompactSizeMapToken, _genFontMapToken) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var derivative = function derivative(token, mapToken) {
    var mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : (0, _default2["default"])(token);
    var fontSize = mergedMapToken.fontSizeSM; // Smaller size font-size as base
    var controlHeight = mergedMapToken.controlHeight - 4;
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, mergedMapToken), (0, _genCompactSizeMapToken["default"])(mapToken !== null && mapToken !== void 0 ? mapToken : token)), (0, _genFontMapToken["default"])(fontSize)), {
      // controlHeight
      controlHeight: controlHeight
    }), (0, _genControlHeight["default"])(Object.assign(Object.assign({}, mergedMapToken), {
      controlHeight: controlHeight
    })));
  };
  var _default = _exports["default"] = derivative;
});