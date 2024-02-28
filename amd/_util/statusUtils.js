define(["exports", "classnames"], function (_exports, _classnames) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getMergedStatus = void 0;
  _exports.getStatusClassNames = getStatusClassNames;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var InputStatuses = ['warning', 'error', ''];
  function getStatusClassNames(prefixCls, status, hasFeedback) {
    return (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-status-success"), status === 'success'), "".concat(prefixCls, "-status-warning"), status === 'warning'), "".concat(prefixCls, "-status-error"), status === 'error'), "".concat(prefixCls, "-status-validating"), status === 'validating'), "".concat(prefixCls, "-has-feedback"), hasFeedback));
  }
  var getMergedStatus = _exports.getMergedStatus = function getMergedStatus(contextStatus, customStatus) {
    return customStatus || contextStatus;
  };
});