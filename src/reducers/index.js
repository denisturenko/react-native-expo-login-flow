import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  appLoading,
} from './ui';
import {
  app,
  nav,
  auth,
} from './app';
import {
} from './domain';


export default combineReducers({
  form: formReducer,
  ui: combineReducers({
    appLoading,
  }),
  app,
  nav,
  auth,
});
