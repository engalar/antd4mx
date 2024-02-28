function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@ant-design/icons/es/icons/DeleteOutlined", "@ant-design/icons/es/icons/DownloadOutlined", "@ant-design/icons/es/icons/EyeOutlined", "classnames", "rc-motion", "react", "antd4mx/config-provider", "antd4mx/progress", "antd4mx/tooltip"], function (_exports, _DeleteOutlined, _DownloadOutlined, _EyeOutlined, _classnames, _rcMotion, React, _configProvider, _progress, _tooltip) {
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
  var ListItem = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
    var prefixCls = _ref.prefixCls,
      className = _ref.className,
      style = _ref.style,
      locale = _ref.locale,
      listType = _ref.listType,
      file = _ref.file,
      items = _ref.items,
      progressProps = _ref.progress,
      iconRender = _ref.iconRender,
      actionIconRender = _ref.actionIconRender,
      itemRender = _ref.itemRender,
      isImgUrl = _ref.isImgUrl,
      showPreviewIcon = _ref.showPreviewIcon,
      showRemoveIcon = _ref.showRemoveIcon,
      showDownloadIcon = _ref.showDownloadIcon,
      customPreviewIcon = _ref.previewIcon,
      customRemoveIcon = _ref.removeIcon,
      customDownloadIcon = _ref.downloadIcon,
      onPreview = _ref.onPreview,
      onDownload = _ref.onDownload,
      onClose = _ref.onClose;
    var _a, _b;
    // Status: which will ignore `removed` status
    var status = file.status;
    var _React$useState = React.useState(status),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mergedStatus = _React$useState2[0],
      setMergedStatus = _React$useState2[1];
    React.useEffect(function () {
      if (status !== 'removed') {
        setMergedStatus(status);
      }
    }, [status]);
    // Delay to show the progress bar
    var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showProgress = _React$useState4[0],
      setShowProgress = _React$useState4[1];
    React.useEffect(function () {
      var timer = setTimeout(function () {
        setShowProgress(true);
      }, 300);
      return function () {
        clearTimeout(timer);
      };
    }, []);
    var iconNode = iconRender(file);
    var icon = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-icon")
    }, iconNode);
    if (listType === 'picture' || listType === 'picture-card' || listType === 'picture-circle') {
      if (mergedStatus === 'uploading' || !file.thumbUrl && !file.url) {
        var uploadingClassName = (0, _classnames["default"])("".concat(prefixCls, "-list-item-thumbnail"), _defineProperty({}, "".concat(prefixCls, "-list-item-file"), mergedStatus !== 'uploading'));
        icon = /*#__PURE__*/React.createElement("div", {
          className: uploadingClassName
        }, iconNode);
      } else {
        var thumbnail = (isImgUrl === null || isImgUrl === void 0 ? void 0 : isImgUrl(file)) ? ( /*#__PURE__*/React.createElement("img", {
          src: file.thumbUrl || file.url,
          alt: file.name,
          className: "".concat(prefixCls, "-list-item-image"),
          crossOrigin: file.crossOrigin
        })) : iconNode;
        var aClassName = (0, _classnames["default"])("".concat(prefixCls, "-list-item-thumbnail"), _defineProperty({}, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)));
        icon = /*#__PURE__*/React.createElement("a", {
          className: aClassName,
          onClick: function onClick(e) {
            return onPreview(file, e);
          },
          href: file.url || file.thumbUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        }, thumbnail);
      }
    }
    var listItemClassName = (0, _classnames["default"])("".concat(prefixCls, "-list-item"), "".concat(prefixCls, "-list-item-").concat(mergedStatus));
    var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
    var removeIcon = showRemoveIcon ? actionIconRender((typeof customRemoveIcon === 'function' ? customRemoveIcon(file) : customRemoveIcon) || ( /*#__PURE__*/React.createElement(_DeleteOutlined["default"], null)), function () {
      return onClose(file);
    }, prefixCls, locale.removeFile,
    // acceptUploadDisabled is true, only remove icon will follow Upload disabled prop
    // https://github.com/ant-design/ant-design/issues/46171
    true) : null;
    var downloadIcon = showDownloadIcon && mergedStatus === 'done' ? actionIconRender((typeof customDownloadIcon === 'function' ? customDownloadIcon(file) : customDownloadIcon) || /*#__PURE__*/React.createElement(_DownloadOutlined["default"], null), function () {
      return onDownload(file);
    }, prefixCls, locale.downloadFile) : null;
    var downloadOrDelete = listType !== 'picture-card' && listType !== 'picture-circle' && ( /*#__PURE__*/React.createElement("span", {
      key: "download-delete",
      className: (0, _classnames["default"])("".concat(prefixCls, "-list-item-actions"), {
        picture: listType === 'picture'
      })
    }, downloadIcon, removeIcon));
    var listItemNameClass = (0, _classnames["default"])("".concat(prefixCls, "-list-item-name"));
    var fileName = file.url ? [/*#__PURE__*/React.createElement("a", Object.assign({
      key: "view",
      target: "_blank",
      rel: "noopener noreferrer",
      className: listItemNameClass,
      title: file.name
    }, linkProps, {
      href: file.url,
      onClick: function onClick(e) {
        return onPreview(file, e);
      }
    }), file.name), downloadOrDelete] : [/*#__PURE__*/React.createElement("span", {
      key: "view",
      className: listItemNameClass,
      onClick: function onClick(e) {
        return onPreview(file, e);
      },
      title: file.name
    }, file.name), downloadOrDelete];
    var previewIcon = showPreviewIcon && (file.url || file.thumbUrl) ? ( /*#__PURE__*/React.createElement("a", {
      href: file.url || file.thumbUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: function onClick(e) {
        return onPreview(file, e);
      },
      title: locale.previewFile
    }, typeof customPreviewIcon === 'function' ? customPreviewIcon(file) : customPreviewIcon || /*#__PURE__*/React.createElement(_EyeOutlined["default"], null))) : null;
    var pictureCardActions = (listType === 'picture-card' || listType === 'picture-circle') && mergedStatus !== 'uploading' && ( /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-list-item-actions")
    }, previewIcon, mergedStatus === 'done' && downloadIcon, removeIcon));
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var rootPrefixCls = getPrefixCls();
    var dom = /*#__PURE__*/React.createElement("div", {
      className: listItemClassName
    }, icon, fileName, pictureCardActions, showProgress && ( /*#__PURE__*/React.createElement(_rcMotion["default"], {
      motionName: "".concat(rootPrefixCls, "-fade"),
      visible: mergedStatus === 'uploading',
      motionDeadline: 2000
    }, function (_ref2) {
      var motionClassName = _ref2.className;
      // show loading icon if upload progress listener is disabled
      var loadingProgress = 'percent' in file ? ( /*#__PURE__*/React.createElement(_progress["default"], Object.assign({}, progressProps, {
        type: "line",
        percent: file.percent,
        "aria-label": file['aria-label'],
        "aria-labelledby": file['aria-labelledby']
      }))) : null;
      return /*#__PURE__*/React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-list-item-progress"), motionClassName)
      }, loadingProgress);
    })));
    var message = file.response && typeof file.response === 'string' ? file.response : ((_a = file.error) === null || _a === void 0 ? void 0 : _a.statusText) || ((_b = file.error) === null || _b === void 0 ? void 0 : _b.message) || locale.uploadError;
    var item = mergedStatus === 'error' ? ( /*#__PURE__*/React.createElement(_tooltip["default"], {
      title: message,
      getPopupContainer: function getPopupContainer(node) {
        return node.parentNode;
      }
    }, dom)) : dom;
    return /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-list-item-container"), className),
      style: style,
      ref: ref
    }, itemRender ? itemRender(item, file, items, {
      download: onDownload.bind(null, file),
      preview: onPreview.bind(null, file),
      remove: onClose.bind(null, file)
    }) : item);
  });
  var _default = _exports["default"] = ListItem;
});