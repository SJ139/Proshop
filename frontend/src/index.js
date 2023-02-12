import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom'
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import './bootstrap.min.css'
import './index.css';
import App from './App';
import './bootstrap.min.css'


ReactDOM.render(
  <Provider store={(store)}>
    <App/>
  </Provider>
  ,document.getElementById('root')
)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, document.getElementById('root')
// )
  


