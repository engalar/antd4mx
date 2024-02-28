define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "antd4mx/config-provider/index", "antd4mx/locale/en_US", "antd4mx/locale/useLocale", "antd4mx/modal/ConfirmDialog"], function (_exports, _toConsumableArray2, React, _index, _en_US, _useLocale3, _ConfirmDialog) {
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
  var HookModal = function HookModal(_a, ref) {
    var _b;
    var hookAfterClose = _a.afterClose,
      config = _a.config,
      restProps = __rest(_a, ["afterClose", "config"]);
    var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];
    var _React$useState3 = React.useState(config),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      innerConfig = _React$useState4[0],
      setInnerConfig = _React$useState4[1];
    var _React$useContext = React.useContext(_index.ConfigContext),
      direction = _React$useContext.direction,
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('modal');
    var rootPrefixCls = getPrefixCls();
    var afterClose = function afterClose() {
      var _a;
      hookAfterClose();
      (_a = innerConfig.afterClose) === null || _a === void 0 ? void 0 : _a.call(innerConfig);
    };
    var close = function close() {
      setOpen(false);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var triggerCancel = args.some(function (param) {
        return param && param.triggerCancel;
      });
      if (innerConfig.onCancel && triggerCancel) {
        innerConfig.onCancel.apply(innerConfig, [function () {}].concat((0, _toConsumableArray2["default"])(args.slice(1))));
      }
    };
    React.useImperativeHandle(ref, function () {
      return {
        destroy: close,
        update: function update(newConfig) {
          setInnerConfig(function (originConfig) {
            return Object.assign(Object.assign({}, originConfig), newConfig);
          });
        }
      };
    });
    var mergedOkCancel = (_b = innerConfig.okCancel) !== null && _b !== void 0 ? _b : innerConfig.type === 'confirm';
    var _useLocale = (0, _useLocale3["default"])('Modal', _en_US["default"].Modal),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      contextLocale = _useLocale2[0];
    return /*#__PURE__*/React.createElement(_ConfirmDialog["default"], Object.assign({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls
    }, innerConfig, {
      close: close,
      open: open,
      afterClose: afterClose,
      okText: innerConfig.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.justOkText),
      direction: innerConfig.direction || direction,
      cancelText: innerConfig.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.cancelText)
    }, restProps));
  };
  var _default = _exports["default"] = /*#__PURE__*/React.forwardRef(HookModal);
});