define(["exports", "react", "@ant-design/icons/es/icons/SearchOutlined", "classnames", "rc-util/es/ref", "antd4mx/_util/reactNode", "antd4mx/button/index", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useSize", "antd4mx/space/Compact", "antd4mx/input/Input"], function (_exports, React, _SearchOutlined, _classnames, _ref, _reactNode, _index, _index2, _useSize, _Compact, _Input) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var Search = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      customizeInputPrefixCls = props.inputPrefixCls,
      className = props.className,
      customizeSize = props.size,
      suffix = props.suffix,
      _props$enterButton = props.enterButton,
      enterButton = _props$enterButton === void 0 ? false : _props$enterButton,
      addonAfter = props.addonAfter,
      loading = props.loading,
      disabled = props.disabled,
      customOnSearch = props.onSearch,
      customOnChange = props.onChange,
      onCompositionStart = props.onCompositionStart,
      onCompositionEnd = props.onCompositionEnd,
      restProps = __rest(props, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]);
    var _React$useContext = React.useContext(_index2.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    var composedRef = React.useRef(false);
    var prefixCls = getPrefixCls('input-search', customizePrefixCls);
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
      compactSize = _useCompactItemContex.compactSize;
    var size = (0, _useSize["default"])(function (ctx) {
      var _a;
      return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    var inputRef = React.useRef(null);
    var onChange = function onChange(e) {
      if (e && e.target && e.type === 'click' && customOnSearch) {
        customOnSearch(e.target.value, e, {
          source: 'clear'
        });
      }
      if (customOnChange) {
        customOnChange(e);
      }
    };
    var onMouseDown = function onMouseDown(e) {
      var _a;
      if (document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input)) {
        e.preventDefault();
      }
    };
    var onSearch = function onSearch(e) {
      var _a, _b;
      if (customOnSearch) {
        customOnSearch((_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.value, e, {
          source: 'input'
        });
      }
    };
    var onPressEnter = function onPressEnter(e) {
      if (composedRef.current || loading) {
        return;
      }
      onSearch(e);
    };
    var searchIcon = typeof enterButton === 'boolean' ? /*#__PURE__*/React.createElement(_SearchOutlined["default"], null) : null;
    var btnClassName = "".concat(prefixCls, "-button");
    var button;
    var enterButtonAsElement = enterButton || {};
    var isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
    if (isAntdButton || enterButtonAsElement.type === 'button') {
      button = (0, _reactNode.cloneElement)(enterButtonAsElement, Object.assign({
        onMouseDown: onMouseDown,
        onClick: function onClick(e) {
          var _a, _b;
          (_b = (_a = enterButtonAsElement === null || enterButtonAsElement === void 0 ? void 0 : enterButtonAsElement.props) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
          onSearch(e);
        },
        key: 'enterButton'
      }, isAntdButton ? {
        className: btnClassName,
        size: size
      } : {}));
    } else {
      button = /*#__PURE__*/React.createElement(_index["default"], {
        className: btnClassName,
        type: enterButton ? 'primary' : undefined,
        size: size,
        disabled: disabled,
        key: "enterButton",
        onMouseDown: onMouseDown,
        onClick: onSearch,
        loading: loading,
        icon: searchIcon
      }, enterButton);
    }
    if (addonAfter) {
      button = [button, (0, _reactNode.cloneElement)(addonAfter, {
        key: 'addonAfter'
      })];
    }
    var cls = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-").concat(size), !!size), "".concat(prefixCls, "-with-button"), !!enterButton), className);
    var handleOnCompositionStart = function handleOnCompositionStart(e) {
      composedRef.current = true;
      onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
    };
    var handleOnCompositionEnd = function handleOnCompositionEnd(e) {
      composedRef.current = false;
      onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
    };
    return /*#__PURE__*/React.createElement(_Input["default"], Object.assign({
      ref: (0, _ref.composeRef)(inputRef, ref),
      onPressEnter: onPressEnter
    }, restProps, {
      size: size,
      onCompositionStart: handleOnCompositionStart,
      onCompositionEnd: handleOnCompositionEnd,
      prefixCls: inputPrefixCls,
      addonAfter: button,
      suffix: suffix,
      onChange: onChange,
      className: cls,
      disabled: disabled
    }));
  });
  if (process.env.NODE_ENV !== 'production') {
    Search.displayName = 'Search';
  }
  var _default = _exports["default"] = Search;
});