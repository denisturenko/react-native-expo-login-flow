import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text } from 'react-native';
import styles from './styles';

const RFDatePicker = ({
  label, placeholder, input: {
    onChange, value,
  },
  meta: { error, touched, valid },
}) => (
  <View>
    <Text style={styles.labelStyle}>{label}</Text>
    <DatePicker
      style={styles.inputStyle}
      date={value}
      mode="date"
      placeholder={placeholder}
      format="DD.MM.YYYY"
      minDate="1900-01-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      customStyles={{
        dateInput: {
          borderWidth: 0,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        },
      }}
      onDateChange={onChange}
    />
    {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
  </View>
);


RFDatePicker.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
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

RFDatePicker.defaultProps = {
  label: '',
  placeholder: '',
};


export default RFDatePicker;
