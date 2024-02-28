define(["exports", "react", "classnames", "rc-dialog", "antd4mx/_util/PurePanel", "antd4mx/config-provider/index", "antd4mx/modal/ConfirmDialog", "antd4mx/modal/shared", "antd4mx/modal/style/index", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, React, _classnames, _rcDialog, _PurePanel, _index, _ConfirmDialog, _shared, _index2, _useCSSVarCls) {
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
  /* eslint-disable react/jsx-no-useless-fragment */

  var PurePanel = function PurePanel(props) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      closeIcon = props.closeIcon,
      closable = props.closable,
      type = props.type,
      title = props.title,
      children = props.children,
      footer = props.footer,
      restProps = __rest(props, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var rootPrefixCls = getPrefixCls();
    var prefixCls = customizePrefixCls || getPrefixCls('modal');
    var rootCls = (0, _useCSSVarCls["default"])(rootPrefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var confirmPrefixCls = "".concat(prefixCls, "-confirm");
    // Choose target props by confirm mark
    var additionalProps = {};
    if (type) {
      additionalProps = {
        closable: closable !== null && closable !== void 0 ? closable : false,
        title: '',
        footer: '',
        children: ( /*#__PURE__*/React.createElement(_ConfirmDialog.ConfirmContent, Object.assign({}, props, {
          prefixCls: prefixCls,
          confirmPrefixCls: confirmPrefixCls,
          rootPrefixCls: rootPrefixCls,
          content: children
        })))
      };
    } else {
      additionalProps = {
        closable: closable !== null && closable !== void 0 ? closable : true,
        title: title,
        footer: footer !== null && /*#__PURE__*/React.createElement(_shared.Footer, Object.assign({}, props)),
        children: children
      };
    }
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcDialog.Panel, Object.assign({
      prefixCls: prefixCls,
      className: (0, _classnames["default"])(hashId, "".concat(prefixCls, "-pure-panel"), type && confirmPrefixCls, type && "".concat(confirmPrefixCls, "-").concat(type), className, cssVarCls, rootCls)
    }, restProps, {
      closeIcon: (0, _shared.renderCloseIcon)(prefixCls, closeIcon),
      closable: closable
    }, additionalProps)));
  };
  var _default = _exports["default"] = (0, _PurePanel.withPureRenderTheme)(PurePanel);
});