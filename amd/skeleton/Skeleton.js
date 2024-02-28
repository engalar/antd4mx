define(["exports", "classnames", "react", "antd4mx/config-provider", "antd4mx/skeleton/Avatar", "antd4mx/skeleton/Button", "antd4mx/skeleton/Element", "antd4mx/skeleton/Image", "antd4mx/skeleton/Input", "antd4mx/skeleton/Node", "antd4mx/skeleton/Paragraph", "antd4mx/skeleton/Title", "antd4mx/skeleton/style"], function (_exports, _classnames, React, _configProvider, _Avatar, _Button, _Element, _Image, _Input, _Node, _Paragraph, _Title, _style) {
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
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function getComponentProps(prop) {
    if (prop && _typeof(prop) === 'object') {
      return prop;
    }
    return {};
  }
  function getAvatarBasicProps(hasTitle, hasParagraph) {
    if (hasTitle && !hasParagraph) {
      // Square avatar
      return {
        size: 'large',
        shape: 'square'
      };
    }
    return {
      size: 'large',
      shape: 'circle'
    };
  }
  function getTitleBasicProps(hasAvatar, hasParagraph) {
    if (!hasAvatar && hasParagraph) {
      return {
        width: '38%'
      };
    }
    if (hasAvatar && hasParagraph) {
      return {
        width: '50%'
      };
    }
    return {};
  }
  function getParagraphBasicProps(hasAvatar, hasTitle) {
    var basicProps = {};
    // Width
    if (!hasAvatar || !hasTitle) {
      basicProps.width = '61%';
    }
    // Rows
    if (!hasAvatar && hasTitle) {
      basicProps.rows = 3;
    } else {
      basicProps.rows = 2;
    }
    return basicProps;
  }
  var Skeleton = function Skeleton(props) {
    var customizePrefixCls = props.prefixCls,
      loading = props.loading,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      children = props.children,
      _props$avatar = props.avatar,
      avatar = _props$avatar === void 0 ? false : _props$avatar,
      _props$title = props.title,
      title = _props$title === void 0 ? true : _props$title,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? true : _props$paragraph,
      active = props.active,
      round = props.round;
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      skeleton = _React$useContext.skeleton;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    if (loading || !('loading' in props)) {
      var hasAvatar = !!avatar;
      var hasTitle = !!title;
      var hasParagraph = !!paragraph;
      // Avatar
      var avatarNode;
      if (hasAvatar) {
        var avatarProps = Object.assign(Object.assign({
          prefixCls: "".concat(prefixCls, "-avatar")
        }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
        // We direct use SkeletonElement as avatar in skeleton internal.
        avatarNode = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-header")
        }, /*#__PURE__*/React.createElement(_Element["default"], Object.assign({}, avatarProps)));
      }
      var contentNode;
      if (hasTitle || hasParagraph) {
        // Title
        var $title;
        if (hasTitle) {
          var titleProps = Object.assign(Object.assign({
            prefixCls: "".concat(prefixCls, "-title")
          }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
          $title = /*#__PURE__*/React.createElement(_Title["default"], Object.assign({}, titleProps));
        }
        // Paragraph
        var paragraphNode;
        if (hasParagraph) {
          var paragraphProps = Object.assign(Object.assign({
            prefixCls: "".concat(prefixCls, "-paragraph")
          }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
          paragraphNode = /*#__PURE__*/React.createElement(_Paragraph["default"], Object.assign({}, paragraphProps));
        }
        contentNode = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, $title, paragraphNode);
      }
      var cls = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-with-avatar"), hasAvatar), "".concat(prefixCls, "-active"), active), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-round"), round), skeleton === null || skeleton === void 0 ? void 0 : skeleton.className, className, rootClassName, hashId, cssVarCls);
      return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
        className: cls,
        style: Object.assign(Object.assign({}, skeleton === null || skeleton === void 0 ? void 0 : skeleton.style), style)
      }, avatarNode, contentNode));
    }
    return typeof children !== 'undefined' ? children : null;
  };
  Skeleton.Button = _Button["default"];
  Skeleton.Avatar = _Avatar["default"];
  Skeleton.Input = _Input["default"];
  Skeleton.Image = _Image["default"];
  Skeleton.Node = _Node["default"];
  if (process.env.NODE_ENV !== 'production') {
    Skeleton.displayName = 'Skeleton';
  }
  var _default = _exports["default"] = Skeleton;
});