define(["exports", "react", "@ant-design/cssinjs", "antd4mx/version/index", "antd4mx/theme/context", "antd4mx/theme/themes/seed", "antd4mx/theme/util/alias"], function (_exports, _react, _cssinjs, _index, _context, _seed, _alias) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useToken;
  _exports.unitless = _exports.ignore = _exports.getComputedToken = void 0;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var unitless = _exports.unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true
  };
  var ignore = _exports.ignore = {
    size: true,
    sizeSM: true,
    sizeLG: true,
    sizeMD: true,
    sizeXS: true,
    sizeXXS: true,
    sizeMS: true,
    sizeXL: true,
    sizeXXL: true,
    sizeUnit: true,
    sizeStep: true,
    motionBase: true,
    motionUnit: true
  };
  var preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
  };
  var getComputedToken = _exports.getComputedToken = function getComputedToken(originToken, overrideToken, theme) {
    var derivativeToken = theme.getDerivativeToken(originToken);
    var override = overrideToken.override,
      components = __rest(overrideToken, ["override"]);

    // Merge with override
    var mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
      override: override
    });
    // Format if needed
    mergedDerivativeToken = (0, _alias["default"])(mergedDerivativeToken);
    if (components) {
      Object.entries(components).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        var componentTheme = value.theme,
          componentTokens = __rest(value, ["theme"]);
        var mergedComponentToken = componentTokens;
        if (componentTheme) {
          mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
            override: componentTokens
          }, componentTheme);
        }
        mergedDerivativeToken[key] = mergedComponentToken;
      });
    }
    return mergedDerivativeToken;
  };
  // ================================== Hook ==================================
  function useToken() {
    var _React$useContext = _react["default"].useContext(_context.DesignTokenContext),
      rootDesignToken = _React$useContext.token,
      hashed = _React$useContext.hashed,
      theme = _React$useContext.theme,
      override = _React$useContext.override,
      cssVar = _React$useContext.cssVar;
    var salt = "".concat(_index["default"], "-").concat(hashed || '');
    var mergedTheme = theme || _context.defaultTheme;
    var _useCacheToken = (0, _cssinjs.useCacheToken)(mergedTheme, [_seed["default"], rootDesignToken], {
        salt: salt,
        override: override,
        getComputedToken: getComputedToken,
        // formatToken will not be consumed after 1.15.0 with getComputedToken.
        // But token will break if @ant-design/cssinjs is under 1.15.0 without it
        formatToken: _alias["default"],
        cssVar: cssVar && {
          prefix: cssVar.prefix,
          key: cssVar.key,
          unitless: unitless,
          ignore: ignore,
          preserve: preserve
        }
      }),
      _useCacheToken2 = _slicedToArray(_useCacheToken, 3),
      token = _useCacheToken2[0],
      hashId = _useCacheToken2[1],
      realToken = _useCacheToken2[2];
    return [mergedTheme, realToken, hashed ? hashId : '', token, cssVar];
  }
});