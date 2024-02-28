define(["exports", "@ant-design/cssinjs", "antd4mx/cascader/style/index", "antd4mx/theme/internal", "antd4mx/cascader/style/columns"], function (_exports, _cssinjs, _index, _internal, _columns) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Panel ===============================
  var genPanelStyle = function genPanelStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-panel"), [(0, _columns["default"])(token), _defineProperty(_defineProperty(_defineProperty({
      display: 'inline-flex',
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit),
      borderRadius: token.borderRadiusLG,
      overflowX: 'auto',
      maxWidth: '100%'
    }, "".concat(componentCls, "-menus"), {
      alignItems: 'stretch'
    }), "".concat(componentCls, "-menu"), {
      height: 'auto'
    }), '&-empty', {
      padding: token.paddingXXS
    })]);
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genComponentStyleHook)(['Cascader', 'Panel'], function (token) {
    return genPanelStyle(token);
  }, _index.prepareComponentToken);
});