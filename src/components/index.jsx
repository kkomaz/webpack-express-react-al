import React from 'react';
import AssistanceRequest from '../containers/assistance_request';
import ErrorContainer from '../containers/error_container';

export default function Index() {
  return (
    <div className="unite-us-index">
      <AssistanceRequest />
      <ErrorContainer />
    </div>
  );
}
