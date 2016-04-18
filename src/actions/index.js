import * as ActionTypes from '../constants/action_types';
import axios from 'axios';

const SERVICE_TYPES = 'service-types';
const ASSISTANCE_REQUEST = 'assistance-requests';
const ROOT_URL = 'http://localhost:49567/api';

export function fetchServices() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/${SERVICE_TYPES}`)
      .then((response) => {
        dispatch(fetchServicesSuccess(response));
      });
  };
}

export function createAssistService(props) {
  const requestProps = generateRequest(props);
  return function(dispatch) {
    axios.post(`${ROOT_URL}/${ASSISTANCE_REQUEST}`, requestProps)
      .then((response) => {
        dispatch(createAssistServiceSuccess(response));
      })
      .catch((error) => {
        dispatch(createAssistServiceError(error));
      });
  };
}

function createAssistServiceError(error) {
  return {
    type: ActionTypes.POST_ASSISTANCE_REQUEST_FAIL,
    payload: error,
  };
}

function createAssistServiceSuccess(response) {
  return {
    type: ActionTypes.POST_ASSISTANCE_REQUEST,
    payload: response,
  };
}

function fetchServicesSuccess(response) {
  return {
    type: ActionTypes.FETCH_SERVICES,
    payload: response,
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
