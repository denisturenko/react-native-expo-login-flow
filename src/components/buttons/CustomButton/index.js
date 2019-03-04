import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';
import { ButtonType, ButtonTypePropType } from '../../../@types/button_type';

const CustomButton = ({
  type, title, onPress, disabled,
}) => {
  const color = type === ButtonType.PRIMARY
    ? styles.primary.backgroundColor
    : styles.secondary.backgroundColor;
  const buttonType = type === ButtonType.PRIMARY ? 'solid' : 'clear';
  return (
    <Button
      disabled={disabled}
      buttonStyle={{ backgroundColor: color }}
      disabledTitleStyle={{ color: 'silver' }}
      type={buttonType}
      title={title}
      onPress={onPress}
    />
  );
};

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  type: ButtonTypePropType,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

CustomButton.defaultProps = {
  disabled: false,
  type: ButtonType.PRIMARY,
  title: '',
};

export default CustomButton;
