import PropTypes from 'prop-types';

export const ButtonType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export const ButtonTypePropType = PropTypes.oneOf([
  ButtonType.PRIMARY,
  ButtonType.SECONDARY,
]);
