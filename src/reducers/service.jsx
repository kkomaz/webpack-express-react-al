import * as ActionTypes from '../constants/action_types';

const INITIAL_STATE = { services: [] };

export default function (state = INITIAL_STATE, action) {
  console.log(action.type);

  switch (action.type) {
    case ActionTypes.FETCH_SERVICES:
      return { ...state, services: action.payload.data.data };
    default:
      return state;
  }
}
