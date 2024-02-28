function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "antd4mx/_util/responsiveObserver", "antd4mx/config-provider", "antd4mx/config-provider/hooks/useSize", "antd4mx/grid/hooks/useBreakpoint", "antd4mx/descriptions/constant", "antd4mx/descriptions/DescriptionsContext", "antd4mx/descriptions/hooks/useItems", "antd4mx/descriptions/hooks/useRow", "antd4mx/descriptions/Item", "antd4mx/descriptions/Row", "antd4mx/descriptions/style"], function (_exports, React, _classnames, _responsiveObserver, _configProvider, _useSize, _useBreakpoint, _constant, _DescriptionsContext, _useItems, _useRow, _Item, _Row, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "DescriptionsContext", {
    enumerable: true,
    get: function get() {
      return _DescriptionsContext["default"];
    }
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
  /* eslint-disable react/no-array-index-key */

  var Descriptions = function Descriptions(props) {
    var customizePrefixCls = props.prefixCls,
      title = props.title,
      extra = props.extra,
      column = props.column,
      _props$colon = props.colon,
      colon = _props$colon === void 0 ? true : _props$colon,
      bordered = props.bordered,
      layout = props.layout,
      children = props.children,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      customizeSize = props.size,
      labelStyle = props.labelStyle,
      contentStyle = props.contentStyle,
      items = props.items,
      restProps = __rest(props, ["prefixCls", "title", "extra", "column", "colon", "bordered", "layout", "children", "className", "rootClassName", "style", "size", "labelStyle", "contentStyle", "items"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      descriptions = _React$useContext.descriptions;
    var prefixCls = getPrefixCls('descriptions', customizePrefixCls);
    var screens = (0, _useBreakpoint["default"])();
    // Column count
    var mergedColumn = React.useMemo(function () {
      var _a;
      if (typeof column === 'number') {
        return column;
      }
      return (_a = (0, _responsiveObserver.matchScreen)(screens, Object.assign(Object.assign({}, _constant["default"]), column))) !== null && _a !== void 0 ? _a : 3;
    }, [screens, column]);
    // Items with responsive
    var mergedItems = (0, _useItems["default"])(screens, items, children);
    var mergedSize = (0, _useSize["default"])(customizeSize);
    var rows = (0, _useRow["default"])(mergedColumn, mergedItems);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    // ======================== Render ========================
    var contextValue = React.useMemo(function () {
      return {
        labelStyle: labelStyle,
        contentStyle: contentStyle
      };
    }, [labelStyle, contentStyle]);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_DescriptionsContext["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement("div", Object.assign({
      className: (0, _classnames["default"])(prefixCls, descriptions === null || descriptions === void 0 ? void 0 : descriptions.className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(mergedSize), mergedSize && mergedSize !== 'default'), "".concat(prefixCls, "-bordered"), !!bordered), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, hashId, cssVarCls),
      style: Object.assign(Object.assign({}, descriptions === null || descriptions === void 0 ? void 0 : descriptions.style), style)
    }, restProps), (title || extra) && ( /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-header")
    }, title && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, title), extra && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra))), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-view")
    }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, rows.map(function (row, index) {
      return /*#__PURE__*/React.createElement(_Row["default"], {
        key: index,
        index: index,
        colon: colon,
        prefixCls: prefixCls,
        vertical: layout === 'vertical',
        bordered: bordered,
        row: row
      });
    })))))));
  };
  if (process.env.NODE_ENV !== 'production') {
    Descriptions.displayName = 'Descriptions';
  }
  Descriptions.Item = _Item["default"];
  var _default = _exports["default"] = Descriptions;
});