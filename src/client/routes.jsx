import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Welcome from './containers/welcome';
import Movies from './containers/movie/movie_index';
import FormSubmission from './containers/form/form_submission';
import App from './components/app';
import ErrorPage from './components/error_page';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/movies" component={Movies} />
    <Route path="*" component={ErrorPage} />
  </Route>
);

export default routes;
