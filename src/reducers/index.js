import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import task from './taskReducer';

const rootReducer = combineReducers({
  form: formReducer,
  task
});

export default rootReducer;