define(["exports", "@ant-design/colors", "@ctrl/tinycolor", "rc-util/es/Dom/canUseDom", "rc-util/es/Dom/dynamicCSS", "antd4mx/_util/warning"], function (_exports, _colors, _tinycolor, _canUseDom, _dynamicCSS, _warning) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getStyle = getStyle;
  _exports.registerTheme = registerTheme;
  /* eslint-disable import/prefer-default-export, prefer-destructuring */

  var dynamicStyleMark = "-ant-".concat(Date.now(), "-").concat(Math.random());
  function getStyle(globalPrefixCls, theme) {
    var variables = {};
    var formatColor = function formatColor(color, updater) {
      var clone = color.clone();
      clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
      return clone.toRgbString();
    };
    var fillColor = function fillColor(colorVal, type) {
      var baseColor = new _tinycolor.TinyColor(colorVal);
      var colorPalettes = (0, _colors.generate)(baseColor.toRgbString());
      variables["".concat(type, "-color")] = formatColor(baseColor);
      variables["".concat(type, "-color-disabled")] = colorPalettes[1];
      variables["".concat(type, "-color-hover")] = colorPalettes[4];
      variables["".concat(type, "-color-active")] = colorPalettes[6];
      variables["".concat(type, "-color-outline")] = baseColor.clone().setAlpha(0.2).toRgbString();
      variables["".concat(type, "-color-deprecated-bg")] = colorPalettes[0];
      variables["".concat(type, "-color-deprecated-border")] = colorPalettes[2];
    };
    // ================ Primary Color ================
    if (theme.primaryColor) {
      fillColor(theme.primaryColor, 'primary');
      var primaryColor = new _tinycolor.TinyColor(theme.primaryColor);
      var primaryColors = (0, _colors.generate)(primaryColor.toRgbString());
      // Legacy - We should use semantic naming standard
      primaryColors.forEach(function (color, index) {
        variables["primary-".concat(index + 1)] = color;
      });
      // Deprecated
      variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, function (c) {
        return c.lighten(35);
      });
      variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, function (c) {
        return c.lighten(20);
      });
      variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, function (c) {
        return c.tint(20);
      });
      variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, function (c) {
        return c.tint(50);
      });
      variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, function (c) {
        return c.setAlpha(c.getAlpha() * 0.12);
      });
      var primaryActiveColor = new _tinycolor.TinyColor(primaryColors[0]);
      variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, function (c) {
        return c.setAlpha(c.getAlpha() * 0.3);
      });
      variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, function (c) {
        return c.darken(2);
      });
    }
    // ================ Success Color ================
    if (theme.successColor) {
      fillColor(theme.successColor, 'success');
    }
    // ================ Warning Color ================
    if (theme.warningColor) {
      fillColor(theme.warningColor, 'warning');
    }
    // ================= Error Color =================
    if (theme.errorColor) {
      fillColor(theme.errorColor, 'error');
    }
    // ================= Info Color ==================
    if (theme.infoColor) {
      fillColor(theme.infoColor, 'info');
    }
    // Convert to css variables
    var cssList = Object.keys(variables).map(function (key) {
      return "--".concat(globalPrefixCls, "-").concat(key, ": ").concat(variables[key], ";");
    });
    return "\n  :root {\n    ".concat(cssList.join('\n'), "\n  }\n  ").trim();
  }
  function registerTheme(globalPrefixCls, theme) {
    var style = getStyle(globalPrefixCls, theme);
    if ((0, _canUseDom["default"])()) {
      (0, _dynamicCSS.updateCSS)(style, "".concat(dynamicStyleMark, "-dynamic-theme"));
    } else {
      process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'ConfigProvider', 'SSR do not support dynamic theme with css variables.') : void 0;
    }
  }
});