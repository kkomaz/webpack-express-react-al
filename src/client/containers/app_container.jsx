import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

const { object } = React.PropTypes;

class AppContainer extends Component {
  static propTypes = {
    store: object,
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

export default AppContainer;
