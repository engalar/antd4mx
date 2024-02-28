function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/VerticalAlignTopOutlined", "classnames", "rc-motion", "rc-util/es/omit", "antd4mx/_util/getScroll", "antd4mx/_util/reactNode", "antd4mx/_util/scrollTo", "antd4mx/_util/throttleByAnimationFrame", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/back-top/style/index"], function (_exports, React, _VerticalAlignTopOutlined, _classnames, _rcMotion, _omit, _getScroll, _reactNode, _scrollTo, _throttleByAnimationFrame, _warning, _index, _index2) {
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
  var BackTop = function BackTop(props) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      _props$visibilityHeig = props.visibilityHeight,
      visibilityHeight = _props$visibilityHeig === void 0 ? 400 : _props$visibilityHeig,
      target = props.target,
      onClick = props.onClick,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 450 : _props$duration;
    var _React$useState = React.useState(visibilityHeight === 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];
    var ref = React.useRef(null);
    var getDefaultTarget = function getDefaultTarget() {
      return ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;
    };
    var handleScroll = (0, _throttleByAnimationFrame["default"])(function (e) {
      var scrollTop = (0, _getScroll["default"])(e.target, true);
      setVisible(scrollTop >= visibilityHeight);
    });
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('BackTop');
      warning.deprecated(false, 'BackTop', 'FloatButton.BackTop');
    }
    React.useEffect(function () {
      var getTarget = target || getDefaultTarget;
      var container = getTarget();
      handleScroll({
        target: container
      });
      container === null || container === void 0 ? void 0 : container.addEventListener('scroll', handleScroll);
      return function () {
        handleScroll.cancel();
        container === null || container === void 0 ? void 0 : container.removeEventListener('scroll', handleScroll);
      };
    }, [target]);
    var scrollToTop = function scrollToTop(e) {
      (0, _scrollTo["default"])(0, {
        getContainer: target || getDefaultTarget,
        duration: duration
      });
      onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    var prefixCls = getPrefixCls('back-top', customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var classString = (0, _classnames["default"])(hashId, cssVarCls, prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, rootClassName);
    // fix https://fb.me/react-unknown-prop
    var divProps = (0, _omit["default"])(props, ['prefixCls', 'className', 'rootClassName', 'children', 'visibilityHeight', 'target']);
    var defaultElement = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-icon")
    }, /*#__PURE__*/React.createElement(_VerticalAlignTopOutlined["default"], null)));
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({}, divProps, {
      className: classString,
      onClick: scrollToTop,
      ref: ref
    }), /*#__PURE__*/React.createElement(_rcMotion["default"], {
      visible: visible,
      motionName: "".concat(rootPrefixCls, "-fade")
    }, function (_ref) {
      var motionClassName = _ref.className;
      return (0, _reactNode.cloneElement)(props.children || defaultElement, function (_ref2) {
        var cloneCls = _ref2.className;
        return {
          className: (0, _classnames["default"])(motionClassName, cloneCls)
        };
      });
    })));
  };
  if (process.env.NODE_ENV !== 'production') {
    BackTop.displayName = 'BackTop';
  }
  var _default = _exports["default"] = BackTop;
});