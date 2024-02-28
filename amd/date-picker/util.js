define(["exports", "react", "antd4mx/select/useIcons"], function (_exports, React, _useIcons) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getPlaceholder = getPlaceholder;
  _exports.getRangePlaceholder = getRangePlaceholder;
  _exports.transPlacement2DropdownAlign = transPlacement2DropdownAlign;
  _exports.useIcons = useIcons;
  function getPlaceholder(locale, picker, customizePlaceholder) {
    if (customizePlaceholder !== undefined) {
      return customizePlaceholder;
    }
    if (picker === 'year' && locale.lang.yearPlaceholder) {
      return locale.lang.yearPlaceholder;
    }
    if (picker === 'quarter' && locale.lang.quarterPlaceholder) {
      return locale.lang.quarterPlaceholder;
    }
    if (picker === 'month' && locale.lang.monthPlaceholder) {
      return locale.lang.monthPlaceholder;
    }
    if (picker === 'week' && locale.lang.weekPlaceholder) {
      return locale.lang.weekPlaceholder;
    }
    if (picker === 'time' && locale.timePickerLocale.placeholder) {
      return locale.timePickerLocale.placeholder;
    }
    return locale.lang.placeholder;
  }
  function getRangePlaceholder(locale, picker, customizePlaceholder) {
    if (customizePlaceholder !== undefined) {
      return customizePlaceholder;
    }
    if (picker === 'year' && locale.lang.yearPlaceholder) {
      return locale.lang.rangeYearPlaceholder;
    }
    if (picker === 'quarter' && locale.lang.quarterPlaceholder) {
      return locale.lang.rangeQuarterPlaceholder;
    }
    if (picker === 'month' && locale.lang.monthPlaceholder) {
      return locale.lang.rangeMonthPlaceholder;
    }
    if (picker === 'week' && locale.lang.weekPlaceholder) {
      return locale.lang.rangeWeekPlaceholder;
    }
    if (picker === 'time' && locale.timePickerLocale.placeholder) {
      return locale.timePickerLocale.rangePlaceholder;
    }
    return locale.lang.rangePlaceholder;
  }
  function transPlacement2DropdownAlign(direction, placement) {
    var overflow = {
      adjustX: 1,
      adjustY: 1
    };
    switch (placement) {
      case 'bottomLeft':
        {
          return {
            points: ['tl', 'bl'],
            offset: [0, 4],
            overflow: overflow
          };
        }
      case 'bottomRight':
        {
          return {
            points: ['tr', 'br'],
            offset: [0, 4],
            overflow: overflow
          };
        }
      case 'topLeft':
        {
          return {
            points: ['bl', 'tl'],
            offset: [0, -4],
            overflow: overflow
          };
        }
      case 'topRight':
        {
          return {
            points: ['br', 'tr'],
            offset: [0, -4],
            overflow: overflow
          };
        }
      default:
        {
          return {
            points: direction === 'rtl' ? ['tr', 'br'] : ['tl', 'bl'],
            offset: [0, 4],
            overflow: overflow
          };
        }
    }
  }
  function useIcons(props, prefixCls) {
    var _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? true : _props$allowClear;
    var _useSelectIcons = (0, _useIcons["default"])(Object.assign(Object.assign({}, props), {
        prefixCls: prefixCls,
        componentName: 'DatePicker'
      })),
      clearIcon = _useSelectIcons.clearIcon,
      removeIcon = _useSelectIcons.removeIcon;
    var mergedAllowClear = React.useMemo(function () {
      if (allowClear === false) {
        return false;
      }
      var allowClearConfig = allowClear === true ? {} : allowClear;
      return Object.assign({
        clearIcon: clearIcon
      }, allowClearConfig);
    }, [allowClear, clearIcon]);
    return [mergedAllowClear, removeIcon];
  }
});