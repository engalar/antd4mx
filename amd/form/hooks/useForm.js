define(["exports", "rc-field-form", "react", "scroll-into-view-if-needed", "antd4mx/form/util"], function (_exports, _rcFieldForm, React, _scrollIntoViewIfNeeded, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useForm;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function toNamePathStr(name) {
    var namePath = (0, _util.toArray)(name);
    return namePath.join('_');
  }
  function useForm(form) {
    var _useRcForm = (0, _rcFieldForm.useForm)(),
      _useRcForm2 = _slicedToArray(_useRcForm, 1),
      rcForm = _useRcForm2[0];
    var itemsRef = React.useRef({});
    var wrapForm = React.useMemo(function () {
      return form !== null && form !== void 0 ? form : Object.assign(Object.assign({}, rcForm), {
        __INTERNAL__: {
          itemRef: function itemRef(name) {
            return function (node) {
              var namePathStr = toNamePathStr(name);
              if (node) {
                itemsRef.current[namePathStr] = node;
              } else {
                delete itemsRef.current[namePathStr];
              }
            };
          }
        },
        scrollToField: function scrollToField(name) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var namePath = (0, _util.toArray)(name);
          var fieldId = (0, _util.getFieldId)(namePath, wrapForm.__INTERNAL__.name);
          var node = fieldId ? document.getElementById(fieldId) : null;
          if (node) {
            (0, _scrollIntoViewIfNeeded["default"])(node, Object.assign({
              scrollMode: 'if-needed',
              block: 'nearest'
            }, options));
          }
        },
        getFieldInstance: function getFieldInstance(name) {
          var namePathStr = toNamePathStr(name);
          return itemsRef.current[namePathStr];
        }
      });
    }, [form, rcForm]);
    return [wrapForm];
  }
});