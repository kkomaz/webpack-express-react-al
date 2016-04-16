import React, { Component } from 'react';
import { Provider } from 'react-redux';

const { object } = React.PropTypes;

export default class App extends Component {
  static propTypes = {
    store: object,
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="box">
          <h1>Hello, world.</h1>
          <h2>Hi hi</h2>
        </div>
      </Provider>
    );
  }
}
