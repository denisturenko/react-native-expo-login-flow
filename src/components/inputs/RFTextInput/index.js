import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const RFTextInput = ({
  label, placeholder, secureTextEntry, input: {
    onBlur, onChange, onFocus, value,
  },
  meta: { error, touched, valid },
}) => (
  <View>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
      onChangeText={onChange}
      value={value}
      style={styles.inputContainerStyle}
    />
    {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
  </View>
);


RFTextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
  }).isRequired,
};

RFTextInput.defaultProps = {
  label: '',
  placeholder: '',
  secureTextEntry: false,
};


export default RFTextInput;
