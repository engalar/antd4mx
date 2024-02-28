define(["exports", "@ant-design/cssinjs", "antd4mx/checkbox/style/index", "antd4mx/style/index", "antd4mx/style/motion/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _index2, _index3, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports.initComponentToken = _exports.genTreeStyle = _exports.genDirectoryStyle = _exports.genBaseStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================ Keyframes =============================
  var treeNodeFX = new _cssinjs.Keyframes('ant-tree-node-fx-do-not-use', {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  });
  // ============================== Switch ==============================
  var getSwitchStyle = function getSwitchStyle(prefixCls, token) {
    return _defineProperty({}, ".".concat(prefixCls, "-switcher-icon"), {
      display: 'inline-block',
      fontSize: 10,
      verticalAlign: 'baseline',
      svg: {
        transition: "transform ".concat(token.motionDurationSlow)
      }
    });
  };
  // =============================== Drop ===============================
  var getDropIndicatorStyle = function getDropIndicatorStyle(prefixCls, token) {
    return _defineProperty({}, ".".concat(prefixCls, "-drop-indicator"), {
      position: 'absolute',
      // it should displayed over the following node
      zIndex: 1,
      height: 2,
      backgroundColor: token.colorPrimary,
      borderRadius: 1,
      pointerEvents: 'none',
      '&:after': {
        position: 'absolute',
        top: -3,
        insetInlineStart: -6,
        width: 8,
        height: 8,
        backgroundColor: 'transparent',
        border: "".concat((0, _cssinjs.unit)(token.lineWidthBold), " solid ").concat(token.colorPrimary),
        borderRadius: '50%',
        content: '""'
      }
    });
  };
  var genBaseStyle = _exports.genBaseStyle = function genBaseStyle(prefixCls, token) {
    var _Object$assign2;
    var treeCls = token.treeCls,
      treeNodeCls = token.treeNodeCls,
      treeNodePadding = token.treeNodePadding,
      titleHeight = token.titleHeight,
      nodeSelectedBg = token.nodeSelectedBg,
      nodeHoverBg = token.nodeHoverBg;
    var treeCheckBoxMarginHorizontal = token.paddingXS;
    return _defineProperty({}, treeCls, Object.assign(Object.assign({}, (0, _index2.resetComponent)(token)), (_Object$assign2 = {
      background: token.colorBgContainer,
      borderRadius: token.borderRadius,
      transition: "background-color ".concat(token.motionDurationSlow)
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign2, "&".concat(treeCls, "-rtl"), _defineProperty({}, "".concat(treeCls, "-switcher"), {
      '&_close': _defineProperty({}, "".concat(treeCls, "-switcher-icon"), {
        svg: {
          transform: 'rotate(90deg)'
        }
      })
    })), "&-focused:not(:hover):not(".concat(treeCls, "-active-focused)"), Object.assign({}, (0, _index2.genFocusOutline)(token))), "".concat(treeCls, "-list-holder-inner"), {
      alignItems: 'flex-start'
    }), "&".concat(treeCls, "-block-node"), _defineProperty({}, "".concat(treeCls, "-list-holder-inner"), _defineProperty(_defineProperty({
      alignItems: 'stretch'
    }, "".concat(treeCls, "-node-content-wrapper"), {
      flex: 'auto'
    }), "".concat(treeNodeCls, ".dragging"), {
      position: 'relative',
      '&:after': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        bottom: treeNodePadding,
        insetInlineStart: 0,
        border: "1px solid ".concat(token.colorPrimary),
        opacity: 0,
        animationName: treeNodeFX,
        animationDuration: token.motionDurationSlow,
        animationPlayState: 'running',
        animationFillMode: 'forwards',
        content: '""',
        pointerEvents: 'none'
      }
    }))), "".concat(treeNodeCls), _defineProperty(_defineProperty(_defineProperty({
      display: 'flex',
      alignItems: 'flex-start',
      padding: "0 0 ".concat((0, _cssinjs.unit)(treeNodePadding), " 0"),
      outline: 'none',
      '&-rtl': {
        direction: 'rtl'
      },
      // Disabled
      '&-disabled': _defineProperty({}, "".concat(treeCls, "-node-content-wrapper"), {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
        '&:hover': {
          background: 'transparent'
        }
      })
    }, "&-active ".concat(treeCls, "-node-content-wrapper"), {
      background: token.controlItemBgHover
    }), "&:not(".concat(treeNodeCls, "-disabled).filter-node ").concat(treeCls, "-title"), {
      color: 'inherit',
      fontWeight: 500
    }), '&-draggable', _defineProperty(_defineProperty({
      cursor: 'grab'
    }, "".concat(treeCls, "-draggable-icon"), _defineProperty({
      // https://github.com/ant-design/ant-design/issues/41915
      flexShrink: 0,
      width: titleHeight,
      lineHeight: "".concat((0, _cssinjs.unit)(titleHeight)),
      textAlign: 'center',
      visibility: 'visible',
      opacity: 0.2,
      transition: "opacity ".concat(token.motionDurationSlow)
    }, "".concat(treeNodeCls, ":hover &"), {
      opacity: 0.45
    })), "&".concat(treeNodeCls, "-disabled"), _defineProperty({}, "".concat(treeCls, "-draggable-icon"), {
      visibility: 'hidden'
    })))), "".concat(treeCls, "-indent"), {
      alignSelf: 'stretch',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      '&-unit': {
        display: 'inline-block',
        width: titleHeight
      }
    }), "".concat(treeCls, "-draggable-icon"), {
      visibility: 'hidden'
    }), "".concat(treeCls, "-switcher"), Object.assign(Object.assign({}, getSwitchStyle(prefixCls, token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      flex: 'none',
      alignSelf: 'stretch',
      width: titleHeight,
      margin: 0,
      lineHeight: "".concat((0, _cssinjs.unit)(titleHeight)),
      textAlign: 'center',
      cursor: 'pointer',
      userSelect: 'none',
      transition: "all ".concat(token.motionDurationSlow),
      borderRadius: token.borderRadius,
      '&-noop': {
        cursor: 'unset'
      }
    }, "&:not(".concat(treeCls, "-switcher-noop):hover"), {
      backgroundColor: token.colorBgTextHover
    }), '&_close', _defineProperty({}, "".concat(treeCls, "-switcher-icon"), {
      svg: {
        transform: 'rotate(-90deg)'
      }
    })), '&-loading-icon', {
      color: token.colorPrimary
    }), '&-leaf-line', {
      position: 'relative',
      zIndex: 1,
      display: 'inline-block',
      width: '100%',
      height: '100%',
      // https://github.com/ant-design/ant-design/issues/31884
      '&:before': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: token.calc(titleHeight).div(2).equal(),
        bottom: token.calc(treeNodePadding).mul(-1).equal(),
        marginInlineStart: -1,
        borderInlineEnd: "1px solid ".concat(token.colorBorder),
        content: '""'
      },
      '&:after': {
        position: 'absolute',
        width: token.calc(token.calc(titleHeight).div(2).equal()).mul(0.8).equal(),
        height: token.calc(titleHeight).div(2).equal(),
        borderBottom: "1px solid ".concat(token.colorBorder),
        content: '""'
      }
    }))), "".concat(treeCls, "-checkbox"), {
      top: 'initial',
      marginInlineEnd: treeCheckBoxMarginHorizontal,
      alignSelf: 'flex-start',
      marginTop: token.marginXXS
    }), "".concat(treeCls, "-node-content-wrapper, ").concat(treeCls, "-checkbox + span"), _defineProperty(_defineProperty({
      position: 'relative',
      zIndex: 'auto',
      minHeight: titleHeight,
      margin: 0,
      padding: "0 ".concat((0, _cssinjs.unit)(token.calc(token.paddingXS).div(2).equal())),
      color: 'inherit',
      lineHeight: "".concat((0, _cssinjs.unit)(titleHeight)),
      background: 'transparent',
      borderRadius: token.borderRadius,
      cursor: 'pointer',
      transition: "all ".concat(token.motionDurationMid, ", border 0s, line-height 0s, box-shadow 0s"),
      '&:hover': {
        backgroundColor: nodeHoverBg
      }
    }, "&".concat(treeCls, "-node-selected"), {
      backgroundColor: nodeSelectedBg
    }), "".concat(treeCls, "-iconEle"), {
      display: 'inline-block',
      width: titleHeight,
      height: titleHeight,
      lineHeight: "".concat((0, _cssinjs.unit)(titleHeight)),
      textAlign: 'center',
      verticalAlign: 'top',
      '&:empty': {
        display: 'none'
      }
    })), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign2, "".concat(treeCls, "-unselectable ").concat(treeCls, "-node-content-wrapper:hover"), {
      backgroundColor: 'transparent'
    }), "".concat(treeCls, "-node-content-wrapper"), Object.assign({
      lineHeight: "".concat((0, _cssinjs.unit)(titleHeight)),
      userSelect: 'none'
    }, getDropIndicatorStyle(prefixCls, token))), "".concat(treeNodeCls, ".drop-container"), {
      '> [draggable]': {
        boxShadow: "0 0 0 2px ".concat(token.colorPrimary)
      }
    }), '&-show-line', _defineProperty(_defineProperty({}, "".concat(treeCls, "-indent"), {
      '&-unit': {
        position: 'relative',
        height: '100%',
        '&:before': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: token.calc(titleHeight).div(2).equal(),
          bottom: token.calc(treeNodePadding).mul(-1).equal(),
          borderInlineEnd: "1px solid ".concat(token.colorBorder),
          content: '""'
        },
        '&-end': {
          '&:before': {
            display: 'none'
          }
        }
      }
    }), "".concat(treeCls, "-switcher"), {
      background: 'transparent',
      '&-line-icon': {
        // https://github.com/ant-design/ant-design/issues/32813
        verticalAlign: '-0.15em'
      }
    })), "".concat(treeNodeCls, "-leaf-last"), _defineProperty({}, "".concat(treeCls, "-switcher"), {
      '&-leaf-line': {
        '&:before': {
          top: 'auto !important',
          bottom: 'auto !important',
          height: "".concat((0, _cssinjs.unit)(token.calc(titleHeight).div(2).equal()), " !important")
        }
      }
    })))));
  };
  // ============================ Directory =============================
  var genDirectoryStyle = _exports.genDirectoryStyle = function genDirectoryStyle(token) {
    var treeCls = token.treeCls,
      treeNodeCls = token.treeNodeCls,
      treeNodePadding = token.treeNodePadding,
      directoryNodeSelectedBg = token.directoryNodeSelectedBg,
      directoryNodeSelectedColor = token.directoryNodeSelectedColor;
    return _defineProperty({}, "".concat(treeCls).concat(treeCls, "-directory"), _defineProperty({}, treeNodeCls, _defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      // Hover color
      '&:before': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        bottom: treeNodePadding,
        insetInlineStart: 0,
        transition: "background-color ".concat(token.motionDurationMid),
        content: '""',
        pointerEvents: 'none'
      },
      '&:hover': {
        '&:before': {
          background: token.controlItemBgHover
        }
      },
      // Elements
      '> *': {
        zIndex: 1
      }
    }, "".concat(treeCls, "-switcher"), {
      transition: "color ".concat(token.motionDurationMid)
    }), "".concat(treeCls, "-node-content-wrapper"), _defineProperty({
      borderRadius: 0,
      userSelect: 'none',
      '&:hover': {
        background: 'transparent'
      }
    }, "&".concat(treeCls, "-node-selected"), {
      color: directoryNodeSelectedColor,
      background: 'transparent'
    })), '&-selected', _defineProperty(_defineProperty(_defineProperty({}, "\n            &:hover::before,\n            &::before\n          ", {
      background: directoryNodeSelectedBg
    }), "".concat(treeCls, "-switcher"), {
      color: directoryNodeSelectedColor
    }), "".concat(treeCls, "-node-content-wrapper"), {
      color: directoryNodeSelectedColor,
      background: 'transparent'
    }))));
  };
  // ============================== Merged ==============================
  var genTreeStyle = _exports.genTreeStyle = function genTreeStyle(prefixCls, token) {
    var treeCls = ".".concat(prefixCls);
    var treeNodeCls = "".concat(treeCls, "-treenode");
    var treeNodePadding = token.calc(token.paddingXS).div(2).equal();
    var treeToken = (0, _internal.mergeToken)(token, {
      treeCls: treeCls,
      treeNodeCls: treeNodeCls,
      treeNodePadding: treeNodePadding
    });
    return [
    // Basic
    genBaseStyle(prefixCls, treeToken),
    // Directory
    genDirectoryStyle(treeToken)];
  };
  var initComponentToken = _exports.initComponentToken = function initComponentToken(token) {
    var controlHeightSM = token.controlHeightSM;
    return {
      titleHeight: controlHeightSM,
      nodeHoverBg: token.controlItemBgHover,
      nodeSelectedBg: token.controlItemBgActive
    };
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var colorTextLightSolid = token.colorTextLightSolid,
      colorPrimary = token.colorPrimary;
    return Object.assign(Object.assign({}, initComponentToken(token)), {
      directoryNodeSelectedColor: colorTextLightSolid,
      directoryNodeSelectedBg: colorPrimary
    });
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Tree', function (token, _ref) {
    var prefixCls = _ref.prefixCls;
    return [_defineProperty({}, token.componentCls, (0, _index.getStyle)("".concat(prefixCls, "-checkbox"), token)), genTreeStyle(prefixCls, token), (0, _index3.genCollapseMotion)(token)];
  }, prepareComponentToken);
});