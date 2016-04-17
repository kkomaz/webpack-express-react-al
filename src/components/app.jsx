import React from 'react';

const { object } = React.PropTypes;

class App extends React.Component {
  render() {
    return (
      <div className="app-component">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: object,
};

export default App;
