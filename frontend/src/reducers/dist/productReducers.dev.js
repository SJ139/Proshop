"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productListReducer = void 0;

var _productConstants = require("../constants/productConstants");

var productListReducer = function productListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    products: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: []
      };

    case _productConstants.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload
      };

    case _productConstants.PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

exports.productListReducer = productListReducer;