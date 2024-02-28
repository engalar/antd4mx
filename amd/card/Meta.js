define(["exports", "classnames", "react", "antd4mx/config-provider"], function (_exports, _classnames, React, _configProvider) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var Meta = function Meta(props) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      avatar = props.avatar,
      title = props.title,
      description = props.description,
      others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = (0, _classnames["default"])("".concat(prefixCls, "-meta"), className);
    var avatarDom = avatar ? ( /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-avatar")
    }, avatar)) : null;
    var titleDom = title ? ( /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-title")
    }, title)) : null;
    var descriptionDom = description ? ( /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-description")
    }, description)) : null;
    var MetaDetail = titleDom || descriptionDom ? ( /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-detail")
    }, titleDom, descriptionDom)) : null;
    return /*#__PURE__*/React.createElement("div", Object.assign({}, others, {
      className: classString
    }), avatarDom, MetaDetail);
  };
  var _default = _exports["default"] = Meta;
});