import PropTypes from 'prop-types';
import React from 'react';
import * as _ from 'lodash';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { View, Text } from 'react-native';
import styles from './styles';

const RFRadio = ({
  label,
  radioProps,
  input: {
    onChange, value,
  },
}) => (
  <View>
    <Text style={styles.labelStyle}>{label}</Text>
    <RadioForm
      formVertical
    >
      {radioProps.map((obj, i) => (
        <RadioButton labelHorizontal key={i}>
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={obj.value === value}
            onPress={onChange}
            borderWidth={1}
            selectedButtonColor={styles.radio.color}
            buttonColor={styles.radio.color}
            buttonSize={10}
            buttonOuterSize={20}
            buttonStyle={{}}
            buttonWrapStyle={{ marginLeft: 10, marginTop: 10 }}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal
            onPress={onChange}
            labelWrapStyle={{ marginTop: 10 }}
          />
        </RadioButton>
      ))}

    </RadioForm>
    {/* <RadioForm
      radio_props={radioProps}
      initial={_.findIndex(radioProps, ['value', value])}
      selectedButtonColor={styles.radio.color}
      buttonColor={styles.radio.color}
      buttonWrapStyle={{marginTop: 20, paddingTop: 20}}
      onPress={onChange}
    /> */}
  </View>
);


RFRadio.propTypes = {
  label: PropTypes.string,
  radioProps: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
  })),
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]).isRequired,
  }).isRequired,
};

RFRadio.defaultProps = {
  label: '',
  radioProps: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
};


export default RFRadio;
