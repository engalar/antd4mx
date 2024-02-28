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
  var genFixedStyle = function genFixedStyle(token) {
    var componentCls = token.componentCls,
      lineWidth = token.lineWidth,
      colorSplit = token.colorSplit,
      motionDurationSlow = token.motionDurationSlow,
      zIndexTableFixed = token.zIndexTableFixed,
      tableBg = token.tableBg,
      zIndexTableSticky = token.zIndexTableSticky,
      calc = token.calc;
    var shadowColor = colorSplit;
    // Follow style is magic of shadow which should not follow token:
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "\n        ".concat(componentCls, "-cell-fix-left,\n        ").concat(componentCls, "-cell-fix-right\n      "), {
      position: 'sticky !important',
      zIndex: zIndexTableFixed,
      background: tableBg
    }), "\n        ".concat(componentCls, "-cell-fix-left-first::after,\n        ").concat(componentCls, "-cell-fix-left-last::after\n      "), {
      position: 'absolute',
      top: 0,
      right: {
        _skip_check_: true,
        value: 0
      },
      bottom: calc(lineWidth).mul(-1).equal(),
      width: 30,
      transform: 'translateX(100%)',
      transition: "box-shadow ".concat(motionDurationSlow),
      content: '""',
      pointerEvents: 'none'
    }), "".concat(componentCls, "-cell-fix-left-all::after"), {
      display: 'none'
    }), "\n        ".concat(componentCls, "-cell-fix-right-first::after,\n        ").concat(componentCls, "-cell-fix-right-last::after\n      "), {
      position: 'absolute',
      top: 0,
      bottom: calc(lineWidth).mul(-1).equal(),
      left: {
        _skip_check_: true,
        value: 0
      },
      width: 30,
      transform: 'translateX(-100%)',
      transition: "box-shadow ".concat(motionDurationSlow),
      content: '""',
      pointerEvents: 'none'
    }), "".concat(componentCls, "-container"), {
      position: 'relative',
      '&::before, &::after': {
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: calc(zIndexTableSticky).add(1).equal({
          unit: false
        }),
        width: 30,
        transition: "box-shadow ".concat(motionDurationSlow),
        content: '""',
        pointerEvents: 'none'
      },
      '&::before': {
        insetInlineStart: 0
      },
      '&::after': {
        insetInlineEnd: 0
      }
    }), "".concat(componentCls, "-ping-left"), _defineProperty(_defineProperty(_defineProperty({}, "&:not(".concat(componentCls, "-has-fix-left) ").concat(componentCls, "-container::before"), {
      boxShadow: "inset 10px 0 8px -8px ".concat(shadowColor)
    }), "\n          ".concat(componentCls, "-cell-fix-left-first::after,\n          ").concat(componentCls, "-cell-fix-left-last::after\n        "), {
      boxShadow: "inset 10px 0 8px -8px ".concat(shadowColor)
    }), "".concat(componentCls, "-cell-fix-left-last::before"), {
      backgroundColor: 'transparent !important'
    })), "".concat(componentCls, "-ping-right"), _defineProperty(_defineProperty({}, "&:not(".concat(componentCls, "-has-fix-right) ").concat(componentCls, "-container::after"), {
      boxShadow: "inset -10px 0 8px -8px ".concat(shadowColor)
    }), "\n          ".concat(componentCls, "-cell-fix-right-first::after,\n          ").concat(componentCls, "-cell-fix-right-last::after\n        "), {
      boxShadow: "inset -10px 0 8px -8px ".concat(shadowColor)
    })), "".concat(componentCls, "-fixed-column-gapped"), _defineProperty({}, "\n        ".concat(componentCls, "-cell-fix-left-first::after,\n        ").concat(componentCls, "-cell-fix-left-last::after,\n        ").concat(componentCls, "-cell-fix-right-first::after,\n        ").concat(componentCls, "-cell-fix-right-last::after\n      "), {
      boxShadow: 'none'
    })));
  };
  var _default = _exports["default"] = genFixedStyle;
});