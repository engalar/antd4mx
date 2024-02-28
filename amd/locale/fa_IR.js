define(["exports", "rc-pagination/es/locale/fa_IR", "antd4mx/calendar/locale/fa_IR", "antd4mx/date-picker/locale/fa_IR", "antd4mx/time-picker/locale/fa_IR"], function (_exports, _fa_IR, _fa_IR2, _fa_IR3, _fa_IR4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /* eslint-disable no-template-curly-in-string */

  var typeTemplate = '${label} از نوع ${type} معتبر نیست';
  var localeValues = {
    locale: 'fa',
    Pagination: _fa_IR["default"],
    DatePicker: _fa_IR3["default"],
    TimePicker: _fa_IR4["default"],
    Calendar: _fa_IR2["default"],
    global: {
      placeholder: 'لطفاً انتخاب کنید'
    },
    Table: {
      filterTitle: 'منوی فیلتر',
      filterConfirm: 'تایید',
      filterReset: 'پاک کردن',
      filterEmptyText: 'بدون فیلتر',
      filterCheckall: 'انتخاب همه‌ی موارد',
      filterSearchPlaceholder: 'جستجو در فیلترها',
      emptyText: 'بدون داده',
      selectAll: 'انتخاب صفحه‌ی کنونی',
      selectInvert: 'معکوس کردن انتخاب‌ها در صفحه ی کنونی',
      selectNone: 'انتخاب هیچکدام',
      selectionAll: 'انتخاب همه‌ی داده‌ها',
      sortTitle: 'مرتب سازی',
      expand: 'باز شدن ردیف',
      collapse: 'بستن ردیف',
      triggerDesc: 'ترتیب نزولی',
      triggerAsc: 'ترتیب صعودی',
      cancelSort: 'لغوِ ترتیبِ داده شده'
    },
    Tour: {
      Next: 'بعدی',
      Previous: 'قبلی',
      Finish: 'پایان'
    },
    Modal: {
      okText: 'تایید',
      cancelText: 'لغو',
      justOkText: 'تایید'
    },
    Popconfirm: {
      okText: 'تایید',
      cancelText: 'لغو'
    },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'جستجو',
      itemUnit: 'عدد',
      itemsUnit: 'عدد',
      remove: 'حذف',
      selectCurrent: 'انتخاب صفحه فعلی',
      removeCurrent: 'پاک کردن انتخاب‌های صفحه فعلی',
      selectAll: 'انتخاب همه',
      removeAll: 'پاک کردن همه انتخاب‌ها',
      selectInvert: 'معکوس کردن انتخاب‌ها در صفحه ی کنونی'
    },
    Upload: {
      uploading: 'در حال آپلود...',
      removeFile: 'حذف فایل',
      uploadError: 'خطا در آپلود',
      previewFile: 'مشاهده‌ی فایل',
      downloadFile: 'دریافت فایل'
    },
    Empty: {
      description: 'داده‌ای موجود نیست'
    },
    Icon: {
      icon: 'آیکن'
    },
    Text: {
      edit: 'ویرایش',
      copy: 'کپی',
      copied: 'کپی شد',
      expand: 'توسعه'
    },
    Form: {
      optional: '(اختیاری)',
      defaultValidateMessages: {
        "default": 'خطا در ${label}',
        required: 'فیلد ${label} اجباریست',
        "enum": '${label} باید یکی از [${enum}] باشد',
        whitespace: '${label} نمیتواند خالی باشد',
        date: {
          format: 'ساختار تاریخ در ${label} نامعتبر است',
          parse: '${label} قابل تبدیل به تاریخ نیست',
          invalid: '${label} تاریخی نا معتبر است'
        },
        types: {
          string: typeTemplate,
          method: typeTemplate,
          array: typeTemplate,
          object: typeTemplate,
          number: typeTemplate,
          date: typeTemplate,
          "boolean": typeTemplate,
          integer: typeTemplate,
          "float": typeTemplate,
          regexp: typeTemplate,
          email: typeTemplate,
          url: typeTemplate,
          hex: typeTemplate
        },
        string: {
          len: '${label} باید ${len} کاراکتر باشد',
          min: '${label} باید حداقل ${min} کاراکتر باشد',
          max: '${label} باید حداکثر ${max} کاراکتر باشد',
          range: '${label} باید بین ${min}-${max} کاراکتر باشد'
        },
        number: {
          len: '${label} باید برابر ${len}',
          min: '${label} حداقل میتواند ${min} باشد',
          max: '${label} حداکثر میتواند ${max} باشد',
          range: '${label} باید بین ${min}-${max} باشد'
        },
        array: {
          len: 'تعداد ${label} باید ${len} باشد.',
          min: 'تعداد ${label} حداقل باید ${min} باشد',
          max: 'تعداد ${label} حداکثر باید ${max} باشد',
          range: 'مقدار ${label} باید بین ${min}-${max} باشد'
        },
        pattern: {
          mismatch: 'الگوی ${label} با ${pattern} برابری نمی‌کند'
        }
      }
    },
    Image: {
      preview: 'پیش‌نمایش'
    },
    QRCode: {
      expired: 'QR Code منقضی شذد',
      refresh: 'به‌روزرسانی'
    }
  };
  var _default = _exports["default"] = localeValues;
});