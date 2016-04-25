import { combineReducers } from 'redux';
import MovieReducer from './movies';

const rootReducer = combineReducers({
  MovieReducer,
});

export default rootReducer;
