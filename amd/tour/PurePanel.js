define(["exports", "classnames", "react", "antd4mx/config-provider", "antd4mx/popover/PurePanel", "antd4mx/tour/panelRender", "antd4mx/tour/style", "antd4mx/_util/PurePanel"], function (_exports, _classnames, React, _configProvider, _PurePanel, _panelRender, _style, _PurePanel2) {
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
  var PurePanel = function PurePanel(props) {
    var customizePrefixCls = props.prefixCls,
      _props$current = props.current,
      current = _props$current === void 0 ? 0 : _props$current,
      _props$total = props.total,
      total = _props$total === void 0 ? 6 : _props$total,
      className = props.className,
      style = props.style,
      type = props.type,
      restProps = __rest(props, ["prefixCls", "current", "total", "className", "style", "type"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('tour', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    return wrapCSSVar( /*#__PURE__*/React.createElement(_PurePanel.RawPurePanel, {
      prefixCls: prefixCls,
      hashId: hashId,
      className: (0, _classnames["default"])(className, "".concat(prefixCls, "-pure"), type && "".concat(prefixCls, "-").concat(type), cssVarCls),
      style: style
    }, /*#__PURE__*/React.createElement(_panelRender["default"], {
      stepProps: Object.assign(Object.assign({}, restProps), {
        prefixCls: prefixCls,
        total: total
      }),
      current: current,
      type: type
    })));
  };
  var _default = _exports["default"] = (0, _PurePanel2.withPureRenderTheme)(PurePanel);
});