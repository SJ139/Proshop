"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _productReducers = require("./reducers/productReducers");

// import {productListReducer} from './reducers/productReducers'
var store = (0, _toolkit.configureStore)({
  reducer: {
    productList: _productReducers.productListReducer
  }
});
var _default = store;
exports["default"] = _default;