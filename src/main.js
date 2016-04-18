import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import AppContainer from './containers/app_container';

// Sass Stylesheet
import './stylesheets/style.scss';


const store = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <AppContainer store={store(reducers)} />,
  document.querySelector('.container')
);
