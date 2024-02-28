function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@rc-component/tour", "classnames", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/placements", "antd4mx/_util/zindexContext", "antd4mx/config-provider/index", "antd4mx/theme/internal", "antd4mx/tour/panelRender", "antd4mx/tour/PurePanel", "antd4mx/tour/style/index"], function (_exports, _react, _tour, _classnames, _useZIndex3, _placements, _zindexContext, _index, _internal, _panelRender, _PurePanel, _index2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var Tour = function Tour(props) {
    var customizePrefixCls = props.prefixCls,
      type = props.type,
      rootClassName = props.rootClassName,
      indicatorsRender = props.indicatorsRender,
      steps = props.steps,
      restProps = __rest(props, ["prefixCls", "type", "rootClassName", "indicatorsRender", "steps"]);
    var _useContext = (0, _react.useContext)(_index.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      direction = _useContext.direction,
      tour = _useContext.tour;
    var prefixCls = getPrefixCls('tour', customizePrefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var mergedSteps = _react["default"].useMemo(function () {
      return steps === null || steps === void 0 ? void 0 : steps.map(function (step) {
        var _a;
        return Object.assign(Object.assign({}, step), {
          className: (0, _classnames["default"])(step.className, _defineProperty({}, "".concat(prefixCls, "-primary"), ((_a = step.type) !== null && _a !== void 0 ? _a : type) === 'primary'))
        });
      });
    }, [steps, type]);
    var builtinPlacements = function builtinPlacements(config) {
      var _a;
      return (0, _placements["default"])({
        arrowPointAtCenter: (_a = config === null || config === void 0 ? void 0 : config.arrowPointAtCenter) !== null && _a !== void 0 ? _a : true,
        autoAdjustOverflow: true,
        offset: token.marginXXS,
        arrowWidth: token.sizePopupArrow,
        borderRadius: token.borderRadius
      });
    };
    var customClassName = (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), hashId, cssVarCls, rootClassName);
    var mergedRenderPanel = function mergedRenderPanel(stepProps, stepCurrent) {
      return /*#__PURE__*/_react["default"].createElement(_panelRender["default"], {
        type: type,
        stepProps: stepProps,
        current: stepCurrent,
        closeIcon: tour === null || tour === void 0 ? void 0 : tour.closeIcon,
        indicatorsRender: indicatorsRender
      });
    };
    // ============================ zIndex ============================
    var _useZIndex = (0, _useZIndex3.useZIndex)('Tour', restProps.zIndex),
      _useZIndex2 = _slicedToArray(_useZIndex, 2),
      zIndex = _useZIndex2[0],
      contextZIndex = _useZIndex2[1];
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(_zindexContext["default"].Provider, {
      value: contextZIndex
    }, /*#__PURE__*/_react["default"].createElement(_tour["default"], Object.assign({}, restProps, {
      zIndex: zIndex,
      rootClassName: customClassName,
      prefixCls: prefixCls,
      animated: true,
      renderPanel: mergedRenderPanel,
      builtinPlacements: builtinPlacements,
      steps: mergedSteps
    }))));
  };
  if (process.env.NODE_ENV !== 'production') {
    Tour.displayName = 'Tour';
  }
  Tour._InternalPanelDoNotUseOrYouWillBeFired = _PurePanel["default"];
  var _default = _exports["default"] = Tour;
});