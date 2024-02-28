define(["exports", "react", "classnames", "antd4mx/_util/getRenderPropValue", "antd4mx/_util/motion", "antd4mx/config-provider", "antd4mx/tooltip", "antd4mx/popover/PurePanel", "antd4mx/popover/style"], function (_exports, React, _classnames, _getRenderPropValue, _motion, _configProvider, _tooltip, _PurePanel, _style) {
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

  // CSSINJS

  var Overlay = function Overlay(_ref) {
    var title = _ref.title,
      content = _ref.content,
      prefixCls = _ref.prefixCls;
    return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, (0, _getRenderPropValue.getRenderPropValue)(title)), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-inner-content")
    }, (0, _getRenderPropValue.getRenderPropValue)(content)));
  };
  var Popover = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      title = props.title,
      content = props.content,
      overlayClassName = props.overlayClassName,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'hover' : _props$trigger,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0.1 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      _props$overlayStyle = props.overlayStyle,
      overlayStyle = _props$overlayStyle === void 0 ? {} : _props$overlayStyle,
      otherProps = __rest(props, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('popover', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var rootPrefixCls = getPrefixCls();
    var overlayCls = (0, _classnames["default"])(overlayClassName, hashId, cssVarCls);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_tooltip["default"], Object.assign({
      placement: placement,
      trigger: trigger,
      mouseEnterDelay: mouseEnterDelay,
      mouseLeaveDelay: mouseLeaveDelay,
      overlayStyle: overlayStyle
    }, otherProps, {
      prefixCls: prefixCls,
      overlayClassName: overlayCls,
      ref: ref,
      overlay: title || content ? /*#__PURE__*/React.createElement(Overlay, {
        prefixCls: prefixCls,
        title: title,
        content: content
      }) : null,
      transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom-big', otherProps.transitionName),
      "data-popover-inject": true
    })));
  });
  if (process.env.NODE_ENV !== 'production') {
    Popover.displayName = 'Popover';
  }
  Popover._InternalPanelDoNotUseOrYouWillBeFired = _PurePanel["default"];
  var _default = _exports["default"] = Popover;
});