define(["exports", "react", "@ant-design/icons/es/icons/CheckCircleFilled", "@ant-design/icons/es/icons/CloseCircleFilled", "@ant-design/icons/es/icons/ExclamationCircleFilled", "@ant-design/icons/es/icons/LoadingOutlined", "classnames", "antd4mx/form/context", "antd4mx/form/util"], function (_exports, React, _CheckCircleFilled, _CloseCircleFilled, _ExclamationCircleFilled, _LoadingOutlined, _classnames, _context, _util) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = StatusProvider;
  var iconMap = {
    success: _CheckCircleFilled["default"],
    warning: _ExclamationCircleFilled["default"],
    error: _CloseCircleFilled["default"],
    validating: _LoadingOutlined["default"]
  };
  function StatusProvider(_ref) {
    var children = _ref.children,
      errors = _ref.errors,
      warnings = _ref.warnings,
      hasFeedback = _ref.hasFeedback,
      validateStatus = _ref.validateStatus,
      prefixCls = _ref.prefixCls,
      meta = _ref.meta,
      noStyle = _ref.noStyle;
    var itemPrefixCls = "".concat(prefixCls, "-item");
    var _React$useContext = React.useContext(_context.FormContext),
      feedbackIcons = _React$useContext.feedbackIcons;
    var mergedValidateStatus = (0, _util.getStatus)(errors, warnings, meta, null, !!hasFeedback, validateStatus);
    var _React$useContext2 = React.useContext(_context.FormItemInputContext),
      parentIsFormItemInput = _React$useContext2.isFormItemInput,
      parentStatus = _React$useContext2.status,
      parentHasFeedback = _React$useContext2.hasFeedback,
      parentFeedbackIcon = _React$useContext2.feedbackIcon;
    // ====================== Context =======================
    var formItemStatusContext = React.useMemo(function () {
      var _a;
      var feedbackIcon;
      if (hasFeedback) {
        var customIcons = hasFeedback !== true && hasFeedback.icons || feedbackIcons;
        var customIconNode = mergedValidateStatus && ((_a = customIcons === null || customIcons === void 0 ? void 0 : customIcons({
          status: mergedValidateStatus,
          errors: errors,
          warnings: warnings
        })) === null || _a === void 0 ? void 0 : _a[mergedValidateStatus]);
        var IconNode = mergedValidateStatus && iconMap[mergedValidateStatus];
        feedbackIcon = customIconNode !== false && IconNode ? ( /*#__PURE__*/React.createElement("span", {
          className: (0, _classnames["default"])("".concat(itemPrefixCls, "-feedback-icon"), "".concat(itemPrefixCls, "-feedback-icon-").concat(mergedValidateStatus))
        }, customIconNode || /*#__PURE__*/React.createElement(IconNode, null))) : null;
      }
      var context = {
        status: mergedValidateStatus || '',
        errors: errors,
        warnings: warnings,
        hasFeedback: !!hasFeedback,
        feedbackIcon: feedbackIcon,
        isFormItemInput: true
      };
      // No style will follow parent context
      if (noStyle) {
        context.status = (mergedValidateStatus !== null && mergedValidateStatus !== void 0 ? mergedValidateStatus : parentStatus) || '';
        context.isFormItemInput = parentIsFormItemInput;
        context.hasFeedback = !!(hasFeedback !== null && hasFeedback !== void 0 ? hasFeedback : parentHasFeedback);
        context.feedbackIcon = hasFeedback !== undefined ? context.feedbackIcon : parentFeedbackIcon;
      }
      return context;
    }, [mergedValidateStatus, hasFeedback, noStyle, parentIsFormItemInput, parentStatus]);
    // ======================= Render =======================
    return /*#__PURE__*/React.createElement(_context.FormItemInputContext.Provider, {
      value: formItemStatusContext
    }, children);
  }
});