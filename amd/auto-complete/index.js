define(["exports", "react", "classnames", "rc-util/es/Children/toArray", "rc-util/es/omit", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/PurePanel", "antd4mx/_util/reactNode", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/select"], function (_exports, React, _classnames, _toArray, _omit, _useZIndex3, _PurePanel, _reactNode, _warning, _configProvider, _select) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var Option = _select["default"].Option;
  function isSelectOptionOrSelectOptGroup(child) {
    return child && child.type && (child.type.isSelectOption || child.type.isSelectOptGroup);
  }
  var AutoComplete = function AutoComplete(props, ref) {
    var _a;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      popupClassName = props.popupClassName,
      dropdownClassName = props.dropdownClassName,
      children = props.children,
      dataSource = props.dataSource;
    var childNodes = (0, _toArray["default"])(children);
    // ============================= Input =============================
    var customizeInput;
    if (childNodes.length === 1 && (0, _reactNode.isValidElement)(childNodes[0]) && !isSelectOptionOrSelectOptGroup(childNodes[0])) {
      var _childNodes = _slicedToArray(childNodes, 1);
      customizeInput = _childNodes[0];
    }
    var getInputElement = customizeInput ? function () {
      return customizeInput;
    } : undefined;
    // ============================ Options ============================
    var optionChildren;
    // [Legacy] convert `children` or `dataSource` into option children
    if (childNodes.length && isSelectOptionOrSelectOptGroup(childNodes[0])) {
      optionChildren = children;
    } else {
      optionChildren = dataSource ? dataSource.map(function (item) {
        if ((0, _reactNode.isValidElement)(item)) {
          return item;
        }
        switch (_typeof(item)) {
          case 'string':
            return /*#__PURE__*/React.createElement(Option, {
              key: item,
              value: item
            }, item);
          case 'object':
            {
              var optionValue = item.value;
              return /*#__PURE__*/React.createElement(Option, {
                key: optionValue,
                value: optionValue
              }, item.text);
            }
          default:
            return undefined;
        }
      }) : [];
    }
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('AutoComplete');
      warning.deprecated(!('dataSource' in props), 'dataSource', 'options');
      process.env.NODE_ENV !== "production" ? warning(!customizeInput || !('size' in props), 'usage', 'You need to control style self instead of setting `size` when using customize input.') : void 0;
      warning.deprecated(!dropdownClassName, 'dropdownClassName', 'popupClassName');
    }
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    // ============================ zIndex ============================
    var _useZIndex = (0, _useZIndex3.useZIndex)('SelectLike', (_a = props.dropdownStyle) === null || _a === void 0 ? void 0 : _a.zIndex),
      _useZIndex2 = _slicedToArray(_useZIndex, 1),
      zIndex = _useZIndex2[0];
    return /*#__PURE__*/React.createElement(_select["default"], Object.assign({
      ref: ref,
      suffixIcon: null
    }, (0, _omit["default"])(props, ['dataSource', 'dropdownClassName']), {
      prefixCls: prefixCls,
      popupClassName: popupClassName || dropdownClassName,
      dropdownStyle: Object.assign(Object.assign({}, props.dropdownStyle), {
        zIndex: zIndex
      }),
      className: (0, _classnames["default"])("".concat(prefixCls, "-auto-complete"), className),
      mode: _select["default"].SECRET_COMBOBOX_MODE_DO_NOT_USE,
      // Internal api
      getInputElement: getInputElement
    }), optionChildren);
  };
  var RefAutoComplete = /*#__PURE__*/React.forwardRef(AutoComplete);
  // We don't care debug panel
  /* istanbul ignore next */
  var PurePanel = (0, _PurePanel["default"])(RefAutoComplete);
  RefAutoComplete.Option = Option;
  RefAutoComplete._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  if (process.env.NODE_ENV !== 'production') {
    RefAutoComplete.displayName = 'AutoComplete';
  }
  var _default = _exports["default"] = RefAutoComplete;
});