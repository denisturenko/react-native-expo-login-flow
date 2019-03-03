import {
  take, call, put,
} from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  loginRequestErrorAction,
  loginRequestSuccessAction,
} from '../actions/side_effects/auth';
import * as AuthApi from '../api/auth';
import { resetToMainRoute } from '../actions/app';


/**
 * Log in saga
 */
export const loginFlow = function* () {
  while (true) {
    const request = yield take(LOGIN_REQUEST);
    const { login, password } = request.payload;
    try {
      const response = yield call(AuthApi.login, login, password);
      yield put(loginRequestSuccessAction(response));
      yield put(resetToMainRoute());
    } catch (error) {
      yield put(loginRequestErrorAction(401, error.message));
    }
  }
};
