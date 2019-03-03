import PropTypes from 'prop-types';

export const RequestStatus = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED',
};

export const RequestStatusPropTypes = PropTypes.oneOf([
  RequestStatus.NOT_STARTED,
  RequestStatus.IN_PROGRESS,
  RequestStatus.FINISHED,
]);
