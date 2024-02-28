function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/CheckCircleFilled", "@ant-design/icons/es/icons/CheckOutlined", "@ant-design/icons/es/icons/CloseCircleFilled", "@ant-design/icons/es/icons/CloseOutlined", "classnames", "rc-util/es/omit", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/progress/Circle", "antd4mx/progress/Line", "antd4mx/progress/Steps", "antd4mx/progress/style/index", "antd4mx/progress/utils"], function (_exports, React, _CheckCircleFilled, _CheckOutlined, _CloseCircleFilled, _CloseOutlined, _classnames, _omit, _warning, _index, _Circle, _Line, _Steps, _index2, _utils) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.ProgressTypes = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  var ProgressTypes = _exports.ProgressTypes = ['line', 'circle', 'dashboard'];
  var ProgressStatuses = ['normal', 'exception', 'active', 'success'];
  var Progress = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      steps = props.steps,
      strokeColor = props.strokeColor,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      _props$size = props.size,
      size = _props$size === void 0 ? 'default' : _props$size,
      _props$showInfo = props.showInfo,
      showInfo = _props$showInfo === void 0 ? true : _props$showInfo,
      _props$type = props.type,
      type = _props$type === void 0 ? 'line' : _props$type,
      status = props.status,
      format = props.format,
      style = props.style,
      restProps = __rest(props, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format", "style"]);
    var percentNumber = React.useMemo(function () {
      var _a, _b;
      var successPercent = (0, _utils.getSuccessPercent)(props);
      return parseInt(successPercent !== undefined ? (_a = successPercent !== null && successPercent !== void 0 ? successPercent : 0) === null || _a === void 0 ? void 0 : _a.toString() : (_b = percent !== null && percent !== void 0 ? percent : 0) === null || _b === void 0 ? void 0 : _b.toString(), 10);
    }, [percent, props.success, props.successPercent]);
    var progressStatus = React.useMemo(function () {
      if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
        return 'success';
      }
      return status || 'normal';
    }, [status, percentNumber]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      progressStyle = _React$useContext.progress;
    var prefixCls = getPrefixCls('progress', customizePrefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var progressInfo = React.useMemo(function () {
      if (!showInfo) {
        return null;
      }
      var successPercent = (0, _utils.getSuccessPercent)(props);
      var text;
      var textFormatter = format || function (number) {
        return "".concat(number, "%");
      };
      var isLineType = type === 'line';
      if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
        text = textFormatter((0, _utils.validProgress)(percent), (0, _utils.validProgress)(successPercent));
      } else if (progressStatus === 'exception') {
        text = isLineType ? /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null) : /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
      } else if (progressStatus === 'success') {
        text = isLineType ? /*#__PURE__*/React.createElement(_CheckCircleFilled["default"], null) : /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
      }
      return /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-text"),
        title: typeof text === 'string' ? text : undefined
      }, text);
    }, [showInfo, percent, percentNumber, progressStatus, type, prefixCls, format]);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Progress');
      warning.deprecated(!('successPercent' in props), 'successPercent', 'success.percent');
      warning.deprecated(!('width' in props), 'width', 'size');
      if ((type === 'circle' || type === 'dashboard') && Array.isArray(size)) {
        process.env.NODE_ENV !== "production" ? warning(false, 'usage', 'Type "circle" and "dashboard" do not accept array as `size`, please use number or preset size instead.') : void 0;
      }
      if (props.success && 'progress' in props.success) {
        warning.deprecated(false, 'success.progress', 'success.percent');
      }
    }
    var strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
    var strokeColorNotGradient = typeof strokeColor === 'string' || Array.isArray(strokeColor) ? strokeColor : undefined;
    var progress;
    // Render progress shape
    if (type === 'line') {
      progress = steps ? ( /*#__PURE__*/React.createElement(_Steps["default"], Object.assign({}, props, {
        strokeColor: strokeColorNotGradient,
        prefixCls: prefixCls,
        steps: steps
      }), progressInfo)) : ( /*#__PURE__*/React.createElement(_Line["default"], Object.assign({}, props, {
        strokeColor: strokeColorNotArray,
        prefixCls: prefixCls,
        direction: direction
      }), progressInfo));
    } else if (type === 'circle' || type === 'dashboard') {
      progress = /*#__PURE__*/React.createElement(_Circle["default"], Object.assign({}, props, {
        strokeColor: strokeColorNotArray,
        prefixCls: prefixCls,
        progressStatus: progressStatus
      }), progressInfo);
    }
    var classString = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-status-").concat(progressStatus), "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || steps && 'steps' || type), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-inline-circle"), type === 'circle' && (0, _utils.getSize)(size, 'circle')[0] <= 20), "".concat(prefixCls, "-show-info"), showInfo), "".concat(prefixCls, "-").concat(size), typeof size === 'string'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.className, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({
      ref: ref,
      style: Object.assign(Object.assign({}, progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.style), style),
      className: classString,
      role: "progressbar",
      "aria-valuenow": percentNumber
    }, (0, _omit["default"])(restProps, ['trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeLinecap', 'success', 'successPercent'])), progress));
  });
  if (process.env.NODE_ENV !== 'production') {
    Progress.displayName = 'Progress';
  }
  var _default = _exports["default"] = Progress;
});