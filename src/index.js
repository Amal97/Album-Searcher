import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import {store} from './createStore';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Photo from './components/Photo/Photo.js';


ReactDOM.render(
  <Router>
    <Provider store={store}>
    <React.StrictMode>
    <Route exact path="/" component = {App} />
    <Route exact path="/Photo/:topic" component = {Photo} />
    </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
