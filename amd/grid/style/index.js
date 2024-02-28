define(["exports", "@ant-design/cssinjs", "antd4mx/theme/internal"], function (_exports, _cssinjs, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useRowStyle = _exports.useColStyle = _exports.prepareRowComponentToken = _exports.prepareColComponentToken = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Row-Shared ==============================
  var genGridRowStyle = function genGridRowStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, {
      display: 'flex',
      flexFlow: 'row wrap',
      minWidth: 0,
      '&::before, &::after': {
        display: 'flex'
      },
      '&-no-wrap': {
        flexWrap: 'nowrap'
      },
      // The origin of the X-axis
      '&-start': {
        justifyContent: 'flex-start'
      },
      // The center of the X-axis
      '&-center': {
        justifyContent: 'center'
      },
      // The opposite of the X-axis
      '&-end': {
        justifyContent: 'flex-end'
      },
      '&-space-between': {
        justifyContent: 'space-between'
      },
      '&-space-around': {
        justifyContent: 'space-around'
      },
      '&-space-evenly': {
        justifyContent: 'space-evenly'
      },
      // Align at the top
      '&-top': {
        alignItems: 'flex-start'
      },
      // Align at the center
      '&-middle': {
        alignItems: 'center'
      },
      '&-bottom': {
        alignItems: 'flex-end'
      }
    });
  };
  // ============================== Col-Shared ==============================
  var genGridColStyle = function genGridColStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, {
      position: 'relative',
      maxWidth: '100%',
      // Prevent columns from collapsing when empty
      minHeight: 1
    });
  };
  var genLoopGridColumnsStyle = function genLoopGridColumnsStyle(token, sizeCls) {
    var prefixCls = token.prefixCls,
      componentCls = token.componentCls,
      gridColumns = token.gridColumns;
    var gridColumnsStyle = {};
    for (var i = gridColumns; i >= 0; i--) {
      if (i === 0) {
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-").concat(i)] = {
          display: 'none'
        };
        gridColumnsStyle["".concat(componentCls, "-push-").concat(i)] = {
          insetInlineStart: 'auto'
        };
        gridColumnsStyle["".concat(componentCls, "-pull-").concat(i)] = {
          insetInlineEnd: 'auto'
        };
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-push-").concat(i)] = {
          insetInlineStart: 'auto'
        };
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-pull-").concat(i)] = {
          insetInlineEnd: 'auto'
        };
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-offset-").concat(i)] = {
          marginInlineStart: 0
        };
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-order-").concat(i)] = {
          order: 0
        };
      } else {
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-").concat(i)] = [// https://github.com/ant-design/ant-design/issues/44456
        // Form set `display: flex` on Col which will override `display: block`.
        // Let's get it from css variable to support override.
        _defineProperty(_defineProperty({}, '--ant-display', 'block'), "display", 'block'), {
          display: 'var(--ant-display)',
          flex: "0 0 ".concat(i / gridColumns * 100, "%"),
          maxWidth: "".concat(i / gridColumns * 100, "%")
        }];
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-push-").concat(i)] = {
          insetInlineStart: "".concat(i / gridColumns * 100, "%")
        };
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-pull-").concat(i)] = {
          insetInlineEnd: "".concat(i / gridColumns * 100, "%")
        };
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-offset-").concat(i)] = {
          marginInlineStart: "".concat(i / gridColumns * 100, "%")
        };
        gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-order-").concat(i)] = {
          order: i
        };
      }
    }
    // Flex CSS Var
    gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-flex")] = {
      flex: "var(--".concat(prefixCls).concat(sizeCls, "-flex)")
    };
    return gridColumnsStyle;
  };
  var genGridStyle = function genGridStyle(token, sizeCls) {
    return genLoopGridColumnsStyle(token, sizeCls);
  };
  var genGridMediaStyle = function genGridMediaStyle(token, screenSize, sizeCls) {
    return _defineProperty({}, "@media (min-width: ".concat((0, _cssinjs.unit)(screenSize), ")"), Object.assign({}, genGridStyle(token, sizeCls)));
  };
  var prepareRowComponentToken = _exports.prepareRowComponentToken = function prepareRowComponentToken() {
    return {};
  };
  var prepareColComponentToken = _exports.prepareColComponentToken = function prepareColComponentToken() {
    return {};
  };
  // ============================== Export ==============================
  var useRowStyle = _exports.useRowStyle = (0, _internal.genStyleHooks)('Grid', genGridRowStyle, prepareRowComponentToken);
  var useColStyle = _exports.useColStyle = (0, _internal.genStyleHooks)('Grid', function (token) {
    var gridToken = (0, _internal.mergeToken)(token, {
      gridColumns: 24 // Row is divided into 24 parts in Grid
    });
    var gridMediaSizesMap = {
      '-sm': gridToken.screenSMMin,
      '-md': gridToken.screenMDMin,
      '-lg': gridToken.screenLGMin,
      '-xl': gridToken.screenXLMin,
      '-xxl': gridToken.screenXXLMin
    };
    return [genGridColStyle(gridToken), genGridStyle(gridToken, ''), genGridStyle(gridToken, '-xs'), Object.keys(gridMediaSizesMap).map(function (key) {
      return genGridMediaStyle(gridToken, gridMediaSizesMap[key], key);
    }).reduce(function (pre, cur) {
      return Object.assign(Object.assign({}, pre), cur);
    }, {})];
  }, prepareColComponentToken);
});