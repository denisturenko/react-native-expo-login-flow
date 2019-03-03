import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { View } from 'react-native';
import { root, br } from './styles';
import RFTRadio from '../../radio/RFRadio';
import CustomButton from '../../buttons/CustomButton';

const SignUpForm1 = ({ handleSubmit }) => (
  <View style={root.container}>
    <Field
      name="isStressful"
      label="Currently, is there any stressful situation that needs to be managed?"
      component={RFTRadio}
    />
    <View style={br.style} />
    <View>
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
