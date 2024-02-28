define(["exports", "classnames", "rc-segmented", "react", "antd4mx/config-provider", "antd4mx/config-provider/hooks/useSize", "antd4mx/segmented/style"], function (_exports, _classnames, _rcSegmented, React, _configProvider, _useSize, _style) {
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
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  function isSegmentedLabeledOptionWithIcon(option) {
    return _typeof(option) === 'object' && !!(option === null || option === void 0 ? void 0 : option.icon);
  }
  var InternalSegmented = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      block = props.block,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$size = props.size,
      customSize = _props$size === void 0 ? 'middle' : _props$size,
      style = props.style,
      restProps = __rest(props, ["prefixCls", "className", "rootClassName", "block", "options", "size", "style"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      segmented = _React$useContext.segmented;
    var prefixCls = getPrefixCls('segmented', customizePrefixCls);
    // Style
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    // ===================== Size =====================
    var mergedSize = (0, _useSize["default"])(customSize);
    // syntactic sugar to support `icon` for Segmented Item
    var extendedOptions = React.useMemo(function () {
      return options.map(function (option) {
        if (isSegmentedLabeledOptionWithIcon(option)) {
          var icon = option.icon,
            label = option.label,
            restOption = __rest(option, ["icon", "label"]);
          return Object.assign(Object.assign({}, restOption), {
            label: ( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-item-icon")
            }, icon), label && /*#__PURE__*/React.createElement("span", null, label)))
          });
        }
        return option;
      });
    }, [options, prefixCls]);
    var cls = (0, _classnames["default"])(className, rootClassName, segmented === null || segmented === void 0 ? void 0 : segmented.className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-block"), block), "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-lg"), mergedSize === 'large'), hashId, cssVarCls);
    var mergedStyle = Object.assign(Object.assign({}, segmented === null || segmented === void 0 ? void 0 : segmented.style), style);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcSegmented["default"], Object.assign({}, restProps, {
      className: cls,
      style: mergedStyle,
      options: extendedOptions,
      ref: ref,
      prefixCls: prefixCls,
      direction: direction
    })));
  });
  var Segmented = InternalSegmented;
  if (process.env.NODE_ENV !== 'production') {
    Segmented.displayName = 'Segmented';
  }
  var _default = _exports["default"] = Segmented;
});