import React, { Component } from 'react';
import * as createAssistService  from '../actions/index';
import * as ActionTypes from '../constants/action_types';
import { reduxForm } from 'redux-form';
import Service from './service';

export const fields = ['firstName', 'lastName', 'emailAddress',
                       'serviceType', 'description', 'terms'];

export const { func, object } = React.PropTypes;

class AssistanceRequest extends Component {
  render() {
    const { fields: { firstName, lastName, emailAddress, serviceType, description, terms},
            handleSubmit
          } = this.props;
    return (
      <form className="assistance-request" onSubmit={handleSubmit}>
        <div className="assistance-request__first-name">
          <input
            className="assistance-request__first-name-input"
            type="text"
            placeholder="First Name"
            {...firstName}
          />
        </div>

        <div className="assistance-request__last-name">
          <input
            className="assistance-request__last-name-input"
            type="text"
            placeholder="Last Name"
            {...lastName}
          />
        </div>

        <div className="assistance-request__email">
          <input
            className="assistance-request__email-input"
            type="text"
            placeholder="Email Address"
            {...emailAddress}
          />
        </div>

        <div className="assistance-request__services">
          <Service serviceType={serviceType} />
        </div>

        <div className="assistance-request__description">
          <textarea
            className="assistance-request__description-text"
            cols="30"
            rows="10"
            placeholder="Assistance request description"
            {...description}
          />
        </div>

        <div className="assistance-request__acceptance">
          <input type="checkbox" {...terms } />
          I hearby accept the terms of service for THE NETWORK and the Privacy Policy.
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    );
  }
}

AssistanceRequest.propTypes = {
  fields: object,
  handleSubmit: func,
};

export default reduxForm({
  form: 'AssistanceRequestForm',
  fields,
}, null, { createAssistService })(AssistanceRequest);
