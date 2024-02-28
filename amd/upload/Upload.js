define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "react-dom", "classnames", "rc-upload", "rc-util/es/hooks/useMergedState", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/config-provider/DisabledContext", "antd4mx/locale", "antd4mx/locale/en_US", "antd4mx/upload/style", "antd4mx/upload/UploadList", "antd4mx/upload/utils"], function (_exports, _toConsumableArray2, React, _reactDom, _classnames, _rcUpload, _useMergedState3, _warning, _configProvider, _DisabledContext, _locale, _en_US, _style, _UploadList, _utils) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.LIST_IGNORE = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var LIST_IGNORE = _exports.LIST_IGNORE = "__LIST_IGNORE_".concat(Date.now(), "__");
  var InternalUpload = function InternalUpload(props, ref) {
    var fileList = props.fileList,
      defaultFileList = props.defaultFileList,
      onRemove = props.onRemove,
      _props$showUploadList = props.showUploadList,
      showUploadList = _props$showUploadList === void 0 ? true : _props$showUploadList,
      _props$listType = props.listType,
      listType = _props$listType === void 0 ? 'text' : _props$listType,
      onPreview = props.onPreview,
      onDownload = props.onDownload,
      onChange = props.onChange,
      onDrop = props.onDrop,
      previewFile = props.previewFile,
      customDisabled = props.disabled,
      propLocale = props.locale,
      iconRender = props.iconRender,
      isImageUrl = props.isImageUrl,
      progress = props.progress,
      customizePrefixCls = props.prefixCls,
      className = props.className,
      _props$type = props.type,
      type = _props$type === void 0 ? 'select' : _props$type,
      children = props.children,
      style = props.style,
      itemRender = props.itemRender,
      maxCount = props.maxCount,
      _props$data = props.data,
      data = _props$data === void 0 ? {} : _props$data,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$hasControlInsi = props.hasControlInside,
      hasControlInside = _props$hasControlInsi === void 0 ? true : _props$hasControlInsi,
      _props$action = props.action,
      action = _props$action === void 0 ? '' : _props$action,
      _props$accept = props.accept,
      accept = _props$accept === void 0 ? '' : _props$accept,
      _props$supportServerR = props.supportServerRender,
      supportServerRender = _props$supportServerR === void 0 ? true : _props$supportServerR,
      rootClassName = props.rootClassName;
    // ===================== Disabled =====================
    var disabled = React.useContext(_DisabledContext["default"]);
    var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    var _useMergedState = (0, _useMergedState3["default"])(defaultFileList || [], {
        value: fileList,
        postState: function postState(list) {
          return list !== null && list !== void 0 ? list : [];
        }
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedFileList = _useMergedState2[0],
      setMergedFileList = _useMergedState2[1];
    var _React$useState = React.useState('drop'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dragState = _React$useState2[0],
      setDragState = _React$useState2[1];
    var upload = React.useRef(null);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Upload');
      process.env.NODE_ENV !== "production" ? warning('fileList' in props || !('value' in props), 'usage', '`value` is not a valid prop, do you mean `fileList`?') : void 0;
      warning.deprecated(!('transformFile' in props), 'transformFile', 'beforeUpload');
    }
    // Control mode will auto fill file uid if not provided
    React.useMemo(function () {
      var timestamp = Date.now();
      (fileList || []).forEach(function (file, index) {
        if (!file.uid && !Object.isFrozen(file)) {
          file.uid = "__AUTO__".concat(timestamp, "_").concat(index, "__");
        }
      });
    }, [fileList]);
    var onInternalChange = function onInternalChange(file, changedFileList, event) {
      var cloneList = (0, _toConsumableArray2["default"])(changedFileList);
      var exceedMaxCount = false;
      // Cut to match count
      if (maxCount === 1) {
        cloneList = cloneList.slice(-1);
      } else if (maxCount) {
        exceedMaxCount = cloneList.length > maxCount;
        cloneList = cloneList.slice(0, maxCount);
      }
      // Prevent React18 auto batch since input[upload] trigger process at same time
      // which makes fileList closure problem
      (0, _reactDom.flushSync)(function () {
        setMergedFileList(cloneList);
      });
      var changeInfo = {
        file: file,
        fileList: cloneList
      };
      if (event) {
        changeInfo.event = event;
      }
      if (!exceedMaxCount ||
      // We should ignore event if current file is exceed `maxCount`
      cloneList.some(function (f) {
        return f.uid === file.uid;
      })) {
        (0, _reactDom.flushSync)(function () {
          onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo);
        });
      }
    };
    var mergedBeforeUpload = function mergedBeforeUpload(file, fileListArgs) {
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var beforeUpload, transformFile, parsedFile, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              beforeUpload = props.beforeUpload, transformFile = props.transformFile;
              parsedFile = file;
              if (!beforeUpload) {
                _context.next = 13;
                break;
              }
              _context.next = 5;
              return beforeUpload(file, fileListArgs);
            case 5:
              result = _context.sent;
              if (!(result === false)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return", false);
            case 8:
              // Hack for LIST_IGNORE, we add additional info to remove from the list
              delete file[LIST_IGNORE];
              if (!(result === LIST_IGNORE)) {
                _context.next = 12;
                break;
              }
              Object.defineProperty(file, LIST_IGNORE, {
                value: true,
                configurable: true
              });
              return _context.abrupt("return", false);
            case 12:
              if (_typeof(result) === 'object' && result) {
                parsedFile = result;
              }
            case 13:
              if (!transformFile) {
                _context.next = 17;
                break;
              }
              _context.next = 16;
              return transformFile(parsedFile);
            case 16:
              parsedFile = _context.sent;
            case 17:
              return _context.abrupt("return", parsedFile);
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
    };
    var onBatchStart = function onBatchStart(batchFileInfoList) {
      // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
      var filteredFileInfoList = batchFileInfoList.filter(function (info) {
        return !info.file[LIST_IGNORE];
      });
      // Nothing to do since no file need upload
      if (!filteredFileInfoList.length) {
        return;
      }
      var objectFileList = filteredFileInfoList.map(function (info) {
        return (0, _utils.file2Obj)(info.file);
      });
      // Concat new files with prev files
      var newFileList = (0, _toConsumableArray2["default"])(mergedFileList);
      objectFileList.forEach(function (fileObj) {
        // Replace file if exist
        newFileList = (0, _utils.updateFileList)(fileObj, newFileList);
      });
      objectFileList.forEach(function (fileObj, index) {
        // Repeat trigger `onChange` event for compatible
        var triggerFileObj = fileObj;
        if (!filteredFileInfoList[index].parsedFile) {
          // `beforeUpload` return false
          var originFileObj = fileObj.originFileObj;
          var clone;
          try {
            clone = new File([originFileObj], originFileObj.name, {
              type: originFileObj.type
            });
          } catch (e) {
            clone = new Blob([originFileObj], {
              type: originFileObj.type
            });
            clone.name = originFileObj.name;
            clone.lastModifiedDate = new Date();
            clone.lastModified = new Date().getTime();
          }
          clone.uid = fileObj.uid;
          triggerFileObj = clone;
        } else {
          // Inject `uploading` status
          fileObj.status = 'uploading';
        }
        onInternalChange(triggerFileObj, newFileList);
      });
    };
    var onSuccess = function onSuccess(response, file, xhr) {
      try {
        if (typeof response === 'string') {
          response = JSON.parse(response);
        }
      } catch (e) {
        /* do nothing */
      }
      // removed
      if (!(0, _utils.getFileItem)(file, mergedFileList)) {
        return;
      }
      var targetItem = (0, _utils.file2Obj)(file);
      targetItem.status = 'done';
      targetItem.percent = 100;
      targetItem.response = response;
      targetItem.xhr = xhr;
      var nextFileList = (0, _utils.updateFileList)(targetItem, mergedFileList);
      onInternalChange(targetItem, nextFileList);
    };
    var onProgress = function onProgress(e, file) {
      // removed
      if (!(0, _utils.getFileItem)(file, mergedFileList)) {
        return;
      }
      var targetItem = (0, _utils.file2Obj)(file);
      targetItem.status = 'uploading';
      targetItem.percent = e.percent;
      var nextFileList = (0, _utils.updateFileList)(targetItem, mergedFileList);
      onInternalChange(targetItem, nextFileList, e);
    };
    var onError = function onError(error, response, file) {
      // removed
      if (!(0, _utils.getFileItem)(file, mergedFileList)) {
        return;
      }
      var targetItem = (0, _utils.file2Obj)(file);
      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = 'error';
      var nextFileList = (0, _utils.updateFileList)(targetItem, mergedFileList);
      onInternalChange(targetItem, nextFileList);
    };
    var handleRemove = function handleRemove(file) {
      var currentFile;
      Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
        var _a;
        // Prevent removing file
        if (ret === false) {
          return;
        }
        var removedFileList = (0, _utils.removeFileItem)(file, mergedFileList);
        if (removedFileList) {
          currentFile = Object.assign(Object.assign({}, file), {
            status: 'removed'
          });
          mergedFileList === null || mergedFileList === void 0 ? void 0 : mergedFileList.forEach(function (item) {
            var matchKey = currentFile.uid !== undefined ? 'uid' : 'name';
            if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
              item.status = 'removed';
            }
          });
          (_a = upload.current) === null || _a === void 0 ? void 0 : _a.abort(currentFile);
          onInternalChange(currentFile, removedFileList);
        }
      });
    };
    var onFileDrop = function onFileDrop(e) {
      setDragState(e.type);
      if (e.type === 'drop') {
        onDrop === null || onDrop === void 0 ? void 0 : onDrop(e);
      }
    };
    // Test needs
    React.useImperativeHandle(ref, function () {
      return {
        onBatchStart: onBatchStart,
        onSuccess: onSuccess,
        onProgress: onProgress,
        onError: onError,
        fileList: mergedFileList,
        upload: upload.current
      };
    });
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      ctxUpload = _React$useContext.upload;
    var prefixCls = getPrefixCls('upload', customizePrefixCls);
    var rcUploadProps = Object.assign(Object.assign({
      onBatchStart: onBatchStart,
      onError: onError,
      onProgress: onProgress,
      onSuccess: onSuccess
    }, props), {
      data: data,
      multiple: multiple,
      action: action,
      accept: accept,
      supportServerRender: supportServerRender,
      prefixCls: prefixCls,
      disabled: mergedDisabled,
      beforeUpload: mergedBeforeUpload,
      onChange: undefined,
      hasControlInside: hasControlInside
    });
    delete rcUploadProps.className;
    delete rcUploadProps.style;
    // Remove id to avoid open by label when trigger is hidden
    // !children: https://github.com/ant-design/ant-design/issues/14298
    // disabled: https://github.com/ant-design/ant-design/issues/16478
    //           https://github.com/ant-design/ant-design/issues/24197
    if (!children || mergedDisabled) {
      delete rcUploadProps.id;
    }
    var wrapperCls = "".concat(prefixCls, "-wrapper");
    var _useStyle = (0, _style["default"])(prefixCls, wrapperCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var _useLocale = (0, _locale.useLocale)('Upload', _en_US["default"].Upload),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      contextLocale = _useLocale2[0];
    var _ref = typeof showUploadList === 'boolean' ? {} : showUploadList,
      showRemoveIcon = _ref.showRemoveIcon,
      showPreviewIcon = _ref.showPreviewIcon,
      showDownloadIcon = _ref.showDownloadIcon,
      removeIcon = _ref.removeIcon,
      previewIcon = _ref.previewIcon,
      downloadIcon = _ref.downloadIcon;
    // use showRemoveIcon if it is specified explicitly
    var realShowRemoveIcon = typeof showRemoveIcon === 'undefined' ? !mergedDisabled : !!showRemoveIcon;
    var renderUploadList = function renderUploadList(button, buttonVisible) {
      if (!showUploadList) {
        return button;
      }
      return /*#__PURE__*/React.createElement(_UploadList["default"], {
        prefixCls: prefixCls,
        listType: listType,
        items: mergedFileList,
        previewFile: previewFile,
        onPreview: onPreview,
        onDownload: onDownload,
        onRemove: handleRemove,
        showRemoveIcon: realShowRemoveIcon,
        showPreviewIcon: showPreviewIcon,
        showDownloadIcon: showDownloadIcon,
        removeIcon: removeIcon,
        previewIcon: previewIcon,
        downloadIcon: downloadIcon,
        iconRender: iconRender,
        locale: Object.assign(Object.assign({}, contextLocale), propLocale),
        isImageUrl: isImageUrl,
        progress: progress,
        appendAction: button,
        appendActionVisible: buttonVisible,
        itemRender: itemRender,
        disabled: mergedDisabled
      });
    };
    var mergedCls = (0, _classnames["default"])(wrapperCls, className, rootClassName, hashId, cssVarCls, ctxUpload === null || ctxUpload === void 0 ? void 0 : ctxUpload.className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-picture-card-wrapper"), listType === 'picture-card'), "".concat(prefixCls, "-picture-circle-wrapper"), listType === 'picture-circle'));
    var mergedStyle = Object.assign(Object.assign({}, ctxUpload === null || ctxUpload === void 0 ? void 0 : ctxUpload.style), style);
    if (type === 'drag') {
      var dragCls = (0, _classnames["default"])(hashId, prefixCls, "".concat(prefixCls, "-drag"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-drag-uploading"), mergedFileList.some(function (file) {
        return file.status === 'uploading';
      })), "".concat(prefixCls, "-drag-hover"), dragState === 'dragover'), "".concat(prefixCls, "-disabled"), mergedDisabled), "".concat(prefixCls, "-rtl"), direction === 'rtl'));
      return wrapCSSVar( /*#__PURE__*/React.createElement("span", {
        className: mergedCls
      }, /*#__PURE__*/React.createElement("div", {
        className: dragCls,
        style: mergedStyle,
        onDrop: onFileDrop,
        onDragOver: onFileDrop,
        onDragLeave: onFileDrop
      }, /*#__PURE__*/React.createElement(_rcUpload["default"], Object.assign({}, rcUploadProps, {
        ref: upload,
        className: "".concat(prefixCls, "-btn")
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-drag-container")
      }, children))), renderUploadList()));
    }
    var uploadButtonCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-select"), _defineProperty({}, "".concat(prefixCls, "-disabled"), mergedDisabled));
    var uploadButton = /*#__PURE__*/React.createElement("div", {
      className: uploadButtonCls,
      style: children ? undefined : {
        display: 'none'
      }
    }, /*#__PURE__*/React.createElement(_rcUpload["default"], Object.assign({}, rcUploadProps, {
      ref: upload
    })));
    if (listType === 'picture-card' || listType === 'picture-circle') {
      return wrapCSSVar( /*#__PURE__*/React.createElement("span", {
        className: mergedCls
      }, renderUploadList(uploadButton, !!children)));
    }
    return wrapCSSVar( /*#__PURE__*/React.createElement("span", {
      className: mergedCls
    }, uploadButton, renderUploadList()));
  };
  var Upload = /*#__PURE__*/React.forwardRef(InternalUpload);
  if (process.env.NODE_ENV !== 'production') {
    Upload.displayName = 'Upload';
  }
  var _default = _exports["default"] = Upload;
});