import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './containers/app';

// Sass Stylesheet
import './stylesheets/style.scss';


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <App store={store} />,
  document.querySelector('.container')
);
