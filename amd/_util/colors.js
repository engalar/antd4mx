define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "antd4mx/theme/interface/index"], function (_exports, _toConsumableArray2, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PresetStatusColorTypes = void 0;
  _exports.isPresetColor = isPresetColor;
  _exports.isPresetStatusColor = isPresetStatusColor;
  var inverseColors = _index.PresetColors.map(function (color) {
    return "".concat(color, "-inverse");
  });
  var PresetStatusColorTypes = _exports.PresetStatusColorTypes = ['success', 'processing', 'error', 'default', 'warning'];
  /**
   * determine if the color keyword belongs to the `Ant Design` {@link PresetColors}.
   * @param color color to be judged
   * @param includeInverse whether to include reversed colors
   */
  function isPresetColor(color) {
    var includeInverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (includeInverse) {
      return [].concat((0, _toConsumableArray2["default"])(inverseColors), (0, _toConsumableArray2["default"])(_index.PresetColors)).includes(color);
    }
    return _index.PresetColors.includes(color);
  }
  function isPresetStatusColor(color) {
    return PresetStatusColorTypes.includes(color);
  }
});