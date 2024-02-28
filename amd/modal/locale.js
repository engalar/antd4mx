define(["exports", "antd4mx/locale/en_US"], function (_exports, _en_US) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.changeConfirmLocale = changeConfirmLocale;
  _exports.getConfirmLocale = getConfirmLocale;
  var runtimeLocale = Object.assign({}, _en_US["default"].Modal);
  var localeList = [];
  var generateLocale = function generateLocale() {
    return localeList.reduce(function (merged, locale) {
      return Object.assign(Object.assign({}, merged), locale);
    }, _en_US["default"].Modal);
  };
  function changeConfirmLocale(newLocale) {
    if (newLocale) {
      var cloneLocale = Object.assign({}, newLocale);
      localeList.push(cloneLocale);
      runtimeLocale = generateLocale();
      return function () {
        localeList = localeList.filter(function (locale) {
          return locale !== cloneLocale;
        });
        runtimeLocale = generateLocale();
      };
    }
    runtimeLocale = Object.assign({}, _en_US["default"].Modal);
  }
  function getConfirmLocale() {
    return runtimeLocale;
  }
});