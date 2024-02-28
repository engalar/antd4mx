define(["exports", "react", "classnames", "rc-cascader", "antd4mx/config-provider/defaultRenderEmpty", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/cascader/hooks/useBase", "antd4mx/cascader/hooks/useCheckable", "antd4mx/cascader/hooks/useColumnIcons", "antd4mx/cascader/style/index", "antd4mx/cascader/style/panel"], function (_exports, React, _classnames, _rcCascader, _defaultRenderEmpty, _useCSSVarCls, _useBase3, _useCheckable, _useColumnIcons3, _index, _panel) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var CascaderPanel = function CascaderPanel(props) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      multiple = props.multiple,
      rootClassName = props.rootClassName,
      notFoundContent = props.notFoundContent,
      direction = props.direction,
      expandIcon = props.expandIcon;
    var _useBase = (0, _useBase3["default"])(customizePrefixCls, direction),
      _useBase2 = _slicedToArray(_useBase, 4),
      prefixCls = _useBase2[0],
      cascaderPrefixCls = _useBase2[1],
      mergedDirection = _useBase2[2],
      renderEmpty = _useBase2[3];
    var rootCls = (0, _useCSSVarCls["default"])(cascaderPrefixCls);
    var _useStyle = (0, _index["default"])(cascaderPrefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    (0, _panel["default"])(cascaderPrefixCls);
    var isRtl = mergedDirection === 'rtl';
    // ===================== Icon ======================
    var _useColumnIcons = (0, _useColumnIcons3["default"])(prefixCls, isRtl, expandIcon),
      _useColumnIcons2 = _slicedToArray(_useColumnIcons, 2),
      mergedExpandIcon = _useColumnIcons2[0],
      loadingIcon = _useColumnIcons2[1];
    // ===================== Empty =====================
    var mergedNotFoundContent = notFoundContent || (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Cascader')) || ( /*#__PURE__*/React.createElement(_defaultRenderEmpty["default"], {
      componentName: "Cascader"
    }));
    // =================== Multiple ====================
    var checkable = (0, _useCheckable["default"])(cascaderPrefixCls, multiple);
    // ==================== Render =====================
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcCascader.Panel, Object.assign({}, props, {
      checkable: checkable,
      prefixCls: cascaderPrefixCls,
      className: (0, _classnames["default"])(className, hashId, rootClassName, cssVarCls, rootCls),
      notFoundContent: mergedNotFoundContent,
      direction: mergedDirection,
      expandIcon: mergedExpandIcon,
      loadingIcon: loadingIcon
    })));
  };
  var _default = _exports["default"] = CascaderPanel;
});