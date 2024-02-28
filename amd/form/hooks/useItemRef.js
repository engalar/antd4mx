define(["exports", "rc-util/es/ref", "react", "antd4mx/form/context"], function (_exports, _ref, React, _context) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useItemRef;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function useItemRef() {
    var _React$useContext = React.useContext(_context.FormContext),
      itemRef = _React$useContext.itemRef;
    var cacheRef = React.useRef({});
    function getRef(name, children) {
      var childrenRef = children && _typeof(children) === 'object' && children.ref;
      var nameStr = name.join('_');
      if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
        cacheRef.current.name = nameStr;
        cacheRef.current.originRef = childrenRef;
        cacheRef.current.ref = (0, _ref.composeRef)(itemRef(name), childrenRef);
      }
      return cacheRef.current.ref;
    }
    return getRef;
  }
});