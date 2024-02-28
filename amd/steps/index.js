function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@ant-design/icons/es/icons/CheckOutlined", "@ant-design/icons/es/icons/CloseOutlined", "classnames", "rc-steps", "react", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useSize", "antd4mx/grid/hooks/useBreakpoint", "antd4mx/progress/index", "antd4mx/tooltip/index", "antd4mx/steps/style/index", "antd4mx/steps/useLegacyItems"], function (_exports, _CheckOutlined, _CloseOutlined, _classnames, _rcSteps, React, _index, _useSize, _useBreakpoint2, _index2, _index3, _index4, _useLegacyItems) {
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
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var Steps = function Steps(props) {
    var percent = props.percent,
      customizeSize = props.size,
      className = props.className,
      rootClassName = props.rootClassName,
      direction = props.direction,
      items = props.items,
      _props$responsive = props.responsive,
      responsive = _props$responsive === void 0 ? true : _props$responsive,
      _props$current = props.current,
      current = _props$current === void 0 ? 0 : _props$current,
      children = props.children,
      style = props.style,
      restProps = __rest(props, ["percent", "size", "className", "rootClassName", "direction", "items", "responsive", "current", "children", "style"]);
    var _useBreakpoint = (0, _useBreakpoint2["default"])(responsive),
      xs = _useBreakpoint.xs;
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      rtlDirection = _React$useContext.direction,
      steps = _React$useContext.steps;
    var realDirectionValue = React.useMemo(function () {
      return responsive && xs ? 'vertical' : direction;
    }, [xs, direction]);
    var size = (0, _useSize["default"])(customizeSize);
    var prefixCls = getPrefixCls('steps', props.prefixCls);
    var _useStyle = (0, _index4["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var isInline = props.type === 'inline';
    var iconPrefix = getPrefixCls('', props.iconPrefix);
    var mergedItems = (0, _useLegacyItems["default"])(items, children);
    var mergedPercent = isInline ? undefined : percent;
    var mergedStyle = Object.assign(Object.assign({}, steps === null || steps === void 0 ? void 0 : steps.style), style);
    var stepsClassName = (0, _classnames["default"])(steps === null || steps === void 0 ? void 0 : steps.className, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-rtl"), rtlDirection === 'rtl'), "".concat(prefixCls, "-with-progress"), mergedPercent !== undefined), className, rootClassName, hashId, cssVarCls);
    var icons = {
      finish: /*#__PURE__*/React.createElement(_CheckOutlined["default"], {
        className: "".concat(prefixCls, "-finish-icon")
      }),
      error: /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
        className: "".concat(prefixCls, "-error-icon")
      })
    };
    var stepIconRender = function stepIconRender(_ref) {
      var node = _ref.node,
        status = _ref.status;
      if (status === 'process' && mergedPercent !== undefined) {
        // currently it's hard-coded, since we can't easily read the actually width of icon
        var progressWidth = size === 'small' ? 32 : 40;
        // iconWithProgress
        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-progress-icon")
        }, /*#__PURE__*/React.createElement(_index2["default"], {
          type: "circle",
          percent: mergedPercent,
          size: progressWidth,
          strokeWidth: 4,
          format: function format() {
            return null;
          }
        }), node);
      }
      return node;
    };
    var itemRender = function itemRender(item, stepItem) {
      return item.description ? /*#__PURE__*/React.createElement(_index3["default"], {
        title: item.description
      }, stepItem) : stepItem;
    };
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcSteps["default"], Object.assign({
      icons: icons
    }, restProps, {
      style: mergedStyle,
      current: current,
      size: size,
      items: mergedItems,
      itemRender: isInline ? itemRender : undefined,
      stepIcon: stepIconRender,
      direction: realDirectionValue,
      prefixCls: prefixCls,
      iconPrefix: iconPrefix,
      className: stepsClassName
    })));
  };
  Steps.Step = _rcSteps["default"].Step;
  if (process.env.NODE_ENV !== 'production') {
    Steps.displayName = 'Steps';
  }
  var _default = _exports["default"] = Steps;
});