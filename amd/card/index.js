define(["exports", "antd4mx/card/Card", "antd4mx/card/Grid", "antd4mx/card/Meta"], function (_exports, _Card, _Grid, _Meta) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Card = _Card["default"];
  Card.Grid = _Grid["default"];
  Card.Meta = _Meta["default"];
  if (process.env.NODE_ENV !== 'production') {
    Card.displayName = 'Card';
  }
  var _default = _exports["default"] = Card;
});