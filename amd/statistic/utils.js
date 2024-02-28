define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.formatCountdown = formatCountdown;
  _exports.formatTimeStr = formatTimeStr;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  // Countdown
  var timeUnits = [['Y', 1000 * 60 * 60 * 24 * 365],
  // years
  ['M', 1000 * 60 * 60 * 24 * 30],
  // months
  ['D', 1000 * 60 * 60 * 24],
  // days
  ['H', 1000 * 60 * 60],
  // hours
  ['m', 1000 * 60],
  // minutes
  ['s', 1000],
  // seconds
  ['S', 1] // million seconds
  ];
  function formatTimeStr(duration, format) {
    var leftDuration = duration;
    var escapeRegex = /\[[^\]]*]/g;
    var keepList = (format.match(escapeRegex) || []).map(function (str) {
      return str.slice(1, -1);
    });
    var templateText = format.replace(escapeRegex, '[]');
    var replacedText = timeUnits.reduce(function (current, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        unit = _ref2[1];
      if (current.includes(name)) {
        var value = Math.floor(leftDuration / unit);
        leftDuration -= value * unit;
        return current.replace(new RegExp("".concat(name, "+"), 'g'), function (match) {
          var len = match.length;
          return value.toString().padStart(len, '0');
        });
      }
      return current;
    }, templateText);
    var index = 0;
    return replacedText.replace(escapeRegex, function () {
      var match = keepList[index];
      index += 1;
      return match;
    });
  }
  function formatCountdown(value, config) {
    var _config$format = config.format,
      format = _config$format === void 0 ? '' : _config$format;
    var target = new Date(value).getTime();
    var current = Date.now();
    var diff = Math.max(target - current, 0);
    return formatTimeStr(diff, format);
  }
});