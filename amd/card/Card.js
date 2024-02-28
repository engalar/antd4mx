function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/omit", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/config-provider/hooks/useSize", "antd4mx/skeleton", "antd4mx/tabs", "antd4mx/card/Grid", "antd4mx/card/style"], function (_exports, React, _classnames, _omit, _warning, _configProvider, _useSize, _skeleton, _tabs, _Grid, _style) {
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
  var ActionNode = function ActionNode(props) {
    var actionClasses = props.actionClasses,
      _props$actions = props.actions,
      actions = _props$actions === void 0 ? [] : _props$actions,
      actionStyle = props.actionStyle;
    return /*#__PURE__*/React.createElement("ul", {
      className: actionClasses,
      style: actionStyle
    }, actions.map(function (action, index) {
      // Move this out since eslint not allow index key
      // And eslint-disable makes conflict with rollup
      // ref https://github.com/ant-design/ant-design/issues/46022
      var key = "action-".concat(index);
      return /*#__PURE__*/React.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: key
      }, /*#__PURE__*/React.createElement("span", null, action));
    }));
  };
  var Card = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      extra = props.extra,
      _props$headStyle = props.headStyle,
      headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
      _props$bodyStyle = props.bodyStyle,
      bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
      title = props.title,
      loading = props.loading,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      customizeSize = props.size,
      type = props.type,
      cover = props.cover,
      actions = props.actions,
      tabList = props.tabList,
      children = props.children,
      activeTabKey = props.activeTabKey,
      defaultActiveTabKey = props.defaultActiveTabKey,
      tabBarExtraContent = props.tabBarExtraContent,
      hoverable = props.hoverable,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      customClassNames = props.classNames,
      customStyles = props.styles,
      others = __rest(props, ["prefixCls", "className", "rootClassName", "style", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps", "classNames", "styles"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      card = _React$useContext.card;
    // =================Warning===================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Card');
      [['headStyle', 'styles.header'], ['bodyStyle', 'styles.body']].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          deprecatedName = _ref2[0],
          newName = _ref2[1];
        warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
      });
    }
    var onTabChange = function onTabChange(key) {
      var _a;
      (_a = props.onTabChange) === null || _a === void 0 ? void 0 : _a.call(props, key);
    };
    var moduleClass = function moduleClass(moduleName) {
      var _a;
      return (0, _classnames["default"])((_a = card === null || card === void 0 ? void 0 : card.classNames) === null || _a === void 0 ? void 0 : _a[moduleName], customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames[moduleName]);
    };
    var moduleStyle = function moduleStyle(moduleName) {
      var _a;
      return Object.assign(Object.assign({}, (_a = card === null || card === void 0 ? void 0 : card.styles) === null || _a === void 0 ? void 0 : _a[moduleName]), customStyles === null || customStyles === void 0 ? void 0 : customStyles[moduleName]);
    };
    var isContainGrid = React.useMemo(function () {
      var containGrid = false;
      React.Children.forEach(children, function (element) {
        if (element && element.type && element.type === _Grid["default"]) {
          containGrid = true;
        }
      });
      return containGrid;
    }, [children]);
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var loadingBlock = /*#__PURE__*/React.createElement(_skeleton["default"], {
      loading: true,
      active: true,
      paragraph: {
        rows: 4
      },
      title: false
    }, children);
    var hasActiveTabKey = activeTabKey !== undefined;
    var extraProps = Object.assign(Object.assign({}, tabProps), _defineProperty(_defineProperty({}, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), "tabBarExtraContent", tabBarExtraContent));
    var head;
    var mergedSize = (0, _useSize["default"])(customizeSize);
    var tabSize = !mergedSize || mergedSize === 'default' ? 'large' : mergedSize;
    var tabs = tabList ? ( /*#__PURE__*/React.createElement(_tabs["default"], Object.assign({
      size: tabSize
    }, extraProps, {
      className: "".concat(prefixCls, "-head-tabs"),
      onChange: onTabChange,
      items: tabList.map(function (_a) {
        var tab = _a.tab,
          item = __rest(_a, ["tab"]);
        return Object.assign({
          label: tab
        }, item);
      })
    }))) : null;
    if (title || extra || tabs) {
      var headClasses = (0, _classnames["default"])("".concat(prefixCls, "-head"), moduleClass('header'));
      var titleClasses = (0, _classnames["default"])("".concat(prefixCls, "-head-title"), moduleClass('title'));
      var extraClasses = (0, _classnames["default"])("".concat(prefixCls, "-extra"), moduleClass('extra'));
      var mergedHeadStyle = Object.assign(Object.assign({}, headStyle), moduleStyle('header'));
      head = /*#__PURE__*/React.createElement("div", {
        className: headClasses,
        style: mergedHeadStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-head-wrapper")
      }, title && ( /*#__PURE__*/React.createElement("div", {
        className: titleClasses,
        style: moduleStyle('title')
      }, title)), extra && ( /*#__PURE__*/React.createElement("div", {
        className: extraClasses,
        style: moduleStyle('extra')
      }, extra))), tabs);
    }
    var coverClasses = (0, _classnames["default"])("".concat(prefixCls, "-cover"), moduleClass('cover'));
    var coverDom = cover ? ( /*#__PURE__*/React.createElement("div", {
      className: coverClasses,
      style: moduleStyle('cover')
    }, cover)) : null;
    var bodyClasses = (0, _classnames["default"])("".concat(prefixCls, "-body"), moduleClass('body'));
    var mergedBodyStyle = Object.assign(Object.assign({}, bodyStyle), moduleStyle('body'));
    var body = /*#__PURE__*/React.createElement("div", {
      className: bodyClasses,
      style: mergedBodyStyle
    }, loading ? loadingBlock : children);
    var actionClasses = (0, _classnames["default"])("".concat(prefixCls, "-actions"), moduleClass('actions'));
    var actionDom = actions && actions.length ? ( /*#__PURE__*/React.createElement(ActionNode, {
      actionClasses: actionClasses,
      actionStyle: moduleStyle('actions'),
      actions: actions
    })) : null;
    var divProps = (0, _omit["default"])(others, ['onTabChange']);
    var classString = (0, _classnames["default"])(prefixCls, card === null || card === void 0 ? void 0 : card.className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-loading"), loading), "".concat(prefixCls, "-bordered"), bordered), "".concat(prefixCls, "-hoverable"), hoverable), "".concat(prefixCls, "-contain-grid"), isContainGrid), "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), "".concat(prefixCls, "-").concat(mergedSize), mergedSize), "".concat(prefixCls, "-type-").concat(type), !!type), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, hashId, cssVarCls);
    var mergedStyle = Object.assign(Object.assign({}, card === null || card === void 0 ? void 0 : card.style), style);
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({
      ref: ref
    }, divProps, {
      className: classString,
      style: mergedStyle
    }), head, coverDom, body, actionDom));
  });
  var _default = _exports["default"] = Card;
});