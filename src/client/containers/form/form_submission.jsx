import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FormSubmission extends Component {
  render() {
    return (
      <div className="form-submission">
        <div className="form-submission__title">
          <input type="text" className="" />
        </div>

        <div className="form-submission__release-year">
          <input type="text" className="" />
        </div>

        <div className="form-submission__director">
          <input type="text" className="" />
        </div>

        <div className="form-submission__genre">
          <input type="text" className="" />
        </div>
      </div>
    );
  }
}

export default FormSubmission;
