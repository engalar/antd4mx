function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/react-slick", "classnames", "antd4mx/config-provider/index", "antd4mx/carousel/style/index"], function (_exports, React, _reactSlick, _classnames, _index, _index2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  var Carousel = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _props$dots = props.dots,
      dots = _props$dots === void 0 ? true : _props$dots,
      _props$arrows = props.arrows,
      arrows = _props$arrows === void 0 ? false : _props$arrows,
      _props$draggable = props.draggable,
      draggable = _props$draggable === void 0 ? false : _props$draggable,
      _props$waitForAnimate = props.waitForAnimate,
      waitForAnimate = _props$waitForAnimate === void 0 ? false : _props$waitForAnimate,
      _props$dotPosition = props.dotPosition,
      dotPosition = _props$dotPosition === void 0 ? 'bottom' : _props$dotPosition,
      _props$vertical = props.vertical,
      vertical = _props$vertical === void 0 ? dotPosition === 'left' || dotPosition === 'right' : _props$vertical,
      rootClassName = props.rootClassName,
      customClassName = props.className,
      style = props.style,
      id = props.id,
      otherProps = __rest(props, ["dots", "arrows", "draggable", "waitForAnimate", "dotPosition", "vertical", "rootClassName", "className", "style", "id"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      carousel = _React$useContext.carousel;
    var slickRef = React.useRef();
    var goTo = function goTo(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slickRef.current.slickGoTo(slide, dontAnimate);
    };
    React.useImperativeHandle(ref, function () {
      return {
        goTo: goTo,
        autoPlay: slickRef.current.innerSlider.autoPlay,
        innerSlider: slickRef.current.innerSlider,
        prev: slickRef.current.slickPrev,
        next: slickRef.current.slickNext
      };
    }, [slickRef.current]);
    var prevCount = React.useRef(React.Children.count(props.children));
    React.useEffect(function () {
      if (prevCount.current !== React.Children.count(props.children)) {
        goTo(props.initialSlide || 0, false);
        prevCount.current = React.Children.count(props.children);
      }
    }, [props.children]);
    var newProps = Object.assign({
      vertical: vertical,
      className: (0, _classnames["default"])(customClassName, carousel === null || carousel === void 0 ? void 0 : carousel.className),
      style: Object.assign(Object.assign({}, carousel === null || carousel === void 0 ? void 0 : carousel.style), style)
    }, otherProps);
    if (newProps.effect === 'fade') {
      newProps.fade = true;
    }
    var prefixCls = getPrefixCls('carousel', newProps.prefixCls);
    var dotsClass = 'slick-dots';
    var enableDots = !!dots;
    var dsClass = (0, _classnames["default"])(dotsClass, "".concat(dotsClass, "-").concat(dotPosition), typeof dots === 'boolean' ? false : dots === null || dots === void 0 ? void 0 : dots.className);
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var className = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-vertical"), newProps.vertical), hashId, cssVarCls, rootClassName);
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
      className: className,
      id: id
    }, /*#__PURE__*/React.createElement(_reactSlick["default"], Object.assign({
      ref: slickRef
    }, newProps, {
      dots: enableDots,
      dotsClass: dsClass,
      arrows: arrows,
      draggable: draggable,
      verticalSwiping: vertical,
      waitForAnimate: waitForAnimate
    }))));
  });
  if (process.env.NODE_ENV !== 'production') {
    Carousel.displayName = 'Carousel';
  }
  var _default = _exports["default"] = Carousel;
});