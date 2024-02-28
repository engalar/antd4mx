function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/RightOutlined", "classnames", "rc-collapse", "rc-util/es/Children/toArray", "rc-util/es/omit", "antd4mx/_util/motion", "antd4mx/_util/reactNode", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/config-provider/hooks/useSize", "antd4mx/collapse/CollapsePanel", "antd4mx/collapse/style"], function (_exports, React, _RightOutlined, _classnames, _rcCollapse, _toArray, _omit, _motion, _reactNode, _warning, _configProvider, _useSize, _CollapsePanel, _style) {
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
  var Collapse = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      collapse = _React$useContext.collapse;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      ghost = props.ghost,
      customizeSize = props.size,
      _props$expandIconPosi = props.expandIconPosition,
      expandIconPosition = _props$expandIconPosi === void 0 ? 'start' : _props$expandIconPosi,
      children = props.children,
      expandIcon = props.expandIcon;
    var mergedSize = (0, _useSize["default"])(function (ctx) {
      var _a;
      return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : ctx) !== null && _a !== void 0 ? _a : 'middle';
    });
    var prefixCls = getPrefixCls('collapse', customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Collapse');
      // Warning if use legacy type `expandIconPosition`
      process.env.NODE_ENV !== "production" ? warning(expandIconPosition !== 'left' && expandIconPosition !== 'right', 'deprecated', '`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.') : void 0;
    }
    // Align with logic position
    var mergedExpandIconPosition = React.useMemo(function () {
      if (expandIconPosition === 'left') {
        return 'start';
      }
      return expandIconPosition === 'right' ? 'end' : expandIconPosition;
    }, [expandIconPosition]);
    var renderExpandIcon = function renderExpandIcon() {
      var panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var icon = expandIcon ? expandIcon(panelProps) : ( /*#__PURE__*/React.createElement(_RightOutlined["default"], {
        rotate: panelProps.isActive ? 90 : undefined
      }));
      return (0, _reactNode.cloneElement)(icon, function () {
        return {
          className: (0, _classnames["default"])(icon.props.className, "".concat(prefixCls, "-arrow"))
        };
      });
    };
    var collapseClassName = (0, _classnames["default"])("".concat(prefixCls, "-icon-position-").concat(mergedExpandIconPosition), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-borderless"), !bordered), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-ghost"), !!ghost), "".concat(prefixCls, "-").concat(mergedSize), mergedSize !== 'middle'), collapse === null || collapse === void 0 ? void 0 : collapse.className, className, rootClassName, hashId, cssVarCls);
    var openMotion = Object.assign(Object.assign({}, (0, _motion["default"])(rootPrefixCls)), {
      motionAppear: false,
      leavedClassName: "".concat(prefixCls, "-content-hidden")
    });
    var items = React.useMemo(function () {
      return children ? (0, _toArray["default"])(children).map(function (child, index) {
        var _a, _b;
        if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) {
          var key = (_b = child.key) !== null && _b !== void 0 ? _b : String(index);
          var _child$props = child.props,
            disabled = _child$props.disabled,
            collapsible = _child$props.collapsible;
          var childProps = Object.assign(Object.assign({}, (0, _omit["default"])(child.props, ['disabled'])), {
            key: key,
            collapsible: collapsible !== null && collapsible !== void 0 ? collapsible : disabled ? 'disabled' : undefined
          });
          return (0, _reactNode.cloneElement)(child, childProps);
        }
        return child;
      }) : null;
    }, [children]);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcCollapse["default"], Object.assign({
      ref: ref,
      openMotion: openMotion
    }, (0, _omit["default"])(props, ['rootClassName']), {
      expandIcon: renderExpandIcon,
      prefixCls: prefixCls,
      className: collapseClassName,
      style: Object.assign(Object.assign({}, collapse === null || collapse === void 0 ? void 0 : collapse.style), style)
    }), items));
  });
  if (process.env.NODE_ENV !== 'production') {
    Collapse.displayName = 'Collapse';
  }
  var _default = _exports["default"] = Object.assign(Collapse, {
    Panel: _CollapsePanel["default"]
  });
});