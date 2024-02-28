define(["exports", "@ant-design/icons/es/icons/CheckCircleFilled", "@ant-design/icons/es/icons/CloseCircleFilled", "@ant-design/icons/es/icons/ExclamationCircleFilled", "@ant-design/icons/es/icons/InfoCircleFilled", "@ant-design/icons/es/icons/LoadingOutlined", "classnames", "rc-notification", "react", "antd4mx/config-provider", "antd4mx/message/style", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, _CheckCircleFilled, _CloseCircleFilled, _ExclamationCircleFilled, _InfoCircleFilled, _LoadingOutlined, _classnames, _rcNotification, React, _configProvider, _style, _useCSSVarCls) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.TypeIcon = _exports.PureContent = void 0;
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
  var TypeIcon = _exports.TypeIcon = {
    info: /*#__PURE__*/React.createElement(_InfoCircleFilled["default"], null),
    success: /*#__PURE__*/React.createElement(_CheckCircleFilled["default"], null),
    error: /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null),
    warning: /*#__PURE__*/React.createElement(_ExclamationCircleFilled["default"], null),
    loading: /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null)
  };
  var PureContent = _exports.PureContent = function PureContent(_ref) {
    var prefixCls = _ref.prefixCls,
      type = _ref.type,
      icon = _ref.icon,
      children = _ref.children;
    return /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-custom-content"), "".concat(prefixCls, "-").concat(type))
    }, icon || TypeIcon[type], /*#__PURE__*/React.createElement("span", null, children));
  };
  /** @private Internal Component. Do not use in your production. */
  var PurePanel = function PurePanel(props) {
    var staticPrefixCls = props.prefixCls,
      className = props.className,
      type = props.type,
      icon = props.icon,
      content = props.content,
      restProps = __rest(props, ["prefixCls", "className", "type", "icon", "content"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = staticPrefixCls || getPrefixCls('message');
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcNotification.Notice, Object.assign({}, restProps, {
      prefixCls: prefixCls,
      className: (0, _classnames["default"])(className, hashId, "".concat(prefixCls, "-notice-pure-panel"), cssVarCls, rootCls),
      eventKey: "pure",
      duration: null,
      content: /*#__PURE__*/React.createElement(PureContent, {
        prefixCls: prefixCls,
        type: type,
        icon: icon
      }, content)
    })));
  };
  var _default = _exports["default"] = PurePanel;
});