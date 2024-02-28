define(["exports", "antd4mx/style/roundedArrow"], function (_exports, _roundedArrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MAX_VERTICAL_CONTENT_RADIUS = void 0;
  _exports["default"] = getArrowStyle;
  _exports.getArrowOffsetToken = getArrowOffsetToken;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var MAX_VERTICAL_CONTENT_RADIUS = _exports.MAX_VERTICAL_CONTENT_RADIUS = 8;
  function getArrowOffsetToken(options) {
    var contentRadius = options.contentRadius,
      limitVerticalRadius = options.limitVerticalRadius;
    var arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    var arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
      arrowOffsetHorizontal: arrowOffset,
      arrowOffsetVertical: arrowOffsetVertical
    };
  }
  function isInject(valid, code) {
    if (!valid) {
      return {};
    }
    return code;
  }
  function getArrowStyle(token, colorBg, options) {
    var componentCls = token.componentCls,
      boxShadowPopoverArrow = token.boxShadowPopoverArrow,
      arrowOffsetVertical = token.arrowOffsetVertical,
      arrowOffsetHorizontal = token.arrowOffsetHorizontal;
    var _ref = options || {},
      _ref$arrowDistance = _ref.arrowDistance,
      arrowDistance = _ref$arrowDistance === void 0 ? 0 : _ref$arrowDistance,
      _ref$arrowPlacement = _ref.arrowPlacement,
      arrowPlacement = _ref$arrowPlacement === void 0 ? {
        left: true,
        right: true,
        top: true,
        bottom: true
      } : _ref$arrowPlacement;
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign(_defineProperty({}, "".concat(componentCls, "-arrow"), [Object.assign(Object.assign({
      position: 'absolute',
      zIndex: 1,
      display: 'block'
    }, (0, _roundedArrow.genRoundedArrow)(token, colorBg, boxShadowPopoverArrow)), {
      '&:before': {
        background: colorBg
      }
    })]), isInject(!!arrowPlacement.top, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, ["&-placement-top > ".concat(componentCls, "-arrow"), "&-placement-topLeft > ".concat(componentCls, "-arrow"), "&-placement-topRight > ".concat(componentCls, "-arrow")].join(','), {
      bottom: arrowDistance,
      transform: 'translateY(100%) rotate(180deg)'
    }), "&-placement-top > ".concat(componentCls, "-arrow"), {
      left: {
        _skip_check_: true,
        value: '50%'
      },
      transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
    }), "&-placement-topLeft > ".concat(componentCls, "-arrow"), {
      left: {
        _skip_check_: true,
        value: arrowOffsetHorizontal
      }
    }), "&-placement-topRight > ".concat(componentCls, "-arrow"), {
      right: {
        _skip_check_: true,
        value: arrowOffsetHorizontal
      }
    }))), isInject(!!arrowPlacement.bottom, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, ["&-placement-bottom > ".concat(componentCls, "-arrow"), "&-placement-bottomLeft > ".concat(componentCls, "-arrow"), "&-placement-bottomRight > ".concat(componentCls, "-arrow")].join(','), {
      top: arrowDistance,
      transform: "translateY(-100%)"
    }), "&-placement-bottom > ".concat(componentCls, "-arrow"), {
      left: {
        _skip_check_: true,
        value: '50%'
      },
      transform: "translateX(-50%) translateY(-100%)"
    }), "&-placement-bottomLeft > ".concat(componentCls, "-arrow"), {
      left: {
        _skip_check_: true,
        value: arrowOffsetHorizontal
      }
    }), "&-placement-bottomRight > ".concat(componentCls, "-arrow"), {
      right: {
        _skip_check_: true,
        value: arrowOffsetHorizontal
      }
    }))), isInject(!!arrowPlacement.left, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, ["&-placement-left > ".concat(componentCls, "-arrow"), "&-placement-leftTop > ".concat(componentCls, "-arrow"), "&-placement-leftBottom > ".concat(componentCls, "-arrow")].join(','), {
      right: {
        _skip_check_: true,
        value: arrowDistance
      },
      transform: 'translateX(100%) rotate(90deg)'
    }), "&-placement-left > ".concat(componentCls, "-arrow"), {
      top: {
        _skip_check_: true,
        value: '50%'
      },
      transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
    }), "&-placement-leftTop > ".concat(componentCls, "-arrow"), {
      top: arrowOffsetVertical
    }), "&-placement-leftBottom > ".concat(componentCls, "-arrow"), {
      bottom: arrowOffsetVertical
    }))), isInject(!!arrowPlacement.right, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, ["&-placement-right > ".concat(componentCls, "-arrow"), "&-placement-rightTop > ".concat(componentCls, "-arrow"), "&-placement-rightBottom > ".concat(componentCls, "-arrow")].join(','), {
      left: {
        _skip_check_: true,
        value: arrowDistance
      },
      transform: 'translateX(-100%) rotate(-90deg)'
    }), "&-placement-right > ".concat(componentCls, "-arrow"), {
      top: {
        _skip_check_: true,
        value: '50%'
      },
      transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
    }), "&-placement-rightTop > ".concat(componentCls, "-arrow"), {
      top: arrowOffsetVertical
    }), "&-placement-rightBottom > ".concat(componentCls, "-arrow"), {
      bottom: arrowOffsetVertical
    }))));
  }
});