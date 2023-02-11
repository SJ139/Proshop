"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

var _store = _interopRequireDefault(require("./store"));

require("./bootstrap.min.css");

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker'
_client["default"].render(); // ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, document.getElementById('root')
// )