define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var getBuiltInPlacements = function getBuiltInPlacements(popupOverflow) {
    var htmlRegion = popupOverflow === 'scroll' ? 'scroll' : 'visible';
    var sharedConfig = {
      overflow: {
        adjustX: true,
        adjustY: true,
        shiftY: true
      },
      htmlRegion: htmlRegion,
      dynamicInset: true
    };
    return {
      bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
        points: ['tl', 'bl'],
        offset: [0, 4]
      }),
      bottomRight: Object.assign(Object.assign({}, sharedConfig), {
        points: ['tr', 'br'],
        offset: [0, 4]
      }),
      topLeft: Object.assign(Object.assign({}, sharedConfig), {
        points: ['bl', 'tl'],
        offset: [0, -4]
      }),
      topRight: Object.assign(Object.assign({}, sharedConfig), {
        points: ['br', 'tr'],
        offset: [0, -4]
      })
    };
  };
  function mergedBuiltinPlacements(buildInPlacements, popupOverflow) {
    return buildInPlacements || getBuiltInPlacements(popupOverflow);
  }
  var _default = _exports["default"] = mergedBuiltinPlacements;
});