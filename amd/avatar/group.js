function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "classnames", "rc-util/es/Children/toArray", "react", "antd4mx/config-provider/index", "antd4mx/popover/index", "antd4mx/_util/reactNode", "antd4mx/avatar/avatar", "antd4mx/avatar/AvatarContext", "antd4mx/avatar/style/index", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, _classnames, _toArray, React, _index, _index2, _reactNode, _avatar, _AvatarContext, _index3, _useCSSVarCls) {
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
  var AvatarContextProvider = function AvatarContextProvider(props) {
    var _React$useContext = React.useContext(_AvatarContext["default"]),
      size = _React$useContext.size,
      shape = _React$useContext.shape;
    var avatarContextValue = React.useMemo(function () {
      return {
        size: props.size || size,
        shape: props.shape || shape
      };
    }, [props.size, props.shape, size, shape]);
    return /*#__PURE__*/React.createElement(_AvatarContext["default"].Provider, {
      value: avatarContextValue
    }, props.children);
  };
  var Group = function Group(props) {
    var _React$useContext2 = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext2.getPrefixCls,
      direction = _React$useContext2.direction;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      maxCount = props.maxCount,
      maxStyle = props.maxStyle,
      size = props.size,
      shape = props.shape,
      _props$maxPopoverPlac = props.maxPopoverPlacement,
      maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? 'top' : _props$maxPopoverPlac,
      _props$maxPopoverTrig = props.maxPopoverTrigger,
      maxPopoverTrigger = _props$maxPopoverTrig === void 0 ? 'hover' : _props$maxPopoverTrig,
      children = props.children;
    var prefixCls = getPrefixCls('avatar', customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index3["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var cls = (0, _classnames["default"])(groupPrefixCls, _defineProperty({}, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), cssVarCls, rootCls, className, rootClassName, hashId);
    var childrenWithProps = (0, _toArray["default"])(children).map(function (child, index) {
      return (0, _reactNode.cloneElement)(child, {
        key: "avatar-key-".concat(index)
      });
    });
    var numOfChildren = childrenWithProps.length;
    if (maxCount && maxCount < numOfChildren) {
      var childrenShow = childrenWithProps.slice(0, maxCount);
      var childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
      childrenShow.push( /*#__PURE__*/React.createElement(_index2["default"], {
        key: "avatar-popover-key",
        content: childrenHidden,
        trigger: maxPopoverTrigger,
        placement: maxPopoverPlacement,
        overlayClassName: "".concat(groupPrefixCls, "-popover"),
        destroyTooltipOnHide: true
      }, /*#__PURE__*/React.createElement(_avatar["default"], {
        style: maxStyle
      }, "+".concat(numOfChildren - maxCount))));
      return wrapCSSVar( /*#__PURE__*/React.createElement(AvatarContextProvider, {
        shape: shape,
        size: size
      }, /*#__PURE__*/React.createElement("div", {
        className: cls,
        style: style
      }, childrenShow)));
    }
    return wrapCSSVar( /*#__PURE__*/React.createElement(AvatarContextProvider, {
      shape: shape,
      size: size
    }, /*#__PURE__*/React.createElement("div", {
      className: cls,
      style: style
    }, childrenWithProps)));
  };
  var _default = _exports["default"] = Group;
});