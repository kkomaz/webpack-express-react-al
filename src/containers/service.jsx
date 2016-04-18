import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { object, array, func } = React.PropTypes;

class Services extends Component {
  componentWillMount() {
    this.props.fetchServices();
  }

  /**
   * All service option elements created
   * @return { HTML element } - <option>
   */
  renderServices() {
    const { services } = this.props;
    return services.map((service) => {
      return (
        <option className="service" key={service.id} value={service.id}>
          {service.display_name}
        </option>
      );
    });
  }

  render() {
    return (
      <select className="services" placeholder="Select Service Type" {...this.props.serviceType}>
        <option className="service" value="select-service-type" disabled>Select Service Type</option>
        {this.renderServices()}
      </select>
    );
  }
}

function mapStateToProps(state) {
  return {
    services: state.serviceReducer.services,
  };
}

Services.propTypes = {
  serviceType: object,
  services: array.isRequired,
  fetchServices: func.isRequired,
};

export default connect(mapStateToProps, actions)(Services);
