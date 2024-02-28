function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "classnames", "rc-util", "scroll-into-view-if-needed", "antd4mx/_util/getScroll", "antd4mx/_util/scrollTo", "antd4mx/_util/warning", "antd4mx/affix/index", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/anchor/AnchorLink", "antd4mx/anchor/context", "antd4mx/anchor/style/index"], function (_exports, _toConsumableArray2, React, _classnames, _rcUtil, _scrollIntoViewIfNeeded, _getScroll, _scrollTo, _warning, _index, _index2, _useCSSVarCls, _AnchorLink, _context, _index3) {
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
  function getDefaultContainer() {
    return window;
  }
  function getOffsetTop(element, container) {
    if (!element.getClientRects().length) {
      return 0;
    }
    var rect = element.getBoundingClientRect();
    if (rect.width || rect.height) {
      if (container === window) {
        container = element.ownerDocument.documentElement;
        return rect.top - container.clientTop;
      }
      return rect.top - container.getBoundingClientRect().top;
    }
    return rect.top;
  }
  var sharpMatcherRegex = /#([\S ]+)$/;
  var Anchor = function Anchor(props) {
    var _a;
    var rootClassName = props.rootClassName,
      customPrefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      offsetTop = props.offsetTop,
      _props$affix = props.affix,
      affix = _props$affix === void 0 ? true : _props$affix,
      _props$showInkInFixed = props.showInkInFixed,
      showInkInFixed = _props$showInkInFixed === void 0 ? false : _props$showInkInFixed,
      children = props.children,
      items = props.items,
      _props$direction = props.direction,
      anchorDirection = _props$direction === void 0 ? 'vertical' : _props$direction,
      bounds = props.bounds,
      targetOffset = props.targetOffset,
      onClick = props.onClick,
      onChange = props.onChange,
      getContainer = props.getContainer,
      getCurrentAnchor = props.getCurrentAnchor,
      replace = props.replace;
    // =================== Warning =====================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Anchor');
      warning.deprecated(!children, 'Anchor children', 'items');
      process.env.NODE_ENV !== "production" ? warning(!(anchorDirection === 'horizontal' && (items === null || items === void 0 ? void 0 : items.some(function (n) {
        return 'children' in n;
      }))), 'usage', '`Anchor items#children` is not supported when `Anchor` direction is horizontal.') : void 0;
    }
    var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      links = _React$useState2[0],
      setLinks = _React$useState2[1];
    var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      activeLink = _React$useState4[0],
      setActiveLink = _React$useState4[1];
    var activeLinkRef = React.useRef(activeLink);
    var wrapperRef = React.useRef(null);
    var spanLinkNode = React.useRef(null);
    var animating = React.useRef(false);
    var _React$useContext = React.useContext(_index2.ConfigContext),
      direction = _React$useContext.direction,
      anchor = _React$useContext.anchor,
      getTargetContainer = _React$useContext.getTargetContainer,
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('anchor', customPrefixCls);
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index3["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var getCurrentContainer = (_a = getContainer !== null && getContainer !== void 0 ? getContainer : getTargetContainer) !== null && _a !== void 0 ? _a : getDefaultContainer;
    var dependencyListItem = JSON.stringify(links);
    var registerLink = (0, _rcUtil.useEvent)(function (link) {
      if (!links.includes(link)) {
        setLinks(function (prev) {
          return [].concat((0, _toConsumableArray2["default"])(prev), [link]);
        });
      }
    });
    var unregisterLink = (0, _rcUtil.useEvent)(function (link) {
      if (links.includes(link)) {
        setLinks(function (prev) {
          return prev.filter(function (i) {
            return i !== link;
          });
        });
      }
    });
    var updateInk = function updateInk() {
      var _a;
      var linkNode = (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(".".concat(prefixCls, "-link-title-active"));
      if (linkNode && spanLinkNode.current) {
        var inkStyle = spanLinkNode.current.style;
        var horizontalAnchor = anchorDirection === 'horizontal';
        inkStyle.top = horizontalAnchor ? '' : "".concat(linkNode.offsetTop + linkNode.clientHeight / 2, "px");
        inkStyle.height = horizontalAnchor ? '' : "".concat(linkNode.clientHeight, "px");
        inkStyle.left = horizontalAnchor ? "".concat(linkNode.offsetLeft, "px") : '';
        inkStyle.width = horizontalAnchor ? "".concat(linkNode.clientWidth, "px") : '';
        if (horizontalAnchor) {
          (0, _scrollIntoViewIfNeeded["default"])(linkNode, {
            scrollMode: 'if-needed',
            block: 'nearest'
          });
        }
      }
    };
    var getInternalCurrentAnchor = function getInternalCurrentAnchor(_links) {
      var _offsetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var _bounds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      var linkSections = [];
      var container = getCurrentContainer();
      _links.forEach(function (link) {
        var sharpLinkMatch = sharpMatcherRegex.exec(link === null || link === void 0 ? void 0 : link.toString());
        if (!sharpLinkMatch) {
          return;
        }
        var target = document.getElementById(sharpLinkMatch[1]);
        if (target) {
          var top = getOffsetTop(target, container);
          if (top < _offsetTop + _bounds) {
            linkSections.push({
              link: link,
              top: top
            });
          }
        }
      });
      if (linkSections.length) {
        var maxSection = linkSections.reduce(function (prev, curr) {
          return curr.top > prev.top ? curr : prev;
        });
        return maxSection.link;
      }
      return '';
    };
    var setCurrentActiveLink = (0, _rcUtil.useEvent)(function (link) {
      // FIXME: Seems a bug since this compare is not equals
      // `activeLinkRef` is parsed value which will always trigger `onChange` event.
      if (activeLinkRef.current === link) {
        return;
      }
      // https://github.com/ant-design/ant-design/issues/30584
      var newLink = typeof getCurrentAnchor === 'function' ? getCurrentAnchor(link) : link;
      setActiveLink(newLink);
      activeLinkRef.current = newLink;
      // onChange should respect the original link (which may caused by
      // window scroll or user click), not the new link
      onChange === null || onChange === void 0 ? void 0 : onChange(link);
    });
    var handleScroll = React.useCallback(function () {
      if (animating.current) {
        return;
      }
      var currentActiveLink = getInternalCurrentAnchor(links, targetOffset !== undefined ? targetOffset : offsetTop || 0, bounds);
      setCurrentActiveLink(currentActiveLink);
    }, [dependencyListItem, targetOffset, offsetTop]);
    var handleScrollTo = React.useCallback(function (link) {
      setCurrentActiveLink(link);
      var sharpLinkMatch = sharpMatcherRegex.exec(link);
      if (!sharpLinkMatch) {
        return;
      }
      var targetElement = document.getElementById(sharpLinkMatch[1]);
      if (!targetElement) {
        return;
      }
      var container = getCurrentContainer();
      var scrollTop = (0, _getScroll["default"])(container, true);
      var eleOffsetTop = getOffsetTop(targetElement, container);
      var y = scrollTop + eleOffsetTop;
      y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
      animating.current = true;
      (0, _scrollTo["default"])(y, {
        getContainer: getCurrentContainer,
        callback: function callback() {
          animating.current = false;
        }
      });
    }, [targetOffset, offsetTop]);
    var wrapperClass = (0, _classnames["default"])(hashId, cssVarCls, rootCls, rootClassName, "".concat(prefixCls, "-wrapper"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-wrapper-horizontal"), anchorDirection === 'horizontal'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, anchor === null || anchor === void 0 ? void 0 : anchor.className);
    var anchorClass = (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-fixed"), !affix && !showInkInFixed));
    var inkClass = (0, _classnames["default"])("".concat(prefixCls, "-ink"), _defineProperty({}, "".concat(prefixCls, "-ink-visible"), activeLink));
    var wrapperStyle = Object.assign(Object.assign({
      maxHeight: offsetTop ? "calc(100vh - ".concat(offsetTop, "px)") : '100vh'
    }, anchor === null || anchor === void 0 ? void 0 : anchor.style), style);
    var createNestedLink = function createNestedLink(options) {
      return Array.isArray(options) ? options.map(function (item) {
        return /*#__PURE__*/React.createElement(_AnchorLink["default"], Object.assign({
          replace: replace
        }, item, {
          key: item.key
        }), anchorDirection === 'vertical' && createNestedLink(item.children));
      }) : null;
    };
    var anchorContent = /*#__PURE__*/React.createElement("div", {
      ref: wrapperRef,
      className: wrapperClass,
      style: wrapperStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: anchorClass
    }, /*#__PURE__*/React.createElement("span", {
      className: inkClass,
      ref: spanLinkNode
    }), 'items' in props ? createNestedLink(items) : children));
    React.useEffect(function () {
      var scrollContainer = getCurrentContainer();
      handleScroll();
      scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.addEventListener('scroll', handleScroll);
      return function () {
        scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }, [dependencyListItem]);
    React.useEffect(function () {
      if (typeof getCurrentAnchor === 'function') {
        setCurrentActiveLink(getCurrentAnchor(activeLinkRef.current || ''));
      }
    }, [getCurrentAnchor]);
    React.useEffect(function () {
      updateInk();
    }, [anchorDirection, getCurrentAnchor, dependencyListItem, activeLink]);
    var memoizedContextValue = React.useMemo(function () {
      return {
        registerLink: registerLink,
        unregisterLink: unregisterLink,
        scrollTo: handleScrollTo,
        activeLink: activeLink,
        onClick: onClick,
        direction: anchorDirection
      };
    }, [activeLink, onClick, handleScrollTo, anchorDirection]);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_context["default"].Provider, {
      value: memoizedContextValue
    }, affix ? ( /*#__PURE__*/React.createElement(_index["default"], {
      offsetTop: offsetTop,
      target: getCurrentContainer
    }, anchorContent)) : anchorContent));
  };
  if (process.env.NODE_ENV !== 'production') {
    Anchor.displayName = 'Anchor';
  }
  var _default = _exports["default"] = Anchor;
});