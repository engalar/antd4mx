define(["exports", "react", "antd4mx/theme/useToken", "antd4mx/_util/zindexContext"], function (_exports, _react, _useToken3, _zindexContext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.containerBaseZIndexOffset = _exports.consumerBaseZIndexOffset = _exports.CONTAINER_MAX_OFFSET = void 0;
  _exports.useZIndex = useZIndex;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  // Z-Index control range
  // Container: 1000 + offset 100 (max base + 10 * offset = 2000)
  // Popover: offset 50
  // Notification: Container Max zIndex + componentOffset
  var CONTAINER_OFFSET = 100;
  var CONTAINER_OFFSET_MAX_COUNT = 10;
  var CONTAINER_MAX_OFFSET = _exports.CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
  var containerBaseZIndexOffset = _exports.containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET
  };
  var consumerBaseZIndexOffset = _exports.consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
  };
  function isContainerType(type) {
    return type in containerBaseZIndexOffset;
  }
  function useZIndex(componentType, customZIndex) {
    var _useToken = (0, _useToken3["default"])(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var parentZIndex = _react["default"].useContext(_zindexContext["default"]);
    var isContainer = isContainerType(componentType);
    if (customZIndex !== undefined) {
      return [customZIndex, customZIndex];
    }
    var zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
    if (isContainer) {
      zIndex +=
      // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token.zIndexPopupBase) +
      // Container offset
      containerBaseZIndexOffset[componentType];
      zIndex = Math.min(zIndex, token.zIndexPopupBase + CONTAINER_MAX_OFFSET);
    } else {
      zIndex += consumerBaseZIndexOffset[componentType];
    }
    return [parentZIndex === undefined ? customZIndex : zIndex, zIndex];
  }
});