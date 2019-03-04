import PropTypes from 'prop-types';
import React from 'react';
import {
  View, Text, Picker,
} from 'react-native';
import styles from './styles';

const RFPicker = ({
  label,
  options,
  input: { onChange, value },
  meta: { error, touched, valid },
}) => (
  <View>
    <Text style={styles.labelStyle}>{label}</Text>
    <Picker
      selectedValue={value}
      style={styles.pickerStyle}
      onValueChange={onChange}
    >
      {options.map(({ label: optionLabel, value: optionValue }, index) => (
        <Picker.Item key={index} label={optionLabel} value={optionValue} />
      ))}
    </Picker>

    {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
  </View>
);


RFPicker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
  })),
  label: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
  }).isRequired,
};

RFPicker.defaultProps = {
  label: '',
  options: [],
};


export default RFPicker;
