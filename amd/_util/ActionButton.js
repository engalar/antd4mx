define(["exports", "rc-util/es/hooks/useState", "react", "antd4mx/button", "antd4mx/button/buttonHelpers"], function (_exports, _useState3, React, _button, _buttonHelpers) {
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
  function isThenable(thing) {
    return !!(thing && thing.then);
  }
  var ActionButton = function ActionButton(props) {
    var type = props.type,
      children = props.children,
      prefixCls = props.prefixCls,
      buttonProps = props.buttonProps,
      close = props.close,
      autoFocus = props.autoFocus,
      emitEvent = props.emitEvent,
      isSilent = props.isSilent,
      quitOnNullishReturnValue = props.quitOnNullishReturnValue,
      actionFn = props.actionFn;
    var clickedRef = React.useRef(false);
    var buttonRef = React.useRef(null);
    var _useState = (0, _useState3["default"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];
    var onInternalClose = function onInternalClose() {
      close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
    };
    React.useEffect(function () {
      var timeoutId = null;
      if (autoFocus) {
        timeoutId = setTimeout(function () {
          var _a;
          (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        });
      }
      return function () {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, []);
    var handlePromiseOnOk = function handlePromiseOnOk(returnValueOfOnOk) {
      if (!isThenable(returnValueOfOnOk)) {
        return;
      }
      setLoading(true);
      returnValueOfOnOk.then(function () {
        setLoading(false, true);
        onInternalClose.apply(void 0, arguments);
        clickedRef.current = false;
      }, function (e) {
        // See: https://github.com/ant-design/ant-design/issues/6183
        setLoading(false, true);
        clickedRef.current = false;
        // Do not throw if is `await` mode
        if (isSilent === null || isSilent === void 0 ? void 0 : isSilent()) {
          return;
        }
        return Promise.reject(e);
      });
    };
    var onClick = function onClick(e) {
      if (clickedRef.current) {
        return;
      }
      clickedRef.current = true;
      if (!actionFn) {
        onInternalClose();
        return;
      }
      var returnValueOfOnOk;
      if (emitEvent) {
        returnValueOfOnOk = actionFn(e);
        if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
          clickedRef.current = false;
          onInternalClose(e);
          return;
        }
      } else if (actionFn.length) {
        returnValueOfOnOk = actionFn(close);
        // https://github.com/ant-design/ant-design/issues/23358
        clickedRef.current = false;
      } else {
        returnValueOfOnOk = actionFn();
        if (!returnValueOfOnOk) {
          onInternalClose();
          return;
        }
      }
      handlePromiseOnOk(returnValueOfOnOk);
    };
    return /*#__PURE__*/React.createElement(_button["default"], Object.assign({}, (0, _buttonHelpers.convertLegacyProps)(type), {
      onClick: onClick,
      loading: loading,
      prefixCls: prefixCls
    }, buttonProps, {
      ref: buttonRef
    }), children);
  };
  var _default = _exports["default"] = ActionButton;
});