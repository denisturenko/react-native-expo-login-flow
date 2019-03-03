import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_ERROR,
  LOGIN_REQUEST_SUCCESS,
} from '../../actions/side_effects/auth';
import { RequestStatus } from '../../@types/request_status';

const INITIAL_STATE = {
  authToken: '',
  loginRequestStatus: RequestStatus.NOT_STARTED,
  loginRequestResult: null,
  LoginRequestError: null,
};

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginRequestStatus: RequestStatus.IN_PROGRESS,
        loginRequestResult: INITIAL_STATE.loginRequestResult,
        loginRequestError: INITIAL_STATE.LoginRequestError,
      };
    case LOGIN_REQUEST_ERROR:
      return {
        ...state,
        loginRequestStatus: RequestStatus.FINISHED,
        loginRequestError: action.payload,
        loginRequestResult: INITIAL_STATE.loginRequestResult,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loginRequestStatus: RequestStatus.FINISHED,
        loginRequestError: INITIAL_STATE.LoginRequestError,
        loginRequestResult: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
