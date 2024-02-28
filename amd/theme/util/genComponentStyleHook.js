function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/cssinjs", "rc-util", "antd4mx/config-provider/context", "antd4mx/style/index", "antd4mx/theme/useToken", "antd4mx/theme/util/calc/index", "antd4mx/theme/util/maxmin", "antd4mx/theme/util/statistic", "antd4mx/theme/util/useResetIconStyle"], function (_exports, _react, _cssinjs, _rcUtil, _context, _index, _useToken7, _index2, _maxmin, _statistic, _useResetIconStyle) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = genComponentStyleHook;
  _exports.genSubStyleComponent = _exports.genStyleHooks = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var getDefaultComponentToken = function getDefaultComponentToken(component, token, getDefaultToken) {
    var _a;
    if (typeof getDefaultToken === 'function') {
      return getDefaultToken((0, _statistic.merge)(token, (_a = token[component]) !== null && _a !== void 0 ? _a : {}));
    }
    return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
  };
  var getComponentToken = function getComponentToken(component, token, defaultToken, options) {
    var customToken = Object.assign({}, token[component]);
    if (options === null || options === void 0 ? void 0 : options.deprecatedTokens) {
      var deprecatedTokens = options.deprecatedTokens;
      deprecatedTokens.forEach(function (_ref) {
        var _ref4 = _slicedToArray(_ref, 2),
          oldTokenKey = _ref4[0],
          newTokenKey = _ref4[1];
        var _a;
        if (process.env.NODE_ENV !== 'production') {
          process.env.NODE_ENV !== "production" ? (0, _rcUtil.warning)(!(customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]), "Component Token `".concat(String(oldTokenKey), "` of ").concat(component, " is deprecated. Please use `").concat(String(newTokenKey), "` instead.")) : void 0;
        }
        // Should wrap with `if` clause, or there will be `undefined` in object.
        if ((customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]) || (customToken === null || customToken === void 0 ? void 0 : customToken[newTokenKey])) {
          (_a = customToken[newTokenKey]) !== null && _a !== void 0 ? _a : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
        }
      });
    }
    var mergedToken = Object.assign(Object.assign({}, defaultToken), customToken);
    // Remove same value as global token to minimize size
    Object.keys(mergedToken).forEach(function (key) {
      if (mergedToken[key] === token[key]) {
        delete mergedToken[key];
      }
    });
    return mergedToken;
  };
  var getCompVarPrefix = function getCompVarPrefix(component, prefix) {
    return "".concat([prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2')].filter(Boolean).join('-'));
  };
  function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
    var _cells = _slicedToArray(cells, 1),
      component = _cells[0];
    var concatComponent = cells.join('-');
    return function (prefixCls) {
      var rootCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefixCls;
      var _useToken = (0, _useToken7["default"])(),
        _useToken2 = _slicedToArray(_useToken, 5),
        theme = _useToken2[0],
        realToken = _useToken2[1],
        hashId = _useToken2[2],
        token = _useToken2[3],
        cssVar = _useToken2[4];
      var _useContext = (0, _react.useContext)(_context.ConfigContext),
        getPrefixCls = _useContext.getPrefixCls,
        iconPrefixCls = _useContext.iconPrefixCls,
        csp = _useContext.csp;
      var rootPrefixCls = getPrefixCls();
      var type = cssVar ? 'css' : 'js';
      var calc = (0, _index2["default"])(type);
      var _genMaxMin = (0, _maxmin["default"])(type),
        max = _genMaxMin.max,
        min = _genMaxMin.min;
      // Shared config
      var sharedConfig = {
        theme: theme,
        token: token,
        hashId: hashId,
        nonce: function nonce() {
          return csp === null || csp === void 0 ? void 0 : csp.nonce;
        },
        clientOnly: options.clientOnly,
        // antd is always at top of styles
        order: options.order || -999
      };
      // Generate style for all a tags in antd component.
      (0, _cssinjs.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
        clientOnly: false,
        path: ['Shared', rootPrefixCls]
      }), function () {
        return [{
          // Link
          '&': (0, _index.genLinkStyle)(token)
        }];
      });
      // Generate style for icons
      (0, _useResetIconStyle["default"])(iconPrefixCls, csp);
      var wrapSSR = (0, _cssinjs.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
        path: [concatComponent, prefixCls, iconPrefixCls]
      }), function () {
        if (options.injectStyle === false) {
          return [];
        }
        var _statisticToken = (0, _statistic["default"])(token),
          proxyToken = _statisticToken.token,
          flush = _statisticToken.flush;
        var defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
        var componentCls = ".".concat(prefixCls);
        var componentToken = getComponentToken(component, realToken, defaultComponentToken, {
          deprecatedTokens: options.deprecatedTokens
        });
        if (cssVar) {
          Object.keys(defaultComponentToken).forEach(function (key) {
            defaultComponentToken[key] = "var(".concat((0, _cssinjs.token2CSSVar)(key, getCompVarPrefix(component, cssVar.prefix)), ")");
          });
        }
        var mergedToken = (0, _statistic.merge)(proxyToken, {
          componentCls: componentCls,
          prefixCls: prefixCls,
          iconCls: ".".concat(iconPrefixCls),
          antCls: ".".concat(rootPrefixCls),
          calc: calc,
          max: max,
          min: min
        }, cssVar ? defaultComponentToken : componentToken);
        var styleInterpolation = styleFn(mergedToken, {
          hashId: hashId,
          prefixCls: prefixCls,
          rootPrefixCls: rootPrefixCls,
          iconPrefixCls: iconPrefixCls
        });
        flush(component, componentToken);
        return [options.resetStyle === false ? null : (0, _index.genCommonStyle)(mergedToken, prefixCls, rootCls), styleInterpolation];
      });
      return [wrapSSR, hashId];
    };
  }
  var genSubStyleComponent = _exports.genSubStyleComponent = function genSubStyleComponent(componentName, styleFn, getDefaultToken, options) {
    var useStyle = genComponentStyleHook(componentName, styleFn, getDefaultToken, Object.assign({
      resetStyle: false,
      // Sub Style should default after root one
      order: -998
    }, options));
    var StyledComponent = function StyledComponent(_ref2) {
      var prefixCls = _ref2.prefixCls,
        _ref2$rootCls = _ref2.rootCls,
        rootCls = _ref2$rootCls === void 0 ? prefixCls : _ref2$rootCls;
      useStyle(prefixCls, rootCls);
      return null;
    };
    if (process.env.NODE_ENV !== 'production') {
      StyledComponent.displayName = "SubStyle_".concat(Array.isArray(componentName) ? componentName.join('.') : componentName);
    }
    return StyledComponent;
  };
  var genCSSVarRegister = function genCSSVarRegister(component, getDefaultToken, options) {
    function prefixToken(key) {
      return "".concat(component).concat(key.slice(0, 1).toUpperCase()).concat(key.slice(1));
    }
    var _ref5 = options !== null && options !== void 0 ? options : {},
      _ref5$unitless = _ref5.unitless,
      originUnitless = _ref5$unitless === void 0 ? {} : _ref5$unitless,
      _ref5$injectStyle = _ref5.injectStyle,
      injectStyle = _ref5$injectStyle === void 0 ? true : _ref5$injectStyle;
    var compUnitless = _defineProperty({}, prefixToken('zIndexPopup'), true);
    Object.keys(originUnitless).forEach(function (key) {
      compUnitless[prefixToken(key)] = originUnitless[key];
    });
    var CSSVarRegister = function CSSVarRegister(_ref3) {
      var rootCls = _ref3.rootCls,
        cssVar = _ref3.cssVar;
      var _useToken3 = (0, _useToken7["default"])(),
        _useToken4 = _slicedToArray(_useToken3, 2),
        realToken = _useToken4[1];
      (0, _cssinjs.useCSSVarRegister)({
        path: [component],
        prefix: cssVar.prefix,
        key: cssVar === null || cssVar === void 0 ? void 0 : cssVar.key,
        unitless: Object.assign(Object.assign({}, _useToken7.unitless), compUnitless),
        ignore: _useToken7.ignore,
        token: realToken,
        scope: rootCls
      }, function () {
        var defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
        var componentToken = getComponentToken(component, realToken, defaultToken, {
          deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
        });
        Object.keys(defaultToken).forEach(function (key) {
          componentToken[prefixToken(key)] = componentToken[key];
          delete componentToken[key];
        });
        return componentToken;
      });
      return null;
    };
    var useCSSVar = function useCSSVar(rootCls) {
      var _useToken5 = (0, _useToken7["default"])(),
        _useToken6 = _slicedToArray(_useToken5, 5),
        cssVar = _useToken6[4];
      return [function (node) {
        return injectStyle && cssVar ? ( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(CSSVarRegister, {
          rootCls: rootCls,
          cssVar: cssVar,
          component: component
        }), node)) : node;
      }, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
    };
    return useCSSVar;
  };
  var genStyleHooks = _exports.genStyleHooks = function genStyleHooks(component, styleFn, getDefaultToken, options) {
    var useStyle = genComponentStyleHook(component, styleFn, getDefaultToken, options);
    var useCSSVar = genCSSVarRegister(Array.isArray(component) ? component[0] : component, getDefaultToken, options);
    return function (prefixCls) {
      var rootCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefixCls;
      var _useStyle = useStyle(prefixCls, rootCls),
        _useStyle2 = _slicedToArray(_useStyle, 2),
        hashId = _useStyle2[1];
      var _useCSSVar = useCSSVar(rootCls),
        _useCSSVar2 = _slicedToArray(_useCSSVar, 2),
        wrapCSSVar = _useCSSVar2[0],
        cssVarCls = _useCSSVar2[1];
      return [wrapCSSVar, hashId, cssVarCls];
    };
  };
});