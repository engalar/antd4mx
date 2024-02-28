define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "@ant-design/icons/es/icons/FileTwoTone", "@ant-design/icons/es/icons/LoadingOutlined", "@ant-design/icons/es/icons/PaperClipOutlined", "@ant-design/icons/es/icons/PictureTwoTone", "classnames", "rc-motion", "antd4mx/_util/hooks/useForceUpdate", "antd4mx/_util/motion", "antd4mx/_util/reactNode", "antd4mx/button/index", "antd4mx/config-provider/index", "antd4mx/upload/utils", "antd4mx/upload/UploadList/ListItem"], function (_exports, _toConsumableArray2, React, _FileTwoTone, _LoadingOutlined, _PaperClipOutlined, _PictureTwoTone, _classnames, _rcMotion, _useForceUpdate, _motion, _reactNode, _index, _index2, _utils, _ListItem) {
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
  var InternalUploadList = function InternalUploadList(props, ref) {
    var _props$listType = props.listType,
      listType = _props$listType === void 0 ? 'text' : _props$listType,
      _props$previewFile = props.previewFile,
      previewFile = _props$previewFile === void 0 ? _utils.previewImage : _props$previewFile,
      onPreview = props.onPreview,
      onDownload = props.onDownload,
      onRemove = props.onRemove,
      locale = props.locale,
      iconRender = props.iconRender,
      _props$isImageUrl = props.isImageUrl,
      isImgUrl = _props$isImageUrl === void 0 ? _utils.isImageUrl : _props$isImageUrl,
      customizePrefixCls = props.prefixCls,
      _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      _props$showPreviewIco = props.showPreviewIcon,
      showPreviewIcon = _props$showPreviewIco === void 0 ? true : _props$showPreviewIco,
      _props$showRemoveIcon = props.showRemoveIcon,
      showRemoveIcon = _props$showRemoveIcon === void 0 ? true : _props$showRemoveIcon,
      _props$showDownloadIc = props.showDownloadIcon,
      showDownloadIcon = _props$showDownloadIc === void 0 ? false : _props$showDownloadIc,
      removeIcon = props.removeIcon,
      previewIcon = props.previewIcon,
      downloadIcon = props.downloadIcon,
      _props$progress = props.progress,
      progress = _props$progress === void 0 ? {
        size: [-1, 2],
        showInfo: false
      } : _props$progress,
      appendAction = props.appendAction,
      _props$appendActionVi = props.appendActionVisible,
      appendActionVisible = _props$appendActionVi === void 0 ? true : _props$appendActionVi,
      itemRender = props.itemRender,
      disabled = props.disabled;
    var forceUpdate = (0, _useForceUpdate["default"])();
    var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      motionAppear = _React$useState2[0],
      setMotionAppear = _React$useState2[1];
    // ============================= Effect =============================
    React.useEffect(function () {
      if (listType !== 'picture' && listType !== 'picture-card' && listType !== 'picture-circle') {
        return;
      }
      (items || []).forEach(function (file) {
        if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
          return;
        }
        file.thumbUrl = '';
        if (previewFile) {
          previewFile(file.originFileObj).then(function (previewDataUrl) {
            // Need append '' to avoid dead loop
            file.thumbUrl = previewDataUrl || '';
            forceUpdate();
          });
        }
      });
    }, [listType, items, previewFile]);
    React.useEffect(function () {
      setMotionAppear(true);
    }, []);
    // ============================= Events =============================
    var onInternalPreview = function onInternalPreview(file, e) {
      if (!onPreview) {
        return;
      }
      e === null || e === void 0 ? void 0 : e.preventDefault();
      return onPreview(file);
    };
    var onInternalDownload = function onInternalDownload(file) {
      if (typeof onDownload === 'function') {
        onDownload(file);
      } else if (file.url) {
        window.open(file.url);
      }
    };
    var onInternalClose = function onInternalClose(file) {
      onRemove === null || onRemove === void 0 ? void 0 : onRemove(file);
    };
    var internalIconRender = function internalIconRender(file) {
      if (iconRender) {
        return iconRender(file, listType);
      }
      var isLoading = file.status === 'uploading';
      var fileIcon = isImgUrl && isImgUrl(file) ? /*#__PURE__*/React.createElement(_PictureTwoTone["default"], null) : /*#__PURE__*/React.createElement(_FileTwoTone["default"], null);
      var icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null) : /*#__PURE__*/React.createElement(_PaperClipOutlined["default"], null);
      if (listType === 'picture') {
        icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null) : fileIcon;
      } else if (listType === 'picture-card' || listType === 'picture-circle') {
        icon = isLoading ? locale.uploading : fileIcon;
      }
      return icon;
    };
    var actionIconRender = function actionIconRender(customIcon, callback, prefixCls, title, acceptUploadDisabled) {
      var btnProps = {
        type: 'text',
        size: 'small',
        title: title,
        onClick: function onClick(e) {
          callback();
          if ((0, _reactNode.isValidElement)(customIcon) && customIcon.props.onClick) {
            customIcon.props.onClick(e);
          }
        },
        className: "".concat(prefixCls, "-list-item-action")
      };
      if (acceptUploadDisabled) {
        btnProps.disabled = disabled;
      }
      if ((0, _reactNode.isValidElement)(customIcon)) {
        var btnIcon = (0, _reactNode.cloneElement)(customIcon, Object.assign(Object.assign({}, customIcon.props), {
          onClick: function onClick() {}
        }));
        return /*#__PURE__*/React.createElement(_index["default"], Object.assign({}, btnProps, {
          icon: btnIcon
        }));
      }
      return /*#__PURE__*/React.createElement(_index["default"], Object.assign({}, btnProps), /*#__PURE__*/React.createElement("span", null, customIcon));
    };
    // ============================== Ref ===============================
    // Test needs
    React.useImperativeHandle(ref, function () {
      return {
        handlePreview: onInternalPreview,
        handleDownload: onInternalDownload
      };
    });
    var _React$useContext = React.useContext(_index2.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    // ============================= Render =============================
    var prefixCls = getPrefixCls('upload', customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    var listClassNames = (0, _classnames["default"])("".concat(prefixCls, "-list"), "".concat(prefixCls, "-list-").concat(listType));
    // >>> Motion config
    var motionKeyList = (0, _toConsumableArray2["default"])(items.map(function (file) {
      return {
        key: file.uid,
        file: file
      };
    }));
    var animationDirection = listType === 'picture-card' || listType === 'picture-circle' ? 'animate-inline' : 'animate';
    // const transitionName = list.length === 0 ? '' : `${prefixCls}-${animationDirection}`;
    var motionConfig = {
      motionDeadline: 2000,
      motionName: "".concat(prefixCls, "-").concat(animationDirection),
      keys: motionKeyList,
      motionAppear: motionAppear
    };
    var listItemMotion = React.useMemo(function () {
      var motion = Object.assign({}, (0, _motion["default"])(rootPrefixCls));
      delete motion.onAppearEnd;
      delete motion.onEnterEnd;
      delete motion.onLeaveEnd;
      return motion;
    }, [rootPrefixCls]);
    if (listType !== 'picture-card' && listType !== 'picture-circle') {
      motionConfig = Object.assign(Object.assign({}, listItemMotion), motionConfig);
    }
    return /*#__PURE__*/React.createElement("div", {
      className: listClassNames
    }, /*#__PURE__*/React.createElement(_rcMotion.CSSMotionList, Object.assign({}, motionConfig, {
      component: false
    }), function (_ref) {
      var key = _ref.key,
        file = _ref.file,
        motionClassName = _ref.className,
        motionStyle = _ref.style;
      return /*#__PURE__*/React.createElement(_ListItem["default"], {
        key: key,
        locale: locale,
        prefixCls: prefixCls,
        className: motionClassName,
        style: motionStyle,
        file: file,
        items: items,
        progress: progress,
        listType: listType,
        isImgUrl: isImgUrl,
        showPreviewIcon: showPreviewIcon,
        showRemoveIcon: showRemoveIcon,
        showDownloadIcon: showDownloadIcon,
        removeIcon: removeIcon,
        previewIcon: previewIcon,
        downloadIcon: downloadIcon,
        iconRender: internalIconRender,
        actionIconRender: actionIconRender,
        itemRender: itemRender,
        onPreview: onInternalPreview,
        onDownload: onInternalDownload,
        onClose: onInternalClose
      });
    }), appendAction && ( /*#__PURE__*/React.createElement(_rcMotion["default"], Object.assign({}, motionConfig, {
      visible: appendActionVisible,
      forceRender: true
    }), function (_ref2) {
      var motionClassName = _ref2.className,
        motionStyle = _ref2.style;
      return (0, _reactNode.cloneElement)(appendAction, function (oriProps) {
        return {
          className: (0, _classnames["default"])(oriProps.className, motionClassName),
          style: Object.assign(Object.assign(Object.assign({}, motionStyle), {
            // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
            pointerEvents: motionClassName ? 'none' : undefined
          }), oriProps.style)
        };
      });
    })));
  };
  var UploadList = /*#__PURE__*/React.forwardRef(InternalUploadList);
  if (process.env.NODE_ENV !== 'production') {
    UploadList.displayName = 'UploadList';
  }
  var _default = _exports["default"] = UploadList;
});