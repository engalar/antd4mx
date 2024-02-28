define(["exports", "react", "@ant-design/icons/es/icons/VerticalAlignTopOutlined", "classnames", "rc-motion", "antd4mx/_util/getScroll", "antd4mx/_util/scrollTo", "antd4mx/_util/throttleByAnimationFrame", "antd4mx/config-provider/index", "antd4mx/float-button/context", "antd4mx/float-button/FloatButton"], function (_exports, _react, _VerticalAlignTopOutlined, _classnames, _rcMotion, _getScroll, _scrollTo, _throttleByAnimationFrame, _index, _context, _FloatButton) {
  "use strict";
  "use client";

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
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var BackTop = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'circle' : _props$shape,
      _props$visibilityHeig = props.visibilityHeight,
      visibilityHeight = _props$visibilityHeig === void 0 ? 400 : _props$visibilityHeig,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/_react["default"].createElement(_VerticalAlignTopOutlined["default"], null) : _props$icon,
      target = props.target,
      onClick = props.onClick,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 450 : _props$duration,
      restProps = __rest(props, ["prefixCls", "className", "type", "shape", "visibilityHeight", "icon", "target", "onClick", "duration"]);
    var _useState = (0, _react.useState)(visibilityHeight === 0),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];
    var internalRef = _react["default"].useRef(null);
    _react["default"].useImperativeHandle(ref, function () {
      return {
        nativeElement: internalRef.current
      };
    });
    var getDefaultTarget = function getDefaultTarget() {
      return internalRef.current && internalRef.current.ownerDocument ? internalRef.current.ownerDocument : window;
    };
    var handleScroll = (0, _throttleByAnimationFrame["default"])(function (e) {
      var scrollTop = (0, _getScroll["default"])(e.target, true);
      setVisible(scrollTop >= visibilityHeight);
    });
    (0, _react.useEffect)(function () {
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
    var _useContext = (0, _react.useContext)(_index.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;
    var prefixCls = getPrefixCls(_FloatButton.floatButtonPrefixCls, customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    var groupShape = (0, _react.useContext)(_context["default"]);
    var mergeShape = groupShape || shape;
    var contentProps = Object.assign({
      prefixCls: prefixCls,
      icon: icon,
      type: type,
      shape: mergeShape
    }, restProps);
    return /*#__PURE__*/_react["default"].createElement(_rcMotion["default"], {
      visible: visible,
      motionName: "".concat(rootPrefixCls, "-fade")
    }, function (_ref) {
      var motionClassName = _ref.className;
      return /*#__PURE__*/_react["default"].createElement(_FloatButton["default"], Object.assign({
        ref: internalRef
      }, contentProps, {
        onClick: scrollToTop,
        className: (0, _classnames["default"])(className, motionClassName)
      }));
    });
  });
  if (process.env.NODE_ENV !== 'production') {
    BackTop.displayName = 'BackTop';
  }
  var _default = _exports["default"] = BackTop;
});