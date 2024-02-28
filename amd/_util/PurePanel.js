define(["exports", "react", "rc-util/es/hooks/useMergedState", "antd4mx/config-provider/index"], function (_exports, React, _useMergedState3, _index) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _exports.withPureRenderTheme = withPureRenderTheme;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function withPureRenderTheme(Component) {
    return function (props) {
      return /*#__PURE__*/React.createElement(_index["default"], {
        theme: {
          token: {
            motion: false,
            zIndexPopupBase: 0
          }
        }
      }, /*#__PURE__*/React.createElement(Component, Object.assign({}, props)));
    };
  }
  /* istanbul ignore next */
  var genPurePanel = function genPurePanel(Component, defaultPrefixCls, getDropdownCls, postProps) {
    var PurePanel = function PurePanel(props) {
      var customizePrefixCls = props.prefixCls,
        style = props.style;
      var holderRef = React.useRef(null);
      var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        popupHeight = _React$useState2[0],
        setPopupHeight = _React$useState2[1];
      var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        popupWidth = _React$useState4[0],
        setPopupWidth = _React$useState4[1];
      var _useMergedState = (0, _useMergedState3["default"])(false, {
          value: props.open
        }),
        _useMergedState2 = _slicedToArray(_useMergedState, 2),
        open = _useMergedState2[0],
        setOpen = _useMergedState2[1];
      var _React$useContext = React.useContext(_index.ConfigContext),
        getPrefixCls = _React$useContext.getPrefixCls;
      var prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
      React.useEffect(function () {
        // We do not care about ssr
        setOpen(true);
        if (typeof ResizeObserver !== 'undefined') {
          var resizeObserver = new ResizeObserver(function (entries) {
            var element = entries[0].target;
            setPopupHeight(element.offsetHeight + 8);
            setPopupWidth(element.offsetWidth);
          });
          var interval = setInterval(function () {
            var _a;
            var dropdownCls = getDropdownCls ? ".".concat(getDropdownCls(prefixCls)) : ".".concat(prefixCls, "-dropdown");
            var popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
            if (popup) {
              clearInterval(interval);
              resizeObserver.observe(popup);
            }
          }, 10);
          return function () {
            clearInterval(interval);
            resizeObserver.disconnect();
          };
        }
      }, []);
      var mergedProps = Object.assign(Object.assign({}, props), {
        style: Object.assign(Object.assign({}, style), {
          margin: 0
        }),
        open: open,
        visible: open,
        getPopupContainer: function getPopupContainer() {
          return holderRef.current;
        }
      });
      if (postProps) {
        mergedProps = postProps(mergedProps);
      }
      var mergedStyle = {
        paddingBottom: popupHeight,
        position: 'relative',
        minWidth: popupWidth
      };
      return /*#__PURE__*/React.createElement("div", {
        ref: holderRef,
        style: mergedStyle
      }, /*#__PURE__*/React.createElement(Component, Object.assign({}, mergedProps)));
    };
    return withPureRenderTheme(PurePanel);
  };
  var _default = _exports["default"] = genPurePanel;
});