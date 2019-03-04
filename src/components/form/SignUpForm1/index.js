import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { View } from 'react-native';
import * as _ from 'lodash';
import SignUpBreadCrumbs from '../../visual/SignUpBreadCrumbs/index';
import { root, br } from './styles';
import CustomButton from '../../buttons/CustomButton';
import RFTextInput from '../../inputs/RFTextInput';
import RFPicker from '../../pickers/CustomPicker';
import RFDatePicker from '../../pickers/RFDatePicker';

import { fieldNames } from '../../../constants/forms/sign_up';
import { ButtonType } from '../../../@types/button_type';

const SignUpForm1 = ({ handleSubmit }) => (
  <View style={root.container}>
    <SignUpBreadCrumbs />
    <View style={br.style} />
    <Field
      name={fieldNames.LOGIN}
      label="Email"
      component={RFTextInput}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.BIRTH_DAY}
      label="Day of birth"
      placeholder="DD.MM.YYYY"
      component={RFDatePicker}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.FIRST_NAME}
      label="First Name"
      component={RFTextInput}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.LAST_NAME}
      label="Last Name"
      component={RFTextInput}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.PASSWORD}
      label="Password"
      secureTextEntry
      component={RFTextInput}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.PASSWORD2}
      label="Confirm Password"
      secureTextEntry
      component={RFTextInput}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.OCCUPATION}
      label="Main Occupation"
      options={[
        { label: 'Student', value: 'student' },
        { label: 'Teacher', value: 'teacher' },
        { label: 'Programmer', value: 'programmer' },
        { label: 'Manager', value: 'manager' },
      ]}
      component={RFPicker}
    />
    <View style={br.style} />
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <CustomButton
        disabled
        type={ButtonType.SECONDARY}
        title="Back"
        onPress={_.noop}
      />
      <CustomButton
        title="Next"
        onPress={handleSubmit}
      />
    </View>
  </View>
);

SignUpForm1.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


export default SignUpForm1;
