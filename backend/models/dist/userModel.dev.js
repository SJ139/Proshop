"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passWord: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    "default": false
  }
}, {
  timestamps: true
});

var User = _mongoose["default"].model('user', userSchema);

var _default = User;
exports["default"] = _default;