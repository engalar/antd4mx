define(["exports", "react", "classnames", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/anchor/context"], function (_exports, React, _classnames, _warning, _configProvider, _context) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var AnchorLink = function AnchorLink(props) {
    var href = props.href,
      title = props.title,
      customizePrefixCls = props.prefixCls,
      children = props.children,
      className = props.className,
      target = props.target,
      replace = props.replace;
    var context = React.useContext(_context["default"]);
    var _ref = context || {},
      registerLink = _ref.registerLink,
      unregisterLink = _ref.unregisterLink,
      scrollTo = _ref.scrollTo,
      onClick = _ref.onClick,
      activeLink = _ref.activeLink,
      direction = _ref.direction;
    React.useEffect(function () {
      registerLink === null || registerLink === void 0 ? void 0 : registerLink(href);
      return function () {
        unregisterLink === null || unregisterLink === void 0 ? void 0 : unregisterLink(href);
      };
    }, [href]);
    var handleClick = function handleClick(e) {
      if (replace) {
        e.preventDefault();
        window.location.replace(href);
      }
      onClick === null || onClick === void 0 ? void 0 : onClick(e, {
        title: title,
        href: href
      });
      scrollTo === null || scrollTo === void 0 ? void 0 : scrollTo(href);
    };
    // =================== Warning =====================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Anchor.Link');
      process.env.NODE_ENV !== "production" ? warning(!children || direction !== 'horizontal', 'usage', '`Anchor.Link children` is not supported when `Anchor` direction is horizontal') : void 0;
    }
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('anchor', customizePrefixCls);
    var active = activeLink === href;
    var wrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-link"), className, _defineProperty({}, "".concat(prefixCls, "-link-active"), active));
    var titleClassName = (0, _classnames["default"])("".concat(prefixCls, "-link-title"), _defineProperty({}, "".concat(prefixCls, "-link-title-active"), active));
    return /*#__PURE__*/React.createElement("div", {
      className: wrapperClassName
    }, /*#__PURE__*/React.createElement("a", {
      className: titleClassName,
      href: href,
      title: typeof title === 'string' ? title : '',
      target: target,
      onClick: handleClick
    }, title), direction !== 'horizontal' ? children : null);
  };
  var _default = _exports["default"] = AnchorLink;
});