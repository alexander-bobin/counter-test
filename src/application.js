"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers/counter-reducers';
import App from './components/App';

let store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('counter')
);
