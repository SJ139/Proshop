"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducer = (0, _redux.combineReducers)({});
var initialState = {};
var middleWare = [_reduxThunk["default"]];
var store = (0, _toolkit.configureStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware).apply(void 0, middleWare));
var _default = store;
exports["default"] = _default;