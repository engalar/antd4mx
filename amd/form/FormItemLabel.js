define(["exports", "@ant-design/icons/es/icons/QuestionCircleOutlined", "classnames", "react", "antd4mx/grid/col", "antd4mx/locale/en_US", "antd4mx/locale", "antd4mx/tooltip", "antd4mx/form/context"], function (_exports, _QuestionCircleOutlined, _classnames, React, _col, _en_US, _locale, _tooltip, _context) {
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
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  function toTooltipProps(tooltip) {
    if (!tooltip) {
      return null;
    }
    if (_typeof(tooltip) === 'object' && ! /*#__PURE__*/React.isValidElement(tooltip)) {
      return tooltip;
    }
    return {
      title: tooltip
    };
  }
  var FormItemLabel = function FormItemLabel(_ref) {
    var prefixCls = _ref.prefixCls,
      label = _ref.label,
      htmlFor = _ref.htmlFor,
      labelCol = _ref.labelCol,
      labelAlign = _ref.labelAlign,
      colon = _ref.colon,
      required = _ref.required,
      requiredMark = _ref.requiredMark,
      tooltip = _ref.tooltip;
    var _a;
    var _useLocale = (0, _locale.useLocale)('Form'),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      formLocale = _useLocale2[0];
    var _React$useContext = React.useContext(_context.FormContext),
      vertical = _React$useContext.vertical,
      contextLabelAlign = _React$useContext.labelAlign,
      contextLabelCol = _React$useContext.labelCol,
      labelWrap = _React$useContext.labelWrap,
      contextColon = _React$useContext.colon;
    if (!label) {
      return null;
    }
    var mergedLabelCol = labelCol || contextLabelCol || {};
    var mergedLabelAlign = labelAlign || contextLabelAlign;
    var labelClsBasic = "".concat(prefixCls, "-item-label");
    var labelColClassName = (0, _classnames["default"])(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.className, _defineProperty({}, "".concat(labelClsBasic, "-wrap"), !!labelWrap));
    var labelChildren = label;
    // Keep label is original where there should have no colon
    var computedColon = colon === true || contextColon !== false && colon !== false;
    var haveColon = computedColon && !vertical;
    // Remove duplicated user input colon
    if (haveColon && typeof label === 'string' && label.trim() !== '') {
      labelChildren = label.replace(/[:|：]\s*$/, '');
    }
    // Tooltip
    var tooltipProps = toTooltipProps(tooltip);
    if (tooltipProps) {
      var _tooltipProps$icon = tooltipProps.icon,
        icon = _tooltipProps$icon === void 0 ? /*#__PURE__*/React.createElement(_QuestionCircleOutlined["default"], null) : _tooltipProps$icon,
        restTooltipProps = __rest(tooltipProps, ["icon"]);
      var tooltipNode = /*#__PURE__*/React.createElement(_tooltip["default"], Object.assign({}, restTooltipProps), /*#__PURE__*/React.cloneElement(icon, {
        className: "".concat(prefixCls, "-item-tooltip"),
        title: '',
        onClick: function onClick(e) {
          // Prevent label behavior in tooltip icon
          // https://github.com/ant-design/ant-design/issues/46154
          e.preventDefault();
        },
        tabIndex: null
      }));
      labelChildren = /*#__PURE__*/React.createElement(React.Fragment, null, labelChildren, tooltipNode);
    }
    // Required Mark
    var isOptionalMark = requiredMark === 'optional';
    var isRenderMark = typeof requiredMark === 'function';
    if (isRenderMark) {
      labelChildren = requiredMark(labelChildren, {
        required: !!required
      });
    } else if (isOptionalMark && !required) {
      labelChildren = /*#__PURE__*/React.createElement(React.Fragment, null, labelChildren, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-item-optional"),
        title: ""
      }, (formLocale === null || formLocale === void 0 ? void 0 : formLocale.optional) || ((_a = _en_US["default"].Form) === null || _a === void 0 ? void 0 : _a.optional)));
    }
    var labelClassName = (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-item-required"), required), "".concat(prefixCls, "-item-required-mark-optional"), isOptionalMark || isRenderMark), "".concat(prefixCls, "-item-no-colon"), !computedColon));
    return /*#__PURE__*/React.createElement(_col["default"], Object.assign({}, mergedLabelCol, {
      className: labelColClassName
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: htmlFor,
      className: labelClassName,
      title: typeof label === 'string' ? label : ''
    }, labelChildren));
  };
  var _default = _exports["default"] = FormItemLabel;
});