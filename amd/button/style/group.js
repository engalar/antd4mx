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
  var genButtonBorderStyle = function genButtonBorderStyle(buttonTypeCls, borderColor) {
    return _defineProperty({}, "> span, > ".concat(buttonTypeCls), {
      '&:not(:last-child)': _defineProperty({}, "&, & > ".concat(buttonTypeCls), {
        '&:not(:disabled)': {
          borderInlineEndColor: borderColor
        }
      }),
      '&:not(:first-child)': _defineProperty({}, "&, & > ".concat(buttonTypeCls), {
        '&:not(:disabled)': {
          borderInlineStartColor: borderColor
        }
      })
    });
  };
  var genGroupStyle = function genGroupStyle(token) {
    var componentCls = token.componentCls,
      fontSize = token.fontSize,
      lineWidth = token.lineWidth,
      groupBorderColor = token.groupBorderColor,
      colorErrorHover = token.colorErrorHover;
    return _defineProperty({}, "".concat(componentCls, "-group"), [_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      display: 'inline-flex'
    }, "> span, > ".concat(componentCls), {
      '&:not(:last-child)': _defineProperty({}, "&, & > ".concat(componentCls), {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }),
      '&:not(:first-child)': _defineProperty({
        marginInlineStart: token.calc(lineWidth).mul(-1).equal()
      }, "&, & > ".concat(componentCls), {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      })
    }), componentCls, _defineProperty(_defineProperty({
      position: 'relative',
      zIndex: 1
    }, "&:hover,\n          &:focus,\n          &:active", {
      zIndex: 2
    }), '&[disabled]', {
      zIndex: 0
    })), "".concat(componentCls, "-icon-only"), {
      fontSize: fontSize
    }),
    // Border Color
    genButtonBorderStyle("".concat(componentCls, "-primary"), groupBorderColor), genButtonBorderStyle("".concat(componentCls, "-danger"), colorErrorHover)]);
  };
  var _default = _exports["default"] = genGroupStyle;
});