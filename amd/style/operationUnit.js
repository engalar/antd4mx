define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.operationUnit = void 0;
  // eslint-disable-next-line import/prefer-default-export
  var operationUnit = _exports.operationUnit = function operationUnit(token) {
    return {
      // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
      // And Typography use this to generate link style which should not do this.
      color: token.colorLink,
      textDecoration: 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: "color ".concat(token.motionDurationSlow),
      '&:focus, &:hover': {
        color: token.colorLinkHover
      },
      '&:active': {
        color: token.colorLinkActive
      }
    };
  };
});