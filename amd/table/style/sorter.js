define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genSorterStyle = function genSorterStyle(token) {
    var componentCls = token.componentCls,
      marginXXS = token.marginXXS,
      fontSizeIcon = token.fontSizeIcon,
      headerIconColor = token.headerIconColor,
      headerIconHoverColor = token.headerIconHoverColor;
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-thead th").concat(componentCls, "-column-has-sorters"), _defineProperty({
      outline: 'none',
      cursor: 'pointer',
      transition: "all ".concat(token.motionDurationSlow),
      '&:hover': {
        background: token.tableHeaderSortHoverBg,
        '&::before': {
          backgroundColor: 'transparent !important'
        }
      },
      '&:focus-visible': {
        color: token.colorPrimary
      }
    }, "\n          &".concat(componentCls, "-cell-fix-left:hover,\n          &").concat(componentCls, "-cell-fix-right:hover\n        "), {
      background: token.tableFixedHeaderSortActiveBg
    })), "".concat(componentCls, "-thead th").concat(componentCls, "-column-sort"), {
      background: token.tableHeaderSortBg,
      '&::before': {
        backgroundColor: 'transparent !important'
      }
    }), "td".concat(componentCls, "-column-sort"), {
      background: token.tableBodySortBg
    }), "".concat(componentCls, "-column-title"), {
      position: 'relative',
      zIndex: 1,
      flex: 1
    }), "".concat(componentCls, "-column-sorters"), {
      display: 'flex',
      flex: 'auto',
      alignItems: 'center',
      justifyContent: 'space-between',
      '&::after': {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        content: '""'
      }
    }), "".concat(componentCls, "-column-sorter"), _defineProperty({
      marginInlineStart: marginXXS,
      color: headerIconColor,
      fontSize: 0,
      transition: "color ".concat(token.motionDurationSlow),
      '&-inner': {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '&-up, &-down': {
        fontSize: fontSizeIcon,
        '&.active': {
          color: token.colorPrimary
        }
      }
    }, "".concat(componentCls, "-column-sorter-up + ").concat(componentCls, "-column-sorter-down"), {
      marginTop: '-0.3em'
    })), "".concat(componentCls, "-column-sorters:hover ").concat(componentCls, "-column-sorter"), {
      color: headerIconHoverColor
    }));
  };
  var _default = _exports["default"] = genSorterStyle;
});