function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@ant-design/icons/es/icons/DoubleLeftOutlined", "@ant-design/icons/es/icons/DoubleRightOutlined", "@ant-design/icons/es/icons/LeftOutlined", "@ant-design/icons/es/icons/RightOutlined", "classnames", "rc-pagination", "rc-pagination/es/locale/en_US", "react", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useSize", "antd4mx/grid/hooks/useBreakpoint", "antd4mx/locale/index", "antd4mx/pagination/Select", "antd4mx/pagination/style/index", "antd4mx/theme/internal", "antd4mx/pagination/style/bordered"], function (_exports, _DoubleLeftOutlined, _DoubleRightOutlined, _LeftOutlined, _RightOutlined, _classnames, _rcPagination, _en_US, React, _index, _useSize, _useBreakpoint2, _index2, _Select, _index3, _internal, _bordered) {
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
  var Pagination = function Pagination(props) {
    var customizePrefixCls = props.prefixCls,
      customizeSelectPrefixCls = props.selectPrefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      customizeSize = props.size,
      customLocale = props.locale,
      selectComponentClass = props.selectComponentClass,
      responsive = props.responsive,
      showSizeChanger = props.showSizeChanger,
      restProps = __rest(props, ["prefixCls", "selectPrefixCls", "className", "rootClassName", "style", "size", "locale", "selectComponentClass", "responsive", "showSizeChanger"]);
    var _useBreakpoint = (0, _useBreakpoint2["default"])(responsive),
      xs = _useBreakpoint.xs;
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      _React$useContext$pag = _React$useContext.pagination,
      pagination = _React$useContext$pag === void 0 ? {} : _React$useContext$pag;
    var prefixCls = getPrefixCls('pagination', customizePrefixCls);
    // Style
    var _useStyle = (0, _index3["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mergedShowSizeChanger = showSizeChanger !== null && showSizeChanger !== void 0 ? showSizeChanger : pagination.showSizeChanger;
    var iconsProps = React.useMemo(function () {
      var ellipsis = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-item-ellipsis")
      }, "\u2022\u2022\u2022");
      var prevIcon = /*#__PURE__*/React.createElement("button", {
        className: "".concat(prefixCls, "-item-link"),
        type: "button",
        tabIndex: -1
      }, direction === 'rtl' ? /*#__PURE__*/React.createElement(_RightOutlined["default"], null) : /*#__PURE__*/React.createElement(_LeftOutlined["default"], null));
      var nextIcon = /*#__PURE__*/React.createElement("button", {
        className: "".concat(prefixCls, "-item-link"),
        type: "button",
        tabIndex: -1
      }, direction === 'rtl' ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null));
      var jumpPrevIcon = /*#__PURE__*/React.createElement("a", {
        className: "".concat(prefixCls, "-item-link")
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-item-container")
      }, direction === 'rtl' ? ( /*#__PURE__*/React.createElement(_DoubleRightOutlined["default"], {
        className: "".concat(prefixCls, "-item-link-icon")
      })) : ( /*#__PURE__*/React.createElement(_DoubleLeftOutlined["default"], {
        className: "".concat(prefixCls, "-item-link-icon")
      })), ellipsis));
      var jumpNextIcon = /*#__PURE__*/React.createElement("a", {
        className: "".concat(prefixCls, "-item-link")
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-item-container")
      }, direction === 'rtl' ? ( /*#__PURE__*/React.createElement(_DoubleLeftOutlined["default"], {
        className: "".concat(prefixCls, "-item-link-icon")
      })) : ( /*#__PURE__*/React.createElement(_DoubleRightOutlined["default"], {
        className: "".concat(prefixCls, "-item-link-icon")
      })), ellipsis));
      return {
        prevIcon: prevIcon,
        nextIcon: nextIcon,
        jumpPrevIcon: jumpPrevIcon,
        jumpNextIcon: jumpNextIcon
      };
    }, [direction, prefixCls]);
    var _useLocale = (0, _index2.useLocale)('Pagination', _en_US["default"]),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      contextLocale = _useLocale2[0];
    var locale = Object.assign(Object.assign({}, contextLocale), customLocale);
    var mergedSize = (0, _useSize["default"])(customizeSize);
    var isSmall = mergedSize === 'small' || !!(xs && !mergedSize && responsive);
    var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
    var extendedClassName = (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-mini"), isSmall), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-bordered"), token.wireframe), pagination === null || pagination === void 0 ? void 0 : pagination.className, className, rootClassName, hashId, cssVarCls);
    var mergedStyle = Object.assign(Object.assign({}, pagination === null || pagination === void 0 ? void 0 : pagination.style), style);
    return wrapCSSVar( /*#__PURE__*/React.createElement(React.Fragment, null, token.wireframe && /*#__PURE__*/React.createElement(_bordered["default"], {
      prefixCls: prefixCls
    }), /*#__PURE__*/React.createElement(_rcPagination["default"], Object.assign({}, iconsProps, restProps, {
      style: mergedStyle,
      prefixCls: prefixCls,
      selectPrefixCls: selectPrefixCls,
      className: extendedClassName,
      selectComponentClass: selectComponentClass || (isSmall ? _Select.MiniSelect : _Select.MiddleSelect),
      locale: locale,
      showSizeChanger: mergedShowSizeChanger
    }))));
  };
  if (process.env.NODE_ENV !== 'production') {
    Pagination.displayName = 'Pagination';
  }
  var _default = _exports["default"] = Pagination;
});