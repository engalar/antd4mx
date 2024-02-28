define(["exports", "antd4mx/modal/confirm", "antd4mx/modal/destroyFns", "antd4mx/modal/Modal", "antd4mx/modal/PurePanel", "antd4mx/modal/useModal/index"], function (_exports, _confirm, _destroyFns, _Modal, _PurePanel, _index) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function modalWarn(props) {
    return (0, _confirm["default"])((0, _confirm.withWarn)(props));
  }
  var Modal = _Modal["default"];
  Modal.useModal = _index["default"];
  Modal.info = function infoFn(props) {
    return (0, _confirm["default"])((0, _confirm.withInfo)(props));
  };
  Modal.success = function successFn(props) {
    return (0, _confirm["default"])((0, _confirm.withSuccess)(props));
  };
  Modal.error = function errorFn(props) {
    return (0, _confirm["default"])((0, _confirm.withError)(props));
  };
  Modal.warning = modalWarn;
  Modal.warn = modalWarn;
  Modal.confirm = function confirmFn(props) {
    return (0, _confirm["default"])((0, _confirm.withConfirm)(props));
  };
  Modal.destroyAll = function destroyAllFn() {
    while (_destroyFns["default"].length) {
      var close = _destroyFns["default"].pop();
      if (close) {
        close();
      }
    }
  };
  Modal.config = _confirm.modalGlobalConfig;
  Modal._InternalPanelDoNotUseOrYouWillBeFired = _PurePanel["default"];
  if (process.env.NODE_ENV !== 'production') {
    Modal.displayName = 'Modal';
  }
  var _default = _exports["default"] = Modal;
});