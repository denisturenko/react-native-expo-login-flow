import { createSelector } from 'reselect';

const selectDomain = state => state.auth || {};

export const loginRequestStatusSelector = createSelector(
  selectDomain, ({ loginRequestStatus }) => loginRequestStatus,
);
export const loginRequestErrorSelector = createSelector(
  selectDomain, ({ loginRequestError }) => loginRequestError,
);
export const loginRequestResultSelector = createSelector(
  selectDomain, ({ loginRequestStatus }) => loginRequestStatus,
);
