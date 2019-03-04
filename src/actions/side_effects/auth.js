
const pfx = 'side_effects/auth';

export const LOGIN_REQUEST = `${pfx}/LOGIN_REQUEST`;
export const LOGIN_REQUEST_ERROR = `${pfx}/LOGIN_REQUEST_ERROR`;
export const LOGIN_REQUEST_SUCCESS = `${pfx}/LOGIN_REQUEST_SUCCESS`;

export const REGISTRY_REQUEST = `${pfx}/REGISTRY_REQUEST`;
export const REGISTRY_REQUEST_ERROR = `${pfx}/REGISTRY_REQUEST_ERROR`;
export const REGISTRY_REQUEST_SUCCESS = `${pfx}/REGISTRY_REQUEST_SUCCESS`;

export const LOGOUT = `${pfx}/LOGOUT`;


export const loginRequestAction = (login, password) => ({
  type: LOGIN_REQUEST,
  payload: { login, password },
});

export const loginRequestErrorAction = (code, error) => ({
  type: LOGIN_REQUEST_ERROR,
  payload: { code, error },
});

export const loginRequestSuccessAction = response => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: { response },
});

export const registryRequestAction = ({
  login,
  password,
  birthDay,
  firstName,
  lastName,
  occupation,
  isUnhappy,
  isWorryAboutPeople,
  isDifficultToRecover,
  isMedicalWorry,
  isStressful,
}) => ({
  type: REGISTRY_REQUEST,
  payload: {
    login,
    password,
    birthDay,
    firstName,
    lastName,
    occupation,
    isUnhappy,
    isWorryAboutPeople,
    isDifficultToRecover,
    isMedicalWorry,
    isStressful,
  },
});

export const registryRequestErrorAction = (code, error) => ({
  type: REGISTRY_REQUEST_ERROR,
  payload: { code, error },
});

export const registryRequestSuccessAction = response => ({
  type: REGISTRY_REQUEST_SUCCESS,
  payload: { response },
});

export const logoutAction = () => ({
  type: LOGOUT,
});
