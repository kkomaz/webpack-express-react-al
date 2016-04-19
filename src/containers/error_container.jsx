import React from 'react';
import { connect } from 'react-redux';

const { object } = React.PropTypes;

function renderErrorMessage(postResponse) {
  if (postResponse.data) {
    return (
      <div className="error-container__message">
        {postResponse.data.message}
      </div>
    );
  }
  return null;
}

const ErrorContainer = (props) => {
  const errorMessage = renderErrorMessage(props.postResponse);

  return (
    <div className="error-container">
      {errorMessage}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    postResponse: state.assistantRequestReducer.response,
  };
}

ErrorContainer.propTypes = {
  postResponse: object,
};

export default connect(mapStateToProps)(ErrorContainer);
