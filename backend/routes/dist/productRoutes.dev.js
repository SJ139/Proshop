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
})); // @desc fetch single product.
// @route GET /api/products/:id
// @access Public Route.

router.get('/:id', (0, _expressAsyncHandler["default"])(function _callee2(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_productModel["default"].findById(req.params.id));

        case 2:
          product = _context2.sent;

          if (!product) {
            _context2.next = 7;
            break;
          }

          res.json(product);
          _context2.next = 9;
          break;

        case 7:
          res.status(404);
          throw new error('Product Not Found');

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}));
var _default = router;
exports["default"] = _default;