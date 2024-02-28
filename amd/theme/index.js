define(["exports", "antd4mx/theme/getDesignToken", "antd4mx/theme/internal", "antd4mx/theme/themes/compact", "antd4mx/theme/themes/dark", "antd4mx/theme/themes/default"], function (_exports, _getDesignToken, _internal, _compact, _dark, _default2) {
  "use strict";
  "use client";

  /* eslint-disable import/prefer-default-export */
  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  // ZombieJ: We export as object to user but array in internal.
  // This is used to minimize the bundle size for antd package but safe to refactor as object also.
  // Please do not export internal `useToken` directly to avoid something export unexpected.
  /** Get current context Design Token. Will be different if you are using nest theme config. */
  function useToken() {
    var _useInternalToken = (0, _internal.useToken)(),
      _useInternalToken2 = _slicedToArray(_useInternalToken, 3),
      theme = _useInternalToken2[0],
      token = _useInternalToken2[1],
      hashId = _useInternalToken2[2];
    return {
      theme: theme,
      token: token,
      hashId: hashId
    };
  }
  var _default = _exports["default"] = {
    /** @private Test Usage. Do not use in production. */
    defaultConfig: _internal.defaultConfig,
    /** Default seedToken */
    defaultSeed: _internal.defaultConfig.token,
    useToken: useToken,
    defaultAlgorithm: _default2["default"],
    darkAlgorithm: _dark["default"],
    compactAlgorithm: _compact["default"],
    getDesignToken: _getDesignToken["default"]
  };
});