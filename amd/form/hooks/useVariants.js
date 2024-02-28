define(["exports", "react", "antd4mx/form/context"], function (_exports, _react, _context) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.Variants = void 0;
  var Variants = _exports.Variants = ['outlined', 'borderless', 'filled'];
  /**
   * Compatible for legacy `bordered` prop.
   */
  var useVariant = function useVariant(variant) {
    var legacyBordered = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var ctxVariant = (0, _react.useContext)(_context.VariantContext);
    var mergedVariant;
    if (typeof variant !== 'undefined') {
      mergedVariant = variant;
    } else if (legacyBordered === false) {
      mergedVariant = 'borderless';
    } else {
      mergedVariant = ctxVariant !== null && ctxVariant !== void 0 ? ctxVariant : 'outlined';
    }
    var enableVariantCls = Variants.includes(mergedVariant);
    return [mergedVariant, enableVariantCls];
  };
  var _default = _exports["default"] = useVariant;
});