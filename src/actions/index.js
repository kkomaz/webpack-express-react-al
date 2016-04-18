import * as ActionTypes from '../constants/action_types';
import * as ApiEndPoints from '../constants/api_endpoints';
import axios from 'axios';

/**
 * GET api/service-types - all services
 * @return { object } - resolve to an Action
 */
export function fetchServices() {
  return function(dispatch) {
    axios.get(`${ApiEndPoints.ROOT_URL}/${ApiEndPoints.SERVICE_TYPES}`)
      .then((response) => {
        dispatch(fetchServicesSuccess(response));
      });
  };
}

/**
 * POST api/assistance-requests
 * @return { object } - resolve to an Action
 */
export function createAssistService(props) {
  const requestProps = generateRequest(props);
  return function(dispatch) {
    axios.post(`${ApiEndPoints.ROOT_URL}/${ApiEndPoints.ASSISTANCE_REQUEST}`, requestProps)
      .then((response) => {
        dispatch(createAssistServiceSuccess(response));
      })
      .catch((error) => {
        dispatch(createAssistServiceError(error));
      });
  };
}

/**
 * Helper function that creates a error Action
 * @param { object } - error response
 * @return { object } - artist request error Action
 */
function createAssistServiceError(error) {
  return {
    type: ActionTypes.POST_ASSISTANCE_REQUEST_FAIL,
    payload: error,
  };
}

/**
 * Helper function that creates a successful Action
 * @param { object } - succcessful response
 * @return { object } - artist-request success Action
 */
function createAssistServiceSuccess(response) {
  return {
    type: ActionTypes.POST_ASSISTANCE_REQUEST,
    payload: response,
  };
}

/**
 * Helper function that fetches services
 * @param { object } - succcessful response
 * @return { object } - services action
 */
function fetchServicesSuccess(response) {
  return {
    type: ActionTypes.FETCH_SERVICES,
    payload: response,
  };
}

/**
 * Helper function that creates a successful Action
 * @param { object } - succcessful response
 * @return { object } - Action
 */
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
