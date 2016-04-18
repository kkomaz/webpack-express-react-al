import * as ActionTypes from '../constants/action_types';

const INITIAL_STATE = { services: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SERVICES:
      return { ...state, services: action.payload.data.data };
    default:
      return state;
  }
}
