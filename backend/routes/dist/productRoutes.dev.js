"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _productModel = _interopRequireDefault(require("../models/productModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ==**Backend/Routes/productRoutes.js**==
var router = _express["default"].Router();

// @desc fetch all products.
// @route GET /api/products.
// @access Public Route.
router.get('/', (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_productModel["default"].find({}));

        case 2:
          products = _context.sent;
          res.json(products);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
})); // @desc fetch singe product.
// @route GET /api/products/:id
// @access Public Route.

router.get('/:id', (0, _expressAsyncHandler["default"])(function _callee2(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(product.findById(req.params.id));

        case 2:
          product = _context2.sent;

          if (product) {
            res.json(product);
          } else {
            res.status(404).json({
              message: 'Product Not Found'
            });
          }

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}));
var _default = router;
exports["default"] = _default;