import * as ActionTypes from '../constants/action_types';
import axios from 'axios';

const SERVICE_TYPES = 'service-types';
const ROOT_URL = 'http://192.168.99.100:49567/api';

export function fetchServices() {
  const request = axios.get(`${ROOT_URL}/${SERVICE_TYPES}`);

  return {
    type: ActionTypes.FETCH_SERVICES,
    payload: request,
  };
}
