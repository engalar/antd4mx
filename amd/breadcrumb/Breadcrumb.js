function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/Children/toArray", "rc-util/es/pickAttrs", "antd4mx/_util/reactNode", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/breadcrumb/BreadcrumbItem", "antd4mx/breadcrumb/BreadcrumbSeparator", "antd4mx/breadcrumb/style", "antd4mx/breadcrumb/useItemRender", "antd4mx/breadcrumb/useItems"], function (_exports, React, _classnames, _toArray, _pickAttrs, _reactNode, _warning, _configProvider, _BreadcrumbItem, _BreadcrumbSeparator, _style, _useItemRender, _useItems) {
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
  var getPath = function getPath(params, path) {
    if (path === undefined) {
      return path;
    }
    var mergedPath = (path || '').replace(/^\//, '');
    Object.keys(params).forEach(function (key) {
      mergedPath = mergedPath.replace(":".concat(key), params[key]);
    });
    return mergedPath;
  };
  var Breadcrumb = function Breadcrumb(props) {
    var customizePrefixCls = props.prefixCls,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? '/' : _props$separator,
      style = props.style,
      className = props.className,
      rootClassName = props.rootClassName,
      legacyRoutes = props.routes,
      items = props.items,
      children = props.children,
      itemRender = props.itemRender,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      restProps = __rest(props, ["prefixCls", "separator", "style", "className", "rootClassName", "routes", "items", "children", "itemRender", "params"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      breadcrumb = _React$useContext.breadcrumb;
    var crumbs;
    var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mergedItems = (0, _useItems["default"])(items, legacyRoutes);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Breadcrumb');
      warning.deprecated(!legacyRoutes, 'routes', 'items');
      // Deprecated warning for breadcrumb children
      if (!mergedItems || mergedItems.length === 0) {
        var childList = (0, _toArray["default"])(children);
        warning.deprecated(childList.length === 0, 'Breadcrumb.Item and Breadcrumb.Separator', 'items');
        childList.forEach(function (element) {
          if (element) {
            process.env.NODE_ENV !== "production" ? warning(element.type && (element.type.__ANT_BREADCRUMB_ITEM === true || element.type.__ANT_BREADCRUMB_SEPARATOR === true), 'usage', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children") : void 0;
          }
        });
      }
    }
    var mergedItemRender = (0, _useItemRender["default"])(prefixCls, itemRender);
    if (mergedItems && mergedItems.length > 0) {
      // generated by route
      var paths = [];
      var itemRenderRoutes = items || legacyRoutes;
      crumbs = mergedItems.map(function (item, index) {
        var path = item.path,
          key = item.key,
          type = item.type,
          menu = item.menu,
          overlay = item.overlay,
          onClick = item.onClick,
          itemClassName = item.className,
          itemSeparator = item.separator,
          dropdownProps = item.dropdownProps;
        var mergedPath = getPath(params, path);
        if (mergedPath !== undefined) {
          paths.push(mergedPath);
        }
        var mergedKey = key !== null && key !== void 0 ? key : index;
        if (type === 'separator') {
          return /*#__PURE__*/React.createElement(_BreadcrumbSeparator["default"], {
            key: mergedKey
          }, itemSeparator);
        }
        var itemProps = {};
        var isLastItem = index === mergedItems.length - 1;
        if (menu) {
          itemProps.menu = menu;
        } else if (overlay) {
          itemProps.overlay = overlay;
        }
        var href = item.href;
        if (paths.length && mergedPath !== undefined) {
          href = "#/".concat(paths.join('/'));
        }
        return /*#__PURE__*/React.createElement(_BreadcrumbItem.InternalBreadcrumbItem, Object.assign({
          key: mergedKey
        }, itemProps, (0, _pickAttrs["default"])(item, {
          data: true,
          aria: true
        }), {
          className: itemClassName,
          dropdownProps: dropdownProps,
          href: href,
          separator: isLastItem ? '' : separator,
          onClick: onClick,
          prefixCls: prefixCls
        }), mergedItemRender(item, params, itemRenderRoutes, paths, href));
      });
    } else if (children) {
      var childrenLength = (0, _toArray["default"])(children).length;
      crumbs = (0, _toArray["default"])(children).map(function (element, index) {
        if (!element) {
          return element;
        }
        var isLastItem = index === childrenLength - 1;
        return (0, _reactNode.cloneElement)(element, {
          separator: isLastItem ? '' : separator,
          key: index
        });
      });
    }
    var breadcrumbClassName = (0, _classnames["default"])(prefixCls, breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.className, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, hashId, cssVarCls);
    var mergedStyle = Object.assign(Object.assign({}, breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.style), style);
    return wrapCSSVar( /*#__PURE__*/React.createElement("nav", Object.assign({
      className: breadcrumbClassName,
      style: mergedStyle
    }, restProps), /*#__PURE__*/React.createElement("ol", null, crumbs)));
  };
  Breadcrumb.Item = _BreadcrumbItem["default"];
  Breadcrumb.Separator = _BreadcrumbSeparator["default"];
  if (process.env.NODE_ENV !== 'production') {
    Breadcrumb.displayName = 'Breadcrumb';
  }
  var _default = _exports["default"] = Breadcrumb;
});