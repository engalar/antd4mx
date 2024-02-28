define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genCarouselStyle = function genCarouselStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls,
      carouselArrowSize = token.carouselArrowSize,
      carouselDotOffset = token.carouselDotOffset,
      marginXXS = token.marginXXS;
    var arrowOffset = token.calc(carouselArrowSize).mul(-1.25).equal();
    var carouselDotMargin = marginXXS;
    return _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), {
      '.slick-slider': {
        position: 'relative',
        display: 'block',
        boxSizing: 'border-box',
        touchAction: 'pan-y',
        WebkitTouchCallout: 'none',
        WebkitTapHighlightColor: 'transparent',
        '.slick-track, .slick-list': {
          transform: 'translate3d(0, 0, 0)',
          touchAction: 'pan-y'
        }
      },
      '.slick-list': {
        position: 'relative',
        display: 'block',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        '&:focus': {
          outline: 'none'
        },
        '&.dragging': {
          cursor: 'pointer'
        },
        '.slick-slide': _defineProperty(_defineProperty(_defineProperty({
          pointerEvents: 'none'
        }, "input".concat(antCls, "-radio-input, input").concat(antCls, "-checkbox-input"), {
          visibility: 'hidden'
        }), '&.slick-active', _defineProperty({
          pointerEvents: 'auto'
        }, "input".concat(antCls, "-radio-input, input").concat(antCls, "-checkbox-input"), {
          visibility: 'visible'
        })), '> div > div', {
          verticalAlign: 'bottom'
        })
      },
      '.slick-track': {
        position: 'relative',
        top: 0,
        insetInlineStart: 0,
        display: 'block',
        '&::before, &::after': {
          display: 'table',
          content: '""'
        },
        '&::after': {
          clear: 'both'
        }
      },
      '.slick-slide': {
        display: 'none',
        "float": 'left',
        height: '100%',
        minHeight: 1,
        img: {
          display: 'block'
        },
        '&.dragging img': {
          pointerEvents: 'none'
        }
      },
      '.slick-initialized .slick-slide': {
        display: 'block'
      },
      '.slick-vertical .slick-slide': {
        display: 'block',
        height: 'auto'
      },
      '.slick-arrow.slick-hidden': {
        display: 'none'
      },
      // Arrows
      '.slick-prev, .slick-next': {
        position: 'absolute',
        top: '50%',
        display: 'block',
        width: carouselArrowSize,
        height: carouselArrowSize,
        marginTop: token.calc(carouselArrowSize).mul(-1).div(2).equal(),
        padding: 0,
        color: 'transparent',
        fontSize: 0,
        lineHeight: 0,
        background: 'transparent',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        '&:hover, &:focus': {
          color: 'transparent',
          background: 'transparent',
          outline: 'none',
          '&::before': {
            opacity: 1
          }
        },
        '&.slick-disabled::before': {
          opacity: 0.25
        }
      },
      '.slick-prev': {
        insetInlineStart: arrowOffset,
        '&::before': {
          content: '"←"'
        }
      },
      '.slick-next': {
        insetInlineEnd: arrowOffset,
        '&::before': {
          content: '"→"'
        }
      },
      // Dots
      '.slick-dots': {
        position: 'absolute',
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 15,
        display: 'flex !important',
        justifyContent: 'center',
        paddingInlineStart: 0,
        margin: 0,
        listStyle: 'none',
        '&-bottom': {
          bottom: carouselDotOffset
        },
        '&-top': {
          top: carouselDotOffset,
          bottom: 'auto'
        },
        li: {
          position: 'relative',
          display: 'inline-block',
          flex: '0 1 auto',
          boxSizing: 'content-box',
          width: token.dotWidth,
          height: token.dotHeight,
          marginInline: carouselDotMargin,
          padding: 0,
          textAlign: 'center',
          textIndent: -999,
          verticalAlign: 'top',
          transition: "all ".concat(token.motionDurationSlow),
          button: {
            position: 'relative',
            display: 'block',
            width: '100%',
            height: token.dotHeight,
            padding: 0,
            color: 'transparent',
            fontSize: 0,
            background: token.colorBgContainer,
            border: 0,
            borderRadius: token.dotHeight,
            outline: 'none',
            cursor: 'pointer',
            opacity: 0.3,
            transition: "all ".concat(token.motionDurationSlow),
            '&: hover, &:focus': {
              opacity: 0.75
            },
            '&::after': {
              position: 'absolute',
              inset: token.calc(carouselDotMargin).mul(-1).equal(),
              content: '""'
            }
          },
          '&.slick-active': {
            width: token.dotActiveWidth,
            '& button': {
              background: token.colorBgContainer,
              opacity: 1
            },
            '&: hover, &:focus': {
              opacity: 1
            }
          }
        }
      }
    }));
  };
  var genCarouselVerticalStyle = function genCarouselVerticalStyle(token) {
    var componentCls = token.componentCls,
      carouselDotOffset = token.carouselDotOffset,
      marginXXS = token.marginXXS;
    var reverseSizeOfDot = {
      width: token.dotHeight,
      height: token.dotWidth
    };
    return _defineProperty({}, "".concat(componentCls, "-vertical"), {
      '.slick-dots': {
        top: '50%',
        bottom: 'auto',
        flexDirection: 'column',
        width: token.dotHeight,
        height: 'auto',
        margin: 0,
        transform: 'translateY(-50%)',
        '&-left': {
          insetInlineEnd: 'auto',
          insetInlineStart: carouselDotOffset
        },
        '&-right': {
          insetInlineEnd: carouselDotOffset,
          insetInlineStart: 'auto'
        },
        li: Object.assign(Object.assign({}, reverseSizeOfDot), {
          margin: "".concat((0, _cssinjs.unit)(marginXXS), " 0"),
          verticalAlign: 'baseline',
          button: reverseSizeOfDot,
          '&.slick-active': Object.assign(Object.assign({}, reverseSizeOfDot), {
            button: reverseSizeOfDot
          })
        })
      }
    });
  };
  var genCarouselRtlStyle = function genCarouselRtlStyle(token) {
    var componentCls = token.componentCls;
    return [_defineProperty({}, "".concat(componentCls, "-rtl"), {
      direction: 'rtl',
      // Dots
      '.slick-dots': _defineProperty({}, "".concat(componentCls, "-rtl&"), {
        flexDirection: 'row-reverse'
      })
    }), _defineProperty({}, "".concat(componentCls, "-vertical"), {
      '.slick-dots': _defineProperty({}, "".concat(componentCls, "-rtl&"), {
        flexDirection: 'column'
      })
    })];
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken() {
    var dotActiveWidth = 24;
    return {
      dotWidth: 16,
      dotHeight: 3,
      dotWidthActive: dotActiveWidth,
      dotActiveWidth: dotActiveWidth
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Carousel', function (token) {
    var controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM;
    var carouselToken = (0, _internal.mergeToken)(token, {
      carouselArrowSize: token.calc(controlHeightLG).div(2).equal(),
      carouselDotOffset: token.calc(controlHeightSM).div(2).equal()
    });
    return [genCarouselStyle(carouselToken), genCarouselVerticalStyle(carouselToken), genCarouselRtlStyle(carouselToken)];
  }, prepareComponentToken, {
    deprecatedTokens: [['dotWidthActive', 'dotActiveWidth']]
  });
});