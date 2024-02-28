define(["exports", "antd4mx/style/placementArrow"], function (_exports, _placementArrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = getPlacements;
  _exports.getOverflowOptions = getOverflowOptions;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
    if (autoAdjustOverflow === false) {
      return {
        adjustX: false,
        adjustY: false
      };
    }
    var overflow = autoAdjustOverflow && _typeof(autoAdjustOverflow) === 'object' ? autoAdjustOverflow : {};
    var baseOverflow = {};
    switch (placement) {
      case 'top':
      case 'bottom':
        baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
        baseOverflow.shiftY = true;
        baseOverflow.adjustY = true;
        break;
      case 'left':
      case 'right':
        baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
        baseOverflow.shiftX = true;
        baseOverflow.adjustX = true;
        break;
    }
    var mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
    // Support auto shift
    if (!mergedOverflow.shiftX) {
      mergedOverflow.adjustX = true;
    }
    if (!mergedOverflow.shiftY) {
      mergedOverflow.adjustY = true;
    }
    return mergedOverflow;
  }
  var PlacementAlignMap = {
    left: {
      points: ['cr', 'cl']
    },
    right: {
      points: ['cl', 'cr']
    },
    top: {
      points: ['bc', 'tc']
    },
    bottom: {
      points: ['tc', 'bc']
    },
    topLeft: {
      points: ['bl', 'tl']
    },
    leftTop: {
      points: ['tr', 'tl']
    },
    topRight: {
      points: ['br', 'tr']
    },
    rightTop: {
      points: ['tl', 'tr']
    },
    bottomRight: {
      points: ['tr', 'br']
    },
    rightBottom: {
      points: ['bl', 'br']
    },
    bottomLeft: {
      points: ['tl', 'bl']
    },
    leftBottom: {
      points: ['br', 'bl']
    }
  };
  var ArrowCenterPlacementAlignMap = {
    topLeft: {
      points: ['bl', 'tc']
    },
    leftTop: {
      points: ['tr', 'cl']
    },
    topRight: {
      points: ['br', 'tc']
    },
    rightTop: {
      points: ['tl', 'cr']
    },
    bottomRight: {
      points: ['tr', 'bc']
    },
    rightBottom: {
      points: ['bl', 'cr']
    },
    bottomLeft: {
      points: ['tl', 'bc']
    },
    leftBottom: {
      points: ['br', 'cl']
    }
  };
  var DisableAutoArrowList = new Set(['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']);
  function getPlacements(config) {
    var arrowWidth = config.arrowWidth,
      autoAdjustOverflow = config.autoAdjustOverflow,
      arrowPointAtCenter = config.arrowPointAtCenter,
      offset = config.offset,
      borderRadius = config.borderRadius,
      visibleFirst = config.visibleFirst;
    var halfArrowWidth = arrowWidth / 2;
    var placementMap = {};
    Object.keys(PlacementAlignMap).forEach(function (key) {
      var template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
      var placementInfo = Object.assign(Object.assign({}, template), {
        offset: [0, 0],
        dynamicInset: true
      });
      placementMap[key] = placementInfo;
      // Disable autoArrow since design is fixed position
      if (DisableAutoArrowList.has(key)) {
        placementInfo.autoArrow = false;
      }
      // Static offset
      switch (key) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          placementInfo.offset[1] = -halfArrowWidth - offset;
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          placementInfo.offset[1] = halfArrowWidth + offset;
          break;
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          placementInfo.offset[0] = -halfArrowWidth - offset;
          break;
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          placementInfo.offset[0] = halfArrowWidth + offset;
          break;
      }
      // Dynamic offset
      var arrowOffset = (0, _placementArrow.getArrowOffsetToken)({
        contentRadius: borderRadius,
        limitVerticalRadius: true
      });
      if (arrowPointAtCenter) {
        switch (key) {
          case 'topLeft':
          case 'bottomLeft':
            placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
            break;
          case 'topRight':
          case 'bottomRight':
            placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
            break;
          case 'leftTop':
          case 'rightTop':
            placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
            break;
          case 'leftBottom':
          case 'rightBottom':
            placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
            break;
        }
      }
      // Overflow
      placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
      // VisibleFirst
      if (visibleFirst) {
        placementInfo.htmlRegion = 'visibleFirst';
      }
    });
    return placementMap;
  }
});