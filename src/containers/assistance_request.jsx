import React, { Component } from 'react';
import { createAssistService }  from '../actions/index';
import * as ActionTypes from '../constants/action_types';
import { reduxForm } from 'redux-form';
import Service from './service';

export const fields = ['firstName', 'lastName', 'emailAddress',
                       'serviceType', 'description', 'terms'];

export const { func, object } = React.PropTypes;

class AssistanceRequest extends Component {
  onSubmit(inputProps) {
    this.props.createAssistService(inputProps);
    alert(this.props.postResponse.data.message);
  }

  render() {
    const { fields: { firstName, lastName, emailAddress, serviceType, description, terms },
            handleSubmit,
          } = this.props;
    return (
      <div className="assistance-request">
        <form
          className="assistance-request__form"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <h2 className="assistance-request__title">New Assistance Request</h2>

          <div className="assistance-request__first-name">
            <input
              className="assistance-request__first-name-input"
              type="text"
              placeholder="First Name"
              {...firstName}
            />

            <div className="assistance-request__error-text">
              {firstName.touched ? firstName.error : ''}
            </div>
          </div>

          <div className="assistance-request__last-name">
            <input
              className="assistance-request__last-name-input"
              type="text"
              placeholder="Last Name"
              {...lastName}
            />

            <div className="assistance-request__error-text">
              {lastName.touched ? lastName.error : ''}
            </div>

          </div>

          <div className="assistance-request__email">
            <input
              className="assistance-request__email-input"
              type="text"
              placeholder="Email Address"
              {...emailAddress}
            />

            <div className="assistance-request__error-text">
              {emailAddress.touched ? emailAddress.error : ''}
            </div>
          </div>

          <div className="assistance-request__services">
            <Service serviceType={serviceType} />

            <div className="assistance-request__error-text">
              {serviceType.touched ? serviceType.error : ''}
            </div>
          </div>

          <div className="assistance-request__description">
            <textarea
              className="assistance-request__description-text"
              cols="30"
              rows="10"
              placeholder="Assistance request description"
              {...description}
            />

            <div className="assistance-request__error-text">
              {description.touched ? description.error : ''}
            </div>
          </div>

          <div className="assistance-request__terms">
            <input type="checkbox" {...terms } />
            I hearby accept the terms of service for THE NETWORK and the Privacy Policy.

            <div className="assistance-request__error-text">
              {terms.touched ? terms.error : ''}
            </div>
          </div>
          <button type="submit" className="button assistance-request__submit">Get Assistance</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'required';
  }

  if (!values.lastName) {
    errors.lastName = 'required';
  }

  if (!values.emailAddress) {
    errors.emailAddress = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
    errors.emailAddress = 'Invalid email address';
  }

  if (!values.serviceType) {
    errors.serviceType = 'required';
  }

  if (!values.description) {
    errors.description = 'required';
  }

  if (!values.terms) {
    errors.terms = 'required';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    postResponse: state.assistantRequestReducer.response,
  };
}

AssistanceRequest.propTypes = {
  fields: object,
  handleSubmit: func,
  createAssistService: func,
};

export default reduxForm({
  form: 'AssistanceRequestForm',
  fields,
  validate,
}, mapStateToProps, { createAssistService })(AssistanceRequest);
