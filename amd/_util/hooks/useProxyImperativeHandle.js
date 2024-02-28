define(["exports", "react"], function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useProxyImperativeHandle;
  // Proxy the dom ref with `{ nativeElement, otherFn }` type
  // ref: https://github.com/ant-design/ant-design/discussions/45242

  function fillProxy(element, handler) {
    element._antProxy = element._antProxy || {};
    Object.keys(handler).forEach(function (key) {
      if (!(key in element._antProxy)) {
        var ori = element[key];
        element._antProxy[key] = ori;
        element[key] = handler[key];
      }
    });
    return element;
  }
  function useProxyImperativeHandle(ref, init) {
    return (0, _react.useImperativeHandle)(ref, function () {
      var refObj = init();
      var nativeElement = refObj.nativeElement;
      if (typeof Proxy !== 'undefined') {
        return new Proxy(nativeElement, {
          get: function get(obj, prop) {
            if (refObj[prop]) {
              return refObj[prop];
            }
            return Reflect.get(obj, prop);
          }
        });
      }
      // Fallback of IE
      return fillProxy(nativeElement, refObj);
    });
  }
});