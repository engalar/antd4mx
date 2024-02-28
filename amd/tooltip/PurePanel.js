define(["exports", "classnames", "rc-tooltip", "react", "antd4mx/config-provider", "antd4mx/tooltip/style", "antd4mx/tooltip/util"], function (_exports, _classnames, _rcTooltip, React, _configProvider, _style, _util) {
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
  /** @private Internal Component. Do not use in your production. */
  var PurePanel = function PurePanel(props) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      title = props.title,
      color = props.color,
      overlayInnerStyle = props.overlayInnerStyle;
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    // Color
    var colorInfo = (0, _util.parseColor)(prefixCls, color);
    var arrowContentStyle = colorInfo.arrowStyle;
    var formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    var cls = (0, _classnames["default"])(hashId, cssVarCls, prefixCls, "".concat(prefixCls, "-pure"), "".concat(prefixCls, "-placement-").concat(placement), className, colorInfo.className);
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
      className: cls,
      style: arrowContentStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-arrow")
    }), /*#__PURE__*/React.createElement(_rcTooltip.Popup, Object.assign({}, props, {
      className: hashId,
      prefixCls: prefixCls,
      overlayInnerStyle: formattedOverlayInnerStyle
    }), title)));
  };
  var _default = _exports["default"] = PurePanel;
});