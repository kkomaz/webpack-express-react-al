import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { array, func } = React.PropTypes;

class Services extends Component {
  componentWillMount() {
    this.props.fetchServices();
  }

  renderServices() {
    const { services } = this.props;
    return services.map((service) => {
      return (
        <li className="service" key={service.id}>
          {service.display_name}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="services">
        {this.renderServices()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    services: state.serviceReducer.services,
  };
}

Services.propTypes = {
  services: array.isRequired,
  fetchServices: func.isRequired,
};

export default connect(mapStateToProps, actions)(Services);
