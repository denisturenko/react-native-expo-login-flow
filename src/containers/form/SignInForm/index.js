import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import SignInForm from '../../../components/form/SignInForm';
import { validate } from './utils';
import * as authActions from '../../../actions/side_effects/auth';
import * as authSelectors from '../../../selectors/app/auth';
import { RequestStatus, RequestStatusPropTypes } from '../../../@types/request_status';


const FORM = 'SignInForm';
const WithForm = reduxForm({ form: FORM, validate })(SignInForm);

const mapStateToProps = createStructuredSelector({
  loginRequestStatusSelector: authSelectors.loginRequestStatusSelector,
  loginRequestErrorSelector: authSelectors.loginRequestErrorSelector,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loginRequestAction: authActions.loginRequestAction,
}, dispatch);

const Container = ({
  loginRequestAction: onSubmit,
  loginRequestErrorSelector,
  loginRequestStatusSelector,
}) => {
  console.log('---------', loginRequestErrorSelector, loginRequestStatusSelector);
  return (
    <WithForm
      onSubmit={({ login, password }) => onSubmit(login, password)}
      requestError={!_.isEmpty(loginRequestErrorSelector) && loginRequestStatusSelector === RequestStatus.FINISHED}
    />
  );
};

Container.propTypes = {
  loginRequestAction: PropTypes.func.isRequired,
  loginRequestErrorSelector: PropTypes.shape({
    code: PropTypes.number.isRequired,
    error: PropTypes.string.isRequired,
  }),
  loginRequestStatusSelector: RequestStatusPropTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
