define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genCompactItemStyle = genCompactItemStyle;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // handle border collapse
  function compactItemBorder(token, parentCls, options) {
    var focusElCls = options.focusElCls,
      focus = options.focus,
      borderElCls = options.borderElCls;
    var childCombinator = borderElCls ? '> *' : '';
    var hoverEffects = ['hover', focus ? 'focus' : null, 'active'].filter(Boolean).map(function (n) {
      return "&:".concat(n, " ").concat(childCombinator);
    }).join(',');
    return _defineProperty(_defineProperty({}, "&-item:not(".concat(parentCls, "-last-item)"), {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
    }), '&-item', Object.assign(Object.assign(_defineProperty({}, hoverEffects, {
      zIndex: 2
    }), focusElCls ? _defineProperty({}, "&".concat(focusElCls), {
      zIndex: 2
    }) : {}), _defineProperty({}, "&[disabled] ".concat(childCombinator), {
      zIndex: 0
    })));
  }
  // handle border-radius
  function compactItemBorderRadius(prefixCls, parentCls, options) {
    var borderElCls = options.borderElCls;
    var childCombinator = borderElCls ? "> ".concat(borderElCls) : '';
    return _defineProperty(_defineProperty(_defineProperty({}, "&-item:not(".concat(parentCls, "-first-item):not(").concat(parentCls, "-last-item) ").concat(childCombinator), {
      borderRadius: 0
    }), "&-item:not(".concat(parentCls, "-last-item)").concat(parentCls, "-first-item"), _defineProperty({}, "& ".concat(childCombinator, ", &").concat(prefixCls, "-sm ").concat(childCombinator, ", &").concat(prefixCls, "-lg ").concat(childCombinator), {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    })), "&-item:not(".concat(parentCls, "-first-item)").concat(parentCls, "-last-item"), _defineProperty({}, "& ".concat(childCombinator, ", &").concat(prefixCls, "-sm ").concat(childCombinator, ", &").concat(prefixCls, "-lg ").concat(childCombinator), {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0
    }));
  }
  function genCompactItemStyle(token) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      focus: true
    };
    var componentCls = token.componentCls;
    var compactCls = "".concat(componentCls, "-compact");
    return _defineProperty({}, compactCls, Object.assign(Object.assign({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options)));
  }
});