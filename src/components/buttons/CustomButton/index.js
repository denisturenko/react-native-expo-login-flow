import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native';
import styles from './styles';
import { ButtonType, ButtonTypePropType } from '../../../@types/button_type';

const CustomButton = ({ type, title, onPress }) => {
  const color = type === ButtonType.PRIMARY
    ? styles.primary.backgroundColor
    : styles.secondary.backgroundColor;
  return (
    <Button
      color={color}
      title={title}
      onPress={onPress}
    />
  );
};

CustomButton.propTypes = {
  type: ButtonTypePropType,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

CustomButton.defaultProps = {
  type: ButtonType.PRIMARY,
  title: '',
};

export default CustomButton;
