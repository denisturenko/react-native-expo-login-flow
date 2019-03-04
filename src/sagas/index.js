import {
  fork, takeEvery, takeLatest, all,
} from 'redux-saga/effects';

import {
  LOAD_APP_RESOURCES,
} from '../actions';

import {
  handleAppLoading,
} from './app_loading';

import {
  loginFlow,
  regestryFlow,
} from './auth';


const root = function* root() {
  yield all([
    takeLatest(LOAD_APP_RESOURCES, handleAppLoading),
    fork(loginFlow),
    fork(regestryFlow),
  ]);
};

export default root;
