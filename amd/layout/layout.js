function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "classnames", "rc-util/es/omit", "antd4mx/config-provider/index", "antd4mx/layout/context", "antd4mx/layout/hooks/useHasSider", "antd4mx/layout/style/index"], function (_exports, _toConsumableArray2, React, _classnames, _omit, _index, _context, _useHasSider, _index2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.Header = _exports.Footer = _exports.Content = void 0;
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
  function generator(_ref) {
    var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      displayName = _ref.displayName;
    return function (BasicComponent) {
      var Adapter = /*#__PURE__*/React.forwardRef(function (props, ref) {
        return /*#__PURE__*/React.createElement(BasicComponent, Object.assign({
          ref: ref,
          suffixCls: suffixCls,
          tagName: tagName
        }, props));
      });
      if (process.env.NODE_ENV !== 'production') {
        Adapter.displayName = displayName;
      }
      return Adapter;
    };
  }
  var Basic = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      suffixCls = props.suffixCls,
      className = props.className,
      TagName = props.tagName,
      others = __rest(props, ["prefixCls", "suffixCls", "className", "tagName"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('layout', customizePrefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapSSR = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var prefixWithSuffixCls = suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    return wrapSSR( /*#__PURE__*/React.createElement(TagName, Object.assign({
      className: (0, _classnames["default"])(customizePrefixCls || prefixWithSuffixCls, className, hashId, cssVarCls),
      ref: ref
    }, others)));
  });
  var BasicLayout = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _React$useContext2 = React.useContext(_index.ConfigContext),
      direction = _React$useContext2.direction;
    var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      siders = _React$useState2[0],
      setSiders = _React$useState2[1];
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      children = props.children,
      hasSider = props.hasSider,
      Tag = props.tagName,
      style = props.style,
      others = __rest(props, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]);
    var passedProps = (0, _omit["default"])(others, ['suffixCls']);
    var _React$useContext3 = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext3.getPrefixCls,
      layout = _React$useContext3.layout;
    var prefixCls = getPrefixCls('layout', customizePrefixCls);
    var mergedHasSider = (0, _useHasSider["default"])(siders, children, hasSider);
    var _useStyle3 = (0, _index2["default"])(prefixCls),
      _useStyle4 = _slicedToArray(_useStyle3, 3),
      wrapCSSVar = _useStyle4[0],
      hashId = _useStyle4[1],
      cssVarCls = _useStyle4[2];
    var classString = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-has-sider"), mergedHasSider), "".concat(prefixCls, "-rtl"), direction === 'rtl'), layout === null || layout === void 0 ? void 0 : layout.className, className, rootClassName, hashId, cssVarCls);
    var contextValue = React.useMemo(function () {
      return {
        siderHook: {
          addSider: function addSider(id) {
            setSiders(function (prev) {
              return [].concat((0, _toConsumableArray2["default"])(prev), [id]);
            });
          },
          removeSider: function removeSider(id) {
            setSiders(function (prev) {
              return prev.filter(function (currentId) {
                return currentId !== id;
              });
            });
          }
        }
      };
    }, []);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_context.LayoutContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(Tag, Object.assign({
      ref: ref,
      className: classString,
      style: Object.assign(Object.assign({}, layout === null || layout === void 0 ? void 0 : layout.style), style)
    }, passedProps), children)));
  });
  var Layout = generator({
    tagName: 'div',
    displayName: 'Layout'
  })(BasicLayout);
  var Header = _exports.Header = generator({
    suffixCls: 'header',
    tagName: 'header',
    displayName: 'Header'
  })(Basic);
  var Footer = _exports.Footer = generator({
    suffixCls: 'footer',
    tagName: 'footer',
    displayName: 'Footer'
  })(Basic);
  var Content = _exports.Content = generator({
    suffixCls: 'content',
    tagName: 'main',
    displayName: 'Content'
  })(Basic);
  var _default = _exports["default"] = Layout;
});