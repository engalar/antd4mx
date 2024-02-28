define(["exports", "react"], function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.cloneElement = cloneElement;
  _exports.isFragment = isFragment;
  _exports.isValidElement = void 0;
  _exports.replaceElement = replaceElement;
  var isValidElement = _exports.isValidElement = React.isValidElement;
  function isFragment(child) {
    return child && isValidElement(child) && child.type === React.Fragment;
  }
  function replaceElement(element, replacement, props) {
    if (!isValidElement(element)) {
      return replacement;
    }
    return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
  }
  function cloneElement(element, props) {
    return replaceElement(element, element, props);
  }
});