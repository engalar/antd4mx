define(["exports", "classnames"], function (_exports, _classnames) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.justifyContentValues = _exports.flexWrapValues = _exports["default"] = _exports.alignItemsValues = void 0;
  var flexWrapValues = _exports.flexWrapValues = ['wrap', 'nowrap', 'wrap-reverse'];
  var justifyContentValues = _exports.justifyContentValues = ['flex-start', 'flex-end', 'start', 'end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch', 'normal', 'left', 'right'];
  var alignItemsValues = _exports.alignItemsValues = ['center', 'start', 'end', 'flex-start', 'flex-end', 'self-start', 'self-end', 'baseline', 'normal', 'stretch'];
  var genClsWrap = function genClsWrap(prefixCls, props) {
    var wrapCls = {};
    flexWrapValues.forEach(function (cssKey) {
      wrapCls["".concat(prefixCls, "-wrap-").concat(cssKey)] = props.wrap === cssKey;
    });
    return wrapCls;
  };
  var genClsAlign = function genClsAlign(prefixCls, props) {
    var alignCls = {};
    alignItemsValues.forEach(function (cssKey) {
      alignCls["".concat(prefixCls, "-align-").concat(cssKey)] = props.align === cssKey;
    });
    alignCls["".concat(prefixCls, "-align-stretch")] = !props.align && !!props.vertical;
    return alignCls;
  };
  var genClsJustify = function genClsJustify(prefixCls, props) {
    var justifyCls = {};
    justifyContentValues.forEach(function (cssKey) {
      justifyCls["".concat(prefixCls, "-justify-").concat(cssKey)] = props.justify === cssKey;
    });
    return justifyCls;
  };
  function createFlexClassNames(prefixCls, props) {
    return (0, _classnames["default"])(Object.assign(Object.assign(Object.assign({}, genClsWrap(prefixCls, props)), genClsAlign(prefixCls, props)), genClsJustify(prefixCls, props)));
  }
  var _default = _exports["default"] = createFlexClassNames;
});