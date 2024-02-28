define(["exports", "react", "@ant-design/icons/es/icons/HolderOutlined", "classnames", "rc-tree", "antd4mx/_util/motion", "antd4mx/config-provider/index", "antd4mx/tree/style/index", "antd4mx/tree/utils/dropIndicator", "antd4mx/tree/utils/iconUtil", "antd4mx/theme/internal"], function (_exports, _react, _HolderOutlined, _classnames, _rcTree, _motion, _index, _index2, _dropIndicator, _iconUtil, _internal) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var Tree = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var _a;
    var _React$useContext = _react["default"].useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      virtual = _React$useContext.virtual,
      tree = _React$useContext.tree;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      _props$showIcon = props.showIcon,
      showIcon = _props$showIcon === void 0 ? false : _props$showIcon,
      showLine = props.showLine,
      switcherIcon = props.switcherIcon,
      _props$blockNode = props.blockNode,
      blockNode = _props$blockNode === void 0 ? false : _props$blockNode,
      children = props.children,
      _props$checkable = props.checkable,
      checkable = _props$checkable === void 0 ? false : _props$checkable,
      _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? true : _props$selectable,
      draggable = props.draggable,
      customMotion = props.motion,
      style = props.style;
    var prefixCls = getPrefixCls('tree', customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    var motion = customMotion !== null && customMotion !== void 0 ? customMotion : Object.assign(Object.assign({}, (0, _motion["default"])(rootPrefixCls)), {
      motionAppear: false
    });
    var newProps = Object.assign(Object.assign({}, props), {
      checkable: checkable,
      selectable: selectable,
      showIcon: showIcon,
      motion: motion,
      blockNode: blockNode,
      showLine: Boolean(showLine),
      dropIndicatorRender: _dropIndicator["default"]
    });
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var itemHeight = token.paddingXS / 2 + (((_a = token.Tree) === null || _a === void 0 ? void 0 : _a.titleHeight) || token.controlHeightSM);
    var draggableConfig = _react["default"].useMemo(function () {
      if (!draggable) {
        return false;
      }
      var mergedDraggable = {};
      switch (_typeof(draggable)) {
        case 'function':
          mergedDraggable.nodeDraggable = draggable;
          break;
        case 'object':
          mergedDraggable = Object.assign({}, draggable);
          break;
        default:
          break;
        // Do nothing
      }
      if (mergedDraggable.icon !== false) {
        mergedDraggable.icon = mergedDraggable.icon || /*#__PURE__*/_react["default"].createElement(_HolderOutlined["default"], null);
      }
      return mergedDraggable;
    }, [draggable]);
    var renderSwitcherIcon = function renderSwitcherIcon(nodeProps) {
      return /*#__PURE__*/_react["default"].createElement(_iconUtil["default"], {
        prefixCls: prefixCls,
        switcherIcon: switcherIcon,
        treeNodeProps: nodeProps,
        showLine: showLine
      });
    };
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(_rcTree["default"], Object.assign({
      itemHeight: itemHeight,
      ref: ref,
      virtual: virtual
    }, newProps, {
      // newProps may contain style so declare style below it
      style: Object.assign(Object.assign({}, tree === null || tree === void 0 ? void 0 : tree.style), style),
      prefixCls: prefixCls,
      className: (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-icon-hide"), !showIcon), "".concat(prefixCls, "-block-node"), blockNode), "".concat(prefixCls, "-unselectable"), !selectable), "".concat(prefixCls, "-rtl"), direction === 'rtl'), tree === null || tree === void 0 ? void 0 : tree.className, className, hashId, cssVarCls),
      direction: direction,
      checkable: checkable ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(prefixCls, "-checkbox-inner")
      }) : checkable,
      selectable: selectable,
      switcherIcon: renderSwitcherIcon,
      draggable: draggableConfig
    }), children));
  });
  if (process.env.NODE_ENV !== 'production') {
    Tree.displayName = 'Tree';
  }
  var _default = _exports["default"] = Tree;
});