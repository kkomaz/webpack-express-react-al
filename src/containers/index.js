import React, { Component } from 'react';
import { Link } from 'react-router';

class Index extends Component {
  render() {
    return (
      <div className="index">
        <h1>This is the Index Page!</h1>
        <Link to="/box">Box</Link>
      </div>
    );
  }
}

export default Index;
