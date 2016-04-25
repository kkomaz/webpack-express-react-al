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

export function createMovie(props) {
  const url = `${ROOT_URL}/movies`;
  const requestParams = props;

  return function(dispatch) {
    axios.post(url, requestParams)
    .then((response) => {
      console.log('success');
      dispatch(createMovieSuccess(response));
    })
    .catch((error) => {
      console.log('failure');
      dispatch(createMovieFail(error));
    })
  }
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

function createMovieSuccess(response) {
  return {
    type: ActionTypes.CREATE_MOVIE_SUCCESS,
    payload: response,
  };
}
