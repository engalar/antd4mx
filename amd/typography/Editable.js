function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@ant-design/icons/es/icons/EnterOutlined", "classnames", "rc-util/es/KeyCode", "react", "antd4mx/_util/reactNode", "antd4mx/input/TextArea", "antd4mx/typography/style"], function (_exports, _EnterOutlined, _classnames, _KeyCode, React, _reactNode, _TextArea, _style) {
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
  var Editable = function Editable(props) {
    var prefixCls = props.prefixCls,
      ariaLabel = props['aria-label'],
      className = props.className,
      style = props.style,
      direction = props.direction,
      maxLength = props.maxLength,
      _props$autoSize = props.autoSize,
      autoSize = _props$autoSize === void 0 ? true : _props$autoSize,
      value = props.value,
      onSave = props.onSave,
      onCancel = props.onCancel,
      onEnd = props.onEnd,
      component = props.component,
      _props$enterIcon = props.enterIcon,
      enterIcon = _props$enterIcon === void 0 ? /*#__PURE__*/React.createElement(_EnterOutlined["default"], null) : _props$enterIcon;
    var ref = React.useRef(null);
    var inComposition = React.useRef(false);
    var lastKeyCode = React.useRef();
    var _React$useState = React.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      current = _React$useState2[0],
      setCurrent = _React$useState2[1];
    React.useEffect(function () {
      setCurrent(value);
    }, [value]);
    React.useEffect(function () {
      if (ref.current && ref.current.resizableTextArea) {
        var textArea = ref.current.resizableTextArea.textArea;
        textArea.focus();
        var length = textArea.value.length;
        textArea.setSelectionRange(length, length);
      }
    }, []);
    var onChange = function onChange(_ref) {
      var target = _ref.target;
      setCurrent(target.value.replace(/[\n\r]/g, ''));
    };
    var onCompositionStart = function onCompositionStart() {
      inComposition.current = true;
    };
    var onCompositionEnd = function onCompositionEnd() {
      inComposition.current = false;
    };
    var onKeyDown = function onKeyDown(_ref2) {
      var keyCode = _ref2.keyCode;
      // We don't record keyCode when IME is using
      if (inComposition.current) return;
      lastKeyCode.current = keyCode;
    };
    var confirmChange = function confirmChange() {
      onSave(current.trim());
    };
    var onKeyUp = function onKeyUp(_ref3) {
      var keyCode = _ref3.keyCode,
        ctrlKey = _ref3.ctrlKey,
        altKey = _ref3.altKey,
        metaKey = _ref3.metaKey,
        shiftKey = _ref3.shiftKey;
      // Check if it's a real key
      if (lastKeyCode.current === keyCode && !inComposition.current && !ctrlKey && !altKey && !metaKey && !shiftKey) {
        if (keyCode === _KeyCode["default"].ENTER) {
          confirmChange();
          onEnd === null || onEnd === void 0 ? void 0 : onEnd();
        } else if (keyCode === _KeyCode["default"].ESC) {
          onCancel();
        }
      }
    };
    var onBlur = function onBlur() {
      confirmChange();
    };
    var textClassName = component ? "".concat(prefixCls, "-").concat(component) : '';
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var textAreaClassName = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-edit-content"), _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, textClassName, hashId, cssVarCls);
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
      className: textAreaClassName,
      style: style
    }, /*#__PURE__*/React.createElement(_TextArea["default"], {
      ref: ref,
      maxLength: maxLength,
      value: current,
      onChange: onChange,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp,
      onCompositionStart: onCompositionStart,
      onCompositionEnd: onCompositionEnd,
      onBlur: onBlur,
      "aria-label": ariaLabel,
      rows: 1,
      autoSize: autoSize
    }), enterIcon !== null ? (0, _reactNode.cloneElement)(enterIcon, {
      className: "".concat(prefixCls, "-edit-content-confirm")
    }) : null));
  };
  var _default = _exports["default"] = Editable;
});