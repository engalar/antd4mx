define(["exports", "@ant-design/cssinjs", "antd4mx/checkbox/style/index", "antd4mx/style/index"], function (_exports, _cssinjs, _index, _index2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var getColumnsStyle = function getColumnsStyle(token) {
    var prefixCls = token.prefixCls,
      componentCls = token.componentCls;
    var cascaderMenuItemCls = "".concat(componentCls, "-menu-item");
    var iconCls = "\n  &".concat(cascaderMenuItemCls, "-expand ").concat(cascaderMenuItemCls, "-expand-icon,\n  ").concat(cascaderMenuItemCls, "-loading-icon\n");
    return [
    // ==================== Checkbox ====================
    (0, _index.getStyle)("".concat(prefixCls, "-checkbox"), token), _defineProperty({}, componentCls, {
      // ================== Checkbox ==================
      '&-checkbox': {
        top: 0,
        marginInlineEnd: token.paddingXS
      },
      // ==================== Menu ====================
      // >>> Menus
      '&-menus': _defineProperty({
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-start'
      }, "&".concat(componentCls, "-menu-empty"), _defineProperty({}, "".concat(componentCls, "-menu"), _defineProperty({
        width: '100%',
        height: 'auto'
      }, cascaderMenuItemCls, {
        color: token.colorTextDisabled
      }))),
      // >>> Menu
      '&-menu': {
        flexGrow: 1,
        flexShrink: 0,
        minWidth: token.controlItemWidth,
        height: token.dropdownHeight,
        margin: 0,
        padding: token.menuPadding,
        overflow: 'auto',
        verticalAlign: 'top',
        listStyle: 'none',
        '-ms-overflow-style': '-ms-autohiding-scrollbar',
        // https://github.com/ant-design/ant-design/issues/11857
        '&:not(:last-child)': {
          borderInlineEnd: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
        },
        '&-item': Object.assign(Object.assign({}, _index2.textEllipsis), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          padding: token.optionPadding,
          lineHeight: token.lineHeight,
          cursor: 'pointer',
          transition: "all ".concat(token.motionDurationMid),
          borderRadius: token.borderRadiusSM,
          '&:hover': {
            background: token.controlItemBgHover
          },
          '&-disabled': _defineProperty({
            color: token.colorTextDisabled,
            cursor: 'not-allowed',
            '&:hover': {
              background: 'transparent'
            }
          }, iconCls, {
            color: token.colorTextDisabled
          })
        }, "&-active:not(".concat(cascaderMenuItemCls, "-disabled)"), _defineProperty({}, "&, &:hover", {
          fontWeight: token.optionSelectedFontWeight,
          backgroundColor: token.optionSelectedBg
        })), '&-content', {
          flex: 'auto'
        }), iconCls, {
          marginInlineStart: token.paddingXXS,
          color: token.colorTextDescription,
          fontSize: token.fontSizeIcon
        }), '&-keyword', {
          color: token.colorHighlight
        }))
      }
    })];
  };
  var _default = _exports["default"] = getColumnsStyle;
});