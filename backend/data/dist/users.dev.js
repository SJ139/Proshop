"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var users = [{
  name: 'Admin User',
  email: "admin@example.com",
  password: _bcryptjs["default"].hashSync('123456,10'),
  isAdmin: true
}, {
  name: 'JohnD',
  email: "john@example.com",
  password: _bcryptjs["default"].hashSync('123456,10')
}, {
  name: 'JaneD',
  email: "jane@example.com",
  password: _bcryptjs["default"].hashSync('123456,10')
}];
var _default = users;
exports["default"] = _default;