import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import SignUpForm1 from '../../../components/form/SignUpForm1';
import { validate } from './utils';
import { fieldNames } from '../../../constants/forms/sign_up';


const FORM = 'SignUpForm';
const WithForm = reduxForm({ form: FORM, validate })(SignUpForm1);

const mapStateToProps = createStructuredSelector({
  initialValues: () => ({
    /**
     *  Prefill data for testing
      */
    [fieldNames.LOGIN]: 'user@site.com',
    [fieldNames.BIRTH_DAY]: '25.11.1980',
    [fieldNames.FIRST_NAME]: 'Denis',
    [fieldNames.LAST_NAME]: 'Turenko',
    [fieldNames.PASSWORD]: '121212',
    [fieldNames.PASSWORD2]: '121212',
    [fieldNames.OCCUPATION]: 'programmer',

    [fieldNames.IS_WORRY_ABOUT_PEOPLE]: false,
    [fieldNames.IS_UNHAPPY]: false,

    [fieldNames.IS_STRESSFUL]: false,
    [fieldNames.IS_DIFFICULT_TO_RECOVER]: false,
    [fieldNames.IS_MEDICAL_WORRY]: false,


  }),
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const Container = ({ initialValues, onSubmit }) => (
  <WithForm
    initialValues={initialValues}
    onSubmit={onSubmit}
  />
);

Container.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
