define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genRoundedArrow = void 0;
  _exports.getArrowToken = getArrowToken;
  function getArrowToken(token) {
    var sizePopupArrow = token.sizePopupArrow,
      borderRadiusXS = token.borderRadiusXS,
      borderRadiusOuter = token.borderRadiusOuter;
    var unitWidth = sizePopupArrow / 2;
    var ax = 0;
    var ay = unitWidth;
    var bx = borderRadiusOuter * 1 / Math.sqrt(2);
    var by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
    var cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
    var cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
    var dx = 2 * unitWidth - cx;
    var dy = cy;
    var ex = 2 * unitWidth - bx;
    var ey = by;
    var fx = 2 * unitWidth - ax;
    var fy = ay;
    var shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
    var polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
    var arrowPolygon = "polygon(".concat(polygonOffset, "px 100%, 50% ").concat(polygonOffset, "px, ").concat(2 * unitWidth - polygonOffset, "px 100%, ").concat(polygonOffset, "px 100%)");
    var arrowPath = "path('M ".concat(ax, " ").concat(ay, " A ").concat(borderRadiusOuter, " ").concat(borderRadiusOuter, " 0 0 0 ").concat(bx, " ").concat(by, " L ").concat(cx, " ").concat(cy, " A ").concat(borderRadiusXS, " ").concat(borderRadiusXS, " 0 0 1 ").concat(dx, " ").concat(dy, " L ").concat(ex, " ").concat(ey, " A ").concat(borderRadiusOuter, " ").concat(borderRadiusOuter, " 0 0 0 ").concat(fx, " ").concat(fy, " Z')");
    return {
      arrowShadowWidth: shadowWidth,
      arrowPath: arrowPath,
      arrowPolygon: arrowPolygon
    };
  }
  var genRoundedArrow = _exports.genRoundedArrow = function genRoundedArrow(token, bgColor, boxShadow) {
    var sizePopupArrow = token.sizePopupArrow,
      arrowPolygon = token.arrowPolygon,
      arrowPath = token.arrowPath,
      arrowShadowWidth = token.arrowShadowWidth,
      borderRadiusXS = token.borderRadiusXS,
      calc = token.calc;
    return {
      pointerEvents: 'none',
      width: sizePopupArrow,
      height: sizePopupArrow,
      overflow: 'hidden',
      '&::before': {
        position: 'absolute',
        bottom: 0,
        insetInlineStart: 0,
        width: sizePopupArrow,
        height: calc(sizePopupArrow).div(2).equal(),
        background: bgColor,
        clipPath: {
          _multi_value_: true,
          value: [arrowPolygon, arrowPath]
        },
        content: '""'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: arrowShadowWidth,
        height: arrowShadowWidth,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: {
          _skip_check_: true,
          value: "0 0 ".concat((0, _cssinjs.unit)(borderRadiusXS), " 0")
        },
        transform: 'translateY(50%) rotate(-135deg)',
        boxShadow: boxShadow,
        zIndex: 0,
        background: 'transparent'
      }
    };
  };
});