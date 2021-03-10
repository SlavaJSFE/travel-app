import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import store from './redux/store';
import './index.scss';
import App from './App';
// import {store} from "./reducers";
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
