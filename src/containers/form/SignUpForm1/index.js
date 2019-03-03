import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import SignUpForm1 from '../../../components/form/SignUpForm1';
import { validate } from './utils';


const FORM = 'SignUpForm';
const WithForm = reduxForm({ form: FORM, validate })(SignUpForm1);

const mapStateToProps = createStructuredSelector({
  initialValues: () => ({
    isStressful: true,
  }),
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const Container = ({ initialValues }) => (
  <WithForm
    initialValues={initialValues}
    onSubmit={values => console.log(values)}
  />
);

Container.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
