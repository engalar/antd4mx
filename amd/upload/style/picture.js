define(["exports", "@ant-design/colors", "antd4mx/style", "@ant-design/cssinjs"], function (_exports, _colors, _style, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genPictureStyle = _exports.genPictureCardStyle = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genPictureStyle = _exports.genPictureStyle = function genPictureStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      uploadThumbnailSize = token.uploadThumbnailSize,
      uploadProgressOffset = token.uploadProgressOffset,
      calc = token.calc;
    var listCls = "".concat(componentCls, "-list");
    var itemCls = "".concat(listCls, "-item");
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty({}, "\n        ".concat(listCls).concat(listCls, "-picture,\n        ").concat(listCls).concat(listCls, "-picture-card,\n        ").concat(listCls).concat(listCls, "-picture-circle\n      "), _defineProperty(_defineProperty(_defineProperty({}, itemCls, _defineProperty(_defineProperty({
      position: 'relative',
      height: calc(uploadThumbnailSize).add(calc(token.lineWidth).mul(2)).add(calc(token.paddingXS).mul(2)).equal(),
      padding: token.paddingXS,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
      borderRadius: token.borderRadiusLG,
      '&:hover': {
        background: 'transparent'
      }
    }, "".concat(itemCls, "-thumbnail"), Object.assign(Object.assign({}, _style.textEllipsis), _defineProperty(_defineProperty({
      width: uploadThumbnailSize,
      height: uploadThumbnailSize,
      lineHeight: (0, _cssinjs.unit)(calc(uploadThumbnailSize).add(token.paddingSM).equal()),
      textAlign: 'center',
      flex: 'none'
    }, iconCls, {
      fontSize: token.fontSizeHeading2,
      color: token.colorPrimary
    }), "img", {
      display: 'block',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }))), "".concat(itemCls, "-progress"), {
      bottom: uploadProgressOffset,
      width: "calc(100% - ".concat((0, _cssinjs.unit)(calc(token.paddingSM).mul(2).equal()), ")"),
      marginTop: 0,
      paddingInlineStart: calc(uploadThumbnailSize).add(token.paddingXS).equal()
    })), "".concat(itemCls, "-error"), _defineProperty({
      borderColor: token.colorError
    }, "".concat(itemCls, "-thumbnail ").concat(iconCls), _defineProperty(_defineProperty({}, "svg path[fill='".concat(_colors.blue[0], "']"), {
      fill: token.colorErrorBg
    }), "svg path[fill='".concat(_colors.blue.primary, "']"), {
      fill: token.colorError
    }))), "".concat(itemCls, "-uploading"), _defineProperty({
      borderStyle: 'dashed'
    }, "".concat(itemCls, "-name"), {
      marginBottom: uploadProgressOffset
    }))), "".concat(listCls).concat(listCls, "-picture-circle ").concat(itemCls), _defineProperty({}, "&, &::before, ".concat(itemCls, "-thumbnail"), {
      borderRadius: '50%'
    })));
  };
  var genPictureCardStyle = _exports.genPictureCardStyle = function genPictureCardStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      fontSizeLG = token.fontSizeLG,
      colorTextLightSolid = token.colorTextLightSolid,
      calc = token.calc;
    var listCls = "".concat(componentCls, "-list");
    var itemCls = "".concat(listCls, "-item");
    var uploadPictureCardSize = token.uploadPicCardSize;
    return _defineProperty(_defineProperty({}, "\n      ".concat(componentCls, "-wrapper").concat(componentCls, "-picture-card-wrapper,\n      ").concat(componentCls, "-wrapper").concat(componentCls, "-picture-circle-wrapper\n    "), Object.assign(Object.assign({}, (0, _style.clearFix)()), _defineProperty(_defineProperty({
      display: 'inline-block',
      width: '100%'
    }, "".concat(componentCls).concat(componentCls, "-select"), _defineProperty(_defineProperty({
      width: uploadPictureCardSize,
      height: uploadPictureCardSize,
      marginInlineEnd: token.marginXS,
      marginBottom: token.marginXS,
      textAlign: 'center',
      verticalAlign: 'top',
      backgroundColor: token.colorFillAlter,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " dashed ").concat(token.colorBorder),
      borderRadius: token.borderRadiusLG,
      cursor: 'pointer',
      transition: "border-color ".concat(token.motionDurationSlow)
    }, "> ".concat(componentCls), {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      textAlign: 'center'
    }), "&:not(".concat(componentCls, "-disabled):hover"), {
      borderColor: token.colorPrimary
    })), "".concat(listCls).concat(listCls, "-picture-card, ").concat(listCls).concat(listCls, "-picture-circle"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(listCls, "-item-container"), {
      display: 'inline-block',
      width: uploadPictureCardSize,
      height: uploadPictureCardSize,
      marginBlock: "0 ".concat((0, _cssinjs.unit)(token.marginXS)),
      marginInline: "0 ".concat((0, _cssinjs.unit)(token.marginXS)),
      verticalAlign: 'top'
    }), '&::after', {
      display: 'none'
    }), itemCls, {
      height: '100%',
      margin: 0,
      '&::before': {
        position: 'absolute',
        zIndex: 1,
        width: "calc(100% - ".concat((0, _cssinjs.unit)(calc(token.paddingXS).mul(2).equal()), ")"),
        height: "calc(100% - ".concat((0, _cssinjs.unit)(calc(token.paddingXS).mul(2).equal()), ")"),
        backgroundColor: token.colorBgMask,
        opacity: 0,
        transition: "all ".concat(token.motionDurationSlow),
        content: '" "'
      }
    }), "".concat(itemCls, ":hover"), _defineProperty({}, "&::before, ".concat(itemCls, "-actions"), {
      opacity: 1
    })), "".concat(itemCls, "-actions"), _defineProperty({
      position: 'absolute',
      insetInlineStart: 0,
      zIndex: 10,
      width: '100%',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      opacity: 0,
      transition: "all ".concat(token.motionDurationSlow)
    }, "\n            ".concat(iconCls, "-eye,\n            ").concat(iconCls, "-download,\n            ").concat(iconCls, "-delete\n          "), {
      zIndex: 10,
      width: fontSizeLG,
      margin: "0 ".concat((0, _cssinjs.unit)(token.marginXXS)),
      fontSize: fontSizeLG,
      cursor: 'pointer',
      transition: "all ".concat(token.motionDurationSlow),
      color: colorTextLightSolid,
      '&:hover': {
        color: colorTextLightSolid
      },
      svg: {
        verticalAlign: 'baseline'
      }
    })), "".concat(itemCls, "-thumbnail, ").concat(itemCls, "-thumbnail img"), {
      position: 'static',
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }), "".concat(itemCls, "-name"), {
      display: 'none',
      textAlign: 'center'
    }), "".concat(itemCls, "-file + ").concat(itemCls, "-name"), {
      position: 'absolute',
      bottom: token.margin,
      display: 'block',
      width: "calc(100% - ".concat((0, _cssinjs.unit)(calc(token.paddingXS).mul(2).equal()), ")")
    }), "".concat(itemCls, "-uploading"), _defineProperty(_defineProperty({}, "&".concat(itemCls), {
      backgroundColor: token.colorFillAlter
    }), "&::before, ".concat(iconCls, "-eye, ").concat(iconCls, "-download, ").concat(iconCls, "-delete"), {
      display: 'none'
    })), "".concat(itemCls, "-progress"), {
      bottom: token.marginXL,
      width: "calc(100% - ".concat((0, _cssinjs.unit)(calc(token.paddingXS).mul(2).equal()), ")"),
      paddingInlineStart: 0
    })))), "".concat(componentCls, "-wrapper").concat(componentCls, "-picture-circle-wrapper"), _defineProperty({}, "".concat(componentCls).concat(componentCls, "-select"), {
      borderRadius: '50%'
    }));
  };
});