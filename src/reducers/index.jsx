import { combineReducers } from 'redux';
import serviceReducer from './service';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  serviceReducer,
  form: formReducer,
});

export default rootReducer;
