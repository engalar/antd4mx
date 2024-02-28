define(["exports", "@ant-design/colors"], function (_exports, _colors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getStrokeColor = _exports.getSize = _exports.getPercentage = void 0;
  _exports.getSuccessPercent = getSuccessPercent;
  _exports.validProgress = validProgress;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function validProgress(progress) {
    if (!progress || progress < 0) {
      return 0;
    }
    if (progress > 100) {
      return 100;
    }
    return progress;
  }
  function getSuccessPercent(_ref) {
    var success = _ref.success,
      successPercent = _ref.successPercent;
    var percent = successPercent;
    /** @deprecated Use `percent` instead */
    if (success && 'progress' in success) {
      percent = success.progress;
    }
    if (success && 'percent' in success) {
      percent = success.percent;
    }
    return percent;
  }
  var getPercentage = _exports.getPercentage = function getPercentage(_ref2) {
    var percent = _ref2.percent,
      success = _ref2.success,
      successPercent = _ref2.successPercent;
    var realSuccessPercent = validProgress(getSuccessPercent({
      success: success,
      successPercent: successPercent
    }));
    return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
  };
  var getStrokeColor = _exports.getStrokeColor = function getStrokeColor(_ref3) {
    var _ref3$success = _ref3.success,
      success = _ref3$success === void 0 ? {} : _ref3$success,
      strokeColor = _ref3.strokeColor;
    var successColor = success.strokeColor;
    return [successColor || _colors.presetPrimaryColors.green, strokeColor || null];
  };
  var getSize = _exports.getSize = function getSize(size, type, extra) {
    var _a, _b, _c, _d;
    var width = -1;
    var height = -1;
    if (type === 'step') {
      var steps = extra.steps;
      var strokeWidth = extra.strokeWidth;
      if (typeof size === 'string' || typeof size === 'undefined') {
        width = size === 'small' ? 2 : 14;
        height = strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 8;
      } else if (typeof size === 'number') {
        width = size;
        height = size;
      } else {
        var _size = _slicedToArray(size, 2);
        var _size$ = _size[0];
        width = _size$ === void 0 ? 14 : _size$;
        var _size$2 = _size[1];
        height = _size$2 === void 0 ? 8 : _size$2;
      }
      width *= steps;
    } else if (type === 'line') {
      var _strokeWidth = extra === null || extra === void 0 ? void 0 : extra.strokeWidth;
      if (typeof size === 'string' || typeof size === 'undefined') {
        height = _strokeWidth || (size === 'small' ? 6 : 8);
      } else if (typeof size === 'number') {
        width = size;
        height = size;
      } else {
        var _size2 = _slicedToArray(size, 2);
        var _size2$ = _size2[0];
        width = _size2$ === void 0 ? -1 : _size2$;
        var _size2$2 = _size2[1];
        height = _size2$2 === void 0 ? 8 : _size2$2;
      }
    } else if (type === 'circle' || type === 'dashboard') {
      if (typeof size === 'string' || typeof size === 'undefined') {
        var _ref4 = size === 'small' ? [60, 60] : [120, 120];
        var _ref5 = _slicedToArray(_ref4, 2);
        width = _ref5[0];
        height = _ref5[1];
      } else if (typeof size === 'number') {
        width = size;
        height = size;
      } else {
        width = (_b = (_a = size[0]) !== null && _a !== void 0 ? _a : size[1]) !== null && _b !== void 0 ? _b : 120;
        height = (_d = (_c = size[0]) !== null && _c !== void 0 ? _c : size[1]) !== null && _d !== void 0 ? _d : 120;
      }
    }
    return [width, height];
  };
});