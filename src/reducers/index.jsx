import { combineReducers } from 'redux';
import serviceReducer from './service';
import assistantRequestReducer from './assistance_request';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  serviceReducer,
  assistantRequestReducer,
  form: formReducer,
});

export default rootReducer;
