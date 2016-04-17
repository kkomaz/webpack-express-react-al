import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import AppContainer from './containers/app_container';

// Sass Stylesheet
import './stylesheets/style.scss';


const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <AppContainer store={store(reducers)} />,
  document.querySelector('.container')
);
