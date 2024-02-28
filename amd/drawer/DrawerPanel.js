function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "antd4mx/_util/hooks/useClosable", "antd4mx/config-provider/index"], function (_exports, React, _classnames, _useClosable3, _index) {
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
  var DrawerPanel = function DrawerPanel(props) {
    var _a, _b;
    var prefixCls = props.prefixCls,
      title = props.title,
      footer = props.footer,
      extra = props.extra,
      closeIcon = props.closeIcon,
      closable = props.closable,
      onClose = props.onClose,
      headerStyle = props.headerStyle,
      bodyStyle = props.bodyStyle,
      footerStyle = props.footerStyle,
      children = props.children,
      drawerClassNames = props.classNames,
      drawerStyles = props.styles;
    var _React$useContext = React.useContext(_index.ConfigContext),
      drawerContext = _React$useContext.drawer;
    var customCloseIconRender = React.useCallback(function (icon) {
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: onClose,
        "aria-label": "Close",
        className: "".concat(prefixCls, "-close")
      }, icon);
    }, [onClose]);
    var _useClosable = (0, _useClosable3["default"])(closable, typeof closeIcon !== 'undefined' ? closeIcon : drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.closeIcon, customCloseIconRender, undefined, true),
      _useClosable2 = _slicedToArray(_useClosable, 2),
      mergedClosable = _useClosable2[0],
      mergedCloseIcon = _useClosable2[1];
    var headerNode = React.useMemo(function () {
      var _a, _b;
      if (!title && !mergedClosable) {
        return null;
      }
      return /*#__PURE__*/React.createElement("div", {
        style: Object.assign(Object.assign(Object.assign({}, (_a = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.styles) === null || _a === void 0 ? void 0 : _a.header), headerStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.header),
        className: (0, _classnames["default"])("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-header-close-only"), mergedClosable && !title && !extra), (_b = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.classNames) === null || _b === void 0 ? void 0 : _b.header, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.header)
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-header-title")
      }, mergedCloseIcon, title && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title)), extra && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra));
    }, [mergedClosable, mergedCloseIcon, extra, headerStyle, prefixCls, title]);
    var footerNode = React.useMemo(function () {
      var _a, _b;
      if (!footer) {
        return null;
      }
      var footerClassName = "".concat(prefixCls, "-footer");
      return /*#__PURE__*/React.createElement("div", {
        className: (0, _classnames["default"])(footerClassName, (_a = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.classNames) === null || _a === void 0 ? void 0 : _a.footer, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.footer),
        style: Object.assign(Object.assign(Object.assign({}, (_b = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.styles) === null || _b === void 0 ? void 0 : _b.footer), footerStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.footer)
      }, footer);
    }, [footer, footerStyle, prefixCls]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, headerNode, /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-body"), drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.body, (_a = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.classNames) === null || _a === void 0 ? void 0 : _a.body),
      style: Object.assign(Object.assign(Object.assign({}, (_b = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.styles) === null || _b === void 0 ? void 0 : _b.body), bodyStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.body)
    }, children), footerNode);
  };
  var _default = _exports["default"] = DrawerPanel;
});