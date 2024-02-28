function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "classnames", "rc-motion", "react", "antd4mx/_util/motion", "antd4mx/form/context", "antd4mx/form/hooks/useDebounce", "antd4mx/form/style", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, _toConsumableArray2, _classnames, _rcMotion, _react, _motion, _context, _useDebounce, _style, _useCSSVarCls) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var React = _react;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var EMPTY_LIST = [];
  function toErrorEntity(error, prefix, errorStatus) {
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return {
      key: typeof error === 'string' ? error : "".concat(prefix, "-").concat(index),
      error: error,
      errorStatus: errorStatus
    };
  }
  var ErrorList = function ErrorList(_ref) {
    var help = _ref.help,
      helpStatus = _ref.helpStatus,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? EMPTY_LIST : _ref$errors,
      _ref$warnings = _ref.warnings,
      warnings = _ref$warnings === void 0 ? EMPTY_LIST : _ref$warnings,
      rootClassName = _ref.className,
      fieldId = _ref.fieldId,
      onVisibleChanged = _ref.onVisibleChanged;
    var _React$useContext = React.useContext(_context.FormItemPrefixContext),
      prefixCls = _React$useContext.prefixCls;
    var baseClassName = "".concat(prefixCls, "-item-explain");
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var collapseMotion = (0, _react.useMemo)(function () {
      return (0, _motion["default"])(prefixCls);
    }, [prefixCls]);
    // We have to debounce here again since somewhere use ErrorList directly still need no shaking
    // ref: https://github.com/ant-design/ant-design/issues/36336
    var debounceErrors = (0, _useDebounce["default"])(errors);
    var debounceWarnings = (0, _useDebounce["default"])(warnings);
    var fullKeyList = React.useMemo(function () {
      if (help !== undefined && help !== null) {
        return [toErrorEntity(help, 'help', helpStatus)];
      }
      return [].concat((0, _toConsumableArray2["default"])(debounceErrors.map(function (error, index) {
        return toErrorEntity(error, 'error', 'error', index);
      })), (0, _toConsumableArray2["default"])(debounceWarnings.map(function (warning, index) {
        return toErrorEntity(warning, 'warning', 'warning', index);
      })));
    }, [help, helpStatus, debounceErrors, debounceWarnings]);
    var helpProps = {};
    if (fieldId) {
      helpProps.id = "".concat(fieldId, "_help");
    }
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcMotion["default"], {
      motionDeadline: collapseMotion.motionDeadline,
      motionName: "".concat(prefixCls, "-show-help"),
      visible: !!fullKeyList.length,
      onVisibleChanged: onVisibleChanged
    }, function (holderProps) {
      var holderClassName = holderProps.className,
        holderStyle = holderProps.style;
      return /*#__PURE__*/React.createElement("div", Object.assign({}, helpProps, {
        className: (0, _classnames["default"])(baseClassName, holderClassName, cssVarCls, rootCls, rootClassName, hashId),
        style: holderStyle,
        role: "alert"
      }), /*#__PURE__*/React.createElement(_rcMotion.CSSMotionList, Object.assign({
        keys: fullKeyList
      }, (0, _motion["default"])(prefixCls), {
        motionName: "".concat(prefixCls, "-show-help-item"),
        component: false
      }), function (itemProps) {
        var key = itemProps.key,
          error = itemProps.error,
          errorStatus = itemProps.errorStatus,
          itemClassName = itemProps.className,
          itemStyle = itemProps.style;
        return /*#__PURE__*/React.createElement("div", {
          key: key,
          className: (0, _classnames["default"])(itemClassName, _defineProperty({}, "".concat(baseClassName, "-").concat(errorStatus), errorStatus)),
          style: itemStyle
        }, error);
      }));
    }));
  };
  var _default = _exports["default"] = ErrorList;
});