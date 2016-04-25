import axios from 'axios';
import * as ActionTypes from '../constants/action_types';

const ROOT_URL = `http://localhost:3000/api`

export function fetchMovies() {
  const url = `${ROOT_URL}/movies`;
  return function(dispatch){
    axios.get(url)
    .then((response) => {
      dispatch(fetchMoviesSucess(response));
    });
  };
}

/**
 * Helper Functions
 */

function fetchMoviesSucess(response) {
  return {
    type: ActionTypes.FETCH_MOVIES,
    payload: response,
  };
}
