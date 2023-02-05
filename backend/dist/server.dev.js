"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var _colors = _interopRequireDefault(require("colors"));

var _errorMiddleware = require("./middleware/errorMiddleware.js");

var _db = _interopRequireDefault(require("./config/db.js"));

var dotenv = _interopRequireWildcard(require("dotenv"));

var _productRoutes = _interopRequireDefault(require("./routes/productRoutes.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
(0, _db["default"])();
var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send('API is Running....!');
});
app.use('/api/products', _productRoutes["default"]);
var PORT = process.env.PORT || 5000;
app.use(_errorMiddleware.notFound);
app.use(_errorMiddleware.errorHandler);
app.listen(PORT, console.log("server running on ".concat(process.env.NODE_ENV, " mode on port ").concat(PORT).yellow.bold));