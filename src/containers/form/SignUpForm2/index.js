import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import SignUpForm2 from '../../../components/form/SignUpForm2';


const FORM = 'SignUpForm';
const WithForm = reduxForm({ form: FORM })(SignUpForm2);

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const Container = ({ onSubmit, onClickBack }) => (
  <WithForm
    onSubmit={onSubmit}
    onClickBack={onClickBack}
  />
);

Container.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClickBack: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
