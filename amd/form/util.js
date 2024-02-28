define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getFieldId = getFieldId;
  _exports.getStatus = getStatus;
  _exports.toArray = toArray;
  // form item name black list.  in form ,you can use form.id get the form item element.
  // use object hasOwnProperty will get better performance if black list is longer.
  var formItemNameBlackList = ['parentNode'];
  // default form item id prefix.
  var defaultItemNamePrefixCls = 'form_item';
  function toArray(candidate) {
    if (candidate === undefined || candidate === false) return [];
    return Array.isArray(candidate) ? candidate : [candidate];
  }
  function getFieldId(namePath, formName) {
    if (!namePath.length) {
      return undefined;
    }
    var mergedId = namePath.join('_');
    if (formName) {
      return "".concat(formName, "_").concat(mergedId);
    }
    var isIllegalName = formItemNameBlackList.includes(mergedId);
    return isIllegalName ? "".concat(defaultItemNamePrefixCls, "_").concat(mergedId) : mergedId;
  }
  /**
   * Get merged status by meta or passed `validateStatus`.
   */
  function getStatus(errors, warnings, meta, defaultValidateStatus, hasFeedback, validateStatus) {
    var status = defaultValidateStatus;
    if (validateStatus !== undefined) {
      status = validateStatus;
    } else if (meta.validating) {
      status = 'validating';
    } else if (errors.length) {
      status = 'error';
    } else if (warnings.length) {
      status = 'warning';
    } else if (meta.touched || hasFeedback && meta.validated) {
      // success feedback should display when pass hasFeedback prop and current value is valid value
      status = 'success';
    }
    return status;
  }
});