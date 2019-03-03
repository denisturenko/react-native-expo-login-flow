import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { View, Button, Text } from 'react-native';
import { root, br, errorBlock } from './styles';
import RFTextInput from '../../inputs/RFTextInput';

const SignInForm = ({ handleSubmit, requestError }) => (
  <View style={root.container}>
    <View>
      {!!requestError && <Text style={errorBlock.style}>Login or password is incorrect</Text>}
    </View>
    <View style={br.style} />
    <Field
      name="login"
      label="Name"
      component={RFTextInput}
    />
    <View style={br.style} />
    <Field
      name="password"
      label="Password"
      secureTextEntry
      component={RFTextInput}
    />
    <View style={br.style} />
    <View>
      <Button
        color="#841584"
        title="SIGN IN"
        onPress={handleSubmit}
      />
    </View>
  </View>
);

SignInForm.propTypes = {
  requestError: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
