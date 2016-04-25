import * as ActionTypes from '../constants/action_types';

const INITIAL_STATE = { movies: [], movie: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES:
      return { ...state, movies: action.payload.data };
    default:
      return state;
  }
}
