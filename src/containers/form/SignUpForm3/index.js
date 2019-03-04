import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import SignUpForm3 from '../../../components/form/SignUpForm3';
import { registryRequestAction } from '../../../actions/side_effects/auth';


const FORM = 'SignUpForm';
const WithForm = reduxForm({ form: FORM })(SignUpForm3);

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  registryRequestAction,
}, dispatch);

const Container = ({ onClickBack, registryRequestAction: onSubmit }) => (
  <WithForm
    onSubmit={onSubmit}
    onClickBack={onClickBack}
  />
);

Container.propTypes = {
  onClickBack: PropTypes.func.isRequired,
  registryRequestAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
