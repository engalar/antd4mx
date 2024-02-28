define(["exports", "react", "@ant-design/icons/es/icons/EyeInvisibleOutlined", "@ant-design/icons/es/icons/EyeOutlined", "classnames", "rc-util/es/omit", "rc-util/es/ref", "antd4mx/config-provider", "antd4mx/input/hooks/useRemovePasswordTimeout", "antd4mx/input/Input"], function (_exports, _react, _EyeInvisibleOutlined, _EyeOutlined, _classnames, _omit, _ref, _configProvider, _useRemovePasswordTimeout, _Input) {
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
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var defaultIconRender = function defaultIconRender(visible) {
    return visible ? /*#__PURE__*/React.createElement(_EyeOutlined["default"], null) : /*#__PURE__*/React.createElement(_EyeInvisibleOutlined["default"], null);
  };
  var actionMap = {
    click: 'onClick',
    hover: 'onMouseOver'
  };
  var Password = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _props$visibilityTogg = props.visibilityToggle,
      visibilityToggle = _props$visibilityTogg === void 0 ? true : _props$visibilityTogg;
    var visibilityControlled = _typeof(visibilityToggle) === 'object' && visibilityToggle.visible !== undefined;
    var _useState = (0, _react.useState)(function () {
        return visibilityControlled ? visibilityToggle.visible : false;
      }),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];
    var inputRef = (0, _react.useRef)(null);
    React.useEffect(function () {
      if (visibilityControlled) {
        setVisible(visibilityToggle.visible);
      }
    }, [visibilityControlled, visibilityToggle]);
    // Remove Password value
    var removePasswordTimeout = (0, _useRemovePasswordTimeout["default"])(inputRef);
    var onVisibleChange = function onVisibleChange() {
      var disabled = props.disabled;
      if (disabled) {
        return;
      }
      if (visible) {
        removePasswordTimeout();
      }
      setVisible(function (prevState) {
        var _a;
        var newState = !prevState;
        if (_typeof(visibilityToggle) === 'object') {
          (_a = visibilityToggle.onVisibleChange) === null || _a === void 0 ? void 0 : _a.call(visibilityToggle, newState);
        }
        return newState;
      });
    };
    var getIcon = function getIcon(prefixCls) {
      var _props$action = props.action,
        action = _props$action === void 0 ? 'click' : _props$action,
        _props$iconRender = props.iconRender,
        iconRender = _props$iconRender === void 0 ? defaultIconRender : _props$iconRender;
      var iconTrigger = actionMap[action] || '';
      var icon = iconRender(visible);
      var iconProps = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, iconTrigger, onVisibleChange), "className", "".concat(prefixCls, "-icon")), "key", 'passwordIcon'), "onMouseDown", function onMouseDown(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      }), "onMouseUp", function onMouseUp(e) {
        // Prevent caret position change
        // https://github.com/ant-design/ant-design/issues/23524
        e.preventDefault();
      });
      return /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.isValidElement(icon) ? icon : /*#__PURE__*/React.createElement("span", null, icon), iconProps);
    };
    var className = props.className,
      customizePrefixCls = props.prefixCls,
      customizeInputPrefixCls = props.inputPrefixCls,
      size = props.size,
      restProps = __rest(props, ["className", "prefixCls", "inputPrefixCls", "size"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var prefixCls = getPrefixCls('input-password', customizePrefixCls);
    var suffixIcon = visibilityToggle && getIcon(prefixCls);
    var inputClassName = (0, _classnames["default"])(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size));
    var omittedProps = Object.assign(Object.assign({}, (0, _omit["default"])(restProps, ['suffix', 'iconRender', 'visibilityToggle'])), {
      type: visible ? 'text' : 'password',
      className: inputClassName,
      prefixCls: inputPrefixCls,
      suffix: suffixIcon
    });
    if (size) {
      omittedProps.size = size;
    }
    return /*#__PURE__*/React.createElement(_Input["default"], Object.assign({
      ref: (0, _ref.composeRef)(ref, inputRef)
    }, omittedProps));
  });
  if (process.env.NODE_ENV !== 'production') {
    Password.displayName = 'Input.Password';
  }
  var _default = _exports["default"] = Password;
});