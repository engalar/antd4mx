define(["exports", "@ant-design/cssinjs", "antd4mx/style"], function (_exports, _cssinjs, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genFilterStyle = function genFilterStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls,
      iconCls = token.iconCls,
      tableFilterDropdownWidth = token.tableFilterDropdownWidth,
      tableFilterDropdownSearchWidth = token.tableFilterDropdownSearchWidth,
      paddingXXS = token.paddingXXS,
      paddingXS = token.paddingXS,
      colorText = token.colorText,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      tableBorderColor = token.tableBorderColor,
      headerIconColor = token.headerIconColor,
      fontSizeSM = token.fontSizeSM,
      tablePaddingHorizontal = token.tablePaddingHorizontal,
      borderRadius = token.borderRadius,
      motionDurationSlow = token.motionDurationSlow,
      colorTextDescription = token.colorTextDescription,
      colorPrimary = token.colorPrimary,
      tableHeaderFilterActiveBg = token.tableHeaderFilterActiveBg,
      colorTextDisabled = token.colorTextDisabled,
      tableFilterDropdownBg = token.tableFilterDropdownBg,
      tableFilterDropdownHeight = token.tableFilterDropdownHeight,
      controlItemBgHover = token.controlItemBgHover,
      controlItemBgActive = token.controlItemBgActive,
      boxShadowSecondary = token.boxShadowSecondary,
      filterDropdownMenuBg = token.filterDropdownMenuBg,
      calc = token.calc;
    var dropdownPrefixCls = "".concat(antCls, "-dropdown");
    var tableFilterDropdownPrefixCls = "".concat(componentCls, "-filter-dropdown");
    var treePrefixCls = "".concat(antCls, "-tree");
    var tableBorder = "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(tableBorderColor);
    return [_defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-filter-column"), {
      display: 'flex',
      justifyContent: 'space-between'
    }), "".concat(componentCls, "-filter-trigger"), {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      marginBlock: calc(paddingXXS).mul(-1).equal(),
      marginInline: "".concat((0, _cssinjs.unit)(paddingXXS), " ").concat((0, _cssinjs.unit)(calc(tablePaddingHorizontal).div(2).mul(-1).equal())),
      padding: "0 ".concat((0, _cssinjs.unit)(paddingXXS)),
      color: headerIconColor,
      fontSize: fontSizeSM,
      borderRadius: borderRadius,
      cursor: 'pointer',
      transition: "all ".concat(motionDurationSlow),
      '&:hover': {
        color: colorTextDescription,
        background: tableHeaderFilterActiveBg
      },
      '&.active': {
        color: colorPrimary
      }
    })), _defineProperty({}, "".concat(antCls, "-dropdown"), _defineProperty({}, tableFilterDropdownPrefixCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      minWidth: tableFilterDropdownWidth,
      backgroundColor: tableFilterDropdownBg,
      borderRadius: borderRadius,
      boxShadow: boxShadowSecondary,
      overflow: 'hidden'
    }, "".concat(dropdownPrefixCls, "-menu"), {
      // https://github.com/ant-design/ant-design/issues/4916
      // https://github.com/ant-design/ant-design/issues/19542
      maxHeight: tableFilterDropdownHeight,
      overflowX: 'hidden',
      border: 0,
      boxShadow: 'none',
      borderRadius: 'unset',
      backgroundColor: filterDropdownMenuBg,
      '&:empty::after': {
        display: 'block',
        padding: "".concat((0, _cssinjs.unit)(paddingXS), " 0"),
        color: colorTextDisabled,
        fontSize: fontSizeSM,
        textAlign: 'center',
        content: '"Not Found"'
      }
    }), "".concat(tableFilterDropdownPrefixCls, "-tree"), _defineProperty(_defineProperty(_defineProperty({
      paddingBlock: "".concat((0, _cssinjs.unit)(paddingXS), " 0"),
      paddingInline: paddingXS
    }, treePrefixCls, {
      padding: 0
    }), "".concat(treePrefixCls, "-treenode ").concat(treePrefixCls, "-node-content-wrapper:hover"), {
      backgroundColor: controlItemBgHover
    }), "".concat(treePrefixCls, "-treenode-checkbox-checked ").concat(treePrefixCls, "-node-content-wrapper"), {
      '&, &:hover': {
        backgroundColor: controlItemBgActive
      }
    })), "".concat(tableFilterDropdownPrefixCls, "-search"), {
      padding: paddingXS,
      borderBottom: tableBorder,
      '&-input': _defineProperty({
        input: {
          minWidth: tableFilterDropdownSearchWidth
        }
      }, iconCls, {
        color: colorTextDisabled
      })
    }), "".concat(tableFilterDropdownPrefixCls, "-checkall"), {
      width: '100%',
      marginBottom: paddingXXS,
      marginInlineStart: paddingXXS
    }), "".concat(tableFilterDropdownPrefixCls, "-btns"), {
      display: 'flex',
      justifyContent: 'space-between',
      padding: "".concat((0, _cssinjs.unit)(calc(paddingXS).sub(lineWidth).equal()), " ").concat((0, _cssinjs.unit)(paddingXS)),
      overflow: 'hidden',
      borderTop: tableBorder
    })))), // Dropdown Menu & SubMenu
    _defineProperty({}, "".concat(antCls, "-dropdown ").concat(tableFilterDropdownPrefixCls, ", ").concat(tableFilterDropdownPrefixCls, "-submenu"), _defineProperty(_defineProperty({}, "".concat(antCls, "-checkbox-wrapper + span"), {
      paddingInlineStart: paddingXS,
      color: colorText
    }), "> ul", {
      maxHeight: 'calc(100vh - 130px)',
      overflowX: 'hidden',
      overflowY: 'auto'
    }))];
  };
  var _default = _exports["default"] = genFilterStyle;
});