import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FormSubmission extends Component {
  render() {
    return (
      <form className="form-submission">
        <h2>Movie Submission Form</h2>
        <div className="form-submission__title">
          <input
            type="text"
            className="form-submission__title-input"
            placeholder="Movie Title"
          />
        </div>

        <div className="form-submission__release-year">
          <input
            type="text"
            className="form-submission__release-year-input"
            placeholder="Release Year"
          />
        </div>

        <div className="form-submission__director">
          <input
            type="text"
            className="form-submission__director-input"
            placeholder="Director Name"
          />
        </div>

        <div className="form-submission__genre">
          <input
            type="text"
            className="form-submission__genre-input"
            placeholder="Genre"
          />
        </div>

        <button type="sumbit" className="button">Submit</button>
      </form>
    );
  }
}

export default FormSubmission;
