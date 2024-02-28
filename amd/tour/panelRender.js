define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "@ant-design/icons/es/icons/CloseOutlined", "classnames", "antd4mx/_util/hooks/useClosable", "antd4mx/button", "antd4mx/locale", "antd4mx/locale/en_US"], function (_exports, _toConsumableArray2, _react, _CloseOutlined, _classnames, _useClosable3, _button, _locale, _en_US) {
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
  function isValidNode(node) {
    return node !== undefined && node !== null;
  }
  // Due to the independent design of Panel, it will be too coupled to put in rc-tour,
  // so a set of Panel logic is implemented separately in antd.
  var TourPanel = function TourPanel(props) {
    var _a, _b;
    var stepProps = props.stepProps,
      current = props.current,
      type = props.type,
      closeIcon = props.closeIcon,
      indicatorsRender = props.indicatorsRender;
    var prefixCls = stepProps.prefixCls,
      _stepProps$total = stepProps.total,
      total = _stepProps$total === void 0 ? 1 : _stepProps$total,
      title = stepProps.title,
      onClose = stepProps.onClose,
      onPrev = stepProps.onPrev,
      onNext = stepProps.onNext,
      onFinish = stepProps.onFinish,
      cover = stepProps.cover,
      description = stepProps.description,
      nextButtonProps = stepProps.nextButtonProps,
      prevButtonProps = stepProps.prevButtonProps,
      stepType = stepProps.type,
      stepCloseIcon = stepProps.closeIcon;
    var mergedType = stepType !== null && stepType !== void 0 ? stepType : type;
    var mergedCloseIcon = stepCloseIcon !== null && stepCloseIcon !== void 0 ? stepCloseIcon : closeIcon;
    var mergedClosable = mergedCloseIcon !== false && mergedCloseIcon !== null;
    var _useClosable = (0, _useClosable3["default"])(mergedClosable, mergedCloseIcon, function (icon) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          onClick: onClose,
          "aria-label": "Close",
          className: "".concat(prefixCls, "-close")
        }, icon);
      }, /*#__PURE__*/_react["default"].createElement(_CloseOutlined["default"], {
        className: "".concat(prefixCls, "-close-icon")
      }), true),
      _useClosable2 = _slicedToArray(_useClosable, 2),
      closable = _useClosable2[0],
      mergedDisplayCloseIcon = _useClosable2[1];
    var isLastStep = current === total - 1;
    var prevBtnClick = function prevBtnClick() {
      var _a;
      onPrev === null || onPrev === void 0 ? void 0 : onPrev();
      (_a = prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.onClick) === null || _a === void 0 ? void 0 : _a.call(prevButtonProps);
    };
    var nextBtnClick = function nextBtnClick() {
      var _a;
      if (isLastStep) {
        onFinish === null || onFinish === void 0 ? void 0 : onFinish();
      } else {
        onNext === null || onNext === void 0 ? void 0 : onNext();
      }
      (_a = nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.onClick) === null || _a === void 0 ? void 0 : _a.call(nextButtonProps);
    };
    var headerNode = isValidNode(title) ? ( /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-header")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, title))) : null;
    var descriptionNode = isValidNode(description) ? ( /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, description)) : null;
    var coverNode = isValidNode(cover) ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-cover")
    }, cover) : null;
    var mergeIndicatorNode;
    if (indicatorsRender) {
      mergeIndicatorNode = indicatorsRender(current, total);
    } else {
      mergeIndicatorNode = (0, _toConsumableArray2["default"])(Array.from({
        length: total
      }).keys()).map(function (stepItem, index) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          key: stepItem,
          className: (0, _classnames["default"])(index === current && "".concat(prefixCls, "-indicator-active"), "".concat(prefixCls, "-indicator"))
        });
      });
    }
    var mainBtnType = mergedType === 'primary' ? 'default' : 'primary';
    var secondaryBtnProps = {
      type: 'default',
      ghost: mergedType === 'primary'
    };
    var _useLocale = (0, _locale.useLocale)('Tour', _en_US["default"].Tour),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      contextLocale = _useLocale2[0];
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-inner")
    }, closable && mergedDisplayCloseIcon, coverNode, headerNode, descriptionNode, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, total > 1 && /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-indicators")
    }, mergeIndicatorNode), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-buttons")
    }, current !== 0 ? ( /*#__PURE__*/_react["default"].createElement(_button["default"], Object.assign({}, secondaryBtnProps, prevButtonProps, {
      onClick: prevBtnClick,
      size: "small",
      className: (0, _classnames["default"])("".concat(prefixCls, "-prev-btn"), prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.className)
    }), (_a = prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.children) !== null && _a !== void 0 ? _a : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.Previous)) : null, /*#__PURE__*/_react["default"].createElement(_button["default"], Object.assign({
      type: mainBtnType
    }, nextButtonProps, {
      onClick: nextBtnClick,
      size: "small",
      className: (0, _classnames["default"])("".concat(prefixCls, "-next-btn"), nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.className)
    }), (_b = nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.children) !== null && _b !== void 0 ? _b : isLastStep ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.Finish : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.Next)))));
  };
  var _default = _exports["default"] = TourPanel;
});