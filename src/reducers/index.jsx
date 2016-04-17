import { combineReducers } from 'redux';
import serviceReducer from './service';

const rootReducer = combineReducers({
  serviceReducer,
});

export default rootReducer;
