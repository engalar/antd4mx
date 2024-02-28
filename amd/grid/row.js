define(["exports", "react", "classnames", "antd4mx/_util/responsiveObserver", "antd4mx/config-provider/index", "antd4mx/grid/RowContext", "antd4mx/grid/style/index"], function (_exports, React, _classnames, _responsiveObserver, _index, _RowContext, _index2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  var RowAligns = ['top', 'middle', 'bottom', 'stretch'];
  var RowJustify = ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'];
  function useMergePropByScreen(oriProp, screen) {
    var _React$useState = React.useState(typeof oriProp === 'string' ? oriProp : ''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      prop = _React$useState2[0],
      setProp = _React$useState2[1];
    var calcMergeAlignOrJustify = function calcMergeAlignOrJustify() {
      if (typeof oriProp === 'string') {
        setProp(oriProp);
      }
      if (_typeof(oriProp) !== 'object') {
        return;
      }
      for (var i = 0; i < _responsiveObserver.responsiveArray.length; i++) {
        var breakpoint = _responsiveObserver.responsiveArray[i];
        // if do not match, do nothing
        if (!screen[breakpoint]) {
          continue;
        }
        var curVal = oriProp[breakpoint];
        if (curVal !== undefined) {
          setProp(curVal);
          return;
        }
      }
    };
    React.useEffect(function () {
      calcMergeAlignOrJustify();
    }, [JSON.stringify(oriProp), screen]);
    return prop;
  }
  var Row = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      justify = props.justify,
      align = props.align,
      className = props.className,
      style = props.style,
      children = props.children,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      wrap = props.wrap,
      others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    var _React$useState3 = React.useState({
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true
      }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      screens = _React$useState4[0],
      setScreens = _React$useState4[1];
    // to save screens info when responsiveObserve callback had been call
    var _React$useState5 = React.useState({
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
        xxl: false
      }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      curScreens = _React$useState6[0],
      setCurScreens = _React$useState6[1];
    // ================================== calc responsive data ==================================
    var mergeAlign = useMergePropByScreen(align, curScreens);
    var mergeJustify = useMergePropByScreen(justify, curScreens);
    var gutterRef = React.useRef(gutter);
    var responsiveObserver = (0, _responsiveObserver["default"])();
    // ================================== Effect ==================================
    React.useEffect(function () {
      var token = responsiveObserver.subscribe(function (screen) {
        setCurScreens(screen);
        var currentGutter = gutterRef.current || 0;
        if (!Array.isArray(currentGutter) && _typeof(currentGutter) === 'object' || Array.isArray(currentGutter) && (_typeof(currentGutter[0]) === 'object' || _typeof(currentGutter[1]) === 'object')) {
          setScreens(screen);
        }
      });
      return function () {
        return responsiveObserver.unsubscribe(token);
      };
    }, []);
    // ================================== Render ==================================
    var getGutter = function getGutter() {
      var results = [undefined, undefined];
      var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
      normalizedGutter.forEach(function (g, index) {
        if (_typeof(g) === 'object') {
          for (var i = 0; i < _responsiveObserver.responsiveArray.length; i++) {
            var breakpoint = _responsiveObserver.responsiveArray[i];
            if (screens[breakpoint] && g[breakpoint] !== undefined) {
              results[index] = g[breakpoint];
              break;
            }
          }
        } else {
          results[index] = g;
        }
      });
      return results;
    };
    var prefixCls = getPrefixCls('row', customizePrefixCls);
    var _useRowStyle = (0, _index2.useRowStyle)(prefixCls),
      _useRowStyle2 = _slicedToArray(_useRowStyle, 3),
      wrapCSSVar = _useRowStyle2[0],
      hashId = _useRowStyle2[1],
      cssVarCls = _useRowStyle2[2];
    var gutters = getGutter();
    var classes = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-no-wrap"), wrap === false), "".concat(prefixCls, "-").concat(mergeJustify), mergeJustify), "".concat(prefixCls, "-").concat(mergeAlign), mergeAlign), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, hashId, cssVarCls);
    // Add gutter related style
    var rowStyle = {};
    var horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
    if (horizontalGutter) {
      rowStyle.marginLeft = horizontalGutter;
      rowStyle.marginRight = horizontalGutter;
    }
    // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
    // So we deconstruct "gutters" variable here.
    var _gutters = _slicedToArray(gutters, 2),
      gutterH = _gutters[0],
      gutterV = _gutters[1];
    rowStyle.rowGap = gutterV;
    var rowContext = React.useMemo(function () {
      return {
        gutter: [gutterH, gutterV],
        wrap: wrap
      };
    }, [gutterH, gutterV, wrap]);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_RowContext["default"].Provider, {
      value: rowContext
    }, /*#__PURE__*/React.createElement("div", Object.assign({}, others, {
      className: classes,
      style: Object.assign(Object.assign({}, rowStyle), style),
      ref: ref
    }), children)));
  });
  if (process.env.NODE_ENV !== 'production') {
    Row.displayName = 'Row';
  }
  var _default = _exports["default"] = Row;
});