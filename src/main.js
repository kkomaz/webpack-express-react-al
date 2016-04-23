import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app_container';
import configureStore from './store/configureStore';

// Sass Stylesheet
import './stylesheets/style.scss';

const store = configureStore();

ReactDOM.render(
  <AppContainer store={store} />,
  document.querySelector('.container')
);
