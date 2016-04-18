import * as ActionTypes from '../constants/action_types';
import axios from 'axios';

const SERVICE_TYPES = 'service-types';
const ASSISTANCE_REQUEST = 'assistance-requests';
const ROOT_URL = 'http://localhost:49567/api';

export function fetchServices() {
  const request = axios.get(`${ROOT_URL}/${SERVICE_TYPES}`);

  return {
    type: ActionTypes.FETCH_SERVICES,
    payload: request,
  };
}

export function createAssistService(props) {
  const requestProps = generateRequest(props);
  const request = axios.post(`${ROOT_URL}/${ASSISTANCE_REQUEST}`, requestProps);

  return {
    type: ActionTypes.POST_ASSISTANCE_REQUEST,
    payload: request,
  };
}

function generateRequest(props) {
  return {
    assistance_request: {
      contact: {
        first_name: props.firstName,
        last_name: props.lastName,
        email: props.emailAddress,
      },
      service_type: props.serviceType,
      description: props.description,
    },
  };
}
