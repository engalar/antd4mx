define(["exports", "@ant-design/icons/es/icons/StarFilled", "classnames", "rc-rate", "react", "antd4mx/config-provider", "antd4mx/tooltip", "antd4mx/rate/style"], function (_exports, _StarFilled, _classnames, _rcRate, React, _configProvider, _tooltip, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
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
  var Rate = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var prefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      tooltips = props.tooltips,
      _props$character = props.character,
      character = _props$character === void 0 ? /*#__PURE__*/React.createElement(_StarFilled["default"], null) : _props$character,
      rest = __rest(props, ["prefixCls", "className", "rootClassName", "style", "tooltips", "character"]);
    var characterRender = function characterRender(node, _ref) {
      var index = _ref.index;
      if (!tooltips) {
        return node;
      }
      return /*#__PURE__*/React.createElement(_tooltip["default"], {
        title: tooltips[index]
      }, node);
    };
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      rate = _React$useContext.rate;
    var ratePrefixCls = getPrefixCls('rate', prefixCls);
    // Style
    var _useStyle = (0, _style["default"])(ratePrefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mergedStyle = Object.assign(Object.assign({}, rate === null || rate === void 0 ? void 0 : rate.style), style);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcRate["default"], Object.assign({
      ref: ref,
      character: character,
      characterRender: characterRender
    }, rest, {
      className: (0, _classnames["default"])(className, rootClassName, hashId, cssVarCls, rate === null || rate === void 0 ? void 0 : rate.className),
      style: mergedStyle,
      prefixCls: ratePrefixCls,
      direction: direction
    })));
  });
  if (process.env.NODE_ENV !== 'production') {
    Rate.displayName = 'Rate';
  }
  var _default = _exports["default"] = Rate;
});