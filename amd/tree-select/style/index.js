define(["exports", "@ant-design/cssinjs", "antd4mx/checkbox/style", "antd4mx/theme/internal", "antd4mx/tree/style"], function (_exports, _cssinjs, _style, _internal, _style2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useTreeSelectStyle;
  _exports.prepareComponentToken = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // =============================== Base ===============================
  var genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      treePrefixCls = token.treePrefixCls,
      colorBgElevated = token.colorBgElevated;
    var treeCls = ".".concat(treePrefixCls);
    return [// ======================================================
    // ==                     Dropdown                     ==
    // ======================================================
    _defineProperty({}, "".concat(componentCls, "-dropdown"), [{
      padding: "".concat((0, _cssinjs.unit)(token.paddingXS), " ").concat((0, _cssinjs.unit)(token.calc(token.paddingXS).div(2).equal()))
    },
    // ====================== Tree ======================
    (0, _style2.genTreeStyle)(treePrefixCls, (0, _internal.mergeToken)(token, {
      colorBgContainer: colorBgElevated
    })), _defineProperty({}, treeCls, _defineProperty({
      borderRadius: 0
    }, "".concat(treeCls, "-list-holder-inner"), _defineProperty({
      alignItems: 'stretch'
    }, "".concat(treeCls, "-treenode"), _defineProperty({}, "".concat(treeCls, "-node-content-wrapper"), {
      flex: 'auto'
    })))),
    // ==================== Checkbox ====================
    (0, _style.getStyle)("".concat(treePrefixCls, "-checkbox"), token),
    // ====================== RTL =======================
    {
      '&-rtl': _defineProperty({
        direction: 'rtl'
      }, "".concat(treeCls, "-switcher").concat(treeCls, "-switcher_close"), _defineProperty({}, "".concat(treeCls, "-switcher-icon svg"), {
        transform: 'rotate(90deg)'
      }))
    }])];
  };
  var prepareComponentToken = _exports.prepareComponentToken = _style2.initComponentToken;
  // ============================== Export ==============================
  function useTreeSelectStyle(prefixCls, treePrefixCls, rootCls) {
    return (0, _internal.genStyleHooks)('TreeSelect', function (token) {
      var treeSelectToken = (0, _internal.mergeToken)(token, {
        treePrefixCls: treePrefixCls
      });
      return [genBaseStyle(treeSelectToken)];
    }, _style2.initComponentToken)(prefixCls, rootCls);
  }
});