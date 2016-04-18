import * as ActionTypes from '../constants/action_types';

const INITIAL_STATE = { response: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.POST_ASSISTANCE_REQUEST:
      return { ...state, response: action.payload };
    case ActionTypes.POST_ASSISTANCE_REQUEST_FAIL:
      return { ...state, response: action.payload };
    default:
      return state;
  }
}
