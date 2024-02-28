function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "@ant-design/icons/es/icons/FileOutlined", "@ant-design/icons/es/icons/FolderOpenOutlined", "@ant-design/icons/es/icons/FolderOutlined", "classnames", "rc-tree/es/util", "rc-tree/es/utils/treeUtil", "antd4mx/config-provider", "antd4mx/tree/Tree", "antd4mx/tree/utils/dictUtil"], function (_exports, _toConsumableArray2, React, _FileOutlined, _FolderOpenOutlined, _FolderOutlined, _classnames, _util, _treeUtil, _configProvider, _Tree, _dictUtil) {
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
  function getIcon(props) {
    var isLeaf = props.isLeaf,
      expanded = props.expanded;
    if (isLeaf) {
      return /*#__PURE__*/React.createElement(_FileOutlined["default"], null);
    }
    return expanded ? /*#__PURE__*/React.createElement(_FolderOpenOutlined["default"], null) : /*#__PURE__*/React.createElement(_FolderOutlined["default"], null);
  }
  function getTreeData(_ref) {
    var treeData = _ref.treeData,
      children = _ref.children;
    return treeData || (0, _treeUtil.convertTreeToData)(children);
  }
  var DirectoryTree = function DirectoryTree(_a, ref) {
    var defaultExpandAll = _a.defaultExpandAll,
      defaultExpandParent = _a.defaultExpandParent,
      defaultExpandedKeys = _a.defaultExpandedKeys,
      props = __rest(_a, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]);
    // Shift click usage
    var lastSelectedKey = React.useRef();
    var cachedSelectedKeys = React.useRef();
    var getInitExpandedKeys = function getInitExpandedKeys() {
      var _convertDataToEntitie = (0, _treeUtil.convertDataToEntities)(getTreeData(props)),
        keyEntities = _convertDataToEntitie.keyEntities;
      var initExpandedKeys;
      // Expanded keys
      if (defaultExpandAll) {
        initExpandedKeys = Object.keys(keyEntities);
      } else if (defaultExpandParent) {
        initExpandedKeys = (0, _util.conductExpandParent)(props.expandedKeys || defaultExpandedKeys || [], keyEntities);
      } else {
        initExpandedKeys = props.expandedKeys || defaultExpandedKeys;
      }
      return initExpandedKeys;
    };
    var _React$useState = React.useState(props.selectedKeys || props.defaultSelectedKeys || []),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedKeys = _React$useState2[0],
      setSelectedKeys = _React$useState2[1];
    var _React$useState3 = React.useState(function () {
        return getInitExpandedKeys();
      }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      expandedKeys = _React$useState4[0],
      setExpandedKeys = _React$useState4[1];
    React.useEffect(function () {
      if ('selectedKeys' in props) {
        setSelectedKeys(props.selectedKeys);
      }
    }, [props.selectedKeys]);
    React.useEffect(function () {
      if ('expandedKeys' in props) {
        setExpandedKeys(props.expandedKeys);
      }
    }, [props.expandedKeys]);
    var onExpand = function onExpand(keys, info) {
      var _a;
      if (!('expandedKeys' in props)) {
        setExpandedKeys(keys);
      }
      // Call origin function
      return (_a = props.onExpand) === null || _a === void 0 ? void 0 : _a.call(props, keys, info);
    };
    var onSelect = function onSelect(keys, event) {
      var _a;
      var multiple = props.multiple,
        fieldNames = props.fieldNames;
      var node = event.node,
        nativeEvent = event.nativeEvent;
      var _node$key = node.key,
        key = _node$key === void 0 ? '' : _node$key;
      var treeData = getTreeData(props);
      // const newState: DirectoryTreeState = {};
      // We need wrap this event since some value is not same
      var newEvent = Object.assign(Object.assign({}, event), {
        selected: true
      });
      // Windows / Mac single pick
      var ctrlPick = (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.ctrlKey) || (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.metaKey);
      var shiftPick = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.shiftKey;
      // Generate new selected keys
      var newSelectedKeys;
      if (multiple && ctrlPick) {
        // Control click
        newSelectedKeys = keys;
        lastSelectedKey.current = key;
        cachedSelectedKeys.current = newSelectedKeys;
        newEvent.selectedNodes = (0, _dictUtil.convertDirectoryKeysToNodes)(treeData, newSelectedKeys, fieldNames);
      } else if (multiple && shiftPick) {
        // Shift click
        newSelectedKeys = Array.from(new Set([].concat((0, _toConsumableArray2["default"])(cachedSelectedKeys.current || []), (0, _toConsumableArray2["default"])((0, _dictUtil.calcRangeKeys)({
          treeData: treeData,
          expandedKeys: expandedKeys,
          startKey: key,
          endKey: lastSelectedKey.current,
          fieldNames: fieldNames
        })))));
        newEvent.selectedNodes = (0, _dictUtil.convertDirectoryKeysToNodes)(treeData, newSelectedKeys, fieldNames);
      } else {
        // Single click
        newSelectedKeys = [key];
        lastSelectedKey.current = key;
        cachedSelectedKeys.current = newSelectedKeys;
        newEvent.selectedNodes = (0, _dictUtil.convertDirectoryKeysToNodes)(treeData, newSelectedKeys, fieldNames);
      }
      (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, newSelectedKeys, newEvent);
      if (!('selectedKeys' in props)) {
        setSelectedKeys(newSelectedKeys);
      }
    };
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      _props$showIcon = props.showIcon,
      showIcon = _props$showIcon === void 0 ? true : _props$showIcon,
      _props$expandAction = props.expandAction,
      expandAction = _props$expandAction === void 0 ? 'click' : _props$expandAction,
      otherProps = __rest(props, ["prefixCls", "className", "showIcon", "expandAction"]);
    var prefixCls = getPrefixCls('tree', customizePrefixCls);
    var connectClassName = (0, _classnames["default"])("".concat(prefixCls, "-directory"), _defineProperty({}, "".concat(prefixCls, "-directory-rtl"), direction === 'rtl'), className);
    return /*#__PURE__*/React.createElement(_Tree["default"], Object.assign({
      icon: getIcon,
      ref: ref,
      blockNode: true
    }, otherProps, {
      showIcon: showIcon,
      expandAction: expandAction,
      prefixCls: prefixCls,
      className: connectClassName,
      expandedKeys: expandedKeys,
      selectedKeys: selectedKeys,
      onSelect: onSelect,
      onExpand: onExpand
    }));
  };
  var ForwardDirectoryTree = /*#__PURE__*/React.forwardRef(DirectoryTree);
  if (process.env.NODE_ENV !== 'production') {
    ForwardDirectoryTree.displayName = 'DirectoryTree';
  }
  var _default = _exports["default"] = ForwardDirectoryTree;
});