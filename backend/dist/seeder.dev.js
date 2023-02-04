"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _colors = _interopRequireDefault(require("colors"));

var _users = _interopRequireDefault(require("./data/users.js"));

var _products = _interopRequireDefault(require("./data/products.js"));

var _productModel = _interopRequireDefault(require("./models/productModel.js"));

var _userModel = _interopRequireDefault(require("./models/userModel.js"));

var _orderModel = _interopRequireDefault(require("./models/orderModel.js"));

var _db = _interopRequireDefault(require("./config/db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_dotenv["default"].config();

(0, _db["default"])();

var importData = function importData() {
  var createdUsers, adminUser, sampleProducts;
  return regeneratorRuntime.async(function importData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_orderModel["default"].deleteMany());

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(_productModel["default"].deleteMany());

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(_userModel["default"].deleteMany());

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(_userModel["default"].insertMany(_users["default"]));

        case 9:
          createdUsers = _context.sent;
          adminUser = createdUsers[0]._id;
          sampleProducts = _products["default"].map(function (product) {
            return _objectSpread({}, product, {
              user: adminUser
            });
          });
          _context.next = 14;
          return regeneratorRuntime.awrap(_productModel["default"].insertMany(sampleProducts));

        case 14:
          console.log('Data imported'.green.inverse);
          process.exit();
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          console.error("".concat(_context.t0).red.inverse);
          process.exit(1);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

var destroyData = function destroyData() {
  return regeneratorRuntime.async(function destroyData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_orderModel["default"].deleteMany());

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(_productModel["default"].deleteMany());

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(_userModel["default"].deleteMany());

        case 7:
          console.log('Data Destroyed'.red.inverse);
          process.exit();
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error("".concat(_context2.t0).red.inverse);
          process.exit(1);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}