define(["exports", "react", "antd4mx/_util/hooks/useForceUpdate", "antd4mx/_util/reactNode", "antd4mx/statistic/Statistic", "antd4mx/statistic/utils"], function (_exports, React, _useForceUpdate, _reactNode, _Statistic, _utils) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var REFRESH_INTERVAL = 1000 / 30;
  function getTime(value) {
    return new Date(value).getTime();
  }
  var Countdown = function Countdown(props) {
    var value = props.value,
      _props$format = props.format,
      format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
      onChange = props.onChange,
      onFinish = props.onFinish,
      rest = __rest(props, ["value", "format", "onChange", "onFinish"]);
    var forceUpdate = (0, _useForceUpdate["default"])();
    var countdown = React.useRef(null);
    var stopTimer = function stopTimer() {
      onFinish === null || onFinish === void 0 ? void 0 : onFinish();
      if (countdown.current) {
        clearInterval(countdown.current);
        countdown.current = null;
      }
    };
    var syncTimer = function syncTimer() {
      var timestamp = getTime(value);
      if (timestamp >= Date.now()) {
        countdown.current = setInterval(function () {
          forceUpdate();
          onChange === null || onChange === void 0 ? void 0 : onChange(timestamp - Date.now());
          if (timestamp < Date.now()) {
            stopTimer();
          }
        }, REFRESH_INTERVAL);
      }
    };
    React.useEffect(function () {
      syncTimer();
      return function () {
        if (countdown.current) {
          clearInterval(countdown.current);
          countdown.current = null;
        }
      };
    }, [value]);
    var formatter = function formatter(formatValue, config) {
      return (0, _utils.formatCountdown)(formatValue, Object.assign(Object.assign({}, config), {
        format: format
      }));
    };
    var valueRender = function valueRender(node) {
      return (0, _reactNode.cloneElement)(node, {
        title: undefined
      });
    };
    return /*#__PURE__*/React.createElement(_Statistic["default"], Object.assign({}, rest, {
      value: value,
      valueRender: valueRender,
      formatter: formatter
    }));
  };
  var _default = _exports["default"] = /*#__PURE__*/React.memo(Countdown);
});