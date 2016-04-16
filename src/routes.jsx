import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './containers/index';
import App from './components/app';
import Box from './components/box';
import ErrorPage from './components/error_page';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/box" component={Box} />
    <Route path="*" component={ErrorPage} />
  </Route>
);

export default routes;
