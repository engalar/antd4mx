define(["exports", "react", "antd4mx/theme/internal"], function (_exports, _react, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useResponsiveObserver;
  _exports.responsiveArray = _exports.matchScreen = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var responsiveArray = _exports.responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
  var getResponsiveMap = function getResponsiveMap(token) {
    return {
      xs: "(max-width: ".concat(token.screenXSMax, "px)"),
      sm: "(min-width: ".concat(token.screenSM, "px)"),
      md: "(min-width: ".concat(token.screenMD, "px)"),
      lg: "(min-width: ".concat(token.screenLG, "px)"),
      xl: "(min-width: ".concat(token.screenXL, "px)"),
      xxl: "(min-width: ".concat(token.screenXXL, "px)")
    };
  };
  /**
   * Ensures that the breakpoints token are valid, in good order
   * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
   */
  var validateBreakpoints = function validateBreakpoints(token) {
    var indexableToken = token;
    var revBreakpoints = [].concat(responsiveArray).reverse();
    revBreakpoints.forEach(function (breakpoint, i) {
      var breakpointUpper = breakpoint.toUpperCase();
      var screenMin = "screen".concat(breakpointUpper, "Min");
      var screen = "screen".concat(breakpointUpper);
      if (!(indexableToken[screenMin] <= indexableToken[screen])) {
        throw new Error("".concat(screenMin, "<=").concat(screen, " fails : !(").concat(indexableToken[screenMin], "<=").concat(indexableToken[screen], ")"));
      }
      if (i < revBreakpoints.length - 1) {
        var screenMax = "screen".concat(breakpointUpper, "Max");
        if (!(indexableToken[screen] <= indexableToken[screenMax])) {
          throw new Error("".concat(screen, "<=").concat(screenMax, " fails : !(").concat(indexableToken[screen], "<=").concat(indexableToken[screenMax], ")"));
        }
        var nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
        var nextScreenMin = "screen".concat(nextBreakpointUpperMin, "Min");
        if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
          throw new Error("".concat(screenMax, "<=").concat(nextScreenMin, " fails : !(").concat(indexableToken[screenMax], "<=").concat(indexableToken[nextScreenMin], ")"));
        }
      }
    });
    return token;
  };
  function useResponsiveObserver() {
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var responsiveMap = getResponsiveMap(validateBreakpoints(token));
    // To avoid repeat create instance, we add `useMemo` here.
    return _react["default"].useMemo(function () {
      var subscribers = new Map();
      var subUid = -1;
      var screens = {};
      return {
        matchHandlers: {},
        dispatch: function dispatch(pointMap) {
          screens = pointMap;
          subscribers.forEach(function (func) {
            return func(screens);
          });
          return subscribers.size >= 1;
        },
        subscribe: function subscribe(func) {
          if (!subscribers.size) this.register();
          subUid += 1;
          subscribers.set(subUid, func);
          func(screens);
          return subUid;
        },
        unsubscribe: function unsubscribe(paramToken) {
          subscribers["delete"](paramToken);
          if (!subscribers.size) this.unregister();
        },
        unregister: function unregister() {
          var _this = this;
          Object.keys(responsiveMap).forEach(function (screen) {
            var matchMediaQuery = responsiveMap[screen];
            var handler = _this.matchHandlers[matchMediaQuery];
            handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
          });
          subscribers.clear();
        },
        register: function register() {
          var _this2 = this;
          Object.keys(responsiveMap).forEach(function (screen) {
            var matchMediaQuery = responsiveMap[screen];
            var listener = function listener(_ref) {
              var matches = _ref.matches;
              _this2.dispatch(Object.assign(Object.assign({}, screens), _defineProperty({}, screen, matches)));
            };
            var mql = window.matchMedia(matchMediaQuery);
            mql.addListener(listener);
            _this2.matchHandlers[matchMediaQuery] = {
              mql: mql,
              listener: listener
            };
            listener(mql);
          });
        },
        responsiveMap: responsiveMap
      };
    }, [token]);
  }
  var matchScreen = _exports.matchScreen = function matchScreen(screens, screenSizes) {
    if (screenSizes && _typeof(screenSizes) === 'object') {
      for (var i = 0; i < responsiveArray.length; i++) {
        var breakpoint = responsiveArray[i];
        if (screens[breakpoint] && screenSizes[breakpoint] !== undefined) {
          return screenSizes[breakpoint];
        }
      }
    }
  };
});