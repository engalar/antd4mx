define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "antd4mx/_util/hooks/usePatchElement", "antd4mx/modal/confirm", "antd4mx/modal/destroyFns", "antd4mx/modal/useModal/HookModal"], function (_exports, _toConsumableArray2, React, _usePatchElement3, _confirm, _destroyFns, _HookModal) {
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
  var uuid = 0;
  var ElementsHolder = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (_props, ref) {
    var _usePatchElement = (0, _usePatchElement3["default"])(),
      _usePatchElement2 = _slicedToArray(_usePatchElement, 2),
      elements = _usePatchElement2[0],
      patchElement = _usePatchElement2[1];
    React.useImperativeHandle(ref, function () {
      return {
        patchElement: patchElement
      };
    }, []);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return /*#__PURE__*/React.createElement(React.Fragment, null, elements);
  }));
  function useModal() {
    var holderRef = React.useRef(null);
    // ========================== Effect ==========================
    var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      actionQueue = _React$useState2[0],
      setActionQueue = _React$useState2[1];
    React.useEffect(function () {
      if (actionQueue.length) {
        var cloneQueue = (0, _toConsumableArray2["default"])(actionQueue);
        cloneQueue.forEach(function (action) {
          action();
        });
        setActionQueue([]);
      }
    }, [actionQueue]);
    // =========================== Hook ===========================
    var getConfirmFunc = React.useCallback(function (withFunc) {
      return function hookConfirm(config) {
        var _a;
        uuid += 1;
        var modalRef = /*#__PURE__*/React.createRef();
        // Proxy to promise with `onClose`
        var resolvePromise;
        var promise = new Promise(function (resolve) {
          resolvePromise = resolve;
        });
        var silent = false;
        var closeFunc;
        var modal = /*#__PURE__*/React.createElement(_HookModal["default"], {
          key: "modal-".concat(uuid),
          config: withFunc(config),
          ref: modalRef,
          afterClose: function afterClose() {
            closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
          },
          isSilent: function isSilent() {
            return silent;
          },
          onConfirm: function onConfirm(confirmed) {
            resolvePromise(confirmed);
          }
        });
        closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
        if (closeFunc) {
          _destroyFns["default"].push(closeFunc);
        }
        var instance = {
          destroy: function destroy() {
            function destroyAction() {
              var _a;
              (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
            }
            if (modalRef.current) {
              destroyAction();
            } else {
              setActionQueue(function (prev) {
                return [].concat((0, _toConsumableArray2["default"])(prev), [destroyAction]);
              });
            }
          },
          update: function update(newConfig) {
            function updateAction() {
              var _a;
              (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.update(newConfig);
            }
            if (modalRef.current) {
              updateAction();
            } else {
              setActionQueue(function (prev) {
                return [].concat((0, _toConsumableArray2["default"])(prev), [updateAction]);
              });
            }
          },
          then: function then(resolve) {
            silent = true;
            return promise.then(resolve);
          }
        };
        return instance;
      };
    }, []);
    var fns = React.useMemo(function () {
      return {
        info: getConfirmFunc(_confirm.withInfo),
        success: getConfirmFunc(_confirm.withSuccess),
        error: getConfirmFunc(_confirm.withError),
        warning: getConfirmFunc(_confirm.withWarn),
        confirm: getConfirmFunc(_confirm.withConfirm)
      };
    }, []);
    return [fns, /*#__PURE__*/React.createElement(ElementsHolder, {
      key: "modal-holder",
      ref: holderRef
    })];
  }
  var _default = _exports["default"] = useModal;
});