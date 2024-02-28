define(["exports", "@ant-design/icons/es/icons/DownOutlined", "react", "antd4mx/config-provider/index", "antd4mx/dropdown/dropdown", "antd4mx/breadcrumb/BreadcrumbSeparator", "antd4mx/breadcrumb/useItemRender", "antd4mx/_util/warning"], function (_exports, _DownOutlined, React, _index, _dropdown, _BreadcrumbSeparator, _useItemRender, _warning) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.InternalBreadcrumbItem = void 0;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var InternalBreadcrumbItem = _exports.InternalBreadcrumbItem = function InternalBreadcrumbItem(props) {
    var prefixCls = props.prefixCls,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? '/' : _props$separator,
      children = props.children,
      menu = props.menu,
      overlay = props.overlay,
      dropdownProps = props.dropdownProps,
      href = props.href;
    // Warning for deprecated usage
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Breadcrumb.Item');
      warning.deprecated(!('overlay' in props), 'overlay', 'menu');
    }
    /** If overlay is have Wrap a Dropdown */
    var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem) {
      if (menu || overlay) {
        var mergeDropDownProps = Object.assign({}, dropdownProps);
        if (menu) {
          var _a = menu || {},
            items = _a.items,
            menuProps = __rest(_a, ["items"]);
          mergeDropDownProps.menu = Object.assign(Object.assign({}, menuProps), {
            items: items === null || items === void 0 ? void 0 : items.map(function (_a, index) {
              var key = _a.key,
                title = _a.title,
                label = _a.label,
                path = _a.path,
                itemProps = __rest(_a, ["key", "title", "label", "path"]);
              var mergedLabel = label !== null && label !== void 0 ? label : title;
              if (path) {
                mergedLabel = /*#__PURE__*/React.createElement("a", {
                  href: "".concat(href).concat(path)
                }, mergedLabel);
              }
              return Object.assign(Object.assign({}, itemProps), {
                key: key !== null && key !== void 0 ? key : index,
                label: mergedLabel
              });
            })
          });
        } else if (overlay) {
          mergeDropDownProps.overlay = overlay;
        }
        return /*#__PURE__*/React.createElement(_dropdown["default"], Object.assign({
          placement: "bottom"
        }, mergeDropDownProps), /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-overlay-link")
        }, breadcrumbItem, /*#__PURE__*/React.createElement(_DownOutlined["default"], null)));
      }
      return breadcrumbItem;
    };
    // wrap to dropDown
    var link = renderBreadcrumbNode(children);
    if (link !== undefined && link !== null) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", null, link), separator && /*#__PURE__*/React.createElement(_BreadcrumbSeparator["default"], null, separator));
    }
    return null;
  };
  var BreadcrumbItem = function BreadcrumbItem(props) {
    var customizePrefixCls = props.prefixCls,
      children = props.children,
      href = props.href,
      restProps = __rest(props, ["prefixCls", "children", "href"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
    return /*#__PURE__*/React.createElement(InternalBreadcrumbItem, Object.assign({}, restProps, {
      prefixCls: prefixCls
    }), (0, _useItemRender.renderItem)(prefixCls, restProps, children, href));
  };
  BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
  var _default = _exports["default"] = BreadcrumbItem;
});