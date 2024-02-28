function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/CloseOutlined", "classnames", "antd4mx/_util/colors", "antd4mx/_util/hooks/useClosable", "antd4mx/_util/warning", "antd4mx/_util/wave", "antd4mx/config-provider", "antd4mx/tag/CheckableTag", "antd4mx/tag/style", "antd4mx/tag/style/presetCmp", "antd4mx/tag/style/statusCmp"], function (_exports, React, _CloseOutlined, _classnames, _colors, _useClosable3, _warning, _wave, _configProvider, _CheckableTag, _style, _presetCmp, _statusCmp) {
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
  var InternalTag = function InternalTag(tagProps, ref) {
    var customizePrefixCls = tagProps.prefixCls,
      className = tagProps.className,
      rootClassName = tagProps.rootClassName,
      style = tagProps.style,
      children = tagProps.children,
      icon = tagProps.icon,
      color = tagProps.color,
      onClose = tagProps.onClose,
      closeIcon = tagProps.closeIcon,
      closable = tagProps.closable,
      _tagProps$bordered = tagProps.bordered,
      bordered = _tagProps$bordered === void 0 ? true : _tagProps$bordered,
      props = __rest(tagProps, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable", "bordered"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      tag = _React$useContext.tag;
    var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];
    // Warning for deprecated usage
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Tag');
      warning.deprecated(!('visible' in props), 'visible', 'visible && <Tag />');
    }
    React.useEffect(function () {
      if ('visible' in props) {
        setVisible(props.visible);
      }
    }, [props.visible]);
    var isPreset = (0, _colors.isPresetColor)(color);
    var isStatus = (0, _colors.isPresetStatusColor)(color);
    var isInternalColor = isPreset || isStatus;
    var tagStyle = Object.assign(Object.assign({
      backgroundColor: color && !isInternalColor ? color : undefined
    }, tag === null || tag === void 0 ? void 0 : tag.style), style);
    var prefixCls = getPrefixCls('tag', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    // Style
    var tagClassName = (0, _classnames["default"])(prefixCls, tag === null || tag === void 0 ? void 0 : tag.className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(color), isInternalColor), "".concat(prefixCls, "-has-color"), color && !isInternalColor), "".concat(prefixCls, "-hidden"), !visible), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-borderless"), !bordered), className, rootClassName, hashId, cssVarCls);
    var handleCloseClick = function handleCloseClick(e) {
      e.stopPropagation();
      onClose === null || onClose === void 0 ? void 0 : onClose(e);
      if (e.defaultPrevented) {
        return;
      }
      setVisible(false);
    };
    var _useClosable = (0, _useClosable3["default"])(closable, closeIcon !== null && closeIcon !== void 0 ? closeIcon : tag === null || tag === void 0 ? void 0 : tag.closeIcon, function (iconNode) {
        return iconNode === null ? ( /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
          className: "".concat(prefixCls, "-close-icon"),
          onClick: handleCloseClick
        })) : ( /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-close-icon"),
          onClick: handleCloseClick
        }, iconNode));
      }, null, false),
      _useClosable2 = _slicedToArray(_useClosable, 2),
      mergedCloseIcon = _useClosable2[1];
    var isNeedWave = typeof props.onClick === 'function' || children && children.type === 'a';
    var iconNode = icon || null;
    var kids = iconNode ? ( /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, children && /*#__PURE__*/React.createElement("span", null, children))) : children;
    var tagNode = /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
      ref: ref,
      className: tagClassName,
      style: tagStyle
    }), kids, mergedCloseIcon, isPreset && /*#__PURE__*/React.createElement(_presetCmp["default"], {
      key: "preset",
      prefixCls: prefixCls
    }), isStatus && /*#__PURE__*/React.createElement(_statusCmp["default"], {
      key: "status",
      prefixCls: prefixCls
    }));
    return wrapCSSVar(isNeedWave ? /*#__PURE__*/React.createElement(_wave["default"], {
      component: "Tag"
    }, tagNode) : tagNode);
  };
  var Tag = /*#__PURE__*/React.forwardRef(InternalTag);
  if (process.env.NODE_ENV !== 'production') {
    Tag.displayName = 'Tag';
  }
  Tag.CheckableTag = _CheckableTag["default"];
  var _default = _exports["default"] = Tag;
});